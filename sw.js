if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const l=e=>a(e,r),b={module:{uri:r},exports:c,require:l};s[r]=Promise.all(i.map((e=>b[e]||l(e)))).then((e=>(n(...e),c)))}}define(["./workbox-9f7faace"],(function(e){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"103.9db773ce1a96b3f0dde4.chunk.js",revision:null},{url:"1206.fb0913298ed412c3367a.bundle.js",revision:null},{url:"1446.2e6aad603a17c82523ad.bundle.js",revision:null},{url:"179f040bee397eddc4ff.woff?t=1645425478574",revision:null},{url:"1826.630caa1022a8118ac08d.chunk.js",revision:null},{url:"2171.56cd760b33e575433c24.chunk.js",revision:null},{url:"2195.a5dadb1ac268740ee5b0.bundle.js",revision:null},{url:"2229.8cc302e70b177c2c6b90.bundle.js",revision:null},{url:"2420.42566de72250be265ad1.bundle.js",revision:null},{url:"2900.7f4f3a9fe420721a030d.chunk.js",revision:null},{url:"3009.83ad4b86657b4f4bd25f.chunk.js",revision:null},{url:"3275.0022ae2d55bfc59c0c0f.bundle.js",revision:null},{url:"3475.8a62622aabffcebb1e8d.chunk.js",revision:null},{url:"348.8943edb11aaa488eba62.chunk.js",revision:null},{url:"3535.789b92034c62cf072358.bundle.js",revision:null},{url:"3659.51693f3504338fc741a6.css",revision:null},{url:"3659.8eb9c69cdd5f05f7ae47.chunk.js",revision:null},{url:"3665.2b5095b656e9273bbaa0.bundle.js",revision:null},{url:"3693.0943f76cf8c39acc62f3.chunk.js",revision:null},{url:"3693.686dad300480abe875c4.css",revision:null},{url:"3806.c09e0aef9509eb07fa2c.chunk.js",revision:null},{url:"3873.35933e248904814d5835.css",revision:null},{url:"3873.58cc79d71d09559bdd60.chunk.js",revision:null},{url:"4177.2d430003d37df9ee0c62.chunk.js",revision:null},{url:"4342.ccc751f98d7bf05e31df.chunk.js",revision:null},{url:"4866.4106d4bb1d7afd80ca4f.chunk.js",revision:null},{url:"5050.fa2392fa5df98008c40c.css",revision:null},{url:"5050.ff8c8f401918969f1c84.chunk.js",revision:null},{url:"5088.eeade2e29caf4c762c15.chunk.js",revision:null},{url:"5202.78917095cdd07d46bb57.chunk.js",revision:null},{url:"5297.450c528b75bda4ba0c7d.chunk.js",revision:null},{url:"535.5e2968aeaaec04e5c647.chunk.js",revision:null},{url:"5357.241a874e60b937b0b197.chunk.js",revision:null},{url:"552.28194cfc56b6b6fcf213.chunk.js",revision:null},{url:"5666.d4546a4e94f8184db09c.bundle.js",revision:null},{url:"5896.def22d26dd1034173377.chunk.js",revision:null},{url:"6412.56c0bccbcd98f21a646b.bundle.js",revision:null},{url:"644.4371df945d538266d435.chunk.js",revision:null},{url:"644.ad2eb309d05bd8c96513.css",revision:null},{url:"6453.e8ea7cade3cbabbf2804.bundle.js",revision:null},{url:"6666.a36f1f17b1fffa02d74b.chunk.js",revision:null},{url:"6668.ea9aa719491b2061cceb.bundle.js",revision:null},{url:"731.702e6cd3dec7c725efb4.bundle.js",revision:null},{url:"755.8b5ade9af7aa03b07b9d.bundle.js",revision:null},{url:"7620.8fa04d1e0a733d5f3e24.bundle.js",revision:null},{url:"7857.9ee91fcc534d77b857b4.bundle.js",revision:null},{url:"8328.cca88022d0a3927c2530.chunk.js",revision:null},{url:"8334.b8a53de2d2baaf33a87f.chunk.js",revision:null},{url:"8334.fc3ee34289373a1788f4.css",revision:null},{url:"8511.e4a12be11d9bd40ff1a0.bundle.js",revision:null},{url:"8895.47a35865b542981e0305.chunk.js",revision:null},{url:"8902.d18dd402151e5eed8c13.chunk.js",revision:null},{url:"908.658ba8b5b54b44a8a3ed.chunk.js",revision:null},{url:"9185.446ac811a25eb50a4058.bundle.js",revision:null},{url:"92.9066231522756807b51c.chunk.js",revision:null},{url:"94b91632c295d27ca629.ttf?t=1645425478574",revision:null},{url:"9541.ad2a792db817f24338e2.css",revision:null},{url:"9541.ccdb4bd5bc6a8b213137.chunk.js",revision:null},{url:"9548.b387660b16d45d386298.chunk.js",revision:null},{url:"9917.012711c1148b7798b5ef.chunk.js",revision:null},{url:"LICENSE",revision:"66e28c9b17ca1fc7097daa7bde70c5d1"},{url:"app.4dd3bc2fd5726403810c.bundle.js",revision:null},{url:"app.836f5ed1c701992a9604.css",revision:null},{url:"assets/data/en/chendachao.json",revision:"6dfefccc297c929034142f82d942fcc8"},{url:"assets/data/zh/chendachao.json",revision:"f21df91bddba8c7f54d2c1b52ee1e1c0"},{url:"assets/gtag.js",revision:"8968713b514b2a1b799f8a62981a61fb"},{url:"assets/hotjar.js",revision:"22e8ac6dce6fbf1355727eccdce8ab1d"},{url:"assets/i18n/en.json",revision:"8a0000d12a8e85c71ddb4cfad3d9db87"},{url:"assets/i18n/zh.json",revision:"359e74593a5a02a059dc38d6a4cce576"},{url:"assets/images/base-sprites.svg",revision:"7dacb8302f356821490c62f08fb8abe9"},{url:"assets/images/bases/bell.svg",revision:"67fb07fbe8e0f6029c926bafc9fe152a"},{url:"assets/images/bases/code.svg",revision:"5a51abedd3ee62f457908829377fded9"},{url:"assets/images/bases/glitch-overlay.svg",revision:"23f18e697d0c20b1be3bdc0795094eb0"},{url:"assets/images/bases/help-1.svg",revision:"9aa4ce36aea00a36de54c43109280a99"},{url:"assets/images/bases/help-2.svg",revision:"8e71f8405df685ef6153d0259e23f6cc"},{url:"assets/images/bases/i18n.svg",revision:"1eab11671e88c8b1826b526a99f49e25"},{url:"assets/images/bases/i18n2.svg",revision:"305035bd4b4ff62d764dc229b0bf30c4"},{url:"assets/images/bases/i18n3.svg",revision:"1a95cbcc187f44cb3075ce98d5bb9eb1"},{url:"assets/images/bases/info.svg",revision:"66530ccda137bbc94e0351e7dcaf4cdf"},{url:"assets/images/bases/install.svg",revision:"c5de4912fe021bbefb235b1ff4ebb455"},{url:"assets/images/bases/map.svg",revision:"77da1f6215c9026aa34a50b0b004c3b4"},{url:"assets/images/bases/notification.svg",revision:"84a7f872d762616c4930540edf36ad52"},{url:"assets/images/bases/printer.svg",revision:"d8b4ebab24edc37efd2c2124defebca5"},{url:"assets/images/bases/qr-code.svg",revision:"20a2b408bf3ae4f1ee05d127de1190bc"},{url:"assets/images/bases/scan-qr-code.svg",revision:"e035826879dfebb4feea98c757e3cffc"},{url:"assets/images/bases/search.svg",revision:"72537407597e2f034bc76c5156394440"},{url:"assets/images/bases/share.svg",revision:"bc020b77fc8fff956bc6eccb9070be66"},{url:"assets/images/bases/signature.svg",revision:"a67ec3eef04a7879e229aeff80a73fe8"},{url:"assets/images/bases/signature.webp",revision:"79e00d83eeb858a6218ed3226a6b20a3"},{url:"assets/images/bases/star.svg",revision:"38f9693bfa851f36e8a8cfa59391c957"},{url:"assets/images/bases/wave.svg",revision:"17fc68d8d876215997283e64b76e7df7"},{url:"assets/images/bee.svg",revision:"d207c658388e7142e6ee6a4e81e034da"},{url:"assets/images/bg.jpg",revision:"0556d2531f318acf5379c679140e8c25"},{url:"assets/images/bg.webp",revision:"e3e695ac9a96d1459040e5c963de23e2"},{url:"assets/images/chendachao.png",revision:"3fd5a5184e06772aea059daa2e027f88"},{url:"assets/images/icons/android-chrome-144x144.png",revision:"b37e869d3a07f9d3a543fd4f443575fb"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"6747b6cb8cd3793cbb38d3647aa12262"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"ec8401c83d19507fa493e15257fe1ea5"},{url:"assets/images/icons/android-chrome-36x36.png",revision:"ddf5d93e942a1bbdd19c1a4d0ea2fb91"},{url:"assets/images/icons/android-chrome-384x384.png",revision:"f49a35aa2854f08f65b28d99a100dd83"},{url:"assets/images/icons/android-chrome-48x48.png",revision:"62a80031c09a6fae592da34b241335b2"},{url:"assets/images/icons/android-chrome-512x512.png",revision:"d2a90f2ee6775868baad248532a54161"},{url:"assets/images/icons/android-chrome-72x72.png",revision:"59f696a08cf9624eccc3c17389c86f25"},{url:"assets/images/icons/android-chrome-96x96.png",revision:"3f982e48e929ec42175690e914e59944"},{url:"assets/images/icons/apple-touch-icon.png",revision:"036c5754a614daffbbfc2a4696920afe"},{url:"assets/images/icons/browserconfig.xml",revision:"3565468161970fe92a1ba498b4750063"},{url:"assets/images/icons/favicon-16x16.png",revision:"5593e12a33b8d0070b74befe04dd344e"},{url:"assets/images/icons/favicon-32x32.png",revision:"5196db7ca6f7c326543703ea0b49d078"},{url:"assets/images/icons/favicon.ico",revision:"c862bf07aa647f74aed4e5d7a5627a19"},{url:"assets/images/icons/mstile-144x144.png",revision:"be6222dfbc316da3d4d3ba234bd5d28e"},{url:"assets/images/icons/mstile-150x150.png",revision:"ce57c3be520aaa68154abfd2f73d56c2"},{url:"assets/images/icons/mstile-310x150.png",revision:"87b44404b9bd4256e89b47e1cf7cd606"},{url:"assets/images/icons/mstile-310x310.png",revision:"c101f47921539b32f5a567c02578dcbe"},{url:"assets/images/icons/mstile-70x70.png",revision:"1efeaa7247e918ec3a7283205697d721"},{url:"assets/images/icons/safari-pinned-tab.svg",revision:"99efe9e1c5024c8af350a1797e9fbf95"},{url:"assets/images/larrychen.jpg",revision:"c346a4f60e2a1d51290b2f1c46d44654"},{url:"assets/images/portfolio-sprites.svg",revision:"bfeabeb84fa6e69af800e384dcb1adc2"},{url:"assets/images/portfolios/blogger.svg",revision:"cac198a8cf7599e4d5197e4492e942bc"},{url:"assets/images/portfolios/coder.svg",revision:"61e682eab951ec7e6641a1a635e0f9d0"},{url:"assets/images/portfolios/cv.svg",revision:"453aba2a9ed74bafb7a42634c64d9791"},{url:"assets/images/portfolios/dashboard.svg",revision:"e438ab045cf30b43580fa0eae9f16557"},{url:"assets/images/portfolios/dashboard2.svg",revision:"ce5df3db96dc6cef732cb1590ba1cc1c"},{url:"assets/images/portfolios/diamond.svg",revision:"00e130da057c1ffa0e16980ca9a56581"},{url:"assets/images/portfolios/diamond2.svg",revision:"ed0d829bf3264bcf53eca0599f43c5e7"},{url:"assets/images/portfolios/home.svg",revision:"03ccf8d51d759c2cde358e4a64d68999"},{url:"assets/images/portfolios/longmen.svg",revision:"c799348173d2d0364851e2052109ef66"},{url:"assets/images/portfolios/notepad.svg",revision:"134928a42627250f9b8d452ec062e7ed"},{url:"assets/images/portfolios/rss.svg",revision:"ba73e5aead58005813881b275f45cdf7"},{url:"assets/images/portfolios/throwing_a_stone.svg",revision:"f31866b76643d7fe5b5141aef41fd94f"},{url:"assets/images/portfolios/throwing_a_stone.webp",revision:"e148c90d5500f2b2c6996bbe6a7cb298"},{url:"assets/images/sample-sprites.svg",revision:"c421f1b39201e32a49737be7ce4f7b05"},{url:"assets/images/screenshots/screenshot1.jpg",revision:"f073b9e6ec08ab3512cf73c62f123dec"},{url:"assets/images/screenshots/screenshot2.jpg",revision:"76e91880920331b4d2413c764103f208"},{url:"assets/images/social-sprites.svg",revision:"ae62df22d2913e151ee124af77773ab6"},{url:"assets/images/socials/github.svg",revision:"38076b6bc9865c2a3db9ee34a508813d"},{url:"assets/images/socials/linkedin.svg",revision:"4e7320caea3a9da25c3ddc8164631c77"},{url:"assets/images/socials/outlook.svg",revision:"b2e02e55c0996b32ce56f2549b79bab4"},{url:"assets/images/socials/skype.svg",revision:"11ee8f857ed9701b1685cdc912225665"},{url:"assets/images/socials/so.svg",revision:"7b9b347c4568b5a782b2db86e87fd553"},{url:"assets/images/socials/so2.svg",revision:"e2ca410f93e649ad0e31b0f3e0ea4332"},{url:"assets/images/socials/twitter.svg",revision:"a29f0a68d3174b547ab71b6873eb898d"},{url:"assets/images/socials/wechat.svg",revision:"bce66e2724b99b8de20b751c2b42554b"},{url:"assets/images/web homepage.ico",revision:"87720af4b2f01d1b3be2489d06bbcb93"},{url:"assets/images/wechat-qr-code.jpg",revision:"2895f815b757b0f253f139c001374e91"},{url:"assets/images/wechat-qr-code.webp",revision:"ecd88392b53206883564e541279ecdcc"},{url:"assets/sw-patch.js",revision:"ef5e2c71ea1907c5b6b11599d82b730a"},{url:"c04746ade9e00b6e41a0.woff2?t=1645425478574",revision:null},{url:"cv.e29d8d83aa644be132f1.bundle.js",revision:null},{url:"cv.e56bf0ad8240e3adc773.css",revision:null},{url:"cv.html",revision:"c4389e134e0963c38754ef9c1706812d"},{url:"index.html",revision:"60c9d9f4157ff2ca764c5b1036818440"},{url:"install.98721cde06afb35cb4d1.bundle.js",revision:null},{url:"log.4c356cfafd88e359f7d5.bundle.js",revision:null},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.d86b77eec605d72e0782.bundle.js",revision:null},{url:"site.webmanifest",revision:"e6fe93388439bfb746fbe50b1eefd8f3"},{url:"static/a9366cb1cd42171ca23b.jpg",revision:null},{url:"static/da983ec3447223051170.svg",revision:null},{url:"static/f75ec32f80dc91b54459.svg",revision:null},{url:"stone.9696caf2f13058583f17.css",revision:null},{url:"stone.dbe5db1be6fee25b8e30.bundle.js",revision:null},{url:"stone.html",revision:"aeccdbea423fe2e15339e4d1fbc010db"},{url:"svgxuse.b2ab845f6dc0b691369f.bundle.js",revision:null},{url:"sw-offline-google-analytics.js",revision:"a382e99e7734107f650f97ae8359eb28"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/npm\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
