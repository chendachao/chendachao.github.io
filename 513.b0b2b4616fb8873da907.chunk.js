(self.webpackChunkchendachao=self.webpackChunkchendachao||[]).push([[513],{85513:function(et,Y,c){"use strict";c.r(Y);var p=c(77090),j=c(31770),I=c(43947),a=c(60010),P=c(9869),O=function(){var u=window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop||window.scrollY;return u},q=function(){var u=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight;return u},M=function(){var u=document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft;return u},B=O();window.addEventListener("scroll",function(n){console.log("Scroll vertical or herizontal");var u=O(),C=q();if(u>B){console.log("Scroll down");var r=u+window.innerHeight>=C;r&&console.log("you're at the bottom of the page")}else{console.log("Scroll up");var e=u===0;e&&console.log("you're at the top of the page")}B=u});var F=function n(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:20,C=arguments.length>1?arguments[1]:void 0;if(C)window.scrollTo({top:0,behavior:"smooth"});else{var r=O();r>0&&(window.requestAnimationFrame(n),window.scrollTo(0,r-r/u))}},G=function n(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:20,C=arguments.length>1?arguments[1]:void 0,r=q();if(C)window.scrollTo({top:r,behavior:"smooth"});else{var e=O(),i=e+window.innerHeight-r;i<0&&(window.requestAnimationFrame(n),window.scrollTo(0,i-i/u))}},J=function(u){u.scrollIntoView({behavior:"smooth"})},V=document.querySelector(".scroll-to-top-btn");V&&V.addEventListener("click",function(){F(null,!0)});var s=document.querySelector(".scroll-to-bottom-btn");s&&s.addEventListener("click",function(){G(null,!0)});var d=document.querySelector(".scroll-to-view-btn");d&&d.addEventListener("click",function(){J(document.querySelector(".hello"))});var A=new Date(2020,3,4),v=new Date(2020,7,4);function z(){var n=function(f){var g=document.querySelector("body");g.setAttribute("data-theme",f)};if((0,P.Ti)(new Date,A,v))n("gray");else{var u=window.matchMedia("(prefers-color-scheme: dark)"),C=u.matches,r=localStorage.getItem("theme")||C&&"dark";r&&n(r);var e=document.querySelector(".moon");e.addEventListener("click",function(){var i=document.querySelector("body"),f=i.getAttribute("data-theme")==="light"?"dark":"light";n(f),localStorage.setItem("theme",f)})}}var y=z,S=c(64498);y(),S.Z.init().then(function(){document.title=S.Z.format("APP.HTML_TITLE");var n=document.createElement("script");n.setAttribute("data-isso","https://larrychen.tech/isso/"),n.setAttribute("data-isso-css",!0),n.setAttribute("data-isso-lang",S.Z.locale),n.setAttribute("data-isso-reply-to-self",!0),n.setAttribute("data-isso-require-author",!0),n.setAttribute("data-isso-require-email",!1),n.setAttribute("data-isso-max-comments-top",10),n.setAttribute("data-isso-max-comments-nested",5),n.setAttribute("data-isso-reveal-on-click",5),n.setAttribute("data-isso-avatar",!0),n.setAttribute("data-isso-avatar-bg","#f0f0f0"),n.setAttribute("data-isso-avatar-fg","#9abf88 #5698c4 #e279a3 #9163b6"),n.setAttribute("data-isso-vote",!0),n.setAttribute("data-isso-vote-level","0,5,10,25,100"),n.setAttribute("data-isso-feed",!0),n.src="https://larrychen.tech/isso/js/embed.min.js",n.defer=!0,n.setAttribute("crossorigin","anonymous"),n.onload=function(){document.querySelector(".comment-container").removeAttribute("hidden")},n.onerror=function(){document.querySelector(".comment-container").setAttribute("hidden","")},document.body.append(n)});var L=document.querySelectorAll(".icon.loading");if(L.length){var R=L[0].querySelector("svg");R.addEventListener("load",function(){L.forEach(function(n){n.classList.remove("loading")})})}setTimeout(function(){Promise.all([c.e(90),c.e(784)]).then(c.bind(c,17237)).then(function(n){var u=n.TooltipAndPopover;return u()})},10);var D=document.querySelector(".qrcode-handler");Promise.all([c.e(573),c.e(895)]).then(c.bind(c,48895)).then(function(n){var u=n.showModal,C=n.displayQRCode;D.removeAttribute("hidden"),D.addEventListener("click",function(){u(),C()})});var it=function(){return Promise.all([c.e(342),c.e(644)]).then(c.bind(c,40644)).then(function(u){var C=u.Intro;return new C})},X=document.querySelector(".start-replay-tour"),rt=document.querySelector(".start-hint");if(X.addEventListener("click",function(){it().then(function(n){return n.initAndShowIntro()})}),rt.addEventListener("click",function(){it().then(function(n){return n.toggleHint()})}),(0,P.w1)()){var ut=document.querySelector("#btnInstall");ut.setAttribute("hidden","")}window.addEventListener("load",function(){var n=document.querySelector(".developer-mode-link");if(n.setAttribute("href","/assets/data/".concat(S.Z.locale,"/chendachao.json")),navigator.share){var u=document.querySelector(".share-btn");u.removeAttribute("hidden"),u.addEventListener("click",function(){var e=document.location.href,i=document.querySelector("link[rel=canonical]");i!==null&&(e=i.href),navigator.share({title:"Larry Chen' Homepage",text:"Welcome to visit Larry's homepage",url:e}).then(function(){return console.log("Successful share!")}).catch(function(f){return console.log("Error sharing",f)})})}(function(){var e=function(){var l=document.querySelector(".print-site-qrcode"),b=document.querySelector(".my-portfolio"),h=b.hasAttribute("open");l.style.position="absolute",l.style.right="15px",l.style.top="35px",l.style.display="inherit",h||b.setAttribute("open","")},i=function(){var l=document.querySelector(".print-site-qrcode"),b=document.querySelector(".my-portfolio"),h=b.hasAttribute("open");l.style.display="none",h||b.removeAttribute("open")};if(window.matchMedia){var f=window.matchMedia("print");f.addEventListener("change",function(g){g.matches?e():i()})}window.addEventListener("beforeprint",e),window.addEventListener("afterprint",i)})();var C,r=function(i){var f=navigator.onLine?"":S.Z.format("APP.OFFLINE");f?C=a.Z.error(f.toUpperCase(),"",{timeOut:0,positionClass:"toast-top-full-width"}):C&&(C.remove(),a.Z.success(S.Z.format("APP.ONLINE"),"",{timeOut:800}))};r(),window.addEventListener("online",r),window.addEventListener("offline",r)});var ot=function(u){var C=(u.error||u.message||u.reason.message).toString();a.Z.error(C,S.Z.format("APP.GLOBAL_ERROR")),I.Tb(u.error)};window.addEventListener("error",ot),window.addEventListener("unhandledrejection",ot)},77090:function(et){(function(Y,c){var p=c(Y,Y.document,Date);Y.lazySizes=p,et.exports&&(et.exports=p)})(typeof window!="undefined"?window:{},function(c,p,j){"use strict";var I,a;if(function(){var r,e={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};a=c.lazySizesConfig||c.lazysizesConfig||{};for(r in e)r in a||(a[r]=e[r])}(),!p||!p.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var P=p.documentElement,O=c.HTMLPictureElement,q="addEventListener",M="getAttribute",B=c[q].bind(c),F=c.setTimeout,G=c.requestAnimationFrame||F,J=c.requestIdleCallback,V=/^picture$/i,s=["load","error","lazyincluded","_lazyloaded"],d={},A=Array.prototype.forEach,v=function(r,e){return d[e]||(d[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),d[e].test(r[M]("class")||"")&&d[e]},z=function(r,e){v(r,e)||r.setAttribute("class",(r[M]("class")||"").trim()+" "+e)},y=function(r,e){var i;(i=v(r,e))&&r.setAttribute("class",(r[M]("class")||"").replace(i," "))},S=function(r,e,i){var f=i?q:"removeEventListener";i&&S(r,e),s.forEach(function(g){r[f](g,e)})},L=function(r,e,i,f,g){var l=p.createEvent("Event");return i||(i={}),i.instance=I,l.initEvent(e,!f,!g),l.detail=i,r.dispatchEvent(l),l},R=function(r,e){var i;!O&&(i=c.picturefill||a.pf)?(e&&e.src&&!r[M]("srcset")&&r.setAttribute("srcset",e.src),i({reevaluate:!0,elements:[r]})):e&&e.src&&(r.src=e.src)},D=function(r,e){return(getComputedStyle(r,null)||{})[e]},it=function(r,e,i){for(i=i||r.offsetWidth;i<a.minSize&&e&&!r._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},X=function(){var r,e,i=[],f=[],g=i,l=function(){var h=g;for(g=i.length?f:i,r=!0,e=!1;h.length;)h.shift()();r=!1},b=function(h,E){r&&!E?h.apply(this,arguments):(g.push(h),e||(e=!0,(p.hidden?F:G)(l)))};return b._lsFlush=l,b}(),rt=function(r,e){return e?function(){X(r)}:function(){var i=this,f=arguments;X(function(){r.apply(i,f)})}},ut=function(r){var e,i=0,f=a.throttleDelay,g=a.ricTimeout,l=function(){e=!1,i=j.now(),r()},b=J&&g>49?function(){J(l,{timeout:g}),g!==a.ricTimeout&&(g=a.ricTimeout)}:rt(function(){F(l)},!0);return function(h){var E;(h=h===!0)&&(g=33),!e&&(e=!0,E=f-(j.now()-i),E<0&&(E=0),h||E<9?b():F(b,E))}},ot=function(r){var e,i,f=99,g=function(){e=null,r()},l=function(){var b=j.now()-i;b<f?F(l,f-b):(J||g)(g)};return function(){i=j.now(),e||(e=F(l,f))}},n=function(){var r,e,i,f,g,l,b,h,E,x,Z,_,pt=/^img$/i,yt=/^iframe$/i,bt="onscroll"in c&&!/(gle|ing)bot/.test(navigator.userAgent),Et=0,st=0,k=0,at=-1,dt=function(t){k--,(!t||k<0||!t.target)&&(k=0)},ft=function(t){return _==null&&(_=D(p.body,"visibility")=="hidden"),_||!(D(t.parentNode,"visibility")=="hidden"&&D(t,"visibility")=="hidden")},At=function(t,o){var m,T=t,N=ft(t);for(h-=o,Z+=o,E-=o,x+=o;N&&(T=T.offsetParent)&&T!=p.body&&T!=P;)N=(D(T,"opacity")||1)>0,N&&D(T,"overflow")!="visible"&&(m=T.getBoundingClientRect(),N=x>m.left&&E<m.right&&Z>m.top-1&&h<m.bottom+1);return N},vt=function(){var t,o,m,T,N,w,$,Q,K,U,tt,nt,W=I.elements;if((f=a.loadMode)&&k<8&&(t=W.length)){for(o=0,at++;o<t;o++)if(!(!W[o]||W[o]._lazyRace)){if(!bt||I.prematureUnveil&&I.prematureUnveil(W[o])){lt(W[o]);continue}if((!(Q=W[o][M]("data-expand"))||!(w=Q*1))&&(w=st),U||(U=!a.expand||a.expand<1?P.clientHeight>500&&P.clientWidth>500?500:370:a.expand,I._defEx=U,tt=U*a.expFactor,nt=a.hFac,_=null,st<tt&&k<1&&at>2&&f>2&&!p.hidden?(st=tt,at=0):f>1&&at>1&&k<6?st=U:st=Et),K!==w&&(l=innerWidth+w*nt,b=innerHeight+w,$=w*-1,K=w),m=W[o].getBoundingClientRect(),(Z=m.bottom)>=$&&(h=m.top)<=b&&(x=m.right)>=$*nt&&(E=m.left)<=l&&(Z||x||E||h)&&(a.loadHidden||ft(W[o]))&&(e&&k<3&&!Q&&(f<3||at<4)||At(W[o],w))){if(lt(W[o]),N=!0,k>9)break}else!N&&e&&!T&&k<4&&at<4&&f>2&&(r[0]||a.preloadAfterLoad)&&(r[0]||!Q&&(Z||x||E||h||W[o][M](a.sizesAttr)!="auto"))&&(T=r[0]||W[o])}T&&!N&&lt(T)}},H=ut(vt),ht=function(t){var o=t.target;if(o._lazyCache){delete o._lazyCache;return}dt(t),z(o,a.loadedClass),y(o,a.loadingClass),S(o,gt),L(o,"lazyloaded")},zt=rt(ht),gt=function(t){zt({target:t.target})},Ct=function(t,o){var m=t.getAttribute("data-load-mode")||a.iframeLoadMode;m==0?t.contentWindow.location.replace(o):m==1&&(t.src=o)},Lt=function(t){var o,m=t[M](a.srcsetAttr);(o=a.customMedia[t[M]("data-media")||t[M]("media")])&&t.setAttribute("media",o),m&&t.setAttribute("srcset",m)},St=rt(function(t,o,m,T,N){var w,$,Q,K,U,tt;(U=L(t,"lazybeforeunveil",o)).defaultPrevented||(T&&(m?z(t,a.autosizesClass):t.setAttribute("sizes",T)),$=t[M](a.srcsetAttr),w=t[M](a.srcAttr),N&&(Q=t.parentNode,K=Q&&V.test(Q.nodeName||"")),tt=o.firesLoad||"src"in t&&($||w||K),U={target:t},z(t,a.loadingClass),tt&&(clearTimeout(i),i=F(dt,2500),S(t,gt,!0)),K&&A.call(Q.getElementsByTagName("source"),Lt),$?t.setAttribute("srcset",$):w&&!K&&(yt.test(t.nodeName)?Ct(t,w):t.src=w),N&&($||K)&&R(t,{src:w})),t._lazyRace&&delete t._lazyRace,y(t,a.lazyClass),X(function(){var nt=t.complete&&t.naturalWidth>1;(!tt||nt)&&(nt&&z(t,a.fastLoadedClass),ht(U),t._lazyCache=!0,F(function(){"_lazyCache"in t&&delete t._lazyCache},9)),t.loading=="lazy"&&k--},!0)}),lt=function(t){if(!t._lazyRace){var o,m=pt.test(t.nodeName),T=m&&(t[M](a.sizesAttr)||t[M]("sizes")),N=T=="auto";(N||!e)&&m&&(t[M]("src")||t.srcset)&&!t.complete&&!v(t,a.errorClass)&&v(t,a.lazyClass)||(o=L(t,"lazyunveilread").detail,N&&u.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,k++,St(t,o,N,T,m))}},Tt=ot(function(){a.loadMode=3,H()}),mt=function(){a.loadMode==3&&(a.loadMode=2),Tt()},ct=function(){if(!e){if(j.now()-g<999){F(ct,999);return}e=!0,a.loadMode=3,H(),B("scroll",mt,!0)}};return{_:function(){g=j.now(),I.elements=p.getElementsByClassName(a.lazyClass),r=p.getElementsByClassName(a.lazyClass+" "+a.preloadClass),B("scroll",H,!0),B("resize",H,!0),B("pageshow",function(t){if(t.persisted){var o=p.querySelectorAll("."+a.loadingClass);o.length&&o.forEach&&G(function(){o.forEach(function(m){m.complete&&lt(m)})})}}),c.MutationObserver?new MutationObserver(H).observe(P,{childList:!0,subtree:!0,attributes:!0}):(P[q]("DOMNodeInserted",H,!0),P[q]("DOMAttrModified",H,!0),setInterval(H,999)),B("hashchange",H,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(t){p[q](t,H,!0)}),/d$|^c/.test(p.readyState)?ct():(B("load",ct),p[q]("DOMContentLoaded",H),F(ct,2e4)),I.elements.length?(vt(),X._lsFlush()):H()},checkElems:H,unveil:lt,_aLSL:mt}}(),u=function(){var r,e=rt(function(l,b,h,E){var x,Z,_;if(l._lazysizesWidth=E,E+="px",l.setAttribute("sizes",E),V.test(b.nodeName||""))for(x=b.getElementsByTagName("source"),Z=0,_=x.length;Z<_;Z++)x[Z].setAttribute("sizes",E);h.detail.dataAttr||R(l,h.detail)}),i=function(l,b,h){var E,x=l.parentNode;x&&(h=it(l,x,h),E=L(l,"lazybeforesizes",{width:h,dataAttr:!!b}),E.defaultPrevented||(h=E.detail.width,h&&h!==l._lazysizesWidth&&e(l,x,E,h)))},f=function(){var l,b=r.length;if(b)for(l=0;l<b;l++)i(r[l])},g=ot(f);return{_:function(){r=p.getElementsByClassName(a.autosizesClass),B("resize",g)},checkElems:g,updateElem:i}}(),C=function(){!C.i&&p.getElementsByClassName&&(C.i=!0,u._(),n._())};return F(function(){a.init&&C()}),I={cfg:a,autoSizer:u,loader:n,init:C,uP:R,aC:z,rC:y,hC:v,fire:L,gW:it,rAF:X},I})},31770:function(et,Y,c){var p,j,I;(function(a,P){if(!!a){var O=function(){P(a.lazySizes),a.removeEventListener("lazyunveilread",O,!0)};P=P.bind(null,a,a.document),et.exports?P(c(77090)):(j=[c(77090)],p=P,I=typeof p=="function"?p.apply(Y,j):p,I!==void 0&&(et.exports=I))}})(typeof window!="undefined"?window:0,function(a,P,O){"use strict";if(!!a.addEventListener){var q=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,M=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,B=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,F=/^picture$/i,G=O.cfg,J=function(s){return getComputedStyle(s,null)||{}},V={getParent:function(s,d){var A=s,v=s.parentNode;return(!d||d=="prev")&&v&&F.test(v.nodeName||"")&&(v=v.parentNode),d!="self"&&(d=="prev"?A=s.previousElementSibling:d&&(v.closest||a.jQuery)?A=(v.closest?v.closest(d):jQuery(v).closest(d)[0])||v:A=v),A},getFit:function(s){var d,A,v=J(s),z=v.content||v.fontFamily,y={fit:s._lazysizesParentFit||s.getAttribute("data-parent-fit")};return!y.fit&&z&&(d=z.match(M))&&(y.fit=d[1]),y.fit?(A=s._lazysizesParentContainer||s.getAttribute("data-parent-container"),!A&&z&&(d=z.match(B))&&(A=d[1]),y.parent=V.getParent(s,A)):y.fit=v.objectFit,y},getImageRatio:function(s){var d,A,v,z,y,S,L,R=s.parentNode,D=R&&F.test(R.nodeName||"")?R.querySelectorAll("source, img"):[s];for(d=0;d<D.length;d++)if(s=D[d],A=s.getAttribute(G.srcsetAttr)||s.getAttribute("srcset")||s.getAttribute("data-pfsrcset")||s.getAttribute("data-risrcset")||"",v=s._lsMedia||s.getAttribute("media"),v=G.customMedia[s.getAttribute("data-media")||v]||v,A&&(!v||(a.matchMedia&&matchMedia(v)||{}).matches)){z=parseFloat(s.getAttribute("data-aspectratio")),z||(y=A.match(q),y?y[2]=="w"?(S=y[1],L=y[3]):(S=y[3],L=y[1]):(S=s.getAttribute("width"),L=s.getAttribute("height")),z=S/L);break}return z},calculateSize:function(s,d){var A,v,z,y,S=this.getFit(s),L=S.fit,R=S.parent;return L!="width"&&(L!="contain"&&L!="cover"||!(z=this.getImageRatio(s)))?d:(R?d=R.clientWidth:R=s,y=d,L=="width"?y=d:(v=R.clientHeight,(A=d/v)&&(L=="cover"&&A<z||L=="contain"&&A>z)&&(y=d*(z/A))),y)}};O.parentFit=V,P.addEventListener("lazybeforesizes",function(s){if(!(s.defaultPrevented||s.detail.instance!=O)){var d=s.target;s.detail.width=V.calculateSize(d,s.detail.width)}})}})}}]);