(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "g2xD":
/*!***************************************!*\
  !*** ./src/app/components/dialog.css ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "rDv0":
/*!**************************************!*\
  !*** ./src/app/components/dialog.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode */ "0FX9");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-polyfill */ "pWKE");
/* harmony import */ var _dialog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.css */ "g2xD");




function SetQRCode() {
  // const showModalClass = 'scale-in';
  // const hideModalClass = 'scale-out';
  var showModalClass = 'appear-from-top';
  var hideModalClass = 'disappear-from-top'; // const showModalClass = 'appear-from-bottom';
  // const hideModalClass = 'disappear-from-bottom';

  var LOCAL_REGEXP = /localhost|127.0.0.1/;
  var mySite = LOCAL_REGEXP.test(window.location.origin) ? 'https://chendachao.github.io' : window.location.origin;
  var dialog = document.querySelector('#dialog');
  var dismissTriggers = document.querySelectorAll('.dialog-dismiss-trigger');
  var downloadBtn = document.querySelector('.download-btn');
  var qrcodeHandler = document.querySelector('.qrcode-handler');
  var img = document.querySelector('.mobile-qrcode');
  img.setAttribute('alt', mySite);
  dialog_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].registerDialog(dialog);
  qrcodeHandler.addEventListener('click', function () {
    dialog.showModal();
    dialog.classList.add(showModalClass);
    setTimeout(function () {
      dialog.classList.remove(showModalClass);
    }, 500);
    var canvas = document.createElement('canvas');
    var QRCodeDim = {
      width: 320,
      height: 320,
      margin: 3
    };
    qrcode__WEBPACK_IMPORTED_MODULE_0___default.a.toCanvas(canvas, mySite, {
      width: QRCodeDim.width,
      height: QRCodeDim.height,
      margin: QRCodeDim.margin,
      errorCorrectionLevel: 'H',
      quality: 1,
      version: 5,
      // 6
      color: {// dark: "#010599FF",
        // light: "#f5f5f5"
      }
    }).then(function (cvs) {
      var imgDim = {
        //logo dimention
        width: 30,
        height: 30
      };
      var logo = 'favicon.ico';
      var ctx = cvs.getContext('2d');
      var logoObj = new Image();
      logoObj.src = logo;

      logoObj.onload = function () {
        // fill logo background, cos the logo by default is transparent
        var bgWhiteMargin = 20; // stroke margin

        ctx.lineWidth = bgWhiteMargin / 3;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#ffffff';
        ctx.beginPath();
        ctx.rect(cvs.width / 2 - imgDim.width / 2 - bgWhiteMargin / 4, cvs.width / 2 - imgDim.width / 2 - bgWhiteMargin / 4, imgDim.width + bgWhiteMargin, imgDim.height + bgWhiteMargin);
        ctx.stroke(); // fill content color

        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(cvs.width / 2 - imgDim.width / 2 - bgWhiteMargin / 4, cvs.height / 2 - imgDim.height / 2 - bgWhiteMargin / 4, imgDim.width + bgWhiteMargin, imgDim.height + bgWhiteMargin);
        ctx.drawImage(logoObj, cvs.width / 2 - imgDim.width / 2 + bgWhiteMargin / 4, cvs.height / 2 - imgDim.height / 2 + bgWhiteMargin / 4, imgDim.width, imgDim.height);
        img.src = cvs.toDataURL('image/png');
      };
    })["catch"](function (err) {
      img.setAttribute('alt', "Failed to generate QRCode, please visit ".concat(mySite));
      console.error(err);
    });
  });

  function shake() {
    dialog.classList.add('shake');
    setTimeout(function () {
      return dialog.classList.remove('shake');
    }, 300);
  }

  function close(message) {
    dialog.classList.add(hideModalClass);
    setTimeout(function () {
      dialog.classList.remove(hideModalClass);
      dialog.close(message);
    }, 300);
  }

  function download(imgData) {
    downloadBtn.download = "".concat(window.location.hostname, ".png");
    downloadBtn.href = imgData;
  }

  dismissTriggers.forEach(function (ele) {
    ele.addEventListener('click', function () {
      close();
    });
  });
  downloadBtn.addEventListener('click', function () {
    close();
    download(img.src);
  });
  dialog.addEventListener('close', function () {
    dialog.returnValue = '';
  });
  dialog.addEventListener('click', function (event) {
    var rect = dialog.getBoundingClientRect(); // const isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
    //   && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);

    var isInDialog = rect.top <= event.clientY && event.clientY <= rect.bottom && rect.left <= event.clientX && event.clientX <= rect.right;

    if (!isInDialog) {
      // dialog.close();
      shake();
    }
  });
  dialog.addEventListener('cancel', function (ev) {
    ev.preventDefault();
    shake();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (SetQRCode);

/***/ })

}]);
//# sourceMappingURL=4.4b1587686661812bcb66.bundle.js.map