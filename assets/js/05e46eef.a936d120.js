"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76835],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>v});var n=r(15680),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>i(e,a(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{transformation:!0}}},y="throttle",h={unversionedId:"operators/throttle",id:"version-v4.21/operators/throttle",title:"throttle",description:"Limits the bandwidth of a pipeline.",source:"@site/versioned_docs/version-v4.21/operators/throttle.md",sourceDirName:"operators",slug:"/operators/throttle",permalink:"/v4.21/operators/throttle",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/operators/throttle.md",tags:[],version:"v4.21",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"taste",permalink:"/v4.21/operators/taste"},next:{title:"timeshift",permalink:"/v4.21/operators/timeshift"}},g={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;bandwidth&gt;</code>",id:"bandwidth",level:3},{value:"<code>--within &lt;duration&gt;</code>",id:"--within-duration",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},w="wrapper";function O(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.yg)(w,u(c(c({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",c({},{id:"throttle"}),"throttle"),(0,n.yg)("p",null,"Limits the bandwidth of a pipeline."),(0,n.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",c({parentName:"pre"},{}),"throttle <bandwidth> [--within <duration>]\n")),(0,n.yg)("h2",c({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"throttle")," operator limits the amount of data flowing through it to a\nbandwidth."),(0,n.yg)("h3",c({},{id:"bandwidth"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<bandwidth>")),(0,n.yg)("p",null,"An unsigned integer giving the maximum bandwidth that is enforced for\nthis pipeline, in bytes per the specified interval."),(0,n.yg)("h3",c({},{id:"--within-duration"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--within <duration>")),(0,n.yg)("p",null,"The duration in which to measure the maximum bandwidth."),(0,n.yg)("p",null,"Defaults to 1s."),(0,n.yg)("h2",c({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Read a TCP stream and print the data to stdout at a rate of 1 character per\nsecond:"),(0,n.yg)("pre",null,(0,n.yg)("code",c({parentName:"pre"},{}),"load tcp://0.0.0.0:4000 | throttle 1\n")),(0,n.yg)("p",null,"Load a sample input data file at a speed of at most 1MiB every 10s and import it\ninto the node:"),(0,n.yg)("pre",null,(0,n.yg)("code",c({parentName:"pre"},{}),"load https://storage.googleapis.com/tenzir-datasets/M57/zeek-all.log.zst\n| throttle 1Mi --window 10s\n| decompress zstd\n| read zeek-tsv\n| import\n")))}O.isMDXComponent=!0}}]);