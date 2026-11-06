/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-06T03:13:16.762Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 9011.1377,
        "prevClose": 10268.6504,
        "change": -1257.5127,
        "changePct": -12.25,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-05",
          "close": 9011.1377,
          "prevDate": "2026-11-04",
          "prevClose": 10268.6504,
          "change": -1257.5127,
          "changePct": -12.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 9011.1377,
          "prevDate": "2026-11-04",
          "prevClose": 10268.6504,
          "change": -1257.5127,
          "changePct": -12.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 9011.138,
        "series": [
          {
            "date": "2026-10-29",
            "close": 11518.2002
          },
          {
            "date": "2026-10-30",
            "close": 10688.7998
          },
          {
            "date": "2026-11-02",
            "close": 10328.3301
          },
          {
            "date": "2026-11-03",
            "close": 10600.4004
          },
          {
            "date": "2026-11-04",
            "close": 10268.6504
          },
          {
            "date": "2026-11-05",
            "close": 9011.1377
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
        "close": 28.18,
        "prevClose": 16.61,
        "change": 11.57,
        "changePct": 69.66,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-05",
          "close": 28.18,
          "prevDate": "2026-11-04",
          "prevClose": 16.61,
          "change": 11.57,
          "changePct": 69.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 28.18,
          "prevDate": "2026-11-04",
          "prevClose": 16.61,
          "change": 11.57,
          "changePct": 69.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 28.18,
        "series": [
          {
            "date": "2026-10-29",
            "close": 17.2
          },
          {
            "date": "2026-10-30",
            "close": 19.42
          },
          {
            "date": "2026-11-02",
            "close": 21.15
          },
          {
            "date": "2026-11-03",
            "close": 20.83
          },
          {
            "date": "2026-11-04",
            "close": 16.61
          },
          {
            "date": "2026-11-05",
            "close": 28.18
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
        "close": 7353.73,
        "prevClose": 7688.6201,
        "change": -334.8901,
        "changePct": -4.36,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-05",
          "close": 7353.73,
          "prevDate": "2026-11-04",
          "prevClose": 7688.6201,
          "change": -334.8901,
          "changePct": -4.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 7353.73,
          "prevDate": "2026-11-04",
          "prevClose": 7688.6201,
          "change": -334.8901,
          "changePct": -4.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7353.73,
        "series": [
          {
            "date": "2026-10-29",
            "close": 7720.3901
          },
          {
            "date": "2026-10-30",
            "close": 7580.0698
          },
          {
            "date": "2026-11-02",
            "close": 7541.3999
          },
          {
            "date": "2026-11-03",
            "close": 7568.9199
          },
          {
            "date": "2026-11-04",
            "close": 7688.6201
          },
          {
            "date": "2026-11-05",
            "close": 7353.73
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
        "close": 24314.998,
        "prevClose": 25736.5098,
        "change": -1421.5118,
        "changePct": -5.52,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-05",
          "close": 24314.998,
          "prevDate": "2026-11-04",
          "prevClose": 25736.5098,
          "change": -1421.5118,
          "changePct": -5.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 24314.998,
          "prevDate": "2026-11-04",
          "prevClose": 25736.5098,
          "change": -1421.5118,
          "changePct": -5.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 24314.998,
        "series": [
          {
            "date": "2026-10-29",
            "close": 26184.7207
          },
          {
            "date": "2026-10-30",
            "close": 25437
          },
          {
            "date": "2026-11-02",
            "close": 25164.3105
          },
          {
            "date": "2026-11-03",
            "close": 25372.0098
          },
          {
            "date": "2026-11-04",
            "close": 25736.5098
          },
          {
            "date": "2026-11-05",
            "close": 24314.998
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
        "close": 51523.0586,
        "prevClose": 53356.1211,
        "change": -1833.0625,
        "changePct": -3.44,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-05",
          "close": 51523.0586,
          "prevDate": "2026-11-04",
          "prevClose": 53356.1211,
          "change": -1833.0625,
          "changePct": -3.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 51523.0586,
          "prevDate": "2026-11-04",
          "prevClose": 53356.1211,
          "change": -1833.0625,
          "changePct": -3.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51523.06,
        "series": [
          {
            "date": "2026-10-29",
            "close": 52342.5586
          },
          {
            "date": "2026-10-30",
            "close": 51770.3086
          },
          {
            "date": "2026-11-02",
            "close": 51983.9805
          },
          {
            "date": "2026-11-03",
            "close": 51786.7188
          },
          {
            "date": "2026-11-04",
            "close": 53356.1211
          },
          {
            "date": "2026-11-05",
            "close": 51523.0586
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
        "close": 4.837,
        "prevClose": 4.894,
        "change": -0.057,
        "changePct": -1.16,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-05",
          "close": 4.837,
          "prevDate": "2026-11-04",
          "prevClose": 4.894,
          "change": -0.057,
          "changePct": -1.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 4.837,
          "prevDate": "2026-11-04",
          "prevClose": 4.894,
          "change": -0.057,
          "changePct": -1.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.837,
        "series": [
          {
            "date": "2026-10-29",
            "close": 4.989
          },
          {
            "date": "2026-10-30",
            "close": 4.929
          },
          {
            "date": "2026-11-02",
            "close": 4.894
          },
          {
            "date": "2026-11-03",
            "close": 4.952
          },
          {
            "date": "2026-11-04",
            "close": 4.894
          },
          {
            "date": "2026-11-05",
            "close": 4.837
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
        "close": 5.251,
        "prevClose": 5.282,
        "change": -0.031,
        "changePct": -0.59,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-05",
          "close": 5.251,
          "prevDate": "2026-11-04",
          "prevClose": 5.282,
          "change": -0.031,
          "changePct": -0.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 5.251,
          "prevDate": "2026-11-04",
          "prevClose": 5.282,
          "change": -0.031,
          "changePct": -0.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.251,
        "series": [
          {
            "date": "2026-10-29",
            "close": 5.329
          },
          {
            "date": "2026-10-30",
            "close": 5.309
          },
          {
            "date": "2026-11-02",
            "close": 5.269
          },
          {
            "date": "2026-11-03",
            "close": 5.324
          },
          {
            "date": "2026-11-04",
            "close": 5.282
          },
          {
            "date": "2026-11-05",
            "close": 5.251
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
        "close": 4.608,
        "prevClose": 4.689,
        "change": -0.081,
        "changePct": -1.73,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-05",
          "close": 4.608,
          "prevDate": "2026-11-04",
          "prevClose": 4.689,
          "change": -0.081,
          "changePct": -1.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 4.608,
          "prevDate": "2026-11-04",
          "prevClose": 4.689,
          "change": -0.081,
          "changePct": -1.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.608,
        "series": [
          {
            "date": "2026-10-29",
            "close": 4.801
          },
          {
            "date": "2026-10-30",
            "close": 4.721
          },
          {
            "date": "2026-11-02",
            "close": 4.693
          },
          {
            "date": "2026-11-03",
            "close": 4.743
          },
          {
            "date": "2026-11-04",
            "close": 4.689
          },
          {
            "date": "2026-11-05",
            "close": 4.608
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
        "close": 101.51,
        "prevClose": 101.87,
        "change": -0.36,
        "changePct": -0.35,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 101.7,
          "prevDate": "2026-11-04",
          "prevClose": 101.51,
          "change": 0.19,
          "changePct": 0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 101.51,
          "prevDate": "2026-11-03",
          "prevClose": 101.87,
          "change": -0.36,
          "changePct": -0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.7,
        "series": [
          {
            "date": "2026-10-29",
            "close": 102.04
          },
          {
            "date": "2026-10-30",
            "close": 101.88
          },
          {
            "date": "2026-11-02",
            "close": 101.75
          },
          {
            "date": "2026-11-03",
            "close": 101.87
          },
          {
            "date": "2026-11-04",
            "close": 101.51
          },
          {
            "date": "2026-11-05",
            "close": 101.7
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
        "close": 88.12,
        "prevClose": 96.09,
        "change": -7.97,
        "changePct": -8.29,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 91.43,
          "prevDate": "2026-11-04",
          "prevClose": 88.12,
          "change": 3.31,
          "changePct": 3.76,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 88.12,
          "prevDate": "2026-11-03",
          "prevClose": 96.09,
          "change": -7.97,
          "changePct": -8.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 91.43,
        "series": [
          {
            "date": "2026-10-29",
            "close": 102
          },
          {
            "date": "2026-10-30",
            "close": 104.12
          },
          {
            "date": "2026-11-02",
            "close": 96.46
          },
          {
            "date": "2026-11-03",
            "close": 96.09
          },
          {
            "date": "2026-11-04",
            "close": 88.12
          },
          {
            "date": "2026-11-05",
            "close": 91.43
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
        "close": 94.62,
        "prevClose": 103.6,
        "change": -8.98,
        "changePct": -8.67,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 99.63,
          "prevDate": "2026-11-04",
          "prevClose": 94.62,
          "change": 5.01,
          "changePct": 5.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 94.62,
          "prevDate": "2026-11-03",
          "prevClose": 103.6,
          "change": -8.98,
          "changePct": -8.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 99.63,
        "series": [
          {
            "date": "2026-10-29",
            "close": 114.88
          },
          {
            "date": "2026-10-30",
            "close": 117.64
          },
          {
            "date": "2026-11-02",
            "close": 104.77
          },
          {
            "date": "2026-11-03",
            "close": 103.6
          },
          {
            "date": "2026-11-04",
            "close": 94.62
          },
          {
            "date": "2026-11-05",
            "close": 99.63
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
        "close": 4073,
        "prevClose": 3940.3999,
        "change": 132.6001,
        "changePct": 3.37,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 4072.1001,
          "prevDate": "2026-11-04",
          "prevClose": 4073,
          "change": -0.8999,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 4073,
          "prevDate": "2026-11-03",
          "prevClose": 3940.3999,
          "change": 132.6001,
          "changePct": 3.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4072.1,
        "series": [
          {
            "date": "2026-10-29",
            "close": 4031.3999
          },
          {
            "date": "2026-10-30",
            "close": 3898.8999
          },
          {
            "date": "2026-11-02",
            "close": 3969.6001
          },
          {
            "date": "2026-11-03",
            "close": 3940.3999
          },
          {
            "date": "2026-11-04",
            "close": 4073
          },
          {
            "date": "2026-11-05",
            "close": 4072.1001
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
        "close": 158.357,
        "prevClose": 158.469,
        "change": -0.112,
        "changePct": -0.07,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-06",
          "close": 157.868,
          "prevDate": "2026-11-05",
          "prevClose": 158.357,
          "change": -0.489,
          "changePct": -0.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 158.357,
          "prevDate": "2026-11-04",
          "prevClose": 158.469,
          "change": -0.112,
          "changePct": -0.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.868,
        "series": [
          {
            "date": "2026-10-30",
            "close": 157.804
          },
          {
            "date": "2026-11-02",
            "close": 157.677
          },
          {
            "date": "2026-11-03",
            "close": 157.915
          },
          {
            "date": "2026-11-04",
            "close": 158.469
          },
          {
            "date": "2026-11-05",
            "close": 158.357
          },
          {
            "date": "2026-11-06",
            "close": 157.868
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
        "close": 6.6731,
        "prevClose": 6.6701,
        "change": 0.003,
        "changePct": 0.04,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-06",
          "close": 6.6582,
          "prevDate": "2026-11-05",
          "prevClose": 6.6731,
          "change": -0.0149,
          "changePct": -0.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 6.6731,
          "prevDate": "2026-11-04",
          "prevClose": 6.6701,
          "change": 0.003,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6582,
        "series": [
          {
            "date": "2026-10-30",
            "close": 6.661
          },
          {
            "date": "2026-11-02",
            "close": 6.661
          },
          {
            "date": "2026-11-03",
            "close": 6.648
          },
          {
            "date": "2026-11-04",
            "close": 6.6701
          },
          {
            "date": "2026-11-05",
            "close": 6.6731
          },
          {
            "date": "2026-11-06",
            "close": 6.6582
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
        "close": 32.8212,
        "prevClose": 32.733,
        "change": 0.0882,
        "changePct": 0.27,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-06",
          "close": 32.968,
          "prevDate": "2026-11-05",
          "prevClose": 32.8212,
          "change": 0.1468,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 32.8212,
          "prevDate": "2026-11-04",
          "prevClose": 32.733,
          "change": 0.0882,
          "changePct": 0.27,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.968,
        "series": [
          {
            "date": "2026-10-30",
            "close": 32.5669
          },
          {
            "date": "2026-11-02",
            "close": 32.6064
          },
          {
            "date": "2026-11-03",
            "close": 32.5851
          },
          {
            "date": "2026-11-04",
            "close": 32.733
          },
          {
            "date": "2026-11-05",
            "close": 32.8212
          },
          {
            "date": "2026-11-06",
            "close": 32.968
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
        "close": 41574.7188,
        "prevClose": 42948.9102,
        "change": -1374.1914,
        "changePct": -3.2,
        "asOf": "2026-11-05",
        "prevAsOf": "2026-11-04",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-06",
          "close": 40337.3203,
          "prevDate": "2026-11-05",
          "prevClose": 41574.7188,
          "change": -1237.3985,
          "changePct": -2.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-05",
          "close": 41574.7188,
          "prevDate": "2026-11-04",
          "prevClose": 42948.9102,
          "change": -1374.1914,
          "changePct": -3.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 40337.32,
        "series": [
          {
            "date": "2026-10-30",
            "close": 45211.8281
          },
          {
            "date": "2026-11-02",
            "close": 44920.1406
          },
          {
            "date": "2026-11-03",
            "close": 43307.5391
          },
          {
            "date": "2026-11-04",
            "close": 42948.9102
          },
          {
            "date": "2026-11-05",
            "close": 41574.7188
          },
          {
            "date": "2026-11-06",
            "close": 40337.3203
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
