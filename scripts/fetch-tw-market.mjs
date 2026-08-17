#!/usr/bin/env node
/**
 * fetch-tw-market.mjs — 台股盤後數據抓取
 * ------------------------------------------------------------------
 * 在 GitHub Actions 上執行（runner 沒有出網限制），把證交所／櫃買／
 * 期交所的公開數據抓下來寫成 data/market-auto.js，供每日 dashboard
 * 更新時讀用。
 *
 * 設計原則：
 *   1. 零相依 —— 只用 Node 22 內建 fetch，與專案其他部分一致。
 *   2. 每個來源獨立 try/catch —— 單一端點失敗不影響其他欄位，
 *      錯誤訊息會寫進輸出檔，讓隔天看得到「為什麼沒有」。
 *   3. 診斷優先 —— 每個請求都印出 status 與回應片段到 log，
 *      端點格式一旦改變，從 Actions log 就能直接看出來。
 *   4. 絕不編數字 —— 抓不到就是 ok:false，不留舊值、不推估。
 *
 * 用法：
 *   node scripts/fetch-tw-market.mjs            # 抓今天（台灣時間）
 *   node scripts/fetch-tw-market.mjs 20260814   # 抓指定日期
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, "data/market-auto.js");

const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) " +
  "Chrome/126.0 Safari/537.36 (+Daily-News dashboard bot)";
const TIMEOUT_MS = 25_000;

// ── 日期工具（一律以台灣時間為準）────────────────────────────────
function taipeiNow() {
  return new Date(Date.now() + 8 * 3600 * 1000); // UTC+8
}
function ymd(d) {
  return d.toISOString().slice(0, 10).replace(/-/g, "");
}
function slashed(s) {
  return `${s.slice(0, 4)}/${s.slice(4, 6)}/${s.slice(6, 8)}`;
}

// ── 抓取工具 ────────────────────────────────────────────────────
const TWSE_NO_DATA = /沒有符合條件的資料/;

async function request(label, url, init = {}, timeoutMs = TIMEOUT_MS) {
  const started = Date.now();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      ...init,
      signal: ctrl.signal,
      headers: { "User-Agent": UA, Accept: "*/*", ...(init.headers || {}) }
    });
    const text = await res.text();
    const ms = Date.now() - started;
    console.log(
      `[${label}] HTTP ${res.status} ${ms}ms ${text.length}B :: ` +
        text.slice(0, 300).replace(/\s+/g, " ")
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return text;
  } finally {
    clearTimeout(timer);
  }
}

async function getJson(label, url, init, timeoutMs) {
  const text = await request(label, url, init, timeoutMs);
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`回應不是 JSON（前 120 字：${text.slice(0, 120)}）`);
  }
}

/** 期交所 CSV 是 Big5(MS950)，必須用位元組解碼，否則表頭全是亂碼。 */
async function requestBig5(label, url, init = {}) {
  const started = Date.now();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      ...init,
      signal: ctrl.signal,
      headers: { "User-Agent": UA, Accept: "*/*", ...(init.headers || {}) }
    });
    const buf = await res.arrayBuffer();
    let text;
    try {
      text = new TextDecoder("big5").decode(buf);
    } catch {
      text = new TextDecoder("utf-8").decode(buf); // 極少數環境無 Big5 支援
    }
    console.log(
      `[${label}] HTTP ${res.status} ${Date.now() - started}ms ${buf.byteLength}B :: ` +
        text.slice(0, 300).replace(/\s+/g, " ")
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return text;
  } finally {
    clearTimeout(timer);
  }
}

/** 把每個來源包起來：成功寫 value，失敗寫 error，永不 throw 出去。 */
async function collect(items, key, source, fn) {
  try {
    const value = await fn();
    if (value === null) {
      items[key] = { ok: false, source, error: "休市或無資料" };
      console.log(`[${key}] → 休市或無資料`);
    } else {
      items[key] = { ok: true, source, value };
      console.log(`[${key}] → OK ${JSON.stringify(value).slice(0, 200)}`);
    }
  } catch (err) {
    items[key] = { ok: false, source, error: String(err.message || err) };
    console.log(`[${key}] → FAIL ${err.message || err}`);
  }
}

// ── 解析工具 ────────────────────────────────────────────────────
/** "1,234,567" / "1,234.5" → number；無法解析回 null（不要回 0）。 */
function num(s) {
  if (s == null) return null;
  const cleaned = String(s).replace(/[,\s]/g, "").replace(/^\+/, "");
  if (!/^-?\d+(\.\d+)?$/.test(cleaned)) return null;
  return Number(cleaned);
}
/** 元 → 億元，保留兩位。 */
function toYi(v) {
  return v == null ? null : Math.round((v / 1e8) * 100) / 100;
}
/** 在二維表格裡找第一個欄位包含 keyword 的列。 */
function findRow(rows, keyword) {
  if (!Array.isArray(rows)) return null;
  return rows.find((r) => Array.isArray(r) && String(r[0] || "").includes(keyword)) || null;
}

// ── 各資料來源 ──────────────────────────────────────────────────

/** 集中市場融資融券餘額（TWSE MI_MARGN） */
async function twseMargin(date) {
  const url = `https://www.twse.com.tw/rwd/zh/marginTrading/MI_MARGN?date=${date}&selectType=ALL&response=json`;
  const j = await getJson("TWSE margin", url);
  if (TWSE_NO_DATA.test(JSON.stringify(j.stat || ""))) return null;

  // MI_MARGN 會回傳多張表，同時有「交易單位(張)」與「金額(仟元)」兩種彙總列。
  // 直接用第一個命中的「融資」會抓到張數而非金額，因此改為掃描所有表、
  // 用完整標籤精準比對。
  const allRows = [];
  for (const t of j.tables || []) for (const r of t.data || []) allRows.push(r);
  for (const r of j.creditList || []) allRows.push(r);
  if (!allRows.length) throw new Error("找不到任何資料列");

  const labels = allRows.map((r) => String(r[0] || "").trim());
  const rowByLabel = (re) => allRows.find((r) => re.test(String(r[0] || "")));

  // 彙總列格式：[項目, 買進, 賣出, 現金(償還)/現券, 前日餘額, 今日餘額]
  const pick = (row, transform = (v) => v) => {
    if (!row) return null;
    const prev = num(row[4]);
    const today = num(row[5]);
    if (prev == null || today == null) return null;
    const p = transform(prev);
    const t = transform(today);
    return {
      prevBalance: p,
      balance: t,
      change: Math.round((t - p) * 100) / 100,
      raw: row
    };
  };
  const round2 = (v) => Math.round(v * 100) / 100;
  const qianYuanToYi = (v) => round2(v / 1e5); // 仟元 → 億元

  const finAmount = pick(rowByLabel(/融資金額/), qianYuanToYi);
  const shortAmount = pick(rowByLabel(/融券金額/), qianYuanToYi);
  const finUnits = pick(rowByLabel(/融資\(交易單位\)|融資（交易單位）/));
  const shortUnits = pick(rowByLabel(/融券\(交易單位\)|融券（交易單位）/));

  if (!finAmount && !finUnits) throw new Error(`找不到融資彙總列，現有標籤：${labels.join("、")}`);

  return {
    date,
    // 億元 —— dashboard 直接用這組
    financingAmountYi: finAmount,
    shortSellingAmountYi: shortAmount,
    // 交易單位（張）—— 融券只有這個口徑，TWSE 未提供融券金額
    financingUnits: finUnits,
    shortSellingUnits: shortUnits,
    // 只保留彙總列標籤；個股代號有上千筆，全寫進檔案會無謂膨脹
    summaryLabels: labels.filter((l) => !/^\d/.test(l))
  };
}

/** 集中市場三大法人買賣超（TWSE BFI82U） */
async function twseInstitutional(date) {
  const url = `https://www.twse.com.tw/rwd/zh/fund/BFI82U?dayDate=${date}&type=day&response=json`;
  const j = await getJson("TWSE inst", url);
  if (TWSE_NO_DATA.test(JSON.stringify(j.stat || ""))) return null;

  const rows = j.data || [];
  if (!rows.length) throw new Error("data 為空");

  // 每列：[單位名稱, 買進金額, 賣出金額, 買賣差額]（元）
  // BFI82U 的單位名稱會拆得很細，例如：
  //   自營商(自行買賣) / 自營商(避險) / 投信 /
  //   外資及陸資(不含外資自營商) / 外資自營商 / 合計
  // 因此「自營商」「外資」都必須用加總，不能用第一個命中的列。
  const round2 = (v) => Math.round(v * 100) / 100;
  const rowsMatching = (re) =>
    rows.filter((r) => Array.isArray(r) && re.test(String(r[0] || "")));
  const sumNet = (re) => {
    const hits = rowsMatching(re);
    if (!hits.length) return null;
    const vals = hits.map((r) => toYi(num(r[3]))).filter((v) => v != null);
    return vals.length ? round2(vals.reduce((a, b) => a + b, 0)) : null;
  };
  const oneNet = (re) => {
    const r = rowsMatching(re)[0];
    return r ? toYi(num(r[3])) : null;
  };

  const dealerSelf = oneNet(/自營商\(自行買賣\)/);
  const dealerHedge = oneNet(/自營商\(避險\)/);
  // 只加總自營商的分項；若該版本只給單一「自營商」列，也會被這個 regex 涵蓋
  const dealer = sumNet(/^自營商/);
  const trust = oneNet(/^投信/);
  const foreign = sumNet(/外資/);
  const total = oneNet(/合計/);

  const checksum =
    foreign != null && trust != null && dealer != null
      ? round2(foreign + trust + dealer)
      : null;

  return {
    date,
    unit: "億元",
    foreign,
    investmentTrust: trust,
    dealer,
    dealerSelf,
    dealerHedge,
    total,
    // 供 dashboard 端做算術交叉驗證：checksum 應等於 total（容許進位誤差）
    checksum,
    checksumDelta: checksum != null && total != null ? round2(checksum - total) : null,
    // 保留原始列名，方便端點改版時從 Actions log 對照
    unitNames: rows.map((r) => String(r[0] || "").trim())
  };
}

/** 集中市場每日成交統計（TWSE FMTQIK）—— 取當日成交金額與加權指數收盤 */
async function twseDailyMarket(date) {
  const url = `https://www.twse.com.tw/rwd/zh/afterTrading/FMTQIK?date=${date}&response=json`;
  const j = await getJson("TWSE FMTQIK", url);
  if (TWSE_NO_DATA.test(JSON.stringify(j.stat || ""))) return null;

  const rows = j.data || [];
  if (!rows.length) throw new Error("data 為空");

  // FMTQIK 回傳整月，取最後一列（或日期相符的那列）
  const want = `${Number(date.slice(0, 4)) - 1911}/${date.slice(4, 6)}/${date.slice(6, 8)}`;
  const row = rows.find((r) => String(r[0]).trim() === want) || rows[rows.length - 1];
  // 每列：[日期, 成交股數, 成交金額, 成交筆數, 發行量加權股價指數, 漲跌點數]
  return {
    date,
    rocDate: String(row[0]).trim(),
    turnoverYi: toYi(num(row[2])),
    taiexClose: num(row[4]),
    taiexChange: num(row[5])
  };
}

/**
 * 櫃買中心 OpenAPI —— 取櫃買指數點位，並由個股報價彙總成交金額。
 * 指數端點的路徑會隨櫃買改版變動，因此逐一嘗試並把結果記進 log。
 */
async function tpexOtc(date) {
  const notes = [];

  // ① 先做已驗證可用的：個股報價彙總 → 櫃買成交金額。
  //    這份 payload 有上萬筆，需要較長的 timeout，且必須優先執行，
  //    不能被後面的探測性請求排擠掉（上一版就是這樣超時的）。
  let turnover = null;
  let quoteCount = null;
  try {
    const q = await getJson(
      "TPEx quotes",
      "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_daily_close_quotes",
      undefined,
      90_000
    );
    if (Array.isArray(q) && q.length) {
      quoteCount = q.length;
      const sum = q.reduce((acc, r) => acc + (num(r.TransactionAmount ?? r.TradeValue) || 0), 0);
      turnover = sum > 0 ? toYi(sum) : null;
    }
  } catch (e) {
    notes.push(`quotes → ${String(e.message).slice(0, 120)}`);
  }

  // ② 再試指數點位。TPEx 的 OpenAPI 目錄是 JS 渲染的（原始碼無資料集名稱），
  //    swagger.json 回 520，因此只能試少數幾個候選，且用短 timeout
  //    避免拖累整體。目前尚未找到可用端點——見 README 的已知限制。
  let index = null;
  for (const url of [
    "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_daily_index",
    "https://www.tpex.org.tw/openapi/v1/tpex_index_summary"
  ]) {
    try {
      const j = await getJson("TPEx index", url, undefined, 10_000);
      if (Array.isArray(j) && j.length) {
        const row = j.find((r) => /櫃買|大盤|OTC/i.test(JSON.stringify(r))) || j[0];
        index = { endpoint: url, keys: Object.keys(row), row };
        break;
      }
    } catch (e) {
      notes.push(`index ${url.split("/").pop()} → ${String(e.message).slice(0, 60)}`);
    }
  }

  if (!index && turnover == null) throw new Error(notes.join(" | ") || "全部來源皆失敗");
  return {
    date,
    index, // 目前恆為 null，指數點位改由每日 WebSearch 補（見 README 已知限制）
    turnoverYi: turnover,
    quoteCount,
    notes: notes.length ? notes : undefined
  };
}

/** 期交所台指期每日行情（CSV 下載） */
async function taifexTxf(date) {
  const d = slashed(date);
  const body = new URLSearchParams({
    down_type: "1",
    commodity_id: "TX",
    queryStartDate: d,
    queryEndDate: d
  });
  const text = await requestBig5("TAIFEX TX", "https://www.taifex.com.tw/cht/3/futDataDown", {
    method: "POST",
    body,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return null; // 只有表頭 = 休市

  const header = lines[0].split(",").map((s) => s.trim());
  const idx = (re) => header.findIndex((h) => re.test(h));
  const iSession = idx(/交易時段/);
  const iMonth = idx(/到期月份|契約月份/);
  const iClose = idx(/收盤價/);
  const iChange = idx(/漲跌價/);
  const iOI = idx(/未沖銷契約數/);
  const iVol = idx(/成交量/);
  if (iClose < 0) throw new Error(`表頭找不到收盤價，實際表頭：${header.join("|")}`);

  const rows = lines
    .slice(1)
    .map((l) => l.split(",").map((s) => s.trim()))
    .filter((r) => r.length >= header.length - 2);

  // 只要一般交易時段（排除盤後），並排除週選型的合約月份（含 W 或空白）
  const dayRows = rows.filter((r) => (iSession < 0 ? true : /一般/.test(r[iSession] || "")));
  const pool = dayRows.length ? dayRows : rows;
  // 近月 = 到期月份字串最小者（格式 YYYYMM）
  const monthly = pool.filter((r) => iMonth < 0 || /^\d{6}$/.test(r[iMonth] || ""));
  const candidates = monthly.length ? monthly : pool;
  const near = candidates.slice().sort((a, b) =>
    iMonth < 0 ? 0 : String(a[iMonth]).localeCompare(String(b[iMonth]))
  )[0];
  if (!near) return null;

  return {
    date,
    contractMonth: iMonth >= 0 ? near[iMonth] : null,
    close: num(near[iClose]),
    change: iChange >= 0 ? num(near[iChange]) : null,
    volume: iVol >= 0 ? num(near[iVol]) : null,
    openInterest: iOI >= 0 ? num(near[iOI]) : null,
    session: iSession >= 0 ? near[iSession] : null,
    rowCount: rows.length,
    header
  };
}

// ── 主流程 ──────────────────────────────────────────────────────
async function main() {
  const arg = process.argv[2];
  const date = arg && /^\d{8}$/.test(arg) ? arg : ymd(taipeiNow());
  console.log(`=== 抓取台股數據 date=${date} (台灣時間 ${slashed(date)}) ===`);

  const items = {};
  await collect(items, "marginTwse", "TWSE MI_MARGN", () => twseMargin(date));
  await collect(items, "instTwse", "TWSE BFI82U", () => twseInstitutional(date));
  await collect(items, "dailyMarket", "TWSE FMTQIK", () => twseDailyMarket(date));
  await collect(items, "otcTpex", "TPEx OpenAPI", () => tpexOtc(date));
  await collect(items, "txfTaifex", "TAIFEX futDataDown", () => taifexTxf(date));

  // 只要有任何一個來源明確回報「休市或無資料」，就視為非交易日
  const okCount = Object.values(items).filter((i) => i.ok).length;
  const closedSignals = Object.values(items).filter(
    (i) => !i.ok && i.error === "休市或無資料"
  ).length;
  const marketOpen = okCount > 0 || closedSignals === 0;

  const payload = {
    fetchedAt: new Date().toISOString(),
    tradeDate: date,
    marketOpen,
    okCount,
    totalCount: Object.keys(items).length,
    items
  };

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(
    OUT,
    "/**\n" +
      " * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。\n" +
      " * 產生器：scripts/fetch-tw-market.mjs\n" +
      " *\n" +
      " * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。\n" +
      " * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。\n" +
      " */\n" +
      "window.MARKET_AUTO = " +
      JSON.stringify(payload, null, 2) +
      ";\n",
    "utf8"
  );

  console.log(`\n=== 完成：${okCount}/${payload.totalCount} 個來源成功，marketOpen=${marketOpen} ===`);
  console.log(`已寫入 ${OUT}`);
  // 即使全部失敗也以 0 結束，讓 workflow 仍能把錯誤狀態 commit 起來
}

main().catch((err) => {
  console.error("腳本本身失敗（非資料來源問題）：", err);
  process.exit(1);
});
