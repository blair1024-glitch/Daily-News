/* 晶彩科 (3535) 個股資料
   ------------------------------------------------------------------
   刻意存成 .js 而非 .json：直接用 file:// 開啟頁面時不會踩到 CORS。
   單位約定：
     · 營收 value = 新台幣「百萬元」
     · 張數 lots  = 1 張 = 1000 股
     · 比率 yoy / mom / rate = 百分比數字（5 代表 +5%）
   更新方式：改這個檔案就好，stock/3535.html 與 assets/stock.js 都不用動。
   ------------------------------------------------------------------ */
window.STOCK_3535 = {

  meta: {
    name: "晶彩科",
    code: "3535",
    market: "上櫃",
    industry: "光電",
    asOf: "2026-08-07",     // 報價日
    updated: "2026-08-11",  // 本檔最後整理日
    version: "v1.0"
  },

  quote: {
    price: 85.2,
    change: -2.10,
    changePct: -2.41,
    open: 87.3,
    high: 88.1,
    low: 84.4,
    week52High: 151.0,
    week52Low: 54.4,
    marketCap: "67.35 億",
    sharesLots: 79050      // 約 7,905 萬股 ≒ 79,050 張（由市值 ÷ 股價推得）
  },

  valuation: {
    pe: 211.2,             // 2026-08-07
    peHigh: 291.25,        // 2026-07-03，凸顯估值波動
    pb: 6.05,
    bookValue: 14.09,
    epsQ1_2026: 0.99,      // 季增 48%、年增 306%
    eps2025: -1.07         // 2025 全年仍虧損
  },

  // 2026 逐月合併營收（百萬元）。mom 由本檔數字直接算得，yoy 取自公開資料。
  revenue: [
    { month: "1月", value: 151.0, yoy: 9447,  note: "旺季認列高峰" },
    { month: "2月", value: 131.0, yoy: 4800,  note: "年增率為約數" },
    { month: "3月", value: 42.3,  yoy: -9.3,  note: "出貨空窗" },
    { month: "4月", value: 19.8,  yoy: null,  note: "全年最低" },
    { month: "5月", value: 111.0, yoy: 2229,  note: "設備認列回補" },
    { month: "6月", value: 73.0,  yoy: 161,   note: "" },
    { month: "7月", value: 52.3,  yoy: 1058,  note: "連 2 月走低" }
  ],

  // 情境目標價。price 皆有可驗證的推導依據，不是憑感覺抓的。
  targets: [
    { label: "保守", price: 70.0,  basis: "跌回前波整理區上緣", sig: "r" },
    { label: "中性", price: 91.3,  basis: "0.382 回檔壓力",     sig: "y" },
    { label: "樂觀", price: 114.1, basis: "0.618 回檔壓力",     sig: "g" },
    { label: "極樂觀", price: 151.0, basis: "回測 52 週高點",   sig: "g" }
  ],

  // 關鍵價位。type: "s" = 支撐, "r" = 壓力
  levels: [
    { price: 151.0, type: "r", label: "52 週高", note: "去年高點套牢區，解套賣壓最重" },
    { price: 114.1, type: "r", label: "0.618",   note: "強壓力，站上才算趨勢翻多" },
    { price: 102.7, type: "r", label: "0.500",   note: "半分位，多空分水嶺" },
    { price: 91.3,  type: "r", label: "0.382",   note: "第一道壓力，現價就卡在其下" },
    { price: 70.0,  type: "s", label: "整理區",  note: "前波整理區上緣，跌破轉弱" },
    { price: 54.4,  type: "s", label: "52 週低", note: "年度低點，最後防線" }
  ],

  // 「需要多久」用的月漲幅假設
  scenarios: [
    { rate: 8,  label: "強勢回升", sig: "g" },
    { rate: 5,  label: "穩健回升", sig: "g" },
    { rate: 3,  label: "緩步墊高", sig: "y" },
    { rate: -2, label: "持續走弱", sig: "r" }
  ],

  // 合理價矩陣：EPS 情境 × 本益比情境（純推估，非預測）
  fairValue: {
    epsCases: [
      { label: "保守 EPS 1.5", eps: 1.5 },
      { label: "中性 EPS 2.5", eps: 2.5 },
      { label: "樂觀 EPS 3.5", eps: 3.5 }
    ],
    peCases: [25, 40, 60]
  },

  // 台股交易成本：手續費買賣各收一次，證交稅只在賣出收
  fees: {
    brokerage: 0.001425,
    tax: 0.003,
    defaultDiscount: 6     // 折數，6 = 六折
  },

  strategies: [
    {
      sig: "r", title: "🛑 停損出場",
      trigger: "跌破 70 元，且月營收連 2 個月低於 5,000 萬",
      lines: [
        "基本面與技術面同時失守，代表這波認列動能結束",
        "股本小、估值高的股票，破線後跌幅通常超出預期",
        "先出場保留本金，比抱著等一個不確定的故事划算"
      ]
    },
    {
      sig: "y", title: "⏳ 續抱等待",
      trigger: "股價守住 70～91 元箱型，月營收維持 5,000 萬以上",
      lines: [
        "現價卡在 0.382（91.3）之下，屬於「還沒轉強、也還沒轉壞」",
        "關鍵觀察：能否放量站上 91.3，那是第一個轉強訊號",
        "此區間內加碼的期望值不高，等訊號比猜底部好"
      ]
    },
    {
      sig: "g", title: "➕ 分批攤平",
      trigger: "站穩 91.3 以上，且季報 EPS 維持正數並較上季成長",
      lines: [
        "攤平的前提是基本面「已經證明」，不是股價跌得夠多",
        "分 2～3 批進場，單批不超過原持股的 50%",
        "務必先看第 ④ 區算出的「新增投入金額」再決定"
      ]
    }
  ],

  risks: [
    "本益比 211～291 倍，估值已充分反映高度成長預期，任何一季不如預期都會劇烈修正",
    "2025 全年 EPS 為 −1.07 元，公司剛從虧損轉盈，獲利穩定度尚未經過完整循環驗證",
    "營收屬設備出貨認列型態，單月最高 1.51 億、最低 0.198 億，落差達 7.6 倍",
    "股本僅約 7.9 億元，成交籌碼集中，股價易受買賣盤主導而脫離基本面",
    "月營收年增率動輒數千 %，是去年基期極低所致，不代表實際成長動能"
  ],

  sources: [
    { label: "Goodinfo! 台灣股市資訊網 — 3535 股價行情", url: "https://goodinfo.tw/tw/StockDetail.asp?STOCK_ID=3535" },
    { label: "財報狗 — 3535 晶彩科", url: "https://statementdog.com/analysis/3535" },
    { label: "財報狗 — 3535 每股盈餘 (EPS)", url: "https://statementdog.com/analysis/3535/eps" },
    { label: "鉅亨網 — 晶彩科 3535 總覽", url: "https://www.cnyes.com/twstock/3535" },
    { label: "玩股網 — 3535 每月營收", url: "https://www.wantgoo.com/stock/3535/financial-statements/monthly-revenue" },
    { label: "HiStock 嗨投資 — 3535 股價走勢", url: "https://histock.tw/stock/3535" },
    { label: "Yahoo 股市 — 3535.TW", url: "https://tw.stock.yahoo.com/quote/3535.TW" }
  ]
};
