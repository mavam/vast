"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62479],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77534:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(96540),o=r(20053),i=r(36764),c=r(27449),a=r(75068),l=r(72183);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p({href:e,children:t}){return n.createElement(c.A,{href:e,className:(0,o.A)("card padding--lg",s.cardContainer)},t)}function u({href:e,icon:t,title:r,description:i}){return n.createElement(p,{href:e},n.createElement("h2",{className:(0,o.A)("text--truncate",s.cardTitle),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.A)("text--truncate",s.cardDescription),title:i},i))}function d({item:e}){var t;const r=(0,i._o)(e);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var t,r;const o=(0,a.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.cC)(null!=(t=e.docId)?t:void 0);return n.createElement(u,{href:e.href,icon:o,title:e.label,description:null!=(r=e.description)?r:null==c?void 0:c.description})}function f({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&h(e,r,t[r]);if(v)for(var r of v(t))g.call(t,r)&&h(e,r,t[r]);return e};function w({className:e}){const t=(0,i.$S)();return n.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,O({},e));const c=(0,i.d1)(t);return n.createElement("section",{className:(0,o.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},87180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>j,frontMatter:()=>y,metadata:()=>b,toc:()=>h});var n=r(15680),o=r(77534),i=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>c(e,a(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={},v="Development Guides",b={unversionedId:"development",id:"version-v4.21/development",title:"Development Guides",description:"This section is for developers that work with the Tenzir source code. The",source:"@site/versioned_docs/version-v4.21/development.md",sourceDirName:".",slug:"/development",permalink:"/development",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/development.md",tags:[],version:"v4.21",frontMatter:{},sidebar:"docsSidebar",previous:{title:"GitHub",permalink:"/contribution/github"},next:{title:"Build from source",permalink:"/development/build-from-source"}},g={},h=[],O={toc:h},w="wrapper";function j(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.yg)(w,m(d(d({},O),i),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"development-guides"}),"Development Guides"),(0,n.yg)("p",null,"This section is for developers that work with the Tenzir source code. The\nfollowing guides are available:"),(0,n.yg)(o.A,{mdxType:"DocCardList"}))}j.isMDXComponent=!0}}]);