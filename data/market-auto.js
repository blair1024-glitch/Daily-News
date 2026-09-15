/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-15T23:34:13.386Z",
  "tradeDate": "20260915",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260915",
        "financingAmountYi": {
          "prevBalance": 5838.78,
          "balance": 5822.4,
          "change": -16.38,
          "raw": [
            "融資金額(仟元)",
            "16,290,924",
            "17,615,398",
            "312,670",
            "583,877,609",
            "582,240,465"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9165719,
          "balance": 9190511,
          "change": 24792,
          "raw": [
            "融資(交易單位)",
            "226,366",
            "197,887",
            "3,687",
            "9,165,719",
            "9,190,511"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 201486,
          "balance": 198052,
          "change": -3434,
          "raw": [
            "融券(交易單位)",
            "17,830",
            "19,125",
            "4,729",
            "201,486",
            "198,052"
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
        "date": "20260915",
        "unit": "億元",
        "foreign": -626.99,
        "investmentTrust": -19.91,
        "dealer": -142.06,
        "dealerSelf": 13.01,
        "dealerHedge": -155.07,
        "total": -788.96,
        "checksum": -788.96,
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
        "date": "20260915",
        "requestedDate": "20260915",
        "matchedRequest": true,
        "rocDate": "115/09/15",
        "turnoverYi": 6347.07,
        "taiexClose": 45511.49,
        "taiexChange": -351.03
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260915",
        "index": {
          "close": 388.73,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260916",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 388.73,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 45511.49,
          "field": "y",
          "misDate": "20260916"
        },
        "turnoverYi": 1809.74,
        "quoteCount": 11358
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260915",
        "contractMonth": "202609",
        "close": 45607,
        "change": -170,
        "volume": 75529,
        "openInterest": 18797,
        "session": "一般",
        "rowCount": 29,
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
