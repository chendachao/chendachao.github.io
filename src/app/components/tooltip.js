import tippy, { createSingleton, roundArrow } from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/dist/backdrop.css';

import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';

import 'tippy.js/animations/perspective.css';
import 'tippy.js/animations/perspective-subtle.css';
import 'tippy.js/animations/perspective-extreme.css';

// import 'tippy.js/animations/shift-away.css';
// import 'tippy.js/animations/shift-away-subtle.css';
// import 'tippy.js/animations/shift-away-extreme.css';

// import 'tippy.js/animations/shift-toward.css';
// import 'tippy.js/animations/shift-toward-subtle.css';
// import 'tippy.js/animations/shift-toward-extreme.css';

import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

import { isIE, isPC, setEscapedHTML, createElementFromHTMLStr } from '../utils';

import i18n from '../utils/i18n';

import wechatTemplateString from './tooltip-wechat.template.html?raw';

function TooltipAndPopover() {

  const container = document.createElement('div');
  const commonConig = {
    allowHTML: true,
    arrow: roundArrow,
    // trigger: 'click',
    // placement: 'left',
    // theme: 'light-border',
    theme: 'gradient',
    interactive: true,
    animation: isPC() ? 'scale' : 'perspective',
    inertia: true,
    moveTransition: 'transform 0.2s ease-out',
    appendTo: document.body,
  };

  // Common tooltip
  if (isPC()) {
    const tippyInstances = tippy('[data-tooltip]');
    const singleton = createSingleton(tippyInstances, commonConig);
  } else {
    tippy('[data-tooltip]', commonConig);
  }

  // show the popup of wechat qrCode
  const template = createElementFromHTMLStr(wechatTemplateString);
  // const template = document.querySelector('#wechat-popup');
  // container.appendChild(template);
  container.append(template);
  // if (isIE()) {
  //   container.appendChild(template);
  // } else {
  //   container.appendChild(document.importNode(template, true));
  //   // container.appendChild(document.importNode(template.content, true));
  //   // const clone = template.content.cloneNode(true);
  //   // container.appendChild(clone);
  // }

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
    ...commonConig,
    theme: 'light-border',
    content: container,
    // trigger: 'click',
    duration: [675, 1000],
    onShown: instance => {
      const content = instance.popper;
      // const qrCode = content.querySelector('.tippy-box');
      // qrCode.addEventListener('click', toggleScale, true);
      i18n.renderElement(content);

      const viewer = new Viewer(document.getElementById('wechat-qrcode'), {
        // inline: true,
        zIndex: 10000,
        viewed() {
          viewer.zoomTo(1);
        },
      });
    },
    onHide: instance => {
      // const content = instance.popper;
      // const qrCode = content.querySelector('.tippy-box');
      // qrCode.classList.remove('scale');
      // qrCode.removeEventListener('click', toggleScale, true);
    },
  });
}

export { TooltipAndPopover };
