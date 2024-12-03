"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4176],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,u=m["".concat(l,".").concat(d)]||m[d]||y[d]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>u,metadata:()=>f,toc:()=>v});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e},y=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const u={},g="trim",f={unversionedId:"tql2/functions/trim",id:"version-v4.23/tql2/functions/trim",title:"trim",description:"Trims whitespace from both ends of a string.",source:"@site/versioned_docs/version-v4.23/tql2/functions/trim.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/trim",permalink:"/v4.23/tql2/functions/trim",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/trim.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"to_upper",permalink:"/v4.23/tql2/functions/to_upper"},next:{title:"trim_end",permalink:"/v4.23/tql2/functions/trim_end"}},b={},v=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Trim whitespace from both ends",id:"trim-whitespace-from-both-ends",level:3},{value:"See Also",id:"see-also",level:2}],h={toc:v},O="wrapper";function N(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.yg)(O,y(m(m({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",m({},{id:"trim"}),"trim"),(0,n.yg)("p",null,"Trims whitespace from both ends of a string."),(0,n.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",m({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",m({parentName:"code"},{"data-line":""}),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#D2A8FF"}}),"trim"),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"string) "),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#D2A8FF"}})," string"))))),(0,n.yg)("h2",m({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"trim")," function removes leading and trailing whitespace from ",(0,n.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,n.yg)("h2",m({},{id:"examples"}),"Examples"),(0,n.yg)("h3",m({},{id:"trim-whitespace-from-both-ends"}),"Trim whitespace from both ends"),(0,n.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",m({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",m({parentName:"code"},{"data-line":""}),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),' " hello "'),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#D2A8FF"}}),"trim"),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"()}"))))),(0,n.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",m({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",m({parentName:"code"},{"data-line":""}),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),' "hello"'),(0,n.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",m({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",m({parentName:"p"},{href:"/v4.23/tql2/functions/trim_start"}),(0,n.yg)("inlineCode",{parentName:"a"},"trim_start")),", ",(0,n.yg)("a",m({parentName:"p"},{href:"/v4.23/tql2/functions/trim_end"}),(0,n.yg)("inlineCode",{parentName:"a"},"trim_end"))))}N.isMDXComponent=!0}}]);