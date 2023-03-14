"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[922],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||c;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(67294),o=r(86010),c=r(22093),i=r(11128),a=r(55602),l=r(14699);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p({href:e,children:t}){return n.createElement(i.Z,{href:e,className:(0,o.Z)("card padding--lg",s.cardContainer)},t)}function u({href:e,icon:t,title:r,description:c}){return n.createElement(p,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:r},t," ",r),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:c},c))}function d({item:e}){const t=(0,c.Wl)(e);return t?n.createElement(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t;const r=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(u,{href:e.href,icon:r,title:e.label,description:null==o?void 0:o.description})}function m({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&g(e,r,t[r]);if(y)for(var r of y(t))O.call(t,r)&&g(e,r,t[r]);return e};function E({className:e}){const t=(0,c.jA)();return n.createElement(w,{items:t.items,className:e})}function w(e){const{items:t,className:r}=e;if(!t)return n.createElement(E,h({},e));const i=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}},58004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>y,default:()=>w,frontMatter:()=>v,metadata:()=>b,toc:()=>g});var n=r(3905),o=r(79215),c=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>i(e,a(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const v={},y="Develop",b={unversionedId:"develop/README",id:"version-v3.0.0/develop/README",title:"Develop",description:"This section describes VAST from a developer perspective. We cover the",source:"@site/versioned_docs/version-v3.0.0/develop/README.md",sourceDirName:"develop",slug:"/develop/",permalink:"/docs/develop/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/versioned_docs/version-v3.0.0/develop/README.md",tags:[],version:"v3.0.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Notebooks",permalink:"/docs/contribute/notebooks"},next:{title:"Guides",permalink:"/docs/develop/guides/"}},O={},g=[],h={toc:g},E="wrapper";function w(e){var t=e,{components:r}=t,c=m(t,["components"]);return(0,n.kt)(E,f(d(d({},h),c),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"develop"}),"Develop"),(0,n.kt)("p",null,"This section describes VAST from a ",(0,n.kt)("strong",{parentName:"p"},"developer perspective"),". We cover the\nfollowing topics:"),(0,n.kt)(o.Z,{mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);