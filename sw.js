if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-8bc83683"],(function(e){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./images/bg.ea2ccd94172d6c7e54bb0ac80f073a8e.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"./images/chendachao.github.io.fe28932a79ff2d82c5aec33eb61428d3.png",revision:"de4bb14ae75ef6d09aa3f67d60807a9c"},{url:"./images/signature.8e1dc1aa746aaf4d5e7ccae290e58107.svg",revision:"4a0ae24cf01a78ebce3b2e209bc3ecc8"},{url:"./images/throwing_a_stone.85afc988b607b5441bd60c08279f0b6e.svg",revision:"da2cbd988ee3ded6296dda5be63644dd"},{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.391ed6f93170a8bf4607.css",revision:"7ee1d228dadbf9a1a9c99eff1c899d39"},{url:"10.3fd0e0e9ae51b5663401.css",revision:"6b6c31304c79328b3a133a7db312de43"},{url:"10.dbc6bad048066ea266f0.bundle.js",revision:"c15366efd6e814ab72e6620967e6ecfe"},{url:"10.dbc6bad048066ea266f0.bundle.js.LICENSE.txt",revision:"2e9787e21223cd5dc10f8a953e312349"},{url:"11.8b64221e57ed50a89f9d.bundle.js",revision:"ef0ad6156bf9fc4dc640794eb0a9cdd4"},{url:"12.18e16e1e05e7390fe397.css",revision:"818830f3eafb0c3ca795fa2ecc7795e1"},{url:"12.91f68574772bef380311.bundle.js",revision:"ce6140394557152ead69688b654acb83"},{url:"13.0e4338761429b4eb16ac.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"13.bbf613cb7a1e18ac92d8.bundle.js",revision:"0933ff6e18ba0bdf43483e0e5e43697d"},{url:"14.7285253d83ce1481f870.bundle.js",revision:"1862bc32c6f9c14f6598662044ecebc4"},{url:"14.7ea4937ceff61acd4c8e.css",revision:"a40131300bb38c8ec9a68abf6c758bd6"},{url:"15.5930dc3d0d6b63c12ab0.css",revision:"262ff9f84b6bb6526e4c99cfa16aaa04"},{url:"15.92934827bdd47b32a511.bundle.js",revision:"0fe176b555d51025be8bbdb79ba845f8"},{url:"16.26e6602b6a950b784ab4.bundle.js",revision:"89b0000c2ef5995b230a149ff4798eab"},{url:"17.dd87dab82e498aeea925.bundle.js",revision:"39a33b9789b503e38c53741ef3c2e710"},{url:"2.1fd6e13ec395b04d687a.css",revision:"4e29ed69e18be1b1fda90b4f95663bac"},{url:"3.e9615f836f2cc1a4a14e.css",revision:"a9e4ce540d1224728cebf0e7e5ed63bc"},{url:"7.bf3ff6c25dec61dd8706.css",revision:"5416cf0afab048b992216407ada9c37e"},{url:"8.4ff606ac83e473023c2b.bundle.js",revision:"e7b43c34338bdaf4f22a0a03219ce2c7"},{url:"8.4ff606ac83e473023c2b.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"8.b6c3d1e146c1a3d3d6e2.css",revision:"0f3d7cd857866dd90d6eabeb886ae9b0"},{url:"9.4af8b432196f227bdeb4.css",revision:"ccfe873fe88bdbdda1dd8d890c33f557"},{url:"9.a39658c41df92a87a77c.bundle.js",revision:"465912a81f995335605b4c0be608b55a"},{url:"LICENSE",revision:"66e28c9b17ca1fc7097daa7bde70c5d1"},{url:"app.185bda07e89664c4bb8f.bundle.js",revision:"efd8af87c68abfcc1a57d31ea303dabd"},{url:"assets/data/en/chendachao.json",revision:"138c34b69892fed1311dda38f279eee8"},{url:"assets/data/zh/chendachao.json",revision:"9419c5ce6c9883eaa8df4cf368010039"},{url:"assets/i18n/en.json",revision:"2a159d7df491e5f805a1a72fdebb1619"},{url:"assets/i18n/zh.json",revision:"7598a4014bb98d85481ac0b1a0ea1799"},{url:"assets/images/apple-touch-icon.png",revision:"a2489cf2d5166d4b1a606c4c402bb55f"},{url:"assets/images/bell.svg",revision:"8c1e4329f1a8e10555e4a6097ca93f64"},{url:"assets/images/bg.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"assets/images/bg.webp",revision:"bf7f88c334edbf9cb3672847bf873eef"},{url:"assets/images/blogger.svg",revision:"fd7093d9cb536d72a9fcbe8b62e24385"},{url:"assets/images/chendachao.github.io.png",revision:"de4bb14ae75ef6d09aa3f67d60807a9c"},{url:"assets/images/code.svg",revision:"e0025d201471a83bf95f89f9a2e340fc"},{url:"assets/images/coder.svg",revision:"21e74b23cca3f60cf80891e73d7a17ab"},{url:"assets/images/cv.svg",revision:"282a10958b058cc8d3fb5e5bced9753f"},{url:"assets/images/dashboard.svg",revision:"713e230d1bc3caf2329c7792f9ab1c65"},{url:"assets/images/dashboard2.svg",revision:"fe0264fc0fb654d3711efc8dfc79026f"},{url:"assets/images/diamond.svg",revision:"747dd3b4a2b614bcf69abfa9e642e719"},{url:"assets/images/diamond2.svg",revision:"625b76875f49a266978722b9c3d67d29"},{url:"assets/images/flag-cn.svg",revision:"02c229de4d98ea1668384d2ed4cc558d"},{url:"assets/images/flag-gb.svg",revision:"d3ddd6025a06a78535b0d432d14905bf"},{url:"assets/images/help-1.svg",revision:"82f2f3c7bcd5c8f6f3bde3bf62f33b95"},{url:"assets/images/help-2.svg",revision:"9309f5e4c96e75bdf5136b8d06d783b4"},{url:"assets/images/home.svg",revision:"709c53c29b05edcb67e7fac1a2ccac43"},{url:"assets/images/i18n.svg",revision:"000d518c2c7c3f756422dd536fea6ae6"},{url:"assets/images/i18n2.svg",revision:"96aab26c792eced8aabcaa6731211172"},{url:"assets/images/i18n3.svg",revision:"9f3f46a3b824c1ace48f855ce23acf97"},{url:"assets/images/icons/android-chrome-144x144.png",revision:"7646d43434a57856c0acd3fa1b533b4e"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"2e665bad631a2d919c10145f9923ca2a"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"5f2501e9998a2eadb7b2badab4260a01"},{url:"assets/images/icons/android-chrome-36x36.png",revision:"0876c5a3b3d4147814a10d84fc716fed"},{url:"assets/images/icons/android-chrome-384x384.png",revision:"0b29cb9c56136310cdf40633d49f5edf"},{url:"assets/images/icons/android-chrome-48x48.png",revision:"7abe73a6cd6c77a0f07cfb215f7abb46"},{url:"assets/images/icons/android-chrome-512x512.png",revision:"29ff358228842997cb06dfbb66a792ad"},{url:"assets/images/icons/android-chrome-72x72.png",revision:"2cdb611ad72312a48a64b68b28b1a5ee"},{url:"assets/images/icons/android-chrome-96x96.png",revision:"26b44f9ed9aecdf10c58f02fbe1c2836"},{url:"assets/images/icons/apple-touch-icon.png",revision:"10ec44db2f1971ebf4323f00eddc82f0"},{url:"assets/images/icons/browserconfig.xml",revision:"a5c08279212abad6ad81ab4aa01d1448"},{url:"assets/images/icons/favicon-16x16.png",revision:"05cf6ab5c87144d6d53cf3dc75640af7"},{url:"assets/images/icons/favicon-32x32.png",revision:"9f785eb0a47fc59801f6207eef6d7abe"},{url:"assets/images/icons/favicon.ico",revision:"c862bf07aa647f74aed4e5d7a5627a19"},{url:"assets/images/icons/mstile-144x144.png",revision:"556b063900d312a96b70b285b9ba3cbe"},{url:"assets/images/icons/mstile-150x150.png",revision:"62ccdbd8bdde1a54c09ed8e1385b1294"},{url:"assets/images/icons/mstile-310x150.png",revision:"ce3dc3b13c797b6c3967dc1a3610cf7a"},{url:"assets/images/icons/mstile-310x310.png",revision:"45f02a8921356ef10102909e536f8963"},{url:"assets/images/icons/mstile-70x70.png",revision:"a0af0fea639ad89f97920a544b52c3c4"},{url:"assets/images/icons/safari-pinned-tab.svg",revision:"7c48ab59313c4d6ca04733e4b6705f52"},{url:"assets/images/info.svg",revision:"2c43601c880982a9ea30ad3995900b7a"},{url:"assets/images/install.svg",revision:"c5de4912fe021bbefb235b1ff4ebb455"},{url:"assets/images/larrychen.png",revision:"ad6883e88cb90a5d899acabc7892cb42"},{url:"assets/images/longmen.svg",revision:"968d11855c45a9b9b76b88f441ae4027"},{url:"assets/images/map.svg",revision:"a2b5059b5138f93ff71e7952f8beab48"},{url:"assets/images/notepad.svg",revision:"a7ffd67bbca11cf2ef05b55d6e6d65e0"},{url:"assets/images/notification.svg",revision:"eb9185762506500f82a59233461aaaf7"},{url:"assets/images/qr-code.svg",revision:"41b923cd1a2a7945eddc1a20aea0ea57"},{url:"assets/images/rss.svg",revision:"4f71db39c9da21d655ee9fd7070dbb27"},{url:"assets/images/scan-qr-code.svg",revision:"050ff80ef96796a55862e3ae8ef883dc"},{url:"assets/images/search.svg",revision:"c51cfa47b0c5a9a165589e7726501c4c"},{url:"assets/images/signature.svg",revision:"4a0ae24cf01a78ebce3b2e209bc3ecc8"},{url:"assets/images/social/github.svg",revision:"8b36ece9b53f1db9e3e2b845071e4ee7"},{url:"assets/images/social/linkedin.svg",revision:"5af7ae338f11decbc800c6d2963f20b8"},{url:"assets/images/social/outlook.svg",revision:"e299f12fbdf192516dd451b53eb82717"},{url:"assets/images/social/skype.svg",revision:"f79f9e4fd363f7bb24cc2abe7f30bd0f"},{url:"assets/images/social/so.svg",revision:"5fdbda3651ddb518774895316280f2a6"},{url:"assets/images/social/so2.svg",revision:"3ae582d506b04d1b6f32ef7aa64780b0"},{url:"assets/images/social/twitter.svg",revision:"f4b1cc1fd4414b81990d44a5e2bfa510"},{url:"assets/images/social/wechat.svg",revision:"6be24ad2efa43edba95ec11c76018801"},{url:"assets/images/star.svg",revision:"801a2f15b27379ed4888bf1c70820993"},{url:"assets/images/throwing_a_stone.svg",revision:"da2cbd988ee3ded6296dda5be63644dd"},{url:"assets/images/web homepage.ico",revision:"87720af4b2f01d1b3be2489d06bbcb93"},{url:"assets/images/wechat-qr-code.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"assets/images/wechat-qr-code.webp",revision:"68955041a0a3e0e3c104316c98f10d73"},{url:"assets/sw-patch.js",revision:"6b872636bee010cf6da8ae0161ca0fba"},{url:"cv.907a604d5bca9c6ade4e.bundle.js",revision:"dcb8657f7f5dcd5d7c570155ded45ec6"},{url:"cv.html",revision:"ee8585f4a8b93a94a3e77bf6ded084b4"},{url:"index.html",revision:"2bdea3a6eb423b1dbb890d1179de670b"},{url:"install.26b281c6ecec729cba24.bundle.js",revision:"604ce79ebcd21461ca07639bb7dc5039"},{url:"print.8f7366dee16a096a00cd.bundle.js",revision:"3ef3af31c5a967116faeaa10f9ea254b"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.688ebf4ccff435d96281.bundle.js",revision:"e6907754c809b7bcee0f69639b197797"},{url:"site.webmanifest",revision:"e1efdf28137afa743ff9f7c063abac92"},{url:"stone.b7d75b28eae882741030.bundle.js",revision:"6146b81d364e4adb6469fb98b0cf7740"},{url:"stone.html",revision:"2e461a4d9df6d69eba783916179156e2"},{url:"sw-offline-google-analytics.js",revision:"d3c6216683b1108bd37114412eaa23ca"},{url:"vendors~app.0f69ed63cf6b44462bd3.bundle.js",revision:"b7c6cccf376209253ce7596be1e329cc"},{url:"vendors~app.0f69ed63cf6b44462bd3.bundle.js.LICENSE.txt",revision:"63dfb48e2f68fc204e3b4cdf38d4001e"},{url:"vendors~app~cv~stone.7efeb02b5b1a93dce210.bundle.js",revision:"df58fd9bd63ffb4af59b9f8859023cd6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
