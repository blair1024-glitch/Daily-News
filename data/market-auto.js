/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-09-02T00:50:41.224Z",
  "tradeDate": "20260901",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260901",
        "financingAmountYi": {
          "prevBalance": 5698.77,
          "balance": 5781.15,
          "change": 82.38,
          "raw": [
            "融資金額(仟元)",
            "43,407,408",
            "34,586,673",
            "582,180",
            "569,876,903",
            "578,115,458"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8859895,
          "balance": 8896994,
          "change": 37099,
          "raw": [
            "融資(交易單位)",
            "438,181",
            "394,976",
            "6,106",
            "8,859,895",
            "8,896,994"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 217718,
          "balance": 220835,
          "change": 3117,
          "raw": [
            "融券(交易單位)",
            "19,778",
            "25,538",
            "2,643",
            "217,718",
            "220,835"
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
        "date": "20260901",
        "unit": "億元",
        "foreign": 267.08,
        "investmentTrust": 136,
        "dealer": 163.29,
        "dealerSelf": 31.57,
        "dealerHedge": 131.72,
        "total": 566.37,
        "checksum": 566.37,
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
        "date": "20260901",
        "requestedDate": "20260901",
        "matchedRequest": true,
        "rocDate": "115/09/01",
        "turnoverYi": 11875.72,
        "taiexClose": 46948.72,
        "taiexChange": 820.25
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260901",
        "index": null,
        "indexCross": null,
        "turnoverYi": 2599.99,
        "quoteCount": 10770,
        "notes": [
          "MIS → HTTP 502"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260901",
        "contractMonth": "202609",
        "close": 47209,
        "change": 1232,
        "volume": 57627,
        "openInterest": 104368,
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
