import tippy from 'tippy.js';
import Bowser from 'bowser';

const browser = Bowser.getParser(window.navigator.userAgent);
const template = document.getElementById('wechat-popup');
const container = document.createElement('div');

if (browser.getBrowserName() === 'Internet Explorer') {
  container.appendChild(template);
} else {
  container.appendChild(document.importNode(template.content, true));
}

function handleScale(event) {
  this.classList.toggle('scale');
};

tippy('#wechat', {
  content: container.innerHTML,
  theme: 'light-border',
  animateFill: true,
  interactive: true,
  arrow: true,
  arrowType: 'round', // or 'sharp' (default)
  animation: 'scale',
  duration: [275, 1000],
  onShown: (instance) => {
    const content = instance.popperChildren.content
    const qrcode = content.querySelector('.wechat-qrcode');
    qrcode.addEventListener('click', handleScale);
  },
  onHide: (instance) => {
    const content = instance.popperChildren.content
    const qrcode = content.querySelector('.wechat-qrcode');
    qrcode.classList.remove('scale');
    qrcode.removeEventListener('click', handleScale);
  }
});