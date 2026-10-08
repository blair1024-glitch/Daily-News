/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-08T23:39:49.764Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12623.7148,
        "prevClose": 13066.1504,
        "change": -442.4356,
        "changePct": -3.39,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-08",
          "close": 12623.7148,
          "prevDate": "2026-10-07",
          "prevClose": 13066.1504,
          "change": -442.4356,
          "changePct": -3.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 12623.7148,
          "prevDate": "2026-10-07",
          "prevClose": 13066.1504,
          "change": -442.4356,
          "changePct": -3.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12623.715,
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
            "close": 12623.7148
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
        "close": 15.41,
        "prevClose": 15.08,
        "change": 0.33,
        "changePct": 2.19,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-08",
          "close": 15.41,
          "prevDate": "2026-10-07",
          "prevClose": 15.08,
          "change": 0.33,
          "changePct": 2.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 15.41,
          "prevDate": "2026-10-07",
          "prevClose": 15.08,
          "change": 0.33,
          "changePct": 2.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.41,
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
            "close": 15.41
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
        "close": 7765.3599,
        "prevClose": 7801.77,
        "change": -36.4101,
        "changePct": -0.47,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-08",
          "close": 7765.3599,
          "prevDate": "2026-10-07",
          "prevClose": 7801.77,
          "change": -36.4101,
          "changePct": -0.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 7765.3599,
          "prevDate": "2026-10-07",
          "prevClose": 7801.77,
          "change": -36.4101,
          "changePct": -0.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7765.36,
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
            "close": 7765.3599
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
        "close": 27193.3398,
        "prevClose": 27538.6895,
        "change": -345.3497,
        "changePct": -1.25,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-08",
          "close": 27193.3398,
          "prevDate": "2026-10-07",
          "prevClose": 27538.6895,
          "change": -345.3497,
          "changePct": -1.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 27193.3398,
          "prevDate": "2026-10-07",
          "prevClose": 27538.6895,
          "change": -345.3497,
          "changePct": -1.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27193.34,
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
            "close": 27193.3398
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
        "close": 51231.6406,
        "prevClose": 51179.8711,
        "change": 51.7695,
        "changePct": 0.1,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-08",
          "close": 51231.6406,
          "prevDate": "2026-10-07",
          "prevClose": 51179.8711,
          "change": 51.7695,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 51231.6406,
          "prevDate": "2026-10-07",
          "prevClose": 51179.8711,
          "change": 51.7695,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51231.64,
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
            "close": 51231.6406
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
        "close": 5.231,
        "prevClose": 5.277,
        "change": -0.046,
        "changePct": -0.87,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-08",
          "close": 5.231,
          "prevDate": "2026-10-07",
          "prevClose": 5.277,
          "change": -0.046,
          "changePct": -0.87,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 5.231,
          "prevDate": "2026-10-07",
          "prevClose": 5.277,
          "change": -0.046,
          "changePct": -0.87,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.231,
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
            "close": 5.231
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
        "close": 5.606,
        "prevClose": 5.661,
        "change": -0.055,
        "changePct": -0.97,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-08",
          "close": 5.606,
          "prevDate": "2026-10-07",
          "prevClose": 5.661,
          "change": -0.055,
          "changePct": -0.97,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 5.606,
          "prevDate": "2026-10-07",
          "prevClose": 5.661,
          "change": -0.055,
          "changePct": -0.97,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.606,
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
            "close": 5.606
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
        "close": 4.991,
        "prevClose": 5.021,
        "change": -0.03,
        "changePct": -0.6,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-08",
          "close": 4.991,
          "prevDate": "2026-10-07",
          "prevClose": 5.021,
          "change": -0.03,
          "changePct": -0.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 4.991,
          "prevDate": "2026-10-07",
          "prevClose": 5.021,
          "change": -0.03,
          "changePct": -0.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.991,
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
            "close": 4.991
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
          "close": 102.115,
          "prevDate": "2026-10-07",
          "prevClose": 102.24,
          "change": -0.125,
          "changePct": -0.12,
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
        "quotePrice": 102.115,
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
            "close": 102.115
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
          "close": 91.17,
          "prevDate": "2026-10-07",
          "prevClose": 88.28,
          "change": 2.89,
          "changePct": 3.27,
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
        "quotePrice": 91.17,
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
            "close": 91.17
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
          "close": 103.8,
          "prevDate": "2026-10-07",
          "prevClose": 100.2,
          "change": 3.6,
          "changePct": 3.59,
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
        "quotePrice": 103.8,
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
            "close": 103.8
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
          "close": 4166.2998,
          "prevDate": "2026-10-07",
          "prevClose": 4140.7002,
          "change": 25.5996,
          "changePct": 0.62,
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
        "quotePrice": 4166.3,
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
            "close": 4166.2998
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
        "close": 158.06,
        "prevClose": 158.296,
        "change": -0.236,
        "changePct": -0.15,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 158.09,
          "prevDate": "2026-10-08",
          "prevClose": 158.06,
          "change": 0.03,
          "changePct": 0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 158.06,
          "prevDate": "2026-10-07",
          "prevClose": 158.296,
          "change": -0.236,
          "changePct": -0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.09,
        "series": [
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
            "close": 158.06
          },
          {
            "date": "2026-10-09",
            "close": 158.09
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
          "close": 6.7045,
          "prevDate": "2026-10-07",
          "prevClose": 6.7045,
          "change": 0,
          "changePct": 0,
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
        "quotePrice": 6.6938,
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
            "close": 6.7045
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
        "close": 31.8483,
        "prevClose": 31.7769,
        "change": 0.0714,
        "changePct": 0.22,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 31.923,
          "prevDate": "2026-10-08",
          "prevClose": 31.8483,
          "change": 0.0747,
          "changePct": 0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 31.8483,
          "prevDate": "2026-10-07",
          "prevClose": 31.7769,
          "change": 0.0714,
          "changePct": 0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.923,
        "series": [
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
            "close": 31.8483
          },
          {
            "date": "2026-10-09",
            "close": 31.923
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
