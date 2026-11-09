/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-09T21:18:28.482Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 10033.9326,
        "prevClose": 9390.25,
        "change": 643.6826,
        "changePct": 6.85,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-09",
          "close": 10033.9326,
          "prevDate": "2026-11-06",
          "prevClose": 9390.25,
          "change": 643.6826,
          "changePct": 6.85,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 10033.9326,
          "prevDate": "2026-11-06",
          "prevClose": 9390.25,
          "change": 643.6826,
          "changePct": 6.85,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 10033.933,
        "series": [
          {
            "date": "2026-11-02",
            "close": 10328.3301
          },
          {
            "date": "2026-11-03",
            "close": 10600.4004
          },
          {
            "date": "2026-11-04",
            "close": 10268.6504
          },
          {
            "date": "2026-11-05",
            "close": 9011.1396
          },
          {
            "date": "2026-11-06",
            "close": 9390.25
          },
          {
            "date": "2026-11-09",
            "close": 10033.9326
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
        "close": 20.09,
        "prevClose": 25.64,
        "change": -5.55,
        "changePct": -21.65,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-09",
          "close": 20.09,
          "prevDate": "2026-11-06",
          "prevClose": 25.64,
          "change": -5.55,
          "changePct": -21.65,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 20.09,
          "prevDate": "2026-11-06",
          "prevClose": 25.64,
          "change": -5.55,
          "changePct": -21.65,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 20.09,
        "series": [
          {
            "date": "2026-11-02",
            "close": 21.15
          },
          {
            "date": "2026-11-03",
            "close": 20.83
          },
          {
            "date": "2026-11-04",
            "close": 16.61
          },
          {
            "date": "2026-11-05",
            "close": 28.18
          },
          {
            "date": "2026-11-06",
            "close": 25.64
          },
          {
            "date": "2026-11-09",
            "close": 20.09
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
        "close": 7549.9399,
        "prevClose": 7376.8599,
        "change": 173.08,
        "changePct": 2.35,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-09",
          "close": 7549.9399,
          "prevDate": "2026-11-06",
          "prevClose": 7376.8599,
          "change": 173.08,
          "changePct": 2.35,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 7549.9399,
          "prevDate": "2026-11-06",
          "prevClose": 7376.8599,
          "change": 173.08,
          "changePct": 2.35,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7549.94,
        "series": [
          {
            "date": "2026-11-02",
            "close": 7541.3999
          },
          {
            "date": "2026-11-03",
            "close": 7568.9199
          },
          {
            "date": "2026-11-04",
            "close": 7688.6201
          },
          {
            "date": "2026-11-05",
            "close": 7353.73
          },
          {
            "date": "2026-11-06",
            "close": 7376.8599
          },
          {
            "date": "2026-11-09",
            "close": 7549.9399
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
        "close": 25253.1387,
        "prevClose": 24579.4297,
        "change": 673.709,
        "changePct": 2.74,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-09",
          "close": 25253.1387,
          "prevDate": "2026-11-06",
          "prevClose": 24579.4297,
          "change": 673.709,
          "changePct": 2.74,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 25253.1387,
          "prevDate": "2026-11-06",
          "prevClose": 24579.4297,
          "change": 673.709,
          "changePct": 2.74,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 25253.139,
        "series": [
          {
            "date": "2026-11-02",
            "close": 25164.3105
          },
          {
            "date": "2026-11-03",
            "close": 25372.0098
          },
          {
            "date": "2026-11-04",
            "close": 25736.5098
          },
          {
            "date": "2026-11-05",
            "close": 24315
          },
          {
            "date": "2026-11-06",
            "close": 24579.4297
          },
          {
            "date": "2026-11-09",
            "close": 25253.1387
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
        "close": 52389.75,
        "prevClose": 51285.7305,
        "change": 1104.0195,
        "changePct": 2.15,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-09",
          "close": 52389.75,
          "prevDate": "2026-11-06",
          "prevClose": 51285.7305,
          "change": 1104.0195,
          "changePct": 2.15,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 52389.75,
          "prevDate": "2026-11-06",
          "prevClose": 51285.7305,
          "change": 1104.0195,
          "changePct": 2.15,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 52389.75,
        "series": [
          {
            "date": "2026-11-02",
            "close": 51983.9805
          },
          {
            "date": "2026-11-03",
            "close": 51786.7188
          },
          {
            "date": "2026-11-04",
            "close": 53356.1211
          },
          {
            "date": "2026-11-05",
            "close": 51523.0586
          },
          {
            "date": "2026-11-06",
            "close": 51285.7305
          },
          {
            "date": "2026-11-09",
            "close": 52389.75
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
        "close": 4.864,
        "prevClose": 4.859,
        "change": 0.005,
        "changePct": 0.1,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-09",
          "close": 4.864,
          "prevDate": "2026-11-06",
          "prevClose": 4.859,
          "change": 0.005,
          "changePct": 0.1,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 4.864,
          "prevDate": "2026-11-06",
          "prevClose": 4.859,
          "change": 0.005,
          "changePct": 0.1,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.864,
        "series": [
          {
            "date": "2026-11-02",
            "close": 4.894
          },
          {
            "date": "2026-11-03",
            "close": 4.952
          },
          {
            "date": "2026-11-04",
            "close": 4.894
          },
          {
            "date": "2026-11-05",
            "close": 4.837
          },
          {
            "date": "2026-11-06",
            "close": 4.859
          },
          {
            "date": "2026-11-09",
            "close": 4.864
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
        "close": 5.256,
        "prevClose": 5.26,
        "change": -0.004,
        "changePct": -0.08,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-09",
          "close": 5.256,
          "prevDate": "2026-11-06",
          "prevClose": 5.26,
          "change": -0.004,
          "changePct": -0.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 5.256,
          "prevDate": "2026-11-06",
          "prevClose": 5.26,
          "change": -0.004,
          "changePct": -0.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.256,
        "series": [
          {
            "date": "2026-11-02",
            "close": 5.269
          },
          {
            "date": "2026-11-03",
            "close": 5.324
          },
          {
            "date": "2026-11-04",
            "close": 5.282
          },
          {
            "date": "2026-11-05",
            "close": 5.251
          },
          {
            "date": "2026-11-06",
            "close": 5.26
          },
          {
            "date": "2026-11-09",
            "close": 5.256
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
        "close": 4.659,
        "prevClose": 4.648,
        "change": 0.011,
        "changePct": 0.24,
        "asOf": "2026-11-09",
        "prevAsOf": "2026-11-06",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-09",
          "close": 4.659,
          "prevDate": "2026-11-06",
          "prevClose": 4.648,
          "change": 0.011,
          "changePct": 0.24,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-09",
          "close": 4.659,
          "prevDate": "2026-11-06",
          "prevClose": 4.648,
          "change": 0.011,
          "changePct": 0.24,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.659,
        "series": [
          {
            "date": "2026-11-02",
            "close": 4.693
          },
          {
            "date": "2026-11-03",
            "close": 4.743
          },
          {
            "date": "2026-11-04",
            "close": 4.689
          },
          {
            "date": "2026-11-05",
            "close": 4.608
          },
          {
            "date": "2026-11-06",
            "close": 4.648
          },
          {
            "date": "2026-11-09",
            "close": 4.659
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
        "close": 102.3,
        "prevClose": 101.55,
        "change": 0.75,
        "changePct": 0.74,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-09",
          "close": 101.676,
          "prevDate": "2026-11-06",
          "prevClose": 102.3,
          "change": -0.624,
          "changePct": -0.61,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 102.3,
          "prevDate": "2026-11-05",
          "prevClose": 101.55,
          "change": 0.75,
          "changePct": 0.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.676,
        "series": [
          {
            "date": "2026-11-02",
            "close": 101.75
          },
          {
            "date": "2026-11-03",
            "close": 101.87
          },
          {
            "date": "2026-11-04",
            "close": 101.51
          },
          {
            "date": "2026-11-05",
            "close": 101.55
          },
          {
            "date": "2026-11-06",
            "close": 102.3
          },
          {
            "date": "2026-11-09",
            "close": 101.676
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
        "close": 90.83,
        "prevClose": 90.52,
        "change": 0.31,
        "changePct": 0.34,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-09",
          "close": 86.94,
          "prevDate": "2026-11-06",
          "prevClose": 90.83,
          "change": -3.89,
          "changePct": -4.28,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 90.83,
          "prevDate": "2026-11-05",
          "prevClose": 90.52,
          "change": 0.31,
          "changePct": 0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 86.94,
        "series": [
          {
            "date": "2026-11-02",
            "close": 96.46
          },
          {
            "date": "2026-11-03",
            "close": 96.09
          },
          {
            "date": "2026-11-04",
            "close": 88.12
          },
          {
            "date": "2026-11-05",
            "close": 90.52
          },
          {
            "date": "2026-11-06",
            "close": 90.83
          },
          {
            "date": "2026-11-09",
            "close": 86.94
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
        "close": 98.32,
        "prevClose": 98.29,
        "change": 0.03,
        "changePct": 0.03,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-09",
          "close": 92.76,
          "prevDate": "2026-11-06",
          "prevClose": 98.32,
          "change": -5.56,
          "changePct": -5.66,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 98.32,
          "prevDate": "2026-11-05",
          "prevClose": 98.29,
          "change": 0.03,
          "changePct": 0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 92.76,
        "series": [
          {
            "date": "2026-11-02",
            "close": 104.77
          },
          {
            "date": "2026-11-03",
            "close": 103.6
          },
          {
            "date": "2026-11-04",
            "close": 94.62
          },
          {
            "date": "2026-11-05",
            "close": 98.29
          },
          {
            "date": "2026-11-06",
            "close": 98.32
          },
          {
            "date": "2026-11-09",
            "close": 92.76
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
        "close": 4074.8999,
        "prevClose": 4113.5,
        "change": -38.6001,
        "changePct": -0.94,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-09",
          "close": 4148.5,
          "prevDate": "2026-11-06",
          "prevClose": 4074.8999,
          "change": 73.6001,
          "changePct": 1.81,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 4074.8999,
          "prevDate": "2026-11-05",
          "prevClose": 4113.5,
          "change": -38.6001,
          "changePct": -0.94,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4148.5,
        "series": [
          {
            "date": "2026-11-02",
            "close": 3969.6001
          },
          {
            "date": "2026-11-03",
            "close": 3940.3999
          },
          {
            "date": "2026-11-04",
            "close": 4073
          },
          {
            "date": "2026-11-05",
            "close": 4113.5
          },
          {
            "date": "2026-11-06",
            "close": 4074.8999
          },
          {
            "date": "2026-11-09",
            "close": 4148.5
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
        "close": 157.498,
        "prevClose": 158.357,
        "change": -0.859,
        "changePct": -0.54,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-09",
          "close": 157.902,
          "prevDate": "2026-11-06",
          "prevClose": 157.498,
          "change": 0.404,
          "changePct": 0.26,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 157.498,
          "prevDate": "2026-11-05",
          "prevClose": 158.357,
          "change": -0.859,
          "changePct": -0.54,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.902,
        "series": [
          {
            "date": "2026-11-02",
            "close": 157.677
          },
          {
            "date": "2026-11-03",
            "close": 157.915
          },
          {
            "date": "2026-11-04",
            "close": 158.469
          },
          {
            "date": "2026-11-05",
            "close": 158.357
          },
          {
            "date": "2026-11-06",
            "close": 157.498
          },
          {
            "date": "2026-11-09",
            "close": 157.902
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
        "close": 6.688,
        "prevClose": 6.6731,
        "change": 0.0149,
        "changePct": 0.22,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-09",
          "close": 6.6727,
          "prevDate": "2026-11-06",
          "prevClose": 6.688,
          "change": -0.0153,
          "changePct": -0.23,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 6.688,
          "prevDate": "2026-11-05",
          "prevClose": 6.6731,
          "change": 0.0149,
          "changePct": 0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6727,
        "series": [
          {
            "date": "2026-11-02",
            "close": 6.661
          },
          {
            "date": "2026-11-03",
            "close": 6.648
          },
          {
            "date": "2026-11-04",
            "close": 6.6701
          },
          {
            "date": "2026-11-05",
            "close": 6.6731
          },
          {
            "date": "2026-11-06",
            "close": 6.688
          },
          {
            "date": "2026-11-09",
            "close": 6.6727
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
        "close": 33.1093,
        "prevClose": 32.8212,
        "change": 0.2881,
        "changePct": 0.88,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-09",
          "close": 32.766,
          "prevDate": "2026-11-06",
          "prevClose": 33.1093,
          "change": -0.3433,
          "changePct": -1.04,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 33.1093,
          "prevDate": "2026-11-05",
          "prevClose": 32.8212,
          "change": 0.2881,
          "changePct": 0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.766,
        "series": [
          {
            "date": "2026-11-02",
            "close": 32.6064
          },
          {
            "date": "2026-11-03",
            "close": 32.5851
          },
          {
            "date": "2026-11-04",
            "close": 32.733
          },
          {
            "date": "2026-11-05",
            "close": 32.8212
          },
          {
            "date": "2026-11-06",
            "close": 33.1093
          },
          {
            "date": "2026-11-09",
            "close": 32.766
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
        "close": 39701.6406,
        "prevClose": 41574.7188,
        "change": -1873.0782,
        "changePct": -4.51,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-06",
          "close": 39701.6406,
          "prevDate": "2026-11-05",
          "prevClose": 41574.7188,
          "change": -1873.0782,
          "changePct": -4.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 39701.6406,
          "prevDate": "2026-11-05",
          "prevClose": 41574.7188,
          "change": -1873.0782,
          "changePct": -4.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 41661.7,
        "series": [
          {
            "date": "2026-10-30",
            "close": 45211.8281
          },
          {
            "date": "2026-11-02",
            "close": 44920.1406
          },
          {
            "date": "2026-11-03",
            "close": 43307.5391
          },
          {
            "date": "2026-11-04",
            "close": 42948.9102
          },
          {
            "date": "2026-11-05",
            "close": 41574.7188
          },
          {
            "date": "2026-11-06",
            "close": 39701.6406
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
