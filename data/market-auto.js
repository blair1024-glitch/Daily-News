/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-24T23:44:00.327Z",
  "tradeDate": "20260824",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260824",
        "financingAmountYi": {
          "prevBalance": 5469.39,
          "balance": 5452.59,
          "change": -16.8,
          "raw": [
            "融資金額(仟元)",
            "21,480,689",
            "22,688,300",
            "472,283",
            "546,939,324",
            "545,259,430"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8845947,
          "balance": 8856848,
          "change": 10901,
          "raw": [
            "融資(交易單位)",
            "281,110",
            "266,401",
            "3,808",
            "8,845,947",
            "8,856,848"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 199998,
          "balance": 201513,
          "change": 1515,
          "raw": [
            "融券(交易單位)",
            "16,009",
            "18,286",
            "762",
            "199,998",
            "201,513"
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
        "date": "20260824",
        "unit": "億元",
        "foreign": -157.36,
        "investmentTrust": 30.55,
        "dealer": -43.33,
        "dealerSelf": -0.15,
        "dealerHedge": -43.18,
        "total": -170.14,
        "checksum": -170.14,
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
        "date": "20260824",
        "rocDate": "115/08/24",
        "turnoverYi": 6562.81,
        "taiexClose": 44762.32,
        "taiexChange": -461.97
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260824",
        "index": null,
        "turnoverYi": 1939.53,
        "quoteCount": 10474,
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
        "date": "20260824",
        "contractMonth": "202609",
        "close": 44762,
        "change": -376,
        "volume": 43046,
        "openInterest": 102558,
        "session": "一般",
        "rowCount": 21,
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
