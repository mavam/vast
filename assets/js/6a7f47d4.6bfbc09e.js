"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),a=r(86010),o=r(22093),i=r(11128),c=r(55602),s=r(14699);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p({href:e,children:t}){return n.createElement(i.Z,{href:e,className:(0,a.Z)("card padding--lg",l.cardContainer)},t)}function u({href:e,icon:t,title:r,description:o}){return n.createElement(p,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:r},t," ",r),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:o},o))}function d({item:e}){const t=(0,o.Wl)(e);return t?n.createElement(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var t;const r=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(u,{href:e.href,icon:r,title:e.label,description:null==a?void 0:a.description})}function f({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&O(e,r,t[r]);if(g)for(var r of g(t))h.call(t,r)&&O(e,r,t[r]);return e};function E({className:e}){const t=(0,o.jA)();return n.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(E,v({},e));const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},14506:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>k,frontMatter:()=>y,metadata:()=>b,toc:()=>O});var n=r(3905),a=r(79215),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>i(e,c(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={},g="Operators",b={unversionedId:"understand/language/operators/README",id:"understand/language/operators/README",title:"Operators",description:"Operators are the building block of pipelines. There exist three",source:"@site/docs/understand/language/operators/README.md",sourceDirName:"understand/language/operators",slug:"/understand/language/operators/",permalink:"/docs/next/understand/language/operators/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/language/operators/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Expressions",permalink:"/docs/next/understand/language/expressions"},next:{title:"drop",permalink:"/docs/next/understand/language/operators/drop"}},h={},O=[],v={toc:O},E="wrapper";function k(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(E,m(d(d({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"operators"}),"Operators"),(0,n.kt)("p",null,"Operators are the building block of ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/understand/language/"}),"pipelines"),". There exist three\ntypes: ",(0,n.kt)("em",{parentName:"p"},"sources"),", ",(0,n.kt)("em",{parentName:"p"},"sinks"),", and ",(0,n.kt)("em",{parentName:"p"},"transformations"),"."),(0,n.kt)("admonition",d({},{title:"Sources & Sinks",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The current version VAST only ships with transformations. We are in the middle\nof implementing sources (",(0,n.kt)("inlineCode",{parentName:"p"},"from"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"read"),") and sinks (",(0,n.kt)("inlineCode",{parentName:"p"},"write"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"to"),").")),(0,n.kt)("p",null,"VAST comes with the following operators, in alphabetical order:"),(0,n.kt)(a.Z,{mdxType:"DocCardList"}))}k.isMDXComponent=!0}}]);