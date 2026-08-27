/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-27T23:41:59.158Z",
  "tradeDate": "20260827",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260827",
        "financingAmountYi": {
          "prevBalance": 5548.03,
          "balance": 5599.19,
          "change": 51.16,
          "raw": [
            "融資金額(仟元)",
            "38,162,365",
            "32,753,216",
            "292,950",
            "554,802,585",
            "559,918,784"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8894031,
          "balance": 8881555,
          "change": -12476,
          "raw": [
            "融資(交易單位)",
            "345,253",
            "351,702",
            "6,027",
            "8,894,031",
            "8,881,555"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 206809,
          "balance": 210591,
          "change": 3782,
          "raw": [
            "融券(交易單位)",
            "14,346",
            "19,604",
            "1,476",
            "206,809",
            "210,591"
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
        "date": "20260827",
        "unit": "億元",
        "foreign": 490.94,
        "investmentTrust": -14.5,
        "dealer": 150.35,
        "dealerSelf": 59.83,
        "dealerHedge": 90.52,
        "total": 626.79,
        "checksum": 626.79,
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
        "date": "20260827",
        "requestedDate": "20260827",
        "matchedRequest": true,
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
        "date": "20260827",
        "index": null,
        "turnoverYi": 2869.81,
        "quoteCount": 10629,
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
        "date": "20260827",
        "contractMonth": "202609",
        "close": 46078,
        "change": 75,
        "volume": 50701,
        "openInterest": 104881,
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
