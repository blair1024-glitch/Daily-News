/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-08T02:34:30.615Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 13066.1494,
        "prevClose": 13217.8203,
        "change": -151.6709,
        "changePct": -1.15,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-07",
          "close": 13066.1494,
          "prevDate": "2026-10-06",
          "prevClose": 13217.8203,
          "change": -151.6709,
          "changePct": -1.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 13066.1494,
          "prevDate": "2026-10-06",
          "prevClose": 13217.8203,
          "change": -151.6709,
          "changePct": -1.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 13066.149,
        "series": [
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
            "close": 13217.8203
          },
          {
            "date": "2026-10-07",
            "close": 13066.1494
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
        "live": false,
        "latest": {
          "date": "2026-10-07",
          "close": 15.08,
          "prevDate": "2026-10-06",
          "prevClose": 15.01,
          "change": 0.07,
          "changePct": 0.47,
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
        "quotePrice": 15.08,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 15.08
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
        "live": false,
        "latest": {
          "date": "2026-10-07",
          "close": 7801.77,
          "prevDate": "2026-10-06",
          "prevClose": 7818.9302,
          "change": -17.1602,
          "changePct": -0.22,
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
        "quotePrice": 7801.77,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 7801.77
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
        "close": 27538.6914,
        "prevClose": 27599.7891,
        "change": -61.0977,
        "changePct": -0.22,
        "asOf": "2026-10-07",
        "prevAsOf": "2026-10-06",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-07",
          "close": 27538.6914,
          "prevDate": "2026-10-06",
          "prevClose": 27599.7891,
          "change": -61.0977,
          "changePct": -0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-07",
          "close": 27538.6914,
          "prevDate": "2026-10-06",
          "prevClose": 27599.7891,
          "change": -61.0977,
          "changePct": -0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27538.691,
        "series": [
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
            "close": 27599.7891
          },
          {
            "date": "2026-10-07",
            "close": 27538.6914
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
        "live": false,
        "latest": {
          "date": "2026-10-07",
          "close": 51179.8711,
          "prevDate": "2026-10-06",
          "prevClose": 51521.2813,
          "change": -341.4102,
          "changePct": -0.66,
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
        "quotePrice": 51179.87,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 51179.8711
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
        "live": false,
        "latest": {
          "date": "2026-10-07",
          "close": 5.277,
          "prevDate": "2026-10-06",
          "prevClose": 5.269,
          "change": 0.008,
          "changePct": 0.15,
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
        "quotePrice": 5.277,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 5.277
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
        "live": false,
        "latest": {
          "date": "2026-10-07",
          "close": 5.661,
          "prevDate": "2026-10-06",
          "prevClose": 5.641,
          "change": 0.02,
          "changePct": 0.35,
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
        "quotePrice": 5.661,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 5.661
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
        "live": false,
        "latest": {
          "date": "2026-10-07",
          "close": 5.021,
          "prevDate": "2026-10-06",
          "prevClose": 5.028,
          "change": -0.007,
          "changePct": -0.14,
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
        "quotePrice": 5.021,
        "series": [
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
          },
          {
            "date": "2026-10-07",
            "close": 5.021
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
        "close": 101.83,
        "prevClose": 102.17,
        "change": -0.34,
        "changePct": -0.33,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-07",
          "close": 102.167,
          "prevDate": "2026-10-06",
          "prevClose": 101.83,
          "change": 0.337,
          "changePct": 0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 101.83,
          "prevDate": "2026-10-05",
          "prevClose": 102.17,
          "change": -0.34,
          "changePct": -0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.167,
        "series": [
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
            "close": 101.83
          },
          {
            "date": "2026-10-07",
            "close": 102.167
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
        "close": 89.44,
        "prevClose": 89.43,
        "change": 0.01,
        "changePct": 0.01,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-07",
          "close": 89.62,
          "prevDate": "2026-10-06",
          "prevClose": 89.44,
          "change": 0.18,
          "changePct": 0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 89.44,
          "prevDate": "2026-10-05",
          "prevClose": 89.43,
          "change": 0.01,
          "changePct": 0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 89.62,
        "series": [
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
            "close": 89.44
          },
          {
            "date": "2026-10-07",
            "close": 89.62
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
        "close": 100.58,
        "prevClose": 100.32,
        "change": 0.26,
        "changePct": 0.26,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-07",
          "close": 101.95,
          "prevDate": "2026-10-06",
          "prevClose": 100.58,
          "change": 1.37,
          "changePct": 1.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 100.58,
          "prevDate": "2026-10-05",
          "prevClose": 100.32,
          "change": 0.26,
          "changePct": 0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.95,
        "series": [
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
            "close": 100.58
          },
          {
            "date": "2026-10-07",
            "close": 101.95
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
        "close": 4187.1001,
        "prevClose": 4156.7998,
        "change": 30.3003,
        "changePct": 0.73,
        "asOf": "2026-10-06",
        "prevAsOf": "2026-10-05",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-07",
          "close": 4160.7002,
          "prevDate": "2026-10-06",
          "prevClose": 4187.1001,
          "change": -26.3999,
          "changePct": -0.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-06",
          "close": 4187.1001,
          "prevDate": "2026-10-05",
          "prevClose": 4156.7998,
          "change": 30.3003,
          "changePct": 0.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4160.7,
        "series": [
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
            "close": 4187.1001
          },
          {
            "date": "2026-10-07",
            "close": 4160.7002
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
          "close": 158.022,
          "prevDate": "2026-10-07",
          "prevClose": 158.296,
          "change": -0.274,
          "changePct": -0.17,
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
        "quotePrice": 158.022,
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
            "close": 158.022
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
          "close": 6.7025,
          "prevDate": "2026-10-07",
          "prevClose": 6.7045,
          "change": -0.002,
          "changePct": -0.03,
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
        "quotePrice": 6.7025,
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
            "close": 6.7025
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
          "close": 31.88,
          "prevDate": "2026-10-07",
          "prevClose": 31.7769,
          "change": 0.1031,
          "changePct": 0.32,
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
        "quotePrice": 31.88,
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
            "close": 31.88
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
        "live": true,
        "latest": {
          "date": "2026-10-08",
          "close": 49421.2891,
          "prevDate": "2026-10-07",
          "prevClose": 49806.3711,
          "change": -385.082,
          "changePct": -0.77,
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
        "quotePrice": 49421.29,
        "series": [
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
          },
          {
            "date": "2026-10-08",
            "close": 49421.2891
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
