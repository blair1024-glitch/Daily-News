/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-10-29T23:40:53.948Z",
  "date": "20261030",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 14,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.48,
          "shares": 7700000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.83,
          "shares": 7200000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.63,
          "shares": 2330000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.99,
          "shares": 1000000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 4.82,
          "shares": 1530000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.68,
          "shares": 1200000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.22,
          "shares": 710000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.72,
          "shares": 8800000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.5,
          "shares": 930000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 3.32,
          "shares": 4450000
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": []
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.84,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.45,
          "shares": 249000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.22,
          "shares": 79000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.91,
          "shares": 144000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.58,
          "shares": 2117000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.52,
          "shares": 625000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.29,
          "shares": 2453000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.24,
          "shares": 404000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.12,
          "shares": 90000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.5,
          "shares": 967000
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 11.56,
          "shares": 13046000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.96,
          "shares": 4328000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.88,
          "shares": 5306000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.53,
          "shares": 19739000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.45,
          "shares": 6537000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.91,
          "shares": 2512000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 4.69,
          "shares": 23519000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.45,
          "shares": 2504000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.12,
          "shares": 8987000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 4.12,
          "shares": 7582000
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": [
          {
            "code": "8046",
            "name": "南電",
            "action": "增持",
            "sharesChange": 50000,
            "weightChange": -0.03
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 8.94,
          "shares": 7059000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.28,
          "shares": 1609000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.78,
          "shares": 786000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.31,
          "shares": 3745000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 4.12,
          "shares": 2300000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 3.94,
          "shares": 951000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 3.5,
          "shares": 3158000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.3,
          "shares": 309000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.24,
          "shares": 1180000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.14,
          "shares": 253000
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": [
          {
            "code": "3105",
            "name": "穩懋",
            "action": "增持",
            "sharesChange": 1350000,
            "weightChange": 2.51
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "2881",
          "name": "富邦金",
          "exchange": "TW",
          "weightPct": 4.45,
          "shares": 2851000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.3,
          "shares": 185000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.12,
          "shares": 138000
        },
        {
          "code": "2887",
          "name": "台新新光金",
          "exchange": "TW",
          "weightPct": 3.52,
          "shares": 8631000
        },
        {
          "code": "2885",
          "name": "元大金",
          "exchange": "TW",
          "weightPct": 3.51,
          "shares": 4973880
        },
        {
          "code": "2882",
          "name": "國泰金",
          "exchange": "TW",
          "weightPct": 3.4,
          "shares": 3038000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.13,
          "shares": 1043000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.12,
          "shares": 3291000
        },
        {
          "code": "2883",
          "name": "凱基金",
          "exchange": "TW",
          "weightPct": 2.51,
          "shares": 6789000
        },
        {
          "code": "2890",
          "name": "永豐金",
          "exchange": "TW",
          "weightPct": 2.51,
          "shares": 5612000
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": [
          {
            "code": "2890",
            "name": "永豐金",
            "action": "新增",
            "sharesChange": 5612000,
            "weightChange": 2.51
          },
          {
            "code": "2395",
            "name": "研華",
            "action": "剔除",
            "sharesChange": -386000,
            "weightChange": -2.52
          }
        ]
      }
    },
    "00985A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.91,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.36,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.62,
          "shares": 29000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.5,
          "shares": 116000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.26,
          "shares": 18000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 4.98,
          "shares": 27000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 4.75,
          "shares": 75000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.53,
          "shares": 13000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.98,
          "shares": 36000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 3.5,
          "shares": 29800
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": [
          {
            "code": "3081",
            "name": "聯亞",
            "action": "新增",
            "sharesChange": 29800,
            "weightChange": 3.5
          },
          {
            "code": "6510",
            "name": "精測",
            "action": "剔除",
            "sharesChange": -25000,
            "weightChange": -3.53
          }
        ]
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.5,
          "shares": 4200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.67,
          "shares": 1350000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 7.98,
          "shares": 11700000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.96,
          "shares": 5350000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.81,
          "shares": 482000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 6.34,
          "shares": 4620000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.22,
          "shares": 1400000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 6.08,
          "shares": 3400000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.07,
          "shares": 1050000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.55,
          "shares": 10200000
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": []
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.57,
          "shares": 1246000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.24,
          "shares": 921000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.09,
          "shares": 2682000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.88,
          "shares": 1743000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.52,
          "shares": 505000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 5.19,
          "shares": 1355000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 4.99,
          "shares": 1341000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 4.1,
          "shares": 323000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.95,
          "shares": 183000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.84,
          "shares": 364000
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": [
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 85000,
            "weightChange": 1.05
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.75,
          "shares": 342000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 6.01,
          "shares": 74000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 5.75,
          "shares": 564000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 5.3,
          "shares": 1598000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 4.98,
          "shares": 27600
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.74,
          "shares": 429000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.58,
          "shares": 86000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 115000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 3.28,
          "shares": 120000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 2.97,
          "shares": 69000
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": []
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.4,
          "shares": 244000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.68,
          "shares": 51002
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.13,
          "shares": 75500
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.83,
          "shares": 55101
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.66,
          "shares": 208001
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.52,
          "shares": 27000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 4.29,
          "shares": 118002
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.04,
          "shares": 31901
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.36,
          "shares": 13001
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.1,
          "shares": 95000
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": [
          {
            "code": "8046",
            "name": "南電",
            "action": "新增",
            "sharesChange": 95000,
            "weightChange": 3.1
          },
          {
            "code": "3189",
            "name": "景碩",
            "action": "剔除",
            "sharesChange": -120000,
            "weightChange": -3.16
          }
        ]
      }
    },
    "00995A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 9.02,
          "shares": 6396
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 6.44,
          "shares": 12688
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 5.92,
          "shares": 22116
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.85,
          "shares": 8253
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 4.45,
          "shares": 15599
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 4.3,
          "shares": 7089
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 3.9,
          "shares": 20609
        },
        {
          "code": "COIN",
          "name": "Coinbase",
          "exchange": "US",
          "weightPct": 3.89,
          "shares": 6864
        },
        {
          "code": "TXG",
          "name": "10x Genomics",
          "exchange": "US",
          "weightPct": 3.68,
          "shares": 12592
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.6,
          "shares": 4788
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": [
          {
            "code": "TSLA",
            "name": "Tesla",
            "action": "減持",
            "sharesChange": -125,
            "weightChange": -0.39
          },
          {
            "code": "COIN",
            "name": "Coinbase",
            "action": "減持",
            "sharesChange": -176,
            "weightChange": -0.14
          },
          {
            "code": "NVDA",
            "name": "NVIDIA",
            "action": "增持",
            "sharesChange": 207,
            "weightChange": 0.06
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.06,
          "shares": 18000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.45,
          "shares": 5000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 5.84,
          "shares": 3000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.85,
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
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.71,
          "shares": 800
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 4.27,
          "shares": 780
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.27,
          "shares": 2800
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.79,
          "shares": 1800
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 3.47,
          "shares": 450
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 5.74,
          "shares": 280800
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.44,
          "shares": 251300
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 5.15,
          "shares": 59279
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.07,
          "shares": 100440
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 4.99,
          "shares": 266842
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.47,
          "shares": 81379
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 3.76,
          "shares": 64600
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.55,
          "shares": 38005
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.54,
          "shares": 256528
        },
        {
          "code": "NOW",
          "name": "ServiceNow",
          "exchange": "US",
          "weightPct": 3.27,
          "shares": 229281
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": [
          {
            "code": "BE",
            "name": "Bloom Energy",
            "action": "增持",
            "sharesChange": 23800,
            "weightChange": 0.66
          },
          {
            "code": "LITE",
            "name": "Lumentum",
            "action": "增持",
            "sharesChange": 18040,
            "weightChange": 1.72
          },
          {
            "code": "PLTR",
            "name": "Palantir Technologies",
            "action": "增持",
            "sharesChange": 52400,
            "weightChange": 0.89
          },
          {
            "code": "META",
            "name": "Meta",
            "action": "減持",
            "sharesChange": -16800,
            "weightChange": -1.09
          },
          {
            "code": "MU",
            "name": "Micron",
            "action": "新增",
            "sharesChange": 38005,
            "weightChange": 3.55
          },
          {
            "code": "SNOW",
            "name": "Snowflake",
            "action": "剔除",
            "sharesChange": -101200,
            "weightChange": -3.28
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261030",
      "holdings": [
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.79,
          "shares": 63557
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 4.13,
          "shares": 16015
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 4.06,
          "shares": 41772
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.73,
          "shares": 13432
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.56,
          "shares": 58576
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.45,
          "shares": 360000
        },
        {
          "code": "DT",
          "name": "Dynatrace",
          "exchange": "US",
          "weightPct": 3.41,
          "shares": 191966
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.16,
          "shares": 21042
        },
        {
          "code": "MRVL",
          "name": "Marvell",
          "exchange": "US",
          "weightPct": 3.07,
          "shares": 43260
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 2.99,
          "shares": 72940
        }
      ],
      "diff": {
        "prevAsOf": "20261029",
        "changes": []
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 10,
    "totalActiveStocks": 8,
    "topBought": [
      {
        "code": "8046",
        "name": "南電",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 145000
      },
      {
        "code": "2890",
        "name": "永豐金",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 5612000
      },
      {
        "code": "3105",
        "name": "穩懋",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 1350000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 85000
      },
      {
        "code": "3081",
        "name": "聯亞",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 29800
      }
    ],
    "topSold": [
      {
        "code": "2395",
        "name": "研華",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -386000
      },
      {
        "code": "3189",
        "name": "景碩",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -120000
      },
      {
        "code": "6510",
        "name": "精測",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -25000
      }
    ],
    "concentrationPct": 66.67,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 9,
    "topBought": [
      {
        "code": "PLTR",
        "name": "Palantir Technologies",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 52400
      },
      {
        "code": "MU",
        "name": "Micron",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 38005
      },
      {
        "code": "BE",
        "name": "Bloom Energy",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 23800
      },
      {
        "code": "LITE",
        "name": "Lumentum",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 18040
      },
      {
        "code": "NVDA",
        "name": "NVIDIA",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 207
      }
    ],
    "topSold": [
      {
        "code": "SNOW",
        "name": "Snowflake",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -101200
      },
      {
        "code": "META",
        "name": "Meta",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -16800
      },
      {
        "code": "COIN",
        "name": "Coinbase",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -176
      },
      {
        "code": "TSLA",
        "name": "Tesla",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -125
      }
    ],
    "concentrationPct": 55.56,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
