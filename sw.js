var d=(e,o,i)=>new Promise((s,n)=>{var r=a=>{try{l(i.next(a))}catch(b){n(b)}},c=a=>{try{l(i.throw(a))}catch(b){n(b)}},l=a=>a.done?s(a.value):Promise.resolve(a.value).then(r,c);l((i=i.apply(e,o)).next())});if(!self.define){const e=s=>{s!=="require"&&(s+=".js");let n=Promise.resolve();return i[s]||(n=new Promise(r=>d(this,null,function*(){if("document"in self){const c=document.createElement("script");c.src=s,document.head.appendChild(c),c.onload=r}else importScripts(s),r()}))),n.then(()=>{if(!i[s])throw new Error(`Module ${s} didn\u2019t register its module`);return i[s]})},o=(s,n)=>{Promise.all(s.map(e)).then(r=>n(r.length===1?r[0]:r))},i={require:Promise.resolve(o)};self.define=(s,n,r)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let c={};const l={uri:location.origin+s.slice(1)};return Promise.all(n.map(a=>{switch(a){case"exports":return c;case"module":return l;default:return e(a)}})).then(a=>{const b=r(...a);return c.default||(c.default=b),c})}))}}define("./sw.js",["./workbox-7c7a397b"],function(e){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",o=>{o.data&&o.data.type==="SKIP_WAITING"&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"141.a4581f3a52894773cbe3.chunk.js",revision:null},{url:"175.005e87b9a90904aff149.css",revision:null},{url:"175.94b97e2d56786f6f1e35.chunk.js",revision:null},{url:"203.7c837213701e3281ad1e.chunk.js",revision:null},{url:"284.2f3f022581e408e18e4d.css",revision:null},{url:"284.58e2e81d3010d9633f7d.chunk.js",revision:null},{url:"342.edb87acaf61958b52af6.chunk.js",revision:null},{url:"513.160e375cfa0ebb065e44.chunk.js",revision:null},{url:"552.578601bd4bfc45bba306.bundle.js",revision:null},{url:"573.520f6a1f6eb69c1e084a.chunk.js",revision:null},{url:"644.69ffb5e1ed6fe2cf8980.chunk.js",revision:null},{url:"644.db7e980253bf410b86ab.css",revision:null},{url:"659.31d6cfe0d16ae931b73c.css",revision:null},{url:"659.3c61b9143b0c469ef46b.chunk.js",revision:null},{url:"678.934d3dc8121d29cce299.chunk.js",revision:null},{url:"738.6548f16ab49579fecfb8.chunk.js",revision:null},{url:"784.1170638d0368824188e4.chunk.js",revision:null},{url:"784.48d2f5ade54227d93c79.css",revision:null},{url:"806.e1ef26224f89ead26ab3.bundle.js",revision:null},{url:"873.341ce1c77184be0090ad.css",revision:null},{url:"873.ee2787b6d28bca7248fa.chunk.js",revision:null},{url:"90.ee1a0f5485553603284a.chunk.js",revision:null},{url:"LICENSE",revision:"66e28c9b17ca1fc7097daa7bde70c5d1"},{url:"app.0500235d01a17ce9ca92.css",revision:null},{url:"app.fdba141563bff0293cb7.bundle.js",revision:null},{url:"assets/data/en/chendachao.json",revision:"138c34b69892fed1311dda38f279eee8"},{url:"assets/data/zh/chendachao.json",revision:"9419c5ce6c9883eaa8df4cf368010039"},{url:"assets/gtag.js",revision:"041c165bb2df1e24a60149af2b26f28c"},{url:"assets/hotjar.js",revision:"75d1484bdae4a3c2c4c573772aed9353"},{url:"assets/i18n/en.json",revision:"951f521be64729f9e3e4c828106b62c5"},{url:"assets/i18n/zh.json",revision:"4b76c4a3cd6b85b85c796cfddd1656a1"},{url:"assets/images/base-symbol-defs.svg",revision:"40490e408993844c0ce9f58332b7f5f6"},{url:"assets/images/bases/bell.svg",revision:"67fb07fbe8e0f6029c926bafc9fe152a"},{url:"assets/images/bases/code.svg",revision:"5a51abedd3ee62f457908829377fded9"},{url:"assets/images/bases/help-1.svg",revision:"9aa4ce36aea00a36de54c43109280a99"},{url:"assets/images/bases/help-2.svg",revision:"8e71f8405df685ef6153d0259e23f6cc"},{url:"assets/images/bases/i18n.svg",revision:"1eab11671e88c8b1826b526a99f49e25"},{url:"assets/images/bases/i18n2.svg",revision:"305035bd4b4ff62d764dc229b0bf30c4"},{url:"assets/images/bases/i18n3.svg",revision:"1a95cbcc187f44cb3075ce98d5bb9eb1"},{url:"assets/images/bases/info.svg",revision:"66530ccda137bbc94e0351e7dcaf4cdf"},{url:"assets/images/bases/install.svg",revision:"c5de4912fe021bbefb235b1ff4ebb455"},{url:"assets/images/bases/map.svg",revision:"77da1f6215c9026aa34a50b0b004c3b4"},{url:"assets/images/bases/notification.svg",revision:"84a7f872d762616c4930540edf36ad52"},{url:"assets/images/bases/printer.svg",revision:"d8b4ebab24edc37efd2c2124defebca5"},{url:"assets/images/bases/qr-code.svg",revision:"20a2b408bf3ae4f1ee05d127de1190bc"},{url:"assets/images/bases/scan-qr-code.svg",revision:"e035826879dfebb4feea98c757e3cffc"},{url:"assets/images/bases/search.svg",revision:"72537407597e2f034bc76c5156394440"},{url:"assets/images/bases/share.svg",revision:"bc020b77fc8fff956bc6eccb9070be66"},{url:"assets/images/bases/signature.svg",revision:"a67ec3eef04a7879e229aeff80a73fe8"},{url:"assets/images/bases/signature.webp",revision:"79e00d83eeb858a6218ed3226a6b20a3"},{url:"assets/images/bases/star.svg",revision:"38f9693bfa851f36e8a8cfa59391c957"},{url:"assets/images/bee.svg",revision:"d207c658388e7142e6ee6a4e81e034da"},{url:"assets/images/bg.jpg",revision:"0556d2531f318acf5379c679140e8c25"},{url:"assets/images/bg.webp",revision:"e3e695ac9a96d1459040e5c963de23e2"},{url:"assets/images/chendachao.github.io.jpg",revision:"7b458e0a68e3ae042c0b57593b9e0c3c"},{url:"assets/images/icons/android-chrome-144x144.png",revision:"b37e869d3a07f9d3a543fd4f443575fb"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"6747b6cb8cd3793cbb38d3647aa12262"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"ec8401c83d19507fa493e15257fe1ea5"},{url:"assets/images/icons/android-chrome-36x36.png",revision:"ddf5d93e942a1bbdd19c1a4d0ea2fb91"},{url:"assets/images/icons/android-chrome-384x384.png",revision:"f49a35aa2854f08f65b28d99a100dd83"},{url:"assets/images/icons/android-chrome-48x48.png",revision:"62a80031c09a6fae592da34b241335b2"},{url:"assets/images/icons/android-chrome-512x512.png",revision:"d2a90f2ee6775868baad248532a54161"},{url:"assets/images/icons/android-chrome-72x72.png",revision:"59f696a08cf9624eccc3c17389c86f25"},{url:"assets/images/icons/android-chrome-96x96.png",revision:"3f982e48e929ec42175690e914e59944"},{url:"assets/images/icons/apple-touch-icon.png",revision:"036c5754a614daffbbfc2a4696920afe"},{url:"assets/images/icons/browserconfig.xml",revision:"a5c08279212abad6ad81ab4aa01d1448"},{url:"assets/images/icons/favicon-16x16.png",revision:"5593e12a33b8d0070b74befe04dd344e"},{url:"assets/images/icons/favicon-32x32.png",revision:"5196db7ca6f7c326543703ea0b49d078"},{url:"assets/images/icons/favicon.ico",revision:"c862bf07aa647f74aed4e5d7a5627a19"},{url:"assets/images/icons/mstile-144x144.png",revision:"be6222dfbc316da3d4d3ba234bd5d28e"},{url:"assets/images/icons/mstile-150x150.png",revision:"ce57c3be520aaa68154abfd2f73d56c2"},{url:"assets/images/icons/mstile-310x150.png",revision:"87b44404b9bd4256e89b47e1cf7cd606"},{url:"assets/images/icons/mstile-310x310.png",revision:"c101f47921539b32f5a567c02578dcbe"},{url:"assets/images/icons/mstile-70x70.png",revision:"1efeaa7247e918ec3a7283205697d721"},{url:"assets/images/icons/safari-pinned-tab.svg",revision:"99efe9e1c5024c8af350a1797e9fbf95"},{url:"assets/images/larrychen.jpg",revision:"fb6b57ee560a1a854358fe6d7c57445d"},{url:"assets/images/portfolio-symbol-defs.svg",revision:"cefde6fa1fb300438d50da3fecf3e177"},{url:"assets/images/portfolios/blogger.svg",revision:"cac198a8cf7599e4d5197e4492e942bc"},{url:"assets/images/portfolios/coder.svg",revision:"61e682eab951ec7e6641a1a635e0f9d0"},{url:"assets/images/portfolios/cv.svg",revision:"453aba2a9ed74bafb7a42634c64d9791"},{url:"assets/images/portfolios/dashboard.svg",revision:"e438ab045cf30b43580fa0eae9f16557"},{url:"assets/images/portfolios/dashboard2.svg",revision:"ce5df3db96dc6cef732cb1590ba1cc1c"},{url:"assets/images/portfolios/diamond.svg",revision:"00e130da057c1ffa0e16980ca9a56581"},{url:"assets/images/portfolios/diamond2.svg",revision:"ed0d829bf3264bcf53eca0599f43c5e7"},{url:"assets/images/portfolios/home.svg",revision:"03ccf8d51d759c2cde358e4a64d68999"},{url:"assets/images/portfolios/longmen.svg",revision:"c799348173d2d0364851e2052109ef66"},{url:"assets/images/portfolios/notepad.svg",revision:"134928a42627250f9b8d452ec062e7ed"},{url:"assets/images/portfolios/rss.svg",revision:"ba73e5aead58005813881b275f45cdf7"},{url:"assets/images/portfolios/throwing_a_stone.svg",revision:"f31866b76643d7fe5b5141aef41fd94f"},{url:"assets/images/portfolios/throwing_a_stone.webp",revision:"e148c90d5500f2b2c6996bbe6a7cb298"},{url:"assets/images/sample-symbol-defs.svg",revision:"8275679fe6287d4532628929cbd1737b"},{url:"assets/images/screenshots/screenshot1.jpg",revision:"f073b9e6ec08ab3512cf73c62f123dec"},{url:"assets/images/screenshots/screenshot2.jpg",revision:"76e91880920331b4d2413c764103f208"},{url:"assets/images/social-symbol-defs.svg",revision:"8a5cdcee432e24e17d4dddc632c51eb0"},{url:"assets/images/socials/github.svg",revision:"38076b6bc9865c2a3db9ee34a508813d"},{url:"assets/images/socials/linkedin.svg",revision:"4e7320caea3a9da25c3ddc8164631c77"},{url:"assets/images/socials/outlook.svg",revision:"b2e02e55c0996b32ce56f2549b79bab4"},{url:"assets/images/socials/skype.svg",revision:"11ee8f857ed9701b1685cdc912225665"},{url:"assets/images/socials/so.svg",revision:"7b9b347c4568b5a782b2db86e87fd553"},{url:"assets/images/socials/so2.svg",revision:"e2ca410f93e649ad0e31b0f3e0ea4332"},{url:"assets/images/socials/twitter.svg",revision:"a29f0a68d3174b547ab71b6873eb898d"},{url:"assets/images/socials/wechat.svg",revision:"bce66e2724b99b8de20b751c2b42554b"},{url:"assets/images/web homepage.ico",revision:"87720af4b2f01d1b3be2489d06bbcb93"},{url:"assets/images/wechat-qr-code.jpg",revision:"2895f815b757b0f253f139c001374e91"},{url:"assets/images/wechat-qr-code.webp",revision:"ecd88392b53206883564e541279ecdcc"},{url:"assets/sw-patch.js",revision:"8ef9520e9dfb2b4eebf0bb9bb00b459d"},{url:"cv.7c4914fdb09a92fa6ba2.css",revision:null},{url:"cv.d82c83adbbe845bce257.bundle.js",revision:null},{url:"cv.html",revision:"7d843393824aa7f7a3cfa7db0a61a0d7"},{url:"index.html",revision:"959f8256d83739e386808bc55b17abd5"},{url:"install.90db358e9eac2c32073d.bundle.js",revision:null},{url:"log.76c1fff208bef4bd9861.bundle.js",revision:null},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.5f0dcbef20be8fb5f014.bundle.js",revision:null},{url:"site.webmanifest",revision:"eb2239233d9689ae0db593fb1c236497"},{url:"static/a9366cb1cd42171ca23b.jpg",revision:null},{url:"stone.1ec631751b9136585a8d.css",revision:null},{url:"stone.f6e85ed966ad94da7c76.bundle.js",revision:null},{url:"stone.html",revision:"f7c8eb4bc3527912b76b3922e7842e18"},{url:"svgxuse.f0f6095dc63fc0623f27.bundle.js",revision:null},{url:"sw-offline-google-analytics.js",revision:"e6496d32fe47aeada2b68b3ab38a8fc1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})});
