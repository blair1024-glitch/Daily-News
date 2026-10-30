/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-30T02:25:23.471Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11518.1992,
        "prevClose": 11684,
        "change": -165.8008,
        "changePct": -1.42,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-29",
          "close": 11518.1992,
          "prevDate": "2026-10-28",
          "prevClose": 11684,
          "change": -165.8008,
          "changePct": -1.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 11518.1992,
          "prevDate": "2026-10-28",
          "prevClose": 11684,
          "change": -165.8008,
          "changePct": -1.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11518.199,
        "series": [
          {
            "date": "2026-10-22",
            "close": 10731.9805
          },
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
            "close": 11518.1992
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
        "close": 17.2,
        "prevClose": 16.91,
        "change": 0.29,
        "changePct": 1.71,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-29",
          "close": 17.2,
          "prevDate": "2026-10-28",
          "prevClose": 16.91,
          "change": 0.29,
          "changePct": 1.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 17.2,
          "prevDate": "2026-10-28",
          "prevClose": 16.91,
          "change": 0.29,
          "changePct": 1.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 17.2,
        "series": [
          {
            "date": "2026-10-22",
            "close": 19.03
          },
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
        "close": 7720.3901,
        "prevClose": 7743.98,
        "change": -23.5899,
        "changePct": -0.3,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-29",
          "close": 7720.3901,
          "prevDate": "2026-10-28",
          "prevClose": 7743.98,
          "change": -23.5899,
          "changePct": -0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 7720.3901,
          "prevDate": "2026-10-28",
          "prevClose": 7743.98,
          "change": -23.5899,
          "changePct": -0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7720.39,
        "series": [
          {
            "date": "2026-10-22",
            "close": 7663.4302
          },
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
        "close": 26184.7246,
        "prevClose": 26549.8496,
        "change": -365.125,
        "changePct": -1.38,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-29",
          "close": 26184.7246,
          "prevDate": "2026-10-28",
          "prevClose": 26549.8496,
          "change": -365.125,
          "changePct": -1.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 26184.7246,
          "prevDate": "2026-10-28",
          "prevClose": 26549.8496,
          "change": -365.125,
          "changePct": -1.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26184.725,
        "series": [
          {
            "date": "2026-10-22",
            "close": 26008.8594
          },
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
            "close": 26184.7246
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
        "close": 52342.5586,
        "prevClose": 52475.1016,
        "change": -132.543,
        "changePct": -0.25,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-29",
          "close": 52342.5586,
          "prevDate": "2026-10-28",
          "prevClose": 52475.1016,
          "change": -132.543,
          "changePct": -0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 52342.5586,
          "prevDate": "2026-10-28",
          "prevClose": 52475.1016,
          "change": -132.543,
          "changePct": -0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52342.56,
        "series": [
          {
            "date": "2026-10-22",
            "close": 52867.9805
          },
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
        "close": 4.989,
        "prevClose": 5.045,
        "change": -0.056,
        "changePct": -1.11,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-29",
          "close": 4.989,
          "prevDate": "2026-10-28",
          "prevClose": 5.045,
          "change": -0.056,
          "changePct": -1.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 4.989,
          "prevDate": "2026-10-28",
          "prevClose": 5.045,
          "change": -0.056,
          "changePct": -1.11,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.989,
        "series": [
          {
            "date": "2026-10-22",
            "close": 4.953
          },
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
        "prevClose": 5.361,
        "change": -0.032,
        "changePct": -0.6,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-29",
          "close": 5.329,
          "prevDate": "2026-10-28",
          "prevClose": 5.361,
          "change": -0.032,
          "changePct": -0.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 5.329,
          "prevDate": "2026-10-28",
          "prevClose": 5.361,
          "change": -0.032,
          "changePct": -0.6,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.329,
        "series": [
          {
            "date": "2026-10-22",
            "close": 5.287
          },
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
        "prevClose": 4.871,
        "change": -0.07,
        "changePct": -1.44,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-29",
          "close": 4.801,
          "prevDate": "2026-10-28",
          "prevClose": 4.871,
          "change": -0.07,
          "changePct": -1.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 4.801,
          "prevDate": "2026-10-28",
          "prevClose": 4.871,
          "change": -0.07,
          "changePct": -1.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.801,
        "series": [
          {
            "date": "2026-10-22",
            "close": 4.768
          },
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
        "close": 102.19,
        "prevClose": 102.32,
        "change": -0.13,
        "changePct": -0.13,
        "asOf": "2026-10-28",
        "prevAsOf": "2026-10-27",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-29",
          "close": 101.729,
          "prevDate": "2026-10-28",
          "prevClose": 102.19,
          "change": -0.461,
          "changePct": -0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-28",
          "close": 102.19,
          "prevDate": "2026-10-27",
          "prevClose": 102.32,
          "change": -0.13,
          "changePct": -0.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.729,
        "series": [
          {
            "date": "2026-10-22",
            "close": 101.61
          },
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
            "close": 101.729
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
        "close": 102.78,
        "prevClose": 99.9,
        "change": 2.88,
        "changePct": 2.88,
        "asOf": "2026-10-28",
        "prevAsOf": "2026-10-27",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-29",
          "close": 104.18,
          "prevDate": "2026-10-28",
          "prevClose": 102.78,
          "change": 1.4,
          "changePct": 1.36,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-28",
          "close": 102.78,
          "prevDate": "2026-10-27",
          "prevClose": 99.9,
          "change": 2.88,
          "changePct": 2.88,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 104.18,
        "series": [
          {
            "date": "2026-10-22",
            "close": 99.47
          },
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
            "close": 104.18
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
        "close": 115.32,
        "prevClose": 113.88,
        "change": 1.44,
        "changePct": 1.26,
        "asOf": "2026-10-28",
        "prevAsOf": "2026-10-27",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-29",
          "close": 113.07,
          "prevDate": "2026-10-28",
          "prevClose": 115.32,
          "change": -2.25,
          "changePct": -1.95,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-28",
          "close": 115.32,
          "prevDate": "2026-10-27",
          "prevClose": 113.88,
          "change": 1.44,
          "changePct": 1.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 113.07,
        "series": [
          {
            "date": "2026-10-22",
            "close": 113.17
          },
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
            "close": 113.07
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
        "close": 4051.6001,
        "prevClose": 4074.6001,
        "change": -23,
        "changePct": -0.56,
        "asOf": "2026-10-28",
        "prevAsOf": "2026-10-27",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-29",
          "close": 4022.5,
          "prevDate": "2026-10-28",
          "prevClose": 4051.6001,
          "change": -29.1001,
          "changePct": -0.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-28",
          "close": 4051.6001,
          "prevDate": "2026-10-27",
          "prevClose": 4074.6001,
          "change": -23,
          "changePct": -0.56,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4022.5,
        "series": [
          {
            "date": "2026-10-22",
            "close": 4060.3999
          },
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
            "close": 4022.5
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
          "close": 157.478,
          "prevDate": "2026-10-29",
          "prevClose": 157.833,
          "change": -0.355,
          "changePct": -0.22,
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
        "quotePrice": 157.478,
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
            "close": 157.478
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
          "close": 6.6582,
          "prevDate": "2026-10-29",
          "prevClose": 6.666,
          "change": -0.0078,
          "changePct": -0.12,
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
        "quotePrice": 6.6582,
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
          "close": 32.64,
          "prevDate": "2026-10-29",
          "prevClose": 32.3828,
          "change": 0.2572,
          "changePct": 0.79,
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
        "quotePrice": 32.64,
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
            "close": 32.64
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
        "close": 46368.3281,
        "prevClose": 47035.5781,
        "change": -667.25,
        "changePct": -1.42,
        "asOf": "2026-10-29",
        "prevAsOf": "2026-10-28",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-30",
          "close": 44904.0586,
          "prevDate": "2026-10-29",
          "prevClose": 46368.3281,
          "change": -1464.2695,
          "changePct": -3.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-29",
          "close": 46368.3281,
          "prevDate": "2026-10-28",
          "prevClose": 47035.5781,
          "change": -667.25,
          "changePct": -1.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 44904.06,
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
            "close": 44904.0586
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
