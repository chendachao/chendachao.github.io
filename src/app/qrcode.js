import QRCode from 'qrcode';
import dialogPolyfill from 'dialog-polyfill';

function SetQRCode() {
  let LOCAL_REGEXP= /localhost|127.0.0.1/;
  let mySite = LOCAL_REGEXP.test(window.location.origin) ? 'https://chendachao.github.io' : window.location.origin;
  
  var dialog = document.querySelector('#dialog');
  var dismissTriggers = document.querySelectorAll('.dialog-dismiss-trigger');
  let qrcodeHandler = document.querySelector('.qrcode-handler');
  
  dialogPolyfill.registerDialog(dialog);
  
  qrcodeHandler.addEventListener('click', () => {
  
    dialog.showModal();

    let img = document.querySelector('.mobile-qrcode');
  
    QRCode.toDataURL(mySite, {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        quality: 1,
        // type: 'image/svg',
        // version: 4, // 6
        margin: 1,
        color: {
          // dark: "#010599FF",
          // light: "#FFBF60FF"
        }
      })
      .then(url => {
        img.src = url;
      })
      .catch(err => {
        img.setAttribute('alt', mySite);
        console.error(err);
      });
  });
  
  dismissTriggers.forEach(ele => {
    ele.addEventListener('click', function() {
      dialog.close();
    });
  });
  
  dialog.addEventListener('click', function (event) {
    const rect = dialog.getBoundingClientRect();
    // const isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
    //   && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    const isInDialog=(rect.top <= event.clientY && event.clientY <= rect.bottom
      && rect.left <= event.clientX && event.clientX <= rect.right);
    if (!isInDialog) {
      // dialog.close();
      // TODO: also need to shake when user tab 'ESC'
      dialog.classList.add('shake');
      setTimeout(() => dialog.classList.remove('shake'), 300);
      dismissTriggers[1].focus();
    }
  });
}

export default SetQRCode;

