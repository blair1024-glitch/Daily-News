/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-19T03:59:12.384Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 9652.7969,
        "prevClose": 9642.8799,
        "change": 9.917,
        "changePct": 0.1,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-18",
          "close": 9652.7969,
          "prevDate": "2026-11-17",
          "prevClose": 9642.8799,
          "change": 9.917,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 9652.7969,
          "prevDate": "2026-11-17",
          "prevClose": 9642.8799,
          "change": 9.917,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 9652.797,
        "series": [
          {
            "date": "2026-11-11",
            "close": 10564.1104
          },
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
            "close": 9652.7969
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
        "close": 24.56,
        "prevClose": 25.46,
        "change": -0.9,
        "changePct": -3.53,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-18",
          "close": 24.56,
          "prevDate": "2026-11-17",
          "prevClose": 25.46,
          "change": -0.9,
          "changePct": -3.53,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 24.56,
          "prevDate": "2026-11-17",
          "prevClose": 25.46,
          "change": -0.9,
          "changePct": -3.53,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 24.56,
        "series": [
          {
            "date": "2026-11-11",
            "close": 17.49
          },
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
        "close": 7323.6299,
        "prevClose": 7340.5298,
        "change": -16.8999,
        "changePct": -0.23,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-18",
          "close": 7323.6299,
          "prevDate": "2026-11-17",
          "prevClose": 7340.5298,
          "change": -16.8999,
          "changePct": -0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 7323.6299,
          "prevDate": "2026-11-17",
          "prevClose": 7340.5298,
          "change": -16.8999,
          "changePct": -0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7323.63,
        "series": [
          {
            "date": "2026-11-11",
            "close": 7619.3799
          },
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
        "close": 24429.8848,
        "prevClose": 24328.3809,
        "change": 101.5039,
        "changePct": 0.42,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-18",
          "close": 24429.8848,
          "prevDate": "2026-11-17",
          "prevClose": 24328.3809,
          "change": 101.5039,
          "changePct": 0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 24429.8848,
          "prevDate": "2026-11-17",
          "prevClose": 24328.3809,
          "change": 101.5039,
          "changePct": 0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 24429.885,
        "series": [
          {
            "date": "2026-11-11",
            "close": 25466.1895
          },
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
            "close": 24429.8848
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
        "close": 50198.1719,
        "prevClose": 50759.4219,
        "change": -561.25,
        "changePct": -1.11,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-18",
          "close": 50198.1719,
          "prevDate": "2026-11-17",
          "prevClose": 50759.4219,
          "change": -561.25,
          "changePct": -1.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 50198.1719,
          "prevDate": "2026-11-17",
          "prevClose": 50759.4219,
          "change": -561.25,
          "changePct": -1.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 50198.17,
        "series": [
          {
            "date": "2026-11-11",
            "close": 52486.4883
          },
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
        "close": 5.066,
        "prevClose": 5.103,
        "change": -0.037,
        "changePct": -0.73,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-18",
          "close": 5.066,
          "prevDate": "2026-11-17",
          "prevClose": 5.103,
          "change": -0.037,
          "changePct": -0.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 5.066,
          "prevDate": "2026-11-17",
          "prevClose": 5.103,
          "change": -0.037,
          "changePct": -0.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.066,
        "series": [
          {
            "date": "2026-11-11",
            "close": 4.998
          },
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
        "close": 5.412,
        "prevClose": 5.458,
        "change": -0.046,
        "changePct": -0.84,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-18",
          "close": 5.412,
          "prevDate": "2026-11-17",
          "prevClose": 5.458,
          "change": -0.046,
          "changePct": -0.84,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 5.412,
          "prevDate": "2026-11-17",
          "prevClose": 5.458,
          "change": -0.046,
          "changePct": -0.84,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.412,
        "series": [
          {
            "date": "2026-11-11",
            "close": 5.356
          },
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
        "close": 4.884,
        "prevClose": 4.9,
        "change": -0.016,
        "changePct": -0.33,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-18",
          "close": 4.884,
          "prevDate": "2026-11-17",
          "prevClose": 4.9,
          "change": -0.016,
          "changePct": -0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 4.884,
          "prevDate": "2026-11-17",
          "prevClose": 4.9,
          "change": -0.016,
          "changePct": -0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.884,
        "series": [
          {
            "date": "2026-11-11",
            "close": 4.827
          },
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
        "close": 103.49,
        "prevClose": 103.55,
        "change": -0.06,
        "changePct": -0.06,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-18",
          "close": 103.969,
          "prevDate": "2026-11-17",
          "prevClose": 103.49,
          "change": 0.479,
          "changePct": 0.46,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 103.49,
          "prevDate": "2026-11-16",
          "prevClose": 103.55,
          "change": -0.06,
          "changePct": -0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.969,
        "series": [
          {
            "date": "2026-11-11",
            "close": 102.91
          },
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
            "close": 103.969
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
        "close": 86.01,
        "prevClose": 85.72,
        "change": 0.29,
        "changePct": 0.34,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-18",
          "close": 81.98,
          "prevDate": "2026-11-17",
          "prevClose": 86.01,
          "change": -4.03,
          "changePct": -4.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 86.01,
          "prevDate": "2026-11-16",
          "prevClose": 85.72,
          "change": 0.29,
          "changePct": 0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 81.98,
        "series": [
          {
            "date": "2026-11-11",
            "close": 86.53
          },
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
            "close": 81.98
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
        "close": 93.14,
        "prevClose": 92.44,
        "change": 0.7,
        "changePct": 0.76,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-18",
          "close": 89.17,
          "prevDate": "2026-11-17",
          "prevClose": 93.14,
          "change": -3.97,
          "changePct": -4.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 93.14,
          "prevDate": "2026-11-16",
          "prevClose": 92.44,
          "change": 0.7,
          "changePct": 0.76,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 89.17,
        "series": [
          {
            "date": "2026-11-11",
            "close": 92.76
          },
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
            "close": 89.17
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
        "close": 3864.2,
        "prevClose": 3853,
        "change": 11.2,
        "changePct": 0.29,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-18",
          "close": 3717.2,
          "prevDate": "2026-11-17",
          "prevClose": 3864.2,
          "change": -147,
          "changePct": -3.8,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 3864.2,
          "prevDate": "2026-11-16",
          "prevClose": 3853,
          "change": 11.2,
          "changePct": 0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3717.2,
        "series": [
          {
            "date": "2026-11-11",
            "close": 4000.5
          },
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
            "close": 3717.2
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
        "close": 159.504,
        "prevClose": 159.523,
        "change": -0.019,
        "changePct": -0.01,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-19",
          "close": 159.583,
          "prevDate": "2026-11-18",
          "prevClose": 159.504,
          "change": 0.079,
          "changePct": 0.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 159.504,
          "prevDate": "2026-11-17",
          "prevClose": 159.523,
          "change": -0.019,
          "changePct": -0.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 159.583,
        "series": [
          {
            "date": "2026-11-12",
            "close": 159.734
          },
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
            "close": 159.583
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
        "close": 6.6659,
        "prevClose": 6.6642,
        "change": 0.0017,
        "changePct": 0.03,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-19",
          "close": 6.6656,
          "prevDate": "2026-11-18",
          "prevClose": 6.6659,
          "change": -0.0003,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 6.6659,
          "prevDate": "2026-11-17",
          "prevClose": 6.6642,
          "change": 0.0017,
          "changePct": 0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6656,
        "series": [
          {
            "date": "2026-11-12",
            "close": 6.6703
          },
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
            "close": 6.6656
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
        "close": 32.9108,
        "prevClose": 32.9629,
        "change": -0.0521,
        "changePct": -0.16,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-19",
          "close": 32.959,
          "prevDate": "2026-11-18",
          "prevClose": 32.9108,
          "change": 0.0482,
          "changePct": 0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 32.9108,
          "prevDate": "2026-11-17",
          "prevClose": 32.9629,
          "change": -0.0521,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.959,
        "series": [
          {
            "date": "2026-11-12",
            "close": 32.8619
          },
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
            "close": 32.959
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
        "close": 40194.9102,
        "prevClose": 40092.1094,
        "change": 102.8008,
        "changePct": 0.26,
        "asOf": "2026-11-18",
        "prevAsOf": "2026-11-17",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-19",
          "close": 38831.5313,
          "prevDate": "2026-11-18",
          "prevClose": 40194.9102,
          "change": -1363.3789,
          "changePct": -3.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-18",
          "close": 40194.9102,
          "prevDate": "2026-11-17",
          "prevClose": 40092.1094,
          "change": 102.8008,
          "changePct": 0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 38831.53,
        "series": [
          {
            "date": "2026-11-12",
            "close": 43091.8711
          },
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
            "close": 38831.5313
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
