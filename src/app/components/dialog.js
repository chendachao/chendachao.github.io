import QRCode from 'qrcode';
import dialogPolyfill from 'dialog-polyfill';
import './dialog.css';

function SetQRCode() {
  // const showModalClass = 'scale-in';
  // const hideModalClass = 'scale-out';
  // const showModalClass = 'appear-from-top';
  // const hideModalClass = 'disappear-from-top';
  const showModalClass = 'appear-from-bottom';
  const hideModalClass = 'disappear-from-bottom';

  let LOCAL_REGEXP= /localhost|127.0.0.1/;
  let mySite = LOCAL_REGEXP.test(window.location.origin) ? 'https://chendachao.github.io' : window.location.origin;
  
  var dialog = document.querySelector('#dialog');
  var dismissTriggers = document.querySelectorAll('.dialog-dismiss-trigger');
  let qrcodeHandler = document.querySelector('.qrcode-handler');
  
  dialogPolyfill.registerDialog(dialog);
  
  qrcodeHandler.addEventListener('click', () => {

    dialog.classList.add(showModalClass);
    setTimeout(() => {
      dialog.classList.remove(showModalClass);
    }, 500);
  
    dialog.showModal();

    let img = document.querySelector('.mobile-qrcode');
    img.setAttribute('alt', mySite);
  
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
        img.setAttribute('alt', `Failed to generate QRCode, please visit ${mySite}`);
        console.error(err);
      });
  });

  function shake() {
    dialog.classList.add('shake');
    setTimeout(() => dialog.classList.remove('shake'), 300);
  }
  
  dismissTriggers.forEach(ele => {
    ele.addEventListener('click', function() {
      dialog.classList.add(hideModalClass);
      setTimeout(() => {
        dialog.classList.remove(hideModalClass);
        dialog.close();
      }, 500);
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
      shake();
    }
  });

  dialog.addEventListener('cancel', (ev) => {
    ev.preventDefault();
    shake();
  });

}

export default SetQRCode;

