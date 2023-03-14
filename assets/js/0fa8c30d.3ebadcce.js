"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[445],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=c,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(67294),c=r(86010),o=r(22093),a=r(11128),i=r(55602),s=r(14699);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return n.createElement(a.Z,{href:e,className:(0,c.Z)("card padding--lg",l.cardContainer)},t)}function p({href:e,icon:t,title:r,description:o}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,c.Z)("text--truncate",l.cardTitle),title:r},t," ",r),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",l.cardDescription),title:o},o))}function d({item:e}){const t=(0,o.Wl)(e);return t?n.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var t;const r=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:r,title:e.label,description:null==c?void 0:c.description})}function f({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&O(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&O(e,r,t[r]);return e};function E({className:e}){const t=(0,o.jA)();return n.createElement(w,{items:t.items,className:e})}function w(e){const{items:t,className:r}=e;if(!t)return n.createElement(E,g({},e));const a=(0,o.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},15425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>w,frontMatter:()=>y,metadata:()=>h,toc:()=>O});var n=r(3905),c=r(79215),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const y={},b="Architecture",h={unversionedId:"understand/architecture/README",id:"version-v3.0.0/understand/architecture/README",title:"Architecture",description:"The system architecture documents comprise the following parts.",source:"@site/versioned_docs/version-v3.0.0/understand/architecture/README.md",sourceDirName:"understand/architecture",slug:"/understand/architecture/",permalink:"/docs/understand/architecture/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/versioned_docs/version-v3.0.0/understand/architecture/README.md",tags:[],version:"v3.0.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Connectors",permalink:"/docs/understand/connectors/"},next:{title:"Design Goals",permalink:"/docs/understand/architecture/design-goals"}},v={},O=[],g={toc:O},E="wrapper";function w(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(E,m(d(d({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"architecture"}),"Architecture"),(0,n.kt)("p",null,"The system architecture documents comprise the following parts."),(0,n.kt)(c.Z,{mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);