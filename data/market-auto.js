/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-04T14:49:50.242Z",
  "tradeDate": "20260904",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260904",
        "financingAmountYi": {
          "prevBalance": 5787.39,
          "balance": 5818.95,
          "change": 31.56,
          "raw": [
            "融資金額(仟元)",
            "28,716,507",
            "24,349,435",
            "1,211,791",
            "578,739,307",
            "581,894,588"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8902986,
          "balance": 8919251,
          "change": 16265,
          "raw": [
            "融資(交易單位)",
            "294,064",
            "272,072",
            "5,727",
            "8,902,986",
            "8,919,251"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 222843,
          "balance": 219160,
          "change": -3683,
          "raw": [
            "融券(交易單位)",
            "22,347",
            "22,883",
            "4,219",
            "222,843",
            "219,160"
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
        "date": "20260904",
        "unit": "億元",
        "foreign": 562.13,
        "investmentTrust": -9.11,
        "dealer": 63.7,
        "dealerSelf": 15.06,
        "dealerHedge": 48.64,
        "total": 616.72,
        "checksum": 616.72,
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
        "date": "20260904",
        "requestedDate": "20260904",
        "matchedRequest": true,
        "rocDate": "115/09/04",
        "turnoverYi": 8582.45,
        "taiexClose": 46551.13,
        "taiexChange": 693.47
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260904",
        "index": {
          "close": 402.48,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20260904",
          "open": 398.83,
          "high": 405.64,
          "low": 394.59,
          "prevClose": 395.25,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46551.13,
          "field": "z",
          "misDate": "20260904"
        },
        "turnoverYi": 2005.19,
        "quoteCount": 10963,
        "notes": [
          "quotes 第 1 次 → terminated"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260904",
        "contractMonth": "202609",
        "close": 46704,
        "change": 885,
        "volume": 50177,
        "openInterest": 104112,
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
