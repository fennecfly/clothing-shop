(this["webpackJsonpclothing-shop"]=this["webpackJsonpclothing-shop"]||[]).push([[0],{53:function(e,t,i){},58:function(e,t,i){},67:function(e,t,i){},68:function(e,t,i){},69:function(e,t,i){},70:function(e,t,i){},71:function(e,t,i){},72:function(e,t,i){},73:function(e,t,i){},74:function(e,t,i){},75:function(e,t,i){},76:function(e,t,i){},77:function(e,t,i){"use strict";i.r(t);var n,a,r=i(11),c=i.n(r),s=i(46),l=i.n(s),o=i(28),p=i(1),b=i(3),m=i(8),h=i(9),d=i(14),u=(i(53),["title","titleId"]);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},g.apply(this,arguments)}function j(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function O(e,t){var i=e.title,c=e.titleId,s=j(e,u);return r.createElement("svg",g({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},s),void 0===i?r.createElement("title",{id:c},"Group"):i?r.createElement("title",{id:c},i):null,n||(n=r.createElement("desc",null,"Created with Sketch.")),a||(a=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var f=r.forwardRef(O),v=(i.p,i(33)),k=(i(55),i(78),function(e){throw e});v.a.initializeApp({apiKey:"AIzaSyACkuYxJxJ4EUu3fCkAITexymGNRXPuOJ0",authDomain:"clothing-shop-9f739.firebaseapp.com",projectId:"clothing-shop-9f739",storageBucket:"clothing-shop-9f739.appspot.com",messagingSenderId:"1025641404349",appId:"1:1025641404349:web:7308982f22fd41e39164d4",measurementId:"G-3TR0ZY4HQD"});var x=v.a.auth(),w=(v.a.firestore(),new v.a.auth.GoogleAuthProvider);w.setCustomParameters({prompt:"select_account"});var U=function(e){x.signInWithPopup(w).catch(k)},y=(v.a,i(58),i(12)),N=function(e){var t=e.currentUser;return Object(y.jsxs)("div",{className:"header",children:[Object(y.jsx)(o.c,{to:"/",children:Object(y.jsx)(f,{className:"logoContainer"})}),Object(y.jsxs)("div",{className:"options",children:[Object(y.jsx)(o.c,{className:"option",to:"/shop",children:"SHOP"}),Object(y.jsx)(o.c,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(y.jsx)("div",{className:"option",onClick:function(){return x.signOut()},children:"SIGN OUT"}):Object(y.jsx)(o.c,{className:"option",to:"/signIn",children:"SIGN IN"})]})]})},C=i(25),S=i(27),B=(i(67),Object(d.f)((function(e){var t=e.title,i=e.imageUrl,n=e.size,a=e.history,r=e.match,c=e.linkUrl;return Object(y.jsxs)("div",{className:"".concat(n," menuItem"),onClick:function(){return a.push(r.url+c)},children:[Object(y.jsx)("div",{className:"backgroundImage",style:{backgroundImage:"url(".concat(i,")")}}),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(y.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),I=(i(68),[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]),T=["id"],J=function(e){Object(m.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).state={sections:I},n}return Object(b.a)(i,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"directoryMenu",children:this.state.sections.map((function(e){var t=e.id,i=Object(S.a)(e,T);return Object(y.jsx)(B,Object(C.a)({},i),t)}))})}}]),i}(c.a.Component),P=(i(69),function(){return Object(y.jsx)("div",{className:"homepage",children:Object(y.jsx)(J,{})})}),A=(i(70),function(e){var t=e.name,i=e.price,n=e.imageUrl;return Object(y.jsxs)("div",{className:"collectionItem",children:[Object(y.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),Object(y.jsxs)("div",{className:"collectionFooter",children:[Object(y.jsx)("span",{className:"name",children:t}),Object(y.jsxs)("span",{className:"price",children:["$",i]})]})]})}),E=(i(71),["id"]),W=function(e){var t=e.title,i=e.items;return Object(y.jsxs)("div",{className:"collectionPreview",children:[Object(y.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(y.jsx)("div",{className:"preview",children:i.slice(0,4).map((function(e){var t=e.id,i=Object(S.a)(e,E);return Object(y.jsx)(A,Object(C.a)({},i),t)}))})]})},G=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],M=["id"],D=function(e){Object(m.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).state={shopData:G},n}return Object(b.a)(i,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"shopPage",children:this.state.shopData.map((function(e){var t=e.id,i=Object(S.a)(e,M);return Object(y.jsx)(W,Object(C.a)({},i),t)}))})}}]),i}(c.a.Component),F=i(4),R=(i(72),["children","isGoogleSignIn"]),z=function(e){var t=e.children,i=e.isGoogleSignIn,n=Object(S.a)(e,R);return Object(y.jsx)("button",Object(C.a)(Object(C.a)({className:"".concat(i?"googleSignIn":""," customButton")},n),{},{children:t}))},L=(i(73),["handleChange","label"]),H=function(e){var t=e.handleChange,i=e.label,n=Object(S.a)(e,L);return Object(y.jsxs)("div",{className:"group",children:[Object(y.jsx)("input",Object(C.a)({className:"formInput",onChange:t},n)),i?Object(y.jsx)("label",{className:"".concat(n.value.length?"shrink":""," formInputLabel"),children:i}):null]})},V=(i(74),function(e){Object(m.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({email:"",password:""})},n.handleChange=function(e){var t=e.target,i=t.value,a=t.name;n.setState(Object(F.a)({},a,i))},n.state={email:"",password:""},n}return Object(b.a)(i,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"signIn",children:[Object(y.jsx)("h2",{className:"title",children:"I already have an accounttttttttttttttt"}),Object(y.jsx)("span",{children:"Sign in with your email and password"}),Object(y.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(y.jsx)(H,{label:"Email",name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),Object(y.jsx)(H,{label:"Password",name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsx)(z,{type:"submit",children:"sign in"}),Object(y.jsx)(z,{onClick:U,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),i}(c.a.Component)),Y=(i(75),function(){return Object(y.jsx)("div",{className:"signInAndUp",children:Object(y.jsx)(V,{})})}),Q=function(e){Object(m.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).unsubscribeFromAuth=null,n.state={currentUser:null},n}return Object(b.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=x.onAuthStateChanged((function(t){e.setState({currentUser:t})}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth&&this.unsubscribeFromAuth()}},{key:"render",value:function(){return Object(y.jsxs)(o.b,{basename:"/",children:[Object(y.jsx)(N,{currentUser:this.state.currentUser}),Object(y.jsxs)(d.c,{children:[Object(y.jsx)(d.a,{exact:!0,path:"/",component:P}),Object(y.jsx)(d.a,{path:"/shop",component:D}),Object(y.jsx)(d.a,{path:"/signIn",component:Y})]})]})}}]),i}(c.a.Component);i(76);l.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(o.a,{children:Object(y.jsx)(Q,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.a1852da1.chunk.js.map