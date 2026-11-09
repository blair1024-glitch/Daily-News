/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-11-09T21:18:26.746Z",
  "tradeDate": "20261109",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261109",
        "financingAmountYi": {
          "prevBalance": 5340.53,
          "balance": 5399.16,
          "change": 58.63,
          "raw": [
            "融資金額(仟元)",
            "26,018,923",
            "19,373,271",
            "782,660",
            "534,052,749",
            "539,915,741"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9037947,
          "balance": 9153428,
          "change": 115481,
          "raw": [
            "融資(交易單位)",
            "451,501",
            "326,066",
            "9,954",
            "9,037,947",
            "9,153,428"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 242766,
          "balance": 222076,
          "change": -20690,
          "raw": [
            "融券(交易單位)",
            "20,603",
            "34,296",
            "34,383",
            "242,766",
            "222,076"
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
        "date": "20261109",
        "unit": "億元",
        "foreign": -900.56,
        "investmentTrust": 313.12,
        "dealer": -312.19,
        "dealerSelf": -63.82,
        "dealerHedge": -248.37,
        "total": -899.63,
        "checksum": -899.63,
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
        "date": "20261109",
        "requestedDate": "20261109",
        "matchedRequest": true,
        "rocDate": "115/11/09",
        "turnoverYi": 8770.26,
        "taiexClose": 41661.7,
        "taiexChange": 1960.06
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261109",
        "index": {
          "close": 321.97,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261109",
          "open": 305.51,
          "high": 323.84,
          "low": 305.51,
          "prevClose": 304.02,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 41661.7,
          "field": "z",
          "misDate": "20261109"
        },
        "turnoverYi": 1397.11,
        "quoteCount": 13674
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261109",
        "contractMonth": "202611",
        "close": 41423,
        "change": 1771,
        "volume": 94766,
        "openInterest": 123179,
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
