"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6699],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},l="select",p={unversionedId:"understand/query-language/operators/select",id:"understand/query-language/operators/select",title:"select",description:"Keeps the fields having the configured extractors and removes the rest from the",source:"@site/docs/understand/query-language/operators/select.md",sourceDirName:"understand/query-language/operators",slug:"/understand/query-language/operators/select",permalink:"/docs/understand/query-language/operators/select",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/query-language/operators/select.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"replace",permalink:"/docs/understand/query-language/operators/replace"},next:{title:"summarize",permalink:"/docs/understand/query-language/operators/summarize"}},i={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Pipeline Operator String Syntax (Experimental)",id:"pipeline-operator-string-syntax-experimental",level:2},{value:"Example",id:"example-1",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select"},"select"),(0,a.kt)("p",null,"Keeps the fields having the configured extractors and removes the rest from the\ninput."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," operator is the dual to ",(0,a.kt)("a",{parentName:"p",href:"drop"},(0,a.kt)("inlineCode",{parentName:"a"},"drop")),", which removes a given set\nof fields from the output."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fields: [string]"),": The extractors of the fields to keep.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"select:\n  fields:\n    - ip\n    - timestamp\n")),(0,a.kt)("h2",{id:"pipeline-operator-string-syntax-experimental"},"Pipeline Operator String Syntax (Experimental)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select EXTRACTOR[, \u2026]\n")),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("p",null,"Keep the ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamp")," fields."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select ip, timestamp\n")))}u.isMDXComponent=!0}}]);