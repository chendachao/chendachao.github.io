(self.webpackChunkchendachao=self.webpackChunkchendachao||[]).push([[513],{5513:function(rt,K,s){"use strict";s.r(K);var p=s(7090),q=s(1770),F=s(10),a=s(9869),L=function(){var l=window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop||window.scrollY;return l},j=function(){var l=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight;return l},V=function(){var l=document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft;return l},S=L();window.addEventListener("scroll",function(v){console.log("Scroll vertical or herizontal");var l=L(),A=j();if(l>S){console.log("Scroll down");var C=l+window.innerHeight>=A;C&&console.log("you're at the bottom of the page")}else{console.log("Scroll up");var r=l===0;r&&console.log("you're at the top of the page")}S=l});var W=function v(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:20,A=arguments.length>1?arguments[1]:void 0;if(A)window.scrollTo({top:0,behavior:"smooth"});else{var C=L();C>0&&(window.requestAnimationFrame(v),window.scrollTo(0,C-C/l))}},N=function v(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:20,A=arguments.length>1?arguments[1]:void 0,C=j();if(A)window.scrollTo({top:C,behavior:"smooth"});else{var r=L(),e=r+window.innerHeight-C;e<0&&(window.requestAnimationFrame(v),window.scrollTo(0,e-e/l))}},X=function(l){l.scrollIntoView({behavior:"smooth"})},G=document.querySelector(".scroll-to-top-btn");G&&G.addEventListener("click",function(){W(null,!0)});var $=document.querySelector(".scroll-to-bottom-btn");$&&$.addEventListener("click",function(){N(null,!0)});var o=document.querySelector(".scroll-to-view-btn");o&&o.addEventListener("click",function(){X(document.querySelector(".hello"))});var c=new Date(2020,3,4),z=new Date(2020,7,4);function u(){var v=function(n){var y=document.querySelector("body");y.setAttribute("data-theme",n)};if((0,a.Ti)(new Date,c,z))v("gray");else{var l=window.matchMedia("(prefers-color-scheme: dark)"),A=l.matches,C=localStorage.getItem("theme")||A&&"dark";C&&v(C);var r=document.querySelector(".moon");r.addEventListener("click",function(){var e=document.querySelector("body"),n=e.getAttribute("data-theme")==="light"?"dark":"light";v(n),localStorage.setItem("theme",n)})}}var b=u,f=s(4498);b(),f.Z.init().then(function(){document.title=f.Z.format("APP.HTML_TITLE")});var w=document.querySelectorAll(".icon.loading");if(w.length){var T=w[0].querySelector("svg");T.addEventListener("load",function(){w.forEach(function(v){v.classList.remove("loading")})})}setTimeout(function(){Promise.all([s.e(90),s.e(784)]).then(s.bind(s,7237)).then(function(v){var l=v.TooltipAndPopover;return l()})},10);var R=document.querySelector(".qrcode-handler");Promise.all([s.e(573),s.e(203)]).then(s.bind(s,1203)).then(function(v){var l=v.showModal,A=v.displayQRCode;R.removeAttribute("hidden"),R.addEventListener("click",function(){l(),A()})});var D=function(){return Promise.all([s.e(342),s.e(644)]).then(s.bind(s,644)).then(function(l){var A=l.Intro;return new A})},lt=document.querySelector(".start-replay-tour"),_=document.querySelector(".start-hint");if(lt.addEventListener("click",function(){D().then(function(v){return v.initAndShowIntro()})}),_.addEventListener("click",function(){D().then(function(v){return v.toggleHint()})}),(0,a.w1)()){var at=document.querySelector("#btnInstall");at.setAttribute("hidden","")}window.addEventListener("load",function(){var v=document.querySelector(".developer-mode-link");if(v.setAttribute("href","/assets/data/".concat(f.Z.locale,"/chendachao.json")),navigator.share){var l=document.querySelector(".share-btn");l.removeAttribute("hidden"),l.addEventListener("click",function(){var r=document.location.href,e=document.querySelector("link[rel=canonical]");e!==null&&(r=e.href),navigator.share({title:"Larry Chen' Homepage",text:"Welcome to visit Larry's homepage",url:r}).then(function(){return console.log("Successful share!")}).catch(function(n){return console.log("Error sharing",n)})})}(function(){var r=document.querySelector(".print-site-qrcode"),e=function(){r.style.position="absolute",r.style.right="15px",r.style.top="35px",r.style.display="inherit"},n=function(){r.style.display="none"};if(window.matchMedia){var y=window.matchMedia("print");y.addEventListener("change",function(g){g.matches?e():n()})}window.addEventListener("beforeprint",e),window.addEventListener("afterprint",n)})();var A,C=function(e){var n=navigator.onLine?"":f.Z.format("APP.OFFLINE");n?A=F.Z.error(n.toUpperCase(),"",{timeOut:0,positionClass:"toast-top-full-width"}):A&&(A.remove(),F.Z.success(f.Z.format("APP.ONLINE"),"",{timeOut:800}))};C(),window.addEventListener("online",C),window.addEventListener("offline",C)});var ct=function(l){var A=(l.error||l.message||l.reason.message).toString();F.Z.error(A,f.Z.format("APP.GLOBAL_ERROR"))};window.addEventListener("error",ct),window.addEventListener("unhandledrejection",ct)},7090:function(rt){(function(K,s){var p=s(K,K.document,Date);K.lazySizes=p,rt.exports&&(rt.exports=p)})(typeof window!="undefined"?window:{},function(s,p,q){"use strict";var F,a;if(function(){var r,e={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};a=s.lazySizesConfig||s.lazysizesConfig||{};for(r in e)r in a||(a[r]=e[r])}(),!p||!p.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var L=p.documentElement,j=s.HTMLPictureElement,V="addEventListener",S="getAttribute",W=s[V].bind(s),N=s.setTimeout,X=s.requestAnimationFrame||N,G=s.requestIdleCallback,$=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],c={},z=Array.prototype.forEach,u=function(r,e){return c[e]||(c[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),c[e].test(r[S]("class")||"")&&c[e]},b=function(r,e){u(r,e)||r.setAttribute("class",(r[S]("class")||"").trim()+" "+e)},f=function(r,e){var n;(n=u(r,e))&&r.setAttribute("class",(r[S]("class")||"").replace(n," "))},w=function(r,e,n){var y=n?V:"removeEventListener";n&&w(r,e),o.forEach(function(g){r[y](g,e)})},T=function(r,e,n,y,g){var d=p.createEvent("Event");return n||(n={}),n.instance=F,d.initEvent(e,!y,!g),d.detail=n,r.dispatchEvent(d),d},R=function(r,e){var n;!j&&(n=s.picturefill||a.pf)?(e&&e.src&&!r[S]("srcset")&&r.setAttribute("srcset",e.src),n({reevaluate:!0,elements:[r]})):e&&e.src&&(r.src=e.src)},D=function(r,e){return(getComputedStyle(r,null)||{})[e]},lt=function(r,e,n){for(n=n||r.offsetWidth;n<a.minSize&&e&&!r._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},_=function(){var r,e,n=[],y=[],g=n,d=function(){var h=g;for(g=n.length?y:n,r=!0,e=!1;h.length;)h.shift()();r=!1},M=function(h,E){r&&!E?h.apply(this,arguments):(g.push(h),e||(e=!0,(p.hidden?N:X)(d)))};return M._lsFlush=d,M}(),at=function(r,e){return e?function(){_(r)}:function(){var n=this,y=arguments;_(function(){r.apply(n,y)})}},ct=function(r){var e,n=0,y=a.throttleDelay,g=a.ricTimeout,d=function(){e=!1,n=q.now(),r()},M=G&&g>49?function(){G(d,{timeout:g}),g!==a.ricTimeout&&(g=a.ricTimeout)}:at(function(){N(d)},!0);return function(h){var E;(h=h===!0)&&(g=33),!e&&(e=!0,E=y-(q.now()-n),E<0&&(E=0),h||E<9?M():N(M,E))}},v=function(r){var e,n,y=99,g=function(){e=null,r()},d=function(){var M=q.now()-n;M<y?N(d,y-M):(G||g)(g)};return function(){n=q.now(),e||(e=N(d,y))}},l=function(){var r,e,n,y,g,d,M,h,E,x,Z,tt,pt=/^img$/i,yt=/^iframe$/i,Et="onscroll"in s&&!/(gle|ing)bot/.test(navigator.userAgent),zt=0,ot=0,k=0,nt=-1,dt=function(t){k--,(!t||k<0||!t.target)&&(k=0)},ft=function(t){return tt==null&&(tt=D(p.body,"visibility")=="hidden"),tt||!(D(t.parentNode,"visibility")=="hidden"&&D(t,"visibility")=="hidden")},bt=function(t,i){var m,P=t,I=ft(t);for(h-=i,Z+=i,E-=i,x+=i;I&&(P=P.offsetParent)&&P!=p.body&&P!=L;)I=(D(P,"opacity")||1)>0,I&&D(P,"overflow")!="visible"&&(m=P.getBoundingClientRect(),I=x>m.left&&E<m.right&&Z>m.top-1&&h<m.bottom+1);return I},vt=function(){var t,i,m,P,I,H,U,Q,J,Y,et,it,O=F.elements;if((y=a.loadMode)&&k<8&&(t=O.length)){for(i=0,nt++;i<t;i++)if(!(!O[i]||O[i]._lazyRace)){if(!Et||F.prematureUnveil&&F.prematureUnveil(O[i])){st(O[i]);continue}if((!(Q=O[i][S]("data-expand"))||!(H=Q*1))&&(H=ot),Y||(Y=!a.expand||a.expand<1?L.clientHeight>500&&L.clientWidth>500?500:370:a.expand,F._defEx=Y,et=Y*a.expFactor,it=a.hFac,tt=null,ot<et&&k<1&&nt>2&&y>2&&!p.hidden?(ot=et,nt=0):y>1&&nt>1&&k<6?ot=Y:ot=zt),J!==H&&(d=innerWidth+H*it,M=innerHeight+H,U=H*-1,J=H),m=O[i].getBoundingClientRect(),(Z=m.bottom)>=U&&(h=m.top)<=M&&(x=m.right)>=U*it&&(E=m.left)<=d&&(Z||x||E||h)&&(a.loadHidden||ft(O[i]))&&(e&&k<3&&!Q&&(y<3||nt<4)||bt(O[i],H))){if(st(O[i]),I=!0,k>9)break}else!I&&e&&!P&&k<4&&nt<4&&y>2&&(r[0]||a.preloadAfterLoad)&&(r[0]||!Q&&(Z||x||E||h||O[i][S](a.sizesAttr)!="auto"))&&(P=r[0]||O[i])}P&&!I&&st(P)}},B=ct(vt),gt=function(t){var i=t.target;if(i._lazyCache){delete i._lazyCache;return}dt(t),b(i,a.loadedClass),f(i,a.loadingClass),w(i,ht),T(i,"lazyloaded")},At=at(gt),ht=function(t){At({target:t.target})},Ct=function(t,i){var m=t.getAttribute("data-load-mode")||a.iframeLoadMode;m==0?t.contentWindow.location.replace(i):m==1&&(t.src=i)},Lt=function(t){var i,m=t[S](a.srcsetAttr);(i=a.customMedia[t[S]("data-media")||t[S]("media")])&&t.setAttribute("media",i),m&&t.setAttribute("srcset",m)},St=at(function(t,i,m,P,I){var H,U,Q,J,Y,et;(Y=T(t,"lazybeforeunveil",i)).defaultPrevented||(P&&(m?b(t,a.autosizesClass):t.setAttribute("sizes",P)),U=t[S](a.srcsetAttr),H=t[S](a.srcAttr),I&&(Q=t.parentNode,J=Q&&$.test(Q.nodeName||"")),et=i.firesLoad||"src"in t&&(U||H||J),Y={target:t},b(t,a.loadingClass),et&&(clearTimeout(n),n=N(dt,2500),w(t,ht,!0)),J&&z.call(Q.getElementsByTagName("source"),Lt),U?t.setAttribute("srcset",U):H&&!J&&(yt.test(t.nodeName)?Ct(t,H):t.src=H),I&&(U||J)&&R(t,{src:H})),t._lazyRace&&delete t._lazyRace,f(t,a.lazyClass),_(function(){var it=t.complete&&t.naturalWidth>1;(!et||it)&&(it&&b(t,a.fastLoadedClass),gt(Y),t._lazyCache=!0,N(function(){"_lazyCache"in t&&delete t._lazyCache},9)),t.loading=="lazy"&&k--},!0)}),st=function(t){if(!t._lazyRace){var i,m=pt.test(t.nodeName),P=m&&(t[S](a.sizesAttr)||t[S]("sizes")),I=P=="auto";(I||!e)&&m&&(t[S]("src")||t.srcset)&&!t.complete&&!u(t,a.errorClass)&&u(t,a.lazyClass)||(i=T(t,"lazyunveilread").detail,I&&A.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,k++,St(t,i,I,P,m))}},Tt=v(function(){a.loadMode=3,B()}),mt=function(){a.loadMode==3&&(a.loadMode=2),Tt()},ut=function(){if(!e){if(q.now()-g<999){N(ut,999);return}e=!0,a.loadMode=3,B(),W("scroll",mt,!0)}};return{_:function(){g=q.now(),F.elements=p.getElementsByClassName(a.lazyClass),r=p.getElementsByClassName(a.lazyClass+" "+a.preloadClass),W("scroll",B,!0),W("resize",B,!0),W("pageshow",function(t){if(t.persisted){var i=p.querySelectorAll("."+a.loadingClass);i.length&&i.forEach&&X(function(){i.forEach(function(m){m.complete&&st(m)})})}}),s.MutationObserver?new MutationObserver(B).observe(L,{childList:!0,subtree:!0,attributes:!0}):(L[V]("DOMNodeInserted",B,!0),L[V]("DOMAttrModified",B,!0),setInterval(B,999)),W("hashchange",B,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(t){p[V](t,B,!0)}),/d$|^c/.test(p.readyState)?ut():(W("load",ut),p[V]("DOMContentLoaded",B),N(ut,2e4)),F.elements.length?(vt(),_._lsFlush()):B()},checkElems:B,unveil:st,_aLSL:mt}}(),A=function(){var r,e=at(function(d,M,h,E){var x,Z,tt;if(d._lazysizesWidth=E,E+="px",d.setAttribute("sizes",E),$.test(M.nodeName||""))for(x=M.getElementsByTagName("source"),Z=0,tt=x.length;Z<tt;Z++)x[Z].setAttribute("sizes",E);h.detail.dataAttr||R(d,h.detail)}),n=function(d,M,h){var E,x=d.parentNode;x&&(h=lt(d,x,h),E=T(d,"lazybeforesizes",{width:h,dataAttr:!!M}),E.defaultPrevented||(h=E.detail.width,h&&h!==d._lazysizesWidth&&e(d,x,E,h)))},y=function(){var d,M=r.length;if(M)for(d=0;d<M;d++)n(r[d])},g=v(y);return{_:function(){r=p.getElementsByClassName(a.autosizesClass),W("resize",g)},checkElems:g,updateElem:n}}(),C=function(){!C.i&&p.getElementsByClassName&&(C.i=!0,A._(),l._())};return N(function(){a.init&&C()}),F={cfg:a,autoSizer:A,loader:l,init:C,uP:R,aC:b,rC:f,hC:u,fire:T,gW:lt,rAF:_},F})},1770:function(rt,K,s){var p,q,F;(function(a,L){if(!!a){var j=function(){L(a.lazySizes),a.removeEventListener("lazyunveilread",j,!0)};L=L.bind(null,a,a.document),rt.exports?L(s(7090)):(q=[s(7090)],p=L,F=typeof p=="function"?p.apply(K,q):p,F!==void 0&&(rt.exports=F))}})(typeof window!="undefined"?window:0,function(a,L,j){"use strict";if(!!a.addEventListener){var V=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,S=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,W=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,N=/^picture$/i,X=j.cfg,G=function(o){return getComputedStyle(o,null)||{}},$={getParent:function(o,c){var z=o,u=o.parentNode;return(!c||c=="prev")&&u&&N.test(u.nodeName||"")&&(u=u.parentNode),c!="self"&&(c=="prev"?z=o.previousElementSibling:c&&(u.closest||a.jQuery)?z=(u.closest?u.closest(c):jQuery(u).closest(c)[0])||u:z=u),z},getFit:function(o){var c,z,u=G(o),b=u.content||u.fontFamily,f={fit:o._lazysizesParentFit||o.getAttribute("data-parent-fit")};return!f.fit&&b&&(c=b.match(S))&&(f.fit=c[1]),f.fit?(z=o._lazysizesParentContainer||o.getAttribute("data-parent-container"),!z&&b&&(c=b.match(W))&&(z=c[1]),f.parent=$.getParent(o,z)):f.fit=u.objectFit,f},getImageRatio:function(o){var c,z,u,b,f,w,T,R=o.parentNode,D=R&&N.test(R.nodeName||"")?R.querySelectorAll("source, img"):[o];for(c=0;c<D.length;c++)if(o=D[c],z=o.getAttribute(X.srcsetAttr)||o.getAttribute("srcset")||o.getAttribute("data-pfsrcset")||o.getAttribute("data-risrcset")||"",u=o._lsMedia||o.getAttribute("media"),u=X.customMedia[o.getAttribute("data-media")||u]||u,z&&(!u||(a.matchMedia&&matchMedia(u)||{}).matches)){b=parseFloat(o.getAttribute("data-aspectratio")),b||(f=z.match(V),f?f[2]=="w"?(w=f[1],T=f[3]):(w=f[3],T=f[1]):(w=o.getAttribute("width"),T=o.getAttribute("height")),b=w/T);break}return b},calculateSize:function(o,c){var z,u,b,f,w=this.getFit(o),T=w.fit,R=w.parent;return T!="width"&&(T!="contain"&&T!="cover"||!(b=this.getImageRatio(o)))?c:(R?c=R.clientWidth:R=o,f=c,T=="width"?f=c:(u=R.clientHeight,(z=c/u)&&(T=="cover"&&z<b||T=="contain"&&z>b)&&(f=c*(b/z))),f)}};j.parentFit=$,L.addEventListener("lazybeforesizes",function(o){if(!(o.defaultPrevented||o.detail.instance!=j)){var c=o.target;o.detail.width=$.calculateSize(c,o.detail.width)}})}})}}]);
