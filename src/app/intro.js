import introJs from 'intro.js';

class Intro {
  
  constructor() {
    const hideIntro = JSON.parse(localStorage.getItem('hideIntro'));
    !hideIntro && this.showIntro();
  }
  
  hideIntro = () => {
    localStorage.setItem('hideIntro', true);
  };
  
  // intro
  showIntro() {
    const intro = introJs();
    intro.setOptions({
      showProgress: true,
      steps: [
        {
          intro: 'Hello! This is Larry Chen. Welcome to my Homepage. Click the \'Next\' button to know more about me.'
        },
        {
          element: document.querySelector('#step1'),
          intro: 'This sign brings me good luck, now I share it with you. ^.^'
        },
        {
          element: document.querySelector('#step2'),
          intro: 'This is who I am.'
        },
        {
          element: document.querySelector('#step3'),
          intro: 'You can reach out to me in the following ways:'
        },
        {
          element: document.querySelector('#step4'),
          intro: 'Click here to have a surprise'
        }
      ]
    }).start();
    
    intro.onskip(this.hideIntro);
    intro.oncomplete(this.hideIntro);
  };
  
}

export default Intro;
