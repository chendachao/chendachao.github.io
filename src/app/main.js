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
import { scrollToTop } from './utils/scroll';

import Theme from './components/theme';

import i18n from './utils/i18n';
i18n.init();

// Show intro
import('./components/intro').then(Intro => {
  const intro = new Intro.default();

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
import('./components/tooltip').then(TooltipAndPopover => TooltipAndPopover.default());

import('./components/dialog').then(SetQRCode => SetQRCode.default());

// hide the install app button if in IE
if (isIE()) {
  const installButton = document.getElementById('btnInstall');
  installButton.setAttribute('hidden', '');
}

window.addEventListener('load', function() {

  scrollToTop();

  // Initial theme
  Theme();
  
  let errorToasted;
  const updateOnlineStatus = function (event) {
    var message = navigator.onLine ? "" : "You are offline!";
    if(message) {
      errorToasted = toasted.error(message.toUpperCase(), { 
        action: {
          text: 'Close',
          onClick: (e, toasted) => {
            toasted.delete();
          },
        },
      });
    } else {
      errorToasted && errorToasted.delete();
    }
  }

  updateOnlineStatus();
  
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});



