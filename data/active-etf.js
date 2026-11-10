/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-10T23:41:27.544Z",
  "date": "20261111",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.55,
          "shares": 8250000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.69,
          "shares": 1800000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.64,
          "shares": 2450000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.92,
          "shares": 7200000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.92,
          "shares": 1030000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.32,
          "shares": 1200000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.2,
          "shares": 710000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.24,
          "shares": 13600000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.13,
          "shares": 930000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.02,
          "shares": 8800000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 80000,
            "weightChange": 0.13
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 80000,
            "weightChange": 0.42
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 800000,
            "weightChange": 0.32
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.82,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.79,
          "shares": 265000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.1,
          "shares": 84000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.81,
          "shares": 153000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.71,
          "shares": 2251000
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
          "weightPct": 3.17,
          "shares": 96000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.95,
          "shares": 625000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 404000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 16000,
            "weightChange": 0.28
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "增持",
            "sharesChange": 5000,
            "weightChange": 0.34
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 9000,
            "weightChange": 0.33
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 134000,
            "weightChange": 0.4
          },
          {
            "code": "2317",
            "name": "鴻海",
            "action": "增持",
            "sharesChange": 155000,
            "weightChange": 0.11
          },
          {
            "code": "3653",
            "name": "健策",
            "action": "增持",
            "sharesChange": 6000,
            "weightChange": 0.16
          }
        ]
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.98,
          "shares": 17724000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.09,
          "shares": 5712000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.08,
          "shares": 6855000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.99,
          "shares": 4328000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.05,
          "shares": 19739000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.47,
          "shares": 2552000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.01,
          "shares": 7013000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.92,
          "shares": 17522000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.77,
          "shares": 2504000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.62,
          "shares": 23519000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 200000,
            "weightChange": 0.43
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "增持",
            "sharesChange": 682000,
            "weightChange": 0.51
          },
          {
            "code": "3711",
            "name": "日月光投控",
            "action": "增持",
            "sharesChange": 617000,
            "weightChange": 0.19
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.27,
          "shares": 1609000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.24,
          "shares": 957000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 7.69,
          "shares": 7059000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 6.05,
          "shares": 3687000
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
          "weightPct": 3.46,
          "shares": 1180000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.22,
          "shares": 328000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 3158000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 264000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 2.97,
          "shares": 1010000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "6531",
            "name": "愛普*",
            "action": "增持",
            "sharesChange": 858000,
            "weightChange": 1.57
          },
          {
            "code": "6139",
            "name": "亞翔",
            "action": "增持",
            "sharesChange": 34000,
            "weightChange": -0.1
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 3000,
            "weightChange": 0.08
          },
          {
            "code": "3008",
            "name": "大立光",
            "action": "增持",
            "sharesChange": 2000,
            "weightChange": -0.05
          },
          {
            "code": "2360",
            "name": "致茂",
            "action": "增持",
            "sharesChange": 9000,
            "weightChange": 0
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.67,
          "shares": 125000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.63,
          "shares": 3842000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.75,
          "shares": 114000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 2.65,
          "shares": 35000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.62,
          "shares": 29000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.6,
          "shares": 965000
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
          "weightPct": 2.42,
          "shares": 600000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 2.41,
          "shares": 789000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.18,
          "shares": 349000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "3443",
            "name": "創意",
            "action": "新增",
            "sharesChange": 35000,
            "weightChange": 2.65
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "新增",
            "sharesChange": 29000,
            "weightChange": 2.62
          },
          {
            "code": "2603",
            "name": "長榮",
            "action": "增持",
            "sharesChange": 20000,
            "weightChange": 0.1
          },
          {
            "code": "2408",
            "name": "南亞科",
            "action": "新增",
            "sharesChange": 600000,
            "weightChange": 2.42
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "新增",
            "sharesChange": 789000,
            "weightChange": 2.41
          },
          {
            "code": "2395",
            "name": "研華",
            "action": "增持",
            "sharesChange": 2000,
            "weightChange": 0
          },
          {
            "code": "2881",
            "name": "富邦金",
            "action": "剔除",
            "sharesChange": -1958000,
            "weightChange": -3.24
          },
          {
            "code": "2882",
            "name": "國泰金",
            "action": "剔除",
            "sharesChange": -2657000,
            "weightChange": -3.18
          },
          {
            "code": "2887",
            "name": "台新新光金",
            "action": "剔除",
            "sharesChange": -6904000,
            "weightChange": -2.97
          },
          {
            "code": "2885",
            "name": "元大金",
            "action": "剔除",
            "sharesChange": -3902880,
            "weightChange": -2.92
          }
        ]
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.57,
          "shares": 1726000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.59,
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
          "weightPct": 3.29,
          "shares": 4684000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.26,
          "shares": 526036
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 95000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.81,
          "shares": 180000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.8,
          "shares": 595000
        },
        {
          "code": "2027",
          "name": "大成鋼",
          "exchange": "TW",
          "weightPct": 2.47,
          "shares": 13722000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 2.42,
          "shares": 424000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "3653",
            "name": "健策",
            "action": "增持",
            "sharesChange": 3000,
            "weightChange": 0.04
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 21000,
            "weightChange": 0.45
          },
          {
            "code": "2059",
            "name": "川湖",
            "action": "增持",
            "sharesChange": 9000,
            "weightChange": 0.38
          },
          {
            "code": "7769",
            "name": "鴻勁",
            "action": "增持",
            "sharesChange": 12000,
            "weightChange": 0.22
          },
          {
            "code": "2308",
            "name": "台達電",
            "action": "增持",
            "sharesChange": 10000,
            "weightChange": 0.21
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "新增",
            "sharesChange": 424000,
            "weightChange": 2.42
          },
          {
            "code": "6446",
            "name": "藥華藥",
            "action": "剔除",
            "sharesChange": -790000,
            "weightChange": -4.13
          }
        ]
      }
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.71,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.85,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.98,
          "shares": 29000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.75,
          "shares": 17000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.92,
          "shares": 18000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 4.88,
          "shares": 27000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.53,
          "shares": 116000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 3.48,
          "shares": 75000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.38,
          "shares": 36000
        },
        {
          "code": "6510",
          "name": "精測",
          "exchange": "TW",
          "weightPct": 3.29,
          "shares": 25000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": []
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.21,
          "shares": 4200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.44,
          "shares": 1365000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.22,
          "shares": 5500000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.16,
          "shares": 1180000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.07,
          "shares": 1600000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.92,
          "shares": 510000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 5.77,
          "shares": 9500000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.73,
          "shares": 3600000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 5.72,
          "shares": 12500000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 5.55,
          "shares": 4700000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 15000,
            "weightChange": 0.17
          },
          {
            "code": "3037",
            "name": "欣興",
            "action": "增持",
            "sharesChange": 50000,
            "weightChange": 0.26
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 20000,
            "weightChange": -0.13
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 20000,
            "weightChange": 0.3
          },
          {
            "code": "2408",
            "name": "南亞科",
            "action": "減持",
            "sharesChange": -2200000,
            "weightChange": -1.53
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "增持",
            "sharesChange": 1000000,
            "weightChange": 0.62
          }
        ]
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.39,
          "shares": 1246000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.98,
          "shares": 610000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 5.94,
          "shares": 1731000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.77,
          "shares": 921000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.64,
          "shares": 3032000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.5,
          "shares": 1743000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.7,
          "shares": 1355000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.19,
          "shares": 218000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.06,
          "shares": 252000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.67,
          "shares": 323000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "3008",
            "name": "大立光",
            "action": "新增",
            "sharesChange": 323000,
            "weightChange": 3.67
          },
          {
            "code": "1815",
            "name": "富喬",
            "action": "剔除",
            "sharesChange": -12620868,
            "weightChange": -3.98
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.03,
          "shares": 465000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.45,
          "shares": 62000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 5.23,
          "shares": 1476000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.77,
          "shares": 523000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.88,
          "shares": 382000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.46,
          "shares": 281000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.32,
          "shares": 62000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.25,
          "shares": 31000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 88000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 3,
          "shares": 64000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "新增",
            "sharesChange": 88000,
            "weightChange": 3.01
          },
          {
            "code": "2408",
            "name": "南亞科",
            "action": "剔除",
            "sharesChange": -632000,
            "weightChange": -3.01
          }
        ]
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 17.7,
          "shares": 249000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.91,
          "shares": 51002
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.91,
          "shares": 58101
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.54,
          "shares": 75500
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.12,
          "shares": 238001
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.21,
          "shares": 29000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.04,
          "shares": 31901
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.02,
          "shares": 18050
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.46,
          "shares": 13001
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.33,
          "shares": 177002
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 3000,
            "weightChange": 0.22
          },
          {
            "code": "3653",
            "name": "健策",
            "action": "增持",
            "sharesChange": 2000,
            "weightChange": 0.25
          }
        ]
      }
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.78,
          "shares": 149000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.11,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.92,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.76,
          "shares": 80000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.93,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.41,
          "shares": 170000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4,
          "shares": 38000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.39,
          "shares": 217000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.15,
          "shares": 17000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 93000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "3443",
            "name": "創意",
            "action": "增持",
            "sharesChange": 1000,
            "weightChange": 0.18
          }
        ]
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.45,
          "shares": 5799
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 7.63,
          "shares": 13902
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 7.22,
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
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.35,
          "shares": 4214
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 3.99,
          "shares": 20609
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 3.71,
          "shares": 7089
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 3.62,
          "shares": 13860
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 3.33,
          "shares": 1342
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.31,
          "shares": 4788
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "TSLA",
            "name": "Tesla",
            "action": "增持",
            "sharesChange": 97,
            "weightChange": 0.19
          },
          {
            "code": "SPCX",
            "name": "SpaceX",
            "action": "增持",
            "sharesChange": 258,
            "weightChange": 0.22
          },
          {
            "code": "CRCL",
            "name": "Circle",
            "action": "減持",
            "sharesChange": -619,
            "weightChange": -0.35
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.45,
          "shares": 18000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.18,
          "shares": 5000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 5.98,
          "shares": 3000
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.17,
          "shares": 2800
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.93,
          "shares": 1400
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.74,
          "shares": 3000
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.53,
          "shares": 1200
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.4,
          "shares": 450
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.06,
          "shares": 800
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.98,
          "shares": 1800
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 7.62,
          "shares": 126080
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.68,
          "shares": 100699
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 5.56,
          "shares": 280800
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.4,
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
          "weightPct": 4.59,
          "shares": 64600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.49,
          "shares": 151860
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 4.2,
          "shares": 131480
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 3.44,
          "shares": 204100
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 406000
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": []
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261111",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 5.32,
          "shares": 28556
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 5,
          "shares": 41772
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.96,
          "shares": 63557
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.57,
          "shares": 58576
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.54,
          "shares": 72940
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 132000
        },
        {
          "code": "PANW",
          "name": "Palo Alto",
          "exchange": "US",
          "weightPct": 2.9,
          "shares": 25679
        },
        {
          "code": "DT",
          "name": "Dynatrace",
          "exchange": "US",
          "weightPct": 2.88,
          "shares": 191966
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.83,
          "shares": 360000
        },
        {
          "code": "OKTA",
          "name": "Okta",
          "exchange": "US",
          "weightPct": 2.77,
          "shares": 45747
        }
      ],
      "diff": {
        "prevAsOf": "20261110",
        "changes": [
          {
            "code": "MSFT",
            "name": "Microsoft",
            "action": "增持",
            "sharesChange": 3215,
            "weightChange": 0.54
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
        "code": "1303",
        "name": "南亞",
        "fundsUp": 4,
        "fundsDown": 0,
        "totalSharesChange": 2723000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 4,
        "fundsDown": 0,
        "totalSharesChange": 388000
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 4,
        "fundsDown": 0,
        "totalSharesChange": 119000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 4,
        "fundsDown": 0,
        "totalSharesChange": 48000
      },
      {
        "code": "2059",
        "name": "川湖",
        "fundsUp": 3,
        "fundsDown": 0,
        "totalSharesChange": 43000
      },
      {
        "code": "3653",
        "name": "健策",
        "fundsUp": 3,
        "fundsDown": 0,
        "totalSharesChange": 11000
      },
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 1106000
      },
      {
        "code": "3008",
        "name": "大立光",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 325000
      },
      {
        "code": "3443",
        "name": "創意",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 36000
      },
      {
        "code": "6531",
        "name": "愛普*",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 858000
      }
    ],
    "topSold": [
      {
        "code": "2408",
        "name": "南亞科",
        "fundsUp": 1,
        "fundsDown": 2,
        "totalSharesChange": -2232000
      },
      {
        "code": "1815",
        "name": "富喬",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -12620868
      },
      {
        "code": "2887",
        "name": "台新新光金",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -6904000
      },
      {
        "code": "2885",
        "name": "元大金",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -3902880
      },
      {
        "code": "2882",
        "name": "國泰金",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -2657000
      },
      {
        "code": "2881",
        "name": "富邦金",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -1958000
      },
      {
        "code": "6446",
        "name": "藥華藥",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -790000
      }
    ],
    "concentrationPct": 40.43,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 4,
    "topBought": [
      {
        "code": "MSFT",
        "name": "Microsoft",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 3215
      },
      {
        "code": "SPCX",
        "name": "SpaceX",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 258
      },
      {
        "code": "TSLA",
        "name": "Tesla",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 97
      }
    ],
    "topSold": [
      {
        "code": "CRCL",
        "name": "Circle",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -619
      }
    ],
    "concentrationPct": 100,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
