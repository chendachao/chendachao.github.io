import QRCode from 'qrcode';
import dialogPolyfill from 'dialog-polyfill';
import { origin } from '@app/constants';
// import './dialog.css';
import(/* webpackPreload: true */ './dialog.css');

var dialog = document.querySelector('#dialog');

// const showModalClass = 'scale-in';
// const hideModalClass = 'scale-out';
const showModalClass = 'appear-from-top';
const hideModalClass = 'disappear-from-top';
// const showModalClass = 'appear-from-bottom';
// const hideModalClass = 'disappear-from-bottom';

dialogPolyfill.registerDialog(dialog);

function showModal() {
  dialog.showModal();
  dialog.classList.add(showModalClass);
  setTimeout(() => {
    dialog.classList.remove(showModalClass);
  }, 1300);
}

function closeModal(message) {
  dialog.classList.add(hideModalClass);
  setTimeout(() => {
    dialog.classList.remove(hideModalClass);
    dialog.close(message);
  }, 500);
}

function shake() {
  dialog.classList.add('shake');
  setTimeout(() => dialog.classList.remove('shake'), 300);
}

var dismissTriggers = document.querySelectorAll('.dialog-dismiss-trigger');
dismissTriggers.forEach(ele => {
  ele.addEventListener('click', function () {
    closeModal();
  });
});

dialog.addEventListener('close', function () {
  dialog.returnValue = '';
});

dialog.addEventListener('click', function (event) {
  const rect = dialog.getBoundingClientRect();
  // const isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
  //   && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
  const isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.bottom &&
    rect.left <= event.clientX &&
    event.clientX <= rect.right;
  if (!isInDialog) {
    // dialog.close();
    shake();
  }
});

dialog.addEventListener('cancel', ev => {
  ev.preventDefault();
  shake();
});

// TODO: if the image was already rendered, there's no need to rerender again, add flag to handle it
const displayQRCode = () => {
  const LOCAL_REGEXP = /localhost|127.0.0.1/;
  const mySite = LOCAL_REGEXP.test(window.location.origin)
    ? origin
    : window.location.origin;

  const downloadImgWrapper = document.querySelector('.download-img-wrapper');
  const img = document.querySelector('.mobile-qrcode');
  img.setAttribute('alt', mySite);

  const canvas = document.createElement('canvas');
  const QRCodeDim = {
    width: 320,
    height: 320,
    margin: 3,
  };
  QRCode.toCanvas(canvas, mySite, {
    width: QRCodeDim.width,
    height: QRCodeDim.height,
    margin: QRCodeDim.margin,
    errorCorrectionLevel: 'Q',
    quality: 1,
    version: 5, // 6
    // color: {
    //   dark: "#010599FF",
    //   light: "#ffffff9d"
    // },
  })
    .then(cvs => {
      const imgDim = {
        //logo dimention
        width: 48,
        height: 48,
      };
      // const logo = './assets/images/bases/home.svg';
      // const logo = './assets/images/larrychen.jpg';
      const logo = './assets/images/icons/favicon.ico';
      const ctx = cvs.getContext('2d');
      const logoObj = new Image();
      logoObj.src = logo;
      logoObj.onload = function () {
        // fill logo background, cos the logo by default is transparent
        const bgWhiteMargin = 6;

        // stroke margin
        ctx.lineWidth = bgWhiteMargin / 3;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#ffffff';
        ctx.beginPath();
        ctx.rect(
          cvs.width / 2 - imgDim.width / 2 - bgWhiteMargin / 4,
          cvs.width / 2 - imgDim.width / 2 - bgWhiteMargin / 4,
          imgDim.width + bgWhiteMargin,
          imgDim.height + bgWhiteMargin,
        );
        ctx.stroke();

        // fill content color
        ctx.fillStyle = '#ffffff';
        // ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(
          cvs.width / 2 - imgDim.width / 2 - bgWhiteMargin / 4,
          cvs.height / 2 - imgDim.height / 2 - bgWhiteMargin / 4,
          imgDim.width + bgWhiteMargin,
          imgDim.height + bgWhiteMargin,
        );

        ctx.drawImage(
          logoObj,
          cvs.width / 2 - imgDim.width / 2 + bgWhiteMargin / 4,
          cvs.height / 2 - imgDim.height / 2 + bgWhiteMargin / 4,
          imgDim.width,
          imgDim.height,
        );
        img.src = cvs.toDataURL('image/jpeg');
        downloadImgWrapper.href = img.src;
        downloadImgWrapper.download = `${window.location.hostname}.jpeg`;
      };
    })
    .catch(err => {
      img.setAttribute('alt', `Failed to generate QRCode, please visit ${mySite}`);
      console.error(err);
    });

  var downloadBtn = document.querySelector('.download-btn');
  function download(imgData) {
    downloadBtn.download = `${window.location.hostname}.jpeg`;
    downloadBtn.href = imgData;
  }

  downloadBtn.addEventListener('click', function () {
    closeModal();
    download(img.src);
  });
};

export { showModal, closeModal, displayQRCode };
