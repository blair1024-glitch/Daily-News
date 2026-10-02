/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-02T02:02:53.512Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 12829,
        "prevClose": 12628.6201,
        "change": 200.3799,
        "changePct": 1.59,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-01",
          "close": 12829,
          "prevDate": "2026-09-30",
          "prevClose": 12628.6201,
          "change": 200.3799,
          "changePct": 1.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 12829,
          "prevDate": "2026-09-30",
          "prevClose": 12628.6201,
          "change": 200.3799,
          "changePct": 1.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 12829,
        "series": [
          {
            "date": "2026-09-24",
            "close": 12492.54
          },
          {
            "date": "2026-09-25",
            "close": 12668.9297
          },
          {
            "date": "2026-09-28",
            "close": 12465.2402
          },
          {
            "date": "2026-09-29",
            "close": 12629.1602
          },
          {
            "date": "2026-09-30",
            "close": 12628.6201
          },
          {
            "date": "2026-10-01",
            "close": 12829
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
        "close": 16.39,
        "prevClose": 16.34,
        "change": 0.05,
        "changePct": 0.31,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-01",
          "close": 16.39,
          "prevDate": "2026-09-30",
          "prevClose": 16.34,
          "change": 0.05,
          "changePct": 0.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 16.39,
          "prevDate": "2026-09-30",
          "prevClose": 16.34,
          "change": 0.05,
          "changePct": 0.31,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 16.39,
        "series": [
          {
            "date": "2026-09-24",
            "close": 15.67
          },
          {
            "date": "2026-09-25",
            "close": 14.87
          },
          {
            "date": "2026-09-28",
            "close": 16.07
          },
          {
            "date": "2026-09-29",
            "close": 16.04
          },
          {
            "date": "2026-09-30",
            "close": 16.34
          },
          {
            "date": "2026-10-01",
            "close": 16.39
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
        "close": 7666.4502,
        "prevClose": 7651.54,
        "change": 14.9102,
        "changePct": 0.19,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-01",
          "close": 7666.4502,
          "prevDate": "2026-09-30",
          "prevClose": 7651.54,
          "change": 14.9102,
          "changePct": 0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 7666.4502,
          "prevDate": "2026-09-30",
          "prevClose": 7651.54,
          "change": 14.9102,
          "changePct": 0.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7666.45,
        "series": [
          {
            "date": "2026-09-24",
            "close": 7704.1299
          },
          {
            "date": "2026-09-25",
            "close": 7743.4102
          },
          {
            "date": "2026-09-28",
            "close": 7683.6899
          },
          {
            "date": "2026-09-29",
            "close": 7670.8398
          },
          {
            "date": "2026-09-30",
            "close": 7651.54
          },
          {
            "date": "2026-10-01",
            "close": 7666.4502
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
        "close": 26871.5957,
        "prevClose": 26861.0605,
        "change": 10.5352,
        "changePct": 0.04,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-01",
          "close": 26871.5957,
          "prevDate": "2026-09-30",
          "prevClose": 26861.0605,
          "change": 10.5352,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 26871.5957,
          "prevDate": "2026-09-30",
          "prevClose": 26861.0605,
          "change": 10.5352,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 26871.596,
        "series": [
          {
            "date": "2026-09-24",
            "close": 26939.3691
          },
          {
            "date": "2026-09-25",
            "close": 27068.7207
          },
          {
            "date": "2026-09-28",
            "close": 26820.3809
          },
          {
            "date": "2026-09-29",
            "close": 26797.5391
          },
          {
            "date": "2026-09-30",
            "close": 26861.0605
          },
          {
            "date": "2026-10-01",
            "close": 26871.5957
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
        "close": 50926.5586,
        "prevClose": 50906.0508,
        "change": 20.5078,
        "changePct": 0.04,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-01",
          "close": 50926.5586,
          "prevDate": "2026-09-30",
          "prevClose": 50906.0508,
          "change": 20.5078,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 50926.5586,
          "prevDate": "2026-09-30",
          "prevClose": 50906.0508,
          "change": 20.5078,
          "changePct": 0.04,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 50926.56,
        "series": [
          {
            "date": "2026-09-24",
            "close": 51349.9805
          },
          {
            "date": "2026-09-25",
            "close": 51828.6211
          },
          {
            "date": "2026-09-28",
            "close": 51481.5117
          },
          {
            "date": "2026-09-29",
            "close": 51349.9219
          },
          {
            "date": "2026-09-30",
            "close": 50906.0508
          },
          {
            "date": "2026-10-01",
            "close": 50926.5586
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
        "close": 5.237,
        "prevClose": 5.293,
        "change": -0.056,
        "changePct": -1.06,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-01",
          "close": 5.237,
          "prevDate": "2026-09-30",
          "prevClose": 5.293,
          "change": -0.056,
          "changePct": -1.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 5.237,
          "prevDate": "2026-09-30",
          "prevClose": 5.293,
          "change": -0.056,
          "changePct": -1.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.237,
        "series": [
          {
            "date": "2026-09-24",
            "close": 5.162
          },
          {
            "date": "2026-09-25",
            "close": 5.184
          },
          {
            "date": "2026-09-28",
            "close": 5.24
          },
          {
            "date": "2026-09-29",
            "close": 5.255
          },
          {
            "date": "2026-09-30",
            "close": 5.293
          },
          {
            "date": "2026-10-01",
            "close": 5.237
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
        "close": 5.603,
        "prevClose": 5.638,
        "change": -0.035,
        "changePct": -0.62,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-01",
          "close": 5.603,
          "prevDate": "2026-09-30",
          "prevClose": 5.638,
          "change": -0.035,
          "changePct": -0.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 5.603,
          "prevDate": "2026-09-30",
          "prevClose": 5.638,
          "change": -0.035,
          "changePct": -0.62,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.603,
        "series": [
          {
            "date": "2026-09-24",
            "close": 5.461
          },
          {
            "date": "2026-09-25",
            "close": 5.504
          },
          {
            "date": "2026-09-28",
            "close": 5.561
          },
          {
            "date": "2026-09-29",
            "close": 5.594
          },
          {
            "date": "2026-09-30",
            "close": 5.638
          },
          {
            "date": "2026-10-01",
            "close": 5.603
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
        "close": 5.005,
        "prevClose": 5.089,
        "change": -0.084,
        "changePct": -1.65,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-01",
          "close": 5.005,
          "prevDate": "2026-09-30",
          "prevClose": 5.089,
          "change": -0.084,
          "changePct": -1.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 5.005,
          "prevDate": "2026-09-30",
          "prevClose": 5.089,
          "change": -0.084,
          "changePct": -1.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.005,
        "series": [
          {
            "date": "2026-09-24",
            "close": 5.025
          },
          {
            "date": "2026-09-25",
            "close": 5.007
          },
          {
            "date": "2026-09-28",
            "close": 5.068
          },
          {
            "date": "2026-09-29",
            "close": 5.063
          },
          {
            "date": "2026-09-30",
            "close": 5.089
          },
          {
            "date": "2026-10-01",
            "close": 5.005
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
        "close": 101.45,
        "prevClose": 101.37,
        "change": 0.08,
        "changePct": 0.08,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-01",
          "close": 102.108,
          "prevDate": "2026-09-30",
          "prevClose": 101.45,
          "change": 0.658,
          "changePct": 0.65,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 101.45,
          "prevDate": "2026-09-29",
          "prevClose": 101.37,
          "change": 0.08,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.108,
        "series": [
          {
            "date": "2026-09-24",
            "close": 101.29
          },
          {
            "date": "2026-09-25",
            "close": 100.97
          },
          {
            "date": "2026-09-28",
            "close": 101.2
          },
          {
            "date": "2026-09-29",
            "close": 101.37
          },
          {
            "date": "2026-09-30",
            "close": 101.45
          },
          {
            "date": "2026-10-01",
            "close": 102.108
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
        "close": 90.42,
        "prevClose": 89.38,
        "change": 1.04,
        "changePct": 1.16,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-01",
          "close": 92.99,
          "prevDate": "2026-09-30",
          "prevClose": 90.42,
          "change": 2.57,
          "changePct": 2.84,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 90.42,
          "prevDate": "2026-09-29",
          "prevClose": 89.38,
          "change": 1.04,
          "changePct": 1.16,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 92.99,
        "series": [
          {
            "date": "2026-09-24",
            "close": 94.61
          },
          {
            "date": "2026-09-25",
            "close": 92.41
          },
          {
            "date": "2026-09-28",
            "close": 92.6
          },
          {
            "date": "2026-09-29",
            "close": 89.38
          },
          {
            "date": "2026-09-30",
            "close": 90.42
          },
          {
            "date": "2026-10-01",
            "close": 92.99
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
        "close": 103.53,
        "prevClose": 102.59,
        "change": 0.94,
        "changePct": 0.92,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-01",
          "close": 102.6,
          "prevDate": "2026-09-30",
          "prevClose": 103.53,
          "change": -0.93,
          "changePct": -0.9,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 103.53,
          "prevDate": "2026-09-29",
          "prevClose": 102.59,
          "change": 0.94,
          "changePct": 0.92,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.6,
        "series": [
          {
            "date": "2026-09-24",
            "close": 106.6
          },
          {
            "date": "2026-09-25",
            "close": 104.32
          },
          {
            "date": "2026-09-28",
            "close": 105.28
          },
          {
            "date": "2026-09-29",
            "close": 102.59
          },
          {
            "date": "2026-09-30",
            "close": 103.53
          },
          {
            "date": "2026-10-01",
            "close": 102.6
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
        "close": 4186.7002,
        "prevClose": 4179.7002,
        "change": 7,
        "changePct": 0.17,
        "asOf": "2026-09-30",
        "prevAsOf": "2026-09-29",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-01",
          "close": 4175.7998,
          "prevDate": "2026-09-30",
          "prevClose": 4186.7002,
          "change": -10.9004,
          "changePct": -0.26,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-09-30",
          "close": 4186.7002,
          "prevDate": "2026-09-29",
          "prevClose": 4179.7002,
          "change": 7,
          "changePct": 0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4175.8,
        "series": [
          {
            "date": "2026-09-24",
            "close": 4298
          },
          {
            "date": "2026-09-25",
            "close": 4321.2002
          },
          {
            "date": "2026-09-28",
            "close": 4168.3999
          },
          {
            "date": "2026-09-29",
            "close": 4179.7002
          },
          {
            "date": "2026-09-30",
            "close": 4186.7002
          },
          {
            "date": "2026-10-01",
            "close": 4175.7998
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
        "close": 157.558,
        "prevClose": 157.404,
        "change": 0.154,
        "changePct": 0.1,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 158.057,
          "prevDate": "2026-10-01",
          "prevClose": 157.558,
          "change": 0.499,
          "changePct": 0.32,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 157.558,
          "prevDate": "2026-09-30",
          "prevClose": 157.404,
          "change": 0.154,
          "changePct": 0.1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 158.057,
        "series": [
          {
            "date": "2026-09-25",
            "close": 158.811
          },
          {
            "date": "2026-09-28",
            "close": 157.463
          },
          {
            "date": "2026-09-29",
            "close": 157.361
          },
          {
            "date": "2026-09-30",
            "close": 157.404
          },
          {
            "date": "2026-10-01",
            "close": 157.558
          },
          {
            "date": "2026-10-02",
            "close": 158.057
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
        "close": 6.7045,
        "prevClose": 6.703,
        "change": 0.0015,
        "changePct": 0.02,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 6.6987,
          "prevDate": "2026-10-01",
          "prevClose": 6.7045,
          "change": -0.0058,
          "changePct": -0.09,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 6.7045,
          "prevDate": "2026-09-30",
          "prevClose": 6.703,
          "change": 0.0015,
          "changePct": 0.02,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 6.6987,
        "series": [
          {
            "date": "2026-09-25",
            "close": 6.7111
          },
          {
            "date": "2026-09-28",
            "close": 6.7128
          },
          {
            "date": "2026-09-29",
            "close": 6.7103
          },
          {
            "date": "2026-09-30",
            "close": 6.703
          },
          {
            "date": "2026-10-01",
            "close": 6.7045
          },
          {
            "date": "2026-10-02",
            "close": 6.6987
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
        "close": 31.8679,
        "prevClose": 31.85,
        "change": 0.0179,
        "changePct": 0.06,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 31.893,
          "prevDate": "2026-10-01",
          "prevClose": 31.8679,
          "change": 0.0251,
          "changePct": 0.08,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 31.8679,
          "prevDate": "2026-09-30",
          "prevClose": 31.85,
          "change": 0.0179,
          "changePct": 0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 31.893,
        "series": [
          {
            "date": "2026-09-25",
            "close": 31.8062
          },
          {
            "date": "2026-09-28",
            "close": 31.7787
          },
          {
            "date": "2026-09-29",
            "close": 31.7822
          },
          {
            "date": "2026-09-30",
            "close": 31.85
          },
          {
            "date": "2026-10-01",
            "close": 31.8679
          },
          {
            "date": "2026-10-02",
            "close": 31.893
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
        "close": 48353.4883,
        "prevClose": 47940.1289,
        "change": 413.3594,
        "changePct": 0.86,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 48272.6211,
          "prevDate": "2026-10-01",
          "prevClose": 48353.4883,
          "change": -80.8672,
          "changePct": -0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 48353.4883,
          "prevDate": "2026-09-30",
          "prevClose": 47940.1289,
          "change": 413.3594,
          "changePct": 0.86,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 48272.62,
        "series": [
          {
            "date": "2026-09-23",
            "close": 48157.2891
          },
          {
            "date": "2026-09-24",
            "close": 48024.6016
          },
          {
            "date": "2026-09-29",
            "close": 47631.9609
          },
          {
            "date": "2026-09-30",
            "close": 47940.1289
          },
          {
            "date": "2026-10-01",
            "close": 48353.4883
          },
          {
            "date": "2026-10-02",
            "close": 48272.6211
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
