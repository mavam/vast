"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63311],{15680:(e,t,r)=>{r.d(t,{xA:()=>f,yg:()=>d});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(d,c(c({ref:t},f),{},{components:r})):n.createElement(d,c({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77534:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(96540),o=r(20053),i=r(36764),c=r(27449),a=r(75068),s=r(72183);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f({href:e,children:t}){return n.createElement(c.A,{href:e,className:(0,o.A)("card padding--lg",l.cardContainer)},t)}function p({href:e,icon:t,title:r,description:i}){return n.createElement(f,{href:e},n.createElement("h2",{className:(0,o.A)("text--truncate",l.cardTitle),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.A)("text--truncate",l.cardDescription),title:i},i))}function u({item:e}){var t;const r=(0,i._o)(e);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var t,r;const o=(0,a.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.cC)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:o,title:e.label,description:null!=(r=e.description)?r:null==c?void 0:c.description})}function d({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&O(e,r,t[r]);if(y)for(var r of y(t))v.call(t,r)&&O(e,r,t[r]);return e};function w({className:e}){const t=(0,i.$S)();return n.createElement(E,{items:t.items,className:e})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,h({},e));const c=(0,i.d1)(t);return n.createElement("section",{className:(0,o.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},72417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>E,frontMatter:()=>b,metadata:()=>g,toc:()=>O});var n=r(15680),o=r(77534),i=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))f.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>c(e,a(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r};const b={sidebar_position:3,sidebar_label:"Microsoft"},y="Microsoft",g={unversionedId:"integrations/microsoft/README",id:"version-v4.28/integrations/microsoft/README",title:"Microsoft",description:"Tenzir integrates with the following products from Microsoft.",source:"@site/versioned_docs/version-v4.28/integrations/microsoft/README.md",sourceDirName:"integrations/microsoft",slug:"/integrations/microsoft/",permalink:"/v4.28/integrations/microsoft/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/integrations/microsoft/README.md",tags:[],version:"v4.28",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Microsoft"},sidebar:"docsSidebar",previous:{title:"Pub/Sub",permalink:"/v4.28/integrations/google/pubsub/"},next:{title:"Azure",permalink:"/v4.28/integrations/microsoft/azure/"}},v={},O=[],h={toc:O},w="wrapper";function E(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.yg)(w,m(u(u({},h),i),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"microsoft"}),"Microsoft"),(0,n.yg)("p",null,"Tenzir integrates with the following products from Microsoft."),(0,n.yg)(o.A,{mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);