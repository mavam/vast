"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32758],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?n.createElement(y,a(a({ref:r},c),{},{components:t})):n.createElement(y,a({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25487:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>j,frontMatter:()=>y,metadata:()=>v,toc:()=>g});var n=t(15680),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))l.call(r,t)&&c(e,t,r[t]);return e},m=(e,r)=>i(e,a(r)),d=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_custom_props:{operator:{sink:!0}}},f="import",v={unversionedId:"operators/import",id:"version-v4.20/operators/import",title:"import",description:"Imports events into a Tenzir node. The dual to export.",source:"@site/versioned_docs/version-v4.20/operators/import.md",sourceDirName:"operators",slug:"/operators/import",permalink:"/v4.20/operators/import",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/import.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{sink:!0}}},sidebar:"docsSidebar",previous:{title:"head",permalink:"/v4.20/operators/head"},next:{title:"load",permalink:"/v4.20/operators/load"}},b={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],O={toc:g},h="wrapper";function j(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.yg)(h,m(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"import"}),"import"),(0,n.yg)("p",null,"Imports events into a Tenzir node. The dual to ",(0,n.yg)("a",u({parentName:"p"},{href:"/v4.20/operators/export"}),(0,n.yg)("inlineCode",{parentName:"a"},"export")),"."),(0,n.yg)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"import\n")),(0,n.yg)("h2",u({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"import")," operator persists events in a Tenzir node."),(0,n.yg)("h2",u({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Import Zeek conn logs into a Tenzir node."),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"from file conn.log read zeek-tsv | import\n")))}j.isMDXComponent=!0}}]);