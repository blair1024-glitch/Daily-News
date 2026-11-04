/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-04T18:29:23.781Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 10600.4004,
        "prevClose": 10328.3301,
        "change": 272.0703,
        "changePct": 2.63,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 10274.6572,
          "prevDate": "2026-11-03",
          "prevClose": 10600.4004,
          "change": -325.7432,
          "changePct": -3.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 10600.4004,
          "prevDate": "2026-11-02",
          "prevClose": 10328.3301,
          "change": 272.0703,
          "changePct": 2.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 10274.657,
        "series": [
          {
            "date": "2026-10-28",
            "close": 11684
          },
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
            "close": 10274.6572
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
        "close": 20.83,
        "prevClose": 21.15,
        "change": -0.32,
        "changePct": -1.51,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 16.85,
          "prevDate": "2026-11-03",
          "prevClose": 20.83,
          "change": -3.98,
          "changePct": -19.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 20.83,
          "prevDate": "2026-11-02",
          "prevClose": 21.15,
          "change": -0.32,
          "changePct": -1.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 16.85,
        "series": [
          {
            "date": "2026-10-28",
            "close": 16.91
          },
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
            "close": 16.85
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
        "close": 7568.9199,
        "prevClose": 7541.3999,
        "change": 27.52,
        "changePct": 0.36,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 7704.3301,
          "prevDate": "2026-11-03",
          "prevClose": 7568.9199,
          "change": 135.4102,
          "changePct": 1.79,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 7568.9199,
          "prevDate": "2026-11-02",
          "prevClose": 7541.3999,
          "change": 27.52,
          "changePct": 0.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7704.33,
        "series": [
          {
            "date": "2026-10-28",
            "close": 7743.98
          },
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
            "close": 7704.3301
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
        "close": 25372.0098,
        "prevClose": 25164.3105,
        "change": 207.6993,
        "changePct": 0.83,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 25874.584,
          "prevDate": "2026-11-03",
          "prevClose": 25372.0098,
          "change": 502.5742,
          "changePct": 1.98,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 25372.0098,
          "prevDate": "2026-11-02",
          "prevClose": 25164.3105,
          "change": 207.6993,
          "changePct": 0.83,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 25874.584,
        "series": [
          {
            "date": "2026-10-28",
            "close": 26549.8496
          },
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
            "close": 25874.584
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
        "close": 51786.7188,
        "prevClose": 51983.9805,
        "change": -197.2617,
        "changePct": -0.38,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 53270.9609,
          "prevDate": "2026-11-03",
          "prevClose": 51786.7188,
          "change": 1484.2421,
          "changePct": 2.87,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 51786.7188,
          "prevDate": "2026-11-02",
          "prevClose": 51983.9805,
          "change": -197.2617,
          "changePct": -0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 53270.96,
        "series": [
          {
            "date": "2026-10-28",
            "close": 52475.1016
          },
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
            "close": 53270.9609
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
        "close": 4.952,
        "prevClose": 4.894,
        "change": 0.058,
        "changePct": 1.19,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 4.904,
          "prevDate": "2026-11-03",
          "prevClose": 4.952,
          "change": -0.048,
          "changePct": -0.97,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 4.952,
          "prevDate": "2026-11-02",
          "prevClose": 4.894,
          "change": 0.058,
          "changePct": 1.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.904,
        "series": [
          {
            "date": "2026-10-28",
            "close": 5.045
          },
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
            "close": 4.904
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
        "close": 5.324,
        "prevClose": 5.269,
        "change": 0.055,
        "changePct": 1.04,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 5.298,
          "prevDate": "2026-11-03",
          "prevClose": 5.324,
          "change": -0.026,
          "changePct": -0.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 5.324,
          "prevDate": "2026-11-02",
          "prevClose": 5.269,
          "change": 0.055,
          "changePct": 1.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.298,
        "series": [
          {
            "date": "2026-10-28",
            "close": 5.361
          },
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
            "close": 5.298
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
        "close": 4.743,
        "prevClose": 4.693,
        "change": 0.05,
        "changePct": 1.07,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 4.695,
          "prevDate": "2026-11-03",
          "prevClose": 4.743,
          "change": -0.048,
          "changePct": -1.01,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 4.743,
          "prevDate": "2026-11-02",
          "prevClose": 4.693,
          "change": 0.05,
          "changePct": 1.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.695,
        "series": [
          {
            "date": "2026-10-28",
            "close": 4.871
          },
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
            "close": 4.695
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
        "close": 101.87,
        "prevClose": 101.75,
        "change": 0.12,
        "changePct": 0.12,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 101.464,
          "prevDate": "2026-11-03",
          "prevClose": 101.87,
          "change": -0.406,
          "changePct": -0.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 101.87,
          "prevDate": "2026-11-02",
          "prevClose": 101.75,
          "change": 0.12,
          "changePct": 0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.464,
        "series": [
          {
            "date": "2026-10-28",
            "close": 102.19
          },
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
            "close": 101.464
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
        "close": 96.09,
        "prevClose": 96.46,
        "change": -0.37,
        "changePct": -0.38,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 88.48,
          "prevDate": "2026-11-03",
          "prevClose": 96.09,
          "change": -7.61,
          "changePct": -7.92,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 96.09,
          "prevDate": "2026-11-02",
          "prevClose": 96.46,
          "change": -0.37,
          "changePct": -0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 88.48,
        "series": [
          {
            "date": "2026-10-28",
            "close": 102.78
          },
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
            "close": 88.48
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
        "close": 103.6,
        "prevClose": 104.77,
        "change": -1.17,
        "changePct": -1.12,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 95.1,
          "prevDate": "2026-11-03",
          "prevClose": 103.6,
          "change": -8.5,
          "changePct": -8.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 103.6,
          "prevDate": "2026-11-02",
          "prevClose": 104.77,
          "change": -1.17,
          "changePct": -1.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 95.1,
        "series": [
          {
            "date": "2026-10-28",
            "close": 115.32
          },
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
            "close": 95.1
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
        "close": 3940.3999,
        "prevClose": 3969.6001,
        "change": -29.2002,
        "changePct": -0.74,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 4077.5,
          "prevDate": "2026-11-03",
          "prevClose": 3940.3999,
          "change": 137.1001,
          "changePct": 3.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 3940.3999,
          "prevDate": "2026-11-02",
          "prevClose": 3969.6001,
          "change": -29.2002,
          "changePct": -0.74,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4077.5,
        "series": [
          {
            "date": "2026-10-28",
            "close": 4051.6001
          },
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
            "close": 4077.5
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
        "close": 157.915,
        "prevClose": 157.677,
        "change": 0.238,
        "changePct": 0.15,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 158.416,
          "prevDate": "2026-11-03",
          "prevClose": 157.915,
          "change": 0.501,
          "changePct": 0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 157.915,
          "prevDate": "2026-11-02",
          "prevClose": 157.677,
          "change": 0.238,
          "changePct": 0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.416,
        "series": [
          {
            "date": "2026-10-28",
            "close": 157.993
          },
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
            "close": 158.416
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
        "close": 6.648,
        "prevClose": 6.661,
        "change": -0.013,
        "changePct": -0.2,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 6.6633,
          "prevDate": "2026-11-03",
          "prevClose": 6.648,
          "change": 0.0153,
          "changePct": 0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 6.648,
          "prevDate": "2026-11-02",
          "prevClose": 6.661,
          "change": -0.013,
          "changePct": -0.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6633,
        "series": [
          {
            "date": "2026-10-28",
            "close": 6.668
          },
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
            "close": 6.6633
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
        "close": 32.5851,
        "prevClose": 32.6064,
        "change": -0.0213,
        "changePct": -0.07,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-04",
          "close": 32.84,
          "prevDate": "2026-11-03",
          "prevClose": 32.5851,
          "change": 0.2549,
          "changePct": 0.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 32.5851,
          "prevDate": "2026-11-02",
          "prevClose": 32.6064,
          "change": -0.0213,
          "changePct": -0.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.84,
        "series": [
          {
            "date": "2026-10-28",
            "close": 32.4255
          },
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
            "close": 32.84
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
        "close": 43307.5391,
        "prevClose": 44920.1406,
        "change": -1612.6015,
        "changePct": -3.59,
        "asOf": "2026-11-03",
        "prevAsOf": "2026-11-02",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-03",
          "close": 43307.5391,
          "prevDate": "2026-11-02",
          "prevClose": 44920.1406,
          "change": -1612.6015,
          "changePct": -3.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-03",
          "close": 43307.5391,
          "prevDate": "2026-11-02",
          "prevClose": 44920.1406,
          "change": -1612.6015,
          "changePct": -3.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 42948.91,
        "series": [
          {
            "date": "2026-10-27",
            "close": 46096.2305
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
