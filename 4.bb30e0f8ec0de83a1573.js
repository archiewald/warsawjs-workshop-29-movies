(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"16fj":function(e,t,n){"use strict";n.r(t);var r=n("CcnG"),o=function(){return function(){}}(),s=n("pMnS"),i=n("AytR"),a=n("mrSG"),u=n("F/XL"),l=n("6blF"),p=n("Phjn"),c=n("VnD/"),h=n("67Y/"),d=n("Ip0R"),f=function(){return function(){}}(),y=function(){return function(){}}(),b=function(){function e(e){var t=this;this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?function(){t.headers=new Map,e.split("\n").forEach(function(e){var n=e.indexOf(":");if(n>0){var r=e.slice(0,n),o=r.toLowerCase(),s=e.slice(n+1).trim();t.maybeSetNormalizedName(r,o),t.headers.has(o)?t.headers.get(o).push(s):t.headers.set(o,[s])}})}:function(){t.headers=new Map,Object.keys(e).forEach(function(n){var r=e[n],o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(t.headers.set(o,r),t.maybeSetNormalizedName(n,o))})}:this.headers=new Map}return e.prototype.has=function(e){return this.init(),this.headers.has(e.toLowerCase())},e.prototype.get=function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null},e.prototype.keys=function(){return this.init(),Array.from(this.normalizedNames.values())},e.prototype.getAll=function(e){return this.init(),this.headers.get(e.toLowerCase())||null},e.prototype.append=function(e,t){return this.clone({name:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({name:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({name:e,value:t,op:"d"})},e.prototype.maybeSetNormalizedName=function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)},e.prototype.init=function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(e){return t.applyUpdate(e)}),this.lazyUpdate=null))},e.prototype.copyFrom=function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach(function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))})},e.prototype.clone=function(t){var n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n},e.prototype.applyUpdate=function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var r=("a"===e.op?this.headers.get(t):void 0)||[];r.push.apply(r,Object(a.g)(n)),this.headers.set(t,r);break;case"d":var o=e.value;if(o){var s=this.headers.get(t);if(!s)return;0===(s=s.filter(function(e){return-1===o.indexOf(e)})).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}else this.headers.delete(t),this.normalizedNames.delete(t)}},e.prototype.forEach=function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(n){return e(t.normalizedNames.get(n),t.headers.get(n))})},e}(),v=function(){function e(){}return e.prototype.encodeKey=function(e){return m(e)},e.prototype.encodeValue=function(e){return m(e)},e.prototype.decodeKey=function(e){return decodeURIComponent(e)},e.prototype.decodeValue=function(e){return decodeURIComponent(e)},e}();function m(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var g=function(){function e(e){void 0===e&&(e={});var t,n,r,o=this;if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new v,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(t=e.fromString,n=this.encoder,r=new Map,t.length>0&&t.split("&").forEach(function(e){var t=e.indexOf("="),o=Object(a.f)(-1==t?[n.decodeKey(e),""]:[n.decodeKey(e.slice(0,t)),n.decodeValue(e.slice(t+1))],2),s=o[0],i=o[1],u=r.get(s)||[];u.push(i),r.set(s,u)}),r)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(function(t){var n=e.fromObject[t];o.map.set(t,Array.isArray(n)?n:[n])})):this.map=null}return e.prototype.has=function(e){return this.init(),this.map.has(e)},e.prototype.get=function(e){this.init();var t=this.map.get(e);return t?t[0]:null},e.prototype.getAll=function(e){return this.init(),this.map.get(e)||null},e.prototype.keys=function(){return this.init(),Array.from(this.map.keys())},e.prototype.append=function(e,t){return this.clone({param:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({param:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({param:e,value:t,op:"d"})},e.prototype.toString=function(){var e=this;return this.init(),this.keys().map(function(t){var n=e.encoder.encodeKey(t);return e.map.get(t).map(function(t){return n+"="+e.encoder.encodeValue(t)}).join("&")}).join("&")},e.prototype.clone=function(t){var n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n},e.prototype.init=function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(t){return e.map.set(t,e.cloneFrom.map.get(t))}),this.updates.forEach(function(t){switch(t.op){case"a":case"s":var n=("a"===t.op?e.map.get(t.param):void 0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var r=e.map.get(t.param)||[],o=r.indexOf(t.value);-1!==o&&r.splice(o,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}}),this.cloneFrom=null)},e}();function w(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function T(e){return"undefined"!=typeof Blob&&e instanceof Blob}function k(e){return"undefined"!=typeof FormData&&e instanceof FormData}var E=function(){function e(e,t,n,r){var o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==n?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new b),this.params){var s=this.params.toString();if(0===s.length)this.urlWithParams=t;else{var i=t.indexOf("?");this.urlWithParams=t+(-1===i?"?":i<t.length-1?"&":"")+s}}else this.params=new g,this.urlWithParams=t}return e.prototype.serializeBody=function(){return null===this.body?null:w(this.body)||T(this.body)||k(this.body)||"string"==typeof this.body?this.body:this.body instanceof g?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()},e.prototype.detectContentTypeHeader=function(){return null===this.body?null:k(this.body)?null:T(this.body)?this.body.type||null:w(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof g?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null},e.prototype.clone=function(t){void 0===t&&(t={});var n=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,i=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,l=t.params||this.params;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce(function(e,n){return e.set(n,t.setHeaders[n])},u)),t.setParams&&(l=Object.keys(t.setParams).reduce(function(e,n){return e.set(n,t.setParams[n])},l)),new e(n,r,s,{params:l,headers:u,reportProgress:a,responseType:o,withCredentials:i})},e}(),O=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({}),j=function(){return function(e,t,n){void 0===t&&(t=200),void 0===n&&(n="OK"),this.headers=e.headers||new b,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}(),x=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n.type=O.ResponseHeader,n}return Object(a.c)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(j),C=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n.type=O.Response,n.body=void 0!==t.body?t.body:null,n}return Object(a.c)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(j),N=function(e){function t(t){var n=e.call(this,t,0,"Unknown Error")||this;return n.name="HttpErrorResponse",n.ok=!1,n.message=n.status>=200&&n.status<300?"Http failure during parsing for "+(t.url||"(unknown url)"):"Http failure response for "+(t.url||"(unknown url)")+": "+t.status+" "+t.statusText,n.error=t.error||null,n}return Object(a.c)(t,e),t}(j);function P(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var S=function(){function e(e){this.handler=e}return e.prototype.request=function(e,t,n){var r,o=this;if(void 0===n&&(n={}),e instanceof E)r=e;else{var s;s=n.headers instanceof b?n.headers:new b(n.headers);var i=void 0;n.params&&(i=n.params instanceof g?n.params:new g({fromObject:n.params})),r=new E(e,t,void 0!==n.body?n.body:null,{headers:s,params:i,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}var a=Object(u.a)(r).pipe(Object(p.a)(function(e){return o.handler.handle(e)}));if(e instanceof E||"events"===n.observe)return a;var l=a.pipe(Object(c.a)(function(e){return e instanceof C}));switch(n.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return l.pipe(Object(h.a)(function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return l.pipe(Object(h.a)(function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return l.pipe(Object(h.a)(function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return l.pipe(Object(h.a)(function(e){return e.body}))}case"response":return l;default:throw new Error("Unreachable: unhandled observe type "+n.observe+"}")}},e.prototype.delete=function(e,t){return void 0===t&&(t={}),this.request("DELETE",e,t)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this.request("GET",e,t)},e.prototype.head=function(e,t){return void 0===t&&(t={}),this.request("HEAD",e,t)},e.prototype.jsonp=function(e,t){return this.request("JSONP",e,{params:(new g).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})},e.prototype.options=function(e,t){return void 0===t&&(t={}),this.request("OPTIONS",e,t)},e.prototype.patch=function(e,t,n){return void 0===n&&(n={}),this.request("PATCH",e,P(n,t))},e.prototype.post=function(e,t,n){return void 0===n&&(n={}),this.request("POST",e,P(n,t))},e.prototype.put=function(e,t,n){return void 0===n&&(n={}),this.request("PUT",e,P(n,t))},e}(),R=function(){function e(e,t){this.next=e,this.interceptor=t}return e.prototype.handle=function(e){return this.interceptor.intercept(e,this.next)},e}(),z=new r.p("HTTP_INTERCEPTORS"),A=function(){function e(){}return e.prototype.intercept=function(e,t){return t.handle(e)},e}(),L=/^\)\]\}',?\n/,U=function(){return function(){}}(),F=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e}(),H=function(){function e(e){this.xhrFactory=e}return e.prototype.handle=function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new l.a(function(n){var r=t.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach(function(e,t){return r.setRequestHeader(e,t.join(","))}),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var o=e.detectContentTypeHeader();null!==o&&r.setRequestHeader("Content-Type",o)}if(e.responseType){var s=e.responseType.toLowerCase();r.responseType="json"!==s?s:"text"}var i=e.serializeBody(),a=null,u=function(){if(null!==a)return a;var t=1223===r.status?204:r.status,n=r.statusText||"OK",o=new b(r.getAllResponseHeaders()),s=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return a=new x({headers:o,status:t,statusText:n,url:s})},l=function(){var t=u(),o=t.headers,s=t.status,i=t.statusText,a=t.url,l=null;204!==s&&(l=void 0===r.response?r.responseText:r.response),0===s&&(s=l?200:0);var p=s>=200&&s<300;if("json"===e.responseType&&"string"==typeof l){var c=l;l=l.replace(L,"");try{l=""!==l?JSON.parse(l):null}catch(h){l=c,p&&(p=!1,l={error:h,text:l})}}p?(n.next(new C({body:l,headers:o,status:s,statusText:i,url:a||void 0})),n.complete()):n.error(new N({error:l,headers:o,status:s,statusText:i,url:a||void 0}))},p=function(e){var t=new N({error:e,status:r.status||0,statusText:r.statusText||"Unknown Error"});n.error(t)},c=!1,h=function(t){c||(n.next(u()),c=!0);var o={type:O.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(o.total=t.total),"text"===e.responseType&&r.responseText&&(o.partialText=r.responseText),n.next(o)},d=function(e){var t={type:O.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),n.next(t)};return r.addEventListener("load",l),r.addEventListener("error",p),e.reportProgress&&(r.addEventListener("progress",h),null!==i&&r.upload&&r.upload.addEventListener("progress",d)),r.send(i),n.next({type:O.Sent}),function(){r.removeEventListener("error",p),r.removeEventListener("load",l),e.reportProgress&&(r.removeEventListener("progress",h),null!==i&&r.upload&&r.upload.removeEventListener("progress",d)),r.abort()}})},e}(),I=new r.p("XSRF_COOKIE_NAME"),q=new r.p("XSRF_HEADER_NAME"),M=function(){return function(){}}(),B=function(){function e(e,t,n){this.doc=e,this.platform=t,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return e.prototype.getToken=function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(d.p)(e,this.cookieName),this.lastCookieString=e),this.lastToken},e}(),D=function(){function e(e,t){this.tokenService=e,this.headerName=t}return e.prototype.intercept=function(e,t){var n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);var r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)},e}(),K=function(){function e(e,t){this.backend=e,this.injector=t,this.chain=null}return e.prototype.handle=function(e){if(null===this.chain){var t=this.injector.get(z,[]);this.chain=t.reduceRight(function(e,t){return new R(e,t)},this.backend)}return this.chain.handle(e)},e}(),J=function(){function e(){}var t;return t=e,e.disable=function(){return{ngModule:t,providers:[{provide:D,useClass:A}]}},e.withOptions=function(e){return void 0===e&&(e={}),{ngModule:t,providers:[e.cookieName?{provide:I,useValue:e.cookieName}:[],e.headerName?{provide:q,useValue:e.headerName}:[]]}},e}(),V=function(){return function(){}}(),X=function(){function e(e){this.http=e}return e.prototype.fetchVideos=function(){return this.http.get(i.a.backendURL).toPromise()},e.ngInjectableDef=r.Q({factory:function(){return new e(r.T(S))},token:e,providedIn:"root"}),e}(),G=function(){function e(e){this.videosService=e}return e.prototype.fetchMovies=function(){return e=this,void 0,n=function(){var e;return function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(a){s=[6,a],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}(this,function(t){switch(t.label){case 0:return[4,this.videosService.fetchVideos()];case 1:return e=t.sent(),console.log(e),[2]}})},new((t=void 0)||(t=Promise))(function(r,o){function s(e){try{a(n.next(e))}catch(t){o(t)}}function i(e){try{a(n.throw(e))}catch(t){o(t)}}function a(e){e.done?r(e.value):new t(function(t){t(e.value)}).then(s,i)}a((n=n.apply(e,[])).next())});var e,t,n},e.prototype.ngOnInit=function(){},e}(),W=r.jb({encapsulation:0,styles:[[""]],data:{}});function _(e){return r.vb(0,[(e()(),r.lb(0,0,null,null,3,"p",[],null,null,null,null,null)),(e()(),r.ub(-1,null,[" page-video-list works! "])),(e()(),r.lb(2,0,null,null,1,"button",[],null,[[null,"click"]],function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.fetchMovies()&&r),r},null,null)),(e()(),r.ub(-1,null,[" fetch videos "]))],null,null)}function Y(e){return r.vb(0,[(e()(),r.lb(0,0,null,null,1,"app-page-video-list",[],null,null,null,_,W)),r.kb(1,114688,null,0,G,[X],null,null)],function(e,t){e(t,1,0)},null)}var Q=r.hb("app-page-video-list",G,Y,{},{},[]),Z=function(){function e(){}return e.prototype.ngOnInit=function(){},e}(),$=r.jb({encapsulation:0,styles:[[""]],data:{}});function ee(e){return r.vb(0,[(e()(),r.lb(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r.ub(-1,null,[" page-video-not-found works!\n"]))],null,null)}function te(e){return r.vb(0,[(e()(),r.lb(0,0,null,null,1,"app-page-video-not-found",[],null,null,null,ee,$)),r.kb(1,114688,null,0,Z,[],null,null)],function(e,t){e(t,1,0)},null)}var ne=r.hb("app-page-video-not-found",Z,te,{},{},[]),re=function(){function e(){}return e.prototype.ngOnInit=function(){},e}(),oe=r.jb({encapsulation:0,styles:[[""]],data:{}});function se(e){return r.vb(0,[(e()(),r.lb(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r.ub(-1,null,[" page-video-profile works!\n"]))],null,null)}function ie(e){return r.vb(0,[(e()(),r.lb(0,0,null,null,1,"app-page-video-profile",[],null,null,null,se,oe)),r.kb(1,114688,null,0,re,[],null,null)],function(e,t){e(t,1,0)},null)}var ae=r.hb("app-page-video-profile",re,ie,{},{},[]),ue=n("ZYCi"),le=function(){return function(){}}();n.d(t,"LogicModuleNgFactory",function(){return pe});var pe=r.ib(o,[],function(e){return r.qb([r.rb(512,r.j,r.Y,[[8,[s.a,Q,ne,ae]],[3,r.j],r.x]),r.rb(4608,d.i,d.h,[r.u,[2,d.o]]),r.rb(4608,M,B,[d.c,r.B,I]),r.rb(4608,D,D,[M,q]),r.rb(5120,z,function(e){return[e]},[D]),r.rb(4608,F,F,[]),r.rb(6144,U,null,[F]),r.rb(4608,H,H,[U]),r.rb(6144,y,null,[H]),r.rb(4608,f,K,[y,r.q]),r.rb(4608,S,S,[f]),r.rb(4608,X,X,[S]),r.rb(1073742336,d.b,d.b,[]),r.rb(1073742336,ue.m,ue.m,[[2,ue.s],[2,ue.k]]),r.rb(1073742336,le,le,[]),r.rb(1073742336,J,J,[]),r.rb(1073742336,V,V,[]),r.rb(1073742336,o,o,[]),r.rb(1024,ue.i,function(){return[[{path:"",component:G},{path:"not-found",component:Z},{path:":id",component:re}]]},[]),r.rb(256,I,"XSRF-TOKEN",[]),r.rb(256,q,"X-XSRF-TOKEN",[])])})}}]);