"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5072],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),a=r(86010),o=r(22093),i=r(11128),c=r(55602),l=r(14699);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return n.createElement(i.Z,{href:e,className:(0,a.Z)("card padding--lg",s.cardContainer)},t)}function p({href:e,icon:t,title:r,description:o}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:r},t," ",r),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:o},o))}function d({item:e}){var t;const r=(0,o.Wl)(e);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,r;const a=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:a,title:e.label,description:null!=(r=e.description)?r:null==i?void 0:i.description})}function m({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(y)for(var r of y(t))h.call(t,r)&&v(e,r,t[r]);return e};function w({className:e}){const t=(0,o.jA)();return n.createElement(E,{items:t.items,className:e})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,O({},e));const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}},81183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>E,frontMatter:()=>g,metadata:()=>b,toc:()=>v});var n=r(3905),a=r(79215),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>i(e,c(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const g={},y="Language",b={unversionedId:"understand/language/README",id:"understand/language/README",title:"Language",description:"VAST comes with its own language for searching, reshaping, analyzing, and",source:"@site/docs/understand/language/README.md",sourceDirName:"understand/language",slug:"/understand/language/",permalink:"/docs/next/understand/language/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/language/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Understand",permalink:"/docs/next/understand/"},next:{title:"Pipelines",permalink:"/docs/next/understand/language/pipelines"}},h={},v=[],O={toc:v},w="wrapper";function E(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(w,f(d(d({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"language"}),"Language"),(0,n.kt)("p",null,"VAST comes with its own language for searching, reshaping, analyzing, and\nrouting data between various security tools."),(0,n.kt)("p",null,"We unpack the language facets in various topics:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",d({parentName:"li"},{href:"language/pipelines"}),"Pipelines"),": the central abstractions for constructing dataflows"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",d({parentName:"li"},{href:"language/expressions"}),"Expressions"),": a declarative way to filter structured data"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",d({parentName:"li"},{href:"language/operators"}),"Operators"),": a reference of available pipeline operators"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",d({parentName:"li"},{href:"language/frontends"}),"Frontends"),": a mechanism to bring your own language")),(0,n.kt)(a.Z,{mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);