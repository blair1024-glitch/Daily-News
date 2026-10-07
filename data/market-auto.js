/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-07T23:40:12.995Z",
  "tradeDate": "20261007",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261007",
        "financingAmountYi": {
          "prevBalance": 6376.57,
          "balance": 6400.01,
          "change": 23.44,
          "raw": [
            "融資金額(仟元)",
            "37,421,974",
            "34,401,484",
            "676,760",
            "637,657,044",
            "640,000,774"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9356795,
          "balance": 9358246,
          "change": 1451,
          "raw": [
            "融資(交易單位)",
            "373,993",
            "360,993",
            "11,549",
            "9,356,795",
            "9,358,246"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 214529,
          "balance": 215104,
          "change": 575,
          "raw": [
            "融券(交易單位)",
            "13,375",
            "16,543",
            "2,593",
            "214,529",
            "215,104"
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
        "date": "20261007",
        "unit": "億元",
        "foreign": -130.44,
        "investmentTrust": -33.23,
        "dealer": -77.96,
        "dealerSelf": -13.67,
        "dealerHedge": -64.29,
        "total": -241.64,
        "checksum": -241.63,
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
        "date": "20261007",
        "requestedDate": "20261007",
        "matchedRequest": true,
        "rocDate": "115/10/07",
        "turnoverYi": 9862.8,
        "taiexClose": 49806.37,
        "taiexChange": -16.18
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261007",
        "index": {
          "close": 430.46,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261008",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 430.46,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 49806.37,
          "field": "y",
          "misDate": "20261008"
        },
        "turnoverYi": 3060.01,
        "quoteCount": 12245
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261007",
        "contractMonth": "202610",
        "close": 49979,
        "change": -103,
        "volume": 29849,
        "openInterest": 108332,
        "session": "一般",
        "rowCount": 20,
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
