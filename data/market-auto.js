/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-22T23:40:40.413Z",
  "tradeDate": "20261022",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261022",
        "financingAmountYi": {
          "prevBalance": 6443.74,
          "balance": 6338.8,
          "change": -104.94,
          "raw": [
            "融資金額(仟元)",
            "25,008,207",
            "33,058,284",
            "2,443,373",
            "644,373,624",
            "633,880,174"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9632327,
          "balance": 9604402,
          "change": -27925,
          "raw": [
            "融資(交易單位)",
            "350,036",
            "362,918",
            "15,043",
            "9,632,327",
            "9,604,402"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 192598,
          "balance": 216539,
          "change": 23941,
          "raw": [
            "融券(交易單位)",
            "19,022",
            "43,724",
            "761",
            "192,598",
            "216,539"
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
        "date": "20261022",
        "unit": "億元",
        "foreign": -815.82,
        "investmentTrust": 94.92,
        "dealer": -273.77,
        "dealerSelf": -37.16,
        "dealerHedge": -236.61,
        "total": -994.67,
        "checksum": -994.67,
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
        "date": "20261022",
        "requestedDate": "20261022",
        "matchedRequest": true,
        "rocDate": "115/10/22",
        "turnoverYi": 9334.37,
        "taiexClose": 46041.43,
        "taiexChange": -846.34
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261022",
        "index": {
          "close": 381.69,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261022",
          "open": 396.32,
          "high": 400.3,
          "low": 381.3,
          "prevClose": 395.42,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46041.43,
          "field": "z",
          "misDate": "20261022"
        },
        "turnoverYi": 2344.81,
        "quoteCount": 13032
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261022",
        "contractMonth": "202611",
        "close": 46272,
        "change": -741,
        "volume": 55226,
        "openInterest": 115258,
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
