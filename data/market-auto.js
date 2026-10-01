/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-01T17:17:07.942Z",
  "tradeDate": "20261001",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261001",
        "financingAmountYi": {
          "prevBalance": 6222.97,
          "balance": 6298.67,
          "change": 75.7,
          "raw": [
            "融資金額(仟元)",
            "39,278,476",
            "31,430,381",
            "277,487",
            "622,296,585",
            "629,867,193"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9287103,
          "balance": 9352816,
          "change": 65713,
          "raw": [
            "融資(交易單位)",
            "441,109",
            "370,540",
            "4,856",
            "9,287,103",
            "9,352,816"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 235294,
          "balance": 233322,
          "change": -1972,
          "raw": [
            "融券(交易單位)",
            "20,853",
            "19,361",
            "480",
            "235,294",
            "233,322"
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
        "date": "20261001",
        "unit": "億元",
        "foreign": 219.37,
        "investmentTrust": 58.65,
        "dealer": 16.59,
        "dealerSelf": 32.37,
        "dealerHedge": -15.78,
        "total": 294.62,
        "checksum": 294.61,
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
        "date": "20261001",
        "requestedDate": "20261001",
        "matchedRequest": true,
        "rocDate": "115/10/01",
        "turnoverYi": 8740.46,
        "taiexClose": 48353.49,
        "taiexChange": 413.36
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261001",
        "index": {
          "close": 418.82,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261001",
          "open": 417.48,
          "high": 421.21,
          "low": 417.09,
          "prevClose": 417.07,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 48353.49,
          "field": "z",
          "misDate": "20261001"
        },
        "turnoverYi": 2625.36,
        "quoteCount": 11871
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261001",
        "contractMonth": "202610",
        "close": 48685,
        "change": 355,
        "volume": 34458,
        "openInterest": 107607,
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
