"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81281],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>h});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(h,i(i({ref:r},c),{},{components:t})):n.createElement(h,i({ref:r},c))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6190:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>y,default:()=>w,frontMatter:()=>h,metadata:()=>m,toc:()=>v});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const h={sidebar_custom_props:{operator:{transformation:!0}}},y="hash",m={unversionedId:"operators/hash",id:"version-v4.24/operators/hash",title:"hash",description:"Computes a SHA256 hash digest of a given field.",source:"@site/versioned_docs/version-v4.24/operators/hash.md",sourceDirName:"operators",slug:"/operators/hash",permalink:"/operators/hash",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/operators/hash.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"from",permalink:"/operators/from"},next:{title:"head",permalink:"/operators/head"}},g={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;-s|--salt&gt;=&lt;string&gt;</code>",id:"-s--saltstring",level:3},{value:"<code>&lt;field&gt;</code>",id:"field",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},O="wrapper";function w(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.yg)(O,u(d(d({},b),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"hash"}),"hash"),(0,n.yg)("p",null,"Computes a SHA256 hash digest of a given field."),(0,n.yg)("admonition",d({},{title:"Deprecated",type:"warning"}),(0,n.yg)("p",{parentName:"admonition"},"This operator will soon be removed in favor of first-class support for functions\nthat can be used in a variety of different operators and contexts.")),(0,n.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"hash [-s|--salt=<string>] <field>\n")),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"hash")," operator calculates a hash digest of a given field."),(0,n.yg)("h3",d({},{id:"-s--saltstring"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<-s|--salt>=<string>")),(0,n.yg)("p",null,"A salt value for the hash."),(0,n.yg)("h3",d({},{id:"field"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<field>")),(0,n.yg)("p",null,"The field over which the hash is computed."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Hash all values of the field ",(0,n.yg)("inlineCode",{parentName:"p"},"username")," using the salt value ",(0,n.yg)("inlineCode",{parentName:"p"},'"xxx"')," and store\nthe digest in a new field ",(0,n.yg)("inlineCode",{parentName:"p"},"username_hashed"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),'hash --salt="B3IwnumKPEJDAA4u" username\n')))}w.isMDXComponent=!0}}]);