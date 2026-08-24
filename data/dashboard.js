/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 台股數字來自 data/market-auto.js、國際行情來自 data/market-global.js
 *（皆由 GitHub Actions 自動抓取），詳見 README。
 */
window.DASHBOARD = {
  meta: {
    version: "v4.0",
    date: "2026/08/25",
    time: "07:55",
    timezone: "台灣時間",
    countdown: {
      label: "🔥 NVIDIA 財報",
      note: "8/26 美西 14:00 法說（台灣時間 8/27 清晨 05:00）",
      target: "2026-08-27T05:00:00+08:00"
    }
  },

  verdict: [
    { label: "風險輪動", state: "殖利率與油價緩解，但錢跑去黃金", signal: "y" },
    { label: "費半 SOX", state: "-2.70%，五個交易日 -9.5%", signal: "r" },
    { label: "NVIDIA", state: "連 7 黑，2022/9 以來首見", signal: "r" },
    { label: "外資", state: "翻空賣超 157.36 億", signal: "r" },
    { label: "台股量能", state: "6,562 億，再創新低", signal: "r" },
    { label: "30Y 殖利率", state: "回落至 5.231%，壓力暫緩", signal: "g" }
  ],

  global: {
    rows: [
      { name: "🇺🇸 S&P 500", value: "7,652.86（-21.51｜-0.28%）", signal: "y" },
      { name: "🇺🇸 Nasdaq", value: "25,980.19（-200.27｜-0.76%）", signal: "r" },
      { name: "🇺🇸 Dow", value: "53,417.16（+140.15｜+0.26%）", signal: "g" },
      { name: "🔥 費城半導體 SOX", value: "11,423.17（-317.20｜-2.70%）", signal: "r" },
      { name: "VIX", value: "15.85（+0.72｜+4.76%）", signal: "y" },
      { name: "🇺🇸 30Y 公債", value: "5.231%（-0.045）", signal: "g" },
      { name: "🇺🇸 10Y 公債", value: "4.704%（-0.034）", signal: "g" },
      { name: "🇺🇸 5Y 公債", value: "4.408%（-0.016）", signal: "g" },
      { name: "DXY 美元指數", value: "98.98（+0.19%）", signal: "y" },
      { name: "🛢️ WTI 原油", value: "85.14（-2.21%）", signal: "g" },
      { name: "🛢️ Brent 原油", value: "92.13（-2.39%）", signal: "g" },
      { name: "🥇 Gold 黃金", value: "4,728.90（+2.27%）", signal: "r" },
      { name: "🇯🇵 USD/JPY", value: "158.90（+0.02）", signal: "y" },
      { name: "🇨🇳 USD/CNY", value: "6.7210（-0.02%）", signal: "g" },
      { name: "🇹🇼 USD/TWD", value: "31.822（-0.05%）", signal: "g" },
      { name: "🇹🇼 TAIEX", value: "44,762.32（-461.97｜-1.02%）", signal: "r" },
      { name: "🇹🇼 櫃買 OTC", value: "成交 1,939.53 億（點位未取得）", signal: "y" }
    ],
    notes: [
      "🔄 **今天的主軸是「風險輪動」，不是「風險解除」。** 前一版排第一的兩個風險同時緩解了：30Y 殖利率自 5.276% 回落至 **5.231%**（10Y 4.738% → 4.704%、5Y 亦降），油價則在利空落地後重挫。但錢**沒有回到 AI**——道瓊 +0.26%、Nasdaq -0.76%、費半 **-2.70%**，完整的防禦輪動階梯；同時黃金單日再漲 **2.27% 至 4,728.90**，連兩個交易日各漲逾 2.2%。壓力沒有消失，只是換了地方。",
      "🔴 **一個被資訊缺口遮住的判讀，今天補上。** 本站的國際行情自動抓取管道昨天才建好，SOX 在 v3.6～v3.9 一直標「未取得」。補上歷史數據後才看見：費半自 8/17 的 **12,621 點**一路跌到 8/24 的 **11,423.17 點，五個交易日 -9.5%**。也就是說，過去一週我在頁面上討論「量能萎縮、基差翻負」的同時，半導體指數已經在破線了，而我沒看見。**這不是判斷失誤，是資料缺口造成的盲點**——這也正是為什麼要把行情抓取自動化。",
      "🔴 **油價因果鏈方向寫錯了，更正。** v3.6～v3.8 把「美對伊朗制裁 → 油價上行 → 通膨壓力」列為風險來源。8/24 制裁實際落地——美國財政部長 Bessent 宣布針對與伊朗往來的實體與個人祭出史上最嚴厲制裁——**油價卻重挫**：WTI -2.21% 至 85.14、Brent -2.39% 至 92.13。這是典型的利多出盡，也顯示該制裁打的是**買方**而非伊朗產能。我原先的傳導方向是錯的。",
      "NVIDIA 8/24 再跌逾 2%，**連續第 7 個交易日收黑，為 2022 年 9 月以來首見**，這一波累計跌約 7%。財報就在明天盤後（台灣 8/27 清晨），連黑紀錄與財報撞在一起。",
      "⚠️ 資料註記：本版國際行情取自 `data/market-global.js` 的 **8/24 日線**。其中殖利率、DXY、原油、黃金六項因屬近乎 24 小時交易，腳本的「盤中判定」把它們的 settled 欄退回 8/21，故本版改採同檔案的 8/24 日線（`latest`），並已用當日新聞逐項交叉驗證（WTI 約 -2.5%、Brent 約 -2.5%、黃金約 4,712）。此為腳本待修的判定過嚴問題，已記錄。櫃買 OTC 指數點位仍無可用自動來源，維持「未取得」。"
    ]
  },

  fed: {
    headline: "殖利率回落了，但這不是 Fed 轉向",
    stats: [
      { label: "現任主席", value: "Kevin Warsh（5/22 就任）", signal: "r" },
      { label: "30Y 殖利率", value: "5.231%（-0.045）", signal: "g" },
      { label: "10Y 殖利率", value: "4.704%（-0.034）", signal: "g" },
      { label: "首場演說", value: "8/28 美東 10:00", signal: "r" },
      { label: "下次 FOMC", value: "9/15-16（演說後 19 天）", signal: "y" }
    ],
    shift: {
      before: "🔴 「長端殖利率飆到 19 年新高，是第一順位風險」（前一版）",
      after: "🟢 「殖利率全線回落，壓力暫緩——但只是暫緩」"
    },
    probability: {
      label: "Warsh 首場主席演說",
      from: "8/28 美東 10:00",
      to: "台灣時間 8/28 22:00"
    },
    footnote:
      "殖利率回落值得記錄，但**不要把它讀成 Fed 轉向**。三件事沒有變：一、Warsh 自 5/22 上任以來公開主張收緊通膨紀律與政策體制轉變；二、7 月會議紀要有三張主張升息的反對票，在新主席的脈絡下那是方向而非雜音；三、紀要把「AI 樂觀情緒降溫拖累消費」明列為總體下行風險。這次回落更像是**資金從股市流向債市的避險買盤**——同一天黃金大漲 2.27%、VIX 上升 4.76%，三者是同一個動作的三個面向。真正的答案在 **8/28 Warsh 首場主席演說**（台灣時間 8/28 晚間 10 點），那場演說距離 9/16 FOMC 只有 19 天。"
  },

  cpi: {
    title: "本週雙事件：NVIDIA ＋ Warsh 首演說",
    releaseUS: "8/26 NVIDIA（美西 14:00）",
    releaseTW: "🇹🇼 8/28 Warsh 首場主席演說",
    expectations: [
      { name: "8/26 NVIDIA", value: "Q2 FY2027（台灣 8/27 05:00）" },
      { name: "市場預期", value: "營收 918.5 億美元、EPS 2.08" },
      { name: "公司財測", value: "營收 910 億美元 ±2%" },
      { name: "8/28 Warsh", value: "**首場**主席演說（台灣 22:00）" },
      { name: "接續", value: "8 月非農、8 月 CPI → 9/15-16 FOMC" }
    ],
    fear:
      "**兩天之內、兩個第一順位事件，而且方向可能互相抵銷。** NVIDIA 的門檻很明確：分析師預期營收 **918.5 億美元**、EPS **2.08**，公司自己的財測是 **910 億 ±2%**——市場已經把預期押在財測上緣，達標無功、不達標重罰。而它是**帶著連 7 黑走進財報**的，這種結構下財報只要中性，就可能被解讀為利空。8/28 Warsh 首度以主席身分站上 Jackson Hole 講台，歷史上這個講台就是政策轉向的訊號場（2022 年 Powell 的「痛苦」演說當天 S&P 500 跌約 3.4%）。最壞的組合仍是：NVIDIA 財報平淡，緊接著 Warsh 再確認緊縮方向。",
    scenarios: [
      { result: "NVIDIA 強 ＋ Warsh 溫和", fed: "壓力同時解除，資金回流半導體", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "NVIDIA 強 ＋ Warsh 偏鷹", fed: "估值受壓但基本面撐住", fedSignal: "y", tech: "🟡", techSignal: "y" },
      { result: "NVIDIA 平 ＋ Warsh 偏鷹", fed: "連黑紀錄下，中性即利空", fedSignal: "r", tech: "🔴", techSignal: "r" },
      { result: "NVIDIA 弱", fed: "呼應紀要點名的 AI 風險", fedSignal: "r", tech: "🔴🔴", techSignal: "r" }
    ],
    conclusion:
      "上一版寫「這一週結束前兩件事都會有答案」。目前為止市場的回答方式是：**先撤出半導體、買進黃金、等答案**。"
  },

  jpy: {
    level: "USD/JPY 158.90（8/24 收盤，+0.02）",
    background:
      "**終於有實際數字了**——這一欄在 v3.7～v3.9 連續三版標「未取得」，昨天建好的國際行情管道把它補上。8/24 收 **158.904**，日內區間約 158.36～159.14，較 8/17 的前值 159.47 略為回落。**160 關卡並未失守**，也沒有出現日銀干預的消息。同一天長端美債殖利率下滑，利差對日圓的壓力略減，這與日圓小幅走穩是一致的。",
    keyLevel: "160 仍是關卡（158.90，距約 1.1 元）",
    branches: [
      {
        condition: "若突破 160",
        signal: "r",
        items: ["二次干預機率大增", "Carry Trade 平倉風險 ↑", "與美債殖利率形成共振"]
      },
      {
        condition: "現況：守在 158~160",
        signal: "y",
        items: ["壓力暫緩 🟡", "美債殖利率回落，利差壓力略減 🟢", "仍需日銀實際動作才會反轉 🟡"]
      }
    ],
    conclusion:
      "從「無法判斷」回到「可以判斷」，本身就是進展。評分自 4 上調至 5——不是因為日圓轉強，而是因為不再需要憑空猜測。"
  },

  csp: {
    rows: [
      { company: "NVIDIA", result: "8/26 財報｜連 7 黑，波段 -7%", ai: "⭐⭐⭐⭐⭐" },
      { company: "費城半導體 SOX", result: "五個交易日 -9.5%", ai: "🔴🔴" },
      { company: "CoreWeave", result: "Q2 營收 +112%", ai: "🟢🟢🟢" },
      { company: "Nebius", result: "財報後單日 +34%", ai: "🟢🟢🟢" },
      { company: "Microsoft / Amazon", result: "Azure、AWS 強，CapEx 提高", ai: "🟢🟢🟢" },
      { company: "Alphabet / Meta", result: "Cloud 與 AI CapEx 持續", ai: "🟢🟢🟢" }
    ],
    capex: {
      title: "四大 CSP AI CapEx 合計",
      from: "2025 年約 4,100 億美元",
      to: "2026 年預計約 7,250 億美元"
    },
    takeaway: {
      not: "基本面仍然沒有壞：CapEx 與 neocloud 營收兩層驗證都還在",
      but: "但股價已經先走了——SOX 五個交易日 -9.5%、NVIDIA 連 7 黑，而這段期間沒有任何一則需求轉弱的消息",
      conclusion:
        "**基本面與股價的落差正在擴大，這是本版最該盯的一件事。** 兩種解釋：一是市場在財報前提前降風險（那麼財報過關後會補漲），二是市場看到了財報數字以外的東西——例如 AI 發債推升殖利率的自我強化循環，或 Fed 對資產價格的容忍度下降。8/26 的財報會分辨出是哪一種。"
    }
  },

  nvidia: {
    event: "8/26 NVIDIA 財報",
    subtitle: "Q2 FY2027｜美西 14:00 法說，台灣時間 8/27 清晨 05:00｜預期營收 918.5 億、EPS 2.08",
    watch: [
      "Data Center Revenue",
      "Blackwell 出貨與 GB300",
      "CSP 與 neocloud 訂單能見度",
      "毛利率",
      "下一季 Guidance（對比 910 億 ±2% 財測）",
      "CapEx 的融資結構",
      "連 7 黑是否在財報前變成連 8 黑"
    ],
    note:
      "🔴 **它是帶著連 7 黑走進財報的。** 8/24 再跌逾 2%，寫下 **2022 年 9 月以來第一次連續 7 個交易日收黑**，波段累計跌約 7%。這改變了財報的賠率結構：市場預期營收 918.5 億美元、EPS 2.08，而公司財測是 910 億 ±2%——預期已被押在財測上緣，**中性的財報在連黑的情緒下很可能被讀成利空**。同時 Fed 在 7 月紀要裡把「AI 樂觀情緒降溫」列為總體下行風險，等於把這場財報從產業事件升格為總經事件。剩 1 個交易日。"
  },

  taiex: {
    date: "8/24 收盤",
    close: "44,762.32",
    change: "-461.97",
    changePct: "-1.02%",
    turnover: "NT$656.3B",
    note:
      "**失守 45,000 關卡，而且是量縮下跌。** 指數開高走低收 44,762.32 點，跌 461.97 點；成交金額 **6,562.81 億元**，較 8/21 的 7,549 億再縮約 13%，續創本波新低——這已是連續第三個交易日刷新低量。前一版問「量能能否回到 9,000 億」，答案是**反向再創新低**。量縮下跌代表的不是恐慌性賣壓，而是**買方直接退場**：沒有人在這個位置接手。"
  },

  chips: {
    date: "8/24 盤後（證交所官方數據）",
    institutions: [
      { name: "外資及陸資", tse: "-157.36 億", otc: "未取得", signal: "r" },
      { name: "投信", tse: "+30.55 億", otc: "未取得", signal: "g" },
      { name: "自營商", tse: "-43.33 億", otc: "未取得", signal: "r" },
      { name: "　自行買賣", tse: "-0.15 億", otc: "—", signal: "y" },
      { name: "　避險", tse: "-43.18 億", otc: "—", signal: "r" },
      { name: "三大法人合計", tse: "-170.14 億", otc: "未取得", signal: "r" }
    ],
    note:
      "🔴 **明確更正前一版的判斷。** v3.9 的一眼結論寫「法人買超但市場未跟」，把法人買超當成支撐。**一個交易日就被推翻**：外資自 8/21 的買超 283.05 億直接翻為賣超 **157.36 億**，單日反轉超過 440 億元；三大法人合計由 +331.06 億轉為 **-170.14 億**（分項加總與官方合計完全相等，誤差 0）。唯一還站在買方的是投信，買超 30.55 億——但它的規模撐不住外資的賣壓。**「法人買超」這條支撐線已經斷了**，前一版把它列為僅存的多方理由，這個理由現在沒有了。",
    margin: {
      title: "融資融券（信用交易）",
      rows: [
        { name: "集中市場融資餘額", value: "5,452.59 億", signal: "g" },
        { name: "融資單日增減", value: "-16.80 億", signal: "g" },
        { name: "融資交易單位", value: "8,856,848 張（+10,901）", signal: "y" },
        { name: "融券餘額", value: "201,513 張", signal: "r" },
        { name: "融券單日增減", value: "+1,515 張", signal: "r" }
      ],
      warning:
        "融資餘額續降至 5,452.59 億元（單日減 16.80 億，自 8/17 的 5,501.02 億連續第四個交易日下滑），融券再增 1,515 張至 201,513 張——散戶維持降槓桿並加空的方向，這一點與 8/21 一致。**但這次多看一個欄位就發現矛盾**：融資**金額**減少 16.80 億，融資**張數**卻**增加 10,901 張**。金額降、張數升，代表融資部位的平均單價在下滑——**資金正從高價股往低價股移動**。這通常出現在主流股（此刻就是半導體）失去領導地位、資金轉進投機性小型股的階段，與費半 -2.70%、櫃買成交同步萎縮的畫面是吻合的。這不是健康的換手。"
    }
  },

  futures: {
    spot: "44,762.32",
    future: "44,762（202609）",
    basis: "-0.32 點（幾乎收斂至零）",
    month: "台指期 202609（8/24）",
    note:
      "⚠️ **逆價差幾乎消失了，但這不是好消息——要看它是怎麼消失的。** 基差自 8/21 的 -76.29 點收斂到 **-0.32 點**，表面上像是期貨轉強。實際相反：**現貨跌了 461.97 點，期貨只跌約 386 點（45,148 → 44,762）**。逆價差不是因為期貨追上來而消失，是因為**現貨自己跌下去追上了期貨**。換句話說，v3.5 起連續四版標記的基差訊號，在 8/24 以「現貨補跌」的方式兌現了——當時貼水的期貨是對的。成交量 43,046 口（較 8/21 的 51,446 口縮 16%）、未平倉 102,558 口（+216 口，幾乎持平）。**未平倉沒動而成交量萎縮，代表沒有新的方向性資金進場**，多空都在等明天的財報。"
  },

  calendar: {
    tier1: [
      { date: "8/26", event: "🔥 NVIDIA 財報（台灣 8/27 05:00）", hot: true },
      { date: "8/27-29", event: "🇺🇸 Jackson Hole 年會" },
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
    { n: "①", name: "半導體單獨破線", signal: "r", desc: "SOX 五個交易日 -9.5%、NVIDIA 連 7 黑，而同期沒有任何需求轉弱的消息——股價與基本面正在脫節。" },
    { n: "②", name: "外資翻空", signal: "r", desc: "單日由買超 283 億轉為賣超 157 億，前一版僅存的多方理由「法人買超」已消失。" },
    { n: "③", name: "台股買方退場", signal: "r", desc: "6,562 億連三日刷新低量，量縮下跌代表沒有人接手，而非恐慌賣壓。" },
    { n: "④", name: "8/28 Warsh 首演說", signal: "r", desc: "距 9/16 FOMC 僅 19 天，新主席公開立場為收緊通膨紀律，風險偏鷹。" },
    { n: "⑤", name: "資金流向避險", signal: "y", desc: "黃金連兩日各漲逾 2.2%、VIX +4.76%、長債獲買盤——三者是同一個避險動作。" }
  ],

  scores: {
    items: [
      { name: "AI 基本面", score: 7, signal: "y", note: "需求驗證仍在，但股價已明顯脫離基本面，落差本身就是風險。" },
      { name: "美股趨勢", score: 5.5, signal: "y", note: "指數層面沒崩（S&P -0.28%），但內部結構裂開：Dow +0.26% vs SOX -2.70%。" },
      { name: "Fed", score: 6, signal: "y", note: "殖利率全線回落是緩解，但 Warsh 8/28 首演說尚未過關，不宣告解除。" },
      { name: "日圓", score: 5, signal: "y", note: "158.90 未破 160，且終於取得實際數據；上調不是因為轉強，是不再靠猜。" },
      { name: "台股 AI", score: 4.5, signal: "r", note: "失守 45,000、外資翻空 157 億、量能連三日新低，三個負面同時到齊。" }
    ],
    overall: { name: "整體", score: 5.6, signal: "y" },
    summary: [
      "今天最重要的一句話：**壓力沒有解除，只是換了地方。** 前一版排第一、第三的兩個風險（30Y 殖利率、油價）雙雙緩解，但錢沒有回到 AI——道瓊漲、Nasdaq 跌、費半重挫、黃金大漲，這是防禦輪動的標準隊形。",
      "殖利率回落 🟢 ＋ 油價重挫 🟢 ＋ 日圓守住 🟢 ＋ SOX 破線 🔴 ＋ NVIDIA 連 7 黑 🔴 ＋ 外資翻空 🔴 ＋ 量能新低 🔴",
      "整體評分 6.2 → **5.6**，是本站開始追蹤以來最低（8/14 曾為 8.2）。兩個判斷被市場推翻並已更正：**「法人買超」的支撐一天就斷了**，**「制裁推升油價」的因果方向是錯的**。而補上 SOX 數據後才看見半導體已破線五個交易日——**資料缺口本身就是判讀風險**。所有線仍指向同一個時間點：**明天盤後的 NVIDIA**。"
    ]
  },

  watchlist: [
    "NVIDIA 財報與 Guidance（台灣 8/27 05:00）",
    "連 7 黑會不會變成連 8 黑",
    "SOX 能否守住 11,400",
    "外資是否連續賣超",
    "台股量能能否止跌（6,562 億）",
    "基差是否再度擴大逆價差",
    "融資「金額降、張數升」是否延續",
    "黃金是否續創新高（避險資金指標）",
    "8/28 Warsh 首演說（台灣 22:00）"
  ],

  sources: [
    { label: "Stock market news for Aug. 24, 2026 — CNBC", url: "https://www.cnbc.com/2026/08/23/stock-market-today-live-updates.html" },
    { label: "Stock Market Today, Aug. 24: Nvidia Extends Losses as Tech Stocks Retreat — The Motley Fool", url: "https://www.fool.com/coverage/stock-market-today/2026/08/24/stock-market-today-aug-24-nvidia-extends-losses-as-tech-stocks-retreat/" },
    { label: "Stock Market Today (Aug. 24, 2026)：Iran sanctions、US-Canada tariff — TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-aug-24-2026" },
    { label: "Oil price today: WTI, Brent, U.S. sanctions, Iran（8/24）— CNBC", url: "https://www.cnbc.com/2026/08/24/oil-price-today-wti-brent-us-sanctions-iran.html" },
    { label: "Brent Oil Price Tops $93 as U.S.-Iran Impasse Persists — OilPrice.com", url: "https://oilprice.com/Latest-Energy-News/World-News/Brent-Oil-Price-Tops-93-as-US-Iran-Impasse-Persists.html" },
    { label: "Gold prices today, Monday, August 24, 2026 — Yahoo Finance", url: "https://finance.yahoo.com/personal-finance/investing/article/gold-prices-today-monday-august-24-2026-gold-to-stay-hot-through-the-end-of-the-month-123911561.html" },
    { label: "台股痛失季線 外資轉賣超 157 億元（8/24）— 鉅亨網", url: "https://news.cnyes.com/news/id/6585486" },
    { label: "NVIDIA Q2 FY27 財報預覽：日期、預期與風險 — Intellectia", url: "https://intellectia.ai/blog/nvidia-q2-fy27-earnings-preview-august-2026" },
    { label: "Jackson Hole 2026：8/27-29 議程與 Warsh 首演說 — Regards of Wallstreet", url: "https://www.regardsofwallstreet.com/news/jackson-hole-2026-dates-schedule-warsh-first-speech" },
    { label: "Warsh Jackson Hole 演說：債市關注、殖利率 5.2% — Gate News", url: "https://www.gate.com/news/detail/kevin-warshs-jackson-hole-speech-draws-bond-market-focus-as-treasury-yields-23670090" },
    { label: "Kevin Warsh 宣誓就任主席（官方新聞稿）— Federal Reserve", url: "https://www.federalreserve.gov/newsevents/pressreleases/other20260522a.htm" },
    { label: "Minutes of the FOMC, July 28–29, 2026 — Federal Reserve", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260819a.htm" },
    { label: "USD/JPY (JPY=X) Live Rate & Chart — Yahoo Finance", url: "https://finance.yahoo.com/quote/JPY=X/" },
    { label: "三大法人買賣金額統計 BFI82U — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/foreign/bfi82u.html" },
    { label: "每日市場成交資訊 FMTQIK — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/indices/taiex/mi-5min-hist.html" },
    { label: "融資融券餘額 MI_MARGN — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/margin/mi-margn.html" },
    { label: "期貨每日交易行情（台指期與基差）— 臺灣期貨交易所", url: "https://www.taifex.com.tw/cht/3/futDailyMarketReport" }
  ]
};
