(this.webpackJsonpauth=this.webpackJsonpauth||[]).push([[0],{360:function(e,t,n){e.exports=n(579)},391:function(e,t,n){},426:function(e,t){},428:function(e,t){},438:function(e,t){},440:function(e,t){},467:function(e,t){},469:function(e,t){},470:function(e,t){},475:function(e,t){},477:function(e,t){},496:function(e,t){},508:function(e,t){},511:function(e,t){},579:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),u=n(49),l=n(22),s=n(16),i=n.n(s),m=n(23),p=n(21),d=n(103),f=n(43),b=n(620),g=n(625),E=n(207),h=n(618),w=n(85),v=n(163),O=n(161),j=n(140),y=n(314),x=(n(390),n(391),function(e){var t=e.children;e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{title:"title",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))}),k=n(621),_=Object(u.atom)({key:"loggedInUser",default:{sub:null,email_verified:null,phone_number_verified:null,email:null,username:null,token:null}}),C=Object(u.atom)({key:"navigation",default:"home"}),S=(Object(u.atom)({key:"items",default:{rows:[]}}),Object(u.atom)({key:"modal",default:!1}),n(624)),T={UserNotFoundException:"\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u044a\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430",AuthError:"\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b \u0438 \u043f\u0430\u0440\u043e\u043b\u0430 \u043d\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u043f\u0440\u0430\u0437\u043d\u0438",CodeMismatchException:"\u043d\u0435\u0432\u0430\u043b\u0438\u0434\u0435\u043d \u043a\u043e\u0434, \u043c\u043e\u043b\u044f \u043f\u0440\u043e\u0431\u0432\u0430\u0439\u0442\u0435 \u043e\u0442\u043d\u043e\u0432\u043e",NotAuthorizedException:"\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u0430 \u043d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u0438",UsernameExistsException:"\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u044a\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430",PasswordNotMatch:"\u043f\u0430\u0440\u043e\u043b\u0438\u0442\u0435 \u043d\u0435 \u043f\u0430\u0441\u0432\u0430\u0442",InvalidParameterException:"\u043f\u0430\u0440\u043e\u043b\u0430\u0442\u0430 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0435 \u043f\u043e\u043d\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u0430",Empty:""},I=function(e){return r.a.createElement("div",null,Object.entries(e).map((function(e){var t=Object(p.a)(e,2),n=(t[0],t[1]);return"Empty"!==n.name&&r.a.createElement(S.a,{description:T[n.name]?T[n.name]:"".concat(n.message,"-").concat(n.name),type:"error"})})))},F={Input:{height:40,margin:"10px 0px",padding:7,width:"100%"},formContainer:{display:"flex",flexDirection:"column"},button:{backgroundColor:"rebeccapurple",padding:"15px 7px",cursor:"pointer",textAlign:"center",marginBottom:10},buttonText:{color:"white"}},N=function(e){var t=e.type,n=Object(u.useRecoilState)(_),c=Object(p.a)(n,2),o=c[0],s=c[1],d=Object(a.useState)(""),f=Object(p.a)(d,2),b=f[0],g=f[1],E=Object(a.useState)(""),w=Object(p.a)(E,2),v=w[0],O=w[1],j=Object(a.useState)(null),y=Object(p.a)(j,2),x=y[0],S=y[1],T=Object(u.useRecoilState)(C),N=Object(p.a)(T,2),P=N[0],J=N[1];Object(a.useEffect)((function(){J("login")}),[J,P]);var M=function(){var e=Object(m.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.signIn(b,v);case 3:return e.next=5,h.a.currentAuthenticatedUser();case 5:return t=e.sent,e.next=8,h.a.currentSession();case 8:n=e.sent,a=Object(l.a)(Object(l.a)({},t.attributes),{},{username:t.username,token:n.accessToken.jwtToken,refreshtoken:n.refreshToken.token}),s(a),localStorage.setItem("user",JSON.stringify(a)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),S(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,o.x&&r.a.createElement(I,{errorMessage:x}),x&&r.a.createElement(I,{errorMessage:x}),"compact"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{onChange:function(e){return g(e.target.value)},placeholder:"\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b",name:"username",value:b,style:F.InputCompact}),r.a.createElement(k.a,{onChange:function(e){return O(e.target.value)},placeholder:"\u043f\u0430\u0440\u043e\u043b\u0430",name:"password",value:v,type:"password",style:F.InputCompact}),r.a.createElement("div",{style:F.buttonCompact,onClick:M},r.a.createElement("span",{style:F.buttonCompact},"\u0412\u0445\u043e\u0434"))),"full"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{onChange:function(e){return g(e.target.value)},placeholder:"\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b",name:"username",value:b,style:F.Input}),r.a.createElement(k.a,{onChange:function(e){return O(e.target.value)},placeholder:"\u043f\u0430\u0440\u043e\u043b\u0430",name:"password",value:v,type:"password",style:F.Input}),r.a.createElement("div",{style:F.button,onClick:M},r.a.createElement("span",{style:F.buttonText},"\u0412\u0445\u043e\u0434"))))},P=n(62),J=n(104),M=n.n(J),q={api:"https://crlzp2fwh8.execute-api.eu-west-1.amazonaws.com/dev"},A=function(){var e=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("".concat(q.api,"/heartbeat"),{headers:{accesstoken:t,"Content-Type":"application/json"}});case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){e(n)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(i.a.mark((function e(t,n,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.post("".concat(q.api,"/db/").concat(t),JSON.stringify(n),{headers:{accesstoken:a,"Content-Type":"application/json"}});case 2:return r=e.sent,e.abrupt("return",new Promise((function(e){e(r)})));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.post("".concat(q.api,"/register"),JSON.stringify(t),{headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){e(n)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z={Input:{height:40,margin:"10px 0px",padding:7},formContainer:{display:"flex",flexDirection:"column"},button:{backgroundColor:"rebeccapurple",padding:"15px 7px",cursor:"pointer",textAlign:"center",marginBottom:10},buttonText:{color:"white"}},U=function(){var e=Object(u.useRecoilState)(C),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({username:"",password:"",email:"",authCode:"",stage:0,error:""}),s=Object(p.a)(o,2),d=s[0],f=s[1];Object(a.useEffect)((function(){c("signup")}),[c,n]);var b=function(e){f(Object(l.a)(Object(l.a)({},d),{},Object(P.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(m.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.username,n=d.password,a=d.email,e.prev=1,e.next=4,h.a.signUp({username:t,password:n,attributes:{email:a}});case 4:f(Object(l.a)(Object(l.a)({},d),{},{stage:1,error:{name:"Empty"}})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),f(Object(l.a)(Object(l.a)({},d),{},{error:e.t0})),console.log("error signing up...",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.username,n=d.authCode,a=d.email,e.prev=1,e.next=4,h.a.confirmSignUp(t,n);case 4:return e.next=6,D({username:t,email:a,tip:"usersauth",vreme:(new Date).getTime()});case 6:f(Object(l.a)(Object(l.a)({},d),{},{stage:2,error:{name:"Empty"}})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),f(Object(l.a)(Object(l.a)({},d),{},{error:e.t0})),console.log("error confirming signing up...",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,0===d.stage&&r.a.createElement("div",{style:z.formContainer},r.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),d.error&&r.a.createElement(I,{errorMessage:d.error}),r.a.createElement(k.a,{onChange:b,placeholder:"\u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b",name:"username",value:d.username,style:z.Input}),r.a.createElement(k.a,{onChange:b,placeholder:"\u043f\u0430\u0440\u043e\u043b\u0430",name:"password",value:d.password,type:"password",style:z.Input}),r.a.createElement(k.a,{onChange:b,placeholder:"Email",name:"email",value:d.email,style:z.Input}),r.a.createElement("div",{style:z.button,onClick:g},r.a.createElement("span",{style:z.buttonText},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))),1===d.stage&&r.a.createElement("div",{style:z.formContainer},r.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),d.error&&r.a.createElement(I,{errorMessage:d.error}),r.a.createElement(k.a,{onChange:b,placeholder:"Authorization Code",name:"authCode",value:d.authCode,style:z.Input}),r.a.createElement("div",{style:z.button,onClick:E},r.a.createElement("span",{style:z.buttonText},"\u041f\u043e\u0442\u0432\u044a\u0440\u0434\u0438 \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))),2===d.stage&&r.a.createElement(r.a.Fragment,null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430 ,",r.a.createElement("a",{href:"/app/login"},"\u0412\u0445\u043e\u0434")))},B={Input:{height:40,margin:"10px 0px",padding:7,width:"100%"},formContainer:{display:"flex",flexDirection:"column"},button:{backgroundColor:"rebeccapurple",padding:"15px 7px",cursor:"pointer",textAlign:"center",marginBottom:10},buttonText:{color:"white"}},K=function(){var e=Object(u.useRecoilState)(C),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({username:"",error:"",validation:"",password:"",confirmPassword:"",stage:0}),s=Object(p.a)(o,2),d=s[0],f=s[1];Object(a.useEffect)((function(){c("forgot")}),[c,n]);var b=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.forgotPassword(d.username);case 3:f(Object(l.a)(Object(l.a)({},d),{},{stage:1})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),f(Object(l.a)(Object(l.a)({},d),{},{error:e.t0}));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),g=function(){f(Object(l.a)(Object(l.a)({},d),{},{stage:2}))},E=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,d.password!==d.confirmPassword){e.next=7;break}return e.next=4,h.a.forgotPasswordSubmit(d.username,d.validation,d.password);case 4:f(Object(l.a)(Object(l.a)({},d),{},{stage:3,error:{name:"Empty"}})),e.next=8;break;case 7:f(Object(l.a)(Object(l.a)({},d),{},{error:{name:"PasswordNotMatch",message:"Passwords don't Match"}}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),f(Object(l.a)(Object(l.a)({},d),{},{error:e.t0}));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),w=function(e){f(Object(l.a)(Object(l.a)({},d),{},Object(P.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0417\u0430\u0431\u0440\u0430\u0432\u0435\u043d\u0430 \u041f\u0430\u0440\u043e\u043b\u0430"),d.error&&r.a.createElement(I,{errorMessage:d.error}),0===d.stage&&r.a.createElement("div",{style:B.formContainer},r.a.createElement(k.a,{onChange:w,placeholder:"username",name:"username",value:d.username,style:B.Input}),r.a.createElement("div",{role:"button",tabIndex:0,style:B.button,onClick:b,onKeyDown:b},r.a.createElement("span",{style:B.buttonText},"\u041d\u0430\u043f\u0440\u0435\u0434"))),1===d.stage&&r.a.createElement("div",null,r.a.createElement("div",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u0438 E-mail-a \u0441\u0438 \u0437\u0430 \u043f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0430\u0432\u0430\u0449 \u043a\u043e\u0434"),r.a.createElement(k.a,{onChange:w,placeholder:"\u043f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0430\u0432\u0430\u0449 \u043a\u043e\u0434",name:"validation",value:d.validation,style:B.Input}),r.a.createElement("div",{role:"button",tabIndex:0,style:B.button,onClick:g,onKeyDown:g},r.a.createElement("span",{style:B.buttonText},"\u041e\u041a"))),2===d.stage&&r.a.createElement("div",null,r.a.createElement(k.a,{type:"password",onChange:w,placeholder:"\u043d\u043e\u0432\u0430 \u043f\u0430\u0440\u043e\u043b\u0430",name:"password",value:d.password,style:B.Input}),r.a.createElement("br",null),r.a.createElement(k.a,{type:"password",onChange:w,placeholder:"\u043f\u043e\u0442\u0432\u044a\u0440\u0434\u0438 \u043f\u0430\u0440\u043e\u043b\u0430\u0442\u0430",name:"confirmPassword",value:d.confirmPassword,style:B.Input}),r.a.createElement("div",{role:"button",tabIndex:0,href:"/",style:B.button,onClick:E,onKeyDown:E},r.a.createElement("span",{style:B.buttonText},"\u0421\u043c\u0435\u043d\u0438 \u043f\u0430\u0440\u043e\u043b\u0430\u0442\u0430"))),3===d.stage&&r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,"\u043f\u0430\u0440\u043e\u043b\u0430\u0442\u0430 \u0441\u043c\u0435\u043d\u0435\u043d\u0430,",r.a.createElement("a",{href:"/app/login"},"\u0412\u0445\u043e\u0434"))))},Q=n(100),L=n(92),V=n(34),W=n(619),G=n(615),H=n(336),X=n.n(H),Y=n(337),Z=n.n(Y),$=n(338),ee=n.n($),te=n(352),ne=function(e){var t=e.user,n=e.username,c=Object(a.useState)(!1),o=Object(p.a)(c,2),u=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{type:"primary",shape:"round",style:{float:"right"},onClick:function(){return alert(n),l(!u),void R("Follow",{following_id:n},t.token)},disabled:u},"\u0421\u043b\u0435\u0434\u0432\u0430\u0439!"))},ae=ee()(Z.a),re=W.a.Meta,ce=k.a.Search,oe=function(e){var t=e.item,n=e.user,c=e.showfollow,o=Object(a.useState)(t.comment||[]),u=Object(p.a)(o,2),l=u[0],s=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{style:{marginBottom:5}},r.a.createElement(re,{title:r.a.createElement(r.a.Fragment,null,"@".concat(t.user_id," "),r.a.createElement("small",null,r.a.createElement(X.a,{date:t.created_at,formatter:ae})),c&&r.a.createElement(ne,{user:n,username:t.user_id})),description:t.tweet}),l[0]&&l.map((function(e){return r.a.createElement(G.a,{key:e.id,author:e.user_id,content:r.a.createElement("p",null,e.comment)})})),n&&r.a.createElement(ce,{placeholder:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440",enterButton:"\u0427\u0443\u0440\u0443\u043b\u0438\u043a",size:"medium",onSearch:function(e){var a={comment:e};s([].concat(Object(V.a)(l),[a])),R("Comment",{post_id:t.id,comment:e},n.token)}})))};function ue(){var e=Object(Q.a)(["\n    {\n      Tweet(order_by: { id: desc }, limit: 10) {\n        user_id\n        tweet\n        created_at\n        id\n        comment {\n          id\n          comment\n          user_id\n        }\n      }\n    }\n  "]);return ue=function(){return e},e}var le=function(){var e=Object(u.useRecoilState)(C),t=Object(p.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){c("home")}),[c,n]);var o=Object(w.useQuery)(Object(L.a)(ue())),l=o.data,s=o.loading,i=o.error;return s?"Loading...":i?"Error! ".concat(i.message):r.a.createElement(r.a.Fragment,null,l.Tweet.map((function(e){return r.a.createElement(oe,{key:e.id,item:e})})))};function se(){var e=Object(Q.a)(['\n    {\n      Tweet(where: { user_id: { _eq: "','" } }, order_by: { id: desc },limit:100) {\n        tweet\n        created_at\n        id\n        user_id\n      }\n    }\n  ']);return se=function(){return e},e}var ie=function(e){var t=e.user,n=Object(f.g)().id,a=Object(w.useQuery)(Object(L.a)(se(),n)),c=a.data,o=a.loading,u=a.error;return o?"Loading...":u?"Error! ".concat(u.message):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,n),c.Tweet[0]?c.Tweet.map((function(e){return r.a.createElement(oe,{key:e.id,item:e,user:t})})):r.a.createElement(r.a.Fragment,null,"\u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u044a\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430"))},me=n(616),pe=n(217);function de(){var e=Object(Q.a)(["\n    {\n      Tweet(where: {}, order_by: { id: desc }, limit: 100) {\n        id\n        user_id\n        tweet\n        created_at\n        comment {\n          id\n          comment\n          user_id\n        }\n      }\n    }\n  "]);return de=function(){return e},e}var fe=function(e){var t=e.user,n=e.following;console.log(n);var a=Object(w.useQuery)(Object(L.a)(de())),c=a.data,o=a.loading,u=a.error;return o?"Loading...":u?"Error! ".concat(u.message):r.a.createElement(r.a.Fragment,null,c.Tweet.map((function(e){return r.a.createElement(oe,{key:e.id,item:e,user:t,showfollow:![].concat(Object(V.a)(n),[t.username]).includes(e.user_id)})})))};function be(){var e=Object(Q.a)(['\n    {\n     Tweet(where: {wall: {user_id: {_eq: "','"}}}, order_by: {created_at: desc}, limit: 100) {\n    id\n    user_id\n    created_at\n    tweet\n    comment {\n          id\n          comment\n          user_id\n        }\n  }\n    myWall:Tweet(order_by: {created_at: desc}, where: {user_id: {_eq: "arpecop"}}, limit: 100) {\n    id\n    user_id\n    created_at\n    tweet\n  }\n   Follow(where: {user_id: {_eq: "','"}}) {\n    following_id\n  }\n    }\n  ']);return be=function(){return e},e}var ge=function(e){var t=e.user,n=Object(a.useState)([]),c=Object(p.a)(n,2),o=c[0],u=c[1],l=Object(pe.b)(),s=l.control,d=l.errors,f=l.handleSubmit,b=l.setValue,g=function(){var e=Object(m.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.tweet,b("tweet",""),R("Tweet",{tweet:a},t.token),u([].concat(Object(V.a)(o),[{tweet:a,id:(new Date).getTime().toString(),user_id:t.username}]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=Object(w.useQuery)(Object(L.a)(be(),t.username,t.username)),h=E.data,v=E.loading,O=E.error;return v?"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043c...":O?"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043c...".concat(O):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:f(g)},r.a.createElement(pe.a,{as:r.a.createElement(me.a,{id:"outlined-basic",error:!!d.tweet,label:(d.tweet,"\u043a\u0430\u043a\u0432\u043e \u043c\u0438\u0441\u043b\u0438\u0442\u0435 ".concat(t.username,"?")),variant:"outlined",style:{width:"80%"}}),defaultValue:"",name:"tweet",control:s,rules:{required:!0}}),r.a.createElement(te.a,{type:"primary",htmlType:"submit",style:{width:"20%",height:56}},"\u0427\u0443\u0440\u0443\u043b\u0438\u043a!")),JSON.stringify(),h.Tweet[0]&&r.a.createElement("h1",null,"\u0421\u0442\u0435\u043d\u0430"),o.map((function(e){return r.a.createElement(oe,{key:e.id,item:e,user:t})})),[].concat(Object(V.a)(h.Tweet),Object(V.a)(h.myWall)).sort((function(e,t){return e.id-t.id})).reverse().map((function(e){return r.a.createElement(oe,{key:e.id,item:e,user:t})})),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0438"),r.a.createElement(fe,{user:t,following:h.Follow.map((function(e){return e.following_id}))})))};var Ee=new v.a({uri:"https://rudixdb.herokuapp.com/v1/graphql"});E.a.configure({aws_project_region:"eu-west-1",aws_cognito_identity_pool_id:"eu-west-1:3f5f916d-2252-487f-99c0-7aa69115f973",aws_cognito_region:"eu-west-1",aws_user_pools_id:"eu-west-1_T6v05tjzh",aws_user_pools_web_client_id:"eqlretnsetkj5p57bqtandjqa",oauth:{}});var he=function(){var e=Object(u.useRecoilState)(_),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(u.useRecoilValue)(C),s=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),r=Object(p.a)(n,2),c=r[0],o=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("theme",!1),E=Object(p.a)(s,2),v=E[0],y=E[1],k=new O.a({link:Ee,cache:new j.a}),S=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.signOut();case 2:localStorage.setItem("user",JSON.stringify({})),c({});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=localStorage.getItem("user"),t=e?JSON.parse(e):{};c(t)}),[c]),Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.token){e.next=12;break}return e.next=3,A(n.token);case 3:if("TokenExpiredError"!==e.sent.data.name){e.next=12;break}return e.next=7,h.a.currentAuthenticatedUser();case 7:return t=e.sent,e.next=10,h.a.currentSession();case 10:a=e.sent,t.refreshSession(a.refreshToken,(function(e,t){var a=Object(l.a)(Object(l.a)({},n),{},{token:t.accessToken.jwtToken});c(a),localStorage.setItem("user",JSON.stringify(a))}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=setInterval(Object(m.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e();case 1:case"end":return t.stop()}}),t)}))),2e4);return function(){return clearInterval(t)}}),[n,c]),r.a.createElement(w.ApolloProvider,{client:k},r.a.createElement(d.a,null,r.a.createElement("div",{className:v?"dark":"white"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"/logo.png",alt:""})),r.a.createElement(b.a,{selectedKeys:[o],mode:"horizontal"},r.a.createElement(b.a.Item,{key:"home"},r.a.createElement(d.b,{to:"/"},"\u041d\u0430\u0447\u0430\u043b\u043e")),n.username?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Item,{key:"logout"},r.a.createElement(d.b,{to:"/",onClick:function(){return S()}},"\u0418\u0437\u0445\u043e\u0434"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Item,{key:"login"},r.a.createElement(d.b,{to:"/app/login"},"\u0412\u0445\u043e\u0434")),r.a.createElement(b.a.Item,{key:"signup"},r.a.createElement(d.b,{to:"/app/signup"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),r.a.createElement(b.a.Item,{key:"forgot"},r.a.createElement(d.b,{to:"/app/forgot"},"\u0417\u0430\u0431\u0440. \u041f\u0430\u0440\u043e\u043b\u0430")))),r.a.createElement("div",{className:"switcher"},r.a.createElement(g.a,{defaultChecked:v,onChange:function(){return y(!v)}})),r.a.createElement(x,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/app/login"},n.username?r.a.createElement(f.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),r.a.createElement(N,{type:"full"}))),r.a.createElement(f.b,{path:"/app/forgot"},r.a.createElement(K,null)),r.a.createElement(f.b,{path:"/app/signup"},r.a.createElement(U,null)),r.a.createElement(f.b,{path:"/:id"},n.username?r.a.createElement(ie,{user:n}):r.a.createElement(ie,null)),r.a.createElement(f.b,{path:"/"},n.username?r.a.createElement(ge,{user:n}):r.a.createElement(le,{menu:"home"})))))))};o.a.render(r.a.createElement(u.RecoilRoot,null,r.a.createElement(he,null)),document.getElementById("root"))}},[[360,1,2]]]);
//# sourceMappingURL=main.50e18f8c.chunk.js.map