#!/usr/bin/env node
/**
 * fetch-global-market.mjs — 國際行情抓取
 * ------------------------------------------------------------------
 * 為什麼需要這支腳本：
 *   fetch-tw-market.mjs 只抓 twse / tpex / taifex 三個台灣網域。
 *   SOX、原油、黃金、USD/JPY、DXY、美債殖利率這些國際數字從來沒有
 *   進過自動管道，只能靠 WebSearch——而搜尋只讀得到「新聞句子裡有
 *   寫出來的數字」。S&P 500 幾乎天天有人寫，SOX 的收盤點位很少被寫，
 *   所以那幾項時有時無。這支腳本就是來補這個洞。
 *
 * 設計與 fetch-tw-market.mjs 一致：
 *   1. 零相依（Node 22 內建 fetch）
 *   2. 每個標的獨立 try/catch，單點失敗不影響其他欄位
 *   3. 每個請求印出 status 與回應片段到 Actions log，便於診斷
 *   4. 抓不到就 ok:false + error，絕不沿用舊值或推估
 *
 * 用法：node scripts/fetch-global-market.mjs
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(ROOT, "data/market-global.js");

const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) " +
  "Chrome/126.0 Safari/537.36 (+Daily-News dashboard bot)";

/** 標的清單。yahoo / stooq 皆為候選符號，依序嘗試。 */
const TARGETS = [
  { key: "sox",    label: "費城半導體 SOX",  yahoo: "%5ESOX",     stooq: null },
  { key: "vix",    label: "VIX",             yahoo: "%5EVIX",     stooq: "^vix" },
  { key: "spx",    label: "S&P 500",         yahoo: "%5EGSPC",    stooq: "^spx" },
  { key: "ndx",    label: "Nasdaq 綜合",     yahoo: "%5EIXIC",    stooq: "^ndq" },
  { key: "dji",    label: "Dow Jones",       yahoo: "%5EDJI",     stooq: "^dji" },
  { key: "us10y",  label: "US 10Y 殖利率",   yahoo: "%5ETNX",     stooq: null },
  { key: "us30y",  label: "US 30Y 殖利率",   yahoo: "%5ETYX",     stooq: null },
  { key: "us5y",   label: "US 5Y 殖利率",    yahoo: "%5EFVX",     stooq: null },
  { key: "dxy",    label: "DXY 美元指數",    yahoo: "DX-Y.NYB",   stooq: null },
  { key: "wti",    label: "WTI 原油",        yahoo: "CL%3DF",     stooq: "cl.f" },
  { key: "brent",  label: "Brent 原油",      yahoo: "BZ%3DF",     stooq: null },
  { key: "gold",   label: "黃金",            yahoo: "GC%3DF",     stooq: "xauusd" },
  { key: "usdjpy", label: "USD/JPY",         yahoo: "JPY%3DX",    stooq: "usdjpy" },
  { key: "usdcny", label: "USD/CNY",         yahoo: "CNY%3DX",    stooq: "usdcny" },
  { key: "usdtwd", label: "USD/TWD",         yahoo: "TWD%3DX",    stooq: "usdtwd" },
  { key: "otcTwo", label: "櫃買指數 OTC",    yahoo: "%5ETWOII",   stooq: null },
  { key: "taiex",  label: "TAIEX（交叉驗證）", yahoo: "%5ETWII",  stooq: "^twse" }
];

// ── 工具 ────────────────────────────────────────────────────────
function round(v, n = 4) {
  if (v == null || !isFinite(v)) return null;
  const f = Math.pow(10, n);
  return Math.round(v * f) / f;
}
function num(s) {
  if (s == null) return null;
  const c = String(s).replace(/[,\s]/g, "");
  if (!/^-?\d+(\.\d+)?$/.test(c)) return null;
  return Number(c);
}

/** epoch 秒 → 交易所當地日期 YYYY-MM-DD。用當地時區才不會把亞洲收盤算成前一天。 */
function ymdInTz(epochSec, tz) {
  const d = new Date(epochSec * 1000);
  try {
    return d.toLocaleDateString("en-CA", { timeZone: tz || "UTC" });
  } catch {
    return d.toISOString().slice(0, 10);
  }
}

/**
 * asOf（YYYY-MM-DD）距今幾天。無法解析回 null。
 *
 * 存在的理由：Yahoo 的 ^TWOII 會回一個看起來很正常的報價（269.45），
 * 但 regularMarketTime 是 2024-10-12——那是將近兩年前的死報價。
 * 沒有這道檢查就會把它當成當日櫃買指數印上頁面。
 */
const MAX_STALE_DAYS = 10;
function stalenessDays(asOf) {
  if (!asOf || !/^\d{4}-\d{2}-\d{2}$/.test(asOf)) return null;
  const t = Date.parse(asOf + "T00:00:00Z");
  if (!isFinite(t)) return null;
  return Math.floor((Date.now() - t) / 86_400_000);
}

/** 由 [{date, close}] 序列的某一格與其前一格算出日變動。 */
function deltaAt(series, i) {
  if (i < 0 || i >= series.length) return null;
  const cur = series[i];
  const prev = i > 0 ? series[i - 1] : null;
  const change = prev ? round(cur.close - prev.close, 4) : null;
  return {
    date: cur.date,
    close: cur.close,
    prevDate: prev ? prev.date : null,
    prevClose: prev ? prev.close : null,
    change,
    changePct: prev && prev.close ? round((change / prev.close) * 100, 2) : null
  };
}

async function request(label, url, timeoutMs = 20_000) {
  const t0 = Date.now();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { "User-Agent": UA, Accept: "*/*" }
    });
    const text = await res.text();
    console.log(
      `  [${label}] HTTP ${res.status} ${Date.now() - t0}ms ${text.length}B :: ` +
        text.slice(0, 200).replace(/\s+/g, " ")
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return text;
  } finally {
    clearTimeout(timer);
  }
}

// ── 來源 ① Yahoo Finance chart API（主要）───────────────────────
//
// 首次執行（8/24）17/17 全綠但**日期語意是錯的**，兩個缺陷：
//   1. change 用 meta.chartPreviousClose 算。搭配 range=5d 時那是「5 天前」
//      的收盤，不是前一日——S&P 500 因此顯示 -1.43%（週變動），實際日變動
//      是 +0.43%。
//   2. close 用 meta.regularMarketPrice，盤中會拿到**即時報價**。當時
//      TAIEX 抓到 44,987.11，但 8/21 的收盤是 45,224.29——那是 8/24 盤中價。
//
// 修法：改讀 timestamp / indicators.quote[0].close 兩個陣列組成日線序列，
// 由相鄰兩根 K 棒相減得到真正的日變動；並判斷最後一根是否為未收盤的
// 進行中 K 棒，另外提供 settled（最後一根**已收盤**日線）。
// dashboard 報的是收盤價，所以更新流程請用 settled。
async function fromYahoo(sym) {
  const url =
    `https://query1.finance.yahoo.com/v8/finance/chart/${sym}` +
    `?range=1mo&interval=1d`;
  const text = await request("yahoo", url);
  let j;
  try {
    j = JSON.parse(text);
  } catch {
    throw new Error(`回應不是 JSON（前 100 字：${text.slice(0, 100)}）`);
  }
  const r = j?.chart?.result?.[0];
  if (!r) throw new Error(`chart.result 為空（error: ${JSON.stringify(j?.chart?.error)}）`);
  const meta = r.meta || {};
  const tz = meta.exchangeTimezoneName || null;

  // 是否正在盤中：最後成交時間落在當前盤中時段且尚未到收盤時刻。
  const tp = meta.currentTradingPeriod?.regular;
  const rmt = meta.regularMarketTime ?? null;
  const marketOpen =
    tp && rmt != null && tp.start != null && tp.end != null
      ? rmt >= tp.start && rmt < tp.end
      : false;

  const ts = Array.isArray(r.timestamp) ? r.timestamp : [];
  const closes = Array.isArray(r.indicators?.quote?.[0]?.close)
    ? r.indicators.quote[0].close
    : [];

  // 櫃買指數 ^TWOII 是特例：Yahoo 認得這個代號、meta 有即時報價，
  // 但 timestamp / close 兩個陣列都是空的（沒有日線歷史）。
  // 這種情況下退而求其次用 meta 的即時報價，並明確標記 quoteOnly，
  // 讓每日更新流程知道這個數字沒有經過日線交叉驗證。
  if (!ts.length || !closes.length) {
    const p = meta.regularMarketPrice ?? null;
    if (p == null) {
      throw new Error(
        `無日線陣列且 meta 無 regularMarketPrice（meta 鍵值：${Object.keys(meta).join(",")}）`
      );
    }
    const prev = meta.chartPreviousClose ?? meta.previousClose ?? null;
    const change = prev != null ? round(p - prev, 4) : null;
    return {
      close: round(p, 4),
      prevClose: round(prev, 4),
      change,
      changePct: prev ? round((change / prev) * 100, 2) : null,
      asOf: rmt != null ? ymdInTz(rmt, tz) : null,
      prevAsOf: null,
      live: marketOpen,
      latest: null,
      settled: null,
      quotePrice: round(p, 4),
      series: [],
      quoteOnly: true,
      note:
        "此標的 Yahoo 無日線歷史，數字取自 meta 即時報價；" +
        "prevClose 為 Yahoo 自報前收，未經日線交叉驗證。" +
        (marketOpen ? "抓取當下仍在盤中，這不是收盤價。" : ""),
      currency: meta.currency ?? null,
      timezone: tz,
      source: "Yahoo Finance chart API（僅即時報價，無日線）"
    };
  }

  // 同一天偶爾會出現兩根（最後一根是進行中的），用 Map 以日期去重、後者覆蓋。
  const byDate = new Map();
  for (let i = 0; i < ts.length; i++) {
    const c = closes[i];
    if (c == null || !isFinite(c)) continue;
    byDate.set(ymdInTz(ts[i], tz), round(c, 4));
  }
  const series = [...byDate].map(([date, close]) => ({ date, close }));
  if (series.length < 2) throw new Error(`有效日線不足 2 根（${series.length} 根）`);

  // 最後一根是否還在跳動：市場正在交易，而且最後那筆成交跟最後一根 K 棒同一天。
  const lastDate = series[series.length - 1].date;
  const live = marketOpen && rmt != null && ymdInTz(rmt, tz) === lastDate;

  const latest = deltaAt(series, series.length - 1);
  const settled = deltaAt(series, live ? series.length - 2 : series.length - 1);
  if (!settled) throw new Error("無法取得已收盤日線（序列過短）");

  return {
    // close / change 一律代表「最後一根已收盤日線」，供 dashboard 直接引用。
    close: settled.close,
    prevClose: settled.prevClose,
    change: settled.change,
    changePct: settled.changePct,
    asOf: settled.date,
    prevAsOf: settled.prevDate,
    live, // true = 抓取當下該市場正在交易，latest 是盤中價
    latest, // 最後一根（可能未收盤）
    settled, // 最後一根已收盤日線（= 上面的 close/change）
    quotePrice: meta.regularMarketPrice ?? null, // 抓取當下即時價，僅供對照
    series: series.slice(-6),
    currency: meta.currency ?? null,
    timezone: tz,
    source: "Yahoo Finance chart API（日線）"
  };
}

// ── 來源 ② Stooq 日線 CSV（備援）────────────────────────────────
//
// 原本用單筆報價端點（/q/l/），只給一列、算不出對前一日的變動。
// 改用日線歷史端點（/q/d/l/），拿最近一段區間的 K 棒，語意與 Yahoo 那條一致。
// Stooq 日線本來就是收盤資料，不會有盤中價的問題。
async function fromStooq(sym) {
  const day = 86_400_000;
  const fmt = (d) => d.toISOString().slice(0, 10).replace(/-/g, "");
  const d2 = new Date();
  const d1 = new Date(d2.getTime() - 45 * day); // 45 天足以涵蓋連假
  const url =
    `https://stooq.com/q/d/l/?s=${encodeURIComponent(sym)}` +
    `&d1=${fmt(d1)}&d2=${fmt(d2)}&i=d`;
  const text = await request("stooq", url);
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 3) throw new Error(`日線列數不足（${lines.length} 列：${text.slice(0, 120)}）`);
  const head = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const iDate = head.indexOf("date");
  const iClose = head.indexOf("close");
  if (iDate < 0 || iClose < 0) throw new Error(`表頭缺 date/close：${lines[0]}`);

  const series = [];
  for (const line of lines.slice(1)) {
    const cells = line.split(",").map((c) => c.trim());
    const close = num(cells[iClose]);
    if (close == null || !cells[iDate]) continue;
    series.push({ date: cells[iDate], close: round(close, 4) });
  }
  if (series.length < 2) throw new Error(`有效日線不足 2 根（${series.length} 根）`);

  const settled = deltaAt(series, series.length - 1);
  return {
    close: settled.close,
    prevClose: settled.prevClose,
    change: settled.change,
    changePct: settled.changePct,
    asOf: settled.date,
    prevAsOf: settled.prevDate,
    live: false, // 日線歷史一律是已收盤資料
    latest: settled,
    settled,
    quotePrice: null,
    series: series.slice(-6),
    currency: null,
    timezone: null,
    source: "Stooq 日線 CSV"
  };
}

// ── 主流程 ──────────────────────────────────────────────────────
async function main() {
  console.log(`=== 抓取國際行情（${TARGETS.length} 個標的）===`);
  const items = {};

  for (const t of TARGETS) {
    console.log(`\n▶ ${t.label} (${t.key})`);
    const errors = [];
    let done = false;

    for (const [srcName, fn, sym] of [
      ["yahoo", fromYahoo, t.yahoo],
      ["stooq", fromStooq, t.stooq]
    ]) {
      if (!sym) continue;
      try {
        const value = await fn(sym);
        const age = stalenessDays(value.asOf);
        if (age != null && age > MAX_STALE_DAYS) {
          throw new Error(
            `報價過期：asOf ${value.asOf} 距今 ${age} 天（上限 ${MAX_STALE_DAYS} 天），` +
              `該來源可能已停止更新此代號`
          );
        }
        items[t.key] = { ok: true, label: t.label, symbol: sym, value };
        console.log(
          `  ✅ ${t.label} 收盤 ${value.close}（${value.asOf}）` +
            ` 日變動 ${value.change ?? "—"} / ${value.changePct ?? "—"}%` +
            (value.live ? ` ⏱ 盤中價 ${value.quotePrice}（未計入）` : "") +
            `　${value.source}`
        );
        done = true;
        break;
      } catch (e) {
        const msg = `${srcName}(${sym}) → ${String(e.message || e).slice(0, 140)}`;
        errors.push(msg);
        console.log(`  ✖ ${msg}`);
      }
    }

    if (!done) {
      items[t.key] = { ok: false, label: t.label, error: errors.join(" | ") };
      console.log(`  ❌ ${t.label} 全部來源失敗`);
    }
  }

  const okCount = Object.values(items).filter((i) => i.ok).length;
  const payload = {
    fetchedAt: new Date().toISOString(),
    okCount,
    totalCount: TARGETS.length,
    items
  };

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(
    OUT,
    "/**\n" +
      " * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。\n" +
      " * 產生器：scripts/fetch-global-market.mjs\n" +
      " *\n" +
      " * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。\n" +
      " * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。\n" +
      " */\n" +
      "window.MARKET_GLOBAL = " +
      JSON.stringify(payload, null, 2) +
      ";\n",
    "utf8"
  );

  console.log(`\n=== 完成：${okCount}/${TARGETS.length} 個標的成功 ===`);
  console.log(`已寫入 ${OUT}`);
}

main().catch((err) => {
  console.error("腳本本身失敗（非資料來源問題）：", err);
  process.exit(1);
});
