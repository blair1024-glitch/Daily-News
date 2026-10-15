/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-15T01:14:04.056Z",
  "tradeDate": "20261014",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261014",
        "financingAmountYi": {
          "prevBalance": 6449.79,
          "balance": 6515.67,
          "change": 65.88,
          "raw": [
            "融資金額(仟元)",
            "33,505,950",
            "26,585,425",
            "331,760",
            "644,978,625",
            "651,567,390"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9430480,
          "balance": 9467251,
          "change": 36771,
          "raw": [
            "融資(交易單位)",
            "388,752",
            "343,226",
            "8,755",
            "9,430,480",
            "9,467,251"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 225459,
          "balance": 228653,
          "change": 3194,
          "raw": [
            "融券(交易單位)",
            "20,792",
            "25,360",
            "1,374",
            "225,459",
            "228,653"
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
        "date": "20261014",
        "unit": "億元",
        "foreign": -200.37,
        "investmentTrust": 160.27,
        "dealer": -114.71,
        "dealerSelf": -25.1,
        "dealerHedge": -89.61,
        "total": -154.81,
        "checksum": -154.81,
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
        "date": "20261014",
        "requestedDate": "20261014",
        "matchedRequest": true,
        "rocDate": "115/10/14",
        "turnoverYi": 9781.37,
        "taiexClose": 48625.83,
        "taiexChange": 284.52
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261014",
        "index": {
          "close": 420.13,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261015",
          "open": 415.3,
          "high": 415.3,
          "low": 401.75,
          "prevClose": 420.13,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 48625.83,
          "field": "y",
          "misDate": "20261015"
        },
        "turnoverYi": 2333.7,
        "quoteCount": 12466
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261014",
        "contractMonth": "202610",
        "close": 48792,
        "change": 400,
        "volume": 44607,
        "openInterest": 105601,
        "session": "一般",
        "rowCount": 25,
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
