"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96334],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=l(n),g=r,u=y["".concat(p,".").concat(g)]||y[g]||d[g]||s;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var a=n(15680),r=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>s(e,i(t)),g=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n};const u={},f="ends_with",m={unversionedId:"tql2/functions/ends_with",id:"tql2/functions/ends_with",title:"ends_with",description:"Checks if a string ends with a specified substring.",source:"@site/docs/tql2/functions/ends_with.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/ends_with",permalink:"/next/tql2/functions/ends_with",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/ends_with.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"encrypt_cryptopan",permalink:"/next/tql2/functions/encrypt_cryptopan"},next:{title:"file_name",permalink:"/next/tql2/functions/file_name"}},h={},b=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Check if a string ends with a substring",id:"check-if-a-string-ends-with-a-substring",level:3},{value:"See Also",id:"see-also",level:2}],w={toc:b},N="wrapper";function v(e){var t=e,{components:n}=t,r=g(t,["components"]);return(0,a.yg)(N,d(y(y({},w),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",y({},{id:"ends_with"}),"ends_with"),(0,a.yg)("p",null,"Checks if a string ends with a specified substring."),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"ends_with"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, suffix"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string) "),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," bool"))))),(0,a.yg)("h2",y({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ends_with")," function returns ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," if ",(0,a.yg)("inlineCode",{parentName:"p"},"x")," ends with ",(0,a.yg)("inlineCode",{parentName:"p"},"suffix")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"\notherwise."),(0,a.yg)("h2",y({},{id:"examples"}),"Examples"),(0,a.yg)("h3",y({},{id:"check-if-a-string-ends-with-a-substring"}),"Check if a string ends with a substring"),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "hello"'),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"ends_with"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"lo"'),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),")}"))))),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," true"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,a.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,a.yg)("p",null,(0,a.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/starts_with"}),(0,a.yg)("inlineCode",{parentName:"a"},"starts_with"))))}v.isMDXComponent=!0}}]);