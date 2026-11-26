/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-26T19:59:47.226Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 8774.8604,
        "prevClose": 8832.5,
        "change": -57.6396,
        "changePct": -0.65,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-25",
          "close": 8774.8604,
          "prevDate": "2026-11-24",
          "prevClose": 8832.5,
          "change": -57.6396,
          "changePct": -0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 8774.8604,
          "prevDate": "2026-11-24",
          "prevClose": 8832.5,
          "change": -57.6396,
          "changePct": -0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 8774.862,
        "series": [
          {
            "date": "2026-11-18",
            "close": 9652.7998
          },
          {
            "date": "2026-11-19",
            "close": 9419.7197
          },
          {
            "date": "2026-11-20",
            "close": 8408.5898
          },
          {
            "date": "2026-11-23",
            "close": 9588.0498
          },
          {
            "date": "2026-11-24",
            "close": 8832.5
          },
          {
            "date": "2026-11-25",
            "close": 8774.8604
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
        "close": 28.29,
        "prevClose": 26.36,
        "change": 1.93,
        "changePct": 7.32,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-26",
          "close": 26.8,
          "prevDate": "2026-11-25",
          "prevClose": 28.29,
          "change": -1.49,
          "changePct": -5.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 28.29,
          "prevDate": "2026-11-24",
          "prevClose": 26.36,
          "change": 1.93,
          "changePct": 7.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26.8,
        "series": [
          {
            "date": "2026-11-19",
            "close": 28.44
          },
          {
            "date": "2026-11-20",
            "close": 35.89
          },
          {
            "date": "2026-11-23",
            "close": 26.62
          },
          {
            "date": "2026-11-24",
            "close": 26.36
          },
          {
            "date": "2026-11-25",
            "close": 28.29
          },
          {
            "date": "2026-11-26",
            "close": 26.8
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
        "close": 7182.7798,
        "prevClose": 7201.0898,
        "change": -18.31,
        "changePct": -0.25,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-25",
          "close": 7182.7798,
          "prevDate": "2026-11-24",
          "prevClose": 7201.0898,
          "change": -18.31,
          "changePct": -0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 7182.7798,
          "prevDate": "2026-11-24",
          "prevClose": 7201.0898,
          "change": -18.31,
          "changePct": -0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7182.78,
        "series": [
          {
            "date": "2026-11-18",
            "close": 7323.6299
          },
          {
            "date": "2026-11-19",
            "close": 7175.8301
          },
          {
            "date": "2026-11-20",
            "close": 6910.3901
          },
          {
            "date": "2026-11-23",
            "close": 7237.1699
          },
          {
            "date": "2026-11-24",
            "close": 7201.0898
          },
          {
            "date": "2026-11-25",
            "close": 7182.7798
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
        "close": 23585.8008,
        "prevClose": 23733.5391,
        "change": -147.7383,
        "changePct": -0.62,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-25",
          "close": 23585.8008,
          "prevDate": "2026-11-24",
          "prevClose": 23733.5391,
          "change": -147.7383,
          "changePct": -0.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 23585.8008,
          "prevDate": "2026-11-24",
          "prevClose": 23733.5391,
          "change": -147.7383,
          "changePct": -0.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 23585.803,
        "series": [
          {
            "date": "2026-11-18",
            "close": 24429.8809
          },
          {
            "date": "2026-11-19",
            "close": 23879.1992
          },
          {
            "date": "2026-11-20",
            "close": 22617.7305
          },
          {
            "date": "2026-11-23",
            "close": 24089.5605
          },
          {
            "date": "2026-11-24",
            "close": 23733.5391
          },
          {
            "date": "2026-11-25",
            "close": 23585.8008
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
        "close": 50182.9492,
        "prevClose": 50018.6992,
        "change": 164.25,
        "changePct": 0.33,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-25",
          "close": 50182.9492,
          "prevDate": "2026-11-24",
          "prevClose": 50018.6992,
          "change": 164.25,
          "changePct": 0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 50182.9492,
          "prevDate": "2026-11-24",
          "prevClose": 50018.6992,
          "change": 164.25,
          "changePct": 0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 50182.95,
        "series": [
          {
            "date": "2026-11-18",
            "close": 50198.1719
          },
          {
            "date": "2026-11-19",
            "close": 49097.0586
          },
          {
            "date": "2026-11-20",
            "close": 48147.3281
          },
          {
            "date": "2026-11-23",
            "close": 49595.3086
          },
          {
            "date": "2026-11-24",
            "close": 50018.6992
          },
          {
            "date": "2026-11-25",
            "close": 50182.9492
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
        "close": 4.848,
        "prevClose": 4.904,
        "change": -0.056,
        "changePct": -1.14,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-25",
          "close": 4.848,
          "prevDate": "2026-11-24",
          "prevClose": 4.904,
          "change": -0.056,
          "changePct": -1.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 4.848,
          "prevDate": "2026-11-24",
          "prevClose": 4.904,
          "change": -0.056,
          "changePct": -1.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.848,
        "series": [
          {
            "date": "2026-11-18",
            "close": 5.066
          },
          {
            "date": "2026-11-19",
            "close": 5.052
          },
          {
            "date": "2026-11-20",
            "close": 4.912
          },
          {
            "date": "2026-11-23",
            "close": 4.918
          },
          {
            "date": "2026-11-24",
            "close": 4.904
          },
          {
            "date": "2026-11-25",
            "close": 4.848
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
        "close": 5.235,
        "prevClose": 5.292,
        "change": -0.057,
        "changePct": -1.08,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-25",
          "close": 5.235,
          "prevDate": "2026-11-24",
          "prevClose": 5.292,
          "change": -0.057,
          "changePct": -1.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 5.235,
          "prevDate": "2026-11-24",
          "prevClose": 5.292,
          "change": -0.057,
          "changePct": -1.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.235,
        "series": [
          {
            "date": "2026-11-18",
            "close": 5.412
          },
          {
            "date": "2026-11-19",
            "close": 5.401
          },
          {
            "date": "2026-11-20",
            "close": 5.303
          },
          {
            "date": "2026-11-23",
            "close": 5.294
          },
          {
            "date": "2026-11-24",
            "close": 5.292
          },
          {
            "date": "2026-11-25",
            "close": 5.235
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
        "close": 4.66,
        "prevClose": 4.712,
        "change": -0.052,
        "changePct": -1.1,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-25",
          "close": 4.66,
          "prevDate": "2026-11-24",
          "prevClose": 4.712,
          "change": -0.052,
          "changePct": -1.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 4.66,
          "prevDate": "2026-11-24",
          "prevClose": 4.712,
          "change": -0.052,
          "changePct": -1.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.66,
        "series": [
          {
            "date": "2026-11-18",
            "close": 4.884
          },
          {
            "date": "2026-11-19",
            "close": 4.866
          },
          {
            "date": "2026-11-20",
            "close": 4.701
          },
          {
            "date": "2026-11-23",
            "close": 4.728
          },
          {
            "date": "2026-11-24",
            "close": 4.712
          },
          {
            "date": "2026-11-25",
            "close": 4.66
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
        "close": 103.67,
        "prevClose": 103.81,
        "change": -0.14,
        "changePct": -0.13,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-26",
          "close": 103.776,
          "prevDate": "2026-11-25",
          "prevClose": 103.67,
          "change": 0.106,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 103.67,
          "prevDate": "2026-11-24",
          "prevClose": 103.81,
          "change": -0.14,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.776,
        "series": [
          {
            "date": "2026-11-19",
            "close": 103.9
          },
          {
            "date": "2026-11-20",
            "close": 103.81
          },
          {
            "date": "2026-11-23",
            "close": 104.32
          },
          {
            "date": "2026-11-24",
            "close": 103.81
          },
          {
            "date": "2026-11-25",
            "close": 103.67
          },
          {
            "date": "2026-11-26",
            "close": 103.776
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
        "close": 83.68,
        "prevClose": 82.05,
        "change": 1.63,
        "changePct": 1.99,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-26",
          "close": 84.91,
          "prevDate": "2026-11-25",
          "prevClose": 83.68,
          "change": 1.23,
          "changePct": 1.47,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 83.68,
          "prevDate": "2026-11-24",
          "prevClose": 82.05,
          "change": 1.63,
          "changePct": 1.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 84.91,
        "series": [
          {
            "date": "2026-11-19",
            "close": 83.21
          },
          {
            "date": "2026-11-20",
            "close": 83.98
          },
          {
            "date": "2026-11-23",
            "close": 80.17
          },
          {
            "date": "2026-11-24",
            "close": 82.05
          },
          {
            "date": "2026-11-25",
            "close": 83.68
          },
          {
            "date": "2026-11-26",
            "close": 84.91
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
        "close": 94.61,
        "prevClose": 91.4,
        "change": 3.21,
        "changePct": 3.51,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-26",
          "close": 91.73,
          "prevDate": "2026-11-25",
          "prevClose": 94.61,
          "change": -2.88,
          "changePct": -3.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 94.61,
          "prevDate": "2026-11-24",
          "prevClose": 91.4,
          "change": 3.21,
          "changePct": 3.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 91.73,
        "series": [
          {
            "date": "2026-11-19",
            "close": 91.98
          },
          {
            "date": "2026-11-20",
            "close": 92.57
          },
          {
            "date": "2026-11-23",
            "close": 89.37
          },
          {
            "date": "2026-11-24",
            "close": 91.4
          },
          {
            "date": "2026-11-25",
            "close": 94.61
          },
          {
            "date": "2026-11-26",
            "close": 91.73
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
        "close": 3535.8,
        "prevClose": 3561.8999,
        "change": -26.0999,
        "changePct": -0.73,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-26",
          "close": 3593.3999,
          "prevDate": "2026-11-25",
          "prevClose": 3535.8,
          "change": 57.5999,
          "changePct": 1.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 3535.8,
          "prevDate": "2026-11-24",
          "prevClose": 3561.8999,
          "change": -26.0999,
          "changePct": -0.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3593.4,
        "series": [
          {
            "date": "2026-11-19",
            "close": 3685.5
          },
          {
            "date": "2026-11-20",
            "close": 3515.3999
          },
          {
            "date": "2026-11-23",
            "close": 3651.3999
          },
          {
            "date": "2026-11-24",
            "close": 3561.8999
          },
          {
            "date": "2026-11-25",
            "close": 3535.8
          },
          {
            "date": "2026-11-26",
            "close": 3593.3999
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
        "close": 159.262,
        "prevClose": 159.009,
        "change": 0.253,
        "changePct": 0.16,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-26",
          "close": 159.26,
          "prevDate": "2026-11-25",
          "prevClose": 159.262,
          "change": -0.002,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 159.262,
          "prevDate": "2026-11-24",
          "prevClose": 159.009,
          "change": 0.253,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 159.26,
        "series": [
          {
            "date": "2026-11-19",
            "close": 159.381
          },
          {
            "date": "2026-11-20",
            "close": 159.707
          },
          {
            "date": "2026-11-23",
            "close": 158.931
          },
          {
            "date": "2026-11-24",
            "close": 159.009
          },
          {
            "date": "2026-11-25",
            "close": 159.262
          },
          {
            "date": "2026-11-26",
            "close": 159.26
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
        "close": 6.664,
        "prevClose": 6.6643,
        "change": -0.0003,
        "changePct": 0,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-26",
          "close": 6.6592,
          "prevDate": "2026-11-25",
          "prevClose": 6.664,
          "change": -0.0048,
          "changePct": -0.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 6.664,
          "prevDate": "2026-11-24",
          "prevClose": 6.6643,
          "change": -0.0003,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6592,
        "series": [
          {
            "date": "2026-11-19",
            "close": 6.6676
          },
          {
            "date": "2026-11-20",
            "close": 6.6665
          },
          {
            "date": "2026-11-23",
            "close": 6.677
          },
          {
            "date": "2026-11-24",
            "close": 6.6643
          },
          {
            "date": "2026-11-25",
            "close": 6.664
          },
          {
            "date": "2026-11-26",
            "close": 6.6592
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
        "close": 32.921,
        "prevClose": 32.8485,
        "change": 0.0725,
        "changePct": 0.22,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-26",
          "close": 32.938,
          "prevDate": "2026-11-25",
          "prevClose": 32.921,
          "change": 0.017,
          "changePct": 0.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 32.921,
          "prevDate": "2026-11-24",
          "prevClose": 32.8485,
          "change": 0.0725,
          "changePct": 0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.938,
        "series": [
          {
            "date": "2026-11-19",
            "close": 32.9299
          },
          {
            "date": "2026-11-20",
            "close": 33.0263
          },
          {
            "date": "2026-11-23",
            "close": 32.9546
          },
          {
            "date": "2026-11-24",
            "close": 32.8485
          },
          {
            "date": "2026-11-25",
            "close": 32.921
          },
          {
            "date": "2026-11-26",
            "close": 32.938
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
        "close": 38195.4297,
        "prevClose": 40122.3516,
        "change": -1926.9219,
        "changePct": -4.8,
        "asOf": "2026-11-25",
        "prevAsOf": "2026-11-24",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-25",
          "close": 38195.4297,
          "prevDate": "2026-11-24",
          "prevClose": 40122.3516,
          "change": -1926.9219,
          "changePct": -4.8,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-25",
          "close": 38195.4297,
          "prevDate": "2026-11-24",
          "prevClose": 40122.3516,
          "change": -1926.9219,
          "changePct": -4.8,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 39151.81,
        "series": [
          {
            "date": "2026-11-18",
            "close": 40194.9102
          },
          {
            "date": "2026-11-19",
            "close": 38426.8906
          },
          {
            "date": "2026-11-20",
            "close": 36033.2891
          },
          {
            "date": "2026-11-23",
            "close": 36811.8906
          },
          {
            "date": "2026-11-24",
            "close": 40122.3516
          },
          {
            "date": "2026-11-25",
            "close": 38195.4297
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
