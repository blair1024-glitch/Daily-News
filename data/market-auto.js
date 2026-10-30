/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-30T16:56:52.531Z",
  "tradeDate": "20261030",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261030",
        "financingAmountYi": {
          "prevBalance": 6339.11,
          "balance": 6234.68,
          "change": -104.43,
          "raw": [
            "融資金額(仟元)",
            "20,744,449",
            "29,996,997",
            "1,190,414",
            "633,910,848",
            "623,467,886"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9588756,
          "balance": 9555729,
          "change": -33027,
          "raw": [
            "融資(交易單位)",
            "353,926",
            "377,224",
            "9,729",
            "9,588,756",
            "9,555,729"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 189002,
          "balance": 197359,
          "change": 8357,
          "raw": [
            "融券(交易單位)",
            "36,026",
            "45,607",
            "1,224",
            "189,002",
            "197,359"
          ]
        },
        "summaryLabels": [
          "融資(交易單位)",
          "融券(交易單位)",
          "融資金額(仟元)"
        ]
      }
    },
    "instTwse": {
      "ok": true,
      "source": "TWSE BFI82U",
      "value": {
        "date": "20261030",
        "unit": "億元",
        "foreign": -1124.67,
        "investmentTrust": 236.19,
        "dealer": -513.69,
        "dealerSelf": -38.4,
        "dealerHedge": -475.29,
        "total": -1402.18,
        "checksum": -1402.17,
        "checksumDelta": 0.01,
        "unitNames": [
          "自營商(自行買賣)",
          "自營商(避險)",
          "投信",
          "外資及陸資(不含外資自營商)",
          "外資自營商",
          "合計"
        ]
      }
    },
    "dailyMarket": {
      "ok": true,
      "source": "TWSE FMTQIK",
      "value": {
        "date": "20261030",
        "requestedDate": "20261030",
        "matchedRequest": true,
        "rocDate": "115/10/30",
        "turnoverYi": 9396.05,
        "taiexClose": 45211.83,
        "taiexChange": -1156.5
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261030",
        "index": {
          "close": 370.26,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261030",
          "open": 384.2,
          "high": 384.2,
          "low": 365.7,
          "prevClose": 387.37,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 45211.83,
          "field": "z",
          "misDate": "20261030"
        },
        "turnoverYi": 2073.76,
        "quoteCount": 13360
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261030",
        "contractMonth": "202611",
        "close": 45301,
        "change": -1268,
        "volume": 73987,
        "openInterest": 119040,
        "session": "一般",
        "rowCount": 26,
        "header": [
          "交易日期",
          "契約",
          "到期月份(週別)",
          "開盤價",
          "最高價",
          "最低價",
          "收盤價",
          "漲跌價",
          "漲跌%",
          "成交量",
          "結算價",
          "未沖銷契約數",
          "最後最佳買價",
          "最後最佳賣價",
          "歷史最高價",
          "歷史最低價",
          "是否因訊息面暫停交易",
          "交易時段",
          "價差對單式委託成交量"
        ]
      }
    }
  }
};
