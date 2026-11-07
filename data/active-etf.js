/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-07T03:03:42.620Z",
  "date": "20261107",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.08,
          "shares": 8100000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.42,
          "shares": 1720000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.09,
          "shares": 2370000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.01,
          "shares": 1030000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.87,
          "shares": 7200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.26,
          "shares": 1200000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.1,
          "shares": 710000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 8800000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 2.98,
          "shares": 930000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 2.85,
          "shares": 12800000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 100000,
            "weightChange": 0.24
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 50000,
            "weightChange": 0.31
          },
          {
            "code": "1303",
            "name": "南亞",
            "action": "新增",
            "sharesChange": 12800000,
            "weightChange": 2.85
          },
          {
            "code": "3189",
            "name": "景碩",
            "action": "剔除",
            "sharesChange": -4450000,
            "weightChange": -2.91
          }
        ]
      }
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.35,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.44,
          "shares": 249000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.85,
          "shares": 79000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.55,
          "shares": 2453000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.54,
          "shares": 144000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.27,
          "shares": 2117000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.03,
          "shares": 90000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.93,
          "shares": 625000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.75,
          "shares": 404000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": []
      }
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.17,
          "shares": 16580000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.3,
          "shares": 5712000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 7.09,
          "shares": 4328000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.59,
          "shares": 6655000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.15,
          "shares": 19739000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.67,
          "shares": 2532000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.82,
          "shares": 16905000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.77,
          "shares": 23519000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.7,
          "shares": 2504000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 3.47,
          "shares": 6331000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 900000,
            "weightChange": 0.9
          },
          {
            "code": "2454",
            "name": "聯發科",
            "action": "增持",
            "sharesChange": 97000,
            "weightChange": 0.41
          },
          {
            "code": "3653",
            "name": "健策",
            "action": "增持",
            "sharesChange": 20000,
            "weightChange": -0.25
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "新增",
            "sharesChange": 6331000,
            "weightChange": 3.47
          },
          {
            "code": "8046",
            "name": "南電",
            "action": "剔除",
            "sharesChange": -8987000,
            "weightChange": -3.55
          }
        ]
      }
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.8,
          "shares": 1609000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.75,
          "shares": 892000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 7.34,
          "shares": 7059000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.33,
          "shares": 3888000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 3.58,
          "shares": 2300000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.28,
          "shares": 1180000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.14,
          "shares": 321000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 3.05,
          "shares": 988000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 3.02,
          "shares": 3158000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 262000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "6139",
            "name": "亞翔",
            "action": "增持",
            "sharesChange": 50000,
            "weightChange": 0.01
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 4000,
            "weightChange": -0.04
          },
          {
            "code": "2360",
            "name": "致茂",
            "action": "增持",
            "sharesChange": 13000,
            "weightChange": -0.13
          },
          {
            "code": "3008",
            "name": "大立光",
            "action": "增持",
            "sharesChange": 3000,
            "weightChange": 0.15
          }
        ]
      }
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.7,
          "shares": 3842000
        },
        {
          "code": "2881",
          "name": "富邦金",
          "exchange": "TW",
          "weightPct": 3.26,
          "shares": 1958000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.25,
          "shares": 125000
        },
        {
          "code": "2882",
          "name": "國泰金",
          "exchange": "TW",
          "weightPct": 3.17,
          "shares": 2657000
        },
        {
          "code": "2887",
          "name": "台新新光金",
          "exchange": "TW",
          "weightPct": 2.99,
          "shares": 6904000
        },
        {
          "code": "2885",
          "name": "元大金",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 3902880
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 2.74,
          "shares": 114000
        },
        {
          "code": "2603",
          "name": "長榮",
          "exchange": "TW",
          "weightPct": 2.62,
          "shares": 945000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.31,
          "shares": 3277000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.15,
          "shares": 347000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": []
      }
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.38,
          "shares": 1680000
        },
        {
          "code": "6446",
          "name": "藥華藥",
          "exchange": "TW",
          "weightPct": 3.63,
          "shares": 713000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.08,
          "shares": 4137000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 146000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 2.89,
          "shares": 463036
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.63,
          "shares": 172000
        },
        {
          "code": "4904",
          "name": "遠傳",
          "exchange": "TW",
          "weightPct": 2.5,
          "shares": 5567000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.47,
          "shares": 168000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.47,
          "shares": 585000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.21,
          "shares": 73000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "2059",
            "name": "川湖",
            "action": "新增",
            "sharesChange": 73000,
            "weightChange": 2.21
          },
          {
            "code": "2345",
            "name": "智邦",
            "action": "剔除",
            "sharesChange": -424000,
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
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 11.07,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.92,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.38,
          "shares": 29000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.42,
          "shares": 18000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.27,
          "shares": 27000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.86,
          "shares": 116000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.65,
          "shares": 13000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 3.91,
          "shares": 75000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.5,
          "shares": 36000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 3.36,
          "shares": 44000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": []
      }
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16.25,
          "shares": 4200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.35,
          "shares": 1350000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 7.28,
          "shares": 11700000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.13,
          "shares": 5410000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.06,
          "shares": 1150000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.99,
          "shares": 510000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.49,
          "shares": 1550000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 5.65,
          "shares": 4650000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.63,
          "shares": 3550000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.99,
          "shares": 11500000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "2059",
            "name": "川湖",
            "action": "增持",
            "sharesChange": 15000,
            "weightChange": 0.25
          },
          {
            "code": "3017",
            "name": "奇鋐",
            "action": "增持",
            "sharesChange": 50000,
            "weightChange": -0.06
          }
        ]
      }
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 7.21,
          "shares": 1246000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.97,
          "shares": 3032000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 5.79,
          "shares": 560000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.76,
          "shares": 921000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 5.67,
          "shares": 1581000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.57,
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
          "weightPct": 4.47,
          "shares": 218000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 4.02,
          "shares": 12620868
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.92,
          "shares": 323000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "3037",
            "name": "欣興",
            "action": "增持",
            "sharesChange": 350000,
            "weightChange": 0.53
          },
          {
            "code": "2383",
            "name": "台光電",
            "action": "增持",
            "sharesChange": 55000,
            "weightChange": 0.54
          }
        ]
      }
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.54,
          "shares": 465000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.25,
          "shares": 62000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.82,
          "shares": 1476000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.79,
          "shares": 523000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 382000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.35,
          "shares": 281000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.23,
          "shares": 62000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.2,
          "shares": 31000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.97,
          "shares": 395000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.96,
          "shares": 632000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "2408",
            "name": "南亞科",
            "action": "新增",
            "sharesChange": 632000,
            "weightChange": 2.96
          },
          {
            "code": "6213",
            "name": "聯茂",
            "action": "剔除",
            "sharesChange": -435000,
            "weightChange": -3.08
          }
        ]
      }
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 18.34,
          "shares": 249000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.72,
          "shares": 51002
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.45,
          "shares": 55101
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.02,
          "shares": 75500
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.22,
          "shares": 208001
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.87,
          "shares": 27000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.79,
          "shares": 31901
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.39,
          "shares": 13001
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.22,
          "shares": 15050
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 3.13,
          "shares": 100002
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "增持",
            "sharesChange": 5000,
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
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.8,
          "shares": 154000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.19,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.07,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.5,
          "shares": 80000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.13,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.43,
          "shares": 170000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.9,
          "shares": 38000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.41,
          "shares": 217000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.99,
          "shares": 138000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 2.98,
          "shares": 8800
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "2330",
            "name": "台積電",
            "action": "減持",
            "sharesChange": -9000,
            "weightChange": -0.41
          }
        ]
      }
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.12,
          "shares": 5702
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
          "weightPct": 6.47,
          "shares": 22116
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.93,
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
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 4.18,
          "shares": 14479
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 4.16,
          "shares": 20609
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.61,
          "shares": 4788
        },
        {
          "code": "TWST",
          "name": "Twist Bioscience",
          "exchange": "US",
          "weightPct": 3.55,
          "shares": 7089
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 3.37,
          "shares": 1342
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "META",
            "name": "Meta",
            "action": "新增",
            "sharesChange": 1342,
            "weightChange": 3.37
          },
          {
            "code": "COIN",
            "name": "Coinbase",
            "action": "剔除",
            "sharesChange": -5855,
            "weightChange": -3.37
          }
        ]
      }
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.92,
          "shares": 18000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.61,
          "shares": 5000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 6.17,
          "shares": 3000
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.3,
          "shares": 2800
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.74,
          "shares": 3000
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.47,
          "shares": 450
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.12,
          "shares": 1400
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.9,
          "shares": 1000
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.82,
          "shares": 800
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.82,
          "shares": 1800
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": []
      }
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 7.9,
          "shares": 126080
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 5.96,
          "shares": 280800
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 4.92,
          "shares": 251300
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 4.83,
          "shares": 266842
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.76,
          "shares": 100699
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.62,
          "shares": 151860
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 4.57,
          "shares": 64600
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 4.34,
          "shares": 131480
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 3.43,
          "shares": 204100
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.23,
          "shares": 406000
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "AMZN",
            "name": "Amazon",
            "action": "增持",
            "sharesChange": 34720,
            "weightChange": 1.26
          },
          {
            "code": "GOOGL",
            "name": "Alphabet - Class A Common Stock",
            "action": "新增",
            "sharesChange": 131480,
            "weightChange": 4.34
          },
          {
            "code": "2330",
            "name": "台積電",
            "action": "新增",
            "sharesChange": 406000,
            "weightChange": 3.23
          },
          {
            "code": "SPCX",
            "name": "SpaceX",
            "action": "剔除",
            "sharesChange": -256528,
            "weightChange": -3.76
          },
          {
            "code": "MU",
            "name": "Micron",
            "action": "剔除",
            "sharesChange": -38005,
            "weightChange": -3.26
          }
        ]
      }
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261107",
      "holdings": [
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 5.14,
          "shares": 41772
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.93,
          "shares": 63557
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.03,
          "shares": 21042
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.8,
          "shares": 58576
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.22,
          "shares": 72940
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 3.21,
          "shares": 132000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.13,
          "shares": 360000
        },
        {
          "code": "NTRA",
          "name": "Natera",
          "exchange": "US",
          "weightPct": 3,
          "shares": 23060
        },
        {
          "code": "DT",
          "name": "Dynatrace",
          "exchange": "US",
          "weightPct": 3,
          "shares": 191966
        },
        {
          "code": "PANW",
          "name": "Palo Alto",
          "exchange": "US",
          "weightPct": 2.89,
          "shares": 25679
        }
      ],
      "diff": {
        "prevAsOf": "20261106",
        "changes": [
          {
            "code": "PANW",
            "name": "Palo Alto",
            "action": "新增",
            "sharesChange": 25679,
            "weightChange": 2.89
          },
          {
            "code": "MU",
            "name": "Micron",
            "action": "剔除",
            "sharesChange": -11372,
            "weightChange": -2.94
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
        "fundsUp": 3,
        "fundsDown": 1,
        "totalSharesChange": 996000
      },
      {
        "code": "2454",
        "name": "聯發科",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 147000
      },
      {
        "code": "2059",
        "name": "川湖",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 88000
      },
      {
        "code": "2383",
        "name": "台光電",
        "fundsUp": 2,
        "fundsDown": 0,
        "totalSharesChange": 59000
      },
      {
        "code": "1303",
        "name": "南亞",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 12800000
      },
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": 5907000
      },
      {
        "code": "2408",
        "name": "南亞科",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 632000
      },
      {
        "code": "3037",
        "name": "欣興",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 350000
      },
      {
        "code": "6139",
        "name": "亞翔",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 50000
      },
      {
        "code": "3017",
        "name": "奇鋐",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 50000
      }
    ],
    "topSold": [
      {
        "code": "8046",
        "name": "南電",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -8987000
      },
      {
        "code": "3189",
        "name": "景碩",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -4450000
      },
      {
        "code": "6213",
        "name": "聯茂",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -435000
      },
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 3,
        "fundsDown": 1,
        "totalSharesChange": 996000
      },
      {
        "code": "2345",
        "name": "智邦",
        "fundsUp": 1,
        "fundsDown": 1,
        "totalSharesChange": 5907000
      }
    ],
    "concentrationPct": 47.83,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 4,
    "totalActiveStocks": 8,
    "topBought": [
      {
        "code": "2330",
        "name": "台積電",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 406000
      },
      {
        "code": "GOOGL",
        "name": "Alphabet - Class A Common Stock",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 131480
      },
      {
        "code": "AMZN",
        "name": "Amazon",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 34720
      },
      {
        "code": "PANW",
        "name": "Palo Alto",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 25679
      },
      {
        "code": "META",
        "name": "Meta",
        "fundsUp": 1,
        "fundsDown": 0,
        "totalSharesChange": 1342
      }
    ],
    "topSold": [
      {
        "code": "MU",
        "name": "Micron",
        "fundsUp": 0,
        "fundsDown": 2,
        "totalSharesChange": -49377
      },
      {
        "code": "SPCX",
        "name": "SpaceX",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -256528
      },
      {
        "code": "COIN",
        "name": "Coinbase",
        "fundsUp": 0,
        "fundsDown": 1,
        "totalSharesChange": -5855
      }
    ],
    "concentrationPct": 66.67,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
