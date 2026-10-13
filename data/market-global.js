/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-13T17:58:05.675Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12236.79,
        "prevClose": 12572.4199,
        "change": -335.6299,
        "changePct": -2.67,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 12070.6865,
          "prevDate": "2026-10-12",
          "prevClose": 12236.79,
          "change": -166.1035,
          "changePct": -1.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 12236.79,
          "prevDate": "2026-10-09",
          "prevClose": 12572.4199,
          "change": -335.6299,
          "changePct": -2.67,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 12070.687,
        "series": [
          {
            "date": "2026-10-06",
            "close": 13217.8203
          },
          {
            "date": "2026-10-07",
            "close": 13066.1504
          },
          {
            "date": "2026-10-08",
            "close": 12623.71
          },
          {
            "date": "2026-10-09",
            "close": 12572.4199
          },
          {
            "date": "2026-10-12",
            "close": 12236.79
          },
          {
            "date": "2026-10-13",
            "close": 12070.6865
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
        "close": 15.21,
        "prevClose": 14.84,
        "change": 0.37,
        "changePct": 2.49,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 15.46,
          "prevDate": "2026-10-12",
          "prevClose": 15.21,
          "change": 0.25,
          "changePct": 1.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 15.21,
          "prevDate": "2026-10-09",
          "prevClose": 14.84,
          "change": 0.37,
          "changePct": 2.49,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 15.46,
        "series": [
          {
            "date": "2026-10-06",
            "close": 15.01
          },
          {
            "date": "2026-10-07",
            "close": 15.08
          },
          {
            "date": "2026-10-08",
            "close": 15.41
          },
          {
            "date": "2026-10-09",
            "close": 14.84
          },
          {
            "date": "2026-10-12",
            "close": 15.21
          },
          {
            "date": "2026-10-13",
            "close": 15.46
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
        "close": 7807.2402,
        "prevClose": 7811.54,
        "change": -4.2998,
        "changePct": -0.06,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 7795.5498,
          "prevDate": "2026-10-12",
          "prevClose": 7807.2402,
          "change": -11.6904,
          "changePct": -0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 7807.2402,
          "prevDate": "2026-10-09",
          "prevClose": 7811.54,
          "change": -4.2998,
          "changePct": -0.06,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7795.55,
        "series": [
          {
            "date": "2026-10-06",
            "close": 7818.9302
          },
          {
            "date": "2026-10-07",
            "close": 7801.77
          },
          {
            "date": "2026-10-08",
            "close": 7765.3599
          },
          {
            "date": "2026-10-09",
            "close": 7811.54
          },
          {
            "date": "2026-10-12",
            "close": 7807.2402
          },
          {
            "date": "2026-10-13",
            "close": 7795.5498
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
        "close": 27245.9004,
        "prevClose": 27366.1699,
        "change": -120.2695,
        "changePct": -0.44,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 27170.2891,
          "prevDate": "2026-10-12",
          "prevClose": 27245.9004,
          "change": -75.6113,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 27245.9004,
          "prevDate": "2026-10-09",
          "prevClose": 27366.1699,
          "change": -120.2695,
          "changePct": -0.44,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 27170.29,
        "series": [
          {
            "date": "2026-10-06",
            "close": 27599.7891
          },
          {
            "date": "2026-10-07",
            "close": 27538.6895
          },
          {
            "date": "2026-10-08",
            "close": 27193.3398
          },
          {
            "date": "2026-10-09",
            "close": 27366.1699
          },
          {
            "date": "2026-10-12",
            "close": 27245.9004
          },
          {
            "date": "2026-10-13",
            "close": 27170.2891
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
        "close": 51850.5508,
        "prevClose": 51654.9492,
        "change": 195.6016,
        "changePct": 0.38,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 51602.9492,
          "prevDate": "2026-10-12",
          "prevClose": 51850.5508,
          "change": -247.6016,
          "changePct": -0.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 51850.5508,
          "prevDate": "2026-10-09",
          "prevClose": 51654.9492,
          "change": 195.6016,
          "changePct": 0.38,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 51602.95,
        "series": [
          {
            "date": "2026-10-06",
            "close": 51521.2813
          },
          {
            "date": "2026-10-07",
            "close": 51179.8711
          },
          {
            "date": "2026-10-08",
            "close": 51231.6406
          },
          {
            "date": "2026-10-09",
            "close": 51654.9492
          },
          {
            "date": "2026-10-12",
            "close": 51850.5508
          },
          {
            "date": "2026-10-13",
            "close": 51602.9492
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
        "close": 5.24,
        "prevClose": 5.244,
        "change": -0.004,
        "changePct": -0.08,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 5.219,
          "prevDate": "2026-10-12",
          "prevClose": 5.24,
          "change": -0.021,
          "changePct": -0.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 5.24,
          "prevDate": "2026-10-09",
          "prevClose": 5.244,
          "change": -0.004,
          "changePct": -0.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.219,
        "series": [
          {
            "date": "2026-10-06",
            "close": 5.269
          },
          {
            "date": "2026-10-07",
            "close": 5.277
          },
          {
            "date": "2026-10-08",
            "close": 5.231
          },
          {
            "date": "2026-10-09",
            "close": 5.244
          },
          {
            "date": "2026-10-12",
            "close": 5.24
          },
          {
            "date": "2026-10-13",
            "close": 5.219
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
        "close": 5.598,
        "prevClose": 5.6,
        "change": -0.002,
        "changePct": -0.04,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 5.564,
          "prevDate": "2026-10-12",
          "prevClose": 5.598,
          "change": -0.034,
          "changePct": -0.61,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 5.598,
          "prevDate": "2026-10-09",
          "prevClose": 5.6,
          "change": -0.002,
          "changePct": -0.04,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.564,
        "series": [
          {
            "date": "2026-10-06",
            "close": 5.641
          },
          {
            "date": "2026-10-07",
            "close": 5.661
          },
          {
            "date": "2026-10-08",
            "close": 5.606
          },
          {
            "date": "2026-10-09",
            "close": 5.6
          },
          {
            "date": "2026-10-12",
            "close": 5.598
          },
          {
            "date": "2026-10-13",
            "close": 5.564
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
        "close": 5.019,
        "prevClose": 5.021,
        "change": -0.002,
        "changePct": -0.04,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 5.014,
          "prevDate": "2026-10-12",
          "prevClose": 5.019,
          "change": -0.005,
          "changePct": -0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 5.019,
          "prevDate": "2026-10-09",
          "prevClose": 5.021,
          "change": -0.002,
          "changePct": -0.04,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.014,
        "series": [
          {
            "date": "2026-10-06",
            "close": 5.028
          },
          {
            "date": "2026-10-07",
            "close": 5.021
          },
          {
            "date": "2026-10-08",
            "close": 4.991
          },
          {
            "date": "2026-10-09",
            "close": 5.021
          },
          {
            "date": "2026-10-12",
            "close": 5.019
          },
          {
            "date": "2026-10-13",
            "close": 5.014
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
        "close": 102.58,
        "prevClose": 102.21,
        "change": 0.37,
        "changePct": 0.36,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 102.244,
          "prevDate": "2026-10-12",
          "prevClose": 102.58,
          "change": -0.336,
          "changePct": -0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 102.58,
          "prevDate": "2026-10-09",
          "prevClose": 102.21,
          "change": 0.37,
          "changePct": 0.36,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 102.244,
        "series": [
          {
            "date": "2026-10-06",
            "close": 101.83
          },
          {
            "date": "2026-10-07",
            "close": 102.24
          },
          {
            "date": "2026-10-08",
            "close": 102.14
          },
          {
            "date": "2026-10-09",
            "close": 102.21
          },
          {
            "date": "2026-10-12",
            "close": 102.58
          },
          {
            "date": "2026-10-13",
            "close": 102.244
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
        "close": 93.74,
        "prevClose": 91.85,
        "change": 1.89,
        "changePct": 2.06,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 94.12,
          "prevDate": "2026-10-12",
          "prevClose": 93.74,
          "change": 0.38,
          "changePct": 0.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 93.74,
          "prevDate": "2026-10-09",
          "prevClose": 91.85,
          "change": 1.89,
          "changePct": 2.06,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 94.12,
        "series": [
          {
            "date": "2026-10-06",
            "close": 89.44
          },
          {
            "date": "2026-10-07",
            "close": 88.28
          },
          {
            "date": "2026-10-08",
            "close": 91.49
          },
          {
            "date": "2026-10-09",
            "close": 91.85
          },
          {
            "date": "2026-10-12",
            "close": 93.74
          },
          {
            "date": "2026-10-13",
            "close": 94.12
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
        "close": 106.65,
        "prevClose": 104.72,
        "change": 1.93,
        "changePct": 1.84,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 105.75,
          "prevDate": "2026-10-12",
          "prevClose": 106.65,
          "change": -0.9,
          "changePct": -0.84,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 106.65,
          "prevDate": "2026-10-09",
          "prevClose": 104.72,
          "change": 1.93,
          "changePct": 1.84,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 105.75,
        "series": [
          {
            "date": "2026-10-06",
            "close": 100.58
          },
          {
            "date": "2026-10-07",
            "close": 100.2
          },
          {
            "date": "2026-10-08",
            "close": 104.28
          },
          {
            "date": "2026-10-09",
            "close": 104.72
          },
          {
            "date": "2026-10-12",
            "close": 106.65
          },
          {
            "date": "2026-10-13",
            "close": 105.75
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
        "close": 4190.6001,
        "prevClose": 4216.2998,
        "change": -25.6997,
        "changePct": -0.61,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-09",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 4176.7002,
          "prevDate": "2026-10-12",
          "prevClose": 4190.6001,
          "change": -13.8999,
          "changePct": -0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-12",
          "close": 4190.6001,
          "prevDate": "2026-10-09",
          "prevClose": 4216.2998,
          "change": -25.6997,
          "changePct": -0.61,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4176.7,
        "series": [
          {
            "date": "2026-10-06",
            "close": 4187.1001
          },
          {
            "date": "2026-10-07",
            "close": 4140.7002
          },
          {
            "date": "2026-10-08",
            "close": 4157
          },
          {
            "date": "2026-10-09",
            "close": 4216.2998
          },
          {
            "date": "2026-10-12",
            "close": 4190.6001
          },
          {
            "date": "2026-10-13",
            "close": 4176.7002
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
        "close": 158.063,
        "prevClose": 158.06,
        "change": 0.003,
        "changePct": 0,
        "asOf": "2026-10-09",
        "prevAsOf": "2026-10-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 158.361,
          "prevDate": "2026-10-09",
          "prevClose": 158.063,
          "change": 0.298,
          "changePct": 0.19,
          "gapDays": 4,
          "gapSuspect": true
        },
        "settled": {
          "date": "2026-10-09",
          "close": 158.063,
          "prevDate": "2026-10-08",
          "prevClose": 158.06,
          "change": 0.003,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.361,
        "series": [
          {
            "date": "2026-10-05",
            "close": 157.734
          },
          {
            "date": "2026-10-06",
            "close": 157.963
          },
          {
            "date": "2026-10-07",
            "close": 158.296
          },
          {
            "date": "2026-10-08",
            "close": 158.06
          },
          {
            "date": "2026-10-09",
            "close": 158.063
          },
          {
            "date": "2026-10-13",
            "close": 158.361
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
        "close": 6.7021,
        "prevClose": 6.7045,
        "change": -0.0024,
        "changePct": -0.04,
        "asOf": "2026-10-09",
        "prevAsOf": "2026-10-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 6.6808,
          "prevDate": "2026-10-09",
          "prevClose": 6.7021,
          "change": -0.0213,
          "changePct": -0.32,
          "gapDays": 4,
          "gapSuspect": true
        },
        "settled": {
          "date": "2026-10-09",
          "close": 6.7021,
          "prevDate": "2026-10-08",
          "prevClose": 6.7045,
          "change": -0.0024,
          "changePct": -0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6808,
        "series": [
          {
            "date": "2026-10-05",
            "close": 6.7045
          },
          {
            "date": "2026-10-06",
            "close": 6.7045
          },
          {
            "date": "2026-10-07",
            "close": 6.7045
          },
          {
            "date": "2026-10-08",
            "close": 6.7045
          },
          {
            "date": "2026-10-09",
            "close": 6.7021
          },
          {
            "date": "2026-10-13",
            "close": 6.6808
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
        "close": 31.9254,
        "prevClose": 31.8483,
        "change": 0.0771,
        "changePct": 0.24,
        "asOf": "2026-10-09",
        "prevAsOf": "2026-10-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-13",
          "close": 32.176,
          "prevDate": "2026-10-09",
          "prevClose": 31.9254,
          "change": 0.2506,
          "changePct": 0.78,
          "gapDays": 4,
          "gapSuspect": true
        },
        "settled": {
          "date": "2026-10-09",
          "close": 31.9254,
          "prevDate": "2026-10-08",
          "prevClose": 31.8483,
          "change": 0.0771,
          "changePct": 0.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.176,
        "series": [
          {
            "date": "2026-10-05",
            "close": 31.8344
          },
          {
            "date": "2026-10-06",
            "close": 31.7514
          },
          {
            "date": "2026-10-07",
            "close": 31.7769
          },
          {
            "date": "2026-10-08",
            "close": 31.8483
          },
          {
            "date": "2026-10-09",
            "close": 31.9254
          },
          {
            "date": "2026-10-13",
            "close": 32.176
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
        "close": 49301.9609,
        "prevClose": 49313.4414,
        "change": -11.4805,
        "changePct": -0.02,
        "asOf": "2026-10-12",
        "prevAsOf": "2026-10-08",
        "gapDays": 4,
        "gapSuspect": true,
        "live": false,
        "latest": {
          "date": "2026-10-12",
          "close": 49301.9609,
          "prevDate": "2026-10-08",
          "prevClose": 49313.4414,
          "change": -11.4805,
          "changePct": -0.02,
          "gapDays": 4,
          "gapSuspect": true
        },
        "settled": {
          "date": "2026-10-12",
          "close": 49301.9609,
          "prevDate": "2026-10-08",
          "prevClose": 49313.4414,
          "change": -11.4805,
          "changePct": -0.02,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 48341.31,
        "series": [
          {
            "date": "2026-10-02",
            "close": 48475.7383
          },
          {
            "date": "2026-10-05",
            "close": 49712.0391
          },
          {
            "date": "2026-10-06",
            "close": 49822.5508
          },
          {
            "date": "2026-10-07",
            "close": 49806.3711
          },
          {
            "date": "2026-10-08",
            "close": 49313.4414
          },
          {
            "date": "2026-10-12",
            "close": 49301.9609
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
