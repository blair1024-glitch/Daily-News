/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-18T14:48:10.410Z",
  "tradeDate": "20260918",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260918",
        "financingAmountYi": {
          "prevBalance": 5893.97,
          "balance": 5940.39,
          "change": 46.42,
          "raw": [
            "融資金額(仟元)",
            "32,104,190",
            "26,974,215",
            "487,762",
            "589,397,267",
            "594,039,480"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9261793,
          "balance": 9279815,
          "change": 18022,
          "raw": [
            "融資(交易單位)",
            "374,091",
            "345,691",
            "10,378",
            "9,261,793",
            "9,279,815"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 216288,
          "balance": 222965,
          "change": 6677,
          "raw": [
            "融券(交易單位)",
            "21,423",
            "29,932",
            "1,832",
            "216,288",
            "222,965"
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
        "date": "20260918",
        "unit": "億元",
        "foreign": 869.94,
        "investmentTrust": 81.53,
        "dealer": 243.04,
        "dealerSelf": 141.82,
        "dealerHedge": 101.22,
        "total": 1194.51,
        "checksum": 1194.51,
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
        "date": "20260918",
        "requestedDate": "20260918",
        "matchedRequest": true,
        "rocDate": "115/09/18",
        "turnoverYi": 11423.22,
        "taiexClose": 47180.75,
        "taiexChange": 892.75
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260918",
        "index": {
          "close": 412.68,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20260918",
          "open": 401.05,
          "high": 412.68,
          "low": 401.05,
          "prevClose": 398.17,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 47180.75,
          "field": "z",
          "misDate": "20260918"
        },
        "turnoverYi": 2806.06,
        "quoteCount": 11481,
        "notes": [
          "quotes 第 1 次 → terminated"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260918",
        "contractMonth": "202610",
        "close": 47418,
        "change": 959,
        "volume": 44655,
        "openInterest": 101893,
        "session": "一般",
        "rowCount": 23,
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
