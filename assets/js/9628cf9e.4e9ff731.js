"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4581],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>d});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),y=o,d=u["".concat(s,".").concat(y)]||u[y]||f[y]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},13952:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>b,default:()=>w,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))l.call(r,t)&&c(e,t,r[t]);return e},f=(e,r)=>a(e,i(r)),y=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const d={sidebar_custom_props:{operator:{transformation:!0}}},b="buffer",m={unversionedId:"operators/buffer",id:"version-v4.24/operators/buffer",title:"buffer",description:"An in-memory buffer to improve handling of data spikes in upstream operators.",source:"@site/versioned_docs/version-v4.24/operators/buffer.md",sourceDirName:"operators",slug:"/operators/buffer",permalink:"/operators/buffer",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/operators/buffer.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"batch",permalink:"/operators/batch"},next:{title:"cache",permalink:"/operators/cache"}},g={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;capacity&gt;</code>",id:"capacity",level:3},{value:"<code>--policy &lt;block|drop&gt;</code>",id:"--policy-blockdrop",level:3},{value:"Examples",id:"examples",level:2}],h={toc:v},O="wrapper";function w(e){var r=e,{components:t}=r,o=y(r,["components"]);return(0,n.yg)(O,f(u(u({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"buffer"}),"buffer"),(0,n.yg)("p",null,"An in-memory buffer to improve handling of data spikes in upstream operators."),(0,n.yg)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"buffer [<capacity>] [--policy <block|drop>]\n")),(0,n.yg)("h2",u({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"buffer")," operator buffers up to the specified number of events or bytes in\nan in-memory buffer."),(0,n.yg)("p",null,"By default, operators in a pipeline run only when their downstream operators\nwant to receive input. This mechanism is called back pressure. The ",(0,n.yg)("inlineCode",{parentName:"p"},"buffer"),"\noperator effectively breaks back pressure by storing up to the specified number\nof events in memory, always requesting more input, which allows upstream\noperators to run uninterruptedly even in case the downstream operators of the\nbuffer are unable to keep up. This allows pipelines to handle data spikes more\neasily."),(0,n.yg)("h3",u({},{id:"capacity"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<capacity>")),(0,n.yg)("p",null,"The number of events or bytes that may be kept at most in the buffer."),(0,n.yg)("p",null,"Note that every operator already buffers up to 254Ki events before it starts\napplying back pressure. Smaller buffers may pessimize performance."),(0,n.yg)("h3",u({},{id:"--policy-blockdrop"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--policy <block|drop>")),(0,n.yg)("p",null,"Specifies what the operator does when the buffer runs full."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"drop"),": Drop events that do not fit into the buffer. This policy is not\nsupported for bytes inputs."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"block"),": Use back pressure to slow down upstream operators.")),(0,n.yg)("p",null,"When buffering events, this option defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"block")," for pipelines visible on\nthe overview page on ",(0,n.yg)("a",u({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),", and to ",(0,n.yg)("inlineCode",{parentName:"p"},"drop"),"\notherwise. When buffering bytes, this option always defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"block"),"."),(0,n.yg)("h2",u({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Buffer up to 10M events or bytes in a buffer, dropping them if downstream cannot\nkeep up."),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"buffer 10M --policy drop\n")))}w.isMDXComponent=!0}}]);