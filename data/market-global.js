/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-18T04:02:08.173Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 9642.8779,
        "prevClose": 9610.6504,
        "change": 32.2275,
        "changePct": 0.34,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-17",
          "close": 9642.8779,
          "prevDate": "2026-11-16",
          "prevClose": 9610.6504,
          "change": 32.2275,
          "changePct": 0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 9642.8779,
          "prevDate": "2026-11-16",
          "prevClose": 9610.6504,
          "change": 32.2275,
          "changePct": 0.34,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 9642.878,
        "series": [
          {
            "date": "2026-11-10",
            "close": 9998.3301
          },
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
            "close": 9642.8779
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
        "close": 25.46,
        "prevClose": 22.91,
        "change": 2.55,
        "changePct": 11.13,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-17",
          "close": 25.46,
          "prevDate": "2026-11-16",
          "prevClose": 22.91,
          "change": 2.55,
          "changePct": 11.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 25.46,
          "prevDate": "2026-11-16",
          "prevClose": 22.91,
          "change": 2.55,
          "changePct": 11.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 25.46,
        "series": [
          {
            "date": "2026-11-10",
            "close": 19.46
          },
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
        "close": 7340.5298,
        "prevClose": 7416.5898,
        "change": -76.06,
        "changePct": -1.03,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-17",
          "close": 7340.5298,
          "prevDate": "2026-11-16",
          "prevClose": 7416.5898,
          "change": -76.06,
          "changePct": -1.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 7340.5298,
          "prevDate": "2026-11-16",
          "prevClose": 7416.5898,
          "change": -76.06,
          "changePct": -1.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7340.53,
        "series": [
          {
            "date": "2026-11-10",
            "close": 7520.9302
          },
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
        "close": 24328.3828,
        "prevClose": 24509.7598,
        "change": -181.377,
        "changePct": -0.74,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-17",
          "close": 24328.3828,
          "prevDate": "2026-11-16",
          "prevClose": 24509.7598,
          "change": -181.377,
          "changePct": -0.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 24328.3828,
          "prevDate": "2026-11-16",
          "prevClose": 24509.7598,
          "change": -181.377,
          "changePct": -0.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 24328.383,
        "series": [
          {
            "date": "2026-11-10",
            "close": 25065.8691
          },
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
            "close": 24328.3828
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
        "close": 50759.4219,
        "prevClose": 51608.1719,
        "change": -848.75,
        "changePct": -1.64,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-17",
          "close": 50759.4219,
          "prevDate": "2026-11-16",
          "prevClose": 51608.1719,
          "change": -848.75,
          "changePct": -1.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 50759.4219,
          "prevDate": "2026-11-16",
          "prevClose": 51608.1719,
          "change": -848.75,
          "changePct": -1.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 50759.42,
        "series": [
          {
            "date": "2026-11-10",
            "close": 52231.8906
          },
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
        "close": 5.103,
        "prevClose": 5.121,
        "change": -0.018,
        "changePct": -0.35,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-17",
          "close": 5.103,
          "prevDate": "2026-11-16",
          "prevClose": 5.121,
          "change": -0.018,
          "changePct": -0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 5.103,
          "prevDate": "2026-11-16",
          "prevClose": 5.121,
          "change": -0.018,
          "changePct": -0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.103,
        "series": [
          {
            "date": "2026-11-10",
            "close": 4.983
          },
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
        "close": 5.458,
        "prevClose": 5.467,
        "change": -0.009,
        "changePct": -0.16,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-17",
          "close": 5.458,
          "prevDate": "2026-11-16",
          "prevClose": 5.467,
          "change": -0.009,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 5.458,
          "prevDate": "2026-11-16",
          "prevClose": 5.467,
          "change": -0.009,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.458,
        "series": [
          {
            "date": "2026-11-10",
            "close": 5.35
          },
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
        "close": 4.9,
        "prevClose": 4.935,
        "change": -0.035,
        "changePct": -0.71,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-17",
          "close": 4.9,
          "prevDate": "2026-11-16",
          "prevClose": 4.935,
          "change": -0.035,
          "changePct": -0.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 4.9,
          "prevDate": "2026-11-16",
          "prevClose": 4.935,
          "change": -0.035,
          "changePct": -0.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.9,
        "series": [
          {
            "date": "2026-11-10",
            "close": 4.807
          },
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
        "close": 103.55,
        "prevClose": 103.41,
        "change": 0.14,
        "changePct": 0.14,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 103.616,
          "prevDate": "2026-11-16",
          "prevClose": 103.55,
          "change": 0.066,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 103.55,
          "prevDate": "2026-11-13",
          "prevClose": 103.41,
          "change": 0.14,
          "changePct": 0.14,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 103.616,
        "series": [
          {
            "date": "2026-11-10",
            "close": 102.23
          },
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
            "close": 103.616
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
        "close": 85.72,
        "prevClose": 88.56,
        "change": -2.84,
        "changePct": -3.21,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 84.84,
          "prevDate": "2026-11-16",
          "prevClose": 85.72,
          "change": -0.88,
          "changePct": -1.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 85.72,
          "prevDate": "2026-11-13",
          "prevClose": 88.56,
          "change": -2.84,
          "changePct": -3.21,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 84.84,
        "series": [
          {
            "date": "2026-11-10",
            "close": 86.04
          },
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
            "close": 84.84
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
        "close": 92.44,
        "prevClose": 95.84,
        "change": -3.4,
        "changePct": -3.55,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 92.44,
          "prevDate": "2026-11-16",
          "prevClose": 92.44,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 92.44,
          "prevDate": "2026-11-13",
          "prevClose": 95.84,
          "change": -3.4,
          "changePct": -3.55,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 92.44,
        "series": [
          {
            "date": "2026-11-10",
            "close": 91.49
          },
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
            "close": 92.44
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
        "close": 3853,
        "prevClose": 3886.3,
        "change": -33.3,
        "changePct": -0.86,
        "asOf": "2026-11-16",
        "prevAsOf": "2026-11-13",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-17",
          "close": 3796.1001,
          "prevDate": "2026-11-16",
          "prevClose": 3853,
          "change": -56.8999,
          "changePct": -1.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-16",
          "close": 3853,
          "prevDate": "2026-11-13",
          "prevClose": 3886.3,
          "change": -33.3,
          "changePct": -0.86,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 3796.1,
        "series": [
          {
            "date": "2026-11-10",
            "close": 4030.2
          },
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
            "close": 3796.1001
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
        "close": 159.523,
        "prevClose": 159.78,
        "change": -0.257,
        "changePct": -0.16,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-18",
          "close": 159.341,
          "prevDate": "2026-11-17",
          "prevClose": 159.523,
          "change": -0.182,
          "changePct": -0.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 159.523,
          "prevDate": "2026-11-16",
          "prevClose": 159.78,
          "change": -0.257,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 159.341,
        "series": [
          {
            "date": "2026-11-11",
            "close": 158.705
          },
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
            "close": 159.341
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
        "close": 6.6642,
        "prevClose": 6.671,
        "change": -0.0068,
        "changePct": -0.1,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-18",
          "close": 6.666,
          "prevDate": "2026-11-17",
          "prevClose": 6.6642,
          "change": 0.0018,
          "changePct": 0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 6.6642,
          "prevDate": "2026-11-16",
          "prevClose": 6.671,
          "change": -0.0068,
          "changePct": -0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.666,
        "series": [
          {
            "date": "2026-11-11",
            "close": 6.6703
          },
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
            "close": 6.666
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
        "close": 32.9629,
        "prevClose": 32.8764,
        "change": 0.0865,
        "changePct": 0.26,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-18",
          "close": 32.945,
          "prevDate": "2026-11-17",
          "prevClose": 32.9629,
          "change": -0.0179,
          "changePct": -0.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 32.9629,
          "prevDate": "2026-11-16",
          "prevClose": 32.8764,
          "change": 0.0865,
          "changePct": 0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.945,
        "series": [
          {
            "date": "2026-11-11",
            "close": 32.9538
          },
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
            "close": 32.945
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
        "close": 40092.1094,
        "prevClose": 41040.0781,
        "change": -947.9687,
        "changePct": -2.31,
        "asOf": "2026-11-17",
        "prevAsOf": "2026-11-16",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-18",
          "close": 40181.3398,
          "prevDate": "2026-11-17",
          "prevClose": 40092.1094,
          "change": 89.2304,
          "changePct": 0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-17",
          "close": 40092.1094,
          "prevDate": "2026-11-16",
          "prevClose": 41040.0781,
          "change": -947.9687,
          "changePct": -2.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 40181.34,
        "series": [
          {
            "date": "2026-11-11",
            "close": 44257.1484
          },
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
            "close": 40181.3398
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
