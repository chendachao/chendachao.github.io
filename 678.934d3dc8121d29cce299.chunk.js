(self.webpackChunkchendachao=self.webpackChunkchendachao||[]).push([[678],{1206:function(Y){(function(E,u){Y.exports=u()})(this,function(){return function(E){var u={};function d(c){if(u[c])return u[c].exports;var n=u[c]={i:c,l:!1,exports:{}};return E[c].call(n.exports,n,n.exports,d),n.l=!0,n.exports}return d.m=E,d.c=u,d.d=function(c,n,i){d.o(c,n)||Object.defineProperty(c,n,{enumerable:!0,get:i})},d.r=function(c){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},d.t=function(c,n){if(1&n&&(c=d(c)),8&n||4&n&&typeof c=="object"&&c&&c.__esModule)return c;var i=Object.create(null);if(d.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:c}),2&n&&typeof c!="string")for(var f in c)d.d(i,f,function(e){return c[e]}.bind(null,f));return i},d.n=function(c){var n=c&&c.__esModule?function(){return c.default}:function(){return c};return d.d(n,"a",n),n},d.o=function(c,n){return Object.prototype.hasOwnProperty.call(c,n)},d.p="",d(d.s=90)}({17:function(E,u,d){"use strict";u.__esModule=!0,u.default=void 0;var c=d(18),n=function(){function i(){}return i.getFirstMatch=function(f,e){var t=e.match(f);return t&&t.length>0&&t[1]||""},i.getSecondMatch=function(f,e){var t=e.match(f);return t&&t.length>1&&t[2]||""},i.matchAndReturnConst=function(f,e,t){if(f.test(e))return t},i.getWindowsVersionName=function(f){switch(f){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},i.getMacOSVersionName=function(f){var e=f.split(".").splice(0,2).map(function(t){return parseInt(t,10)||0});if(e.push(0),e[0]===10)switch(e[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},i.getAndroidVersionName=function(f){var e=f.split(".").splice(0,2).map(function(t){return parseInt(t,10)||0});if(e.push(0),!(e[0]===1&&e[1]<5))return e[0]===1&&e[1]<6?"Cupcake":e[0]===1&&e[1]>=6?"Donut":e[0]===2&&e[1]<2?"Eclair":e[0]===2&&e[1]===2?"Froyo":e[0]===2&&e[1]>2?"Gingerbread":e[0]===3?"Honeycomb":e[0]===4&&e[1]<1?"Ice Cream Sandwich":e[0]===4&&e[1]<4?"Jelly Bean":e[0]===4&&e[1]>=4?"KitKat":e[0]===5?"Lollipop":e[0]===6?"Marshmallow":e[0]===7?"Nougat":e[0]===8?"Oreo":e[0]===9?"Pie":void 0},i.getVersionPrecision=function(f){return f.split(".").length},i.compareVersions=function(f,e,t){t===void 0&&(t=!1);var r=i.getVersionPrecision(f),M=i.getVersionPrecision(e),s=Math.max(r,M),a=0,v=i.map([f,e],function(h){var l=s-i.getVersionPrecision(h),b=h+new Array(l+1).join(".0");return i.map(b.split("."),function(S){return new Array(20-S.length).join("0")+S}).reverse()});for(t&&(a=s-Math.min(r,M)),s-=1;s>=a;){if(v[0][s]>v[1][s])return 1;if(v[0][s]===v[1][s]){if(s===a)return 0;s-=1}else if(v[0][s]<v[1][s])return-1}},i.map=function(f,e){var t,r=[];if(Array.prototype.map)return Array.prototype.map.call(f,e);for(t=0;t<f.length;t+=1)r.push(e(f[t]));return r},i.find=function(f,e){var t,r;if(Array.prototype.find)return Array.prototype.find.call(f,e);for(t=0,r=f.length;t<r;t+=1){var M=f[t];if(e(M,t))return M}},i.assign=function(f){for(var e,t,r=f,M=arguments.length,s=new Array(M>1?M-1:0),a=1;a<M;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[f].concat(s));var v=function(){var h=s[e];typeof h=="object"&&h!==null&&Object.keys(h).forEach(function(l){r[l]=h[l]})};for(e=0,t=s.length;e<t;e+=1)v();return f},i.getBrowserAlias=function(f){return c.BROWSER_ALIASES_MAP[f]},i.getBrowserTypeByAlias=function(f){return c.BROWSER_MAP[f]||""},i}();u.default=n,E.exports=u.default},18:function(E,u,d){"use strict";u.__esModule=!0,u.ENGINE_MAP=u.OS_MAP=u.PLATFORMS_MAP=u.BROWSER_MAP=u.BROWSER_ALIASES_MAP=void 0,u.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},u.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},u.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},u.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},u.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(E,u,d){"use strict";u.__esModule=!0,u.default=void 0;var c,n=(c=d(91))&&c.__esModule?c:{default:c},i=d(18);function f(t,r){for(var M=0;M<r.length;M++){var s=r[M];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var e=function(){function t(){}var r,M,s;return t.getParser=function(a,v){if(v===void 0&&(v=!1),typeof a!="string")throw new Error("UserAgent should be a string");return new n.default(a,v)},t.parse=function(a){return new n.default(a).getResult()},r=t,s=[{key:"BROWSER_MAP",get:function(){return i.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return i.ENGINE_MAP}},{key:"OS_MAP",get:function(){return i.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return i.PLATFORMS_MAP}}],(M=null)&&f(r.prototype,M),s&&f(r,s),t}();u.default=e,E.exports=u.default},91:function(E,u,d){"use strict";u.__esModule=!0,u.default=void 0;var c=t(d(92)),n=t(d(93)),i=t(d(94)),f=t(d(95)),e=t(d(17));function t(M){return M&&M.__esModule?M:{default:M}}var r=function(){function M(a,v){if(v===void 0&&(v=!1),a==null||a==="")throw new Error("UserAgent parameter can't be empty");this._ua=a,this.parsedResult={},v!==!0&&this.parse()}var s=M.prototype;return s.getUA=function(){return this._ua},s.test=function(a){return a.test(this._ua)},s.parseBrowser=function(){var a=this;this.parsedResult.browser={};var v=e.default.find(c.default,function(h){if(typeof h.test=="function")return h.test(a);if(h.test instanceof Array)return h.test.some(function(l){return a.test(l)});throw new Error("Browser's test function is not valid")});return v&&(this.parsedResult.browser=v.describe(this.getUA())),this.parsedResult.browser},s.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},s.getBrowserName=function(a){return a?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},s.getBrowserVersion=function(){return this.getBrowser().version},s.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},s.parseOS=function(){var a=this;this.parsedResult.os={};var v=e.default.find(n.default,function(h){if(typeof h.test=="function")return h.test(a);if(h.test instanceof Array)return h.test.some(function(l){return a.test(l)});throw new Error("Browser's test function is not valid")});return v&&(this.parsedResult.os=v.describe(this.getUA())),this.parsedResult.os},s.getOSName=function(a){var v=this.getOS().name;return a?String(v).toLowerCase()||"":v||""},s.getOSVersion=function(){return this.getOS().version},s.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},s.getPlatformType=function(a){a===void 0&&(a=!1);var v=this.getPlatform().type;return a?String(v).toLowerCase()||"":v||""},s.parsePlatform=function(){var a=this;this.parsedResult.platform={};var v=e.default.find(i.default,function(h){if(typeof h.test=="function")return h.test(a);if(h.test instanceof Array)return h.test.some(function(l){return a.test(l)});throw new Error("Browser's test function is not valid")});return v&&(this.parsedResult.platform=v.describe(this.getUA())),this.parsedResult.platform},s.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},s.getEngineName=function(a){return a?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},s.parseEngine=function(){var a=this;this.parsedResult.engine={};var v=e.default.find(f.default,function(h){if(typeof h.test=="function")return h.test(a);if(h.test instanceof Array)return h.test.some(function(l){return a.test(l)});throw new Error("Browser's test function is not valid")});return v&&(this.parsedResult.engine=v.describe(this.getUA())),this.parsedResult.engine},s.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},s.getResult=function(){return e.default.assign({},this.parsedResult)},s.satisfies=function(a){var v=this,h={},l=0,b={},S=0;if(Object.keys(a).forEach(function(V){var H=a[V];typeof H=="string"?(b[V]=H,S+=1):typeof H=="object"&&(h[V]=H,l+=1)}),l>0){var y=Object.keys(h),O=e.default.find(y,function(V){return v.isOS(V)});if(O){var P=this.satisfies(h[O]);if(P!==void 0)return P}var T=e.default.find(y,function(V){return v.isPlatform(V)});if(T){var N=this.satisfies(h[T]);if(N!==void 0)return N}}if(S>0){var W=Object.keys(b),q=e.default.find(W,function(V){return v.isBrowser(V,!0)});if(q!==void 0)return this.compareVersion(b[q])}},s.isBrowser=function(a,v){v===void 0&&(v=!1);var h=this.getBrowserName().toLowerCase(),l=a.toLowerCase(),b=e.default.getBrowserTypeByAlias(l);return v&&b&&(l=b.toLowerCase()),l===h},s.compareVersion=function(a){var v=[0],h=a,l=!1,b=this.getBrowserVersion();if(typeof b=="string")return a[0]===">"||a[0]==="<"?(h=a.substr(1),a[1]==="="?(l=!0,h=a.substr(2)):v=[],a[0]===">"?v.push(1):v.push(-1)):a[0]==="="?h=a.substr(1):a[0]==="~"&&(l=!0,h=a.substr(1)),v.indexOf(e.default.compareVersions(b,h,l))>-1},s.isOS=function(a){return this.getOSName(!0)===String(a).toLowerCase()},s.isPlatform=function(a){return this.getPlatformType(!0)===String(a).toLowerCase()},s.isEngine=function(a){return this.getEngineName(!0)===String(a).toLowerCase()},s.is=function(a,v){return v===void 0&&(v=!1),this.isBrowser(a,v)||this.isOS(a)||this.isPlatform(a)},s.some=function(a){var v=this;return a===void 0&&(a=[]),a.some(function(h){return v.is(h)})},M}();u.default=r,E.exports=u.default},92:function(E,u,d){"use strict";u.__esModule=!0,u.default=void 0;var c,n=(c=d(17))&&c.__esModule?c:{default:c},i=/version\/(\d+(\.?_?\d+)+)/i,f=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=n.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=n.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=n.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=n.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=n.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=n.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=n.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=n.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=n.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=n.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=n.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=n.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=n.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=n.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=n.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=n.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=n.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=n.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=n.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=n.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=n.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=n.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=n.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=n.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=e.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:n.default.getFirstMatch(t,e),version:n.default.getSecondMatch(t,e)}}}];u.default=f,E.exports=u.default},93:function(E,u,d){"use strict";u.__esModule=!0,u.default=void 0;var c,n=(c=d(17))&&c.__esModule?c:{default:c},i=d(18),f=[{test:[/Roku\/DVP/],describe:function(e){var t=n.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:i.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=n.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=n.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=n.default.getWindowsVersionName(t);return{name:i.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:i.OS_MAP.iOS},r=n.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=n.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=n.default.getMacOSVersionName(t),M={name:i.OS_MAP.MacOS,version:t};return r&&(M.versionName=r),M}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=n.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:i.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=n.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=n.default.getAndroidVersionName(t),M={name:i.OS_MAP.Android,version:t};return r&&(M.versionName=r),M}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=n.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:i.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=n.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||n.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||n.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:i.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=n.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=n.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:i.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:i.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=n.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.PlayStation4,version:t}}}];u.default=f,E.exports=u.default},94:function(E,u,d){"use strict";u.__esModule=!0,u.default=void 0;var c,n=(c=d(17))&&c.__esModule?c:{default:c},i=d(18),f=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=n.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:i.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=n.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:i.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return e.getBrowserName(!0)==="blackberry"},describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return e.getBrowserName(!0)==="bada"},describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return e.getBrowserName()==="windows phone"},describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe:function(){return{type:i.PLATFORMS_MAP.tablet}}},{test:function(e){return e.getOSName(!0)==="android"},describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return e.getOSName(!0)==="macos"},describe:function(){return{type:i.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return e.getOSName(!0)==="windows"},describe:function(){return{type:i.PLATFORMS_MAP.desktop}}},{test:function(e){return e.getOSName(!0)==="linux"},describe:function(){return{type:i.PLATFORMS_MAP.desktop}}},{test:function(e){return e.getOSName(!0)==="playstation 4"},describe:function(){return{type:i.PLATFORMS_MAP.tv}}},{test:function(e){return e.getOSName(!0)==="roku"},describe:function(){return{type:i.PLATFORMS_MAP.tv}}}];u.default=f,E.exports=u.default},95:function(E,u,d){"use strict";u.__esModule=!0,u.default=void 0;var c,n=(c=d(17))&&c.__esModule?c:{default:c},i=d(18),f=[{test:function(e){return e.getBrowserName(!0)==="microsoft edge"},describe:function(e){if(/\sedg\//i.test(e))return{name:i.ENGINE_MAP.Blink};var t=n.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:i.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:i.ENGINE_MAP.Trident},r=n.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:i.ENGINE_MAP.Presto},r=n.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:i.ENGINE_MAP.Gecko},r=n.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:i.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:i.ENGINE_MAP.WebKit},r=n.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];u.default=f,E.exports=u.default}})})},7090:function(Y){(function(E,u){var d=u(E,E.document,Date);E.lazySizes=d,Y.exports&&(Y.exports=d)})(typeof window!="undefined"?window:{},function(u,d,c){"use strict";var n,i;if(function(){var p,g={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};i=u.lazySizesConfig||u.lazysizesConfig||{};for(p in g)p in i||(i[p]=g[p])}(),!d||!d.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var f=d.documentElement,e=u.HTMLPictureElement,t="addEventListener",r="getAttribute",M=u[t].bind(u),s=u.setTimeout,a=u.requestAnimationFrame||s,v=u.requestIdleCallback,h=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],b={},S=Array.prototype.forEach,y=function(p,g){return b[g]||(b[g]=new RegExp("(\\s|^)"+g+"(\\s|$)")),b[g].test(p[r]("class")||"")&&b[g]},O=function(p,g){y(p,g)||p.setAttribute("class",(p[r]("class")||"").trim()+" "+g)},P=function(p,g){var _;(_=y(p,g))&&p.setAttribute("class",(p[r]("class")||"").replace(_," "))},T=function(p,g,_){var C=_?t:"removeEventListener";_&&T(p,g),l.forEach(function(B){p[C](B,g)})},N=function(p,g,_,C,B){var A=d.createEvent("Event");return _||(_={}),_.instance=n,A.initEvent(g,!C,!B),A.detail=_,p.dispatchEvent(A),A},W=function(p,g){var _;!e&&(_=u.picturefill||i.pf)?(g&&g.src&&!p[r]("srcset")&&p.setAttribute("srcset",g.src),_({reevaluate:!0,elements:[p]})):g&&g.src&&(p.src=g.src)},q=function(p,g){return(getComputedStyle(p,null)||{})[g]},V=function(p,g,_){for(_=_||p.offsetWidth;_<i.minSize&&g&&!p._lazysizesWidth;)_=g.offsetWidth,g=g.parentNode;return _},H=function(){var p,g,_=[],C=[],B=_,A=function(){var F=B;for(B=_.length?C:_,p=!0,g=!1;F.length;)F.shift()();p=!1},R=function(F,z){p&&!z?F.apply(this,arguments):(B.push(F),g||(g=!0,(d.hidden?s:a)(A)))};return R._lsFlush=A,R}(),ne=function(p,g){return g?function(){H(p)}:function(){var _=this,C=arguments;H(function(){p.apply(_,C)})}},pe=function(p){var g,_=0,C=i.throttleDelay,B=i.ricTimeout,A=function(){g=!1,_=c.now(),p()},R=v&&B>49?function(){v(A,{timeout:B}),B!==i.ricTimeout&&(B=i.ricTimeout)}:ne(function(){s(A)},!0);return function(F){var z;(F=F===!0)&&(B=33),!g&&(g=!0,z=C-(c.now()-_),z<0&&(z=0),F||z<9?R():s(R,z))}},ue=function(p){var g,_,C=99,B=function(){g=null,p()},A=function(){var R=c.now()-_;R<C?s(A,C-R):(v||B)(B)};return function(){_=c.now(),g||(g=s(A,C))}},ce=function(){var p,g,_,C,B,A,R,F,z,I,U,J,be=/^img$/i,me=/^iframe$/i,Me="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent),_e=0,re=0,Q=0,ee=-1,de=function(o){Q--,(!o||Q<0||!o.target)&&(Q=0)},fe=function(o){return J==null&&(J=q(d.body,"visibility")=="hidden"),J||!(q(o.parentNode,"visibility")=="hidden"&&q(o,"visibility")=="hidden")},ye=function(o,m){var w,k=o,L=fe(o);for(F-=m,U+=m,z-=m,I+=m;L&&(k=k.offsetParent)&&k!=d.body&&k!=f;)L=(q(k,"opacity")||1)>0,L&&q(k,"overflow")!="visible"&&(w=k.getBoundingClientRect(),L=I>w.left&&z<w.right&&U>w.top-1&&F<w.bottom+1);return L},le=function(){var o,m,w,k,L,x,D,K,$,Z,X,te,G=n.elements;if((C=i.loadMode)&&Q<8&&(o=G.length)){for(m=0,ee++;m<o;m++)if(!(!G[m]||G[m]._lazyRace)){if(!Me||n.prematureUnveil&&n.prematureUnveil(G[m])){ie(G[m]);continue}if((!(K=G[m][r]("data-expand"))||!(x=K*1))&&(x=re),Z||(Z=!i.expand||i.expand<1?f.clientHeight>500&&f.clientWidth>500?500:370:i.expand,n._defEx=Z,X=Z*i.expFactor,te=i.hFac,J=null,re<X&&Q<1&&ee>2&&C>2&&!d.hidden?(re=X,ee=0):C>1&&ee>1&&Q<6?re=Z:re=_e),$!==x&&(A=innerWidth+x*te,R=innerHeight+x,D=x*-1,$=x),w=G[m].getBoundingClientRect(),(U=w.bottom)>=D&&(F=w.top)<=R&&(I=w.right)>=D*te&&(z=w.left)<=A&&(U||I||z||F)&&(i.loadHidden||fe(G[m]))&&(g&&Q<3&&!K&&(C<3||ee<4)||ye(G[m],x))){if(ie(G[m]),L=!0,Q>9)break}else!L&&g&&!k&&Q<4&&ee<4&&C>2&&(p[0]||i.preloadAfterLoad)&&(p[0]||!K&&(U||I||z||F||G[m][r](i.sizesAttr)!="auto"))&&(k=p[0]||G[m])}k&&!L&&ie(k)}},j=pe(le),ve=function(o){var m=o.target;if(m._lazyCache){delete m._lazyCache;return}de(o),O(m,i.loadedClass),P(m,i.loadingClass),T(m,ge),N(m,"lazyloaded")},Ae=ne(ve),ge=function(o){Ae({target:o.target})},Se=function(o,m){var w=o.getAttribute("data-load-mode")||i.iframeLoadMode;w==0?o.contentWindow.location.replace(m):w==1&&(o.src=m)},Pe=function(o){var m,w=o[r](i.srcsetAttr);(m=i.customMedia[o[r]("data-media")||o[r]("media")])&&o.setAttribute("media",m),w&&o.setAttribute("srcset",w)},Fe=ne(function(o,m,w,k,L){var x,D,K,$,Z,X;(Z=N(o,"lazybeforeunveil",m)).defaultPrevented||(k&&(w?O(o,i.autosizesClass):o.setAttribute("sizes",k)),D=o[r](i.srcsetAttr),x=o[r](i.srcAttr),L&&(K=o.parentNode,$=K&&h.test(K.nodeName||"")),X=m.firesLoad||"src"in o&&(D||x||$),Z={target:o},O(o,i.loadingClass),X&&(clearTimeout(_),_=s(de,2500),T(o,ge,!0)),$&&S.call(K.getElementsByTagName("source"),Pe),D?o.setAttribute("srcset",D):x&&!$&&(me.test(o.nodeName)?Se(o,x):o.src=x),L&&(D||$)&&W(o,{src:x})),o._lazyRace&&delete o._lazyRace,P(o,i.lazyClass),H(function(){var te=o.complete&&o.naturalWidth>1;(!X||te)&&(te&&O(o,i.fastLoadedClass),ve(Z),o._lazyCache=!0,s(function(){"_lazyCache"in o&&delete o._lazyCache},9)),o.loading=="lazy"&&Q--},!0)}),ie=function(o){if(!o._lazyRace){var m,w=be.test(o.nodeName),k=w&&(o[r](i.sizesAttr)||o[r]("sizes")),L=k=="auto";(L||!g)&&w&&(o[r]("src")||o.srcset)&&!o.complete&&!y(o,i.errorClass)&&y(o,i.lazyClass)||(m=N(o,"lazyunveilread").detail,L&&oe.updateElem(o,!0,o.offsetWidth),o._lazyRace=!0,Q++,Fe(o,m,L,k,w))}},we=ue(function(){i.loadMode=3,j()}),he=function(){i.loadMode==3&&(i.loadMode=2),we()},se=function(){if(!g){if(c.now()-B<999){s(se,999);return}g=!0,i.loadMode=3,j(),M("scroll",he,!0)}};return{_:function(){B=c.now(),n.elements=d.getElementsByClassName(i.lazyClass),p=d.getElementsByClassName(i.lazyClass+" "+i.preloadClass),M("scroll",j,!0),M("resize",j,!0),M("pageshow",function(o){if(o.persisted){var m=d.querySelectorAll("."+i.loadingClass);m.length&&m.forEach&&a(function(){m.forEach(function(w){w.complete&&ie(w)})})}}),u.MutationObserver?new MutationObserver(j).observe(f,{childList:!0,subtree:!0,attributes:!0}):(f[t]("DOMNodeInserted",j,!0),f[t]("DOMAttrModified",j,!0),setInterval(j,999)),M("hashchange",j,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(o){d[t](o,j,!0)}),/d$|^c/.test(d.readyState)?se():(M("load",se),d[t]("DOMContentLoaded",j),s(se,2e4)),n.elements.length?(le(),H._lsFlush()):j()},checkElems:j,unveil:ie,_aLSL:he}}(),oe=function(){var p,g=ne(function(A,R,F,z){var I,U,J;if(A._lazysizesWidth=z,z+="px",A.setAttribute("sizes",z),h.test(R.nodeName||""))for(I=R.getElementsByTagName("source"),U=0,J=I.length;U<J;U++)I[U].setAttribute("sizes",z);F.detail.dataAttr||W(A,F.detail)}),_=function(A,R,F){var z,I=A.parentNode;I&&(F=V(A,I,F),z=N(A,"lazybeforesizes",{width:F,dataAttr:!!R}),z.defaultPrevented||(F=z.detail.width,F&&F!==A._lazysizesWidth&&g(A,I,z,F)))},C=function(){var A,R=p.length;if(R)for(A=0;A<R;A++)_(p[A])},B=ue(C);return{_:function(){p=d.getElementsByClassName(i.autosizesClass),M("resize",B)},checkElems:B,updateElem:_}}(),ae=function(){!ae.i&&d.getElementsByClassName&&(ae.i=!0,oe._(),ce._())};return s(function(){i.init&&ae()}),n={cfg:i,autoSizer:oe,loader:ce,init:ae,uP:W,aC:O,rC:P,hC:y,fire:N,gW:V,rAF:H},n})},1770:function(Y,E,u){var d,c,n;(function(i,f){if(!!i){var e=function(){f(i.lazySizes),i.removeEventListener("lazyunveilread",e,!0)};f=f.bind(null,i,i.document),Y.exports?f(u(7090)):(c=[u(7090)],d=f,n=typeof d=="function"?d.apply(E,c):d,n!==void 0&&(Y.exports=n))}})(typeof window!="undefined"?window:0,function(i,f,e){"use strict";if(!!i.addEventListener){var t=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,r=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,M=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,s=/^picture$/i,a=e.cfg,v=function(l){return getComputedStyle(l,null)||{}},h={getParent:function(l,b){var S=l,y=l.parentNode;return(!b||b=="prev")&&y&&s.test(y.nodeName||"")&&(y=y.parentNode),b!="self"&&(b=="prev"?S=l.previousElementSibling:b&&(y.closest||i.jQuery)?S=(y.closest?y.closest(b):jQuery(y).closest(b)[0])||y:S=y),S},getFit:function(l){var b,S,y=v(l),O=y.content||y.fontFamily,P={fit:l._lazysizesParentFit||l.getAttribute("data-parent-fit")};return!P.fit&&O&&(b=O.match(r))&&(P.fit=b[1]),P.fit?(S=l._lazysizesParentContainer||l.getAttribute("data-parent-container"),!S&&O&&(b=O.match(M))&&(S=b[1]),P.parent=h.getParent(l,S)):P.fit=y.objectFit,P},getImageRatio:function(l){var b,S,y,O,P,T,N,W=l.parentNode,q=W&&s.test(W.nodeName||"")?W.querySelectorAll("source, img"):[l];for(b=0;b<q.length;b++)if(l=q[b],S=l.getAttribute(a.srcsetAttr)||l.getAttribute("srcset")||l.getAttribute("data-pfsrcset")||l.getAttribute("data-risrcset")||"",y=l._lsMedia||l.getAttribute("media"),y=a.customMedia[l.getAttribute("data-media")||y]||y,S&&(!y||(i.matchMedia&&matchMedia(y)||{}).matches)){O=parseFloat(l.getAttribute("data-aspectratio")),O||(P=S.match(t),P?P[2]=="w"?(T=P[1],N=P[3]):(T=P[3],N=P[1]):(T=l.getAttribute("width"),N=l.getAttribute("height")),O=T/N);break}return O},calculateSize:function(l,b){var S,y,O,P,T=this.getFit(l),N=T.fit,W=T.parent;return N!="width"&&(N!="contain"&&N!="cover"||!(O=this.getImageRatio(l)))?b:(W?b=W.clientWidth:W=l,P=b,N=="width"?P=b:(y=W.clientHeight,(S=b/y)&&(N=="cover"&&S<O||N=="contain"&&S>O)&&(P=b*(O/S))),P)}};e.parentFit=h,f.addEventListener("lazybeforesizes",function(l){if(!(l.defaultPrevented||l.detail.instance!=e)){var b=l.target;l.detail.width=h.calculateSize(b,l.detail.width)}})}})}}]);
