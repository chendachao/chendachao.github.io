define("./workbox-458e04aa.js",["exports"],(function(t){"use strict";try{self["workbox:core:6.1.1"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.1.1"]&&_()}catch(t){}const n=t=>t&&"object"==typeof t?t:{handle:t};class i{constructor(t,e,s="GET"){this.handler=n(e),this.match=t,this.method=s}setCatchHandler(t){this.catchHandler=n(t)}}class r extends i{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class a{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=r&&r.handler;const c=t.method;if(!a&&this.i.has(c)&&(a=this.i.get(c)),!a)return;let o;try{o=a.handle({url:s,request:t,event:e,params:i})}catch(t){o=Promise.reject(t)}const h=r&&r.catchHandler;return o instanceof Promise&&(this.o||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:i})}catch(t){n=t}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),o}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:t,sameOrigin:e,request:s,event:n});if(a)return i=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,n(t))}setCatchHandler(t){this.o=n(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let c;const o=()=>(c||(c=new a,c.addFetchListener(),c.addCacheListener()),c);function h(t,e,n){let a;if("string"==typeof t){const s=new URL(t,location.href);a=new i((({url:t})=>t.href===s.href),e,n)}else if(t instanceof RegExp)a=new r(t,e,n);else if("function"==typeof t)a=new i(t,e,n);else{if(!(t instanceof i))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return o().registerRoute(a),a}try{self["workbox:strategies:6.1.1"]&&_()}catch(t){}const u={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null},l={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},w=t=>[l.prefix,t,l.suffix].filter((t=>t&&t.length>0)).join("-"),f=t=>t||w(l.googleAnalytics),d=t=>t||w(l.precache),y=t=>t||w(l.runtime);function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}function m(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class g{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const q=new Set;function R(t){return new Promise((e=>setTimeout(e,t)))}function v(t){return"string"==typeof t?new Request(t):t}class U{constructor(t,e){this.h={},Object.assign(this,e),this.event=e.event,this.u=t,this.l=new g,this.p=[],this.m=[...t.plugins],this.g=new Map;for(const t of this.m)this.g.set(t,{});this.event.waitUntil(this.l.promise)}fetch(t){return this.waitUntil((async()=>{const{event:e}=this;let n=v(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(t){throw new s("plugin-error-request-will-fetch",{thrownError:t})}const r=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.u.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:r,response:t});return t}catch(t){throw i&&await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:i.clone(),request:r.clone()}),t}})())}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}cacheMatch(t){return this.waitUntil((async()=>{const e=v(t);let s;const{cacheName:n,matchOptions:i}=this.u,r=await this.getCacheKey(e,"read"),a=p({},i,{cacheName:n});s=await caches.match(r,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s})())}async cachePut(t,e){const n=v(t);await R(0);const i=await this.getCacheKey(n,"write");if(!e)throw new s("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const a=await this.q(e);if(!a)return!1;const{cacheName:c,matchOptions:o}=this.u,h=await self.caches.open(c),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(t,e,s,n){const i=m(e.url,s);if(e.url===i)return t.match(e,n);const r=p({},n,{ignoreSearch:!0}),a=await t.keys(e,r);for(const e of a)if(i===m(e.url,s))return t.match(e,n)}(h,i.clone(),["__WB_REVISION__"],o):null;try{await h.put(i,u?a.clone():a)}catch(t){throw"QuotaExceededError"===t.name&&await async function(){for(const t of q)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:c,oldResponse:l,newResponse:a.clone(),request:i,event:this.event});return!0}async getCacheKey(t,e){if(!this.h[e]){let s=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))s=v(await t({mode:e,request:s,event:this.event,params:this.params}));this.h[e]=s}return this.h[e]}hasCallback(t){for(const e of this.u.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.u.plugins)if("function"==typeof e[t]){const s=this.g.get(e),n=n=>{const i=p({},n,{state:s});return e[t](i)};yield n}}waitUntil(t){return this.p.push(t),t}async doneWaiting(){let t;for(;t=this.p.shift();)await t}destroy(){this.l.resolve()}async q(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class b{constructor(t={}){this.cacheName=y(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new U(this,{event:e,request:s,params:n}),r=this.R(i,s,e);return[r,this.v(r,i,s,e)]}async R(t,e,n){let i;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(i=await this.U(e,t),!i||"error"===i.type)throw new s("no-response",{url:e.url})}catch(s){for(const r of t.iterateCallbacks("handlerDidError"))if(i=await r({error:s,event:n,request:e}),i)break;if(!i)throw s}for(const s of t.iterateCallbacks("handlerWillRespond"))i=await s({event:n,request:e,response:i});return i}async v(t,e,s,n){let i,r;try{i=await t}catch(r){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){r=t}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),e.destroy(),r)throw r}}function x(t){t.then((()=>{}))}class E{constructor(t,e,{onupgradeneeded:s,onversionchange:n}={}){this._=null,this.L=t,this.T=e,this.N=s,this.D=n||(()=>this.close())}get db(){return this._}async open(){if(!this._)return this._=await new Promise(((t,e)=>{let s=!1;setTimeout((()=>{s=!0,e(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const n=indexedDB.open(this.L,this.T);n.onerror=()=>e(n.error),n.onupgradeneeded=t=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.N&&this.N(t)},n.onsuccess=()=>{const e=n.result;s?e.close():(e.onversionchange=this.D.bind(this),t(e))}})),this}async getKey(t,e){return(await this.getAllKeys(t,e,1))[0]}async getAll(t,e,s){return await this.getAllMatching(t,{query:e,count:s})}async getAllKeys(t,e,s){return(await this.getAllMatching(t,{query:e,count:s,includeKeys:!0})).map((t=>t.key))}async getAllMatching(t,{index:e,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([t],"readonly",((a,c)=>{const o=a.objectStore(t),h=e?o.index(e):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const t=l.result;t?(u.push(r?t:t.value),i&&u.length>=i?c(u):t.continue()):c(u)}}))}async transaction(t,e,s){return await this.open(),await new Promise(((n,i)=>{const r=this._.transaction(t,e);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,(t=>n(t)))}))}async P(t,e,s,...n){return await this.transaction([e],s,((s,i)=>{const r=s.objectStore(e),a=r[t].apply(r,n);a.onsuccess=()=>i(a.result)}))}close(){this._&&(this._.close(),this._=null)}}E.prototype.OPEN_TIMEOUT=2e3;const L={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[t,e]of Object.entries(L))for(const s of e)s in IDBObjectStore.prototype&&(E.prototype[s]=async function(e,...n){return await this.P(s,e,t,...n)});try{self["workbox:expiration:6.1.1"]&&_()}catch(t){}const T="cache-entries",N=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class D{constructor(t){this.k=t,this._=new E("workbox-expiration",1,{onupgradeneeded:t=>this.O(t)})}O(t){const e=t.target.result.createObjectStore(T,{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1}),(async t=>{await new Promise(((e,s)=>{const n=indexedDB.deleteDatabase(t);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{e()}}))})(this.k)}async setTimestamp(t,e){const s={url:t=N(t),timestamp:e,cacheName:this.k,id:this.C(t)};await this._.put(T,s)}async getTimestamp(t){return(await this._.get(T,this.C(t))).timestamp}async expireEntries(t,e){const s=await this._.transaction(T,"readwrite",((s,n)=>{const i=s.objectStore(T).index("timestamp").openCursor(null,"prev"),r=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.k&&(t&&n.timestamp<t||e&&a>=e?r.push(s.value):a++),s.continue()}else n(r)}})),n=[];for(const t of s)await this._.delete(T,t.id),n.push(t.url);return n}C(t){return this.k+"|"+N(t)}}class P{constructor(t,e={}){this.S=!1,this.K=!1,this.j=e.maxEntries,this.W=e.maxAgeSeconds,this.A=e.matchOptions,this.k=t,this.I=new D(t)}async expireEntries(){if(this.S)return void(this.K=!0);this.S=!0;const t=this.W?Date.now()-1e3*this.W:0,e=await this.I.expireEntries(t,this.j),s=await self.caches.open(this.k);for(const t of e)await s.delete(t,this.A);this.S=!1,this.K&&(this.K=!1,x(this.expireEntries()))}async updateTimestamp(t){await this.I.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.W){return await this.I.getTimestamp(t)<Date.now()-1e3*this.W}return!1}async delete(){this.K=!1,await this.I.expireEntries(1/0)}}function k(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.1.1"]&&_()}catch(t){}function O(t){if(!t)throw new s("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",e),{cacheKey:i.href,url:r.href}}class C{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class S{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=e&&e.cacheKey||this.M.getCacheKeyForURL(t.url);return s?new Request(s):t},this.M=t}}let K,j;async function W(t,e){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new s("cross-origin-copy-response",{origin:n});const i=t.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=e?e(r):r,c=function(){if(void 0===K){const t=new Response("");if("body"in t)try{new Response(t.body),K=!0}catch(t){K=!1}K=!1}return K}()?i.body:await i.blob();return new Response(c,a)}class A extends b{constructor(t={}){t.cacheName=d(t.cacheName),super(t),this.$=!1!==t.fallbackToNetwork,this.plugins.push(A.copyRedirectedCacheableResponsesPlugin)}async U(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.B(t,e):await this.F(t,e))}async F(t,e){let n;if(!this.$)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:t.url});return n=await e.fetch(t),n}async B(t,e){this.G();const n=await e.fetch(t);if(!await e.cachePut(t,n.clone()))throw new s("bad-precaching-response",{url:t.url,status:n.status});return n}G(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==A.copyRedirectedCacheableResponsesPlugin&&(n===A.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(A.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}A.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},A.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await W(t):t};class I{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.H=new Map,this.V=new Map,this.J=new Map,this.u=new A({cacheName:d(t),plugins:[...e,new S({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.u}precache(t){this.addToCacheList(t),this.X||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.X=!0)}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:i}=O(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.H.has(i)&&this.H.get(i)!==t)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this.H.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.J.has(t)&&this.J.get(t)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:i});this.J.set(t,n.integrity)}if(this.H.set(i,t),this.V.set(i,r),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return k(t,(async()=>{const e=new C;this.strategy.plugins.push(e);for(const[e,s]of this.H){const n=this.J.get(s),i=this.V.get(e),r=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return k(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.H.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.H}getCachedURLs(){return[...this.H.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.H.get(e.href)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new s("non-precached-url",{url:t});return s=>(s.request=new Request(t),s.params=p({cacheKey:e},s.params),this.strategy.handle(s))}}const M=()=>(j||(j=new I),j);class $ extends i{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const t of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(r,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(t);if(e)return{cacheKey:e}}}),t.strategy)}}try{self["workbox:background-sync:6.1.1"]&&_()}catch(t){}const B="requests",F="queueName";class G{constructor(t){this.Y=t,this._=new E("workbox-background-sync",3,{onupgradeneeded:this.Z})}async pushEntry(t){delete t.id,t.queueName=this.Y,await this._.add(B,t)}async unshiftEntry(t){const[e]=await this._.getAllMatching(B,{count:1});e?t.id=e.id-1:delete t.id,t.queueName=this.Y,await this._.add(B,t)}async popEntry(){return this.tt({direction:"prev"})}async shiftEntry(){return this.tt({direction:"next"})}async getAll(){return await this._.getAllMatching(B,{index:F,query:IDBKeyRange.only(this.Y)})}async deleteEntry(t){await this._.delete(B,t)}async tt({direction:t}){const[e]=await this._.getAllMatching(B,{direction:t,index:F,query:IDBKeyRange.only(this.Y),count:1});if(e)return await this.deleteEntry(e.id),e}Z(t){const e=t.target.result;t.oldVersion>0&&t.oldVersion<3&&e.objectStoreNames.contains(B)&&e.deleteObjectStore(B);e.createObjectStore(B,{autoIncrement:!0,keyPath:"id"}).createIndex(F,F,{unique:!1})}}const H=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class V{constructor(t){"navigate"===t.mode&&(t.mode="same-origin"),this.et=t}static async fromRequest(t){const e={url:t.url,headers:{}};"GET"!==t.method&&(e.body=await t.clone().arrayBuffer());for(const[s,n]of t.headers.entries())e.headers[s]=n;for(const s of H)void 0!==t[s]&&(e[s]=t[s]);return new V(e)}toObject(){const t=Object.assign({},this.et);return t.headers=Object.assign({},this.et.headers),t.body&&(t.body=t.body.slice(0)),t}toRequest(){return new Request(this.et.url,this.et)}clone(){return new V(this.toObject())}}const J="workbox-background-sync",Q=new Set,z=t=>{const e={request:new V(t.requestData).toRequest(),timestamp:t.timestamp};return t.metadata&&(e.metadata=t.metadata),e};class X{constructor(t,{onSync:e,maxRetentionTime:n}={}){if(this.st=!1,this.nt=!1,Q.has(t))throw new s("duplicate-queue-name",{name:t});Q.add(t),this.L=t,this.it=e||this.replayRequests,this.rt=n||10080,this.at=new G(this.L),this.ct()}get name(){return this.L}async pushRequest(t){await this.ot(t,"push")}async unshiftRequest(t){await this.ot(t,"unshift")}async popRequest(){return this.ht("pop")}async shiftRequest(){return this.ht("shift")}async getAll(){const t=await this.at.getAll(),e=Date.now(),s=[];for(const n of t){const t=60*this.rt*1e3;e-n.timestamp>t?await this.at.deleteEntry(n.id):s.push(z(n))}return s}async ot({request:t,metadata:e,timestamp:s=Date.now()},n){const i={requestData:(await V.fromRequest(t.clone())).toObject(),timestamp:s};e&&(i.metadata=e),await this.at[`${n}Entry`](i),this.st?this.nt=!0:await this.registerSync()}async ht(t){const e=Date.now(),s=await this.at[`${t}Entry`]();if(s){const n=60*this.rt*1e3;return e-s.timestamp>n?this.ht(t):z(s)}}async replayRequests(){let t;for(;t=await this.shiftRequest();)try{await fetch(t.request.clone())}catch(e){throw await this.unshiftRequest(t),new s("queue-replay-failed",{name:this.L})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register(`${J}:${this.L}`)}catch(t){}}ct(){"sync"in self.registration?self.addEventListener("sync",(t=>{if(t.tag===`${J}:${this.L}`){const e=async()=>{let e;this.st=!0;try{await this.it({queue:this})}catch(t){throw e=t,e}finally{!this.nt||e&&!t.lastChance||await this.registerSync(),this.st=!1,this.nt=!1}};t.waitUntil(e())}})):this.it({queue:this})}static get ut(){return Q}}class Y{constructor(t,e){this.fetchDidFail=async({request:t})=>{await this.lt.pushRequest({request:t})},this.lt=new X(t,e)}}class Z extends b{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(u),this.wt=t.networkTimeoutSeconds||0}async U(t,e){const n=[],i=[];let r;if(this.wt){const{id:s,promise:a}=this.ft({request:t,logs:n,handler:e});r=s,i.push(a)}const a=this.dt({timeoutId:r,request:t,logs:n,handler:e});i.push(a);const c=await e.waitUntil((async()=>await e.waitUntil(Promise.race(i))||await a)());if(!c)throw new s("no-response",{url:t.url});return c}ft({request:t,logs:e,handler:s}){let n;return{promise:new Promise((e=>{n=setTimeout((async()=>{e(await s.cacheMatch(t))}),1e3*this.wt)})),id:n}}async dt({timeoutId:t,request:e,logs:s,handler:n}){let i,r;try{r=await n.fetchAndCachePut(e)}catch(t){i=t}return t&&clearTimeout(t),!i&&r||(r=await n.cacheMatch(e)),r}}class tt extends b{constructor(t={}){super(t),this.wt=t.networkTimeoutSeconds||0}async U(t,e){let n,i;try{const s=[e.fetch(t)];if(this.wt){const t=R(1e3*this.wt);s.push(t)}if(i=await Promise.race(s),!i)throw new Error(`Timed out the network response after ${this.wt} seconds.`)}catch(t){n=t}if(!i)throw new s("no-response",{url:t.url,error:n});return i}}try{self["workbox:google-analytics:6.1.1"]&&_()}catch(t){}const et="www.google-analytics.com",st="www.googletagmanager.com",nt=/^\/(\w+\/)?collect/,it=t=>{const e=({url:t})=>t.hostname===et&&nt.test(t.pathname),s=new tt({plugins:[t]});return[new i(e,s,"GET"),new i(e,s,"POST")]},rt=t=>{const e=new Z({cacheName:t});return new i((({url:t})=>t.hostname===et&&"/analytics.js"===t.pathname),e,"GET")},at=t=>{const e=new Z({cacheName:t});return new i((({url:t})=>t.hostname===st&&"/gtag/js"===t.pathname),e,"GET")},ct=t=>{const e=new Z({cacheName:t});return new i((({url:t})=>t.hostname===st&&"/gtm.js"===t.pathname),e,"GET")};t.CacheFirst=class extends b{async U(t,e){let n,i=await e.cacheMatch(t);if(!i)try{i=await e.fetchAndCachePut(t)}catch(t){n=t}if(!i)throw new s("no-response",{url:t.url,error:n});return i}},t.ExpirationPlugin=class{constructor(t={}){var e;this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.yt(n),r=this.gt(s);x(r.expireEntries());const a=r.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.gt(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.qt=t,this.W=t.maxAgeSeconds,this.Rt=new Map,t.purgeOnQuotaError&&(e=()=>this.deleteCacheAndMetadata(),q.add(e))}gt(t){if(t===y())throw new s("expire-custom-caches-only");let e=this.Rt.get(t);return e||(e=new P(t,this.qt),this.Rt.set(t,e)),e}yt(t){if(!this.W)return!0;const e=this.vt(t);if(null===e)return!0;return e>=Date.now()-1e3*this.W}vt(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.Rt)await self.caches.delete(t),await e.delete();this.Rt=new Map}},t.StaleWhileRevalidate=class extends b{constructor(t){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(u)}async U(t,e){const n=e.fetchAndCachePut(t).catch((()=>{}));let i,r=await e.cacheMatch(t);if(r);else try{r=await n}catch(t){i=t}if(!r)throw new s("no-response",{url:t.url,error:i});return r}},t.cleanupOutdatedCaches=function(){self.addEventListener("activate",(t=>{const e=d();t.waitUntil((async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t));return await Promise.all(s.map((t=>self.caches.delete(t)))),s})(e).then((t=>{})))}))},t.clientsClaim=function(){self.addEventListener("activate",(()=>self.clients.claim()))},t.initialize=(t={})=>{const e=f(t.cacheName),s=new Y("workbox-google-analytics",{maxRetentionTime:2880,onSync:(n=t,async({queue:t})=>{let e;for(;e=await t.shiftRequest();){const{request:s,timestamp:i}=e,r=new URL(s.url);try{const t="POST"===s.method?new URLSearchParams(await s.clone().text()):r.searchParams,e=i-(Number(t.get("qt"))||0),a=Date.now()-e;if(t.set("qt",String(a)),n.parameterOverrides)for(const e of Object.keys(n.parameterOverrides)){const s=n.parameterOverrides[e];t.set(e,s)}"function"==typeof n.hitFilter&&n.hitFilter.call(null,t),await fetch(new Request(r.origin+r.pathname,{body:t.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(s){throw await t.unshiftRequest(e),s}}})});var n;const i=[ct(e),rt(e),at(e),...it(s)],r=new a;for(const t of i)r.registerRoute(t);r.addFetchListener()},t.precacheAndRoute=function(t,e){!function(t){M().precache(t)}(t),function(t){const e=M();h(new $(e,t))}(e)},t.registerRoute=h}));
//# sourceMappingURL=workbox-458e04aa.js.map
