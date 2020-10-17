import toasted from './utils/toasted';
import { isIE, isPC } from './utils';
import { scrollToTop } from './utils/scroll';

import Theme from './components/theme';
// Initial theme
Theme();

import i18n from './utils/i18n';
i18n.init();

// Initialize tooltip and popover
import('./components/tooltip').then(TooltipAndPopover => TooltipAndPopover.default());

import('./components/dialog').then(SetQRCode => SetQRCode.default());

// Show intro
import('./components/intro').then(Intro => {
  const intro = new Intro.default();

  if(isPC()) {
    // Load two fast in PC, need delay the intro popup
    setTimeout(() => {
      intro.init();
    }, 5000);
  } else {
    intro.init();
  }

  const startReplayBtn = document.querySelector('.start-replay-tour');
  const starthintBtn = document.querySelector('.start-hint');

  startReplayBtn.addEventListener('click', () => {
    intro.initAndShowIntro();
  });

  starthintBtn.addEventListener('click', () => {
    intro.toggleHint();
  });
 
});

// hide the install app button if in IE
if (isIE()) {
  const installButton = document.getElementById('btnInstall');
  installButton.setAttribute('hidden', '');
}

window.addEventListener('load', function() {

  scrollToTop();

  // Click to open json file
  const developerModeLink = document.querySelector('.developer-mode-link');
  developerModeLink.setAttribute('href', `/assets/data/${i18n.locale}/chendachao.json`);

  let errorToasted;
  const updateOnlineStatus = function (event) {
    var message = navigator.onLine ? "" : "You are offline!";
    if(message) {
      errorToasted = toasted.error(message.toUpperCase(), { 
        action: {
          text: 'Close',
          onClick: (e, toasted) => {
            toasted.delete();
          },
        },
      });
    } else {
      errorToasted && errorToasted.delete();
    }
  }

  updateOnlineStatus();
  
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

window.addEventListener('error', function(event) {
  var message = (event.error || event.message).toString();
  // if(event.error) {
  //   message = event.error.stack;
  // }
  toasted.error(message);
});

 // window.onerror = function(msg, url, line, col, error) {
//   // Note that col & error are new to the HTML 5 spec and may not be 
//   // supported in every browser.  It worked for me in Chrome.
//   var extra = !col ? '' : '\ncolumn: ' + col;
//   extra += !error ? '' : '\nerror: ' + error;
//   console.log("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);

//   var suppressErrorAlert = true;
//   // If you return true, then error alerts (like in older versions of 
//   // Internet Explorer) will be suppressed.
//   return suppressErrorAlert;
// };

// trigger
// window.setTimeout(function() {throw new Error('sdfsdfd')}, 0);


// var width=300;
// var height=200;
// var from_top=350;
// var from_left=500;
// var toolbar='no';
// var location='no';
// var directories='no';
// var status='no';
// var menubar='no';
// var scrollbars='yes';
// var resizable='yes';
// var atts='width='+width+'show,height='+height+',top='+from_top+',screenY=';
// atts+= from_top+',left='+from_left+',screenX='+from_left+',toolbar='+toolbar;
// atts+=',location='+location+',directories='+directories+',status='+status;
// atts+=',menubar='+menubar+',scrollbars='+scrollbars+',resizable='+resizable;
// var url = "/ems/ezrf_get_details.html?op_type="+key+"&title="+title +"#";
// window.open(url,‘win_name’,s atts);
