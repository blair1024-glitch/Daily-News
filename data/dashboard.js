/**
 * Blair Market Dashboard — 每日資料檔
 * ------------------------------------------------------------------
 * 訊號代碼：'g' = 🟢 偏多 / 安全   'y' = 🟡 中性 / 觀察   'r' = 🔴 風險 / 警戒
 * 台股數字來自 data/market-auto.js、國際行情來自 data/market-global.js
 *（皆由 GitHub Actions 自動抓取），詳見 README。
 */
window.DASHBOARD = {
  meta: {
    version: "v4.1",
    date: "2026/08/26",
    time: "07:55",
    timezone: "台灣時間",
    countdown: {
      label: "🔥 NVIDIA 財報",
      note: "今晚美西 14:00 法說（台灣時間 8/27 清晨 05:00）",
      target: "2026-08-27T05:00:00+08:00"
    }
  },

  verdict: [
    { label: "台指期基差", state: "-142 點，本波最大逆價差", signal: "r" },
    { label: "台股", state: "V 轉 959 點，收復季線與 45,000", signal: "g" },
    { label: "油價", state: "Brent 兩日 -9.0%，和解路徑", signal: "g" },
    { label: "殖利率", state: "連兩日全線下滑", signal: "g" },
    { label: "籌碼", state: "法人賣、散戶大舉加槓桿", signal: "r" },
    { label: "NVIDIA", state: "連 7 黑中止，今晚財報", signal: "y" }
  ],

  global: {
    rows: [
      { name: "🇺🇸 S&P 500", value: "7,677.28（+24.42｜+0.32%）", signal: "g" },
      { name: "🇺🇸 Nasdaq", value: "26,151.30（+171.11｜+0.66%）", signal: "g" },
      { name: "🇺🇸 Dow", value: "53,577.40（+160.24｜+0.30%）", signal: "g" },
      { name: "🔥 費城半導體 SOX", value: "11,588.04（+164.87｜+1.44%）", signal: "y" },
      { name: "VIX", value: "15.45（-0.40｜-2.52%）", signal: "g" },
      { name: "🇺🇸 30Y 公債", value: "5.174%（-0.057）", signal: "g" },
      { name: "🇺🇸 10Y 公債", value: "4.639%（-0.065）", signal: "g" },
      { name: "🇺🇸 5Y 公債", value: "4.351%（-0.057）", signal: "g" },
      { name: "DXY 美元指數", value: "98.90（-0.10%）", signal: "g" },
      { name: "🛢️ WTI 原油", value: "80.97（-4.04｜-4.75%）", signal: "g" },
      { name: "🛢️ Brent 原油", value: "85.86（-6.31｜-6.85%）", signal: "g" },
      { name: "🥇 Gold 黃金", value: "4,724.70（+83.90｜+1.81%）", signal: "r" },
      { name: "🇯🇵 USD/JPY", value: "159.14（+0.235，逼近 160）", signal: "r" },
      { name: "🇨🇳 USD/CNY", value: "6.7219（+0.01%）", signal: "g" },
      { name: "🇹🇼 USD/TWD", value: "31.812（-0.03%）", signal: "g" },
      { name: "🇹🇼 TAIEX", value: "45,169.46（+407.14｜+0.91%）", signal: "g" },
      { name: "🇹🇼 櫃買 OTC", value: "成交 1,727.63 億（點位未取得）", signal: "y" }
    ],
    notes: [
      "🟢 **國際面幾乎全面轉好，而且是同一條因果鏈。** 油價崩跌 → 通膨預期降溫 → 債市壓力緩解 → 股市得到支撐。Brent 單日重挫 **6.85%** 至 85.86、WTI **-4.75%** 至 80.97；殖利率連兩個交易日全線下滑（10Y 4.639%、30Y 5.174%、5Y 4.351%）；三大指數齊漲，S&P 500 逼近本月稍早創下的歷史高點。**前幾版我把油價與殖利率當成兩條風險線分開追，實際上它們是串在一起的**——這一版把它們寫成一條。",
      "✅ **油價的更正方向確認了。** 上一版更正「制裁 → 油價上行」的因果寫錯，指出制裁打的是買方而非伊朗產能。8/25 進一步證實：油價再跌是因為**市場在交易和解路徑**——巴基斯坦陸軍參謀長赴德黑蘭斡旋、傳遞可能的制裁豁免方案，且美方措施比市場預期溫和，荷莫茲海峽重啟的預期升溫。Brent 兩個交易日自 94.39 跌到 85.86，**累計 -9.0%**。",
      "🔴 **唯一不合群的訊號是黃金。** 油價崩、殖利率降、VIX 回落至 15.45、股市上漲——這組合理論上該讓黃金回落，但它**連續第三個交易日上漲**（+1.81% 至 4,724.70），三日累計漲逾 6%。避險需求並沒有跟著風險指標一起解除。中東實體風險仍在（阿曼外海油輪遭擊中失去動力、青年運動稱對紅海沙國超級油輪開火），這可能是黃金與油價背離的原因：**市場在賣「供給中斷」的溢價，同時繼續買「地緣衝突」的保險**。",
      "🔥 **NVIDIA 連 7 黑中止**，8/25 小幅收高，晶片股在財報前普遍反彈（SOX +1.44%）。財報就在**今晚**（台灣 8/27 清晨 05:00）。",
      "🔴 **USD/JPY 159.14，逼近 160。** 這是本版唯一惡化的國際指標。殖利率下滑理應減輕日圓壓力，但日圓仍走弱 0.235，代表壓力來源不只利差。"
    ]
  },

  fed: {
    headline: "殖利率連兩日下滑，但真正的考驗在後天",
    stats: [
      { label: "現任主席", value: "Kevin Warsh（5/22 就任）", signal: "r" },
      { label: "30Y 殖利率", value: "5.174%（連兩日降）", signal: "g" },
      { label: "10Y 殖利率", value: "4.639%（-0.065）", signal: "g" },
      { label: "首場演說", value: "8/28 美東 10:00", signal: "r" },
      { label: "下次 FOMC", value: "9/15-16（演說後 19 天）", signal: "y" }
    ],
    shift: {
      before: "🔴 「30Y 衝上 19 年新高 5.34%，是第一順位風險」（v3.8）",
      after: "🟢 「兩個交易日退到 5.174%，且推力來自油價而非 Fed」"
    },
    probability: {
      label: "Warsh 首場主席演說",
      from: "8/28 美東 10:00",
      to: "台灣時間 8/28 22:00"
    },
    footnote:
      "**要看清楚殖利率為什麼降。** 這兩天的下滑不是 Fed 給了什麼訊號，而是**油價崩跌壓低了通膨預期**——因果的起點在中東，不在華盛頓。這種緩解是好事，但它可以同樣快地反轉：只要和解路徑生變、油價彈回，殖利率壓力就會回來。真正會改變利率路徑的仍是 **8/28 Warsh 首場主席演說**（台灣時間 8/28 晚間 10 點），距 9/16 FOMC 僅 19 天。他上任以來公開主張收緊通膨紀律與政策體制轉變，而 7 月紀要的三張升息反對票在這個脈絡下是方向而非雜音。**油價幫 Fed 爭取了時間，但沒有改變 Fed 的方向。**"
  },

  cpi: {
    title: "今晚 NVIDIA，後天 Warsh",
    releaseUS: "🔥 今晚 NVIDIA（台灣 8/27 05:00）",
    releaseTW: "🎙️ 8/28 Warsh 首場主席演說",
    expectations: [
      { name: "今晚 NVIDIA", value: "Q2 FY2027（台灣 8/27 05:00）" },
      { name: "市場預期", value: "營收 918.5 億美元、EPS 2.08" },
      { name: "公司財測", value: "營收 910 億美元 ±2%" },
      { name: "進場姿態", value: "連 7 黑後止跌，SOX **+1.44%** 反彈" },
      { name: "8/28 Warsh", value: "**首場**主席演說（台灣 22:00）" }
    ],
    fear:
      "**賠率結構在一天之內變了。** 上一版寫「它是帶著連 7 黑走進財報的，中性即利空」——8/25 連黑中止、晶片股回補，市場改成**帶著反彈進場**。這反而讓門檻變高了：預期已押在財測上緣（分析師營收 918.5 億 vs 公司財測 910 億 ±2%），而恐慌折價又剛被消化掉一部分。**現在需要的不只是達標，是明顯超標加上足夠強的 Guidance。** 而且財報之後只隔一天就是 Warsh 首度以主席身分站上 Jackson Hole 講台——歷史上這個講台就是政策轉向的訊號場（2022 年 Powell 的「痛苦」演說當天 S&P 500 跌約 3.4%）。",
    scenarios: [
      { result: "NVIDIA 超標 ＋ Warsh 溫和", fed: "壓力全解，資金回流半導體", fedSignal: "g", tech: "🟢🟢", techSignal: "g" },
      { result: "NVIDIA 超標 ＋ Warsh 偏鷹", fed: "估值受壓但基本面撐住", fedSignal: "y", tech: "🟡", techSignal: "y" },
      { result: "NVIDIA 僅達標", fed: "反彈已先反映，容易獲利了結", fedSignal: "r", tech: "🔴", techSignal: "r" },
      { result: "NVIDIA 不如預期", fed: "呼應紀要點名的 AI 風險", fedSignal: "r", tech: "🔴🔴", techSignal: "r" }
    ],
    conclusion:
      "台指期已經先表態了：指數大漲 407 點的同一天，**基差擴大到本波最大的 -142 點**。期貨市場不相信這根紅 K 撐得過今晚。"
  },

  jpy: {
    level: "USD/JPY 159.14（8/25 收盤，+0.235）",
    background:
      "🔴 **這是本版唯一惡化的國際指標，而且它惡化的方式值得注意。** 8/25 美債殖利率連續第二個交易日全線下滑（10Y 降 0.065），利差理應對日圓有利，**但日圓反而再貶 0.235 至 159.14**，距 160 關卡只剩約 0.9 元。利差解釋不了這個走勢，代表壓力另有來源。前一版把日圓評分自 4 上調至 5，理由是「不再需要憑空猜測」；本版下調回 **4**——不是因為數據又缺了，而是因為拿到的數據方向轉壞。",
    keyLevel: "160 關卡（159.14，距約 0.9 元）",
    branches: [
      {
        condition: "若突破 160",
        signal: "r",
        items: ["二次干預機率大增", "Carry Trade 平倉風險 ↑", "台股外資資金面連帶受壓"]
      },
      {
        condition: "現況：159 上緣",
        signal: "r",
        items: ["殖利率降但日圓續貶 🔴", "利差無法解釋，壓力另有來源 🔴", "距關卡不足 1 元 🔴"]
      }
    ],
    conclusion:
      "殖利率下滑卻換不到日圓走穩，這件事本身就是訊號。160 若在 NVIDIA 財報與 Warsh 演說這兩天被突破，會是最不想看到的時間點。"
  },

  csp: {
    rows: [
      { company: "NVIDIA", result: "**今晚財報**｜連 7 黑中止", ai: "⭐⭐⭐⭐⭐" },
      { company: "費城半導體 SOX", result: "11,588.04（+1.44%），守住 11,400", ai: "🟡" },
      { company: "台積電", result: "8/25 +25 元至 2,400，尾盤領軍 V 轉", ai: "🟢🟢" },
      { company: "CoreWeave", result: "Q2 營收 +112%", ai: "🟢🟢🟢" },
      { company: "Nebius", result: "財報後單日 +34%", ai: "🟢🟢🟢" },
      { company: "Microsoft / Amazon", result: "Azure、AWS 強，CapEx 提高", ai: "🟢🟢🟢" }
    ],
    capex: {
      title: "四大 CSP AI CapEx 合計",
      from: "2025 年約 4,100 億美元",
      to: "2026 年預計約 7,250 億美元"
    },
    takeaway: {
      not: "基本面仍然沒有壞：CapEx 與 neocloud 營收兩層驗證都還在",
      but: "上一版標記的「基本面與股價落差擴大」，在 8/25 出現了收斂的第一步——SOX 反彈 1.44%、NVIDIA 止跌、台積電漲 25 元領軍",
      conclusion:
        "**但這只是財報前的回補，不是答案。** 上一版提出兩種解釋：一是市場提前降風險（過關後補漲），二是市場看到了財報數字以外的東西。**一天的反彈分辨不出是哪一種**——真正的分辨點是今晚。而台指期用擴大到 -142 點的逆價差表達了它的看法。"
    }
  },

  nvidia: {
    event: "🔥 今晚 NVIDIA 財報",
    subtitle: "Q2 FY2027｜美西 14:00 法說，台灣時間 8/27 清晨 05:00｜預期營收 918.5 億、EPS 2.08",
    watch: [
      "Data Center Revenue",
      "Blackwell 出貨與 GB300",
      "CSP 與 neocloud 訂單能見度",
      "毛利率",
      "下一季 Guidance（對比 910 億 ±2% 財測）",
      "CapEx 的融資結構",
      "法說會對 AI 需求週期的措辭"
    ],
    note:
      "🔥 **今晚就是答案。** 上一版寫「它是帶著連 7 黑走進財報的」——8/25 連黑中止、小幅收高，2026 年以來仍漲逾 13%。**進場姿態從恐慌變成回補，門檻因此變高**：分析師預期營收 918.5 億美元、EPS 2.08，公司自己的財測是 910 億 ±2%，預期已押在財測上緣，而部分恐慌折價又被昨天的反彈吃掉了。**僅僅達標可能不夠。** Fed 在 7 月紀要裡把「AI 樂觀情緒降溫」列為總體下行風險，等於把這場財報從產業事件升格為總經事件；而它的答案揭曉後只隔一天，就是 Warsh 的首場主席演說。"
  },

  taiex: {
    date: "8/25 收盤",
    close: "45,169.46",
    change: "+407.14",
    changePct: "+0.91%",
    turnover: "NT$724.3B",
    note:
      "**一根 V 轉紅 K：盤中一度跌逾 500 點，終場漲 407 點，高低差 959 點。** 台積電尾盤拉升領軍（+25 元至 2,400 元、+1.05%），指數同時收復**季線約 44,877 點與 45,000 點大關**，回答了上一版「量能能否止跌」的問題——成交金額自 6,562.81 億回升至 **7,242.58 億（+10.4%）**。**但別把回升讀成回溫**：這個量仍是 8 月的次低，僅高於前一天的最低量。權值股內部也不同步——台積電漲，台達電 -1.44%、聯發科 -0.8%。這是一根靠單一權值股拉出來的紅 K。"
  },

  chips: {
    date: "8/25 盤後（證交所官方數據）",
    institutions: [
      { name: "外資及陸資", tse: "-7.87 億", otc: "未取得", signal: "y" },
      { name: "投信", tse: "-39.84 億", otc: "未取得", signal: "r" },
      { name: "自營商", tse: "+0.60 億", otc: "未取得", signal: "y" },
      { name: "　自行買賣", tse: "+9.97 億", otc: "—", signal: "g" },
      { name: "　避險", tse: "-9.37 億", otc: "—", signal: "y" },
      { name: "三大法人合計", tse: "-47.11 億", otc: "未取得", signal: "r" }
    ],
    note:
      "**指數漲了 407 點，法人整體還是賣方。** 外資賣壓大幅收斂（-157.36 → **-7.87 億**，幾乎打平），但**投信由買 30.55 億翻為賣 39.84 億**——這是三個交易日內第二次轉向（8/24 才剛由賣轉買）。三大法人合計仍賣超 **47.11 億**（分項加總與官方合計完全相等，誤差 0）。**上一版寫「法人買超這條支撐線已經斷了」，8/25 沒有把它接回來**：賣壓變小不等於買盤回來。這根紅 K 的買方不是法人。",
    margin: {
      title: "融資融券（信用交易）",
      rows: [
        { name: "集中市場融資餘額", value: "5,469.38 億", signal: "r" },
        { name: "融資單日增減", value: "+16.78 億", signal: "r" },
        { name: "融資交易單位", value: "8,900,808 張（+43,964）", signal: "r" },
        { name: "融券餘額", value: "200,504 張", signal: "y" },
        { name: "融券單日增減", value: "-1,009 張", signal: "y" }
      ],
      warning:
        "🔴 **這根紅 K 的買方是散戶，而且是用槓桿買的。** 融資餘額自 5,452.59 億反轉增加 **16.78 億**至 5,469.38 億，終結連續四個交易日的下滑；融資張數單日暴增 **43,964 張**（前一日僅增 10,901 張，是其四倍），同時融券回補 1,009 張。**加槓桿做多、同時回補空單**，方向非常一致。把三件事疊起來看：法人賣 47.11 億、散戶融資暴增 4.4 萬張、台指期基差擴大到本波最大的 -142.46 點——這正是 v3.6 記錄過的「法人倒貨、散戶接刀」結構再現，而且發生在 **NVIDIA 財報前一天**。上一版標記的「融資金額降、張數升」觀察本版反轉：現在是**金額與張數同步大增**，散戶不只換股，是實質加碼。"
    }
  },

  futures: {
    spot: "45,169.46",
    future: "45,027（202609）",
    basis: "-142.46 點逆價差（本波最大）",
    month: "台指期 202609（8/25）",
    note:
      "🔴 **本版最重要的一個數字。** 基差自 8/24 的 -0.32 點暴走至 **-142.46 點**，是這一波以來最大的逆價差，超過 8/21 那次的 -76.29 點。算式很直白：**現貨漲 407.14 點，期貨只漲 265 點**（皆以收盤價計；期交所官方漲跌欄顯示 +287，那是對前一日**結算價**，口徑不同不可混用）——兩者差距 142.14 點，正好等於基差自 -0.32 變動到 -142.46 的幅度。指數愈往上，期貨愈不跟。路徑完整攤開是：8/12 +179 → 8/14 +29.99 → 8/17 +30.73 → 8/21 **-76.29** → 8/24 -0.32 → 8/25 **-142.46**。上一版問「基差是否再度擴大逆價差」，答案是**擴大到本波最大**。成交量回升至 55,218 口（前日 43,046 口）、未平倉 102,718 口（+160 口，幾乎不動）——**成交放大而未平倉不動，代表是當沖與換手，不是新的方向性布局**。期貨市場用最大的貼水說：不相信這根紅 K 撐得過今晚的財報。"
  },

  calendar: {
    tier1: [
      { date: "8/26", event: "🔥 NVIDIA 財報（今晚，台灣 8/27 05:00）", hot: true },
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
    { n: "①", name: "基差 -142 本波最大", signal: "r", desc: "現貨漲 407 點、期貨只漲 265 點（同為收盤價口徑），指數愈漲期貨愈不跟，且發生在財報前一天。" },
    { n: "②", name: "法人倒貨散戶接刀", signal: "r", desc: "法人賣 47.11 億（投信三日內二度轉向），散戶融資單日暴增 43,964 張並回補空單。" },
    { n: "③", name: "今晚 NVIDIA 賠率變差", signal: "r", desc: "連黑中止、恐慌折價被吃掉一部分，預期已押在財測上緣，僅達標可能不夠。" },
    { n: "④", name: "USD/JPY 逼近 160", signal: "r", desc: "殖利率下滑卻換不到日圓走穩，利差解釋不了，距關卡不足 1 元。" },
    { n: "⑤", name: "黃金與油價背離", signal: "y", desc: "風險指標全面回落，黃金卻連三日漲逾 6%——避險需求並未跟著解除。" }
  ],

  scores: {
    items: [
      { name: "AI 基本面", score: 7, signal: "y", note: "SOX 反彈、NVIDIA 止跌，但那是財報前回補；答案今晚才揭曉，不預先加分。" },
      { name: "美股趨勢", score: 6.5, signal: "y", note: "油價崩、殖利率降、三大指數齊漲，S&P 逼近歷史高點。" },
      { name: "Fed", score: 6.5, signal: "y", note: "殖利率連兩日下滑，但推力來自油價而非 Fed；Warsh 8/28 尚未過關。" },
      { name: "日圓", score: 4, signal: "r", note: "159.14 逼近 160，殖利率降卻仍貶值，利差解釋不了——下調。" },
      { name: "台股 AI", score: 4.5, signal: "r", note: "收復季線與 45,000，但基差 -142 本波最大、法人續賣、量能仍是 8 月次低。" }
    ],
    overall: { name: "整體", score: 5.7, signal: "y" },
    summary: [
      "今天的一句話：**外面的風險在解除，裡面的結構在惡化。** 國際面幾乎全好——油價兩日崩 9%、殖利率連兩日全線降、三大指數齊漲、SOX 反彈、NVIDIA 連黑中止；但台股內部同時出現三個負面訊號疊在一起：**法人賣 47 億、散戶融資暴增 4.4 萬張、基差擴大到本波最大的 -142 點**。",
      "油價崩 🟢 ＋ 殖利率降 🟢 ＋ SOX 反彈 🟢 ＋ 量能回升 🟢 ＋ 基差 -142 🔴 ＋ 法人續賣 🔴 ＋ 散戶加槓桿 🔴 ＋ 日圓逼近 160 🔴",
      "整體評分 5.6 → **5.7**，幾乎沒動——這不是因為沒事發生，而是**正負兩邊都很大而互相抵銷**。上一版的更正得到確認（油價因果鏈方向），上一版的觀察被反轉（融資「金額降張數升」變成兩者同步暴增）。所有線仍指向同一個時間點，而它終於到了：**今晚**。"
    ]
  },

  watchlist: [
    "NVIDIA 財報與 Guidance（今晚，台灣 8/27 05:00）",
    "基差 -142 是否在財報後收斂",
    "散戶融資暴增後是否出現追高套牢",
    "投信會不會第三度轉向",
    "USD/JPY 是否突破 160",
    "台股量能能否真正站回 8,000 億",
    "黃金連三漲後是否回落（避險是否真的解除）",
    "油價和解路徑是否生變",
    "8/28 Warsh 首演說（台灣 22:00）"
  ],

  sources: [
    { label: "Stock Market News for Aug 25, 2026 — Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-aug-25-132700491.html" },
    { label: "Stock Market Today (Aug. 25, 2026)：Nasdaq jumps — TheStreet", url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-aug-25-2026" },
    { label: "How major US stock indexes fared Tuesday 8/25/2026 — The Washington Post", url: "https://www.washingtonpost.com/business/2026/08/25/wall-street-stocks-dow-nasdaq/6dcac1e0-a0c3-11f1-8606-1d40ad00172e_story.html" },
    { label: "S&P 500 closes higher as Treasury yields retreat — CNBC", url: "https://www.cnbc.com/2026/08/24/stock-market-today-live-updates.html" },
    { label: "Brent crude oil：價格與歷史數據 — Trading Economics", url: "https://tradingeconomics.com/commodity/brent-crude-oil" },
    { label: "Crude Oil：價格與歷史數據 — Trading Economics", url: "https://tradingeconomics.com/commodity/crude-oil" },
    { label: "Oil price today: WTI, Brent, U.S. sanctions, Iran — CNBC", url: "https://www.cnbc.com/2026/08/24/oil-price-today-wti-brent-us-sanctions-iran.html" },
    { label: "〈台股盤後〉震盪近千點 台積電尾盤拉升收漲 407 點 收復季線（8/25）— 鉅亨網", url: "https://news.cnyes.com/news/id/6586199" },
    { label: "台積電領軍回神！台股 V 轉近千點站回季線 成交量寫 8 月次低 — 民眾日報", url: "https://www.peoplenews.tw/articles/economic-news/51680" },
    { label: "台股開低走高！收漲 407 點收復 4 萬 5 台積電漲 25 元報 2400 — 壹蘋新聞網", url: "https://news.nextapple.com/finance/20260825/33046B5E15BB44FECA1F0EF756CD3EAB" },
    { label: "NVIDIA Q2 FY27 財報預覽：日期、預期與風險 — Intellectia", url: "https://intellectia.ai/blog/nvidia-q2-fy27-earnings-preview-august-2026" },
    { label: "Jackson Hole 2026：8/27-29 議程與 Warsh 首演說 — Regards of Wallstreet", url: "https://www.regardsofwallstreet.com/news/jackson-hole-2026-dates-schedule-warsh-first-speech" },
    { label: "Minutes of the FOMC, July 28–29, 2026 — Federal Reserve", url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260819a.htm" },
    { label: "USD/JPY (JPY=X) Live Rate & Chart — Yahoo Finance", url: "https://finance.yahoo.com/quote/JPY=X/" },
    { label: "三大法人買賣金額統計 BFI82U — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/foreign/bfi82u.html" },
    { label: "每日市場成交資訊 FMTQIK — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/indices/taiex/mi-5min-hist.html" },
    { label: "融資融券餘額 MI_MARGN — 臺灣證券交易所", url: "https://www.twse.com.tw/zh/trading/margin/mi-margn.html" },
    { label: "期貨每日交易行情（台指期與基差）— 臺灣期貨交易所", url: "https://www.taifex.com.tw/cht/3/futDailyMarketReport" }
  ]
};
