(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){e.exports=a(328)},264:function(e,t,a){},328:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(162),i=a(55),o=(a(264),a(26)),l=a(11),c=a(12),u=a(14),h=a(13),m=a(15),d=a(6),p=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"of"),r.a.createElement("span",{className:"the"},"the")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))};function f(e){return"$".concat((e/100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","))}function b(e){return e[Math.floor(Math.random()*e.length)]}function v(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(b(e),"-").concat(b(e),"-").concat(b(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var g=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.details,n=t.index,s="available"===a.status,i=s?"Add To Order":"Sold Out!";return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:a.image,alt:a.name}),r.a.createElement("h3",{className:"fish-name"},a.name,r.a.createElement("span",{className:"price"},f(a.price))),r.a.createElement("p",null,a.desc),r.a.createElement("button",{onClick:function(){return e.props.addToOrder(n)},disabled:!s},i))}}]),t}(r.a.Component),y=a(113),O=a.n(y),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).renderOrder=e.renderOrder.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderOrder",value:function(e){var t=this,a=this.props.fishes[e],n=this.props.order[e],s=r.a.createElement("button",{onClick:function(){return t.props.removeFromOrder(e)}},"\xd7");return a&&"unavailable"!==a.status?r.a.createElement("li",{key:e},r.a.createElement("span",null,r.a.createElement(O.a,{component:"span",className:"count",transitionName:"count",transitionEnterTimeout:250,transitionLeaveTimeout:250},r.a.createElement("span",{key:n},n)),"ibs ",a.name," ",s),r.a.createElement("span",{className:"price"},f(n*a.price))):r.a.createElement("li",{key:e}," Sorry, ",a?a.name:"fish"," is no longer avalable! ",s)}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+(r*n.price||0):t},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Your Order"),r.a.createElement(O.a,{className:"order",component:"ul",transitionName:"order",transitionEnterTimeout:500,transitionLeaveTimeout:500},t.map(this.renderOrder),r.a.createElement("li",{className:"total"},r.a.createElement("strong",null,"Total:"),f(a))))}}]),t}(r.a.Component),j=a(71),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"createFish",value:function(e){e.preventDefault(),console.log("gonna mske some fish");var t={name:this.name.value,price:this.price.value,status:this.status.value,desc:this.desc.value,image:this.image.value};this.props.addFish(t),this.fishForm.reset()}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{ref:function(t){e.fishForm=t},className:"fish-edit",onSubmit:function(t){return e.createFish(t)}},r.a.createElement("input",{type:"text",placeholder:"fish name",ref:function(t){e.name=t}}),r.a.createElement("input",{type:"text",placeholder:"fish price",ref:function(t){e.price=t}}),r.a.createElement("select",{name:"",id:"",ref:function(t){e.status=t}},r.a.createElement("option",{value:"avalable"},"Fresh!"),r.a.createElement("option",{value:"unavalable"},"Sold Out!")),r.a.createElement("textarea",{placeholder:"fish desc",ref:function(t){e.desc=t}}),r.a.createElement("input",{type:"text",placeholder:"fish image",ref:function(t){e.image=t}}),r.a.createElement("button",{type:"submit"},"+ Add Item"))}}]),t}(r.a.Component),w=a(32),S=a.n(w),F=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).renderInventory=e.renderInventory.bind(Object(d.a)(Object(d.a)(e))),e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.renderLogin=e.renderLogin.bind(Object(d.a)(Object(d.a)(e))),e.logout=e.logout.bind(Object(d.a)(Object(d.a)(e))),e.state={uid:null,owner:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e,t){var a=this.props.fishes[t],n=Object(o.a)({},a,Object(j.a)({},e.target.name,e.target.value));this.props.updateFish(t,n)}},{key:"authenticate",value:function(e){var t=this,a=S.a.auth(),n="git"===e?new S.a.auth.GithubAuthProvider:new S.a.auth.FacebookAuthProvider;a.signInWithPopup(n).then(function(e){console.log(e);var a=S.a.database().ref(t.props.storeId);console.log(a),a.once("value",function(n){var r=n.val()||{};r.owner||a.set({owner:e.user.uid}),t.setState({uid:e.user.uid,owner:r.owner||e.user.uid})})}).catch(function(e){console.log(e)})}},{key:"logout",value:function(){this.setState({uid:null})}},{key:"renderLogin",value:function(){var e=this;return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"This is Inventory"),r.a.createElement("p",null,"Sign in to manage your store's inventory"),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("git")}},"Log in with Github"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("face")}},"Log in with Facebook"))}},{key:"renderInventory",value:function(e){var t=this,a=this.props.fishes[e];return r.a.createElement("div",{className:"fish-edit",key:e},r.a.createElement("input",{type:"text",name:"name",placeholder:"fish name",value:a.name,onChange:function(a){return t.handleChange(a,e)}}),r.a.createElement("input",{type:"text",name:"price",placeholder:"fish price",value:a.price,onChange:function(a){return t.handleChange(a,e)}}),r.a.createElement("select",{type:"text",name:"status",value:a.status,onChange:function(a){return t.handleChange(a,e)}},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{type:"text",name:"desc",placeholder:"fish desc",value:a.desc,onChange:function(a){return t.handleChange(a,e)}}),r.a.createElement("input",{type:"text",name:"image",placeholder:"fish image",value:a.image,onChange:function(a){return t.handleChange(a,e)}}),r.a.createElement("button",{onClick:function(){return t.props.removeFish(e)}},"Remove Fish"))}},{key:"render",value:function(){var e=r.a.createElement("button",{onClick:this.logout},"Log Out!");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry you aren't the owner of this store!"),e):r.a.createElement("div",null,r.a.createElement("h2",null,"This is Inventory"),e,Object.keys(this.props.fishes).map(this.renderInventory),r.a.createElement(k,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSamples},"Load Sample Fishes")):r.a.createElement("div",null,this.renderLogin())}}]),t}(r.a.Component),C={fish1:{name:"Pacific Halibut",image:"/img/Pacific_Halibut-612x612.jpg",desc:"Everyones favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/img/lobster-tails.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/img/seared-scallop-612x612.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/img/GRILLED-MAHI-MAHI-3-1-500x500.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/img/king-crab-612x612.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/img/salmon-700-350.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/img/fresh-oysters-on-a-black-stone-plate-top-view.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/img/sreamed-mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/img/fresh-tiger-shrimp-on-ice.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},x=a(163),N=a.n(x),I=S.a.initializeApp({apiKey:"AIzaSyAArRHUo0lgs2KAXVZ4wqIrxSSzlE-pu6M",authDomain:"catch-of-the-day-jackkill.firebaseapp.com",databaseURL:"https://catch-of-the-day-jackkill.firebaseio.com",projectId:"catch-of-the-day-jackkill"}),T=N.a.createClass(I.database()),A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={fishes:{},order:{}},e.addFish=e.addFish.bind(Object(d.a)(Object(d.a)(e))),e.updateFish=e.updateFish.bind(Object(d.a)(Object(d.a)(e))),e.loadSamples=e.loadSamples.bind(Object(d.a)(Object(d.a)(e))),e.addToOrder=e.addToOrder.bind(Object(d.a)(Object(d.a)(e))),e.removeFish=e.removeFish.bind(Object(d.a)(Object(d.a)(e))),e.removeFromOrder=e.removeFromOrder.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.ref=T.syncState("".concat(this.props.params.storeId,"/fishes"),{context:this,state:"fishes"});var e=localStorage.getItem("order-".concat(this.props.params.storeId));e&&this.setState({order:JSON.parse(e)})}},{key:"componentWillUnmount",value:function(){T.removeBinding(this.ref)}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("order-".concat(this.props.params.storeId),JSON.stringify(t.order))}},{key:"addFish",value:function(e){var t=Object(o.a)({},this.state.fishes),a=Date.now();t["fish-".concat(a)]=e,this.setState({fishes:t})}},{key:"updateFish",value:function(e,t){var a=Object(o.a)({},this.state.fishes);a[e]=t,this.setState({fishes:a})}},{key:"removeFish",value:function(e){var t=Object(o.a)({},this.state.fishes);t[e]=null,this.setState({fishes:t})}},{key:"loadSamples",value:function(){this.setState({fishes:C})}},{key:"addToOrder",value:function(e){var t=Object(o.a)({},this.state.order);t[e]=t[e]+1||1,this.setState({order:t})}},{key:"removeFromOrder",value:function(e){var t=Object(o.a)({},this.state.order);delete t[e],this.setState({order:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(p,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",{className:"list-of-fishes"},Object.keys(this.state.fishes).map(function(t){return r.a.createElement(g,{key:t,index:t,details:e.state.fishes[t],addToOrder:e.addToOrder})}))),r.a.createElement(E,{fishes:this.state.fishes,order:this.state.order,params:this.props.params,removeFromOrder:this.removeFromOrder}),r.a.createElement(F,{addFish:this.addFish,loadSamples:this.loadSamples,fishes:this.state.fishes,updateFish:this.updateFish,removeFish:this.removeFish,storeId:this.props.params.storeId}))}}]),t}(r.a.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"goToStore",value:function(e){e.preventDefault();var t=this.storeInput.value;this.context.router.transitionTo("/store/".concat(t))}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{action:"",className:"store-selector",onSubmit:function(t){return e.goToStore(t)}},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{type:"text",required:!0,placeholder:"Store Name",defaultValue:v(),ref:function(t){e.storeInput=t}}),r.a.createElement("button",{type:"submit"},"Visit Store ->"))}}]),t}(r.a.Component);L.contextTypes={router:r.a.PropTypes.object.isRequired};var M=L,P=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Error! Page not found!"))};Object(s.render)(r.a.createElement(function(){return r.a.createElement(i.BrowserRouter,{basename:"/{window.location.pathname.split('/')[1]}"},r.a.createElement("div",null,r.a.createElement(i.Match,{exactly:!0,pattern:"/",component:M}),r.a.createElement(i.Match,{exactly:!0,pattern:"/store/:storeId",component:A}),r.a.createElement(i.Miss,{component:P})))},null),document.querySelector("#main"))}},[[164,2,1]]]);
//# sourceMappingURL=main.6c7727de.chunk.js.map