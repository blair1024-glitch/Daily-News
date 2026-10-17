/**
 * active-etf.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-active-etf.mjs
 *
 * 台股主動式ETF每日持股明細與增減比對。資料來源是 MoneyDJ 第三方頁面
 *（非投信官網或證交所原始揭露），dashboard 引用時請標明來源與日期。
 * ok:false 代表該代號當次抓不到（可能代號不存在、已下市或頁面改版）。
 */
window.ACTIVE_ETF = {
  "fetchedAt": "2026-10-17T01:27:22.698Z",
  "date": "20261017",
  "source": "MoneyDJ理財網 ETF持股狀況頁（第三方資料，非投信/證交所官方原始揭露，逐檔以 fund.source 列出網址）",
  "okCount": 0,
  "totalCount": 16,
  "funds": {
    "00403A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00980A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00981A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00982A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00984A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00985A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00987A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00991A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00992A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00993A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00994A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00995A": {
      "ok": false,
      "category": "tw",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00983A": {
      "ok": false,
      "category": "overseas",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00986A": {
      "ok": false,
      "category": "overseas",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00990A": {
      "ok": false,
      "category": "overseas",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    },
    "00997A": {
      "ok": false,
      "category": "overseas",
      "error": "頁面沒有對應的基金（可能代號不存在或已下市）"
    }
  },
  "summaryTw": {
    "fundsWithDiff": 0,
    "totalActiveStocks": 0,
    "topBought": [],
    "topSold": [],
    "concentrationPct": null,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  },
  "summaryOverseas": {
    "fundsWithDiff": 0,
    "totalActiveStocks": 0,
    "topBought": [],
    "topSold": [],
    "concentrationPct": null,
    "concentrationNote": "concentrationPct = 當天買賣異動最明顯的前5支個股，佔全部異動動作數的比例；數字越高代表主動式ETF的買賣行為越集中在少數股票"
  }
};
