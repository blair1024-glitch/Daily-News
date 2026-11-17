/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-17T19:38:31.062Z",
  "tradeDate": "20261117",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261117",
        "financingAmountYi": {
          "prevBalance": 5244.98,
          "balance": 5087.21,
          "change": -157.77,
          "raw": [
            "融資金額(仟元)",
            "18,708,016",
            "31,663,630",
            "2,821,145",
            "524,497,993",
            "508,721,233"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9001724,
          "balance": 8986689,
          "change": -15035,
          "raw": [
            "融資(交易單位)",
            "393,982",
            "392,712",
            "16,305",
            "9,001,724",
            "8,986,689"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 217384,
          "balance": 207959,
          "change": -9425,
          "raw": [
            "融券(交易單位)",
            "35,877",
            "35,065",
            "8,613",
            "217,384",
            "207,959"
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
        "date": "20261117",
        "unit": "億元",
        "foreign": -380.94,
        "investmentTrust": -38.21,
        "dealer": -156.97,
        "dealerSelf": 63.87,
        "dealerHedge": -220.84,
        "total": -576.11,
        "checksum": -576.12,
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
        "date": "20261117",
        "requestedDate": "20261117",
        "matchedRequest": true,
        "rocDate": "115/11/17",
        "turnoverYi": 10128.68,
        "taiexClose": 40092.11,
        "taiexChange": -947.97
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261117",
        "index": {
          "close": 306.61,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261117",
          "open": 314.68,
          "high": 314.77,
          "low": 302.82,
          "prevClose": 319.12,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 40092.11,
          "field": "z",
          "misDate": "20261117"
        },
        "turnoverYi": 1815.7,
        "quoteCount": 13870
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261117",
        "contractMonth": "202611",
        "close": 40073,
        "change": -708,
        "volume": 138833,
        "openInterest": 19858,
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
