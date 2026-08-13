/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 每天只要更新這個檔案，網站就會自動更新。
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 詳細更新說明請看 README.md
 */
window.DASHBOARD = {
  meta: {
    version: "v3.3",
    date: "2026/08/14",
    time: "07:30",
    timezone: "台灣時間",
    // 用來做倒數計時的下一個關鍵事件（ISO 8601，含時區位移）
    countdown: {
      label: "🇺🇸 7 月零售銷售",
      note: "今晚 20:30（美東 8/14 08:30）｜MoM 預期 +0.2%",
      target: "2026-08-14T20:30:00+08:00"
    }
  },

  // ── 🚦 一眼結論 ──────────────────────────────────────────────
  verdict: [
    { label: "PPI", state: "✅ 0.0%，比預期更好", signal: "g" },
    { label: "S&P 500", state: "創歷史新高 7,798.99", signal: "g" },
    { label: "台股", state: "站上 46K，成交破兆", signal: "g" },
    { label: "Fed 升息機率", state: "跌破 35%", signal: "g" },
    { label: "短線過熱", state: "兩日漲 900 點，需留意", signal: "r" },
    { label: "日圓", state: "159.3，160 仍未解除", signal: "r" }
  ],

  // ── ① 全球市場儀表板 ────────────────────────────────────────
  global: {
    rows: [
      { name: "🇺🇸 S&P 500", value: "7,798.99（+0.65%）🏆 新高", signal: "g" },
      { name: "🇺🇸 Nasdaq", value: "26,803（+0.81%）", signal: "g" },
      { name: "🇺🇸 Dow", value: "53,840（+0.13%）", signal: "g" },
      { name: "🔥 費城半導體 SOX", value: "12,589.43（+1.53%）", signal: "g" },
      { name: "VIX", value: "14.68（8/12）", signal: "g" },
      { name: "🇺🇸 10Y 公債", value: "4.657%（-1bp 內）", signal: "g" },
      { name: "🇺🇸 2Y 公債", value: "4.18%（-2bps）", signal: "g" },
      { name: "DXY 美元指數", value: "約 99.7（前一交易日）", signal: "y" },
      { name: "🛢️ Brent 原油", value: "88.75（-0.2%）", signal: "r" },
      { name: "Gold 黃金", value: "4,466.30（8/12）", signal: "g" },
      { name: "🇯🇵 USD/JPY", value: "159.34（8/12）", signal: "r" },
      { name: "🇨🇳 USD/CNY 中間價", value: "6.7882（8/12）", signal: "y" },
      { name: "🇹🇼 USD/TWD", value: "32.2270（8/12，-0.05%）", signal: "y" },
      { name: "🇹🇼 TAIEX", value: "46,021.48（8/13，+1.11%）🏆", signal: "g" },
      { name: "🇹🇼 櫃買 OTC", value: "點位未取得", signal: "y" }
    ],
    notes: [
      "PPI 最終需求月增 0.0%（持平），核心 PPI 月增 0.2%、年增降至 4.2% 為四個月最低，兩項都比市場預期更好。通膨上下游兩道關卡本週全部過關。",
      "S&P 500 收 7,798.99 創歷史新高（盤中首度突破 7,800），Nasdaq 26,803、羅素 2000 同步創高，Workday 大漲 18%。債市同步反彈，2Y 殖利率下滑 2bps 至 4.18%，反映近期升息預期消退。",
      "✅ 昨天情境表寫「PPI ≤ 0.1% → 通膨壓力確認退潮 🟢🟢」——實際 0.0%，落在最佳格。CME FedWatch 顯示升息機率由上週 55% 降至 35% 以下。",
      "⚠️ 油價是唯一沒退的：Brent 仍在 88.75。VIX、黃金、USD/JPY、DXY、櫃買 OTC 未取得 8/13 可靠來源，已標註為前值或未取得。"
    ]
  },

  // ── ② Fed / 通膨 ────────────────────────────────────────────
  fed: {
    headline: "CPI + PPI 連兩關過關 → 升息預期基本被拆解",
    stats: [
      { label: "7 月 PPI MoM", value: "0.0%（持平）", signal: "g" },
      { label: "核心 PPI YoY", value: "4.2%（四個月最低）", signal: "g" },
      { label: "7 月 Core CPI", value: "2.5% YoY", signal: "g" },
      { label: "9 月升息機率", value: "< 35%", signal: "g" },
      { label: "7 月非農", value: "-23,000 人", signal: "r" }
    ],
    shift: {
      before: "🟡 「CPI 過了，但 PPI 會不會露出上游成本壓力？」",
      after: "🟢 「上游也沒壓力，Fed 9 月按兵不動幾乎確定」"
    },
    probability: {
      label: "CME FedWatch 9 月升息機率（上週 → 現在）",
      from: "55%",
      to: "< 35%"
    },
    footnote:
      "值得注意的是 PPI 的組成：最終需求商品跌 0.7%，服務漲 0.2%，營建漲 2.2%，商品端的下滑抵銷了服務端。這代表能源與商品的通膨壓力確實在退，但服務型通膨仍有黏性。就業疲弱（-23,000）仍是另一半的隱憂——現在的組合是「通膨降溫 + 經濟走弱」，對股市是甜蜜點，但不能持續太久。"
  },

  // ── ③ 今晚零售銷售 ─────────────────────────────────────────
  cpi: {
    title: "今晚 20:30 美國 7 月零售銷售",
    releaseUS: "8/14 美東 08:30（盤前）",
    releaseTW: "🇹🇼 今晚 20:30",
    expectations: [
      { name: "零售銷售 MoM", value: "預期 +0.2%（前值 +0.2%）" },
      { name: "核心零售（ex-autos）", value: "預期 +0.2%（前值 -0.2%）" },
      { name: "本週 CPI", value: "3.4% / Core 2.5% ✅ 命中" },
      { name: "本週 PPI", value: "0.0% ✅ 優於預期" },
      { name: "下週 FOMC Minutes", value: "8/19" }
    ],
    fear:
      "通膨這條線本週已經走完，今晚換一個問題：消費撐不撐得住。非農 -23,000、勞動參與率創五年新低，如果零售銷售同步轉弱，「通膨降溫」的敘事就會變成「需求崩壞」，那對股市不是利多而是利空。這是甜蜜點與衰退交易的分界線。",
    scenarios: [
      { result: "零售 ≥ +0.4%", fed: "消費強勁，軟著陸", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "+0.2%（符合預期）", fed: "維持現有路徑", fedSignal: "g", tech: "🟢", techSignal: "g" },
      { result: "0% ~ +0.1%", fed: "消費轉弱訊號", fedSignal: "y", tech: "🟡", techSignal: "y" },
      { result: "負值", fed: "衰退交易啟動", fedSignal: "r", tech: "🔴", techSignal: "r" }
    ],
    conclusion:
      "本週的三份數據裡，這一份最容易被忽略，但它決定了市場是把「Fed 不升息」讀成利多還是讀成警訊。"
  },

  // ── ④ 日圓 ─────────────────────────────────────────────────
  jpy: {
    level: "USD/JPY ≈ 159.3",
    background:
      "通膨數據偏鴿、美債殖利率全面下滑，理論上對日圓有利，但匯價仍卡在 159 附近動彈不得。8 月初美日協調干預曾把匯價從接近 164 打到 156.34，如今漲幅回吐過半。在美元走弱的環境下日圓還是升不上去，說明問題不在美元，而在日銀的政策利差本身。",
    keyLevel: "160 / 161 是壓力區，160 仍未解除",
    branches: [
      {
        condition: "突破 160 → 進入干預警戒",
        signal: "r",
        items: ["二次干預風險大增", "Carry Trade 平倉風險 ↑", "台股與科技股波動放大"]
      },
      {
        condition: "殖利率續降 → 回測 156~158",
        signal: "y",
        items: ["短線壓力緩解 🟢", "但需日銀實際動作才會反轉 🟡", "干預只能買時間 🟡"]
      }
    ],
    conclusion:
      "這是目前 dashboard 上唯一沒有跟著改善的指標。其他都轉好了，它沒有——所以權重反而更高。"
  },

  // ── ⑤ CSP / AI ─────────────────────────────────────────────
  csp: {
    rows: [
      { company: "CoreWeave", result: "Q2 營收 26 億、+112%，股價 +19%", ai: "🟢🟢🟢" },
      { company: "Nebius", result: "財報後單日 +34%", ai: "🟢🟢🟢" },
      { company: "Workday", result: "8/13 財報後 +18%", ai: "🟢🟢" },
      { company: "Microsoft / Amazon", result: "Azure、AWS 強，CapEx 提高", ai: "🟢🟢🟢" },
      { company: "Alphabet / Meta", result: "Cloud 與 AI CapEx 持續", ai: "🟢🟢🟢" },
      { company: "NVIDIA", result: "8/26 財報", ai: "⭐⭐⭐⭐⭐" }
    ],
    capex: {
      title: "四大 CSP AI CapEx 合計",
      from: "2025 年約 4,100 億美元",
      to: "2026 年預計約 7,250 億美元"
    },
    takeaway: {
      not: "仍然沒有看到任何 AI 需求見頂的跡象",
      but: "neocloud 營收翻倍、企業軟體（Workday）也跟著受惠，AI 的營收效應正在往應用層擴散",
      conclusion:
        "從 CapEx（花錢）→ neocloud 營收（收錢）→ 企業軟體（應用層）——三層驗證都到齊了。這是這波行情最硬的支撐，但也意味著 8/26 NVIDIA 一旦不如預期，回檔會很猛。"
    }
  },

  // ── ⑥ NVIDIA ───────────────────────────────────────────────
  nvidia: {
    event: "8/26 NVIDIA 財報",
    subtitle: "Q2 FY2027（季末 7/26）｜美西 14:00 法說，台灣時間 8/27 清晨 05:00",
    watch: [
      "Data Center Revenue",
      "Blackwell 出貨",
      "GB300",
      "Hopper → Blackwell 轉換",
      "CSP 與 neocloud 訂單能見度",
      "毛利率",
      "下一季 Guidance"
    ],
    note:
      "剩 8 個交易日。CoreWeave、Nebius 已經先幫需求端背書，SOX 也連兩日走強站上 12,589——市場等於提前把好消息買進去了。這讓 8/26 變成一個「達標無功、不達標重罰」的事件。"
  },

  // ── ⑦ 台股 ─────────────────────────────────────────────────
  taiex: {
    date: "8/13 收盤",
    close: "46,021.48",
    change: "+503.41",
    changePct: "+1.11%",
    turnover: "NT$1,051.6B",
    note:
      "一舉收復 46,000 大關，成交金額突破 1 兆元（10,515.91 億），量價齊揚。台積電收 2,435 元（+0.83%、+20 元）。資金點火 AI 供應鏈、被動元件與記憶體。兩個交易日累計上漲近 900 點——這是強勢，但也是本 dashboard 目前最主要的過熱訊號。"
  },

  // ── ⑧ 台股籌碼面（三大法人 / 融資融券）─────────────────────
  chips: {
    date: "8/13 盤後（集中市場）",
    institutions: [
      { name: "外資", tse: "+756.94 億", otc: "未取得", signal: "g" },
      { name: "投信", tse: "+0.01 億", otc: "未取得", signal: "y" },
      { name: "自營商", tse: "+150.59 億", otc: "未取得", signal: "g" },
      { name: "三大法人合計", tse: "+907.56 億", otc: "未取得", signal: "g" }
    ],
    note:
      "外資單日買超 756.94 億元是這波行情的絕對主力，自營商買超 150.59 億元（自行買賣 +32.57 億、避險 +118.02 億），投信則幾乎完全站在場邊（+0.01 億）。三大法人合計買超 907.56 億元。注意投信近乎零的參與度——這波是外資單邊行情，內資法人並沒有跟上，一旦外資轉向，缺乏承接力道。（合計為原始公布值；三項分計四捨五入後加總為 907.54 億，差 0.02 億屬進位差異。）櫃買市場 8/13 分項未取得。",
    margin: {
      title: "融資融券（信用交易）",
      rows: [
        { name: "集中市場融資餘額", value: "6,050.4 億（6/23）", signal: "y" },
        { name: "櫃買市場融資餘額", value: "2,084.4 億（6/23）", signal: "y" },
        { name: "兩市合計", value: "8,134.8 億（6/23 首破 8 千億）", signal: "r" },
        { name: "8 月最新數據", value: "未取得（連續第 2 日）", signal: "y" }
      ],
      warning:
        "⚠️ 融資數字仍是 6 月的，已連續兩日嘗試更新未果——證交所的每日融資融券頁面為動態載入，搜尋引擎抓不到當日數值。僅供結構參考，不可當作現況。當時兩市融資餘額首破 8,000 億元創歷史紀錄，逼近 2000 年網路泡沫前水位。在目前指數兩日大漲 900 點、成交破兆的環境下，這個數字很可能已經更高——這是本 dashboard 目前最大的資訊缺口。"
    }
  },

  // ── ⑨ 台指期 / 結算 ────────────────────────────────────────
  futures: {
    spot: "46,021.48",
    future: "未取得",
    basis: "未取得（前值 +179 點正價差）",
    month: "台指期近一（8/13）",
    note:
      "8/13 台指期收盤價與基差未取得可靠來源。前一交易日（8/12）為 45,697、正價差約 179 點，而基差結構在本月已從 8 月初的 422.78 點深度逆價差一路翻正。距 8/20 結算剩 4 個交易日，正價差能否維持是多方氣勢的溫度計——若在指數創高的同時基差反而收斂甚至翻負，那會是第一個轉弱訊號。"
  },

  // ── ⑩ 未來重要事件 ─────────────────────────────────────────
  calendar: {
    tier1: [
      { date: "今晚", event: "🇺🇸 零售銷售（20:30）", hot: true },
      { date: "8/19", event: "FOMC Minutes" },
      { date: "8/20", event: "🇹🇼 台指期結算", hot: true },
      { date: "8/26", event: "🔥 NVIDIA 財報", hot: true }
    ],
    tier2: [
      { date: "8/19", event: "台指選擇權結算" },
      { date: "8 月底", event: "Jackson Hole 相關訊號" },
      { date: "8/31", event: "月底法人作帳" },
      { date: "9/16", event: "FOMC 利率決議" }
    ]
  },

  // ── ⑪ 四大風險 ─────────────────────────────────────────────
  risks: [
    { n: "①", name: "短線過熱", signal: "r", desc: "台股兩日漲近 900 點、成交破兆、外資單日買超 756 億，但投信幾乎沒參與。" },
    { n: "②", name: "USD/JPY", signal: "r", desc: "159.3。全場都轉好了只有它沒有，160 未解除。" },
    { n: "③", name: "油價", signal: "r", desc: "Brent 仍在 88.75。通膨數據已過關，但油價這條線還沒退。" },
    { n: "④", name: "8/26 NVIDIA", signal: "y", desc: "剩 8 個交易日，好消息已被提前買進，達標無功、不達標重罰。" }
  ],

  // ── 🎯 總評 ────────────────────────────────────────────────
  scores: {
    items: [
      { name: "AI 基本面", score: 9.5, signal: "g", note: "CapEx → neocloud 營收 → 企業軟體，三層驗證到齊。" },
      { name: "美股趨勢", score: 8.5, signal: "g", note: "S&P 創歷史新高 7,798.99，羅素 2000 同步創高。" },
      { name: "Fed", score: 8, signal: "g", note: "CPI、PPI 連兩關過，升息機率跌破 35%。" },
      { name: "日圓", score: 4.5, signal: "r", note: "殖利率下滑略減壓，但 159 動彈不得，160 未解。" },
      { name: "台股 AI", score: 9, signal: "g", note: "站上 46K、成交破兆、外資買超 756 億。" }
    ],
    overall: { name: "整體", score: 8.2, signal: "g" },
    summary: [
      "本週三個問號——CPI、PPI、費半背離——全部給了正面答案，環境是這一個多月來最好的。",
      "通膨兩關全過 🟢 ＋ S&P 創新高 🟢 ＋ 台股站上 46K 🟢 ＋ 短線過熱 🔴 ＋ 日圓 160 未解 🔴 ＋ 油價 88.75 🔴",
      "但要提醒自己：評分 8.2 是這段期間的高點，而高分本身就是風險——當所有利多都已兌現，接下來的變數只會來自沒被定價的那一邊。今晚零售銷售 → 8/20 結算 → 8/26 NVIDIA。"
    ]
  },

  // ── 👀 明天追蹤的數字 ──────────────────────────────────────
  watchlist: [
    "零售銷售 MoM（+0.2% 是分水嶺）",
    "台股量能能否守住兆元",
    "外資是否連續買超",
    "投信有沒有回頭進場",
    "台指期基差（正價差能否維持到 8/20）",
    "USD/JPY 有沒有破 160",
    "Brent 能否跌回 85 以下",
    "SOX 能否守住 12,500"
  ],

  // ── 📚 資料來源 ────────────────────────────────────────────
  sources: [
    { label: "Producer Price Index News Release, July 2026 — BLS", url: "https://www.bls.gov/news.release/archives/ppi_08132026.htm" },
    { label: "US wholesale inflation slowed more than expected in July — CNN Business", url: "https://www.cnn.com/2026/08/13/economy/us-ppi-wholesale-inflation-july" },
    { label: "Stock Market Today (Aug. 13, 2026): S&P 500 clears 7,800 — TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-aug-13-2026" },
    { label: "S&P 500 closes at a new record on cooler inflation — CNBC", url: "https://www.cnbc.com/2026/08/12/stock-market-today-live-updates.html" },
    { label: "Wall Street Rises as Soft PPI Boosts Fed Pause Hopes — HDFC Sky", url: "https://hdfcsky.com/news/dow-sp500-nasdaq-rally-cooling-ppi-russell-2000-record-high-august-13-2026" },
    { label: "How major US stock indexes fared Thursday 8/13/2026 — Washington Post", url: "https://www.washingtonpost.com/business/2026/08/13/wall-street-stocks-dow-nasdaq/c1b80e16-9754-11f1-9ef9-1be722184483_story.html" },
    { label: "台股收漲 503 點站上 46K，台積電漲 20 元至 2435 — ETtoday", url: "https://finance.ettoday.net/news/3218615" },
    { label: "TAIEX climbs above 46,000 — Taiwan News", url: "https://www.taiwannews.com.tw/news/6420785" },
    { label: "2026/08/13 法人買賣超整理", url: "https://stock.may.tw/2026/08/13/" },
    { label: "三大法人買賣金額統計表 — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/foreign/bfi82u.html" },
    { label: "融資融券餘額 — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/margin/mi-margn.html" },
    { label: "Daily Market Outlook, August 13, 2026 — Tickmill", url: "https://www.tickmill.com/blog/daily-market-outlook-august-13-2026" },
    { label: "PHLX Semiconductor (^SOX) 歷史資料 — Yahoo Finance", url: "https://finance.yahoo.com/quote/%5ESOX/history/" },
    { label: "Taiwanese Dollar quote — Trading Economics", url: "https://tradingeconomics.com/taiwan/currency" },
    { label: "Advance Monthly Retail Sales — US Census Bureau", url: "https://www.census.gov/retail/marts/www/marts_current.pdf" },
    { label: "Nvidia schedules Q2 fiscal 2027 earnings call for August 26 — Investing.com", url: "https://www.investing.com/news/assorted/nvidia-schedules-q2-fiscal-2027-earnings-call-for-august-26-432SI-4821803" }
  ]
};
