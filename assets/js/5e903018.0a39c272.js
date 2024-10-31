"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10508],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=i(n),u=r,g=y["".concat(l,".").concat(u)]||y[u]||m[u]||o;return n?a.createElement(g,p(p({ref:t},c),{},{components:n})):a.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[y]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>x,frontMatter:()=>g,metadata:()=>d,toc:()=>b});var a=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))i.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>o(e,p(t)),u=(e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n};const g={},f="from_epoch_ms",d={unversionedId:"tql2/functions/from_epoch_ms",id:"tql2/functions/from_epoch_ms",title:"from_epoch_ms",description:"Interprets a number as Unix time.",source:"@site/docs/tql2/functions/from_epoch_ms.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/from_epoch_ms",permalink:"/next/tql2/functions/from_epoch_ms",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/from_epoch_ms.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"floor",permalink:"/next/tql2/functions/floor"},next:{title:"has",permalink:"/next/tql2/functions/has"}},h={},b=[{value:"Description",id:"description",level:2},{value:"<code>x: int|uint|float</code>",id:"x-intuintfloat",level:3},{value:"Examples",id:"examples",level:2},{value:"Interpret a number as Unix time",id:"interpret-a-number-as-unix-time",level:3},{value:"See Also",id:"see-also",level:2}],N={toc:b},F="wrapper";function x(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.yg)(F,m(y(y({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",y({},{id:"from_epoch_ms"}),"from_epoch_ms"),(0,a.yg)("p",null,"Interprets a number as Unix time."),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from_epoch_ms"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"int) "),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," time")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from_epoch_ms"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"uint) "),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," time")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from_epoch_ms"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"float) "),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," time"))))),(0,a.yg)("h2",y({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"from_epoch_ms")," function interprets a number as ",(0,a.yg)("a",y({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Unix_time"}),"Unix\ntime")," in milliseconds."),(0,a.yg)("h3",y({},{id:"x-intuintfloat"}),(0,a.yg)("inlineCode",{parentName:"h3"},"x: int|uint|float")),(0,a.yg)("p",null,"The number of milliseconds since the Unix epoch, i.e., 00:00:00 UTC on January\n1970."),(0,a.yg)("h2",y({},{id:"examples"}),"Examples"),(0,a.yg)("h3",y({},{id:"interpret-a-number-as-unix-time"}),"Interpret a number as Unix time"),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," { x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," from_epoch_ms"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"1730234246123.456"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),") }"))))),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 2024"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"29T20"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),":37:26.123456"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,a.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,a.yg)("p",null,(0,a.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/as_secs"}),(0,a.yg)("inlineCode",{parentName:"a"},"as_secs")),", ",(0,a.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/now"}),(0,a.yg)("inlineCode",{parentName:"a"},"now")),", ",(0,a.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/since_epoch"}),(0,a.yg)("inlineCode",{parentName:"a"},"since_epoch"))))}x.isMDXComponent=!0}}]);