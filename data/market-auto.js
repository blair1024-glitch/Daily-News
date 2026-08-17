/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-17T09:42:52.181Z",
  "tradeDate": "20260817",
  "marketOpen": true,
  "okCount": 4,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": false,
      "source": "TWSE MI_MARGN",
      "error": "休市或無資料"
    },
    "instTwse": {
      "ok": true,
      "source": "TWSE BFI82U",
      "value": {
        "date": "20260817",
        "unit": "億元",
        "foreign": 454.47,
        "investmentTrust": -177.47,
        "dealer": 14.05,
        "dealerSelf": 35.4,
        "dealerHedge": -21.35,
        "total": 291.06,
        "checksum": 291.05,
        "checksumDelta": -0.01,
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
        "date": "20260817",
        "rocDate": "115/08/17",
        "turnoverYi": 9810.55,
        "taiexClose": 45857.27,
        "taiexChange": 46.26
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260817",
        "index": null,
        "turnoverYi": 1805.96,
        "quoteCount": 10512,
        "notes": [
          "index tpex_mainboard_daily_index → 回應不是 JSON（前 120 字：<!DOCTYPE html><html lang=\"zh-Hant-tw\"><he",
          "index tpex_index_summary → 回應不是 JSON（前 120 字：<!DOCTYPE html><html lang=\"zh-Hant-tw\"><he"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260817",
        "contractMonth": "202608",
        "close": 45888,
        "change": 76,
        "volume": 79450,
        "openInterest": 51167,
        "session": "一般",
        "rowCount": 24,
        "header": [
          "交易日期",
          "契約",
          "到期月份(週別)",
          "開盤價",
          "最高價",
          "最低價",
          "收盤價",
          "漲跌價",
          "漲跌%",
          "成交量",
          "結算價",
          "未沖銷契約數",
          "最後最佳買價",
          "最後最佳賣價",
          "歷史最高價",
          "歷史最低價",
          "是否因訊息面暫停交易",
          "交易時段",
          "價差對單式委託成交量"
        ]
      }
    }
  }
};
