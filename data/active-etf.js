/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-23T23:40:46.974Z",
  "date": "20261124",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.8,
          "shares": 8388000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.09,
          "shares": 1950000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.95,
          "shares": 2550000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.04,
          "shares": 800000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.96,
          "shares": 7200000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.74,
          "shares": 1030000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.66,
          "shares": 1200000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.49,
          "shares": 930000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.37,
          "shares": 15100000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 2.69,
          "shares": 8800000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 88000,
            "weightChange": -0.25
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "增持",
            "sharesChange": 20000,
            "weightChange": -0.29
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 11.02,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.04,
          "shares": 265000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 2608000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 2251000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.42,
          "shares": 84000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.41,
          "shares": 153000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.88,
          "shares": 404000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 2.55,
          "shares": 96000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.52,
          "shares": 625000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 17.46,
          "shares": 19303000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.63,
          "shares": 5861000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.46,
          "shares": 7078000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.59,
          "shares": 4058000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.91,
          "shares": 19739000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.55,
          "shares": 2683000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.5,
          "shares": 7475000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.19,
          "shares": 2552000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.85,
          "shares": 17940000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.35,
          "shares": 7582000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "2345",
            "name": "智邦",
            "action": "增持",
            "sharesChange": 262000,
            "weightChange": 0.31
          },
          {
            "code": "2308",
            "name": "台達電",
            "action": "新增",
            "sharesChange": 7582000,
            "weightChange": 3.35
          },
          {
            "code": "2327",
            "name": "國巨*",
            "action": "剔除",
            "sharesChange": -23519000,
            "weightChange": -3.29
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.89,
          "shares": 957000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.16,
          "shares": 1609000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 8.09,
          "shares": 7059000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 6.7,
          "shares": 4637000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 6.21,
          "shares": 4018000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.7,
          "shares": 1330000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.21,
          "shares": 301000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.2,
          "shares": 369000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.12,
          "shares": 470000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 2.74,
          "shares": 270000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": []
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.8,
          "shares": 3671000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.62,
          "shares": 120000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.29,
          "shares": 1140000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.95,
          "shares": 987000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.44,
          "shares": 3277000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.43,
          "shares": 356000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.4,
          "shares": 93000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 2.28,
          "shares": 35000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 2.28,
          "shares": 371000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.2,
          "shares": 614000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "6505",
            "name": "台塑化",
            "action": "增持",
            "sharesChange": 40000,
            "weightChange": -0.03
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 12000,
            "weightChange": 0.25
          },
          {
            "code": "2603",
            "name": "長榮",
            "action": "增持",
            "sharesChange": 11000,
            "weightChange": -0.03
          },
          {
            "code": "2395",
            "name": "研華",
            "action": "增持",
            "sharesChange": 4000,
            "weightChange": 0.03
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "增持",
            "sharesChange": 4000,
            "weightChange": 0.08
          },
          {
            "code": "2408",
            "name": "南亞科",
            "action": "增持",
            "sharesChange": 7000,
            "weightChange": 0.1
          }
        ]
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.88,
          "shares": 1645000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.71,
          "shares": 287000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.38,
          "shares": 551036
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.36,
          "shares": 761000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 236000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.99,
          "shares": 217000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 2.78,
          "shares": 1212000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.73,
          "shares": 1097000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 2.68,
          "shares": 163000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 2.65,
          "shares": 441000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "減持",
            "sharesChange": -81000,
            "weightChange": -1.06
          },
          {
            "code": "3653",
            "name": "健策",
            "action": "增持",
            "sharesChange": 76000,
            "weightChange": 1.1
          },
          {
            "code": "6669",
            "name": "緯穎",
            "action": "增持",
            "sharesChange": 25000,
            "weightChange": 0.16
          },
          {
            "code": "2308",
            "name": "台達電",
            "action": "增持",
            "sharesChange": 136000,
            "weightChange": 0.76
          },
          {
            "code": "7769",
            "name": "鴻勁",
            "action": "增持",
            "sharesChange": 56000,
            "weightChange": 0.66
          },
          {
            "code": "6531",
            "name": "愛普*",
            "action": "新增",
            "sharesChange": 1212000,
            "weightChange": 2.78
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "新增",
            "sharesChange": 163000,
            "weightChange": 2.68
          },
          {
            "code": "3081",
            "name": "聯亞",
            "action": "剔除",
            "sharesChange": -423000,
            "weightChange": -2.67
          },
          {
            "code": "3036",
            "name": "文曄",
            "action": "剔除",
            "sharesChange": -3288000,
            "weightChange": -2.47
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.13,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.9,
          "shares": 52000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.39,
          "shares": 27000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.76,
          "shares": 29000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.59,
          "shares": 17000
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
          "weightPct": 4.21,
          "shares": 52000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.16,
          "shares": 116000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 4.04,
          "shares": 44000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.82,
          "shares": 580000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "3665",
            "name": "貿聯-KY",
            "action": "新增",
            "sharesChange": 44000,
            "weightChange": 4.04
          },
          {
            "code": "6510",
            "name": "精測",
            "action": "剔除",
            "sharesChange": -25000,
            "weightChange": -3.97
          }
        ]
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 17.83,
          "shares": 4230000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.18,
          "shares": 1200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.82,
          "shares": 1375000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.86,
          "shares": 1600000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.37,
          "shares": 5500000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 6.35,
          "shares": 13500000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.03,
          "shares": 515000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.01,
          "shares": 3600000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.56,
          "shares": 4700000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 4.2,
          "shares": 4200000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": []
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 7.2,
          "shares": 1246000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 7.05,
          "shares": 1731000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.2,
          "shares": 921000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.37,
          "shares": 610000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 5.21,
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
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 4.26,
          "shares": 1743000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.94,
          "shares": 364000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 369000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 12620868
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "新增",
            "sharesChange": 369000,
            "weightChange": 3.87
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "剔除",
            "sharesChange": -252000,
            "weightChange": -4.08
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 12.36,
          "shares": 376000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 5.15,
          "shares": 253000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.88,
          "shares": 59000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.54,
          "shares": 91000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.51,
          "shares": 118000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.93,
          "shares": 436000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.81,
          "shares": 64000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 3.69,
          "shares": 560000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.56,
          "shares": 58000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 3.43,
          "shares": 454000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": []
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 20.21,
          "shares": 249000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.57,
          "shares": 58101
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.9,
          "shares": 83500
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.34,
          "shares": 239001
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.07,
          "shares": 41002
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.28,
          "shares": 29000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.01,
          "shares": 19550
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.78,
          "shares": 417000
        },
        {
          "code": "2368",
          "name": "金像電",
          "exchange": "TW",
          "weightPct": 3.51,
          "shares": 112000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.03,
          "shares": 52000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": []
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.4,
          "shares": 142000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.4,
          "shares": 70000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.25,
          "shares": 72000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.16,
          "shares": 80000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.71,
          "shares": 38000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.96,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.71,
          "shares": 170000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.41,
          "shares": 217000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 398000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 2.93,
          "shares": 63000
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "1303",
            "name": "南亞",
            "action": "新增",
            "sharesChange": 398000,
            "weightChange": 2.94
          },
          {
            "code": "3665",
            "name": "貿聯-KY",
            "action": "新增",
            "sharesChange": 63000,
            "weightChange": 2.93
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "剔除",
            "sharesChange": -17000,
            "weightChange": -3.12
          },
          {
            "code": "3008",
            "name": "大立光",
            "action": "剔除",
            "sharesChange": -24000,
            "weightChange": -3
          }
        ]
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 9.18,
          "shares": 15438
        },
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.85,
          "shares": 5503
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.23,
          "shares": 4551
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.75,
          "shares": 8253
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 4.55,
          "shares": 18102
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.31,
          "shares": 1652
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.2,
          "shares": 1863
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.94,
          "shares": 1994
        },
        {
          "code": "GOOG",
          "name": "Alphabet - Class C Capital Stock",
          "exchange": "US",
          "weightPct": 3.55,
          "shares": 2892
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.14,
          "shares": 4704
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "TSLA",
            "name": "Tesla",
            "action": "減持",
            "sharesChange": -76,
            "weightChange": -0.26
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.52,
          "shares": 18000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 6.21,
          "shares": 3000
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 6.05,
          "shares": 1600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.39,
          "shares": 2800
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 5.37,
          "shares": 3000
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.73,
          "shares": 450
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.64,
          "shares": 1400
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 4.28,
          "shares": 1800
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.71,
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
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "MSFT",
            "name": "Microsoft",
            "action": "增持",
            "sharesChange": 200,
            "weightChange": 0.92
          }
        ]
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 6.34,
          "shares": 100680
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.88,
          "shares": 151860
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.71,
          "shares": 64600
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 4.5,
          "shares": 130520
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.09,
          "shares": 518000
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 3.44,
          "shares": 115363
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 3.4,
          "shares": 19380
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 3.16,
          "shares": 70840
        },
        {
          "code": "GE",
          "name": "GE Aerospace",
          "exchange": "US",
          "weightPct": 3.05,
          "shares": 75800
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 2.91,
          "shares": 157053
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "CRWD",
            "name": "CrowdStrike Holdings",
            "action": "減持",
            "sharesChange": -16900,
            "weightChange": -0.46
          },
          {
            "code": "LLY",
            "name": "Eli Lilly",
            "action": "新增",
            "sharesChange": 19380,
            "weightChange": 3.4
          },
          {
            "code": "AAPL",
            "name": "Apple",
            "action": "新增",
            "sharesChange": 70840,
            "weightChange": 3.16
          },
          {
            "code": "GE",
            "name": "GE Aerospace",
            "action": "新增",
            "sharesChange": 75800,
            "weightChange": 3.05
          },
          {
            "code": "BE",
            "name": "Bloom Energy",
            "action": "減持",
            "sharesChange": -98240,
            "weightChange": -2.28
          },
          {
            "code": "PLTR",
            "name": "Palantir Technologies",
            "action": "剔除",
            "sharesChange": -266842,
            "weightChange": -4.96
          },
          {
            "code": "AVGO",
            "name": "Broadcom",
            "action": "剔除",
            "sharesChange": -84560,
            "weightChange": -3.55
          },
          {
            "code": "AMD",
            "name": "AMD",
            "action": "剔除",
            "sharesChange": -58379,
            "weightChange": -3.46
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261124",
      "holdings": [
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 5.73,
          "shares": 41772
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.54,
          "shares": 28556
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.1,
          "shares": 29991
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 5.03,
          "shares": 54746
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.14,
          "shares": 17373
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.74,
          "shares": 72940
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.21,
          "shares": 132000
        },
        {
          "code": "ABBV",
          "name": "AbbVie",
          "exchange": "US",
          "weightPct": 3.12,
          "shares": 27170
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 2.95,
          "shares": 58576
        },
        {
          "code": "STX",
          "name": "Seagate",
          "exchange": "US",
          "weightPct": 2.9,
          "shares": 15810
        }
      ],
      "diff": {
        "prevAsOf": "20261121",
        "changes": [
          {
            "code": "ABBV",
            "name": "AbbVie",
            "action": "新增",
            "sharesChange": 27170,
            "weightChange": 3.12
          },
          {
            "code": "WDC",
            "name": "Western Digital",
            "action": "剔除",
            "sharesChange": -27614,
            "weightChange": -3.02
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
        "code": "2308",
        "name": "台達電",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 7718000
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 532000
      },
      {
        "code": "1303",
        "name": "南亞",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 410000
      },
      {
        "code": "3665",
        "name": "貿聯-KY",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 107000
      },
      {
        "code": "6531",
        "name": "愛普*",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 1212000
      },
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 262000
      },
      {
        "code": "3653",
        "name": "健策",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 76000
      },
      {
        "code": "7769",
        "name": "鴻勁",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 56000
      },
      {
        "code": "6505",
        "name": "台塑化",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 40000
      },
      {
        "code": "6669",
        "name": "緯穎",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 25000
      }
    ],
    "topSold": [
      {
        "code": "3443",
        "name": "創意",
        "fundsUp": 1,
        "fundsDown": 2,
        "totalSharesChange": -249000
      },
      {
        "code": "2327",
        "name": "國巨*",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -23519000
      },
      {
        "code": "3036",
        "name": "文曄",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -3288000
      },
      {
        "code": "3081",
        "name": "聯亞",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -423000
      },
      {
        "code": "6510",
        "name": "精測",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -25000
      },
      {
        "code": "3008",
        "name": "大立光",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -24000
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": 7000
      }
    ],
    "concentrationPct": 39.29,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 12,
    "topBought": [
      {
        "code": "GE",
        "name": "GE Aerospace",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 75800
      },
      {
        "code": "AAPL",
        "name": "Apple",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 70840
      },
      {
        "code": "ABBV",
        "name": "AbbVie",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 27170
      },
      {
        "code": "LLY",
        "name": "Eli Lilly",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 19380
      },
      {
        "code": "MSFT",
        "name": "Microsoft",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 200
      }
    ],
    "topSold": [
      {
        "code": "PLTR",
        "name": "Palantir Technologies",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -266842
      },
      {
        "code": "BE",
        "name": "Bloom Energy",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -98240
      },
      {
        "code": "AVGO",
        "name": "Broadcom",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -84560
      },
      {
        "code": "AMD",
        "name": "AMD",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -58379
      },
      {
        "code": "WDC",
        "name": "Western Digital",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -27614
      },
      {
        "code": "CRWD",
        "name": "CrowdStrike Holdings",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -16900
      },
      {
        "code": "TSLA",
        "name": "Tesla",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -76
      }
    ],
    "concentrationPct": 41.67,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
