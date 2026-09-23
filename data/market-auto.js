/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-23T15:19:34.082Z",
  "tradeDate": "20260923",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260923",
        "financingAmountYi": {
          "prevBalance": 6048.61,
          "balance": 6063.68,
          "change": 15.07,
          "raw": [
            "融資金額(仟元)",
            "31,990,172",
            "29,522,628",
            "961,126",
            "604,861,415",
            "606,367,833"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9245367,
          "balance": 9282264,
          "change": 36897,
          "raw": [
            "融資(交易單位)",
            "399,041",
            "347,045",
            "15,099",
            "9,245,367",
            "9,282,264"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 218839,
          "balance": 213059,
          "change": -5780,
          "raw": [
            "融券(交易單位)",
            "21,915",
            "18,230",
            "2,095",
            "218,839",
            "213,059"
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
        "date": "20260923",
        "unit": "億元",
        "foreign": 373.13,
        "investmentTrust": -47.59,
        "dealer": 58.24,
        "dealerSelf": 22.25,
        "dealerHedge": 35.99,
        "total": 383.79,
        "checksum": 383.78,
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
        "date": "20260923",
        "requestedDate": "20260923",
        "matchedRequest": true,
        "rocDate": "115/09/23",
        "turnoverYi": 8946.51,
        "taiexClose": 48157.29,
        "taiexChange": 357.12
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260923",
        "index": {
          "close": 413.76,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20260923",
          "open": 414.83,
          "high": 417.3,
          "low": 411.81,
          "prevClose": 415.17,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 48157.29,
          "field": "z",
          "misDate": "20260923"
        },
        "turnoverYi": 2572.64,
        "quoteCount": 11696
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260923",
        "contractMonth": "202610",
        "close": 48336,
        "change": 111,
        "volume": 32929,
        "openInterest": 103311,
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
