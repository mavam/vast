"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43113],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||c;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[f]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50971:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>v,toc:()=>O});var n=r(3905),o=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&l(e,r,t[r]);return e},u=(e,t)=>c(e,i(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{connector:{loader:!0}}},y="ftps",v={unversionedId:"connectors/ftps",id:"version-Tenzir v4.9/connectors/ftps",title:"ftps",description:"Loads bytes via FTPS.",source:"@site/versioned_docs/version-Tenzir v4.9/connectors/ftps.md",sourceDirName:"connectors",slug:"/connectors/ftps",permalink:"/connectors/ftps",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.9/connectors/ftps.md",tags:[],version:"Tenzir v4.9",frontMatter:{sidebar_custom_props:{connector:{loader:!0}}},sidebar:"docsSidebar",previous:{title:"ftp",permalink:"/connectors/ftp"},next:{title:"gcs",permalink:"/connectors/gcs"}},b={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2}],g={toc:O},h="wrapper";function j(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(h,u(f(f({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"ftps"}),"ftps"),(0,n.kt)("p",null,"Loads bytes via FTPS."),(0,n.kt)("h2",f({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"ftps <url>\n")),(0,n.kt)("h2",f({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ftps")," loader is an alias for the ",(0,n.kt)("a",f({parentName:"p"},{href:"/connectors/ftp"}),(0,n.kt)("inlineCode",{parentName:"a"},"ftp"))," connector with a\ndefault URL scheme of ",(0,n.kt)("inlineCode",{parentName:"p"},"ftps"),"."))}j.isMDXComponent=!0}}]);