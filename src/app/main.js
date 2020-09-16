import toasted from './utils/toasted';
import { isIE } from './utils';
import { scrollToTop } from './utils/scroll';

import Theme from './components/theme';
// Initial theme
Theme();

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

  // Click to open json file
  const developerModeLink = document.querySelector('.developer-mode-link');
  developerModeLink.setAttribute('href', `/assets/data/${i18n.locale}/chendachao.json`);

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

window.addEventListener('error', function(event) {
  var message = (event.error || event.message).toString();
  // if(event.error) {
  //   message = event.error.stack;
  // }
  toasted.error(message);
});

 // window.onerror = function(msg, url, line, col, error) {
//   // Note that col & error are new to the HTML 5 spec and may not be 
//   // supported in every browser.  It worked for me in Chrome.
//   var extra = !col ? '' : '\ncolumn: ' + col;
//   extra += !error ? '' : '\nerror: ' + error;
//   console.log("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);

//   var suppressErrorAlert = true;
//   // If you return true, then error alerts (like in older versions of 
//   // Internet Explorer) will be suppressed.
//   return suppressErrorAlert;
// };

// trigger
// window.setTimeout(function() {throw new Error('sdfsdfd')}, 0);


