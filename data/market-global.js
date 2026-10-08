/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-08T17:46:48.811Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 13066.1504,
        "prevClose": 13217.8203,
        "change": -151.6699,
        "changePct": -1.15,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 12573.9453,
          "prevDate": "2026-10-07",
          "prevClose": 13066.1504,
          "change": -492.2051,
          "changePct": -3.77,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 13066.1504,
          "prevDate": "2026-10-06",
          "prevClose": 13217.8203,
          "change": -151.6699,
          "changePct": -1.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12573.945,
        "series": [
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
            "close": 13217.8203
          },
          {
            "date": "2026-10-07",
            "close": 13066.1504
          },
          {
            "date": "2026-10-08",
            "close": 12573.9453
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
        "close": 15.08,
        "prevClose": 15.01,
        "change": 0.07,
        "changePct": 0.47,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 16.3,
          "prevDate": "2026-10-07",
          "prevClose": 15.08,
          "change": 1.22,
          "changePct": 8.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 15.08,
          "prevDate": "2026-10-06",
          "prevClose": 15.01,
          "change": 0.07,
          "changePct": 0.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 16.3,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 15.08
          },
          {
            "date": "2026-10-08",
            "close": 16.3
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
        "close": 7801.77,
        "prevClose": 7818.9302,
        "change": -17.1602,
        "changePct": -0.22,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 7752.9502,
          "prevDate": "2026-10-07",
          "prevClose": 7801.77,
          "change": -48.8198,
          "changePct": -0.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 7801.77,
          "prevDate": "2026-10-06",
          "prevClose": 7818.9302,
          "change": -17.1602,
          "changePct": -0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7752.95,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 7801.77
          },
          {
            "date": "2026-10-08",
            "close": 7752.9502
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
        "close": 27538.6895,
        "prevClose": 27599.7891,
        "change": -61.0996,
        "changePct": -0.22,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 27140.6211,
          "prevDate": "2026-10-07",
          "prevClose": 27538.6895,
          "change": -398.0684,
          "changePct": -1.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 27538.6895,
          "prevDate": "2026-10-06",
          "prevClose": 27599.7891,
          "change": -61.0996,
          "changePct": -0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27140.621,
        "series": [
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
            "close": 27599.7891
          },
          {
            "date": "2026-10-07",
            "close": 27538.6895
          },
          {
            "date": "2026-10-08",
            "close": 27140.6211
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
        "close": 51179.8711,
        "prevClose": 51521.2813,
        "change": -341.4102,
        "changePct": -0.66,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 51204.0781,
          "prevDate": "2026-10-07",
          "prevClose": 51179.8711,
          "change": 24.207,
          "changePct": 0.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 51179.8711,
          "prevDate": "2026-10-06",
          "prevClose": 51521.2813,
          "change": -341.4102,
          "changePct": -0.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51204.08,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 51179.8711
          },
          {
            "date": "2026-10-08",
            "close": 51204.0781
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
        "close": 5.277,
        "prevClose": 5.269,
        "change": 0.008,
        "changePct": 0.15,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 5.235,
          "prevDate": "2026-10-07",
          "prevClose": 5.277,
          "change": -0.042,
          "changePct": -0.8,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 5.277,
          "prevDate": "2026-10-06",
          "prevClose": 5.269,
          "change": 0.008,
          "changePct": 0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.235,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 5.277
          },
          {
            "date": "2026-10-08",
            "close": 5.235
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
        "close": 5.661,
        "prevClose": 5.641,
        "change": 0.02,
        "changePct": 0.35,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 5.614,
          "prevDate": "2026-10-07",
          "prevClose": 5.661,
          "change": -0.047,
          "changePct": -0.83,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 5.661,
          "prevDate": "2026-10-06",
          "prevClose": 5.641,
          "change": 0.02,
          "changePct": 0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.614,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 5.661
          },
          {
            "date": "2026-10-08",
            "close": 5.614
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
        "close": 5.021,
        "prevClose": 5.028,
        "change": -0.007,
        "changePct": -0.14,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 4.985,
          "prevDate": "2026-10-07",
          "prevClose": 5.021,
          "change": -0.036,
          "changePct": -0.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 5.021,
          "prevDate": "2026-10-06",
          "prevClose": 5.028,
          "change": -0.007,
          "changePct": -0.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.985,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 5.021
          },
          {
            "date": "2026-10-08",
            "close": 4.985
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
        "close": 102.24,
        "prevClose": 101.83,
        "change": 0.41,
        "changePct": 0.4,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 102.079,
          "prevDate": "2026-10-07",
          "prevClose": 102.24,
          "change": -0.161,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 102.24,
          "prevDate": "2026-10-06",
          "prevClose": 101.83,
          "change": 0.41,
          "changePct": 0.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.079,
        "series": [
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
            "close": 101.83
          },
          {
            "date": "2026-10-07",
            "close": 102.24
          },
          {
            "date": "2026-10-08",
            "close": 102.079
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
        "close": 88.28,
        "prevClose": 89.44,
        "change": -1.16,
        "changePct": -1.3,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 91.42,
          "prevDate": "2026-10-07",
          "prevClose": 88.28,
          "change": 3.14,
          "changePct": 3.56,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 88.28,
          "prevDate": "2026-10-06",
          "prevClose": 89.44,
          "change": -1.16,
          "changePct": -1.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 91.42,
        "series": [
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
            "close": 89.44
          },
          {
            "date": "2026-10-07",
            "close": 88.28
          },
          {
            "date": "2026-10-08",
            "close": 91.42
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
        "close": 100.2,
        "prevClose": 100.58,
        "change": -0.38,
        "changePct": -0.38,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 104,
          "prevDate": "2026-10-07",
          "prevClose": 100.2,
          "change": 3.8,
          "changePct": 3.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 100.2,
          "prevDate": "2026-10-06",
          "prevClose": 100.58,
          "change": -0.38,
          "changePct": -0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 104,
        "series": [
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
            "close": 100.58
          },
          {
            "date": "2026-10-07",
            "close": 100.2
          },
          {
            "date": "2026-10-08",
            "close": 104
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
        "close": 4140.7002,
        "prevClose": 4187.1001,
        "change": -46.3999,
        "changePct": -1.11,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 4155.7002,
          "prevDate": "2026-10-07",
          "prevClose": 4140.7002,
          "change": 15,
          "changePct": 0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 4140.7002,
          "prevDate": "2026-10-06",
          "prevClose": 4187.1001,
          "change": -46.3999,
          "changePct": -1.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4155.7,
        "series": [
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
            "close": 4187.1001
          },
          {
            "date": "2026-10-07",
            "close": 4140.7002
          },
          {
            "date": "2026-10-08",
            "close": 4155.7002
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
        "close": 158.296,
        "prevClose": 157.963,
        "change": 0.333,
        "changePct": 0.21,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 157.716,
          "prevDate": "2026-10-07",
          "prevClose": 158.296,
          "change": -0.58,
          "changePct": -0.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 158.296,
          "prevDate": "2026-10-06",
          "prevClose": 157.963,
          "change": 0.333,
          "changePct": 0.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.716,
        "series": [
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
            "close": 158.296
          },
          {
            "date": "2026-10-08",
            "close": 157.716
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
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 6.6939,
          "prevDate": "2026-10-07",
          "prevClose": 6.7045,
          "change": -0.0106,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 6.7045,
          "prevDate": "2026-10-06",
          "prevClose": 6.7045,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6939,
        "series": [
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
            "close": 6.7045
          },
          {
            "date": "2026-10-08",
            "close": 6.6939
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
        "close": 31.7769,
        "prevClose": 31.7514,
        "change": 0.0255,
        "changePct": 0.08,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 31.935,
          "prevDate": "2026-10-07",
          "prevClose": 31.7769,
          "change": 0.1581,
          "changePct": 0.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 31.7769,
          "prevDate": "2026-10-06",
          "prevClose": 31.7514,
          "change": 0.0255,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.935,
        "series": [
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
            "close": 31.7769
          },
          {
            "date": "2026-10-08",
            "close": 31.935
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
        "close": 49806.3711,
        "prevClose": 49822.5508,
        "change": -16.1797,
        "changePct": -0.03,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-07",
          "close": 49806.3711,
          "prevDate": "2026-10-06",
          "prevClose": 49822.5508,
          "change": -16.1797,
          "changePct": -0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 49806.3711,
          "prevDate": "2026-10-06",
          "prevClose": 49822.5508,
          "change": -16.1797,
          "changePct": -0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 49313.44,
        "series": [
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
          },
          {
            "date": "2026-10-06",
            "close": 49822.5508
          },
          {
            "date": "2026-10-07",
            "close": 49806.3711
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
