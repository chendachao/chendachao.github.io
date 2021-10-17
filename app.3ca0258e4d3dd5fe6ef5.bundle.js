"use strict";(self.webpackChunkchendachao=self.webpackChunkchendachao||[]).push([[143],{64498:function(E,T,s){var M=s(44282),R=s(9669),b=s.n(R),O=s(9869);function I(o,g){return $(o)||k(o,g)||C(o,g)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(o,g){if(!!o){if(typeof o=="string")return L(o,g);var u=Object.prototype.toString.call(o).slice(8,-1);if(u==="Object"&&o.constructor&&(u=o.constructor.name),u==="Map"||u==="Set")return Array.from(o);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return L(o,g)}}function L(o,g){(g==null||g>o.length)&&(g=o.length);for(var u=0,h=new Array(g);u<g;u++)h[u]=o[u];return h}function k(o,g){var u=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(u!=null){var h=[],i=!0,e=!1,n,t;try{for(u=u.call(o);!(i=(n=u.next()).done)&&(h.push(n.value),!(g&&h.length===g));i=!0);}catch(r){e=!0,t=r}finally{try{!i&&u.return!=null&&u.return()}finally{if(e)throw t}}return h}}function $(o){if(Array.isArray(o))return o}function D(o,g,u,h,i,e,n){try{var t=o[e](n),r=t.value}catch(a){u(a);return}t.done?g(r):Promise.resolve(r).then(h,i)}function S(o){return function(){var g=this,u=arguments;return new Promise(function(h,i){var e=o.apply(g,u);function n(r){D(e,h,i,n,t,"next",r)}function t(r){D(e,h,i,n,t,"throw",r)}n(void 0)})}}var V=function(){var g=function(){var p=localStorage.getItem("lang")||window.navigator.languages&&window.navigator.languages[0]||null;p=p||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage;var v=p;return v.indexOf("-")!==-1&&(v=v.split("-")[0]),v.indexOf("_")!==-1&&(v=v.split("_")[0]),v},u=g()||"en",h=[{key:"en",label:"English"},{key:"zh",label:"Chinese"}],i=u,e={},n={id:"APP.GREETING",defaultMessage:"Hello, {name}!",description:"Greeting to welcome the user to the app"};function t(l){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=e[i],y="";if(Object.prototype.toString.call(l)==="[object String]")y=v[l]||l||"missed i18n msg";else{var w=l.id,W=l.defaultMessage,_=l.description;y=v[w]||W||w}var H=new M.ZP(y,i,null,{ignoreTag:!0});return H.format(p)}function r(l){var p=l.querySelectorAll("*[data-i18n-id]");p.forEach(function(v){var y=v.dataset,w=y.i18nId,W=y.i18nDefaultMessage;(0,O.Cv)(v,t({id:w,defaultMessage:W}))})}function a(l){return l.querySelectorAll("*[data-i18n-attr]").forEach(function(p){var v=p.dataset.i18nAttr,y=v.split("=");p.setAttribute(y[0],t({id:y[1]}))})}function c(){return r(document),a(document)}function d(l){i=l,document.documentElement.setAttribute("lang",l),localStorage.setItem("lang",l)}var f=function(){var l=S(regeneratorRuntime.mark(function p(v){var y,w,W,_,H,Y;return regeneratorRuntime.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return w="./assets/i18n/".concat(v,".json"),A.next=3,(0,O.kT)(S(regeneratorRuntime.mark(function Z(){return regeneratorRuntime.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,b().get(w);case 2:return B.abrupt("return",B.sent);case 3:case"end":return B.stop()}},Z)})));case 3:if(W=A.sent,_=I(W,2),H=_[0],Y=_[1],!Y){A.next=11;break}return A.next=10,b().get("./assets/i18n/en.json");case 10:H=A.sent;case 11:return A.abrupt("return",(y=H)===null||y===void 0?void 0:y.data);case 12:case"end":return A.stop()}},p)}));return function(v){return l.apply(this,arguments)}}();function m(l){return P.apply(this,arguments)}function P(){return P=S(regeneratorRuntime.mark(function l(p){var v;return regeneratorRuntime.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,f(p);case 2:return v=w.sent,e[p]=v,w.abrupt("return",c());case 5:case"end":return w.stop()}},l)})),P.apply(this,arguments)}var K=function(){return d(i),m(i)};function G(){var l=document.querySelector(".language-btn");return l.addEventListener("click",function(p){i=i==="en"?"zh":"en",d(i),window.location.reload()}),K(u)}return{init:G,renderElement:r,format:t,locale:i}},N=V();T.Z=N},9869:function(E,T,s){s.d(T,{w1:function(){return k},Ro:function(){return D},Ti:function(){return N},kT:function(){return o},Cv:function(){return h}});var M=s(51206),R=s.n(M),b=s(27856),O=s.n(b);function I(i,e,n,t,r,a,c){try{var d=i[a](c),f=d.value}catch(m){n(m);return}d.done?e(f):Promise.resolve(f).then(t,r)}function U(i){return function(){var e=this,n=arguments;return new Promise(function(t,r){var a=i.apply(e,n);function c(f){I(a,t,r,c,d,"next",f)}function d(f){I(a,t,r,c,d,"throw",f)}c(void 0)})}}var C=R().getParser(window.navigator.userAgent),L="Internet Explorer";function k(){return C.getBrowserName()===L}function $(){var i=window.matchMedia||window.msMatchMedia;if(i){var e=i("(pointer:coarse)");return e.matches}return!1}var D=function(){return C.getPlatformType()==="desktop"},S=window.matchMedia("(hover: hover) and (pointer: fine)"),V=function(e,n){return e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate()},N=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Date,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:new Date,r=e.getTime(),a=n.getTime(),c=t.getTime();return a<=r&&r<=c},o=function(){var i=U(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,n();case 3:return t=a.sent,a.abrupt("return",[t,null]);case 7:return a.prev=7,a.t0=a.catch(0),console.log("error",a.t0),a.abrupt("return",[null,a.t0]);case 11:case"end":return a.stop()}},e,null,[[0,7]])}));return function(n){return i.apply(this,arguments)}}(),g=function(e){try{var n=e();return[n,null]}catch(t){return console.log("error",t),[null,t]}},u=function(){var e;return window.trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("default",{createHTML:function(t,r){return O().sanitize(t,{RETURN_TRUSTED_TYPE:!0})}})),e},h=function(e,n){var t=u();t&&(n=t.createHTML(n)),e.innerHTML=n}},60010:function(E,T,s){var M=s(8901),R=s.n(M);R().options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-center",preventDuplicates:!1,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},T.Z=R()},91709:function(E,T,s){var M=s(28594),R=s(35666),b=s(60010),O=s(64498),I=s(9869),U=Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){if("serviceWorker"in navigator){var n=new URL({APP_COMMON_ENV:"LARRY666",APP_ENV:"production"}.PUBLIC_URL||"",window.location.href);if(n.origin!==window.location.origin)return;window.addEventListener("load",function(){var t={APP_COMMON_ENV:"LARRY666",APP_ENV:"production"}.PUBLIC_URL||"",r="".concat(t,"/sw.js");U?(k(r,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):L(r,e)})}}function L(e,n){navigator.serviceWorker.register(e).then(function(t){n&&n.onRegister&&n.onRegister(t),t.addEventListener("updatefound",function(){var r=t.installing;r!=null&&r.addEventListener("statechange",function(){switch(console.log("statechange",r.state),r.state){case"installed":navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(t)):(console.log("Content is cached for offline use.",r.state),n&&n.onSuccess&&n.onSuccess(t));break;case"redundant":console.error("The installing service worker became redundant.");break}})})}).catch(function(t){console.log("SW registration failed: ",t)})}function k(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(t){var r=t.headers.get("content-type");t.status===404||r!=null&&r.indexOf("javascript")===-1?navigator.serviceWorker.ready.then(function(a){a.unregister().then(function(){window.location.reload()})}):L(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}function $(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}function D(e,n){return g(e)||o(e,n)||V(e,n)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(e,n){if(!!e){if(typeof e=="string")return N(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,n)}}function N(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,c=!1,d,f;try{for(t=t.call(e);!(a=(d=t.next()).done)&&(r.push(d.value),!(n&&r.length===n));a=!0);}catch(m){c=!0,f=m}finally{try{!a&&t.return!=null&&t.return()}finally{if(c)throw f}}return r}}function g(e){if(Array.isArray(e))return e}function u(e,n,t,r,a,c,d){try{var f=e[c](d),m=f.value}catch(P){t(P);return}f.done?n(m):Promise.resolve(m).then(r,a)}function h(e){return function(){var n=this,t=arguments;return new Promise(function(r,a){var c=e.apply(n,t);function d(m){u(c,r,a,d,f,"next",m)}function f(m){u(c,r,a,d,f,"throw",m)}d(void 0)})}}Promise.all([s.e(371),s.e(319),s.e(552)]).then(s.bind(s,70552)),Promise.all([s.e(371),s.e(513)]).then(s.bind(s,85513)),s.e(175).then(s.bind(s,43175));var i=O.Z.format;C({onRegister:function(n){var t=document.querySelector(".subscribe-btn");["default","denied"].includes(Notification.permission)&&t.removeAttribute("hidden"),t.addEventListener("click",h(regeneratorRuntime.mark(function r(){var a,c,d,f;return regeneratorRuntime.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,I.kT)(h(regeneratorRuntime.mark(function K(){return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Notification.requestPermission();case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},K)})));case 2:a=P.sent,c=D(a,2),d=c[0],f=c[1],f?(b.Z.error(f,"Notifications Error"),console.log("Notifications Error",f)):d==="granted"?(t.setAttribute("hidden",""),n.pushManager.subscribe({userVisibleOnly:!0})):b.Z.error(i({id:"APP.NOTIFICATIONS_BLOCKED"}),"Notifications Error");case 7:case"end":return P.stop()}},r)})))},onUpdate:function(n){function t(c,d){Notification.permission==="granted"&&navigator.serviceWorker.getRegistration().then(function(f){var m={body:d,icon:"./assets/images/bases/bell.svg",badge:"./assets/images/bases/notification.svg"};f.showNotification(c,m)})}var r=function(){var d=i({id:"APP.NEW_VERSION_TITLE"}),f=i({id:"APP.NEW_VERSION_BODY"}),m=i({id:"APP.NEW_VERSION_BODY2"});t(d,m),b.Z.info(f,d,{timeOut:0,onclick:function(){window.location.reload()}})},a=n.waiting;a&&(a.addEventListener("statechange",function(c){console.log("onUpdate statechange",c.target.state),c.target.state==="activated"&&r()}),a.postMessage({type:"SKIP_WAITING"}))},onSuccess:function(n){console.log("registered app for offline use. details:",n)}})}},function(E){(function(){E.O(0,[143],function(){[371,319,552].map(E.E)},5)})();var T=function(M){return E(E.s=M)};E.O(0,[806,852],function(){return T(91709)});var s=E.O()}]);
