/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-12T23:40:22.390Z",
  "tradeDate": "20261112",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261112",
        "financingAmountYi": {
          "prevBalance": 5411.58,
          "balance": 5334.75,
          "change": -76.83,
          "raw": [
            "融資金額(仟元)",
            "28,539,560",
            "35,637,367",
            "585,657",
            "541,158,093",
            "533,474,629"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9085828,
          "balance": 9016207,
          "change": -69621,
          "raw": [
            "融資(交易單位)",
            "435,089",
            "497,809",
            "6,901",
            "9,085,828",
            "9,016,207"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 209019,
          "balance": 210522,
          "change": 1503,
          "raw": [
            "融券(交易單位)",
            "29,846",
            "32,055",
            "706",
            "209,019",
            "210,522"
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
        "date": "20261112",
        "unit": "億元",
        "foreign": -6.85,
        "investmentTrust": 125.68,
        "dealer": -65.41,
        "dealerSelf": -29.81,
        "dealerHedge": -35.6,
        "total": 53.42,
        "checksum": 53.42,
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
        "date": "20261112",
        "requestedDate": "20261112",
        "matchedRequest": true,
        "rocDate": "115/11/12",
        "turnoverYi": 10568.42,
        "taiexClose": 43091.87,
        "taiexChange": -1165.28
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261112",
        "index": {
          "close": 335.73,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261113",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 335.73,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 43091.87,
          "field": "y",
          "misDate": "20261113"
        },
        "turnoverYi": 2827.96,
        "quoteCount": 13789
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261112",
        "contractMonth": "202611",
        "close": 43178,
        "change": -958,
        "volume": 87240,
        "openInterest": 113812,
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
