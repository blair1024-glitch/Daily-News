/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-26T23:40:47.602Z",
  "date": "20261127",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.76,
          "shares": 8750000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.34,
          "shares": 2700000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.07,
          "shares": 1950000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.97,
          "shares": 1030000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.89,
          "shares": 7200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.69,
          "shares": 1200000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.62,
          "shares": 800000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.21,
          "shares": 930000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.09,
          "shares": 15100000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 2.52,
          "shares": 1910956
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 60000,
            "weightChange": 0.44
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.28,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.25,
          "shares": 265000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.43,
          "shares": 233000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.5,
          "shares": 2900000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.82,
          "shares": 84000
        },
        {
          "code": "FITXN12",
          "name": "台灣證交所加權股價指數",
          "exchange": "TF",
          "weightPct": 3.02,
          "shares": 60
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 2.9,
          "shares": 2108000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.88,
          "shares": 404000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 2.8,
          "shares": 96000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 2.79,
          "shares": 157000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.4,
          "shares": 20216000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.71,
          "shares": 5861000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.49,
          "shares": 7542000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.42,
          "shares": 4172000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.64,
          "shares": 8056000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.51,
          "shares": 19739000
        },
        {
          "code": "FITXN12",
          "name": "台指期貨 2026/12",
          "exchange": "TF",
          "weightPct": 4.3,
          "shares": 1533
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.16,
          "shares": 2552000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.11,
          "shares": 2813000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 4.01,
          "shares": 22105000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 236000,
            "weightChange": 0.62
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "增持",
            "sharesChange": 320000,
            "weightChange": 0.42
          },
          {
            "code": "6223",
            "name": "旺矽",
            "action": "增持",
            "sharesChange": 130000,
            "weightChange": 0.37
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "增持",
            "sharesChange": 2121000,
            "weightChange": 0.41
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 9.11,
          "shares": 957000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.86,
          "shares": 1609000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 8.06,
          "shares": 7059000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 6.35,
          "shares": 4637000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 6.17,
          "shares": 4018000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.71,
          "shares": 1330000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.47,
          "shares": 369000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.37,
          "shares": 470000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.18,
          "shares": 301000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.07,
          "shares": 270000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": []
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 120000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 3730000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.22,
          "shares": 1151000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.92,
          "shares": 1003000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.46,
          "shares": 30000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.43,
          "shares": 360000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.39,
          "shares": 3306000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.29,
          "shares": 93000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 2.19,
          "shares": 374000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.17,
          "shares": 619000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": [
          {
            "code": "2408",
            "name": "南亞科",
            "action": "新增",
            "sharesChange": 619000,
            "weightChange": 2.17
          },
          {
            "code": "3443",
            "name": "創意",
            "action": "剔除",
            "sharesChange": -35000,
            "weightChange": -2.14
          }
        ]
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.43,
          "shares": 1583000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.2,
          "shares": 287000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 4.1,
          "shares": 926000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.42,
          "shares": 236000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.42,
          "shares": 551036
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3,
          "shares": 1180000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.95,
          "shares": 2440000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 236000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.92,
          "shares": 103000
        },
        {
          "code": "2376",
          "name": "技嘉",
          "exchange": "TW",
          "weightPct": 2.84,
          "shares": 2621000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": [
          {
            "code": "2308",
            "name": "台達電",
            "action": "增持",
            "sharesChange": 165000,
            "weightChange": 0.75
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 19000,
            "weightChange": 0.38
          },
          {
            "code": "3037",
            "name": "欣興",
            "action": "增持",
            "sharesChange": 83000,
            "weightChange": 0.32
          },
          {
            "code": "2408",
            "name": "南亞科",
            "action": "新增",
            "sharesChange": 2440000,
            "weightChange": 2.95
          },
          {
            "code": "2376",
            "name": "技嘉",
            "action": "新增",
            "sharesChange": 2621000,
            "weightChange": 2.84
          },
          {
            "code": "FITXN12",
            "name": "台灣證交所加權股價指數",
            "action": "剔除",
            "sharesChange": -135,
            "weightChange": -4.3
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "剔除",
            "sharesChange": -441000,
            "weightChange": -2.72
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.05,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.79,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.45,
          "shares": 38000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.36,
          "shares": 27000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.91,
          "shares": 17000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.42,
          "shares": 18000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 4.22,
          "shares": 44000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4,
          "shares": 116000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.85,
          "shares": 52000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.75,
          "shares": 17000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": []
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.09,
          "shares": 5100000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.8,
          "shares": 1450000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.4,
          "shares": 1800000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.08,
          "shares": 1300000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 5.79,
          "shares": 550000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.48,
          "shares": 5800000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 5.38,
          "shares": 15000000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 3.9,
          "shares": 5000000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 3600000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.61,
          "shares": 4800000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": [
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 500000,
            "weightChange": 0.63
          }
        ]
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 7.81,
          "shares": 1731000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.74,
          "shares": 1246000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.49,
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
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 5.53,
          "shares": 1355000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.91,
          "shares": 3032000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 4.62,
          "shares": 414000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.36,
          "shares": 242000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 4.2,
          "shares": 1743000
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
        "prevAsOf": "20261126",
        "changes": []
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 11.51,
          "shares": 376000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 4.98,
          "shares": 253000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.75,
          "shares": 91000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.7,
          "shares": 118000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.53,
          "shares": 59000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.18,
          "shares": 64000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4,
          "shares": 436000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 3.55,
          "shares": 560000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 3.43,
          "shares": 454000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.4,
          "shares": 58000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": []
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 17,
          "shares": 223000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 8.3,
          "shares": 83500
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.74,
          "shares": 51101
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.47,
          "shares": 239001
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.34,
          "shares": 41002
        },
        {
          "code": "2368",
          "name": "金像電",
          "exchange": "TW",
          "weightPct": 4.82,
          "shares": 136000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.73,
          "shares": 29000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.75,
          "shares": 19550
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.62,
          "shares": 417000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.12,
          "shares": 52000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "減持",
            "sharesChange": -7000,
            "weightChange": -1.18
          },
          {
            "code": "2368",
            "name": "金像電",
            "action": "增持",
            "sharesChange": 24000,
            "weightChange": 1.03
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.62,
          "shares": 142000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.44,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.32,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.31,
          "shares": 80000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.42,
          "shares": 38000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.27,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.51,
          "shares": 170000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 3.18,
          "shares": 63000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.13,
          "shares": 217000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.05,
          "shares": 442000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": [
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 12000,
            "weightChange": 0.13
          }
        ]
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.91,
          "shares": 5325
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 8.45,
          "shares": 15108
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.17,
          "shares": 4823
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.83,
          "shares": 8253
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.42,
          "shares": 1652
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 4.35,
          "shares": 18102
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.2,
          "shares": 2360
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4,
          "shares": 1863
        },
        {
          "code": "GOOG",
          "name": "Alphabet - Class C Capital Stock",
          "exchange": "US",
          "weightPct": 3.44,
          "shares": 2892
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.38,
          "shares": 4704
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": [
          {
            "code": "TSLA",
            "name": "Tesla",
            "action": "減持",
            "sharesChange": -178,
            "weightChange": -0.33
          },
          {
            "code": "AMZN",
            "name": "Amazon",
            "action": "增持",
            "sharesChange": 272,
            "weightChange": 0.16
          },
          {
            "code": "AMD",
            "name": "AMD",
            "action": "增持",
            "sharesChange": 166,
            "weightChange": 0.24
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.97,
          "shares": 18000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 6.3,
          "shares": 3000
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 6.03,
          "shares": 1600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.26,
          "shares": 2800
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.83,
          "shares": 3000
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.82,
          "shares": 450
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.37,
          "shares": 1400
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 4.17,
          "shares": 1800
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.7,
          "shares": 800
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 3.42,
          "shares": 1250
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 7.22,
          "shares": 116560
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 5.5,
          "shares": 159480
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.98,
          "shares": 64600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.69,
          "shares": 151860
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.25,
          "shares": 518000
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 4.19,
          "shares": 93320
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 3.41,
          "shares": 19380
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 3.05,
          "shares": 115363
        },
        {
          "code": "GE",
          "name": "GE Aerospace",
          "exchange": "US",
          "weightPct": 3.04,
          "shares": 75800
        },
        {
          "code": "PANW",
          "name": "Palo Alto",
          "exchange": "US",
          "weightPct": 3.01,
          "shares": 67000
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": [
          {
            "code": "PANW",
            "name": "Palo Alto",
            "action": "新增",
            "sharesChange": 67000,
            "weightChange": 3.01
          },
          {
            "code": "BE",
            "name": "Bloom Energy",
            "action": "剔除",
            "sharesChange": -157053,
            "weightChange": -3.05
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261127",
      "holdings": [
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 5.83,
          "shares": 41772
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.49,
          "shares": 28556
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.78,
          "shares": 29991
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.1,
          "shares": 17373
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 3.71,
          "shares": 45209
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.65,
          "shares": 72940
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.43,
          "shares": 58576
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.36,
          "shares": 132000
        },
        {
          "code": "ABBV",
          "name": "AbbVie",
          "exchange": "US",
          "weightPct": 3.14,
          "shares": 27170
        },
        {
          "code": "WDC",
          "name": "Western Digital",
          "exchange": "US",
          "weightPct": 2.95,
          "shares": 27614
        }
      ],
      "diff": {
        "prevAsOf": "20261126",
        "changes": [
          {
            "code": "CRWD",
            "name": "CrowdStrike Holdings",
            "action": "減持",
            "sharesChange": -9537,
            "weightChange": -0.75
          },
          {
            "code": "WDC",
            "name": "Western Digital",
            "action": "新增",
            "sharesChange": 27614,
            "weightChange": 2.95
          },
          {
            "code": "STX",
            "name": "Seagate",
            "action": "剔除",
            "sharesChange": -15810,
            "weightChange": -2.95
          }
        ]
      }
    }
  },
  "summaryTw": {
    "fundsWithDiff": 12,
    "totalActiveStocks": 14,
    "topBought": [
      {
        "code": "2408",
        "name": "南亞科",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 3059000
      },
      {
        "code": "1303",
        "name": "南亞",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 512000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 296000
      },
      {
        "code": "2376",
        "name": "技嘉",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 2621000
      },
      {
        "code": "3711",
        "name": "日月光投控",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 2121000
      },
      {
        "code": "2308",
        "name": "台達電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 165000
      },
      {
        "code": "6223",
        "name": "旺矽",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 130000
      },
      {
        "code": "3037",
        "name": "欣興",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 83000
      },
      {
        "code": "2368",
        "name": "金像電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 24000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 19000
      }
    ],
    "topSold": [
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": -121000
      },
      {
        "code": "3443",
        "name": "創意",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -35000
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -7000
      },
      {
        "code": "FITXN12",
        "name": "台灣證交所加權股價指數",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -135
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
        "code": "PANW",
        "name": "Palo Alto",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 67000
      },
      {
        "code": "WDC",
        "name": "Western Digital",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 27614
      },
      {
        "code": "AMZN",
        "name": "Amazon",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 272
      },
      {
        "code": "AMD",
        "name": "AMD",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 166
      }
    ],
    "topSold": [
      {
        "code": "BE",
        "name": "Bloom Energy",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -157053
      },
      {
        "code": "STX",
        "name": "Seagate",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -15810
      },
      {
        "code": "CRWD",
        "name": "CrowdStrike Holdings",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -9537
      },
      {
        "code": "TSLA",
        "name": "Tesla",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -178
      }
    ],
    "concentrationPct": 62.5,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
