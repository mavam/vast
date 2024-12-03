"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48591],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,p(p({ref:t},c),{},{components:r})):n.createElement(y,p({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>y,metadata:()=>f,toc:()=>v});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,p(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const y={},g="random",f={unversionedId:"tql2/functions/random",id:"version-v4.23/tql2/functions/random",title:"random",description:"Generates a random number in [0,1].",source:"@site/versioned_docs/version-v4.23/tql2/functions/random.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/random",permalink:"/v4.23/tql2/functions/random",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/random.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"quantile",permalink:"/v4.23/tql2/functions/quantile"},next:{title:"replace",permalink:"/v4.23/tql2/functions/replace"}},b={},v=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Generate a random number",id:"generate-a-random-number",level:3}],h={toc:v},O="wrapper";function N(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.yg)(O,u(d(d({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"random"}),"random"),(0,n.yg)("p",null,"Generates a random number in ",(0,n.yg)("em",{parentName:"p"},"[0,1]"),"."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"random"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"() "),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}})," float"))))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"random")," function generates a random number by drawing from a ",(0,n.yg)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Continuous_uniform_distribution"}),"uniform\ndistribution")," in\nthe interval ",(0,n.yg)("em",{parentName:"p"},"[0,1]"),"."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("h3",d({},{id:"generate-a-random-number"}),"Generate a random number"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}})," random"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"()}"))))),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"x"'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 0.19634716885782455"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}N.isMDXComponent=!0}}]);