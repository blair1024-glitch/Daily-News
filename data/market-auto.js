/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-02T14:59:17.628Z",
  "tradeDate": "20260902",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260902",
        "financingAmountYi": {
          "prevBalance": 5781.15,
          "balance": 5856.75,
          "change": 75.6,
          "raw": [
            "融資金額(仟元)",
            "35,783,448",
            "27,987,724",
            "235,897",
            "578,115,458",
            "585,675,285"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8896988,
          "balance": 8929880,
          "change": 32892,
          "raw": [
            "融資(交易單位)",
            "342,329",
            "304,105",
            "5,332",
            "8,896,988",
            "8,929,880"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 220835,
          "balance": 214315,
          "change": -6520,
          "raw": [
            "融券(交易單位)",
            "27,274",
            "21,519",
            "765",
            "220,835",
            "214,315"
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
        "date": "20260902",
        "unit": "億元",
        "foreign": -913.55,
        "investmentTrust": -35.28,
        "dealer": -203.62,
        "dealerSelf": 1.56,
        "dealerHedge": -205.18,
        "total": -1152.44,
        "checksum": -1152.45,
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
        "date": "20260902",
        "requestedDate": "20260902",
        "matchedRequest": true,
        "rocDate": "115/09/02",
        "turnoverYi": 9765,
        "taiexClose": 46164.72,
        "taiexChange": -784
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260902",
        "index": {
          "close": 406.96,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20260902",
          "open": 410.14,
          "high": 410.97,
          "low": 406.69,
          "prevClose": 410.77,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46164.72,
          "field": "z",
          "misDate": "20260902"
        },
        "turnoverYi": 2284.87,
        "quoteCount": 10813
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260902",
        "contractMonth": "202609",
        "close": 46189,
        "change": -1012,
        "volume": 46145,
        "openInterest": 105419,
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
