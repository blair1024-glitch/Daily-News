/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-27T04:48:47.795Z",
  "tradeDate": "20261126",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261126",
        "financingAmountYi": {
          "prevBalance": 4341.38,
          "balance": 4344.84,
          "change": 3.46,
          "raw": [
            "融資金額(仟元)",
            "23,043,358",
            "22,126,267",
            "570,602",
            "434,137,987",
            "434,484,476"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9383489,
          "balance": 8826430,
          "change": -557059,
          "raw": [
            "融資(交易單位)",
            "397,740",
            "940,477",
            "14,322",
            "9,383,489",
            "8,826,430"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 169365,
          "balance": 173621,
          "change": 4256,
          "raw": [
            "融券(交易單位)",
            "14,033",
            "22,816",
            "4,527",
            "169,365",
            "173,621"
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
        "date": "20261126",
        "unit": "億元",
        "foreign": -491.81,
        "investmentTrust": 212.13,
        "dealer": 128.65,
        "dealerSelf": 40.03,
        "dealerHedge": 88.62,
        "total": -151.03,
        "checksum": -151.03,
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
        "date": "20261126",
        "requestedDate": "20261126",
        "matchedRequest": true,
        "rocDate": "115/11/26",
        "turnoverYi": 8453.37,
        "taiexClose": 39151.81,
        "taiexChange": 956.38
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261126",
        "index": {
          "close": 289.84,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261127",
          "open": 290.16,
          "high": 292.94,
          "low": 285.82,
          "prevClose": 289.84,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 39151.81,
          "field": "y",
          "misDate": "20261127"
        },
        "turnoverYi": 1267.13,
        "quoteCount": 13832
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261126",
        "contractMonth": "202612",
        "close": 39455,
        "change": 1332,
        "volume": 79377,
        "openInterest": 131028,
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
