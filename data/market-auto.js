/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-02T16:30:55.335Z",
  "tradeDate": "20261002",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261002",
        "financingAmountYi": {
          "prevBalance": 6298.67,
          "balance": 6351.04,
          "change": 52.37,
          "raw": [
            "融資金額(仟元)",
            "38,580,336",
            "32,884,454",
            "458,653",
            "629,867,193",
            "635,104,422"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9352810,
          "balance": 9398006,
          "change": 45196,
          "raw": [
            "融資(交易單位)",
            "409,572",
            "359,687",
            "4,689",
            "9,352,810",
            "9,398,006"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 233322,
          "balance": 231986,
          "change": -1336,
          "raw": [
            "融券(交易單位)",
            "15,674",
            "18,798",
            "4,460",
            "233,322",
            "231,986"
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
        "date": "20261002",
        "unit": "億元",
        "foreign": 26.22,
        "investmentTrust": 57.69,
        "dealer": 20.26,
        "dealerSelf": 47.41,
        "dealerHedge": -27.15,
        "total": 104.17,
        "checksum": 104.17,
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
        "date": "20261002",
        "requestedDate": "20261002",
        "matchedRequest": true,
        "rocDate": "115/10/02",
        "turnoverYi": 9382.22,
        "taiexClose": 48475.74,
        "taiexChange": 122.25
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261002",
        "index": {
          "close": 426.93,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261002",
          "open": 419.94,
          "high": 426.93,
          "low": 419.94,
          "prevClose": 418.82,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 48475.74,
          "field": "z",
          "misDate": "20261002"
        },
        "turnoverYi": 2805.67,
        "quoteCount": 11928
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261002",
        "contractMonth": "202610",
        "close": 48671,
        "change": -27,
        "volume": 34014,
        "openInterest": 106691,
        "session": "一般",
        "rowCount": 21,
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
