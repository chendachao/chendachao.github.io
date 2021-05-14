const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
)

export function register(config) {
  if (process.env.APP_ENV !== 'development' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL || '', window.location.href)
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return
    }

    window.addEventListener('load', () => {
      const PUBLIC_URL = process.env.PUBLIC_URL || ''
      const swUrl = `${PUBLIC_URL}/sw.js`

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config)

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA',
          )
        })
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config)
      }
    })
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      // execute onRegister callback
      config && config.onRegister && config.onRegister(registration)
      // check update
      // registration.update();
      registration.addEventListener('updatefound', () => {
        const installingWorker = registration.installing
        if (installingWorker == null) {
          return
        }

        installingWorker.addEventListener('statechange', () => {
          // Has network.state changed!
          console.log('statechange', installingWorker.state)
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // new update available
                console.log(
                  'New content is available and will be used when all ' +
                    'tabs for this page are closed. See https://bit.ly/CRA-PWA.',
                )
                // Execute callback
                if (config && config.onUpdate) {
                  config.onUpdate(registration)
                }
              } else {
                // no update available
                console.log('Content is cached for offline use.', installingWorker.state)

                // Execute callback
                if (config && config.onSuccess) {
                  config.onSuccess(registration)
                }
              }
              break
            case 'redundant':
              console.error('The installing service worker became redundant.')
              break
            // default:
            //   console.log('installingWorker.state', installingWorker.state);
            //   break;
          }
        })
      })
    })
    .catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })

  // // When the user asks to refresh the UI, we'll need to reload the window
  // navigator.serviceWorker.addEventListener('message', event => {
  //   console.log('reload-window', event.data);
  //   if (!event.data) {
  //     return;
  //   }
  //   switch (event.data) {
  //     case 'reload-window':
  //       // window.location.reload();
  //       break;
  //     default:
  //       // NOOP
  //       break;
  //   }
  // });

  // auto refresh to update when new version is available
  // var refreshing;
  // navigator.serviceWorker.addEventListener('controllerchange', () => {
  //   if (refreshing) {
  //     return;
  //   }
  //   refreshing = true;
  //   window.location.reload();
  // });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type')
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload()
          })
        })
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config)
      }
    })
    .catch(() => {
      console.log('No internet connection found. App is running in offline mode.')
    })
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister()
    })
  }
}
