(this.webpackJsonplanguagegames=this.webpackJsonplanguagegames||[]).push([[0],{112:function(e,t,r){e.exports={FormContent:"Form_FormContent__1If-B",inputWrapper:"Form_inputWrapper__2y4SH",Frame:"Form_Frame__3a9EN"}},125:function(e,t,r){e.exports={ItemWrapper:"MainMenu_ItemWrapper__sdXuG",MainMenuFrame:"MainMenu_MainMenuFrame__1pPJX"}},159:function(e,t,r){e.exports={UserPanel:"UserPanel_UserPanel__3AUvx"}},160:function(e,t,r){e.exports={Header:"Header_Header__1s5Kb"}},161:function(e,t,r){e.exports={Frame:"Frame_Frame__r3k2z"}},162:function(e,t,r){e.exports={MenuItem:"MenuItem_MenuItem__7wp71"}},164:function(e,t,r){e.exports={Panel:"Panel_Panel__1TVDD"}},166:function(e,t,r){e.exports={wordCard:"WordCard_wordCard__1hSBm"}},191:function(e,t,r){},244:function(e,t,r){},245:function(e,t,r){},246:function(e,t,r){"use strict";r.r(t);var n,a=r(0),c=r(14),s=r.n(c),i=(r(191),r(9)),o=r(27),d=r(18),u=r(13),l=r.n(u),p=r(25),b=r(15),j=r(19),f=r(21),h=r.n(f),O=Object(j.b)("auth/logout",Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/dj-rest-auth/logout/",{}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),m=Object(j.b)("auth/logIn",function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/dj-rest-auth/login/",t).then((function(e){return e.data.user}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(j.b)("auth/chekLogin",Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.prev=1,e.next=4,h.a.post("/dj-rest-auth/token/verify/",{});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,h.a.post("/dj-rest-auth/token/refresh/",{}).catch((function(e){throw e}));case 10:e.next=16;break;case 12:throw e.prev=12,e.t1=e.catch(0),window.localStorage.setItem("userId",JSON.stringify(-1)),e.t1;case 16:return e.next=18,h.a.get("/dj-rest-auth/user/").then((function(e){return e.data}));case 18:return t=e.sent,window.localStorage.setItem("userId",t.pk),e.abrupt("return",t);case 21:case"end":return e.stop()}}),e,null,[[0,12],[1,6]])})))),g=Object(j.b)("auth/registerUser",function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/dj-rest-auth/registration/",t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(j.c)({name:"auth",initialState:{user:{pk:-1},status:"idle",authenticated:!0,registerState:"idle"},reducers:{},extraReducers:(n={},Object(b.a)(n,g.fulfilled,(function(e,t){e.user=t.payload,e.registerState="succeeded"})),Object(b.a)(n,g.rejected,(function(e,t){e.user=t.payload,e.registerState="failed"})),Object(b.a)(n,g.pending,(function(e,t){e.user=t.payload,e.registerState="loading"})),Object(b.a)(n,O.fulfilled,(function(e){e.authenticated=!1})),Object(b.a)(n,m.fulfilled,(function(e,t){e.user=t.payload,e.hasRefreshToken=!0})),Object(b.a)(n,x.fulfilled,(function(e,t){e.user=t.payload,e.status="succeeded",e.authenticated=!0})),Object(b.a)(n,x.rejected,(function(e){e.status="failed",e.authenticated=!1})),Object(b.a)(n,x.pending,(function(e){e.status="loading"})),n)}).reducer,w=r(82),_=r.n(w),I=r(277),y=r(128),S=r(298),C=r(297),k=r(12),W=r(2),N=function(){var e=Object(i.c)((function(e){return e.auth.user.username})),t=Object(i.b)(),r=Object(d.g)();return Object(W.jsxs)(C.a,{className:_.a.userWrapper,children:[Object(W.jsx)(S.a,{className:_.a.avatar,src:""}),Object(W.jsx)(y.a,{className:_.a.username,variant:"h4",component:"h6",children:!!e&&Object(k.a)(e)}),Object(W.jsx)(I.a,{onClick:Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(O());case 2:r.push("/"),window.location.reload();case 4:case"end":return e.stop()}}),e)}))),variant:"body1",color:"secondary",className:_.a.logout,children:"logout"})]})},P=r(159),A=r.n(P),M=r(120),D=r.n(M),F=r(124),B=r.n(F),H=r(279),G=D()({overrides:{MuiOutlinedInput:{input:{padding:"0.5rem"}},MuiInputLabel:{outlined:{transform:"translate(14px, 10px) scale(1)"}},MuiFormControl:{root:{width:"100%"}},MuiButton:{root:{minWidth:"25px"}},MuiAvatar:{root:{width:"75px",height:"75px",textTransform:"uppercase",fontSize:"2.5rem"}},MuiCardContent:{root:{padding:0}}},palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#fff"}}});G.palette.green=G.palette.augmentColor({main:"#51c68e",contrastText:"#ffffff"}),G.palette.red=G.palette.augmentColor({main:"#f60000",contrastText:"#ffffff"}),G.palette.orange=G.palette.augmentColor({main:"#ffab40",contrastText:"#ffffff"});var E=["primary","secondary","green","red","orange"],L=B()((function(e){return{root:function(e){var t=E.filter((function(t){return e.color===t}));return t&&"contained"===e.variant?{color:G.palette[t].contrastText,backgroundColor:G.palette[t].main,"&:hover":{backgroundColor:G.palette[t].dark,"@media (hover: none)":{backgroundColor:G.palette[t].main}}}:{}}}}))(H.a),R=B()((function(e){return{root:{padding:"2.5px"}}}))(L),T=function(e){var t=/\/auth/.test(e.currentRoute.pathname),r=Object(i.c)((function(e){return e.auth.authenticated}));return Object(W.jsxs)("div",{className:A.a.UserPanel,children:[!t&&!r&&Object(W.jsx)(o.b,{to:"/auth",children:Object(W.jsx)(L,{variant:"contained",color:"green",children:"log in"})}),r&&Object(W.jsx)(N,{})]})},U=r(71),J=r.n(U),q=function(){return Object(W.jsx)("nav",{className:J.a.Nav,children:Object(W.jsxs)("ul",{className:J.a.NavList,children:[Object(W.jsx)(o.b,{className:J.a.NavList__item,to:"/",children:Object(W.jsx)("li",{children:"home"})}),Object(W.jsx)("li",{className:J.a.NavList__item,children:"something"}),Object(W.jsx)("li",{className:J.a.NavList__item,children:"something1"})]})})},z=r(160),V=r.n(z),Z=function(){var e=Object(d.h)();return Object(W.jsxs)("div",{className:V.a.Header,children:[Object(W.jsx)(q,{}),Object(W.jsx)(T,{currentRoute:e})]})},Y=r(83),K=r.n(Y),X=r(251),Q=function(){return Object(W.jsxs)(X.a,{className:K.a.Frame,elevation:3,children:[Object(W.jsx)("div",{className:K.a.textWrapper,children:Object(W.jsx)("p",{children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c:"})}),Object(W.jsxs)("div",{children:[Object(W.jsx)(o.b,{className:K.a.buttonWrapper,to:"/auth/login",children:Object(W.jsx)(L,{variant:"contained",color:"green",children:"Log In"})}),Object(W.jsx)(o.b,{className:K.a.buttonWrapper,to:"/auth/register",children:Object(W.jsx)(L,{variant:"contained",color:"secondary",children:"Register"})})]})]})},$=r(43),ee=r(112),te=r.n(ee),re=r(292),ne=function(e){var t=e.form;return Object(W.jsx)(X.a,{className:te.a.Frame,elevation:3,children:Object(W.jsxs)("div",{className:te.a.FormContent,children:[ae(t),e.children]})})},ae=function(e){return e.allIds.map((function(t){return function(e){var t=e.id,r=e.type,n=void 0===r?"text":r,a=e.variant,c=void 0===a?"outlined":a,s=e.label,i=void 0===s?"id":s,o=e.ref,d=e.required,u=void 0!==d&&d,l=e.autoComplete,p=void 0===l?"of":l,b=e.onChange,j={id:t,type:n,variant:c,label:i,ref:o,required:u,autoComplete:p,onChange:function(e){return f(o,e)}};function f(e,t){b&&b(),e.current.value=t.target.value}return Object(W.jsx)("div",{className:te.a.inputWrapper,children:Object(W.jsx)(re.a,Object($.a)({},j))},t)}(e.byId[t])}))};var ce,se,ie=function(){var e=Object(i.b)(),t=Object(a.createRef)(),r=Object(a.createRef)(),n=Object(d.g)(),c={byId:{login:{id:"login",ref:t,label:"login",required:!0},password:{id:"password",type:"password",ref:r,label:"password",required:!0}},allIds:["login","password"]},s=function(){var a=Object(p.a)(l.a.mark((function a(c){var s;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,a.next=4,e(m({username:t.current.value,password:r.current.value}));case 4:s=a.sent,Object(j.d)(s),n.push("/"),e(x()),a.next=12;break;case 10:a.prev=10,a.t0=a.catch(1);case 12:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}();return Object(W.jsx)("form",{onSubmit:s,children:Object(W.jsx)(ne,{form:c,children:Object(W.jsx)(L,{variant:"contained",color:"primary",type:"submit",children:"Login"})})})},oe=function(){var e=Object(d.g)(),t=Object(a.createRef)(),r=Object(a.createRef)(),n=Object(a.createRef)(),c=Object(a.createRef)(),s=Object(i.b)(),o={byId:{login:{id:"login",ref:t,label:"login",required:!0},password:{id:"password",type:"password",ref:r,label:"password",required:!0},"password-confirm":{id:"password-confirm",type:"password",ref:n,label:"confirm password",required:!0},"e-mail":{id:"email",type:"email",ref:c,label:"e-mail",required:!0}},allIds:["login","e-mail","password","password-confirm"]},u=function(){var a=Object(p.a)(l.a.mark((function a(i){var o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i.preventDefault(),a.prev=1,a.next=4,s(g({username:t.current.value,password1:r.current.value,password2:n.current.value,email:c.current.value}));case 4:o=a.sent,Object(j.d)(o),e.push("/"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),r.current.value="",n.current.value="";case 13:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(W.jsx)("form",{method:"post",name:"register",onSubmit:function(e){return u(e)},children:Object(W.jsx)(ne,{form:o,children:Object(W.jsx)(L,{variant:"contained",color:"primary",type:"submit",children:"Register"})})})},de=r(107),ue=r.n(de),le=r(161),pe=r.n(le),be=function(e){return Object(W.jsx)(X.a,{variant:"outlined",className:"".concat(pe.a.Frame," ").concat(e.styles),children:e.children})},je=r(162),fe=r.n(je),he=function(e){return Object(W.jsx)(be,{styles:fe.a.MenuItem,children:e.children})},Oe=r(69),me=Object(j.b)("task/getUsersSessions",function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/sessions/owner/".concat(t,"/")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),xe=Object(j.b)("task/getDefaultSessions",Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/sessions/no-owner/").then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),ge=Object(j.c)({name:"tasks",initialState:{sessions:[],sessionInstance:{},userSessionStatus:"idle",defaultSessionStatus:"idle"},reducers:{},extraReducers:(ce={},Object(b.a)(ce,me.fulfilled,(function(e,t){var r;(r=e.sessions).push.apply(r,Object(Oe.a)(t.payload)),e.userSessionStatus="succeeded"})),Object(b.a)(ce,me.rejected,(function(e){e.userSessionStatus="failed"})),Object(b.a)(ce,me.pending,(function(e){e.userSessionStatus="loading"})),Object(b.a)(ce,xe.fulfilled,(function(e,t){var r;(r=e.sessions).push.apply(r,Object(Oe.a)(t.payload)),e.defaultSessionStatus="succeeded"})),Object(b.a)(ce,xe.rejected,(function(e){e.defaultSessionStatus="failed"})),Object(b.a)(ce,xe.pending,(function(e){e.defaultSessionStatus="loading"})),ce)}).reducer,ve=r(125),we=r.n(ve),_e=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.tasks})),r=t.userSessionStatus,n=t.defaultSessionStatus,c=Object(i.c)((function(e){return e.tasks.sessions})),s=Object(i.c)((function(e){return e.auth.user.pk})),o=-1!==s,u=Object(d.g)();Object(a.useEffect)((function(){"idle"===n&&e(xe()),o&&"idle"===r&&e(me(s))}),[s]);return Object(W.jsx)(X.a,{className:we.a.MainMenuFrame,elevation:3,children:c.map((function(e,t){return Object(W.jsxs)("div",{className:we.a.ItemWrapper,children:[Object(W.jsx)("button",{onClick:function(){return function(e){u.push("/game/".concat(e.id))}(e)},children:Object(W.jsx)(he,{children:Object(W.jsx)("span",{children:e.name})})}),o&&Object(W.jsx)(Ie,{sessionId:e.id})]},"menuItem".concat(t))}))})},Ie=function(e){var t=Object(d.g)();return Object(W.jsx)(L,{variant:"contained",color:"orange",onClick:function(){return r=e.sessionId,void t.push("game-constructor/".concat(r));var r},children:Object(W.jsx)(ue.a,{})})},ye=r(29),Se=r(286),Ce=r(167),ke=r(296),We=r(285),Ne=r(283),Pe=r(284),Ae=r(282),Me=r(163),De=r.n(Me),Fe=r(84),Be=r.n(Fe),He=r(108),Ge=r.n(He),Ee=r(72),Le="word",Re="ADDED",Te="CHANGED",Ue="INITIAL",Je=Object(j.b)("game/getData",function(){var e=Object(p.a)(l.a.mark((function e(t){var r,n,a,c,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.sessionId,n=t.sessionInstance,a={session:r,sets:null,pictures:null,results:{}},e.next=4,h.a.get("/api/session-id/".concat(r,"/sets/")).then((function(e){var t=Object(Oe.a)(e.data);return a.sets={byId:t.reduce((function(e,t){return t.picturesOrder=[],e[t.id]=t,e}),{}),allIds:t.map((function(e){return e.id}))}}));case 4:return c=e.sent,e.next=7,h.a.get("/api/session-id/".concat(r,"/pictures/")).then((function(e){var t=Object(Oe.a)(e.data);return a.pictures={byId:t.reduce((function(e,t){return e[t.id]=t,e}),{}),allIds:t.map((function(e){return e.id}))}}));case 7:return s=e.sent,i=c.allIds,o=s.allIds,i.forEach((function(e){c.byId[e]={id:c.byId[e].id,name:c.byId[e].name,repeatable:c.byId[e].repeatable,picturesOrder:[],wordsOrder:[],completed:!1,status:Ue}})),o.forEach((function(e){var t=s.byId[e],r=c.byId[t.set];t.status=Ue,r.picturesOrder.splice(t.pos-1,1,e),r.wordsOrder.push(t.word)})),i.forEach((function(e){var t=c.byId[e];t.wordsOrder=Ge.a.shuffle(t.wordsOrder),a.results[e]=Array(t.picturesOrder.length).fill({word:null,correct:null})})),n&&window.sessionStorage.setItem(n,JSON.stringify(a)),e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),qe=Object(j.b)("game/sendData",function(){var e=Object(p.a)(l.a.mark((function e(t){var r,n,a,c,s,i,o,d,u,p,b,j,f,O,m,x,g,v,w,_;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,n=t.userId,a=Object(Ee.a)(r.deletedSets),e.prev=2,a.s();case 4:if((c=a.n()).done){e.next=10;break}return s=c.value,e.next=8,h.a.delete("/api/set/".concat(s,"/"));case 8:e.next=4;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),a.e(e.t0);case 15:return e.prev=15,a.f(),e.finish(15);case 18:i=Object(Ee.a)(r.addedSets),e.prev=19,i.s();case 21:if((o=i.n()).done){e.next=28;break}return d=o.value,u={name:d,max_size:8,session:r.session,theme:1,owner:n,repeatable:3},e.next=26,h.a.post("/api/sets/",u);case 26:e.next=21;break;case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(19),i.e(e.t1);case 33:return e.prev=33,i.f(),e.finish(33);case 36:p=Object(Ee.a)(r.deletedPictures),e.prev=37,p.s();case 39:if((b=p.n()).done){e.next=45;break}return j=b.value,e.next=43,h.a.delete("/api/picture/".concat(j,"/"));case 43:e.next=39;break;case 45:e.next=50;break;case 47:e.prev=47,e.t2=e.catch(37),p.e(e.t2);case 50:return e.prev=50,p.f(),e.finish(50);case 53:f=Object(Ee.a)(r.changedPictures),e.prev=54,f.s();case 56:if((O=f.n()).done){e.next=65;break}return m=O.value,delete(x=Object($.a)({},r.pictures.byId[m])).id,delete x.status,e.next=63,h.a.put("/api/picture/".concat(m,"/"),x);case 63:e.next=56;break;case 65:e.next=70;break;case 67:e.prev=67,e.t3=e.catch(54),f.e(e.t3);case 70:return e.prev=70,f.f(),e.finish(70);case 73:g=Object(Ee.a)(r.addedPictures),e.prev=74,g.s();case 76:if((v=g.n()).done){e.next=86;break}return w=v.value,delete(_=Object($.a)({},r.pictures.byId[w])).id,delete _.status,console.log(_),e.next=84,h.a.post("/api/pictures/",_);case 84:e.next=76;break;case 86:e.next=91;break;case 88:e.prev=88,e.t4=e.catch(74),g.e(e.t4);case 91:return e.prev=91,g.f(),e.finish(91);case 94:return e.abrupt("return",r);case 95:case"end":return e.stop()}}),e,null,[[2,12,15,18],[19,30,33,36],[37,47,50,53],[54,67,70,73],[74,88,91,94]])})));return function(t){return e.apply(this,arguments)}}()),ze=r(70),Ve=Object(j.c)({name:"game",initialState:{session:null,sets:{byId:{},allIds:[]},pictures:{byId:{},allIds:[]},dataStatus:"idle",results:{setId:[]},currentSet:0,addedSets:[],deletedSets:[],addedPictures:[],changedPictures:[],deletedPictures:[]},reducers:{readGameState:function(e,t){return e=Object($.a)(Object($.a)({},e),t.payload)},placeWord:function(e,t){var r=t.payload,n=r.setId,a=r.word,c=r.prevWord,s=r.position;return e.results[n][s].word=a,e.sets.byId[n].wordsOrder=e.sets.byId[n].wordsOrder.filter((function(e){return e!==a})),c&&e.sets.byId[n].wordsOrder.push(c),e},returnWord:function(e,t){var r=t.payload,n=r.setId,a=r.position,c=r.word;return e.results[n][a].word=null,c&&e.sets.byId[n].wordsOrder.push(c),e},switchSet:function(e,t){var r=t.payload,n=r.direction,a=r.length,c=e.currentSet;switch(n){case"left":c>0&&--e.currentSet;break;case"right":c<a+1&&++e.currentSet}return e},completeSet:function(e,t){var r=t.payload,n=r.setId,a=r.correctWords;return e.results[n].forEach((function(e,t){return e.correct=e.word===a[t]})),e.sets.byId[n].completed=!0,e},redoSet:function(e,t){var r=t.payload.setId;return e.results[r].forEach((function(t){t.word&&e.sets.byId[r].wordsOrder.push(t.word),t.correct=null,t.word=null})),e.sets.byId[r].completed=!1,e.sets.byId[r].wordsOrder=Ge.a.shuffle(e.sets.byId[r].wordsOrder),--e.sets.byId[r].repeatable,e},pictureAdded:function(e,t){var r=t.payload,n=r.setId,a=r.src,c=r.word,s=r.owner,i=Object(ze.a)(5);return e.pictures.byId[i]={id:i,src:a,word:c,set:n,owmer:s,theme:1,pos:e.sets.byId[n].picturesOrder.length+1,status:Re},e.pictures.allIds.push(i),e.sets.byId[n].picturesOrder.push(i),e.results[n].push({word:c,correct:!0}),e.addedPictures.push(i),e},pictureChanged:function(e,t){var r=t.payload,n=r.id,a=r.setId,c=r.src,s=r.word,i=(r.owner,e.pictures.byId[n]),o=!(i.word==s&&i.src==c);return e.pictures.byId[n]=Object($.a)(Object($.a)({},e.pictures.byId[n]),{},{src:c,word:s}),e.pictures.byId[n].status===Ue&&o&&(e.changedPictures.push(n),e.pictures.byId[n].status=Te),e.sets.byId[a].wordsOrder=e.sets.byId[a].wordsOrder.filter((function(e){return i.word!==e})),e.results[a][e.sets.byId[a].picturesOrder.findIndex((function(e){return e===n}))]={word:o?s:null,correct:!0},e},pictureDeleted:function(e,t){var r=t.payload.id,n=e.pictures.byId[r],a=n.set,c=n.word,s=e.sets.byId[a],i=s.picturesOrder,o=s.wordsOrder,d=i.findIndex((function(e){return e===r})),u=e.pictures.byId[r].status;return i.splice(d,1),e.sets.byId[a].wordsOrder=o.filter((function(e){return e!==c})),delete e.pictures.byId[r],e.pictures.allIds=e.pictures.allIds.filter((function(e){return e!==r})),e.results[a].splice(d,1),u!==Ue&&u!==Te||e.deletedPictures.push(r),u===Re&&(e.addedPictures=e.addedPictures.filter((function(e){return e!==r}))),e},setAdded:function(e){if(!(e.sets.allIds.length>=15)){var t=Object(ze.a)(5);return e.sets.allIds.push(t),e.sets.byId[t]={id:t,name:t,repeatable:1,picturesOrder:[],wordsOrder:[],completed:!1,status:Re},e.results[t]=[],e.addedSets.push(t),e}},setDeleted:function(e,t){var r=t.payload.id,n=e.sets.byId[r].status,a=e.sets.allIds.findIndex((function(e){return e===r}));if(1!=e.sets.allIds.length)return e.sets.allIds=e.sets.allIds.filter((function(e){return e!==r})),delete e.sets.byId[r],n===Re&&(e.addedSets=e.addedSets.filter((function(e){return e!==r}))),n===Ue&&e.deletedSets.push(r),e.currentSet>=a&&--e.currentSet,[e.addedPictures,e.deletedPictures,e.changedPictures].forEach((function(t){return t.forEach((function(t,n,a){e.pictures.byId[t].set===r&&a.splice(n,1)}))})),e}},extraReducers:(se={},Object(b.a)(se,Je.fulfilled,(function(e,t){return e.dataStatus="succeeded",e.session=t.payload.session,e.sets=t.payload.sets,e.pictures=t.payload.pictures,e.results=t.payload.results,e.currentSet=0,e.addedSets=[],e.deletedSets=[],e.addedPictures=[],e.changedPictures=[],e.deletedPictures=[],e})),Object(b.a)(se,qe.fulfilled,(function(e){return e})),se)}),Ze=Ve.actions,Ye=Ze.readGameState,Ke=Ze.placeWord,Xe=Ze.returnWord,Qe=Ze.switchSet,$e=Ze.completeSet,et=Ze.redoSet,tt=(Ze.setSecureStatus,Ze.pictureAdded),rt=Ze.pictureChanged,nt=Ze.pictureDeleted,at=Ze.setAdded,ct=Ze.setDeleted,st=Ve.reducer;function it(e){var t=Object(a.useState)(!1),r=Object(ye.a)(t,2),n=r[0],c=r[1],s=Object(a.useState)(),o=Object(ye.a)(s,2),d=o[0],u=o[1],l=Object(a.useState)(),p=Object(ye.a)(l,2),b=p[0],j=p[1],f=Object(i.b)(),h=Object(i.c)((function(e){return e.auth.user.pk})),O=Object(i.c)((function(t){return t.game.sets.byId[e.setId].picturesOrder.length})),m=function(){c(!1)};return Object(W.jsxs)("div",{children:[Object(W.jsx)(C.a,{className:Be.a.buttonWrapper,children:Object(W.jsx)(R,{variant:"contained",color:"orange",onClick:function(){c(!0),u(null),j(null)},disabled:12===O,children:Object(W.jsx)(De.a,{})})}),Object(W.jsxs)(ke.a,{open:n,onClose:m,"aria-labelledby":"form-dialog-title",children:[Object(W.jsx)(Ae.a,{id:"form-dialog-title",children:"Add picture"}),Object(W.jsxs)(Ne.a,{children:[Object(W.jsx)("div",{className:Be.a.windowPreview,children:Object(W.jsx)("img",{draggable:!1,className:Be.a.imagePreview,src:d||"https://i.imgur.com/JWsWdpo.png",alt:"img"})}),Object(W.jsx)(Pe.a,{className:Be.a.textDialog,children:"To add picture fill the fields downside"}),Object(W.jsx)(re.a,{autoFocusz:!0,margin:"dense",variant:"outlined",id:"imgSrc",label:"Img src",fullWidth:!0,onChange:function(e){return u(e.target.value)},value:d}),Object(W.jsx)(re.a,{margin:"dense",variant:"outlined",id:"wordText",label:"Word",fullWidth:!0,onChange:function(e){return j(e.target.value)},value:b})]}),Object(W.jsxs)(We.a,{children:[Object(W.jsx)(H.a,{onClick:m,color:"primary",children:"Cancel"}),Object(W.jsx)(H.a,{onClick:function(){f(tt({setId:e.setId,src:d,word:b,owner:h})),m()},color:"primary",children:"Add"})]})]})]})}var ot=r(164),dt=r.n(ot),ut=function(e){return Object(W.jsx)(be,{styles:"".concat(dt.a.Panel," ").concat(e.styles),children:e.children})},lt=r(34),pt=r.n(lt),bt=r(287),jt=r(299),ft=function(e){var t=e.repeatable,r=e.constructor?pt.a.controlsWrapper__constructor:pt.a.controlsWrapper;return Object(W.jsx)(Se.a,{backend:Ce.a,children:Object(W.jsxs)(be,{styles:pt.a.setCard,children:[Object(W.jsxs)(ut,{styles:pt.a.picturesWrapper,children:[e.pictures,e.constructor&&Object(W.jsx)(it,{setId:e.setId})]}),Object(W.jsx)(ut,{styles:pt.a.wordsWrapper,children:e.words}),Object(W.jsxs)(C.a,{className:r,children:[Object(W.jsx)(L,{className:pt.a.submitButton,disabled:e.completeDisabled||e.completeState,onClick:e.completeHandler,variant:"contained",color:"green",children:"Complete"}),Object(W.jsxs)(C.a,{className:pt.a.redoWrapper,children:[Object(W.jsxs)(y.a,{component:"span",className:pt.a.counter,children:["Attempts: ",Object(W.jsx)("b",{children:t})]}),Object(W.jsx)(L,{className:pt.a.redoButton,disabled:!(0!==t&&e.completeState),onClick:e.redoHandler,variant:"contained",color:"orange",children:"Redo"})]}),Object(W.jsx)(L,{className:pt.a.refreshButton,onClick:e.refreshHandler,variant:"contained",color:"orange",children:"Refresh"}),e.constructor&&Object(W.jsx)(ht,{applyHandler:e.applyHandler})]}),e.constructor&&Object(W.jsx)(C.a,{className:pt.a.deleteButtonWrapper,children:Object(W.jsx)(jt.a,{title:"Delete set","aria-label":"add",children:Object(W.jsx)(R,{onClick:function(){return e.deleteSetHandler(e.setId)},variant:"contained",color:"red",children:Object(W.jsx)(bt.a,{})})})})]})})},ht=function(e){var t=e.applyHandler;return Object(W.jsx)("div",{className:pt.a.buttonWrapper,children:Object(W.jsx)(L,{variant:"contained",color:"green",onClick:t,children:"APPLY CHANGES"})})},Ot=r(294),mt=r(85),xt=r.n(mt),gt=r(278),vt=r(86),wt=r.n(vt);function _t(e){var t=Object(i.b)(),r=Object(a.useState)(!1),n=Object(ye.a)(r,2),c=n[0],s=n[1],o=Object(i.c)((function(t){return t.game.pictures.byId[e.pictureId]})),d=o.src,u=o.word,l=Object(i.c)((function(e){return e.auth.user.pk})),p=Object(a.useState)(d),b=Object(ye.a)(p,2),j=b[0],f=b[1],h=Object(a.useState)(u),O=Object(ye.a)(h,2),m=O[0],x=O[1],g=function(){s(!1)};return Object(W.jsx)(gt.a,{theme:G,children:Object(W.jsxs)(C.a,{children:[Object(W.jsx)(C.a,{className:wt.a.buttonWrapper,children:Object(W.jsx)(R,{variant:"contained",color:"orange",onClick:function(){s(!0),f(d),x(u)},children:Object(W.jsx)(ue.a,{})})}),Object(W.jsxs)(ke.a,{open:c,onClose:g,"aria-labelledby":"form-dialog-title",children:[Object(W.jsxs)(Ae.a,{id:"form-dialog-title",children:["Changing picture ",Object(W.jsxs)("b",{children:['"',u,'"']})]}),Object(W.jsxs)(Ne.a,{children:[Object(W.jsx)("div",{className:wt.a.windowPreview,children:Object(W.jsx)("img",{draggable:!1,className:wt.a.imagePreview,src:j,alt:"img"})}),Object(W.jsx)(Pe.a,{className:wt.a.textDialog,children:"To add picture fill the fields downside"}),Object(W.jsx)(re.a,{autoFocusz:!0,margin:"dense",variant:"outlined",id:"imgSrc",label:"Img src",fullWidth:!0,value:j,onChange:function(e){return f(e.target.value)}}),Object(W.jsx)(re.a,{margin:"dense",variant:"outlined",id:"wordText",label:"Word",value:m,fullWidth:!0,onChange:function(e){return x(e.target.value)}})]}),Object(W.jsxs)(We.a,{children:[Object(W.jsx)(L,{onClick:function(){t(nt({id:e.pictureId})),g()},color:"secondary",style:{margin:"0 auto 0 0"},children:"Delete"}),Object(W.jsx)(L,{onClick:g,color:"primary",children:"Cancel"}),Object(W.jsx)(L,{onClick:function(){t(rt({id:e.pictureId,setId:e.setId,src:j,word:m,owner:l})),g()},color:"primary",children:"Change"})]})]})]})})}var It=r(288),yt=r(289),St=r(291),Ct=r(290),kt=function(e){var t=Object(i.b)(),r=e.isCorrect,n=Object(i.c)((function(t){return t.game.pictures.byId[e.pictureId].status})),a=Object(Ot.a)({accept:Le,drop:function(r){t(Ke({word:r.word,position:e.position,setId:e.setId,prevWord:e.word}))},collect:function(e){return{isOver:!!e.isOver()}}}),c=Object(ye.a)(a,2),s=c[0].isOver,o=c[1];return Object(W.jsxs)(It.a,{className:xt.a.PictureCard,style:{outline:e.completed&&"2px solid ".concat(r?"#73ee65":"#f53831"),background:n===Ue?"white":"#d9fdaf"},elevation:3,children:[Object(W.jsxs)(yt.a,{children:[e.constructor&&Object(W.jsx)(_t,{pictureId:e.pictureId,setId:e.setId}),Object(W.jsx)(Ct.a,{className:xt.a.cardMedia,image:e.src})]}),Object(W.jsx)(St.a,{className:xt.a.actionArea,children:Object(W.jsx)(C.a,{ref:o,style:s?{background:n===Ue?"rgb(129,215,241, 0.5)":"#ffffff"}:{background:n===Ue?"white":"#f5f5f5"},className:xt.a.wordSpace,onDoubleClick:function(){!e.completed&&t(Xe({word:e.word,position:e.position,setId:e.setId}))},title:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u0432\u0430 \u0440\u0430\u0437\u0430 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043b\u043e\u0432\u043e",children:Object(W.jsx)(y.a,{variant:"body2",component:"span",children:e.word})})})]})},Wt=r(295),Nt=r(166),Pt=r.n(Nt),At=function(e){var t=Object(Wt.a)({item:{type:Le,word:e.word},collect:function(e){return{isDragging:!!e.isDragging()}}}),r=Object(ye.a)(t,2),n=r[0].isDragging,a=r[1];return Object(W.jsx)(It.a,{id:e.id,className:Pt.a.wordCard,elevation:3,ref:a,style:{visibility:n?"hidden":"visible"},children:Object(W.jsx)(yt.a,{children:Object(W.jsx)(y.a,{variant:"body2",component:"span",children:e.word})})})},Mt=r(46),Dt=r.n(Mt),Ft=function(e){var t=Object(i.b)(),r=Object(i.c)((function(e){return e.auth.user.pk})),n=Object(i.c)((function(e){return e.game.currentSet})),a=Object(i.c)((function(e){return e.game.sets.allIds[e.game.currentSet]})),c=Object(i.c)((function(e){return e.game})),s=c.sets.allIds.length,o=c.sets.byId[a],d=o.wordsOrder,u=o.picturesOrder,l=o.completed,p=o.repeatable,b=!(0===d.length),j=Object(i.c)((function(e){return e.game.results[a]})),f=u.map((function(e){return c.pictures.byId[e].word}));return Object(W.jsxs)("div",{className:Dt.a.GameWrapper,children:[Object(W.jsxs)("div",{className:Dt.a.header,children:[Object(W.jsxs)("span",{className:Dt.a.SetsCounter,children:["Set ",Object(W.jsx)("b",{children:n+1})," / ",s]}),e.constructor&&Object(W.jsx)(L,{variant:"contained",color:"orange",onClick:function(){t(at())},children:"create new set"})]}),Object(W.jsxs)("div",{className:Dt.a.SetsWrapper,children:[Object(W.jsx)("button",{className:"".concat(0===n?Dt.a.Arrow__disabled:Dt.a.Arrow),onClick:function(){t(Qe({direction:"left",length:s}))},disabled:0===n,children:"\ue76b"}),Object(W.jsx)(ft,{pictures:u.map((function(t,r){var n=c.pictures.byId[t],s=n.src,i=n.word,o=j[r],d=o.word,u=o.correct;return Object(W.jsx)(kt,{id:"picture".concat(r),src:s,word:d,position:r,setId:a,completed:l,correctWord:i,isCorrect:u,constructor:e.constructor,pictureId:t},"picture".concat(r))})),words:d.map((function(e,t){return Object(W.jsx)(At,{word:e,id:"word".concat(t)},"picture".concat(t))})),completeDisabled:b,completeHandler:function(){t($e({setId:a,correctWords:f}))},redoHandler:function(){t(et({setId:a}))},deleteSetHandler:function(e){t(ct({id:e}))},applyHandler:function(){t(qe({state:c,userId:r}))},completeState:l,repeatable:p,refreshHandler:e.refreshHandler,constructor:e.constructor,setId:a}),Object(W.jsx)("button",{className:"".concat(n===s-1?Dt.a.Arrow__disabled:Dt.a.Arrow),onClick:function(){t(Qe({direction:"right",length:s}))},disabled:n===s-1,children:"\ue76c"})]})]})},Bt=function(e){var t=Object(i.b)(),r=Object(a.useState)(!1),n=Object(ye.a)(r,2),c=n[0],s=n[1],o=window.localStorage.getItem("userId"),d=Object(i.c)((function(e){return e.game})),u=Object(i.c)((function(e){return e.game.dataStatus})),l=window.location.pathname.match(/\d+$/)[0];function p(){return JSON.parse(window.sessionStorage.getItem("users"))}var j=Object(a.useCallback)((function(e,r){var n=p();n&&n[e]?n[e][r]||(n[e][r]=Object(ze.a)(5)):(n=n||{})[e]=Object(b.a)({},r,Object(ze.a)(5)),t(Je({sessionId:r,sessionInstance:n[e][r]})),s(!1),window.sessionStorage.setItem("users",JSON.stringify(n))}),[t]),f=Object(a.useCallback)((function(e,t){var r=p();return r&&r[e]&&r[e][t]||(j(e,t),r=p()),r[e][t]}),[j]);return Object(a.useEffect)((function(){if(e.constructor&&"idle"===u?(t(Je({sessionId:l})),"succeeded"===u&&s(!0)):e.constructor&&"succeeded"===u&&s(!0),!e.constructor){var r=f(o,l),n=JSON.parse(window.sessionStorage.getItem(r));!c&&n?(s(!0),t(Ye(n))):c||"idle"!==d.dataStatus?window.sessionStorage.setItem(r,JSON.stringify(d)):j(o,l)}}),[l,u,t,d,f,c,j,o,e.constructor]),c?Object(W.jsx)("div",{children:Object(W.jsx)(Ft,{constructor:e.constructor,refreshHandler:function(){return t(Je({sessionId:l,sessionInstance:f(o,l),userId:o}))}})}):Object(W.jsx)("div",{children:c})},Ht=(r(244),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.status})),r=Object(i.c)((function(e){return e.auth.authenticated}));return Object(a.useEffect)((function(){"idle"===t&&e(x())})),Object(W.jsx)(gt.a,{theme:G,children:Object(W.jsx)(o.a,{children:Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)(Z,{authCheckStatus:t}),Object(W.jsx)("main",{className:"contentWrapper",children:Object(W.jsxs)(d.d,{children:[Object(W.jsx)(d.b,{exact:!0,path:"/",children:Object(W.jsx)(_e,{})}),Object(W.jsx)(d.b,{exact:!0,path:"/auth",children:r?Object(W.jsx)(d.a,{to:"/"}):Object(W.jsx)(Q,{})}),Object(W.jsx)(d.b,{path:"/auth/login",children:r?Object(W.jsx)(d.a,{to:"/"}):Object(W.jsx)(ie,{})}),Object(W.jsx)(d.b,{path:"/auth/register",children:r?Object(W.jsx)(d.a,{to:"/"}):Object(W.jsx)(oe,{})}),Object(W.jsx)(d.b,{path:"/game",children:Object(W.jsx)(Bt,{constructor:!1})}),Object(W.jsx)(d.b,{path:"/game-constructor",children:r?Object(W.jsx)(Bt,{constructor:!0}):Object(W.jsx)(d.a,{to:"/"})})]})}),Object(W.jsx)("footer",{})]})})})}),Gt=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,300)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},Et=Object(j.a)({reducer:{auth:v,tasks:ge,game:st}});r(245);s.a.render(Object(W.jsx)(i.a,{store:Et,children:Object(W.jsx)(Ht,{})}),document.getElementById("root")),Gt()},34:function(e,t,r){e.exports={setCard:"SetCard_setCard__6mPLe",picturesWrapper:"SetCard_picturesWrapper__1enz5",wordsWrapper:"SetCard_wordsWrapper__3GJ-O",controlsWrapper:"SetCard_controlsWrapper__vugsC",controlsWrapper__constructor:"SetCard_controlsWrapper__constructor__2A87p",submitButton:"SetCard_submitButton__3AuAG",redoWrapper:"SetCard_redoWrapper__ifuKV",counter:"SetCard_counter__3c5Cf",redoButton:"SetCard_redoButton__3D_49",refreshButton:"SetCard_refreshButton__1v1Bp",buttonWrapper:"SetCard_buttonWrapper__3wLGG",deleteButtonWrapper:"SetCard_deleteButtonWrapper__f9ehn"}},46:function(e,t,r){e.exports={header:"GameManager_header__1OhCf",GameWrapper:"GameManager_GameWrapper__18aoo",Arrow:"GameManager_Arrow__3a74E",Arrow__disabled:"GameManager_Arrow__disabled__13EAi",SetsWrapper:"GameManager_SetsWrapper__2Z_37",SetsCounter:"GameManager_SetsCounter__q20g-"}},71:function(e,t,r){e.exports={Nav:"Nav_Nav__2oBMH",NavList:"Nav_NavList__2gWlD",NavList__item:"Nav_NavList__item__UesAu"}},82:function(e,t,r){e.exports={userWrapper:"UserWindow_userWrapper__CcQvf",avatar:"UserWindow_avatar__1PvOM",username:"UserWindow_username__3RpOZ",logout:"UserWindow_logout__2YcaB"}},83:function(e,t,r){e.exports={Frame:"Auth_Frame__3ZJFn",FormContent:"Auth_FormContent__2Uno6",inputWrapper:"Auth_inputWrapper__2jVCk",buttonWrapper:"Auth_buttonWrapper__2Dnvi",textWrapper:"Auth_textWrapper__4bgnZ"}},84:function(e,t,r){e.exports={textDialog:"AddPictureModal_textDialog__2lRqc",buttonWrapper:"AddPictureModal_buttonWrapper__3Wt4G",windowPreview:"AddPictureModal_windowPreview__2ya1V",imagePreview:"AddPictureModal_imagePreview__2BUd8"}},85:function(e,t,r){e.exports={PictureCard:"PictureCard_PictureCard__1r432",cardMedia:"PictureCard_cardMedia__4Vfb0",actionArea:"PictureCard_actionArea__22FGW",wordSpace:"PictureCard_wordSpace__39vbE"}},86:function(e,t,r){e.exports={textDialog:"ChangePictureModal_textDialog__2scB4",windowPreview:"ChangePictureModal_windowPreview__2YuuO",imagePreview:"ChangePictureModal_imagePreview__2JE-S",buttonWrapper:"ChangePictureModal_buttonWrapper__1UgJD"}}},[[246,1,2]]]);
//# sourceMappingURL=main.7503d017.chunk.js.map