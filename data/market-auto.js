/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-05T18:32:16.534Z",
  "tradeDate": "20261105",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261105",
        "financingAmountYi": {
          "prevBalance": 5969.46,
          "balance": 5764.09,
          "change": -205.37,
          "raw": [
            "融資金額(仟元)",
            "22,632,780",
            "39,992,267",
            "3,177,309",
            "596,945,835",
            "576,409,039"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9514913,
          "balance": 9440455,
          "change": -74458,
          "raw": [
            "融資(交易單位)",
            "455,932",
            "518,105",
            "12,285",
            "9,514,913",
            "9,440,455"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 246812,
          "balance": 277051,
          "change": 30239,
          "raw": [
            "融券(交易單位)",
            "26,042",
            "58,165",
            "1,884",
            "246,812",
            "277,051"
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
        "date": "20261105",
        "unit": "億元",
        "foreign": -1024.61,
        "investmentTrust": 225.94,
        "dealer": -435.27,
        "dealerSelf": -39.16,
        "dealerHedge": -396.11,
        "total": -1233.94,
        "checksum": -1233.94,
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
        "date": "20261105",
        "requestedDate": "20261105",
        "matchedRequest": true,
        "rocDate": "115/11/05",
        "turnoverYi": 9870.99,
        "taiexClose": 41574.72,
        "taiexChange": -1374.19
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261105",
        "index": {
          "close": 321.47,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261105",
          "open": 341.88,
          "high": 341.88,
          "low": 321.23,
          "prevClose": 343.5,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 41574.72,
          "field": "z",
          "misDate": "20261105"
        },
        "turnoverYi": 1911.3,
        "quoteCount": 13679
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261105",
        "contractMonth": "202611",
        "close": 41915,
        "change": -1288,
        "volume": 98430,
        "openInterest": 123826,
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
