
var CACHE_NAME = `chendachao_site_cache_v28`;
var cacheWhiteList = [CACHE_NAME];
var urlsToCache = [
  '/',
  '/control.js',
  '/favicon.ico',
  '/images/maria.png',
  '/styles/base.css',
  '/styles/main.css',
  '/script/main.js',
  '/styles/fonts/font-icon.css',
  '/styles/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
  '/styles/materialize.min.css',
  '/libs/materialize.min.js',
  // 'https://fonts.googleapis.com/icon?family=Material+Icons',
  // 'https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
  // 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css',
  // 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js'
];

self.addEventListener('install', function (event) {
  // Perform install steps
  console.log('install');
  // self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log('Opened cache and add all');
      return cache.addAll(urlsToCache);
    })
  )
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    console.log('Inside Service Worker', event.data.action);
    self.skipWaiting();
  }
});

self.addEventListener('activate', function(event) {
  console.log('activate now ready to handle fetches!');

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    }).then(() => {
      console.log('now ready to handle fetches!');
    })
  )
});

// self.addEventListener('fetch', function(event) {
//   console.log('The service worker is serving the asset.');

//   // cache first and then network
//   if (event.request.url.includes(location.origin)) {
//     event.respondWith(fromCache(event.request.clone()));

//     event.waitUntil(
//       update(event.request.clone())
//       .then(refresh)
//     );
//   }

// });

// cache first, if no cache then network
self.addEventListener('fetch', function (event) {
  console.log('fetch', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      var fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(
        function (response) {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(function (cache) {
              console.log('Opened cache and add', event.request.url);
              cache.put(event.request, responseToCache);
            });

          return response;
        }
      );
    })
  );

  return self.clients.claim();
});

self.addEventListener('sync', function(event) {
  if (event.tag === 'removeCache') {
    event.waitUntil(removeCache());
    self.registration.showNotification('cache removed.');
  }
});

self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  var title = 'Yay a message';
  var body = 'We have received a push message';
  var icon = '/images/icon-192x192.png';
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag, event.action);
  // Android doesn’t close the notification when you click on it
  // See: http://crbug.com/463146
  event.notification.close();

  // // This looks to see if the current is already open and
  // // focuses if it is
  // event.waitUntil(clients.matchAll({
  //   type: 'window'
  // }).then(function(clientList) {
  //   for (var i = 0; i < clientList.length; i++) {
  //     var client = clientList[i];
  //     if (client.url === '/' && ('focus' in client)) {
  //       return client.focus();
  //     }
  //   }
  //   if (clients.openWindow) {
  //     return clients.openWindow('/');
  //   }
  // }));
});

self.addEventListener('notificationclose', function(event) {
  console.log('on notificationclose');
});

function removeCache() {
  console.log('[sync] removeCache');

  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        if (!cacheWhiteList.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    )
  }).then(() => {
    console.log('now ready to handle fetches!');
  });
}


function fromCache(request) {
  return caches.open(CACHE_NAME).then(function (cache) {
      console.log('cache match', request.url);
      return cache.match(request);
    });
}

function update(request) {
  return caches.open(CACHE_NAME).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response.clone()).then(function () {
        return response;
      });
    });
  });
}

function refresh(response) {
  return self.clients.matchAll().then(function(clients) {
    clients.forEach(function(client) {

      var message = {
        type: 'refresh',
        url: response.url,
        eTag: response.headers.get('ETag')
      };

      client.postMessage(JSON.stringify(message));
    })
  });
}

