/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-04T00:48:54.943Z",
  "tradeDate": "20260903",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260903",
        "financingAmountYi": {
          "prevBalance": 5856.75,
          "balance": 5787.39,
          "change": -69.36,
          "raw": [
            "融資金額(仟元)",
            "31,682,547",
            "37,994,930",
            "623,595",
            "585,675,285",
            "578,739,307"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8929878,
          "balance": 8902986,
          "change": -26892,
          "raw": [
            "融資(交易單位)",
            "371,507",
            "389,746",
            "8,653",
            "8,929,878",
            "8,902,986"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 214315,
          "balance": 222843,
          "change": 8528,
          "raw": [
            "融券(交易單位)",
            "17,635",
            "27,546",
            "1,383",
            "214,315",
            "222,843"
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
        "date": "20260903",
        "unit": "億元",
        "foreign": -481.46,
        "investmentTrust": 6.94,
        "dealer": -167.08,
        "dealerSelf": -56.79,
        "dealerHedge": -110.29,
        "total": -641.6,
        "checksum": -641.6,
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
        "date": "20260903",
        "requestedDate": "20260903",
        "matchedRequest": true,
        "rocDate": "115/09/03",
        "turnoverYi": 9932.62,
        "taiexClose": 45857.66,
        "taiexChange": -307.06
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260903",
        "index": {
          "close": 395.25,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260904",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 395.25,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 45857.66,
          "field": "y",
          "misDate": "20260904"
        },
        "turnoverYi": 2467.65,
        "quoteCount": 10994
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260903",
        "contractMonth": "202609",
        "close": 45837,
        "change": -328,
        "volume": 53082,
        "openInterest": 103513,
        "session": "一般",
        "rowCount": 29,
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
