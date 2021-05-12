// es6 generator support
import 'core-js/stable';
import 'regenerator-runtime/runtime';
if(process.env.APP_ENV !== 'development') {
  // import './error-tracing';
  import(/* webpackPrefetch: true */ './error-tracing');
}

import notify from '@app/utils/notify';
import i18n from '@app/utils/i18n';
// import(/* webpackPrefetch: true */'@app/pwa');
import(/* webpackPreload: true */'@app/main');
import 'normalize.css';
import 'styles/index.css';
import(/* webpackPreload: true */ 'styles/override.css');

import * as serviceWorker from '@app/pwa';

const format = i18n.format;

serviceWorker.register({
  onRegister: registration => {
    var subscribeBtn = document.querySelector('.subscribe-btn');
    if(['default', 'denied'].includes(Notification.permission)) {
      subscribeBtn.removeAttribute('hidden');
    }

    // subscribe push notifications
    subscribeBtn.addEventListener('click', async () => {
      try {
        const result = await Notification.requestPermission();
        if (result === 'granted') {
          subscribeBtn.setAttribute('hidden', '');
          // navigator.serviceWorker.getRegistration().then(function (reg) {
          //   // Show Local Notification
          //   reg.pushManager.subscribe({ userVisibleOnly: true });
          // });
          // Show Local Notification
          registration.pushManager.subscribe({ userVisibleOnly: true });
        } else {
          throw new Error(format('APP.NOTIFICATIONS_BLOCKED'));
        }
      } catch (error) {
        notify.error(error, 'Notifications Error');
        console.log('Notifications Error', error);
      }
    });
  },
  onUpdate: registration => {
    // registration.unregister().then(() => {
    //   window.location.reload();
    // })

    function showNotification(title, message) {
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
          const options = {
            body: message,
            // TODO: these image cna't work
            icon: '/assets/images/bases/bell.svg',
            badge: '/assets/images/bases/notification.svg',
          };
          // Show Local Notification
          reg.showNotification(title, options);
        });
      }
    }

    const updateReady = function () {
      showNotification(format('APP.NEW_VERSION_TITLE'), format('APP.NEW_VERSION_CONTENT'));
      notify.info(format('APP.NEW_VERSION_TITLE'), format('APP.UPDATE'), {
        onclick: () => {
          window.location.reload();
        }
      });
    };

    const waitingServiceWorker = registration.waiting;
    if(waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', event => {
        console.log('onUpdate statechange', event.target.state);
        if(event.target.state === 'activated') {
          updateReady();
        }
      });

      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  },
  onSuccess: registration => {
    console.log('registered app for offline use. details:', registration);
  }
});


