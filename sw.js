if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,d,s)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return a;case"module":return i;default:return e(c)}})).then(e=>{const c=s(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-20cbcbbf"],(function(e){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./images/bg.ea2ccd94172d6c7e54bb0ac80f073a8e.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"./images/site.5506f7ed8473c2bc037655e6d04a11c7.png",revision:"2fbe1afb47b580c6122f4f8931fa965d"},{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.391ed6f93170a8bf4607.css",revision:"7ee1d228dadbf9a1a9c99eff1c899d39"},{url:"10.8fad57d91ab2fe6db00c.bundle.js",revision:"794e67377a029b4aa31e1949e08771e8"},{url:"10.bf292f432cefdfbde7ea.css",revision:"2ea7740a8e64faa41b2b762f271eab81"},{url:"11.f3f544d2849b3a6749b3.bundle.js",revision:"bb1fd8d773d31652d762b65787c0149e"},{url:"12.98e42eda01c36b429127.bundle.js",revision:"4937a95050e4fc96d80c09d806a61b70"},{url:"12.a52f987f6cd1019f87d7.css",revision:"ccbcc0e22eb7faacac20152b9c06a60a"},{url:"13.18eabce9b9ae23653945.bundle.js",revision:"0933ff6e18ba0bdf43483e0e5e43697d"},{url:"13.d5864ac7ed260191a16d.css",revision:"a40131300bb38c8ec9a68abf6c758bd6"},{url:"14.97c2eb54c5369226d927.css",revision:"18b481bea942bfb752a964af5931dc39"},{url:"14.ec22b3f822a03c885067.bundle.js",revision:"98686eb787ecd6ca27eeefcb666b3326"},{url:"15.74bec2efd0e95c859472.bundle.js",revision:"5a3a4ff32fa66ca90270b4c9d0ca6073"},{url:"16.c5ed550d18c6fe8da1b8.bundle.js",revision:"aa1abcd2c1c82f117e19919740df163e"},{url:"2.0b21688bd12efdf1eeca.css",revision:"202253c91a022e65f9cb7d6af8b3c1c4"},{url:"6.bf3ff6c25dec61dd8706.css",revision:"5416cf0afab048b992216407ada9c37e"},{url:"7.6092515bb087892212d0.bundle.js",revision:"f24551e9e386be8e9491ce8b3c24aaf5"},{url:"7.6092515bb087892212d0.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"7.b6c3d1e146c1a3d3d6e2.css",revision:"0f3d7cd857866dd90d6eabeb886ae9b0"},{url:"8.d9743ae4d9dae03f794b.bundle.js",revision:"1b1aaf202a56668449228fb5a34bf76b"},{url:"8.d9743ae4d9dae03f794b.bundle.js.LICENSE.txt",revision:"783f14fa45b10e088e68f98251448010"},{url:"9.4af8b432196f227bdeb4.css",revision:"ccfe873fe88bdbdda1dd8d890c33f557"},{url:"9.7b8812584abbba8e9af6.bundle.js",revision:"1b5554dbbf675b7efb4e07135faa1666"},{url:"app.ea921147e18a1076b000.bundle.js",revision:"4be701c586a8df6eae4b62c511c3f1c5"},{url:"assets/data/en/chendachao.json",revision:"138c34b69892fed1311dda38f279eee8"},{url:"assets/data/zh/chendachao.json",revision:"9419c5ce6c9883eaa8df4cf368010039"},{url:"assets/i18n/en.json",revision:"0bc8449ed9d0c264753cf5dde1edf93c"},{url:"assets/i18n/zh.json",revision:"0fedb9cee3fb0fedc450defabc223013"},{url:"assets/sw-patch.js",revision:"6b872636bee010cf6da8ae0161ca0fba"},{url:"cv.514cd5a2558b0cc5a900.bundle.js",revision:"88d49fd66420443b46bc6c0a450b5036"},{url:"cv.html",revision:"f8261feeee919c5465fa045d61838608"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"4161e4d8929d618072a977f99ff535b2"},{url:"install.26b281c6ecec729cba24.bundle.js",revision:"604ce79ebcd21461ca07639bb7dc5039"},{url:"manifest.json",revision:"6c8074ac79ddc45ac3ac6216dab15b1e"},{url:"print.8f7366dee16a096a00cd.bundle.js",revision:"3ef3af31c5a967116faeaa10f9ea254b"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.274245d3f63dd74b08ee.bundle.js",revision:"fe8cd5a8eefb468aa540a2677b37e1db"},{url:"sw-offline-google-analytics.js",revision:"d3c6216683b1108bd37114412eaa23ca"},{url:"vendors~app.3ec2bd5f4d8abc81f668.bundle.js",revision:"a127a8a365d6b1c143b2c76dc91e90e5"},{url:"vendors~app.3ec2bd5f4d8abc81f668.bundle.js.LICENSE.txt",revision:"11ba6bbe7acfcc6f0660e132a4496982"},{url:"vendors~app~cv.276537931b737971602b.bundle.js",revision:"df58fd9bd63ffb4af59b9f8859023cd6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
