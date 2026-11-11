/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-11T18:24:36.082Z",
  "tradeDate": "20261111",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261111",
        "financingAmountYi": {
          "prevBalance": 5366.79,
          "balance": 5411.58,
          "change": 44.79,
          "raw": [
            "融資金額(仟元)",
            "27,383,665",
            "22,419,063",
            "485,241",
            "536,678,732",
            "541,158,093"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9096064,
          "balance": 9085832,
          "change": -10232,
          "raw": [
            "融資(交易單位)",
            "365,295",
            "363,238",
            "12,289",
            "9,096,064",
            "9,085,832"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 211131,
          "balance": 209019,
          "change": -2112,
          "raw": [
            "融券(交易單位)",
            "30,904",
            "39,835",
            "11,043",
            "211,131",
            "209,019"
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
        "date": "20261111",
        "unit": "億元",
        "foreign": -7.66,
        "investmentTrust": 185.85,
        "dealer": 62.57,
        "dealerSelf": 28.01,
        "dealerHedge": 34.56,
        "total": 240.76,
        "checksum": 240.76,
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
        "date": "20261111",
        "requestedDate": "20261111",
        "matchedRequest": true,
        "rocDate": "115/11/11",
        "turnoverYi": 8762.95,
        "taiexClose": 44257.15,
        "taiexChange": 1545.23
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261111",
        "index": {
          "close": 344.11,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261111",
          "open": 333.39,
          "high": 344.11,
          "low": 333.05,
          "prevClose": 332.97,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 44257.15,
          "field": "z",
          "misDate": "20261111"
        },
        "turnoverYi": 2072.22,
        "quoteCount": 13752
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261111",
        "contractMonth": "202611",
        "close": 44091,
        "change": 1445,
        "volume": 81696,
        "openInterest": 122326,
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
