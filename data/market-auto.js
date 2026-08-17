/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-17T01:24:52.010Z",
  "tradeDate": "20260817",
  "marketOpen": true,
  "okCount": 0,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": false,
      "source": "TWSE MI_MARGN",
      "error": "HTTP 403"
    },
    "instTwse": {
      "ok": false,
      "source": "TWSE BFI82U",
      "error": "HTTP 403"
    },
    "dailyMarket": {
      "ok": false,
      "source": "TWSE FMTQIK",
      "error": "HTTP 403"
    },
    "otcTpex": {
      "ok": false,
      "source": "TPEx OpenAPI",
      "error": "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_daily_close_quotes → HTTP 403 | https://www.tpex.org.tw/openapi/v1/tpex_otc_quotes → HTTP 403 | https://www.tpex.org.tw/openapi/v1/tpex_mainboard_daily_index → HTTP 403"
    },
    "txfTaifex": {
      "ok": false,
      "source": "TAIFEX futDataDown",
      "error": "HTTP 403"
    }
  }
};
