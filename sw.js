if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const l=e=>a(e,r),b={module:{uri:r},exports:c,require:l};s[r]=Promise.all(i.map((e=>b[e]||l(e)))).then((e=>(n(...e),c)))}}define(["./workbox-9f7faace"],(function(e){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"103.d15557645a5658298b5f.chunk.js",revision:null},{url:"1206.93ad98a93a30a8a02c18.bundle.js",revision:null},{url:"1446.8294311dfa194c83db96.bundle.js",revision:null},{url:"179f040bee397eddc4ff.woff?t=1645425478574",revision:null},{url:"1826.524385b6cfe7b7002090.chunk.js",revision:null},{url:"2171.e923f6cdaba57eb72893.chunk.js",revision:null},{url:"2195.1a771f20d75753d08446.bundle.js",revision:null},{url:"2229.eb4c644fa22749c3e805.bundle.js",revision:null},{url:"2420.b84cf2a7cdc772a4d1d3.bundle.js",revision:null},{url:"2900.55293d5358d1cc05c3cd.chunk.js",revision:null},{url:"3009.4f791f1a63c08af886e4.chunk.js",revision:null},{url:"3275.50eba678901e8792895a.bundle.js",revision:null},{url:"3475.2047f0a83096dbd794d5.chunk.js",revision:null},{url:"348.13c89c90ca2da00fea92.chunk.js",revision:null},{url:"3535.cec9b48df3500a28a5f7.bundle.js",revision:null},{url:"3659.12d9574c4810fe054f24.chunk.js",revision:null},{url:"3659.51693f3504338fc741a6.css",revision:null},{url:"3665.c0de2ad20b361381b7e0.bundle.js",revision:null},{url:"3693.686dad300480abe875c4.css",revision:null},{url:"3693.cbef755d6ebc46f79d11.chunk.js",revision:null},{url:"3806.4230f977b479d4e6e1d2.chunk.js",revision:null},{url:"3873.095247dac30ecc09c219.chunk.js",revision:null},{url:"3873.35933e248904814d5835.css",revision:null},{url:"4177.c9bb67c8a321332cf3b8.chunk.js",revision:null},{url:"4342.4ac8062b391cfc506d73.chunk.js",revision:null},{url:"4866.a9f8fda737e5bc377d0b.chunk.js",revision:null},{url:"5050.c9f1e1b9575b64a235b6.chunk.js",revision:null},{url:"5050.fa2392fa5df98008c40c.css",revision:null},{url:"5088.8e2dc30d961d40fda068.chunk.js",revision:null},{url:"5202.45e9f4d6fa174cbb19a5.chunk.js",revision:null},{url:"5297.83db1ad849b7c966d8ab.chunk.js",revision:null},{url:"535.55e1cac502c425b64d2c.chunk.js",revision:null},{url:"5357.b6b49e9ba8100bee7241.chunk.js",revision:null},{url:"552.d367370cda23dc0db4fe.chunk.js",revision:null},{url:"5666.db71d845ef2235941703.bundle.js",revision:null},{url:"5896.d025102a5ebe0ea1dd80.chunk.js",revision:null},{url:"6412.15322e4a928a0882c3ec.bundle.js",revision:null},{url:"644.534b1be8b0e4c642bf8f.chunk.js",revision:null},{url:"644.ad2eb309d05bd8c96513.css",revision:null},{url:"6453.281f03f2f4b9b5c3b479.bundle.js",revision:null},{url:"6666.b1a498d7e4bcdc54d3df.chunk.js",revision:null},{url:"6668.de1577de9f385283d954.bundle.js",revision:null},{url:"731.e50c3a65e9a00d7c2ac5.bundle.js",revision:null},{url:"755.fa8abea76e1d131b132f.bundle.js",revision:null},{url:"7620.87fbbefb81a680cd4f9c.bundle.js",revision:null},{url:"7857.7181f4c76281088a1786.bundle.js",revision:null},{url:"8328.16ffe1b497ce0d41e9ec.chunk.js",revision:null},{url:"8334.fbb9f95f9c5e1bb62bb4.chunk.js",revision:null},{url:"8334.fc3ee34289373a1788f4.css",revision:null},{url:"8511.10efca96c1ec36a9babf.bundle.js",revision:null},{url:"8895.57b9bd671e3900360521.chunk.js",revision:null},{url:"8902.5ddbc758b23b1b97a3b8.chunk.js",revision:null},{url:"908.d54e784df100eb9b34c0.chunk.js",revision:null},{url:"9185.b3ea11770790ceee457c.bundle.js",revision:null},{url:"92.9456d28b27f7a33b0205.chunk.js",revision:null},{url:"94b91632c295d27ca629.ttf?t=1645425478574",revision:null},{url:"9541.ad2a792db817f24338e2.css",revision:null},{url:"9541.db333906cef5b64b2b54.chunk.js",revision:null},{url:"9548.8c5725b2db06eb778bc4.chunk.js",revision:null},{url:"9917.84a86d0d4fc893a3e89c.chunk.js",revision:null},{url:"LICENSE",revision:"66e28c9b17ca1fc7097daa7bde70c5d1"},{url:"app.b134443acd3d52e239c3.css",revision:null},{url:"app.ce10f3437daa66ce7b04.bundle.js",revision:null},{url:"assets/data/en/chendachao.json",revision:"6dfefccc297c929034142f82d942fcc8"},{url:"assets/data/zh/chendachao.json",revision:"f21df91bddba8c7f54d2c1b52ee1e1c0"},{url:"assets/gtag.js",revision:"8968713b514b2a1b799f8a62981a61fb"},{url:"assets/hotjar.js",revision:"2194d1ae663d30edd9fa1797705367df"},{url:"assets/i18n/en.json",revision:"8a0000d12a8e85c71ddb4cfad3d9db87"},{url:"assets/i18n/zh.json",revision:"359e74593a5a02a059dc38d6a4cce576"},{url:"assets/images/base-sprites.svg",revision:"7dacb8302f356821490c62f08fb8abe9"},{url:"assets/images/bases/bell.svg",revision:"67fb07fbe8e0f6029c926bafc9fe152a"},{url:"assets/images/bases/code.svg",revision:"5a51abedd3ee62f457908829377fded9"},{url:"assets/images/bases/glitch-overlay.svg",revision:"23f18e697d0c20b1be3bdc0795094eb0"},{url:"assets/images/bases/help-1.svg",revision:"9aa4ce36aea00a36de54c43109280a99"},{url:"assets/images/bases/help-2.svg",revision:"8e71f8405df685ef6153d0259e23f6cc"},{url:"assets/images/bases/i18n.svg",revision:"1eab11671e88c8b1826b526a99f49e25"},{url:"assets/images/bases/i18n2.svg",revision:"305035bd4b4ff62d764dc229b0bf30c4"},{url:"assets/images/bases/i18n3.svg",revision:"1a95cbcc187f44cb3075ce98d5bb9eb1"},{url:"assets/images/bases/info.svg",revision:"66530ccda137bbc94e0351e7dcaf4cdf"},{url:"assets/images/bases/install.svg",revision:"c5de4912fe021bbefb235b1ff4ebb455"},{url:"assets/images/bases/map.svg",revision:"77da1f6215c9026aa34a50b0b004c3b4"},{url:"assets/images/bases/notification.svg",revision:"84a7f872d762616c4930540edf36ad52"},{url:"assets/images/bases/printer.svg",revision:"d8b4ebab24edc37efd2c2124defebca5"},{url:"assets/images/bases/qr-code.svg",revision:"20a2b408bf3ae4f1ee05d127de1190bc"},{url:"assets/images/bases/scan-qr-code.svg",revision:"e035826879dfebb4feea98c757e3cffc"},{url:"assets/images/bases/search.svg",revision:"72537407597e2f034bc76c5156394440"},{url:"assets/images/bases/share.svg",revision:"bc020b77fc8fff956bc6eccb9070be66"},{url:"assets/images/bases/signature.svg",revision:"a67ec3eef04a7879e229aeff80a73fe8"},{url:"assets/images/bases/signature.webp",revision:"79e00d83eeb858a6218ed3226a6b20a3"},{url:"assets/images/bases/star.svg",revision:"38f9693bfa851f36e8a8cfa59391c957"},{url:"assets/images/bases/wave.svg",revision:"17fc68d8d876215997283e64b76e7df7"},{url:"assets/images/bee.svg",revision:"d207c658388e7142e6ee6a4e81e034da"},{url:"assets/images/bg.jpg",revision:"0556d2531f318acf5379c679140e8c25"},{url:"assets/images/bg.webp",revision:"e3e695ac9a96d1459040e5c963de23e2"},{url:"assets/images/chendachao.png",revision:"3fd5a5184e06772aea059daa2e027f88"},{url:"assets/images/icons/android-chrome-144x144.png",revision:"b37e869d3a07f9d3a543fd4f443575fb"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"6747b6cb8cd3793cbb38d3647aa12262"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"ec8401c83d19507fa493e15257fe1ea5"},{url:"assets/images/icons/android-chrome-36x36.png",revision:"ddf5d93e942a1bbdd19c1a4d0ea2fb91"},{url:"assets/images/icons/android-chrome-384x384.png",revision:"f49a35aa2854f08f65b28d99a100dd83"},{url:"assets/images/icons/android-chrome-48x48.png",revision:"62a80031c09a6fae592da34b241335b2"},{url:"assets/images/icons/android-chrome-512x512.png",revision:"d2a90f2ee6775868baad248532a54161"},{url:"assets/images/icons/android-chrome-72x72.png",revision:"59f696a08cf9624eccc3c17389c86f25"},{url:"assets/images/icons/android-chrome-96x96.png",revision:"3f982e48e929ec42175690e914e59944"},{url:"assets/images/icons/apple-touch-icon.png",revision:"036c5754a614daffbbfc2a4696920afe"},{url:"assets/images/icons/browserconfig.xml",revision:"3565468161970fe92a1ba498b4750063"},{url:"assets/images/icons/favicon-16x16.png",revision:"5593e12a33b8d0070b74befe04dd344e"},{url:"assets/images/icons/favicon-32x32.png",revision:"5196db7ca6f7c326543703ea0b49d078"},{url:"assets/images/icons/favicon.ico",revision:"c862bf07aa647f74aed4e5d7a5627a19"},{url:"assets/images/icons/mstile-144x144.png",revision:"be6222dfbc316da3d4d3ba234bd5d28e"},{url:"assets/images/icons/mstile-150x150.png",revision:"ce57c3be520aaa68154abfd2f73d56c2"},{url:"assets/images/icons/mstile-310x150.png",revision:"87b44404b9bd4256e89b47e1cf7cd606"},{url:"assets/images/icons/mstile-310x310.png",revision:"c101f47921539b32f5a567c02578dcbe"},{url:"assets/images/icons/mstile-70x70.png",revision:"1efeaa7247e918ec3a7283205697d721"},{url:"assets/images/icons/safari-pinned-tab.svg",revision:"99efe9e1c5024c8af350a1797e9fbf95"},{url:"assets/images/larrychen.jpg",revision:"c346a4f60e2a1d51290b2f1c46d44654"},{url:"assets/images/portfolio-sprites.svg",revision:"bfeabeb84fa6e69af800e384dcb1adc2"},{url:"assets/images/portfolios/blogger.svg",revision:"cac198a8cf7599e4d5197e4492e942bc"},{url:"assets/images/portfolios/coder.svg",revision:"61e682eab951ec7e6641a1a635e0f9d0"},{url:"assets/images/portfolios/cv.svg",revision:"453aba2a9ed74bafb7a42634c64d9791"},{url:"assets/images/portfolios/dashboard.svg",revision:"e438ab045cf30b43580fa0eae9f16557"},{url:"assets/images/portfolios/dashboard2.svg",revision:"ce5df3db96dc6cef732cb1590ba1cc1c"},{url:"assets/images/portfolios/diamond.svg",revision:"00e130da057c1ffa0e16980ca9a56581"},{url:"assets/images/portfolios/diamond2.svg",revision:"ed0d829bf3264bcf53eca0599f43c5e7"},{url:"assets/images/portfolios/home.svg",revision:"03ccf8d51d759c2cde358e4a64d68999"},{url:"assets/images/portfolios/longmen.svg",revision:"c799348173d2d0364851e2052109ef66"},{url:"assets/images/portfolios/notepad.svg",revision:"134928a42627250f9b8d452ec062e7ed"},{url:"assets/images/portfolios/rss.svg",revision:"ba73e5aead58005813881b275f45cdf7"},{url:"assets/images/portfolios/throwing_a_stone.svg",revision:"f31866b76643d7fe5b5141aef41fd94f"},{url:"assets/images/portfolios/throwing_a_stone.webp",revision:"e148c90d5500f2b2c6996bbe6a7cb298"},{url:"assets/images/sample-sprites.svg",revision:"c421f1b39201e32a49737be7ce4f7b05"},{url:"assets/images/screenshots/screenshot1.jpg",revision:"f073b9e6ec08ab3512cf73c62f123dec"},{url:"assets/images/screenshots/screenshot2.jpg",revision:"76e91880920331b4d2413c764103f208"},{url:"assets/images/social-sprites.svg",revision:"ae62df22d2913e151ee124af77773ab6"},{url:"assets/images/socials/github.svg",revision:"38076b6bc9865c2a3db9ee34a508813d"},{url:"assets/images/socials/linkedin.svg",revision:"4e7320caea3a9da25c3ddc8164631c77"},{url:"assets/images/socials/outlook.svg",revision:"b2e02e55c0996b32ce56f2549b79bab4"},{url:"assets/images/socials/skype.svg",revision:"11ee8f857ed9701b1685cdc912225665"},{url:"assets/images/socials/so.svg",revision:"7b9b347c4568b5a782b2db86e87fd553"},{url:"assets/images/socials/so2.svg",revision:"e2ca410f93e649ad0e31b0f3e0ea4332"},{url:"assets/images/socials/twitter.svg",revision:"a29f0a68d3174b547ab71b6873eb898d"},{url:"assets/images/socials/wechat.svg",revision:"bce66e2724b99b8de20b751c2b42554b"},{url:"assets/images/web homepage.ico",revision:"87720af4b2f01d1b3be2489d06bbcb93"},{url:"assets/images/wechat-qr-code.jpg",revision:"2895f815b757b0f253f139c001374e91"},{url:"assets/images/wechat-qr-code.webp",revision:"ecd88392b53206883564e541279ecdcc"},{url:"assets/sw-patch.js",revision:"ef5e2c71ea1907c5b6b11599d82b730a"},{url:"c04746ade9e00b6e41a0.woff2?t=1645425478574",revision:null},{url:"cv.8f61237a24a5aff30eb7.bundle.js",revision:null},{url:"cv.e56bf0ad8240e3adc773.css",revision:null},{url:"cv.html",revision:"39be8696d117c0ae4e288310398cabed"},{url:"index.html",revision:"2a2fd88ab2d5a11be37cc277532a7789"},{url:"install.addfc063b79a9e172446.bundle.js",revision:null},{url:"log.dba274285a89889d86b4.bundle.js",revision:null},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.0a659fdf320b86bc4fee.bundle.js",revision:null},{url:"site.webmanifest",revision:"e6fe93388439bfb746fbe50b1eefd8f3"},{url:"static/a9366cb1cd42171ca23b.jpg",revision:null},{url:"static/da983ec3447223051170.svg",revision:null},{url:"static/f75ec32f80dc91b54459.svg",revision:null},{url:"stone.7684e6145edbb7055608.bundle.js",revision:null},{url:"stone.9696caf2f13058583f17.css",revision:null},{url:"stone.html",revision:"c2dd9f4c74a107e5ea3ac3dae04891f4"},{url:"svgxuse.f5bf4a90e3a544aa058b.bundle.js",revision:null},{url:"sw-offline-google-analytics.js",revision:"a382e99e7734107f650f97ae8359eb28"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/npm\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
