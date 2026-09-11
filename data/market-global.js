/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-11T14:51:43.618Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11614.1699,
        "prevClose": 11931.3203,
        "change": -317.1504,
        "changePct": -2.66,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 11812.4404,
          "prevDate": "2026-09-10",
          "prevClose": 11614.1699,
          "change": 198.2705,
          "changePct": 1.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 11614.1699,
          "prevDate": "2026-09-09",
          "prevClose": 11931.3203,
          "change": -317.1504,
          "changePct": -2.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11812.44,
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
            "close": 11812.4404
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
        "close": 17.84,
        "prevClose": 16.46,
        "change": 1.38,
        "changePct": 8.38,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 15.99,
          "prevDate": "2026-09-10",
          "prevClose": 17.84,
          "change": -1.85,
          "changePct": -10.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 17.84,
          "prevDate": "2026-09-09",
          "prevClose": 16.46,
          "change": 1.38,
          "changePct": 8.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.99,
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
            "close": 15.99
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
        "close": 7591.7002,
        "prevClose": 7636.3599,
        "change": -44.6597,
        "changePct": -0.58,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 7658.21,
          "prevDate": "2026-09-10",
          "prevClose": 7591.7002,
          "change": 66.5098,
          "changePct": 0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 7591.7002,
          "prevDate": "2026-09-09",
          "prevClose": 7636.3599,
          "change": -44.6597,
          "changePct": -0.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7658.21,
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
            "close": 7658.21
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
        "close": 26081.7207,
        "prevClose": 26253.3398,
        "change": -171.6191,
        "changePct": -0.65,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 26343.4375,
          "prevDate": "2026-09-10",
          "prevClose": 26081.7207,
          "change": 261.7168,
          "changePct": 1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 26081.7207,
          "prevDate": "2026-09-09",
          "prevClose": 26253.3398,
          "change": -171.6191,
          "changePct": -0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26343.438,
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
            "close": 26343.4375
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
        "close": 52064.1016,
        "prevClose": 52380.6602,
        "change": -316.5586,
        "changePct": -0.6,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 52485.9805,
          "prevDate": "2026-09-10",
          "prevClose": 52064.1016,
          "change": 421.8789,
          "changePct": 0.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 52064.1016,
          "prevDate": "2026-09-09",
          "prevClose": 52380.6602,
          "change": -316.5586,
          "changePct": -0.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52485.98,
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
            "close": 52485.9805
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
        "close": 4.944,
        "prevClose": 4.837,
        "change": 0.107,
        "changePct": 2.21,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 4.934,
          "prevDate": "2026-09-10",
          "prevClose": 4.944,
          "change": -0.01,
          "changePct": -0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 4.944,
          "prevDate": "2026-09-09",
          "prevClose": 4.837,
          "change": 0.107,
          "changePct": 2.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.934,
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
            "close": 4.934
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
        "close": 5.361,
        "prevClose": 5.286,
        "change": 0.075,
        "changePct": 1.42,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 5.326,
          "prevDate": "2026-09-10",
          "prevClose": 5.361,
          "change": -0.035,
          "changePct": -0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 5.361,
          "prevDate": "2026-09-09",
          "prevClose": 5.286,
          "change": 0.075,
          "changePct": 1.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.326,
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
            "close": 5.326
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
        "close": 4.733,
        "prevClose": 4.614,
        "change": 0.119,
        "changePct": 2.58,
        "asOf": "2026-09-10",
        "prevAsOf": "2026-09-09",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-11",
          "close": 4.746,
          "prevDate": "2026-09-10",
          "prevClose": 4.733,
          "change": 0.013,
          "changePct": 0.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-10",
          "close": 4.733,
          "prevDate": "2026-09-09",
          "prevClose": 4.614,
          "change": 0.119,
          "changePct": 2.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.746,
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
            "close": 4.746
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
          "close": 99.053,
          "prevDate": "2026-09-10",
          "prevClose": 99.09,
          "change": -0.037,
          "changePct": -0.04,
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
        "quotePrice": 99.053,
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
            "close": 99.053
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
          "close": 99.64,
          "prevDate": "2026-09-10",
          "prevClose": 102.48,
          "change": -2.84,
          "changePct": -2.77,
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
        "quotePrice": 99.64,
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
            "close": 99.64
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
          "close": 105.04,
          "prevDate": "2026-09-10",
          "prevClose": 107.63,
          "change": -2.59,
          "changePct": -2.41,
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
        "quotePrice": 105.04,
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
            "close": 105.04
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
          "close": 4411,
          "prevDate": "2026-09-10",
          "prevClose": 4364.5,
          "change": 46.5,
          "changePct": 1.07,
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
        "quotePrice": 4411,
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
            "close": 4411
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
          "close": 153.484,
          "prevDate": "2026-09-10",
          "prevClose": 153.573,
          "change": -0.089,
          "changePct": -0.06,
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
        "quotePrice": 153.484,
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
            "close": 153.484
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
          "close": 6.7075,
          "prevDate": "2026-09-10",
          "prevClose": 6.7105,
          "change": -0.003,
          "changePct": -0.04,
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
        "quotePrice": 6.7075,
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
            "close": 6.7075
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
          "close": 31.594,
          "prevDate": "2026-09-10",
          "prevClose": 31.464,
          "change": 0.13,
          "changePct": 0.41,
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
        "quotePrice": 31.594,
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
            "close": 31.594
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
        "close": 46184.8516,
        "prevClose": 46940.4883,
        "change": -755.6367,
        "changePct": -1.61,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-11",
          "close": 46184.8516,
          "prevDate": "2026-09-10",
          "prevClose": 46940.4883,
          "change": -755.6367,
          "changePct": -1.61,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 46184.8516,
          "prevDate": "2026-09-10",
          "prevClose": 46940.4883,
          "change": -755.6367,
          "changePct": -1.61,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46184.85,
        "series": [
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
          },
          {
            "date": "2026-09-11",
            "close": 46184.8516
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
