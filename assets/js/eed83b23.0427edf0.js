"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25775],{15680:(e,r,t)=>{t.d(r,{xA:()=>y,yg:()=>m});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),i=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},y=function(e){var r=i(e.components);return a.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=i(t),g=n,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return t?a.createElement(m,p(p({ref:r},y),{},{components:t})):a.createElement(m,p({ref:r},y))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:n,p[1]=s;for(var i=2;i<o;i++)p[i]=t[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},84737:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>u,default:()=>F,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var a=t(15680),n=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&y(e,t,r[t]);if(s)for(var t of s(r))i.call(r,t)&&y(e,t,r[t]);return e},d=(e,r)=>o(e,p(r)),g=(e,r)=>{var t={};for(var a in e)l.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&s)for(var a of s(e))r.indexOf(a)<0&&i.call(e,a)&&(t[a]=e[a]);return t};const m={},u="reverse",f={unversionedId:"tql2/operators/reverse",id:"version-v4.23/tql2/operators/reverse",title:"reverse",description:"Reverses the event order.",source:"@site/versioned_docs/version-v4.23/tql2/operators/reverse.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/reverse",permalink:"/tql2/operators/reverse",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/reverse.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"repeat",permalink:"/tql2/operators/repeat"},next:{title:"sample",permalink:"/tql2/operators/sample"}},v={},b=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Reverse a stream of events",id:"reverse-a-stream-of-events",level:3}],N={toc:b},h="wrapper";function F(e){var r=e,{components:t}=r,n=g(r,["components"]);return(0,a.yg)(h,d(c(c({},N),n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"reverse"}),"reverse"),(0,a.yg)("p",null,"Reverses the event order."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"reverse"))))),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"reverse")," is a shorthand notation for ",(0,a.yg)("a",c({parentName:"p"},{href:"/tql2/operators/slice"}),(0,a.yg)("inlineCode",{parentName:"a"},"slice stride=-1")),"."),(0,a.yg)("admonition",c({},{title:"Potentially High Memory Usage",type:"note"}),(0,a.yg)("p",{parentName:"admonition"},"Take care when using this operator with large inputs.")),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"),(0,a.yg)("h3",c({},{id:"reverse-a-stream-of-events"}),"Reverse a stream of events"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," [{x"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, {x"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, {x"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}]")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"reverse"))))),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}F.isMDXComponent=!0}}]);