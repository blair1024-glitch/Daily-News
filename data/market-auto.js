/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-27T16:13:08.456Z",
  "tradeDate": "20261027",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261027",
        "financingAmountYi": {
          "prevBalance": 6338.8,
          "balance": 6233.87,
          "change": -104.93,
          "raw": [
            "融資金額(仟元)",
            "20,175,061",
            "29,876,264",
            "792,111",
            "633,880,174",
            "623,386,860"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9604399,
          "balance": 9550611,
          "change": -53788,
          "raw": [
            "融資(交易單位)",
            "271,054",
            "318,381",
            "6,461",
            "9,604,399",
            "9,550,611"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 216539,
          "balance": 217708,
          "change": 1169,
          "raw": [
            "融券(交易單位)",
            "25,268",
            "33,665",
            "7,228",
            "216,539",
            "217,708"
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
        "date": "20261027",
        "unit": "億元",
        "foreign": -80.39,
        "investmentTrust": 236.05,
        "dealer": -123.99,
        "dealerSelf": 7.68,
        "dealerHedge": -131.67,
        "total": 31.67,
        "checksum": 31.67,
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
        "date": "20261027",
        "requestedDate": "20261027",
        "matchedRequest": true,
        "rocDate": "115/10/27",
        "turnoverYi": 10316.84,
        "taiexClose": 46096.23,
        "taiexChange": 54.8
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261027",
        "index": {
          "close": 379.2,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261027",
          "open": 383.88,
          "high": 388.39,
          "low": 375.73,
          "prevClose": 381.69,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46096.23,
          "field": "z",
          "misDate": "20261027"
        },
        "turnoverYi": 1856.83,
        "quoteCount": 13186
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261027",
        "contractMonth": "202611",
        "close": 46081,
        "change": -153,
        "volume": 61110,
        "openInterest": 116866,
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
