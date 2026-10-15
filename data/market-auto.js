/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-15T15:30:54.790Z",
  "tradeDate": "20261015",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261015",
        "financingAmountYi": {
          "prevBalance": 6515.56,
          "balance": 6464.15,
          "change": -51.41,
          "raw": [
            "融資金額(仟元)",
            "38,866,995",
            "43,332,167",
            "676,172",
            "651,556,359",
            "646,415,015"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9467239,
          "balance": 9521231,
          "change": 53992,
          "raw": [
            "融資(交易單位)",
            "534,957",
            "474,201",
            "6,764",
            "9,467,239",
            "9,521,231"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 228653,
          "balance": 229150,
          "change": 497,
          "raw": [
            "融券(交易單位)",
            "42,583",
            "44,928",
            "1,848",
            "228,653",
            "229,150"
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
        "date": "20261015",
        "unit": "億元",
        "foreign": -3025.55,
        "investmentTrust": 292.83,
        "dealer": -958.23,
        "dealerSelf": -86.83,
        "dealerHedge": -871.4,
        "total": -3690.96,
        "checksum": -3690.95,
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
        "date": "20261015",
        "requestedDate": "20261015",
        "matchedRequest": true,
        "rocDate": "115/10/15",
        "turnoverYi": 14357.55,
        "taiexClose": 46969.87,
        "taiexChange": -1655.96
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261015",
        "index": {
          "close": 396.9,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261015",
          "open": 415.3,
          "high": 415.3,
          "low": 395.18,
          "prevClose": 420.13,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46969.87,
          "field": "z",
          "misDate": "20261015"
        },
        "turnoverYi": 2565.65,
        "quoteCount": 12565,
        "notes": [
          "quotes 第 1 次 → terminated"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261015",
        "contractMonth": "202610",
        "close": 46979,
        "change": -1819,
        "volume": 84911,
        "openInterest": 106781,
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
