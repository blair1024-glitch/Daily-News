/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-28T02:02:10.924Z",
  "tradeDate": "20261027",
  "marketOpen": true,
  "okCount": 4,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261027",
        "financingAmountYi": {
          "prevBalance": 6338.8,
          "balance": 6233.87,
          "change": -104.93,
          "raw": [
            "融資金額(仟元)",
            "20,175,061",
            "29,876,264",
            "792,111",
            "633,880,174",
            "623,386,860"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9604399,
          "balance": 9550611,
          "change": -53788,
          "raw": [
            "融資(交易單位)",
            "271,054",
            "318,381",
            "6,461",
            "9,604,399",
            "9,550,611"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 216539,
          "balance": 217708,
          "change": 1169,
          "raw": [
            "融券(交易單位)",
            "25,268",
            "33,665",
            "7,228",
            "216,539",
            "217,708"
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
        "date": "20261027",
        "unit": "億元",
        "foreign": -80.39,
        "investmentTrust": 236.05,
        "dealer": -123.99,
        "dealerSelf": 7.68,
        "dealerHedge": -131.67,
        "total": 31.67,
        "checksum": 31.67,
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
        "date": "20261027",
        "requestedDate": "20261027",
        "matchedRequest": true,
        "rocDate": "115/10/27",
        "turnoverYi": 10316.84,
        "taiexClose": 46096.23,
        "taiexChange": 54.8
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261027",
        "index": {
          "close": 379.2,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261028",
          "open": 382.46,
          "high": 391.54,
          "low": 382.46,
          "prevClose": 379.2,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46096.23,
          "field": "y",
          "misDate": "20261028"
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
