/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-17T01:06:26.487Z",
  "tradeDate": "20261016",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261016",
        "financingAmountYi": {
          "prevBalance": 6464.16,
          "balance": 6455.94,
          "change": -8.22,
          "raw": [
            "融資金額(仟元)",
            "28,656,955",
            "28,942,556",
            "536,222",
            "646,415,871",
            "645,594,048"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9521230,
          "balance": 9538664,
          "change": 17434,
          "raw": [
            "融資(交易單位)",
            "343,600",
            "318,542",
            "7,624",
            "9,521,230",
            "9,538,664"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 229150,
          "balance": 233602,
          "change": 4452,
          "raw": [
            "融券(交易單位)",
            "20,982",
            "30,004",
            "4,570",
            "229,150",
            "233,602"
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
        "date": "20261016",
        "unit": "億元",
        "foreign": -461.47,
        "investmentTrust": 110.48,
        "dealer": -334.14,
        "dealerSelf": -101.79,
        "dealerHedge": -232.35,
        "total": -685.14,
        "checksum": -685.13,
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
        "date": "20261016",
        "requestedDate": "20261016",
        "matchedRequest": true,
        "rocDate": "115/10/16",
        "turnoverYi": 9938.15,
        "taiexClose": 47111.26,
        "taiexChange": 141.39
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261016",
        "index": {
          "close": 400.26,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261016",
          "open": 397.67,
          "high": 404.96,
          "low": 396.8,
          "prevClose": 396.9,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 47111.26,
          "field": "z",
          "misDate": "20261016"
        },
        "turnoverYi": 2404.9,
        "quoteCount": 12587,
        "notes": [
          "quotes 第 1 次 → terminated"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261016",
        "contractMonth": "202610",
        "close": 47242,
        "change": 311,
        "volume": 63312,
        "openInterest": 97247,
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
