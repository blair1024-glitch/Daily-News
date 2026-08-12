/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 每天只要更新這個檔案，網站就會自動更新。
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 詳細更新說明請看 README.md
 */
window.DASHBOARD = {
  meta: {
    version: "v3.1",
    date: "2026/08/12",
    time: "07:40",
    timezone: "台灣時間",
    // 用來做倒數計時的下一個關鍵事件（ISO 8601，含時區位移）
    countdown: {
      label: "🇺🇸 7 月 CPI 公布",
      note: "今晚 20:30（美東 8/12 08:30）— 本週最大風險點",
      target: "2026-08-12T20:30:00+08:00"
    }
  },

  // ── 🚦 一眼結論 ──────────────────────────────────────────────
  verdict: [
    { label: "今晚 CPI", state: "20:30，倒數中", signal: "r" },
    { label: "油價", state: "新的通膨變數，急升", signal: "r" },
    { label: "美股", state: "8/11 三大指數全黑", signal: "y" },
    { label: "台股", state: "逆勢創高，站上 45,000", signal: "g" },
    { label: "日圓", state: "159，干預效果已回吐一半", signal: "r" },
    { label: "AI 基本面", state: "仍強，未見鬆動", signal: "g" }
  ],

  // ── ① 全球市場儀表板 ────────────────────────────────────────
  global: {
    rows: [
      { name: "🇺🇸 S&P 500", value: "7,728.20（-0.32%）", signal: "y" },
      { name: "🇺🇸 Nasdaq", value: "26,445.45（-0.6%）", signal: "y" },
      { name: "🇺🇸 Dow", value: "53,791.85（-184.13）", signal: "y" },
      { name: "🔥 費城半導體 SOX", value: "11,993.86（8/10，-2.94%）", signal: "r" },
      { name: "VIX", value: "14.90（8/10）", signal: "g" },
      { name: "🇺🇸 10Y 公債", value: "4.71%（+6bps）", signal: "r" },
      { name: "🇺🇸 2Y 公債", value: "約 4.24%（前一交易日）", signal: "y" },
      { name: "DXY 美元指數", value: "約 99.7（前一交易日）", signal: "y" },
      { name: "🛢️ 原油 Brent", value: "約 88（四日連漲）", signal: "r" },
      { name: "Gold 黃金", value: "4,333.81（8/10）", signal: "g" },
      { name: "🇯🇵 USD/JPY", value: "約 159.2", signal: "r" },
      { name: "🇹🇼 TAIEX", value: "45,120.72（8/11 收盤）", signal: "g" }
    ],
    notes: [
      "8/11（二）美股三大指數收黑，科技股領跌，資金轉向能源。市場在 CPI 前縮手，同時布蘭特原油因荷莫茲海峽不確定性連四日走高——通膨焦慮重新回到主導位置。",
      "台股 8/11 逆勢收 45,120.72（+191.96、+0.43%），成交 9,020.52 億元，盤中最高 45,195.41、最低 44,652.06，正式站穩 45,000 之上。",
      "🔥 背離警訊：費半 8/10 重挫 2.94% 至 11,993.86（Intel 領跌，該公司 8/11 再以擴大規模的股票增發募資 200 億美元），台股卻同期逆勢創高。台灣 AI 供應鏈與 SOX 高度連動，這個背離要嘛是台股相對強勢，要嘛是補跌還沒發生——8/13 開盤會給答案。",
      "⚠️ SOX、VIX、黃金、DXY、2Y 為 8/10 或前一交易日數值，8/11 收盤價未取得可靠來源，已於欄位標註。"
    ]
  },

  // ── ② Fed / 通膨 ────────────────────────────────────────────
  fed: {
    headline: "非農爆冷 → 升息預期降溫，但油價正在把它推回去",
    stats: [
      { label: "7 月非農", value: "-23,000 人", signal: "r" },
      { label: "市場原本預期", value: "+83,000 人", signal: "y" },
      { label: "5、6 月合計修正", value: "-103,000 人", signal: "r" },
      { label: "失業率", value: "4.1%（前月 4.2%）", signal: "y" },
      { label: "勞動參與率", value: "61.4%（5 年新低）", signal: "r" }
    ],
    shift: {
      before: "🔴 「Fed 9 月會不會升息？」",
      after: "🟡 「就業已經在轉弱，但油價又把通膨風險推回來了」"
    },
    probability: {
      label: "市場認為 9 月升息機率（非農公布前後）",
      from: "57%",
      to: "43.9%"
    },
    footnote:
      "按兵不動的機率同步由 43.2% 升至 60.4%，下次 FOMC 為 9/16。但這是「油價急漲之前」的定價——今晚 CPI 若因能源而偏高，這組數字可能立刻被推翻。"
  },

  // ── ③ CPI ──────────────────────────────────────────────────
  cpi: {
    title: "今晚 20:30 美國 7 月 CPI",
    releaseUS: "8/12 美東 08:30（盤前）",
    releaseTW: "🇹🇼 今晚 20:30",
    expectations: [
      { name: "Headline YoY", value: "3.4%（前值 3.5%）" },
      { name: "Headline MoM", value: "+0.1%（前值 -0.4%）" },
      { name: "Core YoY", value: "2.5%（前值 2.6%）" },
      { name: "Core MoM", value: "+0.2%" },
      { name: "Cleveland Fed nowcast", value: "0.09% ~ 0.21%" }
    ],
    fear:
      "市場預期的是「通膨繼續降溫」。真正的風險是這份報告涵蓋的是 7 月——還沒反映 8 月這波油價急漲。所以就算今晚數字漂亮，能源這條線的壓力會遞延到下個月，屆時搭配疲弱就業，就是 Stagflation（停滯性通膨）的形狀。",
    scenarios: [
      { result: "Core ≤ 2.4%", fed: "升息預期進一步降溫", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "Core 2.5%（符合預期）", fed: "維持按兵不動定價", fedSignal: "g", tech: "🟢", techSignal: "g" },
      { result: "Core 2.6% ~ 2.7%", fed: "升息機率回升", fedSignal: "y", tech: "🟡", techSignal: "y" },
      { result: "Core ≥ 2.8%", fed: "9 月升息重新成為主論述", fedSignal: "r", tech: "🔴", techSignal: "r" }
    ],
    conclusion:
      "今晚 20:30 是本週唯一真正的分水嶺。台股會在 8/13 開盤直接反應，不會有緩衝。"
  },

  // ── ④ 日圓 ─────────────────────────────────────────────────
  jpy: {
    level: "USD/JPY ≈ 159.2",
    background:
      "8/10 日圓單日貶約 1%、收 159.29，是 G10 表現最差的貨幣，等於把 8 月初美日協調干預的漲幅回吐了一半。當時干預曾把美元兌日圓從接近 164 打到 156.34，一度逼近 155。美國財政部長 Bessent 先前公開表示會支持日本穩定日圓，但市場顯然已經在測試這個承諾。",
    keyLevel: "USD/JPY 160 仍是關鍵心理關卡，且距離只剩不到 1 元",
    branches: [
      {
        condition: "CPI 偏高 → USD/JPY 突破 160",
        signal: "r",
        items: ["二次干預風險大增", "Carry Trade 平倉風險 ↑", "全球科技股波動 ↑"]
      },
      {
        condition: "CPI 偏低 → 美元回落、日圓喘息",
        signal: "y",
        items: ["日圓壓力暫緩 🟢", "干預急迫性下降 🟢", "但趨勢未反轉，仍需盯 160 🟡"]
      }
    ],
    conclusion:
      "今晚 CPI 是日圓的方向盤——這也是為什麼 USD/JPY 必須跟 CPI 放在同一個螢幕上看。"
  },

  // ── ⑤ CSP / AI ─────────────────────────────────────────────
  csp: {
    rows: [
      { company: "Microsoft", result: "Azure / AI 強", ai: "🟢🟢🟢" },
      { company: "Amazon", result: "AWS 強、CapEx 提高", ai: "🟢🟢🟢" },
      { company: "Alphabet", result: "Cloud / AI 強", ai: "🟢🟢🟢" },
      { company: "Meta", result: "AI CapEx 持續", ai: "🟢🟢🟢" },
      { company: "NVIDIA", result: "8/26 財報", ai: "⭐⭐⭐⭐⭐" }
    ],
    capex: {
      title: "四大 CSP AI CapEx 合計",
      from: "2025 年約 4,100 億美元",
      to: "2026 年預計約 7,250 億美元"
    },
    takeaway: {
      not: "市場仍然沒有看到「CSP 停止砸錢買 AI」的訊號",
      but: "看到的是 CSP 繼續大幅增加 AI 資本支出",
      conclusion: "AI 多頭主線沒有破壞。8/11 的科技股回檔是估值與總經事件造成的，不是基本面轉壞。"
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
      "CSP CapEx 展望",
      "毛利率",
      "下一季 Guidance"
    ],
    note:
      "CFO Colette Kress 的書面評論會在財報公布後隨即上線（美西約 13:20）。這是 8 月下半場最重要的單一事件，在那之前 AI 估值都處於「等待驗證」狀態。"
  },

  // ── ⑦ 台股 ─────────────────────────────────────────────────
  taiex: {
    date: "8/11 收盤",
    close: "45,120.72",
    change: "+191.96",
    changePct: "+0.43%",
    turnover: "NT$902.1B",
    note:
      "盤中最高 45,195.41、最低 44,652.06，振幅逾 540 點後拉尾盤收高，正式站穩 45,000。在美股三大指數同步收黑的背景下逆勢創高，資金結構偏強；但今晚 CPI 之後，8/13 開盤會是真正的壓力測試。"
  },

  // ── ⑧ 台指期 / 結算 ────────────────────────────────────────
  futures: {
    spot: "45,120.72",
    future: "45,103",
    basis: "約 18 點逆價差（幾乎平水）",
    month: "台指期近一（8/11）",
    note:
      "台指期 8/11 收 45,103（+113、+0.25%），開 45,000、高 45,179、低 44,570，未平倉 101,913 口。重點是基差：8 月初曾出現 422.78 點的深度逆價差，現在已收斂到接近平水——空方壓力明顯減輕。8/20 台指期結算前，這個收斂能不能守住是關鍵。"
  },

  // ── ⑨ 未來重要事件 ─────────────────────────────────────────
  calendar: {
    tier1: [
      { date: "今晚", event: "🇺🇸 7 月 CPI（20:30）", hot: true },
      { date: "8/13", event: "🇺🇸 PPI" },
      { date: "8/20", event: "🇹🇼 台指期結算", hot: true },
      { date: "8/26", event: "🔥 NVIDIA 財報", hot: true }
    ],
    tier2: [
      { date: "8/14", event: "美國零售銷售" },
      { date: "8/19", event: "FOMC Minutes" },
      { date: "8/19", event: "台指選擇權結算" },
      { date: "8 月底", event: "Jackson Hole 相關訊號" },
      { date: "8/31", event: "月底法人作帳" },
      { date: "9/16", event: "FOMC 利率決議" }
    ]
  },

  // ── ⑩ 四大風險 ─────────────────────────────────────────────
  risks: [
    { n: "①", name: "今晚 CPI", signal: "r", desc: "20:30 公布。Core YoY 預期 2.5%，超過 2.7% 就會翻轉整個 Fed 定價。" },
    { n: "②", name: "油價 / 荷莫茲海峽", signal: "r", desc: "布蘭特四日連漲逼近 88。這是本週新增的風險，且會遞延污染 8 月的通膨數據。" },
    { n: "③", name: "USD/JPY", signal: "r", desc: "159.2，干預漲幅已回吐一半，距 160 不到 1 元。" },
    { n: "④", name: "US 10Y", signal: "r", desc: "升 6bps 至 4.71%，本月最高。油價與 CPI 都可能再推高它。" }
  ],

  // ── 🎯 總評 ────────────────────────────────────────────────
  scores: {
    items: [
      { name: "AI 基本面", score: 9, signal: "g", note: "CSP CapEx 仍在放大，主線完好。" },
      { name: "美股趨勢", score: 6.5, signal: "y", note: "8/11 三大指數全黑，科技股領跌，CPI 前縮手。" },
      { name: "Fed", score: 6, signal: "y", note: "升息機率降到 43.9%，但油價正在把它推回去。" },
      { name: "日圓", score: 4, signal: "r", note: "干預效果回吐一半，160 就在眼前。" },
      { name: "台股 AI", score: 8, signal: "g", note: "逆勢創高、基差收斂，但與費半 -2.94% 出現背離，補跌風險未解除。" }
    ],
    overall: { name: "整體", score: 7.0, signal: "y" },
    summary: [
      "昨天的敘事是「就業轉弱 → Fed 不敢升息 → 對科技股有利」。今天多了一條反向的線：油價。",
      "AI 基本面 🟢 ＋ 台股結構偏強 🟢 ＋ 油價推升通膨 🔴 ＋ 日圓逼近 160 🔴 ＋ CPI 今晚揭曉 🔴",
      "今晚 20:30 → 8/20 台指期結算 → 8/26 NVIDIA。第一個關卡就在今天，而且台股要到 8/13 開盤才會反應，等於隔夜裸露一次風險。"
    ]
  },

  // ── 👀 明天追蹤的數字 ──────────────────────────────────────
  watchlist: [
    "Core CPI YoY（2.5% 是分水嶺）",
    "Headline CPI YoY（預期 3.4%）",
    "布蘭特原油是否守住 88",
    "USD/JPY 有沒有破 160",
    "US 10Y 是否站上 4.75%",
    "費半 SOX 能否止穩（台股連動指標）",
    "Nasdaq 與 NVDA 盤後反應",
    "台指期夜盤與基差變化"
  ],

  // ── 📚 資料來源 ────────────────────────────────────────────
  sources: [
    { label: "Stock market news for Aug. 11, 2026 — CNBC", url: "https://www.cnbc.com/2026/08/10/stock-market-today-live-updates.html" },
    { label: "S&P 500 posts back-to-back losses, tech sell-off and Iran uncertainty — CNBC", url: "https://www.cnbc.com/2026/08/10/stock-market-today-live-updates.html" },
    { label: "最新台股大盤加權指數 — 財報狗", url: "https://statementdog.com/taiex" },
    { label: "台指期近一（WTX&）走勢圖 — Yahoo 股市", url: "https://tw.stock.yahoo.com/future/WTX&" },
    { label: "PHLX Semiconductor (^SOX) 歷史資料 — Yahoo Finance", url: "https://finance.yahoo.com/quote/%5ESOX/history/" },
    { label: "Daily Market Outlook, August 11, 2026 — Tickmill", url: "https://www.tickmill.com/blog/daily-market-outlook-august-11-2026" },
    { label: "USD/JPY Analysis for August 11, 2026 — Babypips", url: "https://www.babypips.com/analysis/premium-strategy-2026-08-11-usdjpy" },
    { label: "Yen Underperforms G-10 Peers as Intervention Boost Fades — Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-10/yen-underperforms-g-10-peers-as-intervention-boost-fades" },
    { label: "PREVIEW: US CPI due Wednesday 12th August 2026 — Newsquawk", url: "https://www.newsquawk.com/headlines/preview-us-cpi-due-wednesday-12th-august-2026-at-1330bst0830edt" },
    { label: "July CPI Expected to Bounce Back After June Decline — Morningstar", url: "https://www.morningstar.com/economy/july-cpi-expected-bounce-back-after-unexpected-june-inflation-decline" },
    { label: "Odds the Fed will hike in September tumble following big July jobs miss — CNBC", url: "https://www.cnbc.com/2026/08/07/odds-the-fed-hikes-in-september-tumble-following-big-july-jobs-miss.html" },
    { label: "Employment Situation Summary, July 2026 — BLS", url: "https://www.bls.gov/news.release/empsit.nr0.htm" },
    { label: "Gold runs hot, equity vol cools — Options Brief 10 Aug 2026 — Saxo", url: "https://www.home.saxo/content/articles/options/gold-runs-hot-equity-vol-cools---options-brief---10-august-2026-10082026" },
    { label: "Current price of gold: August 10, 2026 — Fortune", url: "https://fortune.com/article/current-price-of-gold-08-10-2026/" },
    { label: "Nvidia schedules Q2 fiscal 2027 earnings call for August 26 — Investing.com", url: "https://www.investing.com/news/assorted/nvidia-schedules-q2-fiscal-2027-earnings-call-for-august-26-432SI-4821803" },
    { label: "Big Tech Q2 2026 earnings and the AI capex question — IG", url: "https://www.ig.com/uk/trading-strategies/big-tech-q2-2026-earnings---the-ai-capex-question-and-what-uk-in-260716" }
  ]
};
