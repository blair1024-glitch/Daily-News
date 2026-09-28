/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-28T23:40:16.094Z",
  "tradeDate": "20260928",
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
        "date": "20260924",
        "requestedDate": "20260928",
        "matchedRequest": false,
        "rocDate": "115/09/24",
        "turnoverYi": 7755.91,
        "taiexClose": 48024.6,
        "taiexChange": -132.69
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260928",
        "index": {
          "close": 412.99,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260929",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 412.99,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 48024.6,
          "field": "y",
          "misDate": "20260929"
        },
        "turnoverYi": 2024.3,
        "quoteCount": 11660
      }
    },
    "txfTaifex": {
      "ok": false,
      "source": "TAIFEX futDataDown",
      "error": "當日資料尚未發布（抓取時間早於該來源發布時間）"
    }
  }
};
