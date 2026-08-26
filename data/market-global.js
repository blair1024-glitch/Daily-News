/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-08-26T11:30:23.048Z",
  "okCount": 16,
  "totalCount": 17,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11588.04,
        "prevClose": 11423.1699,
        "change": 164.8701,
        "changePct": 1.44,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": false,
        "latest": {
          "date": "2026-08-25",
          "close": 11588.04,
          "prevDate": "2026-08-24",
          "prevClose": 11423.1699,
          "change": 164.8701,
          "changePct": 1.44
        },
        "settled": {
          "date": "2026-08-25",
          "close": 11588.04,
          "prevDate": "2026-08-24",
          "prevClose": 11423.1699,
          "change": 164.8701,
          "changePct": 1.44
        },
        "quotePrice": 11588.038,
        "series": [
          {
            "date": "2026-08-18",
            "close": 11992.46
          },
          {
            "date": "2026-08-19",
            "close": 11738.2305
          },
          {
            "date": "2026-08-20",
            "close": 11800.0195
          },
          {
            "date": "2026-08-21",
            "close": 11740.3701
          },
          {
            "date": "2026-08-24",
            "close": 11423.1699
          },
          {
            "date": "2026-08-25",
            "close": 11588.04
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "vix": {
      "ok": true,
      "label": "VIX",
      "symbol": "%5EVIX",
      "value": {
        "close": 15.45,
        "prevClose": 15.85,
        "change": -0.4,
        "changePct": -2.52,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": true,
        "latest": {
          "date": "2026-08-26",
          "close": 15.62,
          "prevDate": "2026-08-25",
          "prevClose": 15.45,
          "change": 0.17,
          "changePct": 1.1
        },
        "settled": {
          "date": "2026-08-25",
          "close": 15.45,
          "prevDate": "2026-08-24",
          "prevClose": 15.85,
          "change": -0.4,
          "changePct": -2.52
        },
        "quotePrice": 15.62,
        "series": [
          {
            "date": "2026-08-19",
            "close": 14.89
          },
          {
            "date": "2026-08-20",
            "close": 16.01
          },
          {
            "date": "2026-08-21",
            "close": 15.13
          },
          {
            "date": "2026-08-24",
            "close": 15.85
          },
          {
            "date": "2026-08-25",
            "close": 15.45
          },
          {
            "date": "2026-08-26",
            "close": 15.62
          }
        ],
        "currency": "USD",
        "timezone": "America/Chicago",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "spx": {
      "ok": true,
      "label": "S&P 500",
      "symbol": "%5EGSPC",
      "value": {
        "close": 7677.2798,
        "prevClose": 7652.8599,
        "change": 24.4199,
        "changePct": 0.32,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": false,
        "latest": {
          "date": "2026-08-25",
          "close": 7677.2798,
          "prevDate": "2026-08-24",
          "prevClose": 7652.8599,
          "change": 24.4199,
          "changePct": 0.32
        },
        "settled": {
          "date": "2026-08-25",
          "close": 7677.2798,
          "prevDate": "2026-08-24",
          "prevClose": 7652.8599,
          "change": 24.4199,
          "changePct": 0.32
        },
        "quotePrice": 7677.28,
        "series": [
          {
            "date": "2026-08-18",
            "close": 7691.7598
          },
          {
            "date": "2026-08-19",
            "close": 7707.98
          },
          {
            "date": "2026-08-20",
            "close": 7641.1602
          },
          {
            "date": "2026-08-21",
            "close": 7674.3701
          },
          {
            "date": "2026-08-24",
            "close": 7652.8599
          },
          {
            "date": "2026-08-25",
            "close": 7677.2798
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "ndx": {
      "ok": true,
      "label": "Nasdaq 綜合",
      "symbol": "%5EIXIC",
      "value": {
        "close": 26151.3008,
        "prevClose": 25980.1895,
        "change": 171.1113,
        "changePct": 0.66,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": false,
        "latest": {
          "date": "2026-08-25",
          "close": 26151.3008,
          "prevDate": "2026-08-24",
          "prevClose": 25980.1895,
          "change": 171.1113,
          "changePct": 0.66
        },
        "settled": {
          "date": "2026-08-25",
          "close": 26151.3008,
          "prevDate": "2026-08-24",
          "prevClose": 25980.1895,
          "change": 171.1113,
          "changePct": 0.66
        },
        "quotePrice": 26151.299,
        "series": [
          {
            "date": "2026-08-18",
            "close": 26289.7109
          },
          {
            "date": "2026-08-19",
            "close": 26331.0898
          },
          {
            "date": "2026-08-20",
            "close": 26067.1699
          },
          {
            "date": "2026-08-21",
            "close": 26180.4609
          },
          {
            "date": "2026-08-24",
            "close": 25980.1895
          },
          {
            "date": "2026-08-25",
            "close": 26151.3008
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "dji": {
      "ok": true,
      "label": "Dow Jones",
      "symbol": "%5EDJI",
      "value": {
        "close": 53577.3984,
        "prevClose": 53417.1602,
        "change": 160.2382,
        "changePct": 0.3,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": false,
        "latest": {
          "date": "2026-08-25",
          "close": 53577.3984,
          "prevDate": "2026-08-24",
          "prevClose": 53417.1602,
          "change": 160.2382,
          "changePct": 0.3
        },
        "settled": {
          "date": "2026-08-25",
          "close": 53577.3984,
          "prevDate": "2026-08-24",
          "prevClose": 53417.1602,
          "change": 160.2382,
          "changePct": 0.3
        },
        "quotePrice": 53577.4,
        "series": [
          {
            "date": "2026-08-18",
            "close": 53343.3984
          },
          {
            "date": "2026-08-19",
            "close": 53463.0508
          },
          {
            "date": "2026-08-20",
            "close": 52759.2109
          },
          {
            "date": "2026-08-21",
            "close": 53277.0117
          },
          {
            "date": "2026-08-24",
            "close": 53417.1602
          },
          {
            "date": "2026-08-25",
            "close": 53577.3984
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "us10y": {
      "ok": true,
      "label": "US 10Y 殖利率",
      "symbol": "%5ETNX",
      "value": {
        "close": 4.639,
        "prevClose": 4.704,
        "change": -0.065,
        "changePct": -1.38,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": false,
        "latest": {
          "date": "2026-08-25",
          "close": 4.639,
          "prevDate": "2026-08-24",
          "prevClose": 4.704,
          "change": -0.065,
          "changePct": -1.38
        },
        "settled": {
          "date": "2026-08-25",
          "close": 4.639,
          "prevDate": "2026-08-24",
          "prevClose": 4.704,
          "change": -0.065,
          "changePct": -1.38
        },
        "quotePrice": 4.639,
        "series": [
          {
            "date": "2026-08-18",
            "close": 4.706
          },
          {
            "date": "2026-08-19",
            "close": 4.653
          },
          {
            "date": "2026-08-20",
            "close": 4.696
          },
          {
            "date": "2026-08-21",
            "close": 4.738
          },
          {
            "date": "2026-08-24",
            "close": 4.704
          },
          {
            "date": "2026-08-25",
            "close": 4.639
          }
        ],
        "currency": "USD",
        "timezone": "America/Chicago",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "us30y": {
      "ok": true,
      "label": "US 30Y 殖利率",
      "symbol": "%5ETYX",
      "value": {
        "close": 5.174,
        "prevClose": 5.231,
        "change": -0.057,
        "changePct": -1.09,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": false,
        "latest": {
          "date": "2026-08-25",
          "close": 5.174,
          "prevDate": "2026-08-24",
          "prevClose": 5.231,
          "change": -0.057,
          "changePct": -1.09
        },
        "settled": {
          "date": "2026-08-25",
          "close": 5.174,
          "prevDate": "2026-08-24",
          "prevClose": 5.231,
          "change": -0.057,
          "changePct": -1.09
        },
        "quotePrice": 5.174,
        "series": [
          {
            "date": "2026-08-18",
            "close": 5.285
          },
          {
            "date": "2026-08-19",
            "close": 5.194
          },
          {
            "date": "2026-08-20",
            "close": 5.237
          },
          {
            "date": "2026-08-21",
            "close": 5.276
          },
          {
            "date": "2026-08-24",
            "close": 5.231
          },
          {
            "date": "2026-08-25",
            "close": 5.174
          }
        ],
        "currency": "USD",
        "timezone": "America/Chicago",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "us5y": {
      "ok": true,
      "label": "US 5Y 殖利率",
      "symbol": "%5EFVX",
      "value": {
        "close": 4.351,
        "prevClose": 4.408,
        "change": -0.057,
        "changePct": -1.29,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": false,
        "latest": {
          "date": "2026-08-25",
          "close": 4.351,
          "prevDate": "2026-08-24",
          "prevClose": 4.408,
          "change": -0.057,
          "changePct": -1.29
        },
        "settled": {
          "date": "2026-08-25",
          "close": 4.351,
          "prevDate": "2026-08-24",
          "prevClose": 4.408,
          "change": -0.057,
          "changePct": -1.29
        },
        "quotePrice": 4.351,
        "series": [
          {
            "date": "2026-08-18",
            "close": 4.367
          },
          {
            "date": "2026-08-19",
            "close": 4.353
          },
          {
            "date": "2026-08-20",
            "close": 4.387
          },
          {
            "date": "2026-08-21",
            "close": 4.424
          },
          {
            "date": "2026-08-24",
            "close": 4.408
          },
          {
            "date": "2026-08-25",
            "close": 4.351
          }
        ],
        "currency": "USD",
        "timezone": "America/Chicago",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "dxy": {
      "ok": true,
      "label": "DXY 美元指數",
      "symbol": "DX-Y.NYB",
      "value": {
        "close": 98.92,
        "prevClose": 99,
        "change": -0.08,
        "changePct": -0.08,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": true,
        "latest": {
          "date": "2026-08-26",
          "close": 99.022,
          "prevDate": "2026-08-25",
          "prevClose": 98.92,
          "change": 0.102,
          "changePct": 0.1
        },
        "settled": {
          "date": "2026-08-25",
          "close": 98.92,
          "prevDate": "2026-08-24",
          "prevClose": 99,
          "change": -0.08,
          "changePct": -0.08
        },
        "quotePrice": 99.022,
        "series": [
          {
            "date": "2026-08-19",
            "close": 98.83
          },
          {
            "date": "2026-08-20",
            "close": 98.9
          },
          {
            "date": "2026-08-21",
            "close": 98.8
          },
          {
            "date": "2026-08-24",
            "close": 99
          },
          {
            "date": "2026-08-25",
            "close": 98.92
          },
          {
            "date": "2026-08-26",
            "close": 99.022
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "wti": {
      "ok": true,
      "label": "WTI 原油",
      "symbol": "CL%3DF",
      "value": {
        "close": 82.36,
        "prevClose": 85.01,
        "change": -2.65,
        "changePct": -3.12,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": true,
        "latest": {
          "date": "2026-08-26",
          "close": 80.12,
          "prevDate": "2026-08-25",
          "prevClose": 82.36,
          "change": -2.24,
          "changePct": -2.72
        },
        "settled": {
          "date": "2026-08-25",
          "close": 82.36,
          "prevDate": "2026-08-24",
          "prevClose": 85.01,
          "change": -2.65,
          "changePct": -3.12
        },
        "quotePrice": 80.12,
        "series": [
          {
            "date": "2026-08-19",
            "close": 85.83
          },
          {
            "date": "2026-08-20",
            "close": 87.83
          },
          {
            "date": "2026-08-21",
            "close": 87.06
          },
          {
            "date": "2026-08-24",
            "close": 85.01
          },
          {
            "date": "2026-08-25",
            "close": 82.36
          },
          {
            "date": "2026-08-26",
            "close": 80.12
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "brent": {
      "ok": true,
      "label": "Brent 原油",
      "symbol": "BZ%3DF",
      "value": {
        "close": 88.58,
        "prevClose": 92.17,
        "change": -3.59,
        "changePct": -3.89,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": true,
        "latest": {
          "date": "2026-08-26",
          "close": 85,
          "prevDate": "2026-08-25",
          "prevClose": 88.58,
          "change": -3.58,
          "changePct": -4.04
        },
        "settled": {
          "date": "2026-08-25",
          "close": 88.58,
          "prevDate": "2026-08-24",
          "prevClose": 92.17,
          "change": -3.59,
          "changePct": -3.89
        },
        "quotePrice": 85,
        "series": [
          {
            "date": "2026-08-19",
            "close": 91.62
          },
          {
            "date": "2026-08-20",
            "close": 93.78
          },
          {
            "date": "2026-08-21",
            "close": 94.39
          },
          {
            "date": "2026-08-24",
            "close": 92.17
          },
          {
            "date": "2026-08-25",
            "close": 88.58
          },
          {
            "date": "2026-08-26",
            "close": 85
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "gold": {
      "ok": true,
      "label": "黃金",
      "symbol": "GC%3DF",
      "value": {
        "close": 4638.1001,
        "prevClose": 4640.7998,
        "change": -2.6997,
        "changePct": -0.06,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": true,
        "latest": {
          "date": "2026-08-26",
          "close": 4678.2002,
          "prevDate": "2026-08-25",
          "prevClose": 4638.1001,
          "change": 40.1001,
          "changePct": 0.86
        },
        "settled": {
          "date": "2026-08-25",
          "close": 4638.1001,
          "prevDate": "2026-08-24",
          "prevClose": 4640.7998,
          "change": -2.6997,
          "changePct": -0.06
        },
        "quotePrice": 4678.2,
        "series": [
          {
            "date": "2026-08-19",
            "close": 4489.3999
          },
          {
            "date": "2026-08-20",
            "close": 4516.2998
          },
          {
            "date": "2026-08-21",
            "close": 4624.1001
          },
          {
            "date": "2026-08-24",
            "close": 4640.7998
          },
          {
            "date": "2026-08-25",
            "close": 4638.1001
          },
          {
            "date": "2026-08-26",
            "close": 4678.2002
          }
        ],
        "currency": "USD",
        "timezone": "America/New_York",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "usdjpy": {
      "ok": true,
      "label": "USD/JPY",
      "symbol": "JPY%3DX",
      "value": {
        "close": 159.139,
        "prevClose": 158.904,
        "change": 0.235,
        "changePct": 0.15,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": true,
        "latest": {
          "date": "2026-08-26",
          "close": 159.156,
          "prevDate": "2026-08-25",
          "prevClose": 159.139,
          "change": 0.017,
          "changePct": 0.01
        },
        "settled": {
          "date": "2026-08-25",
          "close": 159.139,
          "prevDate": "2026-08-24",
          "prevClose": 158.904,
          "change": 0.235,
          "changePct": 0.15
        },
        "quotePrice": 159.156,
        "series": [
          {
            "date": "2026-08-19",
            "close": 159.55
          },
          {
            "date": "2026-08-20",
            "close": 158.276
          },
          {
            "date": "2026-08-21",
            "close": 158.883
          },
          {
            "date": "2026-08-24",
            "close": 158.904
          },
          {
            "date": "2026-08-25",
            "close": 159.139
          },
          {
            "date": "2026-08-26",
            "close": 159.156
          }
        ],
        "currency": "JPY",
        "timezone": "Europe/London",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "usdcny": {
      "ok": true,
      "label": "USD/CNY",
      "symbol": "CNY%3DX",
      "value": {
        "close": 6.7219,
        "prevClose": 6.721,
        "change": 0.0009,
        "changePct": 0.01,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": true,
        "latest": {
          "date": "2026-08-26",
          "close": 6.7086,
          "prevDate": "2026-08-25",
          "prevClose": 6.7219,
          "change": -0.0133,
          "changePct": -0.2
        },
        "settled": {
          "date": "2026-08-25",
          "close": 6.7219,
          "prevDate": "2026-08-24",
          "prevClose": 6.721,
          "change": 0.0009,
          "changePct": 0.01
        },
        "quotePrice": 6.7086,
        "series": [
          {
            "date": "2026-08-19",
            "close": 6.7426
          },
          {
            "date": "2026-08-20",
            "close": 6.7295
          },
          {
            "date": "2026-08-21",
            "close": 6.7225
          },
          {
            "date": "2026-08-24",
            "close": 6.721
          },
          {
            "date": "2026-08-25",
            "close": 6.7219
          },
          {
            "date": "2026-08-26",
            "close": 6.7086
          }
        ],
        "currency": "CNY",
        "timezone": "Europe/London",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "usdtwd": {
      "ok": true,
      "label": "USD/TWD",
      "symbol": "TWD%3DX",
      "value": {
        "close": 31.812,
        "prevClose": 31.822,
        "change": -0.01,
        "changePct": -0.03,
        "asOf": "2026-08-25",
        "prevAsOf": "2026-08-24",
        "live": true,
        "latest": {
          "date": "2026-08-26",
          "close": 31.807,
          "prevDate": "2026-08-25",
          "prevClose": 31.812,
          "change": -0.005,
          "changePct": -0.02
        },
        "settled": {
          "date": "2026-08-25",
          "close": 31.812,
          "prevDate": "2026-08-24",
          "prevClose": 31.822,
          "change": -0.01,
          "changePct": -0.03
        },
        "quotePrice": 31.807,
        "series": [
          {
            "date": "2026-08-19",
            "close": 31.8819
          },
          {
            "date": "2026-08-20",
            "close": 31.8151
          },
          {
            "date": "2026-08-21",
            "close": 31.8383
          },
          {
            "date": "2026-08-24",
            "close": 31.822
          },
          {
            "date": "2026-08-25",
            "close": 31.812
          },
          {
            "date": "2026-08-26",
            "close": 31.807
          }
        ],
        "currency": "TWD",
        "timezone": "Europe/London",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "otcTwo": {
      "ok": false,
      "label": "櫃買指數 OTC",
      "error": "yahoo(%5ETWOII) → 報價過期：asOf 2024-10-12 距今 683 天（上限 10 天），該來源可能已停止更新此代號"
    },
    "taiex": {
      "ok": true,
      "label": "TAIEX（交叉驗證）",
      "symbol": "%5ETWII",
      "value": {
        "close": 45832.6211,
        "prevClose": 45169.4609,
        "change": 663.1602,
        "changePct": 1.47,
        "asOf": "2026-08-26",
        "prevAsOf": "2026-08-25",
        "live": false,
        "latest": {
          "date": "2026-08-26",
          "close": 45832.6211,
          "prevDate": "2026-08-25",
          "prevClose": 45169.4609,
          "change": 663.1602,
          "changePct": 1.47
        },
        "settled": {
          "date": "2026-08-26",
          "close": 45832.6211,
          "prevDate": "2026-08-25",
          "prevClose": 45169.4609,
          "change": 663.1602,
          "changePct": 1.47
        },
        "quotePrice": 45832.62,
        "series": [
          {
            "date": "2026-08-19",
            "close": 44719.3516
          },
          {
            "date": "2026-08-20",
            "close": 44933.7383
          },
          {
            "date": "2026-08-21",
            "close": 45224.2891
          },
          {
            "date": "2026-08-24",
            "close": 44762.3203
          },
          {
            "date": "2026-08-25",
            "close": 45169.4609
          },
          {
            "date": "2026-08-26",
            "close": 45832.6211
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
