import './app/main.css';
import './app/main.js';

console.log('NODE_ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
