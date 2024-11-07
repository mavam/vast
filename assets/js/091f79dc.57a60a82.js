"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56384],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74971:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>w,frontMatter:()=>y,metadata:()=>v,toc:()=>O});var n=t(15680),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&p(e,t,r[t]);return e},d=(e,r)=>i(e,a(r)),f=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_custom_props:{connector:{loader:!0}}},m="stdin",v={unversionedId:"connectors/stdin",id:"version-v4.22/connectors/stdin",title:"stdin",description:"The stdin loader is a shorthand for file with argument -.",source:"@site/versioned_docs/version-v4.22/connectors/stdin.md",sourceDirName:"connectors",slug:"/connectors/stdin",permalink:"/v4.22/connectors/stdin",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/connectors/stdin.md",tags:[],version:"v4.22",frontMatter:{sidebar_custom_props:{connector:{loader:!0}}},sidebar:"docsSidebar",previous:{title:"sqs",permalink:"/v4.22/connectors/sqs"},next:{title:"stdout",permalink:"/v4.22/connectors/stdout"}},b={},O=[],g={toc:O},h="wrapper";function w(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.yg)(h,d(u(u({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"stdin"}),"stdin"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"stdin")," loader is a shorthand for ",(0,n.yg)("a",u({parentName:"p"},{href:"/v4.22/connectors/file"}),(0,n.yg)("inlineCode",{parentName:"a"},"file"))," with argument ",(0,n.yg)("inlineCode",{parentName:"p"},"-"),"."))}w.isMDXComponent=!0}}]);