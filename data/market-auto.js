/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-31T23:35:10.816Z",
  "tradeDate": "20260831",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260831",
        "financingAmountYi": {
          "prevBalance": 5671.78,
          "balance": 5698.77,
          "change": 26.99,
          "raw": [
            "融資金額(仟元)",
            "36,246,724",
            "32,874,717",
            "672,632",
            "567,177,536",
            "569,876,911"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8892721,
          "balance": 8860863,
          "change": -31858,
          "raw": [
            "融資(交易單位)",
            "358,623",
            "385,969",
            "4,512",
            "8,892,721",
            "8,860,863"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 213833,
          "balance": 217718,
          "change": 3885,
          "raw": [
            "融券(交易單位)",
            "19,657",
            "24,969",
            "1,427",
            "213,833",
            "217,718"
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
        "date": "20260831",
        "unit": "億元",
        "foreign": -143.92,
        "investmentTrust": -40,
        "dealer": -74.53,
        "dealerSelf": -11.79,
        "dealerHedge": -62.74,
        "total": -258.46,
        "checksum": -258.45,
        "checksumDelta": 0.01,
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
        "date": "20260831",
        "requestedDate": "20260831",
        "matchedRequest": true,
        "rocDate": "115/08/31",
        "turnoverYi": 12892.28,
        "taiexClose": 46128.47,
        "taiexChange": -202.98
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260831",
        "index": null,
        "turnoverYi": 3366.37,
        "quoteCount": 10713,
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
        "date": "20260831",
        "contractMonth": "202609",
        "close": 45983,
        "change": -374,
        "volume": 53336,
        "openInterest": 104409,
        "session": "一般",
        "rowCount": 23,
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
