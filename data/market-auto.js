/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-17T23:44:46.054Z",
  "tradeDate": "20260917",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260917",
        "financingAmountYi": {
          "prevBalance": 5861.69,
          "balance": 5893.97,
          "change": 32.28,
          "raw": [
            "融資金額(仟元)",
            "27,660,732",
            "23,854,375",
            "577,637",
            "586,168,547",
            "589,397,267"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9249177,
          "balance": 9262322,
          "change": 13145,
          "raw": [
            "融資(交易單位)",
            "358,141",
            "338,862",
            "6,134",
            "9,249,177",
            "9,262,322"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 197348,
          "balance": 216288,
          "change": 18940,
          "raw": [
            "融券(交易單位)",
            "16,205",
            "35,568",
            "423",
            "197,348",
            "216,288"
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
        "date": "20260917",
        "unit": "億元",
        "foreign": 121.85,
        "investmentTrust": 117.03,
        "dealer": 15.78,
        "dealerSelf": 58.94,
        "dealerHedge": -43.16,
        "total": 254.66,
        "checksum": 254.66,
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
        "date": "20260917",
        "requestedDate": "20260917",
        "matchedRequest": true,
        "rocDate": "115/09/17",
        "turnoverYi": 8666.19,
        "taiexClose": 46288,
        "taiexChange": 439.1
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260917",
        "index": {
          "close": 398.17,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260918",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 398.17,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46288,
          "field": "y",
          "misDate": "20260918"
        },
        "turnoverYi": 2692.5,
        "quoteCount": 11479
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260917",
        "contractMonth": "202610",
        "close": 46445,
        "change": 385,
        "volume": 50102,
        "openInterest": 99476,
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
