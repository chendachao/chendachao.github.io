import IntlMessageFormat from 'intl-messageformat';

import { isIE } from './utils';

import Theme from './theme';

import I18n from './i18n';
const i18n = I18n();

// Show intro
import('./intro').then(Intro => {
  const intro = new Intro.default(i18n.format);

  setTimeout(() => {
    intro.init();
  }, 6000);

  const startReplayBtn = document.querySelector('.start-replay-tour');
  const starthintBtn = document.querySelector('.start-hint');

  startReplayBtn.addEventListener('click', () => {
    intro.initAndShowIntro();
  });

  starthintBtn.addEventListener('click', () => {
    intro.toggleHint();
  });
 
});

// Initialize tooltip and popover
import('./tooltip-popover').then(TooltipAndPopover => TooltipAndPopover.default());

import('./qrcode-dialog').then(SetQRCode => SetQRCode.default());

// hide the install app button if in IE
if (isIE()) {
  const installButton = document.getElementById('btnInstall');
  installButton.setAttribute('hidden', '');
}

window.addEventListener('load', function() {
  // Initial theme
  Theme();

  var status = document.getElementById("status");
  
  const updateOnlineStatus = function (event) {
    var message = navigator.onLine ? "" : "offline simida, will use cache!";
    status.className = message;
    status.innerHTML = message.toUpperCase();
  }

  updateOnlineStatus();
  
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});


const msg = new IntlMessageFormat('My name is {name}.', 'en-US');
console.log('IntlMessageFormat', msg.format({name: 'larry'}));


