if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,a,d)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}})).then(e=>{const c=d(...e);return s.default||(s.default=c),s})}))}}define("./sw.js",["./workbox-90c7dc54"],(function(e){"use strict";importScripts("assets/push.js"),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.391ed6f93170a8bf4607.css",revision:"7ee1d228dadbf9a1a9c99eff1c899d39"},{url:"10.3217e10fdd2e26b8cd2c.bundle.js",revision:"7cabed3caff4a8f80e3b7794a82e4cc2"},{url:"11.0cb1764c511b504c0e0b.bundle.js",revision:"62f733623534f56ad0f341fd419cf69d"},{url:"11.0e4338761429b4eb16ac.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"12.c772e90cc2981779d1bb.bundle.js",revision:"0874c00b58a6550744c55caa932117b3"},{url:"13.8f45b3742f4db3115f3c.bundle.js",revision:"13bffe49cce21ed02355ed8cc0897b61"},{url:"14.e1434d9237788d03520e.bundle.js",revision:"d29e04ca65b9251f5671976d36934abf"},{url:"15.dc545af17b937718e383.bundle.js",revision:"b042c15ded9f28f36d1d6e05a7b4ee67"},{url:"2.873083422510d7eae4ee.css",revision:"8556cbff42ec5d399a15583bdb7a2b8b"},{url:"6.0a7fc22f2afd2be2c201.bundle.js",revision:"37be2b425cdf1267b5436685caffd470"},{url:"6.0a7fc22f2afd2be2c201.bundle.js.LICENSE.txt",revision:"11ba6bbe7acfcc6f0660e132a4496982"},{url:"6.bf3ff6c25dec61dd8706.css",revision:"5416cf0afab048b992216407ada9c37e"},{url:"7.56da0261f9f5f6253388.bundle.js",revision:"69df4b46485c3d6c734271cc35c02134"},{url:"7.56da0261f9f5f6253388.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"8.0a8d3e60d202c5882486.css",revision:"7723615eb233a1bf2c78267a680616f2"},{url:"8.240fb28e8fc75f858030.bundle.js",revision:"abf10397d71a7a1a6a7bd4290096781a"},{url:"9.253bcf77421f574e97b7.bundle.js",revision:"93dcc4c0ad2eca2444a18e78eb3eb079"},{url:"9.bf292f432cefdfbde7ea.css",revision:"2ea7740a8e64faa41b2b762f271eab81"},{url:"app.c411e387bf07aa9e6aac.bundle.js",revision:"84517e4e2551f4969add4d705e2edfcb"},{url:"assets/data/en/chendachao.json",revision:"f1efe11dbebdeee1a7b5394fe83f9af0"},{url:"assets/data/zh/chendachao.json",revision:"259870fbef822e6fda57f67a10c9a709"},{url:"assets/i18n/en.json",revision:"4044ef0aa22e76df6261318a7d9e9dc7"},{url:"assets/i18n/zh.json",revision:"e85ff6a801ea577039b8ec2dce0c8626"},{url:"assets/push.js",revision:"4276d0165d3189e2752bd3e9683300b5"},{url:"cv.c709801155be98e40230.bundle.js",revision:"9216e0e50097aab30a00c3b9042cd91d"},{url:"cv.html",revision:"fb2fbfd30c5a21c79f5ba9d9c8d11714"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"9d898e8adb054ee8f8c15374359d567e"},{url:"install.9a894c39b81969779c21.bundle.js",revision:"105640ef3eb10a8818284682a7c4d59f"},{url:"manifest.json",revision:"a924cc5a4dad7d365444f49923f5e91a"},{url:"print.b94682b280fa0a4d7dda.bundle.js",revision:"3ef3af31c5a967116faeaa10f9ea254b"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.40c20893f2cd10dfd0cb.bundle.js",revision:"f291cc7741534b79effd81c378a50de3"},{url:"sw-offline-google-analytics.js",revision:"35c094d53f1849daf6be89828f463b72"},{url:"vendors~app~cv.33dbb986db5c7c350ce9.bundle.js",revision:"cb136dda25fbc39f7ff928da4806d779"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
