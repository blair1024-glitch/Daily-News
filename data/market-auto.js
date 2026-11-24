/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-24T20:59:55.790Z",
  "tradeDate": "20261124",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261124",
        "financingAmountYi": {
          "prevBalance": 4338.08,
          "balance": 4535.05,
          "change": 196.97,
          "raw": [
            "融資金額(仟元)",
            "27,267,479",
            "6,371,276",
            "1,198,553",
            "433,807,523",
            "453,505,173"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8529881,
          "balance": 9964974,
          "change": 1435093,
          "raw": [
            "融資(交易單位)",
            "1,701,243",
            "248,616",
            "17,534",
            "8,529,881",
            "9,964,974"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 172957,
          "balance": 186613,
          "change": 13656,
          "raw": [
            "融券(交易單位)",
            "14,004",
            "30,431",
            "2,771",
            "172,957",
            "186,613"
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
        "date": "20261124",
        "unit": "億元",
        "foreign": -503.9,
        "investmentTrust": 97.63,
        "dealer": -810.25,
        "dealerSelf": 15.86,
        "dealerHedge": -826.11,
        "total": -1216.52,
        "checksum": -1216.52,
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
        "date": "20261124",
        "requestedDate": "20261124",
        "matchedRequest": true,
        "rocDate": "115/11/24",
        "turnoverYi": 4325.6,
        "taiexClose": 40122.35,
        "taiexChange": 3310.46
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261124",
        "index": {
          "close": 293.23,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261124",
          "open": 276.63,
          "high": 293.55,
          "low": 276.63,
          "prevClose": 270.9,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 40122.35,
          "field": "z",
          "misDate": "20261124"
        },
        "turnoverYi": 496.12,
        "quoteCount": 13849
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261124",
        "contractMonth": "202612",
        "close": 40324,
        "change": 3665,
        "volume": 18862,
        "openInterest": 131335,
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
