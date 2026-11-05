/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-05T03:13:01.469Z",
  "tradeDate": "20261104",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261104",
        "financingAmountYi": {
          "prevBalance": 5997.74,
          "balance": 5969.46,
          "change": -28.28,
          "raw": [
            "融資金額(仟元)",
            "30,947,037",
            "31,862,354",
            "1,913,279",
            "599,774,466",
            "596,945,870"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9482836,
          "balance": 9514915,
          "change": 32079,
          "raw": [
            "融資(交易單位)",
            "446,302",
            "404,510",
            "9,713",
            "9,482,836",
            "9,514,915"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 257961,
          "balance": 246812,
          "change": -11149,
          "raw": [
            "融券(交易單位)",
            "48,514",
            "38,144",
            "779",
            "257,961",
            "246,812"
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
        "date": "20261104",
        "unit": "億元",
        "foreign": -1499,
        "investmentTrust": 272.58,
        "dealer": -375.19,
        "dealerSelf": -7.53,
        "dealerHedge": -367.66,
        "total": -1601.6,
        "checksum": -1601.61,
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
        "date": "20261104",
        "requestedDate": "20261104",
        "matchedRequest": true,
        "rocDate": "115/11/04",
        "turnoverYi": 11769.3,
        "taiexClose": 42948.91,
        "taiexChange": -358.63
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261104",
        "index": {
          "close": 343.5,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261105",
          "open": 341.88,
          "high": 341.88,
          "low": 325.54,
          "prevClose": 343.5,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 42948.91,
          "field": "y",
          "misDate": "20261105"
        },
        "turnoverYi": 2508.55,
        "quoteCount": 13626
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261104",
        "contractMonth": "202611",
        "close": 43204,
        "change": -149,
        "volume": 113674,
        "openInterest": 122629,
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
