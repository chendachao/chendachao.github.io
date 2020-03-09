import tippy from 'tippy.js';
import { isIE, isMobile } from './utils';

function TooltipAndPopover() {
  
  const template = document.getElementById('wechat-popup');
  const container = document.createElement('div');

// tooltip
  tippy('[tooltip]', {
    arrow: true,
    theme: 'light-border',
    interactive: true,
    animation: 'shift-away',
    inertia: true,
    size: 'large',
  });
  
  tippy('[tooltip-follow]', {
    arrow: true,
    theme: 'light-border',
    followCursor: isMobile(),
    interactive: true,
    animation: 'shift-away',
    inertia: true,
    size: 'large',
  });

// show the popup of wechat qrCode
  if (isIE()) {
    container.appendChild(template);
  } else {
    container.appendChild(document.importNode(template.content, true));
  }

// hide the install app button if in IE
  if (isIE()) {
    const installButton = document.getElementById('butInstall');
    installButton.setAttribute('hidden', '');
  }

// click scale qrcode
  function handleScale(event) {
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
    content: container.innerHTML,
    theme: 'light-border',
    // trigger: 'click',
    animateFill: false,
    interactive: true,
    arrow: true,
    arrowType: 'round', // or 'sharp' (default)
    animation: 'scale',
    duration: [675, 1000],
    onShown: (instance) => {
      const content = instance.popperChildren.content;
      const qrCode = content.querySelector('.wechat-qrcode');
      qrCode.addEventListener('click', handleScale);
    },
    onHide: (instance) => {
      const content = instance.popperChildren.content;
      const qrCode = content.querySelector('.wechat-qrcode');
      qrCode.classList.remove('scale');
      qrCode.removeEventListener('click', handleScale);
    }
  });
}

export default TooltipAndPopover;

