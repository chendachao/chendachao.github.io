import QRCode from 'qrcode';
import dialogPolyfill from 'dialog-polyfill';
import './dialog.css';

function SetQRCode() {
  // const showModalClass = 'scale-in';
  // const hideModalClass = 'scale-out';
  const showModalClass = 'appear-from-top';
  const hideModalClass = 'disappear-from-top';
  // const showModalClass = 'appear-from-bottom';
  // const hideModalClass = 'disappear-from-bottom';

  let LOCAL_REGEXP = /localhost|127.0.0.1/;
  let mySite = LOCAL_REGEXP.test(window.location.origin) ? 'https://chendachao.github.io' : window.location.origin;

  var dialog = document.querySelector('#dialog');
  var dismissTriggers = document.querySelectorAll('.dialog-dismiss-trigger');
  var downloadBtn = document.querySelector('.download-btn');
  let qrcodeHandler = document.querySelector('.qrcode-handler');

  let img = document.querySelector('.mobile-qrcode');
  img.setAttribute('alt', mySite);

  dialogPolyfill.registerDialog(dialog);

  qrcodeHandler.addEventListener('click', () => {
    dialog.showModal();

    dialog.classList.add(showModalClass);
    setTimeout(() => {
      dialog.classList.remove(showModalClass);
    }, 500);

    let canvas = document.createElement('canvas');
    const QRCodeDim = {
      width: 320,
      height: 320,
      margin: 1.5,
    };
    QRCode.toCanvas(canvas, mySite, {
      width: QRCodeDim.width,
      height: QRCodeDim.height,
      margin: QRCodeDim.margin,
      errorCorrectionLevel: 'H',
      quality: 1,
      version: 4, // 6
      // color: {
      //   dark: "#010599FF",
      //   light: "#FFBF60FF"
      // }
    })
      .then(cvs => {
        const imgDim = {
          //logo dimention
          width: 35,
          height: 35,
        };
        const logo = 'favicon.ico';
        const ctx = cvs.getContext('2d');
        const logoObj = new Image();
        logoObj.src = logo;
        logoObj.onload = function () {
          // fill logo background, cos the logo by default is transparent
          const bgWhiteMargin = 20;

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
            imgDim.height + bgWhiteMargin
            );
          ctx.stroke();

          ctx.fillStyle = '#ffe506';
          ctx.fillRect(
            cvs.width / 2 - imgDim.width / 2 - bgWhiteMargin / 4,
            cvs.height / 2 - imgDim.height / 2 - bgWhiteMargin / 4,
            imgDim.width + bgWhiteMargin,
            imgDim.height + bgWhiteMargin
          );

          ctx.drawImage(
            logoObj,
            cvs.width / 2 - imgDim.width / 2 + bgWhiteMargin / 4,
            cvs.height / 2 - imgDim.height / 2 + bgWhiteMargin / 4,
            imgDim.width,
            imgDim.height
          );
          img.src = cvs.toDataURL('image/png');
        };
      })
      .catch(err => {
        img.setAttribute('alt', `Failed to generate QRCode, please visit ${mySite}`);
        console.error(err);
      });
  });

  function shake() {
    dialog.classList.add('shake');
    setTimeout(() => dialog.classList.remove('shake'), 300);
  }

  function close(message) {
    dialog.classList.add(hideModalClass);
    setTimeout(() => {
      dialog.classList.remove(hideModalClass);
      dialog.close(message);
    }, 300);
  }

  function download(imgData) {
    downloadBtn.download = `${window.location.hostname}.png`;
    downloadBtn.href = imgData;
  }

  dismissTriggers.forEach(ele => {
    ele.addEventListener('click', function () {
      close();
    });
  });

  downloadBtn.addEventListener('click', function () {
    close();
    download(img.src);
  });

  dialog.addEventListener('close', function() {
    dialog.returnValue = '';
  });

  dialog.addEventListener('click', function (event) {
    const rect = dialog.getBoundingClientRect();
    // const isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
    //   && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    const isInDialog =
      rect.top <= event.clientY && event.clientY <= rect.bottom && rect.left <= event.clientX && event.clientX <= rect.right;
    if (!isInDialog) {
      // dialog.close();
      shake();
    }
  });

  dialog.addEventListener('cancel', ev => {
    ev.preventDefault();
    shake();
  });
}

export default SetQRCode;
