/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-29T02:09:11.296Z",
  "tradeDate": "20261028",
  "marketOpen": true,
  "okCount": 4,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261028",
        "financingAmountYi": {
          "prevBalance": 6233.87,
          "balance": 6323,
          "change": 89.13,
          "raw": [
            "融資金額(仟元)",
            "27,969,703",
            "18,101,438",
            "955,546",
            "623,386,833",
            "632,299,552"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9550611,
          "balance": 9550911,
          "change": 300,
          "raw": [
            "融資(交易單位)",
            "294,225",
            "268,501",
            "25,424",
            "9,550,611",
            "9,550,911"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 217708,
          "balance": 193040,
          "change": -24668,
          "raw": [
            "融券(交易單位)",
            "32,514",
            "24,869",
            "17,023",
            "217,708",
            "193,040"
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
        "date": "20261028",
        "unit": "億元",
        "foreign": 159.57,
        "investmentTrust": 143.2,
        "dealer": 21.65,
        "dealerSelf": 24.48,
        "dealerHedge": -2.83,
        "total": 324.42,
        "checksum": 324.42,
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
        "date": "20261028",
        "requestedDate": "20261028",
        "matchedRequest": true,
        "rocDate": "115/10/28",
        "turnoverYi": 7503.41,
        "taiexClose": 47035.58,
        "taiexChange": 939.35
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261028",
        "index": {
          "close": 394.61,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261029",
          "open": 396.4,
          "high": 397.17,
          "low": 385.89,
          "prevClose": 394.61,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 47035.58,
          "field": "y",
          "misDate": "20261029"
        },
        "turnoverYi": null,
        "quoteCount": null,
        "notes": [
          "quotes 第 1 次 → terminated",
          "quotes 第 2 次 → terminated"
        ]
      }
    },
    "txfTaifex": {
      "ok": false,
      "source": "TAIFEX futDataDown",
      "error": "This operation was aborted"
    }
  }
};
