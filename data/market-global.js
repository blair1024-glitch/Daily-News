/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-12T00:55:56.956Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11823.998,
        "prevClose": 11614.1699,
        "change": 209.8281,
        "changePct": 1.81,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-11",
          "close": 11823.998,
          "prevDate": "2026-09-10",
          "prevClose": 11614.1699,
          "change": 209.8281,
          "changePct": 1.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 11823.998,
          "prevDate": "2026-09-10",
          "prevClose": 11614.1699,
          "change": 209.8281,
          "changePct": 1.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11823.998,
        "series": [
          {
            "date": "2026-09-03",
            "close": 11352.1299
          },
          {
            "date": "2026-09-04",
            "close": 11735.2598
          },
          {
            "date": "2026-09-08",
            "close": 11887.8701
          },
          {
            "date": "2026-09-09",
            "close": 11931.3203
          },
          {
            "date": "2026-09-10",
            "close": 11614.1699
          },
          {
            "date": "2026-09-11",
            "close": 11823.998
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
        "close": 15.84,
        "prevClose": 17.84,
        "change": -2,
        "changePct": -11.21,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-11",
          "close": 15.84,
          "prevDate": "2026-09-10",
          "prevClose": 17.84,
          "change": -2,
          "changePct": -11.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 15.84,
          "prevDate": "2026-09-10",
          "prevClose": 17.84,
          "change": -2,
          "changePct": -11.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.84,
        "series": [
          {
            "date": "2026-09-04",
            "close": 14.53
          },
          {
            "date": "2026-09-07",
            "close": 15.3
          },
          {
            "date": "2026-09-08",
            "close": 15.72
          },
          {
            "date": "2026-09-09",
            "close": 16.46
          },
          {
            "date": "2026-09-10",
            "close": 17.84
          },
          {
            "date": "2026-09-11",
            "close": 15.84
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
        "close": 7656.98,
        "prevClose": 7591.7002,
        "change": 65.2798,
        "changePct": 0.86,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-11",
          "close": 7656.98,
          "prevDate": "2026-09-10",
          "prevClose": 7591.7002,
          "change": 65.2798,
          "changePct": 0.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 7656.98,
          "prevDate": "2026-09-10",
          "prevClose": 7591.7002,
          "change": 65.2798,
          "changePct": 0.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7656.98,
        "series": [
          {
            "date": "2026-09-03",
            "close": 7747.71
          },
          {
            "date": "2026-09-04",
            "close": 7718.6001
          },
          {
            "date": "2026-09-08",
            "close": 7673.52
          },
          {
            "date": "2026-09-09",
            "close": 7636.3599
          },
          {
            "date": "2026-09-10",
            "close": 7591.7002
          },
          {
            "date": "2026-09-11",
            "close": 7656.98
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
        "close": 26333.0352,
        "prevClose": 26081.7207,
        "change": 251.3145,
        "changePct": 0.96,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-11",
          "close": 26333.0352,
          "prevDate": "2026-09-10",
          "prevClose": 26081.7207,
          "change": 251.3145,
          "changePct": 0.96,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 26333.0352,
          "prevDate": "2026-09-10",
          "prevClose": 26081.7207,
          "change": 251.3145,
          "changePct": 0.96,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26333.035,
        "series": [
          {
            "date": "2026-09-03",
            "close": 26584.0605
          },
          {
            "date": "2026-09-04",
            "close": 26506.9902
          },
          {
            "date": "2026-09-08",
            "close": 26421.4102
          },
          {
            "date": "2026-09-09",
            "close": 26253.3398
          },
          {
            "date": "2026-09-10",
            "close": 26081.7207
          },
          {
            "date": "2026-09-11",
            "close": 26333.0352
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
        "close": 52573.2891,
        "prevClose": 52064.1016,
        "change": 509.1875,
        "changePct": 0.98,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-11",
          "close": 52573.2891,
          "prevDate": "2026-09-10",
          "prevClose": 52064.1016,
          "change": 509.1875,
          "changePct": 0.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 52573.2891,
          "prevDate": "2026-09-10",
          "prevClose": 52064.1016,
          "change": 509.1875,
          "changePct": 0.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52573.29,
        "series": [
          {
            "date": "2026-09-03",
            "close": 53686.1094
          },
          {
            "date": "2026-09-04",
            "close": 53414.25
          },
          {
            "date": "2026-09-08",
            "close": 52786.0703
          },
          {
            "date": "2026-09-09",
            "close": 52380.6602
          },
          {
            "date": "2026-09-10",
            "close": 52064.1016
          },
          {
            "date": "2026-09-11",
            "close": 52573.2891
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
        "close": 4.975,
        "prevClose": 4.944,
        "change": 0.031,
        "changePct": 0.63,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-11",
          "close": 4.975,
          "prevDate": "2026-09-10",
          "prevClose": 4.944,
          "change": 0.031,
          "changePct": 0.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 4.975,
          "prevDate": "2026-09-10",
          "prevClose": 4.944,
          "change": 0.031,
          "changePct": 0.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.975,
        "series": [
          {
            "date": "2026-09-03",
            "close": 4.762
          },
          {
            "date": "2026-09-04",
            "close": 4.784
          },
          {
            "date": "2026-09-08",
            "close": 4.806
          },
          {
            "date": "2026-09-09",
            "close": 4.837
          },
          {
            "date": "2026-09-10",
            "close": 4.944
          },
          {
            "date": "2026-09-11",
            "close": 4.975
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
        "close": 5.354,
        "prevClose": 5.361,
        "change": -0.007,
        "changePct": -0.13,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-11",
          "close": 5.354,
          "prevDate": "2026-09-10",
          "prevClose": 5.361,
          "change": -0.007,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 5.354,
          "prevDate": "2026-09-10",
          "prevClose": 5.361,
          "change": -0.007,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.354,
        "series": [
          {
            "date": "2026-09-03",
            "close": 5.243
          },
          {
            "date": "2026-09-04",
            "close": 5.246
          },
          {
            "date": "2026-09-08",
            "close": 5.264
          },
          {
            "date": "2026-09-09",
            "close": 5.286
          },
          {
            "date": "2026-09-10",
            "close": 5.361
          },
          {
            "date": "2026-09-11",
            "close": 5.354
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
        "close": 4.791,
        "prevClose": 4.733,
        "change": 0.058,
        "changePct": 1.23,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-11",
          "close": 4.791,
          "prevDate": "2026-09-10",
          "prevClose": 4.733,
          "change": 0.058,
          "changePct": 1.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 4.791,
          "prevDate": "2026-09-10",
          "prevClose": 4.733,
          "change": 0.058,
          "changePct": 1.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.791,
        "series": [
          {
            "date": "2026-09-03",
            "close": 4.509
          },
          {
            "date": "2026-09-04",
            "close": 4.55
          },
          {
            "date": "2026-09-08",
            "close": 4.573
          },
          {
            "date": "2026-09-09",
            "close": 4.614
          },
          {
            "date": "2026-09-10",
            "close": 4.733
          },
          {
            "date": "2026-09-11",
            "close": 4.791
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
        "close": 99.09,
        "prevClose": 98.77,
        "change": 0.32,
        "changePct": 0.32,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 99.095,
          "prevDate": "2026-09-10",
          "prevClose": 99.09,
          "change": 0.005,
          "changePct": 0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 99.09,
          "prevDate": "2026-09-09",
          "prevClose": 98.77,
          "change": 0.32,
          "changePct": 0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.095,
        "series": [
          {
            "date": "2026-09-03",
            "close": 99
          },
          {
            "date": "2026-09-04",
            "close": 99.16
          },
          {
            "date": "2026-09-08",
            "close": 98.84
          },
          {
            "date": "2026-09-09",
            "close": 98.77
          },
          {
            "date": "2026-09-10",
            "close": 99.09
          },
          {
            "date": "2026-09-11",
            "close": 99.095
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
        "close": 102.48,
        "prevClose": 96.05,
        "change": 6.43,
        "changePct": 6.69,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 99.99,
          "prevDate": "2026-09-10",
          "prevClose": 102.48,
          "change": -2.49,
          "changePct": -2.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 102.48,
          "prevDate": "2026-09-09",
          "prevClose": 96.05,
          "change": 6.43,
          "changePct": 6.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.99,
        "series": [
          {
            "date": "2026-09-03",
            "close": 91.3
          },
          {
            "date": "2026-09-04",
            "close": 91.48
          },
          {
            "date": "2026-09-08",
            "close": 93.03
          },
          {
            "date": "2026-09-09",
            "close": 96.05
          },
          {
            "date": "2026-09-10",
            "close": 102.48
          },
          {
            "date": "2026-09-11",
            "close": 99.99
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
        "close": 107.63,
        "prevClose": 101.21,
        "change": 6.42,
        "changePct": 6.34,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 104.42,
          "prevDate": "2026-09-10",
          "prevClose": 107.63,
          "change": -3.21,
          "changePct": -2.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 107.63,
          "prevDate": "2026-09-09",
          "prevClose": 101.21,
          "change": 6.42,
          "changePct": 6.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 104.42,
        "series": [
          {
            "date": "2026-09-03",
            "close": 95.52
          },
          {
            "date": "2026-09-04",
            "close": 96.28
          },
          {
            "date": "2026-09-08",
            "close": 97.92
          },
          {
            "date": "2026-09-09",
            "close": 101.21
          },
          {
            "date": "2026-09-10",
            "close": 107.63
          },
          {
            "date": "2026-09-11",
            "close": 104.42
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
        "close": 4364.5,
        "prevClose": 4416,
        "change": -51.5,
        "changePct": -1.17,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 4390,
          "prevDate": "2026-09-10",
          "prevClose": 4364.5,
          "change": 25.5,
          "changePct": 0.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 4364.5,
          "prevDate": "2026-09-09",
          "prevClose": 4416,
          "change": -51.5,
          "changePct": -1.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4390,
        "series": [
          {
            "date": "2026-09-03",
            "close": 4491.7002
          },
          {
            "date": "2026-09-04",
            "close": 4429.7998
          },
          {
            "date": "2026-09-08",
            "close": 4393.8999
          },
          {
            "date": "2026-09-09",
            "close": 4416
          },
          {
            "date": "2026-09-10",
            "close": 4364.5
          },
          {
            "date": "2026-09-11",
            "close": 4390
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
        "close": 153.573,
        "prevClose": 153.478,
        "change": 0.095,
        "changePct": 0.06,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 153.554,
          "prevDate": "2026-09-10",
          "prevClose": 153.573,
          "change": -0.019,
          "changePct": -0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 153.573,
          "prevDate": "2026-09-09",
          "prevClose": 153.478,
          "change": 0.095,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 153.554,
        "series": [
          {
            "date": "2026-09-04",
            "close": 155.66
          },
          {
            "date": "2026-09-07",
            "close": 156.197
          },
          {
            "date": "2026-09-08",
            "close": 153.855
          },
          {
            "date": "2026-09-09",
            "close": 153.478
          },
          {
            "date": "2026-09-10",
            "close": 153.573
          },
          {
            "date": "2026-09-11",
            "close": 153.554
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
        "close": 6.7105,
        "prevClose": 6.7105,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 6.6974,
          "prevDate": "2026-09-10",
          "prevClose": 6.7105,
          "change": -0.0131,
          "changePct": -0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 6.7105,
          "prevDate": "2026-09-09",
          "prevClose": 6.7105,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6974,
        "series": [
          {
            "date": "2026-09-04",
            "close": 6.719
          },
          {
            "date": "2026-09-07",
            "close": 6.7108
          },
          {
            "date": "2026-09-08",
            "close": 6.7108
          },
          {
            "date": "2026-09-09",
            "close": 6.7105
          },
          {
            "date": "2026-09-10",
            "close": 6.7105
          },
          {
            "date": "2026-09-11",
            "close": 6.6974
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
        "close": 31.464,
        "prevClose": 31.4992,
        "change": -0.0352,
        "changePct": -0.11,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 31.627,
          "prevDate": "2026-09-10",
          "prevClose": 31.464,
          "change": 0.163,
          "changePct": 0.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 31.464,
          "prevDate": "2026-09-09",
          "prevClose": 31.4992,
          "change": -0.0352,
          "changePct": -0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.627,
        "series": [
          {
            "date": "2026-09-04",
            "close": 31.6954
          },
          {
            "date": "2026-09-07",
            "close": 31.621
          },
          {
            "date": "2026-09-08",
            "close": 31.5049
          },
          {
            "date": "2026-09-09",
            "close": 31.4992
          },
          {
            "date": "2026-09-10",
            "close": 31.464
          },
          {
            "date": "2026-09-11",
            "close": 31.627
          }
        ],
        "currency": "TWD",
        "timezone": "Europe/London",
        "source": "Yahoo Finance chart API（日線）"
      }
    },
    "taiex": {
      "ok": true,
      "label": "TAIEX（交叉驗證）",
      "symbol": "%5ETWII",
      "value": {
        "close": 46940.4883,
        "prevClose": 47183.3594,
        "change": -242.8711,
        "changePct": -0.51,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-10",
          "close": 46940.4883,
          "prevDate": "2026-09-09",
          "prevClose": 47183.3594,
          "change": -242.8711,
          "changePct": -0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 46940.4883,
          "prevDate": "2026-09-09",
          "prevClose": 47183.3594,
          "change": -242.8711,
          "changePct": -0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46184.85,
        "series": [
          {
            "date": "2026-09-03",
            "close": 45857.6602
          },
          {
            "date": "2026-09-04",
            "close": 46551.1289
          },
          {
            "date": "2026-09-07",
            "close": 47326.2695
          },
          {
            "date": "2026-09-08",
            "close": 47105.7813
          },
          {
            "date": "2026-09-09",
            "close": 47183.3594
          },
          {
            "date": "2026-09-10",
            "close": 46940.4883
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
