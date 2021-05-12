import * as googleAnalytics from 'workbox-google-analytics';
import { skipWaiting, clientsClaim } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute } from 'workbox-precaching';

/* eslint-disable no-undef */
importScripts('/assets/sw-patch.js');
/* eslint-enable no-undef */

googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline',
  },
});

// skipWaiting();
clientsClaim();

// make sure we grab from cache if no network
registerRoute(
  function ({url, event}) {
    return !url.pathname.match(/^\/api\//);
  },
  new StaleWhileRevalidate()
);

registerRoute(
  /\.(?:js|css)$/,
  // Use cache but update in the background.
  new StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'js-css-cache',
  })
);
// registerRoute(
//   /\.(?:js|css)$/,
//   new NetworkFirst({
//     cacheName: 'static',
//     plugins: [
//       new ExpirationPlugin({
//         maxAgeSeconds: 7 * 24 * 60 * 60,
//       })
//     ]
//   }),
// );

registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|ico)$/,
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 200,
        purgeOnQuotaError: true,
        maxAgeSeconds: 365 * 24 * 60 * 60,
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
precacheAndRoute(self.__precacheManifest, {});
precacheAndRoute(self.__WB_MANIFEST);



