(self.webpackChunkchendachao=self.webpackChunkchendachao||[]).push([[513],{85513:function(et,K,c){"use strict";c.r(K);var b=c(77090),V=c(31770),R=c(71371),a=c(60010),P=c(9869),B=function(){var u=window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop||window.scrollY;return u},q=function(){var u=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight;return u},F=function(){var u=document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft;return u},D=B();window.addEventListener("scroll",function(n){console.log("Scroll vertical or herizontal");var u=B(),S=q();if(u>D){console.log("Scroll down");var e=u+window.innerHeight>=S;e&&console.log("you're at the bottom of the page")}else{console.log("Scroll up");var r=u===0;r&&console.log("you're at the top of the page")}D=u});var N=function n(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:20,S=arguments.length>1?arguments[1]:void 0;if(S)window.scrollTo({top:0,behavior:"smooth"});else{var e=B();e>0&&(window.requestAnimationFrame(n),window.scrollTo(0,e-e/u))}},J=function n(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:20,S=arguments.length>1?arguments[1]:void 0,e=q();if(S)window.scrollTo({top:e,behavior:"smooth"});else{var r=B(),i=r+window.innerHeight-e;i<0&&(window.requestAnimationFrame(n),window.scrollTo(0,i-i/u))}},X=function(u){u.scrollIntoView({behavior:"smooth"})},$=document.querySelector(".scroll-to-top-btn");$&&$.addEventListener("click",function(){N(null,!0)});var s=document.querySelector(".scroll-to-bottom-btn");s&&s.addEventListener("click",function(){J(null,!0)});var d=document.querySelector(".scroll-to-view-btn");d&&d.addEventListener("click",function(){X(document.querySelector(".hello"))});var A=new Date(2020,3,4),v=new Date(2020,7,4);function z(){var n=function(h){var g=document.querySelector("body");g.setAttribute("data-theme",h)};if((0,P.Ti)(new Date,A,v))n("gray");else{var u=window.matchMedia("(prefers-color-scheme: dark)"),S=u.matches,e=localStorage.getItem("theme")||S&&"dark";e&&n(e);var r=document.querySelector(".moon");r.addEventListener("click",function(){var i=document.querySelector("body"),h=i.getAttribute("data-theme")==="light"?"dark":"light";n(h),localStorage.setItem("theme",h)})}}var E=z,L=c(64498);E(),L.Z.init().then(function(){document.title=L.Z.format("APP.HTML_TITLE");var n=document.createElement("script");n.setAttribute("data-isso","https://larrychen.tech/isso/"),n.setAttribute("data-isso-css",!0),n.setAttribute("data-isso-lang",L.Z.locale),n.setAttribute("data-isso-reply-to-self",!0),n.setAttribute("data-isso-require-author",!0),n.setAttribute("data-isso-require-email",!1),n.setAttribute("data-isso-max-comments-top",10),n.setAttribute("data-isso-max-comments-nested",5),n.setAttribute("data-isso-reveal-on-click",5),n.setAttribute("data-isso-avatar",!0),n.setAttribute("data-isso-avatar-bg","#f0f0f0"),n.setAttribute("data-isso-avatar-fg","#9abf88 #5698c4 #e279a3 #9163b6"),n.setAttribute("data-isso-vote",!0),n.setAttribute("data-isso-vote-level","0,5,10,25,100"),n.setAttribute("data-isso-feed",!0),n.src="https://larrychen.tech/isso/js/embed.min.js",n.defer=!0,n.setAttribute("crossorigin","anonymous"),n.onload=function(){document.querySelector(".comment-container").removeAttribute("hidden")},n.onerror=function(){document.querySelector(".comment-container").setAttribute("hidden","")},document.body.append(n)});var C=document.querySelectorAll(".icon.loading");if(C.length){var H=C[0].querySelector("svg");H.addEventListener("load",function(){C.forEach(function(n){n.classList.remove("loading")})})}setTimeout(function(){Promise.all([c.e(90),c.e(784)]).then(c.bind(c,17237)).then(function(n){var u=n.TooltipAndPopover;return u()})},10);var k=document.querySelector(".qrcode-handler");Promise.all([c.e(573),c.e(895)]).then(c.bind(c,48895)).then(function(n){var u=n.showModal,S=n.displayQRCode;k.removeAttribute("hidden"),k.addEventListener("click",function(){u(),S()})});var it=function(){return Promise.all([c.e(342),c.e(644)]).then(c.bind(c,40644)).then(function(u){var S=u.Intro;return new S})},_=document.querySelector(".start-replay-tour"),rt=document.querySelector(".start-hint");if(_.addEventListener("click",function(){it().then(function(n){return n.initAndShowIntro()})}),rt.addEventListener("click",function(){it().then(function(n){return n.toggleHint()})}),(0,P.w1)()){var ut=document.querySelector("#btnInstall");ut.setAttribute("hidden","")}window.addEventListener("load",function(){var n=document.querySelector(".developer-mode-link");n.setAttribute("href","./assets/data/".concat(L.Z.locale,"/chendachao.json"));var u=document.querySelector(".online-days"),S=new Date("2014-09-12"),e=Date.now()-S.getTime(),r=Math.ceil(e/(24*60*60*1e3));if((0,P.Cv)(u,L.Z.format("APP.ONLINE_DAYS",{days:r})),navigator.share){var i=document.querySelector(".share-btn");i.removeAttribute("hidden"),i.addEventListener("click",function(){var l=document.location.href,p=document.querySelector("link[rel=canonical]");p!==null&&(l=p.href),navigator.share({title:"Larry Chen' Homepage",text:"Welcome to visit Larry's homepage",url:l}).then(function(){return console.log("Successful share!")}).catch(function(f){return console.log("Error sharing",f)})})}(function(){var l=function(){var T=document.querySelector(".print-site-qrcode"),I=document.querySelector(".my-portfolio"),j=I.hasAttribute("open");T.style.position="absolute",T.style.right="15px",T.style.top="35px",T.style.display="inherit",j||I.setAttribute("open","")},p=function(){var T=document.querySelector(".print-site-qrcode"),I=document.querySelector(".my-portfolio"),j=I.hasAttribute("open");T.style.display="none",j||I.removeAttribute("open")};if(window.matchMedia){var f=window.matchMedia("print");f.addEventListener("change",function(m){m.matches?l():p()})}window.addEventListener("beforeprint",l),window.addEventListener("afterprint",p)})();var h,g=function(p){var f=navigator.onLine?"":L.Z.format("APP.OFFLINE");f?h=a.Z.error(f.toUpperCase(),"",{timeOut:0,positionClass:"toast-top-full-width"}):h&&(h.remove(),a.Z.success(L.Z.format("APP.ONLINE"),"",{timeOut:800}))};g(),window.addEventListener("online",g),window.addEventListener("offline",g)});var ot=function(u){var S=(u.error||u.message||u.reason.message).toString();a.Z.error(S,L.Z.format("APP.GLOBAL_ERROR")),R.Tb(u.error)};window.addEventListener("error",ot),window.addEventListener("unhandledrejection",ot)},77090:function(et){(function(K,c){var b=c(K,K.document,Date);K.lazySizes=b,et.exports&&(et.exports=b)})(typeof window!="undefined"?window:{},function(c,b,V){"use strict";var R,a;if(function(){var e,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};a=c.lazySizesConfig||c.lazysizesConfig||{};for(e in r)e in a||(a[e]=r[e])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var P=b.documentElement,B=c.HTMLPictureElement,q="addEventListener",F="getAttribute",D=c[q].bind(c),N=c.setTimeout,J=c.requestAnimationFrame||N,X=c.requestIdleCallback,$=/^picture$/i,s=["load","error","lazyincluded","_lazyloaded"],d={},A=Array.prototype.forEach,v=function(e,r){return d[r]||(d[r]=new RegExp("(\\s|^)"+r+"(\\s|$)")),d[r].test(e[F]("class")||"")&&d[r]},z=function(e,r){v(e,r)||e.setAttribute("class",(e[F]("class")||"").trim()+" "+r)},E=function(e,r){var i;(i=v(e,r))&&e.setAttribute("class",(e[F]("class")||"").replace(i," "))},L=function(e,r,i){var h=i?q:"removeEventListener";i&&L(e,r),s.forEach(function(g){e[h](g,r)})},C=function(e,r,i,h,g){var l=b.createEvent("Event");return i||(i={}),i.instance=R,l.initEvent(r,!h,!g),l.detail=i,e.dispatchEvent(l),l},H=function(e,r){var i;!B&&(i=c.picturefill||a.pf)?(r&&r.src&&!e[F]("srcset")&&e.setAttribute("srcset",r.src),i({reevaluate:!0,elements:[e]})):r&&r.src&&(e.src=r.src)},k=function(e,r){return(getComputedStyle(e,null)||{})[r]},it=function(e,r,i){for(i=i||e.offsetWidth;i<a.minSize&&r&&!e._lazysizesWidth;)i=r.offsetWidth,r=r.parentNode;return i},_=function(){var e,r,i=[],h=[],g=i,l=function(){var f=g;for(g=i.length?h:i,e=!0,r=!1;f.length;)f.shift()();e=!1},p=function(f,m){e&&!m?f.apply(this,arguments):(g.push(f),r||(r=!0,(b.hidden?N:J)(l)))};return p._lsFlush=l,p}(),rt=function(e,r){return r?function(){_(e)}:function(){var i=this,h=arguments;_(function(){e.apply(i,h)})}},ut=function(e){var r,i=0,h=a.throttleDelay,g=a.ricTimeout,l=function(){r=!1,i=V.now(),e()},p=X&&g>49?function(){X(l,{timeout:g}),g!==a.ricTimeout&&(g=a.ricTimeout)}:rt(function(){N(l)},!0);return function(f){var m;(f=f===!0)&&(g=33),!r&&(r=!0,m=h-(V.now()-i),m<0&&(m=0),f||m<9?p():N(p,m))}},ot=function(e){var r,i,h=99,g=function(){r=null,e()},l=function(){var p=V.now()-i;p<h?N(l,h-p):(X||g)(g)};return function(){i=V.now(),r||(r=N(l,h))}},n=function(){var e,r,i,h,g,l,p,f,m,T,I,j,pt=/^img$/i,yt=/^iframe$/i,bt="onscroll"in c&&!/(gle|ing)bot/.test(navigator.userAgent),Et=0,st=0,Z=0,at=-1,dt=function(t){Z--,(!t||Z<0||!t.target)&&(Z=0)},ft=function(t){return j==null&&(j=k(b.body,"visibility")=="hidden"),j||!(k(t.parentNode,"visibility")=="hidden"&&k(t,"visibility")=="hidden")},At=function(t,o){var y,M=t,w=ft(t);for(f-=o,I+=o,m-=o,T+=o;w&&(M=M.offsetParent)&&M!=b.body&&M!=P;)w=(k(M,"opacity")||1)>0,w&&k(M,"overflow")!="visible"&&(y=M.getBoundingClientRect(),w=T>y.left&&m<y.right&&I>y.top-1&&f<y.bottom+1);return w},vt=function(){var t,o,y,M,w,x,Q,U,G,Y,tt,nt,W=R.elements;if((h=a.loadMode)&&Z<8&&(t=W.length)){for(o=0,at++;o<t;o++)if(!(!W[o]||W[o]._lazyRace)){if(!bt||R.prematureUnveil&&R.prematureUnveil(W[o])){lt(W[o]);continue}if((!(U=W[o][F]("data-expand"))||!(x=U*1))&&(x=st),Y||(Y=!a.expand||a.expand<1?P.clientHeight>500&&P.clientWidth>500?500:370:a.expand,R._defEx=Y,tt=Y*a.expFactor,nt=a.hFac,j=null,st<tt&&Z<1&&at>2&&h>2&&!b.hidden?(st=tt,at=0):h>1&&at>1&&Z<6?st=Y:st=Et),G!==x&&(l=innerWidth+x*nt,p=innerHeight+x,Q=x*-1,G=x),y=W[o].getBoundingClientRect(),(I=y.bottom)>=Q&&(f=y.top)<=p&&(T=y.right)>=Q*nt&&(m=y.left)<=l&&(I||T||m||f)&&(a.loadHidden||ft(W[o]))&&(r&&Z<3&&!U&&(h<3||at<4)||At(W[o],x))){if(lt(W[o]),w=!0,Z>9)break}else!w&&r&&!M&&Z<4&&at<4&&h>2&&(e[0]||a.preloadAfterLoad)&&(e[0]||!U&&(I||T||m||f||W[o][F](a.sizesAttr)!="auto"))&&(M=e[0]||W[o])}M&&!w&&lt(M)}},O=ut(vt),ht=function(t){var o=t.target;if(o._lazyCache){delete o._lazyCache;return}dt(t),z(o,a.loadedClass),E(o,a.loadingClass),L(o,gt),C(o,"lazyloaded")},zt=rt(ht),gt=function(t){zt({target:t.target})},Ct=function(t,o){var y=t.getAttribute("data-load-mode")||a.iframeLoadMode;y==0?t.contentWindow.location.replace(o):y==1&&(t.src=o)},Lt=function(t){var o,y=t[F](a.srcsetAttr);(o=a.customMedia[t[F]("data-media")||t[F]("media")])&&t.setAttribute("media",o),y&&t.setAttribute("srcset",y)},St=rt(function(t,o,y,M,w){var x,Q,U,G,Y,tt;(Y=C(t,"lazybeforeunveil",o)).defaultPrevented||(M&&(y?z(t,a.autosizesClass):t.setAttribute("sizes",M)),Q=t[F](a.srcsetAttr),x=t[F](a.srcAttr),w&&(U=t.parentNode,G=U&&$.test(U.nodeName||"")),tt=o.firesLoad||"src"in t&&(Q||x||G),Y={target:t},z(t,a.loadingClass),tt&&(clearTimeout(i),i=N(dt,2500),L(t,gt,!0)),G&&A.call(U.getElementsByTagName("source"),Lt),Q?t.setAttribute("srcset",Q):x&&!G&&(yt.test(t.nodeName)?Ct(t,x):t.src=x),w&&(Q||G)&&H(t,{src:x})),t._lazyRace&&delete t._lazyRace,E(t,a.lazyClass),_(function(){var nt=t.complete&&t.naturalWidth>1;(!tt||nt)&&(nt&&z(t,a.fastLoadedClass),ht(Y),t._lazyCache=!0,N(function(){"_lazyCache"in t&&delete t._lazyCache},9)),t.loading=="lazy"&&Z--},!0)}),lt=function(t){if(!t._lazyRace){var o,y=pt.test(t.nodeName),M=y&&(t[F](a.sizesAttr)||t[F]("sizes")),w=M=="auto";(w||!r)&&y&&(t[F]("src")||t.srcset)&&!t.complete&&!v(t,a.errorClass)&&v(t,a.lazyClass)||(o=C(t,"lazyunveilread").detail,w&&u.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,Z++,St(t,o,w,M,y))}},Tt=ot(function(){a.loadMode=3,O()}),mt=function(){a.loadMode==3&&(a.loadMode=2),Tt()},ct=function(){if(!r){if(V.now()-g<999){N(ct,999);return}r=!0,a.loadMode=3,O(),D("scroll",mt,!0)}};return{_:function(){g=V.now(),R.elements=b.getElementsByClassName(a.lazyClass),e=b.getElementsByClassName(a.lazyClass+" "+a.preloadClass),D("scroll",O,!0),D("resize",O,!0),D("pageshow",function(t){if(t.persisted){var o=b.querySelectorAll("."+a.loadingClass);o.length&&o.forEach&&J(function(){o.forEach(function(y){y.complete&&lt(y)})})}}),c.MutationObserver?new MutationObserver(O).observe(P,{childList:!0,subtree:!0,attributes:!0}):(P[q]("DOMNodeInserted",O,!0),P[q]("DOMAttrModified",O,!0),setInterval(O,999)),D("hashchange",O,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(t){b[q](t,O,!0)}),/d$|^c/.test(b.readyState)?ct():(D("load",ct),b[q]("DOMContentLoaded",O),N(ct,2e4)),R.elements.length?(vt(),_._lsFlush()):O()},checkElems:O,unveil:lt,_aLSL:mt}}(),u=function(){var e,r=rt(function(l,p,f,m){var T,I,j;if(l._lazysizesWidth=m,m+="px",l.setAttribute("sizes",m),$.test(p.nodeName||""))for(T=p.getElementsByTagName("source"),I=0,j=T.length;I<j;I++)T[I].setAttribute("sizes",m);f.detail.dataAttr||H(l,f.detail)}),i=function(l,p,f){var m,T=l.parentNode;T&&(f=it(l,T,f),m=C(l,"lazybeforesizes",{width:f,dataAttr:!!p}),m.defaultPrevented||(f=m.detail.width,f&&f!==l._lazysizesWidth&&r(l,T,m,f)))},h=function(){var l,p=e.length;if(p)for(l=0;l<p;l++)i(e[l])},g=ot(h);return{_:function(){e=b.getElementsByClassName(a.autosizesClass),D("resize",g)},checkElems:g,updateElem:i}}(),S=function(){!S.i&&b.getElementsByClassName&&(S.i=!0,u._(),n._())};return N(function(){a.init&&S()}),R={cfg:a,autoSizer:u,loader:n,init:S,uP:H,aC:z,rC:E,hC:v,fire:C,gW:it,rAF:_},R})},31770:function(et,K,c){var b,V,R;(function(a,P){if(!!a){var B=function(){P(a.lazySizes),a.removeEventListener("lazyunveilread",B,!0)};P=P.bind(null,a,a.document),et.exports?P(c(77090)):(V=[c(77090)],b=P,R=typeof b=="function"?b.apply(K,V):b,R!==void 0&&(et.exports=R))}})(typeof window!="undefined"?window:0,function(a,P,B){"use strict";if(!!a.addEventListener){var q=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,F=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,D=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,N=/^picture$/i,J=B.cfg,X=function(s){return getComputedStyle(s,null)||{}},$={getParent:function(s,d){var A=s,v=s.parentNode;return(!d||d=="prev")&&v&&N.test(v.nodeName||"")&&(v=v.parentNode),d!="self"&&(d=="prev"?A=s.previousElementSibling:d&&(v.closest||a.jQuery)?A=(v.closest?v.closest(d):jQuery(v).closest(d)[0])||v:A=v),A},getFit:function(s){var d,A,v=X(s),z=v.content||v.fontFamily,E={fit:s._lazysizesParentFit||s.getAttribute("data-parent-fit")};return!E.fit&&z&&(d=z.match(F))&&(E.fit=d[1]),E.fit?(A=s._lazysizesParentContainer||s.getAttribute("data-parent-container"),!A&&z&&(d=z.match(D))&&(A=d[1]),E.parent=$.getParent(s,A)):E.fit=v.objectFit,E},getImageRatio:function(s){var d,A,v,z,E,L,C,H=s.parentNode,k=H&&N.test(H.nodeName||"")?H.querySelectorAll("source, img"):[s];for(d=0;d<k.length;d++)if(s=k[d],A=s.getAttribute(J.srcsetAttr)||s.getAttribute("srcset")||s.getAttribute("data-pfsrcset")||s.getAttribute("data-risrcset")||"",v=s._lsMedia||s.getAttribute("media"),v=J.customMedia[s.getAttribute("data-media")||v]||v,A&&(!v||(a.matchMedia&&matchMedia(v)||{}).matches)){z=parseFloat(s.getAttribute("data-aspectratio")),z||(E=A.match(q),E?E[2]=="w"?(L=E[1],C=E[3]):(L=E[3],C=E[1]):(L=s.getAttribute("width"),C=s.getAttribute("height")),z=L/C);break}return z},calculateSize:function(s,d){var A,v,z,E,L=this.getFit(s),C=L.fit,H=L.parent;return C!="width"&&(C!="contain"&&C!="cover"||!(z=this.getImageRatio(s)))?d:(H?d=H.clientWidth:H=s,E=d,C=="width"?E=d:(v=H.clientHeight,(A=d/v)&&(C=="cover"&&A<z||C=="contain"&&A>z)&&(E=d*(z/A))),E)}};B.parentFit=$,P.addEventListener("lazybeforesizes",function(s){if(!(s.defaultPrevented||s.detail.instance!=B)){var d=s.target;s.detail.width=$.calculateSize(d,s.detail.width)}})}})}}]);