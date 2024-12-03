"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84224],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=i(n),d=r,g=y["".concat(p,".").concat(d)]||y[d]||u[d]||o;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>E,frontMatter:()=>g,metadata:()=>f,toc:()=>N});var a=n(15680),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))i.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>o(e,s(t)),d=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n};const g={},m="count_distinct",f={unversionedId:"tql2/functions/count_distinct",id:"version-v4.23/tql2/functions/count_distinct",title:"count_distinct",description:"Counts all distinct non-null grouped values.",source:"@site/versioned_docs/version-v4.23/tql2/functions/count_distinct.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/count_distinct",permalink:"/v4.23/tql2/functions/count_distinct",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/count_distinct.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"count",permalink:"/v4.23/tql2/functions/count"},next:{title:"decapsulate",permalink:"/v4.23/tql2/functions/decapsulate"}},v={},N=[{value:"Description",id:"description",level:2},{value:"<code>xs: list</code>",id:"xs-list",level:3},{value:"Examples",id:"examples",level:2},{value:"Count distinct values",id:"count-distinct-values",level:3},{value:"See Also",id:"see-also",level:2}],F={toc:N},b="wrapper";function E(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.yg)(b,u(y(y({},F),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",y({},{id:"count_distinct"}),"count_distinct"),(0,a.yg)("p",null,"Counts all distinct non-null grouped values."),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"count_distinct"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(xs"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"list) "),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," int"))))),(0,a.yg)("h2",y({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"count_distinct")," function returns the number of unique, non-null values in\n",(0,a.yg)("inlineCode",{parentName:"p"},"xs"),"."),(0,a.yg)("h3",y({},{id:"xs-list"}),(0,a.yg)("inlineCode",{parentName:"h3"},"xs: list")),(0,a.yg)("p",null,"The values to count."),(0,a.yg)("h2",y({},{id:"examples"}),"Examples"),(0,a.yg)("h3",y({},{id:"count-distinct-values"}),"Count distinct values"),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," [")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," unique"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"count_distinct"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x)"))))),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{unique"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,a.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,a.yg)("p",null,(0,a.yg)("a",y({parentName:"p"},{href:"/v4.23/tql2/functions/count"}),(0,a.yg)("inlineCode",{parentName:"a"},"count")),", ",(0,a.yg)("a",y({parentName:"p"},{href:"/v4.23/tql2/functions/distinct"}),(0,a.yg)("inlineCode",{parentName:"a"},"distinct"))))}E.isMDXComponent=!0}}]);