(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("express");var r=e.n(t);const n=require("react");var c=e.n(n);const o=require("react-router-dom"),a=require("react-dom/server"),s=require("react-router-config");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=[l(l({},{component:function(){return c().createElement(c().Fragment,null,c().createElement("section",{className:"w-100 min-vh-100 m-0 p-0",style:{backgroundColor:"#686EE2"}},c().createElement("div",{className:"row w-100 h-100 m-0 p-0"},c().createElement("div",{className:"col-sm-8 w-100 m-0 d-flex align-items-center",style:{border:"2px solid red"}},c().createElement("div",{className:"main-heading"},c().createElement("h1",{className:"main-heading-1"},"find best device"),c().createElement("h1",{className:"main-heading-2"},"With what you want"),c().createElement("h1",{className:"main-heading-3"},"in your  ",c().createElement("span",{style:{color:"#FFA87B"}},"buget")))),c().createElement("div",{className:"col-sm-4 w-100 m-0"}))))}}),{},{path:"/",exact:!0})];var p=r()();p.use(r().static("public")),p.get("*",(function(e,t){t.send(function(e){console.log(e.path);var t=(0,a.renderToString)(c().createElement(o.StaticRouter,{location:e.path,context:{}},c().createElement("div",null,(0,s.renderRoutes)(u))));return'<html>\n<head>\n<link rel="preconnect" href="https://fonts.gstatic.com">\n<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@100;300;400;600&display=swap" rel="stylesheet">\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n<link rel="stylesheet" href="main.css">\n\n</head>\n<body>\n  <div id="root">'.concat(t,'</div>\n  <script src="bundle.js"><\/script>\n\n</body>\n</html>')}(e))})),p.listen(3e3,(function(){console.log("APP IS RUNNING ON PORT ".concat(3e3))}))})();