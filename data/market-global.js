/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-16T15:20:38.953Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11175.5498,
        "prevClose": 11131.2803,
        "change": 44.2695,
        "changePct": 0.4,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 11367.4932,
          "prevDate": "2026-09-15",
          "prevClose": 11175.5498,
          "change": 191.9434,
          "changePct": 1.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 11175.5498,
          "prevDate": "2026-09-14",
          "prevClose": 11131.2803,
          "change": 44.2695,
          "changePct": 0.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11367.493,
        "series": [
          {
            "date": "2026-09-09",
            "close": 11931.3203
          },
          {
            "date": "2026-09-10",
            "close": 11614.1699
          },
          {
            "date": "2026-09-11",
            "close": 11824
          },
          {
            "date": "2026-09-14",
            "close": 11131.2803
          },
          {
            "date": "2026-09-15",
            "close": 11175.5498
          },
          {
            "date": "2026-09-16",
            "close": 11367.4932
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
        "close": 17.2,
        "prevClose": 17.1,
        "change": 0.1,
        "changePct": 0.58,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 16.7,
          "prevDate": "2026-09-15",
          "prevClose": 17.2,
          "change": -0.5,
          "changePct": -2.91,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 17.2,
          "prevDate": "2026-09-14",
          "prevClose": 17.1,
          "change": 0.1,
          "changePct": 0.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 16.7,
        "series": [
          {
            "date": "2026-09-09",
            "close": 16.46
          },
          {
            "date": "2026-09-10",
            "close": 17.84
          },
          {
            "date": "2026-09-11",
            "close": 15.84
          },
          {
            "date": "2026-09-14",
            "close": 17.1
          },
          {
            "date": "2026-09-15",
            "close": 17.2
          },
          {
            "date": "2026-09-16",
            "close": 16.7
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
        "close": 7585.73,
        "prevClose": 7619.98,
        "change": -34.25,
        "changePct": -0.45,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 7616.77,
          "prevDate": "2026-09-15",
          "prevClose": 7585.73,
          "change": 31.04,
          "changePct": 0.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 7585.73,
          "prevDate": "2026-09-14",
          "prevClose": 7619.98,
          "change": -34.25,
          "changePct": -0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7616.77,
        "series": [
          {
            "date": "2026-09-09",
            "close": 7636.3599
          },
          {
            "date": "2026-09-10",
            "close": 7591.7002
          },
          {
            "date": "2026-09-11",
            "close": 7656.98
          },
          {
            "date": "2026-09-14",
            "close": 7619.98
          },
          {
            "date": "2026-09-15",
            "close": 7585.73
          },
          {
            "date": "2026-09-16",
            "close": 7616.77
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
        "close": 25981.5703,
        "prevClose": 26186.4102,
        "change": -204.8399,
        "changePct": -0.78,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 26196.1563,
          "prevDate": "2026-09-15",
          "prevClose": 25981.5703,
          "change": 214.586,
          "changePct": 0.83,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 25981.5703,
          "prevDate": "2026-09-14",
          "prevClose": 26186.4102,
          "change": -204.8399,
          "changePct": -0.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26196.156,
        "series": [
          {
            "date": "2026-09-09",
            "close": 26253.3398
          },
          {
            "date": "2026-09-10",
            "close": 26081.7207
          },
          {
            "date": "2026-09-11",
            "close": 26333.0391
          },
          {
            "date": "2026-09-14",
            "close": 26186.4102
          },
          {
            "date": "2026-09-15",
            "close": 25981.5703
          },
          {
            "date": "2026-09-16",
            "close": 26196.1563
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
        "close": 52093.1094,
        "prevClose": 52421.1992,
        "change": -328.0898,
        "changePct": -0.63,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 52091.75,
          "prevDate": "2026-09-15",
          "prevClose": 52093.1094,
          "change": -1.3594,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 52093.1094,
          "prevDate": "2026-09-14",
          "prevClose": 52421.1992,
          "change": -328.0898,
          "changePct": -0.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52091.75,
        "series": [
          {
            "date": "2026-09-09",
            "close": 52380.6602
          },
          {
            "date": "2026-09-10",
            "close": 52064.1016
          },
          {
            "date": "2026-09-11",
            "close": 52573.2891
          },
          {
            "date": "2026-09-14",
            "close": 52421.1992
          },
          {
            "date": "2026-09-15",
            "close": 52093.1094
          },
          {
            "date": "2026-09-16",
            "close": 52091.75
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
        "close": 4.996,
        "prevClose": 4.961,
        "change": 0.035,
        "changePct": 0.71,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 4.959,
          "prevDate": "2026-09-15",
          "prevClose": 4.996,
          "change": -0.037,
          "changePct": -0.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 4.996,
          "prevDate": "2026-09-14",
          "prevClose": 4.961,
          "change": 0.035,
          "changePct": 0.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.959,
        "series": [
          {
            "date": "2026-09-09",
            "close": 4.837
          },
          {
            "date": "2026-09-10",
            "close": 4.944
          },
          {
            "date": "2026-09-11",
            "close": 4.975
          },
          {
            "date": "2026-09-14",
            "close": 4.961
          },
          {
            "date": "2026-09-15",
            "close": 4.996
          },
          {
            "date": "2026-09-16",
            "close": 4.959
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
        "close": 5.364,
        "prevClose": 5.329,
        "change": 0.035,
        "changePct": 0.66,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 5.337,
          "prevDate": "2026-09-15",
          "prevClose": 5.364,
          "change": -0.027,
          "changePct": -0.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 5.364,
          "prevDate": "2026-09-14",
          "prevClose": 5.329,
          "change": 0.035,
          "changePct": 0.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.337,
        "series": [
          {
            "date": "2026-09-09",
            "close": 5.286
          },
          {
            "date": "2026-09-10",
            "close": 5.361
          },
          {
            "date": "2026-09-11",
            "close": 5.354
          },
          {
            "date": "2026-09-14",
            "close": 5.329
          },
          {
            "date": "2026-09-15",
            "close": 5.364
          },
          {
            "date": "2026-09-16",
            "close": 5.337
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
        "close": 4.826,
        "prevClose": 4.79,
        "change": 0.036,
        "changePct": 0.75,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 4.777,
          "prevDate": "2026-09-15",
          "prevClose": 4.826,
          "change": -0.049,
          "changePct": -1.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 4.826,
          "prevDate": "2026-09-14",
          "prevClose": 4.79,
          "change": 0.036,
          "changePct": 0.75,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.777,
        "series": [
          {
            "date": "2026-09-09",
            "close": 4.614
          },
          {
            "date": "2026-09-10",
            "close": 4.733
          },
          {
            "date": "2026-09-11",
            "close": 4.791
          },
          {
            "date": "2026-09-14",
            "close": 4.79
          },
          {
            "date": "2026-09-15",
            "close": 4.826
          },
          {
            "date": "2026-09-16",
            "close": 4.777
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
        "close": 99.65,
        "prevClose": 99.46,
        "change": 0.19,
        "changePct": 0.19,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 99.642,
          "prevDate": "2026-09-15",
          "prevClose": 99.65,
          "change": -0.008,
          "changePct": -0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 99.65,
          "prevDate": "2026-09-14",
          "prevClose": 99.46,
          "change": 0.19,
          "changePct": 0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.642,
        "series": [
          {
            "date": "2026-09-09",
            "close": 98.77
          },
          {
            "date": "2026-09-10",
            "close": 99.09
          },
          {
            "date": "2026-09-11",
            "close": 99.12
          },
          {
            "date": "2026-09-14",
            "close": 99.46
          },
          {
            "date": "2026-09-15",
            "close": 99.65
          },
          {
            "date": "2026-09-16",
            "close": 99.642
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
        "close": 105.83,
        "prevClose": 101.39,
        "change": 4.44,
        "changePct": 4.38,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 101.55,
          "prevDate": "2026-09-15",
          "prevClose": 105.83,
          "change": -4.28,
          "changePct": -4.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 105.83,
          "prevDate": "2026-09-14",
          "prevClose": 101.39,
          "change": 4.44,
          "changePct": 4.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.55,
        "series": [
          {
            "date": "2026-09-09",
            "close": 96.05
          },
          {
            "date": "2026-09-10",
            "close": 102.48
          },
          {
            "date": "2026-09-11",
            "close": 100.05
          },
          {
            "date": "2026-09-14",
            "close": 101.39
          },
          {
            "date": "2026-09-15",
            "close": 105.83
          },
          {
            "date": "2026-09-16",
            "close": 101.55
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
        "close": 108.75,
        "prevClose": 105.68,
        "change": 3.07,
        "changePct": 2.9,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 104.93,
          "prevDate": "2026-09-15",
          "prevClose": 108.75,
          "change": -3.82,
          "changePct": -3.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 108.75,
          "prevDate": "2026-09-14",
          "prevClose": 105.68,
          "change": 3.07,
          "changePct": 2.9,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 104.93,
        "series": [
          {
            "date": "2026-09-09",
            "close": 101.21
          },
          {
            "date": "2026-09-10",
            "close": 107.63
          },
          {
            "date": "2026-09-11",
            "close": 104.61
          },
          {
            "date": "2026-09-14",
            "close": 105.68
          },
          {
            "date": "2026-09-15",
            "close": 108.75
          },
          {
            "date": "2026-09-16",
            "close": 104.93
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
        "close": 4332.7998,
        "prevClose": 4351.8999,
        "change": -19.1001,
        "changePct": -0.44,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 4398.5,
          "prevDate": "2026-09-15",
          "prevClose": 4332.7998,
          "change": 65.7002,
          "changePct": 1.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 4332.7998,
          "prevDate": "2026-09-14",
          "prevClose": 4351.8999,
          "change": -19.1001,
          "changePct": -0.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4398.5,
        "series": [
          {
            "date": "2026-09-09",
            "close": 4460.7002
          },
          {
            "date": "2026-09-10",
            "close": 4407.2998
          },
          {
            "date": "2026-09-11",
            "close": 4408.8999
          },
          {
            "date": "2026-09-14",
            "close": 4351.8999
          },
          {
            "date": "2026-09-15",
            "close": 4332.7998
          },
          {
            "date": "2026-09-16",
            "close": 4398.5
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
        "close": 154.385,
        "prevClose": 153.424,
        "change": 0.961,
        "changePct": 0.63,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 155.063,
          "prevDate": "2026-09-15",
          "prevClose": 154.385,
          "change": 0.678,
          "changePct": 0.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 154.385,
          "prevDate": "2026-09-14",
          "prevClose": 153.424,
          "change": 0.961,
          "changePct": 0.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 155.063,
        "series": [
          {
            "date": "2026-09-09",
            "close": 153.478
          },
          {
            "date": "2026-09-10",
            "close": 153.573
          },
          {
            "date": "2026-09-11",
            "close": 154.482
          },
          {
            "date": "2026-09-14",
            "close": 153.424
          },
          {
            "date": "2026-09-15",
            "close": 154.385
          },
          {
            "date": "2026-09-16",
            "close": 155.063
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
        "close": 6.7082,
        "prevClose": 6.708,
        "change": 0.0002,
        "changePct": 0,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 6.6947,
          "prevDate": "2026-09-15",
          "prevClose": 6.7082,
          "change": -0.0135,
          "changePct": -0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 6.7082,
          "prevDate": "2026-09-14",
          "prevClose": 6.708,
          "change": 0.0002,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6947,
        "series": [
          {
            "date": "2026-09-09",
            "close": 6.7105
          },
          {
            "date": "2026-09-10",
            "close": 6.7105
          },
          {
            "date": "2026-09-11",
            "close": 6.7061
          },
          {
            "date": "2026-09-14",
            "close": 6.708
          },
          {
            "date": "2026-09-15",
            "close": 6.7082
          },
          {
            "date": "2026-09-16",
            "close": 6.6947
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
        "close": 31.7176,
        "prevClose": 31.6762,
        "change": 0.0414,
        "changePct": 0.13,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-16",
          "close": 31.755,
          "prevDate": "2026-09-15",
          "prevClose": 31.7176,
          "change": 0.0374,
          "changePct": 0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 31.7176,
          "prevDate": "2026-09-14",
          "prevClose": 31.6762,
          "change": 0.0414,
          "changePct": 0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.755,
        "series": [
          {
            "date": "2026-09-09",
            "close": 31.4992
          },
          {
            "date": "2026-09-10",
            "close": 31.464
          },
          {
            "date": "2026-09-11",
            "close": 31.635
          },
          {
            "date": "2026-09-14",
            "close": 31.6762
          },
          {
            "date": "2026-09-15",
            "close": 31.7176
          },
          {
            "date": "2026-09-16",
            "close": 31.755
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
        "close": 45848.8984,
        "prevClose": 45511.4883,
        "change": 337.4101,
        "changePct": 0.74,
        "asOf": "2026-09-16",
        "prevAsOf": "2026-09-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-16",
          "close": 45848.8984,
          "prevDate": "2026-09-15",
          "prevClose": 45511.4883,
          "change": 337.4101,
          "changePct": 0.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-16",
          "close": 45848.8984,
          "prevDate": "2026-09-15",
          "prevClose": 45511.4883,
          "change": 337.4101,
          "changePct": 0.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 45848.9,
        "series": [
          {
            "date": "2026-09-09",
            "close": 47183.3594
          },
          {
            "date": "2026-09-10",
            "close": 46940.4883
          },
          {
            "date": "2026-09-11",
            "close": 46184.8516
          },
          {
            "date": "2026-09-14",
            "close": 45862.5195
          },
          {
            "date": "2026-09-15",
            "close": 45511.4883
          },
          {
            "date": "2026-09-16",
            "close": 45848.8984
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
