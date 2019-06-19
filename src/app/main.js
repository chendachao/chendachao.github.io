import introJs from 'intro.js';
import tippy from 'tippy.js';
import Bowser from 'bowser';

const browser = Bowser.getParser(window.navigator.userAgent);
const template = document.getElementById('wechat-popup');
const container = document.createElement('div');

// intro
const showIntro = () => {
  const intro = introJs();
  intro.setOptions({
    showProgress: true,
    steps: [
      { 
        intro: "Hello! This is Larry Chen. Welcome to my homepage. Click the 'Next' button to know more about me."
      },
      {
        element: document.querySelector('#step1'),
        intro: "This sign brings me good luck, now I share it with you. ^.^"
      },
      {
        element: document.querySelector('#step2'),
        intro: "This is who I am."
      },
      {
        element: document.querySelector('#step3'),
        intro: "You can reach out to me in the following ways:"
      }
    ]
  }).start();

  intro.onskip(setDisplayedIntro)
  intro.oncomplete(setDisplayedIntro)
}

const setDisplayedIntro = () => {
  localStorage.setItem('displayed_intro', true);
};

const displayedIntro = JSON.parse(localStorage.getItem('displayed_intro'));
if (!displayedIntro) {
  showIntro();
}

// tooltip
tippy('a[tooltip]', {
  arrow: true,
  theme: 'light-border',
});


// popup wechat qrCode
if (browser.getBrowserName() === 'Internet Explorer') {
  container.appendChild(template);
} else {
  container.appendChild(document.importNode(template.content, true));
}

// click scale qrcode
function handleScale(event) {
  console.log(browser.getBrowserName() === 'Internet Explorer');
  if (browser.getBrowserName() === 'Internet Explorer') {
    setTimeout(() => {
      this.classList.toggle('scale');
    }, 800);
  } else {
    this.classList.toggle('scale');
  }
};

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
    const content = instance.popperChildren.content
    const qrCode = content.querySelector('.wechat-qrcode');
    qrCode.addEventListener('click', handleScale);
  },
  onHide: (instance) => {
    const content = instance.popperChildren.content
    const qrCode = content.querySelector('.wechat-qrcode');
    qrCode.classList.remove('scale');
    qrCode.removeEventListener('click', handleScale);
  }
});