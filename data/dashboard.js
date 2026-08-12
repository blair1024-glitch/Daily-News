/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 每天只要更新這個檔案，網站就會自動更新。
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 詳細更新說明請看 README.md
 */
window.DASHBOARD = {
  meta: {
    version: "v3.2",
    date: "2026/08/13",
    time: "07:40",
    timezone: "台灣時間",
    // 用來做倒數計時的下一個關鍵事件（ISO 8601，含時區位移）
    countdown: {
      label: "🇺🇸 7 月 PPI 公布",
      note: "今晚 20:30（美東 8/13 08:30）｜MoM 預期 +0.2%",
      target: "2026-08-13T20:30:00+08:00"
    }
  },

  // ── 🚦 一眼結論 ──────────────────────────────────────────────
  verdict: [
    { label: "CPI", state: "✅ 完全命中預期，過關", signal: "g" },
    { label: "AI 基本面", state: "CoreWeave 營收翻倍，實證", signal: "g" },
    { label: "費半背離", state: "已由費半補漲收斂", signal: "g" },
    { label: "Fed", state: "9 月按兵不動更確定", signal: "g" },
    { label: "日圓", state: "159.3，160 關卡未解除", signal: "r" },
    { label: "今晚 PPI", state: "通膨鏈的另一半", signal: "y" }
  ],

  // ── ① 全球市場儀表板 ────────────────────────────────────────
  global: {
    rows: [
      { name: "🇺🇸 S&P 500", value: "7,748.50（+0.26%）", signal: "g" },
      { name: "🇺🇸 Nasdaq", value: "26,588.49（+0.54%）", signal: "g" },
      { name: "🇺🇸 Dow", value: "53,770.27（-0.04%）", signal: "y" },
      { name: "🔥 費城半導體 SOX", value: "8/12 區間 11,993–12,433（強彈）", signal: "g" },
      { name: "VIX", value: "14.68（-3.93%）", signal: "g" },
      { name: "🇺🇸 10Y 公債", value: "4.69%（-1bp）", signal: "y" },
      { name: "🇺🇸 2Y 公債", value: "約 4.24%（前一交易日）", signal: "y" },
      { name: "DXY 美元指數", value: "約 99.7（前一交易日）", signal: "y" },
      { name: "🛢️ WTI 原油（9 月）", value: "83.05（-0.18%）", signal: "y" },
      { name: "Gold 黃金", value: "4,466.30（+0.57%）", signal: "g" },
      { name: "🇯🇵 USD/JPY", value: "159.34（+0.03%）", signal: "r" },
      { name: "🇹🇼 TAIEX", value: "45,518.07（8/12，+0.88%）", signal: "g" }
    ],
    notes: [
      "CPI 完全落在市場預期上，美股開盤即創高但隨後回吐大半漲幅——說明這個結果早已被定價。真正推動盤面的是 AI 基建財報：CoreWeave Q2 營收 26 億美元、年增 112%，股價單日 +19%，Nebius +34%，帶動伺服器、記憶體、光通訊全面走揚。",
      "✅ 昨天標記的「費半 vs 台股背離」已經有答案了：是**費半補漲**收斂，不是台股補跌。SOX 8/12 自低點 11,993 一路衝到 12,433，昨天的補跌疑慮解除。",
      "10Y 微降至 4.69%、VIX 跌至 14.68、黃金反彈至 4,466.30，油價則自高點回落（WTI 9 月 83.05）——通膨恐慌暫時退潮。",
      "⚠️ DXY、2Y 公債、SOX 收盤價未取得 8/12 可靠來源，已於欄位標註為前值或區間。"
    ]
  },

  // ── ② Fed / 通膨 ────────────────────────────────────────────
  fed: {
    headline: "CPI 命中預期 → 9 月按兵不動的定價站穩了",
    stats: [
      { label: "7 月 Headline CPI", value: "3.4% YoY", signal: "g" },
      { label: "7 月 Core CPI", value: "2.5% YoY", signal: "g" },
      { label: "Core 對比前值", value: "2.6% → 2.5%", signal: "g" },
      { label: "7 月非農", value: "-23,000 人", signal: "r" },
      { label: "失業率", value: "4.1%", signal: "y" }
    ],
    shift: {
      before: "🟡 「就業轉弱，但油價會不會把通膨推回去？」",
      after: "🟢 「CPI 沒有被油價污染，Fed 有空間按兵不動」"
    },
    probability: {
      label: "市場對 9 月升息的定價（非農前 → 現在）",
      from: "57%",
      to: "43.9% 以下"
    },
    footnote:
      "Core CPI 2.5% 是 2 月以來最低。這份報告「剛好夠低」，讓 Fed 在 9/16 有理由不動。但要注意它涵蓋的是 7 月——8 月油價那一波還沒進到數字裡，所以下個月的 CPI 才是真正的考驗。"
  },

  // ── ③ 今晚 PPI ─────────────────────────────────────────────
  cpi: {
    title: "今晚 20:30 美國 7 月 PPI",
    releaseUS: "8/13 美東 08:30（盤前）",
    releaseTW: "🇹🇼 今晚 20:30",
    expectations: [
      { name: "PPI MoM", value: "預期 +0.2%" },
      { name: "昨日 CPI Headline", value: "3.4% ✅ 命中" },
      { name: "昨日 CPI Core", value: "2.5% ✅ 命中" },
      { name: "明日零售銷售（8/14）", value: "MoM 預期 +0.2%" },
      { name: "核心零售（ex-autos）", value: "預期 +0.2%（前值 -0.2%）" }
    ],
    fear:
      "PPI 是通膨鏈的上游。CPI 過關不代表壓力解除——如果 PPI 明顯高於 +0.2%，代表成本壓力還積在生產端，只是還沒轉嫁到消費者，那麼 8 月、9 月的 CPI 就會被推高。這正是油價那條線可能發作的路徑。",
    scenarios: [
      { result: "PPI ≤ 0.1%", fed: "通膨壓力確認退潮", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "PPI +0.2%（符合預期）", fed: "維持按兵不動", fedSignal: "g", tech: "🟢", techSignal: "g" },
      { result: "PPI +0.3% ~ 0.4%", fed: "上游壓力浮現", fedSignal: "y", tech: "🟡", techSignal: "y" },
      { result: "PPI ≥ 0.5%", fed: "9 月升息論述回頭", fedSignal: "r", tech: "🔴", techSignal: "r" }
    ],
    conclusion:
      "CPI 已經過關，今晚 PPI 是本週最後一道通膨關卡。過了之後，市場焦點就會完全轉向 8/20 台指期結算與 8/26 NVIDIA。"
  },

  // ── ④ 日圓 ─────────────────────────────────────────────────
  jpy: {
    level: "USD/JPY ≈ 159.34",
    background:
      "CPI 落在預期上，美元沒有明顯走弱，USD/JPY 幾乎不動（+0.03%）。這代表 8 月初美日協調干預所建立的防線正在被緩慢消耗——干預曾把匯價從接近 164 打到 156.34，如今已回到 159 中段，漲幅回吐超過一半，而且是在「美國通膨數據偏鴿」的背景下守不住。",
    keyLevel: "USD/JPY 160 仍是關鍵心理關卡，距離不到 0.7 元",
    branches: [
      {
        condition: "今晚 PPI 偏高 → 美元走強、突破 160",
        signal: "r",
        items: ["二次干預風險大增", "Carry Trade 平倉風險 ↑", "台股與科技股波動放大"]
      },
      {
        condition: "PPI 溫和 → 維持 158～160 區間震盪",
        signal: "y",
        items: ["短線壓力緩解 🟢", "但趨勢仍偏貶 🟡", "日銀政策才是解方，非干預 🟡"]
      }
    ],
    conclusion:
      "在利多（CPI 鴿派）之下日圓仍站不回去，本身就是弱勢訊號。160 一旦破，反應會很快。"
  },

  // ── ⑤ CSP / AI ─────────────────────────────────────────────
  csp: {
    rows: [
      { company: "CoreWeave", result: "Q2 營收 26 億、+112%，股價 +19%", ai: "🟢🟢🟢" },
      { company: "Nebius", result: "財報後單日 +34%", ai: "🟢🟢🟢" },
      { company: "Microsoft", result: "Azure / AI 強", ai: "🟢🟢🟢" },
      { company: "Amazon", result: "AWS 強、CapEx 提高", ai: "🟢🟢🟢" },
      { company: "Alphabet / Meta", result: "Cloud 與 AI CapEx 持續", ai: "🟢🟢🟢" },
      { company: "NVIDIA", result: "8/26 財報", ai: "⭐⭐⭐⭐⭐" }
    ],
    capex: {
      title: "四大 CSP AI CapEx 合計",
      from: "2025 年約 4,100 億美元",
      to: "2026 年預計約 7,250 億美元"
    },
    takeaway: {
      not: "市場仍然沒有看到「AI 需求見頂」的任何跡象",
      but: "反而看到 neocloud 業者營收年增 112%，且新增 Anthropic、Meta 等企業客戶、上調全年財測",
      conclusion:
        "這是 CapEx 之外的第二層驗證——錢不只花出去，另一端已經開始收到營收。AI 主線目前是這波行情最硬的基本面支撐。"
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
      "CoreWeave、Nebius 的財報等於幫 NVIDIA 先做了需求端背書——neocloud 營收翻倍，買的就是 NVIDIA 的卡。這讓 8/26 的預期門檻同步被墊高：達標是應該的，不如預期的懲罰會更重。"
  },

  // ── ⑦ 台股 ─────────────────────────────────────────────────
  taiex: {
    date: "8/12 收盤",
    close: "45,518.07",
    change: "+397.35",
    changePct: "+0.88%",
    turnover: "NT$860.4B",
    note:
      "開 45,175.70（同為當日最低）、最高 45,529.48，幾乎是開低走高一路收在高檔。連兩日創高，且這次有費半同步走揚背書，不再是孤軍。成交金額 8,604 億元略低於前一日的 9,020 億，量能小幅縮減是唯一要留意的地方。"
  },

  // ── ⑧ 台指期 / 結算 ────────────────────────────────────────
  futures: {
    spot: "45,518.07",
    future: "45,697",
    basis: "約 179 點正價差",
    month: "台指期近一（8/12）",
    note:
      "基差結構出現實質轉變：8 月初曾是 422.78 點的深度逆價差，8/11 收斂到接近平水，8/12 直接翻成 179 點正價差。期貨領先現貨，且已反映 CPI 後的美股走勢，today 開高機率高。距離 8/20 結算剩 5 個交易日，正價差能否維持是多方氣勢的溫度計。"
  },

  // ── ⑨ 未來重要事件 ─────────────────────────────────────────
  calendar: {
    tier1: [
      { date: "今晚", event: "🇺🇸 7 月 PPI（20:30）", hot: true },
      { date: "8/14", event: "🇺🇸 零售銷售（20:30）" },
      { date: "8/20", event: "🇹🇼 台指期結算", hot: true },
      { date: "8/26", event: "🔥 NVIDIA 財報", hot: true }
    ],
    tier2: [
      { date: "8/19", event: "FOMC Minutes" },
      { date: "8/19", event: "台指選擇權結算" },
      { date: "8 月底", event: "Jackson Hole 相關訊號" },
      { date: "8/31", event: "月底法人作帳" },
      { date: "9/16", event: "FOMC 利率決議" }
    ]
  },

  // ── ⑩ 四大風險 ─────────────────────────────────────────────
  risks: [
    { n: "①", name: "今晚 PPI", signal: "y", desc: "20:30。上游成本若沒降，油價那條線會在 8 月 CPI 發作。" },
    { n: "②", name: "USD/JPY", signal: "r", desc: "159.34。在 CPI 偏鴿的環境下仍站不回去，160 一破反應會很快。" },
    { n: "③", name: "AI 股短線過熱", signal: "r", desc: "CoreWeave +19%、Nebius +34%。基本面是真的，但單日漲幅已進入投機區間。" },
    { n: "④", name: "8/26 NVIDIA 預期墊高", signal: "y", desc: "neocloud 財報先幫需求背書，反而讓 NVIDIA 的達標門檻變高。" }
  ],

  // ── 🎯 總評 ────────────────────────────────────────────────
  scores: {
    items: [
      { name: "AI 基本面", score: 9.5, signal: "g", note: "CoreWeave 營收年增 112%，需求端首次拿到硬數據驗證。" },
      { name: "美股趨勢", score: 7.5, signal: "g", note: "CPI 過關，S&P 重回測試新高，但漲幅開高走低。" },
      { name: "Fed", score: 7, signal: "g", note: "Core 2.5% 為 2 月以來最低，9 月按兵不動站穩。" },
      { name: "日圓", score: 4, signal: "r", note: "利多之下仍守不住，干預漲幅回吐過半。" },
      { name: "台股 AI", score: 8.5, signal: "g", note: "連兩日創高、費半同步走揚、基差翻正價差。" }
    ],
    overall: { name: "整體", score: 7.6, signal: "g" },
    summary: [
      "兩天前的三個問號——CPI、費半背離、基差——昨天一次全部給了正面答案。",
      "AI 基本面 🟢🟢 ＋ CPI 過關 🟢 ＋ 費半補漲 🟢 ＋ 基差翻正 🟢 ＋ 日圓 160 未解 🔴 ＋ AI 股短線過熱 🔴",
      "今晚 PPI → 8/20 台指期結算 → 8/26 NVIDIA。通膨這條線今晚就走完，之後行情的主導權會完全交回給 AI 財報。"
    ]
  },

  // ── 👀 明天追蹤的數字 ──────────────────────────────────────
  watchlist: [
    "PPI MoM（+0.2% 是分水嶺）",
    "USD/JPY 有沒有破 160",
    "費半 SOX 能否守住 12,400",
    "台指期正價差能否維持",
    "CoreWeave / Nebius 是否回吐",
    "US 10Y 是否續守 4.7% 以下",
    "台股量能（8,604 億是否再縮）",
    "8/14 零售銷售預覽"
  ],

  // ── 📚 資料來源 ────────────────────────────────────────────
  sources: [
    { label: "CPI inflation report July 2026: 0.1% MoM, 3.4% YoY — CNBC", url: "https://www.cnbc.com/2026/08/12/cpi-inflation-report-july-2026.html" },
    { label: "CPI report shows inflation cooled to 3.4% in July — Quartz", url: "https://qz.com/us-cpi-july-2026-consumer-prices-inflation-081226" },
    { label: "S&P 500 closes higher after tame inflation report, tech rises — CNBC", url: "https://www.cnbc.com/2026/08/11/stock-market-today-live-updates.html" },
    { label: "Stock Market Today (Aug. 12, 2026) — TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-aug-12-2026" },
    { label: "CoreWeave gains 19%, Nebius surges 34% in post-earnings neocloud rally — CNBC", url: "https://www.cnbc.com/2026/08/12/coreweave-q2-earnings-ai-demand.html" },
    { label: "Why CoreWeave Stock Is Skyrocketing Today — Motley Fool", url: "https://www.fool.com/investing/2026/08/12/why-coreweave-stock-is-skyrocketing-today/" },
    { label: "最新台股大盤加權指數 — 財報狗", url: "https://statementdog.com/taiex" },
    { label: "台指期近一（WTX&）走勢圖 — Yahoo 股市", url: "https://tw.stock.yahoo.com/future/WTX&" },
    { label: "PHLX Semiconductor (^SOX) 歷史資料 — Yahoo Finance", url: "https://finance.yahoo.com/quote/%5ESOX/history/" },
    { label: "US 10 Year Treasury Note Yield — Trading Economics", url: "https://tradingeconomics.com/united-states/government-bond-yield" },
    { label: "Japanese Yen quote — Trading Economics", url: "https://tradingeconomics.com/japan/currency" },
    { label: "CBOE Volatility Index (^VIX) — Yahoo Finance", url: "https://finance.yahoo.com/quote/%5EVIX/" },
    { label: "Producer Price Index Home — BLS", url: "https://www.bls.gov/ppi/" },
    { label: "Advance Monthly Retail Sales — US Census Bureau", url: "https://www.census.gov/retail/marts/www/marts_current.pdf" },
    { label: "Nvidia schedules Q2 fiscal 2027 earnings call for August 26 — Investing.com", url: "https://www.investing.com/news/assorted/nvidia-schedules-q2-fiscal-2027-earnings-call-for-august-26-432SI-4821803" }
  ]
};
