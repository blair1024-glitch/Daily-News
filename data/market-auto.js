/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-10T18:29:34.153Z",
  "tradeDate": "20261110",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261110",
        "financingAmountYi": {
          "prevBalance": 5399.16,
          "balance": 5366.79,
          "change": -32.37,
          "raw": [
            "融資金額(仟元)",
            "26,431,449",
            "28,400,561",
            "1,267,897",
            "539,915,741",
            "536,678,732"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9153425,
          "balance": 9096065,
          "change": -57360,
          "raw": [
            "融資(交易單位)",
            "396,670",
            "444,637",
            "9,393",
            "9,153,425",
            "9,096,065"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 222026,
          "balance": 211131,
          "change": -10895,
          "raw": [
            "融券(交易單位)",
            "20,309",
            "30,144",
            "20,730",
            "222,026",
            "211,131"
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
        "date": "20261110",
        "unit": "億元",
        "foreign": -341.17,
        "investmentTrust": 398.91,
        "dealer": -175.36,
        "dealerSelf": -55.39,
        "dealerHedge": -119.97,
        "total": -117.62,
        "checksum": -117.62,
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
        "date": "20261110",
        "requestedDate": "20261110",
        "matchedRequest": true,
        "rocDate": "115/11/10",
        "turnoverYi": 10340.12,
        "taiexClose": 42711.92,
        "taiexChange": 1050.22
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261110",
        "index": {
          "close": 332.97,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261110",
          "open": 325.41,
          "high": 338.52,
          "low": 325.41,
          "prevClose": 321.97,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 42711.92,
          "field": "z",
          "misDate": "20261110"
        },
        "turnoverYi": 2152.11,
        "quoteCount": 13715
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261110",
        "contractMonth": "202611",
        "close": 42623,
        "change": 1145,
        "volume": 85124,
        "openInterest": 122272,
        "session": "一般",
        "rowCount": 28,
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
