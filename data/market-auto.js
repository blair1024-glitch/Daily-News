/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-21T15:50:31.138Z",
  "tradeDate": "20261021",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261021",
        "financingAmountYi": {
          "prevBalance": 6381,
          "balance": 6443.74,
          "change": 62.74,
          "raw": [
            "融資金額(仟元)",
            "29,567,055",
            "22,918,840",
            "374,767",
            "638,100,111",
            "644,373,559"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9600626,
          "balance": 9632327,
          "change": 31701,
          "raw": [
            "融資(交易單位)",
            "316,868",
            "280,023",
            "5,144",
            "9,600,626",
            "9,632,327"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 215912,
          "balance": 192598,
          "change": -23314,
          "raw": [
            "融券(交易單位)",
            "41,174",
            "18,630",
            "770",
            "215,912",
            "192,598"
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
        "date": "20261021",
        "unit": "億元",
        "foreign": 22.39,
        "investmentTrust": 127.99,
        "dealer": -135.71,
        "dealerSelf": -61.87,
        "dealerHedge": -73.84,
        "total": 14.66,
        "checksum": 14.67,
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
        "date": "20261021",
        "requestedDate": "20261021",
        "matchedRequest": true,
        "rocDate": "115/10/21",
        "turnoverYi": 8746.14,
        "taiexClose": 46887.77,
        "taiexChange": 594.84
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261021",
        "index": {
          "close": 395.42,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261021",
          "open": 390.75,
          "high": 399.21,
          "low": 390.75,
          "prevClose": 387.88,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46887.77,
          "field": "z",
          "misDate": "20261021"
        },
        "turnoverYi": 2232.72,
        "quoteCount": 12950
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261021",
        "contractMonth": "202610",
        "close": 46648,
        "change": 307,
        "volume": 23455,
        "openInterest": 8936,
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
