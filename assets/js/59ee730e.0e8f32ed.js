"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30320],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,y=u["".concat(p,".").concat(b)]||u[b]||d[b]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},86047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>w,frontMatter:()=>y,metadata:()=>f,toc:()=>h});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),b=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const y={},m="subscribe",f={unversionedId:"tql2/operators/subscribe",id:"version-v4.23/tql2/operators/subscribe",title:"subscribe",description:"Subscribes to events from a channel with a topic. The dual to",source:"@site/versioned_docs/version-v4.23/tql2/operators/subscribe.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/subscribe",permalink:"/tql2/operators/subscribe",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/subscribe.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"sort",permalink:"/tql2/operators/sort"},next:{title:"summarize",permalink:"/tql2/operators/summarize"}},g={},h=[{value:"Description",id:"description",level:2},{value:"<code>topic: str (optional)</code>",id:"topic-str-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Subscribe to the events under a topic",id:"subscribe-to-the-events-under-a-topic",level:3}],v={toc:h},O="wrapper";function w(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,n.yg)(O,d(u(u({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"subscribe"}),"subscribe"),(0,n.yg)("p",null,"Subscribes to events from a channel with a topic. The dual to\n",(0,n.yg)("a",u({parentName:"p"},{href:"/tql2/operators/publish"}),(0,n.yg)("inlineCode",{parentName:"a"},"publish")),"."),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"subscribe"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}})," [topic"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"str]"))))),(0,n.yg)("h2",u({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"subscribe")," operator subscribes to events from a channel with the specified\ntopic. Multiple ",(0,n.yg)("inlineCode",{parentName:"p"},"subscribe")," operators with the same topic receive the same\nevents."),(0,n.yg)("p",null,"Subscribers propagate back pressure to publishers. If a subscribing pipeline\nfails to keep up, all publishers will slow down as well to a matching speed to\navoid data loss. This mechanism is disabled for pipelines that are not visible\non the overview page on ",(0,n.yg)("a",u({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),", which drop\ndata rather than slow down their publishers."),(0,n.yg)("h3",u({},{id:"topic-str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"topic: str (optional)")),(0,n.yg)("p",null,"An optional channel name to subscribe to. If unspecified, the operator\nsubscribes to the global unnamed feed."),(0,n.yg)("h2",u({},{id:"examples"}),"Examples"),(0,n.yg)("h3",u({},{id:"subscribe-to-the-events-under-a-topic"}),"Subscribe to the events under a topic"),(0,n.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",u({parentName:"code"},{"data-line":""}),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"subscribe"),(0,n.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),' "zeek-conn"'))))))}w.isMDXComponent=!0}}]);