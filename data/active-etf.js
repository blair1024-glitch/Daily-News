/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-02T23:42:30.904Z",
  "date": "20261103",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.3,
          "shares": 7700000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.78,
          "shares": 2370000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.72,
          "shares": 7200000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.19,
          "shares": 1030000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5,
          "shares": 1580000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.5,
          "shares": 1200000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.12,
          "shares": 710000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.5,
          "shares": 8800000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.45,
          "shares": 930000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 3.23,
          "shares": 4450000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "3653",
            "name": "健策",
            "action": "增持",
            "sharesChange": 30000,
            "weightChange": 0.12
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 50000,
            "weightChange": 0.19
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261103",
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
          "weightPct": 5.48,
          "shares": 249000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.13,
          "shares": 79000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.76,
          "shares": 144000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.53,
          "shares": 2117000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.46,
          "shares": 625000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.41,
          "shares": 2453000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.15,
          "shares": 90000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.04,
          "shares": 404000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "2408",
            "name": "南亞科",
            "action": "剔除",
            "sharesChange": -967000,
            "weightChange": -2.46
          }
        ]
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 11.86,
          "shares": 13728000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.06,
          "shares": 5478000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.55,
          "shares": 4328000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.5,
          "shares": 6616000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.29,
          "shares": 19739000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.88,
          "shares": 2512000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 4.35,
          "shares": 23519000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.32,
          "shares": 2504000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.95,
          "shares": 8987000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.86,
          "shares": 15442000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 477000,
            "weightChange": 0.02
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 111000,
            "weightChange": 0.14
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "新增",
            "sharesChange": 15442000,
            "weightChange": 3.86
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "剔除",
            "sharesChange": -6331000,
            "weightChange": -3.86
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 9.14,
          "shares": 7059000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.25,
          "shares": 1609000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.88,
          "shares": 787000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.25,
          "shares": 3745000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 3.92,
          "shares": 2300000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 3.59,
          "shares": 951000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 3.39,
          "shares": 3158000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.38,
          "shares": 1180000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.2,
          "shares": 309000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.08,
          "shares": 301000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 1000,
            "weightChange": 0.1
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.86,
          "shares": 3794000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.75,
          "shares": 124000
        },
        {
          "code": "2881",
          "name": "富邦金",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 1943000
        },
        {
          "code": "2882",
          "name": "國泰金",
          "exchange": "TW",
          "weightPct": 3.02,
          "shares": 2636000
        },
        {
          "code": "2887",
          "name": "台新新光金",
          "exchange": "TW",
          "weightPct": 2.82,
          "shares": 6848000
        },
        {
          "code": "2885",
          "name": "元大金",
          "exchange": "TW",
          "weightPct": 2.74,
          "shares": 3871880
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.63,
          "shares": 114000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.53,
          "shares": 931000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.32,
          "shares": 3195000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 2.24,
          "shares": 249000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "6505",
            "name": "台塑化",
            "action": "增持",
            "sharesChange": 503000,
            "weightChange": 0.68
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "減持",
            "sharesChange": -14000,
            "weightChange": -0.45
          },
          {
            "code": "2881",
            "name": "富邦金",
            "action": "減持",
            "sharesChange": -908000,
            "weightChange": -1.5
          },
          {
            "code": "2882",
            "name": "國泰金",
            "action": "減持",
            "sharesChange": -402000,
            "weightChange": -0.44
          },
          {
            "code": "2887",
            "name": "台新新光金",
            "action": "減持",
            "sharesChange": -1783000,
            "weightChange": -0.76
          },
          {
            "code": "2885",
            "name": "元大金",
            "action": "減持",
            "sharesChange": -1102000,
            "weightChange": -0.81
          },
          {
            "code": "2330",
            "name": "台積電",
            "action": "減持",
            "sharesChange": -71000,
            "weightChange": -1.68
          },
          {
            "code": "2603",
            "name": "長榮",
            "action": "新增",
            "sharesChange": 931000,
            "weightChange": 2.53
          },
          {
            "code": "1326",
            "name": "台化",
            "action": "新增",
            "sharesChange": 3195000,
            "weightChange": 2.32
          },
          {
            "code": "3189",
            "name": "景碩",
            "action": "新增",
            "sharesChange": 249000,
            "weightChange": 2.24
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "剔除",
            "sharesChange": -1043000,
            "weightChange": -3.03
          },
          {
            "code": "2395",
            "name": "研華",
            "action": "剔除",
            "sharesChange": -386000,
            "weightChange": -2.58
          },
          {
            "code": "2890",
            "name": "永豐金",
            "action": "剔除",
            "sharesChange": -5612000,
            "weightChange": -2.57
          }
        ]
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.74,
          "shares": 1680000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.24,
          "shares": 146000
        },
        {
          "code": "6446",
          "name": "藥華藥",
          "exchange": "TW",
          "weightPct": 2.98,
          "shares": 713000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 2.97,
          "shares": 4137000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 2.96,
          "shares": 463036
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.9,
          "shares": 168000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.84,
          "shares": 172000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.63,
          "shares": 553000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 2.4,
          "shares": 424000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.25,
          "shares": 68000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": []
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.97,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.57,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.49,
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
          "weightPct": 5.41,
          "shares": 18000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.1,
          "shares": 27000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.5,
          "shares": 13000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 4.32,
          "shares": 75000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 4.02,
          "shares": 36000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 3.42,
          "shares": 29800
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "3081",
            "name": "聯亞",
            "action": "新增",
            "sharesChange": 29800,
            "weightChange": 3.42
          },
          {
            "code": "3665",
            "name": "貿聯-KY",
            "action": "剔除",
            "sharesChange": -44000,
            "weightChange": -3.4
          }
        ]
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.52,
          "shares": 4200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.43,
          "shares": 1350000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 8,
          "shares": 5410000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 7.93,
          "shares": 11700000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.78,
          "shares": 485000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.58,
          "shares": 1450000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 6.28,
          "shares": 4650000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.27,
          "shares": 1065000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 6.24,
          "shares": 3550000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 5,
          "shares": 11200000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "3037",
            "name": "欣興",
            "action": "增持",
            "sharesChange": 60000,
            "weightChange": 0.14
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 20000,
            "weightChange": 0
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 15000,
            "weightChange": 0.16
          },
          {
            "code": "8046",
            "name": "南電",
            "action": "增持",
            "sharesChange": 50000,
            "weightChange": 0.05
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 200000,
            "weightChange": 0.16
          }
        ]
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.55,
          "shares": 1246000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.36,
          "shares": 921000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.04,
          "shares": 2682000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.94,
          "shares": 1743000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.36,
          "shares": 505000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.94,
          "shares": 1355000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 4.92,
          "shares": 1341000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 4,
          "shares": 323000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.96,
          "shares": 12620868
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.89,
          "shares": 183000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "1815",
            "name": "富喬",
            "action": "新增",
            "sharesChange": 12620868,
            "weightChange": 3.96
          },
          {
            "code": "6223",
            "name": "旺矽",
            "action": "剔除",
            "sharesChange": -364000,
            "weightChange": -3.8
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.9,
          "shares": 342000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 6.03,
          "shares": 74000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 5.74,
          "shares": 564000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 5.38,
          "shares": 1598000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 4.82,
          "shares": 27600
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.78,
          "shares": 429000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.52,
          "shares": 86000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.93,
          "shares": 115000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 3.24,
          "shares": 120000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 69000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": []
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.61,
          "shares": 244000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.57,
          "shares": 51002
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.33,
          "shares": 75500
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.99,
          "shares": 55101
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.68,
          "shares": 208001
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.67,
          "shares": 27000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.07,
          "shares": 31901
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 3.91,
          "shares": 118002
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.35,
          "shares": 13001
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.08,
          "shares": 95000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "8046",
            "name": "南電",
            "action": "新增",
            "sharesChange": 95000,
            "weightChange": 3.08
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "剔除",
            "sharesChange": -15050,
            "weightChange": -3.13
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.26,
          "shares": 163000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.25,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.77,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.96,
          "shares": 80000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.08,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.91,
          "shares": 170000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.31,
          "shares": 38000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.56,
          "shares": 217000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.35,
          "shares": 138000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 3.35,
          "shares": 8800
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 5000,
            "weightChange": 0.53
          }
        ]
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 9.61,
          "shares": 6289
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 6.51,
          "shares": 12688
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 6.08,
          "shares": 22116
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.95,
          "shares": 8253
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 4.21,
          "shares": 15243
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 4.12,
          "shares": 7089
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 4.03,
          "shares": 20609
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 3.77,
          "shares": 4126
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.73,
          "shares": 4788
        },
        {
          "code": "COIN",
          "name": "Coinbase",
          "exchange": "US",
          "weightPct": 3.46,
          "shares": 6333
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "TSLA",
            "name": "Tesla",
            "action": "減持",
            "sharesChange": -71,
            "weightChange": 0.57
          },
          {
            "code": "CRCL",
            "name": "Circle",
            "action": "減持",
            "sharesChange": -356,
            "weightChange": -0.19
          },
          {
            "code": "AMZN",
            "name": "Amazon",
            "action": "新增",
            "sharesChange": 4126,
            "weightChange": 3.77
          },
          {
            "code": "COIN",
            "name": "Coinbase",
            "action": "減持",
            "sharesChange": -531,
            "weightChange": -0.43
          },
          {
            "code": "TXG",
            "name": "10x Genomics",
            "action": "剔除",
            "sharesChange": -12592,
            "weightChange": -3.62
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.29,
          "shares": 18000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.48,
          "shares": 5000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 5.32,
          "shares": 3000
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.76,
          "shares": 3000
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.49,
          "shares": 800
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.48,
          "shares": 1400
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
          "weightPct": 4.16,
          "shares": 780
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.04,
          "shares": 450
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.72,
          "shares": 1800
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 6.8,
          "shares": 126080
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 5.94,
          "shares": 280800
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.28,
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
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 5.08,
          "shares": 266842
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.25,
          "shares": 81379
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.11,
          "shares": 64600
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.57,
          "shares": 256528
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.48,
          "shares": 38005
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 3.32,
          "shares": 204100
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": []
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261103",
      "holdings": [
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.88,
          "shares": 63557
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 4.42,
          "shares": 41772
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 4.13,
          "shares": 16015
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.68,
          "shares": 58576
        },
        {
          "code": "DT",
          "name": "Dynatrace",
          "exchange": "US",
          "weightPct": 3.4,
          "shares": 191966
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.37,
          "shares": 21042
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.35,
          "shares": 360000
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.09,
          "shares": 11372
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.02,
          "shares": 72940
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.95,
          "shares": 132000
        }
      ],
      "diff": {
        "prevAsOf": "20261031",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "新增",
            "sharesChange": 132000,
            "weightChange": 2.95
          },
          {
            "code": "OKTA",
            "name": "Okta",
            "action": "剔除",
            "sharesChange": -45747,
            "weightChange": -2.93
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 25,
    "topBought": [
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 5,
        "fundsDown": 0,
        "totalSharesChange": 182000
      },
      {
        "code": "8046",
        "name": "南電",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 145000
      },
      {
        "code": "3711",
        "name": "日月光投控",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 15442000
      },
      {
        "code": "1815",
        "name": "富喬",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 12620868
      },
      {
        "code": "1326",
        "name": "台化",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 3195000
      },
      {
        "code": "2603",
        "name": "長榮",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 931000
      },
      {
        "code": "6505",
        "name": "台塑化",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 503000
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": 406000
      },
      {
        "code": "3189",
        "name": "景碩",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 249000
      },
      {
        "code": "3037",
        "name": "欣興",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 60000
      }
    ],
    "topSold": [
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -6331000
      },
      {
        "code": "2890",
        "name": "永豐金",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -5612000
      },
      {
        "code": "2887",
        "name": "台新新光金",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -1783000
      },
      {
        "code": "2885",
        "name": "元大金",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -1102000
      },
      {
        "code": "2408",
        "name": "南亞科",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -967000
      },
      {
        "code": "2881",
        "name": "富邦金",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -908000
      },
      {
        "code": "1303",
        "name": "南亞",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -843000
      },
      {
        "code": "2882",
        "name": "國泰金",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -402000
      },
      {
        "code": "2395",
        "name": "研華",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -386000
      },
      {
        "code": "6223",
        "name": "旺矽",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -364000
      }
    ],
    "concentrationPct": 30.3,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 7,
    "topBought": [
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 132000
      },
      {
        "code": "AMZN",
        "name": "Amazon",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 4126
      }
    ],
    "topSold": [
      {
        "code": "OKTA",
        "name": "Okta",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -45747
      },
      {
        "code": "TXG",
        "name": "10x Genomics",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -12592
      },
      {
        "code": "COIN",
        "name": "Coinbase",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -531
      },
      {
        "code": "CRCL",
        "name": "Circle",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -356
      },
      {
        "code": "TSLA",
        "name": "Tesla",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -71
      }
    ],
    "concentrationPct": 71.43,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
