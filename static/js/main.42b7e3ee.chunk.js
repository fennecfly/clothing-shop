(this["webpackJsonpclothing-shop"]=this["webpackJsonpclothing-shop"]||[]).push([[0],{68:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r,a,c=n(7),i=n.n(c),s=n(41),l=n.n(s),o=n(18),u=n(30),d=n(53),m=n(0),b=n.n(m),p=n(14),h=n(2),j=n(1),g=n(3),O=n(11),f=n(12),v=n(15),x=n(16),y=(n(68),["title","titleId"]);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function N(e,t){var n=e.title,i=e.titleId,s=k(e,y);return c.createElement("svg",w({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":i},s),void 0===n?c.createElement("title",{id:i},"Group"):n?c.createElement("title",{id:i},n):null,r||(r=c.createElement("desc",null,"Created with Sketch.")),a||(a=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var C=c.forwardRef(N),I=(n.p,n(54)),U=n.n(I),E=n(37),S=(n(69),n(97),function(e){throw e}),T=function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.doc("users/".concat(t.uid)),e.next=3,r.get();case 3:if(e.sent.exists){e.next=8;break}return a=t.displayName,c=t.email,e.next=8,r.set(Object(p.a)({displayName:a,email:c,creationDate:U()().toISOString()},n));case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();E.a.initializeApp({apiKey:"AIzaSyACkuYxJxJ4EUu3fCkAITexymGNRXPuOJ0",authDomain:"clothing-shop-9f739.firebaseapp.com",projectId:"clothing-shop-9f739",storageBucket:"clothing-shop-9f739.appspot.com",messagingSenderId:"1025641404349",appId:"1:1025641404349:web:7308982f22fd41e39164d4",measurementId:"G-3TR0ZY4HQD"});var B=E.a.auth(),P=E.a.firestore(),A=new E.a.auth.GoogleAuthProvider;A.setCustomParameters({prompt:"select_account"});var H,D=function(){B.signInWithPopup(A).catch(S)},R=(E.a,function(e){return e.cart}),M=Object(x.a)([R],(function(e){return e.hidden})),G=Object(x.a)([R],(function(e){return e.cartItems})),J=Object(x.a)([G],(function(e){return e.reduce((function(e,t){return e+t.count}),0)})),W=Object(x.a)([G],(function(e){return e.reduce((function(e,t){var n=t.count;return e+t.price*n}),0)})),z=Object(x.a)([function(e){return e.user}],(function(e){return e.currentUser}));!function(e){e.ToggleCartHidden="TOGGLE_CART_HIDDEN",e.AddCartItem="ADD_CART_ITEM",e.RemoveCartItem="REMOVE_CART_ITEM",e.DeleteCartItem="DELETE_CART_ITEM"}(H||(H={}));var V,F,L,_,q,Y,Q,X,K,Z,$,ee,te,ne,re,ae=function(){return{type:H.ToggleCartHidden,payload:void 0}},ce=function(e){return{type:H.AddCartItem,payload:e}},ie=(n(72),n(6)),se=function(e){var t=e.item,n=t.imageUrl,r=t.price,a=t.name,c=t.count;return Object(ie.jsxs)("div",{className:"cartItem",children:[Object(ie.jsx)("img",{src:n,alt:"item"}),Object(ie.jsxs)("div",{className:"itemDetails",children:[Object(ie.jsx)("span",{className:"name",children:a}),Object(ie.jsxs)("span",{className:"price",children:[c," x $",r]})]})]})},le=n(32),oe=(n(74),["children","isGoogleSignIn","inverted"]),ue=function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,a=Object(le.a)(e,oe);return Object(ie.jsx)("button",Object(p.a)(Object(p.a)({className:"\n      ".concat(r?"inverted":"","\n      ").concat(n?"googleSignIn":"","\n      customButton\n    ")},a),{},{children:t}))},de=(n(75),Object(x.b)({cartItems:G})),me=Object(v.g)(Object(o.b)(de,(function(e){return{toggleCartHidden:function(){return e(ae())}}}))((function(e){var t=e.cartItems,n=e.history,r=e.toggleCartHidden;return Object(ie.jsxs)("div",{className:"cartDropdown",children:[Object(ie.jsx)("div",{className:"cartItems",children:t.length?t.map((function(e){return Object(ie.jsx)(se,{item:e},e.id)})):Object(ie.jsx)("span",{className:"emptyMessage",children:"Your cart is empty"})}),Object(ie.jsx)(ue,{onClick:function(){t.length&&"/checkout"!==n.location.pathname&&(r(),n.push("/checkout"))},inverted:!0,children:"GO TO CHECKOUT"})]})}))),be=["title","titleId"];function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}function he(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function je(e,t){var n=e.title,r=e.titleId,a=he(e,be);return c.createElement("svg",pe({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),V||(V=c.createElement("g",null)),F||(F=c.createElement("g",null)),L||(L=c.createElement("g",null)),_||(_=c.createElement("g",null)),q||(q=c.createElement("g",null)),Y||(Y=c.createElement("g",null)),Q||(Q=c.createElement("g",null)),X||(X=c.createElement("g",null)),K||(K=c.createElement("g",null)),Z||(Z=c.createElement("g",null)),$||($=c.createElement("g",null)),ee||(ee=c.createElement("g",null)),te||(te=c.createElement("g",null)),ne||(ne=c.createElement("g",null)),re||(re=c.createElement("g",null)))}var ge,Oe=c.forwardRef(je),fe=(n.p,n(79),Object(x.b)({itemCount:J})),ve=Object(o.b)(fe,(function(e){return{toggleCartHidden:function(){return e(ae())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(ie.jsxs)("div",{className:"cartIcon",onClick:t,children:[Object(ie.jsx)(Oe,{className:"shoppingIcon"}),Object(ie.jsx)("span",{className:"itemCount",children:n})]})})),xe=(n(80),Object(x.b)({currentUser:z,cartHidden:M})),ye=Object(o.b)(xe)((function(e){var t=e.currentUser,n=e.cartHidden;return Object(ie.jsxs)("div",{className:"header",children:[Object(ie.jsx)(u.c,{to:"/",children:Object(ie.jsx)(C,{className:"logoContainer"})}),Object(ie.jsxs)("div",{className:"options",children:[Object(ie.jsx)(u.c,{className:"option",to:"/shop",children:"SHOP"}),Object(ie.jsx)(u.c,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(ie.jsx)("div",{className:"option",onClick:function(){return B.signOut()},children:"SIGN OUT"}):Object(ie.jsx)(u.c,{className:"option",to:"/signIn",children:"SIGN IN"}),Object(ie.jsx)(ve,{})]}),n?null:Object(ie.jsx)(me,{})]})})),we=(n(81),Object(o.b)(null,(function(e){return{deleteCartItem:function(t){return e(function(e){return{type:H.DeleteCartItem,payload:e}}(t))},removeCartItem:function(t){return e(function(e){return{type:H.RemoveCartItem,payload:e}}(t))},addCartItem:function(t){return e(ce(t))}}}))((function(e){var t=e.deleteCartItem,n=e.removeCartItem,r=e.addCartItem,a=e.cartItem,c=a.imageUrl,i=a.name,s=a.price,l=a.count,o=a.id;return Object(ie.jsxs)("div",{className:"checkoutItem",children:[Object(ie.jsx)("div",{className:"imageContainer",children:Object(ie.jsx)("img",{src:c,alt:"item"})}),Object(ie.jsx)("span",{className:"name",children:i}),Object(ie.jsxs)("span",{className:"quantity",children:[Object(ie.jsx)("div",{className:"arrow",onClick:function(){return n(o)},children:"\u276e"}),Object(ie.jsx)("div",{className:"value",children:l}),Object(ie.jsx)("div",{className:"arrow",onClick:function(){return r(a)},children:"\u276f"})]}),Object(ie.jsxs)("span",{className:"price",children:["$",s]}),Object(ie.jsx)("div",{onClick:function(){return t(o)},className:"removeButton",children:"\u2715"})]})}))),ke=(n(82),Object(x.b)({cartItems:G,total:W})),Ne=Object(o.b)(ke)((function(e){var t=e.cartItems,n=e.total;return Object(ie.jsxs)("div",{className:"checkoutPage",children:[Object(ie.jsxs)("div",{className:"checkoutHeader",children:[Object(ie.jsx)("div",{className:"headerBlock",children:Object(ie.jsx)("span",{children:"Product"})}),Object(ie.jsx)("div",{className:"headerBlock",children:Object(ie.jsx)("span",{children:"Description"})}),Object(ie.jsx)("div",{className:"headerBlock",children:Object(ie.jsx)("span",{children:"Quantity"})}),Object(ie.jsx)("div",{className:"headerBlock",children:Object(ie.jsx)("span",{children:"Price"})}),Object(ie.jsx)("div",{className:"headerBlock",children:Object(ie.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(ie.jsx)(we,{cartItem:e},e.id)})),Object(ie.jsx)("div",{className:"total",children:Object(ie.jsxs)("span",{children:["TOTAL: $",n]})})]})})),Ce=Object(x.a)([function(e){return e.directory}],(function(e){return e.sections})),Ie=(n(83),Object(v.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,a=e.history,c=e.match,i=e.linkUrl;return Object(ie.jsxs)("div",{className:"".concat(r," menuItem"),onClick:function(){return a.push(c.url+i)},children:[Object(ie.jsx)("div",{className:"backgroundImage",style:{backgroundImage:"url(".concat(n,")")}}),Object(ie.jsxs)("div",{className:"content",children:[Object(ie.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(ie.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),Ue=(n(84),["id"]),Ee=Object(x.b)({sections:Ce}),Se=Object(o.b)(Ee)((function(e){var t=e.sections;return Object(ie.jsx)("div",{className:"directoryMenu",children:t.map((function(e){var t=e.id,n=Object(le.a)(e,Ue);return Object(ie.jsx)(Ie,Object(p.a)({},n),t)}))})})),Te=(n(85),function(){return Object(ie.jsx)("div",{className:"homepage",children:Object(ie.jsx)(Se,{})})}),Be={hats:1,sneakers:2,jackets:3,womens:4,mens:5},Pe=Object(x.a)([function(e){return e.shop}],(function(e){return e.collections})),Ae=(n(86),Object(o.b)(null,(function(e){return{addCartItem:function(t){return e(ce(t))}}}))((function(e){var t=e.item,n=e.addCartItem,r=t.name,a=t.price,c=t.imageUrl;return Object(ie.jsxs)("div",{className:"collectionItem",children:[Object(ie.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(ie.jsxs)("div",{className:"collectionFooter",children:[Object(ie.jsx)("span",{className:"name",children:r}),Object(ie.jsxs)("span",{className:"price",children:["$",a]})]}),Object(ie.jsx)(ue,{inverted:!0,onClick:function(){return n(t)},children:"Add to cart"})]})}))),He=(n(87),function(e){var t=e.title,n=e.items;return Object(ie.jsxs)("div",{className:"collectionPreview",children:[Object(ie.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(ie.jsx)("div",{className:"preview",children:n.slice(0,4).map((function(e){return Object(ie.jsx)(Ae,{item:e},e.id)}))})]})}),De=(n(88),["id"]),Re=Object(x.b)({collections:Pe}),Me=Object(o.b)(Re)((function(e){var t=e.collections;return Object(ie.jsx)("div",{className:"collectionOverview",children:t.map((function(e){var t=e.id,n=Object(le.a)(e,De);return Object(ie.jsx)(He,Object(p.a)({},n),t)}))})})),Ge=(n(89),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(x.a)([Pe],(function(e){return e[Object.keys(Be).indexOf(n)]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,r=t.items;return Object(ie.jsxs)("div",{className:"collectionPage",children:[Object(ie.jsx)("h2",{className:"title",children:n}),Object(ie.jsx)("div",{className:"items",children:r.map((function(e){return Object(ie.jsx)(Ae,{item:e},e.id)}))})]})}))),Je=function(e){var t=e.match;return Object(ie.jsxs)("div",{className:"shopPage",children:[Object(ie.jsx)(v.b,{exact:!0,path:"".concat(t.path),component:Me}),Object(ie.jsx)(v.b,{path:"".concat(t.path,"/:collectionId"),component:Ge})]})},We=n(4),ze=n(5),Ve=(n(90),["handleChange","label"]),Fe=function(e){var t=e.handleChange,n=e.label,r=Object(le.a)(e,Ve);return Object(ie.jsxs)("div",{className:"group",children:[Object(ie.jsx)("input",Object(p.a)({className:"formInput",onChange:t},r)),n?Object(ie.jsx)("label",{className:"".concat(r.value.length?"shrink":""," formInputLabel"),children:n}):null]})},Le=(n(91),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,a=n.email,c=n.password,e.prev=2,e.next=5,B.signInWithEmailAndPassword(a,c);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),e.t0 instanceof ze.c?"auth/user-not-found"===e.t0.code?alert("This user doesn't exist"):"auth/wrong-password"===e.t0.code?alert("The password is wrong or the user signed up with Google"):console.log(e.t0):console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,a=t.name;r.setState(Object(We.a)({},a,n))},r.state={email:"",password:""},r}return Object(g.a)(n,[{key:"render",value:function(){return Object(ie.jsxs)("div",{className:"signIn",children:[Object(ie.jsx)("h2",{className:"title",children:"I already have an account"}),Object(ie.jsx)("span",{children:"Sign in with your email and password"}),Object(ie.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(ie.jsx)(Fe,{label:"Email",name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),Object(ie.jsx)(Fe,{label:"Password",name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(ie.jsxs)("div",{className:"buttons",children:[Object(ie.jsx)(ue,{type:"submit",children:"sign in"}),Object(ie.jsx)(ue,{type:"button",onClick:D,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(i.a.Component)),_e=Le,qe=(n(92),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,c,i,s,l,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=r.state,a=n.displayName,c=n.email,i=n.password,s=n.confirmPassword,i===s){e.next=6;break}alert("Passwords don't match"),e.next=24;break;case 6:if(!(i.length<6)){e.next=10;break}alert("Password should be at least 6 characters"),e.next=24;break;case 10:return e.prev=10,e.next=13,B.createUserWithEmailAndPassword(c,i);case 13:if(l=e.sent,!(o=l.user)){e.next=19;break}return e.next=18,T(o,{displayName:a});case 18:r.setState({email:"",password:"",displayName:"",confirmPassword:""});case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(10),e.t0 instanceof ze.c&&"auth/email-already-in-use"===e.t0.code?alert("This email is already used"):console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[10,21]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,a=t.name;r.setState(Object(We.a)({},a,n))},r.state={confirmPassword:"",displayName:"",email:"",password:""},r}return Object(g.a)(n,[{key:"render",value:function(){return Object(ie.jsxs)("div",{className:"signUp",children:[Object(ie.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(ie.jsx)("span",{children:"Sign up with your email and password"}),Object(ie.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(ie.jsx)(Fe,{label:"Display Name",name:"displayName",type:"text",value:this.state.displayName,handleChange:this.handleChange,required:!0}),Object(ie.jsx)(Fe,{label:"Email",name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),Object(ie.jsx)(Fe,{label:"Password",name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(ie.jsx)(Fe,{label:"Confirm Password",name:"confirmPassword",type:"password",value:this.state.confirmPassword,handleChange:this.handleChange,required:!0}),Object(ie.jsx)(ue,{type:"submit",children:"Sign Up"})]})]})}}]),n}(i.a.Component)),Ye=qe,Qe=(n(93),function(){return Object(ie.jsxs)("div",{className:"signInAndUp",children:[Object(ie.jsx)(_e,{}),Object(ie.jsx)(Ye,{})]})});!function(e){e.SetCurrentUser="SET_CURRENT_USER"}(ge||(ge={}));var Xe=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=B.onAuthStateChanged(function(){var t=Object(h.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,T(n,{});case 3:t.sent.onSnapshot((function(t){e(Object(p.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(null);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth&&this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(ie.jsxs)(u.b,{basename:"/",children:[Object(ie.jsx)(ye,{}),Object(ie.jsxs)(v.d,{children:[Object(ie.jsx)(v.b,{exact:!0,path:"/",component:Te}),Object(ie.jsx)(v.b,{path:"/shop",component:Je}),Object(ie.jsx)(v.b,{exact:!0,path:"/signIn",render:function(){return e.props.currentUser?Object(ie.jsx)(v.a,{to:"/"}):Object(ie.jsx)(Qe,{})}}),Object(ie.jsx)(v.b,{exact:!0,path:"/checkout",render:function(){return e.props.cartItems.length?Object(ie.jsx)(Ne,{}):Object(ie.jsx)(v.a,{to:"/"})}})]})]})}}]),n}(i.a.Component),Ke=Object(x.b)({currentUser:z,cartItems:G}),Ze=Object(o.b)(Ke,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:ge.SetCurrentUser,payload:e}}(t))}}}))(Xe),$e=n(29),et=n(56),tt=n.n(et),nt=n(46),rt=n(57),at=n.n(rt),ct=n(25),it=function(e,t){return e.find((function(e){return e.id===t}))},st=function(e,t){var n=it(e,t.id);return n?e.map((function(e){return n.id===e.id?Object(p.a)(Object(p.a)({},e),{},{count:e.count+1}):e})):[].concat(Object(ct.a)(e),[Object(p.a)(Object(p.a)({},t),{},{count:1})])},lt=function(e,t){return e.filter((function(e){return e.id!==t}))},ot=function(e,t){var n=it(e,t);return n&&n.count>1?e.map((function(e){return n.id===e.id?Object(p.a)(Object(p.a)({},e),{},{count:e.count-1}):e})):e},ut={hidden:!0,cartItems:[]},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.ToggleCartHidden:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case H.AddCartItem:return Object(p.a)(Object(p.a)({},e),{},{cartItems:st(e.cartItems,t.payload)});case H.DeleteCartItem:return Object(p.a)(Object(p.a)({},e),{},{cartItems:lt(e.cartItems,t.payload)});case H.RemoveCartItem:return Object(p.a)(Object(p.a)({},e),{},{cartItems:ot(e.cartItems,t.payload)});default:return e}},mt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},pt={collections:[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}]},ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},jt={currentUser:null},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;return t.type===ge.SetCurrentUser?Object(p.a)(Object(p.a)({},e),{},{currentUser:t.payload}):e},Ot={key:"root",storage:at.a,whitelist:["cart"]},ft=Object($e.b)({user:gt,cart:dt,directory:bt,shop:ht}),vt=Object(nt.a)(Ot,ft),xt=[tt.a],yt=Object($e.c)(vt,$e.a.apply(void 0,xt)),wt=Object(nt.b)(yt),kt=yt;l.a.render(Object(ie.jsx)(o.a,{store:kt,children:Object(ie.jsx)(u.a,{children:Object(ie.jsx)(d.a,{persistor:wt,children:Object(ie.jsx)(Ze,{})})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.42b7e3ee.chunk.js.map