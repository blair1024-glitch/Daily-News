/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-06T02:42:50.669Z",
  "tradeDate": "20261005",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261005",
        "financingAmountYi": {
          "prevBalance": 6351.04,
          "balance": 6333.52,
          "change": -17.52,
          "raw": [
            "融資金額(仟元)",
            "48,898,824",
            "50,385,503",
            "266,022",
            "635,104,422",
            "633,351,721"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9397965,
          "balance": 9409460,
          "change": 11495,
          "raw": [
            "融資(交易單位)",
            "572,516",
            "555,206",
            "5,815",
            "9,397,965",
            "9,409,460"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 231986,
          "balance": 218458,
          "change": -13528,
          "raw": [
            "融券(交易單位)",
            "21,909",
            "23,023",
            "14,642",
            "231,986",
            "218,458"
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
        "date": "20261005",
        "unit": "億元",
        "foreign": 718.97,
        "investmentTrust": -52.93,
        "dealer": 109.48,
        "dealerSelf": 14.15,
        "dealerHedge": 95.33,
        "total": 775.52,
        "checksum": 775.52,
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
        "date": "20261005",
        "requestedDate": "20261005",
        "matchedRequest": true,
        "rocDate": "115/10/05",
        "turnoverYi": 12110.41,
        "taiexClose": 49712.04,
        "taiexChange": 1236.3
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261005",
        "index": {
          "close": 432.48,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261006",
          "open": 433.06,
          "high": 434.3,
          "low": 428.48,
          "prevClose": 432.48,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 49712.04,
          "field": "y",
          "misDate": "20261006"
        },
        "turnoverYi": 3291.99,
        "quoteCount": 12060
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261005",
        "contractMonth": "202610",
        "close": 49949,
        "change": 1280,
        "volume": 41858,
        "openInterest": 108339,
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
