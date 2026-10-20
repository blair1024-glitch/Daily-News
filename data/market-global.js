/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-20T23:40:43.103Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11283.8115,
        "prevClose": 11316.3398,
        "change": -32.5283,
        "changePct": -0.29,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-20",
          "close": 11283.8115,
          "prevDate": "2026-10-19",
          "prevClose": 11316.3398,
          "change": -32.5283,
          "changePct": -0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 11283.8115,
          "prevDate": "2026-10-19",
          "prevClose": 11316.3398,
          "change": -32.5283,
          "changePct": -0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11283.812,
        "series": [
          {
            "date": "2026-10-13",
            "close": 12208.79
          },
          {
            "date": "2026-10-14",
            "close": 11684.3799
          },
          {
            "date": "2026-10-15",
            "close": 11581.21
          },
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
            "close": 11283.8115
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
        "close": 17.31,
        "prevClose": 18.44,
        "change": -1.13,
        "changePct": -6.13,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-20",
          "close": 17.31,
          "prevDate": "2026-10-19",
          "prevClose": 18.44,
          "change": -1.13,
          "changePct": -6.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 17.31,
          "prevDate": "2026-10-19",
          "prevClose": 18.44,
          "change": -1.13,
          "changePct": -6.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 17.31,
        "series": [
          {
            "date": "2026-10-13",
            "close": 15.27
          },
          {
            "date": "2026-10-14",
            "close": 16.87
          },
          {
            "date": "2026-10-15",
            "close": 16.46
          },
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
        "close": 7712.5698,
        "prevClose": 7690.73,
        "change": 21.8398,
        "changePct": 0.28,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-20",
          "close": 7712.5698,
          "prevDate": "2026-10-19",
          "prevClose": 7690.73,
          "change": 21.8398,
          "changePct": 0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 7712.5698,
          "prevDate": "2026-10-19",
          "prevClose": 7690.73,
          "change": 21.8398,
          "changePct": 0.28,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7712.57,
        "series": [
          {
            "date": "2026-10-13",
            "close": 7805.4502
          },
          {
            "date": "2026-10-14",
            "close": 7718.9399
          },
          {
            "date": "2026-10-15",
            "close": 7744.0601
          },
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
        "close": 26424.8164,
        "prevClose": 26430.8906,
        "change": -6.0742,
        "changePct": -0.02,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-20",
          "close": 26424.8164,
          "prevDate": "2026-10-19",
          "prevClose": 26430.8906,
          "change": -6.0742,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 26424.8164,
          "prevDate": "2026-10-19",
          "prevClose": 26430.8906,
          "change": -6.0742,
          "changePct": -0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26424.816,
        "series": [
          {
            "date": "2026-10-13",
            "close": 27204.3809
          },
          {
            "date": "2026-10-14",
            "close": 26692.8691
          },
          {
            "date": "2026-10-15",
            "close": 26713.0293
          },
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
            "close": 26424.8164
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
        "close": 52495.8789,
        "prevClose": 51966.0313,
        "change": 529.8476,
        "changePct": 1.02,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-20",
          "close": 52495.8789,
          "prevDate": "2026-10-19",
          "prevClose": 51966.0313,
          "change": 529.8476,
          "changePct": 1.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 52495.8789,
          "prevDate": "2026-10-19",
          "prevClose": 51966.0313,
          "change": 529.8476,
          "changePct": 1.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52495.88,
        "series": [
          {
            "date": "2026-10-13",
            "close": 51670.1016
          },
          {
            "date": "2026-10-14",
            "close": 51621.4805
          },
          {
            "date": "2026-10-15",
            "close": 52177.6914
          },
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
        "close": 5.117,
        "prevClose": 5.136,
        "change": -0.019,
        "changePct": -0.37,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-20",
          "close": 5.117,
          "prevDate": "2026-10-19",
          "prevClose": 5.136,
          "change": -0.019,
          "changePct": -0.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 5.117,
          "prevDate": "2026-10-19",
          "prevClose": 5.136,
          "change": -0.019,
          "changePct": -0.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.117,
        "series": [
          {
            "date": "2026-10-13",
            "close": 5.217
          },
          {
            "date": "2026-10-14",
            "close": 5.19
          },
          {
            "date": "2026-10-15",
            "close": 5.089
          },
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
        "close": 5.425,
        "prevClose": 5.472,
        "change": -0.047,
        "changePct": -0.86,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-20",
          "close": 5.425,
          "prevDate": "2026-10-19",
          "prevClose": 5.472,
          "change": -0.047,
          "changePct": -0.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 5.425,
          "prevDate": "2026-10-19",
          "prevClose": 5.472,
          "change": -0.047,
          "changePct": -0.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.425,
        "series": [
          {
            "date": "2026-10-13",
            "close": 5.563
          },
          {
            "date": "2026-10-14",
            "close": 5.525
          },
          {
            "date": "2026-10-15",
            "close": 5.429
          },
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
        "close": 4.935,
        "prevClose": 4.929,
        "change": 0.006,
        "changePct": 0.12,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-20",
          "close": 4.935,
          "prevDate": "2026-10-19",
          "prevClose": 4.929,
          "change": 0.006,
          "changePct": 0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 4.935,
          "prevDate": "2026-10-19",
          "prevClose": 4.929,
          "change": 0.006,
          "changePct": 0.12,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.935,
        "series": [
          {
            "date": "2026-10-13",
            "close": 5.007
          },
          {
            "date": "2026-10-14",
            "close": 4.992
          },
          {
            "date": "2026-10-15",
            "close": 4.899
          },
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
        "close": 101.98,
        "prevClose": 101.84,
        "change": 0.14,
        "changePct": 0.14,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-20",
          "close": 101.73,
          "prevDate": "2026-10-19",
          "prevClose": 101.98,
          "change": -0.25,
          "changePct": -0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 101.98,
          "prevDate": "2026-10-16",
          "prevClose": 101.84,
          "change": 0.14,
          "changePct": 0.14,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 101.73,
        "series": [
          {
            "date": "2026-10-13",
            "close": 102.18
          },
          {
            "date": "2026-10-14",
            "close": 102.55
          },
          {
            "date": "2026-10-15",
            "close": 102
          },
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
        "close": 103.66,
        "prevClose": 101.41,
        "change": 2.25,
        "changePct": 2.22,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-20",
          "close": 98.38,
          "prevDate": "2026-10-19",
          "prevClose": 103.66,
          "change": -5.28,
          "changePct": -5.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 103.66,
          "prevDate": "2026-10-16",
          "prevClose": 101.41,
          "change": 2.25,
          "changePct": 2.22,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 98.38,
        "series": [
          {
            "date": "2026-10-13",
            "close": 94.14
          },
          {
            "date": "2026-10-14",
            "close": 95.09
          },
          {
            "date": "2026-10-15",
            "close": 97.97
          },
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
            "close": 98.38
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
        "close": 109.55,
        "prevClose": 109.86,
        "change": -0.31,
        "changePct": -0.28,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-20",
          "close": 109.29,
          "prevDate": "2026-10-19",
          "prevClose": 109.55,
          "change": -0.26,
          "changePct": -0.24,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 109.55,
          "prevDate": "2026-10-16",
          "prevClose": 109.86,
          "change": -0.31,
          "changePct": -0.28,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 109.29,
        "series": [
          {
            "date": "2026-10-13",
            "close": 105.69
          },
          {
            "date": "2026-10-14",
            "close": 106.06
          },
          {
            "date": "2026-10-15",
            "close": 105.92
          },
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
            "close": 109.29
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
        "close": 4160.1001,
        "prevClose": 4181.1001,
        "change": -21,
        "changePct": -0.5,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-20",
          "close": 4134.6001,
          "prevDate": "2026-10-19",
          "prevClose": 4160.1001,
          "change": -25.5,
          "changePct": -0.61,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 4160.1001,
          "prevDate": "2026-10-16",
          "prevClose": 4181.1001,
          "change": -21,
          "changePct": -0.5,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4134.6,
        "series": [
          {
            "date": "2026-10-13",
            "close": 4177.2998
          },
          {
            "date": "2026-10-14",
            "close": 4107.8999
          },
          {
            "date": "2026-10-15",
            "close": 4170.1001
          },
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
            "close": 4134.6001
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
        "close": 158.523,
        "prevClose": 157.806,
        "change": 0.717,
        "changePct": 0.45,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-21",
          "close": 158.272,
          "prevDate": "2026-10-20",
          "prevClose": 158.523,
          "change": -0.251,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 158.523,
          "prevDate": "2026-10-19",
          "prevClose": 157.806,
          "change": 0.717,
          "changePct": 0.45,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.272,
        "series": [
          {
            "date": "2026-10-14",
            "close": 158.322
          },
          {
            "date": "2026-10-15",
            "close": 157.957
          },
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
            "close": 158.272
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
        "close": 6.6909,
        "prevClose": 6.6909,
        "change": 0,
        "changePct": 0,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-20",
          "close": 6.6909,
          "prevDate": "2026-10-19",
          "prevClose": 6.6909,
          "change": 0,
          "changePct": 0,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 6.6909,
          "prevDate": "2026-10-16",
          "prevClose": 6.6909,
          "change": 0,
          "changePct": 0,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 6.6673,
        "series": [
          {
            "date": "2026-10-13",
            "close": 6.692
          },
          {
            "date": "2026-10-14",
            "close": 6.692
          },
          {
            "date": "2026-10-15",
            "close": 6.6926
          },
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
        "close": 32.4802,
        "prevClose": 32.387,
        "change": 0.0932,
        "changePct": 0.29,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-21",
          "close": 32.577,
          "prevDate": "2026-10-20",
          "prevClose": 32.4802,
          "change": 0.0968,
          "changePct": 0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 32.4802,
          "prevDate": "2026-10-19",
          "prevClose": 32.387,
          "change": 0.0932,
          "changePct": 0.29,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.577,
        "series": [
          {
            "date": "2026-10-14",
            "close": 32.105
          },
          {
            "date": "2026-10-15",
            "close": 32.1899
          },
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
            "close": 32.577
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
        "close": 46822.0781,
        "prevClose": 47111.2617,
        "change": -289.1836,
        "changePct": -0.61,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-19",
          "close": 46822.0781,
          "prevDate": "2026-10-16",
          "prevClose": 47111.2617,
          "change": -289.1836,
          "changePct": -0.61,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 46822.0781,
          "prevDate": "2026-10-16",
          "prevClose": 47111.2617,
          "change": -289.1836,
          "changePct": -0.61,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 46292.93,
        "series": [
          {
            "date": "2026-10-12",
            "close": 49301.9609
          },
          {
            "date": "2026-10-13",
            "close": 48341.3086
          },
          {
            "date": "2026-10-14",
            "close": 48625.8281
          },
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
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
