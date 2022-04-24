(()=>{"use strict";var e={7083:(e,t,n)=>{n.d(t,{Z:()=>a});n(2801);const a=e=>{navigator.share({url:`${location.origin}${location.pathname}#/?shared_training=${btoa(JSON.stringify(e))}`})}},1609:(e,t,n)=>{n.d(t,{Z:()=>a});const a=[{id:1,name:"Abdomen",exercises:[{id:1,name:"Superior"},{id:2,name:"Inferior"},{id:3,name:"Oblíquo"},{id:4,name:"Inclinação + Banco"},{id:5,name:"Abdomem Maq."},{id:6,name:"Lombar"}]},{id:2,name:"Ante-braço",exercises:[{id:1,name:"Extensão de Punho"},{id:2,name:"Flexão de Punho"},{id:3,name:"Rosca Inversa"}]},{id:3,name:"Bíceps",exercises:[{id:1,name:"Rosca Direta"},{id:2,name:"Rosca Scoth"},{id:3,name:"Rosca Alternada"},{id:4,name:"Rosca Concentrada"},{id:5,name:"Rosca Martelo"}]},{id:4,name:"Dorso",exercises:[{id:1,name:"Peck Deck"},{id:2,name:"Pulley Costas"},{id:3,name:"Pulley Frente"},{id:4,name:"Remada Baixa"},{id:5,name:"Remada Uni"},{id:6,name:"Cavalinho"},{id:7,name:"Lombares"},{id:8,name:"Barra Fixa"},{id:9,name:"Pull Down"}]},{id:5,name:"Membros Inferiores",exercises:[{id:1,name:"Agachamento"},{id:2,name:"Avenço"},{id:3,name:"Leg Press"},{id:4,name:"Stiff"},{id:5,name:"Cadeira Flexora"},{id:6,name:"Cadeira Extensora"},{id:7,name:"Mesa Flexora"},{id:8,name:"Hack Machine"},{id:9,name:"Adução"},{id:10,name:"Abdução"},{id:11,name:"Glúteos"},{id:12,name:"Panturrilha"},{id:13,name:"Sóleo"},{id:14,name:"Flexão Tibial"}]},{id:6,name:"Peitorais",exercises:[{id:1,name:"Supino"},{id:2,name:"Supino Inclinado"},{id:3,name:"Supino Declinado"},{id:4,name:"Crucifixo"},{id:5,name:"Crucifixo Inclinado"},{id:6,name:"Pull Over"},{id:7,name:"Flexão Braço"},{id:8,name:"Fly"},{id:9,name:"Cross Over"},{id:10,name:"Peck Deck"}]},{id:7,name:"Ombros",exercises:[{id:1,name:"Elevação Lateral"},{id:2,name:"Elevação Anterior"},{id:3,name:"Remada Alta"},{id:4,name:"Crucifixo Inverso"},{id:5,name:"Arnold"},{id:6,name:"Encolhimento"}]},{id:8,name:"Tríceps",exercises:[{id:1,name:"Triceps Pulley"},{id:2,name:"Triceps Francês"},{id:3,name:"Triceps Testa"},{id:4,name:"Triceps Banco"},{id:5,name:"Triceps Supino"},{id:6,name:"Pacalela"},{id:7,name:"Coice"}]}]},2568:(e,t,n)=>{var a=n(8935),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("toolbar"),n("router-view"),n("v-snackbar",{attrs:{bottom:"",light:!e.$vuetify.theme.dark,timeout:5e3,color:e.alertData.color||null},nativeOn:{click:function(t){e.alert=!1}},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[n("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",a,!1),[n("v-icon",[e._v("clear")])],1)]}}]),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(e.alertData.text)+" ")]),n("v-snackbar",{attrs:{top:"",light:!e.$vuetify.theme.dark,timeout:1e4,color:"primary"},nativeOn:{click:function(t){return e.updateApp.apply(null,arguments)}},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[n("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",a,!1),[n("v-icon",[e._v("cached")])],1)]}}]),model:{value:e.updateAvailable,callback:function(t){e.updateAvailable=t},expression:"updateAvailable"}},[e._v(" Atualização disponível  ")]),n("banner-install-pwa"),n("banner-cookies-warning"),e.authenticated&&e.offline?n("footer",{attrs:{id:"offline"}},[e._v("Offline")]):e._e()],1)},r=[];const o=()=>{var e;const t=window.navigator.userAgent.toLowerCase(),n=navigator.standalone??window.matchMedia("(display-mode: standalone)").matches;return/windows/i.test(t)?e="windows":/macintosh/i.test(t)?e="mac":/android/i.test(t)?e="android":/iphone|ipad|ipod/i.test(t)&&(e="ios"),{name:e,standalone:n,isMobile:"android"==e||"ios"==e}};var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("v-app-bar",{attrs:{app:"",fixed:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}})],1),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("figure",[n("img",{attrs:{src:"/img/icons/favicon-32x32.png",alt:"Logo"}}),n("figcaption",[e._v("Academinha")])]),e.authenticated?n("header",[n("span",[e._v(e._s(e.$auth.user.name))]),n("v-btn",{attrs:{icon:""},on:{click:e.logout}},[n("v-icon",[e._v("power_settings_new")])],1)],1):e._e(),n("v-list",{attrs:{nav:""}},[n("v-list-item-group",[e._l(e.menu,(function(t){return[t.disabled?e._e():n("v-list-item",{key:t.title,on:{click:t.callback}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-title",[e._v(e._s(t.title))])],1)]}))],2)],1)],1)],1)},c=[];n(2801);function l(e){return new Promise(((t,n)=>{try{let n=new Blob([btoa(JSON.stringify(e))],{type:"text"}),a=URL.createObjectURL(n),i=document.createElement("a");i.download=`Academinha_Backup_${(new Date).toJSON().split("T")[0]}.bak`,i.target="_blank",i.href=a,document.body.appendChild(i),i.click(),document.body.removeChild(i),t()}catch(a){n(a)}}))}function d(){return new Promise(((e,t)=>{let n=document.querySelector("#backup")??document.createElement("input");n.type="file",n.accept=".bak",n.id="backup",document.body.appendChild(n),n.click();let a=new FileReader;a.onload=n=>{document.body.removeChild(document.querySelector("#backup"));try{e(JSON.parse(atob(n.target.result)))}catch(a){t(a)}},n.onchange=e=>{let t=e.target.files;t.length?a.readAsText(t[0]):document.body.removeChild(n)}}))}const u={name:"toolbar",computed:{authenticated(){return this.$store.state.authenticated}},data(){return{drawer:!1,loading:!1,menu:[{icon:"login",title:"Entrar",callback:this.login},{icon:"add",title:"Adicionar Treino",callback:this.newTraining},{icon:"archive",title:"Backup dos meus Treinos",callback:this.generateBackup},{icon:"unarchive",title:"Restaurar Backup",callback:this.restoreBackup},{icon:"security",title:"Política de Privacidade",callback:this.gotoPrivacyPolicy}]}},mounted(){this.refreshMenu()},methods:{refreshMenu(){this.menu[0].disabled=this.authenticated,this.menu[2].disabled=this.authenticated,this.menu[3].disabled=this.authenticated},login(){this.$router.push("/login").catch((e=>{})),this.drawer=!1},logout(){this.$auth.deauthenticate()},newTraining(){this.$router.push("/training").catch((e=>{}))},generateBackup(){this.loading||(this.loading=!0,this.$db.trainings.toArray().then((e=>{e.length?l(e).then((()=>{this.drawer=!1})).catch((e=>{this.$store.dispatch("openAlert",{text:"Falha ao fazer backup do seus treinos! Tente novamente.",color:"error"}),console.log(e)})):this.$store.dispatch("openAlert",{text:"Você não tem nenhum treino.",color:"warning"})})).finally((()=>{this.loading=!1})))},restoreBackup(){this.loading||(this.loading=!0,d().then((e=>{e.forEach((e=>{this.$db.trainings.delete(e.type).finally((()=>{this.$db.trainings.put(e).then((()=>{this.$store.dispatch("openAlert",{text:"Backup restaurado com sucesso!",color:"success"}),this.$sync.refreshLocalTrainings(),this.drawer=!1,this.$router.push("/").catch((e=>{}))})).catch((e=>{this.$store.dispatch("openAlert",{text:"Falha ao restaurar o backup! Tente novamente.",color:"error"}),console.log(e)})).finally((()=>{this.loading=!1}))}))}),this)})).catch((e=>{this.loading=!1,this.$store.dispatch("openAlert",{text:"Falha ao restaurar o backup! Tente novamente.",color:"error"}),console.log(e)})))},connectSmartband(){this.$store.dispatch("openAlert",{text:"Funcionalidade em desenvolvimento."}),this.drawer=!1},gotoPrivacyPolicy(){this.$router.push("/privacy-policy").catch((e=>{}))}},watch:{authenticated(){this.refreshMenu()}}},h=u;var m=n(1001),p=n(3453),g=n.n(p),f=n(6650),v=n(5206),b=n(7080),y=n(4926),w=n(3920),k=n(8681),$=n(3632),T=n(459),A=n(4815),_=n(7695),x=(0,m.Z)(h,s,c,!1,null,null,null);const Z=x.exports;g()(x,{VAppBar:f.Z,VAppBarNavIcon:v.Z,VBtn:b.Z,VIcon:y.Z,VList:w.Z,VListItem:k.Z,VListItemGroup:$.Z,VListItemIcon:T.Z,VListItemTitle:A.V9,VNavigationDrawer:_.Z});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.show?n("main",{staticClass:"banner elevation-12",on:{click:function(t){e.show=!1}}},[n("header",[e._v("Instale esse App no seu ceular")]),"ios"==e.device.name?[n("div",[e._v(" Toque em "),n("v-icon",[e._v("ios_share")]),e._v(" e depois em ")],1),n("div",{staticClass:"ios"},[e._v(" Adicionar à Tela de Início "),n("span")])]:e._e(),"android"==e.device.name?[n("div",[e._v(" Toque em "),n("v-icon",[e._v("more_vert")]),e._v("e depois em ")],1),n("div",[e._v("Adicionar à tela inicial")])]:e._e()],2):e._e()])},P=[];const V={name:"banner-install-pwa",computed:{device(){return o()}},data(){return{show:!1}},mounted(){this.device.isMobile&&!this.device.standalone&&(this.show=!0,setTimeout((()=>{this.show=!1}),1e4))}},I=V;var L=(0,m.Z)(I,S,P,!1,null,"c75b7fda",null);const C=L.exports;g()(L,{VIcon:y.Z});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.show?n("footer",{staticClass:"banner elevation-12"},[n("p",[e._v("Usamos cookies para melhorar sua experiência.")]),n("p",[e._v("Saiba mais em "),n("font",{on:{click:function(t){return e.$router.push("/privacy-policy")}}},[e._v(e._s(e.link()))])],1),n("v-btn",{attrs:{color:"accent"},on:{click:e.accept}},[n("v-icon",[e._v("check")]),e._v("Aceitar")],1)],1):e._e()])},E=[];const B={name:"banner-cookies-warning",data(){return{show:!localStorage.getItem("cookiesPolicyAccepted")}},methods:{accept(){localStorage.setItem("cookiesPolicyAccepted","true"),this.show=!1},link(){return`${location.host}/privacy-policy`}}},N=B;var D=(0,m.Z)(N,O,E,!1,null,"c2bad660",null);const F=D.exports;g()(D,{VBtn:b.Z,VIcon:y.Z});const M={components:{toolbar:Z,bannerInstallPwa:C,bannerCookiesWarning:F},computed:{alert:{get(){return this.$store.state.alert},set(e){return this.$store.commit("setAlert",e)}},updateAvailable:{get(){return this.$store.state.updateAvailable},set(e){this.$store.commit("setUpdateAvailable",!1)}},offline:{get(){return this.$store.state.offline},set(e){this.$store.commit("setOffline",e)}},audio:{get(){return this.$store.state.audio},set(e){return this.$store.commit("setAudio",e)}},alertData(){return this.$store.state.alertData},authenticated(){return this.$store.state.authenticated}},data(){return{player:new Audio("/ding.mp3"),audioAuthorized:!1}},mounted(){this.refreshPageSize(),this.refreshTheme(),this.setupTrainings(),document.onclick=()=>{this.audioAuthorized||(this.player.currentTime=3,this.player.muted=!0,this.player.play(),this.audioAuthorized=!0)},window.onresize=()=>{this.refreshPageSize()},window.ononline=()=>{this.offline&&(this.$sync.refreshTrainings(),this.offline=!1)},window.onoffline=()=>{this.offline=!0},this.authenticated&&this.$auth.attempt(),this.$route.query.shared_training&&this.$router.push({path:"/training",query:{shared_training:this.$route.query.shared_training}})},methods:{updateApp(){location.reload(!0)},refreshTheme(){document.body.style.setProperty("background-color",this.$vuetify.theme.dark?"#121212":"#ffffff")},refreshPageSize(){document.body.style.setProperty("--vh",`${o().standalone?window.outerHeight:window.innerHeight}px`),this.$root.$emit("resize")},setupTrainings(){this.int=setInterval((()=>{window.Vue&&(this.$sync.refreshTrainings(),clearInterval(this.int),this.int=void 0)}),100)}},watch:{audio:function(e){"play"==e&&(this.player.currentTime=0,this.player.muted=!1,this.player.play(),setTimeout((()=>{this.audio=null}),100))}}},j=M;var R=n(3167),q=n(8766),z=(0,m.Z)(j,i,r,!1,null,"77fd2a38",null);const J=z.exports;g()(z,{VApp:R.Z,VBtn:b.Z,VIcon:y.Z,VSnackbar:q.Z});var U=n(3130),H=n(2809),G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[e.categories.length&&!e.trainings.length?n("figure",[n("img",{attrs:{src:"/img/"+e.imgId+".png",alt:"Pessoa se exercitando",width:"300",height:"auto"}}),n("figcaption",[n("h1",[e._v("Ainda sem treinos")]),n("h2",[e._v("Adicione clicando no +")])])]):n("section",e._l(e.trainings,(function(t,a){return n("v-card",{key:a},[n("v-card-title",[n("span",[e._v(e._s(t.type))])]),n("v-card-text",[e.categories.length?e._l(t.exercises,(function(t,a){return n("p",{key:a},[n("span",[e._v(e._s(e.categoryName(t.categoryId)))]),n("span",[e._v(e._s(e.exerciseName(t.categoryId,t.exerciseId)))])])})):[n("v-skeleton-loader",{attrs:{type:"list-item-three-line"}})]],2),e.categories.length?n("v-card-actions",[n("v-btn",{attrs:{icon:"",title:"Editar"},on:{click:function(n){return e.openTraining("edit",t)}}},[n("v-icon",[e._v("edit")])],1),n("v-btn",{attrs:{icon:"",title:"Compartilhar"},on:{click:function(n){return e.shareMyTraining(t)}}},[n("v-icon",[e._v("share")])],1),n("v-btn",{attrs:{fab:"",small:"",title:"Começar"},on:{click:function(n){return e.openTraining("play",t)}}},[n("v-icon",[e._v("play_arrow")])],1)],1):e._e()],1)})),1),n("v-btn",{attrs:{fixed:"",bottom:"",right:"",fab:"",color:"accent",title:"Adicionar treino",loading:!e.categories.length},on:{click:e.newTraining}},[n("v-icon",[e._v("add")])],1)],1)},K=[];function W(e,t){return Math.floor(Math.random()*(t-e+1))+e}var Y=n(1609),Q=n(7083);const X={computed:{offline(){return this.$store.state.offline},authenticated(){return this.$store.state.authenticated},categories(){return Y.Z},trainings:{get(){return this.$store.state.trainings},set(e){this.$store.commit("setTrainings",e)}}},data(){return{imgId:W(0,6)}},methods:{categoryName(e){return this.categories.find((t=>t.id==e))?.name??null},exerciseName(e,t){return this.categories.find((t=>t.id==e))?.exercises.find((e=>e.id==t))?.name??null},newTraining(){this.$router.push("/training").catch((e=>{}))},openTraining(e,t){let n;n=t.id?t.id:t.type,this.$router.push(`/training/${n}/${e}`).catch((e=>{}))},shareMyTraining(e){(0,Q.Z)(e)}}},ee=X;var te=n(2371),ne=n(7118),ae=n(4768),ie=n(9559),re=(0,m.Z)(ee,G,K,!1,null,"e35ad71a",null);const oe=re.exports;g()(re,{VBtn:b.Z,VCard:te.Z,VCardActions:ne.h7,VCardText:ne.ZB,VCardTitle:ne.EB,VIcon:y.Z,VMain:ae.Z,VSkeletonLoader:ie.Z}),a.Z.use(H.Z);const se=()=>Promise.all([n.e(764),n.e(809),n.e(492),n.e(375),n.e(752)]).then(n.bind(n,5510)),ce=()=>Promise.all([n.e(225),n.e(68),n.e(700),n.e(133),n.e(722)]).then(n.bind(n,6722)),le=()=>n.e(659).then(n.bind(n,3659)),de=[{path:"/login/:provider?",name:"Login",component:se,meta:{elseAuth:!0}},{path:"/privacy-policy",name:"Privacy Policy",component:le},{path:"/training/:id?/:mode?",name:"Treino",component:ce,props:!0},{path:"/",name:"home",component:oe}],ue=new H.Z({mode:"hash",base:"/",routes:de});ue.beforeEach(((e,t,n)=>{const i=e.matched.some((e=>e.meta.ifAuth)),r=e.matched.some((e=>e.meta.elseAuth));i&&!a.Z.$auth.authenticated?n("/login"):r&&a.Z.$auth.authenticated?n("/"):n()})),a.Z.use(U.ZP,{appName:"Academinha",pageTrackerScreenviewEnabled:!0,pageTrackerExcludedRotues:["/privacy-policy"],config:{id:"G-3LYC0SMM8J"}},ue);const he=ue;var me=n(4665);a.Z.use(me.ZP);const pe=new me.ZP.Store({state:{authenticated:!!localStorage.getItem("accessToken"),updateAvailable:!1,alert:!1,alertData:{},trainings:[],offline:!navigator.onLine,audio:null},mutations:{setAuthenticate(e,t){e.authenticated=t},setUpdateAvailable(e,t){e.updateAvailable=t},setAlert(e,t){e.alert=t},setAlertData(e,t){e.alertData=t},setTrainings(e,t){e.trainings=t},setOffline(e,t){e.offline=t},setAudio(e,t){e.audio=t}},actions:{openAlert({commit:e},t){if(t.text){e("setAlertData",t),e("setAlert",!0);try{navigator.vibrate(100)}catch(n){}}}}});var ge=n(8161),fe=n.n(ge),ve=n(9132);function be(){return"true"==localStorage.getItem("lightTheme")||"false"!=localStorage.getItem("lightTheme")&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches)}a.Z.use(ve.Z),a.Z.use(fe());const ye=new ve.Z({icons:{iconfont:"md"},theme:{dark:!be(),options:{customProperties:!0},themes:{light:{primary:"#ff7e00",secondary:"#ffcc00",accent:"#966fd6",error:"#ff4040",info:"#8ab9f1",success:"#3cd070",warning:"#ffdb58"},dark:{primary:"#ff7e00",secondary:"#ffcc00",accent:"#966fd6",error:"#ff4040",info:"#8ab9f1",success:"#3cd070",warning:"#ffdb58"}}}});var we=n(7256),ke=n.n(we);a.Z.use(ke());const $e=new(ke())([{version:1,database:"academinha",schemas:[{trainings:"&type"}]}]),Te=$e;var Ae=n(563);(0,Ae.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){window.Vue.$store.commit("setUpdateAvailable",!0),console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var _e=n(6166),xe=n.n(_e);xe().defaults.baseURL="https://us-central1-academinha-beb1f.cloudfunctions.net/api",xe().defaults.headers.common={Accept:"application/json"};const Ze=xe().create({});Ze.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),Ze.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=Ze,window.axios=Ze,Object.defineProperties(e.prototype,{axios:{get(){return Ze}},$axios:{get(){return Ze}}})},a.Z.use(Plugin);Plugin;class Se{get authenticated(){return!!localStorage.getItem("accessToken")}attempt(){if(!navigator.onLine)return!1;a.Z.axios.get("/auth/check",{headers:this.headers}).catch((()=>{this.deauthenticate()}))}authenticate(e){localStorage.setItem("accessToken",e.token),delete e.token,localStorage.setItem("user",JSON.stringify(e.user)),window.Vue.$store.commit("setAuthenticate",!0),window.Vue.$router.push("/").catch((e=>{})),window.Vue.$sync.syncTrainings(!0)}deauthenticate(){window.Vue.$store.commit("setAuthenticate",!1),localStorage.removeItem("accessToken"),localStorage.removeItem("user"),window.Vue.$router.push("/").catch((e=>{})),window.Vue.$sync.unlinkTrainings()}get user(){return JSON.parse(localStorage.getItem("user")??"{}")}get headers(){let e={};return localStorage.getItem("accessToken")&&(e["Authorization"]=`Bearer ${localStorage.getItem("accessToken")}`),e}}const Pe=new Se;Se.install=function(e,t){e.$auth=Pe,Object.defineProperty(e.prototype,"$auth",{get(){return Pe}})},a.Z.use(Se);class Ve{refreshTrainings(){window.Vue.$db.trainings.toArray().then((e=>{window.Vue.$store.commit("setTrainings",e)})).finally((()=>{a.Z.$auth.authenticated&&navigator.onLine&&this.syncTrainings()}))}syncTrainings(e=!1){return a.Z.axios.get("/trainings",{headers:a.Z.$auth.headers}).then((t=>{if(200!=t.status)return this.sendLocalTrainings();let n=JSON.parse(localStorage.getItem("trainingsToDelete")||"[]");return n.length&&t.data.filter((e=>n.includes(e.id))).length&&n.forEach((e=>{a.Z.axios["delete"](`/trainings/${e}`,{headers:a.Z.$auth.headers});let i=t.data.find((e=>e.id==e)),r=t.data.indexOf(i);t.data.splice(r,1),r=n.indexOf(e),n.splice(r,1),n.length?localStorage.setItem("trainingsToDelete",JSON.stringify(n)):localStorage.removeItem("trainingsToDelete")})),window.Vue.$db.trainings.toArray().then((n=>{let a=n.filter((e=>e.pending));if(e||!a.length)return e?window.Vue.$db.trainings.clear().finally((()=>window.Vue.$db.trainings.bulkPut(t.data).finally((()=>this.refreshLocalTrainings())))):window.Vue.$db.trainings.bulkPut(t.data).finally((()=>this.refreshLocalTrainings()));t.data.forEach((e=>{let t=a.find((t=>t.type==e.type));t?e.id?this.updateTraining(t):this.sendTrainings([t]):window.Vue.$db.trainings.put(e).finally((()=>this.refreshLocalTrainings()))}))}))}))}sendLocalTrainings(){if(a.Z.$auth.authenticated&&navigator.onLine)return window.Vue.$db.trainings.toArray().then((e=>{if(e=e.filter((e=>!e.id||e.pending)),e.length)return a.Z.axios.post("/trainings",e,{headers:a.Z.$auth.headers}).then((e=>window.Vue.$db.trainings.bulkPut(e.data).finally((()=>this.refreshLocalTrainings()))))}))}sendTrainings(e){for(let t in e)e[t].updatedAt=Date.now();return a.Z.$auth.authenticated&&navigator.onLine?a.Z.axios.post("/trainings",e,{headers:a.Z.$auth.headers}).then((e=>window.Vue.$db.trainings.bulkPut(e.data).finally((()=>this.refreshLocalTrainings())))):(this.clearLocalTrainings(e),window.Vue.$db.trainings.bulkPut(e).finally((()=>this.refreshLocalTrainings())))}updateTraining(e){return e.updatedAt=Date.now(),a.Z.$auth.authenticated&&navigator.onLine?a.Z.axios.put(`/trainings/${e.id}`,e,{headers:a.Z.$auth.headers}).then((e=>(e.data.pending=!1,window.Vue.$db.trainings.put(e.data).finally((()=>this.refreshLocalTrainings()))))):(this.clearLocalTrainings([e]),window.Vue.$db.trainings.put(e).finally((()=>this.refreshLocalTrainings())))}deleteTraining(e){if(a.Z.$auth.authenticated&&navigator.onLine)return a.Z.axios["delete"](`/trainings/${e.id}`,{headers:a.Z.$auth.headers}).then((()=>window.Vue.$db.trainings.delete(e.type).finally((()=>this.refreshLocalTrainings()))));if(e.id){let t=JSON.parse(localStorage.getItem("trainingsToDelete")||"[]");t.includes(e.id)||t.push(e.id),localStorage.setItem("trainingsToDelete",JSON.stringify(t))}return window.Vue.$db.trainings.delete(e.type).finally((()=>this.refreshLocalTrainings()))}refreshLocalTrainings(){return window.Vue.$db.trainings.toArray().then((e=>{window.Vue.$store.commit("setTrainings",e)}))}unlinkTrainings(){return window.Vue.$db.trainings.toArray().then((e=>{this.clearLocalTrainings(e),window.Vue.$db.trainings.bulkPut(e).finally((()=>{window.Vue.$store.commit("setTrainings",e)}))}))}clearLocalTrainings(e){for(let t in e)a.Z.$auth.authenticated||(delete e[t].id,delete e[t].userId),e[t].pending=!0}}const Ie=new Ve;Ve.install=function(e,t){e.$sync=Ie,Object.defineProperty(e.prototype,"$sync",{get(){return Ie}})},a.Z.use(Ve);a.Z.config.productionTip=!1,a.Z.config.devtools=!1;const Le=new a.Z({router:he,store:pe,vuetify:ye,idb:Te,render:e=>e(J)}).$mount("#app");window.Vue=Le}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,(()=>{var e=[];n.O=(t,a,i,r)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,i,r]=e[d],s=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,i,r]}})(),(()=>{n.F={},n.E=e=>{Object.keys(n.F).map((t=>{n.F[t](e)}))}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{68:"63b6f11c",133:"693fc065",225:"17531bfb",375:"48a0b71c",492:"f2f17266",659:"7dd7a97e",700:"994f7af7",722:"60a9339b",752:"aa046cc8",764:"3ac18f3b",809:"e2832e2c"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{659:"cf81b9b4",722:"cbbf7b7d",752:"2721f145"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="Academinha:";n.l=(a,i,r,o)=>{if(e[a])e[a].push(i);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[i];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(m);var i=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{n.p="/"})(),(()=>{var e=(e,t,n,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=r=>{if(i.onerror=i.onload=null,"load"===r.type)n();else{var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=s,i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=r,i.href=t,document.head.appendChild(i),i},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){i=o[a],r=i.getAttribute("data-href");if(r===e||r===t)return i}},a=a=>new Promise(((i,r)=>{var o=n.miniCssF(a),s=n.p+o;if(t(o,s))return i();e(a,s,i,r)})),i={143:0};n.f.miniCss=(e,t)=>{var n={659:1,722:1,752:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=a(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}})(),(()=>{var e={143:0,283:0};n.f.j=(t,a)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else if(/^(283|752)$/.test(t))e[t]=0;else{var r=new Promise(((n,a)=>i=e[t]=[n,a]));a.push(i[2]=r);var o=n.p+n.u(t),s=new Error,c=a=>{if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,i[1](s)}};n.l(o,c,"chunk-"+t,t)}},n.F.j=t=>{if((!n.o(e,t)||void 0===e[t])&&!/^(283|752)$/.test(t)){e[t]=null;var a=document.createElement("link");n.nc&&a.setAttribute("nonce",n.nc),a.rel="prefetch",a.as="script",a.href=n.p+n.u(t),document.head.appendChild(a)}},n.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,[o,s,c]=a,l=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var d=c(n)}for(t&&t(a);l<o.length;l++)r=o[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=globalThis["webpackChunkAcademinha"]=globalThis["webpackChunkAcademinha"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{n.O(0,[143],(()=>{[764,809,492,375,752,225,68,700,133,722,659].map(n.E)}),5)})();var a=n.O(void 0,[772,840,762,184,602,352,999,274,611,125,283,797],(()=>n(2568)));a=n.O(a)})();