"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84530],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>m});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),c=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=c(e.components);return o.createElement(i.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},y=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),y=n,m=d["".concat(i,".").concat(y)]||d[y]||u[y]||a;return t?o.createElement(m,p(p({ref:r},s),{},{components:t})):o.createElement(m,p({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=y;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[d]="string"==typeof e?e:n,p[1]=l;for(var c=2;c<a;c++)p[c]=t[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},18023:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>j,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var o=t(15680),n=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&s(e,t,r[t]);return e},u=(e,r)=>a(e,p(r)),y=(e,r)=>{var t={};for(var o in e)i.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))r.indexOf(o)<0&&c.call(e,o)&&(t[o]=e[o]);return t};const m={sidebar_custom_props:{operator:{source:!0}}},f="load",g={unversionedId:"operators/load",id:"version-v4.21/operators/load",title:"load",description:"The load operator acquires raw bytes from a connector.",source:"@site/versioned_docs/version-v4.21/operators/load.md",sourceDirName:"operators",slug:"/operators/load",permalink:"/operators/load",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/operators/load.md",tags:[],version:"v4.21",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"import",permalink:"/operators/import"},next:{title:"lookup",permalink:"/operators/lookup"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"Examples",id:"examples",level:2}],h={toc:b},O="wrapper";function j(e){var r=e,{components:t}=r,n=y(r,["components"]);return(0,o.yg)(O,u(d(d({},h),n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",d({},{id:"load"}),"load"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"load")," operator acquires raw bytes from a ",(0,o.yg)("a",d({parentName:"p"},{href:"/connectors"}),"connector"),"."),(0,o.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{}),"load <url>\nload <path>\nload <connector>\n")),(0,o.yg)("h2",d({},{id:"description"}),"Description"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"load")," operator emits raw bytes."),(0,o.yg)("p",null,"Notably, it cannot be used together with operators that expect events as input,\nbut rather only with operators that expect bytes, e.g., ",(0,o.yg)("a",d({parentName:"p"},{href:"/operators/read"}),(0,o.yg)("inlineCode",{parentName:"a"},"read"))," or\n",(0,o.yg)("a",d({parentName:"p"},{href:"/operators/save"}),(0,o.yg)("inlineCode",{parentName:"a"},"save")),"."),(0,o.yg)("h3",d({},{id:"connector"}),(0,o.yg)("inlineCode",{parentName:"h3"},"<connector>")),(0,o.yg)("p",null,"The ",(0,o.yg)("a",d({parentName:"p"},{href:"/connectors"}),"connector")," used to load bytes."),(0,o.yg)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,o.yg)("h2",d({},{id:"examples"}),"Examples"),(0,o.yg)("p",null,"Read bytes from stdin:"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{}),"load stdin\n")),(0,o.yg)("p",null,"Read bytes from the URL ",(0,o.yg)("inlineCode",{parentName:"p"},"https://example.com/file.json"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{}),"load https://example.com/file.json\nload https example.com/file.json\n")),(0,o.yg)("p",null,"Read bytes from the file ",(0,o.yg)("inlineCode",{parentName:"p"},"path/to/eve.json"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{}),"load path/to/eve.json\nload file path/to/eve.json\n")))}j.isMDXComponent=!0}}]);