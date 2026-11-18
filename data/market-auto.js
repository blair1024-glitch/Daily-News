/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-18T19:15:08.247Z",
  "tradeDate": "20261118",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261118",
        "financingAmountYi": {
          "prevBalance": 5087.21,
          "balance": 5080.27,
          "change": -6.94,
          "raw": [
            "融資金額(仟元)",
            "23,286,419",
            "22,334,185",
            "1,647,112",
            "508,721,448",
            "508,026,570"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8986680,
          "balance": 9092268,
          "change": 105588,
          "raw": [
            "融資(交易單位)",
            "421,112",
            "302,127",
            "13,397",
            "8,986,680",
            "9,092,268"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 207959,
          "balance": 193544,
          "change": -14415,
          "raw": [
            "融券(交易單位)",
            "37,005",
            "28,420",
            "5,830",
            "207,959",
            "193,544"
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
        "date": "20261118",
        "unit": "億元",
        "foreign": -765.64,
        "investmentTrust": 166.12,
        "dealer": -42.01,
        "dealerSelf": 54.72,
        "dealerHedge": -96.73,
        "total": -641.53,
        "checksum": -641.53,
        "checksumDelta": 0,
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
        "date": "20261118",
        "requestedDate": "20261118",
        "matchedRequest": true,
        "rocDate": "115/11/18",
        "turnoverYi": 10751.74,
        "taiexClose": 40194.91,
        "taiexChange": 102.8
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261118",
        "index": {
          "close": 307.55,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261118",
          "open": 308.37,
          "high": 313.19,
          "low": 292.51,
          "prevClose": 306.61,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 40194.91,
          "field": "z",
          "misDate": "20261118"
        },
        "turnoverYi": 2196.73,
        "quoteCount": 13900
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261118",
        "contractMonth": "202611",
        "close": 40025,
        "change": 14,
        "volume": 36931,
        "openInterest": 13631,
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
