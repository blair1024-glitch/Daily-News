/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-16T23:33:41.058Z",
  "tradeDate": "20260916",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260916",
        "financingAmountYi": {
          "prevBalance": 5822.4,
          "balance": 5861.67,
          "change": 39.27,
          "raw": [
            "融資金額(仟元)",
            "19,791,815",
            "15,417,455",
            "448,165",
            "582,240,465",
            "586,166,660"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9190511,
          "balance": 9248877,
          "change": 58366,
          "raw": [
            "融資(交易單位)",
            "261,378",
            "198,132",
            "4,880",
            "9,190,511",
            "9,248,877"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 198052,
          "balance": 197048,
          "change": -1004,
          "raw": [
            "融券(交易單位)",
            "25,065",
            "26,711",
            "2,650",
            "198,052",
            "197,048"
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
        "date": "20260916",
        "unit": "億元",
        "foreign": -179.8,
        "investmentTrust": 106.46,
        "dealer": -129.74,
        "dealerSelf": -36.25,
        "dealerHedge": -93.49,
        "total": -203.09,
        "checksum": -203.08,
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
        "date": "20260916",
        "requestedDate": "20260916",
        "matchedRequest": true,
        "rocDate": "115/09/16",
        "turnoverYi": 6759.7,
        "taiexClose": 45848.9,
        "taiexChange": 337.41
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260916",
        "index": {
          "close": 399.21,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260917",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 399.21,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 45848.9,
          "field": "y",
          "misDate": "20260917"
        },
        "turnoverYi": 1892.24,
        "quoteCount": 11415
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260916",
        "contractMonth": "202609",
        "close": 45759,
        "change": 167,
        "volume": 28491,
        "openInterest": 9684,
        "session": "一般",
        "rowCount": 33,
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
