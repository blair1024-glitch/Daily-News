/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-10-20T02:00:23.080Z",
  "date": "20261020",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 16,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一升級50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00403a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.21,
          "shares": 7700000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.98,
          "shares": 7000000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.58,
          "shares": 1115000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.42,
          "shares": 2140000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 4.81,
          "shares": 1500000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.69,
          "shares": 1200000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.06,
          "shares": 680000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 3.71,
          "shares": 930000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.63,
          "shares": 2900000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 3.58,
          "shares": 8800000
        }
      ],
      "diff": null
    },
    "00980A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村臺灣優選",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00980a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.76,
          "shares": 753000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.61,
          "shares": 249000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.55,
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
          "weightPct": 3.93,
          "shares": 2416000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.75,
          "shares": 625000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.65,
          "shares": 104000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 3.55,
          "shares": 404000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 2.98,
          "shares": 103000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 2.56,
          "shares": 1096000
        }
      ],
      "diff": null
    },
    "00981A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動統一台股增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00981a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 10.86,
          "shares": 12392000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.04,
          "shares": 4328000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 7.91,
          "shares": 19499000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.84,
          "shares": 5143000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 7.58,
          "shares": 6303000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.95,
          "shares": 2502000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.75,
          "shares": 2504000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 4.55,
          "shares": 6264000
        },
        {
          "code": "2327",
          "name": "國巨*",
          "exchange": "TW",
          "weightPct": 4.55,
          "shares": 23519000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 4.5,
          "shares": 7582000
        }
      ],
      "diff": null
    },
    "00982A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益台灣強棒",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00982a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 7.95,
          "shares": 1544000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.03,
          "shares": 786000
        },
        {
          "code": "3105",
          "name": "穩懋",
          "exchange": "TW",
          "weightPct": 5.85,
          "shares": 5709000
        },
        {
          "code": "6139",
          "name": "亞翔",
          "exchange": "TW",
          "weightPct": 5.28,
          "shares": 3745000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 4.08,
          "shares": 1016225
        },
        {
          "code": "6531",
          "name": "愛普*",
          "exchange": "TW",
          "weightPct": 3.69,
          "shares": 2110000
        },
        {
          "code": "4958",
          "name": "臻鼎-KY",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 3158000
        },
        {
          "code": "2360",
          "name": "致茂",
          "exchange": "TW",
          "weightPct": 3.63,
          "shares": 851000
        },
        {
          "code": "3491",
          "name": "昇達科",
          "exchange": "TW",
          "weightPct": 3.48,
          "shares": 1180000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 3.37,
          "shares": 309000
        }
      ],
      "diff": null
    },
    "00984A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣高息",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00984a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 4.39,
          "shares": 138000
        },
        {
          "code": "2881",
          "name": "富邦金",
          "exchange": "TW",
          "weightPct": 4.34,
          "shares": 2851000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 4.3,
          "shares": 185000
        },
        {
          "code": "6505",
          "name": "台塑化",
          "exchange": "TW",
          "weightPct": 3.67,
          "shares": 3291000
        },
        {
          "code": "2887",
          "name": "台新新光金",
          "exchange": "TW",
          "weightPct": 3.51,
          "shares": 8631000
        },
        {
          "code": "2885",
          "name": "元大金",
          "exchange": "TW",
          "weightPct": 3.42,
          "shares": 4973880
        },
        {
          "code": "2882",
          "name": "國泰金",
          "exchange": "TW",
          "weightPct": 3.34,
          "shares": 3038000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 3.04,
          "shares": 1043000
        },
        {
          "code": "2395",
          "name": "研華",
          "exchange": "TW",
          "weightPct": 2.52,
          "shares": 386000
        },
        {
          "code": "2883",
          "name": "凱基金",
          "exchange": "TW",
          "weightPct": 2.49,
          "shares": 6789000
        }
      ],
      "diff": null
    },
    "00985A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動野村台灣50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00985a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 13.78,
          "shares": 1680000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 3.25,
          "shares": 146000
        },
        {
          "code": "1216",
          "name": "統一",
          "exchange": "TW",
          "weightPct": 3.16,
          "shares": 11728000
        },
        {
          "code": "7769",
          "name": "鴻勁",
          "exchange": "TW",
          "weightPct": 3.07,
          "shares": 168000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 2.87,
          "shares": 165000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 2.74,
          "shares": 403000
        },
        {
          "code": "4904",
          "name": "遠傳",
          "exchange": "TW",
          "weightPct": 2.74,
          "shares": 7183000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 2.57,
          "shares": 462000
        },
        {
          "code": "3036",
          "name": "文曄",
          "exchange": "TW",
          "weightPct": 2.54,
          "shares": 3650000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 2.5,
          "shares": 392036
        }
      ],
      "diff": null
    },
    "00987A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動台新優勢成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00987a.tw",
      "fetchedDate": "20261020",
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
          "weightPct": 7.55,
          "shares": 52000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.5,
          "shares": 29000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.69,
          "shares": 116000
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 5.35,
          "shares": 75000
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 5.17,
          "shares": 18000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 4.97,
          "shares": 27000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 4.45,
          "shares": 13000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 3.8,
          "shares": 44000
        },
        {
          "code": "6805",
          "name": "富世達",
          "exchange": "TW",
          "weightPct": 3.68,
          "shares": 36000
        }
      ],
      "diff": null
    },
    "00991A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動復華未來50",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00991a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 14.48,
          "shares": 4200000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 9.86,
          "shares": 1350000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 8.54,
          "shares": 5350000
        },
        {
          "code": "2408",
          "name": "南亞科",
          "exchange": "TW",
          "weightPct": 7.27,
          "shares": 11700000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 6.69,
          "shares": 3400000
        },
        {
          "code": "2059",
          "name": "川湖",
          "exchange": "TW",
          "weightPct": 6.64,
          "shares": 470000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 6.47,
          "shares": 4620000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.39,
          "shares": 1350000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 6.29,
          "shares": 1050000
        },
        {
          "code": "1303",
          "name": "南亞",
          "exchange": "TW",
          "weightPct": 4.33,
          "shares": 10000000
        }
      ],
      "diff": null
    },
    "00992A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動群益科技創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00992a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.69,
          "shares": 921000
        },
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 6.17,
          "shares": 1166000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.08,
          "shares": 2482000
        },
        {
          "code": "8996",
          "name": "高力",
          "exchange": "TW",
          "weightPct": 5.55,
          "shares": 1663000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 5.51,
          "shares": 1255000
        },
        {
          "code": "3665",
          "name": "貿聯-KY",
          "exchange": "TW",
          "weightPct": 5.36,
          "shares": 1241000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 4.71,
          "shares": 420000
        },
        {
          "code": "3008",
          "name": "大立光",
          "exchange": "TW",
          "weightPct": 4.41,
          "shares": 323000
        },
        {
          "code": "1815",
          "name": "富喬",
          "exchange": "TW",
          "weightPct": 4.25,
          "shares": 12620868
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.17,
          "shares": 364000
        }
      ],
      "diff": null
    },
    "00993A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動安聯台灣",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00993a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.48,
          "shares": 333000
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 6.21,
          "shares": 526000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.16,
          "shares": 176000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.11,
          "shares": 113000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 4.81,
          "shares": 464000
        },
        {
          "code": "5274",
          "name": "信驊",
          "exchange": "TW",
          "weightPct": 4.32,
          "shares": 25600
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 4.28,
          "shares": 249000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.2,
          "shares": 76000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 4.09,
          "shares": 281000
        },
        {
          "code": "3443",
          "name": "創意",
          "exchange": "TW",
          "weightPct": 3.72,
          "shares": 45000
        }
      ],
      "diff": null
    },
    "00994A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動第一金台股優",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00994a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 15.71,
          "shares": 261000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 6.51,
          "shares": 51002
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 5.77,
          "shares": 55101
        },
        {
          "code": "6274",
          "name": "台燿",
          "exchange": "TW",
          "weightPct": 5.61,
          "shares": 138002
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 5.58,
          "shares": 67500
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 5.22,
          "shares": 187001
        },
        {
          "code": "3653",
          "name": "健策",
          "exchange": "TW",
          "weightPct": 4.41,
          "shares": 27000
        },
        {
          "code": "6223",
          "name": "旺矽",
          "exchange": "TW",
          "weightPct": 4.16,
          "shares": 31901
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 3.27,
          "shares": 95000
        },
        {
          "code": "3189",
          "name": "景碩",
          "exchange": "TW",
          "weightPct": 2.94,
          "shares": 120000
        }
      ],
      "diff": null
    },
    "00995A": {
      "ok": true,
      "category": "tw",
      "fundName": "主動中信台灣卓越",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00995a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 9.59,
          "shares": 174000
        },
        {
          "code": "2383",
          "name": "台光電",
          "exchange": "TW",
          "weightPct": 8.37,
          "shares": 72000
        },
        {
          "code": "2454",
          "name": "聯發科",
          "exchange": "TW",
          "weightPct": 7.06,
          "shares": 74000
        },
        {
          "code": "3017",
          "name": "奇鋐",
          "exchange": "TW",
          "weightPct": 6.03,
          "shares": 80000
        },
        {
          "code": "8046",
          "name": "南電",
          "exchange": "TW",
          "weightPct": 5.32,
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
          "weightPct": 4.51,
          "shares": 38000
        },
        {
          "code": "2308",
          "name": "台達電",
          "exchange": "TW",
          "weightPct": 4.09,
          "shares": 110000
        },
        {
          "code": "2345",
          "name": "智邦",
          "exchange": "TW",
          "weightPct": 3.87,
          "shares": 85000
        },
        {
          "code": "6669",
          "name": "緯穎",
          "exchange": "TW",
          "weightPct": 3.65,
          "shares": 85260
        }
      ],
      "diff": null
    },
    "00983A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動中信ARK創新",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00983a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "TSLA",
          "name": "Tesla",
          "exchange": "US",
          "weightPct": 8.99,
          "shares": 6728
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 6.97,
          "shares": 12688
        },
        {
          "code": "TEM",
          "name": "Tempus",
          "exchange": "US",
          "weightPct": 5.38,
          "shares": 22116
        },
        {
          "code": "CRCL",
          "name": "Circle",
          "exchange": "US",
          "weightPct": 5.38,
          "shares": 17399
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 5.26,
          "shares": 8253
        },
        {
          "code": "COIN",
          "name": "Coinbase",
          "exchange": "US",
          "weightPct": 4.82,
          "shares": 7397
        },
        {
          "code": "HOOD",
          "name": "Robinhood Markets",
          "exchange": "US",
          "weightPct": 4.02,
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
          "weightPct": 3.54,
          "shares": 7089
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.35,
          "shares": 1683
        }
      ],
      "diff": null
    },
    "00986A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動台新龍頭成長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00986a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "2330",
          "name": "台積電",
          "exchange": "TW",
          "weightPct": 8.25,
          "shares": 18000
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 6.57,
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
          "weightPct": 4.54,
          "shares": 1400
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 4.31,
          "shares": 800
        },
        {
          "code": "AMZN",
          "name": "Amazon",
          "exchange": "US",
          "weightPct": 4.3,
          "shares": 2800
        },
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.19,
          "shares": 3000
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 3.94,
          "shares": 780
        },
        {
          "code": "AVGO",
          "name": "Broadcom",
          "exchange": "US",
          "weightPct": 3.63,
          "shares": 1800
        },
        {
          "code": "LLY",
          "name": "Eli Lilly",
          "exchange": "US",
          "weightPct": 3.47,
          "shares": 450
        }
      ],
      "diff": null
    },
    "00990A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動元大AI新經濟",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00990a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "META",
          "name": "Meta",
          "exchange": "US",
          "weightPct": 5.63,
          "shares": 81400
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 5.3,
          "shares": 65999
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 4.87,
          "shares": 233100
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 4.2,
          "shares": 81379
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 4.17,
          "shares": 80920
        },
        {
          "code": "BE",
          "name": "Bloom Energy",
          "exchange": "US",
          "weightPct": 3.91,
          "shares": 181300
        },
        {
          "code": "PLTR",
          "name": "Palantir Technologies",
          "exchange": "US",
          "weightPct": 3.89,
          "shares": 214442
        },
        {
          "code": "SPCX",
          "name": "SpaceX",
          "exchange": "US",
          "weightPct": 3.65,
          "shares": 256528
        },
        {
          "code": "SHOP",
          "name": "Shopify",
          "exchange": "US",
          "weightPct": 3.37,
          "shares": 204100
        },
        {
          "code": "SNOW",
          "name": "Snowflake",
          "exchange": "US",
          "weightPct": 3.03,
          "shares": 101200
        }
      ],
      "diff": null
    },
    "00997A": {
      "ok": true,
      "category": "overseas",
      "fundName": "主動群益美國增長",
      "source": "https://www.moneydj.com/etf/x/basic/basic0007.xdjhtm?etfid=00997a.tw",
      "fetchedDate": "20261020",
      "holdings": [
        {
          "code": "CRWD",
          "name": "CrowdStrike Holdings",
          "exchange": "US",
          "weightPct": 4.28,
          "shares": 63557
        },
        {
          "code": "AAPL",
          "name": "Apple",
          "exchange": "US",
          "weightPct": 4.25,
          "shares": 41772
        },
        {
          "code": "LITE",
          "name": "Lumentum",
          "exchange": "US",
          "weightPct": 3.91,
          "shares": 16015
        },
        {
          "code": "MRVL",
          "name": "Marvell",
          "exchange": "US",
          "weightPct": 3.8,
          "shares": 56385
        },
        {
          "code": "NVDA",
          "name": "NVIDIA",
          "exchange": "US",
          "weightPct": 3.71,
          "shares": 58576
        },
        {
          "code": "3037",
          "name": "欣興",
          "exchange": "TW",
          "weightPct": 3.59,
          "shares": 360000
        },
        {
          "code": "MU",
          "name": "Micron",
          "exchange": "US",
          "weightPct": 3.49,
          "shares": 13432
        },
        {
          "code": "DT",
          "name": "Dynatrace",
          "exchange": "US",
          "weightPct": 3.47,
          "shares": 191966
        },
        {
          "code": "AMD",
          "name": "AMD",
          "exchange": "US",
          "weightPct": 3.31,
          "shares": 21148
        },
        {
          "code": "MSFT",
          "name": "Microsoft",
          "exchange": "US",
          "weightPct": 3.3,
          "shares": 21042
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
