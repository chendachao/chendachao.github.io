(self.webpackChunkchendachao=self.webpackChunkchendachao||[]).push([[513],{85513:function(I,w,n){"use strict";n.r(w);var b=n(77090),D=n(31770),d=n(60010),v=n(9869),m=function(){var e=window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop||window.scrollY;return e},E=function(){var e=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight;return e},P=function(){var e=document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft;return e},y=m();window.addEventListener("scroll",function(t){console.log("Scroll vertical or herizontal");var e=m(),r=E();if(e>y){console.log("Scroll down");var o=e+window.innerHeight>=r;o&&console.log("you're at the bottom of the page")}else{console.log("Scroll up");var i=e===0;i&&console.log("you're at the top of the page")}y=e});var T=function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:20,r=arguments.length>1?arguments[1]:void 0;if(r)window.scrollTo({top:0,behavior:"smooth"});else{var o=m();o>0&&(window.requestAnimationFrame(t),window.scrollTo(0,o-o/e))}},u=function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:20,r=arguments.length>1?arguments[1]:void 0,o=E();if(r)window.scrollTo({top:o,behavior:"smooth"});else{var i=m(),a=i+window.innerHeight-o;a<0&&(window.requestAnimationFrame(t),window.scrollTo(0,a-a/e))}},l=function(e){e.scrollIntoView({behavior:"smooth"})},c=document.querySelector(".scroll-to-top-btn");c&&c.addEventListener("click",function(){T(null,!0)});var g=document.querySelector(".scroll-to-bottom-btn");g&&g.addEventListener("click",function(){u(null,!0)});var f=document.querySelector(".scroll-to-view-btn");f&&f.addEventListener("click",function(){l(document.querySelector(".hello"))});var S=new Date(2020,3,4),L=new Date(2020,7,4);function H(){var t=function(s){var B=document.querySelector("body");B.setAttribute("data-theme",s)};if((0,v.Ti)(new Date,S,L))t("gray");else{var e=window.matchMedia("(prefers-color-scheme: dark)"),r=e.matches,o=localStorage.getItem("theme")||r&&"dark";o&&t(o);var i=document.querySelector(".moon");i.addEventListener("click",function(){var a=document.querySelector("body"),s=a.getAttribute("data-theme")==="light"?"dark":"light";t(s),localStorage.setItem("theme",s)})}}var O=H,h=n(64498);O(),h.Z.init();var p=document.querySelectorAll(".icon.loading");if(p.length){var M=p[0].querySelector("svg");M.addEventListener("load",function(){p.forEach(function(t){t.classList.remove("loading")})})}if(setTimeout(function(){Promise.all([n.e(90),n.e(784)]).then(n.bind(n,17237)).then(function(t){return t.default()})},10),Promise.all([n.e(573),n.e(203)]).then(n.bind(n,21203)).then(function(t){return t.default()}),Promise.all([n.e(342),n.e(644)]).then(n.bind(n,40644)).then(function(t){var e=new t.default;(0,v.Ro)()?setTimeout(function(){e.init()},5e3):e.init();var r=document.querySelector(".start-replay-tour"),o=document.querySelector(".start-hint");r.addEventListener("click",function(){e.initAndShowIntro()}),o.addEventListener("click",function(){e.toggleHint()})}),(0,v.w1)()){var C=document.querySelector("#btnInstall");C.setAttribute("hidden","")}window.addEventListener("load",function(){var t=document.querySelector(".developer-mode-link");if(t.setAttribute("href","/assets/data/".concat(h.Z.locale,"/chendachao.json")),navigator.share){var e=document.querySelector(".share-btn");e.removeAttribute("hidden"),e.addEventListener("click",function(){var i=document.location.href,a=document.querySelector("link[rel=canonical]");a!==null&&(i=a.href),navigator.share({title:"Larry Chen' Homepage",text:"Welcome to visite Larry Chen's homepage",url:i}).then(function(){return console.log("Successful share!")}).catch(function(s){return console.log("Error sharing",s)})})}var r,o=function(a){var s=navigator.onLine?"":h.Z.format("APP.OFFLINE");s?r=d.Z.error(s.toUpperCase(),"",{timeOut:0,positionClass:"toast-top-full-width"}):r&&(r.remove(),d.Z.success(h.Z.format("APP.ONLINE"),"",{timeOut:800}))};o(),window.addEventListener("online",o),window.addEventListener("offline",o)});var A=function(e){var r=(e.error||e.message).toString();d.Z.error(r,"Global Error")};window.addEventListener("error",A),window.addEventListener("unhandledrejection",A)},9869:function(I,w,n){"use strict";n.d(w,{w1:function(){return m},Ro:function(){return P},Ti:function(){return T}});var b=n(51206),D=n.n(b),d=D().getParser(window.navigator.userAgent),v="Internet Explorer";function m(){return d.getBrowserName()===v}function E(){var u=window.matchMedia||window.msMatchMedia;if(u){var l=u("(pointer:coarse)");return l.matches}return!1}var P=function(){return d.getPlatformType()==="desktop"},y=function(l,c){return l.getFullYear()===c.getFullYear()&&l.getMonth()===c.getMonth()&&l.getDate()===c.getDate()},T=function(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Date,g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:new Date,f=l.getTime(),S=c.getTime(),L=g.getTime();return S<=f&&f<=L}}}]);
