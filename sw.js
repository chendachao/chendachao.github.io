if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-8bc83683"],(function(e){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./images/bg.ea2ccd94172d6c7e54bb0ac80f073a8e.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"./images/signature.f075c83e7ead023ddde3988d26187388.svg",revision:"4d0db3425c540e85efbdf3b8c3d705e2"},{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.6a3a50d3fd5f8e7b7bf8.css",revision:"7ee1d228dadbf9a1a9c99eff1c899d39"},{url:"10.0549ee89c6444986a856.chunk.js",revision:"e6fc148f3e2239c5ff837bf72e76a7f8"},{url:"10.0549ee89c6444986a856.chunk.js.LICENSE.txt",revision:"2e9787e21223cd5dc10f8a953e312349"},{url:"10.7e4423f592d89919c546.css",revision:"6b6c31304c79328b3a133a7db312de43"},{url:"11.47a949b784af80113b9a.chunk.js",revision:"acd26f003406e0c64121f407e79cb807"},{url:"12.5f874de22496ff363a84.css",revision:"a6fe33f5832c20c2c718dc45388deda6"},{url:"12.ecb0f22bcd31d9a30507.chunk.js",revision:"0d672129d158214f568dab437577a95f"},{url:"13.72a7b26bb0b699aa70fb.chunk.js",revision:"0933ff6e18ba0bdf43483e0e5e43697d"},{url:"13.afd7172b7cfc566ac23d.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"14.a3b8980818116147191d.chunk.js",revision:"1862bc32c6f9c14f6598662044ecebc4"},{url:"14.a77a0e3a3a464f2b9136.css",revision:"a40131300bb38c8ec9a68abf6c758bd6"},{url:"15.131742c66823465faaed.chunk.js",revision:"0fe176b555d51025be8bbdb79ba845f8"},{url:"15.6776c89db0ef3537e5fc.css",revision:"a72b18ef727abd373d3ef1c41aeae3b7"},{url:"16.41ecab3f065cdbec436a.chunk.js",revision:"60c9ed7d64ad2cafdd529234140523c4"},{url:"17.675f80a5ab13591d8b7d.chunk.js",revision:"ca57a507fee6a9a642c3b9d89438472c"},{url:"18.f6e2407456335d1720d2.chunk.js",revision:"21c762f1035838155dda765a0ed3ae77"},{url:"2.50a10f986d7163591097.css",revision:"0d66e213a0e54f068d2db2142906544b"},{url:"3.3173d90f3475a2121aac.css",revision:"a9e4ce540d1224728cebf0e7e5ed63bc"},{url:"7.a74228860d6edea1b5f7.css",revision:"5416cf0afab048b992216407ada9c37e"},{url:"8.36b9176934092fe1e41a.chunk.js",revision:"af4aca098d230a92932a27de49ad7357"},{url:"8.36b9176934092fe1e41a.chunk.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"9.9abff2206350413b5bc3.chunk.js",revision:"465912a81f995335605b4c0be608b55a"},{url:"9.ba653daacfe456014a09.css",revision:"ccfe873fe88bdbdda1dd8d890c33f557"},{url:"LICENSE",revision:"66e28c9b17ca1fc7097daa7bde70c5d1"},{url:"app.ff404a8bfbb0c42dc577.chunk.js",revision:"10c3860337b73d05d20aa8de633048f3"},{url:"assets/data/en/chendachao.json",revision:"138c34b69892fed1311dda38f279eee8"},{url:"assets/data/zh/chendachao.json",revision:"9419c5ce6c9883eaa8df4cf368010039"},{url:"assets/gtag.js",revision:"8627f4aaeafb3f6766b822377b948de2"},{url:"assets/hotjar.js",revision:"705424e47456b1e30e6ae965b5e01e6b"},{url:"assets/i18n/en.json",revision:"7d189103830e9fd0687e0e1a62f1f64e"},{url:"assets/i18n/zh.json",revision:"a1a0ed6b57943ad35d29fb39ff46f37e"},{url:"assets/images/bell.svg",revision:"67fb07fbe8e0f6029c926bafc9fe152a"},{url:"assets/images/bg.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"assets/images/bg.webp",revision:"bf7f88c334edbf9cb3672847bf873eef"},{url:"assets/images/blogger.svg",revision:"cac198a8cf7599e4d5197e4492e942bc"},{url:"assets/images/chendachao.github.io.png",revision:"7cfa5fe577d9cb13df34e0635d57ab6e"},{url:"assets/images/code.svg",revision:"5a51abedd3ee62f457908829377fded9"},{url:"assets/images/coder.svg",revision:"c24097efae5b9d7871f2c591d1eb4517"},{url:"assets/images/cv.svg",revision:"453aba2a9ed74bafb7a42634c64d9791"},{url:"assets/images/dashboard.svg",revision:"e438ab045cf30b43580fa0eae9f16557"},{url:"assets/images/dashboard2.svg",revision:"ce5df3db96dc6cef732cb1590ba1cc1c"},{url:"assets/images/diamond.svg",revision:"00e130da057c1ffa0e16980ca9a56581"},{url:"assets/images/diamond2.svg",revision:"ed0d829bf3264bcf53eca0599f43c5e7"},{url:"assets/images/flag-cn.svg",revision:"afa55647992321252aae8dbbdb1ae48c"},{url:"assets/images/flag-gb.svg",revision:"04d053281cc554bf179abd66b520ff38"},{url:"assets/images/help-1.svg",revision:"9aa4ce36aea00a36de54c43109280a99"},{url:"assets/images/help-2.svg",revision:"8e71f8405df685ef6153d0259e23f6cc"},{url:"assets/images/home.svg",revision:"03ccf8d51d759c2cde358e4a64d68999"},{url:"assets/images/i18n.svg",revision:"1eab11671e88c8b1826b526a99f49e25"},{url:"assets/images/i18n2.svg",revision:"305035bd4b4ff62d764dc229b0bf30c4"},{url:"assets/images/i18n3.svg",revision:"1a95cbcc187f44cb3075ce98d5bb9eb1"},{url:"assets/images/icons/android-chrome-144x144.png",revision:"d4ff1525a247243e140c6a60d2fab57b"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"d3932bba86a0df3eabb360a36f688cd7"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"ebb568999118c3a37fd6fe1dc19e82ea"},{url:"assets/images/icons/android-chrome-36x36.png",revision:"98620aa012aa5b584207585a3f79e75d"},{url:"assets/images/icons/android-chrome-384x384.png",revision:"1243028e6d11a1af19d16a186d99ef36"},{url:"assets/images/icons/android-chrome-48x48.png",revision:"53faaeffd14a179cefc55075eb9f7737"},{url:"assets/images/icons/android-chrome-512x512.png",revision:"7599a9686a2eac25a35945053cf7ea38"},{url:"assets/images/icons/android-chrome-72x72.png",revision:"0f524cf3e8d819455c301f57124b833b"},{url:"assets/images/icons/android-chrome-96x96.png",revision:"f1f2e686e96ed6499adf2a9cf3d30fa6"},{url:"assets/images/icons/apple-touch-icon.png",revision:"ec637946af0fde0857c16f857ee8ae8d"},{url:"assets/images/icons/browserconfig.xml",revision:"a5c08279212abad6ad81ab4aa01d1448"},{url:"assets/images/icons/favicon-16x16.png",revision:"2ba9028a5a098d1dcced8d20c8727970"},{url:"assets/images/icons/favicon-32x32.png",revision:"838bbe323784ec061d9b0d73824b643c"},{url:"assets/images/icons/favicon.ico",revision:"c862bf07aa647f74aed4e5d7a5627a19"},{url:"assets/images/icons/mstile-144x144.png",revision:"49424aaab7abd40563089129c68453ff"},{url:"assets/images/icons/mstile-150x150.png",revision:"9f89b2ae6fe6830b94d1926a1c568db5"},{url:"assets/images/icons/mstile-310x150.png",revision:"fb5b6b74b2777bce78f875b69c1169e4"},{url:"assets/images/icons/mstile-310x310.png",revision:"bc7efcc3abb7cc053803398fa07af16c"},{url:"assets/images/icons/mstile-70x70.png",revision:"28f90b42d19642867fd1f50443b91d56"},{url:"assets/images/icons/safari-pinned-tab.svg",revision:"99efe9e1c5024c8af350a1797e9fbf95"},{url:"assets/images/info.svg",revision:"66530ccda137bbc94e0351e7dcaf4cdf"},{url:"assets/images/install.svg",revision:"c5de4912fe021bbefb235b1ff4ebb455"},{url:"assets/images/larrychen.png",revision:"3452208c603083487fff952535d07c5c"},{url:"assets/images/longmen.svg",revision:"c799348173d2d0364851e2052109ef66"},{url:"assets/images/map.svg",revision:"77da1f6215c9026aa34a50b0b004c3b4"},{url:"assets/images/notepad.svg",revision:"134928a42627250f9b8d452ec062e7ed"},{url:"assets/images/notification.svg",revision:"84a7f872d762616c4930540edf36ad52"},{url:"assets/images/qr-code.svg",revision:"20a2b408bf3ae4f1ee05d127de1190bc"},{url:"assets/images/rss.svg",revision:"ba73e5aead58005813881b275f45cdf7"},{url:"assets/images/scan-qr-code.svg",revision:"e035826879dfebb4feea98c757e3cffc"},{url:"assets/images/screenshots/screenshot1.png",revision:"485b02d8a9349bd94720baeccf59e603"},{url:"assets/images/screenshots/screenshot2.png",revision:"055663daf8b32206aef27b3682462c43"},{url:"assets/images/search.svg",revision:"72537407597e2f034bc76c5156394440"},{url:"assets/images/signature.svg",revision:"4d0db3425c540e85efbdf3b8c3d705e2"},{url:"assets/images/signature.webp",revision:"79e00d83eeb858a6218ed3226a6b20a3"},{url:"assets/images/social/github.svg",revision:"38076b6bc9865c2a3db9ee34a508813d"},{url:"assets/images/social/linkedin.svg",revision:"4e7320caea3a9da25c3ddc8164631c77"},{url:"assets/images/social/outlook.svg",revision:"b2e02e55c0996b32ce56f2549b79bab4"},{url:"assets/images/social/skype.svg",revision:"11ee8f857ed9701b1685cdc912225665"},{url:"assets/images/social/so.svg",revision:"7b9b347c4568b5a782b2db86e87fd553"},{url:"assets/images/social/so2.svg",revision:"e2ca410f93e649ad0e31b0f3e0ea4332"},{url:"assets/images/social/twitter.svg",revision:"a29f0a68d3174b547ab71b6873eb898d"},{url:"assets/images/social/wechat.svg",revision:"bce66e2724b99b8de20b751c2b42554b"},{url:"assets/images/star.svg",revision:"38f9693bfa851f36e8a8cfa59391c957"},{url:"assets/images/throwing_a_stone.svg",revision:"f31866b76643d7fe5b5141aef41fd94f"},{url:"assets/images/throwing_a_stone.webp",revision:"e148c90d5500f2b2c6996bbe6a7cb298"},{url:"assets/images/web homepage.ico",revision:"87720af4b2f01d1b3be2489d06bbcb93"},{url:"assets/images/wechat-qr-code.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"assets/images/wechat-qr-code.webp",revision:"68955041a0a3e0e3c104316c98f10d73"},{url:"assets/sw-patch.js",revision:"6b872636bee010cf6da8ae0161ca0fba"},{url:"cv.93574d4463665b420b7e.chunk.js",revision:"dcb8657f7f5dcd5d7c570155ded45ec6"},{url:"cv.html",revision:"428d92138b10e3b42b0ccec927eeb309"},{url:"index.html",revision:"4272263dba39f3eb11c182b22384b8bb"},{url:"install.16bcffd71f34c91760d4.chunk.js",revision:"92a1f1acbf4db6b8d9e3f52beef10f48"},{url:"log.66ef9a3a1df7a3405d2f.chunk.js",revision:"ba35504cdaf6efbdb84f1b8d4e38cfae"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.ab7c9bfc6858eb679aea.bundle.js",revision:"07b78e0fb62d82877b1a2f6c58ac6f76"},{url:"site.webmanifest",revision:"d481befd95c095944c52b31f29df9c52"},{url:"stone.b9ffa38ea91a824859e8.chunk.js",revision:"6146b81d364e4adb6469fb98b0cf7740"},{url:"stone.html",revision:"2d91fffcaf9b87e8fcbd61ae7ebefbb6"},{url:"sw-offline-google-analytics.js",revision:"d3c6216683b1108bd37114412eaa23ca"},{url:"vendors~app.354d16722677b95e24c0.chunk.js",revision:"3ecb980402966dd451bf1e549183130f"},{url:"vendors~app.354d16722677b95e24c0.chunk.js.LICENSE.txt",revision:"63dfb48e2f68fc204e3b4cdf38d4001e"},{url:"vendors~app~cv~stone.e8005619cf41e1572cd4.chunk.js",revision:"df58fd9bd63ffb4af59b9f8859023cd6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
