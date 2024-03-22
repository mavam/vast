"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27726],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>g,frontMatter:()=>f,metadata:()=>v,toc:()=>O});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>o(e,a(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{source:!0}}},y="api",v={unversionedId:"operators/api",id:"version-Tenzir v4.10/operators/api",title:"api",description:"Use Tenzir's REST API directly from a pipeline.",source:"@site/versioned_docs/version-Tenzir v4.10/operators/api.md",sourceDirName:"operators",slug:"/operators/api",permalink:"/Tenzir v4.10/operators/api",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/operators/api.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"Operators",permalink:"/Tenzir v4.10/operators"},next:{title:"apply",permalink:"/Tenzir v4.10/operators/apply"}},b={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;endpoint&gt;</code>",id:"endpoint",level:3},{value:"<code>[&lt;request-body&gt;]</code>",id:"request-body",level:3},{value:"Examples",id:"examples",level:2}],k={toc:O},h="wrapper";function g(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,n.kt)(h,d(u(u({},k),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"api"}),"api"),(0,n.kt)("p",null,"Use Tenzir's REST API directly from a pipeline."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"api <endpoint> [<request-body>]\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"api")," operator interacts with Tenzir's REST API without needing to spin up a\nweb server, making all APIs accessible from within pipelines."),(0,n.kt)("admonition",u({},{title:"OpenAPI",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Visit ",(0,n.kt)("a",u({parentName:"p"},{href:"/api"}),"Tenzir's REST API specification")," to see a list of all available\nendpoints.")),(0,n.kt)("h3",u({},{id:"endpoint"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<endpoint>")),(0,n.kt)("p",null,"The endpoint to request, e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"/pipeline/list")," to list all pipelines created\nthrough the ",(0,n.kt)("inlineCode",{parentName:"p"},"/pipeline/create")," endpoint."),(0,n.kt)("h3",u({},{id:"request-body"}),(0,n.kt)("inlineCode",{parentName:"h3"},"[<request-body>]")),(0,n.kt)("p",null,"A single string containing the JSON request body to send with the request."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"List all running pipelines:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"api /pipeline/list\n")),(0,n.kt)("p",null,"Create a new pipeline and start it immediately."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'api /pipeline/create \'{"name": "Suricata Import", "definition": "from file /tmp/eve.sock read suricata", "autostart": {"created": true}}\'\n')))}g.isMDXComponent=!0}}]);