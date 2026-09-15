/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-15T01:11:30.089Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11131.2813,
        "prevClose": 11824,
        "change": -692.7187,
        "changePct": -5.86,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-14",
          "close": 11131.2813,
          "prevDate": "2026-09-11",
          "prevClose": 11824,
          "change": -692.7187,
          "changePct": -5.86,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 11131.2813,
          "prevDate": "2026-09-11",
          "prevClose": 11824,
          "change": -692.7187,
          "changePct": -5.86,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 11131.281,
        "series": [
          {
            "date": "2026-09-04",
            "close": 11735.2598
          },
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
            "close": 11131.2813
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
        "live": false,
        "latest": {
          "date": "2026-09-14",
          "close": 17.1,
          "prevDate": "2026-09-11",
          "prevClose": 15.84,
          "change": 1.26,
          "changePct": 7.95,
          "gapDays": 3,
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
        "quotePrice": 17.1,
        "series": [
          {
            "date": "2026-09-07",
            "close": 15.3
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-14",
          "close": 7619.98,
          "prevDate": "2026-09-11",
          "prevClose": 7656.98,
          "change": -37,
          "changePct": -0.48,
          "gapDays": 3,
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
        "quotePrice": 7619.98,
        "series": [
          {
            "date": "2026-09-04",
            "close": 7718.6001
          },
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
        "close": 26186.4141,
        "prevClose": 26333.0391,
        "change": -146.625,
        "changePct": -0.56,
        "asOf": "2026-09-14",
        "prevAsOf": "2026-09-11",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-14",
          "close": 26186.4141,
          "prevDate": "2026-09-11",
          "prevClose": 26333.0391,
          "change": -146.625,
          "changePct": -0.56,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-14",
          "close": 26186.4141,
          "prevDate": "2026-09-11",
          "prevClose": 26333.0391,
          "change": -146.625,
          "changePct": -0.56,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 26186.414,
        "series": [
          {
            "date": "2026-09-04",
            "close": 26506.9902
          },
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
            "close": 26186.4141
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
        "live": false,
        "latest": {
          "date": "2026-09-14",
          "close": 52421.1992,
          "prevDate": "2026-09-11",
          "prevClose": 52573.2891,
          "change": -152.0899,
          "changePct": -0.29,
          "gapDays": 3,
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
        "quotePrice": 52421.2,
        "series": [
          {
            "date": "2026-09-04",
            "close": 53414.25
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-14",
          "close": 4.961,
          "prevDate": "2026-09-11",
          "prevClose": 4.975,
          "change": -0.014,
          "changePct": -0.28,
          "gapDays": 3,
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
        "quotePrice": 4.961,
        "series": [
          {
            "date": "2026-09-04",
            "close": 4.784
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-14",
          "close": 5.329,
          "prevDate": "2026-09-11",
          "prevClose": 5.354,
          "change": -0.025,
          "changePct": -0.47,
          "gapDays": 3,
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
        "quotePrice": 5.329,
        "series": [
          {
            "date": "2026-09-04",
            "close": 5.246
          },
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
        "live": false,
        "latest": {
          "date": "2026-09-14",
          "close": 4.79,
          "prevDate": "2026-09-11",
          "prevClose": 4.791,
          "change": -0.001,
          "changePct": -0.02,
          "gapDays": 3,
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
        "quotePrice": 4.79,
        "series": [
          {
            "date": "2026-09-04",
            "close": 4.55
          },
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
        "close": 99.12,
        "prevClose": 99.09,
        "change": 0.03,
        "changePct": 0.03,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-14",
          "close": 99.551,
          "prevDate": "2026-09-11",
          "prevClose": 99.12,
          "change": 0.431,
          "changePct": 0.43,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 99.12,
          "prevDate": "2026-09-10",
          "prevClose": 99.09,
          "change": 0.03,
          "changePct": 0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.551,
        "series": [
          {
            "date": "2026-09-04",
            "close": 99.16
          },
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
            "close": 99.551
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
        "close": 100.05,
        "prevClose": 102.48,
        "change": -2.43,
        "changePct": -2.37,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-14",
          "close": 102.72,
          "prevDate": "2026-09-11",
          "prevClose": 100.05,
          "change": 2.67,
          "changePct": 2.67,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 100.05,
          "prevDate": "2026-09-10",
          "prevClose": 102.48,
          "change": -2.43,
          "changePct": -2.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.72,
        "series": [
          {
            "date": "2026-09-04",
            "close": 91.48
          },
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
            "close": 102.72
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
        "close": 104.61,
        "prevClose": 107.63,
        "change": -3.02,
        "changePct": -2.81,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-14",
          "close": 106.96,
          "prevDate": "2026-09-11",
          "prevClose": 104.61,
          "change": 2.35,
          "changePct": 2.25,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 104.61,
          "prevDate": "2026-09-10",
          "prevClose": 107.63,
          "change": -3.02,
          "changePct": -2.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 106.96,
        "series": [
          {
            "date": "2026-09-04",
            "close": 96.28
          },
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
            "close": 106.96
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
        "close": 4408.8999,
        "prevClose": 4364.5,
        "change": 44.3999,
        "changePct": 1.02,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-14",
          "close": 4332.2002,
          "prevDate": "2026-09-11",
          "prevClose": 4408.8999,
          "change": -76.6997,
          "changePct": -1.74,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 4408.8999,
          "prevDate": "2026-09-10",
          "prevClose": 4364.5,
          "change": 44.3999,
          "changePct": 1.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4332.2,
        "series": [
          {
            "date": "2026-09-04",
            "close": 4429.7998
          },
          {
            "date": "2026-09-08",
            "close": 4393.8999
          },
          {
            "date": "2026-09-09",
            "close": 4416
          },
          {
            "date": "2026-09-10",
            "close": 4364.5
          },
          {
            "date": "2026-09-11",
            "close": 4408.8999
          },
          {
            "date": "2026-09-14",
            "close": 4332.2002
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
          "close": 154.638,
          "prevDate": "2026-09-14",
          "prevClose": 153.424,
          "change": 1.214,
          "changePct": 0.79,
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
        "quotePrice": 154.638,
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
            "close": 154.638
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
          "close": 6.698,
          "prevDate": "2026-09-14",
          "prevClose": 6.708,
          "change": -0.01,
          "changePct": -0.15,
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
        "quotePrice": 6.698,
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
            "close": 6.698
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
          "close": 31.7,
          "prevDate": "2026-09-14",
          "prevClose": 31.6762,
          "change": 0.0238,
          "changePct": 0.08,
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
        "quotePrice": 31.7,
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
            "close": 31.7
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
        "close": 46184.8516,
        "prevClose": 46940.4883,
        "change": -755.6367,
        "changePct": -1.61,
        "asOf": "2026-09-11",
        "prevAsOf": "2026-09-10",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-11",
          "close": 46184.8516,
          "prevDate": "2026-09-10",
          "prevClose": 46940.4883,
          "change": -755.6367,
          "changePct": -1.61,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-11",
          "close": 46184.8516,
          "prevDate": "2026-09-10",
          "prevClose": 46940.4883,
          "change": -755.6367,
          "changePct": -1.61,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 45862.52,
        "series": [
          {
            "date": "2026-09-04",
            "close": 46551.1289
          },
          {
            "date": "2026-09-07",
            "close": 47326.2695
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
