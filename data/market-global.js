/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-20T03:53:02.858Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 9419.7227,
        "prevClose": 9652.7998,
        "change": -233.0771,
        "changePct": -2.41,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-19",
          "close": 9419.7227,
          "prevDate": "2026-11-18",
          "prevClose": 9652.7998,
          "change": -233.0771,
          "changePct": -2.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 9419.7227,
          "prevDate": "2026-11-18",
          "prevClose": 9652.7998,
          "change": -233.0771,
          "changePct": -2.41,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 9419.723,
        "series": [
          {
            "date": "2026-11-12",
            "close": 10506.6699
          },
          {
            "date": "2026-11-13",
            "close": 10146.3203
          },
          {
            "date": "2026-11-16",
            "close": 9610.6504
          },
          {
            "date": "2026-11-17",
            "close": 9642.8799
          },
          {
            "date": "2026-11-18",
            "close": 9652.7998
          },
          {
            "date": "2026-11-19",
            "close": 9419.7227
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
        "close": 28.44,
        "prevClose": 24.56,
        "change": 3.88,
        "changePct": 15.8,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-19",
          "close": 28.44,
          "prevDate": "2026-11-18",
          "prevClose": 24.56,
          "change": 3.88,
          "changePct": 15.8,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 28.44,
          "prevDate": "2026-11-18",
          "prevClose": 24.56,
          "change": 3.88,
          "changePct": 15.8,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 28.44,
        "series": [
          {
            "date": "2026-11-12",
            "close": 18.7
          },
          {
            "date": "2026-11-13",
            "close": 19.3
          },
          {
            "date": "2026-11-16",
            "close": 22.91
          },
          {
            "date": "2026-11-17",
            "close": 25.46
          },
          {
            "date": "2026-11-18",
            "close": 24.56
          },
          {
            "date": "2026-11-19",
            "close": 28.44
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
        "close": 7175.8301,
        "prevClose": 7323.6299,
        "change": -147.7998,
        "changePct": -2.02,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-19",
          "close": 7175.8301,
          "prevDate": "2026-11-18",
          "prevClose": 7323.6299,
          "change": -147.7998,
          "changePct": -2.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 7175.8301,
          "prevDate": "2026-11-18",
          "prevClose": 7323.6299,
          "change": -147.7998,
          "changePct": -2.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7175.83,
        "series": [
          {
            "date": "2026-11-12",
            "close": 7592.3999
          },
          {
            "date": "2026-11-13",
            "close": 7561.6699
          },
          {
            "date": "2026-11-16",
            "close": 7416.5898
          },
          {
            "date": "2026-11-17",
            "close": 7340.5298
          },
          {
            "date": "2026-11-18",
            "close": 7323.6299
          },
          {
            "date": "2026-11-19",
            "close": 7175.8301
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
        "close": 23879.1992,
        "prevClose": 24429.8809,
        "change": -550.6817,
        "changePct": -2.25,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-19",
          "close": 23879.1992,
          "prevDate": "2026-11-18",
          "prevClose": 24429.8809,
          "change": -550.6817,
          "changePct": -2.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 23879.1992,
          "prevDate": "2026-11-18",
          "prevClose": 24429.8809,
          "change": -550.6817,
          "changePct": -2.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 23879.2,
        "series": [
          {
            "date": "2026-11-12",
            "close": 25366.0898
          },
          {
            "date": "2026-11-13",
            "close": 25136.2695
          },
          {
            "date": "2026-11-16",
            "close": 24509.7598
          },
          {
            "date": "2026-11-17",
            "close": 24328.3809
          },
          {
            "date": "2026-11-18",
            "close": 24429.8809
          },
          {
            "date": "2026-11-19",
            "close": 23879.1992
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
        "close": 49097.0586,
        "prevClose": 50198.1719,
        "change": -1101.1133,
        "changePct": -2.19,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-19",
          "close": 49097.0586,
          "prevDate": "2026-11-18",
          "prevClose": 50198.1719,
          "change": -1101.1133,
          "changePct": -2.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 49097.0586,
          "prevDate": "2026-11-18",
          "prevClose": 50198.1719,
          "change": -1101.1133,
          "changePct": -2.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 49097.06,
        "series": [
          {
            "date": "2026-11-12",
            "close": 52297.0898
          },
          {
            "date": "2026-11-13",
            "close": 52347.5508
          },
          {
            "date": "2026-11-16",
            "close": 51608.1719
          },
          {
            "date": "2026-11-17",
            "close": 50759.4219
          },
          {
            "date": "2026-11-18",
            "close": 50198.1719
          },
          {
            "date": "2026-11-19",
            "close": 49097.0586
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
        "close": 5.052,
        "prevClose": 5.066,
        "change": -0.014,
        "changePct": -0.28,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-19",
          "close": 5.052,
          "prevDate": "2026-11-18",
          "prevClose": 5.066,
          "change": -0.014,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 5.052,
          "prevDate": "2026-11-18",
          "prevClose": 5.066,
          "change": -0.014,
          "changePct": -0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.052,
        "series": [
          {
            "date": "2026-11-12",
            "close": 5.103
          },
          {
            "date": "2026-11-13",
            "close": 5.154
          },
          {
            "date": "2026-11-16",
            "close": 5.121
          },
          {
            "date": "2026-11-17",
            "close": 5.103
          },
          {
            "date": "2026-11-18",
            "close": 5.066
          },
          {
            "date": "2026-11-19",
            "close": 5.052
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
        "close": 5.401,
        "prevClose": 5.412,
        "change": -0.011,
        "changePct": -0.2,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-19",
          "close": 5.401,
          "prevDate": "2026-11-18",
          "prevClose": 5.412,
          "change": -0.011,
          "changePct": -0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 5.401,
          "prevDate": "2026-11-18",
          "prevClose": 5.412,
          "change": -0.011,
          "changePct": -0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.401,
        "series": [
          {
            "date": "2026-11-12",
            "close": 5.433
          },
          {
            "date": "2026-11-13",
            "close": 5.481
          },
          {
            "date": "2026-11-16",
            "close": 5.467
          },
          {
            "date": "2026-11-17",
            "close": 5.458
          },
          {
            "date": "2026-11-18",
            "close": 5.412
          },
          {
            "date": "2026-11-19",
            "close": 5.401
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
        "close": 4.866,
        "prevClose": 4.884,
        "change": -0.018,
        "changePct": -0.37,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-19",
          "close": 4.866,
          "prevDate": "2026-11-18",
          "prevClose": 4.884,
          "change": -0.018,
          "changePct": -0.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 4.866,
          "prevDate": "2026-11-18",
          "prevClose": 4.884,
          "change": -0.018,
          "changePct": -0.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.866,
        "series": [
          {
            "date": "2026-11-12",
            "close": 4.945
          },
          {
            "date": "2026-11-13",
            "close": 4.981
          },
          {
            "date": "2026-11-16",
            "close": 4.935
          },
          {
            "date": "2026-11-17",
            "close": 4.9
          },
          {
            "date": "2026-11-18",
            "close": 4.884
          },
          {
            "date": "2026-11-19",
            "close": 4.866
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
        "close": 103.86,
        "prevClose": 103.49,
        "change": 0.37,
        "changePct": 0.36,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-19",
          "close": 103.84,
          "prevDate": "2026-11-18",
          "prevClose": 103.86,
          "change": -0.02,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 103.86,
          "prevDate": "2026-11-17",
          "prevClose": 103.49,
          "change": 0.37,
          "changePct": 0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.84,
        "series": [
          {
            "date": "2026-11-12",
            "close": 103.17
          },
          {
            "date": "2026-11-13",
            "close": 103.41
          },
          {
            "date": "2026-11-16",
            "close": 103.55
          },
          {
            "date": "2026-11-17",
            "close": 103.49
          },
          {
            "date": "2026-11-18",
            "close": 103.86
          },
          {
            "date": "2026-11-19",
            "close": 103.84
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
        "close": 83.26,
        "prevClose": 86.01,
        "change": -2.75,
        "changePct": -3.2,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-19",
          "close": 82.88,
          "prevDate": "2026-11-18",
          "prevClose": 83.26,
          "change": -0.38,
          "changePct": -0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 83.26,
          "prevDate": "2026-11-17",
          "prevClose": 86.01,
          "change": -2.75,
          "changePct": -3.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 82.88,
        "series": [
          {
            "date": "2026-11-12",
            "close": 88.74
          },
          {
            "date": "2026-11-13",
            "close": 88.56
          },
          {
            "date": "2026-11-16",
            "close": 85.72
          },
          {
            "date": "2026-11-17",
            "close": 86.01
          },
          {
            "date": "2026-11-18",
            "close": 83.26
          },
          {
            "date": "2026-11-19",
            "close": 82.88
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
        "close": 91.95,
        "prevClose": 93.14,
        "change": -1.19,
        "changePct": -1.28,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-19",
          "close": 89.92,
          "prevDate": "2026-11-18",
          "prevClose": 91.95,
          "change": -2.03,
          "changePct": -2.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 91.95,
          "prevDate": "2026-11-17",
          "prevClose": 93.14,
          "change": -1.19,
          "changePct": -1.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 89.92,
        "series": [
          {
            "date": "2026-11-12",
            "close": 95.82
          },
          {
            "date": "2026-11-13",
            "close": 95.84
          },
          {
            "date": "2026-11-16",
            "close": 92.44
          },
          {
            "date": "2026-11-17",
            "close": 93.14
          },
          {
            "date": "2026-11-18",
            "close": 91.95
          },
          {
            "date": "2026-11-19",
            "close": 89.92
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
        "close": 3741.8999,
        "prevClose": 3864.2,
        "change": -122.3001,
        "changePct": -3.16,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-19",
          "close": 3545.2,
          "prevDate": "2026-11-18",
          "prevClose": 3741.8999,
          "change": -196.6999,
          "changePct": -5.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 3741.8999,
          "prevDate": "2026-11-17",
          "prevClose": 3864.2,
          "change": -122.3001,
          "changePct": -3.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3545.2,
        "series": [
          {
            "date": "2026-11-12",
            "close": 3885.3
          },
          {
            "date": "2026-11-13",
            "close": 3886.3
          },
          {
            "date": "2026-11-16",
            "close": 3853
          },
          {
            "date": "2026-11-17",
            "close": 3864.2
          },
          {
            "date": "2026-11-18",
            "close": 3741.8999
          },
          {
            "date": "2026-11-19",
            "close": 3545.2
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
        "close": 159.381,
        "prevClose": 159.504,
        "change": -0.123,
        "changePct": -0.08,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-20",
          "close": 159.234,
          "prevDate": "2026-11-19",
          "prevClose": 159.381,
          "change": -0.147,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 159.381,
          "prevDate": "2026-11-18",
          "prevClose": 159.504,
          "change": -0.123,
          "changePct": -0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 159.234,
        "series": [
          {
            "date": "2026-11-13",
            "close": 159.875
          },
          {
            "date": "2026-11-16",
            "close": 159.78
          },
          {
            "date": "2026-11-17",
            "close": 159.523
          },
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
            "close": 159.234
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
        "close": 6.6676,
        "prevClose": 6.6659,
        "change": 0.0017,
        "changePct": 0.03,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-20",
          "close": 6.6608,
          "prevDate": "2026-11-19",
          "prevClose": 6.6676,
          "change": -0.0068,
          "changePct": -0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 6.6676,
          "prevDate": "2026-11-18",
          "prevClose": 6.6659,
          "change": 0.0017,
          "changePct": 0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6608,
        "series": [
          {
            "date": "2026-11-13",
            "close": 6.6704
          },
          {
            "date": "2026-11-16",
            "close": 6.671
          },
          {
            "date": "2026-11-17",
            "close": 6.6642
          },
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
            "close": 6.6608
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
        "close": 32.9299,
        "prevClose": 32.9108,
        "change": 0.0191,
        "changePct": 0.06,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-20",
          "close": 32.977,
          "prevDate": "2026-11-19",
          "prevClose": 32.9299,
          "change": 0.0471,
          "changePct": 0.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 32.9299,
          "prevDate": "2026-11-18",
          "prevClose": 32.9108,
          "change": 0.0191,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.977,
        "series": [
          {
            "date": "2026-11-13",
            "close": 32.939
          },
          {
            "date": "2026-11-16",
            "close": 32.8764
          },
          {
            "date": "2026-11-17",
            "close": 32.9629
          },
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
            "close": 32.977
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
        "close": 38426.8906,
        "prevClose": 40194.9102,
        "change": -1768.0196,
        "changePct": -4.4,
        "asOf": "2026-11-19",
        "prevAsOf": "2026-11-18",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-20",
          "close": 36152.3789,
          "prevDate": "2026-11-19",
          "prevClose": 38426.8906,
          "change": -2274.5117,
          "changePct": -5.92,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-19",
          "close": 38426.8906,
          "prevDate": "2026-11-18",
          "prevClose": 40194.9102,
          "change": -1768.0196,
          "changePct": -4.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 36152.38,
        "series": [
          {
            "date": "2026-11-13",
            "close": 43675.1211
          },
          {
            "date": "2026-11-16",
            "close": 41040.0781
          },
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
            "close": 36152.3789
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
