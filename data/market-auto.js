/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-02T23:40:43.807Z",
  "tradeDate": "20261102",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261102",
        "financingAmountYi": {
          "prevBalance": 6234.68,
          "balance": 6226.99,
          "change": -7.69,
          "raw": [
            "融資金額(仟元)",
            "15,543,774",
            "15,578,154",
            "734,141",
            "623,467,886",
            "622,699,365"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9555726,
          "balance": 9571091,
          "change": 15365,
          "raw": [
            "融資(交易單位)",
            "228,924",
            "207,033",
            "6,526",
            "9,555,726",
            "9,571,091"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 197359,
          "balance": 194930,
          "change": -2429,
          "raw": [
            "融券(交易單位)",
            "26,710",
            "25,113",
            "832",
            "197,359",
            "194,930"
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
        "date": "20261102",
        "unit": "億元",
        "foreign": -735.21,
        "investmentTrust": 338.16,
        "dealer": -152.89,
        "dealerSelf": 4.66,
        "dealerHedge": -157.55,
        "total": -549.93,
        "checksum": -549.94,
        "checksumDelta": -0.01,
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
        "date": "20261102",
        "requestedDate": "20261102",
        "matchedRequest": true,
        "rocDate": "115/11/02",
        "turnoverYi": 7996.88,
        "taiexClose": 44920.14,
        "taiexChange": -291.69
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261102",
        "index": {
          "close": 369.24,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261103",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 369.24,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 44920.14,
          "field": "y",
          "misDate": "20261103"
        },
        "turnoverYi": 1614.88,
        "quoteCount": 13454
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261102",
        "contractMonth": "202611",
        "close": 45256,
        "change": -44,
        "volume": 52221,
        "openInterest": 120078,
        "session": "一般",
        "rowCount": 23,
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
