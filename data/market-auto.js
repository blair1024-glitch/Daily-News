/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-29T23:41:02.110Z",
  "tradeDate": "20261029",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261029",
        "financingAmountYi": {
          "prevBalance": 6323,
          "balance": 6339.11,
          "change": 16.11,
          "raw": [
            "融資金額(仟元)",
            "25,149,066",
            "22,968,994",
            "568,776",
            "632,299,552",
            "633,910,848"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9550908,
          "balance": 9588759,
          "change": 37851,
          "raw": [
            "融資(交易單位)",
            "321,858",
            "280,384",
            "3,623",
            "9,550,908",
            "9,588,759"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 193040,
          "balance": 189002,
          "change": -4038,
          "raw": [
            "融券(交易單位)",
            "21,600",
            "21,127",
            "3,565",
            "193,040",
            "189,002"
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
        "date": "20261029",
        "unit": "億元",
        "foreign": -688.15,
        "investmentTrust": 70.44,
        "dealer": -215,
        "dealerSelf": -1.84,
        "dealerHedge": -213.16,
        "total": -832.71,
        "checksum": -832.71,
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
        "date": "20261029",
        "requestedDate": "20261029",
        "matchedRequest": true,
        "rocDate": "115/10/29",
        "turnoverYi": 8238.13,
        "taiexClose": 46368.33,
        "taiexChange": -667.25
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261029",
        "index": {
          "close": 387.37,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261030",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 387.37,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46368.33,
          "field": "y",
          "misDate": "20261030"
        },
        "turnoverYi": 2141.57,
        "quoteCount": 13242
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261029",
        "contractMonth": "202611",
        "close": 46577,
        "change": -672,
        "volume": 56666,
        "openInterest": 117523,
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
