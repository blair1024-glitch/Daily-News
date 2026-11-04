/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-04T02:55:35.979Z",
  "tradeDate": "20261103",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261103",
        "financingAmountYi": {
          "prevBalance": 6226.99,
          "balance": 5997.74,
          "change": -229.25,
          "raw": [
            "融資金額(仟元)",
            "21,189,249",
            "41,240,308",
            "2,873,840",
            "622,699,365",
            "599,774,466"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9571090,
          "balance": 9482839,
          "change": -88251,
          "raw": [
            "融資(交易單位)",
            "377,983",
            "450,131",
            "16,103",
            "9,571,090",
            "9,482,839"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 194930,
          "balance": 257961,
          "change": 63031,
          "raw": [
            "融券(交易單位)",
            "31,896",
            "103,607",
            "8,680",
            "194,930",
            "257,961"
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
        "date": "20261103",
        "unit": "億元",
        "foreign": -1073.07,
        "investmentTrust": 184.6,
        "dealer": -590.54,
        "dealerSelf": -87.04,
        "dealerHedge": -503.5,
        "total": -1479.01,
        "checksum": -1479.01,
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
        "date": "20261103",
        "requestedDate": "20261103",
        "matchedRequest": true,
        "rocDate": "115/11/03",
        "turnoverYi": 10020.36,
        "taiexClose": 43307.54,
        "taiexChange": -1612.6
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261103",
        "index": {
          "close": 345.52,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261104",
          "open": 345.86,
          "high": 349.17,
          "low": 334.86,
          "prevClose": 345.52,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 43307.54,
          "field": "y",
          "misDate": "20261104"
        },
        "turnoverYi": 2062.66,
        "quoteCount": 13569
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261103",
        "contractMonth": "202611",
        "close": 43376,
        "change": -1851,
        "volume": 78044,
        "openInterest": 121861,
        "session": "一般",
        "rowCount": 21,
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
