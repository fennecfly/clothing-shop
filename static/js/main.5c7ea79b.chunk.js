(this["webpackJsonpclothing-shop"]=this["webpackJsonpclothing-shop"]||[]).push([[0],{64:function(e,t,n){},68:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a,i,r=n(6),s=n.n(r),c=n(39),l=n.n(c),o=n(44),p=n(28),d=n(0),b=n.n(d),u=n(16),h=n(2),m=n(1),g=n(3),j=n(8),f=n(9),O=n(14),v=(n(64),["title","titleId"]);function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function k(e,t){var n=e.title,s=e.titleId,c=w(e,v);return r.createElement("svg",x({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":s},c),void 0===n?r.createElement("title",{id:s},"Group"):n?r.createElement("title",{id:s},n):null,a||(a=r.createElement("desc",null,"Created with Sketch.")),i||(i=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var y=r.forwardRef(k),U=(n.p,n(51)),N=n.n(U),S=n(34),C=(n(65),n(84),function(e){throw e}),B=function(){var e=Object(h.a)(b.a.mark((function e(t,n){var a,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P.doc("users/".concat(t.uid)),e.next=3,a.get();case 3:if(e.sent.exists){e.next=8;break}return i=t.displayName,r=t.email,e.next=8,a.set(Object(u.a)({displayName:i,email:r,creationDate:N()().toISOString()},n));case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();S.a.initializeApp({apiKey:"AIzaSyACkuYxJxJ4EUu3fCkAITexymGNRXPuOJ0",authDomain:"clothing-shop-9f739.firebaseapp.com",projectId:"clothing-shop-9f739",storageBucket:"clothing-shop-9f739.appspot.com",messagingSenderId:"1025641404349",appId:"1:1025641404349:web:7308982f22fd41e39164d4",measurementId:"G-3TR0ZY4HQD"});var I=S.a.auth(),P=S.a.firestore(),T=new S.a.auth.GoogleAuthProvider;T.setCustomParameters({prompt:"select_account"});var E=function(){I.signInWithPopup(T).catch(C)},A=(S.a,n(68),n(12)),J=Object(o.b)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var t=e.currentUser;return Object(A.jsxs)("div",{className:"header",children:[Object(A.jsx)(p.c,{to:"/",children:Object(A.jsx)(y,{className:"logoContainer"})}),Object(A.jsxs)("div",{className:"options",children:[Object(A.jsx)(p.c,{className:"option",to:"/shop",children:"SHOP"}),Object(A.jsx)(p.c,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(A.jsx)("div",{className:"option",onClick:function(){return I.signOut()},children:"SIGN OUT"}):Object(A.jsx)(p.c,{className:"option",to:"/signIn",children:"SIGN IN"})]})]})})),W=n(27),G=(n(73),Object(O.f)((function(e){var t=e.title,n=e.imageUrl,a=e.size,i=e.history,r=e.match,s=e.linkUrl;return Object(A.jsxs)("div",{className:"".concat(a," menuItem"),onClick:function(){return i.push(r.url+s)},children:[Object(A.jsx)("div",{className:"backgroundImage",style:{backgroundImage:"url(".concat(n,")")}}),Object(A.jsxs)("div",{className:"content",children:[Object(A.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(A.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),D=(n(74),[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]),R=["id"],M=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={sections:D},a}return Object(g.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{className:"directoryMenu",children:this.state.sections.map((function(e){var t=e.id,n=Object(W.a)(e,R);return Object(A.jsx)(G,Object(u.a)({},n),t)}))})}}]),n}(s.a.Component),F=(n(75),function(){return Object(A.jsx)("div",{className:"homepage",children:Object(A.jsx)(M,{})})}),z=(n(76),function(e){var t=e.name,n=e.price,a=e.imageUrl;return Object(A.jsxs)("div",{className:"collectionItem",children:[Object(A.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(A.jsxs)("div",{className:"collectionFooter",children:[Object(A.jsx)("span",{className:"name",children:t}),Object(A.jsxs)("span",{className:"price",children:["$",n]})]})]})}),L=(n(77),["id"]),q=function(e){var t=e.title,n=e.items;return Object(A.jsxs)("div",{className:"collectionPreview",children:[Object(A.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(A.jsx)("div",{className:"preview",children:n.slice(0,4).map((function(e){var t=e.id,n=Object(W.a)(e,L);return Object(A.jsx)(z,Object(u.a)({},n),t)}))})]})},H=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],V=["id"],Y=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={shopData:H},a}return Object(g.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{className:"shopPage",children:this.state.shopData.map((function(e){var t=e.id,n=Object(W.a)(e,V);return Object(A.jsx)(q,Object(u.a)({},n),t)}))})}}]),n}(s.a.Component),Q=n(4),X=n(5),K=(n(78),["children","isGoogleSignIn"]),Z=function(e){var t=e.children,n=e.isGoogleSignIn,a=Object(W.a)(e,K);return Object(A.jsx)("button",Object(u.a)(Object(u.a)({className:"".concat(n?"googleSignIn":""," customButton")},a),{},{children:t}))},_=(n(79),["handleChange","label"]),$=function(e){var t=e.handleChange,n=e.label,a=Object(W.a)(e,_);return Object(A.jsxs)("div",{className:"group",children:[Object(A.jsx)("input",Object(u.a)({className:"formInput",onChange:t},a)),n?Object(A.jsx)("label",{className:"".concat(a.value.length?"shrink":""," formInputLabel"),children:n}):null]})},ee=(n(80),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,i=n.email,r=n.password,e.prev=2,e.next=5,I.signInWithEmailAndPassword(i,r);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),e.t0 instanceof X.c?"auth/user-not-found"===e.t0.code?alert("This user doesn't exist"):"auth/wrong-password"===e.t0.code?alert("The password is wrong or the user signed up with Google"):console.log(e.t0):console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,i=t.name;a.setState(Object(Q.a)({},i,n))},a.state={email:"",password:""},a}return Object(g.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:"signIn",children:[Object(A.jsx)("h2",{className:"title",children:"I already have an account"}),Object(A.jsx)("span",{children:"Sign in with your email and password"}),Object(A.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(A.jsx)($,{label:"Email",name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),Object(A.jsx)($,{label:"Password",name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(A.jsxs)("div",{className:"buttons",children:[Object(A.jsx)(Z,{type:"submit",children:"sign in"}),Object(A.jsx)(Z,{type:"button",onClick:E,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(s.a.Component)),te=ee,ne=(n(81),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,i,r,s,c,l,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,i=n.displayName,r=n.email,s=n.password,c=n.confirmPassword,s===c){e.next=6;break}alert("Passwords don't match"),e.next=24;break;case 6:if(!(s.length<6)){e.next=10;break}alert("Password should be at least 6 characters"),e.next=24;break;case 10:return e.prev=10,e.next=13,I.createUserWithEmailAndPassword(r,s);case 13:if(l=e.sent,!(o=l.user)){e.next=19;break}return e.next=18,B(o,{displayName:i});case 18:a.setState({email:"",password:"",displayName:"",confirmPassword:""});case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(10),e.t0 instanceof X.c&&"auth/email-already-in-use"===e.t0.code?alert("This email is already used"):console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[10,21]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,i=t.name;a.setState(Object(Q.a)({},i,n))},a.state={confirmPassword:"",displayName:"",email:"",password:""},a}return Object(g.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:"signUp",children:[Object(A.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(A.jsx)("span",{children:"Sign up with your email and password"}),Object(A.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(A.jsx)($,{label:"Display Name",name:"displayName",type:"text",value:this.state.displayName,handleChange:this.handleChange,required:!0}),Object(A.jsx)($,{label:"Email",name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),Object(A.jsx)($,{label:"Password",name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(A.jsx)($,{label:"Confirm Password",name:"confirmPassword",type:"password",value:this.state.confirmPassword,handleChange:this.handleChange,required:!0}),Object(A.jsx)(Z,{type:"submit",children:"Sign Up"})]})]})}}]),n}(s.a.Component)),ae=ne,ie=(n(82),function(){return Object(A.jsxs)("div",{className:"signInAndUp",children:[Object(A.jsx)(te,{}),Object(A.jsx)(ae,{})]})}),re=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).unsubscribeFromAuth=null,a.state={currentUser:null},a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=I.onAuthStateChanged(function(){var t=Object(h.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,B(n,{});case 3:t.sent.onSnapshot((function(t){e.setState({currentUser:Object(u.a)({id:t.id},t.data())})})),t.next=8;break;case 7:e.setState({currentUser:null});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth&&this.unsubscribeFromAuth()}},{key:"render",value:function(){return Object(A.jsxs)(p.b,{basename:"/",children:[Object(A.jsx)(J,{}),Object(A.jsxs)(O.c,{children:[Object(A.jsx)(O.a,{exact:!0,path:"/",component:F}),Object(A.jsx)(O.a,{path:"/shop",component:Y}),Object(A.jsx)(O.a,{path:"/signIn",component:ie})]})]})}}]),n}(s.a.Component),se=re,ce=n(38),le=n(53),oe=n.n(le),pe={currentUser:null},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;return"SET_CURRENT_USER"===t.type?Object(u.a)(Object(u.a)({},e),{},{currentUser:t.payload}):e},be=Object(ce.b)({user:de}),ue=[oe.a],he=Object(ce.c)(be,ce.a.apply(void 0,ue));l.a.render(Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsx)(o.a,{store:he,children:Object(A.jsx)(p.a,{children:Object(A.jsx)(se,{})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.5c7ea79b.chunk.js.map