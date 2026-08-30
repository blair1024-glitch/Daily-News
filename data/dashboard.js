/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 台股數字來自 data/market-auto.js、國際行情來自 data/market-global.js
 *（皆由 GitHub Actions 自動抓取），詳見 README。
 */
window.DASHBOARD = {
  meta: {
    version: "v4.4",
    date: "2026/08/31",
    time: "08:10",
    timezone: "台灣時間",
    countdown: {
      label: "🚨 FOMC 利率決議",
      note: "9/16 美東 14:00（台灣 9/17 02:00）｜市場定價升息機率約 57%",
      target: "2026-09-17T02:00:00+08:00"
    }
  },

  verdict: [
    { label: "Warsh", state: "明確偏鷹，通膨「潛在趨勢未改善」", signal: "r" },
    { label: "9 月升息機率", state: "35% → 約 57%，市場改押升息", signal: "r" },
    { label: "費半 SOX", state: "-3.47%，跌破財報前水位", signal: "r" },
    { label: "USD/JPY", state: "今早升破 160（8/28 收 159.32）", signal: "r" },
    { label: "台股", state: "8/28 創高破兆量，但在演說前收盤", signal: "y" },
    { label: "今日開盤", state: "台股對 Warsh 的第一次定價", signal: "r" }
  ],

  global: {
    rows: [
      { name: "🚨 9 月升息機率", value: "約 57%（演說前約 35%）", signal: "r" },
      { name: "🇺🇸 S&P 500", value: "7,711.76（-19.23｜-0.25%｜週 +0.5%）", signal: "y" },
      { name: "🇺🇸 Nasdaq", value: "26,402.42（-138.93｜-0.52%｜週 +0.9%）", signal: "y" },
      { name: "🇺🇸 Dow", value: "53,559.99（-9.45｜-0.02%｜週 +0.5%）", signal: "y" },
      { name: "🔥 費城半導體 SOX", value: "11,469.66（-412.51｜-3.47%）", signal: "r" },
      { name: "VIX", value: "14.43（-0.08｜-0.55%）", signal: "y" },
      { name: "🚨 5Y 公債", value: "4.481%（+0.085｜+1.93%）", signal: "r" },
      { name: "🇺🇸 10Y 公債", value: "4.720%（+0.048）", signal: "r" },
      { name: "🇺🇸 30Y 公債", value: "5.206%（+0.015）", signal: "y" },
      { name: "DXY 美元指數", value: "99.70（+0.54，8/28 收盤）", signal: "y" },
      { name: "🛢️ WTI 原油", value: "83.40（-0.16%）", signal: "y" },
      { name: "🛢️ Brent 原油", value: "89.31（-0.43%）", signal: "y" },
      { name: "🥇 Gold 黃金", value: "4,478.10（-131.60｜-2.85%）", signal: "y" },
      { name: "🇯🇵 USD/JPY", value: "8/28 收 159.32｜**今早已破 160**（約 160.13 盤中）", signal: "r" },
      { name: "🇨🇳 USD/CNY", value: "6.7225（持平）", signal: "g" },
      { name: "🇹🇼 USD/TWD", value: "31.661（-0.46%，台幣走強）", signal: "g" },
      { name: "🇹🇼 TAIEX", value: "46,331.45（+356.23｜+0.77%）", signal: "g" },
      { name: "🇹🇼 櫃買 OTC", value: "成交 2,981.34 億（點位未取得）", signal: "g" }
    ],
    notes: [
      "🔴 **上一版情境表裡最壞的那一格開了。** v4.3 的四格情境寫「＋ Warsh 偏鷹 → 折現率壓估值，**集中結構最怕這個**」。8/28 的結果正是如此：Warsh 首場主席演說明確偏鷹，直言「這個夏天的 PCE 與 CPI 讀數雖然優於預期，**但並沒有告訴我潛在趨勢有實質改善**」，並強調恢復物價穩定是 Fed 的首要focus、通膨不會自行回到目標。**聯邦資金利率期貨隨即把 9 月「升息」機率從約 35% 拉到約 57%**——市場現在的主流預期是**升息**，不是降息。",
      "🔴 **跌最重的，正是 8/27 唯一上漲的那一個類股。** 費半 SOX **-3.47%** 收 11,469.66，不只把 NVIDIA 財報那根 +2.33% 全數吐回，還跌破了財報公布前 8/26 的 11,611.24。相對地 Dow 幾乎不動（-0.02%）、S&P 只跌 0.25%——**因為 8/27 只有科技類股漲上去，其他類股本來就沒漲，也就沒什麼可跌**。上一版寫「集中的上漲最怕偏鷹」，8/28 把它演完了：集中的上漲，變成集中的下跌。",
      "🔴 **債市的形狀說得比股市更清楚：這是升息定價，不是通膨擔憂。** 5 年期殖利率單日跳 **+0.085（+1.93%）**、10 年期 +0.048，而 30 年期只 +0.015——**熊市平坦化**。長端幾乎不動代表市場並非在擔心長期通膨失控，而是在對**短期政策利率往上**重新定價。黃金同步大跌 **2.85%** 至 4,478.10、DXY 升至 99.70（+0.54），三者是同一個交易的三個面向。",
      "⚠️ **台股 8/28 的漂亮數字，全部發生在 Warsh 開口之前。** 台股 13:30 收盤，演說是台灣時間當晚 22:00。所以 8/28 台股創新高 46,331.45（+356.23）、成交金額**突破兆元**達 10,689.85 億、外資連三日大買 417.54 億——**這些完全沒有反應 Warsh**。**今天開盤才是台股對這件事的第一次定價。**",
      "🔴 **USD/JPY 的 160 關卡，在今早被突破了。** 8/28 收盤 **159.321**（尚未破關），但今早亞洲盤已升破，現報約 **160.13**（盤中價，非收盤）。這是本站從第一版追到現在、唯一沒有任何一天改善過的指標，而它在 Fed 轉鷹的隔一個交易日失守。",
      "📌 **更正上一版行事曆的一個日期**：我把 PCE 排在 8/28，實際是 **8/26（三）** 公布。7 月核心 PCE 年增 **3.3%**（符合預期）、整體 **3.7%**（略高於預期）。這個 3.3% 正是兩天後 Warsh 用來說「潛在趨勢未改善」的依據——核心通膨仍在 2% 目標的 1.65 倍。"
    ]
  },

  fed: {
    headline: "從「等演說」變成「市場押升息」",
    stats: [
      { label: "9 月升息機率", value: "🚨 約 57%（前 35%）", signal: "r" },
      { label: "5Y 殖利率", value: "4.481%（+0.085）", signal: "r" },
      { label: "10Y 殖利率", value: "4.720%（+0.048）", signal: "r" },
      { label: "7 月核心 PCE", value: "3.3% YoY（目標的 1.65 倍）", signal: "r" },
      { label: "下次 FOMC", value: "9/15-16", signal: "r" }
    ],
    shift: {
      before: "🟡 「今晚就是那個會決定利率路徑的事件本身」（上一版）",
      after: "🔴 「路徑決定了：市場定價 9 月升息機率約 57%」"
    },
    probability: {
      label: "9 月升息機率（Fed Funds 期貨）",
      from: "演說前約 35%",
      to: "演說後約 57%"
    },
    footnote:
      "🔴 **這是本站追蹤以來 Fed 這一項最大的單日變化，評分由 6 直接降到 3.5。** 從 v3.9 起我連續五版寫「Warsh 主張收緊通膨紀律、三張升息反對票是方向而非雜音」——8/28 這個判斷被完全證實，但**兌現的方式比預期更直接**：不是暗示、不是保留彈性，而是市場當場把 9 月升息機率過半。\n\n他的措辭值得逐字看：「這個夏天的 PCE 與 CPI 讀數雖然優於預期，但**並沒有告訴我潛在趨勢有實質改善**」、通膨數據「比就業市場的趨勢更令人憂心」、通膨**不會自行**回到目標。他同時明確拒絕給前瞻指引——「你可以叫它大綱、叫它路線圖，就是**別叫它前瞻指引**」。**拒絕前瞻指引本身就是一種緊縮**：它把不確定性留給市場，等於提高了風險溢價。\n\n對台股的意義：這條線從此不再是「Fed 什麼時候降息」，而是「**9 月會不會升息**」。折現率的方向變了。"
  },

  cpi: {
    title: "情境表結算：最壞的那一格開了",
    releaseUS: "✅ Warsh 已演說（偏鷹）",
    releaseTW: "🚨 下一關：9/15-16 FOMC",
    expectations: [
      { name: "情境結果", value: "**NVIDIA 超標 ＋ Warsh 偏鷹**" },
      { name: "上一版預判", value: "「折現率壓估值，集中結構最怕這個」" },
      { name: "實際", value: "SOX **-3.47%**，跌破財報前水位" },
      { name: "9 月升息機率", value: "35% → **約 57%**" },
      { name: "7 月核心 PCE", value: "3.3% YoY（8/26 公布）" }
    ],
    fear:
      "**兩件事同時成立，而且互相抵銷不了。** 一、NVIDIA 的基本面是真的：營收 962 億、財測 1,080 億、資料中心年增 117%，這些數字沒有被 Warsh 改變一個字。二、Warsh 把折現率的方向掉頭了：市場從等降息改成押升息。**基本面決定分子，利率決定分母**——8/28 是分母贏了。\n\n更麻煩的是 Fed 的立場結構：7 月紀要曾把「AI 樂觀情緒降溫拖累消費」列為**下行風險**，而 NVIDIA 的財報把那個風險徹底消除了。**等於 AI 的好消息，反而拿掉了 Fed 手上一個放鬆的理由**——上一版已經標記過這個反諷，8/28 證實了它。",
    scenarios: [
      { result: "✅ NVIDIA 超標（已實現）", fed: "需求疑慮清除，基本面無虞", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "🔴 ＋ Warsh 偏鷹（已實現）", fed: "9 月升息機率 35% → 57%", fedSignal: "r", tech: "🔴 SOX -3.47%", techSignal: "r" },
      { result: "→ 9/16 FOMC 真的升息", fed: "折現率再上調，估值續壓", fedSignal: "r", tech: "🔴🔴", techSignal: "r" },
      { result: "→ 9/16 按兵不動", fed: "壓力暫解，但 Warsh 方向不變", fedSignal: "y", tech: "🟡", techSignal: "y" }
    ],
    conclusion:
      "台指期在 8/28 已經先收斂了：正價差自 +102.78 縮到 **+25.55**，而那天指數還創新高、成交破兆。期貨不追創高的價。"
  },

  jpy: {
    level: "USD/JPY 8/28 收 159.32｜今早已破 160（約 160.13 盤中）",
    background:
      "🔴 **追了一週的關卡，在 Fed 轉鷹的隔一個交易日失守。** 8/28 收盤 **159.321**（+0.066），當天尚未破關；但今早亞洲盤已升破 160，現報約 **160.13**——**這是盤中價、不是收盤價**，今日收盤才算數。\n\n路徑很完整：8/24 158.904 → 8/25 159.139 → 8/26 159.223 → 8/27 159.255 → 8/28 159.321 → 今早 160+。**連續六個交易日單向走弱，中間美債殖利率有升有降，日圓一次都沒有受益。** 現在 Warsh 把短端殖利率推上去（5Y +0.085），利差終於站到同一邊——這反而是最壞的組合：**先前不靠利差就在貶，現在利差也來幫倒忙。**",
    keyLevel: "160 已破（盤中），下一個觀察點是日銀是否進場",
    branches: [
      {
        condition: "若今日收盤站上 160",
        signal: "r",
        items: ["二次干預機率大增", "Carry Trade 平倉風險 ↑", "台股外資資金面連帶受壓"]
      },
      {
        condition: "若日銀進場干預",
        signal: "y",
        items: ["短線急拉回但方向未變 🟡", "Fed 偏鷹下干預效果通常有限 🟡", "波動度會放大 🔴"]
      }
    ],
    conclusion:
      "評分由 4 降到 3。這是全站唯一從第一版追到現在、沒有任何一天改善過的指標，而它現在同時面對「Fed 升息定價」與「關卡失守」兩件事。"
  },

  csp: {
    rows: [
      { company: "費城半導體 SOX", result: "🔴 **-3.47%** 收 11,469.66，跌破財報前水位", ai: "🔴" },
      { company: "NVIDIA", result: "領跌（財報 +8% 後回吐）", ai: "🔴" },
      { company: "Intel", result: "同為當日主要拖累", ai: "🔴" },
      { company: "NVIDIA 基本面", result: "營收 962 億、財測 1,080 億，**未被改變**", ai: "🟢🟢🟢" },
      { company: "台積電（台股）", result: "8/28 台股創高，但收在演說前", ai: "🟡" },
      { company: "毛利率", result: "75%，記憶體與晶圓成本上升中", ai: "🟡" }
    ],
    capex: {
      title: "分子沒變，分母變了",
      from: "NVIDIA Q3 財測 1,080 億美元",
      to: "9 月升息機率 35% → 57%"
    },
    takeaway: {
      not: "AI 的需求面完全沒有壞消息——NVIDIA 的財測、資料中心 +117%、AWS 200 萬顆 GPU，一個字都沒有被推翻",
      but: "但 SOX 在財報後第二個交易日就 **-3.47%**，跌破財報公布前的水位——**壓力來自分母（折現率），不是分子（獲利）**",
      conclusion:
        "**這是本波第一次可以清楚分離兩股力量的時點。** 8/24-8/27 那段，AI 股的弱勢還可以解釋成「等財報」；8/27 的反彈可以解釋成「財報過關」；但 8/28 財報利多完好無損、股價卻跌破財報前水位，**唯一改變的變數就是利率預期**。往後看台股 AI 供應鏈，要盯的不再是訂單能見度，而是 9/16 FOMC 與 5 年期殖利率。"
    }
  },

  nvidia: {
    event: "✅ 財報完好，但股價被利率吃掉",
    subtitle: "Q2 營收 962 億（+106% YoY）｜Q3 財測 1,080 億｜8/27 +8% → 8/28 領跌 SOX -3.47%",
    watch: [
      "8/28 SOX -3.47%，跌破財報前的 11,611.24",
      "財報數字未被推翻：資料中心 890 億、+117% YoY",
      "壓力來源是折現率，不是需求",
      "5 年期殖利率 4.481%（+0.085）是關鍵觀察值",
      "9/16 FOMC 是下一個定價點",
      "毛利率 75% 仍受記憶體與晶圓漲價擠壓",
      "今日台股台積電對 Warsh 的反應"
    ],
    note:
      "**兩個交易日走完了一個完整的循環：利多 → 集中上漲 → 集中下跌。** 8/26 財報大幅超標，8/27 股價 +8%、SOX +2.33%（但當天美股只有科技類股上漲），8/28 SOX **-3.47%** 跌破財報公布前的水位。**財報的內容一個字都沒被推翻**——營收 962 億、財測 1,080 億、資料中心年增 117%、AWS 下單 200 萬顆 GPU 全部有效。改變的是折現率：市場把 9 月升息機率從 35% 拉到 57%。\n\n**這件事的教訓是可以帶著走的**：當一個利多只能推動少數幾檔股票、而總體變數同時轉向時，利多提供的是**出場的流動性**，不是新的買盤。上一版已經寫過「基本面利多遇到集中的持股結構，就會變成出貨的流動性」——8/28 是那句話的驗證。"
  },

  taiex: {
    date: "8/28 收盤（演說前）",
    close: "46,331.45",
    change: "+356.23",
    changePct: "+0.77%",
    turnover: "NT$1,068.99B",
    note:
      "🟢 **數字很漂亮，但要記得它的時間戳。** 8/28 台股創新高收 46,331.45（+356.23），**成交金額突破兆元**達 **10,689.85 億**——這是 8/17 以來首次破兆，較前一日的 9,674.66 億再增 10.5%；櫃買同步增至 2,981.34 億。上一版問「台股能否守住 45,975」，答案是不只守住，還往上走了 356 點。\n\n**但台股 13:30 收盤，Warsh 是台灣時間當晚 22:00 才開口。** 這根長紅 K 完全沒有反應演說內容，而演說後美股半導體當晚重挫 3.47%。**今天開盤是台股對這件事的第一次定價**——8/28 的創高與破兆量，要放在「尚未定價」的前提下讀。"
  },

  chips: {
    date: "8/28 盤後（證交所官方數據，演說前）",
    institutions: [
      { name: "外資及陸資", tse: "+417.54 億", otc: "未取得", signal: "g" },
      { name: "投信", tse: "-1.97 億", otc: "未取得", signal: "y" },
      { name: "自營商", tse: "+42.71 億", otc: "未取得", signal: "g" },
      { name: "　自行買賣", tse: "+1.35 億", otc: "—", signal: "y" },
      { name: "　避險", tse: "+41.36 億", otc: "—", signal: "g" },
      { name: "三大法人合計", tse: "+458.28 億", otc: "未取得", signal: "g" }
    ],
    note:
      "**外資連續第三個交易日大買：365.98 → 490.94 → 417.54 億**，三日合計買超 1,274.46 億元。三大法人 8/28 合計買超 458.28 億（分項加總與官方合計完全相等，誤差 0）。投信則小賣 1.97 億，在 8/25 以來的四個交易日裡是第四次方向變動（-39.84 → +48.55 → -14.50 → -1.97），**內資法人始終沒有形成一致立場**。\n\n**要注意的是這三天買超的時間位置**：外資的 1,274 億全部買在 Warsh 演說之前、且買在指數自 44,762 一路漲到 46,331（+1,569 點）的過程中。**如果今天開盤反應偏鷹，這批部位的成本區就在 45,000～46,300 之間**，是否續買會是本週最重要的觀察。",
    margin: {
      title: "融資融券（信用交易）",
      rows: [
        { name: "集中市場融資餘額", value: "5,671.78 億", signal: "r" },
        { name: "融資單日增減", value: "+72.59 億", signal: "r" },
        { name: "融資交易單位", value: "8,892,723 張（+11,169）", signal: "r" },
        { name: "融券餘額", value: "213,833 張", signal: "y" },
        { name: "融券單日增減", value: "+3,242 張", signal: "y" }
      ],
      warning:
        "🔴 **融資餘額連四日增加，累計 219.19 億（5,452.59 → 5,671.78），且 8/28 金額與張數同步增加。** 前三天是「金額增、張數減」（資金往高價股集中），8/28 變成兩者齊揚——**散戶不只換到高價股，還在指數創新高、成交破兆的那一天加碼**。這批槓桿部位建立在 Warsh 演說**之前**，成本落在指數的相對高位。\n\n**融券則連四日增加**（+6,305、+3,782、+3,242 張至 213,833 張），且每一天都發生在指數上漲日。上一版判斷這比較像持續性的避險或逆勢空單，8/28 再增 3,242 張支持這個讀法。**融資與融券同步增加，代表市場的多空分歧正在擴大**，而 Warsh 剛好在這個時點把總體變數推向一邊。"
    }
  },

  futures: {
    spot: "46,331.45",
    future: "46,357（202609）",
    basis: "+25.55 點正價差（連兩日收斂）",
    month: "台指期 202609（8/28）",
    note:
      "**期貨在指數創新高、成交破兆的那一天，不追價。** 基差自 8/27 的 +102.78 點再縮到 **+25.55 點**，連續第二個交易日收斂（8/26 +178.38 → 8/27 +102.78 → 8/28 +25.55）。算式：現貨漲 356.23 點，期貨只漲 279 點（46,078 → 46,357），差 77.23 點，正好等於基差的收斂幅度。\n\n用前面更正過的方法讀——**基差要和未平倉一起看**：未平倉 105,613 口（+732，幾乎不動）、成交量 41,611 口（前日 50,701 口，續減）。**未平倉沒有明顯變化、成交量萎縮、正價差持續收斂**，這組合代表期貨端既沒有加碼做多、也沒有轉為看空，而是**在創高的價位上停止追價**。\n\n值得記住的是：這一切都發生在 Warsh 演說之前。正價差只剩 25.55 點，等於今天開盤若現貨補跌，基差幾乎沒有緩衝空間。"
  },

  calendar: {
    tier1: [
      { date: "9/15-16", event: "🚨 FOMC 利率決議（市場定價升息 57%）", hot: true },
      { date: "9 月初", event: "🇺🇸 8 月非農就業", hot: true },
      { date: "9 月中", event: "🇺🇸 8 月 CPI（FOMC 前最後一份）", hot: true }
    ],
    tier2: [
      { date: "8/31", event: "月底法人作帳（今日）" },
      { date: "✅ 8/26", event: "PCE 已公布：核心 3.3% YoY" },
      { date: "✅ 8/28", event: "Warsh 首場主席演說（偏鷹）" },
      { date: "9 月底", event: "Q3 財報空窗期結束" }
    ]
  },

  risks: [
    { n: "①", name: "Fed 轉向升息定價", signal: "r", desc: "9 月升息機率 35% → 57%，5Y 殖利率單日 +0.085 熊市平坦化；折現率方向掉頭。" },
    { n: "②", name: "台股尚未定價 Warsh", signal: "r", desc: "8/28 創高破兆量全部發生在演說前，今日開盤才是第一次反應。" },
    { n: "③", name: "USD/JPY 破 160", signal: "r", desc: "8/28 收 159.32，今早盤中已破 160；連六日走弱，現在利差也轉為不利。" },
    { n: "④", name: "散戶槓桿建在高位", signal: "r", desc: "融資連四日增加累計 219.19 億，8/28 金額張數齊揚，成本落在指數相對高位。" },
    { n: "⑤", name: "正價差幾無緩衝", signal: "y", desc: "基差只剩 +25.55 點，連兩日收斂，未平倉不動——期貨在創高價位停止追價。" }
  ],

  scores: {
    items: [
      { name: "AI 基本面", score: 8, signal: "g", note: "財報數字一個字都沒被推翻；扣分是因為股價已證明它受制於折現率。" },
      { name: "美股趨勢", score: 5, signal: "y", note: "週線仍收紅（S&P +0.5%），但週五轉弱且領漲類股單日 -3.47%。" },
      { name: "Fed", score: 3.5, signal: "r", note: "🚨 本站追蹤以來最低。市場定價 9 月升息 57%，論述從降息時點變成升息與否。" },
      { name: "日圓", score: 3, signal: "r", note: "160 今早盤中失守；連六日走弱，Fed 轉鷹後利差也轉為不利。" },
      { name: "台股 AI", score: 5.5, signal: "y", note: "創高破兆量、外資三日買 1,274 億是支撐，但全部尚未定價 Warsh。" }
    ],
    overall: { name: "整體", score: 5.0, signal: "y" },
    summary: [
      "今天的一句話：**分子沒變，分母變了。** NVIDIA 的財報一個字都沒被推翻，但 Warsh 首場主席演說把 9 月**升息**機率從 35% 推到 **57%**，SOX 當天 **-3.47%** 跌破財報公布前的水位。這一波第一次可以乾淨地分離兩股力量——壓力來自折現率，不是需求。",
      "NVIDIA 基本面 🟢 ＋ 台股創高破兆量 🟢 ＋ 外資三日買 1,274 億 🟢 ＋ Fed 轉升息定價 🔴 ＋ SOX -3.47% 🔴 ＋ 日圓破 160 🔴 ＋ 散戶槓桿建在高位 🔴 ＋ 台股尚未定價 🔴",
      "整體評分 6.3 → **5.0**，是本站追蹤以來最低（8/14 曾為 8.2）。Fed 這一項由 6 直接降到 **3.5**——從 v3.9 起連續五版寫的「Warsh 的三張反對票是方向而非雜音」被完全證實，但兌現方式比預期更直接。**最需要注意的是時間差：台股 8/28 那根創高長紅完全沒有反應演說，今天開盤才是第一次定價。**"
    ]
  },

  watchlist: [
    "今日台股開盤對 Warsh 的第一次反應",
    "外資連三買 1,274 億後是否轉賣",
    "USD/JPY 今日是否**收盤**站上 160、日銀是否干預",
    "基差僅剩 +25.55，是否翻為逆價差",
    "SOX 能否守住 11,423（8/24 波段低）",
    "5 年期殖利率是否續升（升息定價的核心指標）",
    "融資連四增後是否出現追高套牢",
    "9 月初非農就業（FOMC 前的關鍵數據）",
    "9/16 FOMC 是否真的升息"
  ],

  sources: [
    { label: "Keynote remarks by Chairman Warsh at the 2026 Jackson Hole Symposium（演說全文）— Federal Reserve", url: "https://www.federalreserve.gov/newsevents/speech/warsh20260828a.htm" },
    { label: "Fed Chairman Warsh warns on inflation at Jackson Hole — CNBC", url: "https://www.cnbc.com/2026/08/28/kevin-warsh-jackson-hole-federal-reserve-inflation.html" },
    { label: "Fed chair Warsh, concerned about inflation, says bank may have 'work to do' — The Washington Post", url: "https://www.washingtonpost.com/business/2026/08/28/fed-chair-warsh-speaks-jackson-hole-conference/" },
    { label: "Warsh signals stubborn inflation may require rate hikes — PBS News", url: "https://www.pbs.org/newshour/economy/watch-live-fed-chair-warsh-speaks-at-jackson-hole-economic-policy-symposium" },
    { label: "Dow, S&P 500, Nasdaq end week on down note as rate-hike bets jump（8/28）— Yahoo Finance", url: "https://finance.yahoo.com/markets/live/stock-market-today-friday-august-28-dow-sp-500-nasdaq-dip-fed-warsh-jackson-hole-speech-081514091.html" },
    { label: "Stock market news for Aug. 28, 2026 — CNBC", url: "https://www.cnbc.com/2026/08/27/stock-market-today-live-updates.html" },
    { label: "Stock Market Outlook: Warsh Reprices Rates, Chips Fall — Market Scholars", url: "https://www.marketscholars.com/market-outlook-august-28-2026/" },
    { label: "Fed 偏好通膨指標：7 月核心 PCE 年增 3.3%（8/26 公布）— CNBC", url: "https://www.cnbc.com/2026/08/26/feds-preferred-inflation-gauge-shows-core-prices-rose-3point3percent-annually-in-july.html" },
    { label: "Treasury yields: PCE inflation report is mostly as expected — CNBC", url: "https://www.cnbc.com/2026/08/26/treasury-yields-inflation-fed.html" },
    { label: "Nvidia doubles Q2 revenue to $96 billion and crushes estimates — Fortune", url: "https://fortune.com/2026/08/26/nvidia-results-q2-earnings/" },
    { label: "USD/JPY (JPY=X) Live Rate & Chart — Yahoo Finance", url: "https://finance.yahoo.com/quote/JPY=X/" },
    { label: "三大法人買賣金額統計 BFI82U — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/foreign/bfi82u.html" },
    { label: "每日市場成交資訊 FMTQIK — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/indices/taiex/mi-5min-hist.html" },
    { label: "融資融券餘額 MI_MARGN — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/margin/mi-margn.html" },
    { label: "期貨每日交易行情（台指期與基差）— 臺灣期貨交易所", url: "https://www.taifex.com.tw/cht/3/futDailyMarketReport" }
  ]
};
