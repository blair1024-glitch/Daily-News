/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-10T02:08:08.165Z",
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
        "index": null,
        "indexCross": null,
        "turnoverYi": 2625.46,
        "quoteCount": 12221,
        "notes": [
          "MIS o00 日期不符（回 20261008，要 20261009）"
        ]
      }
    },
    "txfTaifex": {
      "ok": false,
      "source": "TAIFEX futDataDown",
      "error": "當日資料尚未發布（抓取時間早於該來源發布時間）"
    }
  }
};
