/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-17T04:57:45.883Z",
  "tradeDate": "20261116",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261116",
        "financingAmountYi": {
          "prevBalance": 5365.99,
          "balance": 5244.98,
          "change": -121.01,
          "raw": [
            "融資金額(仟元)",
            "22,507,189",
            "32,957,981",
            "1,650,121",
            "536,598,906",
            "524,497,993"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9011434,
          "balance": 8993806,
          "change": -17628,
          "raw": [
            "融資(交易單位)",
            "448,529",
            "459,314",
            "6,843",
            "9,011,434",
            "8,993,806"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 208773,
          "balance": 217384,
          "change": 8611,
          "raw": [
            "融券(交易單位)",
            "31,095",
            "40,344",
            "638",
            "208,773",
            "217,384"
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
        "date": "20261116",
        "unit": "億元",
        "foreign": -701.89,
        "investmentTrust": -183.02,
        "dealer": -259.03,
        "dealerSelf": 31.19,
        "dealerHedge": -290.22,
        "total": -1143.94,
        "checksum": -1143.94,
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
        "date": "20261116",
        "requestedDate": "20261116",
        "matchedRequest": true,
        "rocDate": "115/11/16",
        "turnoverYi": 9031.15,
        "taiexClose": 41040.08,
        "taiexChange": -2635.04
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261116",
        "index": {
          "close": 319.12,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261117",
          "open": 314.68,
          "high": 314.77,
          "low": 302.82,
          "prevClose": 319.12,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 41040.08,
          "field": "y",
          "misDate": "20261117"
        },
        "turnoverYi": 1754.55,
        "quoteCount": 13843
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261116",
        "contractMonth": "202611",
        "close": 40885,
        "change": -2954,
        "volume": 167772,
        "openInterest": 53037,
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
