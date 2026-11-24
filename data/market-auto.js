/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-24T06:47:06.131Z",
  "tradeDate": "20261123",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261123",
        "financingAmountYi": {
          "prevBalance": 4352.27,
          "balance": 4338.08,
          "change": -14.19,
          "raw": [
            "融資金額(仟元)",
            "31,726,606",
            "29,342,122",
            "3,804,212",
            "435,227,252",
            "433,807,523"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8397944,
          "balance": 8530233,
          "change": 132289,
          "raw": [
            "融資(交易單位)",
            "633,467",
            "473,176",
            "28,002",
            "8,397,944",
            "8,530,233"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 199791,
          "balance": 172957,
          "change": -26834,
          "raw": [
            "融券(交易單位)",
            "47,929",
            "29,143",
            "8,048",
            "199,791",
            "172,957"
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
        "date": "20261123",
        "unit": "億元",
        "foreign": -289.48,
        "investmentTrust": -41.55,
        "dealer": -190.01,
        "dealerSelf": -28.99,
        "dealerHedge": -161.02,
        "total": -521.04,
        "checksum": -521.04,
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
        "date": "20261123",
        "requestedDate": "20261123",
        "matchedRequest": true,
        "rocDate": "115/11/23",
        "turnoverYi": 11137.43,
        "taiexClose": 36811.89,
        "taiexChange": 778.6
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261123",
        "index": {
          "close": 270.9,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261124",
          "open": 276.63,
          "high": 293.55,
          "low": 276.63,
          "prevClose": 270.9,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 36811.89,
          "field": "y",
          "misDate": "20261124"
        },
        "turnoverYi": 1735.76,
        "quoteCount": 13810
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261123",
        "contractMonth": "202612",
        "close": 36576,
        "change": 776,
        "volume": 123056,
        "openInterest": 133027,
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
