"use strict";var precacheConfig=[["/index.html","9cb9ddaa954e11c768e0df11476b0df6"],["/static/css/main.e8718ea1.css","c4beef10021d6ed29fd0365fa7f82ddc"],["/static/js/main.3d4ed14b.js","de197a231f18217a37a61bf26eea9b25"],["/static/media/about-section.49d04d34.jpg","49d04d34e2904b9f20aa1e02b2c866d1"],["/static/media/brasil.7ce51bd4.png","7ce51bd4195df1db5e526cc12bd27265"],["/static/media/evento.38ae0444.jpg","38ae0444bbe7e9a180dbcffd255741ee"],["/static/media/facebook.1f375e98.svg","1f375e98f48115af0fa3ebffbd5e704d"],["/static/media/flickr.f650940d.svg","f650940d1fccc5ee2189e4547ca96930"],["/static/media/idcard.6d5f05f5.png","6d5f05f59463e5dd25699295098292e3"],["/static/media/invitacion.fa7c4216.svg","fa7c421608af8259fb580a314c25e711"],["/static/media/iodc10.dec82c7d.png","dec82c7de38104e10a74bc62bc0cf636"],["/static/media/iodc12.0a3f2d33.png","0a3f2d3305425e11591c37d60a7057f8"],["/static/media/logo-iodc.6e6ab057.svg","6e6ab057a0fe469086324d27dfffdcf8"],["/static/media/logomin.d08f4a31.png","d08f4a31097527ba0b71531bed77308b"],["/static/media/medium.50e16178.svg","50e161781082693ef46618647fb51c28"],["/static/media/obelisco.56234ff9.svg","56234ff91e7bf21b897c36ae008a00e4"],["/static/media/patio.70c242b0.jpg","70c242b06681b68631cba89cad06d4db"],["/static/media/preevent.453af644.png","453af6448df2a456b4a07e8d6a366960"],["/static/media/sideevent1.da784881.png","da784881e0650149371d4b3465bd3d12"],["/static/media/sideevent2.deecbd60.png","deecbd605ec1a31997ac5274a3c1ba2a"],["/static/media/sideevent3.3bba4ab1.png","3bba4ab1c95185b87d6a02d9dbd3488b"],["/static/media/sideevent4.feddcd48.png","feddcd48fe544e2fdbd4c4264f005bcb"],["/static/media/twitter.6534e8d4.svg","6534e8d439467f36d114a5c68806ff21"],["/static/media/uruguay.ff537795.png","ff537795b4f4a2a9be93be4503ddbf61"],["/static/media/visas.c21e3ad2.svg","c21e3ad26d4a4c90c0eb4e0eaa6d3043"],["/static/media/youtube.6db3b9c3.svg","6db3b9c39d2b50ba34f1d491af2cdc6f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});