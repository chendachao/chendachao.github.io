(self.webpackChunkchendachao=self.webpackChunkchendachao||[]).push([[143],{4498:function(e,n,t){"use strict";var r=t(3535),o=t(9669),i=t.n(o);function a(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){a(i,r,o,c,s,"next",e)}function s(e){a(i,r,o,c,s,"throw",e)}c(void 0)}))}}var s=function(){var e,n,t=(e=localStorage.getItem("lang")||window.navigator.languages&&window.navigator.languages[0]||null,-1!==(n=e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage).indexOf("-")&&(n=n.split("-")[0]),-1!==n.indexOf("_")&&(n=n.split("_")[0]),console.log(e,n),n||"en"),o=t,a={};function s(e,n){n=n||{};var t=a[o];return new r.ZP(t[e],o).format(n)}function u(){document.querySelectorAll("*[data-i18n-id]").forEach((function(e){var n=e.dataset.i18nId;e.innerHTML=s(n)})),document.querySelectorAll("*[data-i18n-attr]").forEach((function(e){var n=e.dataset.i18nAttr.split("=");e.setAttribute(n[0],s(n[1]))}))}var l=function(){var e=c(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/assets/i18n/".concat(n,".json"),e.prev=1,e.next=4,i().get(t);case 4:r=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,i().get("/assets/i18n/en.json");case 11:r=e.sent;case 12:return e.abrupt("return",r.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();function f(){return(f=c(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(n);case 2:t=e.sent,a[n]=t,u();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=function(){!function(e){o=e,localStorage.setItem("lang",e)}(o),function(e){f.apply(this,arguments)}(o)};return{init:function(){d(),document.querySelector(".language-btn").addEventListener("click",(function(e){o="en"===o?"zh":"en",d(),window.location.reload()}))},format:s,locale:o}}();n.Z=s},7220:function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=new(t(542).Z)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},{position:"bottom-center",theme:"alive",fullWidth:!0,fitToScreen:!1}));n.Z=i},3138:function(e,n,t){"use strict";t(6981);var r=t(5350),o=t(8967);r.S1({dsn:"https://d5fa791beeda48fcaa141dc31eaa8d8f@o175652.ingest.sentry.io/5596864",release:"chendachao.github.io@v1.9.11",integrations:[new o.jK.BrowserTracing],tracesSampleRate:1});var i=t(7220),a=t(4498),c=t(4155),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,n){navigator.serviceWorker.register(e).then((function(e){n&&n.onRegister&&n.onRegister(e),e.addEventListener("updatefound",(function(){var t=e.installing;null!=t&&t.addEventListener("statechange",(function(){switch(console.log("statechange",t.state),t.state){case"installed":navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use.",t.state),n&&n.onSuccess&&n.onSuccess(e));break;case"redundant":console.error("The installing service worker became redundant.")}}))}))})).catch((function(e){console.log("SW registration failed: ",e)}))}function l(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,o)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){l(i,r,o,a,c,"next",e)}function c(e){l(i,r,o,a,c,"throw",e)}a(void 0)}))}}t.e(513).then(t.bind(t,5513)),t.e(175).then(t.bind(t,3175));var d=a.Z.format;!function(e){if("serviceWorker"in navigator){if(new URL(c.env.PUBLIC_URL||"",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n=c.env.PUBLIC_URL||"",t="".concat(n,"/sw.js");s?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}({onRegister:function(e){var n=document.querySelector(".subscribe-btn");["default","denied"].includes(Notification.permission)&&n.removeAttribute("hidden"),n.addEventListener("click",f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Notification.requestPermission();case 3:if("granted"!==t.sent){t.next=9;break}n.setAttribute("hidden",""),e.pushManager.subscribe({userVisibleOnly:!0}),t.next=10;break;case 9:throw new Error(d("APP.NOTIFICATIONS_BLOCKED"));case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),i.Z.error(t.t0,{action:{text:"X",onClick:function(e,n){n.delete()}}}),console.log("Notifications error",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,12]])}))))},onUpdate:function(e){var n=function(){var e,n;e=d("APP.NEW_VERSION_TITLE"),n=d("APP.NEW_VERSION_CONTENT"),"granted"===Notification.permission&&navigator.serviceWorker.getRegistration().then((function(t){var r={body:n,icon:"/assets/images/bases/bell.svg",badge:"/assets/images/bases/notification.svg"};t.showNotification(e,r)})),i.Z.success(d("APP.NEW_VERSION_TITLE"),{action:{text:d("APP.UPDATE"),onClick:function(e,n){window.location.reload()}}})},t=e.waiting;t&&(t.addEventListener("statechange",(function(e){console.log("onUpdate statechange",e.target.state),"activated"===e.target.state&&n()})),t.postMessage({type:"SKIP_WAITING"}))},onSuccess:function(e){console.log("registered app for offline use. details:",e)}})}},function(e){"use strict";e.O(0,[981,61],(function(){return n=3138,e(e.s=n);var n}));e.O()}]);