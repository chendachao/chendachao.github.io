(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "JT91":
/*!*************************************!*\
  !*** ./src/app/components/theme.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "sEcA");

var startDate = new Date(2020, 3, 4); // Tomb-Sweeping Day

var endDate = new Date(2020, 7, 4);

function Theme() {
  var setTheme = function setTheme(theme) {
    var body = document.getElementsByTagName('body')[0];
    body.setAttribute('data-theme', theme);
  };

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["daysBetween"])(new Date(), startDate, endDate)) {
    setTheme('gray');
  } else {
    var defaultTheme = localStorage.getItem('theme');
    defaultTheme && setTheme(defaultTheme);
    var moon = document.querySelector('.moon');
    moon.addEventListener('click', function () {
      var body = document.getElementsByTagName('body')[0];
      var theme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      setTheme(theme);
      localStorage.setItem('theme', theme);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Theme);

/***/ }),

/***/ "NYoi":
/*!*********************************!*\
  !*** ./src/app/utils/scroll.js ***!
  \*********************************/
/*! exports provided: scrollToTop, scrollToBottom, scrollIntoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToBottom", function() { return scrollToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return scrollIntoView; });
var getScrollTop = function getScrollTop() {
  // Top offset
  // document.body.scrollTop alone should do the job but that actually works only in case of Chrome.
  // With IE and Firefox it also works sometimes (seemingly with very simple pages where you have
  // only a <pre> or something like that) but I don't know when. This hack seems to work always.
  var scrollTop = window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
  return scrollTop;
};

var getOffsetHeight = function getOffsetHeight() {
  // The overall height of the html
  // Grodriguez's fix for scrollHeight:
  // accounting for cases where html/body are set to height:100%
  var offsetHeight = document.body.offsetHeight || document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight;
  return offsetHeight;
};

var getScrollLeft = function getScrollLeft() {
  var scrollLeft = document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft;
  return scrollLeft;
};

var lastScrollTop = getScrollTop();
window.addEventListener('scroll', function (ev) {
  console.log('Scroll vertical or herizontal'); // currentScrollTop

  var scrollTop = getScrollTop();
  var offsetHeight = getOffsetHeight();

  if (scrollTop > lastScrollTop) {
    console.log('Scroll down'); // >= is needed because if the horizontal scrollbar is visible then window.innerHeight includes
    // it and in that case the left side of the equation is somewhat greater.
    // window.innerHeight: viewport height
    // var scrolledToBottom = (scrollTop + window.innerHeight) >= scrollHeight - 2;

    var scrolledToBottom = scrollTop + window.innerHeight >= offsetHeight;

    if (scrolledToBottom) {
      console.log("you're at the bottom of the page");
    }
  } else {
    console.log('Scroll up');
    var scrolledToTop = scrollTop === 0;

    if (scrolledToTop) {
      console.log("you're at the top of the page");
    }
  }

  lastScrollTop = scrollTop;
}); // As a bonus: how to scroll to the bottom programmatically by keeping the horizontal scrollpos:
// Since window.innerHeight includes the height of the horizontal scrollbar when it is visible
// the correct vertical scrollTop would be
// scrollHeight-window.innerHeight+sizeof(horizontal_scrollbar)
// Since we don't know the visibility/size of the horizontal scrollbar
// we scroll to scrollHeight that exceeds the value of the
// desired scrollTop but it seems to scroll to the bottom with all browsers
// without problems even when the horizontal scrollbar is visible.
// window.scrollTo(scrollLeft, offsetHeight);
// <button class="hello">hello</button>
// <button class="scroll-to-top-btn">Scroll To Top</button>
// <button class="scroll-into-view-btn">Scroll into View</button>
// https://stackoverflow.com/a/48942924/6294371

var scrollToTop = function scrollToTop() {
  var ratio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
  var smooth = arguments.length > 1 ? arguments[1] : undefined;

  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    var currentScrollTop = getScrollTop();

    if (currentScrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScrollTop - currentScrollTop / ratio); // Tip: for slower motion of the scrolling, increase the hardcoded number 8. The bigger the number - the smoother/slower the scrolling.
    }
  }
};
var scrollToBottom = function scrollToBottom() {
  var ratio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
  var smooth = arguments.length > 1 ? arguments[1] : undefined;
  var offsetHeight = getOffsetHeight();

  if (smooth) {
    window.scrollTo({
      top: offsetHeight,
      behavior: 'smooth'
    });
  } else {
    var currentScrollTop = getScrollTop();
    var scrollBottom = currentScrollTop + window.innerHeight - offsetHeight;

    if (scrollBottom < 0) {
      window.requestAnimationFrame(scrollToBottom);
      window.scrollTo(0, scrollBottom - scrollBottom / ratio); // Tip: for slower motion of the scrolling, increase the hardcoded number 8. The bigger the number - the smoother/slower the scrolling.
    }
  }
}; // Scroll to a certain element

var scrollIntoView = function scrollIntoView(element) {
  element.scrollIntoView({
    behavior: 'smooth'
  });
};
var scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
scrollToTopBtn && scrollToTopBtn.addEventListener('click', function () {
  scrollToTop(null, true); // scrollToTop();
});
var scrollToBottomBtn = document.querySelector('.scroll-to-bottom-btn');
scrollToBottomBtn && scrollToBottomBtn.addEventListener('click', function () {
  scrollToBottom(null, true); // scrollToBottom();
});
var scrollToViewBtn = document.querySelector('.scroll-to-view-btn');
scrollToViewBtn && scrollToViewBtn.addEventListener('click', function () {
  scrollIntoView(document.querySelector('.hello'));
});

/***/ }),

/***/ "NjgO":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_toasted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/toasted */ "Zdl6");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "sEcA");
/* harmony import */ var _utils_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/scroll */ "NYoi");
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/theme */ "JT91");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/i18n */ "mTgQ");



 // Initial theme

Object(_components_theme__WEBPACK_IMPORTED_MODULE_3__["default"])();

_utils_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].init(); // Initialize tooltip and popover

Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./components/tooltip */ "Amp2")).then(function (TooltipAndPopover) {
  return TooltipAndPopover["default"]();
});
Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./components/dialog */ "rDv0")).then(function (SetQRCode) {
  return SetQRCode["default"]();
}); // Show intro

Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./components/intro */ "JmQe")).then(function (Intro) {
  var intro = new Intro["default"]();

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isPC"])()) {
    // Load two fast in PC, need delay the intro popup
    setTimeout(function () {
      intro.init();
    }, 5000);
  } else {
    intro.init();
  }

  var startReplayBtn = document.querySelector('.start-replay-tour');
  var starthintBtn = document.querySelector('.start-hint');
  startReplayBtn.addEventListener('click', function () {
    intro.initAndShowIntro();
  });
  starthintBtn.addEventListener('click', function () {
    intro.toggleHint();
  });
}); // hide the install app button if in IE

if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isIE"])()) {
  var installButton = document.getElementById('btnInstall');
  installButton.setAttribute('hidden', '');
}

window.addEventListener('load', function () {
  var versionEl = document.querySelector('.version');
  versionEl.innerText = "v1.6.10-10-ge2410259"; // scrollToTop();
  // Click to open json file

  var developerModeLink = document.querySelector('.developer-mode-link');
  developerModeLink.setAttribute('href', "/assets/data/".concat(_utils_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].locale, "/chendachao.json"));
  var errorToasted;

  var updateOnlineStatus = function updateOnlineStatus(event) {
    var message = navigator.onLine ? "" : _utils_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].format('APP.OFFLINE');

    if (message) {
      errorToasted = _utils_toasted__WEBPACK_IMPORTED_MODULE_0__["default"].error(message.toUpperCase(), {
        action: {
          text: 'Close',
          onClick: function onClick(e, toasted) {
            toasted["delete"]();
          }
        }
      });
    } else {
      errorToasted && errorToasted["delete"]();
    }
  };

  updateOnlineStatus();
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
window.addEventListener('error', function (event) {
  var message = (event.error || event.message).toString(); // if(event.error) {
  //   message = event.error.stack;
  // }

  _utils_toasted__WEBPACK_IMPORTED_MODULE_0__["default"].error(message);
}); // window.onerror = function(msg, url, line, col, error) {
//   // Note that col & error are new to the HTML 5 spec and may not be 
//   // supported in every browser.  It worked for me in Chrome.
//   var extra = !col ? '' : '\ncolumn: ' + col;
//   extra += !error ? '' : '\nerror: ' + error;
//   console.log("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
//   var suppressErrorAlert = true;
//   // If you return true, then error alerts (like in older versions of 
//   // Internet Explorer) will be suppressed.
//   return suppressErrorAlert;
// };
// trigger
// window.setTimeout(function() {throw new Error('sdfsdfd')}, 0);
// var width=300;
// var height=200;
// var from_top=350;
// var from_left=500;
// var toolbar='no';
// var location='no';
// var directories='no';
// var status='no';
// var menubar='no';
// var scrollbars='yes';
// var resizable='yes';
// var atts='width='+width+'show,height='+height+',top='+from_top+',screenY=';
// atts+= from_top+',left='+from_left+',screenX='+from_left+',toolbar='+toolbar;
// atts+=',location='+location+',directories='+directories+',status='+status;
// atts+=',menubar='+menubar+',scrollbars='+scrollbars+',resizable='+resizable;
// var url = "/ems/ezrf_get_details.html?op_type="+key+"&title="+title +"#";
// window.open(url,‘win_name’,s atts);

/***/ }),

/***/ "sEcA":
/*!********************************!*\
  !*** ./src/app/utils/index.js ***!
  \********************************/
/*! exports provided: isIE, isMobile, isPC, daysDiff, isSameDay, daysBetween */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPC", function() { return isPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysDiff", function() { return daysDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return isSameDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysBetween", function() { return daysBetween; });
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ "M39V");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n */ "mTgQ");
/* empty/unused harmony star reexport *//* harmony import */ var _toasted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toasted */ "Zdl6");
/* empty/unused harmony star reexport */


var browser = bowser__WEBPACK_IMPORTED_MODULE_0___default.a.getParser(window.navigator.userAgent);
var IE = 'Internet Explorer';
function isIE() {
  return browser.getBrowserName() === IE;
}
function isMobile() {
  var match = window.matchMedia || window.msMatchMedia;

  if (match) {
    var mq = match('(pointer:coarse)');
    return mq.matches;
  }

  return false;
}
var isPC = function isPC() {
  return browser.getPlatformType() === 'desktop';
};
var daysDiff = function daysDiff(d1, d2) {
  // const diff = Math.abs(d1.getTime() - d2.getTime());
  var diff = d1.getTime() - d2.getTime();
  return diff / (1000 * 60 * 60 * 24);
};
var isSameDay = function isSameDay(d1, d2) {
  return daysDiff(d1, d2) >= -1 && daysDiff(d1, d2) <= 1;
};
var daysBetween = function daysBetween(d) {
  var d1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var d2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  var diff1 = daysDiff(d, d1);
  var diff2 = daysDiff(d2, d);
  return diff1 >= -1 && diff2 >= -1;
};

/***/ })

}]);
//# sourceMappingURL=3.a77ba43deaa218f3031d.bundle.js.map