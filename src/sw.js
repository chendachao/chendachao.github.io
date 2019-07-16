
// First, import the library into the service worker global scope:
importScripts('sw-offline-google-analytics.js');

// Then, call goog.offlineGoogleAnalytics.initialize():
// See https://github.com/GoogleChrome/workbox/tree/master/packages/workbox-google-analytics
goog.offlineGoogleAnalytics.initialize();

if (workbox) {
    workbox.core.skipWaiting();
    workbox.core.clientsClaim();
    
    // make sure we grab from cache if no network
    workbox.routing.registerRoute(
      function({ url, event }) {
        return !url.pathname.match(/^\/api\//)
      },
      new workbox.strategies.StaleWhileRevalidate()
    );
    workbox.routing.registerRoute(
        new RegExp('.(?:js|css|ico)$'),
        new workbox.strategies.NetworkFirst({
            cacheName: 'static'
        }),
    );
    workbox.routing.registerRoute(
        new RegExp('.(?:jpg|png|gif|svg)$'),
        new workbox.strategies.CacheFirst({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 200,
                    purgeOnQuotaError: true,
                })
            ]
        })
    );
    
    /**
     * The workboxSW.precacheAndRoute() method efficiently caches and responds to
     * requests for URLs in the manifest.
     * See https://goo.gl/S9QRab
     */
    self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}



