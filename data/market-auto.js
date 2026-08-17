/**
 * market-auto.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-tw-market.mjs
 *
 * 這個檔案是給每日 dashboard 更新流程讀的中繼資料，不會被 index.html 載入。
 * ok:false 代表該欄位當天抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_AUTO = {
  "fetchedAt": "2026-08-17T01:31:32.053Z",
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
        "financing": {
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
        "shortSelling": {
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
        "unit": "原始單位依 TWSE 公布（多為仟元或股數）"
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
        "endpoint": "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_daily_close_quotes",
        "sampleKeys": [
          "Date",
          "SecuritiesCompanyCode",
          "CompanyName",
          "Close",
          "Change",
          "Open",
          "High",
          "Low",
          "Average",
          "TradingShares",
          "TransactionAmount",
          "TransactionNumber",
          "LatestBidPrice",
          "LatesAskPrice",
          "Capitals",
          "NextReferencePrice",
          "NextLimitUp",
          "NextLimitDown"
        ],
        "rows": 10489,
        "sample": {
          "Date": "1150814",
          "SecuritiesCompanyCode": "006201",
          "CompanyName": "元大富櫃50",
          "Close": "44.95",
          "Change": "-0.72 ",
          "Open": "46.07",
          "High": "46.07",
          "Low": "44.85",
          "Average": "45.51",
          "TradingShares": "380019",
          "TransactionAmount": "17295836",
          "TransactionNumber": "428",
          "LatestBidPrice": "44.95",
          "LatesAskPrice": "45.06",
          "Capitals": "23446000",
          "NextReferencePrice": "44.95",
          "NextLimitUp": "49.44",
          "NextLimitDown": "40.46"
        }
      }
    },
    "txfTaifex": {
      "ok": true,
      "source": "TAIFEX futDataDown",
      "value": {
        "date": "20260814",
        "contractMonth": null,
        "close": null,
        "change": null,
        "openInterest": null,
        "header": [
          "������",
          "����",
          "������(�g�O)",
          "�}�L��",
          "�̰���",
          "�̧C��",
          "���L��",
          "���^��",
          "���^%",
          "����q",
          "�����",
          "���R�P������",
          "�̫�̨ζR��",
          "�̫�̨ν��",
          "���v�̰���",
          "���v�̧C��",
          "�O�_�]�T�����Ȱ����",
          "����ɬq",
          "���t��榡�e�U����q"
        ],
        "rowCount": 22
      }
    }
  }
};
