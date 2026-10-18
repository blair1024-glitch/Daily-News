/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-10-18T23:43:09.438Z",
  "date": "20261019",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.17,
          "shares": 7700000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.8,
          "shares": 7000000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.7,
          "shares": 1115000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.49,
          "shares": 1700000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.39,
          "shares": 2140000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.71,
          "shares": 1200000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 8800000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.72,
          "shares": 655000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 930000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.6,
          "shares": 2900000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 40000,
            "weightChange": 0.45
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "減持",
            "sharesChange": -200000,
            "weightChange": -0.76
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.73,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.65,
          "shares": 249000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.58,
          "shares": 166000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.2,
          "shares": 79000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.96,
          "shares": 2416000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.74,
          "shares": 104000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.64,
          "shares": 625000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.53,
          "shares": 404000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.91,
          "shares": 103000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.62,
          "shares": 1096000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.84,
          "shares": 12188000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.21,
          "shares": 4328000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.03,
          "shares": 5143000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.76,
          "shares": 19386000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.68,
          "shares": 6303000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 6.19,
          "shares": 2502000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 4.9,
          "shares": 23519000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.79,
          "shares": 2504000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.56,
          "shares": 6264000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 4.51,
          "shares": 7507000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 57000,
            "weightChange": 0.04
          },
          {
            "code": "3037",
            "name": "欣興",
            "action": "增持",
            "sharesChange": 448000,
            "weightChange": 0.08
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 156000,
            "weightChange": 0.53
          },
          {
            "code": "2308",
            "name": "台達電",
            "action": "增持",
            "sharesChange": 118000,
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
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 7.87,
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
          "weightPct": 6.02,
          "shares": 5709000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.34,
          "shares": 3745000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.95,
          "shares": 1016225
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 3.92,
          "shares": 2110000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 3.7,
          "shares": 3158000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.62,
          "shares": 1180000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 3.56,
          "shares": 845000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.38,
          "shares": 251000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": [
          {
            "code": "6531",
            "name": "愛普*",
            "action": "增持",
            "sharesChange": 9000,
            "weightChange": 0.2
          },
          {
            "code": "3491",
            "name": "昇達科",
            "action": "新增",
            "sharesChange": 1180000,
            "weightChange": 3.62
          },
          {
            "code": "6223",
            "name": "旺矽",
            "action": "剔除",
            "sharesChange": -301000,
            "weightChange": -3.4
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2881",
          "name": "富邦金",
          "exchange": "TW",
          "weightPct": 4.31,
          "shares": 2851000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.27,
          "shares": 138000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.18,
          "shares": 185000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.76,
          "shares": 3291000
        },
        {
          "code": "2887",
          "name": "台新新光金",
          "exchange": "TW",
          "weightPct": 3.42,
          "shares": 8631000
        },
        {
          "code": "2885",
          "name": "元大金",
          "exchange": "TW",
          "weightPct": 3.38,
          "shares": 4973880
        },
        {
          "code": "2882",
          "name": "國泰金",
          "exchange": "TW",
          "weightPct": 3.29,
          "shares": 3038000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 2.99,
          "shares": 1043000
        },
        {
          "code": "2883",
          "name": "凱基金",
          "exchange": "TW",
          "weightPct": 2.48,
          "shares": 6789000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.47,
          "shares": 386000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": []
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 12.77,
          "shares": 1680000
        },
        {
          "code": "1216",
          "name": "統一",
          "exchange": "TW",
          "weightPct": 3.61,
          "shares": 14442000
        },
        {
          "code": "4904",
          "name": "遠傳",
          "exchange": "TW",
          "weightPct": 3.26,
          "shares": 9139000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.09,
          "shares": 146000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.66,
          "shares": 160000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.65,
          "shares": 163000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 2.41,
          "shares": 3650000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 2.35,
          "shares": 378000
        },
        {
          "code": "6446",
          "name": "藥華藥",
          "exchange": "TW",
          "weightPct": 2.15,
          "shares": 550000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.13,
          "shares": 68000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": [
          {
            "code": "1216",
            "name": "統一",
            "action": "增持",
            "sharesChange": 1441000,
            "weightChange": -0.11
          },
          {
            "code": "4904",
            "name": "遠傳",
            "action": "增持",
            "sharesChange": 994000,
            "weightChange": -0.05
          },
          {
            "code": "6446",
            "name": "藥華藥",
            "action": "新增",
            "sharesChange": 550000,
            "weightChange": 2.15
          },
          {
            "code": "3081",
            "name": "聯亞",
            "action": "剔除",
            "sharesChange": -236000,
            "weightChange": -2.24
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.53,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.54,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.55,
          "shares": 29000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.53,
          "shares": 116000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.3,
          "shares": 18000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 5.3,
          "shares": 75000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.02,
          "shares": 27000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.25,
          "shares": 13000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 3.88,
          "shares": 44000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.54,
          "shares": 36000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": [
          {
            "code": "6805",
            "name": "富世達",
            "action": "新增",
            "sharesChange": 36000,
            "weightChange": 3.54
          },
          {
            "code": "3081",
            "name": "聯亞",
            "action": "剔除",
            "sharesChange": -29800,
            "weightChange": -3.54
          }
        ]
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.34,
          "shares": 4200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.84,
          "shares": 1350000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 8.23,
          "shares": 5350000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 7.39,
          "shares": 11700000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.6,
          "shares": 470000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 6.52,
          "shares": 4620000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 6.5,
          "shares": 3400000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.29,
          "shares": 1050000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.85,
          "shares": 1250000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 4.64,
          "shares": 5800000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": []
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.42,
          "shares": 921000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 5.94,
          "shares": 1166000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.69,
          "shares": 2482000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.49,
          "shares": 1663000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 5.26,
          "shares": 1241000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 5.23,
          "shares": 1255000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.16,
          "shares": 475000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 4.35,
          "shares": 323000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.99,
          "shares": 364000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.83,
          "shares": 183000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": []
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.47,
          "shares": 333000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.13,
          "shares": 113000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.13,
          "shares": 176000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.03,
          "shares": 526000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.88,
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
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 4.23,
          "shares": 249000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.16,
          "shares": 76000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4,
          "shares": 281000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.54,
          "shares": 45000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": []
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.66,
          "shares": 260999
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.53,
          "shares": 51002
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.8,
          "shares": 55101
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.55,
          "shares": 67500
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 5.52,
          "shares": 138002
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.05,
          "shares": 187001
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.5,
          "shares": 27000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.11,
          "shares": 31901
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.19,
          "shares": 95000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 2.97,
          "shares": 120000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 4000,
            "weightChange": 0.5
          },
          {
            "code": "3189",
            "name": "景碩",
            "action": "新增",
            "sharesChange": 120000,
            "weightChange": 2.97
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "剔除",
            "sharesChange": -16050,
            "weightChange": -3.07
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.33,
          "shares": 174000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.22,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.95,
          "shares": 74000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.86,
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
          "weightPct": 4.91,
          "shares": 33000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.37,
          "shares": 38000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.98,
          "shares": 110000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 3.72,
          "shares": 85000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 3.61,
          "shares": 81000
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": []
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.76,
          "shares": 6728
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 6.78,
          "shares": 12688
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 5.66,
          "shares": 22116
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 5.44,
          "shares": 17399
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 5.29,
          "shares": 8253
        },
        {
          "code": "COIN",
          "name": "Coinbase",
          "exchange": "US",
          "weightPct": 4.89,
          "shares": 7397
        },
        {
          "code": "HOOD",
          "name": "Robinhood Markets",
          "exchange": "US",
          "weightPct": 4.04,
          "shares": 10801
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 3.82,
          "shares": 20609
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 3.68,
          "shares": 7089
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.4,
          "shares": 1683
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": [
          {
            "code": "TSLA",
            "name": "Tesla",
            "action": "減持",
            "sharesChange": -76,
            "weightChange": -0.25
          },
          {
            "code": "AMD",
            "name": "AMD",
            "action": "新增",
            "sharesChange": 1683,
            "weightChange": 3.4
          },
          {
            "code": "PLTR",
            "name": "Palantir Technologies",
            "action": "剔除",
            "sharesChange": -5311,
            "weightChange": -3.86
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.11,
          "shares": 18000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.51,
          "shares": 5000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 6.27,
          "shares": 3000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.71,
          "shares": 1400
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.46,
          "shares": 800
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.39,
          "shares": 3000
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.27,
          "shares": 2800
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 4.06,
          "shares": 780
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.71,
          "shares": 1800
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 3.37,
          "shares": 450
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 5.66,
          "shares": 81400
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 5.42,
          "shares": 65999
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 4.78,
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
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.12,
          "shares": 80920
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 4.06,
          "shares": 214442
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 4.05,
          "shares": 181300
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.6,
          "shares": 256528
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 3.43,
          "shares": 204100
        },
        {
          "code": "SNOW",
          "name": "Snowflake",
          "exchange": "US",
          "weightPct": 3.2,
          "shares": 101200
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": [
          {
            "code": "LITE",
            "name": "Lumentum",
            "action": "減持",
            "sharesChange": -25360,
            "weightChange": -2.09
          },
          {
            "code": "BE",
            "name": "Bloom Energy",
            "action": "減持",
            "sharesChange": -67800,
            "weightChange": -1.41
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261019",
      "holdings": [
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.44,
          "shares": 63557
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 4.08,
          "shares": 41772
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 3.98,
          "shares": 16015
        },
        {
          "code": "MRVL",
          "name": "Marvell",
          "exchange": "US",
          "weightPct": 3.89,
          "shares": 56385
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.64,
          "shares": 58576
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.57,
          "shares": 13432
        },
        {
          "code": "DT",
          "name": "Dynatrace",
          "exchange": "US",
          "weightPct": 3.5,
          "shares": 191966
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.41,
          "shares": 360000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.4,
          "shares": 21148
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.24,
          "shares": 21042
        }
      ],
      "diff": {
        "prevAsOf": "20261016",
        "changes": [
          {
            "code": "AAPL",
            "name": "Apple",
            "action": "增持",
            "sharesChange": 8376,
            "weightChange": 0.9
          },
          {
            "code": "MSFT",
            "name": "Microsoft",
            "action": "新增",
            "sharesChange": 21042,
            "weightChange": 3.24
          },
          {
            "code": "4062",
            "name": "IBIDEN",
            "action": "剔除",
            "sharesChange": -231528,
            "weightChange": -4.26
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 15,
    "topBought": [
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 196000
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 61000
      },
      {
        "code": "1216",
        "name": "統一",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 1441000
      },
      {
        "code": "3491",
        "name": "昇達科",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 1180000
      },
      {
        "code": "4904",
        "name": "遠傳",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 994000
      },
      {
        "code": "6446",
        "name": "藥華藥",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 550000
      },
      {
        "code": "3037",
        "name": "欣興",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 448000
      },
      {
        "code": "3189",
        "name": "景碩",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 120000
      },
      {
        "code": "2308",
        "name": "台達電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 118000
      },
      {
        "code": "6805",
        "name": "富世達",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 36000
      }
    ],
    "topSold": [
      {
        "code": "3081",
        "name": "聯亞",
        "fundsUp": 0,
        "fundsDown": 2,
        "totalSharesChange": -265800
      },
      {
        "code": "6223",
        "name": "旺矽",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -301000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -200000
      },
      {
        "code": "3443",
        "name": "創意",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -16050
      }
    ],
    "concentrationPct": 44.44,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 8,
    "topBought": [
      {
        "code": "MSFT",
        "name": "Microsoft",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 21042
      },
      {
        "code": "AAPL",
        "name": "Apple",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 8376
      },
      {
        "code": "AMD",
        "name": "AMD",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 1683
      }
    ],
    "topSold": [
      {
        "code": "4062",
        "name": "IBIDEN",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -231528
      },
      {
        "code": "BE",
        "name": "Bloom Energy",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -67800
      },
      {
        "code": "LITE",
        "name": "Lumentum",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -25360
      },
      {
        "code": "PLTR",
        "name": "Palantir Technologies",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -5311
      },
      {
        "code": "TSLA",
        "name": "Tesla",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -76
      }
    ],
    "concentrationPct": 62.5,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
