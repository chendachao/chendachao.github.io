(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    NjgO: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('Zdl6'),
        o = n('sEcA'),
        a = function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
            n = document.documentElement.scrollTop || document.body.scrollTop;
          n > 0 && (window.requestAnimationFrame(e), window.scrollTo(0, n - n / t));
        },
        i = document.querySelector('.scroll-to-top-btn');
      i &&
        i.addEventListener('click', function () {
          a();
        });
      var c = new Date(2020, 3, 4);
      var u = function () {
        var e = function (e) {
          document.getElementsByTagName('body')[0].setAttribute('data-theme', e);
        };
        if (Object(o.a)(new Date(), c) <= 1) e('gray');
        else {
          var t = localStorage.getItem('theme');
          t && e(t),
            document.querySelector('.moon').addEventListener('click', function () {
              var t = 'light' === document.getElementsByTagName('body')[0].getAttribute('data-theme') ? 'dark' : 'light';
              e(t), localStorage.setItem('theme', t);
            });
        }
      };
      (n('mTgQ').a.init(),
      Promise.all([n.e(9), n.e(12)])
        .then(n.bind(null, 'JmQe'))
        .then(function (e) {
          var t = new e.default();
          setTimeout(function () {
            t.init();
          }, 5e3);
          var n = document.querySelector('.start-replay-tour'),
            r = document.querySelector('.start-hint');
          n.addEventListener('click', function () {
            t.initAndShowIntro();
          }),
            r.addEventListener('click', function () {
              t.toggleHint();
            });
        }),
      Promise.all([n.e(8), n.e(14)])
        .then(n.bind(null, 'Amp2'))
        .then(function (e) {
          return e.default();
        }),
      Promise.all([n.e(7), n.e(13)])
        .then(n.bind(null, 'hn8A'))
        .then(function (e) {
          return e.default();
        }),
      Object(o.b)()) && document.getElementById('btnInstall').setAttribute('hidden', '');
      window.addEventListener('load', function () {
        a(), u();
        var e = function (e) {
          var t = navigator.onLine ? '' : 'You are offline!';
          t &&
            r.a.error(t.toUpperCase(), {
              action: {
                text: 'Close',
                onClick: function (e, t) {
                  t.delete();
                },
              },
            });
        };
        e(), window.addEventListener('online', e), window.addEventListener('offline', e);
      });
    },
    Zdl6: function (e, t, n) {
      'use strict';
      var r = n('x04a');
      n('h5zZ');
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      var i = new r.a(
        (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, { position: 'bottom-center', theme: 'alive', fullWidth: !0, fitToScreen: !1 })
      );
      t.a = i;
    },
    mTgQ: function (e, t, n) {
      'use strict';
      var r = n('6QKu'),
        o = n('vDqi'),
        a = n.n(o);
      function i(e, t, n, r, o, a, i) {
        try {
          var c = e[a](i),
            u = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function c(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function c(e) {
              i(a, r, o, c, u, 'next', e);
            }
            function u(e) {
              i(a, r, o, c, u, 'throw', e);
            }
            c(void 0);
          });
        };
      }
      var u = (function () {
        var e,
          t,
          n =
            ((e = localStorage.getItem('lang') || (window.navigator.languages && window.navigator.languages[0]) || null),
            -1 !==
              (t = e =
                e || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage).indexOf(
                '-'
              ) && (t = t.split('-')[0]),
            -1 !== t.indexOf('_') && (t = t.split('_')[0]),
            console.log(e, t),
            t || 'en'),
          o = n,
          i = {};
        function u(e, t) {
          t = t || {};
          var n = i[o];
          return new r.a(n[e], o).format(t);
        }
        function l() {
          document.querySelectorAll('*[data-i18n-id]').forEach(function (e) {
            var t = e.dataset.i18nId;
            e.innerHTML = u(t);
          }),
            document.querySelectorAll('*[data-i18n-attr]').forEach(function (e) {
              var t = e.dataset.i18nAttr.split('=');
              e.setAttribute(t[0], u(t[1]));
            });
        }
        var s = (function () {
          var e = c(
            regeneratorRuntime.mark(function e(t) {
              var n, r;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (n = '/assets/i18n/'.concat(t, '.json')), (e.prev = 1), (e.next = 4), a.a.get(n);
                      case 4:
                        (r = e.sent), (e.next = 12);
                        break;
                      case 7:
                        return (e.prev = 7), (e.t0 = e.catch(1)), (e.next = 11), a.a.get('/assets/i18n/en.json');
                      case 11:
                        r = e.sent;
                      case 12:
                        return e.abrupt('return', r.data);
                      case 13:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        function d() {
          return (d = c(
            regeneratorRuntime.mark(function e(t) {
              var n;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), s(t);
                    case 2:
                      (n = e.sent), (i[t] = n), l();
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var f = function () {
          !(function (e) {
            (o = e), localStorage.setItem('lang', e);
          })(o),
            (function (e) {
              d.apply(this, arguments);
            })(o);
        };
        return {
          init: function () {
            f(),
              document.querySelector('.language-btn').addEventListener('click', function (e) {
                (o = 'en' === o ? 'zh' : 'en'), f(), window.location.reload();
              });
          },
          format: u,
        };
      })();
      t.a = u;
    },
    sEcA: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return i;
      }),
        n.d(t, 'c', function () {
          return c;
        }),
        n.d(t, 'a', function () {
          return u;
        });
      var r = n('M39V'),
        o = n.n(r),
        a = (n('mTgQ'), n('Zdl6'), o.a.getParser(window.navigator.userAgent));
      function i() {
        return 'Internet Explorer' === a.getBrowserName();
      }
      var c = function () {
          return 'desktop' === a.getPlatformType();
        },
        u = function (e, t) {
          return Math.abs(e.getTime() - t.getTime()) / 864e5;
        };
    },
  },
]);
