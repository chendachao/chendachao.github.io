if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const b={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return b;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-8bc83683"],(function(e){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./images/bg.ea2ccd94172d6c7e54bb0ac80f073a8e.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"./images/signature.8e1dc1aa746aaf4d5e7ccae290e58107.svg",revision:"4a0ae24cf01a78ebce3b2e209bc3ecc8"},{url:"./images/site.7e09efeb73a34e73c6c1743d95b91bad.png",revision:"5f62c1b299a68146ca8f0db51bd0fb55"},{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.391ed6f93170a8bf4607.css",revision:"7ee1d228dadbf9a1a9c99eff1c899d39"},{url:"10.3fd0e0e9ae51b5663401.css",revision:"6b6c31304c79328b3a133a7db312de43"},{url:"10.dbc6bad048066ea266f0.bundle.js",revision:"c15366efd6e814ab72e6620967e6ecfe"},{url:"10.dbc6bad048066ea266f0.bundle.js.LICENSE.txt",revision:"2e9787e21223cd5dc10f8a953e312349"},{url:"11.e5e417b28b17a9c945b1.bundle.js",revision:"2235ce59e86f616abb209549d20bc45e"},{url:"12.7cf878b6fe90ef21351e.bundle.js",revision:"586e5a7b77182dd1fd9eee787cbf3476"},{url:"12.d7b0cb5ad319e113c871.css",revision:"3fec31eeab080117b13beeaafb423e55"},{url:"13.0e4338761429b4eb16ac.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"13.bbf613cb7a1e18ac92d8.bundle.js",revision:"0933ff6e18ba0bdf43483e0e5e43697d"},{url:"14.7285253d83ce1481f870.bundle.js",revision:"1862bc32c6f9c14f6598662044ecebc4"},{url:"14.7ea4937ceff61acd4c8e.css",revision:"a40131300bb38c8ec9a68abf6c758bd6"},{url:"15.5930dc3d0d6b63c12ab0.css",revision:"262ff9f84b6bb6526e4c99cfa16aaa04"},{url:"15.92934827bdd47b32a511.bundle.js",revision:"0fe176b555d51025be8bbdb79ba845f8"},{url:"16.26e6602b6a950b784ab4.bundle.js",revision:"89b0000c2ef5995b230a149ff4798eab"},{url:"17.965fc5b33eb9973bf1e7.bundle.js",revision:"aef4c1a60be9d847a6acb82af219f974"},{url:"2.7b7720ba1c1c76279518.css",revision:"19320ccd7778a03ddc0ebfdabc5372c3"},{url:"3.e9615f836f2cc1a4a14e.css",revision:"a9e4ce540d1224728cebf0e7e5ed63bc"},{url:"7.bf3ff6c25dec61dd8706.css",revision:"5416cf0afab048b992216407ada9c37e"},{url:"8.4ff606ac83e473023c2b.bundle.js",revision:"e7b43c34338bdaf4f22a0a03219ce2c7"},{url:"8.4ff606ac83e473023c2b.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"8.b6c3d1e146c1a3d3d6e2.css",revision:"0f3d7cd857866dd90d6eabeb886ae9b0"},{url:"9.4af8b432196f227bdeb4.css",revision:"ccfe873fe88bdbdda1dd8d890c33f557"},{url:"9.a39658c41df92a87a77c.bundle.js",revision:"465912a81f995335605b4c0be608b55a"},{url:"LICENSE",revision:"66e28c9b17ca1fc7097daa7bde70c5d1"},{url:"app.23d46d5f4ff6b043125b.bundle.js",revision:"efd8af87c68abfcc1a57d31ea303dabd"},{url:"assets/data/en/chendachao.json",revision:"138c34b69892fed1311dda38f279eee8"},{url:"assets/data/zh/chendachao.json",revision:"9419c5ce6c9883eaa8df4cf368010039"},{url:"assets/i18n/en.json",revision:"474ed89b631ce23f20dca73f4221031b"},{url:"assets/i18n/zh.json",revision:"2ec66360ae1bff20a6a865d4c5c08059"},{url:"assets/images/bell.svg",revision:"8c1e4329f1a8e10555e4a6097ca93f64"},{url:"assets/images/bg.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"assets/images/bg.webp",revision:"bf7f88c334edbf9cb3672847bf873eef"},{url:"assets/images/code.svg",revision:"e0025d201471a83bf95f89f9a2e340fc"},{url:"assets/images/flag-cn.svg",revision:"02c229de4d98ea1668384d2ed4cc558d"},{url:"assets/images/flag-gb.svg",revision:"d3ddd6025a06a78535b0d432d14905bf"},{url:"assets/images/help-1.svg",revision:"82f2f3c7bcd5c8f6f3bde3bf62f33b95"},{url:"assets/images/help-2.svg",revision:"9309f5e4c96e75bdf5136b8d06d783b4"},{url:"assets/images/i18n.svg",revision:"000d518c2c7c3f756422dd536fea6ae6"},{url:"assets/images/i18n2.svg",revision:"96aab26c792eced8aabcaa6731211172"},{url:"assets/images/i18n3.svg",revision:"9f3f46a3b824c1ace48f855ce23acf97"},{url:"assets/images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"assets/images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"assets/images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"assets/images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"assets/images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"assets/images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"assets/images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"assets/images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"assets/images/info.svg",revision:"2c43601c880982a9ea30ad3995900b7a"},{url:"assets/images/install.svg",revision:"c5de4912fe021bbefb235b1ff4ebb455"},{url:"assets/images/map.svg",revision:"a2b5059b5138f93ff71e7952f8beab48"},{url:"assets/images/notification.svg",revision:"eb9185762506500f82a59233461aaaf7"},{url:"assets/images/qr-code.svg",revision:"41b923cd1a2a7945eddc1a20aea0ea57"},{url:"assets/images/scan-qr-code.svg",revision:"050ff80ef96796a55862e3ae8ef883dc"},{url:"assets/images/signature.svg",revision:"4a0ae24cf01a78ebce3b2e209bc3ecc8"},{url:"assets/images/site.png",revision:"5f62c1b299a68146ca8f0db51bd0fb55"},{url:"assets/images/social/github.svg",revision:"8b36ece9b53f1db9e3e2b845071e4ee7"},{url:"assets/images/social/linkedin.svg",revision:"5af7ae338f11decbc800c6d2963f20b8"},{url:"assets/images/social/outlook.svg",revision:"e299f12fbdf192516dd451b53eb82717"},{url:"assets/images/social/skype.svg",revision:"f79f9e4fd363f7bb24cc2abe7f30bd0f"},{url:"assets/images/social/so.svg",revision:"5fdbda3651ddb518774895316280f2a6"},{url:"assets/images/social/so2.svg",revision:"3ae582d506b04d1b6f32ef7aa64780b0"},{url:"assets/images/social/twitter.svg",revision:"f4b1cc1fd4414b81990d44a5e2bfa510"},{url:"assets/images/social/wechat.svg",revision:"6be24ad2efa43edba95ec11c76018801"},{url:"assets/images/star.svg",revision:"801a2f15b27379ed4888bf1c70820993"},{url:"assets/images/web homepage.ico",revision:"87720af4b2f01d1b3be2489d06bbcb93"},{url:"assets/images/web-cpu.ico",revision:"63eec4c9551ddbbecad2305330589748"},{url:"assets/images/wechat-qr-code.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"assets/images/wechat-qr-code.webp",revision:"68955041a0a3e0e3c104316c98f10d73"},{url:"assets/sw-patch.js",revision:"6b872636bee010cf6da8ae0161ca0fba"},{url:"cv.907a604d5bca9c6ade4e.bundle.js",revision:"dcb8657f7f5dcd5d7c570155ded45ec6"},{url:"cv.html",revision:"3311593e7bd90ecaccffe0b037e2a22a"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"index.html",revision:"cb54a27f6c95a15321b6197e594106a3"},{url:"install.26b281c6ecec729cba24.bundle.js",revision:"604ce79ebcd21461ca07639bb7dc5039"},{url:"manifest.json",revision:"758a72046248e3939b578b5ffa593041"},{url:"print.8f7366dee16a096a00cd.bundle.js",revision:"3ef3af31c5a967116faeaa10f9ea254b"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.c50c4c4a0a5d52e2bb44.bundle.js",revision:"b2c3a3b86b64cd1fe59bbbdde568adeb"},{url:"stone.b7d75b28eae882741030.bundle.js",revision:"6146b81d364e4adb6469fb98b0cf7740"},{url:"stone.html",revision:"f6396e3fecd7692381576d378391f637"},{url:"sw-offline-google-analytics.js",revision:"d3c6216683b1108bd37114412eaa23ca"},{url:"vendors~app.0f69ed63cf6b44462bd3.bundle.js",revision:"b7c6cccf376209253ce7596be1e329cc"},{url:"vendors~app.0f69ed63cf6b44462bd3.bundle.js.LICENSE.txt",revision:"63dfb48e2f68fc204e3b4cdf38d4001e"},{url:"vendors~app~cv~stone.7efeb02b5b1a93dce210.bundle.js",revision:"df58fd9bd63ffb4af59b9f8859023cd6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
