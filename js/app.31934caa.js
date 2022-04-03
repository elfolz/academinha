(()=>{"use strict";var e={4478:(e,t,i)=>{i(7727);var a=i(144),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-snackbar",{attrs:{bottom:"",light:!e.$vuetify.theme.dark,timeout:5e3,color:e.alertData.color||null},nativeOn:{click:function(t){e.alert=!1}},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[i("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",a,!1),[i("v-icon",[e._v("clear")])],1)]}}]),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(e.alertData.text)+" ")]),i("v-snackbar",{attrs:{top:"",light:!e.$vuetify.theme.dark,timeout:1e4,color:"primary"},nativeOn:{click:function(t){return e.updateApp.apply(null,arguments)}},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[i("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",a,!1),[i("v-icon",[e._v("cached")])],1)]}}]),model:{value:e.updateAvailable,callback:function(t){e.updateAvailable=t},expression:"updateAvailable"}},[e._v(" Atualização disponível  ")]),i("router-view")],1)},r=[];const o={computed:{alert:{get(){return this.$store.state.alert},set(e){return this.$store.commit("setAlert",e)}},updateAvailable:{get(){return this.$store.state.updateAvailable},set(e){this.$store.commit("setUpdateAvailable",!1)}},alertData:function(){return this.$store.state.alertData}},created(){this.refreshWindowSize()},mounted(){window.addEventListener("resize",(()=>{this.$root.$emit("resize"),this.refreshWindowSize()}))},methods:{updateApp(){location.reload(!0)},refreshWindowSize(){document.documentElement.style.setProperty("--vh",`${window.innerHeight}px`)}}},s=o;var c=i(3736),l=i(3453),d=i.n(l),u=i(1095),m=i(1211),v=i(4786),h=i(1566),f=(0,c.Z)(s,n,r,!1,null,null,null);const g=f.exports;d()(f,{VApp:u.Z,VBtn:m.Z,VIcon:v.Z,VSnackbar:h.Z});var p=i(4903),x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-main",[e.emptyTrainings?i("figure",[i("img",{attrs:{src:"/img/"+e.imgId+".png"}}),i("figcaption",[i("h1",[e._v("Ainda sem treinos")]),i("h2",[e._v("Adicione clicando no +")])])]):i("section",e._l(e.trainings,(function(t,a){return i("v-card",{key:a},[i("v-card-title",[e._v(" "+e._s(e.wekDayName(t.day))+" ")]),i("v-card-text",e._l(t.exercises,(function(t,a){return i("p",{key:a},[i("span",[e._v(e._s(e.categoryName(t.categoryId)))]),i("span",[e._v(e._s(e.exerciseName(t.categoryId,t.exerciseId)))])])})),0),i("v-card-actions",[i("v-btn",{attrs:{icon:""}},[i("v-icon",[e._v("edit")])],1),i("v-btn",{attrs:{fab:"",small:""}},[i("v-icon",[e._v("play_arrow")])],1)],1)],1)})),1),i("v-btn",{attrs:{fixed:"",bottom:"",right:"",fab:"",color:"accent",title:"Adicionar treino"},on:{click:e.openDialogNewTraining}},[i("v-icon",[e._v("add")])],1),i("dialog-new-training",{ref:"dialogNewTraining",on:{close:e.refresh}})],1)},b=[];const y=[{id:0,name:"Domingos"},{id:1,name:"Segundas"},{id:2,name:"Terças"},{id:3,name:"Quartas"},{id:4,name:"Quintas"},{id:5,name:"Sextas"},{id:6,name:"Sábados"}],w=[{id:1,name:"Abdomen",exercises:[{id:1,name:"Superior"},{id:2,name:"Inferior"},{id:3,name:"Oblíquo"},{id:4,name:"Inclinação + Banco"},{id:5,name:"Abdomem Maq."},{id:6,name:"Lombar Isométrica"}]},{id:2,name:"Ante-braço",exercises:[{id:1,name:"Extensão de Punho"},{id:2,name:"Flexão de Punho"},{id:3,name:"Rosca Inversa"}]},{id:3,name:"Bíceps",exercises:[{id:1,name:"Rosca Direta"},{id:2,name:"Rosca Scoth"},{id:3,name:"Rosca Alternada"},{id:4,name:"Rosca Concentrada"},{id:5,name:"Rosca Martelo"}]},{id:4,name:"Dorso",exercises:[{id:1,name:"Peck Deck"},{id:2,name:"Pulley Costas"},{id:3,name:"Pulley Frente"},{id:4,name:"Remada Baixa"},{id:5,name:"Remada Uni"},{id:6,name:"Cavalinho"},{id:6,name:"Lombares"},{id:6,name:"Barra Fixa"},{id:6,name:"Pull Down"}]},{id:5,name:"Membros Inferiores",exercises:[{id:1,name:"Agachamento"},{id:2,name:"Avenço"},{id:3,name:"Leg Press"},{id:4,name:"Stiff"},{id:5,name:"Cadeira Flexora"},{id:6,name:"Cadeira Extensora"},{id:7,name:"Mesa Flexora"},{id:8,name:"Hack Machine"},{id:9,name:"Adução"},{id:10,name:"Abdução"},{id:11,name:"Glúteos"},{id:12,name:"Panturrilha"},{id:13,name:"Sóleo"},{id:14,name:"Flexão Tibial"}]},{id:6,name:"Peitorais",exercises:[{id:1,name:"Supino"},{id:2,name:"Supino Inclinado"},{id:3,name:"Supino Declinado"},{id:4,name:"Crucifixo"},{id:5,name:"Crucifixo Inclinado"},{id:6,name:"Pull Over"},{id:7,name:"Flexão Braço"},{id:8,name:"Fly"},{id:9,name:"Cross Over"},{id:10,name:"Peck Deck"}]},{id:7,name:"Ombros",exercises:[{id:1,name:"Elevação Lateral"},{id:2,name:"Elevação Anterior"},{id:3,name:"Remada Alta"},{id:4,name:"Crucifixo Inverso"},{id:5,name:"Arnold"},{id:6,name:"Encolhimento"}]},{id:8,name:"Tríceps",exercises:[{id:1,name:"Triceps Pulley"},{id:2,name:"Triceps Francês"},{id:3,name:"Triceps Testa"},{id:4,name:"Triceps Banco"},{id:5,name:"Triceps Supino"},{id:6,name:"Pacalela"},{id:7,name:"Coice"}]}];function k(e,t){return Math.floor(Math.random()*(t-e+1))+e}var A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{persistent:"","content-class":"dialog-new-training"},model:{value:e.dialogNewTraining,callback:function(t){e.dialogNewTraining=t},expression:"dialogNewTraining"}},[i("v-form",{ref:"form"},[i("v-card",[i("v-card-title",[e._v("Novo Treino")]),i("v-card-text",[i("v-select",{attrs:{multiple:"",chips:"","hide-details":"",items:e.weekDays,"item-text":"name","item-value":"id",label:"Dias da semana",rules:e.daysRules},model:{value:e.days,callback:function(t){e.days=t},expression:"days"}}),i("section",e._l(e.exercises,(function(t,a){return i("article",{key:a},[i("header",[i("v-select",{attrs:{"hide-details":"",items:e.categories,"item-text":"name","item-value":"id",label:"Região",rules:e.categoryRules},on:{input:function(t){return e.refreshExercises(a)}},model:{value:e.exercises[a].categoryId,callback:function(t){e.$set(e.exercises[a],"categoryId",t)},expression:"exercises[i].categoryId"}}),i("v-select",{attrs:{"hide-details":"",items:e.categoryExercises(e.exercises[a].categoryId),"item-text":"name","item-value":"id",label:"Exercício",rules:e.exerciseRules,disabled:!e.exercises[a].categoryId},model:{value:e.exercises[a].exerciseId,callback:function(t){e.$set(e.exercises[a],"exerciseId",t)},expression:"exercises[i].exerciseId"}})],1),i("footer",[i("v-text-field",{attrs:{"hide-details":"",label:"Séries",type:"number",rules:e.serieRules,disabled:!e.exercises[a].categoryId},model:{value:e.exercises[a].series,callback:function(t){e.$set(e.exercises[a],"series",t)},expression:"exercises[i].series"}}),i("v-text-field",{attrs:{"hide-details":"",label:"Repetições",type:"number",rules:e.repetitionRules,disabled:!e.exercises[a].categoryId},model:{value:e.exercises[a].repetitions,callback:function(t){e.$set(e.exercises[a],"repetitions",t)},expression:"exercises[i].repetitions"}}),i("v-text-field",{attrs:{"hide-details":"",label:"Peso",type:"number",disabled:!e.exercises[a].categoryId,suffix:"Kg"},model:{value:e.exercises[a].weigth,callback:function(t){e.$set(e.exercises[a],"weigth",t)},expression:"exercises[i].weigth"}})],1),i("v-btn",{attrs:{icon:"",absolute:""},on:{click:function(t){return e.confirmDeleteExercise(a)}}},[i("v-icon",[e._v("delete")])],1)],1)})),0),i("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.addExercise}},[i("v-icon",[e._v("add")]),e._v(" Adicionar Exercício")],1)],1),i("v-card-actions",[i("v-btn",{attrs:{text:""},on:{click:e.close}},[i("v-icon",[e._v("clear")]),e._v(" Fechar")],1),i("v-btn",{attrs:{color:"accent"},on:{click:e.save}},[i("v-icon",[e._v("save")]),e._v(" Salvar")],1)],1)],1)],1),i("confirmation-dialog",{ref:"confirmUnblockDialog",on:{confirm:e.deleteExercise}})],1)},_=[],T=(i(3948),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-bottom-sheet",{attrs:{"content-class":"dialog-confirm"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[i("p",{domProps:{innerHTML:e._s(e.message)}}),i("footer",[i("v-btn",{attrs:{text:""},on:{click:e.cancel}},[i("v-icon",[e._v("clear")]),e._v(" Não ")],1),i("v-btn",{attrs:{text:""},on:{click:e.confirm}},[i("v-icon",[e._v("check")]),e._v(" Sim ")],1)],1)])}),$=[];const E={name:"confirmation-dialog",data(){return{message:null,show:!1}},methods:{open(e){this.message=e,this.show=!0},confirm(){this.$emit("confirm",!0),this.show=!1},cancel(){this.$emit("cancel",!0),this.show=!1}}},I=E;var Z=i(9455),S=(0,c.Z)(I,T,$,!1,null,"990ef910",null);const P=S.exports;d()(S,{VBottomSheet:Z.Z,VBtn:m.Z,VIcon:v.Z});const D={name:"dialog-new-training",components:{confirmationDialog:P},data(){return{days:[],exercises:[],dialogNewTraining:!1,pendingDeleteExercise:null,weekDays:y,categories:w,daysRules:[e=>e.length>0||"Escolha os dias do seu treino"],categoryRules:[e=>!!e||"Escolha uma Região"],exerciseRules:[e=>!!e||"Escolha um Exercício"],serieRules:[e=>!!e||"Escolha uma Série"],repetitionRules:[e=>!!e||"Escolha uma Repetição"]}},methods:{open(){this.dialogNewTraining=!0},addExercise(){this.exercises.push({categoryId:null,exerciseId:null,series:3,repetitions:12,weigth:null})},refreshExercises(e){this.exercises[e].exerciseId=null},categoryExercises(e){var t,i;return null!==(t=null===(i=this.categories.find((t=>t.id==e)))||void 0===i?void 0:i.exercises)&&void 0!==t?t:[]},confirmDeleteExercise(e){var t,i;this.pendingDeleteExercise=e;let a=this.exercises[e].categoryId,n=this.categories.find((e=>e.id==a)),r=this.exercises[e].exerciseId,o=n?n.exercises.find((e=>e.id==r)):null,s=`${null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:""}${o?` - ${null!==(i=null===o||void 0===o?void 0:o.name)&&void 0!==i?i:""}`:""}`;this.$refs.confirmUnblockDialog.open(`Deletar o exercício <strong>${s}</strong>?`)},deleteExercise(){this.exercises.splice(this.pendingDeleteExercise,1)},save(){let e;if(this.exercises.length||(e="Adicione exercícios ao seu treino!"),this.$refs.form.validate()||(e="Há campos incorretos!"),e)return this.$store.dispatch("openAlert",{text:e,color:"warning"});let t=[],i=[];this.days.forEach((e=>{i.push(this.$db.trainings.delete(e)),t.push({day:e,exercises:this.exercises})}),this),Promise.all(i).finally((()=>{this.$db.trainings.bulkPut(t).then((()=>{this.$store.dispatch("openAlert",{text:"Treino salvo com sucesso!",color:"success"}),this.close()})).catch((e=>{this.$store.dispatch("openAlert",{text:"Erro ao salvar! Tente novamente.",color:"error"}),console.log(e)}))}))},close(){this.dialogNewTraining=!1,this.$emit("close")}}},V=D;var R=i(5893),N=i(5255),O=i(1765),C=i(3240),B=i(6189),F=i(607),j=(0,c.Z)(V,A,_,!1,null,"1f3e6f3c",null);const M=j.exports;d()(j,{VBtn:m.Z,VCard:R.Z,VCardActions:N.h7,VCardText:N.ZB,VCardTitle:N.EB,VDialog:O.Z,VForm:C.Z,VIcon:v.Z,VSelect:B.Z,VTextField:F.Z});const U={components:{dialogNewTraining:M},data(){return{emptyTrainings:!1,trainings:[],imgId:k(0,6)}},mounted(){this.refresh()},methods:{refresh(){this.$db.trainings.toArray().then((e=>{e.length?(this.trainings=e.map((e=>(e.exercises=e.exercises.sort(((e,t)=>e.categoryId-t.categoryId)),e))),this.emptyTrainings=!1):this.emptyTrainings=!0}))},wekDayName(e){var t,i;return null!==(t=null===(i=y.find((t=>t.id==e)))||void 0===i?void 0:i.name)&&void 0!==t?t:null},categoryName(e){var t,i;return null!==(t=null===(i=w.find((t=>t.id==e)))||void 0===i?void 0:i.name)&&void 0!==t?t:null},exerciseName(e,t){var i,a,n;return null!==(i=null===(a=w.find((t=>t.id==e)))||void 0===a||null===(n=a.exercises.find((e=>e.id==t)))||void 0===n?void 0:n.name)&&void 0!==i?i:null},openDialogNewTraining(){this.$refs.dialogNewTraining.open()}}},z=U;var L=i(5091),H=(0,c.Z)(z,x,b,!1,null,"639c3e18",null);const q=H.exports;d()(H,{VBtn:m.Z,VCard:R.Z,VCardActions:N.h7,VCardText:N.ZB,VCardTitle:N.EB,VIcon:v.Z,VMain:L.Z}),a.Z.use(p.Z);const W=[{path:"/",name:"home",component:q}],Q=new p.Z({mode:"history",base:"/",routes:W});Q.beforeEach(((e,t,i)=>{const n=e.matched.some((e=>e.meta.ifAuth)),r=e.matched.some((e=>e.meta.elseAuth));n&&!a.Z.$auth.authenticated?i("/login"):r&&a.Z.$auth.authenticated?i("/"):i()}));const G=Q;var K=i(629);a.Z.use(K.ZP);const J=new K.ZP.Store({state:{updateAvailable:!1,alert:!1,alertData:{}},mutations:{setUpdateAvailable(e,t){e.updateAvailable=t},setAlert(e,t){e.alert=t},setAlertData(e,t){e.alertData=t}},actions:{openAlert({commit:e},t){if(t.text){e("setAlertData",t),e("setAlert",!0);try{navigator.vibrate(100)}catch(i){}}}}});var X=i(5121);function Y(){return"true"==localStorage.getItem("lightTheme")||"false"!=localStorage.getItem("lightTheme")&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches)}a.Z.use(X.Z);const ee=new X.Z({icons:{iconfont:"md"},theme:{dark:!Y(),options:{customProperties:!0},themes:{light:{primary:"#ff7e00",secondary:"#ffcc00",accent:"#966fd6",error:"#ff4040",info:"#8ab9f1",success:"#3cd070",warning:"#ffdb58"},dark:{primary:"#ff7e00",secondary:"#ffcc00",accent:"#966fd6",error:"#ff4040",info:"#8ab9f1",success:"#3cd070",warning:"#ffdb58"}}}});var te=i(6606),ie=i.n(te);a.Z.use(ie());const ae=new(ie())([{version:1,database:"academinha",schemas:[{trainings:"&day"}]}]),ne=ae;var re=i(5205);(0,re.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){window.Vue.$store.commit("setUpdateAvailable",!0),console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var oe=i(9669),se=i.n(oe);se().defaults.baseURL=`${{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_HOST}/api`,se().defaults.headers.common={Accept:"application/json"};const ce=se().create({});ce.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),ce.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=ce,window.axios=ce,Object.defineProperties(e.prototype,{axios:{get(){return ce}},$axios:{get(){return ce}}})},a.Z.use(Plugin);Plugin;class le{get authenticated(){return!!localStorage.getItem("accessToken")}get headers(){let e={};return localStorage.getItem("accessToken")&&(e["Authorization"]=`Bearer ${localStorage.getItem("accessToken")}`),e}}const de=new le;le.install=function(e,t){e.$auth=de,Object.defineProperty(e.prototype,"$auth",{get(){return de}})},a.Z.use(le);a.Z.config.productionTip=!1,a.Z.config.devtools=!1;const ue=new a.Z({router:G,store:J,vuetify:ee,idb:ne,render:e=>e(g)}).$mount("#app");window.Vue=ue}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=e,(()=>{var e=[];i.O=(t,a,n,r)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,n,r]=e[d],s=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(i.O).every((e=>i.O[e](a[c])))?a.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,n,r]}})(),(()=>{i.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return i.d(t,{a:t}),t}})(),(()=>{i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{var e={143:0,283:0};i.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[o,s,c]=a,l=0;if(o.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)var d=c(i)}for(t&&t(a);l<o.length;l++)r=o[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},a=self["webpackChunkAcademinha"]=self["webpackChunkAcademinha"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=i.O(void 0,[772,840,13,141,602,727,611,86,125,283,761],(()=>i(4478)));a=i.O(a)})();