/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-29T04:02:03.138Z",
  "tradeDate": "20260828",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260828",
        "financingAmountYi": {
          "prevBalance": 5599.19,
          "balance": 5671.78,
          "change": 72.59,
          "raw": [
            "融資金額(仟元)",
            "41,690,941",
            "34,055,406",
            "376,783",
            "559,918,784",
            "567,177,536"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8881554,
          "balance": 8892723,
          "change": 11169,
          "raw": [
            "融資(交易單位)",
            "380,702",
            "363,668",
            "5,865",
            "8,881,554",
            "8,892,723"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 210591,
          "balance": 213833,
          "change": 3242,
          "raw": [
            "融券(交易單位)",
            "14,618",
            "19,072",
            "1,212",
            "210,591",
            "213,833"
          ]
        },
        "summaryLabels": [
          "融資(交易單位)",
          "融券(交易單位)",
          "融資金額(仟元)"
        ]
      }
    },
    "instTwse": {
      "ok": true,
      "source": "TWSE BFI82U",
      "value": {
        "date": "20260828",
        "unit": "億元",
        "foreign": 417.54,
        "investmentTrust": -1.97,
        "dealer": 42.71,
        "dealerSelf": 1.35,
        "dealerHedge": 41.36,
        "total": 458.28,
        "checksum": 458.28,
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
        "date": "20260828",
        "requestedDate": "20260828",
        "matchedRequest": true,
        "rocDate": "115/08/28",
        "turnoverYi": 10689.85,
        "taiexClose": 46331.45,
        "taiexChange": 356.23
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260828",
        "index": null,
        "turnoverYi": 2981.34,
        "quoteCount": 10657,
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
        "date": "20260828",
        "contractMonth": "202609",
        "close": 46357,
        "change": 293,
        "volume": 41611,
        "openInterest": 105613,
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
