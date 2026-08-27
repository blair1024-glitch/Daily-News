/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-27T20:54:58.619Z",
  "tradeDate": "20260828",
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
        "date": "20260828",
        "rocDate": "115/08/27",
        "turnoverYi": 9674.66,
        "taiexClose": 45975.22,
        "taiexChange": 142.6
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260828",
        "index": null,
        "turnoverYi": 2869.81,
        "quoteCount": 10629,
        "notes": [
          "index tpex_mainboard_daily_index → HTTP 520",
          "index tpex_index_summary → 回應不是 JSON（前 120 字：<!DOCTYPE html><html lang=\"zh-Hant-tw\"><he"
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
