if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,i,c)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return a;case"module":return r;default:return s(e)}}))).then((s=>{const e=c(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-458e04aa"],(function(s){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"./assets/images/bg.16867479b2542814dd3087e1b71dc55b.jpg",revision:null},{url:"./assets/images/wechat-qr-code.56166d53a4662f501de9e462ae5eef7c.jpg",revision:null},{url:"1.6a3a50d3fd5f8e7b7bf8.css",revision:null},{url:"10.7151343c65935781d93d.chunk.js",revision:null},{url:"10.ba653daacfe456014a09.css",revision:null},{url:"11.7e4423f592d89919c546.css",revision:null},{url:"11.976b331a18541494f0d9.chunk.js",revision:null},{url:"11.976b331a18541494f0d9.chunk.js.LICENSE.txt",revision:"2e9787e21223cd5dc10f8a953e312349"},{url:"12.225c9e9c20b5d0167951.chunk.js",revision:null},{url:"13.4e5ac535f04965e148ac.chunk.js",revision:null},{url:"13.ea44042e9e29c308ee21.css",revision:null},{url:"14.ca4d1cb33945dd395184.chunk.js",revision:null},{url:"15.1ac8c77b01913afec682.chunk.js",revision:null},{url:"15.afd7172b7cfc566ac23d.css",revision:null},{url:"16.1cada3281745613c7771.chunk.js",revision:null},{url:"16.8261c869ddd408efb5a5.css",revision:null},{url:"17.6776c89db0ef3537e5fc.css",revision:null},{url:"17.6c2e11d05c9db74e8a09.chunk.js",revision:null},{url:"18.d0103bec772d3acee8f3.chunk.js",revision:null},{url:"19.2af9a3300ab7e2aaa2e4.chunk.js",revision:null},{url:"2.456421e12cca8a2edd2b.css",revision:null},{url:"20.c45e49cc2437c1c82af0.chunk.js",revision:null},{url:"3.3173d90f3475a2121aac.css",revision:null},{url:"8.a74228860d6edea1b5f7.css",revision:null},{url:"9.72e2b5487d919bbc356c.chunk.js",revision:null},{url:"9.72e2b5487d919bbc356c.chunk.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"LICENSE",revision:"66e28c9b17ca1fc7097daa7bde70c5d1"},{url:"app.cb9c041f6af23f90131c.chunk.js",revision:null},{url:"assets/data/en/chendachao.json",revision:"138c34b69892fed1311dda38f279eee8"},{url:"assets/data/zh/chendachao.json",revision:"9419c5ce6c9883eaa8df4cf368010039"},{url:"assets/gtag.js",revision:"8627f4aaeafb3f6766b822377b948de2"},{url:"assets/hotjar.js",revision:"705424e47456b1e30e6ae965b5e01e6b"},{url:"assets/i18n/en.json",revision:"b161fa318768d7e7c644e55033e8c516"},{url:"assets/i18n/zh.json",revision:"62480f761443aea9a573696acfee90c8"},{url:"assets/images/base-symbol-defs.svg",revision:"0eced032536ba6730ba09dd7ec0b55bf"},{url:"assets/images/bases/bell.svg",revision:"67fb07fbe8e0f6029c926bafc9fe152a"},{url:"assets/images/bases/code.svg",revision:"5a51abedd3ee62f457908829377fded9"},{url:"assets/images/bases/help-1.svg",revision:"9aa4ce36aea00a36de54c43109280a99"},{url:"assets/images/bases/help-2.svg",revision:"8e71f8405df685ef6153d0259e23f6cc"},{url:"assets/images/bases/i18n.svg",revision:"1eab11671e88c8b1826b526a99f49e25"},{url:"assets/images/bases/i18n2.svg",revision:"305035bd4b4ff62d764dc229b0bf30c4"},{url:"assets/images/bases/i18n3.svg",revision:"1a95cbcc187f44cb3075ce98d5bb9eb1"},{url:"assets/images/bases/info.svg",revision:"66530ccda137bbc94e0351e7dcaf4cdf"},{url:"assets/images/bases/install.svg",revision:"c5de4912fe021bbefb235b1ff4ebb455"},{url:"assets/images/bases/map.svg",revision:"77da1f6215c9026aa34a50b0b004c3b4"},{url:"assets/images/bases/notification.svg",revision:"84a7f872d762616c4930540edf36ad52"},{url:"assets/images/bases/qr-code.svg",revision:"20a2b408bf3ae4f1ee05d127de1190bc"},{url:"assets/images/bases/scan-qr-code.svg",revision:"e035826879dfebb4feea98c757e3cffc"},{url:"assets/images/bases/search.svg",revision:"72537407597e2f034bc76c5156394440"},{url:"assets/images/bases/share.svg",revision:"bc020b77fc8fff956bc6eccb9070be66"},{url:"assets/images/bases/signature.svg",revision:"a67ec3eef04a7879e229aeff80a73fe8"},{url:"assets/images/bases/signature.webp",revision:"79e00d83eeb858a6218ed3226a6b20a3"},{url:"assets/images/bases/star.svg",revision:"38f9693bfa851f36e8a8cfa59391c957"},{url:"assets/images/bee.svg",revision:"d207c658388e7142e6ee6a4e81e034da"},{url:"assets/images/bg.jpg",revision:"74296df80b7ca55de426f2c79c37f641"},{url:"assets/images/bg.webp",revision:"e3e695ac9a96d1459040e5c963de23e2"},{url:"assets/images/chendachao.github.io.png",revision:"7ea0588edcbe751f628d29ed8ca4af53"},{url:"assets/images/icons/android-chrome-144x144.png",revision:"b37e869d3a07f9d3a543fd4f443575fb"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"6747b6cb8cd3793cbb38d3647aa12262"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"ec8401c83d19507fa493e15257fe1ea5"},{url:"assets/images/icons/android-chrome-36x36.png",revision:"ddf5d93e942a1bbdd19c1a4d0ea2fb91"},{url:"assets/images/icons/android-chrome-384x384.png",revision:"f49a35aa2854f08f65b28d99a100dd83"},{url:"assets/images/icons/android-chrome-48x48.png",revision:"62a80031c09a6fae592da34b241335b2"},{url:"assets/images/icons/android-chrome-512x512.png",revision:"d2a90f2ee6775868baad248532a54161"},{url:"assets/images/icons/android-chrome-72x72.png",revision:"59f696a08cf9624eccc3c17389c86f25"},{url:"assets/images/icons/android-chrome-96x96.png",revision:"3f982e48e929ec42175690e914e59944"},{url:"assets/images/icons/apple-touch-icon.png",revision:"036c5754a614daffbbfc2a4696920afe"},{url:"assets/images/icons/browserconfig.xml",revision:"a5c08279212abad6ad81ab4aa01d1448"},{url:"assets/images/icons/favicon-16x16.png",revision:"5593e12a33b8d0070b74befe04dd344e"},{url:"assets/images/icons/favicon-32x32.png",revision:"5196db7ca6f7c326543703ea0b49d078"},{url:"assets/images/icons/favicon.ico",revision:"c862bf07aa647f74aed4e5d7a5627a19"},{url:"assets/images/icons/mstile-144x144.png",revision:"be6222dfbc316da3d4d3ba234bd5d28e"},{url:"assets/images/icons/mstile-150x150.png",revision:"ce57c3be520aaa68154abfd2f73d56c2"},{url:"assets/images/icons/mstile-310x150.png",revision:"87b44404b9bd4256e89b47e1cf7cd606"},{url:"assets/images/icons/mstile-310x310.png",revision:"c101f47921539b32f5a567c02578dcbe"},{url:"assets/images/icons/mstile-70x70.png",revision:"1efeaa7247e918ec3a7283205697d721"},{url:"assets/images/icons/safari-pinned-tab.svg",revision:"99efe9e1c5024c8af350a1797e9fbf95"},{url:"assets/images/larrychen.png",revision:"b8e0d2f94eb4ce97adc57c48667fa6da"},{url:"assets/images/portfolio-symbol-defs.svg",revision:"cefde6fa1fb300438d50da3fecf3e177"},{url:"assets/images/portfolios/blogger.svg",revision:"cac198a8cf7599e4d5197e4492e942bc"},{url:"assets/images/portfolios/coder.svg",revision:"61e682eab951ec7e6641a1a635e0f9d0"},{url:"assets/images/portfolios/cv.svg",revision:"453aba2a9ed74bafb7a42634c64d9791"},{url:"assets/images/portfolios/dashboard.svg",revision:"e438ab045cf30b43580fa0eae9f16557"},{url:"assets/images/portfolios/dashboard2.svg",revision:"ce5df3db96dc6cef732cb1590ba1cc1c"},{url:"assets/images/portfolios/diamond.svg",revision:"00e130da057c1ffa0e16980ca9a56581"},{url:"assets/images/portfolios/diamond2.svg",revision:"ed0d829bf3264bcf53eca0599f43c5e7"},{url:"assets/images/portfolios/home.svg",revision:"03ccf8d51d759c2cde358e4a64d68999"},{url:"assets/images/portfolios/longmen.svg",revision:"c799348173d2d0364851e2052109ef66"},{url:"assets/images/portfolios/notepad.svg",revision:"134928a42627250f9b8d452ec062e7ed"},{url:"assets/images/portfolios/rss.svg",revision:"ba73e5aead58005813881b275f45cdf7"},{url:"assets/images/portfolios/throwing_a_stone.svg",revision:"f31866b76643d7fe5b5141aef41fd94f"},{url:"assets/images/portfolios/throwing_a_stone.webp",revision:"e148c90d5500f2b2c6996bbe6a7cb298"},{url:"assets/images/sample-symbol-defs.svg",revision:"8275679fe6287d4532628929cbd1737b"},{url:"assets/images/screenshots/screenshot1.png",revision:"fada048a074f2d073426a2f847c5fe3e"},{url:"assets/images/screenshots/screenshot2.png",revision:"52506dac66a3645292fc080ae983a835"},{url:"assets/images/social-symbol-defs.svg",revision:"8a5cdcee432e24e17d4dddc632c51eb0"},{url:"assets/images/socials/github.svg",revision:"38076b6bc9865c2a3db9ee34a508813d"},{url:"assets/images/socials/linkedin.svg",revision:"4e7320caea3a9da25c3ddc8164631c77"},{url:"assets/images/socials/outlook.svg",revision:"b2e02e55c0996b32ce56f2549b79bab4"},{url:"assets/images/socials/skype.svg",revision:"11ee8f857ed9701b1685cdc912225665"},{url:"assets/images/socials/so.svg",revision:"7b9b347c4568b5a782b2db86e87fd553"},{url:"assets/images/socials/so2.svg",revision:"e2ca410f93e649ad0e31b0f3e0ea4332"},{url:"assets/images/socials/twitter.svg",revision:"a29f0a68d3174b547ab71b6873eb898d"},{url:"assets/images/socials/wechat.svg",revision:"bce66e2724b99b8de20b751c2b42554b"},{url:"assets/images/web homepage.ico",revision:"87720af4b2f01d1b3be2489d06bbcb93"},{url:"assets/images/wechat-qr-code.jpg",revision:"efe47482bb2a271279b9f2d37d004496"},{url:"assets/images/wechat-qr-code.webp",revision:"ecd88392b53206883564e541279ecdcc"},{url:"assets/sw-patch.js",revision:"6b872636bee010cf6da8ae0161ca0fba"},{url:"cv.bfeb5970b5de6fa851bc.chunk.js",revision:null},{url:"cv.html",revision:"d04237f36110af632dc01f78f26f9f3d"},{url:"index.html",revision:"4cd38d184910e87adfb23ef37e126f4e"},{url:"install.16bcffd71f34c91760d4.chunk.js",revision:null},{url:"log.66ef9a3a1df7a3405d2f.chunk.js",revision:null},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.041798ac952596cd33d0.bundle.js",revision:null},{url:"site.webmanifest",revision:"d481befd95c095944c52b31f29df9c52"},{url:"stone.2e550b063f4c202f2c19.chunk.js",revision:null},{url:"stone.html",revision:"ff069f7a2e9cd5be46931603bb0b3004"},{url:"svgxuse.cf038ee9d109d9de13bc.chunk.js",revision:null},{url:"svgxuse.cf038ee9d109d9de13bc.chunk.js.LICENSE.txt",revision:"b423565e3e126a0c98080e55a7a9c5ba"},{url:"sw-offline-google-analytics.js",revision:"d3c6216683b1108bd37114412eaa23ca"},{url:"vendors~app.d4a54206aa449f92a596.chunk.js",revision:null},{url:"vendors~app.d4a54206aa449f92a596.chunk.js.LICENSE.txt",revision:"63dfb48e2f68fc204e3b4cdf38d4001e"},{url:"vendors~app~cv~stone.e8005619cf41e1572cd4.chunk.js",revision:null}],{}),s.cleanupOutdatedCaches(),s.registerRoute(/^\/api\//,new s.StaleWhileRevalidate,"GET"),s.registerRoute(/\.(?:js|css)$/,new s.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),s.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new s.CacheFirst({cacheName:"images",plugins:[new s.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),s.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
