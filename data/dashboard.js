/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 每天只要更新這個檔案，網站就會自動更新。
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 詳細更新說明請看 README.md
 */
window.DASHBOARD = {
  meta: {
    version: "v3.0",
    date: "2026/08/11",
    time: "08:55",
    timezone: "台灣時間",
    // 用來做倒數計時的下一個關鍵事件（ISO 8601，含時區位移）
    countdown: {
      label: "🇺🇸 7 月 CPI 公布",
      note: "台灣時間 8/12 20:30（美東 08:30）",
      target: "2026-08-12T20:30:00+08:00"
    }
  },

  // ── 🚦 一眼結論 ──────────────────────────────────────────────
  verdict: [
    { label: "AI 基本面", state: "強", signal: "g" },
    { label: "美股風險偏好", state: "仍強", signal: "g" },
    { label: "Fed", state: "政策預期正在重新定價", signal: "y" },
    { label: "日圓", state: "現在是重要風險變數", signal: "r" },
    { label: "台股", state: "高檔震盪，AI 主線沒壞", signal: "y" },
    { label: "明天 CPI", state: "目前第一順位事件", signal: "r" }
  ],

  // ── ① 全球市場儀表板 ────────────────────────────────────────
  global: {
    rows: [
      { name: "🇺🇸 S&P 500", value: "約 7,753", signal: "g" },
      { name: "🇺🇸 Nasdaq", value: "約 26,605", signal: "g" },
      { name: "VIX", value: "15.46", signal: "g" },
      { name: "🇺🇸 10Y 公債", value: "約 4.71%", signal: "r" },
      { name: "🇺🇸 2Y 公債", value: "約 4.24%", signal: "y" },
      { name: "DXY 美元指數", value: "約 99.7", signal: "y" },
      { name: "WTI 原油", value: "約 82.3", signal: "y" },
      { name: "Gold 黃金", value: "約 4,472", signal: "g" },
      { name: "🇯🇵 USD/JPY", value: "約 159", signal: "r" },
      { name: "🇹🇼 TAIEX", value: "44,928.76（8/10）", signal: "g" }
    ],
    notes: [
      "美股仍在高檔，VIX 約 15.5，市場沒有進入恐慌狀態；但 10 年期美債殖利率約 4.7%，對高估值科技股仍是壓力。",
      "台股 8/10 大漲 702.85 點（+1.59%）收 44,928.76，成交金額約 8,474 億元。"
    ]
  },

  // ── ② Fed / 通膨 ────────────────────────────────────────────
  fed: {
    headline: "上週非農 → Fed 預期開始轉變",
    stats: [
      { label: "7 月非農", value: "-23,000 人", signal: "r" },
      { label: "市場原本預期", value: "+80,000 人", signal: "y" },
      { label: "5、6 月合計修正", value: "-103,000 人", signal: "r" },
      { label: "失業率", value: "4.1%", signal: "y" }
    ],
    shift: {
      before: "🔴 「Fed 會不會升息？」",
      after: "🟡 「經濟開始變弱，但通膨能不能下來？」"
    },
    probability: {
      label: "市場認為 9 月升息機率",
      from: "約 67%",
      to: "52%"
    },
    footnote: "這個轉變對科技股非常重要。"
  },

  // ── ③ CPI ──────────────────────────────────────────────────
  cpi: {
    title: "8/12 美國 CPI —— 現在最重要",
    releaseUS: "8/12 美國時間 08:30 公布（BLS 確認）",
    releaseTW: "🇹🇼 台灣時間 8/12 晚上 20:30",
    expectations: [
      { name: "Headline YoY", value: "約 3.4%" },
      { name: "Core YoY", value: "約 2.8% 附近" },
      { name: "Core MoM", value: "約 +0.2%" }
    ],
    fear: "市場最怕的不是單純 CPI 高，而是「就業很差 + 通膨又很高」——也就是 Stagflation（停滯性通膨）。",
    scenarios: [
      { result: "≤ 3.3%", fed: "升息壓力下降", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "3.4% 附近", fed: "符合預期", fedSignal: "y", tech: "🟢", techSignal: "g" },
      { result: "3.5% ~ 3.6%", fed: "升息預期增加", fedSignal: "y", tech: "🟡", techSignal: "y" },
      { result: "≥ 3.7%", fed: "Fed 壓力大增", fedSignal: "r", tech: "🔴", techSignal: "r" }
    ],
    conclusion: "明天晚上 20:30 是本週最大的市場風險點。"
  },

  // ── ④ 日圓 ─────────────────────────────────────────────────
  jpy: {
    level: "USD/JPY ≈ 159",
    background:
      "上週美日曾進行協調式干預，日圓一度從接近 164 快速升值至 155 附近，但現在又回到 159 左右。美國財政部長 Bessent 已公開表示，美國會支持日本穩定日圓。",
    keyLevel: "USD/JPY 160 是重要心理關卡",
    branches: [
      {
        condition: "USD/JPY → 160 以上",
        signal: "r",
        items: ["干預風險 ↑", "Carry Trade 風險 ↑", "全球科技股波動 ↑"]
      },
      {
        condition: "USD/JPY → 155 附近",
        signal: "y",
        items: ["日圓升值 🟢", "Carry Trade 可能開始平倉 🟡", "台股短線波動可能增加 🟡"]
      }
    ],
    conclusion: "USD/JPY 列入每日 Dashboard 第一級監控。"
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
      title: "2026 年四大 CSP AI CapEx 合計",
      from: "2025 年約 4,100 億美元",
      to: "2026 年預計約 7,250 億美元"
    },
    takeaway: {
      not: "市場還沒有看到「CSP 停止砸錢買 AI」",
      but: "反而看到「CSP 繼續增加 AI 資本支出」",
      conclusion: "AI 多頭主線目前沒有破壞。"
    }
  },

  // ── ⑥ NVIDIA ───────────────────────────────────────────────
  nvidia: {
    event: "8/26 NVIDIA 財報",
    subtitle: "接下來一個月最重要的公司事件",
    watch: [
      "Data Center Revenue",
      "Blackwell",
      "GB300",
      "Hopper → Blackwell 轉換",
      "CSP CapEx",
      "毛利率",
      "下一季 Guidance"
    ],
    note: "目前市場對 NVIDIA 的基本面仍非常樂觀；近期股價也因 AI 基礎建設需求預期而走強。"
  },

  // ── ⑦ 台股 ─────────────────────────────────────────────────
  taiex: {
    date: "8/10",
    close: "44,928.76",
    change: "+702.85",
    changePct: "+1.59%",
    turnover: "NT$847.4B",
    note: "台股已重新接近 45,000 點。接下來不能只看「會不會漲」，而要開始看：成交量 + 外資期貨 + 台指期基差。"
  },

  // ── ⑧ 台指期 / 結算 ────────────────────────────────────────
  futures: {
    spot: "44,929",
    future: "44,297",
    basis: "約 600 點逆價差",
    month: "8 月台指期",
    note: "外資台指期部位，列為未來兩週的重要觀察項目。"
  },

  // ── ⑨ 未來重要事件 ─────────────────────────────────────────
  calendar: {
    tier1: [
      { date: "8/12", event: "🇺🇸 CPI", hot: true },
      { date: "8/13", event: "🇺🇸 PPI" },
      { date: "8/20", event: "🇹🇼 台指期結算", hot: true },
      { date: "8/26", event: "🔥 NVIDIA 財報", hot: true }
    ],
    tier2: [
      { date: "8/14", event: "美國零售銷售" },
      { date: "8/19", event: "FOMC Minutes" },
      { date: "8/19", event: "台指選擇權結算" },
      { date: "8 月底", event: "Jackson Hole 相關訊號" },
      { date: "8/31", event: "月底法人作帳" }
    ]
  },

  // ── ⑩ 四大風險 ─────────────────────────────────────────────
  risks: [
    { n: "①", name: "CPI", signal: "r", desc: "明天晚上 20:30。" },
    { n: "②", name: "USD/JPY", signal: "r", desc: "159 → 160 非常敏感。" },
    { n: "③", name: "US 10Y", signal: "r", desc: "目前約 4.7%，若 CPI 高於預期可能再往上。" },
    { n: "④", name: "NVIDIA", signal: "y", desc: "8/26 財報之前，AI 估值已經不低。" }
  ],

  // ── 🎯 總評 ────────────────────────────────────────────────
  scores: {
    items: [
      { name: "AI 基本面", score: 9, signal: "g", note: "CSP 仍然願意大幅增加 CapEx。" },
      { name: "美股趨勢", score: 8, signal: "g", note: "S&P、Nasdaq 仍在高檔。" },
      { name: "Fed", score: 6, signal: "y", note: "就業轉弱，但通膨仍高。" },
      { name: "日圓", score: 4, signal: "r", note: "159 附近，剛發生美日協調干預。" },
      { name: "台股 AI", score: 8, signal: "g", note: "台積電及 AI 供應鏈仍是主要資金方向。" }
    ],
    overall: { name: "整體", score: 7.5, signal: "y" },
    summary: [
      "目前不是「AI 多頭結束」的環境。比較像是：",
      "AI 基本面 🟢 ＋ 估值偏高 🟡 ＋ CPI 等待期 🔴 ＋ 日圓干預風險 🔴",
      "所以 8/12 CPI → 8/20 台指期結算 → 8/26 NVIDIA，就是接下來這段行情最重要的三個時間點。"
    ]
  },

  // ── 👀 明天追蹤的 7 個數字 ─────────────────────────────────
  watchlist: [
    "CPI 實際值 / 預期值",
    "Core CPI",
    "USD/JPY",
    "US 10Y",
    "DXY",
    "Nasdaq / NVDA",
    "台指期夜盤"
  ],

  // ── 📚 資料來源 ────────────────────────────────────────────
  sources: [
    { label: "US 10-Year Bond Yield — Investing.com", url: "https://www.investing.com/rates-bonds/u.s.-10-year-bond-yield" },
    { label: "TAIEX closes near 45000 points — Taiwan News", url: "https://www.taiwannews.com.tw/en/news/6418494" },
    { label: "Employment Situation Summary — BLS", url: "https://www.bls.gov/news.release/empsit.nr0.htm" },
    { label: "Dollar gains, yen weakens as markets eye US CPI — Reuters", url: "https://www.reuters.com/world/asia-pacific/dollar-near-two-month-trough-us-inflation-data-awaited-2026-08-10/" },
    { label: "Consumer Price Index Summary — BLS", url: "https://www.bls.gov/news.release/cpi.nr0.htm" },
    { label: "Yen holds gains after Japan, US confirm joint intervention — Reuters", url: "https://www.reuters.com/world/asia-pacific/japan-vow-coordination-with-us-weak-yen-historic-battle-2026-08-02/" },
    { label: "US will do 'whatever it takes' to support Japan — Reuters", url: "https://www.reuters.com/world/asia-pacific/us-treasury-secretary-bessent-will-do-whatever-it-takes-support-japan-2026-08-04/" },
    { label: "Big Tech Q2 2026 earnings and the AI capex question — IG", url: "https://www.ig.com/uk/trading-strategies/big-tech-q2-2026-earnings---the-ai-capex-question-and-what-uk-in-260716" },
    { label: "NVIDIA (NVDA) analysis — TradingKey", url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262091948-nvidia-nvda-q1-fy2027-81-billion-data-center-92-percent-trendline-breakout-tradingkey" },
    { label: "Taiwan Weighted Idx Futures — Barchart", url: "https://www.barchart.com/futures/quotes/TW%2A0" }
  ]
};
