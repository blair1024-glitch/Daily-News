/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-20T23:40:41.111Z",
  "tradeDate": "20261020",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261020",
        "financingAmountYi": {
          "prevBalance": 6406.18,
          "balance": 6381,
          "change": -25.18,
          "raw": [
            "融資金額(仟元)",
            "20,058,977",
            "22,077,421",
            "499,372",
            "640,617,928",
            "638,100,111"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9592706,
          "balance": 9600627,
          "change": 7921,
          "raw": [
            "融資(交易單位)",
            "289,957",
            "276,618",
            "5,418",
            "9,592,706",
            "9,600,627"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 201911,
          "balance": 215912,
          "change": 14001,
          "raw": [
            "融券(交易單位)",
            "16,058",
            "42,182",
            "12,123",
            "201,911",
            "215,912"
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
        "date": "20261020",
        "unit": "億元",
        "foreign": -795.4,
        "investmentTrust": 187.59,
        "dealer": -355.79,
        "dealerSelf": -68.55,
        "dealerHedge": -287.24,
        "total": -963.6,
        "checksum": -963.6,
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
        "date": "20261020",
        "requestedDate": "20261020",
        "matchedRequest": true,
        "rocDate": "115/10/20",
        "turnoverYi": 8029.47,
        "taiexClose": 46292.93,
        "taiexChange": -529.15
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261020",
        "index": {
          "close": 387.88,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261021",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 387.88,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46292.93,
          "field": "y",
          "misDate": "20261021"
        },
        "turnoverYi": 2135.51,
        "quoteCount": 12848
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261020",
        "contractMonth": "202610",
        "close": 46384,
        "change": -385,
        "volume": 95321,
        "openInterest": 16625,
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
