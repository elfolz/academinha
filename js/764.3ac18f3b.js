"use strict";(globalThis["webpackChunkAcademinha"]=globalThis["webpackChunkAcademinha"]||[]).push([[764],{9881:(e,t,n)=>{var a=n(3668),r=(n(8675),n(3462),n(3824),n(1703),n(809)),i=n(7790),s=(n(5659),n(7366),n(7805));
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
function o(){return window}
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
 */const l=2e3;async function c(e,t,n){var a;const{BuildInfo:i}=o();(0,r.ap)(t.sessionId,"AuthEvent did not contain a session ID");const s=await g(t.sessionId),l={};return(0,r.aq)()?l["ibi"]=i.packageName:(0,r.ar)()?l["apn"]=i.packageName:(0,r.as)(e,"operation-not-supported-in-this-environment"),i.displayName&&(l["appDisplayName"]=i.displayName),l["sessionId"]=s,(0,r.at)(e,n,t.type,void 0,null!==(a=t.eventId)&&void 0!==a?a:void 0,l)}async function d(e){const{BuildInfo:t}=o(),n={};(0,r.aq)()?n.iosBundleId=t.packageName:(0,r.ar)()?n.androidPackageName=t.packageName:(0,r.as)(e,"operation-not-supported-in-this-environment"),await(0,r.au)(e,n)}function u(e){const{cordova:t}=o();return new Promise((n=>{t.plugins.browsertab.isAvailable((a=>{let i=null;a?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,(0,r.ao)()?"_blank":"_system","location=yes"),n(i)}))}))}async function h(e,t,n){const{cordova:a}=o();let i=()=>{};try{await new Promise(((s,o)=>{let c=null;function d(){var e;s();const t=null===(e=a.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){c||(c=window.setTimeout((()=>{o((0,r.av)(e,"redirect-cancelled-by-user"))}),l))}function h(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(d),document.addEventListener("resume",u,!1),(0,r.ar)()&&document.addEventListener("visibilitychange",h,!1),i=()=>{t.removePassiveListener(d),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",h,!1),c&&window.clearTimeout(c)}}))}finally{i()}}function p(e){var t,n,a,i,s,l,c,d,u,h;const p=o();(0,r.aw)("function"===typeof(null===(t=null===p||void 0===p?void 0:p.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,r.aw)("undefined"!==typeof(null===(n=null===p||void 0===p?void 0:p.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,r.aw)("function"===typeof(null===(s=null===(i=null===(a=null===p||void 0===p?void 0:p.cordova)||void 0===a?void 0:a.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.aw)("function"===typeof(null===(d=null===(c=null===(l=null===p||void 0===p?void 0:p.cordova)||void 0===l?void 0:l.plugins)||void 0===c?void 0:c.browsertab)||void 0===d?void 0:d.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.aw)("function"===typeof(null===(h=null===(u=null===p||void 0===p?void 0:p.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function g(e){const t=f(e),n=await crypto.subtle.digest("SHA-256",t),a=Array.from(new Uint8Array(n));return a.map((e=>e.toString(16).padStart(2,"0"))).join("")}function f(e){if((0,r.ap)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return n}
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
 */const m=20;class v extends r.az{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function _(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:I(),postBody:null,tenantId:e.tenantId,error:(0,r.av)(e,"no-auth-event")}}function b(e,t){return E()._set(A(e),t)}async function w(e){const t=await E()._get(A(e));return t&&await E()._remove(A(e)),t}function y(e,t){var n,a;const i=P(t);if(i.includes("/__/auth/callback")){const t=N(i),s=t["firebaseError"]?C(decodeURIComponent(t["firebaseError"])):null,o=null===(a=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===a?void 0:a[1],l=o?(0,r.av)(o):null;return l?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function I(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<m;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function E(){return(0,r.ax)(r.b)}function A(e){return(0,r.ay)("authEvent",e.config.apiKey,e.name)}function C(e){try{return JSON.parse(e)}catch(t){return null}}function P(e){const t=N(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,a=N(n)["link"],r=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,i=N(r)["link"];return i||r||a||n||e}function N(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
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
 */const R=500;class k{constructor(){this._redirectPersistence=r.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=r.aA}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new v(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,r.as)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,a){p(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),(0,r.aB)(),await this._originValidation(e);const s=_(e,n,a);await b(e,s);const o=await c(e,s,t),l=await u(o);return h(e,i,l)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=d(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:a,BuildInfo:r}=o(),i=setTimeout((async()=>{await w(e),t.onEvent(L())}),R),s=async n=>{clearTimeout(i);const a=await w(e);let r=null;a&&(null===n||void 0===n?void 0:n["url"])&&(r=y(a,n["url"])),t.onEvent(r||L())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,s);const l=a,c=`${r.packageName.toLowerCase()}://`;o().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&s({url:e}),"function"===typeof l)try{l(e)}catch(t){console.error(t)}}}}const S=k;function L(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,r.av)("no-auth-event")}}
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
 */function O(e,t){(0,r.aC)(e)._logFramework(t)}var D="@firebase/auth-compat",T="0.2.12";
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
const U=1e3;function M(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function F(){return"http:"===M()||"https:"===M()}function V(e=(0,i.z$)()){return!("file:"!==M()&&"ionic:"!==M()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function W(){return(0,i.b$)()||(0,i.UG)()}function B(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function $(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function z(e=(0,i.z$)()){return B()||$(e)}function j(){try{const e=self.localStorage,t=r.aG();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!z()||(0,i.hl)()}catch(e){return x()&&(0,i.hl)()}return!1}function x(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function H(){return(F()||(0,i.ru)()||V())&&!W()&&j()&&!x()}function Z(){return V()&&"undefined"!==typeof document}async function G(){return!!Z()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),U);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function Y(){return"undefined"!==typeof window?window:null}
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
 */const K={LOCAL:"local",NONE:"none",SESSION:"session"},J=r.aw,q="persistence";function X(e,t){J(Object.values(K).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?J(t!==K.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?J(t===K.NONE,e,"unsupported-persistence-type"):x()?J(t===K.NONE||t===K.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):J(t===K.NONE||j(),e,"unsupported-persistence-type")}async function Q(e){await e._initializationPromise;const t=te(),n=r.ay(q,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function ee(e,t){const n=te();if(!n)return[];const a=r.ay(q,e,t),i=n.getItem(a);switch(i){case K.NONE:return[r.K];case K.LOCAL:return[r.i,r.a];case K.SESSION:return[r.a];default:return[]}}function te(){var e;try{return(null===(e=Y())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
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
 */const ne=r.aw;class ae{constructor(){this.browserResolver=r.ax(r.k),this.cordovaResolver=r.ax(S),this.underlyingResolver=null,this._redirectPersistence=r.a,this._completeRedirectFn=r.aA}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,a)}async _openRedirect(e,t,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Z()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ne(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await G();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
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
 */function re(e){return e.unwrap()}function ie(e){return e.wrapped()}
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
 */function se(e){return le(e)}function oe(e,t){var n;const a=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new ue(e,r.am(e,t))}else if(a){const e=le(t),n=t;e&&(n.credential=e,n.tenantId=a.tenantId||void 0,n.email=a.email||void 0,n.phoneNumber=a.phoneNumber||void 0)}}function le(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return r.P.credentialFromResult(e);const n=t.providerId;if(!n||n===r.o.PASSWORD)return null;let a;switch(n){case r.o.GOOGLE:a=r.N;break;case r.o.FACEBOOK:a=r.M;break;case r.o.GITHUB:a=r.Q;break;case r.o.TWITTER:a=r.V;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:l}=t;return i||s||e||o?o?n.startsWith("saml.")?r.aJ._create(n,o):r.I._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new r.T(n).credential({idToken:e,accessToken:i,rawNonce:l}):null}return e instanceof i.ZR?a.credentialFromError(e):a.credentialFromResult(e)}function ce(e,t){return t.catch((t=>{throw t instanceof i.ZR&&oe(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:se(e),additionalUserInfo:r.ak(e),user:he.getOrCreate(n)}}))}async function de(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>ce(e,n.confirm(t))}}class ue{constructor(e,t){this.resolver=t,this.auth=ie(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ce(re(this.auth),this.resolver.resolveSignIn(e))}}
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
 */class he{constructor(e){this._delegate=e,this.multiFactor=r.an(e)}static getOrCreate(e){return he.USER_MAP.has(e)||he.USER_MAP.set(e,new he(e)),he.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ce(this.auth,r.Y(this._delegate,e))}async linkWithPhoneNumber(e,t){return de(this.auth,r.l(this._delegate,e,t))}async linkWithPopup(e){return ce(this.auth,r.d(this._delegate,e,ae))}async linkWithRedirect(e){return await Q(r.aC(this.auth)),r.g(this._delegate,e,ae)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ce(this.auth,r.Z(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return de(this.auth,r.r(this._delegate,e,t))}reauthenticateWithPopup(e){return ce(this.auth,r.e(this._delegate,e,ae))}async reauthenticateWithRedirect(e){return await Q(r.aC(this.auth)),r.h(this._delegate,e,ae)}sendEmailVerification(e){return r.aa(this._delegate,e)}async unlink(e){return await r.aj(this._delegate,e),this}updateEmail(e){return r.af(this._delegate,e)}updatePassword(e){return r.ag(this._delegate,e)}updatePhoneNumber(e){return r.u(this._delegate,e)}updateProfile(e){return r.ae(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r.ab(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}he.USER_MAP=new WeakMap;
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
const pe=r.aw;class ge{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;pe(n,"invalid-api-key",{appName:e.name}),pe(n,"invalid-api-key",{appName:e.name});const a="undefined"!==typeof window?ae:void 0;this._delegate=t.initialize({options:{persistence:me(n,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(r.z),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?he.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r.E(this._delegate,e,t)}applyActionCode(e){return r.a1(this._delegate,e)}checkActionCode(e){return r.a2(this._delegate,e)}confirmPasswordReset(e,t){return r.a0(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ce(this._delegate,r.a4(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r.a9(this._delegate,e)}isSignInWithEmailLink(e){return r.a7(this._delegate,e)}async getRedirectResult(){pe(H(),this._delegate,"operation-not-supported-in-this-environment");const e=await r.j(this._delegate,ae);return e?ce(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){O(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:a,error:r,complete:i}=fe(e,t,n);return this._delegate.onAuthStateChanged(a,r,i)}onIdTokenChanged(e,t,n){const{next:a,error:r,complete:i}=fe(e,t,n);return this._delegate.onIdTokenChanged(a,r,i)}sendSignInLinkToEmail(e,t){return r.a6(this._delegate,e,t)}sendPasswordResetEmail(e,t){return r.$(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(X(this._delegate,e),e){case K.SESSION:t=r.a;break;case K.LOCAL:const e=await r.ax(r.i)._isAvailable();t=e?r.i:r.b;break;case K.NONE:t=r.K;break;default:return r.as("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ce(this._delegate,r.W(this._delegate))}signInWithCredential(e){return ce(this._delegate,r.X(this._delegate,e))}signInWithCustomToken(e){return ce(this._delegate,r._(this._delegate,e))}signInWithEmailAndPassword(e,t){return ce(this._delegate,r.a5(this._delegate,e,t))}signInWithEmailLink(e,t){return ce(this._delegate,r.a8(this._delegate,e,t))}signInWithPhoneNumber(e,t){return de(this._delegate,r.s(this._delegate,e,t))}async signInWithPopup(e){return pe(H(),this._delegate,"operation-not-supported-in-this-environment"),ce(this._delegate,r.c(this._delegate,e,ae))}async signInWithRedirect(e){return pe(H(),this._delegate,"operation-not-supported-in-this-environment"),await Q(this._delegate),r.f(this._delegate,e,ae)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r.a3(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function fe(e,t,n){let a=e;"function"!==typeof e&&({next:a,error:t,complete:n}=e);const r=a,i=e=>r(e&&he.getOrCreate(e));return{next:i,error:t,complete:n}}function me(e,t){const n=ee(e,t);if("undefined"===typeof self||n.includes(r.i)||n.push(r.i),"undefined"!==typeof window)for(const a of[r.b,r.a])n.includes(a)||n.push(a);return n.includes(r.K)||n.push(r.K),n}
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
 */ge.Persistence=K;class ve{constructor(){this.providerId="phone",this._delegate=new r.P(re(a.Z.auth()))}static credential(e,t){return r.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ve.PHONE_SIGN_IN_METHOD=r.P.PHONE_SIGN_IN_METHOD,ve.PROVIDER_ID=r.P.PROVIDER_ID;
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
const _e=r.aw;class be{constructor(e,t,n=a.Z.app()){var i;_e(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new r.R(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
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
 */const we="auth-compat";function ye(e){e.INTERNAL.registerComponent(new s.wA(we,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new ge(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r.A.EMAIL_SIGNIN,PASSWORD_RESET:r.A.PASSWORD_RESET,RECOVER_EMAIL:r.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r.A.VERIFY_EMAIL}},EmailAuthProvider:r.L,FacebookAuthProvider:r.M,GithubAuthProvider:r.Q,GoogleAuthProvider:r.N,OAuthProvider:r.T,SAMLAuthProvider:r.U,PhoneAuthProvider:ve,PhoneMultiFactorGenerator:r.m,RecaptchaVerifier:be,TwitterAuthProvider:r.V,Auth:ge,AuthCredential:r.G,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(D,T)}ye(a.Z)},5843:(e,t,n)=>{n.d(t,{_O:()=>a.M,hJ:()=>a.N,O4:()=>a.T,c4:()=>a.V});var a=n(809);n(7790),n(5659),n(7366),n(7805)},3668:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7790),r=n(7805),i=n(5659),s=n(7366);
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
class o{constructor(e,t){this._delegate=e,this.firebase=t,(0,i._addComponent)(e,new r.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,i.deleteApp)(this._delegate))))}_getService(e,t=i._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return a.isInitialized()||"EXPLICIT"!==(null===(n=a.getComponent())||void 0===n?void 0:n.instantiationMode)||a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=i._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,i._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,i._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const l={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},c=new a.LL("app-compat","Firebase",l);
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
function d(e){const t={},n={__esModule:!0,initializeApp:o,app:s,registerVersion:i.registerVersion,setLogLevel:i.setLogLevel,onLog:i.onLog,apps:null,SDK_VERSION:i.SDK_VERSION,INTERNAL:{registerComponent:d,removeApp:r,useAsService:u,modularAPIs:i}};function r(e){delete t[e]}function s(e){if(e=e||i._DEFAULT_ENTRY_NAME,!(0,a.r3)(t,e))throw c.create("no-app",{appName:e});return t[e]}function o(r,s={}){const o=i.initializeApp(r,s);if((0,a.r3)(t,o.name))return t[o.name];const l=new e(o,n);return t[o.name]=l,l}function l(){return Object.keys(t).map((e=>t[e]))}function d(t){const r=t.name,o=r.replace("-compat","");if(i._registerComponent(t)&&"PUBLIC"===t.type){const i=(e=s())=>{if("function"!==typeof e[o])throw c.create("invalid-app-argument",{appName:r});return e[o]()};void 0!==t.serviceProps&&(0,a.ZB)(i,t.serviceProps),n[o]=i,e.prototype[o]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[o]:null}function u(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:l}),s["App"]=e,n}
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
 */function u(){const e=d(o);function t(t){(0,a.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:u,extendNamespace:t,createSubscribe:a.ne,ErrorFactory:a.LL,deepExtend:a.ZB}),e}const h=u(),p=new s.Yd("@firebase/app-compat"),g="@firebase/app-compat",f="0.1.22";
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
function m(e){(0,i.registerVersion)(g,f,e)}
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
 */if((0,a.jU)()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=h;m()},5659:(e,t,n)=>{n.r(t),n.d(t,{FirebaseError:()=>i.ZR,SDK_VERSION:()=>K,_DEFAULT_ENTRY_NAME:()=>M,_addComponent:()=>B,_addOrOverwriteComponent:()=>$,_apps:()=>V,_clearComponents:()=>H,_components:()=>W,_getProvider:()=>j,_registerComponent:()=>z,_removeServiceInstance:()=>x,deleteApp:()=>Q,getApp:()=>q,getApps:()=>X,initializeApp:()=>J,onLog:()=>te,registerVersion:()=>ee,setLogLevel:()=>ne});var a=n(7805),r=n(7366),i=n(7790);
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
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(o(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function o(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const l="@firebase/app",c="0.7.21",d=new r.Yd("@firebase/app"),u="@firebase/app-compat",h="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",f="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",_="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",y="@firebase/functions-compat",I="@firebase/installations",E="@firebase/installations-compat",A="@firebase/messaging",C="@firebase/messaging-compat",P="@firebase/performance",N="@firebase/performance-compat",R="@firebase/remote-config",k="@firebase/remote-config-compat",S="@firebase/storage",L="@firebase/storage-compat",O="@firebase/firestore",D="@firebase/firestore-compat",T="firebase",U="9.6.11",M="[DEFAULT]",F={[l]:"fire-core",[u]:"fire-core-compat",[p]:"fire-analytics",[h]:"fire-analytics-compat",[f]:"fire-app-check",[g]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[_]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[y]:"fire-fn-compat",[I]:"fire-iid",[E]:"fire-iid-compat",[A]:"fire-fcm",[C]:"fire-fcm-compat",[P]:"fire-perf",[N]:"fire-perf-compat",[R]:"fire-rc",[k]:"fire-rc-compat",[S]:"fire-gcs",[L]:"fire-gcs-compat",[O]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[T]:"fire-js-all"},V=new Map,W=new Map;function B(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e,t){e.container.addOrOverwriteComponent(t)}function z(e){const t=e.name;if(W.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;W.set(t,e);for(const n of V.values())B(n,e);return!0}function j(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function x(e,t,n=M){j(e,t).clearInstance(n)}function H(){W.clear()}
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
 */const Z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},G=new i.LL("app","Firebase",Z);
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
class Y{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
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
 */const K=U;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw G.create("bad-app-name",{appName:String(r)});const s=V.get(r);if(s){if((0,i.vZ)(e,s.options)&&(0,i.vZ)(n,s.config))return s;throw G.create("duplicate-app",{appName:r})}const o=new a.H0(r);for(const a of W.values())o.addComponent(a);const l=new Y(e,n,o);return V.set(r,l),l}function q(e=M){const t=V.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function X(){return Array.from(V.values())}async function Q(e){const t=e.name;V.has(t)&&(V.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ee(e,t,n){var r;let i=null!==(r=F[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}z(new a.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw G.create("invalid-log-argument");(0,r.Am)(e,t)}function ne(e){(0,r.Ub)(e)}
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
 */const ae="firebase-heartbeat-database",re=1,ie="firebase-heartbeat-store";let se=null;function oe(){return se||(se=(0,i.X3)(ae,re,((e,t)=>{switch(t){case 0:e.createObjectStore(ie)}})).catch((e=>{throw G.create("storage-open",{originalErrorMessage:e.message})}))),se}async function le(e){try{const t=await oe();return t.transaction(ie).objectStore(ie).get(de(e))}catch(t){throw G.create("storage-get",{originalErrorMessage:t.message})}}async function ce(e,t){try{const n=await oe(),a=n.transaction(ie,"readwrite"),r=a.objectStore(ie);return await r.put(t,de(e)),a.complete}catch(n){throw G.create("storage-set",{originalErrorMessage:n.message})}}function de(e){return`${e.name}!${e.options.appId}`}
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
 */const ue=1024,he=2592e6;class pe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ge();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=he})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ge(),{heartbeatsToSend:t,unsentEntries:n}=fe(this._heartbeatsCache.heartbeats),a=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function ge(){const e=new Date;return e.toISOString().substring(0,10)}function fe(e,t=ue){const n=[];let a=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ve(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ve(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await le(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ve(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function _e(e){z(new a.wA("platform-logger",(e=>new s(e)),"PRIVATE")),z(new a.wA("heartbeat",(e=>new pe(e)),"PRIVATE")),ee(l,c,e),ee(l,c,"esm2017"),ee("fire-js","")}_e("")}}]);