"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19443],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,u=d["".concat(p,".").concat(y)]||d[y]||m[y]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},28873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>N,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),y=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const u={},g="trim_end",f={unversionedId:"tql2/functions/trim_end",id:"version-v4.23/tql2/functions/trim_end",title:"trim_end",description:"Trims whitespace from the end of a string.",source:"@site/versioned_docs/version-v4.23/tql2/functions/trim_end.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/trim_end",permalink:"/tql2/functions/trim_end",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/trim_end.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"trim",permalink:"/tql2/functions/trim"},next:{title:"trim_start",permalink:"/tql2/functions/trim_start"}},h={},b=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Trim whitespace from the end",id:"trim-whitespace-from-the-end",level:3},{value:"See Also",id:"see-also",level:2}],v={toc:b},O="wrapper";function N(e){var t=e,{components:r}=t,a=y(t,["components"]);return(0,n.yg)(O,m(d(d({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"trim_end"}),"trim_end"),(0,n.yg)("p",null,"Trims whitespace from the end of a string."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"trim_end"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string) "),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}})," string"))))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"trim_end")," function removes trailing whitespace from ",(0,n.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("h3",d({},{id:"trim-whitespace-from-the-end"}),"Trim whitespace from the end"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "hello "'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"trim_end"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"()}"))))),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "hello"'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",d({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/functions/trim"}),(0,n.yg)("inlineCode",{parentName:"a"},"trim")),", ",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/functions/trim_start"}),(0,n.yg)("inlineCode",{parentName:"a"},"trim_start"))))}N.isMDXComponent=!0}}]);