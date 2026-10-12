/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-10-12T23:41:17.201Z",
  "date": "20261013",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.65,
          "shares": 7700000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.83,
          "shares": 7800000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.29,
          "shares": 1950000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.01,
          "shares": 1400000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.57,
          "shares": 1115000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.96,
          "shares": 2100000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.98,
          "shares": 930000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.91,
          "shares": 8800000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.84,
          "shares": 2900000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.62,
          "shares": 640000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": []
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.43,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.68,
          "shares": 249000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.03,
          "shares": 166000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.12,
          "shares": 79000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 625000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 404000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.67,
          "shares": 104000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.61,
          "shares": 2416000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 3.3,
          "shares": 103000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.3,
          "shares": 11824000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.81,
          "shares": 4650000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.07,
          "shares": 5086000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 8.06,
          "shares": 18721000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.04,
          "shares": 6062000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 6.14,
          "shares": 2502000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 5.26,
          "shares": 2504000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 5.13,
          "shares": 23519000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 4.82,
          "shares": 7389000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.58,
          "shares": 6264000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": [
          {
            "code": "6223",
            "name": "旺矽",
            "action": "增持",
            "sharesChange": 5000,
            "weightChange": 0.48
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "新增",
            "sharesChange": 6264000,
            "weightChange": 4.58
          },
          {
            "code": "8046",
            "name": "南電",
            "action": "剔除",
            "sharesChange": -8937000,
            "weightChange": -4.53
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 7.6,
          "shares": 1544000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.59,
          "shares": 736000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 6.41,
          "shares": 5709000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.44,
          "shares": 3745000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 4.48,
          "shares": 1016225
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 845000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 3.85,
          "shares": 2101000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 309000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.67,
          "shares": 179000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.57,
          "shares": 301000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": [
          {
            "code": "2383",
            "name": "台光電",
            "action": "新增",
            "sharesChange": 309000,
            "weightChange": 3.68
          },
          {
            "code": "6223",
            "name": "旺矽",
            "action": "新增",
            "sharesChange": 301000,
            "weightChange": 3.57
          },
          {
            "code": "3491",
            "name": "昇達科",
            "action": "剔除",
            "sharesChange": -1180000,
            "weightChange": -3.85
          },
          {
            "code": "4958",
            "name": "臻鼎-KY",
            "action": "剔除",
            "sharesChange": -3158000,
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
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.3,
          "shares": 176000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.27,
          "shares": 131000
        },
        {
          "code": "2881",
          "name": "富邦金",
          "exchange": "TW",
          "weightPct": 4.07,
          "shares": 2668000
        },
        {
          "code": "2887",
          "name": "台新新光金",
          "exchange": "TW",
          "weightPct": 3.34,
          "shares": 8082000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.21,
          "shares": 3078000
        },
        {
          "code": "2885",
          "name": "元大金",
          "exchange": "TW",
          "weightPct": 3.15,
          "shares": 4665880
        },
        {
          "code": "2882",
          "name": "國泰金",
          "exchange": "TW",
          "weightPct": 3.09,
          "shares": 2846000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 2.89,
          "shares": 991000
        },
        {
          "code": "6187",
          "name": "萬潤",
          "exchange": "TW",
          "weightPct": 2.53,
          "shares": 157000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.5,
          "shares": 361000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": [
          {
            "code": "6187",
            "name": "萬潤",
            "action": "新增",
            "sharesChange": 157000,
            "weightChange": 2.53
          },
          {
            "code": "2883",
            "name": "凱基金",
            "action": "剔除",
            "sharesChange": -6449000,
            "weightChange": -2.37
          }
        ]
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.02,
          "shares": 1112000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 4.28,
          "shares": 133000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.59,
          "shares": 3341000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.52,
          "shares": 99000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 3.18,
          "shares": 301000
        },
        {
          "code": "1216",
          "name": "統一",
          "exchange": "TW",
          "weightPct": 3.03,
          "shares": 8045000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.9,
          "shares": 95000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.84,
          "shares": 54000
        },
        {
          "code": "4904",
          "name": "遠傳",
          "exchange": "TW",
          "weightPct": 2.63,
          "shares": 5022000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 192000,
            "weightChange": 0.7
          },
          {
            "code": "7769",
            "name": "鴻勁",
            "action": "新增",
            "sharesChange": 133000,
            "weightChange": 4.28
          },
          {
            "code": "3036",
            "name": "文曄",
            "action": "新增",
            "sharesChange": 3341000,
            "weightChange": 3.59
          },
          {
            "code": "3653",
            "name": "健策",
            "action": "增持",
            "sharesChange": 15000,
            "weightChange": 0.1
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "增持",
            "sharesChange": 11000,
            "weightChange": -0.23
          },
          {
            "code": "1216",
            "name": "統一",
            "action": "增持",
            "sharesChange": 1738000,
            "weightChange": 0.32
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 15000,
            "weightChange": 0.17
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "新增",
            "sharesChange": 54000,
            "weightChange": 2.84
          },
          {
            "code": "2303",
            "name": "聯電",
            "action": "剔除",
            "sharesChange": -3113000,
            "weightChange": -2.61
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "剔除",
            "sharesChange": -126000,
            "weightChange": -2.46
          },
          {
            "code": "3491",
            "name": "昇達科",
            "action": "剔除",
            "sharesChange": -257000,
            "weightChange": -2.46
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.25,
          "shares": 90000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.21,
          "shares": 29000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.12,
          "shares": 52000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.99,
          "shares": 32000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.89,
          "shares": 116000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 5.26,
          "shares": 75000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.21,
          "shares": 18000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.26,
          "shares": 13000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 4.19,
          "shares": 44000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 3.65,
          "shares": 29800
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": []
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.75,
          "shares": 4200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 10.7,
          "shares": 1350000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 8.54,
          "shares": 5280000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 7.95,
          "shares": 11700000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.41,
          "shares": 470000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 6.31,
          "shares": 4620000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 6.31,
          "shares": 3400000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.26,
          "shares": 1050000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.45,
          "shares": 1250000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 4.76,
          "shares": 5800000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": []
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.74,
          "shares": 2482000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.55,
          "shares": 894000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.32,
          "shares": 475000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.14,
          "shares": 1116000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 6.07,
          "shares": 1630000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 5.92,
          "shares": 1161000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 5.66,
          "shares": 1227000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 4.65,
          "shares": 293000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.57,
          "shares": 344000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.03,
          "shares": 176000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 23000,
            "weightChange": -0.12
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 10000,
            "weightChange": 0.11
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "增持",
            "sharesChange": 23000,
            "weightChange": 0.11
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "增持",
            "sharesChange": 6000,
            "weightChange": 0.01
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.35,
          "shares": 341000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.27,
          "shares": 106000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.26,
          "shares": 518000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.73,
          "shares": 176000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.73,
          "shares": 464000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.48,
          "shares": 76000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 4.36,
          "shares": 25600
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 4.27,
          "shares": 195191
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 4.07,
          "shares": 244000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.89,
          "shares": 281000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": []
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.23,
          "shares": 254999
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.9,
          "shares": 51002
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.35,
          "shares": 230001
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.92,
          "shares": 79500
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 5.27,
          "shares": 138001
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.2,
          "shares": 51101
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.3,
          "shares": 31901
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.78,
          "shares": 24000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.02,
          "shares": 13001
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 95000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "減持",
            "sharesChange": -5000,
            "weightChange": -0.49
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "新增",
            "sharesChange": 13001,
            "weightChange": 3.02
          },
          {
            "code": "8046",
            "name": "南電",
            "action": "減持",
            "sharesChange": -30000,
            "weightChange": -0.98
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "剔除",
            "sharesChange": -22050,
            "weightChange": -3.98
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.91,
          "shares": 174000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.9,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.9,
          "shares": 74000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.46,
          "shares": 80000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.94,
          "shares": 170000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.76,
          "shares": 33000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.7,
          "shares": 38000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 4.21,
          "shares": 110000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.91,
          "shares": 85260
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 3.85,
          "shares": 81000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": []
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 9.18,
          "shares": 6972
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 7.16,
          "shares": 12688
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 5.38,
          "shares": 22116
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 4.94,
          "shares": 17399
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.77,
          "shares": 8253
        },
        {
          "code": "HOOD",
          "name": "Robinhood Markets",
          "exchange": "US",
          "weightPct": 4.48,
          "shares": 11908
        },
        {
          "code": "COIN",
          "name": "Coinbase",
          "exchange": "US",
          "weightPct": 4.47,
          "shares": 7397
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 3.86,
          "shares": 21782
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 3.79,
          "shares": 7089
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.71,
          "shares": 5311
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": [
          {
            "code": "PLTR",
            "name": "Palantir Technologies",
            "action": "新增",
            "sharesChange": 5311,
            "weightChange": 3.71
          },
          {
            "code": "AMD",
            "name": "AMD",
            "action": "剔除",
            "sharesChange": -1683,
            "weightChange": -3.75
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 7.92,
          "shares": 18000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.35,
          "shares": 5000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 5.76,
          "shares": 3000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.79,
          "shares": 1400
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.57,
          "shares": 800
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 4.51,
          "shares": 780
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.35,
          "shares": 3000
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 3.92,
          "shares": 2800
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.57,
          "shares": 1800
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 2.9,
          "shares": 450
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 8.19,
          "shares": 91359
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.81,
          "shares": 249100
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 5.02,
          "shares": 81400
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 4.59,
          "shares": 233100
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.32,
          "shares": 81379
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.52,
          "shares": 256528
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.33,
          "shares": 633000
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.18,
          "shares": 187342
        },
        {
          "code": "LRCX",
          "name": "Lam Research",
          "exchange": "US",
          "weightPct": 3.1,
          "shares": 113000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.77,
          "shares": 406000
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": []
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261013",
      "holdings": [
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 4.93,
          "shares": 18332
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.76,
          "shares": 17905
        },
        {
          "code": "4062",
          "name": "IBIDEN",
          "exchange": "JP",
          "weightPct": 4.43,
          "shares": 231528
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.29,
          "shares": 63557
        },
        {
          "code": "MRVL",
          "name": "Marvell",
          "exchange": "US",
          "weightPct": 3.97,
          "shares": 56385
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.67,
          "shares": 360000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.46,
          "shares": 58576
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.37,
          "shares": 21148
        },
        {
          "code": "SNDK",
          "name": "Sandisk",
          "exchange": "US",
          "weightPct": 3,
          "shares": 7258
        },
        {
          "code": "AMAT",
          "name": "Applied Materials",
          "exchange": "US",
          "weightPct": 2.75,
          "shares": 21050
        }
      ],
      "diff": {
        "prevAsOf": "20261012",
        "changes": [
          {
            "code": "AMAT",
            "name": "Applied Materials",
            "action": "新增",
            "sharesChange": 21050,
            "weightChange": 2.75
          },
          {
            "code": "INTC",
            "name": "Intel",
            "action": "剔除",
            "sharesChange": -100161,
            "weightChange": -2.84
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 18,
    "topBought": [
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 3,
        "fundsDown": 0,
        "totalSharesChange": 6298000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 3,
        "fundsDown": 0,
        "totalSharesChange": 334000
      },
      {
        "code": "2059",
        "name": "川湖",
        "fundsUp": 3,
        "fundsDown": 0,
        "totalSharesChange": 73001
      },
      {
        "code": "6223",
        "name": "旺矽",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 306000
      },
      {
        "code": "3036",
        "name": "文曄",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 3341000
      },
      {
        "code": "1216",
        "name": "統一",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 1738000
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 192000
      },
      {
        "code": "6187",
        "name": "萬潤",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 157000
      },
      {
        "code": "7769",
        "name": "鴻勁",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 133000
      },
      {
        "code": "3653",
        "name": "健策",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 15000
      }
    ],
    "topSold": [
      {
        "code": "8046",
        "name": "南電",
        "fundsUp": 0,
        "fundsDown": 2,
        "totalSharesChange": -8967000
      },
      {
        "code": "3491",
        "name": "昇達科",
        "fundsUp": 0,
        "fundsDown": 2,
        "totalSharesChange": -1437000
      },
      {
        "code": "2883",
        "name": "凱基金",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -6449000
      },
      {
        "code": "4958",
        "name": "臻鼎-KY",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -3158000
      },
      {
        "code": "2303",
        "name": "聯電",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -3113000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -103000
      },
      {
        "code": "3443",
        "name": "創意",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -22050
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -5000
      }
    ],
    "concentrationPct": 46.43,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 4,
    "topBought": [
      {
        "code": "AMAT",
        "name": "Applied Materials",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 21050
      },
      {
        "code": "PLTR",
        "name": "Palantir Technologies",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 5311
      }
    ],
    "topSold": [
      {
        "code": "INTC",
        "name": "Intel",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -100161
      },
      {
        "code": "AMD",
        "name": "AMD",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -1683
      }
    ],
    "concentrationPct": 100,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
