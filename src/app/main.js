import Theme from './theme';
import SetQRCode from './qrcode';
// Initial theme
Theme();

// Show intro
import('./intro').then(Intro => new Intro.default());

// Initialize tooltip and popover
import('./tooltip-popover').then(TooltipAndPopover => TooltipAndPopover.default());


import('./qrcode').then(SetQRCode => SetQRCode.default());



