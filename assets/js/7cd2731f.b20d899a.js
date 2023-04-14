"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>g,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const m={},h="head",v={unversionedId:"understand/operators/transformations/head",id:"understand/operators/transformations/head",title:"head",description:"Limits the input to the first N events.",source:"@site/docs/understand/operators/transformations/head.md",sourceDirName:"understand/operators/transformations",slug:"/understand/operators/transformations/head",permalink:"/docs/next/understand/operators/transformations/head",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/operators/transformations/head.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"hash",permalink:"/docs/next/understand/operators/transformations/hash"},next:{title:"parse",permalink:"/docs/next/understand/operators/transformations/parse"}},y={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;limit&gt;</code>",id:"limit",level:3},{value:"Examples",id:"examples",level:2}],O={toc:b},k="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(k,u(d(d({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"head"}),"head"),(0,n.kt)("p",null,"Limits the input to the first ",(0,n.kt)("em",{parentName:"p"},"N")," events."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"head [<limit>]\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The semantics of the ",(0,n.kt)("inlineCode",{parentName:"p"},"head")," operator are the same of the equivalent Unix tool:\nprocess a fixed number of events from the input. The operator terminates\nafter it has reached its limit."),(0,n.kt)("h3",d({},{id:"limit"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<limit>")),(0,n.kt)("p",null,"An unsigned integer denoting how many events to keep."),(0,n.kt)("p",null,"Defaults to 10."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Get the first ten events:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"head\n")),(0,n.kt)("p",null,"Get the first five events:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"head 5\n")))}g.isMDXComponent=!0}}]);