/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-09T02:48:39.273Z",
  "tradeDate": "20261008",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261008",
        "financingAmountYi": {
          "prevBalance": 6400.01,
          "balance": 6464.06,
          "change": 64.05,
          "raw": [
            "融資金額(仟元)",
            "38,876,700",
            "31,824,440",
            "647,267",
            "640,000,774",
            "646,405,767"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9358244,
          "balance": 9406720,
          "change": 48476,
          "raw": [
            "融資(交易單位)",
            "385,423",
            "305,441",
            "31,506",
            "9,358,244",
            "9,406,720"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 215104,
          "balance": 211949,
          "change": -3155,
          "raw": [
            "融券(交易單位)",
            "17,203",
            "16,677",
            "2,629",
            "215,104",
            "211,949"
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
        "date": "20261008",
        "unit": "億元",
        "foreign": -758.52,
        "investmentTrust": 30.09,
        "dealer": -187.31,
        "dealerSelf": -21.32,
        "dealerHedge": -165.99,
        "total": -915.75,
        "checksum": -915.74,
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
        "date": "20261008",
        "requestedDate": "20261008",
        "matchedRequest": true,
        "rocDate": "115/10/08",
        "turnoverYi": 9245.09,
        "taiexClose": 49313.44,
        "taiexChange": -492.93
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261008",
        "index": {
          "close": 426.71,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261008",
          "open": 428.67,
          "high": 428.67,
          "low": 420.56,
          "prevClose": 430.46,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 49313.44,
          "field": "z",
          "misDate": "20261008"
        },
        "turnoverYi": 2625.46,
        "quoteCount": 12221,
        "notes": [
          "quotes 第 1 次 → HTTP 520"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261008",
        "contractMonth": "202610",
        "close": 49349,
        "change": -619,
        "volume": 36039,
        "openInterest": 107859,
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
