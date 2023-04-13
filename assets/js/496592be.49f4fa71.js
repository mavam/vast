"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(67294),a=r(86010),o=r(22093),i=r(11128),c=r(55602),l=r(14699);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d({href:e,children:t}){return n.createElement(i.Z,{href:e,className:(0,a.Z)("card padding--lg",s.cardContainer)},t)}function m({href:e,icon:t,title:r,description:o}){return n.createElement(d,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:r},t," ",r),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:o},o))}function p({item:e}){var t;const r=(0,o.Wl)(e);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function u({item:e}){var t,r;const a=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(m,{href:e.href,icon:a,title:e.label,description:null!=(r=e.description)?r:null==i?void 0:i.description})}function f({item:e}){switch(e.type){case"link":return n.createElement(u,{item:e});case"category":return n.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&g(e,r,t[r]);if(b)for(var r of b(t))h.call(t,r)&&g(e,r,t[r]);return e};function E({className:e}){const t=(0,o.jA)();return n.createElement(w,{items:t.items,className:e})}function w(e){const{items:t,className:r}=e;if(!t)return n.createElement(E,O({},e));const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},3447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>w,frontMatter:()=>y,metadata:()=>v,toc:()=>g});var n=r(3905),a=r(79215),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&m(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>i(e,c(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const y={},b="Data Model",v={unversionedId:"understand/data-model/README",id:"version-VAST v3.0/understand/data-model/README",title:"Data Model",description:"VAST's data model offers a rich set of types for deep domain modeling.",source:"@site/versioned_docs/version-VAST v3.0/understand/data-model/README.md",sourceDirName:"understand/data-model",slug:"/understand/data-model/",permalink:"/docs/understand/data-model/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/understand/data-model/README.md",tags:[],version:"VAST v3.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"VAST",permalink:"/docs/understand/language/frontends/vast"},next:{title:"Type System",permalink:"/docs/understand/data-model/type-system"}},h={},g=[],O={toc:g},E="wrapper";function w(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(E,u(p(p({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"data-model"}),"Data Model"),(0,n.kt)("p",null,"VAST's data model offers a rich set of types for deep domain modeling."),(0,n.kt)("p",null,"We cover the following aspects of the data model:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",p({parentName:"li"},{href:"data-model/type-system"}),"Type system"),": type descriptions and construction"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",p({parentName:"li"},{href:"data-model/schemas"}),"Schemas"),": the role of schemas in VAST"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",p({parentName:"li"},{href:"data-model/schemas"}),"Modules"),": packaging type definitions and schemas"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",p({parentName:"li"},{href:"data-model/taxonomies"}),"Taxonomies"),": field mappings and type constraints")),(0,n.kt)(a.Z,{mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);