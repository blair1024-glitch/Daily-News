/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-11T14:51:42.288Z",
  "tradeDate": "20260911",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260911",
        "financingAmountYi": {
          "prevBalance": 5918.98,
          "balance": 5878.71,
          "change": -40.27,
          "raw": [
            "融資金額(仟元)",
            "20,640,692",
            "23,666,861",
            "1,000,338",
            "591,897,687",
            "587,871,180"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9102904,
          "balance": 9130044,
          "change": 27140,
          "raw": [
            "融資(交易單位)",
            "314,089",
            "278,616",
            "8,333",
            "9,102,904",
            "9,130,044"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 197447,
          "balance": 197926,
          "change": 479,
          "raw": [
            "融券(交易單位)",
            "24,586",
            "25,528",
            "463",
            "197,447",
            "197,926"
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
        "date": "20260911",
        "unit": "億元",
        "foreign": -892.7,
        "investmentTrust": 82.14,
        "dealer": -302.01,
        "dealerSelf": -50.39,
        "dealerHedge": -251.62,
        "total": -1112.59,
        "checksum": -1112.57,
        "checksumDelta": 0.02,
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
        "date": "20260911",
        "requestedDate": "20260911",
        "matchedRequest": true,
        "rocDate": "115/09/11",
        "turnoverYi": 7622.45,
        "taiexClose": 46184.85,
        "taiexChange": -755.64
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260911",
        "index": {
          "close": 395.52,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20260911",
          "open": 403.04,
          "high": 403.04,
          "low": 393.76,
          "prevClose": 405.24,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46184.85,
          "field": "z",
          "misDate": "20260911"
        },
        "turnoverYi": 1908.67,
        "quoteCount": 11193
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260911",
        "contractMonth": "202609",
        "close": 46218,
        "change": -651,
        "volume": 58137,
        "openInterest": 88464,
        "session": "一般",
        "rowCount": 25,
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
