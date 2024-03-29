import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { listen, prefetch } from 'quicklink';
import { Accessibility } from 'accessibility';
// import * as Sentry from '@sentry/browser';
// import notify from './utils/notify';
// import notify3 from './utils/notify3';
// import notify4 from './utils/notify4';
import notify from './utils/notify5';
import { isPC, isIE, setEscapedHTML, initAnalytics } from './utils';
import { scrollToTop } from './utils/scroll';

import Theme from './components/theme';
// Initial theme
Theme();

window.lazySizesConfig = {
	addClasses: true
};

import i18n from './utils/i18n';
i18n.init().then(() => {
  document.title = i18n.format({id: 'APP.HTML_TITLE'});
  // const commentScript = document.querySelector('#commentScript');
  // commentScript.setAttribute('data-isso-lang', i18n.locale);
  const commentScript = document.createElement('script');
  // commentScript.dataset.isso = 'https://larrychen.tech/isso/';
  commentScript.setAttribute('data-isso', 'https://larrychen.tech/isso/');
  commentScript.setAttribute('data-isso-css', true);
  commentScript.setAttribute('data-isso-lang', i18n.locale);
  commentScript.setAttribute('data-isso-reply-to-self', true);
  commentScript.setAttribute('data-isso-require-author', true);
  commentScript.setAttribute('data-isso-require-email', false);
  commentScript.setAttribute('data-isso-max-comments-top', 10);
  commentScript.setAttribute('data-isso-max-comments-nested', 5);
  commentScript.setAttribute('data-isso-reveal-on-click', 5);
  commentScript.setAttribute('data-isso-avatar', true);
  commentScript.setAttribute('data-isso-avatar-bg', '#f0f0f0');
  commentScript.setAttribute('data-isso-avatar-fg', '#9abf88 #5698c4 #e279a3 #9163b6');
  commentScript.setAttribute('data-isso-vote', true);
  commentScript.setAttribute('data-isso-vote-level', '0,5,10,25,100');
  commentScript.setAttribute('data-isso-feed', true);
  commentScript.src = 'https://larrychen.tech/isso/js/embed.min.js';
  commentScript.defer = true;
  commentScript.setAttribute('crossorigin', 'anonymous');
  commentScript.onload = () => {
    document.querySelector('.comment-container').removeAttribute('hidden');
  };
  commentScript.onerror = () => {
    document.querySelector('.comment-container').setAttribute('hidden', '');
  };
  document.body.append(commentScript);
});

const worker = new Worker(new URL('./utils/webworker.js', import.meta.url), {
  name: 'webworker',
  // type: 'module',
  /* webpackEntryOptions: { filename: 'workers/[name].[contenthash].js' } */
});
worker.onmessage = e => {
  console.log('worker value', e.data.value);
};
worker.postMessage({action: 'INIT', payload: 123});

/* eslint-disable no-undef */
if (window.WeixinJSBridge) {
/* eslint-enable no-undef */
  import('@app/utils/wechat-jsbridge').then(() => {
    console.log('wechat-jsbridge loaded');
  });
}

// Loading skeleton for svg icons
const svgContainers = document.querySelectorAll('.icon.loading');
if (svgContainers.length) {
  const removeLoadingClass = () => {
    svgContainers.forEach(svg => {
      svg.classList.remove('loading');
    });
  };
  const svg = svgContainers[0].querySelector('svg');
  svg.addEventListener('load', removeLoadingClass);
  svg.addEventListener('error', removeLoadingClass);
}

// Initialize tooltip and popover
setTimeout(() => {
  import('./components/tooltip').then(({ TooltipAndPopover }) => TooltipAndPopover());
}, 10);

const qrcodeHandler = document.querySelector('.qrcode-handler');
// This is a top-level-await
const { showModal, displayQRCode } = await import('./components/dialog');
qrcodeHandler.removeAttribute('hidden');
qrcodeHandler.addEventListener('click', () => {
  showModal();
  displayQRCode();
});

// Load intro
const loadIntro = () => {
  return import('./components/intro').then(({ Intro }) => {
    return new Intro();
  });
};

const startReplayBtn = document.querySelector('.start-replay-tour');
const starthintBtn = document.querySelector('.start-hint');

startReplayBtn.addEventListener('click', () => {
  loadIntro().then(intro => intro.initAndShowIntro());
});

starthintBtn.addEventListener('click', () => {
  loadIntro().then(intro => intro.toggleHint());
});

// hide the install app button if in IE
if (isIE()) {
  const installButton = document.querySelector('#btnInstall');
  installButton.setAttribute('hidden', '');
}

// const test = document.querySelector('.test');
// test.addEventListener('click', () => {
//   // notify.warning(i18n.format({id: 'APP.NEW_VERSION_BODY'}), i18n.format({id: 'APP.NEW_VERSION_TITLE'}), {
//   //   timeOut: 0,
//   //   onclick: () => {
//   //     window.location.reload();
//   //   },
//   // });
//   // notify3('test', {type: 'error'});
//   // notify4.success('一条普通通知', '通知内容', {
//   //   duration: 0,
//   //   onclick: () => {
//   //     window.location.reload();
//   //   },
//   // });
//   notify.warning(i18n.format({id: 'APP.NEW_VERSION_BODY'}), i18n.format({id: 'APP.NEW_VERSION_TITLE'}), {
//     // duration: -1,
//     onClick: function(){
//       window.location.reload();
//     } // Callback after click
//   });
// });

window.addEventListener('load', function () { // page is fully loaded
  listen();
  setTimeout(() => {
    scrollToTop({smooth: true});
  });
  if (isPC()) {
    const flashlightEle = document.querySelector('#flashlightContainer');
    flashlightEle.removeAttribute('hidden');
  }
  var options = {
    icon: {
      position: { bottom: { size: 50, units: 'px' }, right: { size: 0, units: 'px' }, type: 'fixed' },
    },
  };

  new Accessibility(options);
}, false);
// document.addEventListener('DOMContentLoaded', function () { // DOM fully loaded and parsed
window.addEventListener('load', function () {
  // Click to open json file
  const developerModeLink = document.querySelector('.developer-mode-link');
  developerModeLink.setAttribute('href', `./assets/data/${i18n.locale}/chendachao.json`);

  const onlineDaysEle = document.querySelector('.online-days');
  const onlineDate = new Date('2014-09-12');
  const formattedOnlineDate = new Intl.DateTimeFormat(i18n.locale, { dateStyle: 'long'}).format(onlineDate);

  const delta = Date.now() - onlineDate.getTime();
  const days = Math.ceil(delta / (24 * 60 * 60 * 1000));
  setEscapedHTML(onlineDaysEle, i18n.format({
    id: 'APP.ONLINE_DAYS',
    defaultMessage: 'Since <b>{onlineDate}</b>, this website has been online for <b>{days, plural, =0 {one day.} =1 {one day.} other {# days.} }</b>'
  }, {onlineDate: formattedOnlineDate, days}));

  // Share application
  if (navigator.share) {
    const shareBtn = document.querySelector('.share-btn');
    shareBtn.removeAttribute('hidden');
    shareBtn.addEventListener('click', () => {
      let url = document.location.href;
      const canonicalElement = document.querySelector('link[rel=canonical]');
      if (canonicalElement !== null) {
        url = canonicalElement.href; // location.href
      }
      navigator
        .share({
          title: 'Larry Chen\' Homepage',
          text: 'Welcome to visit Larry\'s homepage',
          url,
          // files, // array of File objects representing files to be shared.
        })
        .then(() => {
          notify.success('Successful shared!');
        })
        .catch(error => console.log('Error sharing', error));
    });
  }

  (function () {
    const beforePrint = () => {
      const siteQrcode = document.querySelector('.print-site-qrcode');
      const myPortfolio = document.querySelector('.my-portfolio');
      const isMyPortfolioOpened = myPortfolio.hasAttribute('open');
      siteQrcode.style.position = 'absolute';
      siteQrcode.style.right = '15px';
      siteQrcode.style.top = '35px';
      siteQrcode.style.display = 'inherit';

      if (!isMyPortfolioOpened) {
        myPortfolio.setAttribute('open', '');
      }
    };

    const afterPrint = () => {
      const siteQrcode = document.querySelector('.print-site-qrcode');
      const myPortfolio = document.querySelector('.my-portfolio');
      const isMyPortfolioOpened = myPortfolio.hasAttribute('open');
      siteQrcode.style.display = 'none';
      if (!isMyPortfolioOpened) {
        myPortfolio.removeAttribute('open');
      }
    };

    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addEventListener('change', mql => {
        if (mql.matches) {
          beforePrint();
        } else {
          afterPrint();
        }
      });
    }

    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);
  })();

  let errorToasted;
  const updateOnlineStatus = function (event) {
    var message = navigator.onLine ? '' : i18n.format({id: 'APP.OFFLINE'});
    if (message) {
      errorToasted = notify.error(message.toUpperCase(), '', {
        duration: -1,
        // timeOut: 0,
        // positionClass: 'toast-top-full-width',
      });
    } else {
      if (errorToasted) {
        errorToasted.remove();
        notify.success(i18n.format({id: 'APP.ONLINE'}), '', {
          // timeOut: 800,
          duration: 800,
        });
      }
    }
  };

  updateOnlineStatus();

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  if (process.env.APP_ENV === 'production') {
    initAnalytics();
  }
});

const globalErrorHandler = event => {
  var message = (event.error && event.error.message || event.message || event.reason.message).toString();
  // if(event.error) {
  //   message = event.error.stack;
  // }
  notify.error(message, i18n.format({id: 'APP.GLOBAL_ERROR'}));
  // Sentry.captureException(event.error);
  import('@sentry/browser').then(({ captureException }) => {
    captureException(event.error);
  });
};

window.addEventListener('error', globalErrorHandler);
window.onerror = globalErrorHandler;
window.addEventListener('unhandledrejection', globalErrorHandler); // Capture promise error

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
// window.setInterval(function() {throw new Error('Test global error catch')}, 10000);

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

// window.addEventListener('unload', () => {
//   const endpoint = '/log';
//   // Collect RUM data like before
//   let rumData = new FormData();
//   // rumData.append('entries', JSON.stringify(performance.getEntries()));
//   const blob = new Blob([JSON.stringify(performance.getEntries())], { type: 'application/json; charset=UTF-8' });
//   rumData.append('entries', blob, );
//   // Check for sendBeacon support
//   if ('sendBeacon' in navigator) {
//     // Beacon requested
//     if (navigator.sendBeacon(endpoint, rumData)) {
//       console.log('sendBeacon worked! We are good');
//     } else {
//       console.log('sendBeacon failed! Use XHR or fetch instead');
//     }
//   } else {
//     console.log('sendBeacon not available! Use XHR or fetch instead');
//     fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       // body: JSON.stringify({some: "data"}),
//       body: JSON.stringify(performance.getEntries()),
//       keepalive: true
//     });
//   }
// }, false);


