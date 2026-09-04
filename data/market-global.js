/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-04T14:49:51.463Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11352.1299,
        "prevClose": 11339.25,
        "change": 12.8799,
        "changePct": 0.11,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 11653.5684,
          "prevDate": "2026-09-03",
          "prevClose": 11352.1299,
          "change": 301.4385,
          "changePct": 2.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 11352.1299,
          "prevDate": "2026-09-02",
          "prevClose": 11339.25,
          "change": 12.8799,
          "changePct": 0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11653.568,
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
            "close": 11653.5684
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
        "close": 14.32,
        "prevClose": 15.2,
        "change": -0.88,
        "changePct": -5.79,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 14.12,
          "prevDate": "2026-09-03",
          "prevClose": 14.32,
          "change": -0.2,
          "changePct": -1.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 14.32,
          "prevDate": "2026-09-02",
          "prevClose": 15.2,
          "change": -0.88,
          "changePct": -5.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 14.12,
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
            "close": 14.12
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
        "close": 7747.71,
        "prevClose": 7666.6001,
        "change": 81.1099,
        "changePct": 1.06,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 7714.3101,
          "prevDate": "2026-09-03",
          "prevClose": 7747.71,
          "change": -33.3999,
          "changePct": -0.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 7747.71,
          "prevDate": "2026-09-02",
          "prevClose": 7666.6001,
          "change": 81.1099,
          "changePct": 1.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7714.31,
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
            "close": 7714.3101
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
        "close": 26584.0605,
        "prevClose": 26217.8301,
        "change": 366.2304,
        "changePct": 1.4,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 26491.2578,
          "prevDate": "2026-09-03",
          "prevClose": 26584.0605,
          "change": -92.8027,
          "changePct": -0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 26584.0605,
          "prevDate": "2026-09-02",
          "prevClose": 26217.8301,
          "change": 366.2304,
          "changePct": 1.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26491.258,
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
            "close": 26491.2578
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
        "close": 53686.1094,
        "prevClose": 53061.9492,
        "change": 624.1602,
        "changePct": 1.18,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 53351.8906,
          "prevDate": "2026-09-03",
          "prevClose": 53686.1094,
          "change": -334.2188,
          "changePct": -0.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 53686.1094,
          "prevDate": "2026-09-02",
          "prevClose": 53061.9492,
          "change": 624.1602,
          "changePct": 1.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 53351.89,
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
            "close": 53351.8906
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
        "close": 4.762,
        "prevClose": 4.796,
        "change": -0.034,
        "changePct": -0.71,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 4.766,
          "prevDate": "2026-09-03",
          "prevClose": 4.762,
          "change": 0.004,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 4.762,
          "prevDate": "2026-09-02",
          "prevClose": 4.796,
          "change": -0.034,
          "changePct": -0.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.766,
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
            "close": 4.766
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
        "close": 5.243,
        "prevClose": 5.267,
        "change": -0.024,
        "changePct": -0.46,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 5.231,
          "prevDate": "2026-09-03",
          "prevClose": 5.243,
          "change": -0.012,
          "changePct": -0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 5.243,
          "prevDate": "2026-09-02",
          "prevClose": 5.267,
          "change": -0.024,
          "changePct": -0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.231,
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
            "close": 5.231
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
        "close": 4.509,
        "prevClose": 4.552,
        "change": -0.043,
        "changePct": -0.94,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 4.531,
          "prevDate": "2026-09-03",
          "prevClose": 4.509,
          "change": 0.022,
          "changePct": 0.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 4.509,
          "prevDate": "2026-09-02",
          "prevClose": 4.552,
          "change": -0.043,
          "changePct": -0.94,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.531,
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
            "close": 4.531
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
          "close": 99.095,
          "prevDate": "2026-09-03",
          "prevClose": 99,
          "change": 0.095,
          "changePct": 0.1,
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
        "quotePrice": 99.095,
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
            "close": 99.095
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
          "close": 90.05,
          "prevDate": "2026-09-03",
          "prevClose": 91.3,
          "change": -1.25,
          "changePct": -1.37,
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
        "quotePrice": 90.05,
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
            "close": 90.05
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
          "close": 94.73,
          "prevDate": "2026-09-03",
          "prevClose": 95.52,
          "change": -0.79,
          "changePct": -0.83,
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
        "quotePrice": 94.73,
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
            "close": 94.73
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
          "close": 4476.7998,
          "prevDate": "2026-09-03",
          "prevClose": 4491.7002,
          "change": -14.9004,
          "changePct": -0.33,
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
        "quotePrice": 4476.8,
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
            "close": 4476.7998
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
          "close": 156.074,
          "prevDate": "2026-09-03",
          "prevClose": 158.923,
          "change": -2.849,
          "changePct": -1.79,
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
        "quotePrice": 156.074,
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
            "close": 156.074
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
        "prevClose": 6.7202,
        "change": -0.0012,
        "changePct": -0.02,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 6.6997,
          "prevDate": "2026-09-03",
          "prevClose": 6.719,
          "change": -0.0193,
          "changePct": -0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 6.719,
          "prevDate": "2026-09-02",
          "prevClose": 6.7202,
          "change": -0.0012,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6997,
        "series": [
          {
            "date": "2026-08-28",
            "close": 6.7225
          },
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
            "close": 6.6997
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
        "close": 31.7262,
        "prevClose": 31.675,
        "change": 0.0512,
        "changePct": 0.16,
        "asOf": "2026-09-03",
        "prevAsOf": "2026-09-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-04",
          "close": 31.62,
          "prevDate": "2026-09-03",
          "prevClose": 31.7262,
          "change": -0.1062,
          "changePct": -0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-03",
          "close": 31.7262,
          "prevDate": "2026-09-02",
          "prevClose": 31.675,
          "change": 0.0512,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.62,
        "series": [
          {
            "date": "2026-08-28",
            "close": 31.6609
          },
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
        "close": 46551.1289,
        "prevClose": 45857.6602,
        "change": 693.4687,
        "changePct": 1.51,
        "asOf": "2026-09-04",
        "prevAsOf": "2026-09-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-04",
          "close": 46551.1289,
          "prevDate": "2026-09-03",
          "prevClose": 45857.6602,
          "change": 693.4687,
          "changePct": 1.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-04",
          "close": 46551.1289,
          "prevDate": "2026-09-03",
          "prevClose": 45857.6602,
          "change": 693.4687,
          "changePct": 1.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46551.13,
        "series": [
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
          },
          {
            "date": "2026-09-04",
            "close": 46551.1289
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
