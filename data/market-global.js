/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-05T00:38:00.105Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11735.2627,
        "prevClose": 11352.1299,
        "change": 383.1328,
        "changePct": 3.37,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-04",
          "close": 11735.2627,
          "prevDate": "2026-09-03",
          "prevClose": 11352.1299,
          "change": 383.1328,
          "changePct": 3.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 11735.2627,
          "prevDate": "2026-09-03",
          "prevClose": 11352.1299,
          "change": 383.1328,
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
            "close": 11735.2627
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
        "close": 14.53,
        "prevClose": 14.32,
        "change": 0.21,
        "changePct": 1.47,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-04",
          "close": 14.53,
          "prevDate": "2026-09-03",
          "prevClose": 14.32,
          "change": 0.21,
          "changePct": 1.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 14.53,
          "prevDate": "2026-09-03",
          "prevClose": 14.32,
          "change": 0.21,
          "changePct": 1.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 14.53,
        "series": [
          {
            "date": "2026-08-28",
            "close": 14.43
          },
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
        "close": 99,
        "prevClose": 99.56,
        "change": -0.56,
        "changePct": -0.56,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 99.157,
          "prevDate": "2026-09-03",
          "prevClose": 99,
          "change": 0.157,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 99,
          "prevDate": "2026-09-02",
          "prevClose": 99.56,
          "change": -0.56,
          "changePct": -0.56,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.157,
        "series": [
          {
            "date": "2026-08-28",
            "close": 99.7
          },
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
            "close": 99.157
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
        "close": 91.3,
        "prevClose": 91.01,
        "change": 0.29,
        "changePct": 0.32,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 91.22,
          "prevDate": "2026-09-03",
          "prevClose": 91.3,
          "change": -0.08,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 91.3,
          "prevDate": "2026-09-02",
          "prevClose": 91.01,
          "change": 0.29,
          "changePct": 0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 91.22,
        "series": [
          {
            "date": "2026-08-28",
            "close": 83.4
          },
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
            "close": 91.22
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
        "close": 95.52,
        "prevClose": 95.63,
        "change": -0.11,
        "changePct": -0.12,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 95.83,
          "prevDate": "2026-09-03",
          "prevClose": 95.52,
          "change": 0.31,
          "changePct": 0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 95.52,
          "prevDate": "2026-09-02",
          "prevClose": 95.63,
          "change": -0.11,
          "changePct": -0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 95.83,
        "series": [
          {
            "date": "2026-08-28",
            "close": 89.31
          },
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
            "close": 95.83
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
        "close": 4491.7002,
        "prevClose": 4366.2998,
        "change": 125.4004,
        "changePct": 2.87,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 4477.2002,
          "prevDate": "2026-09-03",
          "prevClose": 4491.7002,
          "change": -14.5,
          "changePct": -0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 4491.7002,
          "prevDate": "2026-09-02",
          "prevClose": 4366.2998,
          "change": 125.4004,
          "changePct": 2.87,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4477.2,
        "series": [
          {
            "date": "2026-08-28",
            "close": 4478.1001
          },
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
            "close": 4477.2002
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
        "close": 158.923,
        "prevClose": 160.196,
        "change": -1.273,
        "changePct": -0.79,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 156.221,
          "prevDate": "2026-09-03",
          "prevClose": 158.923,
          "change": -2.702,
          "changePct": -1.7,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 158.923,
          "prevDate": "2026-09-02",
          "prevClose": 160.196,
          "change": -1.273,
          "changePct": -0.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 156.221,
        "series": [
          {
            "date": "2026-08-28",
            "close": 159.321
          },
          {
            "date": "2026-08-31",
            "close": 160.122
          },
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
            "close": 156.221
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
        "close": 6.719,
        "prevClose": 6.719,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-05",
          "close": 6.7103,
          "prevDate": "2026-09-04",
          "prevClose": 6.719,
          "change": -0.0087,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 6.719,
          "prevDate": "2026-09-03",
          "prevClose": 6.719,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.7103,
        "series": [
          {
            "date": "2026-08-31",
            "close": 6.726
          },
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
            "date": "2026-09-05",
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
        "close": 31.6954,
        "prevClose": 31.7262,
        "change": -0.0308,
        "changePct": -0.1,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-05",
          "close": 31.62,
          "prevDate": "2026-09-04",
          "prevClose": 31.6954,
          "change": -0.0754,
          "changePct": -0.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 31.6954,
          "prevDate": "2026-09-03",
          "prevClose": 31.7262,
          "change": -0.0308,
          "changePct": -0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.62,
        "series": [
          {
            "date": "2026-08-31",
            "close": 31.626
          },
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
            "date": "2026-09-05",
            "close": 31.62
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
        "close": 45857.6602,
        "prevClose": 46164.7188,
        "change": -307.0586,
        "changePct": -0.67,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-03",
          "close": 45857.6602,
          "prevDate": "2026-09-02",
          "prevClose": 46164.7188,
          "change": -307.0586,
          "changePct": -0.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 45857.6602,
          "prevDate": "2026-09-02",
          "prevClose": 46164.7188,
          "change": -307.0586,
          "changePct": -0.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46551.13,
        "series": [
          {
            "date": "2026-08-27",
            "close": 45975.2188
          },
          {
            "date": "2026-08-28",
            "close": 46331.4492
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
