"use strict";(globalThis["webpackChunkAcademinha"]=globalThis["webpackChunkAcademinha"]||[]).push([[492],{5546:(e,t,n)=>{n.d(t,{Z:()=>i.Z});var i=n(3668),o="firebase",a="9.6.11";
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
i.Z.registerVersion(o,a,"app-compat")},2833:(e,t,n)=>{n(9881)},7277:(e,t,n)=>{var i=n(3668),o=n(7805),a=(n(8675),n(3462),n(3824),n(2801),n(1703),n(5659)),r=n(7790);const s="@firebase/installations",c="0.5.8",u=1e4,l=`w:${c}`,d="FIS_v2",p="https://firebaseinstallations.googleapis.com/v1",f=36e5,g="installations",h="Installations",w={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},m=new r.LL(g,h,w);function b(e){return e instanceof r.ZR&&e.code.includes("request-failed")}
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
 */function y({projectId:e}){return`${p}/projects/${e}/installations`}function v(e){return{token:e.token,requestStatus:2,expiresIn:C(e.expiresIn),creationTime:Date.now()}}async function I(e,t){const n=await t.json(),i=n.error;return m.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function k({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function S(e,{refreshToken:t}){const n=k(e);return n.append("Authorization",O(t)),n}async function T(e){const t=await e();return t.status>=500&&t.status<600?e():t}function C(e){return Number(e.replace("s","000"))}function O(e){return`${d} ${e}`}
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
 */async function _({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=y(e),o=k(e),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const r={fid:n,authVersion:d,appId:e.appId,sdkVersion:l},s={method:"POST",headers:o,body:JSON.stringify(r)},c=await T((()=>fetch(i,s)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:v(e.authToken)};return t}throw await I("Create Installation",c)}
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
 */function E(e){return new Promise((t=>{setTimeout(t,e)}))}
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
 */const D=/^[cdef][\w-]{21}$/,P="";function M(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=j(e);return D.test(n)?n:P}catch(e){return P}}function j(e){const t=A(e);return t.substr(0,22)}
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
 */function L(e){return`${e.appName}!${e.appId}`}
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
 */const N=new Map;function K(e,t){const n=L(e);R(n,t),H(n,t)}function R(e,t){const n=N.get(e);if(n)for(const i of n)i(t)}function H(e,t){const n=F();n&&n.postMessage({key:e,fid:t}),B()}let $=null;function F(){return!$&&"BroadcastChannel"in self&&($=new BroadcastChannel("[Firebase] FID Change"),$.onmessage=e=>{R(e.data.key,e.data.fid)}),$}function B(){0===N.size&&$&&($.close(),$=null)}
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
 */const x="firebase-installations-database",z=1,V="firebase-installations-store";let U=null;function W(){return U||(U=(0,r.X3)(x,z,((e,t)=>{switch(t){case 0:e.createObjectStore(V)}}))),U}async function q(e,t){const n=L(e),i=await W(),o=i.transaction(V,"readwrite"),a=o.objectStore(V),r=await a.get(n);return await a.put(t,n),await o.complete,r&&r.fid===t.fid||K(e,t.fid),t}async function G(e){const t=L(e),n=await W(),i=n.transaction(V,"readwrite");await i.objectStore(V).delete(t),await i.complete}async function J(e,t){const n=L(e),i=await W(),o=i.transaction(V,"readwrite"),a=o.objectStore(V),r=await a.get(n),s=t(r);return void 0===s?await a.delete(n):await a.put(s,n),await o.complete,!s||r&&r.fid===s.fid||K(e,s.fid),s}
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
 */async function Y(e){let t;const n=await J(e.appConfig,(n=>{const i=Z(n),o=X(e,i);return t=o.registrationPromise,o.installationEntry}));return n.fid===P?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Z(e){const t=e||{fid:M(),registrationStatus:0};return ne(t)}function X(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(m.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Q(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ee(e)}:{installationEntry:t}}async function Q(e,t){try{const n=await _(e,t);return q(e.appConfig,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await G(e.appConfig):await q(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ee(e){let t=await te(e.appConfig);while(1===t.registrationStatus)await E(100),t=await te(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Y(e);return n||t}return t}function te(e){return J(e,(e=>{if(!e)throw m.create("installation-not-found");return ne(e)}))}function ne(e){return ie(e)?{fid:e.fid,registrationStatus:0}:e}function ie(e){return 1===e.registrationStatus&&e.registrationTime+u<Date.now()}
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
 */async function oe({appConfig:e,heartbeatServiceProvider:t},n){const i=ae(e,n),o=S(e,n),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const r={installation:{sdkVersion:l,appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(r)},c=await T((()=>fetch(i,s)));if(c.ok){const e=await c.json(),t=v(e);return t}throw await I("Generate Auth Token",c)}function ae(e,{fid:t}){return`${y(e)}/${t}/authTokens:generate`}
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
 */async function re(e,t=!1){let n;const i=await J(e.appConfig,(i=>{if(!le(i))throw m.create("not-registered");const o=i.authToken;if(!t&&de(o))return i;if(1===o.requestStatus)return n=se(e,t),i;{if(!navigator.onLine)throw m.create("app-offline");const t=fe(i);return n=ue(e,t),t}})),o=n?await n:i.authToken;return o}async function se(e,t){let n=await ce(e.appConfig);while(1===n.authToken.requestStatus)await E(100),n=await ce(e.appConfig);const i=n.authToken;return 0===i.requestStatus?re(e,t):i}function ce(e){return J(e,(e=>{if(!le(e))throw m.create("not-registered");const t=e.authToken;return ge(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function ue(e,t){try{const n=await oe(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await q(e.appConfig,i),n}catch(n){if(!b(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await q(e.appConfig,n)}else await G(e.appConfig);throw n}}function le(e){return void 0!==e&&2===e.registrationStatus}function de(e){return 2===e.requestStatus&&!pe(e)}function pe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+f}function fe(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ge(e){return 1===e.requestStatus&&e.requestTime+u<Date.now()}
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
 */async function he(e){const t=e,{installationEntry:n,registrationPromise:i}=await Y(t);return i?i.catch(console.error):re(t).catch(console.error),n.fid}
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
 */async function we(e,t=!1){const n=e;await me(n);const i=await re(n,t);return i.token}async function me(e){const{registrationPromise:t}=await Y(e);t&&await t}
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
function be(e){if(!e||!e.options)throw ye("App Configuration");if(!e.name)throw ye("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ye(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ye(e){return m.create("missing-app-config-values",{valueName:e})}
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
 */const ve="installations",Ie="installations-internal",ke=e=>{const t=e.getProvider("app").getImmediate(),n=be(t),i=(0,a._getProvider)(t,"heartbeat"),o={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},Se=e=>{const t=e.getProvider("app").getImmediate(),n=(0,a._getProvider)(t,ve).getImmediate(),i={getId:()=>he(n),getToken:e=>we(n,e)};return i};function Te(){(0,a._registerComponent)(new o.wA(ve,ke,"PUBLIC")),(0,a._registerComponent)(new o.wA(Ie,Se,"PRIVATE"))}Te(),(0,a.registerVersion)(s,c),(0,a.registerVersion)(s,c,"esm2017");
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
const Ce="/firebase-messaging-sw.js",Oe="/firebase-cloud-messaging-push-scope",_e="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ee="https://fcmregistrations.googleapis.com/v1",Ae="google.c.a.c_id",De="google.c.a.c_l",Pe="google.c.a.ts",Me="google.c.a.e";var je,Le;
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
function Ne(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ke(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let a=0;a<i.length;++a)o[a]=i.charCodeAt(a);return o}
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
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(je||(je={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(Le||(Le={}));const Re="fcm_token_details_db",He=5,$e="fcm_token_object_Store";async function Fe(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map((e=>e.name));if(!t.includes(Re))return null}let t=null;const n=await(0,r.X3)(Re,He,(async(n,i,o,a)=>{var r;if(i<2)return;if(!n.objectStoreNames.contains($e))return;const s=a.objectStore($e),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(r=e.createTime)&&void 0!==r?r:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:Ne(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Ne(e.auth),p256dh:Ne(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Ne(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Ne(e.auth),p256dh:Ne(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Ne(e.vapidKey)}}}}));return n.close(),await(0,r.Lj)(Re),await(0,r.Lj)("fcm_vapid_details_db"),await(0,r.Lj)("undefined"),Be(t)?t:null}function Be(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
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
 */const xe="firebase-messaging-database",ze=1,Ve="firebase-messaging-store";let Ue=null;function We(){return Ue||(Ue=(0,r.X3)(xe,ze,((e,t)=>{switch(t){case 0:e.createObjectStore(Ve)}}))),Ue}async function qe(e){const t=Ye(e),n=await We(),i=await n.transaction(Ve).objectStore(Ve).get(t);if(i)return i;{const t=await Fe(e.appConfig.senderId);if(t)return await Ge(e,t),t}}async function Ge(e,t){const n=Ye(e),i=await We(),o=i.transaction(Ve,"readwrite");return await o.objectStore(Ve).put(t,n),await o.complete,t}async function Je(e){const t=Ye(e),n=await We(),i=n.transaction(Ve,"readwrite");await i.objectStore(Ve).delete(t),await i.complete}function Ye({appConfig:e}){return e.appId}
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
 */const Ze={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Xe=new r.LL("messaging","Messaging",Ze);
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
async function Qe(e,t){const n=await it(e),i=ot(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let a;try{const t=await fetch(nt(e.appConfig),o);a=await t.json()}catch(r){throw Xe.create("token-subscribe-failed",{errorInfo:r})}if(a.error){const e=a.error.message;throw Xe.create("token-subscribe-failed",{errorInfo:e})}if(!a.token)throw Xe.create("token-subscribe-no-token");return a.token}async function et(e,t){const n=await it(e),i=ot(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let a;try{const n=await fetch(`${nt(e.appConfig)}/${t.token}`,o);a=await n.json()}catch(r){throw Xe.create("token-update-failed",{errorInfo:r})}if(a.error){const e=a.error.message;throw Xe.create("token-update-failed",{errorInfo:e})}if(!a.token)throw Xe.create("token-update-no-token");return a.token}async function tt(e,t){const n=await it(e),i={method:"DELETE",headers:n};try{const n=await fetch(`${nt(e.appConfig)}/${t}`,i),o=await n.json();if(o.error){const e=o.error.message;throw Xe.create("token-unsubscribe-failed",{errorInfo:e})}}catch(o){throw Xe.create("token-unsubscribe-failed",{errorInfo:o})}}function nt({projectId:e}){return`${Ee}/projects/${e}/registrations`}async function it({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ot({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==_e&&(o.web.applicationPubKey=i),o}
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
 */const at=6048e5;async function rt(e){const t=await lt(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Ne(t.getKey("auth")),p256dh:Ne(t.getKey("p256dh"))},i=await qe(e.firebaseDependencies);if(i){if(dt(i.subscriptionOptions,n))return Date.now()>=i.createTime+at?ct(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await tt(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return ut(e.firebaseDependencies,n)}return ut(e.firebaseDependencies,n)}async function st(e){const t=await qe(e.firebaseDependencies);t&&(await tt(e.firebaseDependencies,t.token),await Je(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function ct(e,t){try{const n=await et(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Ge(e.firebaseDependencies,i),n}catch(n){throw await st(e),n}}async function ut(e,t){const n=await Qe(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await Ge(e,i),i.token}async function lt(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ke(t)})}function dt(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&i&&o&&a}
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
 */function pt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return ft(t,e),gt(t,e),ht(t,e),t}function ft(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o)}function gt(e,t){t.data&&(e.data=t.data)}function ht(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const i=t.fcmOptions.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}
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
 */function wt(e){return"object"===typeof e&&!!e&&Ae in e}
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
 */function mt(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
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
 */function bt(e){if(!e||!e.options)throw yt("App Configuration Object");if(!e.name)throw yt("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw yt(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function yt(e){return Xe.create("missing-app-config-values",{valueName:e})}
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
 */mt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),mt("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class vt{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=bt(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
 */async function It(e){try{e.swRegistration=await navigator.serviceWorker.register(Ce,{scope:Oe}),e.swRegistration.update().catch((()=>{}))}catch(t){throw Xe.create("failed-service-worker-registration",{browserErrorMessage:t.message})}}
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
 */async function kt(e,t){if(t||e.swRegistration||await It(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Xe.create("invalid-sw-registration");e.swRegistration=t}}
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
 */async function St(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=_e)}
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
 */async function Tt(e,t){if(!navigator)throw Xe.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Xe.create("permission-blocked");return await St(e,null===t||void 0===t?void 0:t.vapidKey),await kt(e,null===t||void 0===t?void 0:t.serviceWorkerRegistration),rt(e)}
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
 */async function Ct(e,t,n){const i=Ot(t),o=await e.firebaseDependencies.analyticsProvider.get();o.logEvent(i,{message_id:n[Ae],message_name:n[De],message_time:n[Pe],message_device_time:Math.floor(Date.now()/1e3)})}function Ot(e){switch(e){case Le.NOTIFICATION_CLICKED:return"notification_open";case Le.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
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
 */async function _t(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Le.PUSH_RECEIVED&&("function"===typeof e.onMessageHandler?e.onMessageHandler(pt(n)):e.onMessageHandler.next(pt(n)));const i=n.data;wt(i)&&"1"===i[Me]&&await Ct(e,n.messageType,i)}const Et="@firebase/messaging",At="0.9.12",Dt=e=>{const t=new vt(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>_t(t,e))),t},Pt=e=>{const t=e.getProvider("messaging").getImmediate(),n={getToken:e=>Tt(t,e)};return n};function Mt(){(0,a._registerComponent)(new o.wA("messaging",Dt,"PUBLIC")),(0,a._registerComponent)(new o.wA("messaging-internal",Pt,"PRIVATE")),(0,a.registerVersion)(Et,At),(0,a.registerVersion)(Et,At,"esm2017")}
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
async function jt(e){if(!navigator)throw Xe.create("only-available-in-window");return e.swRegistration||await It(e),st(e)}
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
 */function Lt(e,t){if(!navigator)throw Xe.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}
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
 */async function Nt(e,t){return e=(0,r.m9)(e),Tt(e,t)}function Kt(e){return e=(0,r.m9)(e),jt(e)}function Rt(e,t){return e=(0,r.m9)(e),Lt(e,t)}Mt();
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
const Ht="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",$t="https://fcmregistrations.googleapis.com/v1",Ft="FCM_MSG",Bt="google.c.a.c_id",xt=3,zt=1;var Vt,Ut;
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
function Wt(e){const t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function qt(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let a=0;a<i.length;++a)o[a]=i.charCodeAt(a);return o}
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
 */(function(e){e[e["DATA_MESSAGE"]=1]="DATA_MESSAGE",e[e["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(Vt||(Vt={})),function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"}(Ut||(Ut={}));const Gt="fcm_token_details_db",Jt=5,Yt="fcm_token_object_Store";async function Zt(e){if("databases"in indexedDB){const e=await indexedDB.databases(),t=e.map((e=>e.name));if(!t.includes(Gt))return null}let t=null;const n=await(0,r.X3)(Gt,Jt,(async(n,i,o,a)=>{var r;if(i<2)return;if(!n.objectStoreNames.contains(Yt))return;const s=a.objectStore(Yt),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===i){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(r=e.createTime)&&void 0!==r?r:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"===typeof e.vapidKey?e.vapidKey:Wt(e.vapidKey)}}}else if(3===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Wt(e.auth),p256dh:Wt(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Wt(e.vapidKey)}}}else if(4===i){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Wt(e.auth),p256dh:Wt(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Wt(e.vapidKey)}}}}));return n.close(),await(0,r.Lj)(Gt),await(0,r.Lj)("fcm_vapid_details_db"),await(0,r.Lj)("undefined"),Xt(t)?t:null}function Xt(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
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
 */const Qt="firebase-messaging-database",en=1,tn="firebase-messaging-store";let nn=null;function on(){return nn||(nn=(0,r.X3)(Qt,en,((e,t)=>{switch(t){case 0:e.createObjectStore(tn)}}))),nn}async function an(e){const t=cn(e),n=await on(),i=await n.transaction(tn).objectStore(tn).get(t);if(i)return i;{const t=await Zt(e.appConfig.senderId);if(t)return await rn(e,t),t}}async function rn(e,t){const n=cn(e),i=await on(),o=i.transaction(tn,"readwrite");return await o.objectStore(tn).put(t,n),await o.complete,t}async function sn(e){const t=cn(e),n=await on(),i=n.transaction(tn,"readwrite");await i.objectStore(tn).delete(t),await i.complete}function cn({appConfig:e}){return e.appId}
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
 */const un={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ln=new r.LL("messaging","Messaging",un);
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
async function dn(e,t){const n=await hn(e),i=wn(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let a;try{const t=await fetch(gn(e.appConfig),o);a=await t.json()}catch(r){throw ln.create("token-subscribe-failed",{errorInfo:r})}if(a.error){const e=a.error.message;throw ln.create("token-subscribe-failed",{errorInfo:e})}if(!a.token)throw ln.create("token-subscribe-no-token");return a.token}async function pn(e,t){const n=await hn(e),i=wn(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let a;try{const n=await fetch(`${gn(e.appConfig)}/${t.token}`,o);a=await n.json()}catch(r){throw ln.create("token-update-failed",{errorInfo:r})}if(a.error){const e=a.error.message;throw ln.create("token-update-failed",{errorInfo:e})}if(!a.token)throw ln.create("token-update-no-token");return a.token}async function fn(e,t){const n=await hn(e),i={method:"DELETE",headers:n};try{const n=await fetch(`${gn(e.appConfig)}/${t}`,i),o=await n.json();if(o.error){const e=o.error.message;throw ln.create("token-unsubscribe-failed",{errorInfo:e})}}catch(o){throw ln.create("token-unsubscribe-failed",{errorInfo:o})}}function gn({projectId:e}){return`${$t}/projects/${e}/registrations`}async function hn({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function wn({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==Ht&&(o.web.applicationPubKey=i),o}
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
 */const mn=6048e5;async function bn(e){const t=await kn(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Wt(t.getKey("auth")),p256dh:Wt(t.getKey("p256dh"))},i=await an(e.firebaseDependencies);if(i){if(Sn(i.subscriptionOptions,n))return Date.now()>=i.createTime+mn?vn(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await fn(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return In(e.firebaseDependencies,n)}return In(e.firebaseDependencies,n)}async function yn(e){const t=await an(e.firebaseDependencies);t&&(await fn(e.firebaseDependencies,t.token),await sn(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function vn(e,t){try{const n=await pn(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await rn(e.firebaseDependencies,i),n}catch(n){throw await yn(e),n}}async function In(e,t){const n=await dn(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await rn(e,i),i.token}async function kn(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:qt(t)})}function Sn(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&i&&o&&a}
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
 */function Tn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Cn(t,e),On(t,e),_n(t,e),t}function Cn(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o)}function On(e,t){t.data&&(e.data=t.data)}function _n(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const i=t.fcmOptions.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}
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
 */function En(e){return"object"===typeof e&&!!e&&Bt in e}
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
 */function An(e){return new Promise((t=>{setTimeout(t,e)}))}
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
 */async function Dn(e,t){const n=Pn(t,await e.firebaseDependencies.installations.getId());Mn(e,n)}function Pn(e,t){var n,i;const o={};return e.from&&(o.project_number=e.from),e.fcmMessageId&&(o.message_id=e.fcmMessageId),o.instance_id=t,e.notification?o.message_type=Vt.DISPLAY_NOTIFICATION.toString():o.message_type=Vt.DATA_MESSAGE.toString(),o.sdk_platform=xt.toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(o.collapse_key=e.collapse_key),o.event=zt.toString(),(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)&&(o.analytics_label=null===(i=e.fcmOptions)||void 0===i?void 0:i.analytics_label),o}function Mn(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}function jn(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}
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
 */async function Ln(e,t){var n,i;const{newSubscription:o}=e;if(!o)return void await yn(t);const a=await an(t.firebaseDependencies);await yn(t),t.vapidKey=null!==(i=null===(n=null===a||void 0===a?void 0:a.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==i?i:Ht,await bn(t)}async function Nn(e,t){const n=Hn(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await Dn(t,n);const i=await xn();if(Fn(i))return Bn(i,n);if(n.notification&&await zn(Rn(n)),t&&t.onBackgroundMessageHandler){const e=Tn(n);"function"===typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function Kn(e){var t,n;const i=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[Ft];if(!i)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const o=Vn(i);if(!o)return;const a=new URL(o,self.location.href),r=new URL(self.location.origin);if(a.host!==r.host)return;let s=await $n(a);return s?s=await s.focus():(s=await self.clients.openWindow(o),await An(3e3)),s?(i.messageType=Ut.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,s.postMessage(i)):void 0}function Rn(e){const t=Object.assign({},e.notification);return t.data={[Ft]:e},t}function Hn({data:e}){if(!e)return null;try{return e.json()}catch(t){return null}}async function $n(e){const t=await xn();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}function Fn(e){return e.some((e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")))}function Bn(e,t){t.isFirebaseMessaging=!0,t.messageType=Ut.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function xn(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function zn(e){var t;const{actions:n}=e,{maxActions:i}=Notification;return n&&i&&n.length>i&&console.warn(`This browser only supports ${i} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}function Vn(e){var t,n,i;const o=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(i=e.notification)||void 0===i?void 0:i.click_action;return o||(En(e.data)?self.location.origin:null)}
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
 */function Un(e){if(!e||!e.options)throw Wn("App Configuration Object");if(!e.name)throw Wn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Wn(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Wn(e){return ln.create("missing-app-config-values",{valueName:e})}
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
 */jn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),jn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class qn{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Un(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
 */const Gn=e=>{const t=new qn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",(e=>{e.waitUntil(Nn(e,t))})),self.addEventListener("pushsubscriptionchange",(e=>{e.waitUntil(Ln(e,t))})),self.addEventListener("notificationclick",(e=>{e.waitUntil(Kn(e))})),t};function Jn(){(0,a._registerComponent)(new o.wA("messaging-sw",Gn,"PUBLIC"))}
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
function Yn(e,t){if(void 0!==self.document)throw ln.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}
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
 */function Zn(e,t){return e=(0,r.m9)(e),Yn(e,t)}
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
Jn();const Xn="@firebase/messaging-compat",Qn="0.1.12";
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
function ei(){return self&&"ServiceWorkerGlobalScope"in self?ni():ti()}function ti(){return"undefined"!==typeof window&&(0,r.hl)()&&(0,r.zI)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function ni(){return(0,r.hl)()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}class ii{constructor(e,t){this.app=e,this._delegate=t,this.app=e,this._delegate=t}async getToken(e){return Nt(this._delegate,e)}async deleteToken(){return Kt(this._delegate)}onMessage(e){return Rt(this._delegate,e)}onBackgroundMessage(e){return Zn(this._delegate,e)}}
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
 */const oi=e=>self&&"ServiceWorkerGlobalScope"in self?new ii(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new ii(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),ai={isSupported:ei};function ri(){i.Z.INTERNAL.registerComponent(new o.wA("messaging-compat",oi,"PUBLIC").setServiceProps(ai))}
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
 */ri(),i.Z.registerVersion(Xn,Qn)},7805:(e,t,n)=>{n.d(t,{H0:()=>u,wA:()=>o});n(1703);var i=n(7790);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */class r{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:a})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,a]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(e){return e===a?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new r(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},7366:(e,t,n)=>{n.d(t,{Am:()=>d,Ub:()=>l,Yd:()=>u,in:()=>o});n(1703);
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
 */const i=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const a={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},r=o.INFO,s={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),o=s[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${i}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=r,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}function l(e){i.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of i){let i=null;t&&t.level&&(i=a[t.level]),n.userLogHandler=null===e?null:(t,n,...a)=>{const r=a.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:o[n].toLowerCase(),message:r,args:a,type:t.name})}}}}}]);