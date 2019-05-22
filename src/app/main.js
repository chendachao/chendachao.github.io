
import tippy from 'tippy.js';

const template = document.getElementById('wechat-popup');
const container = document.createElement('div');
container.appendChild(document.importNode(template.content, true));

tippy('#wechat', {
  content: container.innerHTML,
  theme: 'light-border',
  animateFill: false,
  interactive: true,
  arrow: true,
  arrowType: 'round', // or 'sharp' (default)
  animation: 'scale',
});


