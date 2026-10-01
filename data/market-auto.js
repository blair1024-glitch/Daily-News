/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-01T01:50:58.565Z",
  "tradeDate": "20260930",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260930",
        "financingAmountYi": {
          "prevBalance": 6186.53,
          "balance": 6222.52,
          "change": 35.99,
          "raw": [
            "融資金額(仟元)",
            "32,417,437",
            "28,214,741",
            "603,587",
            "618,653,344",
            "622,252,453"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9302600,
          "balance": 9286318,
          "change": -16282,
          "raw": [
            "融資(交易單位)",
            "390,286",
            "397,546",
            "9,022",
            "9,302,600",
            "9,286,318"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 217999,
          "balance": 235296,
          "change": 17297,
          "raw": [
            "融券(交易單位)",
            "10,353",
            "28,511",
            "861",
            "217,999",
            "235,296"
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
        "date": "20260930",
        "unit": "億元",
        "foreign": 308.57,
        "investmentTrust": 82.91,
        "dealer": 12.4,
        "dealerSelf": 13.81,
        "dealerHedge": -1.41,
        "total": 403.88,
        "checksum": 403.88,
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
        "date": "20260930",
        "requestedDate": "20260930",
        "matchedRequest": true,
        "rocDate": "115/09/30",
        "turnoverYi": 9214.93,
        "taiexClose": 47940.13,
        "taiexChange": 308.17
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260930",
        "index": {
          "close": 417.07,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261001",
          "open": 417.48,
          "high": 421.21,
          "low": 417.48,
          "prevClose": 417.07,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 47940.13,
          "field": "y",
          "misDate": "20261001"
        },
        "turnoverYi": null,
        "quoteCount": null,
        "notes": [
          "quotes 第 1 次 → terminated",
          "quotes 第 2 次 → terminated"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260930",
        "contractMonth": "202610",
        "close": 48330,
        "change": 549,
        "volume": 42731,
        "openInterest": 105359,
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
