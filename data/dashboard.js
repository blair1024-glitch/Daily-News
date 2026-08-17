/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 每天只要更新這個檔案，網站就會自動更新。
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 台股數字來自 data/market-auto.js（GitHub Actions 自動抓取），詳見 README。
 */
window.DASHBOARD = {
  meta: {
    version: "v3.6",
    date: "2026/08/18",
    time: "08:10",
    timezone: "台灣時間",
    countdown: {
      label: "🇺🇸 FOMC 會議紀要",
      note: "8/20 清晨 02:00（美東 8/19 14:00）｜同日台指期結算",
      target: "2026-08-20T02:00:00+08:00"
    }
  },

  // ── 🚦 一眼結論 ──────────────────────────────────────────────
  verdict: [
    { label: "30Y 殖利率", state: "5.311%，19 年新高", signal: "r" },
    { label: "油價", state: "Brent 破 90，美伊升溫", signal: "r" },
    { label: "投信", state: "由買 80 億翻為賣 177 億", signal: "r" },
    { label: "台股量能", state: "急凍 -11.6%", signal: "r" },
    { label: "散戶", state: "融資反手加碼、回補空單", signal: "r" },
    { label: "8/20 結算", state: "未平倉單日減 3.3 萬口", signal: "y" }
  ],

  // ── ① 全球市場儀表板 ────────────────────────────────────────
  global: {
    rows: [
      { name: "🇺🇸 S&P 500", value: "7,745.06（-0.52%）", signal: "y" },
      { name: "🇺🇸 Nasdaq", value: "26,644.91（-0.32%）", signal: "y" },
      { name: "🇺🇸 Dow", value: "53,459.78（-272.63）", signal: "y" },
      { name: "🔥 費城半導體 SOX", value: "12,417.05（8/14，待更新）", signal: "y" },
      { name: "VIX", value: "約 14.2（2026 年最低）", signal: "g" },
      { name: "🚨 30Y 公債", value: "5.311%（19 年新高）", signal: "r" },
      { name: "🇺🇸 10Y 公債", value: "4.724%（+2bps，8 個月高）", signal: "r" },
      { name: "🇺🇸 2Y 公債", value: "4.182%（+1bp）", signal: "y" },
      { name: "DXY 美元指數", value: "約 99.4（6 月以來最低）", signal: "y" },
      { name: "🛢️ Brent 原油", value: "90（美伊 MOU 到期）", signal: "r" },
      { name: "Gold 黃金", value: "4,395.38（+0.45%）", signal: "g" },
      { name: "🇯🇵 USD/JPY", value: "159.47（+0.09%）", signal: "r" },
      { name: "🇨🇳 USD/CNY 中間價", value: "6.7882（8/12）", signal: "y" },
      { name: "🇹🇼 USD/TWD", value: "32.2270（8/12）", signal: "y" },
      { name: "🇹🇼 TAIEX", value: "45,857.27（8/17，+46.26）", signal: "y" },
      { name: "🇹🇼 櫃買 OTC", value: "成交 1,805.96 億（點位未取得）", signal: "r" }
    ],
    notes: [
      "**債市才是今天的主角。** 30 年期美債殖利率升破 5.311%，是 2007 年 6 月以來最高——距今 19 年。10Y 升至 4.724%（8 個月新高）、2Y 4.182%。長天期漲得比短天期兇，代表市場擔心的不是升息，是**通膨黏著與政府借貸**。",
      "推力來自油價：美伊之間的備忘錄於週一到期，戰事重啟疑慮使 Brent 站上 90 美元。美股三大指數因此同步收黑。",
      "⚠️ **一組矛盾訊號**：DXY 連三日走弱至約 99.4（6 月以來最低）、VIX 約 14.2（2026 年最低），但殖利率與油價齊漲。低波動與高殖利率並存通常不會持久——不是殖利率回落，就是波動率補漲。",
      "SOX 8/17 收盤價未取得可靠來源，顯示為 8/14 數值並標註日期。人民幣與新台幣匯率為 8/12 值。"
    ]
  },

  // ── ② Fed / 通膨 ────────────────────────────────────────────
  fed: {
    headline: "「Fed 不升息」與「殖利率飆到 19 年新高」正在打架",
    stats: [
      { label: "30Y 殖利率", value: "5.311%（19 年高）", signal: "r" },
      { label: "10Y 殖利率", value: "4.724%（8 個月高）", signal: "r" },
      { label: "2Y 殖利率", value: "4.182%", signal: "y" },
      { label: "9 月升息機率", value: "< 35%", signal: "g" },
      { label: "7 月零售銷售", value: "-0.6% MoM", signal: "r" }
    ],
    shift: {
      before: "🟡 「Fed 不升息的原因，正在從通膨降了變成經濟在弱」",
      after: "🔴 「Fed 就算不動，長天期殖利率照樣自己漲上去」"
    },
    probability: {
      label: "9 月升息機率（上週 → 現在）",
      from: "55%",
      to: "< 35%"
    },
    footnote:
      "這是本週最需要想清楚的一點：升息機率仍低於 35%，但 30 年期殖利率創 19 年新高。兩者不矛盾——市場不是在定價 Fed 升息，而是在定價**通膨黏著＋政府借貸需求**。對股市而言，這種「Fed 幫不上忙的殖利率上升」比升息更難處理，因為沒有政策轉向可以期待。8/20 清晨的會議紀要能否安撫長端，是這週的關鍵。"
  },

  // ── ③ 本週關鍵：FOMC 會議紀要 ──────────────────────────────
  cpi: {
    title: "8/20 清晨 FOMC 會議紀要",
    releaseUS: "8/19 美東 14:00",
    releaseTW: "🇹🇼 8/20 清晨 02:00",
    expectations: [
      { name: "涵蓋會議", value: "7/28-29 FOMC" },
      { name: "現行利率", value: "3.50% ~ 3.75%（維持）" },
      { name: "同日事件", value: "🇹🇼 8/20 台指期結算" },
      { name: "本週已發生", value: "30Y 破 5.31%、Brent 破 90" },
      { name: "下次 FOMC", value: "9/15-16" }
    ],
    fear:
      "紀要涵蓋的是 7 月底，當時非農爆冷、零售轉弱、油價這波都還沒發生，所以它不具預測力。真正的看點是**基準線**：Fed 在資料還好的時候對通膨黏著有多擔心。如果當時就已有委員點名長端殖利率與財政供給，那麼這幾天的走勢就不是意外，而是市場提前反映；若紀要對此隻字未提，代表 Fed 落後於曲線。",
    scenarios: [
      { result: "紀要提及長端殖利率／財政供給", fed: "市場認為 Fed 有在看", fedSignal: "g", tech: "🟢", techSignal: "g" },
      { result: "紀要聚焦通膨與就業平衡", fed: "維持現有定價", fedSignal: "y", tech: "🟡", techSignal: "y" },
      { result: "紀要偏鷹、無視長端", fed: "殖利率壓力延續", fedSignal: "r", tech: "🔴", techSignal: "r" }
    ],
    conclusion:
      "但對台股而言，同一天早上的台指期結算影響更直接——而且未平倉量已在 8/17 單日暴減 3.3 萬口。8/20 仍是本週唯一要標紅的日子。"
  },

  // ── ④ 日圓 ─────────────────────────────────────────────────
  jpy: {
    level: "USD/JPY ≈ 159.47",
    background:
      "日圓連續第五個交易日在 159 附近盤整，8/17 微幅走貶至 159.47。值得注意的是背景條件：美元指數連三日下滑至約 99.4（6 月以來最低），照理對日圓有利，但日圓還是升不上去。同時美債長天期殖利率飆到 19 年新高——**利差擴大正在抵銷美元走弱的效果**，這對日圓是比之前更不利的組合。",
    keyLevel: "160 仍未突破，但支撐條件正在惡化",
    branches: [
      {
        condition: "30Y 續漲 → 利差擴大、突破 160",
        signal: "r",
        items: ["二次干預機率大增", "Carry Trade 平倉風險 ↑", "台股與科技股波動放大"]
      },
      {
        condition: "殖利率回落 → 回測 156~158",
        signal: "y",
        items: ["壓力暫緩 🟢", "但需日銀實際升息才會反轉 🟡", "干預只能買時間 🟡"]
      }
    ],
    conclusion:
      "連續第五天，這仍是 dashboard 上唯一沒有改善的指標。而今天多了一個新的壓力源：美債長端。"
  },

  // ── ⑤ CSP / AI ─────────────────────────────────────────────
  csp: {
    rows: [
      { company: "CoreWeave", result: "Q2 營收 +112%，前波 +19%", ai: "🟢🟢🟢" },
      { company: "Nebius", result: "財報後單日 +34%", ai: "🟢🟢🟢" },
      { company: "Broadcom", result: "8/14 單日 -6%", ai: "🔴" },
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
      not: "基本面沒有壞：CapEx 與 neocloud 營收兩層驗證都還在",
      but: "但估值的敵人換了——現在是折現率。30Y 破 5.31% 對長天期現金流的科技股是直接的估值壓力",
      conclusion:
        "AI 的成長故事沒變，變的是拿什麼利率去折現它。在 8/26 NVIDIA 之前，這個板塊要同時扛住殖利率與財報預期兩件事。"
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
      "剩 6 個交易日。這期間 AI 板塊沒有其他大型催化劑，卻要面對 30Y 破 5.31% 的估值壓力。好消息已經在 CoreWeave、Nebius 的財報時提前反映，達標無功、不達標重罰的結構沒變。"
  },

  // ── ⑦ 台股 ─────────────────────────────────────────────────
  taiex: {
    date: "8/17 收盤",
    close: "45,857.27",
    change: "+46.26",
    changePct: "+0.10%",
    turnover: "NT$981.1B",
    note:
      "**量能急凍才是重點，不是那 46 點。** 成交金額由 8/14 的 1 兆 1,097 億萎縮至 9,810 億，**單日縮 11.6%**，跌破兆元關卡；櫃買市場更劇烈，由 2,445 億降至 1,806 億、縮 26%。指數幾乎沒動，但參與度明顯撤退。在 8/20 結算前出現這種價平量縮，通常代表資金選擇觀望而非加碼。"
  },

  // ── ⑧ 台股籌碼面（三大法人 / 融資融券）─────────────────────
  chips: {
    date: "8/17 盤後（證交所官方數據）",
    institutions: [
      { name: "外資及陸資", tse: "+454.47 億", otc: "未取得", signal: "g" },
      { name: "投信", tse: "-177.47 億", otc: "未取得", signal: "r" },
      { name: "自營商", tse: "+14.05 億", otc: "未取得", signal: "g" },
      { name: "　自行買賣", tse: "+35.40 億", otc: "—", signal: "g" },
      { name: "　避險", tse: "-21.35 億", otc: "—", signal: "r" },
      { name: "三大法人合計", tse: "+291.06 億", otc: "未取得", signal: "g" }
    ],
    note:
      "🔴 **更正前一版的判斷。** v3.5 寫「投信回頭進場⋯內資法人跟上了」，把 8/14 的買超 79.73 億讀成轉向訊號。結果隔一個交易日，投信就**大賣 177.47 億**——不只回吐，還倒過來砍。這個判斷被推翻了：8/14 那筆買超不是趨勢起點，比較像單日調節。外資則相當穩定，連兩個交易日買超 450 億上下（8/14 453.51、8/17 454.47），目前是唯一的撐盤力量。合計買超降至 291.06 億（分項加總 291.05，進位差 0.01）。**外資獨撐、投信倒貨、散戶接刀、量能急凍**——這是比上週更脆弱的結構（散戶動向見下方融資融券欄）。",
    margin: {
      title: "融資融券（信用交易）",
      rows: [
        { name: "集中市場融資餘額", value: "5,501.02 億", signal: "r" },
        { name: "融資單日增減", value: "+30.43 億", signal: "r" },
        { name: "融券餘額", value: "218,218 張", signal: "r" },
        { name: "融券單日增減", value: "-4,609 張", signal: "r" }
      ],
      warning:
        "🔴 **散戶方向整個反轉，而且我原本的推測又錯了。** 8/14 的結論是散戶在降槓桿（融資 -27.22 億、融券 +8,781 張），我當時傾向認為在量能急凍下這個方向會延續。實際 8/17 完全相反：**融資增加 30.43 億至 5,501.02 億，融券減少 4,609 張**——散戶反手加碼、同時回補空單。把它跟同一天投信大賣 177.47 億放在一起看，結論很直接：**投信在倒貨，散戶在接**。這是高檔換手裡最不健康的一種組合，也推翻了 8/14「散戶降槓桿是相對健康結構」的讀法。（本欄數據為排程延後至 19:00 後補抓取得，此前 17:00 抓取時證交所尚未發布。）"
    }
  },

  // ── ⑨ 台指期 / 結算 ────────────────────────────────────────
  futures: {
    spot: "45,857.27",
    future: "45,888",
    basis: "+30.73 點正價差",
    month: "台指期 202608（8/17）",
    note:
      "**未平倉量單日暴減 33,172 口**（84,339 → 51,167），減幅近四成，成交量 79,450 口。這是 8/20 結算前的大規模減倉，規模比前一版預期的大得多。基差方面，正價差 +30.73 點，與 8/14 的 +29.99 點幾乎持平——前一版說「若翻為逆價差即是轉弱確認」，**這件事尚未發生**，基差在低檔穩住了。所以目前的訊號是「減倉觀望」而非「翻空」：多空雙方都在結算前退場，而不是空方進場。"
  },

  // ── ⑩ 未來重要事件 ─────────────────────────────────────────
  calendar: {
    tier1: [
      { date: "8/19", event: "🇹🇼 台指選擇權結算" },
      { date: "8/20", event: "🇺🇸 FOMC 紀要（02:00）＋ 🇹🇼 台指期結算", hot: true },
      { date: "8/26", event: "🔥 NVIDIA 財報", hot: true }
    ],
    tier2: [
      { date: "8 月底", event: "Jackson Hole 相關訊號" },
      { date: "8/31", event: "月底法人作帳" },
      { date: "9/15-16", event: "FOMC 會議與利率決議" }
    ]
  },

  // ── ⑪ 四大風險 ─────────────────────────────────────────────
  risks: [
    { n: "①", name: "30Y 殖利率 5.311%", signal: "r", desc: "19 年新高。Fed 不升息也擋不住長端，對高估值科技股是直接的折現率壓力。" },
    { n: "②", name: "投信倒貨、散戶接刀", signal: "r", desc: "投信由買 79.73 億翻為賣 177.47 億，同日散戶融資反手加 30.43 億、回補空單 4,609 張。" },
    { n: "③", name: "量能急凍", signal: "r", desc: "集中市場 -11.6% 跌破兆元、櫃買 -26%。結算前價平量縮，參與度撤退。" },
    { n: "④", name: "油價 Brent 90", signal: "r", desc: "美伊 MOU 到期，戰事重啟疑慮。這是推升長端殖利率的源頭。" }
  ],

  // ── 🎯 總評 ────────────────────────────────────────────────
  scores: {
    items: [
      { name: "AI 基本面", score: 8.5, signal: "g", note: "CapEx 與 neocloud 營收未變，但折現率壓力上升。" },
      { name: "美股趨勢", score: 6.5, signal: "y", note: "三大指數再跌，30Y 破 5.31% 壓抑估值。" },
      { name: "Fed", score: 6.5, signal: "y", note: "升息機率仍 <35%，但長端殖利率自己漲上去了。" },
      { name: "日圓", score: 4, signal: "r", note: "159.47，美元走弱仍升不上去，利差擴大是新壓力。" },
      { name: "台股 AI", score: 6.5, signal: "y", note: "投信倒貨、量能急凍、未平倉暴減；外資獨撐。" }
    ],
    overall: { name: "整體", score: 6.6, signal: "y" },
    summary: [
      "上週的問題是「消費在垮」，這週換成「長端殖利率自己漲上去了」——而後者沒有政策轉向可以期待。",
      "AI 基本面 🟢 ＋ 外資續買 🟢 ＋ 基差守住 🟢 ＋ 30Y 19 年新高 🔴 ＋ 投信倒貨 🔴 ＋ 量能急凍 🔴 ＋ 油價 90 🔴",
      "整體評分自 8/14 的 8.2 一路降到 6.6。台股結構已由「三方分歧」轉為**投信倒貨、散戶接刀、外資獨撐**——這是高檔換手裡最不健康的組合，而 8/20 結算與 8/26 NVIDIA 就在眼前。"
    ]
  },

  // ── 👀 今天追蹤的數字 ──────────────────────────────────────
  watchlist: [
    "30Y 殖利率能否守在 5.31% 以下",
    "Brent 是否續攻 92",
    "投信是否連續賣超（最優先）",
    "台股量能能否回到兆元",
    "台指期基差有無翻為逆價差",
    "未平倉量續減或回補",
    "外資買超是否鬆手",
    "SOX 8/17 收盤（本版未取得）",
    "融資餘額能否停止增加（5,501.02 億）"
  ],

  // ── 📚 資料來源 ────────────────────────────────────────────
  sources: [
    { label: "30-year Treasury yield tops 5.31%, highest in 19 years — CNBC", url: "https://www.cnbc.com/2026/08/17/treasury-yields-federal-reserve-fomc-minutes.html" },
    { label: "Stock market today: Dow, S&P 500, Nasdaq fall as oil rises amid US-Iran tensions — Yahoo Finance", url: "https://finance.yahoo.com/markets/live/stock-market-today-monday-august-17-dow-sp-500-nasdaq-094421171.html" },
    { label: "Stock market news for Aug. 17, 2026 — CNBC", url: "https://www.cnbc.com/2026/08/16/stock-market-today-live-updates-.html" },
    { label: "Stock Market Today (Aug. 17, 2026) — TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-aug-17-2026" },
    { label: "VIX: Wall Street's fear gauge hits 2026 low — CNBC", url: "https://www.cnbc.com/2026/08/17/stock-market-volatility-vix-wall-street.html" },
    { label: "Gold prices today, August 17, 2026 — Yahoo Finance", url: "https://finance.yahoo.com/personal-finance/investing/article/gold-prices-today-monday-august-17-2026-gold-ticks-up-after-lower-retail-sales-report-134755206.html" },
    { label: "USD/JPY Analysis 17 August 2026 — Vantage Markets", url: "https://www.vantagemarkets.com/en/market-analysis/usdjpy-forecast-august-17-2026/" },
    { label: "United States Dollar (DXY) — Trading Economics", url: "https://tradingeconomics.com/united-states/currency" },
    { label: "三大法人買賣金額統計 BFI82U（本頁籌碼面來源）— 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/foreign/bfi82u.html" },
    { label: "每日市場成交資訊 FMTQIK（成交金額與指數）— 臺灣證券交易所", url: "https://www.twse.com.tw/zh/indices/taiex/mi-5min-hist.html" },
    { label: "融資融券餘額 MI_MARGN — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/margin/mi-margn.html" },
    { label: "期貨每日交易行情（台指期與未平倉）— 臺灣期貨交易所", url: "https://www.taifex.com.tw/cht/3/futDailyMarketReport" },
    { label: "PHLX Semiconductor (^SOX) 歷史資料 — Yahoo Finance", url: "https://finance.yahoo.com/quote/%5ESOX/history/" },
    { label: "FOMC 會議行事曆與紀要發布時間 — Federal Reserve", url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
    { label: "Nvidia schedules Q2 fiscal 2027 earnings call for August 26 — Investing.com", url: "https://www.investing.com/news/assorted/nvidia-schedules-q2-fiscal-2027-earnings-call-for-august-26-432SI-4821803" }
  ]
};
