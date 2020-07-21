import toasted from './utils/toasted';

// toasted.success('New version available.', {
//   action: {
//     text: 'Reload',
//     onClick: (e, toasted) => {
//       toasted.delete();
//        window.location.reload();
//     },
//   },
// });

import { isIE } from './utils';
import { scrollToTop } from '././scroll-to-top';

import Theme from './theme';

import I18n from './i18n';
const i18n = I18n();

// Show intro
import('./intro').then(Intro => {
  const intro = new Intro.default(i18n.format);

  setTimeout(() => {
    intro.init();
  }, 5000);

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

  scrollToTop();

  // Initial theme
  Theme();

  const updateOnlineStatus = function (event) {
    var message = navigator.onLine ? "" : "You are in offline status!";
    message && toasted.error(message.toUpperCase(), { 
      action: {
        text: 'Close',
        onClick: (e, toasted) => {
          toasted.delete();
        },
      },
    });
  }

  updateOnlineStatus();
  
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});



