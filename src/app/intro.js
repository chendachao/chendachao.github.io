import introJs from 'intro.js';

import 'intro.js/introjs.css';
// import 'intro.js/themes/introjs-modern.css';
// import 'intro.js/themes/introjs-royal.css';

import 'intro.js/themes/introjs-nazanin.css';
// import 'intro.js/themes/introjs-nassim.css';
// import 'intro.js/themes/introjs-flattener.css';

class Intro {

  isHintDisplayed = false;

  constructor() {
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
          intro: 'Hello! This is Larry Chen. Welcome to my Homepage. Click the \'Next\' button to know more about me.'
        },
        {
          element: '#step1',
          intro: 'This sign brings me good luck, now I share it with you. ^.^',
          tooltipPosition: 'bottom'
        },
        {
          element: '#step2',
          intro: 'This is who I am.',
          tooltipPosition: 'top'
        },
        {
          element: '#step3',
          intro: 'You can reach out to me in the following ways:',
          tooltipPosition: 'auto'
        },
        {
          element: '#step4',
          intro: 'Click here to have a surprise',
          position: 'left'
        }
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
          hint: 'This sign brings me good luck, now I share it with you. ^.^',
          position: 'left'
        },
        {
          element: '.step12',
          hint: 'This is who I am.',
          position: 'top-left'
        },
        {
          element: '.step13',
          hint: 'You can reach out to me in the following ways:',
          position: 'top'
        },
        {
          element: '.step14',
          hint: 'Click here to have a surprise',
          position: 'left'
        }
      ]
    });

    intro.addHints();
  }

  toggleHint() {
    const intro = introJs();
    if(this.isHintDisplayed) {
      intro.hideHints();
      this.isHintDisplayed = false;
    } else {
      this.initHint();
      intro.showHints();
      this.isHintDisplayed = true;
    }
  }

}

export default Intro;
