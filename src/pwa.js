
if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(async registration => {
      console.log('SW registered: ', registration);
      // await Notification.requestPermission();
      // registration.pushManager.subscribe({userVisibleOnly: true});
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
