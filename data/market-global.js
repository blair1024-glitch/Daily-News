/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-09T15:01:36.048Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11887.8701,
        "prevClose": 11735.2598,
        "change": 152.6103,
        "changePct": 1.3,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 11969.833,
          "prevDate": "2026-09-08",
          "prevClose": 11887.8701,
          "change": 81.9629,
          "changePct": 0.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 11887.8701,
          "prevDate": "2026-09-04",
          "prevClose": 11735.2598,
          "change": 152.6103,
          "changePct": 1.3,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 11969.833,
        "series": [
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
          },
          {
            "date": "2026-09-08",
            "close": 11887.8701
          },
          {
            "date": "2026-09-09",
            "close": 11969.833
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
        "close": 15.72,
        "prevClose": 15.3,
        "change": 0.42,
        "changePct": 2.75,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 16.07,
          "prevDate": "2026-09-08",
          "prevClose": 15.72,
          "change": 0.35,
          "changePct": 2.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 15.72,
          "prevDate": "2026-09-07",
          "prevClose": 15.3,
          "change": 0.42,
          "changePct": 2.75,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 16.07,
        "series": [
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
          },
          {
            "date": "2026-09-08",
            "close": 15.72
          },
          {
            "date": "2026-09-09",
            "close": 16.07
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
        "close": 7673.52,
        "prevClose": 7718.6001,
        "change": -45.0801,
        "changePct": -0.58,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 7649.9399,
          "prevDate": "2026-09-08",
          "prevClose": 7673.52,
          "change": -23.5801,
          "changePct": -0.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 7673.52,
          "prevDate": "2026-09-04",
          "prevClose": 7718.6001,
          "change": -45.0801,
          "changePct": -0.58,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 7649.94,
        "series": [
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
          },
          {
            "date": "2026-09-08",
            "close": 7673.52
          },
          {
            "date": "2026-09-09",
            "close": 7649.9399
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
        "close": 26421.4102,
        "prevClose": 26506.9902,
        "change": -85.58,
        "changePct": -0.32,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 26303.3965,
          "prevDate": "2026-09-08",
          "prevClose": 26421.4102,
          "change": -118.0137,
          "changePct": -0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 26421.4102,
          "prevDate": "2026-09-04",
          "prevClose": 26506.9902,
          "change": -85.58,
          "changePct": -0.32,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 26303.396,
        "series": [
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
          },
          {
            "date": "2026-09-08",
            "close": 26421.4102
          },
          {
            "date": "2026-09-09",
            "close": 26303.3965
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
        "close": 52786.0703,
        "prevClose": 53414.25,
        "change": -628.1797,
        "changePct": -1.18,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 52482.1602,
          "prevDate": "2026-09-08",
          "prevClose": 52786.0703,
          "change": -303.9101,
          "changePct": -0.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 52786.0703,
          "prevDate": "2026-09-04",
          "prevClose": 53414.25,
          "change": -628.1797,
          "changePct": -1.18,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 52482.16,
        "series": [
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
          },
          {
            "date": "2026-09-08",
            "close": 52786.0703
          },
          {
            "date": "2026-09-09",
            "close": 52482.1602
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
        "close": 4.806,
        "prevClose": 4.784,
        "change": 0.022,
        "changePct": 0.46,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 4.806,
          "prevDate": "2026-09-08",
          "prevClose": 4.806,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 4.806,
          "prevDate": "2026-09-04",
          "prevClose": 4.784,
          "change": 0.022,
          "changePct": 0.46,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 4.806,
        "series": [
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
          },
          {
            "date": "2026-09-08",
            "close": 4.806
          },
          {
            "date": "2026-09-09",
            "close": 4.806
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
        "close": 5.264,
        "prevClose": 5.246,
        "change": 0.018,
        "changePct": 0.34,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 5.255,
          "prevDate": "2026-09-08",
          "prevClose": 5.264,
          "change": -0.009,
          "changePct": -0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 5.264,
          "prevDate": "2026-09-04",
          "prevClose": 5.246,
          "change": 0.018,
          "changePct": 0.34,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 5.255,
        "series": [
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
          },
          {
            "date": "2026-09-08",
            "close": 5.264
          },
          {
            "date": "2026-09-09",
            "close": 5.255
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
        "close": 4.573,
        "prevClose": 4.55,
        "change": 0.023,
        "changePct": 0.51,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 4.582,
          "prevDate": "2026-09-08",
          "prevClose": 4.573,
          "change": 0.009,
          "changePct": 0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 4.573,
          "prevDate": "2026-09-04",
          "prevClose": 4.55,
          "change": 0.023,
          "changePct": 0.51,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 4.582,
        "series": [
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
          },
          {
            "date": "2026-09-08",
            "close": 4.573
          },
          {
            "date": "2026-09-09",
            "close": 4.582
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
        "close": 98.84,
        "prevClose": 99.16,
        "change": -0.32,
        "changePct": -0.32,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 98.668,
          "prevDate": "2026-09-08",
          "prevClose": 98.84,
          "change": -0.172,
          "changePct": -0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 98.84,
          "prevDate": "2026-09-04",
          "prevClose": 99.16,
          "change": -0.32,
          "changePct": -0.32,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 98.668,
        "series": [
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
            "date": "2026-09-08",
            "close": 98.84
          },
          {
            "date": "2026-09-09",
            "close": 98.668
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
        "close": 93.03,
        "prevClose": 91.48,
        "change": 1.55,
        "changePct": 1.69,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 96.2,
          "prevDate": "2026-09-08",
          "prevClose": 93.03,
          "change": 3.17,
          "changePct": 3.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 93.03,
          "prevDate": "2026-09-04",
          "prevClose": 91.48,
          "change": 1.55,
          "changePct": 1.69,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 96.2,
        "series": [
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
            "date": "2026-09-08",
            "close": 93.03
          },
          {
            "date": "2026-09-09",
            "close": 96.2
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
        "close": 97.92,
        "prevClose": 96.28,
        "change": 1.64,
        "changePct": 1.7,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 101.11,
          "prevDate": "2026-09-08",
          "prevClose": 97.92,
          "change": 3.19,
          "changePct": 3.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 97.92,
          "prevDate": "2026-09-04",
          "prevClose": 96.28,
          "change": 1.64,
          "changePct": 1.7,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 101.11,
        "series": [
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
            "date": "2026-09-08",
            "close": 97.92
          },
          {
            "date": "2026-09-09",
            "close": 101.11
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
        "close": 4393.8999,
        "prevClose": 4429.7998,
        "change": -35.8999,
        "changePct": -0.81,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-04",
        "gapDays": 4,
        "gapSuspect": true,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 4465.8999,
          "prevDate": "2026-09-08",
          "prevClose": 4393.8999,
          "change": 72,
          "changePct": 1.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 4393.8999,
          "prevDate": "2026-09-04",
          "prevClose": 4429.7998,
          "change": -35.8999,
          "changePct": -0.81,
          "gapDays": 4,
          "gapSuspect": true
        },
        "quotePrice": 4465.9,
        "series": [
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
            "date": "2026-09-08",
            "close": 4393.8999
          },
          {
            "date": "2026-09-09",
            "close": 4465.8999
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
        "close": 153.855,
        "prevClose": 156.197,
        "change": -2.342,
        "changePct": -1.5,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 153.399,
          "prevDate": "2026-09-08",
          "prevClose": 153.855,
          "change": -0.456,
          "changePct": -0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 153.855,
          "prevDate": "2026-09-07",
          "prevClose": 156.197,
          "change": -2.342,
          "changePct": -1.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 153.399,
        "series": [
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
            "close": 153.855
          },
          {
            "date": "2026-09-09",
            "close": 153.399
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
        "prevClose": 6.7108,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 6.6949,
          "prevDate": "2026-09-08",
          "prevClose": 6.7108,
          "change": -0.0159,
          "changePct": -0.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 6.7108,
          "prevDate": "2026-09-07",
          "prevClose": 6.7108,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6949,
        "series": [
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
            "close": 6.7108
          },
          {
            "date": "2026-09-09",
            "close": 6.6949
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
        "close": 31.5049,
        "prevClose": 31.621,
        "change": -0.1161,
        "changePct": -0.37,
        "asOf": "2026-09-08",
        "prevAsOf": "2026-09-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-09",
          "close": 31.442,
          "prevDate": "2026-09-08",
          "prevClose": 31.5049,
          "change": -0.0629,
          "changePct": -0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-08",
          "close": 31.5049,
          "prevDate": "2026-09-07",
          "prevClose": 31.621,
          "change": -0.1161,
          "changePct": -0.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.442,
        "series": [
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
            "close": 31.5049
          },
          {
            "date": "2026-09-09",
            "close": 31.442
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
        "close": 47183.3594,
        "prevClose": 47105.7813,
        "change": 77.5781,
        "changePct": 0.16,
        "asOf": "2026-09-09",
        "prevAsOf": "2026-09-08",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-09",
          "close": 47183.3594,
          "prevDate": "2026-09-08",
          "prevClose": 47105.7813,
          "change": 77.5781,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-09",
          "close": 47183.3594,
          "prevDate": "2026-09-08",
          "prevClose": 47105.7813,
          "change": 77.5781,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 47183.36,
        "series": [
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
          },
          {
            "date": "2026-09-08",
            "close": 47105.7813
          },
          {
            "date": "2026-09-09",
            "close": 47183.3594
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
