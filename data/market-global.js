/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-09T17:21:29.440Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12623.71,
        "prevClose": 13066.1504,
        "change": -442.4404,
        "changePct": -3.39,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 12549.5566,
          "prevDate": "2026-10-08",
          "prevClose": 12623.71,
          "change": -74.1534,
          "changePct": -0.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 12623.71,
          "prevDate": "2026-10-07",
          "prevClose": 13066.1504,
          "change": -442.4404,
          "changePct": -3.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12549.557,
        "series": [
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
            "close": 12623.71
          },
          {
            "date": "2026-10-09",
            "close": 12549.5566
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
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 14.88,
          "prevDate": "2026-10-08",
          "prevClose": 15.41,
          "change": -0.53,
          "changePct": -3.44,
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
        "quotePrice": 14.88,
        "series": [
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
          },
          {
            "date": "2026-10-09",
            "close": 14.88
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
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 7806.54,
          "prevDate": "2026-10-08",
          "prevClose": 7765.3599,
          "change": 41.1801,
          "changePct": 0.53,
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
        "quotePrice": 7806.54,
        "series": [
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
          },
          {
            "date": "2026-10-09",
            "close": 7806.54
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
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 27340.4746,
          "prevDate": "2026-10-08",
          "prevClose": 27193.3398,
          "change": 147.1348,
          "changePct": 0.54,
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
        "quotePrice": 27340.475,
        "series": [
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
          },
          {
            "date": "2026-10-09",
            "close": 27340.4746
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
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 51608.5508,
          "prevDate": "2026-10-08",
          "prevClose": 51231.6406,
          "change": 376.9102,
          "changePct": 0.74,
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
        "quotePrice": 51608.55,
        "series": [
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
          },
          {
            "date": "2026-10-09",
            "close": 51608.5508
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
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 5.248,
          "prevDate": "2026-10-08",
          "prevClose": 5.231,
          "change": 0.017,
          "changePct": 0.32,
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
        "quotePrice": 5.248,
        "series": [
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
          },
          {
            "date": "2026-10-09",
            "close": 5.248
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
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 5.604,
          "prevDate": "2026-10-08",
          "prevClose": 5.606,
          "change": -0.002,
          "changePct": -0.04,
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
        "quotePrice": 5.604,
        "series": [
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
          },
          {
            "date": "2026-10-09",
            "close": 5.604
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
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 5.021,
          "prevDate": "2026-10-08",
          "prevClose": 4.991,
          "change": 0.03,
          "changePct": 0.6,
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
        "quotePrice": 5.021,
        "series": [
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
          },
          {
            "date": "2026-10-09",
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
        "close": 102.14,
        "prevClose": 102.24,
        "change": -0.1,
        "changePct": -0.1,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 102.287,
          "prevDate": "2026-10-08",
          "prevClose": 102.14,
          "change": 0.147,
          "changePct": 0.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 102.14,
          "prevDate": "2026-10-07",
          "prevClose": 102.24,
          "change": -0.1,
          "changePct": -0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.287,
        "series": [
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
            "close": 102.14
          },
          {
            "date": "2026-10-09",
            "close": 102.287
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
        "close": 91.49,
        "prevClose": 88.28,
        "change": 3.21,
        "changePct": 3.64,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 91.28,
          "prevDate": "2026-10-08",
          "prevClose": 91.49,
          "change": -0.21,
          "changePct": -0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 91.49,
          "prevDate": "2026-10-07",
          "prevClose": 88.28,
          "change": 3.21,
          "changePct": 3.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 91.28,
        "series": [
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
            "close": 91.49
          },
          {
            "date": "2026-10-09",
            "close": 91.28
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
        "close": 104.28,
        "prevClose": 100.2,
        "change": 4.08,
        "changePct": 4.07,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 103.89,
          "prevDate": "2026-10-08",
          "prevClose": 104.28,
          "change": -0.39,
          "changePct": -0.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 104.28,
          "prevDate": "2026-10-07",
          "prevClose": 100.2,
          "change": 4.08,
          "changePct": 4.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.89,
        "series": [
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
            "close": 104.28
          },
          {
            "date": "2026-10-09",
            "close": 103.89
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
        "close": 4157,
        "prevClose": 4140.7002,
        "change": 16.2998,
        "changePct": 0.39,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 4214.7002,
          "prevDate": "2026-10-08",
          "prevClose": 4157,
          "change": 57.7002,
          "changePct": 1.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 4157,
          "prevDate": "2026-10-07",
          "prevClose": 4140.7002,
          "change": 16.2998,
          "changePct": 0.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4214.7,
        "series": [
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
            "close": 4157
          },
          {
            "date": "2026-10-09",
            "close": 4214.7002
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
          "close": 158.252,
          "prevDate": "2026-10-08",
          "prevClose": 158.06,
          "change": 0.192,
          "changePct": 0.12,
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
        "quotePrice": 158.252,
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
            "close": 158.252
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
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-09",
          "close": 6.682,
          "prevDate": "2026-10-08",
          "prevClose": 6.7045,
          "change": -0.0225,
          "changePct": -0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 6.7045,
          "prevDate": "2026-10-07",
          "prevClose": 6.7045,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.682,
        "series": [
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
          },
          {
            "date": "2026-10-09",
            "close": 6.682
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
          "close": 31.932,
          "prevDate": "2026-10-08",
          "prevClose": 31.8483,
          "change": 0.0837,
          "changePct": 0.26,
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
        "quotePrice": 31.932,
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
            "close": 31.932
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
        "close": 49313.4414,
        "prevClose": 49806.3711,
        "change": -492.9297,
        "changePct": -0.99,
        "asOf": "2026-10-08",
        "prevAsOf": "2026-10-07",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-08",
          "close": 49313.4414,
          "prevDate": "2026-10-07",
          "prevClose": 49806.3711,
          "change": -492.9297,
          "changePct": -0.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-08",
          "close": 49313.4414,
          "prevDate": "2026-10-07",
          "prevClose": 49806.3711,
          "change": -492.9297,
          "changePct": -0.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 49313.44,
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
            "close": 49313.4414
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
