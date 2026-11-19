/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-19T19:22:09.221Z",
  "tradeDate": "20261119",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261119",
        "financingAmountYi": {
          "prevBalance": 5080.27,
          "balance": 4843.68,
          "change": -236.59,
          "raw": [
            "融資金額(仟元)",
            "21,627,629",
            "41,316,390",
            "3,969,551",
            "508,026,642",
            "484,368,330"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9092265,
          "balance": 8947619,
          "change": -144646,
          "raw": [
            "融資(交易單位)",
            "494,619",
            "625,396",
            "13,869",
            "9,092,265",
            "8,947,619"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 193544,
          "balance": 209819,
          "change": 16275,
          "raw": [
            "融券(交易單位)",
            "25,452",
            "47,343",
            "5,616",
            "193,544",
            "209,819"
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
        "date": "20261119",
        "unit": "億元",
        "foreign": -243.12,
        "investmentTrust": 43.9,
        "dealer": -233.03,
        "dealerSelf": -18.63,
        "dealerHedge": -214.4,
        "total": -432.25,
        "checksum": -432.25,
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
        "date": "20261119",
        "requestedDate": "20261119",
        "matchedRequest": true,
        "rocDate": "115/11/19",
        "turnoverYi": 9429.89,
        "taiexClose": 38426.89,
        "taiexChange": -1768.02
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261119",
        "index": {
          "close": 285.33,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261119",
          "open": 307.41,
          "high": 307.41,
          "low": 284.96,
          "prevClose": 307.55,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 38426.89,
          "field": "z",
          "misDate": "20261119"
        },
        "turnoverYi": 1396.19,
        "quoteCount": 13940
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261119",
        "contractMonth": "202612",
        "close": 38649,
        "change": -1683,
        "volume": 114619,
        "openInterest": 127639,
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
