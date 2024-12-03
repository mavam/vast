"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67723],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(r),d=n,u=y["".concat(p,".").concat(d)]||y[d]||m[d]||o;return r?a.createElement(u,i(i({ref:t},c),{},{components:r})):a.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67892:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>N,frontMatter:()=>u,metadata:()=>f,toc:()=>h});var a=r(15680),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const u={},g="trim_start",f={unversionedId:"tql2/functions/trim_start",id:"version-v4.23/tql2/functions/trim_start",title:"trim_start",description:"Trims whitespace from the start of a string.",source:"@site/versioned_docs/version-v4.23/tql2/functions/trim_start.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/trim_start",permalink:"/v4.23/tql2/functions/trim_start",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/trim_start.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"trim_end",permalink:"/v4.23/tql2/functions/trim_end"},next:{title:"type_id",permalink:"/v4.23/tql2/functions/type_id"}},v={},h=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Trim whitespace from the start",id:"trim-whitespace-from-the-start",level:3},{value:"See Also",id:"see-also",level:2}],b={toc:h},O="wrapper";function N(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,a.yg)(O,m(y(y({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",y({},{id:"trim_start"}),"trim_start"),(0,a.yg)("p",null,"Trims whitespace from the start of a string."),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"trim_start"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string) "),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," string"))))),(0,a.yg)("h2",y({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"trim_start")," function removes leading whitespace from ",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,a.yg)("h2",y({},{id:"examples"}),"Examples"),(0,a.yg)("h3",y({},{id:"trim-whitespace-from-the-start"}),"Trim whitespace from the start"),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' " hello"'),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"trim_start"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"()}"))))),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "hello"'),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,a.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,a.yg)("p",null,(0,a.yg)("a",y({parentName:"p"},{href:"/v4.23/tql2/functions/trim"}),(0,a.yg)("inlineCode",{parentName:"a"},"trim")),", ",(0,a.yg)("a",y({parentName:"p"},{href:"/v4.23/tql2/functions/trim_end"}),(0,a.yg)("inlineCode",{parentName:"a"},"trim_end"))))}N.isMDXComponent=!0}}]);