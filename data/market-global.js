/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-08-24T05:14:07.855Z",
  "okCount": 0,
  "totalCount": 17,
  "items": {
    "sox": {
      "ok": false,
      "label": "費城半導體 SOX",
      "error": "yahoo(%5ESOX) → HTTP 403"
    },
    "vix": {
      "ok": false,
      "label": "VIX",
      "error": "yahoo(%5EVIX) → HTTP 403 | stooq(^vix) → HTTP 403"
    },
    "spx": {
      "ok": false,
      "label": "S&P 500",
      "error": "yahoo(%5EGSPC) → HTTP 403 | stooq(^spx) → HTTP 403"
    },
    "ndx": {
      "ok": false,
      "label": "Nasdaq 綜合",
      "error": "yahoo(%5EIXIC) → HTTP 403 | stooq(^ndq) → HTTP 403"
    },
    "dji": {
      "ok": false,
      "label": "Dow Jones",
      "error": "yahoo(%5EDJI) → HTTP 403 | stooq(^dji) → HTTP 403"
    },
    "us10y": {
      "ok": false,
      "label": "US 10Y 殖利率",
      "error": "yahoo(%5ETNX) → HTTP 403"
    },
    "us30y": {
      "ok": false,
      "label": "US 30Y 殖利率",
      "error": "yahoo(%5ETYX) → HTTP 403"
    },
    "us5y": {
      "ok": false,
      "label": "US 5Y 殖利率",
      "error": "yahoo(%5EFVX) → HTTP 403"
    },
    "dxy": {
      "ok": false,
      "label": "DXY 美元指數",
      "error": "yahoo(DX-Y.NYB) → HTTP 403"
    },
    "wti": {
      "ok": false,
      "label": "WTI 原油",
      "error": "yahoo(CL%3DF) → HTTP 403 | stooq(cl.f) → HTTP 403"
    },
    "brent": {
      "ok": false,
      "label": "Brent 原油",
      "error": "yahoo(BZ%3DF) → HTTP 403"
    },
    "gold": {
      "ok": false,
      "label": "黃金",
      "error": "yahoo(GC%3DF) → HTTP 403 | stooq(xauusd) → HTTP 403"
    },
    "usdjpy": {
      "ok": false,
      "label": "USD/JPY",
      "error": "yahoo(JPY%3DX) → HTTP 403 | stooq(usdjpy) → HTTP 403"
    },
    "usdcny": {
      "ok": false,
      "label": "USD/CNY",
      "error": "yahoo(CNY%3DX) → HTTP 403 | stooq(usdcny) → HTTP 403"
    },
    "usdtwd": {
      "ok": false,
      "label": "USD/TWD",
      "error": "yahoo(TWD%3DX) → HTTP 403 | stooq(usdtwd) → HTTP 403"
    },
    "otcTwo": {
      "ok": false,
      "label": "櫃買指數 OTC",
      "error": "yahoo(%5ETWOII) → HTTP 403"
    },
    "taiex": {
      "ok": false,
      "label": "TAIEX（交叉驗證）",
      "error": "yahoo(%5ETWII) → HTTP 403 | stooq(^twse) → HTTP 403"
    }
  }
};
