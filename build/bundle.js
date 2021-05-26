(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p:""};const t=require("express");var n=e.n(t);const r=require("redux"),o=require("redux-thunk");var a=e.n(o),c="type_sec";const l=require("redux-form"),i=(0,r.combineReducers)({typeselector:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return t.payload;default:return e}},form:l.reducer}),s=require("react");var u=e.n(s);const m=require("react-router-dom"),f=require("react-dom/server"),p=require("react-router-config"),d=(require("gsap"),e.p+"e164c6c6400aa234dc483cddda97cf71.svg"),y=e.p+"7adcd2d21ada4f2936cbbfb3819ff7bf.svg";function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const v=function(e){var t,n,r=(t=(0,s.useState)(p()),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1],c=!0,l=(0,m.useHistory)();function i(e){return u().createElement(u().Fragment,null,u().createElement("button",{className:"menu-btn opt",onClick:e.click},e.name))}function f(){a(c?u().createElement("div",{className:" vh-100 vw-100 d-flex  justify-content-center align-self-center mobile-nav"},u().createElement("div",{className:" align-self-center"},u().createElement("ul",{className:"navbar-nav w-100 h-100"},u().createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",style:{display:"block"}},u().createElement("div",null,u().createElement("li",{className:"nav-item "},u().createElement("div",{className:"mob-button-div"},u().createElement(i,{click:e.login,name:e.loginName}))),u().createElement("li",{className:"nav-item"},u().createElement("div",{className:"mob-button-div"},u().createElement(i,{click:e.register,name:e.registername}))),u().createElement("li",{className:"nav-item"},u().createElement("div",{className:"mob-button-div"},u().createElement(i,{click:function(){l.push("/FAQ")},name:"FAQ"}))))))),u().createElement("div",{className:"close-btn"},u().createElement("button",{onClick:f,style:{width:"10wh",height:"10vh"}},"×"))):p()),c=!c}function p(){return u().createElement("nav",{className:"navbar navbar-expand-sm  w-100 ",style:{position:"relative",top:"0",zIndex:"3",padding:"0"}},u().createElement("div",{className:"d-flex w-100"},u().createElement("div",{className:"align-self-center"},u().createElement("div",{className:"navbar-brand nav-des "}," ",u().createElement("img",{src:d,alt:"wish logo",width:"100%",height:"100%"})," device advice")),u().createElement("div",{className:" w-100"},u().createElement("ul",{className:"navbar-nav "},u().createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},u().createElement("div",{className:" d-flex w-100 justify-content-center align-self-center"},u().createElement("div",{className:"box "},u().createElement("li",{className:"nav-item"},u().createElement(i,{click:e.login,name:e.loginName})),u().createElement("li",{className:"nav-item"},u().createElement(i,{click:e.register,name:e.registername})),u().createElement("li",{className:"nav-item"},u().createElement(i,{click:function(){l.push("/FAQ")},name:"FAQ"}))))),u().createElement("div",{className:"align-self-center"},u().createElement("div",{className:" d-flex w-100 justify-content-center"},u().createElement("div",{className:"box "},u().createElement("button",{className:"navbar-toggler ",type:"button","data-toggle":"collapse",onClick:f,"data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},u().createElement("span",null,u().createElement("img",{src:y,alt:"menuBar",width:"25vw",height:"25vh"}))))))))))}return u().createElement("div",{style:{backgroundColor:"#686EE2"}},o)},h={component:function(e){var t=e.route;return u().createElement("div",null,u().createElement(v,null),(0,p.renderRoutes)(t.routes))}},E=(e.p,e.p,e.p+"61d7981e8db80dbc0c55de58ebe533c6.png"),g=require("react-redux");function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(c,e);var t,n,r,o,a=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={selected_option:null},t.handleDropdownChange=t.handleDropdownChange.bind(S(t)),t}return t=c,(n=[{key:"handleDropdownChange",value:function(e){var t=e.target.value;this.props.selected(t),this.setState({selected_option:t})}},{key:"render",value:function(){return u().createElement("div",null,u().createElement("select",{className:"ui selection dropdown",value:this.state.selected_option,onChange:this.handleDropdownChange},u().createElement("option",{value:"null"},"SELECT"),u().createElement("option",{value:"MOBILE"},"MOBILE"),u().createElement("option",{value:"EARPHONE"},"EARPHONES"),u().createElement("option",{value:"LAPTOPS"},"LAPTOPS")))}}])&&O(t.prototype,n),c}(u().Component);const k=(0,g.connect)((function(e){return{selected:e.selected_option}}),{selected:function(e){return{type:c,payload:e}}})(x),_=require("validator");var R=e.n(_);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(c,e);var t,n,r,o,a=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).renderColorSelector=t.renderColorSelector.bind(T(t)),t}return t=c,(n=[{key:"inputForm",value:function(e){var t=e.meta,n=t.error,r=t.touched,o="".concat(r&&n?"field error":"");return u().createElement(u().Fragment,null,u().createElement("div",{className:o},u().createElement("input",F({type:"text",className:"inputMobile",placeholder:e.placeholder},e.input)),u().createElement("div",{style:{color:"red"}},r?n:"")))}},{key:"selector",value:function(){return u().createElement(k,null)}},{key:"renderColorSelector",value:function(e){var t=e.input,n=e.meta,r=n.touched,o=n.error;return u().createElement("div",null,u().createElement("select",F({className:"ui selection dropdown"},t),u().createElement("option",{value:""},"Select "),["display","processer","all"].map((function(e){return u().createElement("option",{value:e,key:e},e)}))),r&&o&&u().createElement("span",null,o))}},{key:"mobile_form",value:function(){return u().createElement(u().Fragment,null,u().createElement("form",null,u().createElement("div",{className:"form-mobile-container"},u().createElement("div",{className:"Price"},u().createElement("label",null,"Amount"),u().createElement(l.Field,{name:"price",className:"inputMobile",placeholder:"ENTER PRICE",component:this.inputForm})),u().createElement("div",null,u().createElement("label",null,"Favorite Color"),u().createElement(l.Field,{name:"favoriteColor",component:this.renderColorSelector})))))}},{key:"selectedPanal",value:function(){return"MOBILE"===this.props.selected?u().createElement(u().Fragment,null,u().createElement("div",{className:""},this.selector(),this.mobile_form())):"EARPHONE"===this.props.selected?u().createElement(u().Fragment,null,this.selector(),u().createElement("div",{className:"ui form"},u().createElement("div",{className:"fields"},u().createElement("div",{className:"field"},u().createElement("label",null,"First name"),u().createElement("input",{type:"text"})),u().createElement("div",{className:"field"},u().createElement("label",null,"Middle name"),u().createElement("input",{type:"text",placeholder:"Middle Name"}))))):(this.props.selected,u().createElement(u().Fragment,null,this.selector()))}},{key:"render",value:function(){return u().createElement(u().Fragment,null,this.selectedPanal())}}])&&A(t.prototype,n),c}(u().Component);const L=(0,l.reduxForm)({form:"mobileForm",validate:function(e){var t={};return e.Name||(t.Name="Required"),e.price?isNaN(Number(e.price))?t.price="Must be a number":R().isInt(e.price,{min:3e3,max:3e5})||(t.price="Enter correct amount"):t.price="Required",t}})((0,g.connect)((function(e){return{selected:e.typeselector}}))(M));function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const W={component:function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(c,e);var t,n,r,o,a=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(o){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function c(){return B(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return u().createElement(u().Fragment,null,u().createElement("section",{className:"w-100 min-vh-100 m-0 p-0",style:{backgroundColor:"#686EE2"}},u().createElement("div",{className:"row w-100 h-100 m-0 p-0"},u().createElement("div",{className:"col-sm-8 w-100 m-0 d-flex align-items-center",style:{border:"2px solid red",flexDirection:"column"}},u().createElement("div",{className:"main-heading",style:{border:"2px solid red"}},u().createElement("h1",{className:"main-heading-1"},"find best device"),u().createElement("h1",{className:"main-heading-2"},"With what you want"),u().createElement("h1",{className:"main-heading-3"},"in your  ",u().createElement("span",{style:{color:"#FFA87B"}},"budget"))),u().createElement("div",{className:"bar-div",style:{border:"2px solid yellow"}},u().createElement("h1",{className:"bar-heading-1"}," you looking for ? "),u().createElement("div",null,u().createElement(L,null)))),u().createElement("div",{className:"col-sm-4 w-100 m-0  imgSection"},u().createElement("div",{className:"home-image-camera"},u().createElement("img",{src:E,alt:"",width:"100%",height:"100%"}))))),u().createElement("section",{style:{backgroundColor:"#686EE2",width:"100%",height:"100vh"}}))}}])&&H(t.prototype,n),c}(u().Component)};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const V=[J(J({},h),{},{routes:[J(J({},W),{},{path:"/",exact:!0})]})];var Y=n()();Y.use(n().static("public")),Y.get("*",(function(e,t){var n=(0,r.createStore)(i,{},(0,r.applyMiddleware)(a()));t.send(function(e,t){var n=(0,f.renderToString)(u().createElement(g.Provider,{store:t},u().createElement(m.StaticRouter,{location:e.path,context:{}},u().createElement("div",null,(0,p.renderRoutes)(V)))));return'\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    \x3c!--link rel="icon" href="%PUBLIC_URL%/favicon.ico" / --\x3e\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="theme-color" content="#000000" />\n    <meta\n      name="freewish|| free wish || Makeawish"\n      content="Makeawish is a site where you can wish for free under 1.5 lakh amount and if your lucky we will ship you for free at zero charges freewish.in"\n    />\n    \x3c!-- link rel="apple-touch-icon" href="%PUBLIC_URL%/m.svg"--\x3e\n    \x3c!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    --\x3e\n    \x3c!-- link rel="manifest" href="%PUBLIC_URL%/manifest.json" /--\x3e\n\n    <link rel="preconnect" href="https://fonts.gstatic.com">\n    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@100;300;400;600&display=swap" rel="stylesheet">\n    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" />\n   <link rel="stylesheet" href="main.css">\n   </head>\n  <body>\n\n    <div id="root">'.concat(n,'</div>\n    <script src="bundle.js"><\/script>\n\n   \n  \n \n  </body>\n</html>')}(e,n))})),Y.listen(3e3,(function(){console.log("APP IS RUNNING ON PORT ".concat(3e3))}))})();