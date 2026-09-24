/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-24T15:43:21.938Z",
  "tradeDate": "20260924",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260924",
        "financingAmountYi": {
          "prevBalance": 6063.68,
          "balance": 6151.03,
          "change": 87.35,
          "raw": [
            "融資金額(仟元)",
            "30,073,340",
            "20,479,799",
            "857,972",
            "606,367,833",
            "615,103,402"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9282262,
          "balance": 9279712,
          "change": -2550,
          "raw": [
            "融資(交易單位)",
            "270,795",
            "262,634",
            "10,711",
            "9,282,262",
            "9,279,712"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 213059,
          "balance": 202008,
          "change": -11051,
          "raw": [
            "融券(交易單位)",
            "19,887",
            "12,187",
            "3,351",
            "213,059",
            "202,008"
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
        "date": "20260924",
        "unit": "億元",
        "foreign": -329.65,
        "investmentTrust": -128.23,
        "dealer": 13.39,
        "dealerSelf": 42.36,
        "dealerHedge": -28.97,
        "total": -444.49,
        "checksum": -444.49,
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
        "date": "20260924",
        "requestedDate": "20260924",
        "matchedRequest": true,
        "rocDate": "115/09/24",
        "turnoverYi": 7755.91,
        "taiexClose": 48024.6,
        "taiexChange": -132.69
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260924",
        "index": {
          "close": 412.99,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20260924",
          "open": 413.22,
          "high": 413.61,
          "low": 410.64,
          "prevClose": 413.76,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 48024.6,
          "field": "z",
          "misDate": "20260924"
        },
        "turnoverYi": null,
        "quoteCount": null,
        "notes": [
          "quotes 第 1 次 → terminated",
          "quotes 第 2 次 → terminated"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260924",
        "contractMonth": "202610",
        "close": 48123,
        "change": -189,
        "volume": 37196,
        "openInterest": 101311,
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
