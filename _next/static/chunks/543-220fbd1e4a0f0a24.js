"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[543],{9543:function(e,t,r){r.d(t,{Z:function(){return X}});var n=r(9669),a=r.n(n),s=r(2777),u=r(2262),o=r(1531),i=r(3553),c=r(7247),p=r(9499),f=r(29),h=r(7794),d=r.n(h),v=r(748),l=r(6576);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var g="http://localhost".replace(/\/+$/,""),m=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a();(0,s.Z)(this,e),this.basePath=r,this.axios=n,(0,p.Z)(this,"configuration",void 0),t&&(this.configuration=t,this.basePath=t.basePath||this.basePath)},b=function(e){(0,o.Z)(r,e);var t=w(r);function r(e,n){var a;return(0,s.Z)(this,r),(a=t.call(this,n)).field=e,(0,p.Z)((0,v.Z)(a),"name","RequiredError"),a}return r}((0,l.Z)(Error));function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){o=!0,s=e},f:function(){try{u||null==r.return||r.return()}finally{if(o)throw s}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P="https://example.com",G=function(e,t,r){if(null===r||void 0===r)throw new b(t,"Required parameter ".concat(t," was null or undefined when calling ").concat(e,"."))},Z=function(e){for(var t=new URLSearchParams(e.search),r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var s=0,u=n;s<u.length;s++){var o=u[s];for(var i in o)if(Array.isArray(o[i])){t.delete(i);var c,p=x(o[i]);try{for(p.s();!(c=p.n()).done;){var f=c.value;t.append(i,f)}}catch(h){p.e(h)}finally{p.f()}}else t.set(i,o[i])}e.search=t.toString()},R=function(e,t,r){var n="string"!==typeof e;return(n&&r&&r.isJsonMime?r.isJsonMime(t.headers["Content-Type"]):n)?JSON.stringify(void 0!==e?e:{}):e||""},T=function(e){return e.pathname+e.search+e.hash},O=function(e,t,r,n){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,u=y(y({},e.options),{},{url:((null===n||void 0===n?void 0:n.basePath)||s)+e.url});return a.request(u)}};function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){var t=function(e){return{gamesGameIdDelete:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("gamesGameIdDelete","gameId",r),a="/games/{gameId}".replace("{".concat("gameId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"DELETE"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),gamesGameIdGet:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("gamesGameIdGet","gameId",r),a="/games/{gameId}".replace("{".concat("gameId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"GET"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),gamesGameIdPatch:function(){var t=(0,f.Z)(d().mark((function t(r,n){var a,s,u,o,i,c,p,f,h=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=h.length>2&&void 0!==h[2]?h[2]:{},G("gamesGameIdPatch","gameId",r),s="/games/{gameId}".replace("{".concat("gameId","}"),encodeURIComponent(String(r))),u=new URL(s,P),e&&(o=e.baseOptions),i=D(D({method:"PATCH"},o),a),p={},(c={})["Content-Type"]="application/json",Z(u,p),f=o&&o.headers?o.headers:{},i.headers=D(D(D({},c),f),a.headers),i.data=R(n,i,e),t.abrupt("return",{url:T(u),options:i});case 14:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),gamesGet:function(){var t=(0,f.Z)(d().mark((function t(){var r,n,a,s,u,o,i=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:{},n=new URL("/games",P),e&&(a=e.baseOptions),s=D(D({method:"GET"},a),r),u={},Z(n,{}),o=a&&a.headers?a.headers:{},s.headers=D(D(D({},u),o),r.headers),t.abrupt("return",{url:T(n),options:s});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),gamesPost:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},a=new URL("/games",P),e&&(s=e.baseOptions),u=D(D({method:"POST"},s),n),i={},(o={})["Content-Type"]="application/json",Z(a,i),c=s&&s.headers?s.headers:{},u.headers=D(D(D({},o),c),n.headers),u.data=R(r,u,e),t.abrupt("return",{url:T(a),options:u});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}(e);return{gamesGameIdDelete:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.gamesGameIdDelete(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},gamesGameIdGet:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.gamesGameIdGet(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},gamesGameIdPatch:function(r,n,s){return(0,f.Z)(d().mark((function u(){var o;return d().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.gamesGameIdPatch(r,n,s);case 2:return o=u.sent,u.abrupt("return",O(o,a(),g,e));case 4:case"end":return u.stop()}}),u)})))()},gamesGet:function(r){return(0,f.Z)(d().mark((function n(){var s;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.gamesGet(r);case 2:return s=n.sent,n.abrupt("return",O(s,a(),g,e));case 4:case"end":return n.stop()}}),n)})))()},gamesPost:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.gamesPost(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()}}},E=function(e){(0,o.Z)(r,e);var t=U(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"gamesGameIdDelete",value:function(e,t){var r=this;return C(this.configuration).gamesGameIdDelete(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"gamesGameIdGet",value:function(e,t){var r=this;return C(this.configuration).gamesGameIdGet(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"gamesGameIdPatch",value:function(e,t,r){var n=this;return C(this.configuration).gamesGameIdPatch(e,t,r).then((function(e){return e(n.axios,n.basePath)}))}},{key:"gamesGet",value:function(e){var t=this;return C(this.configuration).gamesGet(e).then((function(e){return e(t.axios,t.basePath)}))}},{key:"gamesPost",value:function(e,t){var r=this;return C(this.configuration).gamesPost(e,t).then((function(e){return e(r.axios,r.basePath)}))}}]),r}(m),j=function(e){var t=function(e){return{reviewsReviewIdLikeDelete:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("reviewsReviewIdLikeDelete","reviewId",r),a="/reviews/{reviewId}/like".replace("{".concat("reviewId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"DELETE"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),reviewsReviewIdLikePost:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("reviewsReviewIdLikePost","reviewId",r),a="/reviews/{reviewId}/like".replace("{".concat("reviewId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"POST"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}(e);return{reviewsReviewIdLikeDelete:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.reviewsReviewIdLikeDelete(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},reviewsReviewIdLikePost:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.reviewsReviewIdLikePost(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()}}},S=function(e){(0,o.Z)(r,e);var t=U(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"reviewsReviewIdLikeDelete",value:function(e,t){var r=this;return j(this.configuration).reviewsReviewIdLikeDelete(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"reviewsReviewIdLikePost",value:function(e,t){var r=this;return j(this.configuration).reviewsReviewIdLikePost(e,t).then((function(e){return e(r.axios,r.basePath)}))}}]),r}(m),A=function(e){var t=function(e){return{oauthCallbackGet:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("oauthCallbackGet","code",r),a=new URL("/oauth/callback",P),e&&(s=e.baseOptions),u=D(D({method:"GET"},s),n),o={},i={},void 0!==r&&(i.code=r),Z(a,i),c=s&&s.headers?s.headers:{},u.headers=D(D(D({},o),c),n.headers),t.abrupt("return",{url:T(a),options:u});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),oauthRedirectUriGet:function(){var t=(0,f.Z)(d().mark((function t(){var r,n,a,s,u,o,i=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:{},n=new URL("/oauth/redirect-uri",P),e&&(a=e.baseOptions),s=D(D({method:"GET"},a),r),u={},Z(n,{}),o=a&&a.headers?a.headers:{},s.headers=D(D(D({},u),o),r.headers),t.abrupt("return",{url:T(n),options:s});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}(e);return{oauthCallbackGet:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.oauthCallbackGet(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},oauthRedirectUriGet:function(r){return(0,f.Z)(d().mark((function n(){var s;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.oauthRedirectUriGet(r);case 2:return s=n.sent,n.abrupt("return",O(s,a(),g,e));case 4:case"end":return n.stop()}}),n)})))()}}},B=function(e){(0,o.Z)(r,e);var t=U(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"oauthCallbackGet",value:function(e,t){var r=this;return A(this.configuration).oauthCallbackGet(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"oauthRedirectUriGet",value:function(e){var t=this;return A(this.configuration).oauthRedirectUriGet(e).then((function(e){return e(t.axios,t.basePath)}))}}]),r}(m),H=function(e){var t=function(e){return{pingGet:function(){var t=(0,f.Z)(d().mark((function t(){var r,n,a,s,u,o,i=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:{},n=new URL("/ping",P),e&&(a=e.baseOptions),s=D(D({method:"GET"},a),r),u={},Z(n,{}),o=a&&a.headers?a.headers:{},s.headers=D(D(D({},u),o),r.headers),t.abrupt("return",{url:T(n),options:s});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}(e);return{pingGet:function(r){return(0,f.Z)(d().mark((function n(){var s;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.pingGet(r);case 2:return s=n.sent,n.abrupt("return",O(s,a(),g,e));case 4:case"end":return n.stop()}}),n)})))()}}},J=function(e){(0,o.Z)(r,e);var t=U(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"pingGet",value:function(e){var t=this;return H(this.configuration).pingGet(e).then((function(e){return e(t.axios,t.basePath)}))}}]),r}(m),M=function(e){var t=function(e){return{platformsGet:function(){var t=(0,f.Z)(d().mark((function t(){var r,n,a,s,u,o,i=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:{},n=new URL("/platforms",P),e&&(a=e.baseOptions),s=D(D({method:"GET"},a),r),u={},Z(n,{}),o=a&&a.headers?a.headers:{},s.headers=D(D(D({},u),o),r.headers),t.abrupt("return",{url:T(n),options:s});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),platformsPost:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},a=new URL("/platforms",P),e&&(s=e.baseOptions),u=D(D({method:"POST"},s),n),i={},(o={})["Content-Type"]="application/json",Z(a,i),c=s&&s.headers?s.headers:{},u.headers=D(D(D({},o),c),n.headers),u.data=R(r,u,e),t.abrupt("return",{url:T(a),options:u});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),platformsTagIdDelete:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("platformsTagIdDelete","tagId",r),a="/platforms/{tagId}".replace("{".concat("tagId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"DELETE"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),platformsTagIdGet:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("platformsTagIdGet","tagId",r),a="/platforms/{tagId}".replace("{".concat("tagId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"GET"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),platformsTagIdPatch:function(){var t=(0,f.Z)(d().mark((function t(r,n){var a,s,u,o,i,c,p,f,h=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=h.length>2&&void 0!==h[2]?h[2]:{},G("platformsTagIdPatch","tagId",r),s="/platforms/{tagId}".replace("{".concat("tagId","}"),encodeURIComponent(String(r))),u=new URL(s,P),e&&(o=e.baseOptions),i=D(D({method:"PATCH"},o),a),p={},(c={})["Content-Type"]="application/json",Z(u,p),f=o&&o.headers?o.headers:{},i.headers=D(D(D({},c),f),a.headers),i.data=R(n,i,e),t.abrupt("return",{url:T(u),options:i});case 14:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}}(e);return{platformsGet:function(r){return(0,f.Z)(d().mark((function n(){var s;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.platformsGet(r);case 2:return s=n.sent,n.abrupt("return",O(s,a(),g,e));case 4:case"end":return n.stop()}}),n)})))()},platformsPost:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.platformsPost(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},platformsTagIdDelete:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.platformsTagIdDelete(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},platformsTagIdGet:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.platformsTagIdGet(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},platformsTagIdPatch:function(r,n,s){return(0,f.Z)(d().mark((function u(){var o;return d().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.platformsTagIdPatch(r,n,s);case 2:return o=u.sent,u.abrupt("return",O(o,a(),g,e));case 4:case"end":return u.stop()}}),u)})))()}}},_=function(e){(0,o.Z)(r,e);var t=U(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"platformsGet",value:function(e){var t=this;return M(this.configuration).platformsGet(e).then((function(e){return e(t.axios,t.basePath)}))}},{key:"platformsPost",value:function(e,t){var r=this;return M(this.configuration).platformsPost(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"platformsTagIdDelete",value:function(e,t){var r=this;return M(this.configuration).platformsTagIdDelete(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"platformsTagIdGet",value:function(e,t){var r=this;return M(this.configuration).platformsTagIdGet(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"platformsTagIdPatch",value:function(e,t,r){var n=this;return M(this.configuration).platformsTagIdPatch(e,t,r).then((function(e){return e(n.axios,n.basePath)}))}}]),r}(m),q=function(e){var t=function(e){return{reviewsGet:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},a=new URL("/reviews",P),e&&(s=e.baseOptions),u=D(D({method:"GET"},s),n),o={},i={},void 0!==r&&(i.filter=r),Z(a,i),c=s&&s.headers?s.headers:{},u.headers=D(D(D({},o),c),n.headers),t.abrupt("return",{url:T(a),options:u});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),reviewsPost:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},a=new URL("/reviews",P),e&&(s=e.baseOptions),u=D(D({method:"POST"},s),n),i={},(o={})["Content-Type"]="application/json",Z(a,i),c=s&&s.headers?s.headers:{},u.headers=D(D(D({},o),c),n.headers),u.data=R(r,u,e),t.abrupt("return",{url:T(a),options:u});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),reviewsReviewIdDelete:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("reviewsReviewIdDelete","reviewId",r),a="/reviews/{reviewId}".replace("{".concat("reviewId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"DELETE"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),reviewsReviewIdGet:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("reviewsReviewIdGet","reviewId",r),a="/reviews/{reviewId}".replace("{".concat("reviewId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"GET"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),reviewsReviewIdPatch:function(){var t=(0,f.Z)(d().mark((function t(r,n){var a,s,u,o,i,c,p,f,h=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=h.length>2&&void 0!==h[2]?h[2]:{},G("reviewsReviewIdPatch","reviewId",r),s="/reviews/{reviewId}".replace("{".concat("reviewId","}"),encodeURIComponent(String(r))),u=new URL(s,P),e&&(o=e.baseOptions),i=D(D({method:"PATCH"},o),a),p={},(c={})["Content-Type"]="application/json",Z(u,p),f=o&&o.headers?o.headers:{},i.headers=D(D(D({},c),f),a.headers),i.data=R(n,i,e),t.abrupt("return",{url:T(u),options:i});case 14:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}}(e);return{reviewsGet:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.reviewsGet(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},reviewsPost:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.reviewsPost(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},reviewsReviewIdDelete:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.reviewsReviewIdDelete(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},reviewsReviewIdGet:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.reviewsReviewIdGet(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},reviewsReviewIdPatch:function(r,n,s){return(0,f.Z)(d().mark((function u(){var o;return d().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.reviewsReviewIdPatch(r,n,s);case 2:return o=u.sent,u.abrupt("return",O(o,a(),g,e));case 4:case"end":return u.stop()}}),u)})))()}}},K=function(e){(0,o.Z)(r,e);var t=U(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"reviewsGet",value:function(e,t){var r=this;return q(this.configuration).reviewsGet(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"reviewsPost",value:function(e,t){var r=this;return q(this.configuration).reviewsPost(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"reviewsReviewIdDelete",value:function(e,t){var r=this;return q(this.configuration).reviewsReviewIdDelete(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"reviewsReviewIdGet",value:function(e,t){var r=this;return q(this.configuration).reviewsReviewIdGet(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"reviewsReviewIdPatch",value:function(e,t,r){var n=this;return q(this.configuration).reviewsReviewIdPatch(e,t,r).then((function(e){return e(n.axios,n.basePath)}))}}]),r}(m),N=function(e){var t=function(e){return{tagsGet:function(){var t=(0,f.Z)(d().mark((function t(){var r,n,a,s,u,o,i=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:{},n=new URL("/tags",P),e&&(a=e.baseOptions),s=D(D({method:"GET"},a),r),u={},Z(n,{}),o=a&&a.headers?a.headers:{},s.headers=D(D(D({},u),o),r.headers),t.abrupt("return",{url:T(n),options:s});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),tagsPost:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},a=new URL("/tags",P),e&&(s=e.baseOptions),u=D(D({method:"POST"},s),n),i={},(o={})["Content-Type"]="application/json",Z(a,i),c=s&&s.headers?s.headers:{},u.headers=D(D(D({},o),c),n.headers),u.data=R(r,u,e),t.abrupt("return",{url:T(a),options:u});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),tagsTagIdDelete:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("tagsTagIdDelete","tagId",r),a="/tags/{tagId}".replace("{".concat("tagId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"DELETE"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),tagsTagIdGet:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("tagsTagIdGet","tagId",r),a="/tags/{tagId}".replace("{".concat("tagId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"GET"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),tagsTagIdPatch:function(){var t=(0,f.Z)(d().mark((function t(r,n){var a,s,u,o,i,c,p,f,h=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=h.length>2&&void 0!==h[2]?h[2]:{},G("tagsTagIdPatch","tagId",r),s="/tags/{tagId}".replace("{".concat("tagId","}"),encodeURIComponent(String(r))),u=new URL(s,P),e&&(o=e.baseOptions),i=D(D({method:"PATCH"},o),a),p={},(c={})["Content-Type"]="application/json",Z(u,p),f=o&&o.headers?o.headers:{},i.headers=D(D(D({},c),f),a.headers),i.data=R(n,i,e),t.abrupt("return",{url:T(u),options:i});case 14:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}}(e);return{tagsGet:function(r){return(0,f.Z)(d().mark((function n(){var s;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.tagsGet(r);case 2:return s=n.sent,n.abrupt("return",O(s,a(),g,e));case 4:case"end":return n.stop()}}),n)})))()},tagsPost:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.tagsPost(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},tagsTagIdDelete:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.tagsTagIdDelete(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},tagsTagIdGet:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.tagsTagIdGet(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()},tagsTagIdPatch:function(r,n,s){return(0,f.Z)(d().mark((function u(){var o;return d().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.tagsTagIdPatch(r,n,s);case 2:return o=u.sent,u.abrupt("return",O(o,a(),g,e));case 4:case"end":return u.stop()}}),u)})))()}}},$=function(e){(0,o.Z)(r,e);var t=U(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"tagsGet",value:function(e){var t=this;return N(this.configuration).tagsGet(e).then((function(e){return e(t.axios,t.basePath)}))}},{key:"tagsPost",value:function(e,t){var r=this;return N(this.configuration).tagsPost(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"tagsTagIdDelete",value:function(e,t){var r=this;return N(this.configuration).tagsTagIdDelete(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"tagsTagIdGet",value:function(e,t){var r=this;return N(this.configuration).tagsTagIdGet(e,t).then((function(e){return e(r.axios,r.basePath)}))}},{key:"tagsTagIdPatch",value:function(e,t,r){var n=this;return N(this.configuration).tagsTagIdPatch(e,t,r).then((function(e){return e(n.axios,n.basePath)}))}}]),r}(m),z=function(e){var t=function(e){return{meGet:function(){var t=(0,f.Z)(d().mark((function t(){var r,n,a,s,u,o,i=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:{},n=new URL("/me",P),e&&(a=e.baseOptions),s=D(D({method:"GET"},a),r),u={},Z(n,{}),o=a&&a.headers?a.headers:{},s.headers=D(D(D({},u),o),r.headers),t.abrupt("return",{url:T(n),options:s});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),usersGet:function(){var t=(0,f.Z)(d().mark((function t(){var r,n,a,s,u,o,i=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:{},n=new URL("/users",P),e&&(a=e.baseOptions),s=D(D({method:"GET"},a),r),u={},Z(n,{}),o=a&&a.headers?a.headers:{},s.headers=D(D(D({},u),o),r.headers),t.abrupt("return",{url:T(n),options:s});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),usersUserIdGet:function(){var t=(0,f.Z)(d().mark((function t(r){var n,a,s,u,o,i,c,p=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:{},G("usersUserIdGet","userId",r),a="/users/{userId}".replace("{".concat("userId","}"),encodeURIComponent(String(r))),s=new URL(a,P),e&&(u=e.baseOptions),o=D(D({method:"GET"},u),n),i={},Z(s,{}),c=u&&u.headers?u.headers:{},o.headers=D(D(D({},i),c),n.headers),t.abrupt("return",{url:T(s),options:o});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}(e);return{meGet:function(r){return(0,f.Z)(d().mark((function n(){var s;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.meGet(r);case 2:return s=n.sent,n.abrupt("return",O(s,a(),g,e));case 4:case"end":return n.stop()}}),n)})))()},usersGet:function(r){return(0,f.Z)(d().mark((function n(){var s;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.usersGet(r);case 2:return s=n.sent,n.abrupt("return",O(s,a(),g,e));case 4:case"end":return n.stop()}}),n)})))()},usersUserIdGet:function(r,n){return(0,f.Z)(d().mark((function s(){var u;return d().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.usersUserIdGet(r,n);case 2:return u=s.sent,s.abrupt("return",O(u,a(),g,e));case 4:case"end":return s.stop()}}),s)})))()}}},F=function(e){(0,o.Z)(r,e);var t=U(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"meGet",value:function(e){var t=this;return z(this.configuration).meGet(e).then((function(e){return e(t.axios,t.basePath)}))}},{key:"usersGet",value:function(e){var t=this;return z(this.configuration).usersGet(e).then((function(e){return e(t.axios,t.basePath)}))}},{key:"usersUserIdGet",value:function(e,t){var r=this;return z(this.configuration).usersUserIdGet(e,t).then((function(e){return e(r.axios,r.basePath)}))}}]),r}(m),Q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s.Z)(this,e),(0,p.Z)(this,"apiKey",void 0),(0,p.Z)(this,"username",void 0),(0,p.Z)(this,"password",void 0),(0,p.Z)(this,"accessToken",void 0),(0,p.Z)(this,"basePath",void 0),(0,p.Z)(this,"baseOptions",void 0),(0,p.Z)(this,"formDataCtor",void 0),this.apiKey=t.apiKey,this.username=t.username,this.password=t.password,this.accessToken=t.accessToken,this.basePath=t.basePath,this.baseOptions=t.baseOptions,this.formDataCtor=t.formDataCtor}return(0,u.Z)(e,[{key:"isJsonMime",value:function(e){var t=new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$","i");return null!==e&&(t.test(e)||"application/json-patch+json"===e.toLowerCase())}}]),e}(),V=a().create({withCredentials:!0}),W=new Q({basePath:"https://hackathon-22spring-17-server.trap.games"}),X={base:new m(W,void 0,V),ping:new J(W,void 0,V),games:new E(W,void 0,V),platforms:new _(W,void 0,V),tags:new $(W,void 0,V),reviews:new K(W,void 0,V),likes:new S(W,void 0,V),users:new F(W,void 0,V),oauth:new B(W,void 0,V)}}}]);