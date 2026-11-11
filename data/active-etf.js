/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-11T23:41:28.235Z",
  "date": "20261112",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.61,
          "shares": 8250000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.01,
          "shares": 2500000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.77,
          "shares": 1830000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.07,
          "shares": 1030000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.92,
          "shares": 7200000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.53,
          "shares": 727000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.27,
          "shares": 1200000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.61,
          "shares": 14600000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.29,
          "shares": 930000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 2.95,
          "shares": 8800000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 50000,
            "weightChange": 0.37
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 30000,
            "weightChange": 0.08
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "增持",
            "sharesChange": 17000,
            "weightChange": 0.33
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 1000000,
            "weightChange": 0.37
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.9,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.8,
          "shares": 265000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.03,
          "shares": 84000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 2251000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.78,
          "shares": 153000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.46,
          "shares": 2608000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.28,
          "shares": 96000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.96,
          "shares": 625000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.87,
          "shares": 404000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.78,
          "shares": 18637000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.06,
          "shares": 5712000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.48,
          "shares": 6965000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.88,
          "shares": 4328000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.03,
          "shares": 19739000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.62,
          "shares": 2552000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.97,
          "shares": 2504000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 3.95,
          "shares": 7093000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.82,
          "shares": 17522000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.53,
          "shares": 23519000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 913000,
            "weightChange": 0.8
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 110000,
            "weightChange": 0.4
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "增持",
            "sharesChange": 80000,
            "weightChange": -0.06
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.29,
          "shares": 1609000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.22,
          "shares": 957000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 7.92,
          "shares": 7059000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 7.32,
          "shares": 4637000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.32,
          "shares": 3922000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.64,
          "shares": 1180000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.18,
          "shares": 328000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 3.13,
          "shares": 3158000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.03,
          "shares": 264000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 2.98,
          "shares": 1010000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "6531",
            "name": "愛普*",
            "action": "增持",
            "sharesChange": 950000,
            "weightChange": 1.27
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 120000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.56,
          "shares": 1112000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.34,
          "shares": 3582000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 2.82,
          "shares": 35000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.59,
          "shares": 29000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.54,
          "shares": 965000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.46,
          "shares": 3277000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.42,
          "shares": 600000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.28,
          "shares": 93000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 2.28,
          "shares": 362000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "減持",
            "sharesChange": -5000,
            "weightChange": 0.01
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 323000,
            "weightChange": 1.15
          },
          {
            "code": "6505",
            "name": "台塑化",
            "action": "減持",
            "sharesChange": -260000,
            "weightChange": -0.29
          },
          {
            "code": "2330",
            "name": "台積電",
            "action": "減持",
            "sharesChange": -21000,
            "weightChange": -0.47
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "新增",
            "sharesChange": 362000,
            "weightChange": 2.28
          },
          {
            "code": "2395",
            "name": "研華",
            "action": "剔除",
            "sharesChange": -349000,
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
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.8,
          "shares": 1726000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.74,
          "shares": 168000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.53,
          "shares": 219000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.25,
          "shares": 4684000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.16,
          "shares": 526036
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.97,
          "shares": 95000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.79,
          "shares": 180000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.76,
          "shares": 595000
        },
        {
          "code": "2027",
          "name": "大成鋼",
          "exchange": "TW",
          "weightPct": 2.46,
          "shares": 13722000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 2.39,
          "shares": 424000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": []
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.65,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.07,
          "shares": 52000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 6,
          "shares": 17000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.84,
          "shares": 29000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.01,
          "shares": 18000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 4.82,
          "shares": 27000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.48,
          "shares": 116000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.65,
          "shares": 580000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.57,
          "shares": 15000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 3.56,
          "shares": 75000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "1815",
            "name": "富喬",
            "action": "新增",
            "sharesChange": 580000,
            "weightChange": 3.65
          },
          {
            "code": "3008",
            "name": "大立光",
            "action": "新增",
            "sharesChange": 15000,
            "weightChange": 3.57
          },
          {
            "code": "6805",
            "name": "富世達",
            "action": "剔除",
            "sharesChange": -36000,
            "weightChange": -3.38
          },
          {
            "code": "6510",
            "name": "精測",
            "action": "剔除",
            "sharesChange": -25000,
            "weightChange": -3.29
          }
        ]
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.36,
          "shares": 4230000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.32,
          "shares": 1365000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.38,
          "shares": 1600000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.26,
          "shares": 1200000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.21,
          "shares": 5500000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.75,
          "shares": 510000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 6.41,
          "shares": 13500000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.9,
          "shares": 3600000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 5.28,
          "shares": 4700000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.93,
          "shares": 4200000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 30000,
            "weightChange": 0.15
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 20000,
            "weightChange": 0.1
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 1000000,
            "weightChange": 0.69
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "新增",
            "sharesChange": 4200000,
            "weightChange": 3.93
          },
          {
            "code": "2408",
            "name": "南亞科",
            "action": "剔除",
            "sharesChange": -9500000,
            "weightChange": -5.77
          }
        ]
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.38,
          "shares": 1246000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.98,
          "shares": 921000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.87,
          "shares": 610000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 5.85,
          "shares": 1731000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.6,
          "shares": 3032000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.44,
          "shares": 1743000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.56,
          "shares": 1355000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.25,
          "shares": 252000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.07,
          "shares": 218000
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
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "1815",
            "name": "富喬",
            "action": "新增",
            "sharesChange": 12620868,
            "weightChange": 3.79
          },
          {
            "code": "3008",
            "name": "大立光",
            "action": "剔除",
            "sharesChange": -323000,
            "weightChange": -3.67
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.87,
          "shares": 315000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.99,
          "shares": 688000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.37,
          "shares": 58000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.06,
          "shares": 399000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.68,
          "shares": 131000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.59,
          "shares": 1248000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.55,
          "shares": 523000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 4.37,
          "shares": 29600
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.02,
          "shares": 76000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 3.75,
          "shares": 144000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "減持",
            "sharesChange": -150000,
            "weightChange": -4.16
          },
          {
            "code": "3037",
            "name": "欣興",
            "action": "增持",
            "sharesChange": 306000,
            "weightChange": 3.11
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "減持",
            "sharesChange": -4000,
            "weightChange": -0.08
          },
          {
            "code": "8046",
            "name": "南電",
            "action": "增持",
            "sharesChange": 118000,
            "weightChange": 1.6
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 43000,
            "weightChange": 1.67
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "減持",
            "sharesChange": -228000,
            "weightChange": -0.64
          },
          {
            "code": "5274",
            "name": "信驊",
            "action": "新增",
            "sharesChange": 29600,
            "weightChange": 4.37
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 14000,
            "weightChange": 0.7
          },
          {
            "code": "3081",
            "name": "聯亞",
            "action": "新增",
            "sharesChange": 144000,
            "weightChange": 3.75
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "剔除",
            "sharesChange": -31000,
            "weightChange": -3.25
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "剔除",
            "sharesChange": -64000,
            "weightChange": -3
          }
        ]
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 17.67,
          "shares": 249000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.15,
          "shares": 79500
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.86,
          "shares": 58101
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.79,
          "shares": 51002
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.09,
          "shares": 238001
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.34,
          "shares": 29000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.23,
          "shares": 31901
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.21,
          "shares": 18050
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.86,
          "shares": 417000
        },
        {
          "code": "2368",
          "name": "金像電",
          "exchange": "TW",
          "weightPct": 3.48,
          "shares": 112000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 4000,
            "weightChange": 0.61
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "新增",
            "sharesChange": 417000,
            "weightChange": 3.86
          },
          {
            "code": "2368",
            "name": "金像電",
            "action": "新增",
            "sharesChange": 112000,
            "weightChange": 3.48
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "剔除",
            "sharesChange": -13001,
            "weightChange": -3.46
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "剔除",
            "sharesChange": -177002,
            "weightChange": -3.33
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.8,
          "shares": 149000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.97,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.87,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.98,
          "shares": 80000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.05,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.51,
          "shares": 170000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.19,
          "shares": 38000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.3,
          "shares": 17000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.29,
          "shares": 217000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 398000
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "1303",
            "name": "南亞",
            "action": "新增",
            "sharesChange": 398000,
            "weightChange": 3.06
          },
          {
            "code": "2308",
            "name": "台達電",
            "action": "剔除",
            "sharesChange": -93000,
            "weightChange": -3.06
          }
        ]
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.68,
          "shares": 5799
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 7.83,
          "shares": 13902
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 7.02,
          "shares": 22116
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.77,
          "shares": 8253
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.5,
          "shares": 4214
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 3.69,
          "shares": 7089
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 3.66,
          "shares": 20609
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 3.41,
          "shares": 13322
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.41,
          "shares": 1683
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 3.39,
          "shares": 1342
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "CRCL",
            "name": "Circle",
            "action": "減持",
            "sharesChange": -538,
            "weightChange": -0.21
          },
          {
            "code": "AMD",
            "name": "AMD",
            "action": "新增",
            "sharesChange": 1683,
            "weightChange": 3.41
          },
          {
            "code": "NVDA",
            "name": "NVIDIA",
            "action": "剔除",
            "sharesChange": -4788,
            "weightChange": -3.31
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.64,
          "shares": 18000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 5.97,
          "shares": 3000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 5.85,
          "shares": 5000
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.25,
          "shares": 2800
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5,
          "shares": 1400
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.69,
          "shares": 3000
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.46,
          "shares": 450
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.43,
          "shares": 1200
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 4.14,
          "shares": 1800
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.02,
          "shares": 800
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 7.44,
          "shares": 126080
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.74,
          "shares": 100699
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 5.25,
          "shares": 280800
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.15,
          "shares": 251300
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 4.98,
          "shares": 266842
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.58,
          "shares": 64600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.55,
          "shares": 151860
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 4.18,
          "shares": 131480
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.49,
          "shares": 220228
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 3.31,
          "shares": 204100
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "SPCX",
            "name": "SpaceX",
            "action": "新增",
            "sharesChange": 220228,
            "weightChange": 3.49
          },
          {
            "code": "2330",
            "name": "台積電",
            "action": "剔除",
            "sharesChange": -406000,
            "weightChange": -3.06
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261112",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.21,
          "shares": 28556
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 4.99,
          "shares": 41772
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.91,
          "shares": 63557
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.88,
          "shares": 19630
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.57,
          "shares": 72940
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.39,
          "shares": 58576
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.13,
          "shares": 132000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.1,
          "shares": 360000
        },
        {
          "code": "SNDK",
          "name": "Sandisk",
          "exchange": "US",
          "weightPct": 2.98,
          "shares": 10130
        },
        {
          "code": "PANW",
          "name": "Palo Alto",
          "exchange": "US",
          "weightPct": 2.87,
          "shares": 25679
        }
      ],
      "diff": {
        "prevAsOf": "20261111",
        "changes": [
          {
            "code": "MU",
            "name": "Micron",
            "action": "新增",
            "sharesChange": 19630,
            "weightChange": 4.88
          },
          {
            "code": "SNDK",
            "name": "Sandisk",
            "action": "新增",
            "sharesChange": 10130,
            "weightChange": 2.98
          },
          {
            "code": "DT",
            "name": "Dynatrace",
            "action": "剔除",
            "sharesChange": -191966,
            "weightChange": -2.88
          },
          {
            "code": "OKTA",
            "name": "Okta",
            "action": "剔除",
            "sharesChange": -45747,
            "weightChange": -2.77
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 23,
    "topBought": [
      {
        "code": "1303",
        "name": "南亞",
        "fundsUp": 5,
        "fundsDown": 1,
        "totalSharesChange": 2910000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 4,
        "fundsDown": 1,
        "totalSharesChange": 202000
      },
      {
        "code": "1815",
        "name": "富喬",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 13200868
      },
      {
        "code": "3711",
        "name": "日月光投控",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": 4384998
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 2,
        "fundsDown": 2,
        "totalSharesChange": 772000
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": -14000
      },
      {
        "code": "6531",
        "name": "愛普*",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 950000
      },
      {
        "code": "3037",
        "name": "欣興",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 306000
      },
      {
        "code": "3081",
        "name": "聯亞",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 144000
      },
      {
        "code": "8046",
        "name": "南電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 118000
      }
    ],
    "topSold": [
      {
        "code": "2059",
        "name": "川湖",
        "fundsUp": 0,
        "fundsDown": 2,
        "totalSharesChange": -44001
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 2,
        "fundsDown": 2,
        "totalSharesChange": 772000
      },
      {
        "code": "2408",
        "name": "南亞科",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -9500000
      },
      {
        "code": "2395",
        "name": "研華",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -349000
      },
      {
        "code": "3008",
        "name": "大立光",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -308000
      },
      {
        "code": "6505",
        "name": "台塑化",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -260000
      },
      {
        "code": "2308",
        "name": "台達電",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -93000
      },
      {
        "code": "6805",
        "name": "富世達",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -36000
      },
      {
        "code": "6510",
        "name": "精測",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -25000
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": -14000
      }
    ],
    "concentrationPct": 41.86,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 9,
    "topBought": [
      {
        "code": "SPCX",
        "name": "SpaceX",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 220228
      },
      {
        "code": "MU",
        "name": "Micron",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 19630
      },
      {
        "code": "SNDK",
        "name": "Sandisk",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 10130
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
        "code": "2330",
        "name": "台積電",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -406000
      },
      {
        "code": "DT",
        "name": "Dynatrace",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -191966
      },
      {
        "code": "OKTA",
        "name": "Okta",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -45747
      },
      {
        "code": "NVDA",
        "name": "NVIDIA",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -4788
      },
      {
        "code": "CRCL",
        "name": "Circle",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -538
      }
    ],
    "concentrationPct": 55.56,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
