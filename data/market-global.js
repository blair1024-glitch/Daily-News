/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-07T02:33:18.768Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 9390.25,
        "prevClose": 9011.1396,
        "change": 379.1104,
        "changePct": 4.21,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-06",
          "close": 9390.25,
          "prevDate": "2026-11-05",
          "prevClose": 9011.1396,
          "change": 379.1104,
          "changePct": 4.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 9390.25,
          "prevDate": "2026-11-05",
          "prevClose": 9011.1396,
          "change": 379.1104,
          "changePct": 4.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 9390.25,
        "series": [
          {
            "date": "2026-10-30",
            "close": 10688.7998
          },
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
        "close": 25.64,
        "prevClose": 28.18,
        "change": -2.54,
        "changePct": -9.01,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-06",
          "close": 25.64,
          "prevDate": "2026-11-05",
          "prevClose": 28.18,
          "change": -2.54,
          "changePct": -9.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 25.64,
          "prevDate": "2026-11-05",
          "prevClose": 28.18,
          "change": -2.54,
          "changePct": -9.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 25.64,
        "series": [
          {
            "date": "2026-10-30",
            "close": 19.42
          },
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
        "close": 7376.8599,
        "prevClose": 7353.73,
        "change": 23.1299,
        "changePct": 0.31,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-06",
          "close": 7376.8599,
          "prevDate": "2026-11-05",
          "prevClose": 7353.73,
          "change": 23.1299,
          "changePct": 0.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 7376.8599,
          "prevDate": "2026-11-05",
          "prevClose": 7353.73,
          "change": 23.1299,
          "changePct": 0.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7376.86,
        "series": [
          {
            "date": "2026-10-30",
            "close": 7580.0698
          },
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
        "close": 24579.4238,
        "prevClose": 24315,
        "change": 264.4238,
        "changePct": 1.09,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-06",
          "close": 24579.4238,
          "prevDate": "2026-11-05",
          "prevClose": 24315,
          "change": 264.4238,
          "changePct": 1.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 24579.4238,
          "prevDate": "2026-11-05",
          "prevClose": 24315,
          "change": 264.4238,
          "changePct": 1.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 24579.424,
        "series": [
          {
            "date": "2026-10-30",
            "close": 25437
          },
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
            "close": 24579.4238
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
        "close": 51285.7305,
        "prevClose": 51523.0586,
        "change": -237.3281,
        "changePct": -0.46,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-06",
          "close": 51285.7305,
          "prevDate": "2026-11-05",
          "prevClose": 51523.0586,
          "change": -237.3281,
          "changePct": -0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 51285.7305,
          "prevDate": "2026-11-05",
          "prevClose": 51523.0586,
          "change": -237.3281,
          "changePct": -0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51285.73,
        "series": [
          {
            "date": "2026-10-30",
            "close": 51770.3086
          },
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
        "close": 4.859,
        "prevClose": 4.837,
        "change": 0.022,
        "changePct": 0.45,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-06",
          "close": 4.859,
          "prevDate": "2026-11-05",
          "prevClose": 4.837,
          "change": 0.022,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 4.859,
          "prevDate": "2026-11-05",
          "prevClose": 4.837,
          "change": 0.022,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.859,
        "series": [
          {
            "date": "2026-10-30",
            "close": 4.929
          },
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
        "close": 5.26,
        "prevClose": 5.251,
        "change": 0.009,
        "changePct": 0.17,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-06",
          "close": 5.26,
          "prevDate": "2026-11-05",
          "prevClose": 5.251,
          "change": 0.009,
          "changePct": 0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 5.26,
          "prevDate": "2026-11-05",
          "prevClose": 5.251,
          "change": 0.009,
          "changePct": 0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.26,
        "series": [
          {
            "date": "2026-10-30",
            "close": 5.309
          },
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
        "close": 4.648,
        "prevClose": 4.608,
        "change": 0.04,
        "changePct": 0.87,
        "asOf": "2026-11-06",
        "prevAsOf": "2026-11-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-06",
          "close": 4.648,
          "prevDate": "2026-11-05",
          "prevClose": 4.608,
          "change": 0.04,
          "changePct": 0.87,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-06",
          "close": 4.648,
          "prevDate": "2026-11-05",
          "prevClose": 4.608,
          "change": 0.04,
          "changePct": 0.87,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.648,
        "series": [
          {
            "date": "2026-10-30",
            "close": 4.721
          },
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
        "close": 101.55,
        "prevClose": 101.51,
        "change": 0.04,
        "changePct": 0.04,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-06",
          "close": 102.279,
          "prevDate": "2026-11-05",
          "prevClose": 101.55,
          "change": 0.729,
          "changePct": 0.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 101.55,
          "prevDate": "2026-11-04",
          "prevClose": 101.51,
          "change": 0.04,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.279,
        "series": [
          {
            "date": "2026-10-30",
            "close": 101.88
          },
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
            "close": 102.279
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
        "close": 90.52,
        "prevClose": 88.12,
        "change": 2.4,
        "changePct": 2.72,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-06",
          "close": 90.34,
          "prevDate": "2026-11-05",
          "prevClose": 90.52,
          "change": -0.18,
          "changePct": -0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 90.52,
          "prevDate": "2026-11-04",
          "prevClose": 88.12,
          "change": 2.4,
          "changePct": 2.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 90.34,
        "series": [
          {
            "date": "2026-10-30",
            "close": 104.12
          },
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
            "close": 90.34
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
        "close": 98.29,
        "prevClose": 94.62,
        "change": 3.67,
        "changePct": 3.88,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-06",
          "close": 97.76,
          "prevDate": "2026-11-05",
          "prevClose": 98.29,
          "change": -0.53,
          "changePct": -0.54,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 98.29,
          "prevDate": "2026-11-04",
          "prevClose": 94.62,
          "change": 3.67,
          "changePct": 3.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 97.76,
        "series": [
          {
            "date": "2026-10-30",
            "close": 117.64
          },
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
            "close": 97.76
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
        "close": 4113.5,
        "prevClose": 4073,
        "change": 40.5,
        "changePct": 0.99,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-06",
          "close": 4079.5,
          "prevDate": "2026-11-05",
          "prevClose": 4113.5,
          "change": -34,
          "changePct": -0.83,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 4113.5,
          "prevDate": "2026-11-04",
          "prevClose": 4073,
          "change": 40.5,
          "changePct": 0.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4079.5,
        "series": [
          {
            "date": "2026-10-30",
            "close": 3898.8999
          },
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
            "close": 4079.5
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
        "close": 158.357,
        "prevClose": 158.469,
        "change": -0.112,
        "changePct": -0.07,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-06",
          "close": 157.498,
          "prevDate": "2026-11-05",
          "prevClose": 158.357,
          "change": -0.859,
          "changePct": -0.54,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 158.357,
          "prevDate": "2026-11-04",
          "prevClose": 158.469,
          "change": -0.112,
          "changePct": -0.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.425,
        "series": [
          {
            "date": "2026-10-30",
            "close": 157.804
          },
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
          "date": "2026-11-07",
          "close": 6.6648,
          "prevDate": "2026-11-06",
          "prevClose": 6.688,
          "change": -0.0232,
          "changePct": -0.35,
          "gapDays": 1,
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
        "quotePrice": 6.6648,
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
            "date": "2026-11-07",
            "close": 6.6648
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
        "close": 32.8212,
        "prevClose": 32.733,
        "change": 0.0882,
        "changePct": 0.27,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-06",
          "close": 33.1093,
          "prevDate": "2026-11-05",
          "prevClose": 32.8212,
          "change": 0.2881,
          "changePct": 0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 32.8212,
          "prevDate": "2026-11-04",
          "prevClose": 32.733,
          "change": 0.0882,
          "changePct": 0.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.765,
        "series": [
          {
            "date": "2026-10-30",
            "close": 32.5669
          },
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
        "quotePrice": 39701.64,
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
