/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-25T20:23:15.476Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 8832.5,
        "prevClose": 9588.0498,
        "change": -755.5498,
        "changePct": -7.88,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 8708.9814,
          "prevDate": "2026-11-24",
          "prevClose": 8832.5,
          "change": -123.5186,
          "changePct": -1.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 8832.5,
          "prevDate": "2026-11-23",
          "prevClose": 9588.0498,
          "change": -755.5498,
          "changePct": -7.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 8708.981,
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
            "close": 8708.9814
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
        "close": 26.36,
        "prevClose": 26.62,
        "change": -0.26,
        "changePct": -0.98,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 27.87,
          "prevDate": "2026-11-24",
          "prevClose": 26.36,
          "change": 1.51,
          "changePct": 5.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 26.36,
          "prevDate": "2026-11-23",
          "prevClose": 26.62,
          "change": -0.26,
          "changePct": -0.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27.87,
        "series": [
          {
            "date": "2026-11-18",
            "close": 24.56
          },
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
            "close": 27.87
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
        "close": 7201.0898,
        "prevClose": 7237.1699,
        "change": -36.0801,
        "changePct": -0.5,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 7179.6899,
          "prevDate": "2026-11-24",
          "prevClose": 7201.0898,
          "change": -21.3999,
          "changePct": -0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 7201.0898,
          "prevDate": "2026-11-23",
          "prevClose": 7237.1699,
          "change": -36.0801,
          "changePct": -0.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7179.69,
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
            "close": 7179.6899
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
        "close": 23733.5391,
        "prevClose": 24089.5605,
        "change": -356.0214,
        "changePct": -1.48,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 23555.8066,
          "prevDate": "2026-11-24",
          "prevClose": 23733.5391,
          "change": -177.7325,
          "changePct": -0.75,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 23733.5391,
          "prevDate": "2026-11-23",
          "prevClose": 24089.5605,
          "change": -356.0214,
          "changePct": -1.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 23555.807,
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
            "close": 23555.8066
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
        "close": 50018.6992,
        "prevClose": 49595.3086,
        "change": 423.3906,
        "changePct": 0.85,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 50233.0898,
          "prevDate": "2026-11-24",
          "prevClose": 50018.6992,
          "change": 214.3906,
          "changePct": 0.43,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 50018.6992,
          "prevDate": "2026-11-23",
          "prevClose": 49595.3086,
          "change": 423.3906,
          "changePct": 0.85,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 50233.09,
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
            "close": 50233.0898
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
        "close": 103.81,
        "prevClose": 104.32,
        "change": -0.51,
        "changePct": -0.49,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 103.675,
          "prevDate": "2026-11-24",
          "prevClose": 103.81,
          "change": -0.135,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 103.81,
          "prevDate": "2026-11-23",
          "prevClose": 104.32,
          "change": -0.51,
          "changePct": -0.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.675,
        "series": [
          {
            "date": "2026-11-18",
            "close": 103.86
          },
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
            "close": 103.675
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
        "close": 82.05,
        "prevClose": 80.17,
        "change": 1.88,
        "changePct": 2.35,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 83.89,
          "prevDate": "2026-11-24",
          "prevClose": 82.05,
          "change": 1.84,
          "changePct": 2.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 82.05,
          "prevDate": "2026-11-23",
          "prevClose": 80.17,
          "change": 1.88,
          "changePct": 2.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 83.89,
        "series": [
          {
            "date": "2026-11-18",
            "close": 83.26
          },
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
            "close": 83.89
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
        "close": 91.4,
        "prevClose": 89.37,
        "change": 2.03,
        "changePct": 2.27,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 90.51,
          "prevDate": "2026-11-24",
          "prevClose": 91.4,
          "change": -0.89,
          "changePct": -0.97,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 91.4,
          "prevDate": "2026-11-23",
          "prevClose": 89.37,
          "change": 2.03,
          "changePct": 2.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 90.51,
        "series": [
          {
            "date": "2026-11-18",
            "close": 91.95
          },
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
            "close": 90.51
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
        "close": 3561.8999,
        "prevClose": 3651.3999,
        "change": -89.5,
        "changePct": -2.45,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 3592.3,
          "prevDate": "2026-11-24",
          "prevClose": 3561.8999,
          "change": 30.4001,
          "changePct": 0.85,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 3561.8999,
          "prevDate": "2026-11-23",
          "prevClose": 3651.3999,
          "change": -89.5,
          "changePct": -2.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3592.3,
        "series": [
          {
            "date": "2026-11-18",
            "close": 3741.8999
          },
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
            "close": 3592.3
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
        "close": 159.009,
        "prevClose": 158.931,
        "change": 0.078,
        "changePct": 0.05,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 159.227,
          "prevDate": "2026-11-24",
          "prevClose": 159.009,
          "change": 0.218,
          "changePct": 0.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 159.009,
          "prevDate": "2026-11-23",
          "prevClose": 158.931,
          "change": 0.078,
          "changePct": 0.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 159.227,
        "series": [
          {
            "date": "2026-11-18",
            "close": 159.504
          },
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
            "close": 159.227
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
        "close": 6.6643,
        "prevClose": 6.677,
        "change": -0.0127,
        "changePct": -0.19,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 6.6747,
          "prevDate": "2026-11-24",
          "prevClose": 6.6643,
          "change": 0.0104,
          "changePct": 0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 6.6643,
          "prevDate": "2026-11-23",
          "prevClose": 6.677,
          "change": -0.0127,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6747,
        "series": [
          {
            "date": "2026-11-18",
            "close": 6.6659
          },
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
            "close": 6.6747
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
        "close": 32.8485,
        "prevClose": 32.9546,
        "change": -0.1061,
        "changePct": -0.32,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-25",
          "close": 33.197,
          "prevDate": "2026-11-24",
          "prevClose": 32.8485,
          "change": 0.3485,
          "changePct": 1.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 32.8485,
          "prevDate": "2026-11-23",
          "prevClose": 32.9546,
          "change": -0.1061,
          "changePct": -0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 33.197,
        "series": [
          {
            "date": "2026-11-18",
            "close": 32.9108
          },
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
            "close": 33.197
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
        "close": 40122.3516,
        "prevClose": 36811.8906,
        "change": 3310.461,
        "changePct": 8.99,
        "asOf": "2026-11-24",
        "prevAsOf": "2026-11-23",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-24",
          "close": 40122.3516,
          "prevDate": "2026-11-23",
          "prevClose": 36811.8906,
          "change": 3310.461,
          "changePct": 8.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-24",
          "close": 40122.3516,
          "prevDate": "2026-11-23",
          "prevClose": 36811.8906,
          "change": 3310.461,
          "changePct": 8.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 38195.43,
        "series": [
          {
            "date": "2026-11-17",
            "close": 40092.1094
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
