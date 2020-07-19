import tippy, { followCursor, roundArrow } from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/dist/backdrop.css';

import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';

import { isIE, isMobile } from './utils';

function TooltipAndPopover() {
  const template = document.getElementById('wechat-popup');
  const container = document.createElement('div');
  const defaultConig = {
    allowHTML: true,
    arrow: roundArrow,
    theme: 'light-border',
    interactive: true,
    animation: 'scale',
    inertia: true,
  };

  // tooltip
  tippy('[tooltip]', defaultConig);

  tippy('[tooltip-follow]', {
    ...defaultConig,
    followCursor: isMobile(),
    plugins: [followCursor],
  });

  // show the popup of wechat qrCode
  // const clone = template.content.cloneNode(true);
  // container.appendChild(clone);
  if (isIE()) {
    container.appendChild(template);
  } else {
    container.appendChild(document.importNode(template.content, true));
  }

  // click to scale qrcode
  function toggleScale(event) {
    if (isIE()) {
      setTimeout(() => {
        this.classList.toggle('scale');
      }, 800);
    } else {
      this.classList.toggle('scale');
    }
  }

  // wechat qrcode popup
  tippy('#wechat', {
    ...defaultConig,
    content: container,
    // trigger: 'click',
    duration: [675, 1000],
    onShown: instance => {
      const content = instance.popper;
      const qrCode = content.querySelector('.tippy-box');
      qrCode.addEventListener('click', toggleScale, true);
    },
    onHide: instance => {
      const content = instance.popper;
      const qrCode = content.querySelector('.tippy-box');
      qrCode.classList.remove('scale');
      qrCode.removeEventListener('click', toggleScale, true);
    },
  });
}

export default TooltipAndPopover;
