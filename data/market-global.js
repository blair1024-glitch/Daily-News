/**
 * market-global.js — 由 GitHub Actions 自動產生，請勿手動編輯。
 * 產生器：scripts/fetch-global-market.mjs
 *
 * 國際行情中繼資料，供每日 dashboard 更新流程讀用，不會被 index.html 載入。
 * ok:false 代表該標的當次抓不到，error 說明原因——請據實標註，不要沿用舊值。
 */
window.MARKET_GLOBAL = {
  "fetchedAt": "2026-10-03T01:45:09.569Z",
  "okCount": 16,
  "totalCount": 16,
  "items": {
    "sox": {
      "ok": true,
      "label": "費城半導體 SOX",
      "symbol": "%5ESOX",
      "value": {
        "close": 13136.6748,
        "prevClose": 12829,
        "change": 307.6748,
        "changePct": 2.4,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-02",
          "close": 13136.6748,
          "prevDate": "2026-10-01",
          "prevClose": 12829,
          "change": 307.6748,
          "changePct": 2.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 13136.6748,
          "prevDate": "2026-10-01",
          "prevClose": 12829,
          "change": 307.6748,
          "changePct": 2.4,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 13136.675,
        "series": [
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
          },
          {
            "date": "2026-10-02",
            "close": 13136.6748
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
        "close": 15.31,
        "prevClose": 16.39,
        "change": -1.08,
        "changePct": -6.59,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-02",
          "close": 15.31,
          "prevDate": "2026-10-01",
          "prevClose": 16.39,
          "change": -1.08,
          "changePct": -6.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 15.31,
          "prevDate": "2026-10-01",
          "prevClose": 16.39,
          "change": -1.08,
          "changePct": -6.59,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 15.31,
        "series": [
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
          },
          {
            "date": "2026-10-02",
            "close": 15.31
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
        "close": 7722.7202,
        "prevClose": 7666.4502,
        "change": 56.27,
        "changePct": 0.73,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-02",
          "close": 7722.7202,
          "prevDate": "2026-10-01",
          "prevClose": 7666.4502,
          "change": 56.27,
          "changePct": 0.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 7722.7202,
          "prevDate": "2026-10-01",
          "prevClose": 7666.4502,
          "change": 56.27,
          "changePct": 0.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 7722.72,
        "series": [
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
          },
          {
            "date": "2026-10-02",
            "close": 7722.7202
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
        "close": 27190.8633,
        "prevClose": 26871.5996,
        "change": 319.2637,
        "changePct": 1.19,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-02",
          "close": 27190.8633,
          "prevDate": "2026-10-01",
          "prevClose": 26871.5996,
          "change": 319.2637,
          "changePct": 1.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 27190.8633,
          "prevDate": "2026-10-01",
          "prevClose": 26871.5996,
          "change": 319.2637,
          "changePct": 1.19,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 27190.863,
        "series": [
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
            "close": 26871.5996
          },
          {
            "date": "2026-10-02",
            "close": 27190.8633
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
        "close": 51176.9609,
        "prevClose": 50926.5586,
        "change": 250.4023,
        "changePct": 0.49,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-02",
          "close": 51176.9609,
          "prevDate": "2026-10-01",
          "prevClose": 50926.5586,
          "change": 250.4023,
          "changePct": 0.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 51176.9609,
          "prevDate": "2026-10-01",
          "prevClose": 50926.5586,
          "change": 250.4023,
          "changePct": 0.49,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 51176.96,
        "series": [
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
          },
          {
            "date": "2026-10-02",
            "close": 51176.9609
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
        "close": 5.277,
        "prevClose": 5.237,
        "change": 0.04,
        "changePct": 0.76,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-02",
          "close": 5.277,
          "prevDate": "2026-10-01",
          "prevClose": 5.237,
          "change": 0.04,
          "changePct": 0.76,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 5.277,
          "prevDate": "2026-10-01",
          "prevClose": 5.237,
          "change": 0.04,
          "changePct": 0.76,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.277,
        "series": [
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
          },
          {
            "date": "2026-10-02",
            "close": 5.277
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
        "close": 5.63,
        "prevClose": 5.603,
        "change": 0.027,
        "changePct": 0.48,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-02",
          "close": 5.63,
          "prevDate": "2026-10-01",
          "prevClose": 5.603,
          "change": 0.027,
          "changePct": 0.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 5.63,
          "prevDate": "2026-10-01",
          "prevClose": 5.603,
          "change": 0.027,
          "changePct": 0.48,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.63,
        "series": [
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
          },
          {
            "date": "2026-10-02",
            "close": 5.63
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
        "close": 5.055,
        "prevClose": 5.005,
        "change": 0.05,
        "changePct": 1,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-02",
          "close": 5.055,
          "prevDate": "2026-10-01",
          "prevClose": 5.005,
          "change": 0.05,
          "changePct": 1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 5.055,
          "prevDate": "2026-10-01",
          "prevClose": 5.005,
          "change": 0.05,
          "changePct": 1,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 5.055,
        "series": [
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
          },
          {
            "date": "2026-10-02",
            "close": 5.055
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
        "close": 102.1,
        "prevClose": 101.45,
        "change": 0.65,
        "changePct": 0.64,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 101.924,
          "prevDate": "2026-10-01",
          "prevClose": 102.1,
          "change": -0.176,
          "changePct": -0.17,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 102.1,
          "prevDate": "2026-09-30",
          "prevClose": 101.45,
          "change": 0.65,
          "changePct": 0.64,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 101.924,
        "series": [
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
            "close": 102.1
          },
          {
            "date": "2026-10-02",
            "close": 101.924
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
        "close": 92.87,
        "prevClose": 90.42,
        "change": 2.45,
        "changePct": 2.71,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 91.26,
          "prevDate": "2026-10-01",
          "prevClose": 92.87,
          "change": -1.61,
          "changePct": -1.73,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 92.87,
          "prevDate": "2026-09-30",
          "prevClose": 90.42,
          "change": 2.45,
          "changePct": 2.71,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 91.26,
        "series": [
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
            "close": 92.87
          },
          {
            "date": "2026-10-02",
            "close": 91.26
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
        "close": 102.31,
        "prevClose": 103.53,
        "change": -1.22,
        "changePct": -1.18,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 102.7,
          "prevDate": "2026-10-01",
          "prevClose": 102.31,
          "change": 0.39,
          "changePct": 0.38,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 102.31,
          "prevDate": "2026-09-30",
          "prevClose": 103.53,
          "change": -1.22,
          "changePct": -1.18,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 102.7,
        "series": [
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
            "close": 102.31
          },
          {
            "date": "2026-10-02",
            "close": 102.7
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
        "close": 4202.2998,
        "prevClose": 4186.7002,
        "change": 15.5996,
        "changePct": 0.37,
        "asOf": "2026-10-01",
        "prevAsOf": "2026-09-30",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-02",
          "close": 4172.1001,
          "prevDate": "2026-10-01",
          "prevClose": 4202.2998,
          "change": -30.1997,
          "changePct": -0.72,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-01",
          "close": 4202.2998,
          "prevDate": "2026-09-30",
          "prevClose": 4186.7002,
          "change": 15.5996,
          "changePct": 0.37,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 4172.1,
        "series": [
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
            "close": 4202.2998
          },
          {
            "date": "2026-10-02",
            "close": 4172.1001
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
        "close": 157.927,
        "prevClose": 157.558,
        "change": 0.369,
        "changePct": 0.23,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": true,
        "latest": {
          "date": "2026-10-03",
          "close": 157.83,
          "prevDate": "2026-10-02",
          "prevClose": 157.927,
          "change": -0.097,
          "changePct": -0.06,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 157.927,
          "prevDate": "2026-10-01",
          "prevClose": 157.558,
          "change": 0.369,
          "changePct": 0.23,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 157.83,
        "series": [
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
            "close": 157.927
          },
          {
            "date": "2026-10-03",
            "close": 157.83
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
          "close": 31.796,
          "prevDate": "2026-10-01",
          "prevClose": 31.8679,
          "change": -0.0719,
          "changePct": -0.23,
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
        "quotePrice": 31.796,
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
            "close": 31.796
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
        "close": 48475.7383,
        "prevClose": 48353.4883,
        "change": 122.25,
        "changePct": 0.25,
        "asOf": "2026-10-02",
        "prevAsOf": "2026-10-01",
        "gapDays": 1,
        "gapSuspect": false,
        "live": false,
        "latest": {
          "date": "2026-10-02",
          "close": 48475.7383,
          "prevDate": "2026-10-01",
          "prevClose": 48353.4883,
          "change": 122.25,
          "changePct": 0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "settled": {
          "date": "2026-10-02",
          "close": 48475.7383,
          "prevDate": "2026-10-01",
          "prevClose": 48353.4883,
          "change": 122.25,
          "changePct": 0.25,
          "gapDays": 1,
          "gapSuspect": false
        },
        "quotePrice": 48475.74,
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
            "close": 48475.7383
          }
        ],
        "currency": "TWD",
        "timezone": "Asia/Taipei",
        "source": "Yahoo Finance chart API（日線）"
      }
    }
  }
};
