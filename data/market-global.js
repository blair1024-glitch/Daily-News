/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-21T23:40:37.874Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 11505.5557,
        "prevClose": 11283.8096,
        "change": 221.7461,
        "changePct": 1.97,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-21",
          "close": 11505.5557,
          "prevDate": "2026-10-20",
          "prevClose": 11283.8096,
          "change": 221.7461,
          "changePct": 1.97,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 11505.5557,
          "prevDate": "2026-10-20",
          "prevClose": 11283.8096,
          "change": 221.7461,
          "changePct": 1.97,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 11505.556,
        "series": [
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
            "close": 11283.8096
          },
          {
            "date": "2026-10-21",
            "close": 11505.5557
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
        "close": 16.68,
        "prevClose": 17.31,
        "change": -0.63,
        "changePct": -3.64,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-21",
          "close": 16.68,
          "prevDate": "2026-10-20",
          "prevClose": 17.31,
          "change": -0.63,
          "changePct": -3.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 16.68,
          "prevDate": "2026-10-20",
          "prevClose": 17.31,
          "change": -0.63,
          "changePct": -3.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 16.68,
        "series": [
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
          },
          {
            "date": "2026-10-21",
            "close": 16.68
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
        "close": 7757.1699,
        "prevClose": 7712.5698,
        "change": 44.6001,
        "changePct": 0.58,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-21",
          "close": 7757.1699,
          "prevDate": "2026-10-20",
          "prevClose": 7712.5698,
          "change": 44.6001,
          "changePct": 0.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 7757.1699,
          "prevDate": "2026-10-20",
          "prevClose": 7712.5698,
          "change": 44.6001,
          "changePct": 0.58,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7757.17,
        "series": [
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
          },
          {
            "date": "2026-10-21",
            "close": 7757.1699
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
        "close": 26702.8574,
        "prevClose": 26424.8203,
        "change": 278.0371,
        "changePct": 1.05,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-21",
          "close": 26702.8574,
          "prevDate": "2026-10-20",
          "prevClose": 26424.8203,
          "change": 278.0371,
          "changePct": 1.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 26702.8574,
          "prevDate": "2026-10-20",
          "prevClose": 26424.8203,
          "change": 278.0371,
          "changePct": 1.05,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26702.857,
        "series": [
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
            "close": 26424.8203
          },
          {
            "date": "2026-10-21",
            "close": 26702.8574
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
        "close": 52856.0898,
        "prevClose": 52495.8789,
        "change": 360.2109,
        "changePct": 0.69,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-21",
          "close": 52856.0898,
          "prevDate": "2026-10-20",
          "prevClose": 52495.8789,
          "change": 360.2109,
          "changePct": 0.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 52856.0898,
          "prevDate": "2026-10-20",
          "prevClose": 52495.8789,
          "change": 360.2109,
          "changePct": 0.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 52856.09,
        "series": [
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
          },
          {
            "date": "2026-10-21",
            "close": 52856.0898
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
        "close": 5.146,
        "prevClose": 5.117,
        "change": 0.029,
        "changePct": 0.57,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-21",
          "close": 5.146,
          "prevDate": "2026-10-20",
          "prevClose": 5.117,
          "change": 0.029,
          "changePct": 0.57,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 5.146,
          "prevDate": "2026-10-20",
          "prevClose": 5.117,
          "change": 0.029,
          "changePct": 0.57,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.146,
        "series": [
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
          },
          {
            "date": "2026-10-21",
            "close": 5.146
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
        "close": 5.439,
        "prevClose": 5.425,
        "change": 0.014,
        "changePct": 0.26,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-21",
          "close": 5.439,
          "prevDate": "2026-10-20",
          "prevClose": 5.425,
          "change": 0.014,
          "changePct": 0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 5.439,
          "prevDate": "2026-10-20",
          "prevClose": 5.425,
          "change": 0.014,
          "changePct": 0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.439,
        "series": [
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
          },
          {
            "date": "2026-10-21",
            "close": 5.439
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
        "close": 4.972,
        "prevClose": 4.935,
        "change": 0.037,
        "changePct": 0.75,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-21",
          "close": 4.972,
          "prevDate": "2026-10-20",
          "prevClose": 4.935,
          "change": 0.037,
          "changePct": 0.75,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 4.972,
          "prevDate": "2026-10-20",
          "prevClose": 4.935,
          "change": 0.037,
          "changePct": 0.75,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4.972,
        "series": [
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
          },
          {
            "date": "2026-10-21",
            "close": 4.972
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
        "close": 101.73,
        "prevClose": 101.98,
        "change": -0.25,
        "changePct": -0.25,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-21",
          "close": 101.691,
          "prevDate": "2026-10-20",
          "prevClose": 101.73,
          "change": -0.039,
          "changePct": -0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 101.73,
          "prevDate": "2026-10-19",
          "prevClose": 101.98,
          "change": -0.25,
          "changePct": -0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.691,
        "series": [
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
          },
          {
            "date": "2026-10-21",
            "close": 101.691
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
        "close": 101.79,
        "prevClose": 103.66,
        "change": -1.87,
        "changePct": -1.8,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-21",
          "close": 97.91,
          "prevDate": "2026-10-20",
          "prevClose": 101.79,
          "change": -3.88,
          "changePct": -3.81,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 101.79,
          "prevDate": "2026-10-19",
          "prevClose": 103.66,
          "change": -1.87,
          "changePct": -1.8,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 97.91,
        "series": [
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
            "close": 101.79
          },
          {
            "date": "2026-10-21",
            "close": 97.91
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
        "close": 108.79,
        "prevClose": 109.55,
        "change": -0.76,
        "changePct": -0.69,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-21",
          "close": 109.95,
          "prevDate": "2026-10-20",
          "prevClose": 108.79,
          "change": 1.16,
          "changePct": 1.07,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 108.79,
          "prevDate": "2026-10-19",
          "prevClose": 109.55,
          "change": -0.76,
          "changePct": -0.69,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 109.95,
        "series": [
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
            "close": 108.79
          },
          {
            "date": "2026-10-21",
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
        "close": 4142.6001,
        "prevClose": 4160.1001,
        "change": -17.5,
        "changePct": -0.42,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-21",
          "close": 4144.1001,
          "prevDate": "2026-10-20",
          "prevClose": 4142.6001,
          "change": 1.5,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 4142.6001,
          "prevDate": "2026-10-19",
          "prevClose": 4160.1001,
          "change": -17.5,
          "changePct": -0.42,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4144.1,
        "series": [
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
            "close": 4142.6001
          },
          {
            "date": "2026-10-21",
            "close": 4144.1001
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
        "close": 158.268,
        "prevClose": 158.523,
        "change": -0.255,
        "changePct": -0.16,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-22",
          "close": 158.115,
          "prevDate": "2026-10-21",
          "prevClose": 158.268,
          "change": -0.153,
          "changePct": -0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 158.268,
          "prevDate": "2026-10-20",
          "prevClose": 158.523,
          "change": -0.255,
          "changePct": -0.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.115,
        "series": [
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
            "close": 158.268
          },
          {
            "date": "2026-10-22",
            "close": 158.115
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
        "prevClose": 6.6909,
        "change": -0.013,
        "changePct": -0.19,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-22",
          "close": 6.6753,
          "prevDate": "2026-10-21",
          "prevClose": 6.6779,
          "change": -0.0026,
          "changePct": -0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 6.6779,
          "prevDate": "2026-10-20",
          "prevClose": 6.6909,
          "change": -0.013,
          "changePct": -0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6753,
        "series": [
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
          },
          {
            "date": "2026-10-21",
            "close": 6.6779
          },
          {
            "date": "2026-10-22",
            "close": 6.6753
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
        "close": 32.5776,
        "prevClose": 32.4802,
        "change": 0.0974,
        "changePct": 0.3,
        "asOf": "2026-10-21",
        "prevAsOf": "2026-10-20",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-22",
          "close": 32.372,
          "prevDate": "2026-10-21",
          "prevClose": 32.5776,
          "change": -0.2056,
          "changePct": -0.63,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-21",
          "close": 32.5776,
          "prevDate": "2026-10-20",
          "prevClose": 32.4802,
          "change": 0.0974,
          "changePct": 0.3,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 32.372,
        "series": [
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
            "close": 32.5776
          },
          {
            "date": "2026-10-22",
            "close": 32.372
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
        "close": 46292.9297,
        "prevClose": 46822.0781,
        "change": -529.1484,
        "changePct": -1.13,
        "asOf": "2026-10-20",
        "prevAsOf": "2026-10-19",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-20",
          "close": 46292.9297,
          "prevDate": "2026-10-19",
          "prevClose": 46822.0781,
          "change": -529.1484,
          "changePct": -1.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-20",
          "close": 46292.9297,
          "prevDate": "2026-10-19",
          "prevClose": 46822.0781,
          "change": -529.1484,
          "changePct": -1.13,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 46887.77,
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
            "close": 46292.9297
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
