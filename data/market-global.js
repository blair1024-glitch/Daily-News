/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-11-03T03:50:51.071Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 10328.3291,
        "prevClose": 10688.7998,
        "change": -360.4707,
        "changePct": -3.37,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-02",
          "close": 10328.3291,
          "prevDate": "2026-10-30",
          "prevClose": 10688.7998,
          "change": -360.4707,
          "changePct": -3.37,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 10328.3291,
          "prevDate": "2026-10-30",
          "prevClose": 10688.7998,
          "change": -360.4707,
          "changePct": -3.37,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 10328.329,
        "series": [
          {
            "date": "2026-10-26",
            "close": 11083.4697
          },
          {
            "date": "2026-10-27",
            "close": 11482.5
          },
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
            "close": 10328.3291
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
        "close": 21.15,
        "prevClose": 19.42,
        "change": 1.73,
        "changePct": 8.91,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-02",
          "close": 21.15,
          "prevDate": "2026-10-30",
          "prevClose": 19.42,
          "change": 1.73,
          "changePct": 8.91,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 21.15,
          "prevDate": "2026-10-30",
          "prevClose": 19.42,
          "change": 1.73,
          "changePct": 8.91,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 21.15,
        "series": [
          {
            "date": "2026-10-26",
            "close": 18.39
          },
          {
            "date": "2026-10-27",
            "close": 17.52
          },
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
        "close": 7541.3999,
        "prevClose": 7580.0698,
        "change": -38.6699,
        "changePct": -0.51,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-02",
          "close": 7541.3999,
          "prevDate": "2026-10-30",
          "prevClose": 7580.0698,
          "change": -38.6699,
          "changePct": -0.51,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 7541.3999,
          "prevDate": "2026-10-30",
          "prevClose": 7580.0698,
          "change": -38.6699,
          "changePct": -0.51,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7541.4,
        "series": [
          {
            "date": "2026-10-26",
            "close": 7676.77
          },
          {
            "date": "2026-10-27",
            "close": 7722.6001
          },
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
        "close": 25164.3633,
        "prevClose": 25437,
        "change": -272.6367,
        "changePct": -1.07,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-02",
          "close": 25164.3633,
          "prevDate": "2026-10-30",
          "prevClose": 25437,
          "change": -272.6367,
          "changePct": -1.07,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 25164.3633,
          "prevDate": "2026-10-30",
          "prevClose": 25437,
          "change": -272.6367,
          "changePct": -1.07,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 25164.363,
        "series": [
          {
            "date": "2026-10-26",
            "close": 26169.3809
          },
          {
            "date": "2026-10-27",
            "close": 26477.8105
          },
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
            "close": 25164.3633
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
        "close": 51983.9805,
        "prevClose": 51770.3086,
        "change": 213.6719,
        "changePct": 0.41,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-02",
          "close": 51983.9805,
          "prevDate": "2026-10-30",
          "prevClose": 51770.3086,
          "change": 213.6719,
          "changePct": 0.41,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 51983.9805,
          "prevDate": "2026-10-30",
          "prevClose": 51770.3086,
          "change": 213.6719,
          "changePct": 0.41,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 51983.98,
        "series": [
          {
            "date": "2026-10-26",
            "close": 52361.5781
          },
          {
            "date": "2026-10-27",
            "close": 52377.5703
          },
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
        "prevClose": 4.929,
        "change": -0.035,
        "changePct": -0.71,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-02",
          "close": 4.894,
          "prevDate": "2026-10-30",
          "prevClose": 4.929,
          "change": -0.035,
          "changePct": -0.71,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 4.894,
          "prevDate": "2026-10-30",
          "prevClose": 4.929,
          "change": -0.035,
          "changePct": -0.71,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.894,
        "series": [
          {
            "date": "2026-10-26",
            "close": 4.986
          },
          {
            "date": "2026-10-27",
            "close": 4.993
          },
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
        "close": 5.269,
        "prevClose": 5.309,
        "change": -0.04,
        "changePct": -0.75,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-02",
          "close": 5.269,
          "prevDate": "2026-10-30",
          "prevClose": 5.309,
          "change": -0.04,
          "changePct": -0.75,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 5.269,
          "prevDate": "2026-10-30",
          "prevClose": 5.309,
          "change": -0.04,
          "changePct": -0.75,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.269,
        "series": [
          {
            "date": "2026-10-26",
            "close": 5.301
          },
          {
            "date": "2026-10-27",
            "close": 5.305
          },
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
        "close": 4.693,
        "prevClose": 4.721,
        "change": -0.028,
        "changePct": -0.59,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-11-02",
          "close": 4.693,
          "prevDate": "2026-10-30",
          "prevClose": 4.721,
          "change": -0.028,
          "changePct": -0.59,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 4.693,
          "prevDate": "2026-10-30",
          "prevClose": 4.721,
          "change": -0.028,
          "changePct": -0.59,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.693,
        "series": [
          {
            "date": "2026-10-26",
            "close": 4.824
          },
          {
            "date": "2026-10-27",
            "close": 4.84
          },
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
        "close": 101.88,
        "prevClose": 102.04,
        "change": -0.16,
        "changePct": -0.16,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-02",
          "close": 101.787,
          "prevDate": "2026-10-30",
          "prevClose": 101.88,
          "change": -0.093,
          "changePct": -0.09,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 101.88,
          "prevDate": "2026-10-29",
          "prevClose": 102.04,
          "change": -0.16,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.787,
        "series": [
          {
            "date": "2026-10-26",
            "close": 101.96
          },
          {
            "date": "2026-10-27",
            "close": 102.32
          },
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
            "close": 101.787
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
        "close": 104.12,
        "prevClose": 102,
        "change": 2.12,
        "changePct": 2.08,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-02",
          "close": 96.59,
          "prevDate": "2026-10-30",
          "prevClose": 104.12,
          "change": -7.53,
          "changePct": -7.23,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 104.12,
          "prevDate": "2026-10-29",
          "prevClose": 102,
          "change": 2.12,
          "changePct": 2.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 96.59,
        "series": [
          {
            "date": "2026-10-26",
            "close": 101.76
          },
          {
            "date": "2026-10-27",
            "close": 99.9
          },
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
            "close": 96.59
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
        "close": 117.64,
        "prevClose": 114.88,
        "change": 2.76,
        "changePct": 2.4,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-02",
          "close": 104.71,
          "prevDate": "2026-10-30",
          "prevClose": 117.64,
          "change": -12.93,
          "changePct": -10.99,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 117.64,
          "prevDate": "2026-10-29",
          "prevClose": 114.88,
          "change": 2.76,
          "changePct": 2.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 104.71,
        "series": [
          {
            "date": "2026-10-26",
            "close": 115.81
          },
          {
            "date": "2026-10-27",
            "close": 113.88
          },
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
            "close": 104.71
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
        "close": 3898.8999,
        "prevClose": 4031.3999,
        "change": -132.5,
        "changePct": -3.29,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-02",
          "close": 3936.2,
          "prevDate": "2026-10-30",
          "prevClose": 3898.8999,
          "change": 37.3001,
          "changePct": 0.96,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 3898.8999,
          "prevDate": "2026-10-29",
          "prevClose": 4031.3999,
          "change": -132.5,
          "changePct": -3.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3936.2,
        "series": [
          {
            "date": "2026-10-26",
            "close": 4038.3999
          },
          {
            "date": "2026-10-27",
            "close": 4074.6001
          },
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
            "close": 3936.2
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
        "close": 157.677,
        "prevClose": 157.804,
        "change": -0.127,
        "changePct": -0.08,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-03",
          "close": 157.88,
          "prevDate": "2026-11-02",
          "prevClose": 157.677,
          "change": 0.203,
          "changePct": 0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 157.677,
          "prevDate": "2026-10-30",
          "prevClose": 157.804,
          "change": -0.127,
          "changePct": -0.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 157.88,
        "series": [
          {
            "date": "2026-10-27",
            "close": 157.528
          },
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
            "close": 157.88
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
        "close": 6.661,
        "prevClose": 6.661,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-03",
          "close": 6.6696,
          "prevDate": "2026-11-02",
          "prevClose": 6.661,
          "change": 0.0086,
          "changePct": 0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 6.661,
          "prevDate": "2026-10-30",
          "prevClose": 6.661,
          "change": 0,
          "changePct": 0,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.6696,
        "series": [
          {
            "date": "2026-10-27",
            "close": 6.67
          },
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
            "close": 6.6696
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
        "close": 32.6064,
        "prevClose": 32.5669,
        "change": 0.0395,
        "changePct": 0.12,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-03",
          "close": 32.698,
          "prevDate": "2026-11-02",
          "prevClose": 32.6064,
          "change": 0.0916,
          "changePct": 0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 32.6064,
          "prevDate": "2026-10-30",
          "prevClose": 32.5669,
          "change": 0.0395,
          "changePct": 0.12,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 32.698,
        "series": [
          {
            "date": "2026-10-27",
            "close": 32.5348
          },
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
            "close": 32.698
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
        "close": 44920.1406,
        "prevClose": 45211.8281,
        "change": -291.6875,
        "changePct": -0.65,
        "asOf": "2026-11-02",
        "prevAsOf": "2026-10-30",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-11-03",
          "close": 43889.1016,
          "prevDate": "2026-11-02",
          "prevClose": 44920.1406,
          "change": -1031.039,
          "changePct": -2.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-11-02",
          "close": 44920.1406,
          "prevDate": "2026-10-30",
          "prevClose": 45211.8281,
          "change": -291.6875,
          "changePct": -0.65,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 43889.1,
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
            "close": 43889.1016
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
