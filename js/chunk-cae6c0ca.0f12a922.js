(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cae6c0ca"],{"1f5a":function(e,t,n){"use strict";n.d(t,"w",(function(){return R})),n.d(t,"E",(function(){return A}));var i=n("3d11");n.d(t,"a",(function(){return i["b"]})),n.d(t,"b",(function(){return i["d"]})),n.d(t,"c",(function(){return i["g"]})),n.d(t,"d",(function(){return i["h"]})),n.d(t,"e",(function(){return i["k"]})),n.d(t,"f",(function(){return i["i"]})),n.d(t,"g",(function(){return i["e"]})),n.d(t,"h",(function(){return i["m"]})),n.d(t,"i",(function(){return i["j"]})),n.d(t,"j",(function(){return i["qb"]})),n.d(t,"k",(function(){return i["rb"]})),n.d(t,"l",(function(){return i["l"]})),n.d(t,"m",(function(){return i["J"]})),n.d(t,"n",(function(){return i["n"]})),n.d(t,"o",(function(){return i["o"]})),n.d(t,"p",(function(){return i["bb"]})),n.d(t,"q",(function(){return i["H"]})),n.d(t,"r",(function(){return i["X"]})),n.d(t,"s",(function(){return i["I"]})),n.d(t,"t",(function(){return i["cb"]})),n.d(t,"u",(function(){return i["F"]})),n.d(t,"v",(function(){return i["db"]})),n.d(t,"x",(function(){return i["w"]})),n.d(t,"y",(function(){return i["fb"]})),n.d(t,"z",(function(){return i["ob"]})),n.d(t,"A",(function(){return i["u"]})),n.d(t,"B",(function(){return i["x"]})),n.d(t,"C",(function(){return i["v"]})),n.d(t,"D",(function(){return i["c"]})),n.d(t,"F",(function(){return i["z"]})),n.d(t,"G",(function(){return i["vb"]})),n.d(t,"H",(function(){return i["E"]})),n.d(t,"I",(function(){return i["Q"]})),n.d(t,"J",(function(){return i["R"]})),n.d(t,"K",(function(){return i["nb"]})),n.d(t,"L",(function(){return i["f"]})),n.d(t,"M",(function(){return i["mb"]})),n.d(t,"N",(function(){return i["C"]})),n.d(t,"O",(function(){return i["r"]})),n.d(t,"P",(function(){return i["pb"]})),n.d(t,"Q",(function(){return i["hb"]})),n.d(t,"R",(function(){return i["kb"]})),n.d(t,"S",(function(){return i["S"]})),n.d(t,"T",(function(){return i["s"]})),n.d(t,"U",(function(){return i["sb"]})),n.d(t,"V",(function(){return i["ib"]})),n.d(t,"W",(function(){return i["lb"]})),n.d(t,"X",(function(){return i["K"]})),n.d(t,"Y",(function(){return i["a"]})),n.d(t,"Z",(function(){return i["B"]})),n.d(t,"ab",(function(){return i["p"]})),n.d(t,"bb",(function(){return i["q"]})),n.d(t,"cb",(function(){return i["t"]})),n.d(t,"db",(function(){return i["A"]})),n.d(t,"eb",(function(){return i["D"]})),n.d(t,"fb",(function(){return i["tb"]})),n.d(t,"gb",(function(){return i["gb"]})),n.d(t,"hb",(function(){return i["jb"]})),n.d(t,"ib",(function(){return i["P"]})),n.d(t,"jb",(function(){return i["N"]})),n.d(t,"kb",(function(){return i["O"]})),n.d(t,"lb",(function(){return i["ub"]})),n.d(t,"mb",(function(){return i["M"]})),n.d(t,"nb",(function(){return i["L"]})),n.d(t,"ob",(function(){return i["y"]}));var r=n("1fd5");n("589b"),n("e691"),n("22e5");
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
function a(){return window}
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
 */const o=2e3;async function s(e,t,n){var r;const{BuildInfo:o}=a();Object(i["U"])(t.sessionId,"AuthEvent did not contain a session ID");const s=await h(t.sessionId),c={};return Object(i["V"])()?c["ibi"]=o.packageName:Object(i["W"])()?c["apn"]=o.packageName:Object(i["X"])(e,"operation-not-supported-in-this-environment"),o.displayName&&(c["appDisplayName"]=o.displayName),c["sessionId"]=s,Object(i["Y"])(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,c)}async function c(e){const{BuildInfo:t}=a(),n={};Object(i["V"])()?n.iosBundleId=t.packageName:Object(i["W"])()?n.androidPackageName=t.packageName:Object(i["X"])(e,"operation-not-supported-in-this-environment"),await Object(i["Z"])(e,n)}function u(e){const{cordova:t}=a();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let a=null;r?t.plugins.browsertab.openUrl(e):a=t.InAppBrowser.open(e,Object(i["T"])()?"_blank":"_system","location=yes"),n(a)})})}async function l(e,t,n){const{cordova:r}=a();let s=()=>{};try{await new Promise((a,c)=>{let u=null;function l(){var e;a();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function d(){u||(u=window.setTimeout(()=>{c(Object(i["ab"])(e,"redirect-cancelled-by-user"))},o))}function h(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&d()}t.addPassiveListener(l),document.addEventListener("resume",d,!1),Object(i["W"])()&&document.addEventListener("visibilitychange",h,!1),s=()=>{t.removePassiveListener(l),document.removeEventListener("resume",d,!1),document.removeEventListener("visibilitychange",h,!1),u&&window.clearTimeout(u)}})}finally{s()}}function d(e){var t,n,r,o,s,c,u,l,d,h;const p=a();Object(i["bb"])("function"===typeof(null===(t=null===p||void 0===p?void 0:p.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Object(i["bb"])("undefined"!==typeof(null===(n=null===p||void 0===p?void 0:p.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Object(i["bb"])("function"===typeof(null===(s=null===(o=null===(r=null===p||void 0===p?void 0:p.cordova)||void 0===r?void 0:r.plugins)||void 0===o?void 0:o.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Object(i["bb"])("function"===typeof(null===(l=null===(u=null===(c=null===p||void 0===p?void 0:p.cordova)||void 0===c?void 0:c.plugins)||void 0===u?void 0:u.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Object(i["bb"])("function"===typeof(null===(h=null===(d=null===p||void 0===p?void 0:p.cordova)||void 0===d?void 0:d.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function h(e){const t=p(e),n=await crypto.subtle.digest("SHA-256",t),i=Array.from(new Uint8Array(n));return i.map(e=>e.toString(16).padStart(2,"0")).join("")}function p(e){if(Object(i["U"])(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}
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
 */const f=20;class g extends i["eb"]{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function m(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:w(),postBody:null,tenantId:e.tenantId,error:Object(i["ab"])(e,"no-auth-event")}}function b(e,t){return I()._set(y(e),t)}async function v(e){const t=await I()._get(y(e));return t&&await I()._remove(y(e)),t}function _(e,t){var n,r;const a=O(t);if(a.includes("/__/auth/callback")){const t=C(a),o=t["firebaseError"]?E(decodeURIComponent(t["firebaseError"])):null,s=null===(r=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],c=s?Object(i["ab"])(s):null;return c?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:a,postBody:null}}return null}function w(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<f;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function I(){return Object(i["cb"])(i["fb"])}function y(e){return Object(i["db"])("authEvent",e.config.apiKey,e.name)}function E(e){try{return JSON.parse(e)}catch(t){return null}}function O(e){const t=C(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,i=C(n)["link"],r=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,a=C(r)["link"];return a||r||i||n||e}function C(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r["y"])(n.join("?"))}
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
 */const S=500;class P{constructor(){this._redirectPersistence=i["u"],this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=i["F"]}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new g(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Object(i["X"])(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){d(e);const a=await this._initialize(e);await a.initialized(),a.resetRedirect(),Object(i["G"])(),await this._originValidation(e);const o=m(e,n,r);await b(e,o);const c=await s(e,o,t),h=await u(c);return l(e,a,h)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=c(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=a(),o=setTimeout(async()=>{await v(e),t.onEvent(N())},S),s=async n=>{clearTimeout(o);const i=await v(e);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=_(i,n["url"])),t.onEvent(r||N())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,s);const c=i,u=r.packageName.toLowerCase()+"://";a().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&s({url:e}),"function"===typeof c)try{c(e)}catch(t){console.error(t)}}}}const A=P;function N(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Object(i["ab"])("no-auth-event")}}
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
 */function R(e,t){Object(i["H"])(e)._logFramework(t)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}));var i=n("1fd5");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const a="[DEFAULT]";
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:a})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,a]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(e){return e===a?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return Y})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return M})),n.d(t,"_addComponent",(function(){return V})),n.d(t,"_addOrOverwriteComponent",(function(){return z})),n.d(t,"_apps",(function(){return U})),n.d(t,"_clearComponents",(function(){return x})),n.d(t,"_components",(function(){return H})),n.d(t,"_getProvider",(function(){return W})),n.d(t,"_registerComponent",(function(){return $})),n.d(t,"_removeServiceInstance",(function(){return B})),n.d(t,"deleteApp",(function(){return Q})),n.d(t,"getApp",(function(){return X})),n.d(t,"getApps",(function(){return Z})),n.d(t,"initializeApp",(function(){return J})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var i=n("22e5"),r=n("e691"),a=n("1fd5");n.d(t,"FirebaseError",(function(){return a["c"]}));
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
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(s(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function s(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.20",l=new r["b"]("@firebase/app"),d="@firebase/app-compat",h="@firebase/analytics-compat",p="@firebase/analytics",f="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",b="@firebase/auth-compat",v="@firebase/database",_="@firebase/database-compat",w="@firebase/functions",I="@firebase/functions-compat",y="@firebase/installations",E="@firebase/installations-compat",O="@firebase/messaging",C="@firebase/messaging-compat",S="@firebase/performance",P="@firebase/performance-compat",A="@firebase/remote-config",N="@firebase/remote-config-compat",R="@firebase/storage",k="@firebase/storage-compat",L="@firebase/firestore",j="@firebase/firestore-compat",D="firebase",T="9.6.10",M="[DEFAULT]",F={[c]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[h]:"fire-analytics-compat",[g]:"fire-app-check",[f]:"fire-app-check-compat",[m]:"fire-auth",[b]:"fire-auth-compat",[v]:"fire-rtdb",[_]:"fire-rtdb-compat",[w]:"fire-fn",[I]:"fire-fn-compat",[y]:"fire-iid",[E]:"fire-iid-compat",[O]:"fire-fcm",[C]:"fire-fcm-compat",[S]:"fire-perf",[P]:"fire-perf-compat",[A]:"fire-rc",[N]:"fire-rc-compat",[R]:"fire-gcs",[k]:"fire-gcs-compat",[L]:"fire-fst",[j]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},U=new Map,H=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function z(e,t){e.container.addOrOverwriteComponent(t)}function $(e){const t=e.name;if(H.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;H.set(t,e);for(const n of U.values())V(n,e);return!0}function W(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function B(e,t,n=M){W(e,t).clearInstance(n)}function x(){H.clear()}
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
 */const q={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},G=new a["b"]("app","Firebase",q);
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
class K{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
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
 */const Y=T;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw G.create("bad-app-name",{appName:String(r)});const o=U.get(r);if(o){if(Object(a["i"])(e,o.options)&&Object(a["i"])(n,o.config))return o;throw G.create("duplicate-app",{appName:r})}const s=new i["b"](r);for(const i of H.values())s.addComponent(i);const c=new K(e,n,s);return U.set(r,c),c}function X(e=M){const t=U.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function Z(){return Array.from(U.values())}async function Q(e){const t=e.name;U.has(t)&&(U.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var r;let a=null!==(r=F[e])&&void 0!==r?r:e;n&&(a+="-"+n);const o=a.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${a}" with version "${t}":`];return o&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}$(new i["a"](a+"-version",()=>({library:a,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw G.create("invalid-log-argument");Object(r["d"])(e,t)}function ne(e){Object(r["c"])(e)}
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
 */const ie="firebase-heartbeat-database",re=1,ae="firebase-heartbeat-store";let oe=null;function se(){return oe||(oe=Object(a["w"])(ie,re,(e,t)=>{switch(t){case 0:e.createObjectStore(ae)}}).catch(e=>{throw G.create("storage-open",{originalErrorMessage:e.message})})),oe}async function ce(e){try{const t=await se();return t.transaction(ae).objectStore(ae).get(le(e))}catch(t){throw G.create("storage-get",{originalErrorMessage:t.message})}}async function ue(e,t){try{const n=await se(),i=n.transaction(ae,"readwrite"),r=i.objectStore(ae);return await r.put(t,le(e)),i.complete}catch(n){throw G.create("storage-set",{originalErrorMessage:n.message})}}function le(e){return`${e.name}!${e.options.appId}`}
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
 */const de=1024,he=2592e6;class pe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new me(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=he}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=fe(),{heartbeatsToSend:t,unsentEntries:n}=ge(this._heartbeatsCache.heartbeats),i=Object(a["f"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fe(){const e=new Date;return e.toISOString().substring(0,10)}function ge(e,t=de){const n=[];let i=e.slice();for(const r of e){const e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),be(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),be(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(a["s"])()&&Object(a["z"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function be(e){return Object(a["f"])(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function ve(e){$(new i["a"]("platform-logger",e=>new o(e),"PRIVATE")),$(new i["a"]("heartbeat",e=>new pe(e),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}ve("")},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),i=n("1f5a"),r=n("22e5"),a=n("1fd5"),o="@firebase/auth-compat",s="0.2.11";
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
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function d(e=Object(a["n"])()){return!("file:"!==u()&&"ionic:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function h(){return Object(a["v"])()||Object(a["u"])()}function p(){return Object(a["r"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function f(e=Object(a["n"])()){return/Edge\/\d+/.test(e)}function g(e=Object(a["n"])()){return p()||f(e)}function m(){try{const e=self.localStorage,t=i["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!g()||Object(a["s"])()}catch(e){return b()&&Object(a["s"])()}return!1}function b(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function v(){return(l()||Object(a["p"])()||d())&&!h()&&m()&&!b()}function _(){return d()&&"undefined"!==typeof document}async function w(){return!!_()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}function I(){return"undefined"!==typeof window?window:null}
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
 */const y={LOCAL:"local",NONE:"none",SESSION:"session"},E=i["p"],O="persistence";function C(e,t){E(Object.values(y).includes(t),e,"invalid-persistence-type"),Object(a["v"])()?E(t!==y.SESSION,e,"unsupported-persistence-type"):Object(a["u"])()?E(t===y.NONE,e,"unsupported-persistence-type"):b()?E(t===y.NONE||t===y.LOCAL&&Object(a["s"])(),e,"unsupported-persistence-type"):E(t===y.NONE||m(),e,"unsupported-persistence-type")}async function S(e){await e._initializationPromise;const t=A(),n=i["v"](O,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function P(e,t){const n=A();if(!n)return[];const r=i["v"](O,e,t),a=n.getItem(r);switch(a){case y.NONE:return[i["L"]];case y.LOCAL:return[i["M"],i["A"]];case y.SESSION:return[i["A"]];default:return[]}}function A(){var e;try{return(null===(e=I())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
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
 */const N=i["p"];class R{constructor(){this.browserResolver=i["t"](i["z"]),this.cordovaResolver=i["t"](i["E"]),this.underlyingResolver=null,this._redirectPersistence=i["A"],this._completeRedirectFn=i["u"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return _()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return N(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
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
 */function k(e){return e.unwrap()}function L(e){return e.wrapped()}
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
 */function j(e){return T(e)}function D(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new U(e,i["J"](e,t))}else if(r){const e=T(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function T(e){const{_tokenResponse:t}=e instanceof a["c"]?e.customData:e;if(!t)return null;if(!(e instanceof a["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return i["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===i["k"].PASSWORD)return null;let r;switch(n){case i["k"].GOOGLE:r=i["f"];break;case i["k"].FACEBOOK:r=i["d"];break;case i["k"].GITHUB:r=i["e"];break;case i["k"].TWITTER:r=i["o"];break;default:const{oauthIdToken:e,oauthAccessToken:a,oauthTokenSecret:o,pendingToken:s,nonce:c}=t;return a||o||e||s?s?n.startsWith("saml.")?i["m"]._create(n,s):i["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:s,idToken:e,accessToken:a}):new i["h"](n).credential({idToken:e,accessToken:a,rawNonce:c}):null}return e instanceof a["c"]?r.credentialFromError(e):r.credentialFromResult(e)}function M(e,t){return t.catch(t=>{throw t instanceof a["c"]&&D(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:j(e),additionalUserInfo:i["I"](e),user:H.getOrCreate(n)}})}async function F(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>M(e,n.confirm(t))}}class U{constructor(e,t){this.resolver=t,this.auth=L(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return M(k(this.auth),this.resolver.resolveSignIn(e))}}
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
 */class H{constructor(e){this._delegate=e,this.multiFactor=i["S"](e)}static getOrCreate(e){return H.USER_MAP.has(e)||H.USER_MAP.set(e,new H(e)),H.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return M(this.auth,i["O"](this._delegate,e))}async linkWithPhoneNumber(e,t){return F(this.auth,i["P"](this._delegate,e,t))}async linkWithPopup(e){return M(this.auth,i["Q"](this._delegate,e,R))}async linkWithRedirect(e){return await S(i["q"](this.auth)),i["R"](this._delegate,e,R)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return M(this.auth,i["T"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return F(this.auth,i["U"](this._delegate,e,t))}reauthenticateWithPopup(e){return M(this.auth,i["V"](this._delegate,e,R))}async reauthenticateWithRedirect(e){return await S(i["q"](this.auth)),i["W"](this._delegate,e,R)}sendEmailVerification(e){return i["X"](this._delegate,e)}async unlink(e){return await i["ib"](this._delegate,e),this}updateEmail(e){return i["jb"](this._delegate,e)}updatePassword(e){return i["kb"](this._delegate,e)}updatePhoneNumber(e){return i["lb"](this._delegate,e)}updateProfile(e){return i["mb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return i["nb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}H.USER_MAP=new WeakMap;
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
const V=i["p"];class z{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;V(n,"invalid-api-key",{appName:e.name}),V(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?R:void 0;this._delegate=t.initialize({options:{persistence:W(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(i["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?H.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){i["D"](this._delegate,e,t)}applyActionCode(e){return i["x"](this._delegate,e)}checkActionCode(e){return i["B"](this._delegate,e)}confirmPasswordReset(e,t){return i["C"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return M(this._delegate,i["F"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i["H"](this._delegate,e)}isSignInWithEmailLink(e){return i["N"](this._delegate,e)}async getRedirectResult(){V(v(),this._delegate,"operation-not-supported-in-this-environment");const e=await i["K"](this._delegate,R);return e?M(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){i["w"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:a}=$(e,t,n);return this._delegate.onAuthStateChanged(i,r,a)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:a}=$(e,t,n);return this._delegate.onIdTokenChanged(i,r,a)}sendSignInLinkToEmail(e,t){return i["Z"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return i["Y"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(C(this._delegate,e),e){case y.SESSION:t=i["A"];break;case y.LOCAL:const e=await i["t"](i["M"])._isAvailable();t=e?i["M"]:i["y"];break;case y.NONE:t=i["L"];break;default:return i["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return M(this._delegate,i["ab"](this._delegate))}signInWithCredential(e){return M(this._delegate,i["bb"](this._delegate,e))}signInWithCustomToken(e){return M(this._delegate,i["cb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return M(this._delegate,i["db"](this._delegate,e,t))}signInWithEmailLink(e,t){return M(this._delegate,i["eb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return F(this._delegate,i["fb"](this._delegate,e,t))}async signInWithPopup(e){return V(v(),this._delegate,"operation-not-supported-in-this-environment"),M(this._delegate,i["gb"](this._delegate,e,R))}async signInWithRedirect(e){return V(v(),this._delegate,"operation-not-supported-in-this-environment"),await S(this._delegate),i["hb"](this._delegate,e,R)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i["ob"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function $(e,t,n){let i=e;"function"!==typeof e&&({next:i,error:t,complete:n}=e);const r=i,a=e=>r(e&&H.getOrCreate(e));return{next:a,error:t,complete:n}}function W(e,t){const n=P(e,t);if("undefined"===typeof self||n.includes(i["M"])||n.push(i["M"]),"undefined"!==typeof window)for(const r of[i["y"],i["A"]])n.includes(r)||n.push(r);return n.includes(i["L"])||n.push(i["L"]),n}
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
 */z.Persistence=y;class B{constructor(){this.providerId="phone",this._delegate=new i["i"](k(t["a"].auth()))}static credential(e,t){return i["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}B.PHONE_SIGN_IN_METHOD=i["i"].PHONE_SIGN_IN_METHOD,B.PROVIDER_ID=i["i"].PROVIDER_ID;
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
const x=i["p"];class q{constructor(e,n,r=t["a"].app()){var a;x(null===(a=r.options)||void 0===a?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new i["l"](e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
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
 */const G="auth-compat";function K(e){e.INTERNAL.registerComponent(new r["a"](G,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new z(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i["a"].EMAIL_SIGNIN,PASSWORD_RESET:i["a"].PASSWORD_RESET,RECOVER_EMAIL:i["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i["a"].VERIFY_EMAIL}},EmailAuthProvider:i["c"],FacebookAuthProvider:i["d"],GithubAuthProvider:i["e"],GoogleAuthProvider:i["f"],OAuthProvider:i["h"],SAMLAuthProvider:i["n"],PhoneAuthProvider:B,PhoneMultiFactorGenerator:i["j"],RecaptchaVerifier:q,TwitterAuthProvider:i["o"],Auth:z,AuthCredential:i["b"],Error:a["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,s)}K(t["a"])}).call(this,n("c8ba"))},"6a7c":function(e,t,n){"use strict";var i=n("3d11");n.d(t,"a",(function(){return i["h"]})),n.d(t,"b",(function(){return i["i"]})),n.d(t,"c",(function(){return i["m"]})),n.d(t,"d",(function(){return i["o"]}));n("1fd5"),n("589b"),n("e691"),n("22e5")},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n("1fd5"),r=n("22e5"),a=n("589b"),o=n("e691");
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
class s{constructor(e,t){this._delegate=e,this.firebase=t,Object(a["_addComponent"])(e,new r["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(a["deleteApp"])(this._delegate)))}_getService(e,t=a["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=a["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(a["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(a["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new i["b"]("app-compat","Firebase",c);
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
function l(e){const t={},n={__esModule:!0,initializeApp:s,app:o,registerVersion:a["registerVersion"],setLogLevel:a["setLogLevel"],onLog:a["onLog"],apps:null,SDK_VERSION:a["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:r,useAsService:d,modularAPIs:a}};function r(e){delete t[e]}function o(e){if(e=e||a["_DEFAULT_ENTRY_NAME"],!Object(i["g"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function s(r,o={}){const s=a["initializeApp"](r,o);if(Object(i["g"])(t,s.name))return t[s.name];const c=new e(s,n);return t[s.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const r=t.name,s=r.replace("-compat","");if(a["_registerComponent"](t)&&"PUBLIC"===t.type){const a=(e=o())=>{if("function"!==typeof e[s])throw u.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&Object(i["j"])(a,t.serviceProps),n[s]=a,e.prototype[s]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null}function d(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
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
 */function d(){const e=l(s);function t(t){Object(i["j"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:d,extendNamespace:t,createSubscribe:i["h"],ErrorFactory:i["b"],deepExtend:i["j"]}),e}const h=d(),p=new o["b"]("@firebase/app-compat"),f="@firebase/app-compat",g="0.1.21";
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
function m(e){Object(a["registerVersion"])(f,g,e)}
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
 */if(Object(i["o"])()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const b=h;m()},bd5a:function(e,t,n){"use strict";var i=n("589b"),r=n("22e5"),a=n("1fd5");const o="@firebase/installations",s="0.5.7",c=1e4,u="w:"+s,l="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",h=36e5,p="installations",f="Installations",g={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},m=new a["b"](p,f,g);function b(e){return e instanceof a["c"]&&e.code.includes("request-failed")}
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
 */function v({projectId:e}){return`${d}/projects/${e}/installations`}function _(e){return{token:e.token,requestStatus:2,expiresIn:O(e.expiresIn),creationTime:Date.now()}}async function w(e,t){const n=await t.json(),i=n.error;return m.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function I({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function y(e,{refreshToken:t}){const n=I(e);return n.append("Authorization",C(t)),n}async function E(e){const t=await e();return t.status>=500&&t.status<600?e():t}function O(e){return Number(e.replace("s","000"))}function C(e){return`${l} ${e}`}
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
 */async function S({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=v(e),r=I(e),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={fid:n,authVersion:l,appId:e.appId,sdkVersion:u},s={method:"POST",headers:r,body:JSON.stringify(o)},c=await E(()=>fetch(i,s));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:_(e.authToken)};return t}throw await w("Create Installation",c)}
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
 */function P(e){return new Promise(t=>{setTimeout(t,e)})}
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
 */function A(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
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
 */const N=/^[cdef][\w-]{21}$/,R="";function k(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=L(e);return N.test(n)?n:R}catch(e){return R}}function L(e){const t=A(e);return t.substr(0,22)}
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
 */function j(e){return`${e.appName}!${e.appId}`}
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
 */const D=new Map;function T(e,t){const n=j(e);M(n,t),F(n,t)}function M(e,t){const n=D.get(e);if(n)for(const i of n)i(t)}function F(e,t){const n=H();n&&n.postMessage({key:e,fid:t}),V()}let U=null;function H(){return!U&&"BroadcastChannel"in self&&(U=new BroadcastChannel("[Firebase] FID Change"),U.onmessage=e=>{M(e.data.key,e.data.fid)}),U}function V(){0===D.size&&U&&(U.close(),U=null)}
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
 */const z="firebase-installations-database",$=1,W="firebase-installations-store";let B=null;function x(){return B||(B=Object(a["w"])(z,$,(e,t)=>{switch(t){case 0:e.createObjectStore(W)}})),B}async function q(e,t){const n=j(e),i=await x(),r=i.transaction(W,"readwrite"),a=r.objectStore(W),o=await a.get(n);return await a.put(t,n),await r.complete,o&&o.fid===t.fid||T(e,t.fid),t}async function G(e){const t=j(e),n=await x(),i=n.transaction(W,"readwrite");await i.objectStore(W).delete(t),await i.complete}async function K(e,t){const n=j(e),i=await x(),r=i.transaction(W,"readwrite"),a=r.objectStore(W),o=await a.get(n),s=t(o);return void 0===s?await a.delete(n):await a.put(s,n),await r.complete,!s||o&&o.fid===s.fid||T(e,s.fid),s}
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
 */async function Y(e){let t;const n=await K(e.appConfig,n=>{const i=J(n),r=X(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===R?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function J(e){const t=e||{fid:k(),registrationStatus:0};return te(t)}function X(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(m.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Z(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Q(e)}:{installationEntry:t}}async function Z(e,t){try{const n=await S(e,t);return q(e.appConfig,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await G(e.appConfig):await q(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Q(e){let t=await ee(e.appConfig);while(1===t.registrationStatus)await P(100),t=await ee(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Y(e);return n||t}return t}function ee(e){return K(e,e=>{if(!e)throw m.create("installation-not-found");return te(e)})}function te(e){return ne(e)?{fid:e.fid,registrationStatus:0}:e}function ne(e){return 1===e.registrationStatus&&e.registrationTime+c<Date.now()}
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
 */async function ie({appConfig:e,heartbeatServiceProvider:t},n){const i=re(e,n),r=y(e,n),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={installation:{sdkVersion:u,appId:e.appId}},s={method:"POST",headers:r,body:JSON.stringify(o)},c=await E(()=>fetch(i,s));if(c.ok){const e=await c.json(),t=_(e);return t}throw await w("Generate Auth Token",c)}function re(e,{fid:t}){return`${v(e)}/${t}/authTokens:generate`}
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
 */async function ae(e,t=!1){let n;const i=await K(e.appConfig,i=>{if(!ue(i))throw m.create("not-registered");const r=i.authToken;if(!t&&le(r))return i;if(1===r.requestStatus)return n=oe(e,t),i;{if(!navigator.onLine)throw m.create("app-offline");const t=he(i);return n=ce(e,t),t}}),r=n?await n:i.authToken;return r}async function oe(e,t){let n=await se(e.appConfig);while(1===n.authToken.requestStatus)await P(100),n=await se(e.appConfig);const i=n.authToken;return 0===i.requestStatus?ae(e,t):i}function se(e){return K(e,e=>{if(!ue(e))throw m.create("not-registered");const t=e.authToken;return pe(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ce(e,t){try{const n=await ie(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await q(e.appConfig,i),n}catch(n){if(!b(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await q(e.appConfig,n)}else await G(e.appConfig);throw n}}function ue(e){return void 0!==e&&2===e.registrationStatus}function le(e){return 2===e.requestStatus&&!de(e)}function de(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+h}function he(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function pe(e){return 1===e.requestStatus&&e.requestTime+c<Date.now()}
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
 */async function fe(e){const t=e,{installationEntry:n,registrationPromise:i}=await Y(t);return i?i.catch(console.error):ae(t).catch(console.error),n.fid}
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
 */async function ge(e,t=!1){const n=e;await me(n);const i=await ae(n,t);return i.token}async function me(e){const{registrationPromise:t}=await Y(e);t&&await t}
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
function be(e){if(!e||!e.options)throw ve("App Configuration");if(!e.name)throw ve("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ve(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ve(e){return m.create("missing-app-config-values",{valueName:e})}
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
 */const _e="installations",we="installations-internal",Ie=e=>{const t=e.getProvider("app").getImmediate(),n=be(t),r=Object(i["_getProvider"])(t,"heartbeat"),a={app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()};return a},ye=e=>{const t=e.getProvider("app").getImmediate(),n=Object(i["_getProvider"])(t,_e).getImmediate(),r={getId:()=>fe(n),getToken:e=>ge(n,e)};return r};function Ee(){Object(i["_registerComponent"])(new r["a"](_e,Ie,"PUBLIC")),Object(i["_registerComponent"])(new r["a"](we,ye,"PRIVATE"))}Ee(),Object(i["registerVersion"])(o,s),Object(i["registerVersion"])(o,s,"esm2017")},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));
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
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const a={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,s={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=s[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function l(e){i.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of i){let i=null;t&&t.level&&(i=a[t.level]),n.userLogHandler=null===e?null:(t,n,...a)=>{const o=a.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:a,type:t.name})}}}}}]);