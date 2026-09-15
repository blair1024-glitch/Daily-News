/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-15T15:27:29.999Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11131.2803,
        "prevClose": 11824,
        "change": -692.7197,
        "changePct": -5.86,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 11204.3936,
          "prevDate": "2026-09-14",
          "prevClose": 11131.2803,
          "change": 73.1133,
          "changePct": 0.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 11131.2803,
          "prevDate": "2026-09-11",
          "prevClose": 11824,
          "change": -692.7197,
          "changePct": -5.86,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 11204.394,
        "series": [
          {
            "date": "2026-09-08",
            "close": 11887.8701
          },
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
            "close": 11204.3936
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
        "close": 17.1,
        "prevClose": 15.84,
        "change": 1.26,
        "changePct": 7.95,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 17.75,
          "prevDate": "2026-09-14",
          "prevClose": 17.1,
          "change": 0.65,
          "changePct": 3.8,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 17.1,
          "prevDate": "2026-09-11",
          "prevClose": 15.84,
          "change": 1.26,
          "changePct": 7.95,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 17.75,
        "series": [
          {
            "date": "2026-09-08",
            "close": 15.72
          },
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
            "close": 17.75
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
        "close": 7619.98,
        "prevClose": 7656.98,
        "change": -37,
        "changePct": -0.48,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 7585.0898,
          "prevDate": "2026-09-14",
          "prevClose": 7619.98,
          "change": -34.8902,
          "changePct": -0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 7619.98,
          "prevDate": "2026-09-11",
          "prevClose": 7656.98,
          "change": -37,
          "changePct": -0.48,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7585.09,
        "series": [
          {
            "date": "2026-09-08",
            "close": 7673.52
          },
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
            "close": 7585.0898
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
        "close": 26186.4102,
        "prevClose": 26333.0391,
        "change": -146.6289,
        "changePct": -0.56,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 26006.5625,
          "prevDate": "2026-09-14",
          "prevClose": 26186.4102,
          "change": -179.8477,
          "changePct": -0.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 26186.4102,
          "prevDate": "2026-09-11",
          "prevClose": 26333.0391,
          "change": -146.6289,
          "changePct": -0.56,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 26006.562,
        "series": [
          {
            "date": "2026-09-08",
            "close": 26421.4102
          },
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
            "close": 26006.5625
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
        "close": 52421.1992,
        "prevClose": 52573.2891,
        "change": -152.0899,
        "changePct": -0.29,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 51957.4609,
          "prevDate": "2026-09-14",
          "prevClose": 52421.1992,
          "change": -463.7383,
          "changePct": -0.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 52421.1992,
          "prevDate": "2026-09-11",
          "prevClose": 52573.2891,
          "change": -152.0899,
          "changePct": -0.29,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 51957.46,
        "series": [
          {
            "date": "2026-09-08",
            "close": 52786.0703
          },
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
            "close": 51957.4609
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
        "close": 4.961,
        "prevClose": 4.975,
        "change": -0.014,
        "changePct": -0.28,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 4.996,
          "prevDate": "2026-09-14",
          "prevClose": 4.961,
          "change": 0.035,
          "changePct": 0.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 4.961,
          "prevDate": "2026-09-11",
          "prevClose": 4.975,
          "change": -0.014,
          "changePct": -0.28,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.996,
        "series": [
          {
            "date": "2026-09-08",
            "close": 4.806
          },
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
        "close": 5.329,
        "prevClose": 5.354,
        "change": -0.025,
        "changePct": -0.47,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 5.365,
          "prevDate": "2026-09-14",
          "prevClose": 5.329,
          "change": 0.036,
          "changePct": 0.68,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 5.329,
          "prevDate": "2026-09-11",
          "prevClose": 5.354,
          "change": -0.025,
          "changePct": -0.47,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.365,
        "series": [
          {
            "date": "2026-09-08",
            "close": 5.264
          },
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
            "close": 5.365
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
        "close": 4.79,
        "prevClose": 4.791,
        "change": -0.001,
        "changePct": -0.02,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 4.821,
          "prevDate": "2026-09-14",
          "prevClose": 4.79,
          "change": 0.031,
          "changePct": 0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 4.79,
          "prevDate": "2026-09-11",
          "prevClose": 4.791,
          "change": -0.001,
          "changePct": -0.02,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.821,
        "series": [
          {
            "date": "2026-09-08",
            "close": 4.573
          },
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
            "close": 4.821
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
        "close": 99.46,
        "prevClose": 99.12,
        "change": 0.34,
        "changePct": 0.34,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 99.625,
          "prevDate": "2026-09-14",
          "prevClose": 99.46,
          "change": 0.165,
          "changePct": 0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 99.46,
          "prevDate": "2026-09-11",
          "prevClose": 99.12,
          "change": 0.34,
          "changePct": 0.34,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 99.625,
        "series": [
          {
            "date": "2026-09-08",
            "close": 98.84
          },
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
            "close": 99.625
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
        "close": 101.39,
        "prevClose": 100.05,
        "change": 1.34,
        "changePct": 1.34,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 104.81,
          "prevDate": "2026-09-14",
          "prevClose": 101.39,
          "change": 3.42,
          "changePct": 3.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 101.39,
          "prevDate": "2026-09-11",
          "prevClose": 100.05,
          "change": 1.34,
          "changePct": 1.34,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 104.81,
        "series": [
          {
            "date": "2026-09-08",
            "close": 93.03
          },
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
            "close": 104.81
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
        "close": 105.68,
        "prevClose": 104.61,
        "change": 1.07,
        "changePct": 1.02,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 103.13,
          "prevDate": "2026-09-14",
          "prevClose": 105.68,
          "change": -2.55,
          "changePct": -2.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 105.68,
          "prevDate": "2026-09-11",
          "prevClose": 104.61,
          "change": 1.07,
          "changePct": 1.02,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 103.13,
        "series": [
          {
            "date": "2026-09-08",
            "close": 97.92
          },
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
            "close": 103.13
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
        "close": 4351.8999,
        "prevClose": 4408.8999,
        "change": -57,
        "changePct": -1.29,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 4326.3999,
          "prevDate": "2026-09-14",
          "prevClose": 4351.8999,
          "change": -25.5,
          "changePct": -0.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 4351.8999,
          "prevDate": "2026-09-11",
          "prevClose": 4408.8999,
          "change": -57,
          "changePct": -1.29,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4326.4,
        "series": [
          {
            "date": "2026-09-08",
            "close": 4439
          },
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
            "close": 4326.3999
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
        "close": 153.424,
        "prevClose": 154.482,
        "change": -1.058,
        "changePct": -0.68,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 155.101,
          "prevDate": "2026-09-14",
          "prevClose": 153.424,
          "change": 1.677,
          "changePct": 1.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 153.424,
          "prevDate": "2026-09-11",
          "prevClose": 154.482,
          "change": -1.058,
          "changePct": -0.68,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 155.101,
        "series": [
          {
            "date": "2026-09-08",
            "close": 153.855
          },
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
            "close": 155.101
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
        "close": 6.708,
        "prevClose": 6.7061,
        "change": 0.0019,
        "changePct": 0.03,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 6.6999,
          "prevDate": "2026-09-14",
          "prevClose": 6.708,
          "change": -0.0081,
          "changePct": -0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 6.708,
          "prevDate": "2026-09-11",
          "prevClose": 6.7061,
          "change": 0.0019,
          "changePct": 0.03,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.6999,
        "series": [
          {
            "date": "2026-09-08",
            "close": 6.7108
          },
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
            "close": 6.6999
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
        "close": 31.6762,
        "prevClose": 31.635,
        "change": 0.0412,
        "changePct": 0.13,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-15",
          "close": 31.853,
          "prevDate": "2026-09-14",
          "prevClose": 31.6762,
          "change": 0.1768,
          "changePct": 0.56,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 31.6762,
          "prevDate": "2026-09-11",
          "prevClose": 31.635,
          "change": 0.0412,
          "changePct": 0.13,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 31.853,
        "series": [
          {
            "date": "2026-09-08",
            "close": 31.5049
          },
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
            "close": 31.853
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
        "close": 45511.4883,
        "prevClose": 45862.5195,
        "change": -351.0312,
        "changePct": -0.77,
        "asOf": "2026-09-15",
        "prevAsOf": "2026-09-14",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-15",
          "close": 45511.4883,
          "prevDate": "2026-09-14",
          "prevClose": 45862.5195,
          "change": -351.0312,
          "changePct": -0.77,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-15",
          "close": 45511.4883,
          "prevDate": "2026-09-14",
          "prevClose": 45862.5195,
          "change": -351.0312,
          "changePct": -0.77,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 45511.49,
        "series": [
          {
            "date": "2026-09-08",
            "close": 47105.7813
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
