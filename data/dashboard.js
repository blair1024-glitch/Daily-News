/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 台股數字來自 data/market-auto.js（GitHub Actions 自動抓取），詳見 README。
 */
window.DASHBOARD = {
  meta: {
    version: "v3.7",
    date: "2026/08/22",
    time: "23:10",
    timezone: "台灣時間",
    countdown: {
      label: "🔥 NVIDIA 財報",
      note: "8/26 美西 14:00 法說（台灣時間 8/27 清晨 05:00）",
      target: "2026-08-27T05:00:00+08:00"
    }
  },

  verdict: [
    { label: "台指期基差", state: "翻逆價差 -76 點，訊號成立", signal: "r" },
    { label: "FOMC 紀要", state: "三張反對票主張升息", signal: "r" },
    { label: "Fed 點名 AI", state: "列為系統性下行風險", signal: "r" },
    { label: "美股週線", state: "-1.4%，中斷三週連漲", signal: "r" },
    { label: "台股量能", state: "7,549 億，續縮", signal: "r" },
    { label: "NVIDIA", state: "剩 2 個交易日", signal: "y" }
  ],

  global: {
    rows: [
      { name: "🇺🇸 S&P 500", value: "7,674.37（+0.43%｜週 -1.4%）", signal: "r" },
      { name: "🇺🇸 Nasdaq", value: "26,180.45（+0.43%）", signal: "y" },
      { name: "🇺🇸 Dow", value: "53,277.01（+517.80）", signal: "g" },
      { name: "🔥 費城半導體 SOX", value: "8/21 收盤未取得", signal: "y" },
      { name: "VIX", value: "15.13（-5.50%）", signal: "g" },
      { name: "🚨 30Y 公債", value: "5.273%（週間高 5.34%）", signal: "r" },
      { name: "🇺🇸 10Y 公債", value: "約 4.64%（週間高 4.75%）", signal: "r" },
      { name: "🇺🇸 2Y 公債", value: "8/21 未取得", signal: "y" },
      { name: "DXY 美元指數", value: "8/21 未取得", signal: "y" },
      { name: "🛢️ 原油", value: "8/21 未取得（美對伊制裁在即）", signal: "r" },
      { name: "Gold 黃金", value: "8/21 未取得", signal: "y" },
      { name: "🇯🇵 USD/JPY", value: "8/21 未取得（前值 159.47）", signal: "r" },
      { name: "🇹🇼 TAIEX", value: "45,224.29（8/21，+290.55）", signal: "y" },
      { name: "🇹🇼 櫃買 OTC", value: "成交 2,024.42 億（點位未取得）", signal: "y" }
    ],
    notes: [
      "**這一週是債市主導的一週。** 30 年期美債殖利率盤中一度觸及 5.34%（19 年新高）、10 年期觸 4.75%（20 個月新高），引發風險資產賣壓。週五雖回穩（30Y 5.273%、10Y 約 4.64%、VIX 降至 15.13），但 **S&P 500 全週仍下跌 1.4%，中斷三週連漲**，主要指數全週皆黑。",
      "🔴 **一個重要的認知修正**：先前幾版把「長端殖利率飆升」與「AI 主題」當成兩條獨立的風險線。實際成因浮現後，它們是同一條——長天期殖利率自 7 月起走高，主因是 **AI 公司大量發債** 加上聯邦赤字支出增加。也就是說，AI 的資本支出狂潮正在自己推高自己的折現率。",
      "美國準備對伊朗實施全面經濟制裁，油價續為通膨疑慮來源。",
      "⚠️ SOX、2Y、DXY、原油、黃金、USD/JPY 的 8/21 收盤價未取得可靠來源，一律標示未取得而非沿用舊值。今日為週六，台股休市，本版資料更新至 8/21（五）收盤。"
    ]
  },

  fed: {
    headline: "紀要揭曉：三張反對票主張升息，而且 Fed 自己點名了 AI",
    stats: [
      { label: "7 月決議", value: "維持 3.50%~3.75%", signal: "y" },
      { label: "反對票", value: "3 票主張升息 1 碼", signal: "r" },
      { label: "30Y 殖利率", value: "5.273%（週間高 5.34%）", signal: "r" },
      { label: "10Y 殖利率", value: "約 4.64%", signal: "r" },
      { label: "下次 FOMC", value: "9/15-16", signal: "y" }
    ],
    shift: {
      before: "🔴 「Fed 就算不動，長天期殖利率照樣自己漲上去」",
      after: "🔴 「而且 Fed 內部有三個人想升息，還把 AI 情緒當成風險」"
    },
    probability: {
      label: "7/28-29 決議票數",
      from: "全票通過（市場原本認知）",
      to: "3 票反對、主張升息"
    },
    footnote:
      "Logan、Hammack、Kashkari 三位地區聯準銀行總裁投票主張升息 1 碼。紀要對經濟的描述是「在高度不確定下仍屬穩健」，商業投資強勁、消費具韌性——這種措辭離降息很遠。更值得注意的是紀要明列的下行風險之一：**投資人對 AI 的樂觀情緒若降溫，將導致股價下跌，進而拖累消費**。Fed 已經把 AI 行情本身視為總體經濟的風險源。"
  },

  cpi: {
    title: "8/19 FOMC 會議紀要（已公布）",
    releaseUS: "8/19 美東 14:00 ✅",
    releaseTW: "🇹🇼 8/20 清晨 02:00 ✅",
    expectations: [
      { name: "涵蓋會議", value: "7/28-29 FOMC" },
      { name: "決議", value: "維持 3.50%~3.75%" },
      { name: "反對票", value: "Logan／Hammack／Kashkari" },
      { name: "經濟描述", value: "「在高度不確定下仍屬穩健」" },
      { name: "點名風險", value: "AI 樂觀情緒降溫" }
    ],
    fear:
      "🔴 **我的情境表設計不足，要誠實說明。** 前一版只設了三格：「提及長端殖利率／財政供給」「聚焦通膨與就業平衡」「偏鷹、無視長端」。實際結果落在一個我沒設想到的位置——紀要**既偏鷹（三張升息反對票），又主動把 AI 情緒列為系統性風險**。第二點是我完全沒預期的：Fed 不只在看殖利率，它在看這波 AI 行情本身。這比三格裡任何一格都更需要注意。",
    scenarios: [
      { result: "✅ 實際：三票主張升息", fed: "比市場認知更鷹", fedSignal: "r", tech: "🔴", techSignal: "r" },
      { result: "✅ 實際：點名 AI 為風險", fed: "情境表未涵蓋", fedSignal: "r", tech: "🔴", techSignal: "r" },
      { result: "✅ 實際：經濟描述穩健", fed: "離降息很遠", fedSignal: "y", tech: "🟡", techSignal: "y" },
      { result: "下一關：9/15-16 FOMC", fed: "反對票會否增加", fedSignal: "y", tech: "🟡", techSignal: "y" }
    ],
    conclusion:
      "紀要已成過去式，焦點完全移交給 8/26 的 NVIDIA 財報——而 Fed 剛好告訴我們，它也在看同一件事。"
  },

  jpy: {
    level: "USD/JPY 8/21 收盤未取得",
    background:
      "8/21 的日圓收盤價未取得可靠來源，前次可用數值為 8/17 的 159.47。本週美債長天期殖利率一度衝上 19 年新高，理論上會透過利差擴大對日圓造成額外壓力，但**在拿到實際數字前不做推估**。160 關卡是否失守，需待下一份數據確認。",
    keyLevel: "160 仍是關卡（數據待補）",
    branches: [
      {
        condition: "若已突破 160",
        signal: "r",
        items: ["二次干預機率大增", "Carry Trade 平倉風險 ↑", "與美債殖利率形成共振"]
      },
      {
        condition: "若守在 158~160",
        signal: "y",
        items: ["壓力暫緩 🟡", "但美債利差仍不利日圓 🟡", "需日銀實際動作才會反轉 🟡"]
      }
    ],
    conclusion:
      "這是本版唯一因數據缺漏而無法判斷的區塊，明確標示勝過硬猜。"
  },

  csp: {
    rows: [
      { company: "NVIDIA", result: "8/26 財報（剩 2 個交易日）", ai: "⭐⭐⭐⭐⭐" },
      { company: "CoreWeave", result: "Q2 營收 +112%", ai: "🟢🟢🟢" },
      { company: "Nebius", result: "財報後單日 +34%", ai: "🟢🟢🟢" },
      { company: "Microsoft / Amazon", result: "Azure、AWS 強，CapEx 提高", ai: "🟢🟢🟢" },
      { company: "Alphabet / Meta", result: "Cloud 與 AI CapEx 持續", ai: "🟢🟢🟢" },
      { company: "Broadcom", result: "8/14 單日 -6%", ai: "🔴" }
    ],
    capex: {
      title: "四大 CSP AI CapEx 合計",
      from: "2025 年約 4,100 億美元",
      to: "2026 年預計約 7,250 億美元"
    },
    takeaway: {
      not: "基本面仍然沒有壞：CapEx 與 neocloud 營收兩層驗證都在",
      but: "但這一週出現了新的因果鏈——AI 公司大量發債支應 CapEx，推高長天期殖利率，殖利率又回頭壓抑 AI 股的估值",
      conclusion:
        "這是一個自我強化的循環，而且 Fed 已在會議紀要裡點名。AI 的成長故事沒變，但它的融資成本正在變成整個市場的問題。8/26 NVIDIA 要回答的不只是需求，還有這波 CapEx 能撐多久。"
    }
  },

  nvidia: {
    event: "8/26 NVIDIA 財報",
    subtitle: "Q2 FY2027（季末 7/26）｜美西 14:00 法說，台灣時間 8/27 清晨 05:00",
    watch: [
      "Data Center Revenue",
      "Blackwell 出貨與 GB300",
      "CSP 與 neocloud 訂單能見度",
      "毛利率",
      "下一季 Guidance",
      "CapEx 的融資結構（本週新增觀察點）",
      "對 AI 需求週期的說法"
    ],
    note:
      "**剩 2 個交易日，這是目前唯一的主導事件。** 而它的份量比前幾版更重：Fed 在會議紀要裡把「AI 樂觀情緒降溫」列為總體下行風險，等於把這場財報從產業事件升格為總經事件。同時台指期基差已翻逆價差、美股週線中斷三連漲——市場在財報前明顯降風險。達標無功、不達標重罰的結構完全沒變，只是賭注更大了。"
  },

  taiex: {
    date: "8/21 收盤",
    close: "45,224.29",
    change: "+290.55",
    changePct: "+0.65%",
    turnover: "NT$754.9B",
    note:
      "**價漲量縮，而且期貨不同意。** 指數收紅 290.55 點，但成交金額只有 7,549 億元——相較 8/17 的 9,810 億又縮了 23%，是這一波以來最低。同一天台指期基差翻為逆價差（見下方台指期欄）。指數上漲、量能萎縮、期貨貼水，三者同時出現，通常代表這根紅 K 的參與度不足。"
  },

  chips: {
    date: "8/21 盤後（證交所官方數據）",
    institutions: [
      { name: "外資及陸資", tse: "+283.05 億", otc: "未取得", signal: "g" },
      { name: "投信", tse: "+18.78 億", otc: "未取得", signal: "g" },
      { name: "自營商", tse: "+29.23 億", otc: "未取得", signal: "g" },
      { name: "　自行買賣", tse: "+29.10 億", otc: "—", signal: "g" },
      { name: "　避險", tse: "+0.13 億", otc: "—", signal: "g" },
      { name: "三大法人合計", tse: "+331.06 億", otc: "未取得", signal: "g" }
    ],
    note:
      "三大法人 8/21 全數站在買方，合計買超 331.06 億元（分項加總完全相等，誤差 0）。投信在 8/17 大賣 177 億之後回到小買 18.78 億，情緒轉為中性。**但要跟成交量一起看**：法人買超 331 億，全市場卻只成交 7,549 億——法人以外的參與者明顯縮手。這解釋了為什麼指數漲了 290 點，期貨卻不肯跟。",
    margin: {
      title: "融資融券（信用交易）",
      rows: [
        { name: "集中市場融資餘額", value: "未取得", signal: "y" },
        { name: "融資單日增減", value: "未取得", signal: "y" },
        { name: "融券餘額", value: "未取得", signal: "y" },
        { name: "前次可用（8/17）", value: "5,501.02 億／+30.43 億", signal: "r" }
      ],
      warning:
        "⚠️ **連續第三次同樣的失敗，已排定結構性修正。** 自動抓取排程已從 17:00 延後至 19:00，但 8/21 19:26 抓取時證交所的當日融資融券**仍未發布**。8/17 的手動補抓（隔天早上執行）證明資料在次日上午即可取得，因此已新增第二個排程：**每個交易日隔天 07:00 台灣時間重抓前一交易日**，剛好趕在每日更新前 30 分鐘補上這一欄。前次可用數據為 8/17 的 5,501.02 億元（單日增 30.43 億），當時是散戶加碼、回補空單。"
    }
  },

  futures: {
    spot: "45,224.29",
    future: "45,148（202609）",
    basis: "-76.29 點逆價差",
    month: "台指期 202609（8/21，已換月）",
    note:
      "🔴 **連續三版標記的訊號，成立了。** 從 v3.5 起我一直寫「若正價差翻為逆價差，即是轉弱確認」——8/21 基差為 **-76.29 點**，正式翻負。路徑很清楚：8/12 +179 → 8/14 +29.99 → 8/17 +30.73 → **8/21 -76.29**。更值得注意的是它發生的時機：**同一天現貨上漲 290.55 點**。期貨用貼水表達了對這根紅 K 的不認同。8 月合約已於 8/20 結算完畢，本欄為新的 9 月合約，收 45,148（+245）、未平倉 102,342 口、成交量 51,446 口。換月後未平倉回補至 10 萬口以上屬正常換倉，不宜與結算前的減倉直接比較。"
  },

  calendar: {
    tier1: [
      { date: "8/26", event: "🔥 NVIDIA 財報（台灣 8/27 05:00）", hot: true },
      { date: "8/28", event: "🇺🇸 PCE 物價指數" },
      { date: "9/15-16", event: "🇺🇸 FOMC 利率決議", hot: true }
    ],
    tier2: [
      { date: "8 月底", event: "Jackson Hole 相關訊號" },
      { date: "8/31", event: "月底法人作帳" },
      { date: "9 月", event: "台指期新倉布局觀察" }
    ]
  },

  risks: [
    { n: "①", name: "基差翻逆價差", signal: "r", desc: "-76.29 點，連續三版標記的轉弱訊號成立，且發生在指數上漲當天。" },
    { n: "②", name: "Fed 鷹派分歧＋點名 AI", signal: "r", desc: "三票主張升息；紀要將 AI 樂觀情緒降溫列為總體下行風險。" },
    { n: "③", name: "AI 發債推升殖利率", signal: "r", desc: "長端殖利率飆升主因之一是 AI 公司大量發債——AI 正在推高自己的折現率。" },
    { n: "④", name: "台股量能萎縮", signal: "r", desc: "7,549 億為本波最低，較 8/17 再縮 23%，法人買超但市場沒跟。" }
  ],

  scores: {
    items: [
      { name: "AI 基本面", score: 8, signal: "g", note: "需求驗證仍在，但融資成本已成為新的壓力來源。" },
      { name: "美股趨勢", score: 6, signal: "y", note: "週線 -1.4%，中斷三週連漲；債市主導盤面。" },
      { name: "Fed", score: 6, signal: "y", note: "三張升息反對票，措辭離降息很遠。" },
      { name: "日圓", score: 4, signal: "r", note: "8/21 數據未取得，前值 159.47，維持警戒不上修。" },
      { name: "台股 AI", score: 6, signal: "y", note: "價漲量縮、基差翻負，法人買超但市場未跟。" }
    ],
    overall: { name: "整體", score: 6.2, signal: "y" },
    summary: [
      "這一週把三件事看清楚了：期貨先轉弱（基差翻負）、Fed 比想像中鷹（三張反對票）、而長端殖利率的兇手裡有 AI 自己（發債）。",
      "AI 需求 🟢 ＋ 法人買超 🟢 ＋ 基差逆價差 🔴 ＋ Fed 點名 AI 🔴 ＋ 量能新低 🔴 ＋ 殖利率結構性壓力 🔴",
      "整體評分自 8/14 的 8.2 一路降到 6.2。所有線現在都指向同一個時間點：**8/26 NVIDIA**。它已經不只是一檔股票的財報——Fed 把 AI 情緒寫進了風險清單，這場財報就是那個情緒的定價點。"
    ]
  },

  watchlist: [
    "NVIDIA 財報與 Guidance（8/27 清晨）",
    "基差能否收斂回正價差",
    "台股量能能否回到 9,000 億",
    "30Y 殖利率是否再攻 5.34%",
    "外資買超能否延續",
    "融資餘額（新排程 07:00 補抓）",
    "USD/JPY 是否已破 160",
    "SOX 走勢（本版未取得）"
  ],

  sources: [
    { label: "Minutes of the FOMC, July 28–29, 2026 — Federal Reserve", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260819a.htm" },
    { label: "PREVIEW/REVIEW: FOMC Minutes, 19 August 2026 — Newsquawk", url: "https://www.newsquawk.com/headlines/preview-fomc-minutes-due-wednesday-19th-august-2026-at-1900bst1400edt" },
    { label: "FOMC Minutes 19 August 2026 — PNC Economics Research", url: "https://www.pnc.com/content/dam/pnc-com/pdf/aboutpnc/EconomicReports/EconomicUpdates/2026/PNC_Economics_Research_FOMC_Minutes_19_August_2026.pdf" },
    { label: "Stock market news for Aug. 21, 2026 — CNBC", url: "https://www.cnbc.com/2026/08/20/stock-market-today-live-updates.html" },
    { label: "Stock Market Today (Aug. 21, 2026): tumultuous week for Treasurys — TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-aug-21-2026" },
    { label: "S&P 500 Snapshot: Stocks End Lower to Snap 3-Week Win Streak — Advisor Perspectives", url: "https://www.advisorperspectives.com/dshort/updates/2026/08/21/s-p-500-snapshot-stocks-end-lower-to-snap-3-week-win-streak" },
    { label: "Dow, S&P 500, Nasdaq post weekly losses as bond volatility remains in focus — Yahoo Finance", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-august-21-dow-sp-500-nasdaq-bitcoin-080533702.html" },
    { label: "Closing Look 8/21/26（VIX 15.13）— CappNotes", url: "https://cappnotes.substack.com/p/closing-look-82126" },
    { label: "三大法人買賣金額統計 BFI82U — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/foreign/bfi82u.html" },
    { label: "每日市場成交資訊 FMTQIK — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/indices/taiex/mi-5min-hist.html" },
    { label: "融資融券餘額 MI_MARGN — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/margin/mi-margn.html" },
    { label: "期貨每日交易行情（台指期與基差）— 臺灣期貨交易所", url: "https://www.taifex.com.tw/cht/3/futDailyMarketReport" },
    { label: "US 10 Year Treasury Note Yield — Trading Economics", url: "https://tradingeconomics.com/united-states/government-bond-yield" },
    { label: "Nvidia schedules Q2 fiscal 2027 earnings call for August 26 — Investing.com", url: "https://www.investing.com/news/assorted/nvidia-schedules-q2-fiscal-2027-earnings-call-for-august-26-432SI-4821803" }
  ]
};
