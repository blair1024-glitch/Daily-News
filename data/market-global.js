/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-05T18:32:17.464Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 10268.6504,
        "prevClose": 10600.4004,
        "change": -331.75,
        "changePct": -3.13,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 9217.7285,
          "prevDate": "2026-11-04",
          "prevClose": 10268.6504,
          "change": -1050.9219,
          "changePct": -10.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 10268.6504,
          "prevDate": "2026-11-03",
          "prevClose": 10600.4004,
          "change": -331.75,
          "changePct": -3.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 9217.729,
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
            "close": 9217.7285
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
        "close": 16.61,
        "prevClose": 20.83,
        "change": -4.22,
        "changePct": -20.26,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 26.18,
          "prevDate": "2026-11-04",
          "prevClose": 16.61,
          "change": 9.57,
          "changePct": 57.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 16.61,
          "prevDate": "2026-11-03",
          "prevClose": 20.83,
          "change": -4.22,
          "changePct": -20.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26.18,
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
            "close": 26.18
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
        "close": 7688.6201,
        "prevClose": 7568.9199,
        "change": 119.7002,
        "changePct": 1.58,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 7387.3198,
          "prevDate": "2026-11-04",
          "prevClose": 7688.6201,
          "change": -301.3003,
          "changePct": -3.92,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 7688.6201,
          "prevDate": "2026-11-03",
          "prevClose": 7568.9199,
          "change": 119.7002,
          "changePct": 1.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7387.32,
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
            "close": 7387.3198
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
        "close": 25736.5098,
        "prevClose": 25372.0098,
        "change": 364.5,
        "changePct": 1.44,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 24401.2148,
          "prevDate": "2026-11-04",
          "prevClose": 25736.5098,
          "change": -1335.295,
          "changePct": -5.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 25736.5098,
          "prevDate": "2026-11-03",
          "prevClose": 25372.0098,
          "change": 364.5,
          "changePct": 1.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 24401.215,
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
            "close": 24401.2148
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
        "close": 53356.1211,
        "prevClose": 51786.7188,
        "change": 1569.4023,
        "changePct": 3.03,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 51758.3203,
          "prevDate": "2026-11-04",
          "prevClose": 53356.1211,
          "change": -1597.8008,
          "changePct": -2.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 53356.1211,
          "prevDate": "2026-11-03",
          "prevClose": 51786.7188,
          "change": 1569.4023,
          "changePct": 3.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51758.32,
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
            "close": 51758.3203
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
        "close": 4.894,
        "prevClose": 4.952,
        "change": -0.058,
        "changePct": -1.17,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 4.831,
          "prevDate": "2026-11-04",
          "prevClose": 4.894,
          "change": -0.063,
          "changePct": -1.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 4.894,
          "prevDate": "2026-11-03",
          "prevClose": 4.952,
          "change": -0.058,
          "changePct": -1.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.831,
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
            "close": 4.831
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
        "close": 5.282,
        "prevClose": 5.324,
        "change": -0.042,
        "changePct": -0.79,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 5.247,
          "prevDate": "2026-11-04",
          "prevClose": 5.282,
          "change": -0.035,
          "changePct": -0.66,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 5.282,
          "prevDate": "2026-11-03",
          "prevClose": 5.324,
          "change": -0.042,
          "changePct": -0.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.247,
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
            "close": 5.247
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
        "close": 4.689,
        "prevClose": 4.743,
        "change": -0.054,
        "changePct": -1.14,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 4.601,
          "prevDate": "2026-11-04",
          "prevClose": 4.689,
          "change": -0.088,
          "changePct": -1.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 4.689,
          "prevDate": "2026-11-03",
          "prevClose": 4.743,
          "change": -0.054,
          "changePct": -1.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.601,
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
            "close": 4.601
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
          "close": 101.445,
          "prevDate": "2026-11-04",
          "prevClose": 101.51,
          "change": -0.065,
          "changePct": -0.06,
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
        "quotePrice": 101.445,
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
            "close": 101.445
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
          "close": 90.66,
          "prevDate": "2026-11-04",
          "prevClose": 88.12,
          "change": 2.54,
          "changePct": 2.88,
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
        "quotePrice": 90.66,
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
            "close": 90.66
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
          "close": 98.02,
          "prevDate": "2026-11-04",
          "prevClose": 94.62,
          "change": 3.4,
          "changePct": 3.59,
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
        "quotePrice": 98.02,
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
            "close": 98.02
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
          "close": 4107.8999,
          "prevDate": "2026-11-04",
          "prevClose": 4073,
          "change": 34.8999,
          "changePct": 0.86,
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
        "quotePrice": 4107.9,
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
            "close": 4107.8999
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
        "close": 158.469,
        "prevClose": 157.915,
        "change": 0.554,
        "changePct": 0.35,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 157.682,
          "prevDate": "2026-11-04",
          "prevClose": 158.469,
          "change": -0.787,
          "changePct": -0.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 158.469,
          "prevDate": "2026-11-03",
          "prevClose": 157.915,
          "change": 0.554,
          "changePct": 0.35,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.682,
        "series": [
          {
            "date": "2026-10-29",
            "close": 157.833
          },
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
            "close": 157.682
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
        "close": 6.6701,
        "prevClose": 6.648,
        "change": 0.0221,
        "changePct": 0.33,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 6.6574,
          "prevDate": "2026-11-04",
          "prevClose": 6.6701,
          "change": -0.0127,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 6.6701,
          "prevDate": "2026-11-03",
          "prevClose": 6.648,
          "change": 0.0221,
          "changePct": 0.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6574,
        "series": [
          {
            "date": "2026-10-29",
            "close": 6.666
          },
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
            "close": 6.6574
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
        "close": 32.733,
        "prevClose": 32.5851,
        "change": 0.1479,
        "changePct": 0.45,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-05",
          "close": 33.045,
          "prevDate": "2026-11-04",
          "prevClose": 32.733,
          "change": 0.312,
          "changePct": 0.95,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 32.733,
          "prevDate": "2026-11-03",
          "prevClose": 32.5851,
          "change": 0.1479,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 33.045,
        "series": [
          {
            "date": "2026-10-29",
            "close": 32.3828
          },
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
            "close": 33.045
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
        "close": 42948.9102,
        "prevClose": 43307.5391,
        "change": -358.6289,
        "changePct": -0.83,
        "asOf": "2026-11-04",
        "prevAsOf": "2026-11-03",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-04",
          "close": 42948.9102,
          "prevDate": "2026-11-03",
          "prevClose": 43307.5391,
          "change": -358.6289,
          "changePct": -0.83,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-04",
          "close": 42948.9102,
          "prevDate": "2026-11-03",
          "prevClose": 43307.5391,
          "change": -358.6289,
          "changePct": -0.83,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 41574.72,
        "series": [
          {
            "date": "2026-10-28",
            "close": 47035.5781
          },
          {
            "date": "2026-10-29",
            "close": 46368.3281
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
