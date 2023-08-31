"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9783],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(t),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78168:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>h,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(p)for(var t of p(r))l.call(r,t)&&u(e,t,r[t]);return e},d=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_position:4},h="Export from a node",y={unversionedId:"user-guides/export-from-a-node",id:"version-Tenzir v4.1/user-guides/export-from-a-node",title:"Export from a node",description:"Exporting (or querying) data can be done by [running a",source:"@site/versioned_docs/version-Tenzir v4.1/user-guides/export-from-a-node.md",sourceDirName:"user-guides",slug:"/user-guides/export-from-a-node",permalink:"/user-guides/export-from-a-node",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.1/user-guides/export-from-a-node.md",tags:[],version:"Tenzir v4.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Import into a node",permalink:"/user-guides/import-into-a-node"},next:{title:"Show available schemas",permalink:"/user-guides/show-available-schemas"}},b={},g=[],v={toc:g},k="wrapper";function w(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(k,d(c(c({},v),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"export-from-a-node"}),"Export from a node"),(0,n.kt)("p",null,"Exporting (or ",(0,n.kt)("em",{parentName:"p"},"querying"),") data can be done by ",(0,n.kt)("a",c({parentName:"p"},{href:"/user-guides/run-a-pipeline/"}),"running a\npipeline")," that begins with the\n",(0,n.kt)("a",c({parentName:"p"},{href:"/operators/sources/export"}),(0,n.kt)("inlineCode",{parentName:"a"},"export"))," source."),(0,n.kt)("p",null,"Let's bring back the historical data we ",(0,n.kt)("a",c({parentName:"p"},{href:"/user-guides/import-into-a-node"}),"imported in the previous\nsection"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"export | head\n")),(0,n.kt)("p",null,"Think of ",(0,n.kt)("inlineCode",{parentName:"p"},"export")," being the entire data at a node. As this can grow quickly, you\nmay query only subsets of it, e.g., by filtering it using\n",(0,n.kt)("a",c({parentName:"p"},{href:"/operators/transformations/where"}),(0,n.kt)("inlineCode",{parentName:"a"},"where")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"export | where orig_bytes < 1 KiB\n")),(0,n.kt)("p",null,"Logically, this query would ",(0,n.kt)("em",{parentName:"p"},"first")," export the entire historical data, and\n",(0,n.kt)("em",{parentName:"p"},"then")," begin filtering the data. But since Tenzir does ",(0,n.kt)("em",{parentName:"p"},"predicate pushdown"),", the\npipeline executor will analyze the query and push the\n",(0,n.kt)("a",c({parentName:"p"},{href:"/language/expressions"}),"expression")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"where")," with the predicate\n",(0,n.kt)("inlineCode",{parentName:"p"},"orig_bytes < 1 KiB"),' "down" to the ',(0,n.kt)("inlineCode",{parentName:"p"},"export")," operator. Tenzir's storage engine\nthen asks its catalog to identify the relevant subset of partitions that the\nquery should execute on. This dramatically improves the query performance for\nselective workloads, such as point queries for single values or specific time\nranges."),(0,n.kt)("p",null,"To figure out the shape of the data to query, you can ",(0,n.kt)("a",c({parentName:"p"},{href:"/user-guides/show-available-schemas"}),"show available\nschemas"),"."))}w.isMDXComponent=!0}}]);