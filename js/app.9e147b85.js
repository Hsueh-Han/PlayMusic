(function(t){function a(a){for(var s,n,o=a[0],c=a[1],l=a[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(p.length)p.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==i[c]&&(s=!1)}s&&(r.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},r=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var d=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"20db":function(t,a,e){"use strict";e("aa20")},"3ea9":function(t,a,e){"use strict";e("6281")},4131:function(t,a,e){"use strict";e("a930")},"458f":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=e("bc3a"),r=e.n(i),n=e("2106"),o=e.n(n),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("play-music")],1)},l=[],d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container-fluid bg-light"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-7 bg-gradient vh-100 py-3"},[e("router-view",{attrs:{data:t.musicData},on:{getSinger:t.getSingerId}})],1)])])])},u=[],p=e("b383"),h=e.n(p),f={data:function(){return{musicData:{token:"",singerId:""}}},methods:{getToken:function(){var t=this,a={headers:{Accept:"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded"}},e={grant_type:"client_credentials",client_id:"4a9f45b8b1cc2e68f4c1b028e49a3ac2",client_secret:"2a895f33db011f141d8fc5f36b82b905"},s="https://cors-anywhere.herokuapp.com/".concat("https://account.kkbox.com/oauth2/token");this.$http.post(s,h.a.stringify(e),a).then((function(a){t.musicData.token=a.data.access_token}))},getSingerId:function(t){this.musicData.singerId=t}},created:function(){this.getToken()}},m=f,g=(e("f69f"),e("2877")),v=Object(g["a"])(m,d,u,!1,null,null,null),b=v.exports,y={name:"App",components:{playMusic:b}},_=y,k=(e("5c0b"),Object(g["a"])(_,c,l,!1,null,null,null)),w=k.exports,x=e("8c4f"),C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column justify-content-center h-100"},[e("statement",[e("template",{slot:"title"},[t._v("Announcement")]),e("template",{slot:"content"},[e("p",[t._v("一、本專案僅提供個人開發成品展示，不提供轉載使用於任何商業及非符合規範之用途。")]),e("p",[t._v("二、本專案內容使用 KKBOX Open API，資料來源： "),e("a",{attrs:{target:"_blank",href:"https://docs-zhtw.kkbox.codes/#overview"}},[t._v("KKBOX")]),e("span",[t._v("。")])]),e("p",[t._v("三、如需更多音樂體驗相關服務，請至 "),e("a",{attrs:{target:"_blank",href:"https://www.kkbox.com/tw/tc/"}},[t._v("KKBOX 官方")]),e("span",[t._v("。")])]),e("p",[t._v("四、進入準備介面後，請詳閱說明內容。")]),e("hr"),e("small",{staticClass:"d-block"},[t._v("開發者："),e("em",[t._v("Hsueh")])]),e("small",{staticClass:"d-block"},[t._v("e-mail："),e("em",[t._v("cookie5year@gmail.com")])])])],2),t._m(0),e("button",{staticClass:"btn btn-outline-danger btn-lg w-50 mx-auto",attrs:{type:"button",disabled:!t.data.token},on:{click:t.goGuide}},[t.data.token?t._e():e("span",[e("i",{staticClass:"fas fa-circle-notch fa-spin mr-2"}),t._v("Loading")]),t.data.token?e("span",[t._v("PLAY !")]):t._e()])],1)},S=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"text-center text-white position-relative mb-5"},[t._v(" Jesus ! What is this song ! "),e("i",{staticClass:"fas fa-music"}),e("p",{staticClass:"text-white text-beat"},[t._v("Jesus ! What is this song ! "),e("i",{staticClass:"fas fa-music"})])])}],A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"modal fade",attrs:{id:"staticBackdrop","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header bg-dark"},[e("h5",{staticClass:"modal-title text-white",attrs:{id:"staticBackdropLabel"}},[t._t("title")],2)]),e("div",{staticClass:"modal-body"},[t._t("content")],2),e("div",{staticClass:"modal-footer"},[t._t("showStatus"),e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("OK!")])],2)])])])])},O=[],B=e("1157"),M=e.n(B),N={props:["modalHide"],data:function(){return{isHide:this.modalHide||""}},mounted:function(){var t=this.isHide?"hide":"show";M()("#staticBackdrop").modal(t)}},D=N,U=Object(g["a"])(D,A,O,!1,null,null,null),H=U.exports,$={name:"index",props:["data"],components:{statement:H},data:function(){return{}},methods:{goGuide:function(){this.$router.push("/guide")}}},j=$,T=(e("20db"),Object(g["a"])(j,C,S,!1,null,"2ca41fdd",null)),I=T.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column justify-content-between h-100"},[e("div",{staticClass:"text-right"},[e("router-link",{staticClass:"text-light mr-3",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-home"})])],1),e("statement",{attrs:{modalHide:t.isModalHide}},[e("template",{slot:"title"},[t._v("Game rule description")]),e("template",{slot:"content"},[e("p",[t._v("1. 歡迎您 ! 這是一個猜歌遊戲 !")]),e("p",[t._v("2. 為確保音樂題庫的多樣性及良好遊戲體驗，"),e("br"),t._v(" 稍後請先選擇一位您"),e("span",{staticClass:"text-danger"},[t._v(" 最喜歡 ")]),t._v(" 或"),e("span",{staticClass:"text-danger"},[t._v(" 最常聽 ")]),t._v("他作品的「歌手」。")]),e("p",[t._v("3. 接著，透過 "),e("a",{attrs:{target:"_blank",href:"https://docs-zhtw.kkbox.codes/#overview"}},[t._v("KKBOX Open API")]),t._v(" 會找出與您選定歌手相似的其他歌手，並且從這些歌手們的作品中組合出一份隨機題庫(十題)。 ")]),e("p",[t._v("4. "),e("span",{staticClass:"text-danger"},[t._v("注意 ! 您選定的歌手並不會影響他的歌曲在題庫中出現的次數")]),t._v("，而是決定這份題庫中所出現其他歌手的相似度。 ")]),e("p",[t._v("5. 遊戲一共有十道選擇題，答題選項共有 6 項，作答時間不拘。如果想即時中斷程序，可使用右上角返回按鈕哦 ! ")]),e("p",[t._v("6. 目前播放器自動播放功能暫不支援手機瀏覽器，請移至 PC 網頁並且在最佳網路環境中運行此網頁，以確保您的使用體驗 ! ")]),e("hr"),e("small",[t._v("注意事項："),e("br"),t._v("如果您選定的歌手，無法透過 "),e("a",{attrs:{target:"_blank",href:"https://docs-zhtw.kkbox.codes/#overview"}},[t._v("KKBOX")]),t._v(" 資料庫中組合出足夠數量的題庫時 "),e("br"),t._v("(即特色相近、性質類似的歌手不足之情況) 系統將會返回步驟，要求更換歌手選項! ")])]),e("template",{slot:"showStatus"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isModalHide,expression:"isModalHide"}],attrs:{type:"checkbox",id:"status"},domProps:{checked:Array.isArray(t.isModalHide)?t._i(t.isModalHide,null)>-1:t.isModalHide},on:{change:function(a){var e=t.isModalHide,s=a.target,i=!!s.checked;if(Array.isArray(e)){var r=null,n=t._i(e,r);s.checked?n<0&&(t.isModalHide=e.concat([r])):n>-1&&(t.isModalHide=e.slice(0,n).concat(e.slice(n+1)))}else t.isModalHide=i}}}),e("label",{staticClass:"text-secondary",attrs:{for:"status"}},[t._v("暫時不再顯示")])])],2),t._m(0),e("div",{staticClass:"bg-light container-xl py-3 overflow-auto h-75"},[t.historyData.length>0?e("div",[e("div",{staticClass:"btn-group"},[e("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[e("button",{staticClass:"btn btn-outline-info dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[t._v(" Search history ")]),e("div",{staticClass:"dropdown-menu p-0"},[e("button",{staticClass:"btn btn-sm text-danger",on:{click:t.removeHistory}},[t._v("Clear All Search history")])])])]),e("hr"),e("div",t._l(t.historyData,(function(a,s){return e("div",{key:s,staticClass:"d-inline-block",class:{"pickup-bg":t.pickUpSinger.id===a.id},staticStyle:{padding:"3px"}},[e("label",{staticClass:"btn btn btn-light mb-0 border",attrs:{for:a.id}},[e("i",{staticClass:"far fa-check-circle",class:{"text-danger":t.pickUpSinger.id===a.id,"text-light":t.pickUpSinger.id!==a.id}}),t._v(" "+t._s(a.name)+" ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pickUpSinger,expression:"pickUpSinger"}],staticClass:"d-none",attrs:{id:a.id,type:"radio"},domProps:{value:a,checked:t._q(t.pickUpSinger,a)},on:{change:function(e){t.pickUpSinger=a}}})])})),0),e("hr")]):t._e(),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchText,expression:"searchText",modifiers:{trim:!0}}],staticClass:"form-control border border-info",attrs:{type:"text",placeholder:"Your favorite singer"},domProps:{value:t.searchText},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.searchArtists(a)},input:function(a){a.target.composing||(t.searchText=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"},on:{click:t.searchArtists}},[t._v("Search")])])]),t.searchData?t._e():e("p",{staticClass:"text-center"},[t._v("Have not searched for related singers !")]),t.isAlert?e("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[e("strong",[t._v("「該歌手」無法製作足夠的題庫數量，請重新選擇其他歌手。")]),e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(a){t.isAlert=!1}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),e("div",{staticClass:"row"},t._l(t.searchData,(function(a,s){return e("div",{key:s,staticClass:"col-md-3 col-6 mb-3"},[e("div",{class:{"pickup-bg":t.pickUpSinger.id===a.id},staticStyle:{padding:"3px"}},[e("div",{staticClass:"card h-100 border-0"},[e("label",{staticClass:"mb-0",attrs:{for:a.id}},[e("img",{staticClass:"card-img-top",attrs:{src:a.images[0].url}}),e("div",{staticClass:"card-body p-2"},[e("p",{staticClass:"card-text text-truncate"},[e("i",{staticClass:"far fa-check-circle",class:{"text-danger":t.pickUpSinger.id===a.id,"text-light":t.pickUpSinger.id!==a.id}}),t._v(" "+t._s(a.name)+" ")])])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pickUpSinger,expression:"pickUpSinger"}],staticClass:"d-none",attrs:{type:"radio",id:a.id},domProps:{value:a,checked:t._q(t.pickUpSinger,a)},on:{change:function(e){t.pickUpSinger=a}}})])])])})),0)]),e("button",{staticClass:"btn btn-outline-danger d-block w-100",attrs:{type:"button",disabled:!t.pickUpSinger},on:{click:t.makeSingerList}},[t._v(" Start Game !")])],1)},E=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"text-center text-white"},[t._v(" Preparation before starting "),e("i",{staticClass:"fas fa-music"})])}],J=(e("99af"),e("a623"),e("d81d"),e("d3b7"),{name:"guide",props:["data"],components:{statement:H},data:function(){return{searchText:"",searchData:"",pickUpSinger:"",historyData:JSON.parse(localStorage.getItem("pickUpSinger"))||[],isAlert:!1,isModalHide:JSON.parse(sessionStorage.getItem("modalStatus"))||!1}},methods:{searchArtists:function(){var t=this,a={headers:{Authorization:"Bearer ".concat(this.data.token)}},e="".concat("https://api.kkbox.com/v1.1","/search?q=").concat(this.searchText,"&type=artist&territory=TW&offset=0&limit=4");this.searchText?(this.searchData="",this.$http.get(e,a).then((function(a){t.searchData=a.data.artists.data}))):this.searchData=""},makeSingerList:function(){var t=this,a={headers:{Authorization:"Bearer ".concat(this.data.token)}},e="".concat("https://api.kkbox.com/v1.1","/artists/").concat(this.pickUpSinger.id,"/related-artists?territory=TW&offset=0&limit=19"),s=this,i=[];this.$http.get(e,a).then((function(t){i=t.data.data.map((function(t){return t.id})),i.push(s.pickUpSinger.id)})).finally((function(){i.length<5?s.isAlert=!0:(s.processHistoryData(),s.$emit("getSinger",i),t.$router.push("/playground"))}))},processHistoryData:function(){var t=this,a=this.historyData.every((function(a){return a.id!==t.pickUpSinger.id}));a&&(t.historyData.push(t.pickUpSinger),localStorage.setItem("pickUpSinger",JSON.stringify(t.historyData)))},removeHistory:function(){this.historyData=[],localStorage.setItem("pickUpSinger",JSON.stringify(this.historyData))}},watch:{isModalHide:function(){sessionStorage.setItem("modalStatus",JSON.stringify(this.isModalHide))}}}),L=J,K=(e("4131"),Object(g["a"])(L,P,E,!1,null,null,null)),W=K.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column justify-content-around h-100"},[e("div",{staticClass:"text-right"},[e("router-link",{staticClass:"text-light mr-3",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-home"})])],1),t._m(0),e("div",{staticClass:"my-2 text-center position-relative"},[t.url?t._e():e("p",{staticClass:"position-absolute position-revise text-white"},[t._v("點擊下方清單，可重新播放音樂內容")]),e("iframe",{staticStyle:{height:"130px"},attrs:{src:t.url,allow:"autoplay"}})]),e("div",{staticClass:"bg-light container-xl py-3 overflow-auto h-75 mb-2"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"list-group",on:{click:t.checkList}},t._l(t.myScore,(function(a,s){return e("a",{key:s,staticClass:"list-group-item list-group-item-action",attrs:{href:"#","data-url":a.url}},[e("span",[e("i",{staticClass:"mr-3",class:{"fas fa-times text-danger":!a.correct,"far fa-thumbs-up text-info":a.correct}})]),t._v(" "+t._s(a.realAnswer+" - "+a.realAnswerArtist))])})),0)])])]),e("button",{staticClass:"btn btn-outline-danger btn-lg w-50 mx-auto",attrs:{type:"button",disabled:!t.data.token},on:{click:t.goGuide}},[t._v(" Play Again ! ")])])},G=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"text-center text-white position-relative"},[t._v(" Song List "),e("i",{staticClass:"fas fa-music"}),e("p",{staticClass:"text-white text-beat"},[t._v("Song List "),e("i",{staticClass:"fas fa-music"})])])}],X={name:"score",props:["data"],data:function(){return{myScore:JSON.parse(localStorage.getItem("score"))||[],url:""}},methods:{goGuide:function(){this.$router.push("/guide")},checkList:function(t){"A"===t.target.nodeName&&(this.url=t.target.dataset.url)}}},R=X,q=(e("9b20"),Object(g["a"])(R,z,G,!1,null,"2e90c86e",null)),Y=q.exports,F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column justify-content-between h-100"},[e("div",{staticClass:"text-right"},[e("router-link",{staticClass:"text-light mr-3",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-home"})]),e("router-link",{staticClass:"text-light",attrs:{to:"/guide"}},[e("i",{staticClass:"fas fa-reply"})])],1),t._m(0),e("div",{staticClass:"h-75",on:{click:t.sendAnswer}},[t.isStart?t._e():e("div",{staticClass:"h-100 d-flex justify-content-center align-items-center"},[e("div",{staticClass:"spinner-grow mr-1 spinner-grow-mn text-light",attrs:{role:"status"}}),e("div",{staticClass:"spinner-grow mr-1 spinner-grow-mn text-light",attrs:{role:"status"}}),e("div",{staticClass:"spinner-grow mr-1 spinner-grow-mn text-light",attrs:{role:"status"}}),e("div",{staticClass:"spinner-grow mr-1 spinner-grow-mn text-light",attrs:{role:"status"}}),e("div",{staticClass:"spinner-grow mr-1 spinner-grow-mn text-light",attrs:{role:"status"}})]),t.isStart?e("div",[e("iframe",{staticClass:"m-0 d-none",staticStyle:{height:"150px"},attrs:{src:t.dataBase[t.currentNum].url,allow:"autoplay"}}),e("div",{staticClass:"w-50 mx-auto mb-3 challenge-bg",staticStyle:{padding:"3px"}},[e("h3",{staticClass:"text-center text-white mb-0 bg-dark p-1",staticStyle:{opacity:"0.8"}},[t._v(" Challenge - "+t._s(t.currentNum+1)+" ")])]),t._l(t.dataBase[t.currentNum].answerList,(function(a,s){return e("div",{key:s},[e("button",{staticClass:"btn btn-light btn-lg d-block w-100 border mb-1",class:{"bg-danger":a===t.playerAnswer&&t.playerAnswer!==t.dataBase[t.currentNum].realAnswer,"bg-info":a===t.playerAnswer&&t.playerAnswer===t.dataBase[t.currentNum].realAnswer,"bg-warning":a===t.afterRealAnswer},attrs:{disabled:!t.playerBtn}},[e("i",{staticClass:"text-white mr-3",class:{"fas fa-times":a===t.playerAnswer&&t.playerAnswer!==t.dataBase[t.currentNum].realAnswer,"far fa-thumbs-up":a===t.playerAnswer&&t.playerAnswer===t.dataBase[t.currentNum].realAnswer}}),t._v(t._s(a))])])}))],2):t._e()])])},Q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",{staticClass:"text-center text-white position-relative"},[t._v(" Jesus ! What is this song ! "),e("i",{staticClass:"fas fa-music"}),e("p",{staticClass:"text-white text-beat"},[t._v("Jesus ! What is this song ! "),e("i",{staticClass:"fas fa-music"})])])}],V=(e("4160"),e("b0c0"),e("159b"),{name:"playground",props:["data"],data:function(){return{musicData:this.data,dataBase:[],currentNum:0,isStart:!1,playerAnswer:"",afterRealAnswer:"",playerBtn:!0}},methods:{ramdomSinger:function(){var t=this,a={headers:{Authorization:"Bearer ".concat(this.data.token)}},e={correct:!1,url:"",realAnswer:"",realAnswerArtist:"",answerList:[]},s=[],i=Math.floor(Math.random()*this.musicData.singerId.length),r=this,n="".concat("https://api.kkbox.com/v1.1","/artists/").concat(this.musicData.singerId[i],"/top-tracks?territory=TW");this.$http.get(n,a).then((function(t){var i=Math.floor(Math.random()*t.data.data.length);e.url="https://widget.kkbox.com/v1/?id=".concat(t.data.data[i].id,"&type=song&terr=TW&lang=tw&autoplay=true");var n=Math.floor(Math.random()*t.data.data.length);i===n&&i===t.data.data.length-1?n-=1:(i===n&&0===i||i===n)&&(n+=1),e.realAnswer=t.data.data[i].name,e.realAnswerArtist=t.data.data[i].album.artist.name,s.push(t.data.data[i].name,t.data.data[n].name);for(var o=[],c=0;c<4;c+=1){var l=Math.floor(Math.random()*r.musicData.singerId.length),d="".concat("https://api.kkbox.com/v1.1","/artists/").concat(r.musicData.singerId[l],"/top-tracks?territory=TW");o.push(r.$http.get(d,a))}return r.axios.all([].concat(o))})).then(r.axios.spread((function(){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];a.forEach((function(t){var a=Math.floor(Math.random()*t.data.data.length);s.push(t.data.data[a].name)}))}))).finally((function(){for(var a=[].concat(s),i=s.length-1;i>0;i-=1){var r=Math.floor(Math.random()*(i+1)),n=[a[r],a[i]];a[i]=n[0],a[r]=n[1]}e.answerList=a,t.dataBase.push(e)}))},sendAnswer:function(t){var a=this;if("BUTTON"===t.target.nodeName){var e=this,s=this.currentNum<this.dataBase.length-1?1:0;this.playerBtn=!1,this.playerAnswer=t.target.innerText,this.playerAnswer===this.dataBase[this.currentNum].realAnswer?this.dataBase[this.currentNum].correct=!0:this.afterRealAnswer=this.dataBase[this.currentNum].realAnswer,setTimeout((function(){e.playerAnswer="",e.afterRealAnswer="",e.currentNum+=s,e.playerBtn=!0,s||(localStorage.setItem("score",JSON.stringify(a.dataBase)),e.$router.push("/score"))}),1500)}}},created:function(){if(this.musicData.singerId)for(var t=0;t<10;t+=1)this.ramdomSinger();else this.$router.push("/")},watch:{dataBase:function(){10===this.dataBase.length&&(this.isStart=!0)}}}),Z=V,tt=(e("3ea9"),Object(g["a"])(Z,F,Q,!1,null,"18345d12",null)),at=tt.exports;s["a"].use(x["a"]);var et=new x["a"]({routes:[{path:"*",redirect:"/"},{name:"index",path:"/",component:I},{name:"guide",path:"/guide",component:W},{name:"playground",path:"/playground",component:at},{name:"score",path:"/score",component:Y}]});e("4989");s["a"].use(o.a,r.a),s["a"].config.productionTip=!1,new s["a"]({router:et,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";e("458f")},6281:function(t,a,e){},"9b20":function(t,a,e){"use strict";e("ccb2")},a930:function(t,a,e){},aa20:function(t,a,e){},ccb2:function(t,a,e){},e8e3:function(t,a,e){},f69f:function(t,a,e){"use strict";e("e8e3")}});
//# sourceMappingURL=app.9e147b85.js.map