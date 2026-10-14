/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-10-14T23:40:52.846Z",
  "date": "20261015",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.75,
          "shares": 7700000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.26,
          "shares": 1950000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.95,
          "shares": 7000000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.65,
          "shares": 1115000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.54,
          "shares": 1400000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.99,
          "shares": 2100000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.96,
          "shares": 8800000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.93,
          "shares": 930000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 655000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.71,
          "shares": 2900000
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": [
          {
            "code": "3443",
            "name": "創意",
            "action": "增持",
            "sharesChange": 15000,
            "weightChange": 0.14
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.49,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.64,
          "shares": 249000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.64,
          "shares": 166000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.27,
          "shares": 2416000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4,
          "shares": 79000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.75,
          "shares": 625000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.72,
          "shares": 104000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.65,
          "shares": 404000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 103000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.67,
          "shares": 1096000
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.73,
          "shares": 12188000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.45,
          "shares": 4328000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.05,
          "shares": 5086000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.85,
          "shares": 18721000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.21,
          "shares": 6147000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 6.26,
          "shares": 2502000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 5.22,
          "shares": 23519000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 5.21,
          "shares": 2504000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 4.66,
          "shares": 7389000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.54,
          "shares": 6264000
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": [
          {
            "code": "2345",
            "name": "智邦",
            "action": "新增",
            "sharesChange": 6264000,
            "weightChange": 4.54
          },
          {
            "code": "8046",
            "name": "南電",
            "action": "剔除",
            "sharesChange": -8937000,
            "weightChange": -4.57
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 7.68,
          "shares": 1544000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.58,
          "shares": 736000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 6.35,
          "shares": 5709000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.39,
          "shares": 3745000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 4.3,
          "shares": 1016225
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 3.88,
          "shares": 2101000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 3.8,
          "shares": 845000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 3.58,
          "shares": 3158000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.54,
          "shares": 301000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.45,
          "shares": 251000
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": [
          {
            "code": "4958",
            "name": "臻鼎-KY",
            "action": "新增",
            "sharesChange": 3158000,
            "weightChange": 3.58
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "剔除",
            "sharesChange": -179000,
            "weightChange": -3.62
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2881",
          "name": "富邦金",
          "exchange": "TW",
          "weightPct": 4.2,
          "shares": 2784000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.2,
          "shares": 135000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.19,
          "shares": 180000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.45,
          "shares": 3078000
        },
        {
          "code": "2887",
          "name": "台新新光金",
          "exchange": "TW",
          "weightPct": 3.38,
          "shares": 8427000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.34,
          "shares": 1018000
        },
        {
          "code": "2885",
          "name": "元大金",
          "exchange": "TW",
          "weightPct": 3.29,
          "shares": 4856880
        },
        {
          "code": "2882",
          "name": "國泰金",
          "exchange": "TW",
          "weightPct": 3.18,
          "shares": 2967000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.53,
          "shares": 377000
        },
        {
          "code": "2883",
          "name": "凱基金",
          "exchange": "TW",
          "weightPct": 2.41,
          "shares": 6629000
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": [
          {
            "code": "2883",
            "name": "凱基金",
            "action": "新增",
            "sharesChange": 6629000,
            "weightChange": 2.41
          },
          {
            "code": "6187",
            "name": "萬潤",
            "action": "剔除",
            "sharesChange": -162000,
            "weightChange": -2.47
          }
        ]
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.81,
          "shares": 1430000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 134000
        },
        {
          "code": "1216",
          "name": "統一",
          "exchange": "TW",
          "weightPct": 3.53,
          "shares": 11645000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.45,
          "shares": 161000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 3.12,
          "shares": 139000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 3650000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 378000
        },
        {
          "code": "4904",
          "name": "遠傳",
          "exchange": "TW",
          "weightPct": 2.9,
          "shares": 6914000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.64,
          "shares": 68000
        },
        {
          "code": "1605",
          "name": "華新",
          "exchange": "TW",
          "weightPct": 2.18,
          "shares": 13839000
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 14000,
            "weightChange": -1
          },
          {
            "code": "3653",
            "name": "健策",
            "action": "增持",
            "sharesChange": 15000,
            "weightChange": 0.19
          },
          {
            "code": "1216",
            "name": "統一",
            "action": "增持",
            "sharesChange": 1252000,
            "weightChange": 0.16
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 9000,
            "weightChange": -0.09
          },
          {
            "code": "1605",
            "name": "華新",
            "action": "新增",
            "sharesChange": 13839000,
            "weightChange": 2.18
          },
          {
            "code": "2376",
            "name": "技嘉",
            "action": "剔除",
            "sharesChange": -1435000,
            "weightChange": -2.14
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.4,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.23,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.71,
          "shares": 29000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.01,
          "shares": 32000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.76,
          "shares": 116000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 5.46,
          "shares": 75000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.34,
          "shares": 18000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.5,
          "shares": 13000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 4.12,
          "shares": 44000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 3.6,
          "shares": 29800
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": [
          {
            "code": "3081",
            "name": "聯亞",
            "action": "新增",
            "sharesChange": 29800,
            "weightChange": 3.6
          },
          {
            "code": "6510",
            "name": "精測",
            "action": "剔除",
            "sharesChange": -25000,
            "weightChange": -3.46
          }
        ]
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.95,
          "shares": 4200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.94,
          "shares": 1350000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 8.45,
          "shares": 5350000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 7.5,
          "shares": 11700000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 6.48,
          "shares": 3400000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 6.47,
          "shares": 4620000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.27,
          "shares": 470000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.27,
          "shares": 1050000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.53,
          "shares": 1250000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 4.85,
          "shares": 5800000
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": []
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.51,
          "shares": 921000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.27,
          "shares": 2482000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.19,
          "shares": 1166000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.98,
          "shares": 1663000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 5.92,
          "shares": 1241000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.59,
          "shares": 475000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 5.49,
          "shares": 1255000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 4.74,
          "shares": 323000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.57,
          "shares": 364000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.91,
          "shares": 183000
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": []
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.2,
          "shares": 333000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.17,
          "shares": 113000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.17,
          "shares": 526000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.77,
          "shares": 176000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.82,
          "shares": 464000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 4.43,
          "shares": 25600
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.43,
          "shares": 76000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 4.28,
          "shares": 249000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.98,
          "shares": 281000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.67,
          "shares": 45000
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": []
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.04,
          "shares": 260999
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.52,
          "shares": 51002
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.1,
          "shares": 79500
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.68,
          "shares": 207001
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 5.54,
          "shares": 138002
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.29,
          "shares": 51101
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.42,
          "shares": 27000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.35,
          "shares": 31901
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.15,
          "shares": 95000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 16050
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 6000,
            "weightChange": 0.39
          },
          {
            "code": "6274",
            "name": "台燿",
            "action": "增持",
            "sharesChange": 1,
            "weightChange": 0.28
          },
          {
            "code": "3653",
            "name": "健策",
            "action": "增持",
            "sharesChange": 3000,
            "weightChange": 0.55
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.02,
          "shares": 174000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.31,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.93,
          "shares": 74000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.55,
          "shares": 80000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.09,
          "shares": 170000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.88,
          "shares": 33000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.68,
          "shares": 38000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 4.11,
          "shares": 110000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 81000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.77,
          "shares": 85260
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": []
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.95,
          "shares": 6804
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 6.96,
          "shares": 12688
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 5.29,
          "shares": 22116
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 5.14,
          "shares": 17399
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 5.11,
          "shares": 8253
        },
        {
          "code": "COIN",
          "name": "Coinbase",
          "exchange": "US",
          "weightPct": 4.71,
          "shares": 7397
        },
        {
          "code": "HOOD",
          "name": "Robinhood Markets",
          "exchange": "US",
          "weightPct": 4.19,
          "shares": 10801
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.89,
          "shares": 5311
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 3.76,
          "shares": 7089
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 3.62,
          "shares": 20609
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": [
          {
            "code": "TSLA",
            "name": "Tesla",
            "action": "減持",
            "sharesChange": -168,
            "weightChange": -0.2
          },
          {
            "code": "HOOD",
            "name": "Robinhood Markets",
            "action": "減持",
            "sharesChange": -1107,
            "weightChange": -0.34
          },
          {
            "code": "CRSP",
            "name": "CRISPR Therapeutics",
            "action": "減持",
            "sharesChange": -1173,
            "weightChange": -0.29
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 7.78,
          "shares": 18000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.39,
          "shares": 5000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 5.93,
          "shares": 3000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.74,
          "shares": 1400
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.38,
          "shares": 3000
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 4.31,
          "shares": 780
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.26,
          "shares": 800
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.05,
          "shares": 2800
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.59,
          "shares": 1800
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.04,
          "shares": 1000
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 7.96,
          "shares": 91359
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.79,
          "shares": 249100
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 5.47,
          "shares": 81400
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 4.7,
          "shares": 233100
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.34,
          "shares": 81379
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.88,
          "shares": 80920
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.54,
          "shares": 256528
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.45,
          "shares": 187342
        },
        {
          "code": "SNOW",
          "name": "Snowflake",
          "exchange": "US",
          "weightPct": 3.19,
          "shares": 101200
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 3.18,
          "shares": 204100
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": [
          {
            "code": "MSFT",
            "name": "Microsoft",
            "action": "增持",
            "sharesChange": 10560,
            "weightChange": 0.58
          },
          {
            "code": "SNOW",
            "name": "Snowflake",
            "action": "新增",
            "sharesChange": 101200,
            "weightChange": 3.19
          },
          {
            "code": "2308",
            "name": "台達電",
            "action": "剔除",
            "sharesChange": -633000,
            "weightChange": -3.27
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261015",
      "holdings": [
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.44,
          "shares": 63557
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 4.23,
          "shares": 16015
        },
        {
          "code": "4062",
          "name": "IBIDEN",
          "exchange": "JP",
          "weightPct": 4.16,
          "shares": 231528
        },
        {
          "code": "MRVL",
          "name": "Marvell",
          "exchange": "US",
          "weightPct": 4.05,
          "shares": 56385
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.58,
          "shares": 58576
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.53,
          "shares": 360000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.43,
          "shares": 21148
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.43,
          "shares": 13432
        },
        {
          "code": "DT",
          "name": "Dynatrace",
          "exchange": "US",
          "weightPct": 3.31,
          "shares": 191966
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.06,
          "shares": 21042
        }
      ],
      "diff": {
        "prevAsOf": "20261014",
        "changes": [
          {
            "code": "LITE",
            "name": "Lumentum",
            "action": "減持",
            "sharesChange": -2317,
            "weightChange": -0.54
          },
          {
            "code": "MU",
            "name": "Micron",
            "action": "減持",
            "sharesChange": -4473,
            "weightChange": -1.2
          },
          {
            "code": "DT",
            "name": "Dynatrace",
            "action": "增持",
            "sharesChange": 17865,
            "weightChange": 0.34
          },
          {
            "code": "MSFT",
            "name": "Microsoft",
            "action": "新增",
            "sharesChange": 21042,
            "weightChange": 3.06
          },
          {
            "code": "SNDK",
            "name": "Sandisk",
            "action": "剔除",
            "sharesChange": -7258,
            "weightChange": -2.82
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 16,
    "topBought": [
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 20000
      },
      {
        "code": "3653",
        "name": "健策",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 18000
      },
      {
        "code": "1605",
        "name": "華新",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 13839000
      },
      {
        "code": "2883",
        "name": "凱基金",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 6629000
      },
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 6264000
      },
      {
        "code": "4958",
        "name": "臻鼎-KY",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 3158000
      },
      {
        "code": "1216",
        "name": "統一",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 1252000
      },
      {
        "code": "3081",
        "name": "聯亞",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 29800
      },
      {
        "code": "3443",
        "name": "創意",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 15000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 9000
      }
    ],
    "topSold": [
      {
        "code": "8046",
        "name": "南電",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -8937000
      },
      {
        "code": "2376",
        "name": "技嘉",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -1435000
      },
      {
        "code": "2059",
        "name": "川湖",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -179000
      },
      {
        "code": "6187",
        "name": "萬潤",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -162000
      },
      {
        "code": "6510",
        "name": "精測",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -25000
      }
    ],
    "concentrationPct": 38.89,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 10,
    "topBought": [
      {
        "code": "MSFT",
        "name": "Microsoft",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 31602
      },
      {
        "code": "SNOW",
        "name": "Snowflake",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 101200
      },
      {
        "code": "DT",
        "name": "Dynatrace",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 17865
      }
    ],
    "topSold": [
      {
        "code": "2308",
        "name": "台達電",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -633000
      },
      {
        "code": "SNDK",
        "name": "Sandisk",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -7258
      },
      {
        "code": "MU",
        "name": "Micron",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -4473
      },
      {
        "code": "LITE",
        "name": "Lumentum",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -2317
      },
      {
        "code": "CRSP",
        "name": "CRISPR Therapeutics",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -1173
      },
      {
        "code": "HOOD",
        "name": "Robinhood Markets",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -1107
      },
      {
        "code": "TSLA",
        "name": "Tesla",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -168
      }
    ],
    "concentrationPct": 54.55,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
