import tippy from 'tippy.js';

const template = document.getElementById('wechat-popup');
const container = document.createElement('div');

if (Detectizr.browser.name === 'ie') {
  container.appendChild(template);
} else {
  container.appendChild(document.importNode(template.content, true));
}

function handleScale(event) {
  this.classList.toggle('scale-3x');
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
    qrcode.classList.remove('scale-3x');
    qrcode.removeEventListener('click', handleScale);
  }
});