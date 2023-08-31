"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36036],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},67257:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var n=t(3905),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))p.call(r,t)&&c(e,t,r[t]);return e},d=(e,r)=>s(e,a(r)),f=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const m={},v="shell",y={unversionedId:"operators/sources/shell",id:"version-Tenzir v4.0/operators/sources/shell",title:"shell",description:"Executes a system command and hooks its stdout into the pipeline.",source:"@site/versioned_docs/version-Tenzir v4.0/operators/sources/shell.md",sourceDirName:"operators/sources",slug:"/operators/sources/shell",permalink:"/Tenzir v4.0/operators/sources/shell",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0/operators/sources/shell.md",tags:[],version:"Tenzir v4.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load",permalink:"/Tenzir v4.0/operators/sources/load"},next:{title:"show",permalink:"/Tenzir v4.0/operators/sources/show"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],O={toc:b},g="wrapper";function k(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(g,d(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"shell"}),"shell"),(0,n.kt)("p",null,"Executes a system command and hooks its stdout into the pipeline."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"shell <command>\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",u({parentName:"p"},{href:"/Tenzir%20v4.0/operators/transformations/shell"}),(0,n.kt)("inlineCode",{parentName:"a"},"shell")," as transformation")," for usage\ninstructions."),(0,n.kt)("p",null,"The difference to the transformation is that the source operator ignores the\ncommand's stdin."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Show a live log from the ",(0,n.kt)("inlineCode",{parentName:"p"},"tenzir-node")," service:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'shell "journalctl -u tenzir-node -f | read json"\n')))}k.isMDXComponent=!0}}]);