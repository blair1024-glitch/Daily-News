/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-19T23:40:33.175Z",
  "tradeDate": "20261019",
  "marketOpen": true,
  "okCount": 5,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261019",
        "financingAmountYi": {
          "prevBalance": 6455.94,
          "balance": 6406.18,
          "change": -49.76,
          "raw": [
            "融資金額(仟元)",
            "22,841,656",
            "27,109,766",
            "707,506",
            "645,594,048",
            "640,618,432"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9538574,
          "balance": 9592714,
          "change": 54140,
          "raw": [
            "融資(交易單位)",
            "356,018",
            "293,542",
            "8,336",
            "9,538,574",
            "9,592,714"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 233602,
          "balance": 201916,
          "change": -31686,
          "raw": [
            "融券(交易單位)",
            "39,346",
            "24,765",
            "17,105",
            "233,602",
            "201,916"
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
        "date": "20261019",
        "unit": "億元",
        "foreign": -767.43,
        "investmentTrust": 241.42,
        "dealer": -362.63,
        "dealerSelf": -60.23,
        "dealerHedge": -302.4,
        "total": -888.64,
        "checksum": -888.64,
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
        "date": "20261019",
        "requestedDate": "20261019",
        "matchedRequest": true,
        "rocDate": "115/10/19",
        "turnoverYi": 8667.12,
        "taiexClose": 46822.08,
        "taiexChange": -289.18
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261019",
        "index": {
          "close": 394.05,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "y",
          "misDate": "20261020",
          "open": null,
          "high": null,
          "low": null,
          "prevClose": 394.05,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 46822.08,
          "field": "y",
          "misDate": "20261020"
        },
        "turnoverYi": 2236.25,
        "quoteCount": 12779
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20261019",
        "contractMonth": "202610",
        "close": 46779,
        "change": -505,
        "volume": 101828,
        "openInterest": 54834,
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
