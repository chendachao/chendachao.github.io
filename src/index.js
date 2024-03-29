// es6 generator support
import 'regenerator-runtime/runtime';
import 'core-js/stable';
if (process.env.APP_ENV !== 'development') {
  // import './error-tracing';
  import(/* webpackPrefetch: true */ './error-tracing');
  // import(/* webpackPrefetch: true */ './app/utils/bot-detection');
}

// import notify from '@app/utils/notify';
import notify from '@app/utils/notify5';
import i18n from '@app/utils/i18n';
import { tryCatchPormise } from '@app/utils';
// import(/* webpackPrefetch: true */'@app/pwa');
import(/* webpackPreload: true */ '@app/main');
import('pwacompat');
import 'normalize.css';
import 'styles/app.css';
import 'styles/index.css';
import(/* webpackPreload: true */ 'styles/override.css');
import { initFlashlight, removeFlashlight, moveFlashlight } from './app/utils/flashlight';

import * as serviceWorker from '@app/pwa';

const format = i18n.format;

// Flashlight
initFlashlight();
function onPageload() {
  document.body.addEventListener('mousemove', moveFlashlight);
  document.addEventListener('keyup', (evt) => {
    evt = evt || window.event;
    if (evt.key === 'Escape') {
      removeFlashlight();
    }
  });
}
document.addEventListener('DOMContentLoaded', onPageload);

serviceWorker.register({
  onRegister: registration => {
    var subscribeBtn = document.querySelector('.subscribe-btn');
    if (['default', 'denied'].includes(Notification.permission)) {
      subscribeBtn.removeAttribute('hidden');
    }

    // subscribe push notifications
    subscribeBtn.addEventListener('click', async () => {
      // try {
      //   const result = await Notification.requestPermission();
      //   if (result === 'granted') {
      //     subscribeBtn.setAttribute('hidden', '');
      //     // navigator.serviceWorker.getRegistration().then(function (reg) {
      //     //   // Show Local Notification
      //     //   reg.pushManager.subscribe({ userVisibleOnly: true });
      //     // });
      //     // Show Local Notification
      //     registration.pushManager.subscribe({ userVisibleOnly: true });
      //   } else {
      //     throw new Error(format({id: 'APP.NOTIFICATIONS_BLOCKED'}));
      //   }
      // } catch (error) {
      //   notify.error(error, 'Notifications Error');
      //   console.log('Notifications Error', error);
      // }

      const [result, error] = await tryCatchPormise(
        async () => await Notification.requestPermission(),
      );
      if (error) {
        notify.error(error, 'Notifications Error');
        console.log('Notifications Error', error);
      } else if (result === 'granted') {
        subscribeBtn.setAttribute('hidden', '');
        // navigator.serviceWorker.getRegistration().then(function (reg) {
        //   // Show Local Notification
        //   reg.pushManager.subscribe({ userVisibleOnly: true });
        // });
        // Show Local Notification
        registration.pushManager.subscribe({ userVisibleOnly: true });
      } else {
        notify.error(format({id: 'APP.NOTIFICATIONS_BLOCKED'}), 'Notifications Error');
      }
    });
  },
  onUpdate: registration => {
    // registration.unregister().then(() => {
    //   window.location.reload();
    // })

    function showSystemNotification(title, message) {
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
          const options = {
            body: message,
            // TODO: these image cna't work
            icon: './assets/images/bases/bell.svg',
            badge: './assets/images/bases/notification.svg',
          };
          // Show Local Notification
          reg.showNotification(title, options);
        });
      }
    }

    const updateReady = function () {
      const notificationTitle = format({id: 'APP.NEW_VERSION_TITLE'});
      const notificationBody = format({id: 'APP.NEW_VERSION_BODY'});
      const notificationBody2 = format({id: 'APP.NEW_VERSION_BODY2'});
      // Show notification in OS level
      showSystemNotification(notificationTitle, notificationBody2);
      // Show notification in browser
      notify.info(notificationBody, notificationTitle, {
        duration: -1,
        onClick: () => {
          window.location.reload();
        },
        // timeOut: 0,
        // onclick: () => {
        //   window.location.reload();
        // },
      });
    };

    const waitingServiceWorker = registration.waiting;
    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', event => {
        console.log('onUpdate statechange', event.target.state);
        if (event.target.state === 'activated') {
          updateReady();
        }
      });

      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  },
  onSuccess: registration => {
    console.log('registered app for offline use. details:', registration);
  },
});
