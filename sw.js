if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let d=Promise.resolve();return c[e]||(d=new Promise(async d=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=d}else importScripts(e),d()})),d.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},d=(d,c)=>{Promise.all(d.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(d)};self.define=(d,a,s)=>{c[d]||(c[d]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+d.slice(1)};return Promise.all(a.map(d=>{switch(d){case"exports":return c;case"module":return i;default:return e(d)}})).then(e=>{const d=s(...e);return c.default||(c.default=d),c})}))}}define("./sw.js",["./workbox-20cbcbbf"],(function(e){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./images/bg.ea2ccd94172d6c7e54bb0ac80f073a8e.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"./images/site.5506f7ed8473c2bc037655e6d04a11c7.png",revision:"2fbe1afb47b580c6122f4f8931fa965d"},{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.391ed6f93170a8bf4607.css",revision:"7ee1d228dadbf9a1a9c99eff1c899d39"},{url:"10.b55c4ca971d1e15ef067.bundle.js",revision:"3e053c080fffe5c6b503d1d847136981"},{url:"10.bf292f432cefdfbde7ea.css",revision:"2ea7740a8e64faa41b2b762f271eab81"},{url:"11.4fb0229a42976fedc290.bundle.js",revision:"f2d5cae53b8e65b922f0b56c82007dd6"},{url:"12.39a7413d94a26990a4bb.bundle.js",revision:"84b8d8784be50ea084a6ca4e92829214"},{url:"12.a52f987f6cd1019f87d7.css",revision:"ccbcc0e22eb7faacac20152b9c06a60a"},{url:"13.43dfb9d2c4602777f20b.bundle.js",revision:"0933ff6e18ba0bdf43483e0e5e43697d"},{url:"13.d5864ac7ed260191a16d.css",revision:"a40131300bb38c8ec9a68abf6c758bd6"},{url:"14.179f7b11925dc6dd4fb6.bundle.js",revision:"7259b33830b86f501920c81d9fb23226"},{url:"14.bcc7c7879255550b5153.css",revision:"ce5858be43a9d0e5a76f073208f03878"},{url:"15.25250c0c4566506a1a2d.bundle.js",revision:"5a3a4ff32fa66ca90270b4c9d0ca6073"},{url:"16.2661a5d53cf43924e8d2.bundle.js",revision:"9b56235673472c4fae3232327ddbdd37"},{url:"2.b673041f18a5ea285320.css",revision:"d659cc5741c694ab90b3e37f98ee45a7"},{url:"6.bf3ff6c25dec61dd8706.css",revision:"5416cf0afab048b992216407ada9c37e"},{url:"7.744c187dd0d533dad6f5.bundle.js",revision:"87bf4c3ab2fe0d75a27d99be35c58cd9"},{url:"7.744c187dd0d533dad6f5.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"7.b6c3d1e146c1a3d3d6e2.css",revision:"0f3d7cd857866dd90d6eabeb886ae9b0"},{url:"8.94d364ba2cffd7296a79.bundle.js",revision:"7e658acef16d20cbafa9e835661d81b7"},{url:"9.4af8b432196f227bdeb4.css",revision:"ccfe873fe88bdbdda1dd8d890c33f557"},{url:"9.534b9f5a501a3c0263f5.bundle.js",revision:"f62fa45346553e2a99e64241f80b1311"},{url:"app.a123e7d7bfd0614a6e6f.bundle.js",revision:"ce407536b9a39f3d1d76ea532d395985"},{url:"assets/data/en/chendachao.json",revision:"ae8b2be14ca3221dfcbba1f4ffaf2873"},{url:"assets/data/zh/chendachao.json",revision:"2e04c8fd7445c0054e4eddbffca3493e"},{url:"assets/i18n/en.json",revision:"d8da9f2f2df117a842cfa6bc873ff794"},{url:"assets/i18n/zh.json",revision:"22fe833378eb5ff0273a6bbdffb2b4d8"},{url:"assets/sw-patch.js",revision:"6b544608cb2b59d3ad12e32b448d2e1f"},{url:"cv.a733cb1098d2f8ac898c.bundle.js",revision:"88d49fd66420443b46bc6c0a450b5036"},{url:"cv.html",revision:"f81772d60b40192da53d1d29ecf39515"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"2c22c081babe971af522cd8b3c238de4"},{url:"install.f7147728b5687f162f43.bundle.js",revision:"105640ef3eb10a8818284682a7c4d59f"},{url:"manifest.json",revision:"a924cc5a4dad7d365444f49923f5e91a"},{url:"print.a44601da7cefc3424671.bundle.js",revision:"7df8a3e87075a8ff5ac637879dbe9bac"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.6e52dbef7dd93760882d.bundle.js",revision:"01a84e2df57186ca1001644321dfa35c"},{url:"sw-offline-google-analytics.js",revision:"35c094d53f1849daf6be89828f463b72"},{url:"vendors~app.3cdd9c68154b8d0eb806.bundle.js",revision:"5561686a63d58bdc8e12479d84c5f2e2"},{url:"vendors~app.3cdd9c68154b8d0eb806.bundle.js.LICENSE.txt",revision:"11ba6bbe7acfcc6f0660e132a4496982"},{url:"vendors~app~cv.35d466276b16fec2f1e2.bundle.js",revision:"bbbf5008871dea4c1d2b0b45378b6c31"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
