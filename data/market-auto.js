/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-21T23:40:08.534Z",
  "tradeDate": "20260921",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260921",
        "financingAmountYi": {
          "prevBalance": 5940.39,
          "balance": 6030.38,
          "change": 89.99,
          "raw": [
            "融資金額(仟元)",
            "36,609,228",
            "27,262,740",
            "348,190",
            "594,039,480",
            "603,037,778"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9277205,
          "balance": 9330477,
          "change": 53272,
          "raw": [
            "融資(交易單位)",
            "412,800",
            "355,805",
            "3,723",
            "9,277,205",
            "9,330,477"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 222963,
          "balance": 231582,
          "change": 8619,
          "raw": [
            "融券(交易單位)",
            "20,683",
            "30,872",
            "1,570",
            "222,963",
            "231,582"
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
        "date": "20260921",
        "unit": "億元",
        "foreign": 204.79,
        "investmentTrust": 45.96,
        "dealer": 227.3,
        "dealerSelf": 111.48,
        "dealerHedge": 115.82,
        "total": 478.05,
        "checksum": 478.05,
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
        "date": "20260921",
        "requestedDate": "20260921",
        "matchedRequest": true,
        "rocDate": "115/09/21",
        "turnoverYi": 8668.18,
        "taiexClose": 47718.84,
        "taiexChange": 538.09
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260921",
        "index": {
          "close": 412.57,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260922",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 412.57,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 47718.84,
          "field": "y",
          "misDate": "20260922"
        },
        "turnoverYi": 2179.89,
        "quoteCount": 11524
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260921",
        "contractMonth": "202610",
        "close": 48077,
        "change": 649,
        "volume": 37750,
        "openInterest": 101502,
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
