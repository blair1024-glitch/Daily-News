/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-22T23:44:31.435Z",
  "tradeDate": "20260922",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260922",
        "financingAmountYi": {
          "prevBalance": 6030.38,
          "balance": 6048.61,
          "change": 18.23,
          "raw": [
            "融資金額(仟元)",
            "38,882,277",
            "36,490,268",
            "568,372",
            "603,037,778",
            "604,861,415"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9330467,
          "balance": 9245371,
          "change": -85096,
          "raw": [
            "融資(交易單位)",
            "418,648",
            "494,171",
            "9,573",
            "9,330,467",
            "9,245,371"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 231582,
          "balance": 218839,
          "change": -12743,
          "raw": [
            "融券(交易單位)",
            "20,621",
            "28,679",
            "20,801",
            "231,582",
            "218,839"
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
        "date": "20260922",
        "unit": "億元",
        "foreign": 453.21,
        "investmentTrust": -3.66,
        "dealer": 158.54,
        "dealerSelf": 35.08,
        "dealerHedge": 123.46,
        "total": 608.09,
        "checksum": 608.09,
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
        "date": "20260922",
        "requestedDate": "20260922",
        "matchedRequest": true,
        "rocDate": "115/09/22",
        "turnoverYi": 10787.76,
        "taiexClose": 47800.17,
        "taiexChange": 81.33
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260922",
        "index": {
          "close": 415.17,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260923",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 415.17,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 47800.17,
          "field": "y",
          "misDate": "20260923"
        },
        "turnoverYi": 2875.04,
        "quoteCount": 11596
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260922",
        "contractMonth": "202610",
        "close": 48243,
        "change": 190,
        "volume": 41691,
        "openInterest": 102946,
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
