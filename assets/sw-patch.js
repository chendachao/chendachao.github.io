
self.addEventListener('push', (event) => {
  const title = 'Welcome!';
  const options = {
    body: event.data.text()
  };
  const pushManagerPromise = self.registration.pushManager.getSubscription()
  .then(function(subscription) {
    if (Notification.permission === 'granted') {
      return self.registration.showNotification(title, options);
    }
  })
  .catch(function(error) {
    console.log('Error show notification', error);
  });

  event.waitUntil(pushManagerPromise);
});

self.addEventListener('message', function (event) {
  if (event.data && event.data.action === 'SKIP_WAITING') {
    console.log('Inside Service Worker', event.data.action);
    self.skipWaiting();
    // self.clients.claim();
		// self.clients.matchAll().then((clients) => {
		// 	clients.forEach((client) => client.postMessage('reload-window'));
		// });
  }
});
