if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-8bc83683"],(function(e){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./images/bg.ea2ccd94172d6c7e54bb0ac80f073a8e.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"./images/chendachao.github.io.fe28932a79ff2d82c5aec33eb61428d3.png",revision:"de4bb14ae75ef6d09aa3f67d60807a9c"},{url:"./images/signature.319e05b8be79a9a09267dfa83c129e2e.svg",revision:"3b1ad783fd4d432c69e3d08b38155b6d"},{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.391ed6f93170a8bf4607.css",revision:"7ee1d228dadbf9a1a9c99eff1c899d39"},{url:"10.3fd0e0e9ae51b5663401.css",revision:"6b6c31304c79328b3a133a7db312de43"},{url:"10.82db10d9fce31cb2b57e.chunk.js",revision:"beac0f91863b18b27552af0f64f3e6ab"},{url:"10.82db10d9fce31cb2b57e.chunk.js.LICENSE.txt",revision:"2e9787e21223cd5dc10f8a953e312349"},{url:"11.77cfa6439a8700298e91.chunk.js",revision:"54297b8a8aa93e92882de70d7faf48c8"},{url:"12.59c23b5ab64c3f505372.chunk.js",revision:"0d672129d158214f568dab437577a95f"},{url:"12.df26acbfe7d20bead1c8.css",revision:"affd1cc7677c3fee18fa5aa0dc5a2d08"},{url:"13.0e4338761429b4eb16ac.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"13.568b11c76ebf080fd2d3.chunk.js",revision:"0933ff6e18ba0bdf43483e0e5e43697d"},{url:"14.7ea4937ceff61acd4c8e.css",revision:"a40131300bb38c8ec9a68abf6c758bd6"},{url:"14.93a7ebc4c4abc2d9766e.chunk.js",revision:"1862bc32c6f9c14f6598662044ecebc4"},{url:"15.1f06fbd9e382fa34632a.chunk.js",revision:"0fe176b555d51025be8bbdb79ba845f8"},{url:"15.5930dc3d0d6b63c12ab0.css",revision:"262ff9f84b6bb6526e4c99cfa16aaa04"},{url:"16.41ecab3f065cdbec436a.chunk.js",revision:"60c9ed7d64ad2cafdd529234140523c4"},{url:"17.675f80a5ab13591d8b7d.chunk.js",revision:"ca57a507fee6a9a642c3b9d89438472c"},{url:"18.f6e2407456335d1720d2.chunk.js",revision:"21c762f1035838155dda765a0ed3ae77"},{url:"2.4ea46183c89999dbb909.css",revision:"3f3b76f426bd5bd1bdd49ece6edee15b"},{url:"3.e9615f836f2cc1a4a14e.css",revision:"a9e4ce540d1224728cebf0e7e5ed63bc"},{url:"7.bf3ff6c25dec61dd8706.css",revision:"5416cf0afab048b992216407ada9c37e"},{url:"8.36b9176934092fe1e41a.chunk.js",revision:"af4aca098d230a92932a27de49ad7357"},{url:"8.36b9176934092fe1e41a.chunk.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"9.1d01da0596602910d4b4.chunk.js",revision:"465912a81f995335605b4c0be608b55a"},{url:"9.4af8b432196f227bdeb4.css",revision:"ccfe873fe88bdbdda1dd8d890c33f557"},{url:"LICENSE",revision:"66e28c9b17ca1fc7097daa7bde70c5d1"},{url:"app.bfbbb02b44784e0d320b.chunk.js",revision:"10c3860337b73d05d20aa8de633048f3"},{url:"assets/data/en/chendachao.json",revision:"138c34b69892fed1311dda38f279eee8"},{url:"assets/data/zh/chendachao.json",revision:"9419c5ce6c9883eaa8df4cf368010039"},{url:"assets/gtag.js",revision:"8627f4aaeafb3f6766b822377b948de2"},{url:"assets/hotjar.js",revision:"705424e47456b1e30e6ae965b5e01e6b"},{url:"assets/i18n/en.json",revision:"67069f0b2749989bd7a3704dc590553a"},{url:"assets/i18n/zh.json",revision:"217e0bd37fad0f8de0d8ba70989b5cc6"},{url:"assets/images/apple-touch-icon.png",revision:"a2489cf2d5166d4b1a606c4c402bb55f"},{url:"assets/images/bell.svg",revision:"8c1e4329f1a8e10555e4a6097ca93f64"},{url:"assets/images/bg.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"assets/images/bg.webp",revision:"bf7f88c334edbf9cb3672847bf873eef"},{url:"assets/images/blogger.svg",revision:"fd7093d9cb536d72a9fcbe8b62e24385"},{url:"assets/images/chendachao.github.io.png",revision:"de4bb14ae75ef6d09aa3f67d60807a9c"},{url:"assets/images/code.svg",revision:"e0025d201471a83bf95f89f9a2e340fc"},{url:"assets/images/coder.svg",revision:"21e74b23cca3f60cf80891e73d7a17ab"},{url:"assets/images/cv.svg",revision:"282a10958b058cc8d3fb5e5bced9753f"},{url:"assets/images/dashboard.svg",revision:"713e230d1bc3caf2329c7792f9ab1c65"},{url:"assets/images/dashboard2.svg",revision:"fe0264fc0fb654d3711efc8dfc79026f"},{url:"assets/images/diamond.svg",revision:"747dd3b4a2b614bcf69abfa9e642e719"},{url:"assets/images/diamond2.svg",revision:"625b76875f49a266978722b9c3d67d29"},{url:"assets/images/flag-cn.svg",revision:"02c229de4d98ea1668384d2ed4cc558d"},{url:"assets/images/flag-gb.svg",revision:"d3ddd6025a06a78535b0d432d14905bf"},{url:"assets/images/help-1.svg",revision:"82f2f3c7bcd5c8f6f3bde3bf62f33b95"},{url:"assets/images/help-2.svg",revision:"9309f5e4c96e75bdf5136b8d06d783b4"},{url:"assets/images/home.svg",revision:"709c53c29b05edcb67e7fac1a2ccac43"},{url:"assets/images/i18n.svg",revision:"000d518c2c7c3f756422dd536fea6ae6"},{url:"assets/images/i18n2.svg",revision:"96aab26c792eced8aabcaa6731211172"},{url:"assets/images/i18n3.svg",revision:"9f3f46a3b824c1ace48f855ce23acf97"},{url:"assets/images/icons/android-chrome-144x144.png",revision:"7646d43434a57856c0acd3fa1b533b4e"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"2e665bad631a2d919c10145f9923ca2a"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"5f2501e9998a2eadb7b2badab4260a01"},{url:"assets/images/icons/android-chrome-36x36.png",revision:"0876c5a3b3d4147814a10d84fc716fed"},{url:"assets/images/icons/android-chrome-384x384.png",revision:"0b29cb9c56136310cdf40633d49f5edf"},{url:"assets/images/icons/android-chrome-48x48.png",revision:"7abe73a6cd6c77a0f07cfb215f7abb46"},{url:"assets/images/icons/android-chrome-512x512.png",revision:"29ff358228842997cb06dfbb66a792ad"},{url:"assets/images/icons/android-chrome-72x72.png",revision:"2cdb611ad72312a48a64b68b28b1a5ee"},{url:"assets/images/icons/android-chrome-96x96.png",revision:"26b44f9ed9aecdf10c58f02fbe1c2836"},{url:"assets/images/icons/apple-touch-icon.png",revision:"10ec44db2f1971ebf4323f00eddc82f0"},{url:"assets/images/icons/browserconfig.xml",revision:"a5c08279212abad6ad81ab4aa01d1448"},{url:"assets/images/icons/favicon-16x16.png",revision:"05cf6ab5c87144d6d53cf3dc75640af7"},{url:"assets/images/icons/favicon-32x32.png",revision:"9f785eb0a47fc59801f6207eef6d7abe"},{url:"assets/images/icons/favicon.ico",revision:"c862bf07aa647f74aed4e5d7a5627a19"},{url:"assets/images/icons/mstile-144x144.png",revision:"556b063900d312a96b70b285b9ba3cbe"},{url:"assets/images/icons/mstile-150x150.png",revision:"62ccdbd8bdde1a54c09ed8e1385b1294"},{url:"assets/images/icons/mstile-310x150.png",revision:"ce3dc3b13c797b6c3967dc1a3610cf7a"},{url:"assets/images/icons/mstile-310x310.png",revision:"45f02a8921356ef10102909e536f8963"},{url:"assets/images/icons/mstile-70x70.png",revision:"a0af0fea639ad89f97920a544b52c3c4"},{url:"assets/images/icons/safari-pinned-tab.svg",revision:"7c48ab59313c4d6ca04733e4b6705f52"},{url:"assets/images/info.svg",revision:"2c43601c880982a9ea30ad3995900b7a"},{url:"assets/images/install.svg",revision:"c5de4912fe021bbefb235b1ff4ebb455"},{url:"assets/images/larrychen.png",revision:"ad6883e88cb90a5d899acabc7892cb42"},{url:"assets/images/longmen.svg",revision:"968d11855c45a9b9b76b88f441ae4027"},{url:"assets/images/map.svg",revision:"a2b5059b5138f93ff71e7952f8beab48"},{url:"assets/images/notepad.svg",revision:"a7ffd67bbca11cf2ef05b55d6e6d65e0"},{url:"assets/images/notification.svg",revision:"eb9185762506500f82a59233461aaaf7"},{url:"assets/images/qr-code.svg",revision:"41b923cd1a2a7945eddc1a20aea0ea57"},{url:"assets/images/rss.svg",revision:"4f71db39c9da21d655ee9fd7070dbb27"},{url:"assets/images/scan-qr-code.svg",revision:"050ff80ef96796a55862e3ae8ef883dc"},{url:"assets/images/screenshots/screenshot1.png",revision:"63e93147b46c7a497f12ff43b045ca1e"},{url:"assets/images/screenshots/screenshot2.png",revision:"b0b7f5ae58e6b5ce42665f6b079f2399"},{url:"assets/images/search.svg",revision:"c51cfa47b0c5a9a165589e7726501c4c"},{url:"assets/images/signature.svg",revision:"3b1ad783fd4d432c69e3d08b38155b6d"},{url:"assets/images/signature.webp",revision:"79e00d83eeb858a6218ed3226a6b20a3"},{url:"assets/images/social/github.svg",revision:"8b36ece9b53f1db9e3e2b845071e4ee7"},{url:"assets/images/social/linkedin.svg",revision:"5af7ae338f11decbc800c6d2963f20b8"},{url:"assets/images/social/outlook.svg",revision:"e299f12fbdf192516dd451b53eb82717"},{url:"assets/images/social/skype.svg",revision:"f79f9e4fd363f7bb24cc2abe7f30bd0f"},{url:"assets/images/social/so.svg",revision:"5fdbda3651ddb518774895316280f2a6"},{url:"assets/images/social/so2.svg",revision:"3ae582d506b04d1b6f32ef7aa64780b0"},{url:"assets/images/social/twitter.svg",revision:"f4b1cc1fd4414b81990d44a5e2bfa510"},{url:"assets/images/social/wechat.svg",revision:"6be24ad2efa43edba95ec11c76018801"},{url:"assets/images/star.svg",revision:"801a2f15b27379ed4888bf1c70820993"},{url:"assets/images/throwing_a_stone.svg",revision:"5820af4869f009707dd2a35cf4569292"},{url:"assets/images/throwing_a_stone.webp",revision:"e148c90d5500f2b2c6996bbe6a7cb298"},{url:"assets/images/web homepage.ico",revision:"87720af4b2f01d1b3be2489d06bbcb93"},{url:"assets/images/wechat-qr-code.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"assets/images/wechat-qr-code.webp",revision:"68955041a0a3e0e3c104316c98f10d73"},{url:"assets/sw-patch.js",revision:"6b872636bee010cf6da8ae0161ca0fba"},{url:"cv.90ed89806fa357ea91d5.chunk.js",revision:"dcb8657f7f5dcd5d7c570155ded45ec6"},{url:"cv.html",revision:"2f9a89d289078d1454fdb41cd2411009"},{url:"index.html",revision:"f2b4cc7ac4e66d6c3e87a6410af42f33"},{url:"install.16bcffd71f34c91760d4.chunk.js",revision:"92a1f1acbf4db6b8d9e3f52beef10f48"},{url:"log.66ef9a3a1df7a3405d2f.chunk.js",revision:"ba35504cdaf6efbdb84f1b8d4e38cfae"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.0cad32202078d98ff511.bundle.js",revision:"790fe0d4df5c26e54ee35489fc130a32"},{url:"site.webmanifest",revision:"d481befd95c095944c52b31f29df9c52"},{url:"stone.8713a375aebbbc43e1b4.chunk.js",revision:"6146b81d364e4adb6469fb98b0cf7740"},{url:"stone.html",revision:"ffe9588c4a4942f75ed9abd95890c453"},{url:"sw-offline-google-analytics.js",revision:"d3c6216683b1108bd37114412eaa23ca"},{url:"vendors~app.ae86416b144320b5e30f.chunk.js",revision:"1375163c2c3701bcf7ff19ce2c42a92c"},{url:"vendors~app.ae86416b144320b5e30f.chunk.js.LICENSE.txt",revision:"63dfb48e2f68fc204e3b4cdf38d4001e"},{url:"vendors~app~cv~stone.82c206a9bd05ddad5377.chunk.js",revision:"df58fd9bd63ffb4af59b9f8859023cd6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
