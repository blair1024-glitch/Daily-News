/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-27T01:50:26.863Z",
  "tradeDate": "20261026",
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
        "date": "20261022",
        "requestedDate": "20261026",
        "matchedRequest": false,
        "rocDate": "115/10/22",
        "turnoverYi": 9334.37,
        "taiexClose": 46041.43,
        "taiexChange": -846.34
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261026",
        "index": {
          "close": 381.69,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261027",
          "open": 383.88,
          "high": 388.39,
          "low": 382.67,
          "prevClose": 381.69,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46041.43,
          "field": "y",
          "misDate": "20261027"
        },
        "turnoverYi": null,
        "quoteCount": null,
        "notes": [
          "quotes 第 1 次 → HTTP 403",
          "quotes 第 2 次 → HTTP 403"
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
