/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 台股數字來自 data/market-auto.js、國際行情來自 data/market-global.js
 *（皆由 GitHub Actions 自動抓取），詳見 README。
 */
window.DASHBOARD = {
  meta: {
    version: "v4.3",
    date: "2026/08/28",
    time: "08:00",
    timezone: "台灣時間",
    countdown: {
      label: "🎙️ Warsh 首場主席演說",
      note: "今晚 22:00（美東 8/28 10:00），距 9/16 FOMC 19 天",
      target: "2026-08-28T22:00:00+08:00"
    }
  },

  verdict: [
    { label: "美股廣度", state: "科技是唯一上漲類股，等權重 -0.3%", signal: "r" },
    { label: "台股", state: "盤中 +569 點，終場只剩 +142，回吐 75%", signal: "r" },
    { label: "台積電", state: "開高走低翻黑，-5 元收 2,410", signal: "r" },
    { label: "外資", state: "連兩日大買，8/27 買超 490.94 億", signal: "g" },
    { label: "NVIDIA", state: "+8%，SOX +2.33%", signal: "g" },
    { label: "今晚", state: "22:00 Warsh 首場主席演說", signal: "y" }
  ],

  global: {
    rows: [
      { name: "🇺🇸 S&P 500", value: "7,730.99（+55.29｜+0.72%）", signal: "y" },
      { name: "🇺🇸 Nasdaq", value: "26,541.35（+411.15｜+1.57%）", signal: "g" },
      { name: "🇺🇸 Dow", value: "53,569.44（+105.56｜+0.20%）", signal: "y" },
      { name: "🔥 費城半導體 SOX", value: "11,882.17（+270.93｜+2.33%）", signal: "g" },
      { name: "🔥 NVIDIA", value: "財報後 +8%（台積電 ADR +1.7%）", signal: "g" },
      { name: "VIX", value: "14.51（-0.70｜-4.60%）", signal: "g" },
      { name: "🇺🇸 30Y 公債", value: "5.191%（+0.005）", signal: "y" },
      { name: "🇺🇸 10Y 公債", value: "4.672%（+0.008）", signal: "y" },
      { name: "🇺🇸 5Y 公債", value: "4.396%（+0.015）", signal: "y" },
      { name: "DXY 美元指數", value: "99.13（-0.04%）", signal: "y" },
      { name: "🛢️ WTI 原油", value: "82.23（8/26 收盤，-0.16%）", signal: "g" },
      { name: "🛢️ Brent 原油", value: "87.84（8/26 收盤，-0.84%）", signal: "g" },
      { name: "🥇 Gold 黃金", value: "4,598.20（8/26 收盤，-0.86%）", signal: "g" },
      { name: "🇯🇵 USD/JPY", value: "159.26（+0.032，連四日走弱）", signal: "r" },
      { name: "🇨🇳 USD/CNY", value: "6.7225（+0.03%）", signal: "g" },
      { name: "🇹🇼 USD/TWD", value: "31.806（-0.11%）", signal: "g" },
      { name: "🇹🇼 TAIEX", value: "45,975.22（+142.60｜+0.31%）", signal: "y" },
      { name: "🇹🇼 櫃買 OTC", value: "成交 2,869.81 億（+16.8%，點位未取得）", signal: "g" }
    ],
    notes: [
      "🔴 **今天最重要的一件事不是指數漲了多少，是「誰在漲」。** 美股 8/27 表面亮眼——S&P +0.72%、Nasdaq +1.57%、SOX +2.33%、NVIDIA **+8%**——但**科技是當天 S&P 500 裡唯一上漲的類股，其餘全數收黑**，等權重版本的 S&P 500 反而**下跌 0.3%**。換句話說，指數是被少數幾檔股票扛上去的（NVIDIA +8%、Salesforce +23%、CrowdStrike +21% 各有財報利多）。**這是一場極度集中的上漲，不是全面回升。**",
      "🔴 **台股的版本更直白：開高走低，回吐了七成五。** 8/27 早盤一度大漲 **569.16 點**、最高觸及 **46,401.78**，終場只剩 **+142.60 點**收 45,975.22——**盤中漲幅回吐 426.56 點，約 75%**。更關鍵的是**台積電開高走低翻黑**，終場小跌 5 元收 2,410 元，而它的 ADR 前一夜還漲 1.7%。財報利多在開盤那一刻就被用來出貨了。",
      "⚠️ **「大買 ＋ 大量 ＋ 小漲」是一組需要警覺的組合。** 三大法人買超 **626.79 億**、外資單日買 **490.94 億**、成交金額放大到 **9,674.66 億**（破 9,000 億，本月最大量）——這麼多買盤，指數卻只漲 0.31%。對照 8/26：法人買 593.87 億、成交 8,430.92 億，指數漲了 **663.16 點**。**買得更多、量能更大，卻只換到不到四分之一的漲幅**，中間的差額就是賣壓。",
      "✅ **NVIDIA 財報的實質內容被市場確認了**：股價 +8%、SOX +2.33%、台積電 ADR +1.7%。上一版把「需求端疑慮清除」寫成本波最大的利多，這一點沒有被推翻——被質疑的是**價格已經反映了多少**。另台灣 7 月工業生產指數再創歷史新高，基本面同步支持。",
      "🔴 **USD/JPY 159.26，連續第四個交易日走弱。** 這是全站唯一從頭到尾沒有改善過的指標。今晚 Warsh 若偏鷹推升殖利率，160 就在眼前。",
      "📌 資料註記：原油與黃金標示為 **8/26 收盤**，因 CME 期貨的最後一根日線在抓取時尚未定案，管道一律退用前一根已定案日線（見 README）。**這個機制昨天就驗證了效果**：昨天那根未定案的 8/26 黃金 K 棒顯示 4,675.40，今天定案為 **4,598.20**，相差 77 點——若照抄未定案值，今天又要更正一次。"
    ]
  },

  fed: {
    headline: "今晚 22:00：NVIDIA 過了，剩這一關",
    stats: [
      { label: "現任主席", value: "Kevin Warsh（5/22 就任）", signal: "r" },
      { label: "演說時間", value: "🔥 今晚台灣 22:00", signal: "r" },
      { label: "30Y 殖利率", value: "5.191%（+0.005）", signal: "y" },
      { label: "10Y 殖利率", value: "4.672%（+0.008）", signal: "y" },
      { label: "下次 FOMC", value: "9/15-16（演說後 19 天）", signal: "y" }
    ],
    shift: {
      before: "🟡 「殖利率止跌回升，油價紅利只撐了三個交易日」（上一版）",
      after: "🔴 「今晚就是那個會決定利率路徑的事件本身」"
    },
    probability: {
      label: "Warsh 首場主席演說",
      from: "今晚 台灣 22:00",
      to: "美東 8/28 10:00"
    },
    footnote:
      "**這是本週最後一關，而且它的風險結構被 NVIDIA 改變了。** 殖利率連兩日小幅回升（10Y +0.008、30Y +0.005、5Y +0.015），幅度不大但方向沒變。Warsh 上任以來公開主張收緊通膨紀律、精簡 Fed 溝通、推動政策體制轉變，7 月紀要的三張升息反對票在這個脈絡下是方向而非雜音。**關鍵在於**：那份紀要曾把「AI 樂觀情緒降溫拖累消費」列為下行風險——NVIDIA 的財報把那個風險徹底往反方向推了，等於**幫 Warsh 移除了一個放鬆的理由**。歷史上 Jackson Hole 就是政策轉向的訊號場（2022 年 Powell 的「痛苦」演說當天 S&P 500 跌約 3.4%）。距 9/16 FOMC 只有 19 天。"
  },

  cpi: {
    title: "今晚 22:00，Warsh 首場主席演說",
    releaseUS: "✅ NVIDIA 已公布（+8%）",
    releaseTW: "🔥 今晚 22:00 Warsh 登場",
    expectations: [
      { name: "時間", value: "**今晚台灣 22:00**（美東 10:00）" },
      { name: "場合", value: "Jackson Hole 年會（8/27-29）" },
      { name: "身分", value: "**首次**以主席身分發表主題演說" },
      { name: "距 FOMC", value: "19 天（9/15-16）" },
      { name: "同日", value: "🇺🇸 PCE 物價指數" }
    ],
    fear:
      "**上一版的情境表現在只剩下半部沒開。** 「NVIDIA 超標」那格已經實現且被市場確認（+8%、SOX +2.33%）。剩下的變數全在今晚。**但市場的起跑姿態不理想**：美股廣度極差（科技是唯一上漲類股、等權重 -0.3%）、台股開高走低回吐七成五、台積電翻黑。**在這種集中且已先漲過的結構下，偏鷹的演說會打在比較脆弱的位置上**——因為能承接賣壓的資金已經在 8/26、8/27 兩天用掉了不少。",
    scenarios: [
      { result: "✅ NVIDIA 超標（已實現）", fed: "需求疑慮清除，SOX +2.33% 確認", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "＋ Warsh 溫和", fed: "壓力全解，廣度有機會擴散", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "＋ Warsh 偏鷹", fed: "折現率壓估值，集中結構最怕這個", fedSignal: "r", tech: "🔴", techSignal: "r" },
      { result: "＋ 明確轉向緊縮", fed: "AI 基本面撐不住估值收縮", fedSignal: "r", tech: "🔴🔴", techSignal: "r" }
    ],
    conclusion:
      "台指期的態度也在變：基差自 +178.38 收斂到 **+102.78**，未平倉減少 1,231 口。8/26 建立的多方部位，8/27 開始減碼——期貨在演說前先降風險。"
  },

  jpy: {
    level: "USD/JPY 159.26（8/27 收盤，+0.032）",
    background:
      "🔴 **連續第四個交易日走弱，而且四天裡殖利率有升有降，日圓都在貶。** 8/25 殖利率下滑、日圓貶；8/26 殖利率回升、日圓貶；8/27 殖利率再小升、日圓再貶 0.032 至 **159.255**。**利差方向已經完全無法解釋這個走勢**，代表主導力量在別處（可能是套利交易的部位結構或資金流向）。距 160 關卡僅約 0.75 元。**今晚 Warsh 若偏鷹推升殖利率，160 幾乎沒有緩衝空間。**",
    keyLevel: "160 關卡（159.26，距約 0.75 元）",
    branches: [
      {
        condition: "若今晚後突破 160",
        signal: "r",
        items: ["二次干預機率大增", "Carry Trade 平倉風險 ↑", "台股外資資金面連帶受壓"]
      },
      {
        condition: "現況：連四日走弱",
        signal: "r",
        items: ["殖利率升降都對應日圓貶 🔴", "利差已完全無法解釋 🔴", "距關卡不足 0.8 元，且今晚有事件 🔴"]
      }
    ],
    conclusion:
      "全站唯一從第一版追到現在、沒有任何一天改善過的指標。NVIDIA 沒有改善它，油價崩跌沒有改善它，殖利率下滑也沒有。"
  },

  csp: {
    rows: [
      { company: "NVIDIA", result: "財報後 **+8%**｜營收 962 億、財測 1,080 億", ai: "🟢🟢🟢" },
      { company: "費城半導體 SOX", result: "11,882.17（**+2.33%**），創本波反彈新高", ai: "🟢🟢🟢" },
      { company: "台積電 ADR", result: "+1.7%", ai: "🟢🟢" },
      { company: "台積電（台股）", result: "🔴 **開高走低翻黑**，-5 元收 2,410", ai: "🔴" },
      { company: "Salesforce / CrowdStrike", result: "各自財報利多，+23% / +21%", ai: "🟢🟢" },
      { company: "其餘 S&P 類股", result: "🔴 **全數收黑**，等權重 S&P -0.3%", ai: "🔴" }
    ],
    capex: {
      title: "NVIDIA 單季營收（財測跳升）",
      from: "Q2 實際 962 億美元",
      to: "Q3 財測 1,080 億美元"
    },
    takeaway: {
      not: "需求端的疑慮確實清除了，而且被股價確認：NVIDIA +8%、SOX +2.33%、台積電 ADR +1.7%",
      but: "但**利多只推動了持有那幾檔股票的人**——美股其餘類股全黑、等權重下跌，台積電在台股當天甚至翻黑",
      conclusion:
        "**問題已經從「AI 需求還在不在」變成「這個好消息還能買到多少人」。** 8/27 給的答案是：買到的人很少。美股靠三檔財報股扛住指數、台股法人買了 626 億只換到 0.31% 漲幅並在盤中回吐七成五。**基本面利多遇到集中的持股結構，就會變成出貨的流動性**。下一階段要盯的是廣度能不能擴散，而不是 NVIDIA 還能漲多少。"
    }
  },

  nvidia: {
    event: "✅ NVIDIA 財報後 +8%",
    subtitle: "Q2 營收 962 億（+106% YoY）｜EPS 2.22｜Q3 財測 1,080 億｜8/27 股價 +8%",
    watch: [
      "股價 +8%，SOX +2.33% 同步確認",
      "台積電 ADR +1.7%，但台股台積電當天翻黑",
      "資料中心 890 億（+117% YoY），占總營收 92%",
      "Q3 財測 1,080 億，較 Q2 財測 910 億跳升 170 億",
      "毛利率 75%，記憶體與晶圓成本上升中",
      "廣度問題：美股僅科技類股上漲，等權重 -0.3%",
      "台股能否在今晚 Warsh 之後守住 45,975"
    ],
    note:
      "✅ **財報本身無可挑剔，市場的反應也確認了它**：股價 +8%、SOX +2.33%、台積電 ADR +1.7%。上一版寫「需求端的疑慮基本被清掉了」，這個判斷成立。**但要小心把「財報好」直接讀成「行情好」**——同一天美股其餘類股全數收黑、等權重 S&P 下跌 0.3%；台股開高走低回吐七成五、台積電在利多當天翻黑。**利多是真的，能接住利多的資金是有限的。** 接下來 AI 這條線的觀察重心，應該從財報數字轉到毛利率（記憶體與晶圓漲價）與市場廣度。"
  },

  taiex: {
    date: "8/27 收盤",
    close: "45,975.22",
    change: "+142.60",
    changePct: "+0.31%",
    turnover: "NT$967.5B",
    note:
      "🔴 **突破了波段高，但這根 K 棒的內容不好看。** 上一版問「指數能否突破 8/17 波段高 45,857.27」——**突破了**，而且盤中一度衝到 **46,401.78**（大漲 569.16 點）。**但終場只剩 +142.60 點，盤中漲幅回吐 426.56 點、約七成五。** 成交金額放大到 **9,674.66 億**（本月最大量、突破 9,000 億），櫃買同步增至 2,869.81 億（+16.8%）。**量大、法人大買、卻只收在 +0.31%，並且是開高走低**——這種結構通常代表高檔換手而非續攻，尤其是在利多見報的當天。台積電開高走低小跌 5 元收 2,410 元，是最直接的證據。"
  },

  chips: {
    date: "8/27 盤後（證交所官方數據）",
    institutions: [
      { name: "外資及陸資", tse: "+490.94 億", otc: "未取得", signal: "g" },
      { name: "投信", tse: "-14.50 億", otc: "未取得", signal: "r" },
      { name: "自營商", tse: "+150.35 億", otc: "未取得", signal: "g" },
      { name: "　自行買賣", tse: "+59.83 億", otc: "—", signal: "g" },
      { name: "　避險", tse: "+90.52 億", otc: "—", signal: "g" },
      { name: "三大法人合計", tse: "+626.79 億", otc: "未取得", signal: "g" }
    ],
    note:
      "**外資連兩日大買且加碼：365.98 → 490.94 億**，三大法人合計買超 626.79 億（分項加總與官方合計完全相等，誤差 0），是這一波最大的單日買超。上一版問「外資買超 366 億能否延續」——**延續而且放大**。\n\n**但兩個地方要注意。** 一是**投信第三度轉向**：8/25 賣 39.84 億 → 8/26 買 48.55 億 → 8/27 又賣 **14.50 億**，三個交易日換了三次方向，內資法人完全沒有一致立場。二是**這麼大的買超只換到 0.31% 漲幅**，代表對手方賣壓同樣巨大——法人買 626.79 億、成交 9,674.66 億，中間的差額說明了盤中為什麼會從 +569 點回吐到 +142 點。\n\n📌 註：部分媒體報導投信為小買 1.77 億、合計 643.07 億，與證交所 BFI82U 官方數字不符（官方合計與分項加總誤差為 0）。本站一律以官方為準，此處差異連投信的**買賣方向都相反**，引用新聞數字時要特別小心。",
    margin: {
      title: "融資融券（信用交易）",
      rows: [
        { name: "集中市場融資餘額", value: "5,599.19 億", signal: "r" },
        { name: "融資單日增減", value: "+51.16 億", signal: "r" },
        { name: "融資交易單位", value: "8,881,555 張（-12,476）", signal: "g" },
        { name: "融券餘額", value: "210,591 張", signal: "y" },
        { name: "融券單日增減", value: "+3,782 張", signal: "y" }
      ],
      warning:
        "**融資金額連三日增加，累計 146.60 億（5,452.59 → 5,599.19）**，但融資**張數**同時連兩日減少（-6,769、-12,476 張）。金額升、張數降，代表資金持續往**高價股**集中——與台積電、半導體重新拿回領導地位的畫面一致。這個形態本身不算壞，但要注意它的另一面：**散戶的槓桿正集中押在同一批高價股上**，而那批股票正是 8/27 開高走低的那批。\n\n**融券連兩日增加**（+6,305、+3,782 張至 210,591 張）。上一版把它列為待確認項目——連兩日增加且都發生在指數上漲日，比較像是**持續性的避險或逆勢空單**，而非單日現象。在今晚 Warsh 演說前，空單累積是合理的部位選擇。"
    }
  },

  futures: {
    spot: "45,975.22",
    future: "46,078（202609）",
    basis: "+102.78 點正價差（收斂）",
    month: "台指期 202609（8/27）",
    note:
      "**正價差守住了，但在收斂——而且是在演說前收斂。** 基差自 8/26 的 +178.38 點縮到 **+102.78 點**（現貨漲 142.60 點、期貨只漲 67 點）。未平倉自 106,112 口降至 **104,881 口（-1,231）**、成交量 50,701 口（前日 57,745 口）。**未平倉減少代表 8/26 建立的多方部位開始平倉**，這與 8/26 的形態（未平倉 +3,394，新資金進場）相反。\n\n上一版更正過一次基差的讀法：**基差要和未平倉一起讀**。照這個方法讀 8/27——正價差仍在（期貨沒有轉為看空），但未平倉下降（部位在減碼）——結論是**期貨市場在今晚的演說前降風險，而不是轉空**。這與現貨端開高走低、法人大買卻漲不動是同一件事的三個面向。"
  },

  calendar: {
    tier1: [
      { date: "8/28", event: "🎙️ Warsh 首場主席演說（今晚 22:00）", hot: true },
      { date: "8/27-29", event: "🇺🇸 Jackson Hole 年會（進行中）" },
      { date: "9/15-16", event: "🇺🇸 FOMC 利率決議", hot: true }
    ],
    tier2: [
      { date: "8/28", event: "🇺🇸 PCE 物價指數（同日）" },
      { date: "8/31", event: "月底法人作帳" },
      { date: "9 月初", event: "8 月非農就業" },
      { date: "9 月中", event: "8 月 CPI（FOMC 前最後一份）" }
    ]
  },

  risks: [
    { n: "①", name: "上漲極度集中", signal: "r", desc: "美股僅科技類股上漲、等權重 -0.3%；指數靠 NVIDIA、Salesforce、CrowdStrike 三檔財報股撐住。" },
    { n: "②", name: "利多當天開高走低", signal: "r", desc: "台股盤中 +569 點回吐至 +142 點（七成五），台積電在 ADR 大漲後翻黑——利多被用來出貨。" },
    { n: "③", name: "今晚 Warsh 首演說", signal: "r", desc: "集中且已先漲過的結構最怕偏鷹；NVIDIA 的好消息反而移除了 Fed 放鬆的一個理由。" },
    { n: "④", name: "USD/JPY 連四日走弱", signal: "r", desc: "159.26，距 160 僅 0.75 元；殖利率升降都對應日圓貶，利差已無法解釋。" },
    { n: "⑤", name: "期貨在演說前減碼", signal: "y", desc: "正價差由 +178 收斂至 +103，未平倉減少 1,231 口，8/26 的多方部位開始平倉。" }
  ],

  scores: {
    items: [
      { name: "AI 基本面", score: 9, signal: "g", note: "財報內容被股價確認：NVIDIA +8%、SOX +2.33%、台積電 ADR +1.7%。" },
      { name: "美股趨勢", score: 6, signal: "y", note: "指數漲但廣度極差——科技是唯一上漲類股，等權重 S&P 反而 -0.3%。" },
      { name: "Fed", score: 6, signal: "y", note: "殖利率小幅回升；今晚 22:00 首場主席演說，本週最後也最大的一關。" },
      { name: "日圓", score: 4, signal: "r", note: "159.26 連四日走弱，距 160 僅 0.75 元，全站唯一從未改善的指標。" },
      { name: "台股 AI", score: 6.5, signal: "y", note: "突破波段高但盤中回吐七成五、台積電翻黑；法人買 626 億只換到 +0.31%。" }
    ],
    overall: { name: "整體", score: 6.3, signal: "y" },
    summary: [
      "今天的一句話：**利多是真的，但能接住利多的資金是有限的。** NVIDIA +8%、SOX +2.33%，財報內容完全被確認——可是美股當天**只有科技類股上漲、等權重 S&P 反而跌 0.3%**；台股盤中大漲 569 點，終場只剩 142 點，**台積電在 ADR 大漲後反而翻黑**。",
      "NVIDIA +8% 🟢 ＋ SOX +2.33% 🟢 ＋ 外資買 490.94 億 🟢 ＋ 廣度極差 🔴 ＋ 開高走低回吐七成五 🔴 ＋ 期貨減碼 🟡 ＋ 日圓連四貶 🔴 ＋ 今晚 Warsh 🔴",
      "整體評分 6.5 → **6.3**。上一版問「這個好消息能買到多少人」，8/27 給的答案是：**很少**。法人買 626.79 億、成交量放大到 9,674.66 億，只換到 0.31% 的漲幅——中間的差額就是賣壓。所有東西現在壓在同一個時點：**今晚 22:00**。"
    ]
  },

  watchlist: [
    "今晚 22:00 Warsh 首場主席演說",
    "台股能否守住 45,975（今日開盤即知）",
    "美股廣度能否擴散（等權重 S&P 是關鍵）",
    "台積電能否收復 2,410 之上",
    "外資連兩日大買後是否續買",
    "基差正價差是否續縮（未平倉一起看）",
    "融券連兩日增加是否延續",
    "USD/JPY 是否突破 160",
    "同日公布的 PCE 物價指數"
  ],

  sources: [
    { label: "Stock Market Today (Aug. 27, 2026)：S&P 500 climbs after Nvidia earnings beat — Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-aug-27-144318504.html" },
    { label: "Stock Market Today, Aug. 27: Tech Strength Powers Nasdaq Higher as Nvidia Leads Rally — The Motley Fool", url: "https://www.fool.com/coverage/stock-market-today/2026/08/27/stock-market-today-aug-27-tech-strength-powers-nasdaq-higher-as-nvidia-leads-rally/" },
    { label: "Tech stands alone as sole S&P 500 sector to advance after Nvidia earnings — TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-aug-27-2026" },
    { label: "S&P 500 Advances as Nvidia, Tech Outweigh Broad Weakness — Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-27/us-stock-futures-climb-as-nvidia-s-outlook-lifts-tech-sector" },
    { label: "台股漲勢收斂收 45975 點 台積電下跌 5 元收 2410 元（8/27）— 壹蘋新聞網", url: "https://news.nextapple.com/finance/20260827/4B3E1A840648CAAEC5335A878706D99B" },
    { label: "外資狂掃 490 億回補台股（8/27）— 民報", url: "https://www.peoplenews.tw/articles/economic-news/52119" },
    { label: "輝達財報助攻股價狂飆 7.45%，台積電 ADR 漲 1.7% — ETtoday 財經雲", url: "https://finance.ettoday.net/news/3227063" },
    { label: "Nvidia doubles Q2 revenue to $96 billion and crushes estimates — Fortune", url: "https://fortune.com/2026/08/26/nvidia-results-q2-earnings/" },
    { label: "NVIDIA 2nd Quarter FY27 Financial Results（官方投資人關係）— NVIDIA", url: "https://investor.nvidia.com/events-and-presentations/events-and-presentations/event-details/2026/NVIDIA-2nd-Quarter-FY27-Financial-Results/default.aspx" },
    { label: "Jackson Hole 2026：8/27-29 議程與 Warsh 首演說 — Regards of Wallstreet", url: "https://www.regardsofwallstreet.com/news/jackson-hole-2026-dates-schedule-warsh-first-speech" },
    { label: "Minutes of the FOMC, July 28–29, 2026 — Federal Reserve", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260819a.htm" },
    { label: "USD/JPY (JPY=X) Live Rate & Chart — Yahoo Finance", url: "https://finance.yahoo.com/quote/JPY=X/" },
    { label: "三大法人買賣金額統計 BFI82U — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/foreign/bfi82u.html" },
    { label: "每日市場成交資訊 FMTQIK — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/indices/taiex/mi-5min-hist.html" },
    { label: "融資融券餘額 MI_MARGN — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/margin/mi-margn.html" },
    { label: "期貨每日交易行情（台指期與基差）— 臺灣期貨交易所", url: "https://www.taifex.com.tw/cht/3/futDailyMarketReport" }
  ]
};
