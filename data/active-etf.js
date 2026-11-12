/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-12T23:41:01.208Z",
  "date": "20261113",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.93,
          "shares": 8250000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.97,
          "shares": 1880000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.73,
          "shares": 2500000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.86,
          "shares": 750000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.76,
          "shares": 1030000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.71,
          "shares": 7200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.07,
          "shares": 1200000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.57,
          "shares": 930000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.53,
          "shares": 14600000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 2.96,
          "shares": 8800000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 50000,
            "weightChange": 0.2
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "增持",
            "sharesChange": 23000,
            "weightChange": 0.33
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.11,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.86,
          "shares": 265000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.94,
          "shares": 84000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 2251000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.6,
          "shares": 153000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.59,
          "shares": 2608000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.09,
          "shares": 96000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.88,
          "shares": 404000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.84,
          "shares": 625000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.18,
          "shares": 18637000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.16,
          "shares": 5712000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.17,
          "shares": 6965000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.59,
          "shares": 4328000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.8,
          "shares": 19739000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.31,
          "shares": 2552000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.59,
          "shares": 2657000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.01,
          "shares": 7093000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.81,
          "shares": 17522000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.55,
          "shares": 23519000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "6223",
            "name": "旺矽",
            "action": "增持",
            "sharesChange": 153000,
            "weightChange": 0.62
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.4,
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
          "weightPct": 8.14,
          "shares": 7059000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 7,
          "shares": 4637000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.29,
          "shares": 3922000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.83,
          "shares": 1180000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 3.2,
          "shares": 1010000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.12,
          "shares": 301000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 3.03,
          "shares": 3158000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3,
          "shares": 328000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "6223",
            "name": "旺矽",
            "action": "新增",
            "sharesChange": 301000,
            "weightChange": 3.12
          },
          {
            "code": "3008",
            "name": "大立光",
            "action": "剔除",
            "sharesChange": -264000,
            "weightChange": -3.03
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.47,
          "shares": 120000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.45,
          "shares": 1112000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.42,
          "shares": 3582000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 2.91,
          "shares": 35000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.57,
          "shares": 965000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.5,
          "shares": 29000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.47,
          "shares": 3277000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.41,
          "shares": 600000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.3,
          "shares": 93000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 2.24,
          "shares": 362000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": []
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.04,
          "shares": 1726000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.19,
          "shares": 4684000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.08,
          "shares": 526036
        },
        {
          "code": "2027",
          "name": "大成鋼",
          "exchange": "TW",
          "weightPct": 3.02,
          "shares": 16531000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.75,
          "shares": 595000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.75,
          "shares": 180000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.68,
          "shares": 175000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 2.67,
          "shares": 128000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 2.5,
          "shares": 441000
        },
        {
          "code": "6446",
          "name": "藥華藥",
          "exchange": "TW",
          "weightPct": 2.34,
          "shares": 460000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "2027",
            "name": "大成鋼",
            "action": "增持",
            "sharesChange": 2809000,
            "weightChange": 0.56
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "減持",
            "sharesChange": -44000,
            "weightChange": -0.85
          },
          {
            "code": "3653",
            "name": "健策",
            "action": "減持",
            "sharesChange": -40000,
            "weightChange": -1.07
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "增持",
            "sharesChange": 17000,
            "weightChange": 0.11
          },
          {
            "code": "6446",
            "name": "藥華藥",
            "action": "新增",
            "sharesChange": 460000,
            "weightChange": 2.34
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "剔除",
            "sharesChange": -95000,
            "weightChange": -2.97
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.01,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.86,
          "shares": 52000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 6.35,
          "shares": 17000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.66,
          "shares": 29000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 4.94,
          "shares": 27000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.8,
          "shares": 18000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.37,
          "shares": 116000
        },
        {
          "code": "6510",
          "name": "精測",
          "exchange": "TW",
          "weightPct": 3.8,
          "shares": 25000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.78,
          "shares": 580000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.61,
          "shares": 15000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "6510",
            "name": "精測",
            "action": "新增",
            "sharesChange": 25000,
            "weightChange": 3.8
          },
          {
            "code": "6274",
            "name": "台燿",
            "action": "剔除",
            "sharesChange": -75000,
            "weightChange": -3.56
          }
        ]
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.99,
          "shares": 4230000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.05,
          "shares": 1365000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.46,
          "shares": 1200000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.17,
          "shares": 1600000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.04,
          "shares": 5500000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.73,
          "shares": 510000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 6.39,
          "shares": 13500000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.65,
          "shares": 3600000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 5.06,
          "shares": 4700000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 3.98,
          "shares": 6500000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "2408",
            "name": "南亞科",
            "action": "新增",
            "sharesChange": 6500000,
            "weightChange": 3.98
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "剔除",
            "sharesChange": -4200000,
            "weightChange": -3.93
          }
        ]
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.56,
          "shares": 1246000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 5.9,
          "shares": 1731000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.75,
          "shares": 921000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.63,
          "shares": 610000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.59,
          "shares": 1743000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.4,
          "shares": 3032000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.65,
          "shares": 1355000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.45,
          "shares": 252000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4,
          "shares": 218000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.89,
          "shares": 12620868
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": []
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.51,
          "shares": 294000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7,
          "shares": 714000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.45,
          "shares": 56000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.07,
          "shares": 421000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.78,
          "shares": 139000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.53,
          "shares": 1248000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 4.38,
          "shares": 29600
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.32,
          "shares": 523000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.02,
          "shares": 79000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 3.77,
          "shares": 145000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "減持",
            "sharesChange": -21000,
            "weightChange": -0.36
          },
          {
            "code": "3037",
            "name": "欣興",
            "action": "增持",
            "sharesChange": 26000,
            "weightChange": 0.01
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "減持",
            "sharesChange": -2000,
            "weightChange": 0.08
          },
          {
            "code": "8046",
            "name": "南電",
            "action": "增持",
            "sharesChange": 22000,
            "weightChange": 0.01
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 8000,
            "weightChange": 0.1
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 3000,
            "weightChange": 0
          },
          {
            "code": "3081",
            "name": "聯亞",
            "action": "增持",
            "sharesChange": 1000,
            "weightChange": 0.02
          }
        ]
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 18.17,
          "shares": 249000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.97,
          "shares": 58101
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.87,
          "shares": 79500
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.52,
          "shares": 51002
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.9,
          "shares": 239001
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.06,
          "shares": 29000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.79,
          "shares": 19550
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.63,
          "shares": 31901
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.81,
          "shares": 417000
        },
        {
          "code": "2368",
          "name": "金像電",
          "exchange": "TW",
          "weightPct": 3.4,
          "shares": 112000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "3037",
            "name": "欣興",
            "action": "增持",
            "sharesChange": 1000,
            "weightChange": -0.19
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "增持",
            "sharesChange": 1500,
            "weightChange": 0.58
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.99,
          "shares": 149000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.62,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.95,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.73,
          "shares": 80000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.77,
          "shares": 33000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.56,
          "shares": 38000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.26,
          "shares": 170000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.45,
          "shares": 17000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.28,
          "shares": 217000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 398000
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": []
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.85,
          "shares": 5799
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 7.72,
          "shares": 14170
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 6.85,
          "shares": 22116
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.8,
          "shares": 8253
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.37,
          "shares": 4214
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 3.68,
          "shares": 20609
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.63,
          "shares": 1683
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 3.39,
          "shares": 7089
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 3.37,
          "shares": 12890
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 3.29,
          "shares": 1342
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "SPCX",
            "name": "SpaceX",
            "action": "增持",
            "sharesChange": 268,
            "weightChange": -0.11
          },
          {
            "code": "CRCL",
            "name": "Circle",
            "action": "減持",
            "sharesChange": -432,
            "weightChange": -0.04
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.82,
          "shares": 18000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 5.92,
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
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.21,
          "shares": 1400
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.02,
          "shares": 2800
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.62,
          "shares": 3000
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.37,
          "shares": 800
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.35,
          "shares": 450
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.21,
          "shares": 1200
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 4.18,
          "shares": 1800
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 6.01,
          "shares": 100699
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.77,
          "shares": 255293
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.66,
          "shares": 100680
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 5.26,
          "shares": 280800
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 4.96,
          "shares": 266842
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.38,
          "shares": 64600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.36,
          "shares": 151860
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.79,
          "shares": 251728
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 468000
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.63,
          "shares": 97480
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "BE",
            "name": "Bloom Energy",
            "action": "增持",
            "sharesChange": 3993,
            "weightChange": 0.62
          },
          {
            "code": "MSFT",
            "name": "Microsoft",
            "action": "減持",
            "sharesChange": -25400,
            "weightChange": -1.78
          },
          {
            "code": "SPCX",
            "name": "SpaceX",
            "action": "增持",
            "sharesChange": 31500,
            "weightChange": 0.3
          },
          {
            "code": "2330",
            "name": "台積電",
            "action": "新增",
            "sharesChange": 468000,
            "weightChange": 3.68
          },
          {
            "code": "AVGO",
            "name": "Broadcom",
            "action": "新增",
            "sharesChange": 97480,
            "weightChange": 3.63
          },
          {
            "code": "GOOGL",
            "name": "Alphabet - Class A Common Stock",
            "action": "剔除",
            "sharesChange": -131480,
            "weightChange": -4.18
          },
          {
            "code": "SHOP",
            "name": "Shopify",
            "action": "剔除",
            "sharesChange": -204100,
            "weightChange": -3.31
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261113",
      "holdings": [
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 5.24,
          "shares": 19630
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.9,
          "shares": 28556
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 4.89,
          "shares": 41772
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.79,
          "shares": 63557
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.36,
          "shares": 72940
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.35,
          "shares": 58576
        },
        {
          "code": "SNDK",
          "name": "Sandisk",
          "exchange": "US",
          "weightPct": 3.32,
          "shares": 10322
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.16,
          "shares": 132000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.11,
          "shares": 360000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 2.89,
          "shares": 15848
        }
      ],
      "diff": {
        "prevAsOf": "20261112",
        "changes": [
          {
            "code": "SNDK",
            "name": "Sandisk",
            "action": "增持",
            "sharesChange": 192,
            "weightChange": 0.34
          },
          {
            "code": "AMD",
            "name": "AMD",
            "action": "新增",
            "sharesChange": 15848,
            "weightChange": 2.89
          },
          {
            "code": "PANW",
            "name": "Palo Alto",
            "action": "剔除",
            "sharesChange": -25679,
            "weightChange": -2.87
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 19,
    "topBought": [
      {
        "code": "6223",
        "name": "旺矽",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 454000
      },
      {
        "code": "3037",
        "name": "欣興",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 27000
      },
      {
        "code": "3443",
        "name": "創意",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": 22500
      },
      {
        "code": "2408",
        "name": "南亞科",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 6500000
      },
      {
        "code": "2027",
        "name": "大成鋼",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 2809000
      },
      {
        "code": "6446",
        "name": "藥華藥",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 460000
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 50000
      },
      {
        "code": "6510",
        "name": "精測",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 25000
      },
      {
        "code": "8046",
        "name": "南電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 22000
      },
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 17000
      }
    ],
    "topSold": [
      {
        "code": "3711",
        "name": "日月光投控",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -4200000
      },
      {
        "code": "3008",
        "name": "大立光",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -264000
      },
      {
        "code": "2059",
        "name": "川湖",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -95000
      },
      {
        "code": "6274",
        "name": "台燿",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -75000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -41000
      },
      {
        "code": "3653",
        "name": "健策",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -40000
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -21000
      },
      {
        "code": "3443",
        "name": "創意",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": 22500
      }
    ],
    "concentrationPct": 37.5,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 11,
    "topBought": [
      {
        "code": "SPCX",
        "name": "SpaceX",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 31768
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 468000
      },
      {
        "code": "AVGO",
        "name": "Broadcom",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 97480
      },
      {
        "code": "AMD",
        "name": "AMD",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 15848
      },
      {
        "code": "BE",
        "name": "Bloom Energy",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 3993
      },
      {
        "code": "SNDK",
        "name": "Sandisk",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 192
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
        "code": "GOOGL",
        "name": "Alphabet - Class A Common Stock",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -131480
      },
      {
        "code": "PANW",
        "name": "Palo Alto",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -25679
      },
      {
        "code": "MSFT",
        "name": "Microsoft",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -25400
      },
      {
        "code": "CRCL",
        "name": "Circle",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -432
      }
    ],
    "concentrationPct": 50,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
