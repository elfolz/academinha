(()=>{"use strict";var e={7083:(e,t,a)=>{a.d(t,{Z:()=>n});a(2801);const n=e=>{navigator.share({url:`${location.origin}${location.pathname}#/?shared_training=${btoa(JSON.stringify(e))}`})}},1609:(e,t,a)=>{a.d(t,{Z:()=>n});const n=[{id:1,name:"Abdomen",exercises:[{id:1,name:"Superior"},{id:2,name:"Inferior"},{id:3,name:"Oblíquo"},{id:4,name:"Inclinação + Banco"},{id:5,name:"Abdomem Maq."},{id:6,name:"Lombar"}]},{id:2,name:"Ante-braço",exercises:[{id:1,name:"Extensão de Punho"},{id:2,name:"Flexão de Punho"},{id:3,name:"Rosca Inversa"}]},{id:3,name:"Bíceps",exercises:[{id:1,name:"Rosca Direta"},{id:2,name:"Rosca Scoth"},{id:3,name:"Rosca Alternada"},{id:4,name:"Rosca Concentrada"},{id:5,name:"Rosca Martelo"}]},{id:4,name:"Dorso",exercises:[{id:1,name:"Peck Deck"},{id:2,name:"Pulley Costas"},{id:3,name:"Pulley Frente"},{id:4,name:"Remada Baixa"},{id:5,name:"Remada Uni"},{id:6,name:"Cavalinho"},{id:7,name:"Lombares"},{id:8,name:"Barra Fixa"},{id:9,name:"Pull Down"}]},{id:5,name:"Membros Inferiores",exercises:[{id:1,name:"Agachamento"},{id:2,name:"Avenço"},{id:3,name:"Leg Press"},{id:4,name:"Stiff"},{id:5,name:"Cadeira Flexora"},{id:6,name:"Cadeira Extensora"},{id:7,name:"Mesa Flexora"},{id:8,name:"Hack Machine"},{id:9,name:"Adução"},{id:10,name:"Abdução"},{id:11,name:"Glúteos"},{id:12,name:"Panturrilha"},{id:13,name:"Sóleo"},{id:14,name:"Flexão Tibial"}]},{id:6,name:"Peitorais",exercises:[{id:1,name:"Supino"},{id:2,name:"Supino Inclinado"},{id:3,name:"Supino Declinado"},{id:4,name:"Crucifixo"},{id:5,name:"Crucifixo Inclinado"},{id:6,name:"Pull Over"},{id:7,name:"Flexão Braço"},{id:8,name:"Fly"},{id:9,name:"Cross Over"},{id:10,name:"Peck Deck"}]},{id:7,name:"Ombros",exercises:[{id:1,name:"Elevação Lateral"},{id:2,name:"Elevação Anterior"},{id:3,name:"Remada Alta"},{id:4,name:"Crucifixo Inverso"},{id:5,name:"Arnold"},{id:6,name:"Encolhimento"}]},{id:8,name:"Tríceps",exercises:[{id:1,name:"Triceps Pulley"},{id:2,name:"Triceps Francês"},{id:3,name:"Triceps Testa"},{id:4,name:"Triceps Banco"},{id:5,name:"Triceps Supino"},{id:6,name:"Pacalela"},{id:7,name:"Coice"}]}]},2568:(e,t,a)=>{var n=a(8935),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("toolbar"),a("router-view"),a("v-snackbar",{attrs:{bottom:"",light:!e.$vuetify.theme.dark,timeout:5e3,color:e.alertData.color||null},nativeOn:{click:function(t){e.alert=!1}},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[a("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",n,!1),[a("v-icon",[e._v("clear")])],1)]}}]),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(e.alertData.text)+" ")]),a("v-snackbar",{attrs:{top:"",light:!e.$vuetify.theme.dark,timeout:1e4,color:"primary"},nativeOn:{click:function(t){return e.updateApp.apply(null,arguments)}},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[a("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",n,!1),[a("v-icon",[e._v("cached")])],1)]}}]),model:{value:e.updateAvailable,callback:function(t){e.updateAvailable=t},expression:"updateAvailable"}},[e._v(" Atualização disponível  ")]),a("banner-install-pwa"),a("banner-cookies-warning"),e.authenticated&&e.offline?a("footer",{attrs:{id:"offline"}},[e._v("Offline")]):e._e()],1)},r=[];const o=()=>{var e;const t=window.navigator.userAgent.toLowerCase(),a=navigator.standalone??window.matchMedia("(display-mode: standalone)").matches;return/windows/i.test(t)?e="windows":/macintosh/i.test(t)?e="mac":/android/i.test(t)?e="android":/iphone|ipad|ipod/i.test(t)&&(e="ios"),{name:e,standalone:a,isMobile:"android"==e||"ios"==e}};var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("v-app-bar",{attrs:{app:"",fixed:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}})],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("figure",[a("img",{attrs:{src:"/img/icons/favicon-32x32.png",alt:"Logo"}}),a("figcaption",[e._v("Academinha")])]),e.authenticated?a("header",[a("span",[e._v(e._s(e.$auth.user.name))]),a("v-btn",{attrs:{icon:""},on:{click:e.logout}},[a("v-icon",[e._v("power_settings_new")])],1)],1):e._e(),a("v-list",{attrs:{nav:""}},[a("v-list-item-group",[e._l(e.menu,(function(t){return[t.disabled?e._e():a("v-list-item",{key:t.title,on:{click:t.callback}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-title",[e._v(e._s(t.title))])],1)]}))],2)],1)],1)],1)},c=[];a(2801);function l(e){return new Promise(((t,a)=>{try{let a=new Blob([btoa(JSON.stringify(e))],{type:"text"}),n=URL.createObjectURL(a),i=document.createElement("a");i.download=`Academinha_Backup_${(new Date).toJSON().split("T")[0]}.bak`,i.target="_blank",i.href=n,document.body.appendChild(i),i.click(),document.body.removeChild(i),t()}catch(n){a(n)}}))}function d(){return new Promise(((e,t)=>{let a=document.querySelector("#backup")??document.createElement("input");a.type="file",a.accept=".bak",a.id="backup",document.body.appendChild(a),a.click();let n=new FileReader;n.onload=a=>{document.body.removeChild(document.querySelector("#backup"));try{e(JSON.parse(atob(a.target.result)))}catch(n){t(n)}},a.onchange=e=>{let t=e.target.files;t.length?n.readAsText(t[0]):document.body.removeChild(a)}}))}const u={name:"toolbar",computed:{authenticated(){return this.$store.state.authenticated}},data(){return{drawer:!1,loading:!1,menu:[{icon:"login",title:"Entrar",callback:this.login},{icon:"add",title:"Adicionar Treino",callback:this.newTraining},{icon:"archive",title:"Backup dos meus Treinos",callback:this.generateBackup},{icon:"unarchive",title:"Restaurar Backup",callback:this.restoreBackup},{icon:"security",title:"Política de Privacidade",callback:this.gotoPrivacyPolicy}]}},mounted(){this.refreshMenu()},methods:{refreshMenu(){this.menu[0].disabled=this.authenticated,this.menu[2].disabled=this.authenticated,this.menu[3].disabled=this.authenticated},login(){this.$router.push("/login").catch((e=>{})),this.drawer=!1},logout(){this.$auth.deauthenticate()},newTraining(){this.$router.push("/training").catch((e=>{}))},generateBackup(){this.loading||(this.loading=!0,this.$db.trainings.toArray().then((e=>{e.length?l(e).then((()=>{this.drawer=!1})).catch((e=>{this.$store.dispatch("openAlert",{text:"Falha ao fazer backup do seus treinos! Tente novamente.",color:"error"}),console.log(e)})):this.$store.dispatch("openAlert",{text:"Você não tem nenhum treino.",color:"warning"})})).finally((()=>{this.loading=!1})))},restoreBackup(){this.loading||(this.loading=!0,d().then((e=>{e.forEach((e=>{this.$db.trainings.delete(e.type).finally((()=>{this.$db.trainings.put(e).then((()=>{this.$store.dispatch("openAlert",{text:"Backup restaurado com sucesso!",color:"success"}),this.$sync.refreshLocalTrainings(),this.drawer=!1,this.$router.push("/").catch((e=>{}))})).catch((e=>{this.$store.dispatch("openAlert",{text:"Falha ao restaurar o backup! Tente novamente.",color:"error"}),console.log(e)})).finally((()=>{this.loading=!1}))}))}),this)})).catch((e=>{this.loading=!1,this.$store.dispatch("openAlert",{text:"Falha ao restaurar o backup! Tente novamente.",color:"error"}),console.log(e)})))},connectSmartband(){this.$store.dispatch("openAlert",{text:"Funcionalidade em desenvolvimento."}),this.drawer=!1},gotoPrivacyPolicy(){this.$router.push("/privacy-policy").catch((e=>{}))}},watch:{authenticated(){this.refreshMenu()}}},h=u;var m=a(1001),p=a(3453),g=a.n(p),f=a(6650),v=a(5206),b=a(7080),y=a(4926),w=a(3920),k=a(8681),A=a(3632),T=a(459),$=a(4815),_=a(7695),x=(0,m.Z)(h,s,c,!1,null,null,null);const Z=x.exports;g()(x,{VAppBar:f.Z,VAppBarNavIcon:v.Z,VBtn:b.Z,VIcon:y.Z,VList:w.Z,VListItem:k.Z,VListItemGroup:A.Z,VListItemIcon:T.Z,VListItemTitle:$.V9,VNavigationDrawer:_.Z});var S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.show?a("main",{staticClass:"banner elevation-12",on:{click:function(t){e.show=!1}}},[a("header",[e._v("Instale esse App no seu ceular")]),"ios"==e.device.name?[a("div",[e._v(" Toque em "),a("v-icon",[e._v("ios_share")]),e._v(" e depois em ")],1),a("div",{staticClass:"ios"},[e._v(" Adicionar à Tela de Início "),a("span")])]:e._e(),"android"==e.device.name?[a("div",[e._v(" Toque em "),a("v-icon",[e._v("more_vert")]),e._v("e depois em ")],1),a("div",[e._v("Adicionar à tela inicial")])]:e._e()],2):e._e()])},P=[];const V={name:"banner-install-pwa",computed:{device(){return o()}},data(){return{show:!1}},mounted(){this.device.isMobile&&!this.device.standalone&&(this.show=!0,setTimeout((()=>{this.show=!1}),1e4))}},I=V;var C=(0,m.Z)(I,S,P,!1,null,"c75b7fda",null);const O=C.exports;g()(C,{VIcon:y.Z});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.show?a("footer",{staticClass:"banner elevation-12"},[a("p",[e._v("Usamos cookies para melhorar sua experiência.")]),a("p",[e._v("Saiba mais em "),a("font",{on:{click:function(t){return e.$router.push("/privacy-policy")}}},[e._v(e._s(e.link()))])],1),a("v-btn",{attrs:{color:"accent"},on:{click:e.accept}},[a("v-icon",[e._v("check")]),e._v("Aceitar")],1)],1):e._e()])},E=[];const B={name:"banner-cookies-warning",data(){return{show:!localStorage.getItem("cookiesPolicyAccepted")}},methods:{accept(){localStorage.setItem("cookiesPolicyAccepted","true"),this.show=!1},link(){return`${location.host}/privacy-policy`}}},N=B;var D=(0,m.Z)(N,L,E,!1,null,"c2bad660",null);const F=D.exports;g()(D,{VBtn:b.Z,VIcon:y.Z});const M={components:{toolbar:Z,bannerInstallPwa:O,bannerCookiesWarning:F},computed:{alert:{get(){return this.$store.state.alert},set(e){return this.$store.commit("setAlert",e)}},updateAvailable:{get(){return this.$store.state.updateAvailable},set(e){this.$store.commit("setUpdateAvailable",!1)}},offline:{get(){return this.$store.state.offline},set(e){this.$store.commit("setOffline",e)}},audio:{get(){return this.$store.state.audio},set(e){return this.$store.commit("setAudio",e)}},alertData(){return this.$store.state.alertData},authenticated(){return this.$store.state.authenticated}},data(){return{player:new Audio("/ding.mp3"),audioAuthorized:!1}},mounted(){this.refreshPageSize(),this.refreshTheme(),this.setupTrainings(),document.onclick=()=>{this.audioAuthorized||(this.player.currentTime=3,this.player.muted=!0,this.player.play(),this.audioAuthorized=!0)},window.onresize=()=>{this.refreshPageSize()},window.ononline=()=>{this.offline&&(this.$sync.refreshTrainings(),this.offline=!1)},window.onoffline=()=>{this.offline=!0},this.authenticated&&this.$auth.attempt(),this.$route.query.shared_training&&this.$router.push({path:"/training",query:{shared_training:this.$route.query.shared_training}})},methods:{updateApp(){location.reload(!0)},refreshTheme(){document.body.style.setProperty("background-color",this.$vuetify.theme.dark?"#121212":"#ffffff")},refreshPageSize(){document.body.style.setProperty("--vh",`${o().standalone?window.outerHeight:window.innerHeight}px`),this.$root.$emit("resize")},setupTrainings(){this.int=setInterval((()=>{window.Vue&&(this.$sync.refreshTrainings(),clearInterval(this.int),this.int=void 0)}),100)}},watch:{audio:function(e){"play"==e&&(this.player.currentTime=0,this.player.muted=!1,this.player.play(),setTimeout((()=>{this.audio=null}),100))}}},j=M;var R=a(3167),q=a(8766),z=(0,m.Z)(j,i,r,!1,null,"77fd2a38",null);const J=z.exports;g()(z,{VApp:R.Z,VBtn:b.Z,VIcon:y.Z,VSnackbar:q.Z});var U=a(3130),H=a(2809),G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",[e.categories.length&&!e.trainings.length?a("figure",[a("img",{attrs:{src:"/img/"+e.imgId+".png",alt:"Pessoa se exercitando",width:"300",height:"auto"}}),a("figcaption",[a("h1",[e._v("Ainda sem treinos")]),a("h2",[e._v("Adicione clicando no +")])])]):a("section",e._l(e.trainings,(function(t,n){return a("v-card",{key:n},[a("v-card-title",[a("span",[e._v(e._s(t.type))])]),a("v-card-text",[e.categories.length?e._l(t.exercises,(function(t,n){return a("p",{key:n},[a("span",[e._v(e._s(e.categoryName(t.categoryId)))]),a("span",[e._v(e._s(e.exerciseName(t.categoryId,t.exerciseId)))])])})):[a("v-skeleton-loader",{attrs:{type:"list-item-three-line"}})]],2),e.categories.length?a("v-card-actions",[a("v-btn",{attrs:{icon:"",title:"Editar"},on:{click:function(a){return e.openTraining("edit",t)}}},[a("v-icon",[e._v("edit")])],1),a("v-btn",{attrs:{icon:"",title:"Compartilhar"},on:{click:function(a){return e.shareMyTraining(t)}}},[a("v-icon",[e._v("share")])],1),a("v-btn",{attrs:{fab:"",small:"",title:"Começar"},on:{click:function(a){return e.openTraining("play",t)}}},[a("v-icon",[e._v("play_arrow")])],1)],1):e._e()],1)})),1),a("v-btn",{attrs:{fixed:"",bottom:"",right:"",fab:"",color:"accent",title:"Adicionar treino",loading:!e.categories.length},on:{click:e.newTraining}},[a("v-icon",[e._v("add")])],1)],1)},K=[];function W(e,t){return Math.floor(Math.random()*(t-e+1))+e}var Y=a(1609),Q=a(7083);const X={computed:{offline(){return this.$store.state.offline},authenticated(){return this.$store.state.authenticated},categories(){return Y.Z},trainings:{get(){return this.$store.state.trainings},set(e){this.$store.commit("setTrainings",e)}}},data(){return{imgId:W(0,6)}},methods:{categoryName(e){return this.categories.find((t=>t.id==e))?.name??null},exerciseName(e,t){return this.categories.find((t=>t.id==e))?.exercises.find((e=>e.id==t))?.name??null},newTraining(){this.$router.push("/training").catch((e=>{}))},openTraining(e,t){let a;a=t.id?t.id:t.type,this.$router.push(`/training/${a}/${e}`).catch((e=>{}))},shareMyTraining(e){(0,Q.Z)(e)}}},ee=X;var te=a(2371),ae=a(7118),ne=a(4768),ie=a(9559),re=(0,m.Z)(ee,G,K,!1,null,"e35ad71a",null);const oe=re.exports;g()(re,{VBtn:b.Z,VCard:te.Z,VCardActions:ae.h7,VCardText:ae.ZB,VCardTitle:ae.EB,VIcon:y.Z,VMain:ne.Z,VSkeletonLoader:ie.Z}),n.Z.use(H.Z);const se=()=>Promise.all([a.e(764),a.e(809),a.e(492),a.e(738),a.e(963)]).then(a.bind(a,4288)),ce=()=>Promise.all([a.e(225),a.e(68),a.e(700),a.e(133),a.e(18)]).then(a.bind(a,1018)),le=()=>a.e(659).then(a.bind(a,3659)),de=[{path:"/login/:provider?",name:"Login",component:se,meta:{elseAuth:!0}},{path:"/privacy-policy",name:"Privacy Policy",component:le},{path:"/training/:id?/:mode?",name:"Treino",component:ce,props:!0},{path:"/",name:"home",component:oe}],ue=new H.Z({mode:"hash",base:"/",routes:de});ue.beforeEach(((e,t,a)=>{const i=e.matched.some((e=>e.meta.ifAuth)),r=e.matched.some((e=>e.meta.elseAuth));i&&!n.Z.$auth.authenticated?a("/login"):r&&n.Z.$auth.authenticated?a("/"):a()})),n.Z.use(U.ZP,{appName:"Academinha",pageTrackerScreenviewEnabled:!0,pageTrackerExcludedRotues:["/privacy-policy"],config:{id:"G-3LYC0SMM8J"}},ue);const he=ue;var me=a(4665);n.Z.use(me.ZP);const pe=new me.ZP.Store({state:{authenticated:!!localStorage.getItem("accessToken"),updateAvailable:!1,alert:!1,alertData:{},trainings:[],offline:!navigator.onLine,audio:null},mutations:{setAuthenticate(e,t){e.authenticated=t},setUpdateAvailable(e,t){e.updateAvailable=t},setAlert(e,t){e.alert=t},setAlertData(e,t){e.alertData=t},setTrainings(e,t){e.trainings=t},setOffline(e,t){e.offline=t},setAudio(e,t){e.audio=t}},actions:{openAlert({commit:e},t){if(t.text){e("setAlertData",t),e("setAlert",!0);try{navigator.vibrate(100)}catch(a){}}}}});var ge=a(8161),fe=a.n(ge),ve=a(9132);function be(){return"true"==localStorage.getItem("lightTheme")||"false"!=localStorage.getItem("lightTheme")&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches)}n.Z.use(ve.Z),n.Z.use(fe());const ye=new ve.Z({icons:{iconfont:"md"},theme:{dark:!be(),options:{customProperties:!0},themes:{light:{primary:"#ff7e00",secondary:"#ffcc00",accent:"#966fd6",error:"#ff4040",info:"#1e90ff",success:"#3cd070",warning:"#ffcc33"},dark:{primary:"#ff7e00",secondary:"#ffcc00",accent:"#966fd6",error:"#ff4040",info:"#1e90ff",success:"#3cd070",warning:"#ffcc33"}}}});var we=a(7256),ke=a.n(we);n.Z.use(ke());const Ae=new(ke())([{version:1,database:"academinha",schemas:[{trainings:"&type"}]}]),Te=Ae;var $e=a(563);(0,$e.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){window.Vue.$store.commit("setUpdateAvailable",!0),console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var _e=a(6166),xe=a.n(_e);xe().defaults.baseURL="https://us-central1-academinha-beb1f.cloudfunctions.net/api",xe().defaults.headers.common={Accept:"application/json"};const Ze=xe().create({});Ze.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),Ze.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=Ze,window.axios=Ze,Object.defineProperties(e.prototype,{axios:{get(){return Ze}},$axios:{get(){return Ze}}})},n.Z.use(Plugin);Plugin;class Se{get authenticated(){return!!localStorage.getItem("accessToken")}attempt(){if(!navigator.onLine)return!1;n.Z.axios.get("/auth/check",{headers:this.headers}).catch((()=>{this.deauthenticate()}))}authenticate(e){localStorage.setItem("accessToken",e.token),delete e.token,localStorage.setItem("user",JSON.stringify(e.user)),window.Vue.$store.commit("setAuthenticate",!0),window.Vue.$router.push("/").catch((e=>{})),window.Vue.$sync.syncTrainings()}deauthenticate(){window.Vue.$store.commit("setAuthenticate",!1),localStorage.removeItem("accessToken"),localStorage.removeItem("user"),window.Vue.$router.push("/").catch((e=>{})),window.Vue.$sync.unlinkTrainings()}get user(){return JSON.parse(localStorage.getItem("user")??"{}")}get headers(){let e={};return localStorage.getItem("accessToken")&&(e["Authorization"]=`Bearer ${localStorage.getItem("accessToken")}`),e}}const Pe=new Se;Se.install=function(e,t){e.$auth=Pe,Object.defineProperty(e.prototype,"$auth",{get(){return Pe}})},n.Z.use(Se);class Ve{refreshTrainings(){window.Vue.$db.trainings.toArray().then((e=>{window.Vue.$store.commit("setTrainings",e)})).finally((()=>{this.syncTrainings()}))}syncTrainings(){if(n.Z.$auth.authenticated&&navigator.onLine)return n.Z.axios.get("/trainings",{headers:n.Z.$auth.headers}).then((e=>{let t=window.Vue.$store.state.trainings.slice();if(200!=e.status)return this.sendTrainings(t,!0);let a=JSON.parse(localStorage.getItem("trainingsToDelete")||"[]");a.length&&e.data.filter((e=>a.includes(e.id))).length&&a.forEach((t=>{let a=e.data.find((e=>e.id==t));this.deleteTraining(a,!0)}),this);let n=[],i=[],r=[];e.data.forEach((e=>{let a=t.find((t=>t.type==e.type));(!a||e.updatedAt&&a.updatedAt&&e.updatedAt>=a.updatedAt||e.updatedAt&&!a.updatedAt)&&r.push(e)}),this),t.forEach((t=>{let a=e.data.find((e=>e.type==t.type));(!a||t.updatedAt&&a.updatedAt&&t.updatedAt>a.updatedAt||t.updatedAt&&!a.updatedAt)&&(!t.id&&a?.id&&(t.id=a.id),t.id?i.push(t):n.push(t))}),this);let o=[];n.length&&o.push(this.sendTrainings(n)),i.length&&o.push(this.updateTrainings(i)),r.length&&o.push(window.Vue.$db.trainings.bulkPut(r)),Promise.all(o).finally((()=>this.refreshLocalTrainings()))}))}sendTrainings(e,t=!1){if(e.length){for(let t in e)e[t].updatedAt=Date.now();return n.Z.$auth.authenticated&&navigator.onLine?n.Z.axios.post("/trainings",e,{headers:n.Z.$auth.headers}).then((e=>window.Vue.$db.trainings.bulkPut(e.data).finally((()=>this.refreshLocalTrainings())))):t?void 0:(this.clearLocalTrainings(e),window.Vue.$db.trainings.bulkPut(e).finally((()=>this.refreshLocalTrainings())))}}updateTrainings(e){e.length&&e.forEach((e=>{this.updateTraining(e,!0)}),this)}updateTraining(e,t=!1){return e.updatedAt=Date.now(),n.Z.$auth.authenticated&&navigator.onLine?n.Z.axios.put(`/trainings/${e.id}`,e,{headers:n.Z.$auth.headers}).then((e=>window.Vue.$db.trainings.put(e.data).finally((()=>this.refreshLocalTrainings())))):t?void 0:(this.clearLocalTrainings([e]),window.Vue.$db.trainings.put(e).finally((()=>this.refreshLocalTrainings())))}deleteTraining(e,t=!1){if(n.Z.$auth.authenticated&&navigator.onLine)return n.Z.axios["delete"](`/trainings/${e.id}`,{headers:n.Z.$auth.headers}).then((()=>window.Vue.$db.trainings.delete(e.type).finally((()=>{let t=JSON.parse(localStorage.getItem("trainingsToDelete")||"[]");if(t.length){let a=t.indexOf(e);t.splice(a,1),t.length?localStorage.setItem("trainingsToDelete",JSON.stringify(t)):localStorage.removeItem("trainingsToDelete")}return this.refreshLocalTrainings()}))));if(!t){if(e.id){let t=JSON.parse(localStorage.getItem("trainingsToDelete")||"[]");t.includes(e.id)||t.push(e.id),localStorage.setItem("trainingsToDelete",JSON.stringify(t))}return window.Vue.$db.trainings.delete(e.type).finally((()=>this.refreshLocalTrainings()))}}refreshLocalTrainings(){return window.Vue.$db.trainings.toArray().then((e=>{window.Vue.$store.commit("setTrainings",e)}))}unlinkTrainings(){return window.Vue.$db.trainings.toArray().then((e=>{this.clearLocalTrainings(e),window.Vue.$db.trainings.bulkPut(e).finally((()=>{window.Vue.$store.commit("setTrainings",e)}))}))}clearLocalTrainings(e){if(!n.Z.$auth.authenticated)for(let t in e)delete e[t].id,delete e[t].userId}}const Ie=new Ve;Ve.install=function(e,t){e.$sync=Ie,Object.defineProperty(e.prototype,"$sync",{get(){return Ie}})},n.Z.use(Ve);n.Z.config.productionTip=!1,n.Z.config.devtools=!1;const Ce=new n.Z({router:he,store:pe,vuetify:ye,idb:Te,render:e=>e(J)}).$mount("#app");window.Vue=Ce}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,(()=>{var e=[];a.O=(t,n,i,r)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){for(var[n,i,r]=e[d],s=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(a.O).every((e=>a.O[e](n[c])))?n.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,i,r]}})(),(()=>{a.F={},a.E=e=>{Object.keys(a.F).map((t=>{a.F[t](e)}))}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{18:"de8c1385",68:"63b6f11c",133:"693fc065",225:"17531bfb",492:"f2f17266",659:"7dd7a97e",700:"994f7af7",738:"37b4adbb",764:"3ac18f3b",809:"e2832e2c",963:"e41056a8"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{18:"f04c033c",659:"cf81b9b4",963:"5ff29ba1"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="Academinha:";a.l=(n,i,r,o)=>{if(e[n])e[n].push(i);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[i];var h=(t,a)=>{s.onerror=s.onload=null,clearTimeout(m);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(a))),t)return t(a)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{a.p="/"})(),(()=>{var e=(e,t,a,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=r=>{if(i.onerror=i.onload=null,"load"===r.type)a();else{var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=s,i.parentNode.removeChild(i),n(c)}};return i.onerror=i.onload=r,i.href=t,document.head.appendChild(i),i},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var i=a[n],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){i=o[n],r=i.getAttribute("data-href");if(r===e||r===t)return i}},n=n=>new Promise(((i,r)=>{var o=a.miniCssF(n),s=a.p+o;if(t(o,s))return i();e(n,s,i,r)})),i={143:0};a.f.miniCss=(e,t)=>{var a={18:1,659:1,963:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=n(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}})(),(()=>{var e={143:0,283:0};a.f.j=(t,n)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else if(/^(28|96)3$/.test(t))e[t]=0;else{var r=new Promise(((a,n)=>i=e[t]=[a,n]));n.push(i[2]=r);var o=a.p+a.u(t),s=new Error,c=n=>{if(a.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,i[1](s)}};a.l(o,c,"chunk-"+t,t)}},a.F.j=t=>{if((!a.o(e,t)||void 0===e[t])&&!/^(28|96)3$/.test(t)){e[t]=null;var n=document.createElement("link");a.nc&&n.setAttribute("nonce",a.nc),n.rel="prefetch",n.as="script",n.href=a.p+a.u(t),document.head.appendChild(n)}},a.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[o,s,c]=n,l=0;if(o.some((t=>0!==e[t]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(c)var d=c(a)}for(t&&t(n);l<o.length;l++)r=o[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=globalThis["webpackChunkAcademinha"]=globalThis["webpackChunkAcademinha"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{a.O(0,[143],(()=>{[764,809,492,738,963,225,68,700,133,18,659].map(a.E)}),5)})();var n=a.O(void 0,[772,840,762,184,602,352,999,274,611,125,283,797],(()=>a(2568)));n=a.O(n)})();