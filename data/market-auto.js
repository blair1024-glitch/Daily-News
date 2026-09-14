/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-14T16:48:35.254Z",
  "tradeDate": "20260914",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260914",
        "financingAmountYi": {
          "prevBalance": 5878.71,
          "balance": 5838.78,
          "change": -39.93,
          "raw": [
            "融資金額(仟元)",
            "17,369,933",
            "20,816,864",
            "546,640",
            "587,871,180",
            "583,877,609"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9130041,
          "balance": 9165719,
          "change": 35678,
          "raw": [
            "融資(交易單位)",
            "265,138",
            "225,467",
            "3,993",
            "9,130,041",
            "9,165,719"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 197926,
          "balance": 201486,
          "change": 3560,
          "raw": [
            "融券(交易單位)",
            "19,156",
            "22,963",
            "247",
            "197,926",
            "201,486"
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
        "date": "20260914",
        "unit": "億元",
        "foreign": -369.64,
        "investmentTrust": 36.96,
        "dealer": -150.92,
        "dealerSelf": -39.78,
        "dealerHedge": -111.14,
        "total": -483.61,
        "checksum": -483.6,
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
        "date": "20260914",
        "requestedDate": "20260914",
        "matchedRequest": true,
        "rocDate": "115/09/14",
        "turnoverYi": 6653.16,
        "taiexClose": 45862.52,
        "taiexChange": -322.33
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260914",
        "index": null,
        "indexCross": null,
        "turnoverYi": 1733.21,
        "quoteCount": 11289,
        "notes": [
          "MIS → This operation was aborted"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260914",
        "contractMonth": "202609",
        "close": 45780,
        "change": -407,
        "volume": 94885,
        "openInterest": 47416,
        "session": "一般",
        "rowCount": 32,
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
