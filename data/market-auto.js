/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-13T17:58:03.011Z",
  "tradeDate": "20261013",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261013",
        "financingAmountYi": {
          "prevBalance": 6533.3,
          "balance": 6449.79,
          "change": -83.51,
          "raw": [
            "融資金額(仟元)",
            "37,673,977",
            "45,382,060",
            "642,791",
            "653,329,500",
            "644,978,625"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9453096,
          "balance": 9430485,
          "change": -22611,
          "raw": [
            "融資(交易單位)",
            "436,812",
            "452,990",
            "6,433",
            "9,453,096",
            "9,430,485"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 216189,
          "balance": 225459,
          "change": 9270,
          "raw": [
            "融券(交易單位)",
            "33,273",
            "43,964",
            "1,421",
            "216,189",
            "225,459"
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
        "date": "20261013",
        "unit": "億元",
        "foreign": -1652.91,
        "investmentTrust": 246.25,
        "dealer": -569.76,
        "dealerSelf": -92.47,
        "dealerHedge": -477.29,
        "total": -1976.41,
        "checksum": -1976.42,
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
        "date": "20261013",
        "requestedDate": "20261013",
        "matchedRequest": true,
        "rocDate": "115/10/13",
        "turnoverYi": 12018.61,
        "taiexClose": 48341.31,
        "taiexChange": -960.65
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261013",
        "index": {
          "close": 414.31,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261013",
          "open": 425.07,
          "high": 425.07,
          "low": 408.39,
          "prevClose": 427.9,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 48341.31,
          "field": "z",
          "misDate": "20261013"
        },
        "turnoverYi": 2570.18,
        "quoteCount": 12421
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261013",
        "contractMonth": "202610",
        "close": 48400,
        "change": -945,
        "volume": 58479,
        "openInterest": 106153,
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
