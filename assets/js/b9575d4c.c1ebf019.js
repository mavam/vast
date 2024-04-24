"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28837],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39191:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>w});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))l.call(r,t)&&c(e,t,r[t]);return e},f=(e,r)=>a(e,i(r)),m=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const d={sidebar_custom_props:{operator:{transformation:!0}}},v="write",y={unversionedId:"operators/write",id:"version-Tenzir v4.11/operators/write",title:"write",description:"The write operator converts events into raw bytes.",source:"@site/versioned_docs/version-Tenzir v4.11/operators/write.md",sourceDirName:"operators",slug:"/operators/write",permalink:"/Tenzir v4.11/operators/write",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.11/operators/write.md",tags:[],version:"Tenzir v4.11",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"where",permalink:"/Tenzir v4.11/operators/where"},next:{title:"yara",permalink:"/Tenzir v4.11/operators/yara"}},b={},w=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;format&gt;</code>",id:"format",level:3},{value:"Examples",id:"examples",level:2}],O={toc:w},h="wrapper";function k(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(h,f(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"write"}),"write"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"write")," operator converts events into raw bytes."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"write <format>\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"write")," operator prints events and outputs the formatted result as raw\nbytes."),(0,n.kt)("h3",u({},{id:"format"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<format>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",u({parentName:"p"},{href:"/Tenzir%20v4.11/formats"}),"format")," used to convert events into raw bytes."),(0,n.kt)("p",null,"Some formats have format-specific options. Please refer to the documentation of\nthe individual formats for more information."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Convert events into JSON:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"write json\n")),(0,n.kt)("p",null,"Convert events into CSV:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"write csv\n")))}k.isMDXComponent=!0}}]);