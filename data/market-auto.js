/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-17T01:40:35.295Z",
  "tradeDate": "20260814",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20260814",
        "financingAmountYi": {
          "prevBalance": 5497.81,
          "balance": 5470.59,
          "change": -27.22,
          "raw": [
            "融資金額(仟元)",
            "32,821,706",
            "35,124,696",
            "418,346",
            "549,780,654",
            "547,059,318"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 8969839,
          "balance": 8918284,
          "change": -51555,
          "raw": [
            "融資(交易單位)",
            "366,478",
            "405,240",
            "12,793",
            "8,969,839",
            "8,918,284"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 214046,
          "balance": 222827,
          "change": 8781,
          "raw": [
            "融券(交易單位)",
            "17,159",
            "28,567",
            "2,627",
            "214,046",
            "222,827"
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
        "date": "20260814",
        "unit": "億元",
        "foreign": 453.51,
        "investmentTrust": 79.73,
        "dealer": -16.61,
        "dealerSelf": -27.36,
        "dealerHedge": 10.75,
        "total": 516.63,
        "checksum": 516.63,
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
        "date": "20260814",
        "rocDate": "115/08/14",
        "turnoverYi": 11097.47,
        "taiexClose": 45811.01,
        "taiexChange": -210.47
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20260814",
        "index": null,
        "turnoverYi": 2445.17,
        "quoteCount": 10489,
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
        "date": "20260814",
        "contractMonth": "202608",
        "close": 45841,
        "change": -184,
        "volume": 57509,
        "openInterest": 84339,
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
