(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{NjgO:function(e,t,n){"use strict";n.r(t);var o=n("Zdl6"),r=n("sEcA"),i=function(){return window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop||window.scrollY},a=function(){return document.body.offsetHeight||document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight},c=i();window.addEventListener("scroll",(function(e){console.log("Scroll vertical or herizontal");var t=i(),n=a();t>c?(console.log("Scroll down"),t+window.innerHeight>=n&&console.log("you're at the bottom of the page")):(console.log("Scroll up"),0===t&&console.log("you're at the top of the page"));c=t}));var u=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,n=arguments.length>1?arguments[1]:void 0;if(n)window.scrollTo({top:0,behavior:"smooth"});else{var o=i();o>0&&(window.requestAnimationFrame(e),window.scrollTo(0,o-o/t))}},l=document.querySelector(".scroll-to-top-btn");l&&l.addEventListener("click",(function(){u(null,!0)}));var d=document.querySelector(".scroll-to-bottom-btn");d&&d.addEventListener("click",(function(){!function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,n=arguments.length>1?arguments[1]:void 0,o=a();if(n)window.scrollTo({top:o,behavior:"smooth"});else{var r=i()+window.innerHeight-o;r<0&&(window.requestAnimationFrame(e),window.scrollTo(0,r-r/t))}}(null,!0)}));var s=document.querySelector(".scroll-to-view-btn");s&&s.addEventListener("click",(function(){document.querySelector(".hello").scrollIntoView({behavior:"smooth"})}));var m=new Date(2020,3,4),v=new Date(2020,7,4);var f=function(){var e=function(e){document.getElementsByTagName("body")[0].setAttribute("data-theme",e)};if(Object(r.a)(new Date,m,v))e("gray");else{var t=localStorage.getItem("theme");t&&e(t),document.querySelector(".moon").addEventListener("click",(function(){var t="light"===document.getElementsByTagName("body")[0].getAttribute("data-theme")?"dark":"light";e(t),localStorage.setItem("theme",t)}))}},g=n("mTgQ");(f(),g.a.init(),Promise.all([n.e(9),n.e(16)]).then(n.bind(null,"Amp2")).then((function(e){return e.default()})),Promise.all([n.e(7),n.e(12)]).then(n.bind(null,"rDv0")).then((function(e){return e.default()})),Promise.all([n.e(10),n.e(15)]).then(n.bind(null,"JmQe")).then((function(e){var t=new e.default;Object(r.c)()?setTimeout((function(){t.init()}),5e3):t.init();var n=document.querySelector(".start-replay-tour"),o=document.querySelector(".start-hint");n.addEventListener("click",(function(){t.initAndShowIntro()})),o.addEventListener("click",(function(){t.toggleHint()}))})),Object(r.b)())&&document.getElementById("btnInstall").setAttribute("hidden","");window.addEventListener("load",(function(){document.querySelector(".language-btn").removeAttribute("hidden");var e,t=document.querySelector(".start-replay-tour"),n=document.querySelector(".start-hint");t.removeAttribute("hidden"),n.removeAttribute("hidden"),document.querySelector(".qrcode-container").removeAttribute("hidden"),u(),document.querySelector(".developer-mode-link").setAttribute("href","/assets/data/".concat(g.a.locale,"/chendachao.json"));var r=function(t){var n=navigator.onLine?"":"You are offline!";n?e=o.a.error(n.toUpperCase(),{action:{text:"Close",onClick:function(e,t){t.delete()}}}):e&&e.delete()};r(),window.addEventListener("online",r),window.addEventListener("offline",r)})),window.addEventListener("error",(function(e){var t=(e.error||e.message).toString();o.a.error(t)}))},mTgQ:function(e,t,n){"use strict";var o=n("6QKu"),r=n("vDqi"),i=n.n(r);function a(e,t,n,o,r,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(o,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function c(e){a(i,o,r,c,u,"next",e)}function u(e){a(i,o,r,c,u,"throw",e)}c(void 0)}))}}var u=function(){var e,t,n=(e=localStorage.getItem("lang")||window.navigator.languages&&window.navigator.languages[0]||null,-1!==(t=e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage).indexOf("-")&&(t=t.split("-")[0]),-1!==t.indexOf("_")&&(t=t.split("_")[0]),console.log(e,t),t||"en"),r=n,a={};function u(e,t){t=t||{};var n=a[r];return new o.a(n[e],r).format(t)}function l(){document.querySelectorAll("*[data-i18n-id]").forEach((function(e){var t=e.dataset.i18nId;e.innerHTML=u(t)})),document.querySelectorAll("*[data-i18n-attr]").forEach((function(e){var t=e.dataset.i18nAttr.split("=");e.setAttribute(t[0],u(t[1]))}))}var d=function(){var e=c(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/assets/i18n/".concat(t,".json"),e.prev=1,e.next=4,i.a.get(n);case 4:o=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,i.a.get("/assets/i18n/en.json");case 11:o=e.sent;case 12:return e.abrupt("return",o.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();function s(){return(s=c(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:n=e.sent,a[t]=n,l();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=function(){!function(e){r=e,localStorage.setItem("lang",e)}(r),function(e){s.apply(this,arguments)}(r)};return{init:function(){m(),document.querySelector(".language-btn").addEventListener("click",(function(e){r="en"===r?"zh":"en",m(),window.location.reload()}))},format:u,locale:r}}();t.a=u},sEcA:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l}));var o=n("M39V"),r=n.n(o),i=(n("mTgQ"),n("Zdl6"),r.a.getParser(window.navigator.userAgent));function a(){return"Internet Explorer"===i.getBrowserName()}var c=function(){return"desktop"===i.getPlatformType()},u=function(e,t){return(e.getTime()-t.getTime())/864e5},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,o=u(e,t),r=u(n,e);return o>=-1&&r>=-1}}}]);