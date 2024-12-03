"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23355],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>d});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(t),y=o,d=f["".concat(s,".").concat(y)]||f[y]||u[y]||c;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[f]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},19796:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>j,frontMatter:()=>d,metadata:()=>v,toc:()=>g});var n=t(15680),o=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&l(e,t,r[t]);if(i)for(var t of i(r))p.call(r,t)&&l(e,t,r[t]);return e},u=(e,r)=>c(e,a(r)),y=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const d={sidebar_custom_props:{connector:{loader:!0}}},m="ftps",v={unversionedId:"connectors/ftps",id:"version-v4.24/connectors/ftps",title:"ftps",description:"Loads bytes via FTPS.",source:"@site/versioned_docs/version-v4.24/connectors/ftps.md",sourceDirName:"connectors",slug:"/connectors/ftps",permalink:"/connectors/ftps",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/connectors/ftps.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{connector:{loader:!0}}},sidebar:"docsSidebar",previous:{title:"ftp",permalink:"/connectors/ftp"},next:{title:"gcs",permalink:"/connectors/gcs"}},b={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2}],O={toc:g},h="wrapper";function j(e){var r=e,{components:t}=r,o=y(r,["components"]);return(0,n.yg)(h,u(f(f({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",f({},{id:"ftps"}),"ftps"),(0,n.yg)("p",null,"Loads bytes via FTPS."),(0,n.yg)("h2",f({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",f({parentName:"pre"},{}),"ftps <url>\n")),(0,n.yg)("h2",f({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"ftps")," loader is an alias for the ",(0,n.yg)("a",f({parentName:"p"},{href:"/connectors/ftp"}),(0,n.yg)("inlineCode",{parentName:"a"},"ftp"))," connector with a\ndefault URL scheme of ",(0,n.yg)("inlineCode",{parentName:"p"},"ftps"),"."))}j.isMDXComponent=!0}}]);