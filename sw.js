if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,a,s)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return i;case"module":return d;default:return e(c)}})).then(e=>{const c=s(...e);return i.default||(i.default=c),i})}))}}define("./sw.js",["./workbox-90c7dc54"],(function(e){"use strict";importScripts("assets/push.js"),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.e0cc379f1d04198fd2d3.css",revision:"a88ed12eedc263dbc13e9863aa70ba1e"},{url:"10.8adbed7b94841c4e99ac.bundle.js",revision:"83a0dd1081d6bf9be40af63ec58565dd"},{url:"11.124123725b43f2d64633.bundle.js",revision:"73bc15e80f86b11778b5a365b08fda19"},{url:"12.86f67e698cf7b8872078.bundle.js",revision:"38b1c836ecd60fd06867c757f13c898f"},{url:"4.b6c3d1e146c1a3d3d6e2.css",revision:"0f3d7cd857866dd90d6eabeb886ae9b0"},{url:"5.9e860a9d9ef1d961fa65.bundle.js",revision:"5607e825074f3777fbdb7b453e5c938d"},{url:"5.9e860a9d9ef1d961fa65.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"6.bd9d5a7a8598bfe38bd7.css",revision:"ebcd0ab127ae28c709db662f4d1e16ed"},{url:"6.e79763dddf36b4f5cc60.bundle.js",revision:"b615d11d1a462a0ba736296aa62c3447"},{url:"7.2adedf9386f7612542a1.bundle.js",revision:"60c011e9dae56c1f701726e2fb565b56"},{url:"7.7b2552abb0ec38f148ce.css",revision:"53050419720aa92ffae0403578275f59"},{url:"8.75b0d38ddeeffa66e644.bundle.js",revision:"5707bc83fda98b10589b89708898a460"},{url:"9.bfa09e23fa4d8b103e1a.bundle.js",revision:"40d87abf1d325e064053326c23801012"},{url:"assets/push.js",revision:"5c7a4098cf87fda7aa1a8cf553f8a4c7"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"67206c71c4f1d8bea2b800e4b0a1609d"},{url:"install.c9174af1d5c06a241e7a.bundle.js",revision:"f2ba605fbc188489fccae810306f3f8c"},{url:"manifest.json",revision:"a924cc5a4dad7d365444f49923f5e91a"},{url:"print.6c5bf0dcac9aba3fb4c3.bundle.js",revision:"9024c652fe2ca87ab2fca1e79b6a76fd"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"sw-offline-google-analytics.js",revision:"55db6f581ecba045d7ce3f833b800869"},{url:"vendors~app.96a6ea67c829e146eea5.bundle.js",revision:"e3ef57226df10d0adfaf645b8fc82f43"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
