/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-11-10T04:43:58.532Z",
  "date": "20261110",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 16,
          "shares": 8250000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.56,
          "shares": 1720000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.22,
          "shares": 2370000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.04,
          "shares": 1030000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.73,
          "shares": 7200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.24,
          "shares": 1200000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.13,
          "shares": 710000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.14,
          "shares": 8800000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 2.99,
          "shares": 930000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 2.92,
          "shares": 12800000
        }
      ],
      "diff": null
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.51,
          "shares": 249000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.76,
          "shares": 79000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.48,
          "shares": 144000
        },
        {
          "code": "2317",
          "name": "鴻海",
          "exchange": "TW",
          "weightPct": 3.48,
          "shares": 2453000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.31,
          "shares": 2117000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 90000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.81,
          "shares": 625000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.79,
          "shares": 404000
        }
      ],
      "diff": null
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.58,
          "shares": 17724000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.37,
          "shares": 5712000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.93,
          "shares": 4328000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.65,
          "shares": 6655000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.88,
          "shares": 19739000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.66,
          "shares": 2552000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.8,
          "shares": 23519000
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.73,
          "shares": 16905000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.65,
          "shares": 2504000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 3.5,
          "shares": 6331000
        }
      ],
      "diff": null
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.53,
          "shares": 1609000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 8.45,
          "shares": 957000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 7.47,
          "shares": 7059000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.42,
          "shares": 3888000
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 4.48,
          "shares": 2829000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.33,
          "shares": 1180000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.14,
          "shares": 325000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 3.06,
          "shares": 262000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 2.98,
          "shares": 3158000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 2.97,
          "shares": 1001000
        }
      ],
      "diff": null
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.69,
          "shares": 3842000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 3.42,
          "shares": 125000
        },
        {
          "code": "2881",
          "name": "富邦金",
          "exchange": "TW",
          "weightPct": 3.24,
          "shares": 1958000
        },
        {
          "code": "2882",
          "name": "國泰金",
          "exchange": "TW",
          "weightPct": 3.18,
          "shares": 2657000
        },
        {
          "code": "2887",
          "name": "台新新光金",
          "exchange": "TW",
          "weightPct": 2.97,
          "shares": 6904000
        },
        {
          "code": "2885",
          "name": "元大金",
          "exchange": "TW",
          "weightPct": 2.92,
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
          "weightPct": 2.5,
          "shares": 945000
        },
        {
          "code": "1326",
          "name": "台化",
          "exchange": "TW",
          "weightPct": 2.43,
          "shares": 3277000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.18,
          "shares": 347000
        }
      ],
      "diff": null
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.72,
          "shares": 1726000
        },
        {
          "code": "6446",
          "name": "藥華藥",
          "exchange": "TW",
          "weightPct": 4.13,
          "shares": 790000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.55,
          "shares": 165000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.3,
          "shares": 526036
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 3.24,
          "shares": 4684000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.08,
          "shares": 198000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 2.63,
          "shares": 86000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.59,
          "shares": 585000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.59,
          "shares": 168000
        },
        {
          "code": "2027",
          "name": "大成鋼",
          "exchange": "TW",
          "weightPct": 2.52,
          "shares": 13722000
        }
      ],
      "diff": null
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.84,
          "shares": 90000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.12,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.36,
          "shares": 29000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 6.14,
          "shares": 17000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.47,
          "shares": 18000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.42,
          "shares": 27000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 4.73,
          "shares": 116000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 3.89,
          "shares": 75000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.6,
          "shares": 36000
        },
        {
          "code": "6510",
          "name": "精測",
          "exchange": "TW",
          "weightPct": 3.42,
          "shares": 25000
        }
      ],
      "diff": null
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.83,
          "shares": 4200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.27,
          "shares": 1350000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 7.3,
          "shares": 11700000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.29,
          "shares": 1160000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.96,
          "shares": 5450000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.89,
          "shares": 510000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.77,
          "shares": 1580000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.67,
          "shares": 3600000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 5.47,
          "shares": 4700000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 5.1,
          "shares": 11500000
        }
      ],
      "diff": null
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.8,
          "shares": 1246000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.06,
          "shares": 610000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 6,
          "shares": 1731000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.71,
          "shares": 921000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.61,
          "shares": 3032000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.45,
          "shares": 1743000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.65,
          "shares": 1355000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 4.26,
          "shares": 218000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.13,
          "shares": 252000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 3.98,
          "shares": 12620868
        }
      ],
      "diff": null
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.38,
          "shares": 465000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 5.35,
          "shares": 62000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 5,
          "shares": 1476000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.64,
          "shares": 523000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.72,
          "shares": 382000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.37,
          "shares": 281000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.25,
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
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 3.07,
          "shares": 64000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 3.01,
          "shares": 632000
        }
      ],
      "diff": null
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 18.14,
          "shares": 249000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.77,
          "shares": 51002
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.69,
          "shares": 55101
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.25,
          "shares": 75500
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.88,
          "shares": 238001
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.96,
          "shares": 27000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.95,
          "shares": 18050
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.85,
          "shares": 31901
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 3.4,
          "shares": 13001
        },
        {
          "code": "3711",
          "name": "日月光投控",
          "exchange": "TW",
          "weightPct": 3.24,
          "shares": 177002
        }
      ],
      "diff": null
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.27,
          "shares": 149000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.12,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.22,
          "shares": 70000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.63,
          "shares": 80000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.15,
          "shares": 33000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.39,
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
          "weightPct": 3.37,
          "shares": 217000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.99,
          "shares": 93000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 2.97,
          "shares": 16000
        }
      ],
      "diff": null
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.26,
          "shares": 5702
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 7.41,
          "shares": 13644
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 6.8,
          "shares": 22116
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 4.97,
          "shares": 8253
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.42,
          "shares": 4214
        },
        {
          "code": "CRSP",
          "name": "CRISPR Therapeutics",
          "exchange": "US",
          "weightPct": 4.17,
          "shares": 20609
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 3.97,
          "shares": 14479
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
          "weightPct": 3.46,
          "shares": 7089
        },
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 3.31,
          "shares": 1342
        }
      ],
      "diff": null
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.46,
          "shares": 18000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.72,
          "shares": 5000
        },
        {
          "code": "GOOGL",
          "name": "Alphabet - Class A Common Stock",
          "exchange": "US",
          "weightPct": 6.15,
          "shares": 3000
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 5.23,
          "shares": 2800
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.69,
          "shares": 3000
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.59,
          "shares": 1200
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.53,
          "shares": 1400
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 4.39,
          "shares": 450
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.98,
          "shares": 800
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.81,
          "shares": 1800
        }
      ],
      "diff": null
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 7.75,
          "shares": 126080
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.07,
          "shares": 280800
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 5.24,
          "shares": 100699
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 5.05,
          "shares": 251300
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
          "weightPct": 4.57,
          "shares": 64600
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.56,
          "shares": 151860
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
          "weightPct": 3.52,
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
      "diff": null
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261110",
      "holdings": [
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 5.09,
          "shares": 41772
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.9,
          "shares": 63557
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.78,
          "shares": 25341
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.89,
          "shares": 58576
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.48,
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
          "code": "DT",
          "name": "Dynatrace",
          "exchange": "US",
          "weightPct": 2.97,
          "shares": 191966
        },
        {
          "code": "PANW",
          "name": "Palo Alto",
          "exchange": "US",
          "weightPct": 2.87,
          "shares": 25679
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 2.85,
          "shares": 360000
        },
        {
          "code": "OKTA",
          "name": "Okta",
          "exchange": "US",
          "weightPct": 2.74,
          "shares": 45747
        }
      ],
      "diff": null
    }
  },
  "summaryTw": {
    "fundsWithDiff": 0,
    "totalActiveStocks": 0,
    "topBought": [],
    "topSold": [],
    "concentrationPct": null,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 0,
    "totalActiveStocks": 0,
    "topBought": [],
    "topSold": [],
    "concentrationPct": null,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
