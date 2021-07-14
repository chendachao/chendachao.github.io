var c=(g,D,d)=>new Promise((x,y)=>{var M=q=>{try{R(d.next(q))}catch(k){y(k)}},S=q=>{try{R(d.throw(q))}catch(k){y(k)}},R=q=>q.done?x(q.value):Promise.resolve(q.value).then(M,S);R((d=d.apply(g,D)).next())});define("./workbox-7c7a397b.js",["exports"],function(g){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(n){}const D=(n,...e)=>{let t=n;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t};class d extends Error{constructor(e,t){super(D(e,t)),this.name=e,this.details=t}}try{self["workbox:routing:6.1.5"]&&_()}catch(n){}const x=n=>n&&typeof n=="object"?n:{handle:n};class y{constructor(e,t,s="GET"){this.handler=x(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=x(e)}}class M extends y{constructor(e,t,s){super(({url:a})=>{const i=e.exec(a.href);if(i&&(a.origin===location.origin||i.index===0))return i.slice(1)},t,s)}}class S{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const i=new Request(...a);return this.handleRequest({request:i,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let o=r&&r.handler;const h=e.method;if(!o&&this.i.has(h)&&(o=this.i.get(h)),!o)return;let u;try{u=o.handle({url:s,request:e,event:t,params:i})}catch(p){u=Promise.reject(p)}const w=r&&r.catchHandler;return u instanceof Promise&&(this.o||w)&&(u=u.catch(p=>c(this,null,function*(){if(w)try{return yield w.handle({url:s,request:e,event:t,params:i})}catch(l){p=l}if(this.o)return this.o.handle({url:s,request:e,event:t});throw p}))),u}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const i=this.t.get(s.method)||[];for(const r of i){let o;const h=r.match({url:e,sameOrigin:t,request:s,event:a});if(h)return o=h,(Array.isArray(h)&&h.length===0||h.constructor===Object&&Object.keys(h).length===0||typeof h=="boolean")&&(o=void 0),{route:r,params:o}}return{}}setDefaultHandler(e,t="GET"){this.i.set(t,x(e))}setCatchHandler(e){this.o=x(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new d("unregister-route-but-not-found-with-method",{method:e.method});const t=this.t.get(e.method).indexOf(e);if(!(t>-1))throw new d("unregister-route-route-not-registered");this.t.get(e.method).splice(t,1)}}let R;const q=()=>(R||(R=new S,R.addFetchListener(),R.addCacheListener()),R);function k(n,e,t){let s;if(typeof n=="string"){const a=new URL(n,location.href);s=new y(({url:i})=>i.href===a.href,e,t)}else if(n instanceof RegExp)s=new M(n,e,t);else if(typeof n=="function")s=new y(n,e,t);else{if(!(n instanceof y))throw new d("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});s=n}return q().registerRoute(s),s}try{self["workbox:strategies:6.1.5"]&&_()}catch(n){}const $={cacheWillUpdate:e=>c(this,[e],function*({response:n}){return n.status===200||n.status===0?n:null})},E={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},A=n=>[E.prefix,n,E.suffix].filter(e=>e&&e.length>0).join("-"),ie=n=>n||A(E.googleAnalytics),I=n=>n||A(E.precache),G=n=>n||A(E.runtime);function P(){return(P=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n}).apply(this,arguments)}function J(n,e){const t=new URL(n);for(const s of e)t.searchParams.delete(s);return t.href}class re{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const V=new Set;function Y(n){return new Promise(e=>setTimeout(e,n))}function K(n){return typeof n=="string"?new Request(n):n}class ce{constructor(e,t){this.h={},Object.assign(this,t),this.event=t.event,this.u=e,this.l=new re,this.p=[],this.m=[...e.plugins],this.g=new Map;for(const s of this.m)this.g.set(s,{});this.event.waitUntil(this.l.promise)}fetch(e){return c(this,null,function*(){const{event:t}=this;let s=K(e);if(s.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const r=yield t.preloadResponse;if(r)return r}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const r of this.iterateCallbacks("requestWillFetch"))s=yield r({request:s.clone(),event:t})}catch(r){throw new d("plugin-error-request-will-fetch",{thrownError:r})}const i=s.clone();try{let r;r=yield fetch(s,s.mode==="navigate"?void 0:this.u.fetchOptions);for(const o of this.iterateCallbacks("fetchDidSucceed"))r=yield o({event:t,request:i,response:r});return r}catch(r){throw a&&(yield this.runCallbacks("fetchDidFail",{error:r,event:t,originalRequest:a.clone(),request:i.clone()})),r}})}fetchAndCachePut(e){return c(this,null,function*(){const t=yield this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t})}cacheMatch(e){return c(this,null,function*(){const t=K(e);let s;const{cacheName:a,matchOptions:i}=this.u,r=yield this.getCacheKey(t,"read"),o=P({},i,{cacheName:a});s=yield caches.match(r,o);for(const h of this.iterateCallbacks("cachedResponseWillBeUsed"))s=(yield h({cacheName:a,matchOptions:i,cachedResponse:s,request:r,event:this.event}))||void 0;return s})}cachePut(e,t){return c(this,null,function*(){const s=K(e);yield Y(0);const a=yield this.getCacheKey(s,"write");if(!t)throw new d("cache-put-with-no-response",{url:(i=a.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const r=yield this.q(t);if(!r)return!1;const{cacheName:o,matchOptions:h}=this.u,u=yield self.caches.open(o),w=this.hasCallback("cacheDidUpdate"),p=w?yield function(l,f,m,v){return c(this,null,function*(){const L=J(f.url,m);if(f.url===L)return l.match(f,v);const Le=P({},v,{ignoreSearch:!0}),Ee=yield l.keys(f,Le);for(const ae of Ee)if(L===J(ae.url,m))return l.match(ae,v)})}(u,a.clone(),["__WB_REVISION__"],h):null;try{yield u.put(a,w?r.clone():r)}catch(l){throw l.name==="QuotaExceededError"&&(yield function(){return c(this,null,function*(){for(const f of V)yield f()})}()),l}for(const l of this.iterateCallbacks("cacheDidUpdate"))yield l({cacheName:o,oldResponse:p,newResponse:r.clone(),request:a,event:this.event});return!0})}getCacheKey(e,t){return c(this,null,function*(){if(!this.h[t]){let s=e;for(const a of this.iterateCallbacks("cacheKeyWillBeUsed"))s=K(yield a({mode:t,request:s,event:this.event,params:this.params}));this.h[t]=s}return this.h[t]})}hasCallback(e){for(const t of this.u.plugins)if(e in t)return!0;return!1}runCallbacks(e,t){return c(this,null,function*(){for(const s of this.iterateCallbacks(e))yield s(t)})}*iterateCallbacks(e){for(const t of this.u.plugins)if(typeof t[e]=="function"){const s=this.g.get(t);yield i=>{const r=P({},i,{state:s});return t[e](r)}}}waitUntil(e){return this.p.push(e),e}doneWaiting(){return c(this,null,function*(){let e;for(;e=this.p.shift();)yield e})}destroy(){this.l.resolve()}q(e){return c(this,null,function*(){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=(yield a({request:this.request,response:t,event:this.event}))||void 0,s=!0,!t)break;return s||t&&t.status!==200&&(t=void 0),t})}}class O{constructor(e={}){this.cacheName=G(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,i=new ce(this,{event:t,request:s,params:a}),r=this.R(i,s,t);return[r,this.v(r,i,s,t)]}R(e,t,s){return c(this,null,function*(){let a;yield e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=yield this.U(t,e),!a||a.type==="error")throw new d("no-response",{url:t.url})}catch(i){for(const r of e.iterateCallbacks("handlerDidError"))if(a=yield r({error:i,event:s,request:t}),a)break;if(!a)throw i}for(const i of e.iterateCallbacks("handlerWillRespond"))a=yield i({event:s,request:t,response:a});return a})}v(e,t,s,a){return c(this,null,function*(){let i,r;try{i=yield e}catch(o){}try{yield t.runCallbacks("handlerDidRespond",{event:a,request:s,response:i}),yield t.doneWaiting()}catch(o){r=o}if(yield t.runCallbacks("handlerDidComplete",{event:a,request:s,response:i,error:r}),t.destroy(),r)throw r})}}function Q(n){n.then(()=>{})}class W{constructor(e,t,{onupgradeneeded:s,onversionchange:a}={}){this._=null,this.L=e,this.T=t,this.N=s,this.D=a||(()=>this.close())}get db(){return this._}open(){return c(this,null,function*(){if(!this._)return this._=yield new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const a=indexedDB.open(this.L,this.T);a.onerror=()=>t(a.error),a.onupgradeneeded=i=>{s?(a.transaction.abort(),a.result.close()):typeof this.N=="function"&&this.N(i)},a.onsuccess=()=>{const i=a.result;s?i.close():(i.onversionchange=this.D.bind(this),e(i))}}),this})}getKey(e,t){return c(this,null,function*(){return(yield this.getAllKeys(e,t,1))[0]})}getAll(e,t,s){return c(this,null,function*(){return yield this.getAllMatching(e,{query:t,count:s})})}getAllKeys(e,t,s){return c(this,null,function*(){return(yield this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(a=>a.key)})}getAllMatching(o){return c(this,arguments,function*(e,{index:t,query:s=null,direction:a="next",count:i,includeKeys:r=!1}={}){return yield this.transaction([e],"readonly",(h,u)=>{const w=h.objectStore(e),p=t?w.index(t):w,l=[],f=p.openCursor(s,a);f.onsuccess=()=>{const m=f.result;m?(l.push(r?m:m.value),i&&l.length>=i?u(l):m.continue()):u(l)}})})}transaction(e,t,s){return c(this,null,function*(){return yield this.open(),yield new Promise((a,i)=>{const r=this._.transaction(e,t);r.onabort=()=>i(r.error),r.oncomplete=()=>a(),s(r,o=>a(o))})})}P(e,t,s,...a){return c(this,null,function*(){return yield this.transaction([t],s,(i,r)=>{const o=i.objectStore(t),h=o[e].apply(o,a);h.onsuccess=()=>r(h.result)})})}close(){this._&&(this._.close(),this._=null)}}W.prototype.OPEN_TIMEOUT=2e3;const oe={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[n,e]of Object.entries(oe))for(const t of e)t in IDBObjectStore.prototype&&(W.prototype[t]=function(s,...a){return c(this,null,function*(){return yield this.P(t,s,n,...a)})});try{self["workbox:expiration:6.1.5"]&&_()}catch(n){}const C="cache-entries",X=n=>{const e=new URL(n,location.href);return e.hash="",e.href};class he{constructor(e){this.k=e,this._=new W("workbox-expiration",1,{onupgradeneeded:t=>this.O(t)})}O(e){const t=e.target.result.createObjectStore(C,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(s=>c(this,null,function*(){yield new Promise((a,i)=>{const r=indexedDB.deleteDatabase(s);r.onerror=()=>{i(r.error)},r.onblocked=()=>{i(new Error("Delete blocked"))},r.onsuccess=()=>{a()}})}))(this.k)}setTimestamp(e,t){return c(this,null,function*(){const s={url:e=X(e),timestamp:t,cacheName:this.k,id:this.C(e)};yield this._.put(C,s)})}getTimestamp(e){return c(this,null,function*(){return(yield this._.get(C,this.C(e))).timestamp})}expireEntries(e,t){return c(this,null,function*(){const s=yield this._.transaction(C,"readwrite",(i,r)=>{const o=i.objectStore(C).index("timestamp").openCursor(null,"prev"),h=[];let u=0;o.onsuccess=()=>{const w=o.result;if(w){const p=w.value;p.cacheName===this.k&&(e&&p.timestamp<e||t&&u>=t?h.push(w.value):u++),w.continue()}else r(h)}}),a=[];for(const i of s)yield this._.delete(C,i.id),a.push(i.url);return a})}C(e){return this.k+"|"+X(e)}}class le{constructor(e,t={}){this.S=!1,this.K=!1,this.j=t.maxEntries,this.W=t.maxAgeSeconds,this.A=t.matchOptions,this.k=e,this.I=new he(e)}expireEntries(){return c(this,null,function*(){if(this.S)return void(this.K=!0);this.S=!0;const e=this.W?Date.now()-1e3*this.W:0,t=yield this.I.expireEntries(e,this.j),s=yield self.caches.open(this.k);for(const a of t)yield s.delete(a,this.A);this.S=!1,this.K&&(this.K=!1,Q(this.expireEntries()))})}updateTimestamp(e){return c(this,null,function*(){yield this.I.setTimestamp(e,Date.now())})}isURLExpired(e){return c(this,null,function*(){return this.W?(yield this.I.getTimestamp(e))<Date.now()-1e3*this.W:!1})}delete(){return c(this,null,function*(){this.K=!1,yield this.I.expireEntries(1/0)})}}function Z(n,e){const t=e();return n.waitUntil(t),t}try{self["workbox:precaching:6.1.5"]&&_()}catch(n){}function ue(n){if(!n)throw new d("add-to-cache-list-unexpected-type",{entry:n});if(typeof n=="string"){const i=new URL(n,location.href);return{cacheKey:i.href,url:i.href}}const{revision:e,url:t}=n;if(!t)throw new d("add-to-cache-list-unexpected-type",{entry:n});if(!e){const i=new URL(t,location.href);return{cacheKey:i.href,url:i.href}}const s=new URL(t,location.href),a=new URL(t,location.href);return s.searchParams.set("__WB_REVISION__",e),{cacheKey:s.href,url:a.href}}class de{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=s=>c(this,[s],function*({request:e,state:t}){t&&(t.originalRequest=e)}),this.cachedResponseWillBeUsed=a=>c(this,[a],function*({event:e,state:t,cachedResponse:s}){if(e.type==="install"){const i=t.originalRequest.url;s?this.notUpdatedURLs.push(i):this.updatedURLs.push(i)}return s})}}class fe{constructor({precacheController:e}){this.cacheKeyWillBeUsed=a=>c(this,[a],function*({request:t,params:s}){const i=s&&s.cacheKey||this.M.getCacheKeyForURL(t.url);return i?new Request(i):t}),this.M=e}}let T,F;function we(n,e){return c(this,null,function*(){let t=null;if(n.url&&(t=new URL(n.url).origin),t!==self.location.origin)throw new d("cross-origin-copy-response",{origin:t});const s=n.clone(),a={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=e?e(a):a,r=function(){if(T===void 0){const o=new Response("");if("body"in o)try{new Response(o.body),T=!0}catch(h){T=!1}T=!1}return T}()?s.body:yield s.blob();return new Response(r,i)})}class U extends O{constructor(e={}){e.cacheName=I(e.cacheName),super(e),this.$=e.fallbackToNetwork!==!1,this.plugins.push(U.copyRedirectedCacheableResponsesPlugin)}U(e,t){return c(this,null,function*(){return(yield t.cacheMatch(e))||(t.event&&t.event.type==="install"?yield this.B(e,t):yield this.F(e,t))})}F(e,t){return c(this,null,function*(){let s;if(!this.$)throw new d("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=yield t.fetch(e),s})}B(e,t){return c(this,null,function*(){this.G();const s=yield t.fetch(e);if(!(yield t.cachePut(e,s.clone())))throw new d("bad-precaching-response",{url:e.url,status:s.status});return s})}G(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==U.copyRedirectedCacheableResponsesPlugin&&(a===U.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);t===0?this.plugins.push(U.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}U.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:e=>c(this,[e],function*({response:n}){return!n||n.status>=400?null:n})},U.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:e=>c(this,[e],function*({response:n}){return n.redirected?yield we(n):n})};class pe{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this.H=new Map,this.V=new Map,this.J=new Map,this.u=new U({cacheName:I(e),plugins:[...t,new fe({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.u}precache(e){this.addToCacheList(e),this.X||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.X=!0)}addToCacheList(e){const t=[];for(const s of e){typeof s=="string"?t.push(s):s&&s.revision===void 0&&t.push(s.url);const{cacheKey:a,url:i}=ue(s),r=typeof s!="string"&&s.revision?"reload":"default";if(this.H.has(i)&&this.H.get(i)!==a)throw new d("add-to-cache-list-conflicting-entries",{firstEntry:this.H.get(i),secondEntry:a});if(typeof s!="string"&&s.integrity){if(this.J.has(a)&&this.J.get(a)!==s.integrity)throw new d("add-to-cache-list-conflicting-integrities",{url:i});this.J.set(a,s.integrity)}if(this.H.set(i,a),this.V.set(i,r),t.length>0){const o=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(o)}}}install(e){return Z(e,()=>c(this,null,function*(){const t=new de;this.strategy.plugins.push(t);for(const[i,r]of this.H){const o=this.J.get(r),h=this.V.get(i),u=new Request(i,{integrity:o,cache:h,credentials:"same-origin"});yield Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:u,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return Z(e,()=>c(this,null,function*(){const t=yield self.caches.open(this.strategy.cacheName),s=yield t.keys(),a=new Set(this.H.values()),i=[];for(const r of s)a.has(r.url)||(yield t.delete(r),i.push(r.url));return{deletedURLs:i}}))}getURLsToCacheKeys(){return this.H}getCachedURLs(){return[...this.H.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.H.get(t.href)}matchPrecache(e){return c(this,null,function*(){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(yield self.caches.open(this.strategy.cacheName)).match(s)})}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new d("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=P({cacheKey:t},s.params),this.strategy.handle(s))}}const z=()=>(F||(F=new pe),F);class ye extends y{constructor(e,t){super(({request:s})=>{const a=e.getURLsToCacheKeys();for(const i of function*(r,{ignoreURLParametersMatching:o=[/^utm_/,/^fbclid$/],directoryIndex:h="index.html",cleanURLs:u=!0,urlManipulation:w}={}){const p=new URL(r,location.href);p.hash="",yield p.href;const l=function(f,m=[]){for(const v of[...f.searchParams.keys()])m.some(L=>L.test(v))&&f.searchParams.delete(v);return f}(p,o);if(yield l.href,h&&l.pathname.endsWith("/")){const f=new URL(l.href);f.pathname+=h,yield f.href}if(u){const f=new URL(l.href);f.pathname+=".html",yield f.href}if(w){const f=w({url:p});for(const m of f)yield m.href}}(s.url,t)){const r=a.get(i);if(r)return{cacheKey:r}}},e.strategy)}}try{self["workbox:background-sync:6.1.5"]&&_()}catch(n){}const b="requests",j="queueName";class me{constructor(e){this.Y=e,this._=new W("workbox-background-sync",3,{onupgradeneeded:this.Z})}pushEntry(e){return c(this,null,function*(){delete e.id,e.queueName=this.Y,yield this._.add(b,e)})}unshiftEntry(e){return c(this,null,function*(){const[t]=yield this._.getAllMatching(b,{count:1});t?e.id=t.id-1:delete e.id,e.queueName=this.Y,yield this._.add(b,e)})}popEntry(){return c(this,null,function*(){return this.tt({direction:"prev"})})}shiftEntry(){return c(this,null,function*(){return this.tt({direction:"next"})})}getAll(){return c(this,null,function*(){return yield this._.getAllMatching(b,{index:j,query:IDBKeyRange.only(this.Y)})})}deleteEntry(e){return c(this,null,function*(){yield this._.delete(b,e)})}tt(t){return c(this,arguments,function*({direction:e}){const[s]=yield this._.getAllMatching(b,{direction:e,index:j,query:IDBKeyRange.only(this.Y),count:1});if(s)return yield this.deleteEntry(s.id),s})}Z(e){const t=e.target.result;e.oldVersion>0&&e.oldVersion<3&&t.objectStoreNames.contains(b)&&t.deleteObjectStore(b),t.createObjectStore(b,{autoIncrement:!0,keyPath:"id"}).createIndex(j,j,{unique:!1})}}const ge=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class N{constructor(e){e.mode==="navigate"&&(e.mode="same-origin"),this.et=e}static fromRequest(e){return c(this,null,function*(){const t={url:e.url,headers:{}};e.method!=="GET"&&(t.body=yield e.clone().arrayBuffer());for(const[s,a]of e.headers.entries())t.headers[s]=a;for(const s of ge)e[s]!==void 0&&(t[s]=e[s]);return new N(t)})}toObject(){const e=Object.assign({},this.et);return e.headers=Object.assign({},this.et.headers),e.body&&(e.body=e.body.slice(0)),e}toRequest(){return new Request(this.et.url,this.et)}clone(){return new N(this.toObject())}}const ee="workbox-background-sync",H=new Set,te=n=>{const e={request:new N(n.requestData).toRequest(),timestamp:n.timestamp};return n.metadata&&(e.metadata=n.metadata),e};class Re{constructor(e,{onSync:t,maxRetentionTime:s}={}){if(this.st=!1,this.nt=!1,H.has(e))throw new d("duplicate-queue-name",{name:e});H.add(e),this.L=e,this.it=t||this.replayRequests,this.rt=s||10080,this.at=new me(this.L),this.ct()}get name(){return this.L}pushRequest(e){return c(this,null,function*(){yield this.ot(e,"push")})}unshiftRequest(e){return c(this,null,function*(){yield this.ot(e,"unshift")})}popRequest(){return c(this,null,function*(){return this.ht("pop")})}shiftRequest(){return c(this,null,function*(){return this.ht("shift")})}getAll(){return c(this,null,function*(){const e=yield this.at.getAll(),t=Date.now(),s=[];for(const a of e){const i=60*this.rt*1e3;t-a.timestamp>i?yield this.at.deleteEntry(a.id):s.push(te(a))}return s})}ot(i,r){return c(this,arguments,function*({request:e,metadata:t,timestamp:s=Date.now()},a){const o={requestData:(yield N.fromRequest(e.clone())).toObject(),timestamp:s};t&&(o.metadata=t),yield this.at[`${a}Entry`](o),this.st?this.nt=!0:yield this.registerSync()})}ht(e){return c(this,null,function*(){const t=Date.now(),s=yield this.at[`${e}Entry`]();if(s){const a=60*this.rt*1e3;return t-s.timestamp>a?this.ht(e):te(s)}})}replayRequests(){return c(this,null,function*(){let e;for(;e=yield this.shiftRequest();)try{yield fetch(e.request.clone())}catch(t){throw yield this.unshiftRequest(e),new d("queue-replay-failed",{name:this.L})}})}registerSync(){return c(this,null,function*(){if("sync"in self.registration)try{yield self.registration.sync.register(`${ee}:${this.L}`)}catch(e){}})}ct(){"sync"in self.registration?self.addEventListener("sync",e=>{if(e.tag===`${ee}:${this.L}`){const t=()=>c(this,null,function*(){let s;this.st=!0;try{yield this.it({queue:this})}catch(a){throw s=a,s}finally{!this.nt||s&&!e.lastChance||(yield this.registerSync()),this.st=!1,this.nt=!1}});e.waitUntil(t())}}):this.it({queue:this})}static get ut(){return H}}class qe{constructor(e,t){this.fetchDidFail=a=>c(this,[a],function*({request:s}){yield this.lt.pushRequest({request:s})}),this.lt=new Re(e,t)}}class B extends O{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift($),this.wt=e.networkTimeoutSeconds||0}U(e,t){return c(this,null,function*(){const s=[],a=[];let i;if(this.wt){const{id:h,promise:u}=this.ft({request:e,logs:s,handler:t});i=h,a.push(u)}const r=this.dt({timeoutId:i,request:e,logs:s,handler:t});a.push(r);const o=yield t.waitUntil((()=>c(this,null,function*(){return(yield t.waitUntil(Promise.race(a)))||(yield r)}))());if(!o)throw new d("no-response",{url:e.url});return o})}ft({request:e,logs:t,handler:s}){let a;return{promise:new Promise(i=>{a=setTimeout(()=>c(this,null,function*(){i(yield s.cacheMatch(e))}),1e3*this.wt)}),id:a}}dt(i){return c(this,arguments,function*({timeoutId:e,request:t,logs:s,handler:a}){let r,o;try{o=yield a.fetchAndCachePut(t)}catch(h){r=h}return e&&clearTimeout(e),!r&&o||(o=yield a.cacheMatch(t)),o})}}class be extends O{constructor(e={}){super(e),this.wt=e.networkTimeoutSeconds||0}U(e,t){return c(this,null,function*(){let s,a;try{const i=[t.fetch(e)];if(this.wt){const r=Y(1e3*this.wt);i.push(r)}if(a=yield Promise.race(i),!a)throw new Error(`Timed out the network response after ${this.wt} seconds.`)}catch(i){s=i}if(!a)throw new d("no-response",{url:e.url,error:s});return a})}}try{self["workbox:google-analytics:6.1.5"]&&_()}catch(n){}const se="www.google-analytics.com",ne="www.googletagmanager.com",ve=/^\/(\w+\/)?collect/,Ue=n=>{const e=({url:s})=>s.hostname===se&&ve.test(s.pathname),t=new be({plugins:[n]});return[new y(e,t,"GET"),new y(e,t,"POST")]},xe=n=>{const e=new B({cacheName:n});return new y(({url:t})=>t.hostname===se&&t.pathname==="/analytics.js",e,"GET")},ke=n=>{const e=new B({cacheName:n});return new y(({url:t})=>t.hostname===ne&&t.pathname==="/gtag/js",e,"GET")},Ce=n=>{const e=new B({cacheName:n});return new y(({url:t})=>t.hostname===ne&&t.pathname==="/gtm.js",e,"GET")};g.CacheFirst=class extends O{U(n,e){return c(this,null,function*(){let t,s=yield e.cacheMatch(n);if(!s)try{s=yield e.fetchAndCachePut(n)}catch(a){t=a}if(!s)throw new d("no-response",{url:n.url,error:t});return s})}},g.ExpirationPlugin=class{constructor(n={}){var e;this.cachedResponseWillBeUsed=r=>c(this,[r],function*({event:t,request:s,cacheName:a,cachedResponse:i}){if(!i)return null;const o=this.yt(i),h=this.gt(a);Q(h.expireEntries());const u=h.updateTimestamp(s.url);if(t)try{t.waitUntil(u)}catch(w){}return o?i:null}),this.cacheDidUpdate=a=>c(this,[a],function*({cacheName:t,request:s}){const i=this.gt(t);yield i.updateTimestamp(s.url),yield i.expireEntries()}),this.qt=n,this.W=n.maxAgeSeconds,this.Rt=new Map,n.purgeOnQuotaError&&(e=()=>this.deleteCacheAndMetadata(),V.add(e))}gt(n){if(n===G())throw new d("expire-custom-caches-only");let e=this.Rt.get(n);return e||(e=new le(n,this.qt),this.Rt.set(n,e)),e}yt(n){if(!this.W)return!0;const e=this.vt(n);return e===null?!0:e>=Date.now()-1e3*this.W}vt(n){if(!n.headers.has("date"))return null;const e=n.headers.get("date"),t=new Date(e).getTime();return isNaN(t)?null:t}deleteCacheAndMetadata(){return c(this,null,function*(){for(const[n,e]of this.Rt)yield self.caches.delete(n),yield e.delete();this.Rt=new Map})}},g.StaleWhileRevalidate=class extends O{constructor(n){super(n),this.plugins.some(e=>"cacheWillUpdate"in e)||this.plugins.unshift($)}U(n,e){return c(this,null,function*(){const t=e.fetchAndCachePut(n).catch(()=>{});let s,a=yield e.cacheMatch(n);if(!a)try{a=yield t}catch(i){s=i}if(!a)throw new d("no-response",{url:n.url,error:s});return a})}},g.cleanupOutdatedCaches=function(){self.addEventListener("activate",n=>{const e=I();n.waitUntil(((t,s="-precache-")=>c(this,null,function*(){const a=(yield self.caches.keys()).filter(i=>i.includes(s)&&i.includes(self.registration.scope)&&i!==t);return yield Promise.all(a.map(i=>self.caches.delete(i))),a}))(e).then(t=>{}))})},g.clientsClaim=function(){self.addEventListener("activate",()=>self.clients.claim())},g.initialize=(n={})=>{const e=ie(n.cacheName),t=new qe("workbox-google-analytics",{maxRetentionTime:2880,onSync:(s=n,o=>c(this,[o],function*({queue:r}){let h;for(;h=yield r.shiftRequest();){const{request:u,timestamp:w}=h,p=new URL(u.url);try{const l=u.method==="POST"?new URLSearchParams(yield u.clone().text()):p.searchParams,f=w-(Number(l.get("qt"))||0),m=Date.now()-f;if(l.set("qt",String(m)),s.parameterOverrides)for(const v of Object.keys(s.parameterOverrides)){const L=s.parameterOverrides[v];l.set(v,L)}typeof s.hitFilter=="function"&&s.hitFilter.call(null,l),yield fetch(new Request(p.origin+p.pathname,{body:l.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(l){throw yield r.unshiftRequest(h),l}}}))});var s;const a=[Ce(e),xe(e),ke(e),...Ue(t)],i=new S;for(const r of a)i.registerRoute(r);i.addFetchListener()},g.precacheAndRoute=function(n,e){(function(t){z().precache(t)})(n),function(t){const s=z();k(new ye(s,t))}(e)},g.registerRoute=k});