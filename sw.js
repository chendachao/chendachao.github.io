if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,s,d)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const a={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return i;case"module":return a;default:return e(c)}})).then(e=>{const c=d(...e);return i.default||(i.default=c),i})}))}}define("./sw.js",["./workbox-90c7dc54"],(function(e){"use strict";importScripts("assets/push.js"),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.e536ee46d70b2e6764a6.css",revision:"75e38f5d61abd1446b4d5c68ef406329"},{url:"10.9276950a1ddd1c973a0f.bundle.js",revision:"bf52d494bb01af483206dce138f6bedb"},{url:"11.9dc6d888b7f467f64d67.bundle.js",revision:"180c0178f61729d691d6636464290eed"},{url:"12.ae96b49c7e113a4e6f6b.bundle.js",revision:"4d99beb32171963656d07057e9073aef"},{url:"4.0b988d2aa67525a513c3.css",revision:"892c702506ad0999b4eb80e41bef752f"},{url:"5.bdf9144cb7f05ca9be2b.bundle.js",revision:"6385651459625da30c73e026e4572374"},{url:"5.bdf9144cb7f05ca9be2b.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"6.1dad99f81afcef09115e.bundle.js",revision:"4bcb037efcb8ef6cbe424536fab341af"},{url:"7.80e339a8840131d0c79b.bundle.js",revision:"84c0ddc99f1eb37087583554f34728bd"},{url:"7.80e339a8840131d0c79b.bundle.js.LICENSE.txt",revision:"c53c1bc379e96a757bf9754d2741d5b1"},{url:"8.a986619143dea75a0eea.bundle.js",revision:"c5d0c210cf02ac19e721f7c7282de075"},{url:"9.7a4f85d7a4666ef080d5.bundle.js",revision:"8ec3c3322a20abd48d034d132d9033b3"},{url:"assets/push.js",revision:"5c7a4098cf87fda7aa1a8cf553f8a4c7"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"fcdbae2d6eef47bb64d2a20fb5d22e2c"},{url:"install.2d3b61a5d7c103177f8e.bundle.js",revision:"f2ba605fbc188489fccae810306f3f8c"},{url:"manifest.json",revision:"a924cc5a4dad7d365444f49923f5e91a"},{url:"print.b42e1093f845dad802c0.bundle.js",revision:"9024c652fe2ca87ab2fca1e79b6a76fd"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"sw-offline-google-analytics.js",revision:"55db6f581ecba045d7ce3f833b800869"},{url:"vendors~app.5467317b35232b7605b6.bundle.js",revision:"e3ef57226df10d0adfaf645b8fc82f43"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
