/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-16T23:41:06.542Z",
  "date": "20261117",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.94,
          "shares": 8250000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.32,
          "shares": 1910000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.09,
          "shares": 2550000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.27,
          "shares": 780000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.44,
          "shares": 7200000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.32,
          "shares": 1030000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.97,
          "shares": 1200000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.49,
          "shares": 14600000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.49,
          "shares": 930000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 2.87,
          "shares": 8800000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": []
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.2,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.15,
          "shares": 265000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.77,
          "shares": 2251000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.66,
          "shares": 84000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.55,
          "shares": 153000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.48,
          "shares": 2608000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 2.83,
          "shares": 96000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.77,
          "shares": 404000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.7,
          "shares": 625000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.77,
          "shares": 19179000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.56,
          "shares": 5712000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.53,
          "shares": 6965000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.48,
          "shares": 4328000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.51,
          "shares": 19739000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.85,
          "shares": 2552000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.52,
          "shares": 2657000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 3.86,
          "shares": 7093000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.8,
          "shares": 17522000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.47,
          "shares": 23519000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": []
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.36,
          "shares": 957000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 8.32,
          "shares": 7059000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.2,
          "shares": 1609000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 6.88,
          "shares": 4637000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.37,
          "shares": 4018000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.25,
          "shares": 1315000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 2.99,
          "shares": 1032000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 2.98,
          "shares": 301000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 2.97,
          "shares": 270000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.95,
          "shares": 338000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": [
          {
            "code": "6139",
            "name": "亞翔",
            "action": "增持",
            "sharesChange": 16000,
            "weightChange": 0.11
          },
          {
            "code": "3491",
            "name": "昇達科",
            "action": "增持",
            "sharesChange": 135000,
            "weightChange": 0.66
          },
          {
            "code": "3008",
            "name": "大立光",
            "action": "增持",
            "sharesChange": 1000,
            "weightChange": -0.07
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 2000,
            "weightChange": -0.06
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.6,
          "shares": 120000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.55,
          "shares": 3582000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.37,
          "shares": 1112000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3,
          "shares": 35000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.74,
          "shares": 965000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.53,
          "shares": 3277000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.28,
          "shares": 29000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.28,
          "shares": 93000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.25,
          "shares": 600000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.24,
          "shares": 349000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": [
          {
            "code": "2395",
            "name": "研華",
            "action": "新增",
            "sharesChange": 349000,
            "weightChange": 2.24
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "剔除",
            "sharesChange": -362000,
            "weightChange": -2.25
          }
        ]
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.06,
          "shares": 1726000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.29,
          "shares": 4684000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.14,
          "shares": 526036
        },
        {
          "code": "2027",
          "name": "大成鋼",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 16575000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.93,
          "shares": 196000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 2.86,
          "shares": 151000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.62,
          "shares": 595000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.62,
          "shares": 180000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.56,
          "shares": 918000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 2.56,
          "shares": 342000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": [
          {
            "code": "2027",
            "name": "大成鋼",
            "action": "增持",
            "sharesChange": 44000,
            "weightChange": 0.22
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 21000,
            "weightChange": 0.21
          },
          {
            "code": "3653",
            "name": "健策",
            "action": "增持",
            "sharesChange": 23000,
            "weightChange": 0.33
          },
          {
            "code": "3037",
            "name": "欣興",
            "action": "新增",
            "sharesChange": 918000,
            "weightChange": 2.56
          },
          {
            "code": "3081",
            "name": "聯亞",
            "action": "新增",
            "sharesChange": 342000,
            "weightChange": 2.56
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "剔除",
            "sharesChange": -441000,
            "weightChange": -2.47
          },
          {
            "code": "6446",
            "name": "藥華藥",
            "action": "剔除",
            "sharesChange": -460000,
            "weightChange": -2.34
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.27,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.34,
          "shares": 52000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 6.79,
          "shares": 17000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.67,
          "shares": 29000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.28,
          "shares": 27000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.47,
          "shares": 18000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.23,
          "shares": 116000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.92,
          "shares": 580000
        },
        {
          "code": "6510",
          "name": "精測",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 25000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.77,
          "shares": 52000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": [
          {
            "code": "3491",
            "name": "昇達科",
            "action": "新增",
            "sharesChange": 52000,
            "weightChange": 3.77
          },
          {
            "code": "3008",
            "name": "大立光",
            "action": "剔除",
            "sharesChange": -15000,
            "weightChange": -3.68
          }
        ]
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.33,
          "shares": 4230000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.09,
          "shares": 1375000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.94,
          "shares": 1200000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.64,
          "shares": 1600000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.78,
          "shares": 5500000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 6.45,
          "shares": 13500000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.4,
          "shares": 515000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.52,
          "shares": 3600000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.93,
          "shares": 4700000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 4.03,
          "shares": 4200000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": []
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.65,
          "shares": 1246000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 6.13,
          "shares": 1731000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.08,
          "shares": 921000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.58,
          "shares": 610000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.46,
          "shares": 1743000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.17,
          "shares": 3032000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.71,
          "shares": 252000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.51,
          "shares": 1355000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.98,
          "shares": 12620868
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.78,
          "shares": 364000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": [
          {
            "code": "6223",
            "name": "旺矽",
            "action": "新增",
            "sharesChange": 364000,
            "weightChange": 3.78
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "剔除",
            "sharesChange": -218000,
            "weightChange": -3.78
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.67,
          "shares": 294000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.71,
          "shares": 714000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.77,
          "shares": 56000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.06,
          "shares": 139000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.93,
          "shares": 421000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.55,
          "shares": 1248000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 4.25,
          "shares": 29600
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.19,
          "shares": 523000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.99,
          "shares": 79000
        },
        {
          "code": "3081",
          "name": "聯亞",
          "exchange": "TW",
          "weightPct": 3.66,
          "shares": 145000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": []
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 18.52,
          "shares": 249000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.4,
          "shares": 58101
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.31,
          "shares": 79500
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.67,
          "shares": 239001
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.22,
          "shares": 41002
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.08,
          "shares": 19550
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.69,
          "shares": 29000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.83,
          "shares": 417000
        },
        {
          "code": "2368",
          "name": "金像電",
          "exchange": "TW",
          "weightPct": 3.48,
          "shares": 112000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.15,
          "shares": 52000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": [
          {
            "code": "2383",
            "name": "台光電",
            "action": "減持",
            "sharesChange": -10000,
            "weightChange": -1.33
          },
          {
            "code": "6805",
            "name": "富世達",
            "action": "新增",
            "sharesChange": 52000,
            "weightChange": 3.15
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "剔除",
            "sharesChange": -177002,
            "weightChange": -3.22
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.04,
          "shares": 149000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.51,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.3,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.03,
          "shares": 80000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.5,
          "shares": 38000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.37,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.11,
          "shares": 170000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.62,
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
          "weightPct": 3,
          "shares": 398000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": []
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 9.16,
          "shares": 5799
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 8.52,
          "shares": 15118
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 5.54,
          "shares": 19114
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.92,
          "shares": 8253
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.55,
          "shares": 4214
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.64,
          "shares": 1683
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 3.58,
          "shares": 1379
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 3.36,
          "shares": 19661
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.2,
          "shares": 4704
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 3.18,
          "shares": 12613
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": [
          {
            "code": "SPCX",
            "name": "SpaceX",
            "action": "增持",
            "sharesChange": 488,
            "weightChange": 0.39
          },
          {
            "code": "TEM",
            "name": "Tempus",
            "action": "減持",
            "sharesChange": -900,
            "weightChange": -0.49
          },
          {
            "code": "META",
            "name": "Meta",
            "action": "增持",
            "sharesChange": 37,
            "weightChange": 0.26
          },
          {
            "code": "CRSP",
            "name": "CRISPR Therapeutics",
            "action": "減持",
            "sharesChange": -948,
            "weightChange": -0.13
          },
          {
            "code": "PLTR",
            "name": "Palantir Technologies",
            "action": "新增",
            "sharesChange": 4704,
            "weightChange": 3.2
          },
          {
            "code": "CRCL",
            "name": "Circle",
            "action": "減持",
            "sharesChange": -277,
            "weightChange": -0.09
          },
          {
            "code": "TWST",
            "name": "Twist Bioscience",
            "action": "剔除",
            "sharesChange": -7089,
            "weightChange": -3.21
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261117",
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
          "weightPct": 6.08,
          "shares": 3000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 5.58,
          "shares": 5000
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.12,
          "shares": 1400
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.11,
          "shares": 2800
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.66,
          "shares": 3000
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.45,
          "shares": 450
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.31,
          "shares": 1200
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
          "weightPct": 4.27,
          "shares": 800
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.95,
          "shares": 100699
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.84,
          "shares": 100680
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.43,
          "shares": 255293
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
          "weightPct": 4.59,
          "shares": 64600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.48,
          "shares": 151860
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 4.27,
          "shares": 130520
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.1,
          "shares": 518000
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.75,
          "shares": 97480
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 3.32,
          "shares": 132263
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": [
          {
            "code": "GOOGL",
            "name": "Alphabet - Class A Common Stock",
            "action": "新增",
            "sharesChange": 130520,
            "weightChange": 4.27
          },
          {
            "code": "CRWD",
            "name": "CrowdStrike Holdings",
            "action": "新增",
            "sharesChange": 132263,
            "weightChange": 3.32
          },
          {
            "code": "SPCX",
            "name": "SpaceX",
            "action": "剔除",
            "sharesChange": -251728,
            "weightChange": -3.87
          },
          {
            "code": "SHOP",
            "name": "Shopify",
            "action": "剔除",
            "sharesChange": -204100,
            "weightChange": -3.29
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261117",
      "holdings": [
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 5.22,
          "shares": 19630
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.11,
          "shares": 28556
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 5.09,
          "shares": 41772
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.02,
          "shares": 27491
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.92,
          "shares": 63557
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.47,
          "shares": 72940
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.26,
          "shares": 58576
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.23,
          "shares": 132000
        },
        {
          "code": "SNDK",
          "name": "Sandisk",
          "exchange": "US",
          "weightPct": 3.12,
          "shares": 10322
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 360000
        }
      ],
      "diff": {
        "prevAsOf": "20261114",
        "changes": [
          {
            "code": "AMD",
            "name": "AMD",
            "action": "增持",
            "sharesChange": 11643,
            "weightChange": 1.92
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
        "code": "3491",
        "name": "昇達科",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 187000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": 13000
      },
      {
        "code": "3037",
        "name": "欣興",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 918000
      },
      {
        "code": "6223",
        "name": "旺矽",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 364000
      },
      {
        "code": "2395",
        "name": "研華",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 349000
      },
      {
        "code": "3081",
        "name": "聯亞",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 342000
      },
      {
        "code": "6805",
        "name": "富世達",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 52000
      },
      {
        "code": "2027",
        "name": "大成鋼",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 44000
      },
      {
        "code": "3653",
        "name": "健策",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 23000
      },
      {
        "code": "6139",
        "name": "亞翔",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 16000
      }
    ],
    "topSold": [
      {
        "code": "3711",
        "name": "日月光投控",
        "fundsUp": 0,
        "fundsDown": 2,
        "totalSharesChange": -539002
      },
      {
        "code": "6446",
        "name": "藥華藥",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -460000
      },
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -441000
      },
      {
        "code": "2059",
        "name": "川湖",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -218000
      },
      {
        "code": "3008",
        "name": "大立光",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -14000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 2,
        "fundsDown": 1,
        "totalSharesChange": 13000
      }
    ],
    "concentrationPct": 45,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 11,
    "topBought": [
      {
        "code": "CRWD",
        "name": "CrowdStrike Holdings",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 132263
      },
      {
        "code": "GOOGL",
        "name": "Alphabet - Class A Common Stock",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 130520
      },
      {
        "code": "AMD",
        "name": "AMD",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 11643
      },
      {
        "code": "PLTR",
        "name": "Palantir Technologies",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 4704
      },
      {
        "code": "META",
        "name": "Meta",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 37
      },
      {
        "code": "SPCX",
        "name": "SpaceX",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -251240
      }
    ],
    "topSold": [
      {
        "code": "SPCX",
        "name": "SpaceX",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -251240
      },
      {
        "code": "SHOP",
        "name": "Shopify",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -204100
      },
      {
        "code": "TWST",
        "name": "Twist Bioscience",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -7089
      },
      {
        "code": "CRSP",
        "name": "CRISPR Therapeutics",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -948
      },
      {
        "code": "TEM",
        "name": "Tempus",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -900
      },
      {
        "code": "CRCL",
        "name": "Circle",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -277
      }
    ],
    "concentrationPct": 41.67,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
