/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-08T00:55:40.699Z",
  "tradeDate": "20260907",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260907",
        "financingAmountYi": {
          "prevBalance": 5818.95,
          "balance": 5882.72,
          "change": 63.77,
          "raw": [
            "融資金額(仟元)",
            "39,672,969",
            "33,122,413",
            "173,565",
            "581,894,588",
            "588,271,579"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9018943,
          "balance": 9073251,
          "change": 54308,
          "raw": [
            "融資(交易單位)",
            "417,379",
            "357,774",
            "5,297",
            "9,018,943",
            "9,073,251"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 219160,
          "balance": 211213,
          "change": -7947,
          "raw": [
            "融券(交易單位)",
            "31,914",
            "24,829",
            "862",
            "219,160",
            "211,213"
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
        "date": "20260907",
        "unit": "億元",
        "foreign": 883.08,
        "investmentTrust": 87.24,
        "dealer": 156.88,
        "dealerSelf": 59.72,
        "dealerHedge": 97.16,
        "total": 1127.19,
        "checksum": 1127.2,
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
        "date": "20260907",
        "requestedDate": "20260907",
        "matchedRequest": true,
        "rocDate": "115/09/07",
        "turnoverYi": 9979.45,
        "taiexClose": 47326.27,
        "taiexChange": 775.14
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260907",
        "index": {
          "close": 409.33,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260908",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 409.33,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 47326.27,
          "field": "y",
          "misDate": "20260908"
        },
        "turnoverYi": 2095.64,
        "quoteCount": 10984
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260907",
        "contractMonth": "202609",
        "close": 47470,
        "change": 761,
        "volume": 43189,
        "openInterest": 103693,
        "session": "一般",
        "rowCount": 24,
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
