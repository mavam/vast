"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77031],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>c});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=s(r),m=a,c=g["".concat(l,".").concat(m)]||g[m]||y[m]||i;return r?n.createElement(c,o(o({ref:t},d),{},{components:r})):n.createElement(c,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[g]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>C,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var n=r(15680),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&d(e,r,t[r]);return e},y=(e,t)=>i(e,o(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const c={sidebar_custom_props:{operator:{source:!0}}},f="processes",u={unversionedId:"operators/processes",id:"version-v4.22/operators/processes",title:"processes",description:"Shows a snapshot of running processes.",source:"@site/versioned_docs/version-v4.22/operators/processes.md",sourceDirName:"operators",slug:"/operators/processes",permalink:"/v4.22/operators/processes",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/operators/processes.md",tags:[],version:"v4.22",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"print",permalink:"/v4.22/operators/print"},next:{title:"pseudonymize",permalink:"/v4.22/operators/pseudonymize"}},N={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.process</code>",id:"tenzirprocess",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},v="wrapper";function C(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.yg)(v,y(g(g({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",g({},{id:"processes"}),"processes"),(0,n.yg)("p",null,"Shows a snapshot of running processes."),(0,n.yg)("h2",g({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",g({parentName:"pre"},{}),"processes\n")),(0,n.yg)("h2",g({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"processes")," operator shows a snapshot of all currently running processes."),(0,n.yg)("h2",g({},{id:"schemas"}),"Schemas"),(0,n.yg)("p",null,"Tenzir emits process information with the following schema."),(0,n.yg)("h3",g({},{id:"tenzirprocess"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tenzir.process")),(0,n.yg)("p",null,"Contains detailed information about the process."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"name")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The process name.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"command_line")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"list<string>")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The command line of the process.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"pid")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The process identifier.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"ppid")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The parent process identifier.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uid")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The user identifier of the process owner.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"gid")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The group identifier of the process owner.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"ruid")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The real user identifier of the process owner.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"rgid")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The real group identifier of the process owner.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"priority")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The priority level of the process.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"startup")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"time")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The time when the process was started.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"vsize")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The virtual memory size of the process.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"rsize")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The resident set size (physical memory used) of the process.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"swap")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The amount of swap memory used by the process.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"peak_mem")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Peak memory usage of the process.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"open_fds")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The number of open file descriptors by the process.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"utime")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"duration")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The user CPU time consumed by the process.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"stime")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"duration")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The system CPU time consumed by the process.")))),(0,n.yg)("h2",g({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Show running processes sorted by how long they've been running:"),(0,n.yg)("pre",null,(0,n.yg)("code",g({parentName:"pre"},{}),"processes\n| sort startup desc\n")),(0,n.yg)("p",null,"Show the top five running processes by name:"),(0,n.yg)("pre",null,(0,n.yg)("code",g({parentName:"pre"},{}),"processes\n| top name\n| head 5\n")))}C.isMDXComponent=!0}}]);