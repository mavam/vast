"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14577],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>O,frontMatter:()=>h,metadata:()=>g,toc:()=>v});var a=r(15680),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>i(e,o(t)),m=(e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const h={sidebar_custom_props:{experimental:!0,operator:{source:!0,transformation:!0,sink:!0}}},y="cache",g={unversionedId:"operators/cache",id:"version-v4.24/operators/cache",title:"cache",description:"An in-memory cache shared between pipelines.",source:"@site/versioned_docs/version-v4.24/operators/cache.md",sourceDirName:"operators",slug:"/operators/cache",permalink:"/operators/cache",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/operators/cache.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{experimental:!0,operator:{source:!0,transformation:!0,sink:!0}}},sidebar:"docsSidebar",previous:{title:"buffer",permalink:"/operators/buffer"},next:{title:"chart",permalink:"/operators/chart"}},f={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;id&gt;</code>",id:"id",level:3},{value:"<code>--mode &lt;read|write|readwrite&gt;</code>",id:"--mode-readwritereadwrite",level:3},{value:"<code>--capacity &lt;capacity&gt;</code>",id:"--capacity-capacity",level:3},{value:"<code>--read-timeout &lt;duration&gt;</code>",id:"--read-timeout-duration",level:3},{value:"<code>--write-timeout &lt;duration&gt;</code>",id:"--write-timeout-duration",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},w="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.yg)(w,u(d(d({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"cache"}),"cache"),(0,a.yg)("p",null,"An in-memory cache shared between pipelines."),(0,a.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"cache <id> [--mode <read|write|readwrite>] [--capacity <capacity>]\n           [--read-timeout <duration>] [--write-timeout <duration>]\n")),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"cache")," operator caches events in an in-memory buffer at a node. Caches must\nhave a user-provided unique ID."),(0,a.yg)("p",null,"The first pipeline to use a cache writes into the cache. All further pipelines\nusing the same cache will read from the cache instead of executing the operators\nbefore the ",(0,a.yg)("inlineCode",{parentName:"p"},"cache")," operator in the same pipeline."),(0,a.yg)("admonition",d({},{title:"Expert Operator",type:"warning"}),(0,a.yg)("p",{parentName:"admonition"},"We designed the ",(0,a.yg)("inlineCode",{parentName:"p"},"cache")," operator for under-the-hood use of the Tenzir Platform\non ",(0,a.yg)("a",d({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),". We generally recommend not using\nthe operator by yourself, but rather relying on the Tenzir Platform to\nautomatically manage caches for you.")),(0,a.yg)("h3",d({},{id:"id"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<id>")),(0,a.yg)("p",null,"An arbitrary string that uniquely identifies the cache."),(0,a.yg)("h3",d({},{id:"--mode-readwritereadwrite"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--mode <read|write|readwrite>")),(0,a.yg)("p",null,"Configures whether the operator is used a source, a sink, or a transformation:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"read"),": The operators acts as a source reading from a cache that is requires to\nalready exist."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"write"),": The operator acts as a sink writing into a cache that must not\nalready exist."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"readwrite"),": The operator acts as a transformation passing through events,\nlazily creating a cache if it does not already exist. If a cache exists,\nupstream operators will not be run and instead the cache is read.")),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"readwrite"),"."),(0,a.yg)("h3",d({},{id:"--capacity-capacity"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--capacity <capacity>")),(0,a.yg)("p",null,"Stores how many events the cache can hold. Caches stop accepting events if the\ncapacity is reached and emit a warning."),(0,a.yg)("p",null,"Defaults to 4 Mi."),(0,a.yg)("h3",d({},{id:"--read-timeout-duration"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--read-timeout <duration>")),(0,a.yg)("p",null,"Defines the maximum inactivity time until the cache is evicted from memory. The\ntimer starts when writing the cache completes (or runs into the capacity limit),\nand resets whenever the cache is read from."),(0,a.yg)("p",null,"Defaults to 1 minute."),(0,a.yg)("h3",d({},{id:"--write-timeout-duration"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--write-timeout <duration>")),(0,a.yg)("p",null,"If set, defines an upper bound for the lifetime of the cache. Unlike the\n",(0,a.yg)("inlineCode",{parentName:"p"},"--read-timeout")," option, this does not refresh when the cache is accessed."),(0,a.yg)("p",null,"Disabled by default."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Cache the results of an expensive query:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),'export\n| where :ip in 192.168.0.0/16\n| cache "my-cache"\n')),(0,a.yg)("p",null,"Get some high-level statistics about the query, calculating the cache again only\nif it does not exist anymore:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),'export\n| where :ip in 192.168.0.0/16\n| cache "my-cache"\n| set schema=#schema\n| summarize count(.) by #schema\n')),(0,a.yg)("p",null,"Get the same statistics, but do not recompute the cache if it doesn't exist\nanymore:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),'cache "my-cache" --mode "read"\n| set schema=#schema\n| summarize count(.) by #schema\n')))}O.isMDXComponent=!0}}]);