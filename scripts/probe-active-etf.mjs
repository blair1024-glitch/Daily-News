#!/usr/bin/env node
/**
 * probe-active-etf.mjs — 主動式ETF每日持股資料來源探測
 * ------------------------------------------------------------------
 * 目的：台灣主動式ETF（00980A、00981A、00994A...）目前沒有單一的
 * 證交所官方API可以抓到每日持股明細，各投信揭露格式都不同（JSON
 * AJAX、Excel、靜態HTML、JS渲染的SPA）。這支腳本先探測幾個候選來源，
 * 把實際回應印進 Actions log，用來判斷哪個來源的格式最穩定、最容易
 * 寫成固定的解析邏輯。
 *
 * 用法：node scripts/probe-active-etf.mjs
 */

const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) " +
  "Chrome/126.0 Safari/537.36 (+Daily-News dashboard bot)";

const CODES = ["00980A", "00981A", "00994A", "00991A", "00982A"];

const CANDIDATES = [];
for (const code of CODES) {
  CANDIDATES.push([`twse-etfortune-${code}`, `https://www.twse.com.tw/zh/ETFortune/etfInfo/${code}`]);
  CANDIDATES.push([`pocket-${code}`, `https://www.pocket.tw/etf/tw/${code}/fundholding/`]);
  CANDIDATES.push([`moneydj-${code}`, `https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=${code.toLowerCase()}.tw`]);
}
// 額外猜測幾個可能的 TWSE rwd 風格 API（跟其他 TWSE 資料集同款路徑）
for (const code of ["00980A", "00994A"]) {
  CANDIDATES.push([`twse-rwd-etfinfo-${code}`, `https://www.twse.com.tw/rwd/zh/ETFortune/etfInfo?stockNo=${code}&response=json`]);
  CANDIDATES.push([`twse-rwd-holding-${code}`, `https://www.twse.com.tw/rwd/zh/ETFortune/holding?stockNo=${code}&response=json`]);
}

async function probe(label, url) {
  const t0 = Date.now();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20_000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { "User-Agent": UA, Accept: "*/*", Referer: "https://www.google.com/" }
    });
    const text = await res.text();
    const ms = Date.now() - t0;
    const isHtml = /^\s*<(!doctype|html)/i.test(text);

    console.log(`\n▶ ${label}\n  ${url}\n  HTTP ${res.status} ${ms}ms ${text.length}B ${isHtml ? "[HTML]" : "[非HTML]"}`);

    if (isHtml) {
      // 在 HTML 裡找常見的持股相關關鍵字、以及可能嵌入的 JSON 狀態
      const hasHoldingWord = /持股|成分股|投資組合|權重|holding/i.test(text);
      console.log(`  含持股相關字樣: ${hasHoldingWord}`);
      const nextData = text.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]{0,200})/);
      if (nextData) console.log(`  🎯 __NEXT_DATA__ 片段: ${nextData[1]}`);
      // 找表格列數
      const tableRows = (text.match(/<tr[\s>]/gi) || []).length;
      console.log(`  <tr> 數量: ${tableRows}`);
      // 印出含關鍵字附近的片段，方便人工判讀
      const idx = text.search(/持股|成分股|投資組合/);
      if (idx >= 0) console.log(`  片段: ${text.slice(Math.max(0, idx - 100), idx + 400).replace(/\s+/g, " ")}`);
    } else {
      console.log(`  前 300 字: ${text.slice(0, 300).replace(/\s+/g, " ")}`);
    }
    return { label, status: res.status, isHtml, len: text.length };
  } catch (e) {
    console.log(`\n▶ ${label}\n  ${url}\n  ✖ ${String(e.message || e).slice(0, 160)}`);
    return { label, error: String(e.message || e).slice(0, 80) };
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  console.log(`=== 主動式ETF持股來源探測 === 候選 ${CANDIDATES.length} 個\n`);
  const results = [];
  for (const [label, url] of CANDIDATES) {
    results.push(await probe(label, url));
    await new Promise((r) => setTimeout(r, 300));
  }
  console.log(`\n\n=== 摘要 ===`);
  for (const r of results) {
    if (r.error) console.log(`  ✖ ${r.label.padEnd(28)} ${r.error}`);
    else console.log(`  ${r.status === 200 ? "✅" : "  "} ${r.label.padEnd(28)} HTTP ${r.status} ${r.isHtml ? "HTML" : "非HTML"} ${r.len}B`);
  }
}

main().catch((e) => {
  console.error("探測腳本本身失敗：", e);
  process.exit(1);
});
