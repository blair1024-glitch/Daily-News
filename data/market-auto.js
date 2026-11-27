/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-27T19:48:35.321Z",
  "tradeDate": "20261127",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261127",
        "financingAmountYi": {
          "prevBalance": 4344.84,
          "balance": 4301.72,
          "change": -43.12,
          "raw": [
            "融資金額(仟元)",
            "13,435,997",
            "17,184,983",
            "563,512",
            "434,484,476",
            "430,171,978"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8826426,
          "balance": 8724920,
          "change": -101506,
          "raw": [
            "融資(交易單位)",
            "246,029",
            "335,093",
            "12,442",
            "8,826,426",
            "8,724,920"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 173621,
          "balance": 184790,
          "change": 11169,
          "raw": [
            "融券(交易單位)",
            "11,214",
            "23,760",
            "1,377",
            "173,621",
            "184,790"
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
        "date": "20261127",
        "unit": "億元",
        "foreign": -296.28,
        "investmentTrust": 85.21,
        "dealer": -1.95,
        "dealerSelf": 20.32,
        "dealerHedge": -22.27,
        "total": -213.03,
        "checksum": -213.02,
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
        "date": "20261127",
        "requestedDate": "20261127",
        "matchedRequest": true,
        "rocDate": "115/11/27",
        "turnoverYi": 6946.61,
        "taiexClose": 39308.08,
        "taiexChange": 156.27
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261127",
        "index": {
          "close": 285.77,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261127",
          "open": 290.16,
          "high": 292.94,
          "low": 284.95,
          "prevClose": 289.84,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 39308.08,
          "field": "z",
          "misDate": "20261127"
        },
        "turnoverYi": 1259.25,
        "quoteCount": 13690
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261127",
        "contractMonth": "202612",
        "close": 39363,
        "change": -129,
        "volume": 59337,
        "openInterest": 130539,
        "session": "一般",
        "rowCount": 25,
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
