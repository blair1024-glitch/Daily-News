/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 每天只要更新這個檔案，網站就會自動更新。
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 詳細更新說明請看 README.md
 */
window.DASHBOARD = {
  meta: {
    version: "v3.5",
    date: "2026/08/17",
    time: "09:45",
    timezone: "台灣時間",
    // 用來做倒數計時的下一個關鍵事件（ISO 8601，含時區位移）
    countdown: {
      label: "🇺🇸 FOMC 會議紀要",
      note: "8/20 清晨 02:00（美東 8/19 14:00）｜7/28-29 會議紀要；同日台指期結算",
      target: "2026-08-20T02:00:00+08:00"
    }
  },

  // ── 🚦 一眼結論 ──────────────────────────────────────────────
  verdict: [
    { label: "零售銷售", state: "-0.6%，最壞情境命中", signal: "r" },
    { label: "台股", state: "開高走低，反轉 542 點", signal: "r" },
    { label: "量能", state: "1.21 兆，量增價跌", signal: "r" },
    { label: "投信", state: "回頭買超 71.96 億", signal: "g" },
    { label: "日圓", state: "三個月最大週跌幅", signal: "r" },
    { label: "美股週線", state: "仍收三週連漲", signal: "g" }
  ],

  // ── ① 全球市場儀表板 ────────────────────────────────────────
  global: {
    rows: [
      { name: "🇺🇸 S&P 500", value: "7,786（-0.17%）", signal: "y" },
      { name: "🇺🇸 Nasdaq", value: "26,729（-0.28%）", signal: "y" },
      { name: "🇺🇸 Dow", value: "53,732（-0.20%）", signal: "y" },
      { name: "🔥 費城半導體 SOX", value: "12,417.05（-0.31%）", signal: "y" },
      { name: "VIX", value: "14.25（-2.60%）", signal: "g" },
      { name: "🇺🇸 10Y 公債", value: "4.68%", signal: "y" },
      { name: "🇺🇸 2Y 公債", value: "4.17%", signal: "g" },
      { name: "DXY 美元指數", value: "約 99.8（連二日走弱）", signal: "y" },
      { name: "🛢️ WTI 原油（9 月）", value: "82.40（+1.42%）", signal: "r" },
      { name: "Gold 黃金", value: "4,437.30（+0.38%）", signal: "g" },
      { name: "🇯🇵 USD/JPY", value: "159.30～159.43", signal: "r" },
      { name: "🇨🇳 USD/CNY 中間價", value: "6.7882（8/12）", signal: "y" },
      { name: "🇹🇼 USD/TWD", value: "32.2270（8/12）", signal: "y" },
      { name: "🇹🇼 TAIEX", value: "45,811.01（8/14，-0.46%）", signal: "y" },
      { name: "🇹🇼 櫃買 OTC", value: "成交 2,445.17 億（點位未取得）", signal: "y" }
    ],
    notes: [
      "✅ 上週五情境表寫「零售銷售負值 → 衰退交易啟動 🔴」——實際 -0.6%，最壞的一格命中。但**我把力道寫過頭了**：市場沒有啟動衰退交易，S&P 只跌 0.17%，且仍收下第三個週線連漲。方向對，幅度我高估。",
      "7 月零售銷售 7,636 億美元、月減 0.6%（預期 +0.1%），是 2025 年 5 月以來最大跌幅；剔除通膨的實質銷售月減 0.7%，控制組 -0.4%。汽車及零件 -1.8%、非店面零售 -2.2%。加上密大 8 月消費者信心初值轉弱，「消費撐得住」這個前提第一次出現裂痕。",
      "美股由能源與原物料領漲，科技與醫療走弱，Broadcom 單日跌 6%。SOX 連二日回落至 12,417.05。債市維持強勢：10Y 4.68%、2Y 4.17%，DXY 連二日走弱至約 99.8。",
      "⚠️ 櫃買 OTC 指數點位、台指期 8/14 收盤與基差、8 月融資融券仍未取得可靠來源（詳見籌碼面說明）。人民幣與新台幣匯率為 8/12 數值。"
    ]
  },

  // ── ② Fed / 通膨 ────────────────────────────────────────────
  fed: {
    headline: "通膨關卡全過，但問題換成了「消費在垮」",
    stats: [
      { label: "現行利率區間", value: "3.50% ~ 3.75%", signal: "y" },
      { label: "7 月零售銷售", value: "-0.6% MoM", signal: "r" },
      { label: "實質零售銷售", value: "-0.7% MoM", signal: "r" },
      { label: "7 月 Core CPI", value: "2.5% YoY", signal: "g" },
      { label: "7 月 PPI", value: "0.0% MoM", signal: "g" }
    ],
    shift: {
      before: "🟢 「通膨降溫，Fed 不用升息，對股市是甜蜜點」",
      after: "🟡 「Fed 不升息的原因，正在從『通膨降了』變成『經濟在弱』」"
    },
    probability: {
      label: "9 月升息機率（上週 → 現在）",
      from: "55%",
      to: "< 35%"
    },
    footnote:
      "升息機率持續下降，但要注意驅動力已經換人。上週是 CPI、PPI 帶來的「好的降溫」，週五之後變成零售銷售與消費者信心帶來的「壞的降溫」。同樣是 Fed 不動，前者對股市是利多，後者是警訊。8/20 清晨的會議紀要會透露 7 月底 FOMC 內部對這件事的看法。"
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
      { name: "已公布：CPI", value: "3.4% / Core 2.5% ✅" },
      { name: "已公布：零售銷售", value: "-0.6% ❌ 遠低於預期" }
    ],
    fear:
      "會議紀要涵蓋的是 7 月底，那時非農爆冷與零售轉弱都還沒發生，所以它的參考價值不在「預測」而在「基準線」——看 Fed 在資料還好的時候就已經有多擔心。如果連當時就有委員提到需求疲軟，那麼九月的立場會比市場現在定價的更鴿；反之若當時仍偏鷹，代表 Fed 對近期數據的反應會落後。",
    scenarios: [
      { result: "紀要偏鴿、多位委員憂心需求", fed: "9 月按兵不動確立", fedSignal: "g", tech: "🟢", techSignal: "g" },
      { result: "紀要中性、分歧明顯", fed: "維持現有定價", fedSignal: "y", tech: "🟡", techSignal: "y" },
      { result: "紀要偏鷹、仍聚焦通膨", fed: "市場需重新定價", fedSignal: "r", tech: "🔴", techSignal: "r" }
    ],
    conclusion:
      "但對台股而言，同一天早上的台指期結算影響更直接。8/20 是這週唯一需要標紅的日子。"
  },

  // ── ④ 日圓 ─────────────────────────────────────────────────
  jpy: {
    level: "USD/JPY ≈ 159.3 ~ 159.4",
    background:
      "上週日圓走出三個月來最大的週線跌幅，等於把 7 月底至 8 月初美日協調干預的漲幅回吐了大約一半。干預當時曾把匯價從接近 164 打到 156.34。值得注意的是：上週美元指數是走弱的（連二日下滑至約 99.8），美債殖利率也在低檔，在這種對日圓最有利的組合下，日圓還是貶——這已經不是美元強弱的問題。",
    keyLevel: "160 仍是關卡，且這次是在美元走弱時逼近",
    branches: [
      {
        condition: "突破 160 → 二次干預機率大增",
        signal: "r",
        items: ["財務省口頭干預會先出現", "Carry Trade 平倉風險 ↑", "台股與科技股波動放大"]
      },
      {
        condition: "區間震盪 156 ~ 160",
        signal: "y",
        items: ["時間站在貶值方 🟡", "干預只能買時間，不能改方向 🟡", "需日銀實際升息才會反轉 🟡"]
      }
    ],
    conclusion:
      "連續第四天，這是 dashboard 上唯一完全沒有改善的指標。而且上週的惡化是發生在「美元走弱」的順風環境裡，性質比之前更差。"
  },

  // ── ⑤ CSP / AI ─────────────────────────────────────────────
  csp: {
    rows: [
      { company: "Broadcom", result: "8/14 單日 -6%", ai: "🔴" },
      { company: "CoreWeave", result: "Q2 營收 +112%，前波 +19%", ai: "🟢🟢🟢" },
      { company: "Nebius", result: "財報後單日 +34%", ai: "🟢🟢🟢" },
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
      but: "但價格面開始鬆動——Broadcom 單日 -6%、SOX 連二日回落，資金上週五轉向能源與原物料",
      conclusion:
        "這是本波第一次出現「基本面沒變、但資金開始撤」的組合。在 8/26 NVIDIA 之前，AI 板塊進入只能靠財報說話的真空期，而估值已經提前反映了好消息。"
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
      "剩 7 個交易日。上週五 Broadcom 重挫 6%、SOX 走弱，說明半導體族群在財報前已開始降風險。NVIDIA 目前是整個 AI 敘事唯一還沒交卷的大部位，達標無功、不達標重罰的結構沒變，但現在多了一層：進場的人變少了。"
  },

  // ── ⑦ 台股 ─────────────────────────────────────────────────
  taiex: {
    date: "8/14 收盤",
    close: "45,811.01",
    change: "-210.47",
    changePct: "-0.46%",
    turnover: "NT$1,109.7B",
    note:
      "開盤大漲 332.18 點、收盤跌 210.47 點，全日反轉 542 點，是本 dashboard 目前最重要的一根 K 棒。開高走低發生在指數剛創高之後，屬典型高檔換手型態。⚠️ 成交金額已依證交所官方數據更正為 1 兆 1,097 億元（前一版依新聞寫 1 兆 2,101 億，高估約 1,000 億）。量增價跌的結論不變——相較 8/13 的約 1 兆 516 億仍增加約 580 億——但放大幅度比前一版所述溫和許多。"
  },

  // ── ⑧ 台股籌碼面（三大法人 / 融資融券）─────────────────────
  chips: {
    date: "8/14 盤後（證交所官方數據）",
    institutions: [
      { name: "外資及陸資", tse: "+453.51 億", otc: "未取得", signal: "g" },
      { name: "投信", tse: "+79.73 億", otc: "未取得", signal: "g" },
      { name: "自營商", tse: "-16.61 億", otc: "未取得", signal: "r" },
      { name: "　自行買賣", tse: "-27.36 億", otc: "—", signal: "r" },
      { name: "　避險", tse: "+10.75 億", otc: "—", signal: "g" },
      { name: "三大法人合計", tse: "+516.63 億", otc: "-159.99 億", signal: "g" }
    ],
    note:
      "✅ 上週五 watchlist 問「投信有沒有回頭進場」——有了：投信買超 79.73 億元，相較 8/13 的近乎零參與是明顯轉向，內資法人跟上了。但同一天有三個反向訊號：自營商由買轉賣（-16.61 億，其中自行買賣 -27.36 億、避險 +10.75 億）、櫃買市場三大法人合計賣超 159.99 億元、指數開高走低。外資買超 453.51 億元撐盤，但力道較 8/13 縮減約四成。⚠️ 本區數字已全面改用證交所官方值：前一版投信寫 71.96 億、合計寫 508.86 億係新聞數據，官方實為 79.73 億與 516.63 億。官方「合計」列與五個分項加總完全相等（誤差 0），可確認為新聞有誤。",
    margin: {
      title: "融資融券（信用交易）",
      rows: [
        { name: "集中市場融資餘額", value: "5,470.59 億", signal: "g" },
        { name: "融資單日增減", value: "-27.22 億", signal: "g" },
        { name: "融券餘額", value: "222,827 張", signal: "y" },
        { name: "融券單日增減", value: "+8,781 張", signal: "y" }
      ],
      warning:
        "🔴 **更正前一版的判斷。** 前一版因取不到數字，推測「指數兩日大漲 900 點、成交破兆的環境下，融資餘額很可能已經更高」，並把它當成散戶追高的過熱訊號。實際數字出來後，這個推測方向完全相反：融資餘額 5,470.59 億元，不但**低於**前一版引用的 6 月 6,050 億，8/14 當日還**減少** 27.22 億元。散戶並沒有在追高，槓桿是在收縮的。同時融券增加 8,781 張，代表散戶不僅減碼還加空。這反而是相對健康的結構——法人買超 516.63 億、散戶降槓桿加空單，兩邊站在對立面。"
    }
  },

  // ── ⑨ 台指期 / 結算 ────────────────────────────────────────
  futures: {
    spot: "45,811.01",
    future: "45,841",
    basis: "+29.99 點正價差",
    month: "台指期 202608（8/14）",
    note:
      "🔥 前一版說「基差是這幾天最該盯的單一數字」——現在數字來了，而且證實了那個擔憂：正價差自 8/12 的 +179 點收斂至 8/14 的 +29.99 點，**兩個交易日收斂約八成**。台指期收 45,841 點、跌 184 點，成交量 57,509 口、未平倉 84,339 口。期貨比現貨更早轉弱，這與現貨開高走低的高檔換手互相印證。距 8/20 結算剩 3 個交易日，若正價差翻為逆價差，將是明確的轉弱確認。"
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
    { n: "①", name: "基差收斂八成", signal: "r", desc: "正價差 8/12 +179 點 → 8/14 +29.99 點，期貨比現貨先轉弱。8/20 結算前若翻為逆價差即是確認。" },
    { n: "②", name: "台股高檔換手", signal: "r", desc: "8/14 開高走低反轉 542 點、成交 1 兆 1,097 億，量增價跌發生在創高之後。" },
    { n: "③", name: "消費轉弱", signal: "r", desc: "零售銷售 -0.6%、實質 -0.7%、密大信心走弱。Fed 不升息的原因正在變質。" },
    { n: "④", name: "USD/JPY", signal: "r", desc: "三個月最大週跌幅，且是在美元走弱的順風下惡化，性質比之前更差。" }
  ],

  // ── 🎯 總評 ────────────────────────────────────────────────
  scores: {
    items: [
      { name: "AI 基本面", score: 9, signal: "g", note: "CapEx 與 neocloud 營收未變，但 Broadcom -6%、SOX 連二日回落。" },
      { name: "美股趨勢", score: 7.5, signal: "y", note: "自高點回落，惟週線仍收三連紅。" },
      { name: "Fed", score: 7.5, signal: "g", note: "升息機率 <35%，但驅動力已從通膨降溫轉為經濟走弱。" },
      { name: "日圓", score: 4, signal: "r", note: "三個月最大週跌幅，在美元走弱時仍貶。" },
      { name: "台股 AI", score: 7, signal: "y", note: "開高走低、基差收斂八成；惟融資降、投信回補，籌碼未惡化。" }
    ],
    overall: { name: "整體", score: 7.2, signal: "y" },
    summary: [
      "今天改用交易所官方數據後，籌碼面的圖像跟前一版不一樣了——而且是往兩個相反方向走。",
      "融資降槓桿 🟢 ＋ 投信回補 🟢 ＋ 法人買超 516 億 🟢 ＋ 基差收斂八成 🔴 ＋ 高檔換手 🔴 ＋ 消費轉弱 🔴",
      "散戶在減碼加空、法人在買、期貨卻先轉弱——三方分歧。這種結構通常不會立刻崩，但也漲不動，8/20 結算是它的解答日。"
    ]
  },

  // ── 👀 今天追蹤的數字 ──────────────────────────────────────
  watchlist: [
    "台股今日能否守住 45,500",
    "台指期基差有無翻為逆價差（最優先）",
    "量能是否續增（1 兆 1,097 億之上為警訊）",
    "外資買超是否再縮（8/13 756 億 → 8/14 453 億）",
    "融資餘額是否續降（5,470.59 億）",
    "SOX 能否守住 12,400",
    "USD/JPY 有沒有破 160",
    "WTI 能否跌回 80 以下",
    "融資餘額（若有新聞引用即補上）"
  ],

  // ── 📚 資料來源 ────────────────────────────────────────────
  sources: [
    { label: "U.S. retail sales dropped 0.6% in July 2026 — Quartz", url: "https://qz.com/us-retail-sales-july-2026-decline-081426" },
    { label: "US Retail Sales Fall Most Since May 2025 — Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-14/us-retail-sales-fall-by-most-in-more-than-a-year" },
    { label: "Frustrated US consumers cut their retail spending last month — CNN Business", url: "https://www.cnn.com/2026/08/14/economy/us-retail-sales-july" },
    { label: "S&P 500 closes lower, but posts third straight weekly gain — CNBC", url: "https://www.cnbc.com/2026/08/13/stock-market-today-live-updates.html" },
    { label: "Stock Market Today, Aug. 14: Rally Stalls, Broadcom Falls 6% — Motley Fool", url: "https://www.fool.com/coverage/stock-market-today/2026/08/14/stock-market-today-aug-14-stocks-slip-as-consumer-data-disappoints-broadcom-falls-6/" },
    { label: "臺灣加權指數 8/14（週五）收盤下跌 210.47 點 — 群益期貨", url: "https://www.capitalfutures.com.tw/zh-tw/financial/breakingnewsarticle?contentid=c26081400433" },
    { label: "【08/14 每日解盤】高檔換手，台股收跌 210 點 — CMoney", url: "https://cmnews.com.tw/article/cmoney-74f536c9-97a9-11f1-89b0-a3266759c9b4" },
    { label: "三大法人買超台股 508.86 億元 — Yahoo 奇摩股市", url: "https://tw.stock.yahoo.com/news/%E4%B8%89%E5%A4%A7%E6%B3%95%E4%BA%BA%E8%B2%B7%E8%B6%85%E5%8F%B0%E8%82%A1508-86%E5%84%84%E5%85%83-071328358.html" },
    { label: "8/14 櫃買市場三大法人合計賣超 159.99 億元 — MoneyDJ", url: "https://www.moneydj.com/KMDJ/News/NewsViewer.aspx?a=bcb64788-8864-4834-abdb-1f988d48716a" },
    { label: "Treasury Yields Snapshot: August 14, 2026 — Advisor Perspectives", url: "https://www.advisorperspectives.com/dshort/updates/2026/08/14/treasury-yields-snapshot-august-14-2026" },
    { label: "USD/JPY Today Aug 14: Yen Heads for Biggest Weekly Loss — Univest", url: "https://univest.in/blogs/usd-jpy-today-yen-weekly-loss-august-14-2026-intervention" },
    { label: "PHLX Semiconductor (^SOX) 歷史資料 — Yahoo Finance", url: "https://finance.yahoo.com/quote/%5ESOX/history/" },
    { label: "FOMC 會議行事曆與紀要發布時間 — Federal Reserve", url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
    { label: "融資融券餘額 MI_MARGN（本頁籌碼面數據來源）— 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/margin/mi-margn.html" },
    { label: "三大法人買賣金額統計 BFI82U（官方值）— 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/foreign/bfi82u.html" },
    { label: "每日市場成交資訊 FMTQIK（成交金額官方值）— 臺灣證券交易所", url: "https://www.twse.com.tw/zh/indices/taiex/mi-5min-hist.html" },
    { label: "期貨每日交易行情（台指期收盤與基差）— 臺灣期貨交易所", url: "https://www.taifex.com.tw/cht/3/futDailyMarketReport" },
    { label: "Nvidia schedules Q2 fiscal 2027 earnings call for August 26 — Investing.com", url: "https://www.investing.com/news/assorted/nvidia-schedules-q2-fiscal-2027-earnings-call-for-august-26-432SI-4821803" }
  ]
};
