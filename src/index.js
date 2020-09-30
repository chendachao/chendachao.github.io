// import '@babel/polyfill';
import toasted from './app/utils/toasted';
// import(/* webpackPrefetch: true */'./app/pwa');
import(/* webpackPreload: true */'./app/main');
import 'normalize.css';
import './styles/main.css';
import(/* webpackPreload: true */'./styles/override.css');

import * as serviceWorker from './app/pwa';

serviceWorker.register({
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
            icon: '/images/bell.svg',
            badge: '/images/notification.svg',
          };
          // Show Local Notification
          reg.showNotification(title, options);
        });
      }
    }

    const updateReady = function () {
       showNotification('New version available.', 'Please refresh the window');
        toasted.success('New version available.', {
          action: {
            text: 'Update',
            onClick: (e, toasted) => {
              window.location.reload();
            },
          },
        });
    }

    const waitingServiceWorker = registration.waiting;
    if(waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', event => {
        console.log('onUpdate statechange', event.target.state);
        if(event.target.state === 'activated') {
          updateReady();
        }
      });

      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    }
  },
  onSuccess: registration => {
    console.log("registered app for offline use. details:", registration)
  }
});
 

