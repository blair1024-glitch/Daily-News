/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-09-18T14:48:11.692Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11599.4902,
        "prevClose": 11246.1104,
        "change": 353.3798,
        "changePct": 3.14,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 11738.9795,
          "prevDate": "2026-09-17",
          "prevClose": 11599.4902,
          "change": 139.4893,
          "changePct": 1.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 11599.4902,
          "prevDate": "2026-09-16",
          "prevClose": 11246.1104,
          "change": 353.3798,
          "changePct": 3.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11738.979,
        "series": [
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
            "close": 11246.1104
          },
          {
            "date": "2026-09-17",
            "close": 11599.4902
          },
          {
            "date": "2026-09-18",
            "close": 11738.9795
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
        "close": 15.44,
        "prevClose": 17.71,
        "change": -2.27,
        "changePct": -12.82,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 15.41,
          "prevDate": "2026-09-17",
          "prevClose": 15.44,
          "change": -0.03,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 15.44,
          "prevDate": "2026-09-16",
          "prevClose": 17.71,
          "change": -2.27,
          "changePct": -12.82,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.41,
        "series": [
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
            "close": 17.71
          },
          {
            "date": "2026-09-17",
            "close": 15.44
          },
          {
            "date": "2026-09-18",
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
        "close": 7637.7598,
        "prevClose": 7551.8101,
        "change": 85.9497,
        "changePct": 1.14,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 7622.21,
          "prevDate": "2026-09-17",
          "prevClose": 7637.7598,
          "change": -15.5498,
          "changePct": -0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 7637.7598,
          "prevDate": "2026-09-16",
          "prevClose": 7551.8101,
          "change": 85.9497,
          "changePct": 1.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7622.21,
        "series": [
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
            "close": 7551.8101
          },
          {
            "date": "2026-09-17",
            "close": 7637.7598
          },
          {
            "date": "2026-09-18",
            "close": 7622.21
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
        "close": 26418.3008,
        "prevClose": 25978.4297,
        "change": 439.8711,
        "changePct": 1.69,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 26389.1426,
          "prevDate": "2026-09-17",
          "prevClose": 26418.3008,
          "change": -29.1582,
          "changePct": -0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 26418.3008,
          "prevDate": "2026-09-16",
          "prevClose": 25978.4297,
          "change": 439.8711,
          "changePct": 1.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26389.143,
        "series": [
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
            "close": 25978.4297
          },
          {
            "date": "2026-09-17",
            "close": 26418.3008
          },
          {
            "date": "2026-09-18",
            "close": 26389.1426
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
        "close": 51778.0391,
        "prevClose": 51461.8984,
        "change": 316.1407,
        "changePct": 0.61,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 51519.9492,
          "prevDate": "2026-09-17",
          "prevClose": 51778.0391,
          "change": -258.0899,
          "changePct": -0.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 51778.0391,
          "prevDate": "2026-09-16",
          "prevClose": 51461.8984,
          "change": 316.1407,
          "changePct": 0.61,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51519.95,
        "series": [
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
            "close": 51461.8984
          },
          {
            "date": "2026-09-17",
            "close": 51778.0391
          },
          {
            "date": "2026-09-18",
            "close": 51519.9492
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
        "close": 4.947,
        "prevClose": 5.006,
        "change": -0.059,
        "changePct": -1.18,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 5.004,
          "prevDate": "2026-09-17",
          "prevClose": 4.947,
          "change": 0.057,
          "changePct": 1.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 4.947,
          "prevDate": "2026-09-16",
          "prevClose": 5.006,
          "change": -0.059,
          "changePct": -1.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.004,
        "series": [
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
            "close": 5.006
          },
          {
            "date": "2026-09-17",
            "close": 4.947
          },
          {
            "date": "2026-09-18",
            "close": 5.004
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
        "close": 5.296,
        "prevClose": 5.349,
        "change": -0.053,
        "changePct": -0.99,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 5.336,
          "prevDate": "2026-09-17",
          "prevClose": 5.296,
          "change": 0.04,
          "changePct": 0.76,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 5.296,
          "prevDate": "2026-09-16",
          "prevClose": 5.349,
          "change": -0.053,
          "changePct": -0.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.336,
        "series": [
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
            "close": 5.349
          },
          {
            "date": "2026-09-17",
            "close": 5.296
          },
          {
            "date": "2026-09-18",
            "close": 5.336
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
        "close": 4.801,
        "prevClose": 4.859,
        "change": -0.058,
        "changePct": -1.19,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 4.863,
          "prevDate": "2026-09-17",
          "prevClose": 4.801,
          "change": 0.062,
          "changePct": 1.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 4.801,
          "prevDate": "2026-09-16",
          "prevClose": 4.859,
          "change": -0.058,
          "changePct": -1.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.863,
        "series": [
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
            "close": 4.859
          },
          {
            "date": "2026-09-17",
            "close": 4.801
          },
          {
            "date": "2026-09-18",
            "close": 4.863
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
        "close": 100.22,
        "prevClose": 100.31,
        "change": -0.09,
        "changePct": -0.09,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 100.492,
          "prevDate": "2026-09-17",
          "prevClose": 100.22,
          "change": 0.272,
          "changePct": 0.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 100.22,
          "prevDate": "2026-09-16",
          "prevClose": 100.31,
          "change": -0.09,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 100.492,
        "series": [
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
            "close": 100.31
          },
          {
            "date": "2026-09-17",
            "close": 100.22
          },
          {
            "date": "2026-09-18",
            "close": 100.492
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
        "close": 101.91,
        "prevClose": 102.43,
        "change": -0.52,
        "changePct": -0.51,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 97.7,
          "prevDate": "2026-09-17",
          "prevClose": 101.91,
          "change": -4.21,
          "changePct": -4.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 101.91,
          "prevDate": "2026-09-16",
          "prevClose": 102.43,
          "change": -0.52,
          "changePct": -0.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 97.7,
        "series": [
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
            "close": 102.43
          },
          {
            "date": "2026-09-17",
            "close": 101.91
          },
          {
            "date": "2026-09-18",
            "close": 97.7
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
        "close": 104.82,
        "prevClose": 105.83,
        "change": -1.01,
        "changePct": -0.95,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 100.08,
          "prevDate": "2026-09-17",
          "prevClose": 104.82,
          "change": -4.74,
          "changePct": -4.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 104.82,
          "prevDate": "2026-09-16",
          "prevClose": 105.83,
          "change": -1.01,
          "changePct": -0.95,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 100.08,
        "series": [
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
            "close": 105.83
          },
          {
            "date": "2026-09-17",
            "close": 104.82
          },
          {
            "date": "2026-09-18",
            "close": 100.08
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
        "close": 4399.7002,
        "prevClose": 4387.5,
        "change": 12.2002,
        "changePct": 0.28,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 4386.2998,
          "prevDate": "2026-09-17",
          "prevClose": 4399.7002,
          "change": -13.4004,
          "changePct": -0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 4399.7002,
          "prevDate": "2026-09-16",
          "prevClose": 4387.5,
          "change": 12.2002,
          "changePct": 0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4386.3,
        "series": [
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
            "close": 4387.5
          },
          {
            "date": "2026-09-17",
            "close": 4399.7002
          },
          {
            "date": "2026-09-18",
            "close": 4386.2998
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
        "close": 156.014,
        "prevClose": 155.266,
        "change": 0.748,
        "changePct": 0.48,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 157.678,
          "prevDate": "2026-09-17",
          "prevClose": 156.014,
          "change": 1.664,
          "changePct": 1.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 156.014,
          "prevDate": "2026-09-16",
          "prevClose": 155.266,
          "change": 0.748,
          "changePct": 0.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.678,
        "series": [
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
            "close": 155.266
          },
          {
            "date": "2026-09-17",
            "close": 156.014
          },
          {
            "date": "2026-09-18",
            "close": 157.678
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
        "close": 6.706,
        "prevClose": 6.7112,
        "change": -0.0052,
        "changePct": -0.08,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 6.6887,
          "prevDate": "2026-09-17",
          "prevClose": 6.706,
          "change": -0.0173,
          "changePct": -0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 6.706,
          "prevDate": "2026-09-16",
          "prevClose": 6.7112,
          "change": -0.0052,
          "changePct": -0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6887,
        "series": [
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
            "close": 6.7112
          },
          {
            "date": "2026-09-17",
            "close": 6.706
          },
          {
            "date": "2026-09-18",
            "close": 6.6887
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
        "close": 31.8596,
        "prevClose": 31.7734,
        "change": 0.0862,
        "changePct": 0.27,
        "asOf": "2026-09-17",
        "prevAsOf": "2026-09-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-09-18",
          "close": 31.813,
          "prevDate": "2026-09-17",
          "prevClose": 31.8596,
          "change": -0.0466,
          "changePct": -0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-17",
          "close": 31.8596,
          "prevDate": "2026-09-16",
          "prevClose": 31.7734,
          "change": 0.0862,
          "changePct": 0.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.813,
        "series": [
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
            "close": 31.7734
          },
          {
            "date": "2026-09-17",
            "close": 31.8596
          },
          {
            "date": "2026-09-18",
            "close": 31.813
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
        "close": 47180.75,
        "prevClose": 46288,
        "change": 892.75,
        "changePct": 1.93,
        "asOf": "2026-09-18",
        "prevAsOf": "2026-09-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-09-18",
          "close": 47180.75,
          "prevDate": "2026-09-17",
          "prevClose": 46288,
          "change": 892.75,
          "changePct": 1.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-18",
          "close": 47180.75,
          "prevDate": "2026-09-17",
          "prevClose": 46288,
          "change": 892.75,
          "changePct": 1.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 47180.75,
        "series": [
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
          },
          {
            "date": "2026-09-17",
            "close": 46288
          },
          {
            "date": "2026-09-18",
            "close": 47180.75
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
