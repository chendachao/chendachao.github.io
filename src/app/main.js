import { isIE } from './utils';

import Theme from './theme';

// Initial theme
Theme();

// Show intro
import('./intro').then(Intro => {
  const intro = new Intro.default();

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

