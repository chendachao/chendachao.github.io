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

import('./qrcode').then(SetQRCode => SetQRCode.default());


