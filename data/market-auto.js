/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-29T23:40:30.621Z",
  "tradeDate": "20260929",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260929",
        "financingAmountYi": {
          "prevBalance": 6151.03,
          "balance": 6186.53,
          "change": 35.5,
          "raw": [
            "融資金額(仟元)",
            "28,903,226",
            "24,574,441",
            "778,843",
            "615,103,402",
            "618,653,344"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9279711,
          "balance": 9302602,
          "change": 22891,
          "raw": [
            "融資(交易單位)",
            "306,067",
            "271,098",
            "12,078",
            "9,279,711",
            "9,302,602"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 202008,
          "balance": 217999,
          "change": 15991,
          "raw": [
            "融券(交易單位)",
            "14,250",
            "31,164",
            "923",
            "202,008",
            "217,999"
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
        "date": "20260929",
        "unit": "億元",
        "foreign": -625.83,
        "investmentTrust": 5.79,
        "dealer": -164.03,
        "dealerSelf": -8.09,
        "dealerHedge": -155.94,
        "total": -784.06,
        "checksum": -784.07,
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
        "date": "20260929",
        "requestedDate": "20260929",
        "matchedRequest": true,
        "rocDate": "115/09/29",
        "turnoverYi": 8361.45,
        "taiexClose": 47631.96,
        "taiexChange": -392.64
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260929",
        "index": {
          "close": 412.25,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260930",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 412.25,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 47631.96,
          "field": "y",
          "misDate": "20260930"
        },
        "turnoverYi": 1862.56,
        "quoteCount": 11730
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260929",
        "contractMonth": "202610",
        "close": 47767,
        "change": -358,
        "volume": 43812,
        "openInterest": 102023,
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
