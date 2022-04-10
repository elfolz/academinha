(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8f1253c"],{"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return k})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return A})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return j})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return U})),n.d(t,"l",(function(){return P})),n.d(t,"m",(function(){return L})),n.d(t,"n",(function(){return p})),n.d(t,"o",(function(){return g})),n.d(t,"p",(function(){return b})),n.d(t,"q",(function(){return E})),n.d(t,"r",(function(){return m})),n.d(t,"s",(function(){return y})),n.d(t,"t",(function(){return f})),n.d(t,"u",(function(){return h})),n.d(t,"v",(function(){return w})),n.d(t,"w",(function(){return H})),n.d(t,"x",(function(){return C})),n.d(t,"y",(function(){return M})),n.d(t,"z",(function(){return v}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o=function(e){const t=[];let n=0;for(let o=0;o<e.length;o++){let r=e.charCodeAt(o);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&o+1<e.length&&56320===(64512&e.charCodeAt(o+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++o)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r=function(e){const t=[];let n=0,o=0;while(n<e.length){const r=e[n++];if(r<128)t[o++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[o++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=e[n++],a=e[n++],s=e[n++],c=((7&r)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;t[o++]=String.fromCharCode(55296+(c>>10)),t[o++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],a=e[n++];t[o++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&a)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let r=0;r<e.length;r+=3){const t=e[r],i=r+1<e.length,a=i?e[r+1]:0,s=r+2<e.length,c=s?e[r+2]:0,u=t>>2,d=(3&t)<<4|a>>4;let l=(15&a)<<2|c>>6,p=63&c;s||(p=64,i||(l=64)),o.push(n[u],n[d],n[l],n[p])}return o.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):r(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],i=r<e.length,a=i?n[e.charAt(r)]:0;++r;const s=r<e.length,c=s?n[e.charAt(r)]:64;++r;const u=r<e.length,d=u?n[e.charAt(r)]:64;if(++r,null==t||null==a||null==c||null==d)throw Error();const l=t<<2|a>>4;if(o.push(l),64!==c){const e=a<<4&240|c>>2;if(o.push(e),64!==d){const e=c<<6&192|d;o.push(e)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){const t=o(e);return i.encodeByteArray(t,!0)},s=function(e){return a(e).replace(/\./g,"")},c=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&d(n)&&(e[n]=u(e[n],t[n]));return e}function d(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())}function h(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){const e=p();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function y(){return"object"===typeof indexedDB}function v(){return new Promise((e,t)=>{try{let n=!0;const o="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(o);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(o),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}function k(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="FirebaseError";class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=S,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},o=`${this.service}/${e}`,r=this.errors[e],i=r?I(r,n):"Error",a=`${this.serviceName}: ${i} (${o}).`,s=new _(o,a,n);return s}}function I(e,t){return e.replace(T,(e,n)=>{const o=t[n];return null!=o?String(o):`<${n}?>`})}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function E(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;const n=Object.keys(e),o=Object.keys(t);for(const r of n){if(!o.includes(r))return!1;const n=e[r],i=t[r];if(D(n)&&D(i)){if(!j(n,i))return!1}else if(n!==i)return!1}for(const r of o)if(!n.includes(r))return!1;return!0}function D(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){const t=[];for(const[n,o]of Object.entries(e))Array.isArray(o)?o.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(o));return t.length?"&"+t.join("&"):""}function M(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,o]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(o)}}),t}function P(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){const n=new N(e,t);return n.subscribe.bind(n)}class N{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let o;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");o=K(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===o.next&&(o.next=B),void 0===o.error&&(o.error=B),void 0===o.complete&&(o.complete=B);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch(e){}}),this.observers.push(o),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return new Promise((n,o)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;o(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}})}class ${constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new F(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new W(this._db.createObjectStore(e,t))}close(){this._db.close()}}class F{constructor(e){this._transaction=e,this.complete=new Promise((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}})}objectStore(e){return new W(this._transaction.objectStore(e))}}class W{constructor(e){this._store=e}index(e){return new V(this._store.index(e))}createIndex(e,t,n){return new V(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return R(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return R(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return R(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return R(e,"Error clearing IndexedDB object store")}}class V{constructor(e){this._index=e}get(e){const t=this._index.get(e);return R(t,"Error reading from IndexedDB")}}function H(e,t,n){return new Promise((o,r)=>{try{const i=indexedDB.open(e,t);i.onsuccess=e=>{o(new $(e.target.result))},i.onerror=e=>{var t;r("Error opening indexedDB: "+(null===(t=e.target.error)||void 0===t?void 0:t.message))},i.onupgradeneeded=e=>{n(new $(i.result),e.oldVersion,e.newVersion,new F(i.transaction))}}catch(i){r("Error opening indexedDB: "+i.message)}})}async function U(e){return new Promise((t,n)=>{try{const o=indexedDB.deleteDatabase(e);o.onsuccess=()=>{t()},o.onerror=t=>{var o;n(`Error deleting indexedDB database "${e}": ${null===(o=t.target.error)||void 0===o?void 0:o.message}`)}}catch(o){n(`Error deleting indexedDB database "${e}": ${o.message}`)}})}}).call(this,n("c8ba"))},"3e5a":function(e,t,n){"use strict";n("d7ef")},"9ab4":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));function o(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}Object.create;Object.create},d7ef:function(e,t,n){},dd7b:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[e.loading?[n("figure",[n("img",{attrs:{src:"/img/social/"+e.loading+"-color.svg",alt:"Rede social"}}),n("v-skeleton-loader",{attrs:{type:"list-item-avatar-three-line"}})],1)]:[e._m(0),n("footer",[e._v("Entre com uma de suas redes sociais")]),e._l(e.providers,(function(t,o){return n("v-btn",{key:o,class:t,attrs:{fab:""},on:{click:function(n){return e.requestLogin(t)}}},[n("img",{attrs:{src:"/img/social/"+t+".svg",alt:t}})])}))]],2)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",[n("img",{attrs:{src:"/img/icons/android-chrome-192x192.png",alt:"Academinha"}}),n("figcaption",[e._v("Academinha")])])}],i=(n("5319"),n("7ded")),a="firebase",s="9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i["a"].registerVersion(a,s,"app-compat");n("5994");var c=n("22e5"),u=(n("bd5a"),n("1fd5")),d=n("589b");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l="/firebase-messaging-sw.js",p="/firebase-cloud-messaging-push-scope",f="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",h="https://fcmregistrations.googleapis.com/v1",g="google.c.a.c_id",b="google.c.a.c_l",w="google.c.a.ts",m="google.c.a.e";var y,v;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function S(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),o=atob(n),r=new Uint8Array(o.length);for(let i=0;i<o.length;++i)r[i]=o.charCodeAt(i);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(y||(y={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(v||(v={}));const _="fcm_token_details_db",O=5,I="fcm_token_object_Store";async function T(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map(e=>e.name);if(!t.includes(_))return null}let t=null;const n=await Object(u["w"])(_,O,async(n,o,r,i)=>{var a;if(o<2)return;if(!n.objectStoreNames.contains(I))return;const s=i.objectStore(I),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===o){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(a=e.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:k(e.vapidKey)}}}else if(3===o){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:k(e.auth),p256dh:k(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:k(e.vapidKey)}}}else if(4===o){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:k(e.auth),p256dh:k(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:k(e.vapidKey)}}}});return n.close(),await Object(u["k"])(_),await Object(u["k"])("fcm_vapid_details_db"),await Object(u["k"])("undefined"),A(t)?t:null}function A(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="firebase-messaging-database",j=1,D="firebase-messaging-store";let C=null;function M(){return C||(C=Object(u["w"])(E,j,(e,t)=>{switch(t){case 0:e.createObjectStore(D)}})),C}async function P(e){const t=K(e),n=await M(),o=await n.transaction(D).objectStore(D).get(t);if(o)return o;{const t=await T(e.appConfig.senderId);if(t)return await x(e,t),t}}async function x(e,t){const n=K(e),o=await M(),r=o.transaction(D,"readwrite");return await r.objectStore(D).put(t,n),await r.complete,t}async function N(e){const t=K(e),n=await M(),o=n.transaction(D,"readwrite");await o.objectStore(D).delete(t),await o.complete}function K({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},L=new u["b"]("messaging","Messaging",B);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function R(e,t){const n=await V(e),o=H(t),r={method:"POST",headers:n,body:JSON.stringify(o)};let i;try{const t=await fetch(W(e.appConfig),r);i=await t.json()}catch(a){throw L.create("token-subscribe-failed",{errorInfo:a})}if(i.error){const e=i.error.message;throw L.create("token-subscribe-failed",{errorInfo:e})}if(!i.token)throw L.create("token-subscribe-no-token");return i.token}async function $(e,t){const n=await V(e),o=H(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(o)};let i;try{const n=await fetch(`${W(e.appConfig)}/${t.token}`,r);i=await n.json()}catch(a){throw L.create("token-update-failed",{errorInfo:a})}if(i.error){const e=i.error.message;throw L.create("token-update-failed",{errorInfo:e})}if(!i.token)throw L.create("token-update-no-token");return i.token}async function F(e,t){const n=await V(e),o={method:"DELETE",headers:n};try{const n=await fetch(`${W(e.appConfig)}/${t}`,o),r=await n.json();if(r.error){const e=r.error.message;throw L.create("token-unsubscribe-failed",{errorInfo:e})}}catch(r){throw L.create("token-unsubscribe-failed",{errorInfo:r})}}function W({projectId:e}){return`${h}/projects/${e}/registrations`}async function V({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":"FIS "+n})}function H({p256dh:e,auth:t,endpoint:n,vapidKey:o}){const r={web:{endpoint:n,auth:t,p256dh:e}};return o!==f&&(r.web.applicationPubKey=o),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=6048e5;async function z(e){const t=await Y(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:k(t.getKey("auth")),p256dh:k(t.getKey("p256dh"))},o=await P(e.firebaseDependencies);if(o){if(Q(o.subscriptionOptions,n))return Date.now()>=o.createTime+U?q(e,{token:o.token,createTime:Date.now(),subscriptionOptions:n}):o.token;try{await F(e.firebaseDependencies,o.token)}catch(r){console.warn(r)}return J(e.firebaseDependencies,n)}return J(e.firebaseDependencies,n)}async function G(e){const t=await P(e.firebaseDependencies);t&&(await F(e.firebaseDependencies,t.token),await N(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function q(e,t){try{const n=await $(e.firebaseDependencies,t),o=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await x(e.firebaseDependencies,o),n}catch(n){throw await G(e),n}}async function J(e,t){const n=await R(e,t),o={token:n,createTime:Date.now(),subscriptionOptions:t};return await x(e,o),o.token}async function Y(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:S(t)})}function Q(e,t){const n=t.vapidKey===e.vapidKey,o=t.endpoint===e.endpoint,r=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&o&&r&&i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Z(t,e),ee(t,e),te(t,e),t}function Z(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const o=t.notification.body;o&&(e.notification.body=o);const r=t.notification.image;r&&(e.notification.image=r)}function ee(e,t){t.data&&(e.data=t.data)}function te(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const o=t.fcmOptions.analytics_label;o&&(e.fcmOptions.analyticsLabel=o)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){return"object"===typeof e&&!!e&&g in e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){const n=[];for(let o=0;o<e.length;o++)n.push(e.charAt(o)),o<t.length&&n.push(t.charAt(o));return n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){if(!e||!e.options)throw ie("App Configuration Object");if(!e.name)throw ie("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const o of t)if(!n[o])throw ie(o);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ie(e){return L.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oe("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),oe("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class ae{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=re(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e){try{e.swRegistration=await navigator.serviceWorker.register(l,{scope:p}),e.swRegistration.update().catch(()=>{})}catch(t){throw L.create("failed-service-worker-registration",{browserErrorMessage:t.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){if(t||e.swRegistration||await se(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw L.create("invalid-sw-registration");e.swRegistration=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(e,t){if(!navigator)throw L.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw L.create("permission-blocked");return await ue(e,null===t||void 0===t?void 0:t.vapidKey),await ce(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),z(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(e,t,n){const o=pe(t),r=await e.firebaseDependencies.analyticsProvider.get();r.logEvent(o,{message_id:n[g],message_name:n[b],message_time:n[w],message_device_time:Math.floor(Date.now()/1e3)})}function pe(e){switch(e){case v.NOTIFICATION_CLICKED:return"notification_open";case v.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===v.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(X(n)):e.onMessageHandler.next(X(n)));const o=n.data;ne(o)&&"1"===o[m]&&await le(e,n.messageType,o)}const he="@firebase/messaging",ge="0.9.11",be=e=>{const t=new ae(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>fe(t,e)),t},we=e=>{const t=e.getProvider("messaging").getImmediate(),n={getToken:e=>de(t,e)};return n};function me(){Object(d["_registerComponent"])(new c["a"]("messaging",be,"PUBLIC")),Object(d["_registerComponent"])(new c["a"]("messaging-internal",we,"PRIVATE")),Object(d["registerVersion"])(he,ge),Object(d["registerVersion"])(he,ge,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ye(e){if(!navigator)throw L.create("only-available-in-window");return e.swRegistration||await se(e),G(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e,t){if(!navigator)throw L.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(e,t){return e=Object(u["m"])(e),de(e,t)}function Se(e){return e=Object(u["m"])(e),ye(e)}function _e(e,t){return e=Object(u["m"])(e),ve(e,t)}me();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oe="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ie="https://fcmregistrations.googleapis.com/v1",Te="FCM_MSG",Ae="google.c.a.c_id",Ee=3,je=1;var De,Ce;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Pe(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),o=atob(n),r=new Uint8Array(o.length);for(let i=0;i<o.length;++i)r[i]=o.charCodeAt(i);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(De||(De={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(Ce||(Ce={}));const xe="fcm_token_details_db",Ne=5,Ke="fcm_token_object_Store";async function Be(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map(e=>e.name);if(!t.includes(xe))return null}let t=null;const n=await Object(u["w"])(xe,Ne,async(n,o,r,i)=>{var a;if(o<2)return;if(!n.objectStoreNames.contains(Ke))return;const s=i.objectStore(Ke),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===o){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(a=e.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:Me(e.vapidKey)}}}else if(3===o){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Me(e.auth),p256dh:Me(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Me(e.vapidKey)}}}else if(4===o){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Me(e.auth),p256dh:Me(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Me(e.vapidKey)}}}});return n.close(),await Object(u["k"])(xe),await Object(u["k"])("fcm_vapid_details_db"),await Object(u["k"])("undefined"),Le(t)?t:null}function Le(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="firebase-messaging-database",$e=1,Fe="firebase-messaging-store";let We=null;function Ve(){return We||(We=Object(u["w"])(Re,$e,(e,t)=>{switch(t){case 0:e.createObjectStore(Fe)}})),We}async function He(e){const t=Ge(e),n=await Ve(),o=await n.transaction(Fe).objectStore(Fe).get(t);if(o)return o;{const t=await Be(e.appConfig.senderId);if(t)return await Ue(e,t),t}}async function Ue(e,t){const n=Ge(e),o=await Ve(),r=o.transaction(Fe,"readwrite");return await r.objectStore(Fe).put(t,n),await r.complete,t}async function ze(e){const t=Ge(e),n=await Ve(),o=n.transaction(Fe,"readwrite");await o.objectStore(Fe).delete(t),await o.complete}function Ge({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Je=new u["b"]("messaging","Messaging",qe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ye(e,t){const n=await et(e),o=tt(t),r={method:"POST",headers:n,body:JSON.stringify(o)};let i;try{const t=await fetch(Ze(e.appConfig),r);i=await t.json()}catch(a){throw Je.create("token-subscribe-failed",{errorInfo:a})}if(i.error){const e=i.error.message;throw Je.create("token-subscribe-failed",{errorInfo:e})}if(!i.token)throw Je.create("token-subscribe-no-token");return i.token}async function Qe(e,t){const n=await et(e),o=tt(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(o)};let i;try{const n=await fetch(`${Ze(e.appConfig)}/${t.token}`,r);i=await n.json()}catch(a){throw Je.create("token-update-failed",{errorInfo:a})}if(i.error){const e=i.error.message;throw Je.create("token-update-failed",{errorInfo:e})}if(!i.token)throw Je.create("token-update-no-token");return i.token}async function Xe(e,t){const n=await et(e),o={method:"DELETE",headers:n};try{const n=await fetch(`${Ze(e.appConfig)}/${t}`,o),r=await n.json();if(r.error){const e=r.error.message;throw Je.create("token-unsubscribe-failed",{errorInfo:e})}}catch(r){throw Je.create("token-unsubscribe-failed",{errorInfo:r})}}function Ze({projectId:e}){return`${Ie}/projects/${e}/registrations`}async function et({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":"FIS "+n})}function tt({p256dh:e,auth:t,endpoint:n,vapidKey:o}){const r={web:{endpoint:n,auth:t,p256dh:e}};return o!==Oe&&(r.web.applicationPubKey=o),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=6048e5;async function ot(e){const t=await st(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Me(t.getKey("auth")),p256dh:Me(t.getKey("p256dh"))},o=await He(e.firebaseDependencies);if(o){if(ct(o.subscriptionOptions,n))return Date.now()>=o.createTime+nt?it(e,{token:o.token,createTime:Date.now(),subscriptionOptions:n}):o.token;try{await Xe(e.firebaseDependencies,o.token)}catch(r){console.warn(r)}return at(e.firebaseDependencies,n)}return at(e.firebaseDependencies,n)}async function rt(e){const t=await He(e.firebaseDependencies);t&&(await Xe(e.firebaseDependencies,t.token),await ze(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function it(e,t){try{const n=await Qe(e.firebaseDependencies,t),o=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Ue(e.firebaseDependencies,o),n}catch(n){throw await rt(e),n}}async function at(e,t){const n=await Ye(e,t),o={token:n,createTime:Date.now(),subscriptionOptions:t};return await Ue(e,o),o.token}async function st(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Pe(t)})}function ct(e,t){const n=t.vapidKey===e.vapidKey,o=t.endpoint===e.endpoint,r=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&o&&r&&i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return dt(t,e),lt(t,e),pt(t,e),t}function dt(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const o=t.notification.body;o&&(e.notification.body=o);const r=t.notification.image;r&&(e.notification.image=r)}function lt(e,t){t.data&&(e.data=t.data)}function pt(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const o=t.fcmOptions.analytics_label;o&&(e.fcmOptions.analyticsLabel=o)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){return"object"===typeof e&&!!e&&Ae in e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(e,t){const n=bt(t,await e.firebaseDependencies.installations.getId());wt(e,n)}function bt(e,t){var n,o;const r={};return e.from&&(r.project_number=e.from),e.fcmMessageId&&(r.message_id=e.fcmMessageId),r.instance_id=t,e.notification?r.message_type=De.DISPLAY_NOTIFICATION.toString():r.message_type=De.DATA_MESSAGE.toString(),r.sdk_platform=Ee.toString(),r.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(r.collapse_key=e.collapse_key),r.event=je.toString(),(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)&&(r.analytics_label=null===(o=e.fcmOptions)||void 0===o?void 0:o.analytics_label),r}function wt(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}function mt(e,t){const n=[];for(let o=0;o<e.length;o++)n.push(e.charAt(o)),o<t.length&&n.push(t.charAt(o));return n.join("")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(e,t){var n,o;const{newSubscription:r}=e;if(!r)return void await rt(t);const i=await He(t.firebaseDependencies);await rt(t),t.vapidKey=null!==(o=null===(n=null===i||void 0===i?void 0:i.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==o?o:Oe,await ot(t)}async function vt(e,t){const n=_t(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await gt(t,n);const o=await At();if(It(o))return Tt(o,n);if(n.notification&&await Et(St(n)),t&&t.onBackgroundMessageHandler){const e=ut(n);"function"===typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function kt(e){var t,n;const o=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[Te];if(!o)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const r=jt(o);if(!r)return;const i=new URL(r,self.location.href),a=new URL(self.location.origin);if(i.host!==a.host)return;let s=await Ot(i);return s?s=await s.focus():(s=await self.clients.openWindow(r),await ht(3e3)),s?(o.messageType=Ce.NOTIFICATION_CLICKED,o.isFirebaseMessaging=!0,s.postMessage(o)):void 0}function St(e){const t=Object.assign({},e.notification);return t.data={[Te]:e},t}function _t({data:e}){if(!e)return null;try{return e.json()}catch(t){return null}}async function Ot(e){const t=await At();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}function It(e){return e.some(e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://"))}function Tt(e,t){t.isFirebaseMessaging=!0,t.messageType=Ce.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function At(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Et(e){var t;const{actions:n}=e,{maxActions:o}=Notification;return n&&o&&n.length>o&&console.warn(`This browser only supports ${o} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}function jt(e){var t,n,o;const r=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(o=e.notification)||void 0===o?void 0:o.click_action;return r||(ft(e.data)?self.location.origin:null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e){if(!e||!e.options)throw Ct("App Configuration Object");if(!e.name)throw Ct("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const o of t)if(!n[o])throw Ct(o);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ct(e){return Je.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),mt("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Mt{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Dt(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=e=>{const t=new Mt(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",e=>{e.waitUntil(vt(e,t))}),self.addEventListener("pushsubscriptionchange",e=>{e.waitUntil(yt(e,t))}),self.addEventListener("notificationclick",e=>{e.waitUntil(kt(e))}),t};function xt(){Object(d["_registerComponent"])(new c["a"]("messaging-sw",Pt,"PUBLIC"))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e,t){if(void 0!==self.document)throw Je.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){return e=Object(u["m"])(e),Nt(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xt();const Bt="@firebase/messaging-compat",Lt="0.1.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rt(){return self&&"ServiceWorkerGlobalScope"in self?Ft():$t()}function $t(){return"undefined"!==typeof window&&Object(u["s"])()&&Object(u["d"])()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function Ft(){return Object(u["s"])()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}class Wt{constructor(e,t){this.app=e,this._delegate=t,this.app=e,this._delegate=t}async getToken(e){return ke(this._delegate,e)}async deleteToken(){return Se(this._delegate)}onMessage(e){return _e(this._delegate,e)}onBackgroundMessage(e){return Kt(this._delegate,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=e=>self&&"ServiceWorkerGlobalScope"in self?new Wt(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new Wt(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),Ht={isSupported:Rt};function Ut(){i["a"].INTERNAL.registerComponent(new c["a"]("messaging-compat",Vt,"PUBLIC").setServiceProps(Ht))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(),i["a"].registerVersion(Bt,Lt);var zt=i["a"].initializeApp({apiKey:"AIzaSyAqMD2es1n6hjUbUuEuHLFaWzDPddAFq5c",authDomain:"academinha-beb1f.firebaseapp.com",databaseURL:"https://academinha-beb1f-default-rtdb.firebaseio.com",projectId:"academinha-beb1f",storageBucket:"academinha-beb1f.appspot.com",messagingSenderId:"543263128562",appId:"1:543263128562:web:ecd9f57c8a49a2a59e496b"}),Gt=n("6a7c"),qt={data(){return{loading:null,providers:["google","facebook","microsoft","twitter"]}},mounted(){this.$route.params.provider&&this.executeLogin()},methods:{requestLogin(e){switch(this.$router.push({params:{provider:e}}),e){case"google":e=new Gt["b"];break;case"facebook":e=new Gt["a"];break;case"twitter":e=new Gt["d"];break;case"microsoft":e=new Gt["c"]("microsoft.com");break}zt.auth().signInWithRedirect(e)},executeLogin(){this.loading=this.$route.params.provider,zt.auth().setPersistence("none").finally(()=>zt.auth().getRedirectResult().then(e=>{if(!e.credential)return this.$router.push("/login"),this.$store.dispatch("openAlert",{text:"Erro ao fazer o login. Tente novamente",color:"error"});let t={name:e.user.providerData[0].displayName,socialId:e.user.providerData[0].uid,provider:e.credential.providerId.replace(".com",""),email:e.user.providerData[0].email};return this.axios.post("/auth/login",t).then(e=>{this.$auth.authenticate(e.data)})}).catch(e=>{console.log(e),this.$store.dispatch("openAlert",{text:"Erro ao fazer o login. Tente novamente",color:"error"})})).finally(()=>{this.loading=null})}}},Jt=qt,Yt=(n("3e5a"),n("2877")),Qt=n("6544"),Xt=n.n(Qt),Zt=n("8336"),en=n("3129"),tn=Object(Yt["a"])(Jt,o,r,!1,null,"8e1e70b4",null);t["default"]=tn.exports;Xt()(tn,{VBtn:Zt["a"],VSkeletonLoader:en["a"]})}}]);