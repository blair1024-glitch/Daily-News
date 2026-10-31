/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-31T02:02:23.658Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 10688.7998,
        "prevClose": 11518.2002,
        "change": -829.4004,
        "changePct": -7.2,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-30",
          "close": 10688.7998,
          "prevDate": "2026-10-29",
          "prevClose": 11518.2002,
          "change": -829.4004,
          "changePct": -7.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 10688.7998,
          "prevDate": "2026-10-29",
          "prevClose": 11518.2002,
          "change": -829.4004,
          "changePct": -7.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 10688.8,
        "series": [
          {
            "date": "2026-10-23",
            "close": 10779.46
          },
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
        "close": 19.42,
        "prevClose": 17.2,
        "change": 2.22,
        "changePct": 12.91,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-30",
          "close": 19.42,
          "prevDate": "2026-10-29",
          "prevClose": 17.2,
          "change": 2.22,
          "changePct": 12.91,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 19.42,
          "prevDate": "2026-10-29",
          "prevClose": 17.2,
          "change": 2.22,
          "changePct": 12.91,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 19.42,
        "series": [
          {
            "date": "2026-10-23",
            "close": 19.45
          },
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
        "close": 7580.0698,
        "prevClose": 7720.3901,
        "change": -140.3203,
        "changePct": -1.82,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-30",
          "close": 7580.0698,
          "prevDate": "2026-10-29",
          "prevClose": 7720.3901,
          "change": -140.3203,
          "changePct": -1.82,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 7580.0698,
          "prevDate": "2026-10-29",
          "prevClose": 7720.3901,
          "change": -140.3203,
          "changePct": -1.82,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7580.07,
        "series": [
          {
            "date": "2026-10-23",
            "close": 7623.6802
          },
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
        "close": 25436.998,
        "prevClose": 26184.7207,
        "change": -747.7227,
        "changePct": -2.86,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-30",
          "close": 25436.998,
          "prevDate": "2026-10-29",
          "prevClose": 26184.7207,
          "change": -747.7227,
          "changePct": -2.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 25436.998,
          "prevDate": "2026-10-29",
          "prevClose": 26184.7207,
          "change": -747.7227,
          "changePct": -2.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 25436.998,
        "series": [
          {
            "date": "2026-10-23",
            "close": 25955.3398
          },
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
            "close": 25436.998
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
        "close": 51770.3086,
        "prevClose": 52342.5586,
        "change": -572.25,
        "changePct": -1.09,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-30",
          "close": 51770.3086,
          "prevDate": "2026-10-29",
          "prevClose": 52342.5586,
          "change": -572.25,
          "changePct": -1.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 51770.3086,
          "prevDate": "2026-10-29",
          "prevClose": 52342.5586,
          "change": -572.25,
          "changePct": -1.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51770.31,
        "series": [
          {
            "date": "2026-10-23",
            "close": 52215.1602
          },
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
        "close": 4.929,
        "prevClose": 4.989,
        "change": -0.06,
        "changePct": -1.2,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-30",
          "close": 4.929,
          "prevDate": "2026-10-29",
          "prevClose": 4.989,
          "change": -0.06,
          "changePct": -1.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 4.929,
          "prevDate": "2026-10-29",
          "prevClose": 4.989,
          "change": -0.06,
          "changePct": -1.2,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.929,
        "series": [
          {
            "date": "2026-10-23",
            "close": 4.988
          },
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
        "close": 5.309,
        "prevClose": 5.329,
        "change": -0.02,
        "changePct": -0.38,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-30",
          "close": 5.309,
          "prevDate": "2026-10-29",
          "prevClose": 5.329,
          "change": -0.02,
          "changePct": -0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 5.309,
          "prevDate": "2026-10-29",
          "prevClose": 5.329,
          "change": -0.02,
          "changePct": -0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.309,
        "series": [
          {
            "date": "2026-10-23",
            "close": 5.315
          },
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
        "close": 4.721,
        "prevClose": 4.801,
        "change": -0.08,
        "changePct": -1.67,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-30",
          "close": 4.721,
          "prevDate": "2026-10-29",
          "prevClose": 4.801,
          "change": -0.08,
          "changePct": -1.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 4.721,
          "prevDate": "2026-10-29",
          "prevClose": 4.801,
          "change": -0.08,
          "changePct": -1.67,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.7209997,
        "series": [
          {
            "date": "2026-10-23",
            "close": 4.805
          },
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
        "close": 102.04,
        "prevClose": 102.19,
        "change": -0.15,
        "changePct": -0.15,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-30",
          "close": 101.964,
          "prevDate": "2026-10-29",
          "prevClose": 102.04,
          "change": -0.076,
          "changePct": -0.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 102.04,
          "prevDate": "2026-10-28",
          "prevClose": 102.19,
          "change": -0.15,
          "changePct": -0.15,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.964,
        "series": [
          {
            "date": "2026-10-23",
            "close": 101.81
          },
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
            "close": 101.964
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
        "close": 102,
        "prevClose": 102.78,
        "change": -0.78,
        "changePct": -0.76,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-30",
          "close": 102.95,
          "prevDate": "2026-10-29",
          "prevClose": 102,
          "change": 0.95,
          "changePct": 0.93,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 102,
          "prevDate": "2026-10-28",
          "prevClose": 102.78,
          "change": -0.78,
          "changePct": -0.76,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.95,
        "series": [
          {
            "date": "2026-10-23",
            "close": 103.27
          },
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
            "close": 102.95
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
        "close": 114.88,
        "prevClose": 115.32,
        "change": -0.44,
        "changePct": -0.38,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-30",
          "close": 112.33,
          "prevDate": "2026-10-29",
          "prevClose": 114.88,
          "change": -2.55,
          "changePct": -2.22,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 114.88,
          "prevDate": "2026-10-28",
          "prevClose": 115.32,
          "change": -0.44,
          "changePct": -0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 112.33,
        "series": [
          {
            "date": "2026-10-23",
            "close": 116.72
          },
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
            "close": 112.33
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
        "close": 4031.3999,
        "prevClose": 4051.6001,
        "change": -20.2002,
        "changePct": -0.5,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-30",
          "close": 3884.8999,
          "prevDate": "2026-10-29",
          "prevClose": 4031.3999,
          "change": -146.5,
          "changePct": -3.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 4031.3999,
          "prevDate": "2026-10-28",
          "prevClose": 4051.6001,
          "change": -20.2002,
          "changePct": -0.5,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 3884.9,
        "series": [
          {
            "date": "2026-10-23",
            "close": 4007.8999
          },
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
            "close": 3884.8999
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
        "close": 157.833,
        "prevClose": 157.993,
        "change": -0.16,
        "changePct": -0.1,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-30",
          "close": 157.804,
          "prevDate": "2026-10-29",
          "prevClose": 157.833,
          "change": -0.029,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 157.833,
          "prevDate": "2026-10-28",
          "prevClose": 157.993,
          "change": -0.16,
          "changePct": -0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.519,
        "series": [
          {
            "date": "2026-10-23",
            "close": 156.494
          },
          {
            "date": "2026-10-26",
            "close": 156.83
          },
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
        "close": 6.666,
        "prevClose": 6.668,
        "change": -0.002,
        "changePct": -0.03,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-30",
          "close": 6.661,
          "prevDate": "2026-10-29",
          "prevClose": 6.666,
          "change": -0.005,
          "changePct": -0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 6.666,
          "prevDate": "2026-10-28",
          "prevClose": 6.668,
          "change": -0.002,
          "changePct": -0.03,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6533,
        "series": [
          {
            "date": "2026-10-23",
            "close": 6.6779
          },
          {
            "date": "2026-10-26",
            "close": 6.6779
          },
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
        "close": 32.3828,
        "prevClose": 32.4255,
        "change": -0.0427,
        "changePct": -0.13,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-30",
          "close": 32.5669,
          "prevDate": "2026-10-29",
          "prevClose": 32.3828,
          "change": 0.1841,
          "changePct": 0.57,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 32.3828,
          "prevDate": "2026-10-28",
          "prevClose": 32.4255,
          "change": -0.0427,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.605,
        "series": [
          {
            "date": "2026-10-23",
            "close": 32.597
          },
          {
            "date": "2026-10-26",
            "close": 32.5708
          },
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
        "close": 45211.8281,
        "prevClose": 46368.3281,
        "change": -1156.5,
        "changePct": -2.49,
        "asOf": "2026-10-30",
        "prevAsOf": "2026-10-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-30",
          "close": 45211.8281,
          "prevDate": "2026-10-29",
          "prevClose": 46368.3281,
          "change": -1156.5,
          "changePct": -2.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-30",
          "close": 45211.8281,
          "prevDate": "2026-10-29",
          "prevClose": 46368.3281,
          "change": -1156.5,
          "changePct": -2.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 45211.83,
        "series": [
          {
            "date": "2026-10-21",
            "close": 46887.7695
          },
          {
            "date": "2026-10-22",
            "close": 46041.4297
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
