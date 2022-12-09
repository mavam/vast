"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1043],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"VAST v2.4",description:"Open Storage",authors:"dominiklohmann",date:new Date("2022-12-09T00:00:00.000Z"),tags:["release","frontend","feather","parquet","docker","python","arrow"]},i=void 0,l={permalink:"/blog/vast-v2.4",source:"@site/blog/vast-v2.4/index.md",title:"VAST v2.4",description:"Open Storage",date:"2022-12-09T00:00:00.000Z",formattedDate:"December 9, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"frontend",permalink:"/blog/tags/frontend"},{label:"feather",permalink:"/blog/tags/feather"},{label:"parquet",permalink:"/blog/tags/parquet"},{label:"docker",permalink:"/blog/tags/docker"},{label:"python",permalink:"/blog/tags/python"},{label:"arrow",permalink:"/blog/tags/arrow"}],readingTime:4.265,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"VAST v2.4",description:"Open Storage",authors:"dominiklohmann",date:"2022-12-09T00:00:00.000Z",tags:["release","frontend","feather","parquet","docker","python","arrow"]},nextItem:{title:"Parquet & Feather: Writing Security Telemetry",permalink:"/blog/parquet-and-feather-writing-security-telemetry"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/tag/v2.4.0"},"VAST v2.4")," completes the switch to open storage formats,\nand includes an early peek at three upcoming features for VAST: A web plugin\nwith a REST API and an integrated frontend user interface, Docker Compose\nconfiguration files for getting started with VAST faster and showing how to\nintegrate VAST into your SOC, and new Python bindings that will make writing\nintegrations easier and allow for using VAST with your data science libraries,\nlike Pandas."))}u.isMDXComponent=!0}}]);