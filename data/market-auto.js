/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-24T06:17:17.082Z",
  "tradeDate": "20260821",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260821",
        "financingAmountYi": {
          "prevBalance": 5484.08,
          "balance": 5469.39,
          "change": -14.69,
          "raw": [
            "融資金額(仟元)",
            "21,094,922",
            "21,887,525",
            "675,808",
            "548,407,734",
            "546,939,322"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8810093,
          "balance": 8847629,
          "change": 37536,
          "raw": [
            "融資(交易單位)",
            "269,663",
            "222,379",
            "9,748",
            "8,810,093",
            "8,847,629"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 197390,
          "balance": 199998,
          "change": 2608,
          "raw": [
            "融券(交易單位)",
            "16,823",
            "20,944",
            "1,513",
            "197,390",
            "199,998"
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
        "date": "20260821",
        "unit": "億元",
        "foreign": 283.05,
        "investmentTrust": 21.01,
        "dealer": 29.23,
        "dealerSelf": 29.1,
        "dealerHedge": 0.13,
        "total": 333.29,
        "checksum": 333.29,
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
        "date": "20260821",
        "rocDate": "115/08/21",
        "turnoverYi": 7549.05,
        "taiexClose": 45224.29,
        "taiexChange": 290.55
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260821",
        "index": null,
        "turnoverYi": 2024.42,
        "quoteCount": 10584,
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
        "date": "20260821",
        "contractMonth": "202609",
        "close": 45148,
        "change": 245,
        "volume": 51446,
        "openInterest": 102342,
        "session": "一般",
        "rowCount": 25,
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
