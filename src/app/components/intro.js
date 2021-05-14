import introJs from 'intro.js';

import 'intro.js/introjs.css';
// import 'intro.js/themes/introjs-modern.css';
// import 'intro.js/themes/introjs-royal.css';

import 'intro.js/themes/introjs-nazanin.css';
// import 'intro.js/themes/introjs-nassim.css';
// import 'intro.js/themes/introjs-flattener.css';

import i18n from '../utils/i18n';

class Intro {
  isHintDisplayed = false;
  format = i18n.format;

  constructor() {
    // this.format = i18n.format;
  }

  init() {
    const hideIntro = JSON.parse(localStorage.getItem('hideIntro'));
    !hideIntro && this.initAndShowIntro();
    // this.initAndShowIntro();
  }

  hideIntro = () => {
    localStorage.setItem('hideIntro', true);
  };

  initAndShowIntro() {
    const intro = introJs();
    intro.setOptions({
      showProgress: true,
      steps: [
        {
          intro: this.format('APP.INTRO.INTRO'),
        },
        {
          element: '#step1',
          intro: this.format('APP.INTRO.STEP1'),
          tooltipPosition: 'bottom',
        },
        {
          element: '#step2',
          intro: this.format('APP.INTRO.STEP2'),
          tooltipPosition: 'top',
        },
        {
          element: '#step3',
          intro: this.format('APP.INTRO.STEP3'),
          tooltipPosition: 'auto',
        },
        {
          element: '#step4',
          intro: this.format('APP.INTRO.STEP4'),
          tooltipPosition: 'left',
        },
        {
          element: '#step5',
          intro: this.format('APP.INTRO.STEP5'),
          tooltipPosition: 'left',
        },
      ],
    });

    intro.start();

    intro.onskip(this.hideIntro);
    intro.oncomplete(this.hideIntro);
  }

  initHint() {
    const intro = introJs();
    intro.setOptions({
      showProgress: true,
      hints: [
        {
          element: '.step11',
          hint: this.format('APP.INTRO.STEP1'),
          hintPosition: 'left',
        },
        {
          element: '.step12',
          hint: this.format('APP.INTRO.STEP2'),
          hintPosition: 'top-left',
        },
        {
          element: '.step13',
          hint: this.format('APP.INTRO.STEP3'),
          hintPosition: 'top',
        },
        {
          element: '.step14',
          hint: this.format('APP.INTRO.STEP4'),
          hintPosition: 'left',
        },
        {
          element: '.step15',
          hint: this.format('APP.INTRO.STEP5'),
          hintPosition: 'left',
        },
      ],
    });

    intro.addHints();
  }

  toggleHint() {
    const intro = introJs();
    if (this.isHintDisplayed) {
      intro.hideHints();
      this.isHintDisplayed = false;
    } else {
      this.initHint();
      intro.showHints();
      this.isHintDisplayed = true;
    }
  }
}

export { Intro };
