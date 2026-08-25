/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-25T23:24:38.895Z",
  "tradeDate": "20260825",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260825",
        "financingAmountYi": {
          "prevBalance": 5452.6,
          "balance": 5469.38,
          "change": 16.78,
          "raw": [
            "融資金額(仟元)",
            "22,256,921",
            "19,212,328",
            "1,366,482",
            "545,259,587",
            "546,937,698"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8856844,
          "balance": 8900808,
          "change": 43964,
          "raw": [
            "融資(交易單位)",
            "279,004",
            "224,108",
            "10,932",
            "8,856,844",
            "8,900,808"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 201513,
          "balance": 200504,
          "change": -1009,
          "raw": [
            "融券(交易單位)",
            "24,857",
            "24,348",
            "500",
            "201,513",
            "200,504"
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
        "date": "20260825",
        "unit": "億元",
        "foreign": -7.87,
        "investmentTrust": -39.84,
        "dealer": 0.6,
        "dealerSelf": 9.97,
        "dealerHedge": -9.37,
        "total": -47.11,
        "checksum": -47.11,
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
        "date": "20260825",
        "rocDate": "115/08/25",
        "turnoverYi": 7242.58,
        "taiexClose": 45169.46,
        "taiexChange": 407.14
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260825",
        "index": null,
        "turnoverYi": 1727.63,
        "quoteCount": 10495,
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
        "date": "20260825",
        "contractMonth": "202609",
        "close": 45027,
        "change": 287,
        "volume": 55218,
        "openInterest": 102718,
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
