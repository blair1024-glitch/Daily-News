/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-20T18:58:55.572Z",
  "tradeDate": "20261120",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261120",
        "financingAmountYi": {
          "prevBalance": 4843.68,
          "balance": 4352.27,
          "change": -491.41,
          "raw": [
            "融資金額(仟元)",
            "20,552,809",
            "60,170,406",
            "9,523,496",
            "484,368,360",
            "435,227,267"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8947612,
          "balance": 8398744,
          "change": -548868,
          "raw": [
            "融資(交易單位)",
            "564,938",
            "1,068,300",
            "45,506",
            "8,947,612",
            "8,398,744"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 209819,
          "balance": 199791,
          "change": -10028,
          "raw": [
            "融券(交易單位)",
            "31,761",
            "36,002",
            "14,269",
            "209,819",
            "199,791"
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
        "date": "20261120",
        "unit": "億元",
        "foreign": -95.11,
        "investmentTrust": -73.47,
        "dealer": -340.83,
        "dealerSelf": -50.68,
        "dealerHedge": -290.15,
        "total": -509.41,
        "checksum": -509.41,
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
        "date": "20261120",
        "requestedDate": "20261120",
        "matchedRequest": true,
        "rocDate": "115/11/20",
        "turnoverYi": 9353.1,
        "taiexClose": 36033.29,
        "taiexChange": -2393.6
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261120",
        "index": {
          "close": 263.31,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261120",
          "open": 280.79,
          "high": 280.79,
          "low": 262.77,
          "prevClose": 285.33,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 36033.29,
          "field": "z",
          "misDate": "20261120"
        },
        "turnoverYi": 971.27,
        "quoteCount": 13807
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261120",
        "contractMonth": "202612",
        "close": 35875,
        "change": -2732,
        "volume": 109453,
        "openInterest": 128939,
        "session": "一般",
        "rowCount": 27,
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
