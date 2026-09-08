/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-08T00:55:41.593Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11735.2598,
        "prevClose": 11352.1299,
        "change": 383.1299,
        "changePct": 3.37,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-04",
          "close": 11735.2598,
          "prevDate": "2026-09-03",
          "prevClose": 11352.1299,
          "change": 383.1299,
          "changePct": 3.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 11735.2598,
          "prevDate": "2026-09-03",
          "prevClose": 11352.1299,
          "change": 383.1299,
          "changePct": 3.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11735.263,
        "series": [
          {
            "date": "2026-08-28",
            "close": 11469.6602
          },
          {
            "date": "2026-08-31",
            "close": 11535.0498
          },
          {
            "date": "2026-09-01",
            "close": 11288.6104
          },
          {
            "date": "2026-09-02",
            "close": 11339.25
          },
          {
            "date": "2026-09-03",
            "close": 11352.1299
          },
          {
            "date": "2026-09-04",
            "close": 11735.2598
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
        "close": 15.3,
        "prevClose": 14.53,
        "change": 0.77,
        "changePct": 5.3,
        "asOf": "2026-09-07",
        "prevAsOf": "2026-09-04",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-07",
          "close": 15.3,
          "prevDate": "2026-09-04",
          "prevClose": 14.53,
          "change": 0.77,
          "changePct": 5.3,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-07",
          "close": 15.3,
          "prevDate": "2026-09-04",
          "prevClose": 14.53,
          "change": 0.77,
          "changePct": 5.3,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 15.3,
        "series": [
          {
            "date": "2026-08-31",
            "close": 14.92
          },
          {
            "date": "2026-09-01",
            "close": 16.34
          },
          {
            "date": "2026-09-02",
            "close": 15.2
          },
          {
            "date": "2026-09-03",
            "close": 14.32
          },
          {
            "date": "2026-09-04",
            "close": 14.53
          },
          {
            "date": "2026-09-07",
            "close": 15.3
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
        "close": 7718.6001,
        "prevClose": 7747.71,
        "change": -29.1099,
        "changePct": -0.38,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-04",
          "close": 7718.6001,
          "prevDate": "2026-09-03",
          "prevClose": 7747.71,
          "change": -29.1099,
          "changePct": -0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 7718.6001,
          "prevDate": "2026-09-03",
          "prevClose": 7747.71,
          "change": -29.1099,
          "changePct": -0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7718.6,
        "series": [
          {
            "date": "2026-08-28",
            "close": 7711.7598
          },
          {
            "date": "2026-08-31",
            "close": 7686.1401
          },
          {
            "date": "2026-09-01",
            "close": 7631.4702
          },
          {
            "date": "2026-09-02",
            "close": 7666.6001
          },
          {
            "date": "2026-09-03",
            "close": 7747.71
          },
          {
            "date": "2026-09-04",
            "close": 7718.6001
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
        "close": 26506.9902,
        "prevClose": 26584.0605,
        "change": -77.0703,
        "changePct": -0.29,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-04",
          "close": 26506.9902,
          "prevDate": "2026-09-03",
          "prevClose": 26584.0605,
          "change": -77.0703,
          "changePct": -0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 26506.9902,
          "prevDate": "2026-09-03",
          "prevClose": 26584.0605,
          "change": -77.0703,
          "changePct": -0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26506.99,
        "series": [
          {
            "date": "2026-08-28",
            "close": 26402.4199
          },
          {
            "date": "2026-08-31",
            "close": 26370.8906
          },
          {
            "date": "2026-09-01",
            "close": 26099.7695
          },
          {
            "date": "2026-09-02",
            "close": 26217.8301
          },
          {
            "date": "2026-09-03",
            "close": 26584.0605
          },
          {
            "date": "2026-09-04",
            "close": 26506.9902
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
        "close": 53414.25,
        "prevClose": 53686.1094,
        "change": -271.8594,
        "changePct": -0.51,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-04",
          "close": 53414.25,
          "prevDate": "2026-09-03",
          "prevClose": 53686.1094,
          "change": -271.8594,
          "changePct": -0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 53414.25,
          "prevDate": "2026-09-03",
          "prevClose": 53686.1094,
          "change": -271.8594,
          "changePct": -0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 53414.25,
        "series": [
          {
            "date": "2026-08-28",
            "close": 53559.9883
          },
          {
            "date": "2026-08-31",
            "close": 53185.8984
          },
          {
            "date": "2026-09-01",
            "close": 52766.8789
          },
          {
            "date": "2026-09-02",
            "close": 53061.9492
          },
          {
            "date": "2026-09-03",
            "close": 53686.1094
          },
          {
            "date": "2026-09-04",
            "close": 53414.25
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
        "close": 4.784,
        "prevClose": 4.762,
        "change": 0.022,
        "changePct": 0.46,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-04",
          "close": 4.784,
          "prevDate": "2026-09-03",
          "prevClose": 4.762,
          "change": 0.022,
          "changePct": 0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 4.784,
          "prevDate": "2026-09-03",
          "prevClose": 4.762,
          "change": 0.022,
          "changePct": 0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.784,
        "series": [
          {
            "date": "2026-08-28",
            "close": 4.72
          },
          {
            "date": "2026-08-31",
            "close": 4.758
          },
          {
            "date": "2026-09-01",
            "close": 4.796
          },
          {
            "date": "2026-09-02",
            "close": 4.796
          },
          {
            "date": "2026-09-03",
            "close": 4.762
          },
          {
            "date": "2026-09-04",
            "close": 4.784
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
        "close": 5.246,
        "prevClose": 5.243,
        "change": 0.003,
        "changePct": 0.06,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-04",
          "close": 5.246,
          "prevDate": "2026-09-03",
          "prevClose": 5.243,
          "change": 0.003,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 5.246,
          "prevDate": "2026-09-03",
          "prevClose": 5.243,
          "change": 0.003,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.246,
        "series": [
          {
            "date": "2026-08-28",
            "close": 5.206
          },
          {
            "date": "2026-08-31",
            "close": 5.249
          },
          {
            "date": "2026-09-01",
            "close": 5.268
          },
          {
            "date": "2026-09-02",
            "close": 5.267
          },
          {
            "date": "2026-09-03",
            "close": 5.243
          },
          {
            "date": "2026-09-04",
            "close": 5.246
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
        "close": 4.55,
        "prevClose": 4.509,
        "change": 0.041,
        "changePct": 0.91,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-04",
          "close": 4.55,
          "prevDate": "2026-09-03",
          "prevClose": 4.509,
          "change": 0.041,
          "changePct": 0.91,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 4.55,
          "prevDate": "2026-09-03",
          "prevClose": 4.509,
          "change": 0.041,
          "changePct": 0.91,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.55,
        "series": [
          {
            "date": "2026-08-28",
            "close": 4.481
          },
          {
            "date": "2026-08-31",
            "close": 4.507
          },
          {
            "date": "2026-09-01",
            "close": 4.557
          },
          {
            "date": "2026-09-02",
            "close": 4.552
          },
          {
            "date": "2026-09-03",
            "close": 4.509
          },
          {
            "date": "2026-09-04",
            "close": 4.55
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
        "close": 99.16,
        "prevClose": 99,
        "change": 0.16,
        "changePct": 0.16,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-07",
          "close": 99.176,
          "prevDate": "2026-09-04",
          "prevClose": 99.16,
          "change": 0.016,
          "changePct": 0.02,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 99.16,
          "prevDate": "2026-09-03",
          "prevClose": 99,
          "change": 0.16,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.176,
        "series": [
          {
            "date": "2026-08-31",
            "close": 99.43
          },
          {
            "date": "2026-09-01",
            "close": 99.67
          },
          {
            "date": "2026-09-02",
            "close": 99.56
          },
          {
            "date": "2026-09-03",
            "close": 99
          },
          {
            "date": "2026-09-04",
            "close": 99.16
          },
          {
            "date": "2026-09-07",
            "close": 99.176
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
        "close": 91.48,
        "prevClose": 91.3,
        "change": 0.18,
        "changePct": 0.2,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-07",
          "close": 92.4,
          "prevDate": "2026-09-04",
          "prevClose": 91.48,
          "change": 0.92,
          "changePct": 1.01,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 91.48,
          "prevDate": "2026-09-03",
          "prevClose": 91.3,
          "change": 0.18,
          "changePct": 0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 92.4,
        "series": [
          {
            "date": "2026-08-31",
            "close": 85.76
          },
          {
            "date": "2026-09-01",
            "close": 90.22
          },
          {
            "date": "2026-09-02",
            "close": 91.01
          },
          {
            "date": "2026-09-03",
            "close": 91.3
          },
          {
            "date": "2026-09-04",
            "close": 91.48
          },
          {
            "date": "2026-09-07",
            "close": 92.4
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
        "close": 96.28,
        "prevClose": 95.52,
        "change": 0.76,
        "changePct": 0.8,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-07",
          "close": 97.05,
          "prevDate": "2026-09-04",
          "prevClose": 96.28,
          "change": 0.77,
          "changePct": 0.8,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 96.28,
          "prevDate": "2026-09-03",
          "prevClose": 95.52,
          "change": 0.76,
          "changePct": 0.8,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 97.05,
        "series": [
          {
            "date": "2026-08-31",
            "close": 90.49
          },
          {
            "date": "2026-09-01",
            "close": 94.65
          },
          {
            "date": "2026-09-02",
            "close": 95.63
          },
          {
            "date": "2026-09-03",
            "close": 95.52
          },
          {
            "date": "2026-09-04",
            "close": 96.28
          },
          {
            "date": "2026-09-07",
            "close": 97.05
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
        "close": 4429.7998,
        "prevClose": 4491.7002,
        "change": -61.9004,
        "changePct": -1.38,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-07",
          "close": 4466.6001,
          "prevDate": "2026-09-04",
          "prevClose": 4429.7998,
          "change": 36.8003,
          "changePct": 0.83,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 4429.7998,
          "prevDate": "2026-09-03",
          "prevClose": 4491.7002,
          "change": -61.9004,
          "changePct": -1.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4466.6,
        "series": [
          {
            "date": "2026-08-31",
            "close": 4431.1001
          },
          {
            "date": "2026-09-01",
            "close": 4348
          },
          {
            "date": "2026-09-02",
            "close": 4366.2998
          },
          {
            "date": "2026-09-03",
            "close": 4491.7002
          },
          {
            "date": "2026-09-04",
            "close": 4429.7998
          },
          {
            "date": "2026-09-07",
            "close": 4466.6001
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
        "close": 156.197,
        "prevClose": 155.66,
        "change": 0.537,
        "changePct": 0.34,
        "asOf": "2026-09-07",
        "prevAsOf": "2026-09-04",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-08",
          "close": 153.722,
          "prevDate": "2026-09-07",
          "prevClose": 156.197,
          "change": -2.475,
          "changePct": -1.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-07",
          "close": 156.197,
          "prevDate": "2026-09-04",
          "prevClose": 155.66,
          "change": 0.537,
          "changePct": 0.34,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 153.722,
        "series": [
          {
            "date": "2026-09-01",
            "close": 159.747
          },
          {
            "date": "2026-09-02",
            "close": 160.196
          },
          {
            "date": "2026-09-03",
            "close": 158.923
          },
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
            "close": 153.722
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
        "close": 6.7108,
        "prevClose": 6.719,
        "change": -0.0082,
        "changePct": -0.12,
        "asOf": "2026-09-07",
        "prevAsOf": "2026-09-04",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-08",
          "close": 6.7103,
          "prevDate": "2026-09-07",
          "prevClose": 6.7108,
          "change": -0.0005,
          "changePct": -0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-07",
          "close": 6.7108,
          "prevDate": "2026-09-04",
          "prevClose": 6.719,
          "change": -0.0082,
          "changePct": -0.12,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.7103,
        "series": [
          {
            "date": "2026-09-01",
            "close": 6.726
          },
          {
            "date": "2026-09-02",
            "close": 6.7202
          },
          {
            "date": "2026-09-03",
            "close": 6.719
          },
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
            "close": 6.7103
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
        "close": 31.621,
        "prevClose": 31.6954,
        "change": -0.0744,
        "changePct": -0.23,
        "asOf": "2026-09-07",
        "prevAsOf": "2026-09-04",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-08",
          "close": 31.483,
          "prevDate": "2026-09-07",
          "prevClose": 31.621,
          "change": -0.138,
          "changePct": -0.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-07",
          "close": 31.621,
          "prevDate": "2026-09-04",
          "prevClose": 31.6954,
          "change": -0.0744,
          "changePct": -0.23,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 31.483,
        "series": [
          {
            "date": "2026-09-01",
            "close": 31.688
          },
          {
            "date": "2026-09-02",
            "close": 31.675
          },
          {
            "date": "2026-09-03",
            "close": 31.7262
          },
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
            "close": 31.483
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
        "close": 47326.2695,
        "prevClose": 46551.1289,
        "change": 775.1406,
        "changePct": 1.67,
        "asOf": "2026-09-07",
        "prevAsOf": "2026-09-04",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-07",
          "close": 47326.2695,
          "prevDate": "2026-09-04",
          "prevClose": 46551.1289,
          "change": 775.1406,
          "changePct": 1.67,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-07",
          "close": 47326.2695,
          "prevDate": "2026-09-04",
          "prevClose": 46551.1289,
          "change": 775.1406,
          "changePct": 1.67,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 47326.27,
        "series": [
          {
            "date": "2026-08-31",
            "close": 46128.4688
          },
          {
            "date": "2026-09-01",
            "close": 46948.7188
          },
          {
            "date": "2026-09-02",
            "close": 46164.7188
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
