#!/usr/bin/env node
/**
 * probe-otc-index.mjs — 櫃買 OTC 指數點位端點探測
 * ------------------------------------------------------------------
 * 為什麼有這支腳本：
 *   櫃買指數點位是本專案最久的資料缺口。成交金額可以由個股報價彙總
 *   得出（已在用），但「指數收盤點位」一直找不到來源：
 *     - TPEx OpenAPI 目錄頁是 JS 渲染的，swagger.json 回 520
 *     - 猜的幾個 openapi 資料集路徑都回 HTML 404
 *     - Yahoo 的 ^TWOII 認得代號，但 regularMarketTime 停在 2024-10-12，
 *       是死報價（已被 fetch-global-market.mjs 的過期檢查擋下）
 *
 * 這支腳本不寫任何資料檔，只是把一批候選端點打一遍、把**實際回應**
 * 印進 Actions log，用來釘住可用路徑。這是本專案一路走來有效的方法：
 * 猜路徑沒用，讀 log 才有用。
 *
 * 用法：node scripts/probe-otc-index.mjs [YYYYMMDD]
 */

import { argv } from "node:process";

const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) " +
  "Chrome/126.0 Safari/537.36 (+Daily-News dashboard bot)";

const date = (argv[2] || "").replace(/\D/g, "") || tpeToday();
const y = date.slice(0, 4);
const m = date.slice(4, 6);
const d = date.slice(6, 8);
const roc = `${Number(y) - 1911}/${m}/${d}`;      // 115/09/01
const rocNoSlash = `${Number(y) - 1911}${m}${d}`; // 1150901
const slashed = `${y}/${m}/${d}`;                 // 2026/09/01

function tpeToday() {
  const s = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Taipei" });
  return s.replace(/-/g, "");
}

/**
 * 候選端點。分成幾類，每類的失敗方式不同：
 *   mis    —— 櫃買／證交所的即時資訊服務。櫃買指數的代號是 o00，
 *             這是最有機會的一條：ex_ch=otc_o00.tw
 *   openapi—— TPEx OpenAPI，先前猜的都 404，這裡換一批名稱再試
 *   web    —— TPEx 網站自己的 AJAX 端點（新舊兩種路徑型式）
 *   quote  —— 其他報價來源的替代代號
 */
const CANDIDATES = [
  // ── MIS 即時資訊（最有機會）──────────────────────────────
  ["mis-tpex-o00", `https://mis.tpex.org.tw/stock/api/getStockInfo.jsp?ex_ch=otc_o00.tw&json=1&delay=0`],
  ["mis-twse-o00", `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=otc_o00.tw&json=1&delay=0`],
  ["mis-twse-idx", `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_t00.tw|otc_o00.tw&json=1&delay=0`],

  // ── TPEx OpenAPI（換一批資料集名稱）──────────────────────
  ["oapi-daily-close", `https://www.tpex.org.tw/openapi/v1/tpex_mainboard_daily_close_quotes`],
  ["oapi-index-daily", `https://www.tpex.org.tw/openapi/v1/tpex_index_daily`],
  ["oapi-otc-index", `https://www.tpex.org.tw/openapi/v1/tpex_otc_index`],
  ["oapi-market-high", `https://www.tpex.org.tw/openapi/v1/tpex_mainboard_highlight`],
  ["oapi-trading-idx", `https://www.tpex.org.tw/openapi/v1/tpex_trading_index`],

  // ── TPEx 網站 AJAX（新站路徑）────────────────────────────
  ["web-new-index", `https://www.tpex.org.tw/www/zh-tw/indices/inx?date=${slashed}&response=json`],
  ["web-new-summary", `https://www.tpex.org.tw/www/zh-tw/afterTrading/otc?date=${slashed}&response=json`],
  ["web-new-hist", `https://www.tpex.org.tw/www/zh-tw/indices/histIndex?date=${slashed}&response=json`],

  // ── TPEx 網站 AJAX（舊站路徑，仍可能被保留）──────────────
  ["web-old-index", `https://www.tpex.org.tw/web/stock/iNdex_info/histIndex/histIndex_result.php?l=zh-tw&d=${roc}&_=${Date.now()}`],
  ["web-old-market", `https://www.tpex.org.tw/web/stock/aftertrading/daily_market_statistics/market_stat_result.php?l=zh-tw&d=${roc}`],
  ["web-old-close", `https://www.tpex.org.tw/web/stock/aftertrading/otc_quotes_no1430/stk_wn1430_result.php?l=zh-tw&d=${roc}&se=EW`],

  // ── 其他報價來源的替代代號 ──────────────────────────────
  ["stooq-tpex", `https://stooq.com/q/d/l/?s=%5Etpex&i=d`],
  ["stooq-twotc", `https://stooq.com/q/d/l/?s=%5Etwotc&i=d`],
  ["yahoo-twoii", `https://query1.finance.yahoo.com/v8/finance/chart/%5ETWOII?range=5d&interval=1d`],
  ["yahoo-otc-tw", `https://query1.finance.yahoo.com/v8/finance/chart/%5EOTC.TW?range=5d&interval=1d`]
];

async function probe(label, url) {
  const t0 = Date.now();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15_000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: {
        "User-Agent": UA,
        Accept: "*/*",
        // MIS 端點會擋沒有 Referer 的請求
        Referer: url.includes("mis.")
          ? "https://mis.twse.com.tw/stock/index.jsp"
          : "https://www.tpex.org.tw/"
      }
    });
    const text = await res.text();
    const ms = Date.now() - t0;
    const isHtml = /^\s*<(!doctype|html)/i.test(text);
    const flat = text.slice(0, 400).replace(/\s+/g, " ");

    console.log(
      `\n▶ ${label}\n  ${url}\n  HTTP ${res.status} ${ms}ms ${text.length}B ` +
        `${isHtml ? "[HTML — 多半是 404 頁]" : "[非 HTML]"}\n  ${flat}`
    );

    // 非 HTML 的回應才值得往下看：試著找出像指數點位的數字
    if (!isHtml && res.ok) {
      try {
        const j = JSON.parse(text);
        const hits = findIndexLike(j);
        if (hits.length) {
          console.log(`  🎯 疑似指數欄位：${JSON.stringify(hits.slice(0, 8))}`);
        }
      } catch {
        /* 不是 JSON（例如 CSV），上面已印出前 400 字，人工判讀 */
      }
    }
    return { label, status: res.status, isHtml, len: text.length };
  } catch (e) {
    console.log(`\n▶ ${label}\n  ${url}\n  ✖ ${String(e.message || e).slice(0, 160)}`);
    return { label, error: String(e.message || e).slice(0, 80) };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * 在任意 JSON 結構裡找「看起來像櫃買指數」的值。
 * 櫃買指數 2026 年的量級約在 250~350 之間，用這個範圍當粗篩，
 * 並記下鍵名路徑，方便之後直接釘住欄位。
 */
function findIndexLike(node, path = "", out = []) {
  if (out.length >= 20) return out;
  if (node == null) return out;
  if (typeof node === "number" || typeof node === "string") {
    const n = Number(String(node).replace(/,/g, ""));
    if (isFinite(n) && n > 150 && n < 600 && String(node).includes(".")) {
      out.push({ path, value: node });
    }
    return out;
  }
  if (Array.isArray(node)) {
    node.slice(0, 5).forEach((v, i) => findIndexLike(v, `${path}[${i}]`, out));
    return out;
  }
  if (typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      findIndexLike(v, path ? `${path}.${k}` : k, out);
    }
  }
  return out;
}

async function main() {
  console.log(`=== 櫃買指數端點探測 ===`);
  console.log(`日期參數：${date}（民國 ${roc} / ${rocNoSlash} / ${slashed}）`);
  console.log(`候選端點：${CANDIDATES.length} 個\n`);

  const results = [];
  for (const [label, url] of CANDIDATES) {
    results.push(await probe(label, url));
  }

  console.log(`\n\n=== 摘要 ===`);
  for (const r of results) {
    if (r.error) console.log(`  ✖ ${r.label.padEnd(18)} ${r.error}`);
    else
      console.log(
        `  ${r.status === 200 && !r.isHtml ? "✅" : "  "} ${r.label.padEnd(18)} ` +
          `HTTP ${r.status} ${r.isHtml ? "HTML" : "非HTML"} ${r.len}B`
      );
  }
  console.log(
    `\n判讀方式：只有「HTTP 200 ＋ 非 HTML」才值得往下釘。` +
      `\n找到可用端點後，把解析寫進 scripts/fetch-tw-market.mjs 的 tpexOtc，` +
      `\n讓 items.otcTpex.value.index 有值。`
  );
}

main().catch((e) => {
  console.error("探測腳本本身失敗：", e);
  process.exit(1);
});
