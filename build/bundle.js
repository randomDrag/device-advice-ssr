(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p:""};const t=require("express");var n=e.n(t);const r=require("react");var a=e.n(r);const o=require("react-router-dom"),c=require("react-dom/server"),i=require("react-router-config"),l=(require("gsap"),e.p+"e164c6c6400aa234dc483cddda97cf71.svg"),s=e.p+"7adcd2d21ada4f2936cbbfb3819ff7bf.svg";function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const m=function(e){var t,n,c=(t=(0,r.useState)(b()),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=c[0],m=c[1],f=!0,p=(0,o.useHistory)();function d(e){return a().createElement(a().Fragment,null,a().createElement("button",{className:"menu-btn opt",onClick:e.click},e.name))}function y(){m(f?a().createElement("div",{className:" vh-100 vw-100 d-flex  justify-content-center align-self-center mobile-nav"},a().createElement("div",{className:" align-self-center"},a().createElement("ul",{className:"navbar-nav w-100 h-100"},a().createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",style:{display:"block"}},a().createElement("div",null,a().createElement("li",{className:"nav-item "},a().createElement("div",{className:"mob-button-div"},a().createElement(d,{click:e.login,name:e.loginName}))),a().createElement("li",{className:"nav-item"},a().createElement("div",{className:"mob-button-div"},a().createElement(d,{click:e.register,name:e.registername}))),a().createElement("li",{className:"nav-item"},a().createElement("div",{className:"mob-button-div"},a().createElement(d,{click:function(){p.push("/FAQ")},name:"FAQ"}))))))),a().createElement("div",{className:"close-btn"},a().createElement("button",{onClick:y,style:{width:"10wh",height:"10vh"}},"×"))):b()),f=!f}function b(){return a().createElement("nav",{className:"navbar navbar-expand-sm  w-100 ",style:{position:"relative",top:"0",zIndex:"3",padding:"0"}},a().createElement("div",{className:"d-flex w-100"},a().createElement("div",{className:"align-self-center"},a().createElement("div",{className:"navbar-brand nav-des "}," ",a().createElement("img",{src:l,alt:"wish logo",width:"100%",height:"100%"})," device advice")),a().createElement("div",{className:" w-100"},a().createElement("ul",{className:"navbar-nav "},a().createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},a().createElement("div",{className:" d-flex w-100 justify-content-center align-self-center"},a().createElement("div",{className:"box "},a().createElement("li",{className:"nav-item"},a().createElement(d,{click:e.login,name:e.loginName})),a().createElement("li",{className:"nav-item"},a().createElement(d,{click:e.register,name:e.registername})),a().createElement("li",{className:"nav-item"},a().createElement(d,{click:function(){p.push("/FAQ")},name:"FAQ"}))))),a().createElement("div",{className:"align-self-center"},a().createElement("div",{className:" d-flex w-100 justify-content-center"},a().createElement("div",{className:"box "},a().createElement("button",{className:"navbar-toggler ",type:"button","data-toggle":"collapse",onClick:y,"data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a().createElement("span",null,a().createElement("img",{src:s,alt:"menuBar",width:"25vw",height:"25vh"}))))))))))}return a().createElement("div",{style:{backgroundColor:"#686EE2"}},i)},f={component:function(e){var t=e.route;return a().createElement("div",null,a().createElement(m,null),(0,i.renderRoutes)(t.routes))}},p=(e.p,e.p,e.p+"61d7981e8db80dbc0c55de58ebe533c6.png");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,r,o,c=(r=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function i(){return y(this,i),c.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return a().createElement(a().Fragment,null,a().createElement("form",null,a().createElement("select",{className:"ui selection dropdown violet",name:"",id:""}),a().createElement("button",{className:"circular ui icon button",type:"submit"},a().createElement("i",{className:"search icon"}))))}}])&&b(t.prototype,n),i}(a().Component);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const P={component:function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(i,e);var t,n,r,o,c=(r=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function i(){return N(this,i),c.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return a().createElement(a().Fragment,null,a().createElement("section",{className:"w-100 min-vh-100 m-0 p-0",style:{backgroundColor:"#686EE2"}},a().createElement("div",{className:"row w-100 h-100 m-0 p-0"},a().createElement("div",{className:"col-sm-8 w-100 m-0 d-flex align-items-center",style:{border:"2px solid red",flexDirection:"column"}},a().createElement("div",{className:"main-heading",style:{border:"2px solid red"}},a().createElement("h1",{className:"main-heading-1"},"find best device"),a().createElement("h1",{className:"main-heading-2"},"With what you want"),a().createElement("h1",{className:"main-heading-3"},"in your  ",a().createElement("span",{style:{color:"#FFA87B"}},"budget"))),a().createElement("div",{className:"bar-div",style:{border:"2px solid yellow"}},a().createElement("h1",{className:"bar-heading-1"}," you looking for ? "),a().createElement(E,null))),a().createElement("div",{className:"col-sm-4 w-100 m-0 d-flex align-items-center justify-content-center "},a().createElement("div",{className:"home-image-camera"},a().createElement("img",{src:p,alt:"",width:"100%",height:"100%"}))))),a().createElement("section",{style:{backgroundColor:"#686EE2",width:"100%",height:"100vh"}}))}}])&&O(t.prototype,n),i}(a().Component)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const C=[R(R({},f),{},{routes:[R(R({},P),{},{path:"/",exact:!0})]})];require("react-redux");var A=n()();A.use(n().static("public")),A.get("*",(function(e,t){t.send(function(e){var t=(0,c.renderToString)(a().createElement(o.StaticRouter,{location:e.path,context:{}},a().createElement("div",null,(0,i.renderRoutes)(C))));return'\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    \x3c!--link rel="icon" href="%PUBLIC_URL%/favicon.ico" / --\x3e\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="theme-color" content="#000000" />\n    <meta\n      name="freewish|| free wish || Makeawish"\n      content="Makeawish is a site where you can wish for free under 1.5 lakh amount and if your lucky we will ship you for free at zero charges freewish.in"\n    />\n    \x3c!-- link rel="apple-touch-icon" href="%PUBLIC_URL%/m.svg"--\x3e\n    \x3c!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    --\x3e\n    \x3c!-- link rel="manifest" href="%PUBLIC_URL%/manifest.json" /--\x3e\n\n    <link rel="preconnect" href="https://fonts.gstatic.com">\n    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@100;300;400;600&display=swap" rel="stylesheet">\n    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n    <link rel="stylesheet" href="main.css">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" />\n  </head>\n  <body>\n\n    <div id="root">'.concat(t,'</div>\n    <script src="bundle.js"><\/script>\n\n   \n  \n \n  </body>\n</html>')}(e))})),A.listen(3e3,(function(){console.log("APP IS RUNNING ON PORT ".concat(3e3))}))})();