/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-25T23:41:19.066Z",
  "date": "20261126",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.51,
          "shares": 8750000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.24,
          "shares": 1950000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.9,
          "shares": 2640000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.77,
          "shares": 1030000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.7,
          "shares": 7200000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.56,
          "shares": 800000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.53,
          "shares": 1200000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.08,
          "shares": 930000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3,
          "shares": 15100000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 2.4,
          "shares": 1910956
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 150000,
            "weightChange": 0.33
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 90000,
            "weightChange": 0.31
          },
          {
            "code": "6669",
            "name": "緯穎",
            "action": "新增",
            "sharesChange": 1910956,
            "weightChange": 2.4
          },
          {
            "code": "2327",
            "name": "國巨*",
            "action": "剔除",
            "sharesChange": -8800000,
            "weightChange": -2.53
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.92,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.52,
          "shares": 265000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.27,
          "shares": 233000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.43,
          "shares": 2900000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.69,
          "shares": 84000
        },
        {
          "code": "FITXN12",
          "name": "台灣證交所加權股價指數",
          "exchange": "TF",
          "weightPct": 3.09,
          "shares": 60
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 2108000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.88,
          "shares": 404000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 2.7,
          "shares": 157000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 2.7,
          "shares": 96000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 80000,
            "weightChange": 1.95
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 649000,
            "weightChange": 0.85
          },
          {
            "code": "FITXN12",
            "name": "台灣證交所加權股價指數",
            "action": "新增",
            "sharesChange": 60,
            "weightChange": 3.09
          },
          {
            "code": "2317",
            "name": "鴻海",
            "action": "減持",
            "sharesChange": -500000,
            "weightChange": -0.84
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "新增",
            "sharesChange": 157000,
            "weightChange": 2.7
          },
          {
            "code": "3037",
            "name": "欣興",
            "action": "剔除",
            "sharesChange": -625000,
            "weightChange": -2.45
          }
        ]
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.06,
          "shares": 20216000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.89,
          "shares": 5861000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.87,
          "shares": 7306000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.17,
          "shares": 4172000
        },
        {
          "code": "FITXN12",
          "name": "台指期貨 2026/12",
          "exchange": "TF",
          "weightPct": 4.32,
          "shares": 1533
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.27,
          "shares": 19739000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.22,
          "shares": 7736000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.93,
          "shares": 2552000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.74,
          "shares": 2683000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.6,
          "shares": 19984000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 369000,
            "weightChange": 0.46
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 228000,
            "weightChange": 0.38
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 114000,
            "weightChange": 0.31
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "增持",
            "sharesChange": 261000,
            "weightChange": 0.31
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "增持",
            "sharesChange": 2044000,
            "weightChange": 0.25
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.55,
          "shares": 957000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.47,
          "shares": 1609000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 7.82,
          "shares": 7059000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 6.55,
          "shares": 4637000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 6.11,
          "shares": 4018000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.57,
          "shares": 1330000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.39,
          "shares": 369000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.28,
          "shares": 470000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.11,
          "shares": 301000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 2.98,
          "shares": 270000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": []
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.69,
          "shares": 120000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.63,
          "shares": 3730000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.15,
          "shares": 1151000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 1003000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.41,
          "shares": 93000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.41,
          "shares": 360000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.36,
          "shares": 3306000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.36,
          "shares": 30000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 2.2,
          "shares": 374000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 2.14,
          "shares": 35000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 11000,
            "weightChange": -0.11
          },
          {
            "code": "2395",
            "name": "研華",
            "action": "增持",
            "sharesChange": 4000,
            "weightChange": 0
          },
          {
            "code": "1326",
            "name": "台化",
            "action": "增持",
            "sharesChange": 29000,
            "weightChange": -0.06
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "新增",
            "sharesChange": 30000,
            "weightChange": 2.36
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "增持",
            "sharesChange": 3000,
            "weightChange": -0.06
          },
          {
            "code": "2408",
            "name": "南亞科",
            "action": "剔除",
            "sharesChange": -614000,
            "weightChange": -2.18
          }
        ]
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.22,
          "shares": 1583000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5,
          "shares": 287000
        },
        {
          "code": "FITXN12",
          "name": "台灣證交所加權股價指數",
          "exchange": "TF",
          "weightPct": 4.3,
          "shares": 135
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.35,
          "shares": 761000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.29,
          "shares": 551036
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.04,
          "shares": 217000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 3.02,
          "shares": 236000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.8,
          "shares": 103000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 2.72,
          "shares": 441000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.68,
          "shares": 1097000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "FITXN12",
            "name": "台灣證交所加權股價指數",
            "action": "新增",
            "sharesChange": 135,
            "weightChange": 4.3
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "新增",
            "sharesChange": 103000,
            "weightChange": 2.8
          },
          {
            "code": "6531",
            "name": "愛普*",
            "action": "剔除",
            "sharesChange": -1212000,
            "weightChange": -2.73
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "剔除",
            "sharesChange": -163000,
            "weightChange": -2.62
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.45,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.43,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.16,
          "shares": 38000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.52,
          "shares": 27000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.84,
          "shares": 17000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.21,
          "shares": 18000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 4.03,
          "shares": 44000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.81,
          "shares": 116000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.66,
          "shares": 52000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.6,
          "shares": 17000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 9000,
            "weightChange": 1.91
          },
          {
            "code": "6223",
            "name": "旺矽",
            "action": "新增",
            "sharesChange": 17000,
            "weightChange": 3.6
          },
          {
            "code": "1815",
            "name": "富喬",
            "action": "剔除",
            "sharesChange": -580000,
            "weightChange": -3.48
          }
        ]
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.87,
          "shares": 5100000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.04,
          "shares": 1450000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.86,
          "shares": 1300000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.63,
          "shares": 1800000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 5.18,
          "shares": 550000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.91,
          "shares": 5800000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.75,
          "shares": 14500000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 3.58,
          "shares": 5000000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.46,
          "shares": 3600000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.39,
          "shares": 4800000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 870000,
            "weightChange": 2.72
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 75000,
            "weightChange": 0.53
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 100000,
            "weightChange": 0.08
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 200000,
            "weightChange": 0.83
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "增持",
            "sharesChange": 35000,
            "weightChange": 0.73
          },
          {
            "code": "3037",
            "name": "欣興",
            "action": "增持",
            "sharesChange": 300000,
            "weightChange": 0.21
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 1000000,
            "weightChange": 0.06
          },
          {
            "code": "3189",
            "name": "景碩",
            "action": "增持",
            "sharesChange": 300000,
            "weightChange": 0.21
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "增持",
            "sharesChange": 600000,
            "weightChange": 0.29
          }
        ]
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 7.66,
          "shares": 1731000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 7.27,
          "shares": 1246000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.37,
          "shares": 921000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.56,
          "shares": 610000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 5.43,
          "shares": 1355000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.82,
          "shares": 3032000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 4.53,
          "shares": 414000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.27,
          "shares": 242000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 4.12,
          "shares": 1743000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.73,
          "shares": 364000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "3008",
            "name": "大立光",
            "action": "新增",
            "sharesChange": 414000,
            "weightChange": 4.53
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "新增",
            "sharesChange": 242000,
            "weightChange": 4.27
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "剔除",
            "sharesChange": -369000,
            "weightChange": -3.89
          },
          {
            "code": "1815",
            "name": "富喬",
            "action": "剔除",
            "sharesChange": -12620868,
            "weightChange": -3.7
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 12.24,
          "shares": 376000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.81,
          "shares": 253000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.63,
          "shares": 91000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.55,
          "shares": 118000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.53,
          "shares": 59000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.04,
          "shares": 64000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 436000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 3.43,
          "shares": 560000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 3.41,
          "shares": 454000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.31,
          "shares": 58000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": []
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 17.92,
          "shares": 223000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.95,
          "shares": 83500
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.92,
          "shares": 58101
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.23,
          "shares": 239001
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.15,
          "shares": 41002
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.52,
          "shares": 29000
        },
        {
          "code": "2368",
          "name": "金像電",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 112000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.71,
          "shares": 19550
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.53,
          "shares": 417000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 2.99,
          "shares": 52000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "減持",
            "sharesChange": -26000,
            "weightChange": -1.78
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.15,
          "shares": 142000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.64,
          "shares": 70000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.24,
          "shares": 72000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.1,
          "shares": 80000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.29,
          "shares": 38000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.12,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.39,
          "shares": 170000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.17,
          "shares": 217000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 3.08,
          "shares": 63000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 2.92,
          "shares": 430000
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 32000,
            "weightChange": 0.14
          }
        ]
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 9.24,
          "shares": 5503
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 8.3,
          "shares": 15108
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.01,
          "shares": 4551
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.77,
          "shares": 8253
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 4.33,
          "shares": 18102
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.25,
          "shares": 1652
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.04,
          "shares": 1863
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.96,
          "shares": 2194
        },
        {
          "code": "GOOG",
          "name": "Alphabet - Class C Capital Stock",
          "exchange": "US",
          "weightPct": 3.49,
          "shares": 2892
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.31,
          "shares": 4704
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "AMD",
            "name": "AMD",
            "action": "增持",
            "sharesChange": 200,
            "weightChange": 0.03
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.19,
          "shares": 18000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 6.32,
          "shares": 3000
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.99,
          "shares": 1600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.33,
          "shares": 2800
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.78,
          "shares": 450
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.78,
          "shares": 3000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.37,
          "shares": 1400
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 4.09,
          "shares": 1800
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.8,
          "shares": 800
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 3.34,
          "shares": 1250
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 7.19,
          "shares": 116560
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 5.53,
          "shares": 159480
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.76,
          "shares": 151860
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.74,
          "shares": 64600
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.36,
          "shares": 518000
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 4.11,
          "shares": 93320
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 3.39,
          "shares": 19380
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 3.05,
          "shares": 157053
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 3.02,
          "shares": 115363
        },
        {
          "code": "GE",
          "name": "GE Aerospace",
          "exchange": "US",
          "weightPct": 3,
          "shares": 75800
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": []
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261126",
      "holdings": [
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 5.72,
          "shares": 41772
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.48,
          "shares": 28556
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.79,
          "shares": 29991
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.46,
          "shares": 54746
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.23,
          "shares": 17373
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.55,
          "shares": 72940
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.52,
          "shares": 58576
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.45,
          "shares": 132000
        },
        {
          "code": "ABBV",
          "name": "AbbVie",
          "exchange": "US",
          "weightPct": 3.15,
          "shares": 27170
        },
        {
          "code": "STX",
          "name": "Seagate",
          "exchange": "US",
          "weightPct": 2.95,
          "shares": 15810
        }
      ],
      "diff": {
        "prevAsOf": "20261125",
        "changes": [
          {
            "code": "ABBV",
            "name": "AbbVie",
            "action": "新增",
            "sharesChange": 27170,
            "weightChange": 3.15
          },
          {
            "code": "WDC",
            "name": "Western Digital",
            "action": "剔除",
            "sharesChange": -27614,
            "weightChange": -3.07
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 21,
    "topBought": [
      {
        "code": "1303",
        "name": "南亞",
        "fundsUp": 4,
        "fundsDown": 0,
        "totalSharesChange": 1692000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 4,
        "fundsDown": 0,
        "totalSharesChange": 675000
      },
      {
        "code": "2059",
        "name": "川湖",
        "fundsUp": 4,
        "fundsDown": 0,
        "totalSharesChange": 410000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 4,
        "fundsDown": 0,
        "totalSharesChange": 278000
      },
      {
        "code": "3711",
        "name": "日月光投控",
        "fundsUp": 3,
        "fundsDown": 0,
        "totalSharesChange": 2647000
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 3,
        "fundsDown": 1,
        "totalSharesChange": 1363000
      },
      {
        "code": "FITXN12",
        "name": "台灣證交所加權股價指數",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 195
      },
      {
        "code": "6669",
        "name": "緯穎",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 1910956
      },
      {
        "code": "3008",
        "name": "大立光",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 414000
      },
      {
        "code": "3189",
        "name": "景碩",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 300000
      }
    ],
    "topSold": [
      {
        "code": "1815",
        "name": "富喬",
        "fundsUp": 0,
        "fundsDown": 2,
        "totalSharesChange": -13200868
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 1,
        "fundsDown": 2,
        "totalSharesChange": -432000
      },
      {
        "code": "2327",
        "name": "國巨*",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -8800000
      },
      {
        "code": "6531",
        "name": "愛普*",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -1212000
      },
      {
        "code": "2408",
        "name": "南亞科",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -614000
      },
      {
        "code": "2317",
        "name": "鴻海",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -500000
      },
      {
        "code": "3037",
        "name": "欣興",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -325000
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 3,
        "fundsDown": 1,
        "totalSharesChange": 1363000
      }
    ],
    "concentrationPct": 44.19,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 3,
    "topBought": [
      {
        "code": "ABBV",
        "name": "AbbVie",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 27170
      },
      {
        "code": "AMD",
        "name": "AMD",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 200
      }
    ],
    "topSold": [
      {
        "code": "WDC",
        "name": "Western Digital",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -27614
      }
    ],
    "concentrationPct": 100,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
