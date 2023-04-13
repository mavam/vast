"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=c,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(67294),c=r(86010),o=r(22093),a=r(11128),i=r(55602),l=r(14699);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return n.createElement(a.Z,{href:e,className:(0,c.Z)("card padding--lg",s.cardContainer)},t)}function p({href:e,icon:t,title:r,description:o}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,c.Z)("text--truncate",s.cardTitle),title:r},t," ",r),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",s.cardDescription),title:o},o))}function d({item:e}){var t;const r=(0,o.Wl)(e);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var t,r;const c=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:c,title:e.label,description:null!=(r=e.description)?r:null==a?void 0:a.description})}function f({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&g(e,r,t[r]);if(b)for(var r of b(t))O.call(t,r)&&g(e,r,t[r]);return e};function E({className:e}){const t=(0,o.jA)();return n.createElement(w,{items:t.items,className:e})}function w(e){const{items:t,className:r}=e;if(!t)return n.createElement(E,v({},e));const a=(0,o.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},48136:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>b,default:()=>w,frontMatter:()=>y,metadata:()=>h,toc:()=>g});var n=r(3905),c=r(79215),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const y={},b="Architecture",h={unversionedId:"understand/architecture/README",id:"understand/architecture/README",title:"Architecture",description:"The system architecture documents comprise the following parts.",source:"@site/docs/understand/architecture/README.md",sourceDirName:"understand/architecture",slug:"/understand/architecture/",permalink:"/docs/next/understand/architecture/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/architecture/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Connectors",permalink:"/docs/next/understand/connectors/"},next:{title:"Design Goals",permalink:"/docs/next/understand/architecture/design-goals"}},O={},g=[],v={toc:g},E="wrapper";function w(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(E,m(d(d({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"architecture"}),"Architecture"),(0,n.kt)("p",null,"The system architecture documents comprise the following parts."),(0,n.kt)(c.Z,{mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);