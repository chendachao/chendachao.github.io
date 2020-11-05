(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "Amp2":
/*!***************************************!*\
  !*** ./src/app/components/tooltip.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "b5oN");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "Ut/D");
/* harmony import */ var tippy_js_dist_svg_arrow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tippy.js/dist/svg-arrow.css */ "Czj+");
/* harmony import */ var tippy_js_themes_light_border_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js/themes/light-border.css */ "uRzX");
/* harmony import */ var tippy_js_dist_backdrop_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js/dist/backdrop.css */ "50gI");
/* harmony import */ var tippy_js_animations_scale_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js/animations/scale.css */ "/9r5");
/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tippy.js/animations/scale-subtle.css */ "FXAQ");
/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tippy.js/animations/scale-extreme.css */ "OEb+");
/* harmony import */ var tippy_js_animations_perspective_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tippy.js/animations/perspective.css */ "uZvc");
/* harmony import */ var tippy_js_animations_perspective_subtle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tippy.js/animations/perspective-subtle.css */ "/C1V");
/* harmony import */ var tippy_js_animations_perspective_extreme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tippy.js/animations/perspective-extreme.css */ "JFJs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "sEcA");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/i18n */ "mTgQ");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // optional for styling









 // import 'tippy.js/animations/shift-away.css';
// import 'tippy.js/animations/shift-away-subtle.css';
// import 'tippy.js/animations/shift-away-extreme.css';
// import 'tippy.js/animations/shift-toward.css';
// import 'tippy.js/animations/shift-toward-subtle.css';
// import 'tippy.js/animations/shift-toward-extreme.css';




function TooltipAndPopover() {
  var template = document.getElementById('wechat-popup');
  var container = document.createElement('div');
  var commonConig = {
    allowHTML: true,
    arrow: tippy_js__WEBPACK_IMPORTED_MODULE_0__["roundArrow"],
    // trigger: 'click',
    // placement: 'left',
    // theme: 'light-border',
    theme: 'gradient',
    interactive: true,
    animation: Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isPC"])() ? 'scale' : 'perspective',
    inertia: true,
    moveTransition: 'transform 0.2s ease-out',
    appendTo: document.body
  }; // Common tooltip

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isPC"])()) {
    setTimeout(function () {
      var tippyInstances = Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tooltip]');
      var singleton = Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["createSingleton"])(tippyInstances, commonConig);
    });
  } else {
    setTimeout(function () {
      Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tooltip]', commonConig);
    });
  } // show the popup of wechat qrCode


  if (Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isIE"])()) {
    container.appendChild(template);
  } else {
    container.appendChild(document.importNode(template.content, true)); // const clone = template.content.cloneNode(true);
    // container.appendChild(clone);
  } // click to scale qrcode


  function toggleScale(event) {
    var _this = this;

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isIE"])()) {
      setTimeout(function () {
        _this.classList.toggle('scale');
      }, 800);
    } else {
      this.classList.toggle('scale');
    }
  } // wechat qrcode popup


  Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#wechat', _objectSpread(_objectSpread({}, commonConig), {}, {
    theme: 'light-border',
    content: container,
    // trigger: 'click',
    duration: [675, 1000],
    onShown: function onShown(instance) {
      var content = instance.popper;
      var qrCode = content.querySelector('.tippy-box');
      qrCode.addEventListener('click', toggleScale, true);
      content.querySelectorAll('[data-i18n-id]').forEach(function (i18nLabel) {
        console.log('i18nLabel', i18nLabel);
        var i18nId = i18nLabel.dataset.i18nId;
        i18nLabel.innerHTML = _utils_i18n__WEBPACK_IMPORTED_MODULE_12__["default"].format(i18nId);
      });
    },
    onHide: function onHide(instance) {
      var content = instance.popper;
      var qrCode = content.querySelector('.tippy-box');
      qrCode.classList.remove('scale');
      qrCode.removeEventListener('click', toggleScale, true);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TooltipAndPopover);

/***/ })

}]);
//# sourceMappingURL=10.f30257fb22b739c89751.bundle.js.map