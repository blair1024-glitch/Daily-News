/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-08T23:34:40.548Z",
  "tradeDate": "20260908",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260908",
        "financingAmountYi": {
          "prevBalance": 5882.72,
          "balance": 5862.67,
          "change": -20.05,
          "raw": [
            "融資金額(仟元)",
            "31,221,888",
            "32,964,239",
            "262,252",
            "588,271,579",
            "586,266,976"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9073477,
          "balance": 9048662,
          "change": -24815,
          "raw": [
            "融資(交易單位)",
            "333,969",
            "354,497",
            "4,287",
            "9,073,477",
            "9,048,662"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 211213,
          "balance": 208614,
          "change": -2599,
          "raw": [
            "融券(交易單位)",
            "17,838",
            "15,579",
            "340",
            "211,213",
            "208,614"
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
        "date": "20260908",
        "unit": "億元",
        "foreign": 132.69,
        "investmentTrust": -72.43,
        "dealer": -185.4,
        "dealerSelf": -28.85,
        "dealerHedge": -156.55,
        "total": -125.15,
        "checksum": -125.14,
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
        "date": "20260908",
        "requestedDate": "20260908",
        "matchedRequest": true,
        "rocDate": "115/09/08",
        "turnoverYi": 9226.58,
        "taiexClose": 47105.78,
        "taiexChange": -220.49
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260908",
        "index": {
          "close": 407.19,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260909",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 407.19,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 47105.78,
          "field": "y",
          "misDate": "20260909"
        },
        "turnoverYi": 2207.81,
        "quoteCount": 10991
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260908",
        "contractMonth": "202609",
        "close": 46980,
        "change": -482,
        "volume": 44455,
        "openInterest": 102168,
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
