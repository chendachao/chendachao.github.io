// import '@babel/polyfill';
import './app/main.css';
import(/* webpackPrefetch: true */'./install');
import(/* webpackPreload: true */'./print');
import(/* webpackPreload: true */'./app/main.js');
// import './app/main.js';

if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
