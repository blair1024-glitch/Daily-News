/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-28T04:33:22.333Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 9186.7061,
        "prevClose": 8774.8604,
        "change": 411.8457,
        "changePct": 4.69,
        "asOf": "2026-11-27",
        "prevAsOf": "2026-11-25",
        "gapDays": 2,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-27",
          "close": 9186.7061,
          "prevDate": "2026-11-25",
          "prevClose": 8774.8604,
          "change": 411.8457,
          "changePct": 4.69,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-27",
          "close": 9186.7061,
          "prevDate": "2026-11-25",
          "prevClose": 8774.8604,
          "change": 411.8457,
          "changePct": 4.69,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 9186.706,
        "series": [
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
          },
          {
            "date": "2026-11-27",
            "close": 9186.7061
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
        "close": 23.81,
        "prevClose": 26.8,
        "change": -2.99,
        "changePct": -11.16,
        "asOf": "2026-11-27",
        "prevAsOf": "2026-11-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-27",
          "close": 23.81,
          "prevDate": "2026-11-26",
          "prevClose": 26.8,
          "change": -2.99,
          "changePct": -11.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-27",
          "close": 23.81,
          "prevDate": "2026-11-26",
          "prevClose": 26.8,
          "change": -2.99,
          "changePct": -11.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 23.81,
        "series": [
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
          },
          {
            "date": "2026-11-27",
            "close": 23.81
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
        "close": 7297.4902,
        "prevClose": 7182.7798,
        "change": 114.7104,
        "changePct": 1.6,
        "asOf": "2026-11-27",
        "prevAsOf": "2026-11-25",
        "gapDays": 2,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-27",
          "close": 7297.4902,
          "prevDate": "2026-11-25",
          "prevClose": 7182.7798,
          "change": 114.7104,
          "changePct": 1.6,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-27",
          "close": 7297.4902,
          "prevDate": "2026-11-25",
          "prevClose": 7182.7798,
          "change": 114.7104,
          "changePct": 1.6,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 7297.49,
        "series": [
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
          },
          {
            "date": "2026-11-27",
            "close": 7297.4902
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
        "close": 24129.5,
        "prevClose": 23585.8008,
        "change": 543.6992,
        "changePct": 2.31,
        "asOf": "2026-11-27",
        "prevAsOf": "2026-11-25",
        "gapDays": 2,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-27",
          "close": 24129.5,
          "prevDate": "2026-11-25",
          "prevClose": 23585.8008,
          "change": 543.6992,
          "changePct": 2.31,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-27",
          "close": 24129.5,
          "prevDate": "2026-11-25",
          "prevClose": 23585.8008,
          "change": 543.6992,
          "changePct": 2.31,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 24129.5,
        "series": [
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
          },
          {
            "date": "2026-11-27",
            "close": 24129.5
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
        "close": 50774.8984,
        "prevClose": 50182.9492,
        "change": 591.9492,
        "changePct": 1.18,
        "asOf": "2026-11-27",
        "prevAsOf": "2026-11-25",
        "gapDays": 2,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-27",
          "close": 50774.8984,
          "prevDate": "2026-11-25",
          "prevClose": 50182.9492,
          "change": 591.9492,
          "changePct": 1.18,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-27",
          "close": 50774.8984,
          "prevDate": "2026-11-25",
          "prevClose": 50182.9492,
          "change": 591.9492,
          "changePct": 1.18,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 50774.9,
        "series": [
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
          },
          {
            "date": "2026-11-27",
            "close": 50774.8984
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
        "close": 4.936,
        "prevClose": 4.848,
        "change": 0.088,
        "changePct": 1.82,
        "asOf": "2026-11-27",
        "prevAsOf": "2026-11-25",
        "gapDays": 2,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-27",
          "close": 4.936,
          "prevDate": "2026-11-25",
          "prevClose": 4.848,
          "change": 0.088,
          "changePct": 1.82,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-27",
          "close": 4.936,
          "prevDate": "2026-11-25",
          "prevClose": 4.848,
          "change": 0.088,
          "changePct": 1.82,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 4.936,
        "series": [
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
          },
          {
            "date": "2026-11-27",
            "close": 4.936
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
        "close": 5.325,
        "prevClose": 5.235,
        "change": 0.09,
        "changePct": 1.72,
        "asOf": "2026-11-27",
        "prevAsOf": "2026-11-25",
        "gapDays": 2,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-27",
          "close": 5.325,
          "prevDate": "2026-11-25",
          "prevClose": 5.235,
          "change": 0.09,
          "changePct": 1.72,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-27",
          "close": 5.325,
          "prevDate": "2026-11-25",
          "prevClose": 5.235,
          "change": 0.09,
          "changePct": 1.72,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 5.325,
        "series": [
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
          },
          {
            "date": "2026-11-27",
            "close": 5.325
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
        "close": 4.746,
        "prevClose": 4.66,
        "change": 0.086,
        "changePct": 1.85,
        "asOf": "2026-11-27",
        "prevAsOf": "2026-11-25",
        "gapDays": 2,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-27",
          "close": 4.746,
          "prevDate": "2026-11-25",
          "prevClose": 4.66,
          "change": 0.086,
          "changePct": 1.85,
          "gapDays": 2,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-27",
          "close": 4.746,
          "prevDate": "2026-11-25",
          "prevClose": 4.66,
          "change": 0.086,
          "changePct": 1.85,
          "gapDays": 2,
          "gapSuspect": false
        },
        "quotePrice": 4.746,
        "series": [
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
          },
          {
            "date": "2026-11-27",
            "close": 4.746
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
          "date": "2026-11-27",
          "close": 104.014,
          "prevDate": "2026-11-25",
          "prevClose": 103.67,
          "change": 0.344,
          "changePct": 0.33,
          "gapDays": 2,
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
        "quotePrice": 104.014,
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
            "date": "2026-11-27",
            "close": 104.014
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
          "date": "2026-11-27",
          "close": 83.08,
          "prevDate": "2026-11-25",
          "prevClose": 83.68,
          "change": -0.6,
          "changePct": -0.72,
          "gapDays": 2,
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
        "quotePrice": 83.08,
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
            "date": "2026-11-27",
            "close": 83.08
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
          "date": "2026-11-27",
          "close": 90.84,
          "prevDate": "2026-11-25",
          "prevClose": 94.61,
          "change": -3.77,
          "changePct": -3.98,
          "gapDays": 2,
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
        "quotePrice": 90.84,
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
            "date": "2026-11-27",
            "close": 90.84
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
          "date": "2026-11-27",
          "close": 3668.5,
          "prevDate": "2026-11-25",
          "prevClose": 3535.8,
          "change": 132.7,
          "changePct": 3.75,
          "gapDays": 2,
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
        "quotePrice": 3668.5,
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
            "date": "2026-11-27",
            "close": 3668.5
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
        "close": 159.215,
        "prevClose": 159.262,
        "change": -0.047,
        "changePct": -0.03,
        "asOf": "2026-11-26",
        "prevAsOf": "2026-11-25",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-27",
          "close": 159.281,
          "prevDate": "2026-11-26",
          "prevClose": 159.215,
          "change": 0.066,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-26",
          "close": 159.215,
          "prevDate": "2026-11-25",
          "prevClose": 159.262,
          "change": -0.047,
          "changePct": -0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 159.515,
        "series": [
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
            "close": 159.215
          },
          {
            "date": "2026-11-27",
            "close": 159.281
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
        "prevClose": 6.664,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-11-27",
        "prevAsOf": "2026-11-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-28",
          "close": 6.6541,
          "prevDate": "2026-11-27",
          "prevClose": 6.664,
          "change": -0.0099,
          "changePct": -0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-27",
          "close": 6.664,
          "prevDate": "2026-11-26",
          "prevClose": 6.664,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6541,
        "series": [
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
            "close": 6.664
          },
          {
            "date": "2026-11-27",
            "close": 6.664
          },
          {
            "date": "2026-11-28",
            "close": 6.6541
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
        "close": 33.189,
        "prevClose": 32.921,
        "change": 0.268,
        "changePct": 0.81,
        "asOf": "2026-11-26",
        "prevAsOf": "2026-11-25",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-27",
          "close": 32.9179,
          "prevDate": "2026-11-26",
          "prevClose": 33.189,
          "change": -0.2711,
          "changePct": -0.82,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-26",
          "close": 33.189,
          "prevDate": "2026-11-25",
          "prevClose": 32.921,
          "change": 0.268,
          "changePct": 0.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.979,
        "series": [
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
            "close": 33.189
          },
          {
            "date": "2026-11-27",
            "close": 32.9179
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
        "close": 39308.0781,
        "prevClose": 39151.8086,
        "change": 156.2695,
        "changePct": 0.4,
        "asOf": "2026-11-27",
        "prevAsOf": "2026-11-26",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-27",
          "close": 39308.0781,
          "prevDate": "2026-11-26",
          "prevClose": 39151.8086,
          "change": 156.2695,
          "changePct": 0.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-27",
          "close": 39308.0781,
          "prevDate": "2026-11-26",
          "prevClose": 39151.8086,
          "change": 156.2695,
          "changePct": 0.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 39308.08,
        "series": [
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
          },
          {
            "date": "2026-11-26",
            "close": 39151.8086
          },
          {
            "date": "2026-11-27",
            "close": 39308.0781
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
