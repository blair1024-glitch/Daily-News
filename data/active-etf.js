/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-20T04:10:51.653Z",
  "date": "20261120",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.66,
          "shares": 8300000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.93,
          "shares": 1950000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.96,
          "shares": 2550000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.47,
          "shares": 780000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.1,
          "shares": 7200000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.05,
          "shares": 1030000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.58,
          "shares": 1200000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.52,
          "shares": 930000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.3,
          "shares": 15100000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 2.71,
          "shares": 8800000
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": []
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261120",
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
          "weightPct": 6.81,
          "shares": 265000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.97,
          "shares": 2608000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.55,
          "shares": 2251000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.44,
          "shares": 84000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.3,
          "shares": 153000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.79,
          "shares": 404000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 2.73,
          "shares": 96000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.57,
          "shares": 625000
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 17.47,
          "shares": 19303000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.39,
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
          "weightPct": 5.46,
          "shares": 4058000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.07,
          "shares": 19739000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.57,
          "shares": 2683000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.52,
          "shares": 2552000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.2,
          "shares": 7213000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.9,
          "shares": 17940000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.27,
          "shares": 7582000
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": [
          {
            "code": "2383",
            "name": "台光電",
            "action": "減持",
            "sharesChange": -270000,
            "weightChange": -0.57
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "增持",
            "sharesChange": 120000,
            "weightChange": 0.15
          },
          {
            "code": "2308",
            "name": "台達電",
            "action": "新增",
            "sharesChange": 7582000,
            "weightChange": 3.27
          },
          {
            "code": "2327",
            "name": "國巨*",
            "action": "剔除",
            "sharesChange": -23519000,
            "weightChange": -3.33
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.58,
          "shares": 957000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.1,
          "shares": 1609000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 8.04,
          "shares": 7059000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 6.69,
          "shares": 4637000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.94,
          "shares": 4018000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.87,
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
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 2.89,
          "shares": 270000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.84,
          "shares": 338000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 2.65,
          "shares": 403000
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "新增",
            "sharesChange": 403000,
            "weightChange": 2.65
          },
          {
            "code": "4958",
            "name": "臻鼎-KY",
            "action": "剔除",
            "sharesChange": -3005000,
            "weightChange": -2.85
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.67,
          "shares": 3631000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.55,
          "shares": 120000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.12,
          "shares": 1128000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.92,
          "shares": 976000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 2.54,
          "shares": 35000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.49,
          "shares": 3277000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.36,
          "shares": 93000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.36,
          "shares": 352000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 2.24,
          "shares": 367000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.16,
          "shares": 607000
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": []
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.52,
          "shares": 1726000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.72,
          "shares": 211000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.46,
          "shares": 4684000
        },
        {
          "code": "2027",
          "name": "大成鋼",
          "exchange": "TW",
          "weightPct": 3.26,
          "shares": 16619000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.18,
          "shares": 526036
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.9,
          "shares": 217000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.8,
          "shares": 1097000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 2.74,
          "shares": 423000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 2.55,
          "shares": 441000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.55,
          "shares": 595000
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": [
          {
            "code": "2345",
            "name": "智邦",
            "action": "新增",
            "sharesChange": 441000,
            "weightChange": 2.55
          },
          {
            "code": "7769",
            "name": "鴻勁",
            "action": "剔除",
            "sharesChange": -180000,
            "weightChange": -2.58
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 11.08,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.45,
          "shares": 52000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.98,
          "shares": 17000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.89,
          "shares": 27000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.3,
          "shares": 29000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.34,
          "shares": 18000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.14,
          "shares": 52000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.05,
          "shares": 116000
        },
        {
          "code": "6510",
          "name": "精測",
          "exchange": "TW",
          "weightPct": 3.85,
          "shares": 25000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.74,
          "shares": 580000
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": []
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 17.57,
          "shares": 4230000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.83,
          "shares": 1200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.48,
          "shares": 1375000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.74,
          "shares": 1600000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.48,
          "shares": 5500000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 6.1,
          "shares": 13500000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.05,
          "shares": 515000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.97,
          "shares": 3600000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.85,
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
        "prevAsOf": "20261119",
        "changes": []
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 7.15,
          "shares": 1246000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 6.81,
          "shares": 1731000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.15,
          "shares": 921000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.2,
          "shares": 610000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 5,
          "shares": 1355000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.94,
          "shares": 3032000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 4.88,
          "shares": 1743000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.13,
          "shares": 252000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.93,
          "shares": 364000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 12620868
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": []
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 12.01,
          "shares": 376000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.38,
          "shares": 59000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 5.23,
          "shares": 253000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.38,
          "shares": 118000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.32,
          "shares": 91000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4,
          "shares": 64000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.95,
          "shares": 436000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 3.6,
          "shares": 560000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 3.6,
          "shares": 454000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.49,
          "shares": 58000
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": []
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 19.68,
          "shares": 249000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.13,
          "shares": 58101
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.68,
          "shares": 83500
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.36,
          "shares": 239001
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.81,
          "shares": 41002
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.49,
          "shares": 29000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.41,
          "shares": 19550
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.58,
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
          "weightPct": 3.1,
          "shares": 52000
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": []
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.6,
          "shares": 149000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8,
          "shares": 70000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.91,
          "shares": 72000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.01,
          "shares": 80000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.62,
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
          "weightPct": 3.65,
          "shares": 170000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.36,
          "shares": 217000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.14,
          "shares": 17000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 24000
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": [
          {
            "code": "3008",
            "name": "大立光",
            "action": "新增",
            "sharesChange": 24000,
            "weightChange": 2.94
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "剔除",
            "sharesChange": -398000,
            "weightChange": -2.87
          }
        ]
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 9.37,
          "shares": 15438
        },
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 9.12,
          "shares": 5623
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.05,
          "shares": 4462
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 4.87,
          "shares": 18102
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.86,
          "shares": 8253
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.47,
          "shares": 1994
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.15,
          "shares": 1594
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.59,
          "shares": 1671
        },
        {
          "code": "GOOG",
          "name": "Alphabet - Class C Capital Stock",
          "exchange": "US",
          "weightPct": 3.29,
          "shares": 2790
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 3.12,
          "shares": 6348
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": [
          {
            "code": "TSLA",
            "name": "Tesla",
            "action": "減持",
            "sharesChange": -56,
            "weightChange": -0.07
          },
          {
            "code": "AMZN",
            "name": "Amazon",
            "action": "增持",
            "sharesChange": 137,
            "weightChange": 0.3
          },
          {
            "code": "AMD",
            "name": "AMD",
            "action": "增持",
            "sharesChange": 113,
            "weightChange": 0.44
          },
          {
            "code": "META",
            "name": "Meta",
            "action": "增持",
            "sharesChange": 69,
            "weightChange": 0.13
          },
          {
            "code": "MSFT",
            "name": "Microsoft",
            "action": "增持",
            "sharesChange": 251,
            "weightChange": 0.53
          },
          {
            "code": "GOOG",
            "name": "Alphabet - Class C Capital Stock",
            "action": "增持",
            "sharesChange": 85,
            "weightChange": 0.09
          },
          {
            "code": "TWST",
            "name": "Twist Bioscience",
            "action": "新增",
            "sharesChange": 6348,
            "weightChange": 3.12
          },
          {
            "code": "PLTR",
            "name": "Palantir Technologies",
            "action": "剔除",
            "sharesChange": -4704,
            "weightChange": -3.14
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.54,
          "shares": 18000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 6.1,
          "shares": 3000
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.4,
          "shares": 2800
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.34,
          "shares": 1400
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.12,
          "shares": 1400
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 5.12,
          "shares": 3000
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 4.59,
          "shares": 1800
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.48,
          "shares": 450
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.06,
          "shares": 800
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 3.17,
          "shares": 1250
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 6,
          "shares": 100680
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.12,
          "shares": 255293
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 4.9,
          "shares": 266842
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.77,
          "shares": 151860
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.67,
          "shares": 64600
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 4.32,
          "shares": 130520
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.01,
          "shares": 518000
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 3.68,
          "shares": 132263
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.63,
          "shares": 58379
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.51,
          "shares": 84560
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": [
          {
            "code": "AVGO",
            "name": "Broadcom",
            "action": "新增",
            "sharesChange": 84560,
            "weightChange": 3.51
          },
          {
            "code": "SHOP",
            "name": "Shopify",
            "action": "剔除",
            "sharesChange": -204100,
            "weightChange": -3.43
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261120",
      "holdings": [
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 5.29,
          "shares": 41772
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.23,
          "shares": 27491
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.21,
          "shares": 28556
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.66,
          "shares": 54746
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.4,
          "shares": 17373
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.76,
          "shares": 72940
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.18,
          "shares": 58576
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.12,
          "shares": 132000
        },
        {
          "code": "STX",
          "name": "Seagate",
          "exchange": "US",
          "weightPct": 2.93,
          "shares": 15810
        },
        {
          "code": "SNDK",
          "name": "Sandisk",
          "exchange": "US",
          "weightPct": 2.88,
          "shares": 10322
        }
      ],
      "diff": {
        "prevAsOf": "20261119",
        "changes": [
          {
            "code": "STX",
            "name": "Seagate",
            "action": "新增",
            "sharesChange": 15810,
            "weightChange": 2.93
          },
          {
            "code": "ABBV",
            "name": "AbbVie",
            "action": "剔除",
            "sharesChange": -27170,
            "weightChange": -2.88
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 9,
    "topBought": [
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 561000
      },
      {
        "code": "2308",
        "name": "台達電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 7582000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 403000
      },
      {
        "code": "3008",
        "name": "大立光",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 24000
      }
    ],
    "topSold": [
      {
        "code": "2327",
        "name": "國巨*",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -23519000
      },
      {
        "code": "4958",
        "name": "臻鼎-KY",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -3005000
      },
      {
        "code": "1303",
        "name": "南亞",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -398000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -270000
      },
      {
        "code": "7769",
        "name": "鴻勁",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -180000
      }
    ],
    "concentrationPct": 60,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 12,
    "topBought": [
      {
        "code": "AVGO",
        "name": "Broadcom",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 84560
      },
      {
        "code": "STX",
        "name": "Seagate",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 15810
      },
      {
        "code": "TWST",
        "name": "Twist Bioscience",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 6348
      },
      {
        "code": "MSFT",
        "name": "Microsoft",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 251
      },
      {
        "code": "AMZN",
        "name": "Amazon",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 137
      },
      {
        "code": "AMD",
        "name": "AMD",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 113
      },
      {
        "code": "GOOG",
        "name": "Alphabet - Class C Capital Stock",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 85
      },
      {
        "code": "META",
        "name": "Meta",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 69
      }
    ],
    "topSold": [
      {
        "code": "SHOP",
        "name": "Shopify",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -204100
      },
      {
        "code": "ABBV",
        "name": "AbbVie",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -27170
      },
      {
        "code": "PLTR",
        "name": "Palantir Technologies",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -4704
      },
      {
        "code": "TSLA",
        "name": "Tesla",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -56
      }
    ],
    "concentrationPct": 41.67,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
