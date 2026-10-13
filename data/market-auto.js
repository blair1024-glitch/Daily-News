/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-13T03:22:03.328Z",
  "tradeDate": "20261012",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261012",
        "financingAmountYi": {
          "prevBalance": 6464.06,
          "balance": 6533.3,
          "change": 69.24,
          "raw": [
            "融資金額(仟元)",
            "33,916,493",
            "26,425,674",
            "567,086",
            "646,405,767",
            "653,329,500"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9403368,
          "balance": 9453100,
          "change": 49732,
          "raw": [
            "融資(交易單位)",
            "372,347",
            "314,516",
            "8,099",
            "9,403,368",
            "9,453,100"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 211946,
          "balance": 216189,
          "change": 4243,
          "raw": [
            "融券(交易單位)",
            "17,138",
            "22,000",
            "619",
            "211,946",
            "216,189"
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
        "date": "20261012",
        "unit": "億元",
        "foreign": -521.98,
        "investmentTrust": 71.41,
        "dealer": -142.94,
        "dealerSelf": -7.99,
        "dealerHedge": -134.95,
        "total": -593.51,
        "checksum": -593.51,
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
        "date": "20261012",
        "requestedDate": "20261012",
        "matchedRequest": true,
        "rocDate": "115/10/12",
        "turnoverYi": 8945.22,
        "taiexClose": 49301.96,
        "taiexChange": -11.48
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261012",
        "index": {
          "close": 427.9,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261013",
          "open": 425.07,
          "high": 425.07,
          "low": 408.39,
          "prevClose": 427.9,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 49301.96,
          "field": "y",
          "misDate": "20261013"
        },
        "turnoverYi": 2276.43,
        "quoteCount": 12316
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261012",
        "contractMonth": "202610",
        "close": 49309,
        "change": -48,
        "volume": 44296,
        "openInterest": 106900,
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
