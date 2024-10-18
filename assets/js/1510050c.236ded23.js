"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39232],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>m});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=p(n),d=a,m=y["".concat(s,".").concat(d)]||y[d]||u[d]||o;return n?t.createElement(m,l(l({ref:r},c),{},{components:n})):t.createElement(m,l({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20062:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>g,default:()=>N,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var t=n(15680),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,y=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&c(e,n,r[n]);if(i)for(var n of i(r))p.call(r,n)&&c(e,n,r[n]);return e},u=(e,r)=>o(e,l(r)),d=(e,r)=>{var n={};for(var t in e)s.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))r.indexOf(t)<0&&p.call(e,t)&&(n[t]=e[t]);return n};const m={sidebar_custom_props:{operator:{source:!0}}},g="show",f={unversionedId:"operators/show",id:"version-v4.21/operators/show",title:"show",description:"Returns information about a Tenzir node.",source:"@site/versioned_docs/version-v4.21/operators/show.md",sourceDirName:"operators",slug:"/operators/show",permalink:"/v4.21/operators/show",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/operators/show.md",tags:[],version:"v4.21",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"shell",permalink:"/v4.21/operators/shell"},next:{title:"sigma",permalink:"/v4.21/operators/sigma"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;aspect&gt;</code>",id:"aspect",level:3},{value:"Examples",id:"examples",level:2}],w={toc:v},b="wrapper";function N(e){var r=e,{components:n}=r,a=d(r,["components"]);return(0,t.yg)(b,u(y(y({},w),a),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"show"}),"show"),(0,t.yg)("p",null,"Returns information about a Tenzir node."),(0,t.yg)("admonition",y({},{title:"Deprecated",type:"warning"}),(0,t.yg)("p",{parentName:"admonition"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"show")," operator is deprecated. Instead of ",(0,t.yg)("inlineCode",{parentName:"p"},"show <aspect>"),", use the operator\n",(0,t.yg)("inlineCode",{parentName:"p"},"<aspect>")," if available.")),(0,t.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"show [<aspect>]\n")),(0,t.yg)("h2",y({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"show")," operator offers introspection capabilities to look at various\n",(0,t.yg)("em",{parentName:"p"},"aspects")," of a Tenzir node."),(0,t.yg)("h3",y({},{id:"aspect"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<aspect>")),(0,t.yg)("p",null,"Describes the part of Tenzir to look at."),(0,t.yg)("p",null,"Available aspects:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"config"),": shows all current configuration options."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"connectors"),": shows all available ",(0,t.yg)("a",y({parentName:"li"},{href:"/v4.21/connectors"}),"connectors"),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"contexts"),": shows all available contexts."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"formats"),": shows all available ",(0,t.yg)("a",y({parentName:"li"},{href:"/v4.21/formats"}),"formats"),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"operators"),": shows all available ",(0,t.yg)("a",y({parentName:"li"},{href:"/v4.21/operators"}),"operators"),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"pipelines"),": shows all managed pipelines of a remote node."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"plugins"),": shows all loaded plugins."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"packages"),": shows all all installed packages.")),(0,t.yg)("p",null,"We also offer some additional aspects for experts that want to take a deeper\nlook at what's going on:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"build"),": shows compile-time build information."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"fields"),": shows all fields of existing tables at a remote node."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"schemas")," shows all schema definitions for which data is stored at the node."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"serves")," shows all pipelines with the ",(0,t.yg)("inlineCode",{parentName:"li"},"serve")," sink operator currently\navailable from the ",(0,t.yg)("inlineCode",{parentName:"li"},"/serve")," API endpoint.")),(0,t.yg)("p",null,"When no aspect is specified, all are shown."),(0,t.yg)("h2",y({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Show all available connectors and formats:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"show connectors\nshow formats\n")),(0,t.yg)("p",null,"Show all transformations:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"show operators | where transformation == true\n")),(0,t.yg)("p",null,"Show all fields at a node:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"show fields\n")),(0,t.yg)("p",null,"Show all aspects of a node:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"show\n")))}N.isMDXComponent=!0}}]);