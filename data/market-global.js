/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-14T15:43:01.570Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12208.79,
        "prevClose": 12236.79,
        "change": -28,
        "changePct": -0.23,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 11792.0518,
          "prevDate": "2026-10-13",
          "prevClose": 12208.79,
          "change": -416.7382,
          "changePct": -3.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 12208.79,
          "prevDate": "2026-10-12",
          "prevClose": 12236.79,
          "change": -28,
          "changePct": -0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11792.052,
        "series": [
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
            "close": 12208.79
          },
          {
            "date": "2026-10-14",
            "close": 11792.0518
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
        "close": 15.27,
        "prevClose": 15.21,
        "change": 0.06,
        "changePct": 0.39,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 15.86,
          "prevDate": "2026-10-13",
          "prevClose": 15.27,
          "change": 0.59,
          "changePct": 3.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 15.27,
          "prevDate": "2026-10-12",
          "prevClose": 15.21,
          "change": 0.06,
          "changePct": 0.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.86,
        "series": [
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
            "close": 15.27
          },
          {
            "date": "2026-10-14",
            "close": 15.86
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
        "close": 7805.4502,
        "prevClose": 7807.2402,
        "change": -1.79,
        "changePct": -0.02,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 7732.2598,
          "prevDate": "2026-10-13",
          "prevClose": 7805.4502,
          "change": -73.1904,
          "changePct": -0.94,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 7805.4502,
          "prevDate": "2026-10-12",
          "prevClose": 7807.2402,
          "change": -1.79,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7732.26,
        "series": [
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
            "close": 7805.4502
          },
          {
            "date": "2026-10-14",
            "close": 7732.2598
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
        "close": 27204.3809,
        "prevClose": 27245.9004,
        "change": -41.5195,
        "changePct": -0.15,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 26842.248,
          "prevDate": "2026-10-13",
          "prevClose": 27204.3809,
          "change": -362.1329,
          "changePct": -1.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 27204.3809,
          "prevDate": "2026-10-12",
          "prevClose": 27245.9004,
          "change": -41.5195,
          "changePct": -0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26842.248,
        "series": [
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
            "close": 27204.3809
          },
          {
            "date": "2026-10-14",
            "close": 26842.248
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
        "close": 51670.1016,
        "prevClose": 51850.5508,
        "change": -180.4492,
        "changePct": -0.35,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 51603.7891,
          "prevDate": "2026-10-13",
          "prevClose": 51670.1016,
          "change": -66.3125,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 51670.1016,
          "prevDate": "2026-10-12",
          "prevClose": 51850.5508,
          "change": -180.4492,
          "changePct": -0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51603.79,
        "series": [
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
            "close": 51670.1016
          },
          {
            "date": "2026-10-14",
            "close": 51603.7891
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
        "close": 5.217,
        "prevClose": 5.24,
        "change": -0.023,
        "changePct": -0.44,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 5.249,
          "prevDate": "2026-10-13",
          "prevClose": 5.217,
          "change": 0.032,
          "changePct": 0.61,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 5.217,
          "prevDate": "2026-10-12",
          "prevClose": 5.24,
          "change": -0.023,
          "changePct": -0.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.249,
        "series": [
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
            "close": 5.217
          },
          {
            "date": "2026-10-14",
            "close": 5.249
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
        "close": 5.563,
        "prevClose": 5.598,
        "change": -0.035,
        "changePct": -0.63,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 5.572,
          "prevDate": "2026-10-13",
          "prevClose": 5.563,
          "change": 0.009,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 5.563,
          "prevDate": "2026-10-12",
          "prevClose": 5.598,
          "change": -0.035,
          "changePct": -0.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.572,
        "series": [
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
            "close": 5.563
          },
          {
            "date": "2026-10-14",
            "close": 5.572
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
        "close": 5.007,
        "prevClose": 5.019,
        "change": -0.012,
        "changePct": -0.24,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 5.057,
          "prevDate": "2026-10-13",
          "prevClose": 5.007,
          "change": 0.05,
          "changePct": 1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 5.007,
          "prevDate": "2026-10-12",
          "prevClose": 5.019,
          "change": -0.012,
          "changePct": -0.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.057,
        "series": [
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
            "close": 5.007
          },
          {
            "date": "2026-10-14",
            "close": 5.057
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
        "close": 102.18,
        "prevClose": 102.58,
        "change": -0.4,
        "changePct": -0.39,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 102.891,
          "prevDate": "2026-10-13",
          "prevClose": 102.18,
          "change": 0.711,
          "changePct": 0.7,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 102.18,
          "prevDate": "2026-10-12",
          "prevClose": 102.58,
          "change": -0.4,
          "changePct": -0.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.891,
        "series": [
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
            "close": 102.18
          },
          {
            "date": "2026-10-14",
            "close": 102.891
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
        "close": 94.14,
        "prevClose": 93.74,
        "change": 0.4,
        "changePct": 0.43,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 95.01,
          "prevDate": "2026-10-13",
          "prevClose": 94.14,
          "change": 0.87,
          "changePct": 0.92,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 94.14,
          "prevDate": "2026-10-12",
          "prevClose": 93.74,
          "change": 0.4,
          "changePct": 0.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 95.01,
        "series": [
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
            "close": 94.14
          },
          {
            "date": "2026-10-14",
            "close": 95.01
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
        "close": 105.69,
        "prevClose": 106.65,
        "change": -0.96,
        "changePct": -0.9,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 105.71,
          "prevDate": "2026-10-13",
          "prevClose": 105.69,
          "change": 0.02,
          "changePct": 0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 105.69,
          "prevDate": "2026-10-12",
          "prevClose": 106.65,
          "change": -0.96,
          "changePct": -0.9,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 105.71,
        "series": [
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
            "close": 105.69
          },
          {
            "date": "2026-10-14",
            "close": 105.71
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
        "close": 4177.2998,
        "prevClose": 4190.6001,
        "change": -13.3003,
        "changePct": -0.32,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 4111.1001,
          "prevDate": "2026-10-13",
          "prevClose": 4177.2998,
          "change": -66.1997,
          "changePct": -1.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 4177.2998,
          "prevDate": "2026-10-12",
          "prevClose": 4190.6001,
          "change": -13.3003,
          "changePct": -0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4111.1,
        "series": [
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
            "close": 4177.2998
          },
          {
            "date": "2026-10-14",
            "close": 4111.1001
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
        "close": 158.52,
        "prevClose": 158.203,
        "change": 0.317,
        "changePct": 0.2,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 158.804,
          "prevDate": "2026-10-13",
          "prevClose": 158.52,
          "change": 0.284,
          "changePct": 0.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 158.52,
          "prevDate": "2026-10-12",
          "prevClose": 158.203,
          "change": 0.317,
          "changePct": 0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.804,
        "series": [
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
            "date": "2026-10-12",
            "close": 158.203
          },
          {
            "date": "2026-10-13",
            "close": 158.52
          },
          {
            "date": "2026-10-14",
            "close": 158.804
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
        "close": 6.692,
        "prevClose": 6.692,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 6.6867,
          "prevDate": "2026-10-13",
          "prevClose": 6.692,
          "change": -0.0053,
          "changePct": -0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 6.692,
          "prevDate": "2026-10-12",
          "prevClose": 6.692,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6867,
        "series": [
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
            "date": "2026-10-12",
            "close": 6.692
          },
          {
            "date": "2026-10-13",
            "close": 6.692
          },
          {
            "date": "2026-10-14",
            "close": 6.6867
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
        "close": 31.9278,
        "prevClose": 31.9161,
        "change": 0.0117,
        "changePct": 0.04,
        "asOf": "2026-10-13",
        "prevAsOf": "2026-10-12",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-14",
          "close": 32.15,
          "prevDate": "2026-10-13",
          "prevClose": 31.9278,
          "change": 0.2222,
          "changePct": 0.7,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-13",
          "close": 31.9278,
          "prevDate": "2026-10-12",
          "prevClose": 31.9161,
          "change": 0.0117,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.15,
        "series": [
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
            "date": "2026-10-12",
            "close": 31.9161
          },
          {
            "date": "2026-10-13",
            "close": 31.9278
          },
          {
            "date": "2026-10-14",
            "close": 32.15
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
        "close": 48625.8281,
        "prevClose": 48341.3086,
        "change": 284.5195,
        "changePct": 0.59,
        "asOf": "2026-10-14",
        "prevAsOf": "2026-10-13",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-14",
          "close": 48625.8281,
          "prevDate": "2026-10-13",
          "prevClose": 48341.3086,
          "change": 284.5195,
          "changePct": 0.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-14",
          "close": 48625.8281,
          "prevDate": "2026-10-13",
          "prevClose": 48341.3086,
          "change": 284.5195,
          "changePct": 0.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 48625.83,
        "series": [
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
          },
          {
            "date": "2026-10-13",
            "close": 48341.3086
          },
          {
            "date": "2026-10-14",
            "close": 48625.8281
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
