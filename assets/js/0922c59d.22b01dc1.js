"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64377],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,y=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(y,p(p({ref:r},s),{},{components:t})):n.createElement(y,p({ref:r},s))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[f]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3928:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>w,frontMatter:()=>y,metadata:()=>g,toc:()=>b});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&s(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&s(e,t,r[t]);return e},u=(e,r)=>a(e,p(r)),d=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_custom_props:{connector:{loader:!0}}},m="ftp",g={unversionedId:"connectors/ftp",id:"version-v4.21/connectors/ftp",title:"ftp",description:"Loads bytes via FTP.",source:"@site/versioned_docs/version-v4.21/connectors/ftp.md",sourceDirName:"connectors",slug:"/connectors/ftp",permalink:"/connectors/ftp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/connectors/ftp.md",tags:[],version:"v4.21",frontMatter:{sidebar_custom_props:{connector:{loader:!0}}},sidebar:"docsSidebar",previous:{title:"file",permalink:"/connectors/file"},next:{title:"ftps",permalink:"/connectors/ftps"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;url&gt;</code>",id:"url",level:3},{value:"Examples",id:"examples",level:2}],O={toc:b},h="wrapper";function w(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.yg)(h,u(f(f({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",f({},{id:"ftp"}),"ftp"),(0,n.yg)("p",null,"Loads bytes via FTP."),(0,n.yg)("h2",f({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",f({parentName:"pre"},{}),"ftp <url>\n")),(0,n.yg)("h2",f({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"ftp")," loader downloads a file via the ",(0,n.yg)("a",f({parentName:"p"},{href:"https://en.wikipedia.org/wiki/File_Transfer_Protocol"}),"File Transfer Protocol\n(FTP)"),"."),(0,n.yg)("h3",f({},{id:"url"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<url>")),(0,n.yg)("p",null,"The FTP URL."),(0,n.yg)("p",null,"To provide a username and password, use the typical ",(0,n.yg)("inlineCode",{parentName:"p"},"user:pass@example.org"),"\nsyntax."),(0,n.yg)("p",null,"The scheme is ",(0,n.yg)("inlineCode",{parentName:"p"},"ftp://")," and can be omitted."),(0,n.yg)("h2",f({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Download and process a ",(0,n.yg)("a",f({parentName:"p"},{href:"/formats/csv"}),"CSV")," file:"),(0,n.yg)("pre",null,(0,n.yg)("code",f({parentName:"pre"},{}),"from ftp example.org/file.csv read csv\n")),(0,n.yg)("p",null,"Process a Zstd-compressed ",(0,n.yg)("a",f({parentName:"p"},{href:"/formats/suricata"}),"Suricata EVE JSON")," file:"),(0,n.yg)("pre",null,(0,n.yg)("code",f({parentName:"pre"},{}),"load ftp example.org/gigantic.eve.json.zst\n| decompress zstd\n| read suricata\n")))}w.isMDXComponent=!0}}]);