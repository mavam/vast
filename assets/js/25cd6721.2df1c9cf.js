"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82211],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,d=u["".concat(l,".").concat(y)]||u[y]||f[y]||o;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>w,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>o(e,p(t)),y=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const d={},m="buffer",g={unversionedId:"tql2/operators/buffer",id:"version-v4.22/tql2/operators/buffer",title:"buffer",description:"An in-memory buffer to improve handling of data spikes in upstream operators.",source:"@site/versioned_docs/version-v4.22/tql2/operators/buffer.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/buffer",permalink:"/tql2/operators/buffer",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/buffer.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"batch",permalink:"/tql2/operators/batch"},next:{title:"cache",permalink:"/tql2/operators/cache"}},b={},h=[{value:"Description",id:"description",level:2},{value:"<code>capacity: int (optional)</code>",id:"capacity-int-optional",level:3},{value:"<code>policy = str (optional)</code>",id:"policy--str-optional",level:3},{value:"Examples",id:"examples",level:2}],v={toc:h},O="wrapper";function w(e){var t=e,{components:r}=t,a=y(t,["components"]);return(0,n.yg)(O,f(u(u({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"buffer"}),"buffer"),(0,n.yg)("p",null,"An in-memory buffer to improve handling of data spikes in upstream operators."),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"buffer"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}})," [capacity"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, policy"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"str]"))))),(0,n.yg)("h2",u({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"buffer")," operator buffers up to the specified number of events or bytes in\nan in-memory buffer."),(0,n.yg)("p",null,"By default, operators in a pipeline run only when their downstream operators\nwant to receive input. This mechanism is called back pressure. The ",(0,n.yg)("inlineCode",{parentName:"p"},"buffer"),"\noperator effectively breaks back pressure by storing up to the specified number\nof events in memory, always requesting more input, which allows upstream\noperators to run uninterruptedly even in case the downstream operators of the\nbuffer are unable to keep up. This allows pipelines to handle data spikes more\neasily."),(0,n.yg)("h3",u({},{id:"capacity-int-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"capacity: int (optional)")),(0,n.yg)("p",null,"The number of events or bytes that may be kept at most in the buffer."),(0,n.yg)("p",null,"Note that every operator already buffers up to ",(0,n.yg)("inlineCode",{parentName:"p"},"254Ki")," events before it starts\napplying back pressure. Smaller buffers may decrease performance."),(0,n.yg)("h3",u({},{id:"policy--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"policy = str (optional)")),(0,n.yg)("p",null,"Specifies what the operator does when the buffer runs full."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"drop"'),": Drop events that do not fit into the buffer. This policy is not\nsupported for bytes inputs."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"block"'),": Use back pressure to slow down upstream operators.")),(0,n.yg)("p",null,"When buffering events, this option defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},'"block"')," for pipelines visible on\nthe overview page on ",(0,n.yg)("a",u({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),", and to ",(0,n.yg)("inlineCode",{parentName:"p"},'"drop"'),"\notherwise. When buffering bytes, this option always defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},'"block"'),"."),(0,n.yg)("h2",u({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Buffer up to 10 million events or bytes in a buffer, dropping them if downstream\ncannot keep up."),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"buffer"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," 10M"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),", policy"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),'"drop"'))))))}w.isMDXComponent=!0}}]);