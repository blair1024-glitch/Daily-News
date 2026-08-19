/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-19T11:25:17.839Z",
  "tradeDate": "20260819",
  "marketOpen": true,
  "okCount": 4,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": false,
      "source": "TWSE MI_MARGN",
      "error": "當日資料尚未發布（抓取時間早於該來源發布時間）"
    },
    "instTwse": {
      "ok": true,
      "source": "TWSE BFI82U",
      "value": {
        "date": "20260819",
        "unit": "億元",
        "foreign": -416.39,
        "investmentTrust": -120.91,
        "dealer": -171.18,
        "dealerSelf": -39.62,
        "dealerHedge": -131.56,
        "total": -708.48,
        "checksum": -708.48,
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
        "date": "20260819",
        "rocDate": "115/08/19",
        "turnoverYi": 8902.7,
        "taiexClose": 44719.35,
        "taiexChange": -589.33
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260819",
        "index": null,
        "turnoverYi": 1850.32,
        "quoteCount": 10602,
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
        "date": "20260819",
        "contractMonth": "202608",
        "close": 44612,
        "change": -476,
        "volume": 27795,
        "openInterest": 11402,
        "session": "一般",
        "rowCount": 27,
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
