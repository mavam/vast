"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65028],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(r),y=n,g=c["".concat(s,".").concat(y)]||c[y]||u[y]||o;return r?a.createElement(g,p(p({ref:t},d),{},{components:r})):a.createElement(g,p({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},64374:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>w,frontMatter:()=>g,metadata:()=>m,toc:()=>v});var a=r(15680),n=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>o(e,p(t)),y=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r};const g={},f="pass",m={unversionedId:"tql2/operators/pass",id:"version-v4.23/tql2/operators/pass",title:"pass",description:"Does nothing with the input.",source:"@site/versioned_docs/version-v4.23/tql2/operators/pass.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/pass",permalink:"/v4.23/tql2/operators/pass",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/pass.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"partitions",permalink:"/v4.23/tql2/operators/partitions"},next:{title:"plugins",permalink:"/v4.23/tql2/operators/plugins"}},h={},v=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Forward the input without any changes",id:"forward-the-input-without-any-changes",level:3},{value:"Do nothing every 10s",id:"do-nothing-every-10s",level:3}],b={toc:v},O="wrapper";function w(e){var t=e,{components:r}=t,n=y(t,["components"]);return(0,a.yg)(O,u(c(c({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"pass"}),"pass"),(0,a.yg)("p",null,"Does nothing with the input."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"pass"))))),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"pass")," operator relays the input without any modification. Outside of\ntesting and debugging, it is only used when an empty pipeline needs to created,\nas ",(0,a.yg)("inlineCode",{parentName:"p"},"{}")," is a record, while ",(0,a.yg)("inlineCode",{parentName:"p"},"{ pass }")," is a pipeline."),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"),(0,a.yg)("h3",c({},{id:"forward-the-input-without-any-changes"}),"Forward the input without any changes"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"pass"))))),(0,a.yg)("h3",c({},{id:"do-nothing-every-10s"}),"Do nothing every 10s"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"every"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 10s"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"  pass")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}w.isMDXComponent=!0}}]);