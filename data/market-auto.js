/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-14T02:55:16.113Z",
  "tradeDate": "20261113",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261113",
        "financingAmountYi": {
          "prevBalance": 5334.75,
          "balance": 5365.99,
          "change": 31.24,
          "raw": [
            "融資金額(仟元)",
            "26,592,882",
            "22,557,491",
            "911,082",
            "533,474,629",
            "536,598,938"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9016207,
          "balance": 9021098,
          "change": 4891,
          "raw": [
            "融資(交易單位)",
            "374,161",
            "355,423",
            "13,847",
            "9,016,207",
            "9,021,098"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 210522,
          "balance": 208773,
          "change": -1749,
          "raw": [
            "融券(交易單位)",
            "22,702",
            "24,779",
            "3,826",
            "210,522",
            "208,773"
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
        "date": "20261113",
        "unit": "億元",
        "foreign": 288.37,
        "investmentTrust": 95.39,
        "dealer": 68.93,
        "dealerSelf": 42.99,
        "dealerHedge": 25.94,
        "total": 452.68,
        "checksum": 452.69,
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
        "date": "20261113",
        "requestedDate": "20261113",
        "matchedRequest": true,
        "rocDate": "115/11/13",
        "turnoverYi": 9515.8,
        "taiexClose": 43675.12,
        "taiexChange": 583.25
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261113",
        "index": {
          "close": 342.41,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261113",
          "open": 338.33,
          "high": 351.22,
          "low": 338.33,
          "prevClose": 335.73,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 43675.12,
          "field": "z",
          "misDate": "20261113"
        },
        "turnoverYi": 2242.88,
        "quoteCount": 13807
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261113",
        "contractMonth": "202611",
        "close": 43834,
        "change": 706,
        "volume": 94919,
        "openInterest": 105228,
        "session": "一般",
        "rowCount": 28,
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
