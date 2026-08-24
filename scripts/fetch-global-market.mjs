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

// ── 來源 ① Yahoo Finance chart API（主要：同時給收盤與前收）──────
async function fromYahoo(sym) {
  const url =
    `https://query1.finance.yahoo.com/v8/finance/chart/${sym}` +
    `?range=5d&interval=1d`;
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
  const close = meta.regularMarketPrice ?? null;
  const prev = meta.chartPreviousClose ?? meta.previousClose ?? null;
  if (close == null) throw new Error(`meta 無 regularMarketPrice，鍵值：${Object.keys(meta).join(",")}`);
  const change = prev != null ? round(close - prev, 4) : null;
  return {
    close: round(close, 4),
    prevClose: round(prev, 4),
    change,
    changePct: prev ? round((change / prev) * 100, 2) : null,
    asOf: meta.regularMarketTime
      ? new Date(meta.regularMarketTime * 1000).toISOString()
      : null,
    currency: meta.currency ?? null,
    source: "Yahoo Finance chart API"
  };
}

// ── 來源 ② Stooq CSV（備援）─────────────────────────────────────
async function fromStooq(sym) {
  const url = `https://stooq.com/q/l/?s=${encodeURIComponent(sym)}&f=sd2t2ohlcv&h&e=csv`;
  const text = await request("stooq", url);
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) throw new Error("CSV 只有表頭");
  const head = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const row = lines[1].split(",").map((c) => c.trim());
  const col = (n) => {
    const i = head.indexOf(n);
    return i >= 0 ? row[i] : null;
  };
  const close = num(col("close"));
  if (close == null) throw new Error(`無法解析 close（原始列：${lines[1]}）`);
  const open = num(col("open"));
  return {
    close: round(close, 4),
    prevClose: null, // Stooq 單筆報價不提供前收
    change: open != null ? round(close - open, 4) : null, // 僅為當日開盤至收盤
    changePct: null,
    asOf: col("date") ? `${col("date")} ${col("time") || ""}`.trim() : null,
    currency: null,
    note: "change 為開盤至收盤，非對前一日收盤",
    source: "Stooq CSV"
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
        items[t.key] = { ok: true, label: t.label, symbol: sym, value };
        console.log(`  ✅ ${t.label} = ${value.close}（${value.source}）`);
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
