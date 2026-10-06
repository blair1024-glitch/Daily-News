/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-06T23:40:30.323Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 13217.8232,
        "prevClose": 13172.7402,
        "change": 45.083,
        "changePct": 0.34,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-06",
          "close": 13217.8232,
          "prevDate": "2026-10-05",
          "prevClose": 13172.7402,
          "change": 45.083,
          "changePct": 0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 13217.8232,
          "prevDate": "2026-10-05",
          "prevClose": 13172.7402,
          "change": 45.083,
          "changePct": 0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 13217.823,
        "series": [
          {
            "date": "2026-09-29",
            "close": 12629.1602
          },
          {
            "date": "2026-09-30",
            "close": 12628.6201
          },
          {
            "date": "2026-10-01",
            "close": 12829
          },
          {
            "date": "2026-10-02",
            "close": 13136.6699
          },
          {
            "date": "2026-10-05",
            "close": 13172.7402
          },
          {
            "date": "2026-10-06",
            "close": 13217.8232
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
        "close": 15.01,
        "prevClose": 15.52,
        "change": -0.51,
        "changePct": -3.29,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-06",
          "close": 15.01,
          "prevDate": "2026-10-05",
          "prevClose": 15.52,
          "change": -0.51,
          "changePct": -3.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 15.01,
          "prevDate": "2026-10-05",
          "prevClose": 15.52,
          "change": -0.51,
          "changePct": -3.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.01,
        "series": [
          {
            "date": "2026-09-29",
            "close": 16.04
          },
          {
            "date": "2026-09-30",
            "close": 16.34
          },
          {
            "date": "2026-10-01",
            "close": 16.39
          },
          {
            "date": "2026-10-02",
            "close": 15.31
          },
          {
            "date": "2026-10-05",
            "close": 15.52
          },
          {
            "date": "2026-10-06",
            "close": 15.01
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
        "close": 7818.9302,
        "prevClose": 7773.9502,
        "change": 44.98,
        "changePct": 0.58,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-06",
          "close": 7818.9302,
          "prevDate": "2026-10-05",
          "prevClose": 7773.9502,
          "change": 44.98,
          "changePct": 0.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 7818.9302,
          "prevDate": "2026-10-05",
          "prevClose": 7773.9502,
          "change": 44.98,
          "changePct": 0.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7818.93,
        "series": [
          {
            "date": "2026-09-29",
            "close": 7670.8398
          },
          {
            "date": "2026-09-30",
            "close": 7651.54
          },
          {
            "date": "2026-10-01",
            "close": 7666.4502
          },
          {
            "date": "2026-10-02",
            "close": 7722.7202
          },
          {
            "date": "2026-10-05",
            "close": 7773.9502
          },
          {
            "date": "2026-10-06",
            "close": 7818.9302
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
        "close": 27599.8867,
        "prevClose": 27477.3105,
        "change": 122.5762,
        "changePct": 0.45,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-06",
          "close": 27599.8867,
          "prevDate": "2026-10-05",
          "prevClose": 27477.3105,
          "change": 122.5762,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 27599.8867,
          "prevDate": "2026-10-05",
          "prevClose": 27477.3105,
          "change": 122.5762,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27599.887,
        "series": [
          {
            "date": "2026-09-29",
            "close": 26797.5391
          },
          {
            "date": "2026-09-30",
            "close": 26861.0605
          },
          {
            "date": "2026-10-01",
            "close": 26871.5996
          },
          {
            "date": "2026-10-02",
            "close": 27190.8594
          },
          {
            "date": "2026-10-05",
            "close": 27477.3105
          },
          {
            "date": "2026-10-06",
            "close": 27599.8867
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
        "close": 51521.2813,
        "prevClose": 51267.8984,
        "change": 253.3829,
        "changePct": 0.49,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-06",
          "close": 51521.2813,
          "prevDate": "2026-10-05",
          "prevClose": 51267.8984,
          "change": 253.3829,
          "changePct": 0.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 51521.2813,
          "prevDate": "2026-10-05",
          "prevClose": 51267.8984,
          "change": 253.3829,
          "changePct": 0.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51521.28,
        "series": [
          {
            "date": "2026-09-29",
            "close": 51349.9219
          },
          {
            "date": "2026-09-30",
            "close": 50906.0508
          },
          {
            "date": "2026-10-01",
            "close": 50926.5586
          },
          {
            "date": "2026-10-02",
            "close": 51176.9609
          },
          {
            "date": "2026-10-05",
            "close": 51267.8984
          },
          {
            "date": "2026-10-06",
            "close": 51521.2813
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
        "close": 5.269,
        "prevClose": 5.311,
        "change": -0.042,
        "changePct": -0.79,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-06",
          "close": 5.269,
          "prevDate": "2026-10-05",
          "prevClose": 5.311,
          "change": -0.042,
          "changePct": -0.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 5.269,
          "prevDate": "2026-10-05",
          "prevClose": 5.311,
          "change": -0.042,
          "changePct": -0.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.269,
        "series": [
          {
            "date": "2026-09-29",
            "close": 5.255
          },
          {
            "date": "2026-09-30",
            "close": 5.293
          },
          {
            "date": "2026-10-01",
            "close": 5.237
          },
          {
            "date": "2026-10-02",
            "close": 5.277
          },
          {
            "date": "2026-10-05",
            "close": 5.311
          },
          {
            "date": "2026-10-06",
            "close": 5.269
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
        "close": 5.641,
        "prevClose": 5.665,
        "change": -0.024,
        "changePct": -0.42,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-06",
          "close": 5.641,
          "prevDate": "2026-10-05",
          "prevClose": 5.665,
          "change": -0.024,
          "changePct": -0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 5.641,
          "prevDate": "2026-10-05",
          "prevClose": 5.665,
          "change": -0.024,
          "changePct": -0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.641,
        "series": [
          {
            "date": "2026-09-29",
            "close": 5.594
          },
          {
            "date": "2026-09-30",
            "close": 5.638
          },
          {
            "date": "2026-10-01",
            "close": 5.603
          },
          {
            "date": "2026-10-02",
            "close": 5.63
          },
          {
            "date": "2026-10-05",
            "close": 5.665
          },
          {
            "date": "2026-10-06",
            "close": 5.641
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
        "close": 5.028,
        "prevClose": 5.066,
        "change": -0.038,
        "changePct": -0.75,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-06",
          "close": 5.028,
          "prevDate": "2026-10-05",
          "prevClose": 5.066,
          "change": -0.038,
          "changePct": -0.75,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 5.028,
          "prevDate": "2026-10-05",
          "prevClose": 5.066,
          "change": -0.038,
          "changePct": -0.75,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.028,
        "series": [
          {
            "date": "2026-09-29",
            "close": 5.063
          },
          {
            "date": "2026-09-30",
            "close": 5.089
          },
          {
            "date": "2026-10-01",
            "close": 5.005
          },
          {
            "date": "2026-10-02",
            "close": 5.055
          },
          {
            "date": "2026-10-05",
            "close": 5.066
          },
          {
            "date": "2026-10-06",
            "close": 5.028
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
        "close": 102.17,
        "prevClose": 101.93,
        "change": 0.24,
        "changePct": 0.24,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-06",
          "close": 101.845,
          "prevDate": "2026-10-05",
          "prevClose": 102.17,
          "change": -0.325,
          "changePct": -0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 102.17,
          "prevDate": "2026-10-02",
          "prevClose": 101.93,
          "change": 0.24,
          "changePct": 0.24,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 101.845,
        "series": [
          {
            "date": "2026-09-29",
            "close": 101.37
          },
          {
            "date": "2026-09-30",
            "close": 101.45
          },
          {
            "date": "2026-10-01",
            "close": 102.1
          },
          {
            "date": "2026-10-02",
            "close": 101.93
          },
          {
            "date": "2026-10-05",
            "close": 102.17
          },
          {
            "date": "2026-10-06",
            "close": 101.845
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
        "close": 89.43,
        "prevClose": 91.11,
        "change": -1.68,
        "changePct": -1.84,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-06",
          "close": 89.92,
          "prevDate": "2026-10-05",
          "prevClose": 89.43,
          "change": 0.49,
          "changePct": 0.55,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 89.43,
          "prevDate": "2026-10-02",
          "prevClose": 91.11,
          "change": -1.68,
          "changePct": -1.84,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 89.92,
        "series": [
          {
            "date": "2026-09-29",
            "close": 89.38
          },
          {
            "date": "2026-09-30",
            "close": 90.42
          },
          {
            "date": "2026-10-01",
            "close": 92.87
          },
          {
            "date": "2026-10-02",
            "close": 91.11
          },
          {
            "date": "2026-10-05",
            "close": 89.43
          },
          {
            "date": "2026-10-06",
            "close": 89.92
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
        "close": 100.32,
        "prevClose": 102.25,
        "change": -1.93,
        "changePct": -1.89,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-06",
          "close": 101.13,
          "prevDate": "2026-10-05",
          "prevClose": 100.32,
          "change": 0.81,
          "changePct": 0.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 100.32,
          "prevDate": "2026-10-02",
          "prevClose": 102.25,
          "change": -1.93,
          "changePct": -1.89,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 101.13,
        "series": [
          {
            "date": "2026-09-29",
            "close": 102.59
          },
          {
            "date": "2026-09-30",
            "close": 103.53
          },
          {
            "date": "2026-10-01",
            "close": 102.31
          },
          {
            "date": "2026-10-02",
            "close": 102.25
          },
          {
            "date": "2026-10-05",
            "close": 100.32
          },
          {
            "date": "2026-10-06",
            "close": 101.13
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
        "close": 4156.7998,
        "prevClose": 4162.2998,
        "change": -5.5,
        "changePct": -0.13,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-06",
          "close": 4196.6001,
          "prevDate": "2026-10-05",
          "prevClose": 4156.7998,
          "change": 39.8003,
          "changePct": 0.96,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 4156.7998,
          "prevDate": "2026-10-02",
          "prevClose": 4162.2998,
          "change": -5.5,
          "changePct": -0.13,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4196.6,
        "series": [
          {
            "date": "2026-09-29",
            "close": 4179.7002
          },
          {
            "date": "2026-09-30",
            "close": 4186.7002
          },
          {
            "date": "2026-10-01",
            "close": 4202.2998
          },
          {
            "date": "2026-10-02",
            "close": 4162.2998
          },
          {
            "date": "2026-10-05",
            "close": 4156.7998
          },
          {
            "date": "2026-10-06",
            "close": 4196.6001
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
        "close": 157.963,
        "prevClose": 157.734,
        "change": 0.229,
        "changePct": 0.15,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-07",
          "close": 158.241,
          "prevDate": "2026-10-06",
          "prevClose": 157.963,
          "change": 0.278,
          "changePct": 0.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 157.963,
          "prevDate": "2026-10-05",
          "prevClose": 157.734,
          "change": 0.229,
          "changePct": 0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.241,
        "series": [
          {
            "date": "2026-09-30",
            "close": 157.404
          },
          {
            "date": "2026-10-01",
            "close": 157.558
          },
          {
            "date": "2026-10-02",
            "close": 157.927
          },
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
            "close": 158.241
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
        "close": 6.7045,
        "prevClose": 6.7045,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-07",
          "close": 6.704,
          "prevDate": "2026-10-06",
          "prevClose": 6.7045,
          "change": -0.0005,
          "changePct": -0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 6.7045,
          "prevDate": "2026-10-05",
          "prevClose": 6.7045,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.704,
        "series": [
          {
            "date": "2026-09-30",
            "close": 6.703
          },
          {
            "date": "2026-10-01",
            "close": 6.7045
          },
          {
            "date": "2026-10-02",
            "close": 6.7045
          },
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
            "close": 6.704
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
        "close": 31.7514,
        "prevClose": 31.8344,
        "change": -0.083,
        "changePct": -0.26,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-07",
          "close": 31.776,
          "prevDate": "2026-10-06",
          "prevClose": 31.7514,
          "change": 0.0246,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 31.7514,
          "prevDate": "2026-10-05",
          "prevClose": 31.8344,
          "change": -0.083,
          "changePct": -0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.776,
        "series": [
          {
            "date": "2026-09-30",
            "close": 31.85
          },
          {
            "date": "2026-10-01",
            "close": 31.8679
          },
          {
            "date": "2026-10-02",
            "close": 31.8868
          },
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
            "close": 31.776
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
        "close": 49712.0391,
        "prevClose": 48475.7383,
        "change": 1236.3008,
        "changePct": 2.55,
        "asOf": "2026-10-05",
        "prevAsOf": "2026-10-02",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-05",
          "close": 49712.0391,
          "prevDate": "2026-10-02",
          "prevClose": 48475.7383,
          "change": 1236.3008,
          "changePct": 2.55,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-05",
          "close": 49712.0391,
          "prevDate": "2026-10-02",
          "prevClose": 48475.7383,
          "change": 1236.3008,
          "changePct": 2.55,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 49822.55,
        "series": [
          {
            "date": "2026-09-24",
            "close": 48024.6016
          },
          {
            "date": "2026-09-29",
            "close": 47631.9609
          },
          {
            "date": "2026-09-30",
            "close": 47940.1289
          },
          {
            "date": "2026-10-01",
            "close": 48353.4883
          },
          {
            "date": "2026-10-02",
            "close": 48475.7383
          },
          {
            "date": "2026-10-05",
            "close": 49712.0391
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
