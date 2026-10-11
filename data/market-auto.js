/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-11T23:40:28.365Z",
  "tradeDate": "20261009",
  "marketOpen": true,
  "okCount": 2,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": false,
      "source": "TWSE MI_MARGN",
      "error": "當日資料尚未發布（抓取時間早於該來源發布時間）"
    },
    "instTwse": {
      "ok": false,
      "source": "TWSE BFI82U",
      "error": "當日資料尚未發布（抓取時間早於該來源發布時間）"
    },
    "dailyMarket": {
      "ok": true,
      "source": "TWSE FMTQIK",
      "value": {
        "date": "20261008",
        "requestedDate": "20261009",
        "matchedRequest": false,
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
        "date": "20261009",
        "index": {
          "close": 426.71,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261012",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 426.71,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 49313.44,
          "field": "y",
          "misDate": "20261012"
        },
        "turnoverYi": 2625.46,
        "quoteCount": 12221
      }
    },
    "txfTaifex": {
      "ok": false,
      "source": "TAIFEX futDataDown",
      "error": "當日資料尚未發布（抓取時間早於該來源發布時間）"
    }
  }
};
