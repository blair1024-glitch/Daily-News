/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-19T04:24:06.749Z",
  "date": "20261119",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.23,
          "shares": 8300000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.91,
          "shares": 1950000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.23,
          "shares": 2550000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.67,
          "shares": 780000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.29,
          "shares": 7200000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.23,
          "shares": 1030000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.74,
          "shares": 1200000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.67,
          "shares": 930000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.44,
          "shares": 15100000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 2.79,
          "shares": 8800000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": []
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.58,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.75,
          "shares": 265000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.72,
          "shares": 2608000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.69,
          "shares": 2251000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.54,
          "shares": 84000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.43,
          "shares": 153000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 2.83,
          "shares": 96000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.77,
          "shares": 404000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.67,
          "shares": 625000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.87,
          "shares": 19303000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.28,
          "shares": 5861000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.72,
          "shares": 7078000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.03,
          "shares": 4328000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.25,
          "shares": 19739000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.73,
          "shares": 2683000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.69,
          "shares": 2552000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.05,
          "shares": 7093000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.95,
          "shares": 17940000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.33,
          "shares": 23519000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 28000,
            "weightChange": -0.05
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 113000,
            "weightChange": 0.56
          },
          {
            "code": "6223",
            "name": "旺矽",
            "action": "增持",
            "sharesChange": 26000,
            "weightChange": 0.31
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "增持",
            "sharesChange": 418000,
            "weightChange": 0.16
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.35,
          "shares": 957000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.68,
          "shares": 1609000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 8.23,
          "shares": 7059000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 6.84,
          "shares": 4637000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.85,
          "shares": 4018000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.98,
          "shares": 1330000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.28,
          "shares": 301000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 2.95,
          "shares": 270000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.91,
          "shares": 338000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 2.85,
          "shares": 3005000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": [
          {
            "code": "4958",
            "name": "臻鼎-KY",
            "action": "新增",
            "sharesChange": 3005000,
            "weightChange": 2.85
          },
          {
            "code": "2360",
            "name": "致茂",
            "action": "剔除",
            "sharesChange": -1032000,
            "weightChange": -2.94
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.72,
          "shares": 3631000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.69,
          "shares": 120000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.24,
          "shares": 1128000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.85,
          "shares": 976000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 2.65,
          "shares": 35000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.52,
          "shares": 3277000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.35,
          "shares": 352000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.29,
          "shares": 93000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 2.28,
          "shares": 367000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.24,
          "shares": 607000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": [
          {
            "code": "6505",
            "name": "台塑化",
            "action": "增持",
            "sharesChange": 49000,
            "weightChange": 0.04
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 16000,
            "weightChange": -0.06
          },
          {
            "code": "2603",
            "name": "長榮",
            "action": "增持",
            "sharesChange": 11000,
            "weightChange": 0.04
          },
          {
            "code": "2395",
            "name": "研華",
            "action": "增持",
            "sharesChange": 3000,
            "weightChange": 0.11
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "新增",
            "sharesChange": 367000,
            "weightChange": 2.28
          },
          {
            "code": "2408",
            "name": "南亞科",
            "action": "增持",
            "sharesChange": 7000,
            "weightChange": 0
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "剔除",
            "sharesChange": -29000,
            "weightChange": -2.16
          }
        ]
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.11,
          "shares": 1726000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.88,
          "shares": 211000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.35,
          "shares": 4684000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.12,
          "shares": 526036
        },
        {
          "code": "2027",
          "name": "大成鋼",
          "exchange": "TW",
          "weightPct": 3.11,
          "shares": 16619000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.03,
          "shares": 217000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.92,
          "shares": 1097000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 2.86,
          "shares": 423000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.58,
          "shares": 180000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.54,
          "shares": 595000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": []
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.47,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.55,
          "shares": 52000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 6.06,
          "shares": 17000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.69,
          "shares": 27000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.38,
          "shares": 29000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.4,
          "shares": 18000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.2,
          "shares": 52000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.11,
          "shares": 116000
        },
        {
          "code": "6510",
          "name": "精測",
          "exchange": "TW",
          "weightPct": 3.9,
          "shares": 25000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 580000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": []
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.75,
          "shares": 4230000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.68,
          "shares": 1375000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.61,
          "shares": 1200000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.91,
          "shares": 1600000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.63,
          "shares": 5500000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 6.23,
          "shares": 13500000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.12,
          "shares": 515000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.08,
          "shares": 3600000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.96,
          "shares": 4700000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 4.19,
          "shares": 4200000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": []
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.82,
          "shares": 1246000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 6.75,
          "shares": 1731000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.29,
          "shares": 921000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.32,
          "shares": 610000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.05,
          "shares": 3032000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 4.98,
          "shares": 1743000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.84,
          "shares": 1355000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.23,
          "shares": 252000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.02,
          "shares": 364000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 12620868
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": [
          {
            "code": "6223",
            "name": "旺矽",
            "action": "新增",
            "sharesChange": 364000,
            "weightChange": 4.02
          },
          {
            "code": "3008",
            "name": "大立光",
            "action": "剔除",
            "sharesChange": -323000,
            "weightChange": -3.76
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 11.5,
          "shares": 376000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.51,
          "shares": 59000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 5.35,
          "shares": 253000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.49,
          "shares": 118000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.42,
          "shares": 91000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.1,
          "shares": 64000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.05,
          "shares": 436000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 3.69,
          "shares": 560000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 454000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.57,
          "shares": 58000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 35000,
            "weightChange": 1.03
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "增持",
            "sharesChange": 1000,
            "weightChange": -0.24
          },
          {
            "code": "3491",
            "name": "昇達科",
            "action": "增持",
            "sharesChange": 60000,
            "weightChange": 1.39
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "減持",
            "sharesChange": -13000,
            "weightChange": -0.11
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 5000,
            "weightChange": 0.09
          },
          {
            "code": "3653",
            "name": "健策",
            "action": "新增",
            "sharesChange": 64000,
            "weightChange": 4.1
          },
          {
            "code": "3037",
            "name": "欣興",
            "action": "減持",
            "sharesChange": -27000,
            "weightChange": -0.14
          },
          {
            "code": "3105",
            "name": "穩懋",
            "action": "增持",
            "sharesChange": 64000,
            "weightChange": 0.3
          },
          {
            "code": "3189",
            "name": "景碩",
            "action": "減持",
            "sharesChange": -69000,
            "weightChange": -0.35
          },
          {
            "code": "6223",
            "name": "旺矽",
            "action": "新增",
            "sharesChange": 58000,
            "weightChange": 3.57
          },
          {
            "code": "8046",
            "name": "南電",
            "action": "剔除",
            "sharesChange": -421000,
            "weightChange": -4.74
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "剔除",
            "sharesChange": -916000,
            "weightChange": -3.4
          }
        ]
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 18.96,
          "shares": 249000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.01,
          "shares": 58101
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.94,
          "shares": 83500
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.54,
          "shares": 239001
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.97,
          "shares": 41002
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.64,
          "shares": 29000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.56,
          "shares": 19550
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.7,
          "shares": 417000
        },
        {
          "code": "2368",
          "name": "金像電",
          "exchange": "TW",
          "weightPct": 3.44,
          "shares": 112000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.2,
          "shares": 52000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 4000,
            "weightChange": 0.95
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.27,
          "shares": 149000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.85,
          "shares": 70000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.1,
          "shares": 72000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.19,
          "shares": 80000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.75,
          "shares": 38000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.29,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.75,
          "shares": 170000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.39,
          "shares": 217000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.23,
          "shares": 17000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 2.87,
          "shares": 398000
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": []
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 9.26,
          "shares": 15438
        },
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 9.19,
          "shares": 5679
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.99,
          "shares": 8253
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 4.89,
          "shares": 18102
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.75,
          "shares": 4325
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.03,
          "shares": 1881
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.02,
          "shares": 1525
        },
        {
          "code": "GOOG",
          "name": "Alphabet - Class C Capital Stock",
          "exchange": "US",
          "weightPct": 3.2,
          "shares": 2705
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.14,
          "shares": 4704
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.06,
          "shares": 1420
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": [
          {
            "code": "TSLA",
            "name": "Tesla",
            "action": "減持",
            "sharesChange": -82,
            "weightChange": -0.07
          },
          {
            "code": "TEM",
            "name": "Tempus",
            "action": "減持",
            "sharesChange": -770,
            "weightChange": -0.27
          },
          {
            "code": "AMZN",
            "name": "Amazon",
            "action": "增持",
            "sharesChange": 111,
            "weightChange": 0.17
          },
          {
            "code": "AMD",
            "name": "AMD",
            "action": "增持",
            "sharesChange": 198,
            "weightChange": 0.45
          },
          {
            "code": "META",
            "name": "Meta",
            "action": "增持",
            "sharesChange": 88,
            "weightChange": 0.22
          },
          {
            "code": "GOOG",
            "name": "Alphabet - Class C Capital Stock",
            "action": "增持",
            "sharesChange": 127,
            "weightChange": 0.14
          },
          {
            "code": "MSFT",
            "name": "Microsoft",
            "action": "新增",
            "sharesChange": 1420,
            "weightChange": 3.06
          },
          {
            "code": "CRSP",
            "name": "CRISPR Therapeutics",
            "action": "剔除",
            "sharesChange": -18958,
            "weightChange": -3.23
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.63,
          "shares": 18000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 6.11,
          "shares": 3000
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.25,
          "shares": 2800
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.15,
          "shares": 1400
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.12,
          "shares": 1400
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.79,
          "shares": 3000
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.63,
          "shares": 450
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 4.47,
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
          "weightPct": 3.2,
          "shares": 1250
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 6.03,
          "shares": 100680
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.24,
          "shares": 255293
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 4.95,
          "shares": 266842
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.73,
          "shares": 64600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.64,
          "shares": 151860
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 4.33,
          "shares": 130520
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.04,
          "shares": 518000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.48,
          "shares": 58379
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 3.44,
          "shares": 132263
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 3.43,
          "shares": 204100
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": [
          {
            "code": "AMD",
            "name": "AMD",
            "action": "減持",
            "sharesChange": -8560,
            "weightChange": -0.43
          },
          {
            "code": "CRWD",
            "name": "CrowdStrike Holdings",
            "action": "新增",
            "sharesChange": 132263,
            "weightChange": 3.44
          },
          {
            "code": "AVGO",
            "name": "Broadcom",
            "action": "剔除",
            "sharesChange": -97480,
            "weightChange": -3.77
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261119",
      "holdings": [
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 5.32,
          "shares": 41772
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.23,
          "shares": 28556
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5,
          "shares": 27491
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.48,
          "shares": 17373
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.35,
          "shares": 54746
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.74,
          "shares": 72940
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.29,
          "shares": 58576
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.15,
          "shares": 132000
        },
        {
          "code": "SNDK",
          "name": "Sandisk",
          "exchange": "US",
          "weightPct": 2.98,
          "shares": 10322
        },
        {
          "code": "ABBV",
          "name": "AbbVie",
          "exchange": "US",
          "weightPct": 2.88,
          "shares": 27170
        }
      ],
      "diff": {
        "prevAsOf": "20261118",
        "changes": [
          {
            "code": "MU",
            "name": "Micron",
            "action": "減持",
            "sharesChange": -2257,
            "weightChange": -0.58
          },
          {
            "code": "CRWD",
            "name": "CrowdStrike Holdings",
            "action": "減持",
            "sharesChange": -8811,
            "weightChange": -0.73
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 22,
    "topBought": [
      {
        "code": "6223",
        "name": "旺矽",
        "fundsUp": 3,
        "fundsDown": 0,
        "totalSharesChange": 448000
      },
      {
        "code": "3711",
        "name": "日月光投控",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 785000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": 104000
      },
      {
        "code": "4958",
        "name": "臻鼎-KY",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 3005000
      },
      {
        "code": "3653",
        "name": "健策",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 64000
      },
      {
        "code": "3105",
        "name": "穩懋",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 64000
      },
      {
        "code": "3491",
        "name": "昇達科",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 60000
      },
      {
        "code": "6505",
        "name": "台塑化",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 49000
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 35000
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 28000
      }
    ],
    "topSold": [
      {
        "code": "2360",
        "name": "致茂",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -1032000
      },
      {
        "code": "1303",
        "name": "南亞",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -900000
      },
      {
        "code": "8046",
        "name": "南電",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -421000
      },
      {
        "code": "3008",
        "name": "大立光",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -323000
      },
      {
        "code": "3189",
        "name": "景碩",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -69000
      },
      {
        "code": "2059",
        "name": "川湖",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -29000
      },
      {
        "code": "3037",
        "name": "欣興",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -27000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": 104000
      }
    ],
    "concentrationPct": 35.71,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 11,
    "topBought": [
      {
        "code": "CRWD",
        "name": "CrowdStrike Holdings",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": 123452
      },
      {
        "code": "MSFT",
        "name": "Microsoft",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 1420
      },
      {
        "code": "GOOG",
        "name": "Alphabet - Class C Capital Stock",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 127
      },
      {
        "code": "AMZN",
        "name": "Amazon",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 111
      },
      {
        "code": "META",
        "name": "Meta",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 88
      },
      {
        "code": "AMD",
        "name": "AMD",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -8362
      }
    ],
    "topSold": [
      {
        "code": "AVGO",
        "name": "Broadcom",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -97480
      },
      {
        "code": "CRSP",
        "name": "CRISPR Therapeutics",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -18958
      },
      {
        "code": "AMD",
        "name": "AMD",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -8362
      },
      {
        "code": "MU",
        "name": "Micron",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -2257
      },
      {
        "code": "TEM",
        "name": "Tempus",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -770
      },
      {
        "code": "TSLA",
        "name": "Tesla",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -82
      },
      {
        "code": "CRWD",
        "name": "CrowdStrike Holdings",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": 123452
      }
    ],
    "concentrationPct": 38.46,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
