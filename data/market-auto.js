/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-10-14T15:43:00.004Z",
  "tradeDate": "20261014",
  "marketOpen": true,
  "okCount": 4,
  "totalCount": 5,
  "items": {
    "marginTwse": {
      "ok": true,
      "source": "TWSE MI_MARGN",
      "value": {
        "date": "20261014",
        "financingAmountYi": {
          "prevBalance": 6449.79,
          "balance": 6515.67,
          "change": 65.88,
          "raw": [
            "融資金額(仟元)",
            "33,505,950",
            "26,585,425",
            "331,760",
            "644,978,625",
            "651,567,390"
          ]
        },
        "shortSellingAmountYi": null,
        "financingUnits": {
          "prevBalance": 9430480,
          "balance": 9467251,
          "change": 36771,
          "raw": [
            "融資(交易單位)",
            "388,752",
            "343,226",
            "8,755",
            "9,430,480",
            "9,467,251"
          ]
        },
        "shortSellingUnits": {
          "prevBalance": 225459,
          "balance": 228653,
          "change": 3194,
          "raw": [
            "融券(交易單位)",
            "20,792",
            "25,360",
            "1,374",
            "225,459",
            "228,653"
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
        "date": "20261014",
        "unit": "億元",
        "foreign": -200.37,
        "investmentTrust": 160.27,
        "dealer": -114.71,
        "dealerSelf": -25.1,
        "dealerHedge": -89.61,
        "total": -154.81,
        "checksum": -154.81,
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
        "date": "20261014",
        "requestedDate": "20261014",
        "matchedRequest": true,
        "rocDate": "115/10/14",
        "turnoverYi": 9781.37,
        "taiexClose": 48625.83,
        "taiexChange": 284.52
      }
    },
    "otcTpex": {
      "ok": true,
      "source": "TPEx OpenAPI",
      "value": {
        "date": "20261014",
        "index": {
          "close": 420.13,
          "source": "TWSE MIS getStockInfo（otc_o00.tw）",
          "field": "z",
          "misDate": "20261014",
          "open": 415.03,
          "high": 421.67,
          "low": 415.03,
          "prevClose": 414.31,
          "name": "櫃買指數"
        },
        "indexCross": {
          "taiexFromMis": 48625.83,
          "field": "z",
          "misDate": "20261014"
        },
        "turnoverYi": 2333.7,
        "quoteCount": 12466
      }
    },
    "txfTaifex": {
      "ok": false,
      "source": "TAIFEX futDataDown",
      "error": "表頭找不到收盤價，實際表頭：<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">"
    }
  }
};
