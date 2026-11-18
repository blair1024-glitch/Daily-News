/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-18T04:38:52.492Z",
  "date": "20261118",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.48,
          "shares": 8300000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.85,
          "shares": 1950000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.76,
          "shares": 2550000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.98,
          "shares": 780000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.2,
          "shares": 7200000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.09,
          "shares": 1030000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.89,
          "shares": 1200000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.61,
          "shares": 15100000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.4,
          "shares": 930000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 2.91,
          "shares": 8800000
        }
      ],
      "diff": null
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.74,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.69,
          "shares": 265000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 2251000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.76,
          "shares": 2608000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.63,
          "shares": 84000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.56,
          "shares": 153000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.8,
          "shares": 404000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 2.74,
          "shares": 96000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.62,
          "shares": 625000
        }
      ],
      "diff": null
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 17.44,
          "shares": 19303000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.33,
          "shares": 5833000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.16,
          "shares": 6965000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.38,
          "shares": 4328000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.23,
          "shares": 19739000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.61,
          "shares": 2552000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.42,
          "shares": 2657000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 3.93,
          "shares": 7093000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 17522000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.53,
          "shares": 23519000
        }
      ],
      "diff": null
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.24,
          "shares": 957000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.77,
          "shares": 1609000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 8.53,
          "shares": 7059000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 7,
          "shares": 4637000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.68,
          "shares": 4018000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.83,
          "shares": 1330000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 270000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.02,
          "shares": 301000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 338000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 1032000
        }
      ],
      "diff": null
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 3582000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.37,
          "shares": 120000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.3,
          "shares": 1112000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.81,
          "shares": 965000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 2.77,
          "shares": 35000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.62,
          "shares": 3277000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.29,
          "shares": 93000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.24,
          "shares": 349000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.24,
          "shares": 600000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.16,
          "shares": 29000
        }
      ],
      "diff": null
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.28,
          "shares": 1726000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.73,
          "shares": 211000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.4,
          "shares": 4684000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.13,
          "shares": 217000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.11,
          "shares": 526036
        },
        {
          "code": "2027",
          "name": "大成鋼",
          "exchange": "TW",
          "weightPct": 3.07,
          "shares": 16619000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 2.95,
          "shares": 423000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.85,
          "shares": 1097000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.57,
          "shares": 180000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.56,
          "shares": 595000
        }
      ],
      "diff": null
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.65,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.01,
          "shares": 52000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 6.47,
          "shares": 17000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.65,
          "shares": 27000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.6,
          "shares": 29000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.26,
          "shares": 18000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.1,
          "shares": 52000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.03,
          "shares": 116000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.73,
          "shares": 580000
        },
        {
          "code": "6510",
          "name": "精測",
          "exchange": "TW",
          "weightPct": 3.72,
          "shares": 25000
        }
      ],
      "diff": null
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.98,
          "shares": 4230000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.01,
          "shares": 1375000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.53,
          "shares": 1200000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.31,
          "shares": 1600000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 6.53,
          "shares": 13500000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.48,
          "shares": 5500000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.26,
          "shares": 515000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.28,
          "shares": 3600000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.71,
          "shares": 4700000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 4.04,
          "shares": 4200000
        }
      ],
      "diff": null
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.97,
          "shares": 1246000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 6.3,
          "shares": 1731000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.87,
          "shares": 921000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.57,
          "shares": 610000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.26,
          "shares": 1743000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.98,
          "shares": 3032000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.65,
          "shares": 1355000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.53,
          "shares": 252000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.84,
          "shares": 12620868
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.76,
          "shares": 323000
        }
      ],
      "diff": null
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.47,
          "shares": 341000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.75,
          "shares": 58000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.74,
          "shares": 421000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.6,
          "shares": 131000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.33,
          "shares": 86000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.19,
          "shares": 463000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.03,
          "shares": 523000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.96,
          "shares": 193000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.4,
          "shares": 916000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 3.39,
          "shares": 496000
        }
      ],
      "diff": null
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 19.2,
          "shares": 249000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.94,
          "shares": 58101
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.99,
          "shares": 79500
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.42,
          "shares": 239001
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.17,
          "shares": 41002
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.85,
          "shares": 19550
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.47,
          "shares": 29000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.88,
          "shares": 417000
        },
        {
          "code": "2368",
          "name": "金像電",
          "exchange": "TW",
          "weightPct": 3.33,
          "shares": 112000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.07,
          "shares": 52000
        }
      ],
      "diff": null
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.41,
          "shares": 149000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.84,
          "shares": 70000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.44,
          "shares": 72000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.77,
          "shares": 80000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.43,
          "shares": 38000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.17,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.93,
          "shares": 170000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.46,
          "shares": 17000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.29,
          "shares": 217000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.04,
          "shares": 398000
        }
      ],
      "diff": null
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 9.26,
          "shares": 5761
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 8.95,
          "shares": 15438
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 5.16,
          "shares": 18872
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 5.15,
          "shares": 8253
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.58,
          "shares": 4214
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 3.8,
          "shares": 1437
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.58,
          "shares": 1683
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 3.23,
          "shares": 18958
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.18,
          "shares": 4704
        },
        {
          "code": "GOOG",
          "name": "Alphabet - Class C Capital Stock",
          "exchange": "US",
          "weightPct": 3.06,
          "shares": 2578
        }
      ],
      "diff": null
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.72,
          "shares": 18000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 6.13,
          "shares": 3000
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.22,
          "shares": 1400
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.2,
          "shares": 2800
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.08,
          "shares": 1400
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.82,
          "shares": 3000
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.64,
          "shares": 450
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 4.32,
          "shares": 1800
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.14,
          "shares": 800
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 3.18,
          "shares": 1250
        }
      ],
      "diff": null
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 6.05,
          "shares": 100680
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.25,
          "shares": 255293
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 4.96,
          "shares": 266842
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.69,
          "shares": 64600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.54,
          "shares": 151860
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 4.29,
          "shares": 130520
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.03,
          "shares": 518000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.91,
          "shares": 66939
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.77,
          "shares": 97480
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 3.5,
          "shares": 204100
        }
      ],
      "diff": null
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261118",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.3,
          "shares": 28556
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 5.28,
          "shares": 41772
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 5.08,
          "shares": 63557
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 5.06,
          "shares": 19630
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.97,
          "shares": 27491
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.59,
          "shares": 72940
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.28,
          "shares": 58576
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.18,
          "shares": 132000
        },
        {
          "code": "SNDK",
          "name": "Sandisk",
          "exchange": "US",
          "weightPct": 2.99,
          "shares": 10322
        },
        {
          "code": "ABBV",
          "name": "AbbVie",
          "exchange": "US",
          "weightPct": 2.87,
          "shares": 27170
        }
      ],
      "diff": null
    }
  },
  "summaryTw": {
    "fundsWithDiff": 0,
    "totalActiveStocks": 0,
    "topBought": [],
    "topSold": [],
    "concentrationPct": null,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 0,
    "totalActiveStocks": 0,
    "topBought": [],
    "topSold": [],
    "concentrationPct": null,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
