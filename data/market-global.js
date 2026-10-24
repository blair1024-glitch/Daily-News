/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-24T01:23:46.356Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 10779.4639,
        "prevClose": 10731.9805,
        "change": 47.4834,
        "changePct": 0.44,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-23",
          "close": 10779.4639,
          "prevDate": "2026-10-22",
          "prevClose": 10731.9805,
          "change": 47.4834,
          "changePct": 0.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 10779.4639,
          "prevDate": "2026-10-22",
          "prevClose": 10731.9805,
          "change": 47.4834,
          "changePct": 0.44,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 10779.464,
        "series": [
          {
            "date": "2026-10-16",
            "close": 11137.29
          },
          {
            "date": "2026-10-19",
            "close": 11316.3398
          },
          {
            "date": "2026-10-20",
            "close": 11283.8096
          },
          {
            "date": "2026-10-21",
            "close": 11505.5596
          },
          {
            "date": "2026-10-22",
            "close": 10731.9805
          },
          {
            "date": "2026-10-23",
            "close": 10779.4639
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
        "close": 19.45,
        "prevClose": 19.03,
        "change": 0.42,
        "changePct": 2.21,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-23",
          "close": 19.45,
          "prevDate": "2026-10-22",
          "prevClose": 19.03,
          "change": 0.42,
          "changePct": 2.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 19.45,
          "prevDate": "2026-10-22",
          "prevClose": 19.03,
          "change": 0.42,
          "changePct": 2.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 19.45,
        "series": [
          {
            "date": "2026-10-16",
            "close": 19.99
          },
          {
            "date": "2026-10-19",
            "close": 18.44
          },
          {
            "date": "2026-10-20",
            "close": 17.31
          },
          {
            "date": "2026-10-21",
            "close": 16.68
          },
          {
            "date": "2026-10-22",
            "close": 19.03
          },
          {
            "date": "2026-10-23",
            "close": 19.45
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
        "close": 7623.6802,
        "prevClose": 7663.4302,
        "change": -39.75,
        "changePct": -0.52,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-23",
          "close": 7623.6802,
          "prevDate": "2026-10-22",
          "prevClose": 7663.4302,
          "change": -39.75,
          "changePct": -0.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 7623.6802,
          "prevDate": "2026-10-22",
          "prevClose": 7663.4302,
          "change": -39.75,
          "changePct": -0.52,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7623.68,
        "series": [
          {
            "date": "2026-10-16",
            "close": 7659.4399
          },
          {
            "date": "2026-10-19",
            "close": 7690.73
          },
          {
            "date": "2026-10-20",
            "close": 7712.5698
          },
          {
            "date": "2026-10-21",
            "close": 7757.1699
          },
          {
            "date": "2026-10-22",
            "close": 7663.4302
          },
          {
            "date": "2026-10-23",
            "close": 7623.6802
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
        "close": 25955.3418,
        "prevClose": 26008.8594,
        "change": -53.5176,
        "changePct": -0.21,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-23",
          "close": 25955.3418,
          "prevDate": "2026-10-22",
          "prevClose": 26008.8594,
          "change": -53.5176,
          "changePct": -0.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 25955.3418,
          "prevDate": "2026-10-22",
          "prevClose": 26008.8594,
          "change": -53.5176,
          "changePct": -0.21,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 25955.342,
        "series": [
          {
            "date": "2026-10-16",
            "close": 26140.0293
          },
          {
            "date": "2026-10-19",
            "close": 26430.8906
          },
          {
            "date": "2026-10-20",
            "close": 26424.8203
          },
          {
            "date": "2026-10-21",
            "close": 26702.8594
          },
          {
            "date": "2026-10-22",
            "close": 26008.8594
          },
          {
            "date": "2026-10-23",
            "close": 25955.3418
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
        "close": 52215.1602,
        "prevClose": 52867.9805,
        "change": -652.8203,
        "changePct": -1.23,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-23",
          "close": 52215.1602,
          "prevDate": "2026-10-22",
          "prevClose": 52867.9805,
          "change": -652.8203,
          "changePct": -1.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 52215.1602,
          "prevDate": "2026-10-22",
          "prevClose": 52867.9805,
          "change": -652.8203,
          "changePct": -1.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52215.16,
        "series": [
          {
            "date": "2026-10-16",
            "close": 52002.4102
          },
          {
            "date": "2026-10-19",
            "close": 51966.0313
          },
          {
            "date": "2026-10-20",
            "close": 52495.8789
          },
          {
            "date": "2026-10-21",
            "close": 52856.0898
          },
          {
            "date": "2026-10-22",
            "close": 52867.9805
          },
          {
            "date": "2026-10-23",
            "close": 52215.1602
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
        "close": 4.988,
        "prevClose": 4.953,
        "change": 0.035,
        "changePct": 0.71,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-23",
          "close": 4.988,
          "prevDate": "2026-10-22",
          "prevClose": 4.953,
          "change": 0.035,
          "changePct": 0.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 4.988,
          "prevDate": "2026-10-22",
          "prevClose": 4.953,
          "change": 0.035,
          "changePct": 0.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.988,
        "series": [
          {
            "date": "2026-10-16",
            "close": 5.098
          },
          {
            "date": "2026-10-19",
            "close": 5.136
          },
          {
            "date": "2026-10-20",
            "close": 5.117
          },
          {
            "date": "2026-10-21",
            "close": 5.146
          },
          {
            "date": "2026-10-22",
            "close": 4.953
          },
          {
            "date": "2026-10-23",
            "close": 4.988
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
        "close": 5.315,
        "prevClose": 5.287,
        "change": 0.028,
        "changePct": 0.53,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-23",
          "close": 5.315,
          "prevDate": "2026-10-22",
          "prevClose": 5.287,
          "change": 0.028,
          "changePct": 0.53,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 5.315,
          "prevDate": "2026-10-22",
          "prevClose": 5.287,
          "change": 0.028,
          "changePct": 0.53,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.315,
        "series": [
          {
            "date": "2026-10-16",
            "close": 5.436
          },
          {
            "date": "2026-10-19",
            "close": 5.472
          },
          {
            "date": "2026-10-20",
            "close": 5.425
          },
          {
            "date": "2026-10-21",
            "close": 5.439
          },
          {
            "date": "2026-10-22",
            "close": 5.287
          },
          {
            "date": "2026-10-23",
            "close": 5.315
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
        "close": 4.805,
        "prevClose": 4.768,
        "change": 0.037,
        "changePct": 0.78,
        "asOf": "2026-10-23",
        "prevAsOf": "2026-10-22",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-23",
          "close": 4.805,
          "prevDate": "2026-10-22",
          "prevClose": 4.768,
          "change": 0.037,
          "changePct": 0.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-23",
          "close": 4.805,
          "prevDate": "2026-10-22",
          "prevClose": 4.768,
          "change": 0.037,
          "changePct": 0.78,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.805,
        "series": [
          {
            "date": "2026-10-16",
            "close": 4.899
          },
          {
            "date": "2026-10-19",
            "close": 4.929
          },
          {
            "date": "2026-10-20",
            "close": 4.935
          },
          {
            "date": "2026-10-21",
            "close": 4.972
          },
          {
            "date": "2026-10-22",
            "close": 4.768
          },
          {
            "date": "2026-10-23",
            "close": 4.805
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
        "close": 101.61,
        "prevClose": 101.78,
        "change": -0.17,
        "changePct": -0.17,
        "asOf": "2026-10-22",
        "prevAsOf": "2026-10-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-23",
          "close": 101.752,
          "prevDate": "2026-10-22",
          "prevClose": 101.61,
          "change": 0.142,
          "changePct": 0.14,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-22",
          "close": 101.61,
          "prevDate": "2026-10-21",
          "prevClose": 101.78,
          "change": -0.17,
          "changePct": -0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.752,
        "series": [
          {
            "date": "2026-10-16",
            "close": 101.84
          },
          {
            "date": "2026-10-19",
            "close": 101.98
          },
          {
            "date": "2026-10-20",
            "close": 101.73
          },
          {
            "date": "2026-10-21",
            "close": 101.78
          },
          {
            "date": "2026-10-22",
            "close": 101.61
          },
          {
            "date": "2026-10-23",
            "close": 101.752
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
        "close": 99.47,
        "prevClose": 97.15,
        "change": 2.32,
        "changePct": 2.39,
        "asOf": "2026-10-22",
        "prevAsOf": "2026-10-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-23",
          "close": 103.44,
          "prevDate": "2026-10-22",
          "prevClose": 99.47,
          "change": 3.97,
          "changePct": 3.99,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-22",
          "close": 99.47,
          "prevDate": "2026-10-21",
          "prevClose": 97.15,
          "change": 2.32,
          "changePct": 2.39,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 103.44,
        "series": [
          {
            "date": "2026-10-16",
            "close": 101.41
          },
          {
            "date": "2026-10-19",
            "close": 103.66
          },
          {
            "date": "2026-10-20",
            "close": 101.79
          },
          {
            "date": "2026-10-21",
            "close": 97.15
          },
          {
            "date": "2026-10-22",
            "close": 99.47
          },
          {
            "date": "2026-10-23",
            "close": 103.44
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
        "close": 113.17,
        "prevClose": 108.82,
        "change": 4.35,
        "changePct": 4,
        "asOf": "2026-10-22",
        "prevAsOf": "2026-10-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-23",
          "close": 111.66,
          "prevDate": "2026-10-22",
          "prevClose": 113.17,
          "change": -1.51,
          "changePct": -1.33,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-22",
          "close": 113.17,
          "prevDate": "2026-10-21",
          "prevClose": 108.82,
          "change": 4.35,
          "changePct": 4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 111.66,
        "series": [
          {
            "date": "2026-10-16",
            "close": 109.86
          },
          {
            "date": "2026-10-19",
            "close": 109.55
          },
          {
            "date": "2026-10-20",
            "close": 108.79
          },
          {
            "date": "2026-10-21",
            "close": 108.82
          },
          {
            "date": "2026-10-22",
            "close": 113.17
          },
          {
            "date": "2026-10-23",
            "close": 111.66
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
        "close": 4060.3999,
        "prevClose": 4150,
        "change": -89.6001,
        "changePct": -2.16,
        "asOf": "2026-10-22",
        "prevAsOf": "2026-10-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-23",
          "close": 4010,
          "prevDate": "2026-10-22",
          "prevClose": 4060.3999,
          "change": -50.3999,
          "changePct": -1.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-22",
          "close": 4060.3999,
          "prevDate": "2026-10-21",
          "prevClose": 4150,
          "change": -89.6001,
          "changePct": -2.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4010,
        "series": [
          {
            "date": "2026-10-16",
            "close": 4181.1001
          },
          {
            "date": "2026-10-19",
            "close": 4160.1001
          },
          {
            "date": "2026-10-20",
            "close": 4142.6001
          },
          {
            "date": "2026-10-21",
            "close": 4150
          },
          {
            "date": "2026-10-22",
            "close": 4060.3999
          },
          {
            "date": "2026-10-23",
            "close": 4010
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
        "close": 158.132,
        "prevClose": 158.268,
        "change": -0.136,
        "changePct": -0.09,
        "asOf": "2026-10-22",
        "prevAsOf": "2026-10-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-23",
          "close": 156.814,
          "prevDate": "2026-10-22",
          "prevClose": 158.132,
          "change": -1.318,
          "changePct": -0.83,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-22",
          "close": 158.132,
          "prevDate": "2026-10-21",
          "prevClose": 158.268,
          "change": -0.136,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 156.814,
        "series": [
          {
            "date": "2026-10-16",
            "close": 158.143
          },
          {
            "date": "2026-10-19",
            "close": 157.806
          },
          {
            "date": "2026-10-20",
            "close": 158.523
          },
          {
            "date": "2026-10-21",
            "close": 158.268
          },
          {
            "date": "2026-10-22",
            "close": 158.132
          },
          {
            "date": "2026-10-23",
            "close": 156.814
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
        "close": 6.6779,
        "prevClose": 6.6779,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-10-22",
        "prevAsOf": "2026-10-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-23",
          "close": 6.6606,
          "prevDate": "2026-10-22",
          "prevClose": 6.6779,
          "change": -0.0173,
          "changePct": -0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-22",
          "close": 6.6779,
          "prevDate": "2026-10-21",
          "prevClose": 6.6779,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6606,
        "series": [
          {
            "date": "2026-10-16",
            "close": 6.6909
          },
          {
            "date": "2026-10-19",
            "close": 6.6909
          },
          {
            "date": "2026-10-20",
            "close": 6.6909
          },
          {
            "date": "2026-10-21",
            "close": 6.6779
          },
          {
            "date": "2026-10-22",
            "close": 6.6779
          },
          {
            "date": "2026-10-23",
            "close": 6.6606
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
        "close": 32.3659,
        "prevClose": 32.5776,
        "change": -0.2117,
        "changePct": -0.65,
        "asOf": "2026-10-22",
        "prevAsOf": "2026-10-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-23",
          "close": 32.57,
          "prevDate": "2026-10-22",
          "prevClose": 32.3659,
          "change": 0.2041,
          "changePct": 0.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-22",
          "close": 32.3659,
          "prevDate": "2026-10-21",
          "prevClose": 32.5776,
          "change": -0.2117,
          "changePct": -0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.57,
        "series": [
          {
            "date": "2026-10-16",
            "close": 32.3269
          },
          {
            "date": "2026-10-19",
            "close": 32.387
          },
          {
            "date": "2026-10-20",
            "close": 32.4802
          },
          {
            "date": "2026-10-21",
            "close": 32.5776
          },
          {
            "date": "2026-10-22",
            "close": 32.3659
          },
          {
            "date": "2026-10-23",
            "close": 32.57
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
        "close": 46041.4297,
        "prevClose": 46887.7695,
        "change": -846.3398,
        "changePct": -1.81,
        "asOf": "2026-10-22",
        "prevAsOf": "2026-10-21",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-22",
          "close": 46041.4297,
          "prevDate": "2026-10-21",
          "prevClose": 46887.7695,
          "change": -846.3398,
          "changePct": -1.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-22",
          "close": 46041.4297,
          "prevDate": "2026-10-21",
          "prevClose": 46887.7695,
          "change": -846.3398,
          "changePct": -1.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46041.43,
        "series": [
          {
            "date": "2026-10-15",
            "close": 46969.8711
          },
          {
            "date": "2026-10-16",
            "close": 47111.2617
          },
          {
            "date": "2026-10-19",
            "close": 46822.0781
          },
          {
            "date": "2026-10-20",
            "close": 46292.9297
          },
          {
            "date": "2026-10-21",
            "close": 46887.7695
          },
          {
            "date": "2026-10-22",
            "close": 46041.4297
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
