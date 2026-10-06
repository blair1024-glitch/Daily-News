/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-06T23:40:28.627Z",
  "tradeDate": "20261006",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261006",
        "financingAmountYi": {
          "prevBalance": 6333.52,
          "balance": 6376.57,
          "change": 43.05,
          "raw": [
            "融資金額(仟元)",
            "41,300,540",
            "36,698,452",
            "296,765",
            "633,351,721",
            "637,657,044"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9409454,
          "balance": 9356798,
          "change": -52656,
          "raw": [
            "融資(交易單位)",
            "381,543",
            "426,673",
            "7,526",
            "9,409,454",
            "9,356,798"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 218458,
          "balance": 214529,
          "change": -3929,
          "raw": [
            "融券(交易單位)",
            "18,395",
            "17,593",
            "3,127",
            "218,458",
            "214,529"
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
        "date": "20261006",
        "unit": "億元",
        "foreign": -66.57,
        "investmentTrust": -142.65,
        "dealer": 17.21,
        "dealerSelf": 36.12,
        "dealerHedge": -18.91,
        "total": -192.01,
        "checksum": -192.01,
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
        "date": "20261006",
        "requestedDate": "20261006",
        "matchedRequest": true,
        "rocDate": "115/10/06",
        "turnoverYi": 10262.05,
        "taiexClose": 49822.55,
        "taiexChange": 110.51
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261006",
        "index": {
          "close": 430.86,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261007",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 430.86,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 49822.55,
          "field": "y",
          "misDate": "20261007"
        },
        "turnoverYi": 2851.68,
        "quoteCount": 12194
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261006",
        "contractMonth": "202610",
        "close": 50060,
        "change": 116,
        "volume": 33143,
        "openInterest": 108230,
        "session": "一般",
        "rowCount": 22,
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
