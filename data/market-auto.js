/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-10T00:52:42.026Z",
  "tradeDate": "20260909",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260909",
        "financingAmountYi": {
          "prevBalance": 5862.67,
          "balance": 5871.67,
          "change": 9,
          "raw": [
            "融資金額(仟元)",
            "26,925,829",
            "25,728,750",
            "297,244",
            "586,266,976",
            "587,166,811"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9048661,
          "balance": 9070714,
          "change": 22053,
          "raw": [
            "融資(交易單位)",
            "301,443",
            "273,367",
            "6,023",
            "9,048,661",
            "9,070,714"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 208614,
          "balance": 203610,
          "change": -5004,
          "raw": [
            "融券(交易單位)",
            "16,116",
            "15,532",
            "4,420",
            "208,614",
            "203,610"
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
        "date": "20260909",
        "unit": "億元",
        "foreign": 209.24,
        "investmentTrust": 20.85,
        "dealer": -18.84,
        "dealerSelf": -12.18,
        "dealerHedge": -6.66,
        "total": 211.25,
        "checksum": 211.25,
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
        "date": "20260909",
        "requestedDate": "20260909",
        "matchedRequest": true,
        "rocDate": "115/09/09",
        "turnoverYi": 8159.77,
        "taiexClose": 47183.36,
        "taiexChange": 77.58
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260909",
        "index": {
          "close": 408.09,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20260910",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 408.09,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 47183.36,
          "field": "y",
          "misDate": "20260910"
        },
        "turnoverYi": 2227.14,
        "quoteCount": 11020,
        "notes": [
          "quotes 第 1 次 → terminated"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260909",
        "contractMonth": "202609",
        "close": 47187,
        "change": 232,
        "volume": 49381,
        "openInterest": 98469,
        "session": "一般",
        "rowCount": 24,
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
