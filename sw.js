if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let c={};const l=s=>a(s,r),o={module:{uri:r},exports:c,require:l};e[r]=Promise.all(i.map((s=>o[s]||l(s)))).then((s=>(n(...s),c)))}}define(["./workbox-9f7faace"],(function(s){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"103.a22283c69a279cf45442.chunk.js",revision:null},{url:"1206.8f36c1983273760be344.bundle.js",revision:null},{url:"1446.9eb533717f8fa24761aa.bundle.js",revision:null},{url:"179f040bee397eddc4ff.woff?t=1645425478574",revision:null},{url:"1826.2aaae081358d04fbc43a.chunk.js",revision:null},{url:"2171.c5fab26c128bcd833308.chunk.js",revision:null},{url:"2195.62a1c615d699d6d214fe.bundle.js",revision:null},{url:"2229.584547c3107f9e9af104.bundle.js",revision:null},{url:"2420.96132ee8b3e2dbb5c7fe.bundle.js",revision:null},{url:"2900.5689bcc67a66a65ee6f3.chunk.js",revision:null},{url:"3009.a01b917de75abe4b6c6c.chunk.js",revision:null},{url:"3275.b6586fdb0a1517b3201f.bundle.js",revision:null},{url:"3475.3df47ed1cad4e87ec5f6.chunk.js",revision:null},{url:"348.8cc434e1e9d43405588e.chunk.js",revision:null},{url:"3535.7ac11ac15197ae6a9a27.bundle.js",revision:null},{url:"3659.51693f3504338fc741a6.css",revision:null},{url:"3659.715004b10cccfb464960.chunk.js",revision:null},{url:"3665.cc91bb8280f1fd84d06a.bundle.js",revision:null},{url:"3693.686dad300480abe875c4.css",revision:null},{url:"3693.691549710a1eff6e3776.chunk.js",revision:null},{url:"3806.0d48e3a91e5678791e64.chunk.js",revision:null},{url:"3873.35933e248904814d5835.css",revision:null},{url:"3873.a5145b615334a4154652.chunk.js",revision:null},{url:"4177.a106ebf1a7151baef3b9.chunk.js",revision:null},{url:"4342.4016bcfd57f795d41435.chunk.js",revision:null},{url:"4866.ca89c51877742393a4c1.chunk.js",revision:null},{url:"5050.a68cbe28365597de63a0.chunk.js",revision:null},{url:"5050.fa2392fa5df98008c40c.css",revision:null},{url:"5088.694f3193ae8f32ac42aa.chunk.js",revision:null},{url:"5202.ef468341a973dcff605c.chunk.js",revision:null},{url:"5297.da48d59be9bb64a9c613.chunk.js",revision:null},{url:"535.3d24b4266403fd80794c.chunk.js",revision:null},{url:"5357.174a7677a3e3a3e1dc63.chunk.js",revision:null},{url:"552.4ce2a08201b0d4f369e4.chunk.js",revision:null},{url:"5666.87b9c02878763d765c27.bundle.js",revision:null},{url:"5896.ae5a768c594686c5c8b1.chunk.js",revision:null},{url:"6412.f4a50f6d7ca4ca2e68fc.bundle.js",revision:null},{url:"644.ad2eb309d05bd8c96513.css",revision:null},{url:"644.d19b1cb0a7a6b354d594.chunk.js",revision:null},{url:"6453.a684b4a5e3ed6628613b.bundle.js",revision:null},{url:"6666.f62f4d61a835be37cefd.chunk.js",revision:null},{url:"6668.c7ddb1644df9c727cbfe.bundle.js",revision:null},{url:"731.a66e8921d8f34556386b.bundle.js",revision:null},{url:"755.4a97498666f24171b0be.bundle.js",revision:null},{url:"7620.6a6274aa12832d7db7cc.bundle.js",revision:null},{url:"7857.7825b51f159202673db9.bundle.js",revision:null},{url:"8328.b3a4d97ef37e919f39c5.chunk.js",revision:null},{url:"8334.87c77e9e1f9ab390372b.chunk.js",revision:null},{url:"8334.fc3ee34289373a1788f4.css",revision:null},{url:"8511.44c26a93d253ec82db00.bundle.js",revision:null},{url:"8895.bd69ce18176ed79b6deb.chunk.js",revision:null},{url:"8902.7c176c2fba6c7d81ce5e.chunk.js",revision:null},{url:"908.9a5176ad29899906c6f3.chunk.js",revision:null},{url:"9185.94d4dfd46c74bda6e2dc.bundle.js",revision:null},{url:"92.8651bf3b64689907234b.chunk.js",revision:null},{url:"94b91632c295d27ca629.ttf?t=1645425478574",revision:null},{url:"9541.2e70b7bc074cd58f715f.chunk.js",revision:null},{url:"9541.ad2a792db817f24338e2.css",revision:null},{url:"9548.d341c6c0cbe020316752.chunk.js",revision:null},{url:"9917.0f0f6cf9682174803757.chunk.js",revision:null},{url:"LICENSE",revision:"66e28c9b17ca1fc7097daa7bde70c5d1"},{url:"app.7d6fd5e7ef23f50840ab.bundle.js",revision:null},{url:"app.b134443acd3d52e239c3.css",revision:null},{url:"assets/data/en/chendachao.json",revision:"6dfefccc297c929034142f82d942fcc8"},{url:"assets/data/zh/chendachao.json",revision:"f21df91bddba8c7f54d2c1b52ee1e1c0"},{url:"assets/gtag.js",revision:"8968713b514b2a1b799f8a62981a61fb"},{url:"assets/hotjar.js",revision:"2194d1ae663d30edd9fa1797705367df"},{url:"assets/i18n/en.json",revision:"8a0000d12a8e85c71ddb4cfad3d9db87"},{url:"assets/i18n/zh.json",revision:"359e74593a5a02a059dc38d6a4cce576"},{url:"assets/images/base-sprites.svg",revision:"7dacb8302f356821490c62f08fb8abe9"},{url:"assets/images/bases/bell.svg",revision:"67fb07fbe8e0f6029c926bafc9fe152a"},{url:"assets/images/bases/code.svg",revision:"5a51abedd3ee62f457908829377fded9"},{url:"assets/images/bases/glitch-overlay.svg",revision:"23f18e697d0c20b1be3bdc0795094eb0"},{url:"assets/images/bases/help-1.svg",revision:"9aa4ce36aea00a36de54c43109280a99"},{url:"assets/images/bases/help-2.svg",revision:"8e71f8405df685ef6153d0259e23f6cc"},{url:"assets/images/bases/i18n.svg",revision:"1eab11671e88c8b1826b526a99f49e25"},{url:"assets/images/bases/i18n2.svg",revision:"305035bd4b4ff62d764dc229b0bf30c4"},{url:"assets/images/bases/i18n3.svg",revision:"1a95cbcc187f44cb3075ce98d5bb9eb1"},{url:"assets/images/bases/info.svg",revision:"66530ccda137bbc94e0351e7dcaf4cdf"},{url:"assets/images/bases/install.svg",revision:"c5de4912fe021bbefb235b1ff4ebb455"},{url:"assets/images/bases/map.svg",revision:"77da1f6215c9026aa34a50b0b004c3b4"},{url:"assets/images/bases/notification.svg",revision:"84a7f872d762616c4930540edf36ad52"},{url:"assets/images/bases/printer.svg",revision:"d8b4ebab24edc37efd2c2124defebca5"},{url:"assets/images/bases/qr-code.svg",revision:"20a2b408bf3ae4f1ee05d127de1190bc"},{url:"assets/images/bases/scan-qr-code.svg",revision:"e035826879dfebb4feea98c757e3cffc"},{url:"assets/images/bases/search.svg",revision:"72537407597e2f034bc76c5156394440"},{url:"assets/images/bases/share.svg",revision:"bc020b77fc8fff956bc6eccb9070be66"},{url:"assets/images/bases/signature.svg",revision:"a67ec3eef04a7879e229aeff80a73fe8"},{url:"assets/images/bases/signature.webp",revision:"79e00d83eeb858a6218ed3226a6b20a3"},{url:"assets/images/bases/star.svg",revision:"38f9693bfa851f36e8a8cfa59391c957"},{url:"assets/images/bases/wave.svg",revision:"17fc68d8d876215997283e64b76e7df7"},{url:"assets/images/bee.svg",revision:"d207c658388e7142e6ee6a4e81e034da"},{url:"assets/images/bg.jpg",revision:"0556d2531f318acf5379c679140e8c25"},{url:"assets/images/bg.webp",revision:"e3e695ac9a96d1459040e5c963de23e2"},{url:"assets/images/chendachao.png",revision:"3fd5a5184e06772aea059daa2e027f88"},{url:"assets/images/icons/android-chrome-144x144.png",revision:"b37e869d3a07f9d3a543fd4f443575fb"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"6747b6cb8cd3793cbb38d3647aa12262"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"ec8401c83d19507fa493e15257fe1ea5"},{url:"assets/images/icons/android-chrome-36x36.png",revision:"ddf5d93e942a1bbdd19c1a4d0ea2fb91"},{url:"assets/images/icons/android-chrome-384x384.png",revision:"f49a35aa2854f08f65b28d99a100dd83"},{url:"assets/images/icons/android-chrome-48x48.png",revision:"62a80031c09a6fae592da34b241335b2"},{url:"assets/images/icons/android-chrome-512x512.png",revision:"d2a90f2ee6775868baad248532a54161"},{url:"assets/images/icons/android-chrome-72x72.png",revision:"59f696a08cf9624eccc3c17389c86f25"},{url:"assets/images/icons/android-chrome-96x96.png",revision:"3f982e48e929ec42175690e914e59944"},{url:"assets/images/icons/apple-touch-icon.png",revision:"036c5754a614daffbbfc2a4696920afe"},{url:"assets/images/icons/browserconfig.xml",revision:"3565468161970fe92a1ba498b4750063"},{url:"assets/images/icons/favicon-16x16.png",revision:"5593e12a33b8d0070b74befe04dd344e"},{url:"assets/images/icons/favicon-32x32.png",revision:"5196db7ca6f7c326543703ea0b49d078"},{url:"assets/images/icons/favicon.ico",revision:"c862bf07aa647f74aed4e5d7a5627a19"},{url:"assets/images/icons/mstile-144x144.png",revision:"be6222dfbc316da3d4d3ba234bd5d28e"},{url:"assets/images/icons/mstile-150x150.png",revision:"ce57c3be520aaa68154abfd2f73d56c2"},{url:"assets/images/icons/mstile-310x150.png",revision:"87b44404b9bd4256e89b47e1cf7cd606"},{url:"assets/images/icons/mstile-310x310.png",revision:"c101f47921539b32f5a567c02578dcbe"},{url:"assets/images/icons/mstile-70x70.png",revision:"1efeaa7247e918ec3a7283205697d721"},{url:"assets/images/icons/safari-pinned-tab.svg",revision:"99efe9e1c5024c8af350a1797e9fbf95"},{url:"assets/images/larrychen.jpg",revision:"c346a4f60e2a1d51290b2f1c46d44654"},{url:"assets/images/portfolio-sprites.svg",revision:"bfeabeb84fa6e69af800e384dcb1adc2"},{url:"assets/images/portfolios/blogger.svg",revision:"cac198a8cf7599e4d5197e4492e942bc"},{url:"assets/images/portfolios/coder.svg",revision:"61e682eab951ec7e6641a1a635e0f9d0"},{url:"assets/images/portfolios/cv.svg",revision:"453aba2a9ed74bafb7a42634c64d9791"},{url:"assets/images/portfolios/dashboard.svg",revision:"e438ab045cf30b43580fa0eae9f16557"},{url:"assets/images/portfolios/dashboard2.svg",revision:"ce5df3db96dc6cef732cb1590ba1cc1c"},{url:"assets/images/portfolios/diamond.svg",revision:"00e130da057c1ffa0e16980ca9a56581"},{url:"assets/images/portfolios/diamond2.svg",revision:"ed0d829bf3264bcf53eca0599f43c5e7"},{url:"assets/images/portfolios/home.svg",revision:"03ccf8d51d759c2cde358e4a64d68999"},{url:"assets/images/portfolios/longmen.svg",revision:"c799348173d2d0364851e2052109ef66"},{url:"assets/images/portfolios/notepad.svg",revision:"134928a42627250f9b8d452ec062e7ed"},{url:"assets/images/portfolios/rss.svg",revision:"ba73e5aead58005813881b275f45cdf7"},{url:"assets/images/portfolios/throwing_a_stone.svg",revision:"f31866b76643d7fe5b5141aef41fd94f"},{url:"assets/images/portfolios/throwing_a_stone.webp",revision:"e148c90d5500f2b2c6996bbe6a7cb298"},{url:"assets/images/sample-sprites.svg",revision:"c421f1b39201e32a49737be7ce4f7b05"},{url:"assets/images/screenshots/screenshot1.jpg",revision:"f073b9e6ec08ab3512cf73c62f123dec"},{url:"assets/images/screenshots/screenshot2.jpg",revision:"76e91880920331b4d2413c764103f208"},{url:"assets/images/social-sprites.svg",revision:"ae62df22d2913e151ee124af77773ab6"},{url:"assets/images/socials/github.svg",revision:"38076b6bc9865c2a3db9ee34a508813d"},{url:"assets/images/socials/linkedin.svg",revision:"4e7320caea3a9da25c3ddc8164631c77"},{url:"assets/images/socials/outlook.svg",revision:"b2e02e55c0996b32ce56f2549b79bab4"},{url:"assets/images/socials/skype.svg",revision:"11ee8f857ed9701b1685cdc912225665"},{url:"assets/images/socials/so.svg",revision:"7b9b347c4568b5a782b2db86e87fd553"},{url:"assets/images/socials/so2.svg",revision:"e2ca410f93e649ad0e31b0f3e0ea4332"},{url:"assets/images/socials/twitter.svg",revision:"a29f0a68d3174b547ab71b6873eb898d"},{url:"assets/images/socials/wechat.svg",revision:"bce66e2724b99b8de20b751c2b42554b"},{url:"assets/images/web homepage.ico",revision:"87720af4b2f01d1b3be2489d06bbcb93"},{url:"assets/images/wechat-qr-code.jpg",revision:"2895f815b757b0f253f139c001374e91"},{url:"assets/images/wechat-qr-code.webp",revision:"ecd88392b53206883564e541279ecdcc"},{url:"assets/sw-patch.js",revision:"ef5e2c71ea1907c5b6b11599d82b730a"},{url:"c04746ade9e00b6e41a0.woff2?t=1645425478574",revision:null},{url:"cv.a4f36d74f32125979f07.bundle.js",revision:null},{url:"cv.e56bf0ad8240e3adc773.css",revision:null},{url:"cv.html",revision:"12c8a56ac16effdc89a660a8baa695e5"},{url:"index.html",revision:"9e7d90fbd6bf77cd497d1c1445b8de7b"},{url:"install.ccdc28490362244134fb.bundle.js",revision:null},{url:"log.607f904222683549c01c.bundle.js",revision:null},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.d39d37f652468d0b1c2e.bundle.js",revision:null},{url:"site.webmanifest",revision:"e6fe93388439bfb746fbe50b1eefd8f3"},{url:"static/a9366cb1cd42171ca23b.jpg",revision:null},{url:"static/da983ec3447223051170.svg",revision:null},{url:"static/f75ec32f80dc91b54459.svg",revision:null},{url:"stone.9696caf2f13058583f17.css",revision:null},{url:"stone.d55b9fead8d38156bfe2.bundle.js",revision:null},{url:"stone.html",revision:"b2cb6593fdbcd8a87af72e8f38e6c54d"},{url:"svgxuse.bb40507a10f563d58d5d.bundle.js",revision:null},{url:"sw-offline-google-analytics.js",revision:"a382e99e7734107f650f97ae8359eb28"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(/^\/api\//,new s.StaleWhileRevalidate,"GET"),s.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/npm\//,new s.StaleWhileRevalidate,"GET"),s.registerRoute(/\.(?:js|css)$/,new s.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),s.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new s.CacheFirst({cacheName:"images",plugins:[new s.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),s.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
