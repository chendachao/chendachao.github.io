
self.addEventListener('push', (event) => {
  const title = 'Welcome!';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
