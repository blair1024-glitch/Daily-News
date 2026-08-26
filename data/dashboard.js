/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 台股數字來自 data/market-auto.js、國際行情來自 data/market-global.js
 *（皆由 GitHub Actions 自動抓取），詳見 README。
 */
window.DASHBOARD = {
  meta: {
    version: "v4.2",
    date: "2026/08/27",
    time: "08:05",
    timezone: "台灣時間",
    countdown: {
      label: "🎙️ Warsh 首場主席演說",
      note: "8/28 美東 10:00（台灣時間 8/28 晚間 22:00）",
      target: "2026-08-28T22:00:00+08:00"
    }
  },

  verdict: [
    { label: "NVIDIA", state: "營收 962 億大幅超標，財測跳到 1,080 億", signal: "g" },
    { label: "台指期基差", state: "-142 → +178，單日翻轉 321 點", signal: "g" },
    { label: "台股法人", state: "由賣 47 億轉買 594 億", signal: "g" },
    { label: "台股", state: "+663 點收 45,832，量能 8,431 億", signal: "g" },
    { label: "更正", state: "前兩版黃金數字有誤，見下", signal: "r" },
    { label: "下一關", state: "明晚 Warsh 首場主席演說", signal: "y" }
  ],

  global: {
    rows: [
      { name: "🔥 NVIDIA Q2", value: "營收 962 億（+106% YoY），盤後上漲", signal: "g" },
      { name: "🇺🇸 S&P 500", value: "7,675.70（-1.58｜-0.02%）", signal: "y" },
      { name: "🇺🇸 Nasdaq", value: "26,130.20（-21.10｜-0.08%）", signal: "y" },
      { name: "🇺🇸 Dow", value: "53,463.88（-113.52｜-0.21%）", signal: "y" },
      { name: "🔥 費城半導體 SOX", value: "11,611.24（+23.20｜+0.20%）", signal: "y" },
      { name: "VIX", value: "15.21（-0.24｜-1.55%）", signal: "g" },
      { name: "🇺🇸 30Y 公債", value: "5.186%（+0.012，止跌回升）", signal: "y" },
      { name: "🇺🇸 10Y 公債", value: "4.664%（+0.025）", signal: "y" },
      { name: "🇺🇸 5Y 公債", value: "4.381%（+0.030）", signal: "y" },
      { name: "DXY 美元指數", value: "99.13（+0.22%）", signal: "y" },
      { name: "🛢️ WTI 原油", value: "82.36（8/25 收盤，-3.12%）", signal: "g" },
      { name: "🛢️ Brent 原油", value: "88.58（8/25 收盤，-3.89%）", signal: "g" },
      { name: "🥇 Gold 黃金", value: "4,638.10（8/25 收盤，-0.06%）", signal: "y" },
      { name: "🇯🇵 USD/JPY", value: "159.22（+0.084，仍逼近 160）", signal: "r" },
      { name: "🇨🇳 USD/CNY", value: "6.7203（-0.02%）", signal: "g" },
      { name: "🇹🇼 USD/TWD", value: "31.842（+0.09%）", signal: "y" },
      { name: "🇹🇼 TAIEX", value: "45,832.62（+663.16｜+1.47%）", signal: "g" },
      { name: "🇹🇼 櫃買 OTC", value: "成交 2,456.66 億（+42%，點位未取得）", signal: "g" }
    ],
    notes: [
      "🔥 **NVIDIA 大幅超標，而且是超標到讓「達標無功」這個框架失效的程度。** 台灣時間今晨公布的 Q2 FY2027：營收 **962 億美元**（分析師約 922 億、公司財測 910 億 ±2%），年增 **106%**、季增 18%；non-GAAP EPS **2.22 美元**（預期 2.06～2.09）；資料中心營收 **890 億美元**（預期 863 億），年增 117%，已占總營收 92%。**下一季財測 1,080 億美元 ±2%**，市場原本預期約 1,042 億——等於一季之內把財測從 910 億拉到 1,080 億。另同步宣布 AWS 將採購 **200 萬顆 GPU** 並採用新的 Vera CPU。執行長黃仁勳表示 FY2028 的供給可支撐 70% 成長，但「需求遠高於此」。盤後股價上漲。",
      "🔴 **更正：前兩版的黃金數字是錯的，而且我用它寫了一整段判斷。** v4.0 寫 8/24 黃金 4,728.90（+2.27%）、v4.1 寫 8/25 為 4,724.70（+1.81%）並據此寫出「唯一不合群的訊號是黃金，連三日漲逾 6%，避險需求沒有解除」。**正確數字是 8/24 收 4,640.80（+0.36%）、8/25 收 4,638.10（-0.06%）**，8/21 到 8/25 累計僅 **+0.30%**——黃金那幾天基本是持平，不是狂漲。**原因（本版稍早我也把原因判斷錯了，一併更正）**：我最初歸因於「連續近月合約換月造成整條序列位移約 88 點」，但逐項對照後發現不是——每次抓取裡的**前一根** K 棒都與後續序列完全吻合（v4.1 推得的前收 4,640.80，正是今日序列的 8/24 收盤），錯的只有**最後一根**。黃金和下面提到的原油是**同一個病**：期貨的最後一根日線在抓取時尚未定案。那段「賣供給中斷的溢價、買地緣衝突的保險」的推論建立在不存在的走勢上，**整段撤回**。腳本已修：黃金與原油一律退用前一根已定案的日線。",
      "⚠️ **原油與黃金本版標為 8/25 收盤，不是 8/26。** 同一批期貨資料還有第二個問題：8/25 那根 K 棒在我昨天抓取（台灣 8/26 早上 07:24）之後仍在變動，WTI 由 80.97 修正為 **82.36**、Brent 由 85.86 修正為 **88.58**。原因是 CME 能量與金屬合約的日線並非以當日收盤定案。**8/26 的期貨結算價在今早抓取時尚未定案，故不採用**——寧可標明日期落後一天，也不寫一個明天會被改掉的數字。（v4.1 的「Brent 單日 -6.85%、兩日 -9.0%」據此修正為 8/25 單日 **-3.89%**、8/21→8/25 累計 **-6.2%**。方向沒錯，幅度被高估。）",
      "美股現貨 8/26 幾乎持平（S&P -0.02%、Nasdaq -0.08%、Dow -0.21%），因為 NVIDIA 財報在收盤後才公布；SOX 小漲 0.20%。殖利率則在連三日下滑後**全線回升**（10Y +0.025、30Y +0.012、5Y +0.030），油價緩解帶來的紅利開始消退。",
      "🔴 **USD/JPY 159.22，連續第二天逼近 160 且仍在走弱。** 這是本版唯一持續惡化的國際指標。明晚 Warsh 演說若偏鷹，日圓壓力會再加一層。"
    ]
  },

  fed: {
    headline: "明晚 22:00，Warsh 首度以主席身分站上 Jackson Hole",
    stats: [
      { label: "現任主席", value: "Kevin Warsh（5/22 就任）", signal: "r" },
      { label: "30Y 殖利率", value: "5.186%（+0.012，止跌）", signal: "y" },
      { label: "10Y 殖利率", value: "4.664%（+0.025）", signal: "y" },
      { label: "首場演說", value: "明晚 台灣 22:00", signal: "r" },
      { label: "下次 FOMC", value: "9/15-16（演說後 19 天）", signal: "y" }
    ],
    shift: {
      before: "🟢 「殖利率連兩日下滑，油價幫 Fed 爭取了時間」（上一版）",
      after: "🟡 「時間到了：殖利率三天後回升，而演說就在明晚」"
    },
    probability: {
      label: "Warsh 首場主席演說",
      from: "8/28 美東 10:00",
      to: "台灣時間 8/28 22:00"
    },
    footnote:
      "上一版寫「油價幫 Fed 爭取了時間，但沒有改變 Fed 的方向」——8/26 殖利率就全線回升（10Y +0.025、30Y +0.012、5Y +0.030），油價紅利只撐了三個交易日。**現在 NVIDIA 這一關過了，全部的注意力會集中到明晚。** Warsh 上任以來公開主張收緊通膨紀律、精簡 Fed 溝通並推動政策體制轉變，7 月會議紀要的三張升息反對票在這個脈絡下是方向而非雜音。這場演說距 9/16 FOMC 僅 19 天，而歷史上這個講台就是政策轉向的訊號場（2022 年 Powell 的「痛苦」演說當天 S&P 500 跌約 3.4%）。**值得注意的是紀要曾把「AI 樂觀情緒降溫」列為下行風險——NVIDIA 的財報剛好把那個風險往反方向推了一大步，這反而可能讓 Warsh 更沒有理由放鬆。**"
  },

  cpi: {
    title: "NVIDIA 過關了，剩 Warsh",
    releaseUS: "✅ NVIDIA 已公布（大幅超標）",
    releaseTW: "🎙️ 明晚 22:00 Warsh 首場主席演說",
    expectations: [
      { name: "Q2 營收", value: "**962 億美元**（預期 922 億）" },
      { name: "Q2 EPS", value: "**2.22 美元**（預期 2.06-2.09）" },
      { name: "資料中心", value: "**890 億**（+117% YoY，占 92%）" },
      { name: "Q3 財測", value: "**1,080 億 ±2%**（預期 1,042 億）" },
      { name: "毛利率", value: "75%，但受記憶體與晶圓漲價壓力" }
    ],
    fear:
      "**上一版設的四個情境裡，命中的是最好的那一格「NVIDIA 超標」，而且超標幅度超出情境表的設想。** 我原本寫「需要的不只是達標，是明顯超標加上足夠強的 Guidance」——結果兩個條件都滿足：營收超出預期約 40 億美元，財測比預期高出約 38 億美元。**但情境表還有另一半沒揭曉**：Warsh 明晚才登場，所以現在落在「超標 ＋ Warsh 未知」的中間狀態。真正該注意的新變數是**毛利率**：連續兩季 75%，但記憶體與晶圓成本正在上升——這對台灣供應鏈是雙面刃，記憶體廠受惠、代工與封測的成本轉嫁能力則被放到檯面上。",
    scenarios: [
      { result: "✅ NVIDIA 超標（已實現）", fed: "AI 敘事重新取得主動權", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "＋ Warsh 溫和", fed: "壓力全解，資金回流風險資產", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "＋ Warsh 偏鷹", fed: "基本面撐住但估值受壓", fedSignal: "y", tech: "🟡", techSignal: "y" },
      { result: "＋ Warsh 明確轉向緊縮", fed: "折現率壓過基本面", fedSignal: "r", tech: "🔴", techSignal: "r" }
    ],
    conclusion:
      "台指期在 8/26 已經先押了一邊：基差從 -142 點翻到 **+178 點**。財報證明它押對了，但下一關的答案還沒開。"
  },

  jpy: {
    level: "USD/JPY 159.22（8/26 收盤，+0.084）",
    background:
      "🔴 **連續第二天逼近 160，而且這次連殖利率回升都沒能解釋它。** 8/26 美債殖利率全線回升（10Y +0.025），照理利差擴大對美元有利、日圓走弱是合理的——但 8/25 殖利率**下滑**時日圓也在貶。**兩個方向的利差變動都對應到日圓走弱，代表主導力量不是利差。** 距 160 關卡僅約 0.8 元，而明晚就是 Warsh 首場演說：若演說偏鷹推升殖利率，160 很可能在缺乏緩衝的情況下被測試。",
    keyLevel: "160 關卡（159.22，距約 0.8 元）",
    branches: [
      {
        condition: "若明晚後突破 160",
        signal: "r",
        items: ["二次干預機率大增", "Carry Trade 平倉風險 ↑", "台股外資資金面連帶受壓"]
      },
      {
        condition: "現況：159 上緣",
        signal: "r",
        items: ["殖利率升降都對應日圓走弱 🔴", "利差已無法解釋 🔴", "距關卡不足 1 元，且明晚有事件 🔴"]
      }
    ],
    conclusion:
      "這是全站唯一連續兩版都在惡化的指標，也是唯一沒有被 NVIDIA 財報改善的風險。"
  },

  csp: {
    rows: [
      { company: "NVIDIA", result: "**Q2 營收 962 億（+106%）、財測 1,080 億**", ai: "🟢🟢🟢" },
      { company: "NVIDIA 資料中心", result: "890 億（+117% YoY），占總營收 92%", ai: "🟢🟢🟢" },
      { company: "AWS", result: "**採購 200 萬顆 GPU** ＋ 採用 Vera CPU", ai: "🟢🟢🟢" },
      { company: "費城半導體 SOX", result: "11,611.24（+0.20%），財報前小漲", ai: "🟡" },
      { company: "台積電", result: "8/25 收 2,400 元，8/26 台股 +663 點", ai: "🟢🟢" },
      { company: "毛利率", result: "75%，記憶體與晶圓成本上升中", ai: "🟡" }
    ],
    capex: {
      title: "NVIDIA 單季營收（財測跳升）",
      from: "Q2 實際 962 億美元",
      to: "Q3 財測 1,080 億美元"
    },
    takeaway: {
      not: "上一版問「基本面與股價的落差是提前降風險、還是市場看到了別的東西」——答案揭曉：是**提前降風險**",
      but: "但財報也帶出一個新的、之前沒被追蹤的變數：**毛利率 75% 正受到記憶體與晶圓漲價的擠壓**",
      conclusion:
        "**需求端的疑慮基本被清掉了**：資料中心 +117%、財測單季跳升 170 億美元、AWS 一次下 200 萬顆 GPU、黃仁勳說供給能撐 70% 成長但需求更高。接下來 AI 這條線的風險會從「需求還在不在」轉移到「**成本能不能轉嫁**」。對台灣供應鏈這是分化訊號：記憶體廠受惠於漲價，代工與封測則要看議價能力。這是下一階段要盯的新指標。"
    }
  },

  nvidia: {
    event: "✅ NVIDIA Q2 FY2027 已公布",
    subtitle: "營收 962 億美元（+106% YoY）｜EPS 2.22｜Q3 財測 1,080 億 ±2%｜盤後上漲",
    watch: [
      "資料中心 890 億（+117% YoY），占總營收 92%",
      "Q3 財測 1,080 億，較 Q2 財測 910 億跳升 170 億",
      "AWS 採購 200 萬顆 GPU ＋ 採用 Vera CPU",
      "毛利率 75%（連兩季），但記憶體與晶圓成本上升",
      "黃仁勳：FY2028 供給可撐 70% 成長，需求遠高於此",
      "台灣供應鏈分化：記憶體受惠、代工封測看議價能力",
      "今日台股開盤對財報的實際反應"
    ],
    note:
      "✅ **上一版寫「僅僅達標可能不夠」——結果它遠不只是達標。** 營收 962 億超出分析師預期約 40 億、超出公司自己財測上緣約 34 億；EPS 2.22 對預期 2.06～2.09；下一季財測 1,080 億對市場預期 1,042 億。**一季之內把財測從 910 億拉到 1,080 億**，這個幅度讓「預期已押在財測上緣、達標無功」的賠率框架失去意義。Fed 在 7 月紀要裡把「AI 樂觀情緒降溫」列為總體下行風險——這份財報把那個風險往反方向推了一大步。**唯一的新雜訊是毛利率**：75% 很高，但記憶體與晶圓漲價正在侵蝕它。"
  },

  taiex: {
    date: "8/26 收盤",
    close: "45,832.62",
    change: "+663.16",
    changePct: "+1.47%",
    turnover: "NT$843.1B",
    note:
      "**財報前一天先漲了 663 點，而且這次量能跟上了。** 成交金額 **8,430.92 億元**，較 8/25 的 7,242.58 億再增 16.4%，是 8/18 以來最大量——終於擺脫連日的低量結構。櫃買成交 2,456.66 億更是暴增 **42%**，代表資金不只集中在權值股，中小型股也回來了。上一版寫「這是一根靠單一權值股拉出來的紅 K」，8/26 的結構明顯不同：**量增、櫃買同步放大、法人全面翻多**。指數距 8/17 的波段高 45,857.27 僅差 24.65 點。"
  },

  chips: {
    date: "8/26 盤後（證交所官方數據）",
    institutions: [
      { name: "外資及陸資", tse: "+365.98 億", otc: "未取得", signal: "g" },
      { name: "投信", tse: "+48.55 億", otc: "未取得", signal: "g" },
      { name: "自營商", tse: "+179.34 億", otc: "未取得", signal: "g" },
      { name: "　自行買賣", tse: "+47.39 億", otc: "—", signal: "g" },
      { name: "　避險", tse: "+131.95 億", otc: "—", signal: "g" },
      { name: "三大法人合計", tse: "+593.87 億", otc: "未取得", signal: "g" }
    ],
    note:
      "🟢 **法人全面翻多，而且幅度是這一波最大的。** 三大法人合計買超 **593.87 億元**（分項加總與官方合計完全相等，誤差 0），外資由賣 7.87 億轉為大買 **365.98 億**、投信由賣 39.84 億轉為買 48.55 億、自營商買超 179.34 億（其中避險部位 +131.95 億是主力）。**上一版寫「法人買超這條支撐線已經斷了，賣壓變小不等於買盤回來」——8/26 買盤是真的回來了，而且是在財報公布前一天。** 自營商避險部位大幅增加通常對應期貨與選擇權的部位調整，這與同日基差翻正價差是同一件事的兩面。",
    margin: {
      title: "融資融券（信用交易）",
      rows: [
        { name: "集中市場融資餘額", value: "5,548.03 億", signal: "y" },
        { name: "融資單日增減", value: "+78.65 億", signal: "y" },
        { name: "融資交易單位", value: "8,894,036 張（-6,769）", signal: "g" },
        { name: "融券餘額", value: "206,809 張", signal: "y" },
        { name: "融券單日增減", value: "+6,305 張", signal: "y" }
      ],
      warning:
        "**這一天的融資結構和 8/24 剛好相反，而且這個反轉本身就是訊息。** 融資**金額**大增 78.65 億至 5,548.03 億，融資**張數**卻**減少 6,769 張**——金額升、張數降，代表融資部位的平均單價在上升，**資金正從低價股回流到高價股**。8/24 我記錄的是完全相反的形態（金額降、張數升，資金往低價股跑，主流股失去領導地位）；8/26 反轉回來，與台積電領軍、SOX 止穩、櫃買同步放大的畫面一致——**半導體重新拿回領導地位**。融券則增加 6,305 張至 206,809 張，在指數大漲 663 點的同一天空單反而增加，這部分需要下一個交易日確認是避險部位還是逆勢看空。"
    }
  },

  futures: {
    spot: "45,832.62",
    future: "46,011（202609）",
    basis: "+178.38 點正價差",
    month: "台指期 202609（8/26）",
    note:
      "🔴 **我上一版把這個訊號讀錯了，必須明確更正。** v4.1 把基差 -142.46 點列為第一順位風險，寫下「期貨市場用最大的貼水說：不相信這根紅 K 撐得過今晚的財報」。**一個交易日後，基差從 -142.46 翻到 +178.38，單日翻轉 320.84 點**（現貨漲 663.16 點、期貨漲 984 點），而 NVIDIA 財報大幅超標。**那個深度貼水不是方向性看空，是事件前的避險性賣壓**——持有現貨的人在二元事件前放空期貨避險，把期貨壓到深度折價；事件臨近、避險部位回補，折價就劇烈反轉。\n\n**更難堪的是，判斷所需的證據當時就寫在我自己的頁面上**：v4.1 明明記錄了「成交放大而未平倉幾乎不動（+160 口），是當沖與換手，不是新的方向性布局」——未平倉不動就代表**沒有人在建立方向性空單**，我讀對了未平倉、卻把基差當成方向訊號。**基差要和未平倉一起讀，單看基差會把避險當成看空。**\n\n8/26 的數據支持這個修正後的讀法：未平倉增至 **106,112 口（+3,394）**、成交量 57,745 口——這次是**真的有新資金進場做多**，與 8/25 的形態完全不同。"
  },

  calendar: {
    tier1: [
      { date: "8/27-29", event: "🇺🇸 Jackson Hole 年會（今日起）", hot: true },
      { date: "8/28", event: "🎙️ Warsh 首場主席演說（台灣 22:00）", hot: true },
      { date: "9/15-16", event: "🇺🇸 FOMC 利率決議", hot: true }
    ],
    tier2: [
      { date: "8/28", event: "🇺🇸 PCE 物價指數" },
      { date: "8/31", event: "月底法人作帳" },
      { date: "9 月初", event: "8 月非農就業" },
      { date: "9 月中", event: "8 月 CPI（FOMC 前最後一份）" }
    ]
  },

  risks: [
    { n: "①", name: "明晚 Warsh 首演說", signal: "r", desc: "NVIDIA 過關後唯一未解的關卡，距 9/16 FOMC 僅 19 天，公開立場偏鷹。" },
    { n: "②", name: "USD/JPY 逼近 160", signal: "r", desc: "全站唯一連兩版惡化、且未被財報改善的指標；殖利率升降都對應日圓走弱。" },
    { n: "③", name: "殖利率止跌回升", signal: "y", desc: "連三日下滑後全線回升，油價帶來的緩解只撐了三個交易日。" },
    { n: "④", name: "毛利率成本壓力", signal: "y", desc: "NVIDIA 毛利率 75% 受記憶體與晶圓漲價擠壓，台灣供應鏈將分化。" },
    { n: "⑤", name: "指數逼近波段高", signal: "y", desc: "45,832.62 距 8/17 的 45,857.27 僅 24.65 點，前高附近容易出現獲利了結。" }
  ],

  scores: {
    items: [
      { name: "AI 基本面", score: 9, signal: "g", note: "資料中心 +117%、財測單季跳升 170 億、AWS 下單 200 萬顆 GPU，需求疑慮清除。" },
      { name: "美股趨勢", score: 6.5, signal: "y", note: "8/26 現貨持平（財報在盤後），殖利率止跌回升，等明晚 Warsh。" },
      { name: "Fed", score: 6, signal: "y", note: "油價紅利只撐三個交易日，殖利率全線回升；首場主席演說就在明晚。" },
      { name: "日圓", score: 4, signal: "r", note: "159.22 連兩日逼近 160，利差已無法解釋其走勢，唯一未改善的風險。" },
      { name: "台股 AI", score: 7, signal: "g", note: "+663 點、量增 16%、櫃買暴增 42%、法人買超 594 億、基差翻正價差。" }
    ],
    overall: { name: "整體", score: 6.5, signal: "y" },
    summary: [
      "今天的一句話：**AI 這條線的疑慮被清掉了，剩下的是利率這條線。** NVIDIA 營收 962 億、財測跳到 1,080 億、資料中心年增 117%，把「AI 需求還在不在」這個問題關掉了；台股在財報前一天就先漲 663 點、法人買超 594 億、基差由 -142 翻到 +178，押對了方向。",
      "NVIDIA 超標 🟢 ＋ 法人買超 594 億 🟢 ＋ 基差翻正 🟢 ＋ 量能回升 🟢 ＋ 殖利率止跌回升 🟡 ＋ 毛利率成本壓力 🟡 ＋ 日圓逼近 160 🔴 ＋ 明晚 Warsh 🔴",
      "整體評分 5.7 → **6.5**。**本版有兩處必須明確更正**：一是我把 -142 點的基差讀成方向性看空，實際是事件前避險性貼水，而判斷所需的未平倉證據當時就寫在我自己頁面上；二是前兩版的黃金數字因期貨換月而錯誤，據此寫出的「避險需求未解除」整段撤回。下一關在明晚 22:00。"
    ]
  },

  watchlist: [
    "明晚 22:00 Warsh 首場主席演說（台灣時間）",
    "今日台股對 NVIDIA 財報的實際反應",
    "指數能否突破 8/17 波段高 45,857.27",
    "基差正價差能否守住（避險回補是否結束）",
    "外資買超 366 億能否延續",
    "融券單日增 6,305 張是避險還是逆勢空",
    "USD/JPY 是否突破 160",
    "記憶體與晶圓漲價對台灣供應鏈的分化",
    "殖利率回升是否延續"
  ],

  sources: [
    { label: "Nvidia doubles Q2 revenue to $96 billion and crushes estimates — Fortune", url: "https://fortune.com/2026/08/26/nvidia-results-q2-earnings/" },
    { label: "Nvidia earnings live updates: Q2 results, memory prices and AI outlook — CNBC", url: "https://www.cnbc.com/2026/08/26/nvidia-nvda-earnings-report-q2-2027-live-updates.html" },
    { label: "NVIDIA 2nd Quarter FY27 Financial Results（官方投資人關係）— NVIDIA", url: "https://investor.nvidia.com/events-and-presentations/events-and-presentations/event-details/2026/NVIDIA-2nd-Quarter-FY27-Financial-Results/default.aspx" },
    { label: "NVDA Q2 2027 Earnings Report on 8/26/2026 — MarketBeat", url: "https://www.marketbeat.com/earnings/reports/2026-8-26-nvidia-co-stock/" },
    { label: "Nvidia Earnings: Live Updates and Commentary August 2026 — Kiplinger", url: "https://www.kiplinger.com/investing/live/nvidia-earnings-live-updates-and-commentary-august-2026" },
    { label: "Stock Market Today (Aug. 26, 2026)：S&P 500 ahead of $NVDA — TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-aug-26-2026" },
    { label: "Stock Market News for Aug 26, 2026 — Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-aug-26-130500595.html" },
    { label: "Jackson Hole 2026：8/27-29 議程與 Warsh 首演說 — Regards of Wallstreet", url: "https://www.regardsofwallstreet.com/news/jackson-hole-2026-dates-schedule-warsh-first-speech" },
    { label: "Minutes of the FOMC, July 28–29, 2026 — Federal Reserve", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260819a.htm" },
    { label: "Brent crude oil：價格與歷史數據 — Trading Economics", url: "https://tradingeconomics.com/commodity/brent-crude-oil" },
    { label: "Gold：價格與歷史數據 — Trading Economics", url: "https://tradingeconomics.com/commodity/gold" },
    { label: "USD/JPY (JPY=X) Live Rate & Chart — Yahoo Finance", url: "https://finance.yahoo.com/quote/JPY=X/" },
    { label: "三大法人買賣金額統計 BFI82U — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/foreign/bfi82u.html" },
    { label: "每日市場成交資訊 FMTQIK — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/indices/taiex/mi-5min-hist.html" },
    { label: "融資融券餘額 MI_MARGN — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/margin/mi-margn.html" },
    { label: "期貨每日交易行情（台指期與基差）— 臺灣期貨交易所", url: "https://www.taifex.com.tw/cht/3/futDailyMarketReport" }
  ]
};
