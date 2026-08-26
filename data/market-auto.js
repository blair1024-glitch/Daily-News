/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-26T23:43:42.470Z",
  "tradeDate": "20260826",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260826",
        "financingAmountYi": {
          "prevBalance": 5469.38,
          "balance": 5548.03,
          "change": 78.65,
          "raw": [
            "融資金額(仟元)",
            "32,839,860",
            "24,720,558",
            "254,414",
            "546,937,698",
            "554,802,585"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8900805,
          "balance": 8894036,
          "change": -6769,
          "raw": [
            "融資(交易單位)",
            "332,287",
            "334,848",
            "4,208",
            "8,900,805",
            "8,894,036"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 200504,
          "balance": 206809,
          "change": 6305,
          "raw": [
            "融券(交易單位)",
            "18,779",
            "28,327",
            "3,243",
            "200,504",
            "206,809"
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
        "date": "20260826",
        "unit": "億元",
        "foreign": 366.13,
        "investmentTrust": 33.66,
        "dealer": 179.34,
        "dealerSelf": 47.39,
        "dealerHedge": 131.95,
        "total": 579.13,
        "checksum": 579.13,
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
        "date": "20260826",
        "rocDate": "115/08/26",
        "turnoverYi": 8430.92,
        "taiexClose": 45832.62,
        "taiexChange": 663.16
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260826",
        "index": null,
        "turnoverYi": 2456.66,
        "quoteCount": 10550,
        "notes": [
          "index tpex_mainboard_daily_index → 回應不是 JSON（前 120 字：<!DOCTYPE html><html lang=\"zh-Hant-tw\"><he",
          "index tpex_index_summary → 回應不是 JSON（前 120 字：<!DOCTYPE html><html lang=\"zh-Hant-tw\"><he"
        ]
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260826",
        "contractMonth": "202609",
        "close": 46011,
        "change": 979,
        "volume": 57745,
        "openInterest": 106112,
        "session": "一般",
        "rowCount": 22,
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
