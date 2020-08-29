import toasted from './utils/toasted';

if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {

    var subscribeBtn = document.querySelector('.subscribe-btn');
    const isSubscribed = JSON.parse(localStorage.getItem('subscribed'));
    if(isSubscribed) {
      subscribeBtn.setAttribute('hidden', '');
    }
    // subscribe push notifications
    subscribeBtn.addEventListener('click', async () => {
      try {
        const result = await Notification.requestPermission();
        if(result === 'granted') {
          localStorage.setItem('subscribed', true);
          subscribeBtn.setAttribute('hidden', '');
          navigator.serviceWorker.getRegistration().then(function(reg) {
            // Show Local Notification
            reg.pushManager.subscribe({userVisibleOnly: true});
          });
        } else {
          throw new Error('Denied notification permission');
        }
      } catch (error) {
        console.log('error', error);
      }
    });

    function showNotification(title, message) {
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
          const options = {
            body: message,
            // TODO: these image cna't work
            icon: '../assets/images/bell.svg',
            badge: '../assets/images/notification.svg',
          };
          // Show Local Notification
          reg.showNotification(title, options);
        });
      }
    }

    navigator.serviceWorker.register('/sw.js')
    .then(async registration => {
      console.log('SW registered: ', registration);
      registration.update();

      registration.addEventListener('updatefound', function () {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }

        installingWorker.addEventListener('statechange', () => {
          // Has network.state changed!
          console.log('statechange', installingWorker.state);
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // new update available
                showNotification('New version available.', 'Please refresh the window');
                toasted.success('New version available.', {
                  action: {
                    text: 'Update',
                    onClick: (e, toasted) => {
                      installingWorker.postMessage({ action: 'skipWaiting'});
                    },
                  },
                });
              } else {
                // no update available
                console.log('Content is cached for offline use.', installingWorker.state);
              }
              break;
              case 'redundant':
                 console.error(
                   'The installing service worker became redundant.'
                 );
              break;
          }
         });
      })
    })
    .catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });

    // When the user asks to refresh the UI, we'll need to reload the window
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (!event.data) {
        return;
      }
      switch (event.data) {
        case 'reload-window':
          window.location.reload();
          break;
        default:
          // NOOP
          break;
      }
    });

    // auto refresh to update when new version is available
    // var refreshing;
    // navigator.serviceWorker.addEventListener('controllerchange', () => {
    //   if (refreshing) {
    //     return;
    //   }
    //   refreshing = true;
    //   window.location.reload();
    // });

  });
}
