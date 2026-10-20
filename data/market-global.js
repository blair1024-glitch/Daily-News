/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-20T01:36:50.390Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11316.3428,
        "prevClose": 11137.29,
        "change": 179.0528,
        "changePct": 1.61,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-19",
          "close": 11316.3428,
          "prevDate": "2026-10-16",
          "prevClose": 11137.29,
          "change": 179.0528,
          "changePct": 1.61,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 11316.3428,
          "prevDate": "2026-10-16",
          "prevClose": 11137.29,
          "change": 179.0528,
          "changePct": 1.61,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 11316.343,
        "series": [
          {
            "date": "2026-10-12",
            "close": 12236.79
          },
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
            "close": 11316.3428
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
        "close": 18.44,
        "prevClose": 19.99,
        "change": -1.55,
        "changePct": -7.75,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-19",
          "close": 18.44,
          "prevDate": "2026-10-16",
          "prevClose": 19.99,
          "change": -1.55,
          "changePct": -7.75,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 18.44,
          "prevDate": "2026-10-16",
          "prevClose": 19.99,
          "change": -1.55,
          "changePct": -7.75,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 18.44,
        "series": [
          {
            "date": "2026-10-12",
            "close": 15.21
          },
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
        "close": 7690.73,
        "prevClose": 7659.4399,
        "change": 31.2901,
        "changePct": 0.41,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-19",
          "close": 7690.73,
          "prevDate": "2026-10-16",
          "prevClose": 7659.4399,
          "change": 31.2901,
          "changePct": 0.41,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 7690.73,
          "prevDate": "2026-10-16",
          "prevClose": 7659.4399,
          "change": 31.2901,
          "changePct": 0.41,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 7690.73,
        "series": [
          {
            "date": "2026-10-12",
            "close": 7807.2402
          },
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
        "close": 26430.8867,
        "prevClose": 26140.0293,
        "change": 290.8574,
        "changePct": 1.11,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-19",
          "close": 26430.8867,
          "prevDate": "2026-10-16",
          "prevClose": 26140.0293,
          "change": 290.8574,
          "changePct": 1.11,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 26430.8867,
          "prevDate": "2026-10-16",
          "prevClose": 26140.0293,
          "change": 290.8574,
          "changePct": 1.11,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 26430.887,
        "series": [
          {
            "date": "2026-10-12",
            "close": 27245.9004
          },
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
            "close": 26430.8867
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
        "close": 51966.0313,
        "prevClose": 52002.4102,
        "change": -36.3789,
        "changePct": -0.07,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-19",
          "close": 51966.0313,
          "prevDate": "2026-10-16",
          "prevClose": 52002.4102,
          "change": -36.3789,
          "changePct": -0.07,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 51966.0313,
          "prevDate": "2026-10-16",
          "prevClose": 52002.4102,
          "change": -36.3789,
          "changePct": -0.07,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 51966.03,
        "series": [
          {
            "date": "2026-10-12",
            "close": 51850.5508
          },
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
        "close": 5.136,
        "prevClose": 5.098,
        "change": 0.038,
        "changePct": 0.75,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-19",
          "close": 5.136,
          "prevDate": "2026-10-16",
          "prevClose": 5.098,
          "change": 0.038,
          "changePct": 0.75,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 5.136,
          "prevDate": "2026-10-16",
          "prevClose": 5.098,
          "change": 0.038,
          "changePct": 0.75,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.136,
        "series": [
          {
            "date": "2026-10-12",
            "close": 5.24
          },
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
        "close": 5.472,
        "prevClose": 5.436,
        "change": 0.036,
        "changePct": 0.66,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-19",
          "close": 5.472,
          "prevDate": "2026-10-16",
          "prevClose": 5.436,
          "change": 0.036,
          "changePct": 0.66,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 5.472,
          "prevDate": "2026-10-16",
          "prevClose": 5.436,
          "change": 0.036,
          "changePct": 0.66,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 5.472,
        "series": [
          {
            "date": "2026-10-12",
            "close": 5.598
          },
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
        "close": 4.929,
        "prevClose": 4.899,
        "change": 0.03,
        "changePct": 0.61,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-19",
          "close": 4.929,
          "prevDate": "2026-10-16",
          "prevClose": 4.899,
          "change": 0.03,
          "changePct": 0.61,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 4.929,
          "prevDate": "2026-10-16",
          "prevClose": 4.899,
          "change": 0.03,
          "changePct": 0.61,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 4.929,
        "series": [
          {
            "date": "2026-10-12",
            "close": 5.019
          },
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
        "close": 101.84,
        "prevClose": 102,
        "change": -0.16,
        "changePct": -0.16,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-19",
          "close": 101.938,
          "prevDate": "2026-10-16",
          "prevClose": 101.84,
          "change": 0.098,
          "changePct": 0.1,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 101.84,
          "prevDate": "2026-10-15",
          "prevClose": 102,
          "change": -0.16,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.938,
        "series": [
          {
            "date": "2026-10-12",
            "close": 102.58
          },
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
            "close": 101.938
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
        "close": 101.41,
        "prevClose": 97.97,
        "change": 3.44,
        "changePct": 3.51,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-19",
          "close": 98.9,
          "prevDate": "2026-10-16",
          "prevClose": 101.41,
          "change": -2.51,
          "changePct": -2.48,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 101.41,
          "prevDate": "2026-10-15",
          "prevClose": 97.97,
          "change": 3.44,
          "changePct": 3.51,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 98.9,
        "series": [
          {
            "date": "2026-10-12",
            "close": 93.74
          },
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
            "close": 98.9
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
        "close": 109.86,
        "prevClose": 105.92,
        "change": 3.94,
        "changePct": 3.72,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-19",
          "close": 109.95,
          "prevDate": "2026-10-16",
          "prevClose": 109.86,
          "change": 0.09,
          "changePct": 0.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 109.86,
          "prevDate": "2026-10-15",
          "prevClose": 105.92,
          "change": 3.94,
          "changePct": 3.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 109.95,
        "series": [
          {
            "date": "2026-10-12",
            "close": 106.65
          },
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
            "close": 109.95
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
        "close": 4181.1001,
        "prevClose": 4170.1001,
        "change": 11,
        "changePct": 0.26,
        "asOf": "2026-10-16",
        "prevAsOf": "2026-10-15",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-19",
          "close": 4135.7998,
          "prevDate": "2026-10-16",
          "prevClose": 4181.1001,
          "change": -45.3003,
          "changePct": -1.08,
          "gapDays": 3,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-16",
          "close": 4181.1001,
          "prevDate": "2026-10-15",
          "prevClose": 4170.1001,
          "change": 11,
          "changePct": 0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4135.8,
        "series": [
          {
            "date": "2026-10-12",
            "close": 4190.6001
          },
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
            "close": 4135.7998
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
        "close": 157.806,
        "prevClose": 158.143,
        "change": -0.337,
        "changePct": -0.21,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-20",
          "close": 158.561,
          "prevDate": "2026-10-19",
          "prevClose": 157.806,
          "change": 0.755,
          "changePct": 0.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 157.806,
          "prevDate": "2026-10-16",
          "prevClose": 158.143,
          "change": -0.337,
          "changePct": -0.21,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 158.561,
        "series": [
          {
            "date": "2026-10-13",
            "close": 158.52
          },
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
            "close": 158.561
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
          "close": 6.669,
          "prevDate": "2026-10-19",
          "prevClose": 6.6909,
          "change": -0.0219,
          "changePct": -0.33,
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
        "quotePrice": 6.669,
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
            "close": 6.669
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
        "close": 32.387,
        "prevClose": 32.3269,
        "change": 0.0601,
        "changePct": 0.19,
        "asOf": "2026-10-19",
        "prevAsOf": "2026-10-16",
        "gapDays": 3,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-20",
          "close": 32.511,
          "prevDate": "2026-10-19",
          "prevClose": 32.387,
          "change": 0.124,
          "changePct": 0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-19",
          "close": 32.387,
          "prevDate": "2026-10-16",
          "prevClose": 32.3269,
          "change": 0.0601,
          "changePct": 0.19,
          "gapDays": 3,
          "gapSuspect": false
        },
        "quotePrice": 32.511,
        "series": [
          {
            "date": "2026-10-13",
            "close": 31.9278
          },
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
            "close": 32.511
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
        "live": true,
        "latest": {
          "date": "2026-10-20",
          "close": 46516.4102,
          "prevDate": "2026-10-19",
          "prevClose": 46822.0781,
          "change": -305.6679,
          "changePct": -0.65,
          "gapDays": 1,
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
        "quotePrice": 46516.41,
        "series": [
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
          },
          {
            "date": "2026-10-20",
            "close": 46516.4102
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
