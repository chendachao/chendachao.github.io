import './app/main.css';

import {hideWechatCode, displayWechatCode} from './app/main.js'

const ref = document.querySelector('#wechat-handler');
const popup = document.querySelector('#wechat-popup');

ref.onmouseenter = displayWechatCode(ref, popup);
ref.onmouseout = hideWechatCode(popup);
hideWechatCode(popup)();


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
