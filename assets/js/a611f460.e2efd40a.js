"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81786],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(v,a(a({ref:r},c),{},{components:t})):n.createElement(v,a({ref:r},c))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63561:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>f,default:()=>O,frontMatter:()=>v,metadata:()=>y,toc:()=>b});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))s.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>i(e,a(r)),m=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const v={sidebar_custom_props:{operator:{source:!0}}},f="export",y={unversionedId:"operators/export",id:"version-Tenzir v4.10/operators/export",title:"export",description:"Retrieves events from a Tenzir node. The dual to import.",source:"@site/versioned_docs/version-Tenzir v4.10/operators/export.md",sourceDirName:"operators",slug:"/operators/export",permalink:"/Tenzir v4.10/operators/export",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/operators/export.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"enumerate",permalink:"/Tenzir v4.10/operators/enumerate"},next:{title:"extend",permalink:"/Tenzir v4.10/operators/extend"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--live</code>",id:"--live",level:3},{value:"<code>--internal</code>",id:"--internal",level:3},{value:"<code>--low-priority</code>",id:"--low-priority",level:3},{value:"Examples",id:"examples",level:2}],k={toc:b},x="wrapper";function O(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(x,u(d(d({},k),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"export"}),"export"),(0,n.kt)("p",null,"Retrieves events from a Tenzir node. The dual to ",(0,n.kt)("a",d({parentName:"p"},{href:"/Tenzir%20v4.10/operators/import"}),(0,n.kt)("inlineCode",{parentName:"a"},"import")),"."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"export [--live] [--internal] [--low-priority]\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"export")," operator retrieves events from a Tenzir node."),(0,n.kt)("h3",d({},{id:"--live"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--live")),(0,n.kt)("p",null,"Work on all events that are imported with ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," operators in real-time\ninstead of on events persisted at a Tenzir node."),(0,n.kt)("h3",d({},{id:"--internal"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--internal")),(0,n.kt)("p",null,"Export internal events, such as metrics or diagnostics, instead. By default,\n",(0,n.kt)("inlineCode",{parentName:"p"},"export")," only returns events that were previously imported with ",(0,n.kt)("inlineCode",{parentName:"p"},"import"),". In\ncontrast, ",(0,n.kt)("inlineCode",{parentName:"p"},"export --internal")," exports internal events such as operator metrics."),(0,n.kt)("h3",d({},{id:"--low-priority"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--low-priority")),(0,n.kt)("p",null,"Treat this export with a lower priority, causing it to interfere less with\nregular priority exports at the cost of potentially running slower."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Expose all persisted events as JSON data."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"export | to stdout\n")),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/Tenzir%20v4.10/operators/where"}),"Apply a filter")," to all persisted events, then ",(0,n.kt)("a",d({parentName:"p"},{href:"/Tenzir%20v4.10/operators/head"}),"only expose the first\nten results"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"export | where 1.2.3.4 | head 10 | to stdout\n")))}O.isMDXComponent=!0}}]);