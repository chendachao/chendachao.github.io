(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "JmQe":
/*!*************************************!*\
  !*** ./src/app/components/intro.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intro.js */ "R5/Y");
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intro_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var intro_js_introjs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intro.js/introjs.css */ "mZIp");
/* harmony import */ var intro_js_themes_introjs_nazanin_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intro.js/themes/introjs-nazanin.css */ "LwL/");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/i18n */ "mTgQ");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import 'intro.js/themes/introjs-modern.css';
// import 'intro.js/themes/introjs-royal.css';

 // import 'intro.js/themes/introjs-nassim.css';
// import 'intro.js/themes/introjs-flattener.css';



var Intro = /*#__PURE__*/function () {
  function Intro() {// this.format = i18n.format;

    _classCallCheck(this, Intro);

    _defineProperty(this, "isHintDisplayed", false);

    _defineProperty(this, "format", _utils_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].format);

    _defineProperty(this, "hideIntro", function () {
      localStorage.setItem('hideIntro', true);
    });
  }

  _createClass(Intro, [{
    key: "init",
    value: function init() {
      var hideIntro = JSON.parse(localStorage.getItem('hideIntro'));
      !hideIntro && this.initAndShowIntro(); // this.initAndShowIntro();
    }
  }, {
    key: "initAndShowIntro",
    value: function initAndShowIntro() {
      var intro = intro_js__WEBPACK_IMPORTED_MODULE_0___default()();
      intro.setOptions({
        showProgress: true,
        steps: [{
          intro: this.format('APP.INTRO.INTRO')
        }, {
          element: '#step1',
          intro: this.format('APP.INTRO.STEP1'),
          tooltipPosition: 'bottom'
        }, {
          element: '#step2',
          intro: this.format('APP.INTRO.STEP2'),
          tooltipPosition: 'top'
        }, {
          element: '#step3',
          intro: this.format('APP.INTRO.STEP3'),
          tooltipPosition: 'auto'
        }, {
          element: '#step4',
          intro: this.format('APP.INTRO.STEP4'),
          tooltipPosition: 'left'
        }, {
          element: '#step5',
          intro: this.format('APP.INTRO.STEP5'),
          tooltipPosition: 'left'
        }]
      });
      intro.start();
      intro.onskip(this.hideIntro);
      intro.oncomplete(this.hideIntro);
    }
  }, {
    key: "initHint",
    value: function initHint() {
      var intro = intro_js__WEBPACK_IMPORTED_MODULE_0___default()();
      intro.setOptions({
        showProgress: true,
        hints: [{
          element: '.step11',
          hint: this.format('APP.INTRO.STEP1'),
          hintPosition: 'left'
        }, {
          element: '.step12',
          hint: this.format('APP.INTRO.STEP2'),
          hintPosition: 'top-left'
        }, {
          element: '.step13',
          hint: this.format('APP.INTRO.STEP3'),
          hintPosition: 'top'
        }, {
          element: '.step14',
          hint: this.format('APP.INTRO.STEP4'),
          hintPosition: 'left'
        }, {
          element: '.step15',
          hint: this.format('APP.INTRO.STEP5'),
          hintPosition: 'left'
        }]
      });
      intro.addHints();
    }
  }, {
    key: "toggleHint",
    value: function toggleHint() {
      var intro = intro_js__WEBPACK_IMPORTED_MODULE_0___default()();

      if (this.isHintDisplayed) {
        intro.hideHints();
        this.isHintDisplayed = false;
      } else {
        this.initHint();
        intro.showHints();
        this.isHintDisplayed = true;
      }
    }
  }]);

  return Intro;
}();

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ })

}]);
//# sourceMappingURL=9.547558b0ad6d00c01428.bundle.js.map