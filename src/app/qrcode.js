import QRCode from 'qrcode';
import dialogPolyfill from 'dialog-polyfill';

function SetQRCode() {
  let LOCAL_REGEXP= /localhost|127.0.0.1/;
  let mySite = LOCAL_REGEXP.test(window.location.origin) ? 'https://chendachao.github.io' : window.location.origin;
  
  var dialog = document.querySelector('#dialog');
  var closeBtn = document.querySelector('#closeBtn');
  let qrcodeHandler = document.querySelector('.qrcode-handler');
  
  dialogPolyfill.registerDialog(dialog);
  
  qrcodeHandler.addEventListener('click', () => {
  
    dialog.showModal();
  
    QRCode.toDataURL(mySite, {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        quality: 1,
        margin: 1,
        color: {
          // dark: "#010599FF",
          // light: "#FFBF60FF"
        }
      })
      .then(url => {
        let img = document.querySelector('.mobile-qrcode');
        img.src = url;
      })
      .catch(err => {
        console.error(err);
      });
  });
  
  closeBtn.onclick = function () {
    dialog.close();
  };
  
  dialog.addEventListener('click', function (event) {
    const rect = dialog.getBoundingClientRect();
    // const isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
    //   && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    const isInDialog=(rect.top <= event.clientY && event.clientY <= rect.bottom
      && rect.left <= event.clientX && event.clientX <= rect.right);
    if (!isInDialog) {
      dialog.close();
    }
  });
}

export default SetQRCode;

