/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-04T23:41:33.578Z",
  "date": "20261105",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.99,
          "shares": 7900000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.61,
          "shares": 2370000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.58,
          "shares": 1030000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.37,
          "shares": 7200000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.05,
          "shares": 1620000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.59,
          "shares": 1200000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.24,
          "shares": 710000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.32,
          "shares": 8800000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.23,
          "shares": 930000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 3.07,
          "shares": 4450000
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 100000,
            "weightChange": -0.11
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 40000,
            "weightChange": 0.15
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.87,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.36,
          "shares": 249000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.94,
          "shares": 79000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.8,
          "shares": 144000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.41,
          "shares": 2453000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.39,
          "shares": 2117000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.37,
          "shares": 90000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.22,
          "shares": 625000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.86,
          "shares": 404000
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.36,
          "shares": 15269000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.07,
          "shares": 5615000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.63,
          "shares": 4328000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.26,
          "shares": 6655000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.78,
          "shares": 19739000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 6.27,
          "shares": 2512000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 4.1,
          "shares": 16905000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 4.09,
          "shares": 23519000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.01,
          "shares": 2504000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.76,
          "shares": 8987000
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 805000,
            "weightChange": 0.31
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 137000,
            "weightChange": 0.16
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 39000,
            "weightChange": -0.37
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "新增",
            "sharesChange": 16905000,
            "weightChange": 4.1
          },
          {
            "code": "2308",
            "name": "台達電",
            "action": "剔除",
            "sharesChange": -7582000,
            "weightChange": -3.78
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.31,
          "shares": 1609000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 8.08,
          "shares": 7059000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.57,
          "shares": 892000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.34,
          "shares": 3838000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 3.78,
          "shares": 2300000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.3,
          "shares": 317000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.3,
          "shares": 1180000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 3.27,
          "shares": 975000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 3.12,
          "shares": 3158000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 2.96,
          "shares": 259000
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 105000,
            "weightChange": 0.89
          },
          {
            "code": "6139",
            "name": "亞翔",
            "action": "增持",
            "sharesChange": 93000,
            "weightChange": 0.08
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 8000,
            "weightChange": 0.16
          },
          {
            "code": "2360",
            "name": "致茂",
            "action": "增持",
            "sharesChange": 24000,
            "weightChange": -0.13
          },
          {
            "code": "3008",
            "name": "大立光",
            "action": "新增",
            "sharesChange": 259000,
            "weightChange": 2.96
          },
          {
            "code": "6223",
            "name": "旺矽",
            "action": "剔除",
            "sharesChange": -301000,
            "weightChange": -2.91
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.83,
          "shares": 3824000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.61,
          "shares": 124000
        },
        {
          "code": "2881",
          "name": "富邦金",
          "exchange": "TW",
          "weightPct": 3.1,
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
          "weightPct": 2.84,
          "shares": 6848000
        },
        {
          "code": "2885",
          "name": "元大金",
          "exchange": "TW",
          "weightPct": 2.76,
          "shares": 3871880
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.66,
          "shares": 114000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.6,
          "shares": 941000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.33,
          "shares": 3262000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.24,
          "shares": 345000
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "6505",
            "name": "台塑化",
            "action": "增持",
            "sharesChange": 30000,
            "weightChange": 0.12
          },
          {
            "code": "2603",
            "name": "長榮",
            "action": "增持",
            "sharesChange": 10000,
            "weightChange": 0.04
          },
          {
            "code": "1326",
            "name": "台化",
            "action": "增持",
            "sharesChange": 47000,
            "weightChange": 0.06
          }
        ]
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.88,
          "shares": 1680000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.44,
          "shares": 146000
        },
        {
          "code": "6446",
          "name": "藥華藥",
          "exchange": "TW",
          "weightPct": 3.26,
          "shares": 713000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.09,
          "shares": 4137000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.02,
          "shares": 463036
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.86,
          "shares": 172000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.68,
          "shares": 168000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.61,
          "shares": 585000
        },
        {
          "code": "4904",
          "name": "遠傳",
          "exchange": "TW",
          "weightPct": 2.32,
          "shares": 5567000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.3,
          "shares": 73000
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "2308",
            "name": "台達電",
            "action": "增持",
            "sharesChange": 32000,
            "weightChange": 0.05
          },
          {
            "code": "4904",
            "name": "遠傳",
            "action": "新增",
            "sharesChange": 5567000,
            "weightChange": 2.32
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "增持",
            "sharesChange": 5000,
            "weightChange": 0.01
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "剔除",
            "sharesChange": -424000,
            "weightChange": -2.31
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.29,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.42,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.68,
          "shares": 29000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.87,
          "shares": 18000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.21,
          "shares": 116000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.07,
          "shares": 27000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.68,
          "shares": 13000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 4.23,
          "shares": 75000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 36000
        },
        {
          "code": "6510",
          "name": "精測",
          "exchange": "TW",
          "weightPct": 3.5,
          "shares": 25000
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "6510",
            "name": "精測",
            "action": "新增",
            "sharesChange": 25000,
            "weightChange": 3.5
          },
          {
            "code": "3665",
            "name": "貿聯-KY",
            "action": "剔除",
            "sharesChange": -44000,
            "weightChange": -3.51
          }
        ]
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.12,
          "shares": 4200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.79,
          "shares": 1350000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.65,
          "shares": 5410000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 7.44,
          "shares": 11700000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.78,
          "shares": 495000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.74,
          "shares": 1500000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.39,
          "shares": 1080000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 6.11,
          "shares": 3550000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 6.09,
          "shares": 4650000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 5.06,
          "shares": 11500000
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "2059",
            "name": "川湖",
            "action": "增持",
            "sharesChange": 10000,
            "weightChange": -0.35
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 20000,
            "weightChange": -0.17
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 15000,
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
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.67,
          "shares": 1246000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.15,
          "shares": 921000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.9,
          "shares": 1743000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 5.88,
          "shares": 1581000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.64,
          "shares": 2682000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.45,
          "shares": 505000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.75,
          "shares": 1355000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.44,
          "shares": 218000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 4.04,
          "shares": 12620868
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.83,
          "shares": 323000
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "3665",
            "name": "貿聯-KY",
            "action": "增持",
            "sharesChange": 240000,
            "weightChange": 0.81
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 12.44,
          "shares": 457000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.3,
          "shares": 62000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 5.16,
          "shares": 523000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.76,
          "shares": 1434000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.07,
          "shares": 382000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.54,
          "shares": 273000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.23,
          "shares": 59000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.2,
          "shares": 31000
        },
        {
          "code": "6213",
          "name": "聯茂",
          "exchange": "TW",
          "weightPct": 3.2,
          "shares": 435000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 3.14,
          "shares": 18600
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 115000,
            "weightChange": 3.03
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "減持",
            "sharesChange": -12000,
            "weightChange": -0.74
          },
          {
            "code": "3189",
            "name": "景碩",
            "action": "減持",
            "sharesChange": -41000,
            "weightChange": -0.39
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "減持",
            "sharesChange": -164000,
            "weightChange": -0.44
          },
          {
            "code": "3037",
            "name": "欣興",
            "action": "減持",
            "sharesChange": -47000,
            "weightChange": -0.58
          },
          {
            "code": "8046",
            "name": "南電",
            "action": "新增",
            "sharesChange": 273000,
            "weightChange": 3.54
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "減持",
            "sharesChange": -27000,
            "weightChange": -1.31
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "新增",
            "sharesChange": 31000,
            "weightChange": 3.2
          },
          {
            "code": "6213",
            "name": "聯茂",
            "action": "新增",
            "sharesChange": 435000,
            "weightChange": 3.2
          },
          {
            "code": "5274",
            "name": "信驊",
            "action": "減持",
            "sharesChange": -9000,
            "weightChange": -1.74
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "剔除",
            "sharesChange": -115000,
            "weightChange": -4.05
          },
          {
            "code": "3081",
            "name": "聯亞",
            "action": "剔除",
            "sharesChange": -120000,
            "weightChange": -3.13
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "剔除",
            "sharesChange": -69000,
            "weightChange": -3.04
          }
        ]
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.18,
          "shares": 244000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.81,
          "shares": 51002
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.24,
          "shares": 75500
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6,
          "shares": 55101
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.42,
          "shares": 208001
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.11,
          "shares": 27000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 31901
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.28,
          "shares": 13001
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 3.27,
          "shares": 100002
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.14,
          "shares": 15050
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": []
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.53,
          "shares": 163000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.47,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.72,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.83,
          "shares": 80000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.5,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.74,
          "shares": 170000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.06,
          "shares": 38000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.51,
          "shares": 217000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 3.19,
          "shares": 8800
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.17,
          "shares": 138000
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": []
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.73,
          "shares": 5702
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 6.87,
          "shares": 12688
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 6.6,
          "shares": 22116
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.51,
          "shares": 8253
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 4.17,
          "shares": 14479
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.05,
          "shares": 4214
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 3.95,
          "shares": 20609
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 3.81,
          "shares": 7089
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.79,
          "shares": 4788
        },
        {
          "code": "COIN",
          "name": "Coinbase",
          "exchange": "US",
          "weightPct": 3.26,
          "shares": 5855
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "TSLA",
            "name": "Tesla",
            "action": "減持",
            "sharesChange": -211,
            "weightChange": -0.53
          },
          {
            "code": "COIN",
            "name": "Coinbase",
            "action": "新增",
            "sharesChange": 5855,
            "weightChange": 3.26
          },
          {
            "code": "PLTR",
            "name": "Palantir Technologies",
            "action": "剔除",
            "sharesChange": -4704,
            "weightChange": -3.26
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.43,
          "shares": 18000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.92,
          "shares": 5000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 5.63,
          "shares": 3000
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.92,
          "shares": 3000
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.7,
          "shares": 2800
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.58,
          "shares": 800
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.54,
          "shares": 1400
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.25,
          "shares": 450
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 4.01,
          "shares": 1800
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 3.55,
          "shares": 780
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 7.02,
          "shares": 126080
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.2,
          "shares": 280800
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.75,
          "shares": 251300
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 5,
          "shares": 266842
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.29,
          "shares": 64600
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.21,
          "shares": 81379
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.88,
          "shares": 256528
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.47,
          "shares": 38005
        },
        {
          "code": "SNOW",
          "name": "Snowflake",
          "exchange": "US",
          "weightPct": 3.19,
          "shares": 101200
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 3.14,
          "shares": 117140
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "SNOW",
            "name": "Snowflake",
            "action": "新增",
            "sharesChange": 101200,
            "weightChange": 3.19
          },
          {
            "code": "AMZN",
            "name": "Amazon",
            "action": "新增",
            "sharesChange": 117140,
            "weightChange": 3.14
          },
          {
            "code": "LITE",
            "name": "Lumentum",
            "action": "剔除",
            "sharesChange": -50079,
            "weightChange": -3.68
          },
          {
            "code": "SHOP",
            "name": "Shopify",
            "action": "剔除",
            "sharesChange": -204100,
            "weightChange": -3.42
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261105",
      "holdings": [
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.95,
          "shares": 63557
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 4.41,
          "shares": 41772
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.85,
          "shares": 58576
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.49,
          "shares": 21042
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.28,
          "shares": 72940
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.15,
          "shares": 360000
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.1,
          "shares": 11372
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 132000
        },
        {
          "code": "DT",
          "name": "Dynatrace",
          "exchange": "US",
          "weightPct": 2.87,
          "shares": 191966
        },
        {
          "code": "PANW",
          "name": "Palo Alto",
          "exchange": "US",
          "weightPct": 2.86,
          "shares": 25679
        }
      ],
      "diff": {
        "prevAsOf": "20261104",
        "changes": [
          {
            "code": "PANW",
            "name": "Palo Alto",
            "action": "新增",
            "sharesChange": 25679,
            "weightChange": 2.86
          },
          {
            "code": "LITE",
            "name": "Lumentum",
            "action": "剔除",
            "sharesChange": -16015,
            "weightChange": -3.5
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 26,
    "topBought": [
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 4,
        "fundsDown": 1,
        "totalSharesChange": 228000
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 3,
        "fundsDown": 0,
        "totalSharesChange": 1020000
      },
      {
        "code": "2059",
        "name": "川湖",
        "fundsUp": 3,
        "fundsDown": 0,
        "totalSharesChange": 46000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": -56000
      },
      {
        "code": "3711",
        "name": "日月光投控",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 16905000
      },
      {
        "code": "4904",
        "name": "遠傳",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 5567000
      },
      {
        "code": "6213",
        "name": "聯茂",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 435000
      },
      {
        "code": "8046",
        "name": "南電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 273000
      },
      {
        "code": "3008",
        "name": "大立光",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 259000
      },
      {
        "code": "3665",
        "name": "貿聯-KY",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": 196000
      }
    ],
    "topSold": [
      {
        "code": "2308",
        "name": "台達電",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -7550000
      },
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -424000
      },
      {
        "code": "6223",
        "name": "旺矽",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -301000
      },
      {
        "code": "1303",
        "name": "南亞",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -164000
      },
      {
        "code": "3081",
        "name": "聯亞",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -120000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": -56000
      },
      {
        "code": "3037",
        "name": "欣興",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -47000
      },
      {
        "code": "3189",
        "name": "景碩",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -41000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -19000
      },
      {
        "code": "3443",
        "name": "創意",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -12000
      }
    ],
    "concentrationPct": 38.46,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 8,
    "topBought": [
      {
        "code": "AMZN",
        "name": "Amazon",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 117140
      },
      {
        "code": "SNOW",
        "name": "Snowflake",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 101200
      },
      {
        "code": "PANW",
        "name": "Palo Alto",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 25679
      },
      {
        "code": "COIN",
        "name": "Coinbase",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 5855
      }
    ],
    "topSold": [
      {
        "code": "LITE",
        "name": "Lumentum",
        "fundsUp": 0,
        "fundsDown": 2,
        "totalSharesChange": -66094
      },
      {
        "code": "SHOP",
        "name": "Shopify",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -204100
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
        "totalSharesChange": -211
      }
    ],
    "concentrationPct": 66.67,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
