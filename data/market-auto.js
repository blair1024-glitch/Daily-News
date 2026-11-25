/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-25T20:23:14.066Z",
  "tradeDate": "20261125",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261125",
        "financingAmountYi": {
          "prevBalance": 4535.05,
          "balance": 4341.38,
          "change": -193.67,
          "raw": [
            "融資金額(仟元)",
            "23,365,278",
            "42,161,121",
            "571,183",
            "453,505,013",
            "434,137,987"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 10064967,
          "balance": 9383491,
          "change": -681476,
          "raw": [
            "融資(交易單位)",
            "502,030",
            "1,175,561",
            "7,945",
            "10,064,967",
            "9,383,491"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 186613,
          "balance": 169365,
          "change": -17248,
          "raw": [
            "融券(交易單位)",
            "29,654",
            "16,511",
            "4,105",
            "186,613",
            "169,365"
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
        "date": "20261125",
        "unit": "億元",
        "foreign": -1236.55,
        "investmentTrust": 550.35,
        "dealer": -128.33,
        "dealerSelf": -73.63,
        "dealerHedge": -54.7,
        "total": -814.53,
        "checksum": -814.53,
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
        "date": "20261125",
        "requestedDate": "20261125",
        "matchedRequest": true,
        "rocDate": "115/11/25",
        "turnoverYi": 12297.62,
        "taiexClose": 38195.43,
        "taiexChange": -1926.92
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261125",
        "index": {
          "close": 275.97,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261125",
          "open": 290.72,
          "high": 292.22,
          "low": 270.93,
          "prevClose": 293.23,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 38195.43,
          "field": "z",
          "misDate": "20261125"
        },
        "turnoverYi": 1587.99,
        "quoteCount": 13830
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261125",
        "contractMonth": "202612",
        "close": 38062,
        "change": -2262,
        "volume": 125455,
        "openInterest": 131341,
        "session": "一般",
        "rowCount": 30,
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
