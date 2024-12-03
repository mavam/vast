"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49644],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),y=o,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},16696:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>v,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>h});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))s.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),y=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{operator:{source:!0}}},v="export",g={unversionedId:"operators/export",id:"version-v4.24/operators/export",title:"export",description:"Retrieves events from a Tenzir node. The dual to import.",source:"@site/versioned_docs/version-v4.24/operators/export.md",sourceDirName:"operators",slug:"/operators/export",permalink:"/operators/export",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/operators/export.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"enumerate",permalink:"/operators/enumerate"},next:{title:"extend",permalink:"/operators/extend"}},f={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--live</code>",id:"--live",level:3},{value:"<code>--retro</code>",id:"--retro",level:3},{value:"<code>--internal</code>",id:"--internal",level:3},{value:"<code>--parallel &lt;level&gt;</code>",id:"--parallel-level",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},x="wrapper";function O(e){var r=e,{components:t}=r,o=y(r,["components"]);return(0,n.yg)(x,u(d(d({},b),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"export"}),"export"),(0,n.yg)("p",null,"Retrieves events from a Tenzir node. The dual to ",(0,n.yg)("a",d({parentName:"p"},{href:"/operators/import"}),(0,n.yg)("inlineCode",{parentName:"a"},"import")),"."),(0,n.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"export [--live] [--retro] [--internal] [--parallel <level>]\n")),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"export")," operator retrieves events from a Tenzir node."),(0,n.yg)("h3",d({},{id:"--live"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--live")),(0,n.yg)("p",null,"Work on all events that are imported with ",(0,n.yg)("inlineCode",{parentName:"p"},"import")," operators in real-time\ninstead of on events persisted at a Tenzir node."),(0,n.yg)("p",null,"Note that live exports may drop events if the following pipeline fails to keep\nup. To connect pipelines with back pressure, use the ",(0,n.yg)("a",d({parentName:"p"},{href:"/operators/publish"}),(0,n.yg)("inlineCode",{parentName:"a"},"publish"))," and\n",(0,n.yg)("a",d({parentName:"p"},{href:"/operators/subscribe"}),(0,n.yg)("inlineCode",{parentName:"a"},"subscribe"))," operators."),(0,n.yg)("h3",d({},{id:"--retro"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--retro")),(0,n.yg)("p",null,"Export persistent events at a Tenzir node. Unless ",(0,n.yg)("inlineCode",{parentName:"p"},"--live")," is given, this is\nimplied."),(0,n.yg)("p",null,"Combine ",(0,n.yg)("inlineCode",{parentName:"p"},"--retro")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"--live")," to export past events and live events afterwards."),(0,n.yg)("admonition",d({},{title:"Experimental",type:"warning"}),(0,n.yg)("p",{parentName:"admonition"},"There is a gap for live events that happen while past events are being exported.")),(0,n.yg)("h3",d({},{id:"--internal"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--internal")),(0,n.yg)("p",null,"Export internal events, such as metrics or diagnostics, instead. By default,\n",(0,n.yg)("inlineCode",{parentName:"p"},"export")," only returns events that were previously imported with ",(0,n.yg)("inlineCode",{parentName:"p"},"import"),". In\ncontrast, ",(0,n.yg)("inlineCode",{parentName:"p"},"export --internal")," exports internal events such as operator metrics."),(0,n.yg)("h3",d({},{id:"--parallel-level"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--parallel <level>")),(0,n.yg)("p",null,"The parallel level controls how many worker threads the operator uses at most\nfor querying historical events."),(0,n.yg)("p",null,"Defaults to 3."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Expose all persisted events as JSON data."),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"export | to stdout\n")),(0,n.yg)("p",null,(0,n.yg)("a",d({parentName:"p"},{href:"/operators/where"}),"Apply a filter")," to all persisted events, then ",(0,n.yg)("a",d({parentName:"p"},{href:"/operators/head"}),"only expose the first\nten results"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"export | where 1.2.3.4 | head 10 | to stdout\n")))}O.isMDXComponent=!0}}]);