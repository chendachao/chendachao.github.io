(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ 0:
/*!*******************!*\
  !*** multi ./src ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/chendachao.github.io/chendachao.github.io/src */"tjUo");


/***/ }),

/***/ "Zdl6":
/*!**********************************!*\
  !*** ./src/app/utils/toasted.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var toastedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastedjs */ "x04a");
/* harmony import */ var toastedjs_dist_toasted_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastedjs/dist/toasted.min.css */ "h5zZ");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var commonConfig = {
  position: 'bottom-center',
  theme: 'alive',
  // alive, colombo, venice, material, bootstrap, bulma
  // icon : 'update',
  fullWidth: true,
  fitToScreen: false
};
var toasted = new toastedjs__WEBPACK_IMPORTED_MODULE_0__["default"](_objectSpread({}, commonConfig)); // toasted.show('New version available.');
// toasted.success('New version available.');
// toasted.error('New version available.');
// toasted.info('New version available.');

/* harmony default export */ __webpack_exports__["default"] = (toasted);

/***/ }),

/***/ "fnl6":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "mTgQ":
/*!*******************************!*\
  !*** ./src/app/utils/i18n.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-messageformat */ "6QKu");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var I18n = function I18n() {
  var getDefaultLang = function getDefaultLang() {
    var lang = localStorage.getItem('lang') || window.navigator.languages && window.navigator.languages[0] || null;
    lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
    var shortLang = lang;
    if (shortLang.indexOf('-') !== -1) shortLang = shortLang.split('-')[0];
    if (shortLang.indexOf('_') !== -1) shortLang = shortLang.split('_')[0];
    console.log(lang, shortLang);
    return shortLang;
  };

  var initialLocale = getDefaultLang() || 'en';
  var languages = [{
    key: 'en',
    label: 'English'
  }, {
    key: 'zh',
    label: 'Chinese'
  }];
  var locale = initialLocale;
  var messages = {};
  var greeting = {
    id: 'app.greeting',
    defaultMessage: 'Hello, {name}!',
    description: 'Greeting to welcome the user to the app'
  };

  function format(key, opts) {
    opts = opts || {};
    var localeMsg = messages[locale];
    var msg = new intl_messageformat__WEBPACK_IMPORTED_MODULE_0__["default"](localeMsg[key], locale);
    return msg.format(opts);
  }

  function render() {
    // Change label
    var i18nLabels = document.querySelectorAll('*[data-i18n-id]');
    i18nLabels.forEach(function (i18nLabel) {
      var i18nId = i18nLabel.dataset.i18nId;
      i18nLabel.innerHTML = format(i18nId);
    }); // Change attr like tooltip

    document.querySelectorAll('*[data-i18n-attr]').forEach(function (i18nLabel) {
      var i18nAttr = i18nLabel.dataset.i18nAttr;
      var attr = i18nAttr.split('=');
      i18nLabel.setAttribute(attr[0], format(attr[1]));
    });
  }

  function setLocale(lang) {
    locale = lang;
    localStorage.setItem('lang', lang);
  }

  var getI18nMessages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(lang) {
      var url, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "/assets/i18n/".concat(lang, ".json");
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);

            case 4:
              response = _context.sent;
              _context.next = 12;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/assets/i18n/en.json');

            case 11:
              response = _context.sent;

            case 12:
              return _context.abrupt("return", response.data);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function getI18nMessages(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  function reformat(_x2) {
    return _reformat.apply(this, arguments);
  }

  function _reformat() {
    _reformat = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(lang) {
      var message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getI18nMessages(lang);

            case 2:
              message = _context2.sent;
              messages[lang] = message;
              render();

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _reformat.apply(this, arguments);
  }

  var triggerLanguageHandler = function triggerLanguageHandler() {
    setLocale(locale);
    reformat(locale);
  };

  function init() {
    triggerLanguageHandler(initialLocale);
    var languageBtn = document.querySelector('.language-btn');
    languageBtn.addEventListener('click', function (e) {
      locale = locale === 'en' ? 'zh' : 'en';
      triggerLanguageHandler(locale);
      window.location.reload();
    });
  }

  return {
    init: init,
    format: format,
    locale: locale
  };
};

var i18n = I18n();
/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ "rG0W":
/*!************************!*\
  !*** ./src/app/pwa.js ***!
  \************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    // execute onRegister callback
    config && config.onRegister && config.onRegister(registration); // check update
    // registration.update();

    registration.addEventListener('updatefound', function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.addEventListener('statechange', function () {
        // Has network.state changed!
        console.log('statechange', installingWorker.state);

        switch (installingWorker.state) {
          case 'installed':
            if (navigator.serviceWorker.controller) {
              // new update available
              console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // no update available
              console.log('Content is cached for offline use.', installingWorker.state); // Execute callback

              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }

            break;

          case 'redundant':
            console.error('The installing service worker became redundant.');
            break;
          // default:
          //   console.log('installingWorker.state', installingWorker.state);
          //   break;
        }
      });
    });
  })["catch"](function (registrationError) {
    console.log('SW registration failed: ', registrationError);
  }); // // When the user asks to refresh the UI, we'll need to reload the window
  // navigator.serviceWorker.addEventListener('message', event => {
  //   console.log('reload-window', event.data);
  //   if (!event.data) {
  //     return;
  //   }
  //   switch (event.data) {
  //     case 'reload-window':
  //       // window.location.reload();
  //       break;
  //     default:
  //       // NOOP
  //       break;
  //   }
  // });
  // auto refresh to update when new version is available
  // var refreshing;
  // navigator.serviceWorker.addEventListener('controllerchange', () => {
  //   if (refreshing) {
  //     return;
  //   }
  //   refreshing = true;
  //   window.location.reload();
  // });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  })["catch"](function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "55Il");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_utils_toasted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/utils/toasted */ "Zdl6");
/* harmony import */ var _app_utils_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/utils/i18n */ "mTgQ");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! normalize.css */ "9d8Q");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.css */ "fnl6");
/* harmony import */ var _app_pwa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/pwa */ "rG0W");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// es6 generator support


 // import(/* webpackPrefetch: true */'./app/pwa');

Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./app/main */ "NjgO"));


__webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./styles/override.css */ "sA7o"));

var format = _app_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].format;
_app_pwa__WEBPACK_IMPORTED_MODULE_5__["register"]({
  onRegister: function onRegister(registration) {
    var subscribeBtn = document.querySelector('.subscribe-btn');

    if (['default', 'denied'].includes(Notification.permission)) {
      subscribeBtn.removeAttribute('hidden');
    } // subscribe push notifications


    subscribeBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Notification.requestPermission();

            case 3:
              result = _context.sent;

              if (!(result === 'granted')) {
                _context.next = 9;
                break;
              }

              subscribeBtn.setAttribute('hidden', ''); // navigator.serviceWorker.getRegistration().then(function (reg) {
              //   // Show Local Notification
              //   reg.pushManager.subscribe({ userVisibleOnly: true });
              // });
              // Show Local Notification

              registration.pushManager.subscribe({
                userVisibleOnly: true
              });
              _context.next = 10;
              break;

            case 9:
              throw new Error('Notifications blocked. Please enable them in your browser.');

            case 10:
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              _app_utils_toasted__WEBPACK_IMPORTED_MODULE_1__["default"].error(_context.t0, {
                action: {
                  text: 'X',
                  onClick: function onClick(e, toasted) {
                    toasted["delete"]();
                  }
                }
              });
              console.log('Notifications error', _context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    })));
  },
  onUpdate: function onUpdate(registration) {
    // registration.unregister().then(() => {
    //   window.location.reload();
    // })
    function showNotification(title, message) {
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
          var options = {
            body: message,
            // TODO: these image cna't work
            icon: '/images/bell.svg',
            badge: '/images/notification.svg'
          }; // Show Local Notification

          reg.showNotification(title, options);
        });
      }
    }

    var updateReady = function updateReady() {
      showNotification(format('APP.NEW_VERSION_TITLE'), format('APP.NEW_VERSION_CONTENT'));
      _app_utils_toasted__WEBPACK_IMPORTED_MODULE_1__["default"].success(format('APP.NEW_VERSION_TITLE'), {
        action: {
          text: 'Update',
          onClick: function onClick(e, toasted) {
            window.location.reload();
          }
        }
      });
    };

    var waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', function (event) {
        console.log('onUpdate statechange', event.target.state);

        if (event.target.state === 'activated') {
          updateReady();
        }
      });
      waitingServiceWorker.postMessage({
        type: "SKIP_WAITING"
      });
    }
  },
  onSuccess: function onSuccess(registration) {
    console.log("registered app for offline use. details:", registration);
  }
});

/***/ })

},[[0,"runtime","vendors~app~cv~stone","vendors~app"]]]);
//# sourceMappingURL=app.796abdb92850b59b056a.bundle.js.map