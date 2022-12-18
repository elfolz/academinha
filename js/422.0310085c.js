"use strict";(globalThis["webpackChunkAcademinha"]=globalThis["webpackChunkAcademinha"]||[]).push([[422],{7790:(e,t,r)=>{r.d(t,{BH:()=>u,L:()=>a,LL:()=>O,Lj:()=>Z,UG:()=>p,X3:()=>F,ZB:()=>h,ZR:()=>A,b$:()=>v,eu:()=>_,hl:()=>y,jU:()=>b,m9:()=>P,ne:()=>k,pd:()=>$,r3:()=>C,ru:()=>g,tV:()=>c,uI:()=>f,vZ:()=>j,w1:()=>m,xO:()=>T,xb:()=>x,z$:()=>d,zI:()=>E,zd:()=>I});r(1703),r(2801);
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
const o=function(e){const t=[];let r=0;for(let o=0;o<e.length;o++){let n=e.charCodeAt(o);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=63&n|128):55296===(64512&n)&&o+1<e.length&&56320===(64512&e.charCodeAt(o+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++o)),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=63&n|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=63&n|128)}return t},n=function(e){const t=[];let r=0,o=0;while(r<e.length){const n=e[r++];if(n<128)t[o++]=String.fromCharCode(n);else if(n>191&&n<224){const s=e[r++];t[o++]=String.fromCharCode((31&n)<<6|63&s)}else if(n>239&&n<365){const s=e[r++],i=e[r++],a=e[r++],c=((7&n)<<18|(63&s)<<12|(63&i)<<6|63&a)-65536;t[o++]=String.fromCharCode(55296+(c>>10)),t[o++]=String.fromCharCode(56320+(1023&c))}else{const s=e[r++],i=e[r++];t[o++]=String.fromCharCode((15&n)<<12|(63&s)<<6|63&i)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let n=0;n<e.length;n+=3){const t=e[n],s=n+1<e.length,i=s?e[n+1]:0,a=n+2<e.length,c=a?e[n+2]:0,h=t>>2,l=(3&t)<<4|i>>4;let u=(15&i)<<2|c>>6,d=63&c;a||(d=64,s||(u=64)),o.push(r[h],r[l],r[u],r[d])}return o.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):n(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let n=0;n<e.length;){const t=r[e.charAt(n++)],s=n<e.length,i=s?r[e.charAt(n)]:0;++n;const a=n<e.length,c=a?r[e.charAt(n)]:64;++n;const h=n<e.length,l=h?r[e.charAt(n)]:64;if(++n,null==t||null==i||null==c||null==l)throw Error();const u=t<<2|i>>4;if(o.push(u),64!==c){const e=i<<4&240|c>>2;if(o.push(e),64!==l){const e=c<<6&192|l;o.push(e)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){const t=o(e);return s.encodeByteArray(t,!0)},a=function(e){return i(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
 */function h(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const r=t;return new Date(r.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const r in t)t.hasOwnProperty(r)&&l(r)&&(e[r]=h(e[r],t[r]));return e}function l(e){return"__proto__"!==e}
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
 */class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}
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
function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function p(){try{return"[object process]"===Object.prototype.toString.call(r.g.process)}catch(e){return!1}}function b(){return"object"===typeof self&&self.self===self}function g(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){const e=d();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function y(){return"object"===typeof indexedDB}function _(){return new Promise(((e,t)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(o);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(o),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(r){t(r)}}))}function E(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
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
const S="FirebaseError";class A extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=S,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,n=this.errors[e],s=n?w(n,r):"Error",i=`${this.serviceName}: ${s} (${o}).`,a=new A(o,i,r);return a}}function w(e,t){return e.replace(D,((e,r)=>{const o=t[r];return null!=o?String(o):`<${r}?>`}))}const D=/\{\$([^}]+)}/g;
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
function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function x(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;const r=Object.keys(e),o=Object.keys(t);for(const n of r){if(!o.includes(n))return!1;const r=e[n],s=t[n];if(B(r)&&B(s)){if(!j(r,s))return!1}else if(r!==s)return!1}for(const n of o)if(!r.includes(n))return!1;return!0}function B(e){return null!==e&&"object"===typeof e}
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
 */function T(e){const t=[];for(const[r,o]of Object.entries(e))Array.isArray(o)?o.forEach((e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(r)+"="+encodeURIComponent(o));return t.length?"&"+t.join("&"):""}function I(e){const t={},r=e.replace(/^\?/,"").split("&");return r.forEach((e=>{if(e){const[r,o]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(o)}})),t}function $(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
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
 */function k(e,t){const r=new L(e,t);return r.subscribe.bind(r)}class L{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,r){let o;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");o=M(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===o.next&&(o.next=N),void 0===o.error&&(o.error=N),void 0===o.complete&&(o.complete=N);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch(e){}})),this.observers.push(o),n}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function M(e,t){if("object"!==typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"===typeof e[r])return!0;return!1}function N(){}
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
function P(e){return e&&e._delegate?e._delegate:e}
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
 */function V(e,t){return new Promise(((r,o)=>{e.onsuccess=e=>{r(e.target.result)},e.onerror=e=>{var r;o(`${t}: ${null===(r=e.target.error)||void 0===r?void 0:r.message}`)}}))}class R{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new W(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new z(this._db.createObjectStore(e,t))}close(){this._db.close()}}class W{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new z(this._transaction.objectStore(e))}}class z{constructor(e){this._store=e}index(e){return new U(this._store.index(e))}createIndex(e,t,r){return new U(this._store.createIndex(e,t,r))}get(e){const t=this._store.get(e);return V(t,"Error reading from IndexedDB")}put(e,t){const r=this._store.put(e,t);return V(r,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return V(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return V(e,"Error clearing IndexedDB object store")}}class U{constructor(e){this._index=e}get(e){const t=this._index.get(e);return V(t,"Error reading from IndexedDB")}}function F(e,t,r){return new Promise(((o,n)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{o(new R(e.target.result))},s.onerror=e=>{var t;n(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{r(new R(s.result),e.oldVersion,e.newVersion,new W(s.transaction))}}catch(s){n(`Error opening indexedDB: ${s.message}`)}}))}async function Z(e){return new Promise(((t,r)=>{try{const o=indexedDB.deleteDatabase(e);o.onsuccess=()=>{t()},o.onerror=t=>{var o;r(`Error deleting indexedDB database "${e}": ${null===(o=t.target.error)||void 0===o?void 0:o.message}`)}}catch(o){r(`Error deleting indexedDB database "${e}": ${o.message}`)}}))}},4270:(e,t,r)=>{r.d(t,{_T:()=>o});r(1703);function o(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}Object.create;Object.create},9900:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[e.loading?[r("figure",[r("img",{attrs:{src:"/img/social/"+e.loading+"-color.svg",alt:"Rede social"}}),r("v-skeleton-loader",{attrs:{type:"list-item-avatar-three-line"}})],1)]:[e._m(0),r("footer",[e._v("Entre com uma de suas redes sociais")]),e._l(e.providers,(function(t,o){return r("v-btn",{key:o,class:t,attrs:{fab:""},on:{click:function(r){return e.requestLogin(t)}}},[r("img",{attrs:{src:"/img/social/"+t+".svg",alt:t}})])}))]],2)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",[r("img",{attrs:{src:"/img/icons/android-chrome-192x192.png",alt:"Academinha"}}),r("figcaption",[e._v("Academinha")])])}],s=r(5546);r(2833),r(7277);const i=s.Z.initializeApp({databaseURL:"https://academinha-beb1f-default-rtdb.firebaseio.com",apiKey:"AIzaSyAqMD2es1n6hjUbUuEuHLFaWzDPddAFq5c",authDomain:"academinha-beb1f.firebaseapp.com",projectId:"academinha-beb1f",storageBucket:"academinha-beb1f.appspot.com",messagingSenderId:"543263128562",appId:"1:543263128562:web:ecd9f57c8a49a2a59e496b",measurementId:"G-3LYC0SMM8J"});var a=r(5843);const c={data(){return{loading:null,providers:["google","facebook","microsoft","twitter"]}},mounted(){this.$route.params.provider&&this.executeLogin()},methods:{requestLogin(e){this.loading=e,this.$router.push({params:{provider:e}}),"facebook"==e?e=new a._O:"google"==e?e=new a.hJ:"twitter"==e?e=new a.c4:"microsoft"==e&&(e=new a.O4("microsoft.com")),i.auth().signInWithPopup(e).then((e=>{e.credential&&this.saveLoginData(e)})).catch((t=>{i.auth().signInWithRedirect(e).catch((e=>{this.$store.dispatch("openAlert",{text:"Falha ao fazer o login. Tente novamente",color:"error"})}))})).finally((()=>{this.loading=null}))},executeLogin(){this.loading=this.$route.params.provider,i.auth().setPersistence("none").finally((()=>i.auth().getRedirectResult().then((e=>{if(!e.credential)return this.$router.push("/login"),this.$store.dispatch("openAlert",{text:"Falha ao fazer o login. Tente novamente",color:"error"});this.saveLoginData(e)})).catch((e=>{this.$store.dispatch("openAlert",{text:"Falha ao fazer o login. Tente novamente",color:"error"})}))))},saveLoginData(e){let t={name:e.user.providerData[0].displayName,socialId:e.user.providerData[0].uid,provider:e.credential.providerId.replace(".com",""),email:e.user.providerData[0].email};this.axios.post("/auth/login",t).then((e=>{this.$auth.authenticate(e.data)})).catch((e=>{this.$store.dispatch("openAlert",{text:"Falha ao fazer o login. Tente novamente",color:"error"})})).finally((()=>{this.loading=null}))}}},h=c;var l=r(1001),u=r(3453),d=r.n(u),f=r(7080),p=r(9559),b=(0,l.Z)(h,o,n,!1,null,"bec55dec",null);const g=b.exports;d()(b,{VBtn:f.Z,VSkeletonLoader:p.Z})}}]);