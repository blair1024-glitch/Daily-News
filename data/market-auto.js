/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-07T02:33:17.242Z",
  "tradeDate": "20261106",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261106",
        "financingAmountYi": {
          "prevBalance": 5764.09,
          "balance": 5340.53,
          "change": -423.56,
          "raw": [
            "融資金額(仟元)",
            "28,143,760",
            "63,253,996",
            "7,246,171",
            "576,409,039",
            "534,052,632"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9440465,
          "balance": 9037948,
          "change": -402517,
          "raw": [
            "融資(交易單位)",
            "560,405",
            "928,520",
            "34,402",
            "9,440,465",
            "9,037,948"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 277051,
          "balance": 242766,
          "change": -34285,
          "raw": [
            "融券(交易單位)",
            "56,554",
            "58,327",
            "36,058",
            "277,051",
            "242,766"
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
        "date": "20261106",
        "unit": "億元",
        "foreign": -911.88,
        "investmentTrust": 266.91,
        "dealer": -494.76,
        "dealerSelf": -43.09,
        "dealerHedge": -451.67,
        "total": -1139.73,
        "checksum": -1139.73,
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
        "date": "20261106",
        "requestedDate": "20261106",
        "matchedRequest": true,
        "rocDate": "115/11/06",
        "turnoverYi": 13210.72,
        "taiexClose": 39701.64,
        "taiexChange": -1873.08
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261106",
        "index": {
          "close": 303.78,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261106",
          "open": 313.77,
          "high": 313.77,
          "low": 294.18,
          "prevClose": 321.47,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 39690.74,
          "field": "z",
          "misDate": "20261106"
        },
        "turnoverYi": 1808.74,
        "quoteCount": 13618
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261106",
        "contractMonth": "202611",
        "close": 39786,
        "change": -2096,
        "volume": 143277,
        "openInterest": 125793,
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
