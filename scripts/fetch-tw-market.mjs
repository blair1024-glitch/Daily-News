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

  // FMTQIK 回傳整月，取日期相符的那列；找不到才退回最後一列。
  const want = `${Number(date.slice(0, 4)) - 1911}/${date.slice(4, 6)}/${date.slice(6, 8)}`;
  const exact = rows.find((r) => String(r[0]).trim() === want);
  const row = exact || rows[rows.length - 1];
  const rocDate = String(row[0]).trim();

  // date 必須反映**這一列實際是哪一天**，不能沿用請求日期。
  // 8/27 出過事：排程延遲導致請求了尚未開盤的 8/28，這裡退回最後一列
  // （其實是 8/27 的資料）卻仍標成 20260828，只有 rocDate 洩漏了真相。
  const [roc, mm, dd] = rocDate.split("/");
  const actualDate =
    roc && mm && dd ? `${Number(roc) + 1911}${mm}${dd}` : date;

  // 每列：[日期, 成交股數, 成交金額, 成交筆數, 發行量加權股價指數, 漲跌點數]
  return {
    date: actualDate,
    requestedDate: date,
    matchedRequest: !!exact,
    rocDate,
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
  // 這份 payload 有上萬筆，實測偶爾會逾時（7 次執行中失敗 2 次），故重試一次。
  let turnover = null;
  let quoteCount = null;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const q = await getJson(
        `TPEx quotes (第 ${attempt} 次)`,
        "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_daily_close_quotes",
        undefined,
        120_000
      );
      if (Array.isArray(q) && q.length) {
        quoteCount = q.length;
        const sum = q.reduce((acc, r) => acc + (num(r.TransactionAmount ?? r.TradeValue) || 0), 0);
        turnover = sum > 0 ? toYi(sum) : null;
        break;
      }
      notes.push(`quotes 第 ${attempt} 次 → 空陣列`);
    } catch (e) {
      notes.push(`quotes 第 ${attempt} 次 → ${String(e.message).slice(0, 100)}`);
      if (attempt < 2) console.log("[TPEx quotes] 逾時，5 秒後重試");
      await new Promise((r) => setTimeout(r, attempt < 2 ? 5000 : 0));
    }
  }

  // ② 指數點位——這一項空了很久，2026/09/01 由 probe-otc-index.mjs 找到來源。
  //
  //    走的不是櫃買自己的網站，而是**證交所的 MIS 即時資訊服務**：
  //      https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=otc_o00.tw
  //    櫃買指數在 MIS 的代號是 o00（加權指數是 t00）。注意兩件事：
  //      - 必須帶 Referer，否則被擋
  //      - mis.tpex.org.tw 同路徑回的是 HTML 頁，只有 mis.twse.com.tw 可用
  //
  //    同時抓 t00 是為了**交叉驗證**：t00 的收盤／昨收應該等於 TWSE
  //    FMTQIK 的加權指數收盤。對得上，才敢相信同一個回應裡的 o00。
  //
  //    欄位：z=最新成交價、y=昨收、o=開盤、h=最高、l=最低、d=資料日期。
  //    MIS 給的是「當下這一盤」，所以要看 d 決定該取 z 還是 y：
  //      d == 要的日期      → 用 z（當日收盤）
  //      d == 要的日期的次日 → 用 y（該日已成昨收）
  //    其他情況一律不採用，寧可留 null。
  let index = null;
  let indexCross = null;
  try {
    const j = await getJson(
      "TWSE MIS o00+t00",
      "https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_t00.tw|otc_o00.tw&json=1&delay=0",
      { headers: { Referer: "https://mis.twse.com.tw/stock/index.jsp" } },
      15_000
    );
    const arr = Array.isArray(j?.msgArray) ? j.msgArray : [];
    const pick = (code) => arr.find((r) => String(r.c).trim() === code) || null;
    const otc = pick("o00");
    const tse = pick("t00");

    const valueFor = (row) => {
      if (!row) return null;
      const d = String(row.d || "").trim();
      if (d === date) return { value: num(row.z), field: "z", misDate: d };
      // d 是次日 → 要的那天已經變成「昨收」
      const next = new Date(
        Number(date.slice(0, 4)),
        Number(date.slice(4, 6)) - 1,
        Number(date.slice(6, 8)) + 1
      );
      const nextStr =
        `${next.getFullYear()}` +
        String(next.getMonth() + 1).padStart(2, "0") +
        String(next.getDate()).padStart(2, "0");
      if (d === nextStr) return { value: num(row.y), field: "y", misDate: d };
      return { value: null, field: null, misDate: d };
    };

    const o = valueFor(otc);
    const t = valueFor(tse);

    if (o && o.value != null) {
      index = {
        close: o.value,
        source: "TWSE MIS getStockInfo（otc_o00.tw）",
        field: o.field, // z = 當日收盤，y = 次日回看的昨收
        misDate: o.misDate,
        open: num(otc.o),
        high: num(otc.h),
        low: num(otc.l),
        prevClose: num(otc.y),
        name: String(otc.n || "").trim()
      };
    } else {
      notes.push(`MIS o00 日期不符（回 ${o ? o.misDate : "無資料"}，要 ${date}）`);
    }

    // 交叉驗證：同一個回應裡的加權指數，應與 FMTQIK 的收盤一致。
    if (t && t.value != null) {
      indexCross = { taiexFromMis: t.value, field: t.field, misDate: t.misDate };
    }
  } catch (e) {
    notes.push(`MIS → ${String(e.message).slice(0, 100)}`);
  }

  if (!index && turnover == null) throw new Error(notes.join(" | ") || "全部來源皆失敗");
  return {
    date,
    index,       // { close, source, field, ... }，取不到才是 null
    indexCross,  // 同一回應的加權指數，供與 FMTQIK 對照
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

  const okCount = Object.values(items).filter((i) => i.ok).length;

  // 區分「休市」與「當日資料尚未發布」：若 dailyMarket 有值代表當天有開盤，
  // 此時其他來源回報無資料就不是休市，而是抓取時間早於該來源的發布時間。
  // （8/17 首次全自動執行即為此情況：17:42 抓，證交所融資尚未發布。）
  const marketOpen = items.dailyMarket && items.dailyMarket.ok ? true : okCount > 0;
  if (marketOpen) {
    for (const [key, it] of Object.entries(items)) {
      if (!it.ok && it.error === "休市或無資料") {
        it.error = "當日資料尚未發布（抓取時間早於該來源發布時間）";
        console.log(`[${key}] → 當天有開盤，改標記為「尚未發布」`);
      }
    }
  }

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
