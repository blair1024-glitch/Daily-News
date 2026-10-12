#!/usr/bin/env node
/**
 * fetch-active-etf.mjs — 台股主動式ETF每日持股明細抓取與增減比對
 * ------------------------------------------------------------------
 * 背景：
 *   台灣主動式ETF（00980A、00981A...）沒有單一的證交所官方API可以
 *   抓到每日持股明細，各投信揭露格式都不同（JSON AJAX、Excel、靜態
 *   HTML、JS渲染的SPA）。經探測（見 scripts/probe-active-etf.mjs 的
 *   log），MoneyDJ（www.moneydj.com）的ETF持股頁對所有主動式ETF都用
 *   同一套靜態HTML表格模板，欄位固定為「個股名稱／投資比例(%)／持有
 *   股數」，是目前唯一能用同一套解析邏輯覆蓋所有基金的來源。
 *
 *   這是第三方資料來源，不是投信官網或證交所原始揭露，請在 dashboard
 *   引用時明確標註來源與資料日期。
 *
 * 設計原則（與 fetch-tw-market.mjs 一致）：
 *   1. 零相依，只用 Node 22 內建 fetch。
 *   2. 每檔基金獨立 try/catch，單一基金失敗不影響其他基金。
 *   3. 絕不編數字——解析不到就是 ok:false，不留舊值。
 *   4. 只保留「今天」與「上一次成功抓到的」兩份快照做增減比對，
 *      不累積完整歷史（避免檔案無限增長）。
 *
 * 用法：node scripts/fetch-active-etf.mjs
 */

import { writeFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, "data/active-etf.js");
const SNAPSHOT = resolve(ROOT, "data/active-etf-snapshot.json");

const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) " +
  "Chrome/126.0 Safari/537.36 (+Daily-News dashboard bot)";
const TIMEOUT_MS = 20_000;

/**
 * 候選代號清單。台灣主動式ETF仍在持續新增，這份清單需要人工維護——
 * 新基金上市後，若 MoneyDJ 已有頁面且主要投資台股，加進這裡即可自動
 * 開始追蹤。對應不到基金的代號會自動標記 ok:false，不影響其他代號。
 *
 * 明確排除以下已確認為「海外為主」的主動式ETF（不是台股型，加進來
 * 會混淆方向/集中性統計，經查證後排除）：
 *   00983A 主動中信ARK創新（美股為主，持股特斯拉、Shopify等）
 *   00986A 主動台新龍頭成長（全球龍頭股，美股占比約76%）
 *   00990A 主動元大AI新經濟（美股約66%、台股16%、日股7%）
 *   00997A 主動群益美國增長（美股為主）
 */
const CANDIDATES = [
  "00403A", "00980A", "00981A", "00982A", "00984A",
  "00985A", "00987A", "00991A", "00992A",
  "00993A", "00994A", "00995A"
];

function taipeiToday() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Taipei" }).replace(/-/g, "");
}

async function fetchText(url, timeoutMs = TIMEOUT_MS) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { "User-Agent": UA, Accept: "*/*" }
    });
    const text = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return text;
  } finally {
    clearTimeout(timer);
  }
}

/** 在一串 <table>...</table> 裡找 header 同時含三個關鍵字的那張表。 */
function findHoldingTable(html) {
  const tables = html.match(/<table[\s\S]*?<\/table>/gi) || [];
  for (const t of tables) {
    const headerRow = (t.match(/<tr[\s\S]*?<\/tr>/i) || [""])[0];
    if (/個股名稱/.test(headerRow) && /投資比例/.test(headerRow) && /持有股數/.test(headerRow)) {
      return t;
    }
  }
  return null;
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, "").trim();
}

function num(s) {
  if (s == null) return null;
  const cleaned = String(s).replace(/[,\s]/g, "");
  if (!/^-?\d+(\.\d+)?$/.test(cleaned)) return null;
  return Number(cleaned);
}

/** 解析個股持股表格：每列是 <tr><td>名稱(代號.TW)</td><td>比例</td><td>股數</td></tr> */
function parseHoldingRows(tableHtml) {
  const rows = tableHtml.match(/<tr[\s\S]*?<\/tr>/gi) || [];
  const out = [];
  for (const row of rows.slice(1)) {
    // 跳過表頭
    const cells = row.match(/<td[\s\S]*?<\/td>/gi);
    if (!cells || cells.length < 3) continue;
    const nameCell = stripTags(cells[0]);
    const codeMatch = cells[0].match(/etfid=(\d{4,6})\.TW/i);
    const nameMatch = nameCell.match(/^(.*?)\(([\dA-Z]+)\.TW\)$/);
    const name = nameMatch ? nameMatch[1] : nameCell;
    const code = codeMatch ? codeMatch[1] : (nameMatch ? nameMatch[2] : null);
    const weightPct = num(stripTags(cells[1]));
    const shares = num(stripTags(cells[2]));
    if (code == null || weightPct == null) continue;
    out.push({ code, name, weightPct, shares });
  }
  return out;
}

/** 從頁面抓基金中文簡稱（<title>XXX-ETF持股狀況 - MoneyDJ理財網</title>） */
function parseFundName(html) {
  const m = html.match(/<title>(.*?)-ETF持股狀況/);
  return m ? m[1].trim() : null;
}

async function fetchOneEtf(code) {
  const url = `https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=${code.toLowerCase()}.tw`;
  const html = await fetchText(url);
  const fundName = parseFundName(html);
  if (!fundName) throw new Error("頁面沒有對應的基金（可能代號不存在或已下市）");
  const table = findHoldingTable(html);
  if (!table) throw new Error("找不到持股明細表格（頁面格式可能已變動）");
  const holdings = parseHoldingRows(table);
  if (!holdings.length) throw new Error("持股表格存在但解析出 0 筆資料");
  return { code, fundName, source: url, holdings };
}

/** 比對今天與上次快照，算出每檔基金、每支個股的增減。 */
function diffHoldings(prevFund, prevDate, currHoldings) {
  if (!prevFund || !prevFund.holdings) return null;
  const prevByCode = new Map(prevFund.holdings.map((h) => [h.code, h]));
  const changes = [];
  for (const curr of currHoldings) {
    const prev = prevByCode.get(curr.code);
    if (!prev) {
      changes.push({ code: curr.code, name: curr.name, action: "新增", sharesChange: curr.shares, weightChange: curr.weightPct });
      continue;
    }
    const sharesChange = curr.shares != null && prev.shares != null ? curr.shares - prev.shares : null;
    const weightChange = curr.weightPct != null && prev.weightPct != null ? Math.round((curr.weightPct - prev.weightPct) * 100) / 100 : null;
    if (sharesChange) {
      changes.push({ code: curr.code, name: curr.name, action: sharesChange > 0 ? "增持" : "減持", sharesChange, weightChange });
    }
  }
  const currCodes = new Set(currHoldings.map((h) => h.code));
  for (const prev of prevFund.holdings) {
    if (!currCodes.has(prev.code)) {
      changes.push({ code: prev.code, name: prev.name, action: "剔除", sharesChange: -prev.shares, weightChange: -prev.weightPct });
    }
  }
  return { prevAsOf: prevDate, changes };
}

/** 跨基金彙總：方向（增減家數）與集中性（買超/賣超集中在哪幾支股票）。 */
function aggregate(funds) {
  const perStock = new Map(); // code -> { name, fundsUp, fundsDown, totalSharesChange }
  let fundsWithDiff = 0;

  for (const f of Object.values(funds)) {
    if (!f.ok || !f.diff) continue;
    fundsWithDiff++;
    for (const c of f.diff.changes) {
      if (!c.sharesChange) continue;
      const key = c.code;
      if (!perStock.has(key)) perStock.set(key, { code: c.code, name: c.name, fundsUp: 0, fundsDown: 0, totalSharesChange: 0 });
      const s = perStock.get(key);
      if (c.sharesChange > 0) s.fundsUp++;
      else if (c.sharesChange < 0) s.fundsDown++;
      s.totalSharesChange += c.sharesChange;
    }
  }

  const stocks = [...perStock.values()];
  const topBought = stocks.filter((s) => s.fundsUp > 0).sort((a, b) => b.fundsUp - a.fundsUp || b.totalSharesChange - a.totalSharesChange).slice(0, 10);
  const topSold = stocks.filter((s) => s.fundsDown > 0).sort((a, b) => b.fundsDown - a.fundsDown || a.totalSharesChange - b.totalSharesChange).slice(0, 10);

  // 集中性：當天「有增減動作」的個股中，前5檔佔全部增減個股數的比例——
  // 比例越高代表買賣行為集中在少數股票；越低代表分散在很多標的。
  const totalActiveStocks = stocks.length;
  const concentrationTop5Count = stocks
    .slice()
    .sort((a, b) => Math.abs(b.fundsUp - b.fundsDown) - Math.abs(a.fundsUp - a.fundsDown))
    .slice(0, 5)
    .reduce((acc, s) => acc + s.fundsUp + s.fundsDown, 0);
  const totalActionCount = stocks.reduce((acc, s) => acc + s.fundsUp + s.fundsDown, 0);
  const concentrationPct = totalActionCount > 0 ? Math.round((concentrationTop5Count / totalActionCount) * 10000) / 100 : null;

  return {
    fundsWithDiff,
    totalActiveStocks,
    topBought,
    topSold,
    concentrationPct,
    concentrationNote: "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  };
}

async function main() {
  console.log(`=== 主動式ETF持股抓取 === 候選 ${CANDIDATES.length} 檔`);
  const today = taipeiToday();

  let prevSnapshot = { date: null, funds: {} };
  if (existsSync(SNAPSHOT)) {
    try {
      prevSnapshot = JSON.parse(readFileSync(SNAPSHOT, "utf8"));
    } catch (e) {
      console.log(`讀取舊快照失敗（視為沒有舊資料）：${e.message}`);
    }
  }
  const isNewDay = prevSnapshot.date !== today;
  console.log(`今天：${today}，上次快照日期：${prevSnapshot.date || "（無）"}，${isNewDay ? "視為新的一天" : "同一天重跑"}`);

  const funds = {};
  for (const code of CANDIDATES) {
    try {
      const { fundName, source, holdings } = await fetchOneEtf(code);
      const prevFund = prevSnapshot.funds[code];
      // 只有「換了一個新的交易日」才拿舊快照來做增減比對，同一天重跑不要跟自己比。
      const diff = isNewDay ? diffHoldings(prevFund, prevSnapshot.date, holdings) : null;
      funds[code] = { ok: true, fundName, source, fetchedDate: today, holdings, diff };
      console.log(`[${code}] → OK ${fundName}，${holdings.length} 筆持股${diff ? `，${diff.changes.length} 筆較上次有異動` : "（無上次快照可比對）"}`);
    } catch (err) {
      funds[code] = { ok: false, error: String(err.message || err) };
      console.log(`[${code}] → FAIL ${err.message || err}`);
    }
  }

  const okCount = Object.values(funds).filter((f) => f.ok).length;
  const summary = aggregate(funds);

  const payload = {
    fetchedAt: new Date().toISOString(),
    date: today,
    source: "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
    okCount,
    totalCount: CANDIDATES.length,
    funds,
    summary
  };

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(
    OUT,
    "/**\n" +
      " * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。\n" +
      " * 產生器：scripts/fetch-active-etf.mjs\n" +
      " *\n" +
      " * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面\n" +
      " *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。\n" +
      " * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。\n" +
      " */\n" +
      "window.ACTIVE_ETF = " +
      JSON.stringify(payload, null, 2) +
      ";\n",
    "utf8"
  );

  // 快照只保留「今天」這一份，供明天比對用——不是給 dashboard 讀的。
  writeFileSync(
    SNAPSHOT,
    JSON.stringify({ date: today, funds: Object.fromEntries(Object.entries(funds).map(([k, v]) => [k, v.ok ? { holdings: v.holdings } : undefined]).filter(([, v]) => v)) }, null, 0),
    "utf8"
  );

  console.log(`\n=== 完成：${okCount}/${CANDIDATES.length} 檔成功 ===`);
  console.log(`已寫入 ${OUT}`);
}

main().catch((err) => {
  console.error("腳本本身失敗（非資料來源問題）：", err);
  process.exit(1);
});
