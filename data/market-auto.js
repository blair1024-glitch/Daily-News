/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-10T23:34:13.992Z",
  "tradeDate": "20260910",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260910",
        "financingAmountYi": {
          "prevBalance": 5871.67,
          "balance": 5918.98,
          "change": 47.31,
          "raw": [
            "融資金額(仟元)",
            "24,526,351",
            "19,567,841",
            "227,634",
            "587,166,811",
            "591,897,687"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9070712,
          "balance": 9102908,
          "change": 32196,
          "raw": [
            "融資(交易單位)",
            "265,146",
            "229,380",
            "3,570",
            "9,070,712",
            "9,102,908"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 203610,
          "balance": 197447,
          "change": -6163,
          "raw": [
            "融券(交易單位)",
            "22,737",
            "16,815",
            "241",
            "203,610",
            "197,447"
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
        "date": "20260910",
        "unit": "億元",
        "foreign": -383.34,
        "investmentTrust": 33.51,
        "dealer": -137.64,
        "dealerSelf": -35.61,
        "dealerHedge": -102.03,
        "total": -487.47,
        "checksum": -487.47,
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
        "date": "20260910",
        "requestedDate": "20260910",
        "matchedRequest": true,
        "rocDate": "115/09/10",
        "turnoverYi": 7507.43,
        "taiexClose": 46940.49,
        "taiexChange": -242.87
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260910",
        "index": {
          "close": 405.24,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260911",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 405.24,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46940.49,
          "field": "y",
          "misDate": "20260911"
        },
        "turnoverYi": 1779.39,
        "quoteCount": 11179,
        "notes": [
          "quotes 第 1 次 → HTTP 520"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260910",
        "contractMonth": "202609",
        "close": 46870,
        "change": -308,
        "volume": 48692,
        "openInterest": 94990,
        "session": "一般",
        "rowCount": 26,
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
