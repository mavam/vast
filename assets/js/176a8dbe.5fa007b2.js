"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63779],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),y=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=y(e.components);return n.createElement(l.Provider,{value:a},e.children)},g="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=y(t),m=r,d=g["".concat(l,".").concat(m)]||g[m]||i[m]||p;return t?n.createElement(d,o(o({ref:a},c),{},{components:t})):n.createElement(d,o({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var y=2;y<p;y++)o[y]=t[y];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44320:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>D,frontMatter:()=>d,metadata:()=>F,toc:()=>f});var n=t(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&c(e,t,a[t]);if(s)for(var t of s(a))y.call(a,t)&&c(e,t,a[t]);return e},i=(e,a)=>p(e,o(a)),m=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))a.indexOf(n)<0&&y.call(e,n)&&(t[n]=e[n]);return t};const d={},u="rare",F={unversionedId:"tql2/operators/rare",id:"tql2/operators/rare",title:"rare",description:"Shows the least common values. The dual to top.",source:"@site/docs/tql2/operators/rare.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/rare",permalink:"/next/tql2/operators/rare",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/rare.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"python",permalink:"/next/tql2/operators/python"},next:{title:"read_bitz",permalink:"/next/tql2/operators/read_bitz"}},N={},f=[{value:"Description",id:"description",level:2},{value:"<code>x: field</code>",id:"x-field",level:3},{value:"Examples",id:"examples",level:2},{value:"Find the least common values",id:"find-the-least-common-values",level:3},{value:"Show the five least common values for <code>id.orig_h</code>",id:"show-the-five-least-common-values-for-idorig_h",level:3}],E={toc:f},h="wrapper";function D(e){var a=e,{components:t}=a,r=m(a,["components"]);return(0,n.yg)(h,i(g(g({},E),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",g({},{id:"rare"}),"rare"),(0,n.yg)("p",null,"Shows the least common values. The dual to ",(0,n.yg)("a",g({parentName:"p"},{href:"/next/tql2/operators/top"}),(0,n.yg)("inlineCode",{parentName:"a"},"top")),"."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"rare"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"field"))))),(0,n.yg)("h2",g({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Shows the least common values for a given field. For each unique value, a new\nevent containing its count will be produced. In general, ",(0,n.yg)("inlineCode",{parentName:"p"},"rare x")," is equivalent\nto:"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," x, count"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"count"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"()")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"sort"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," count"))))),(0,n.yg)("admonition",g({},{title:"Potentially High Memory Usage",type:"note"}),(0,n.yg)("p",{parentName:"admonition"},"Take care when using this operator with large inputs.")),(0,n.yg)("h3",g({},{id:"x-field"}),(0,n.yg)("inlineCode",{parentName:"h3"},"x: field")),(0,n.yg)("p",null,"The name of the field to find the least common values for."),(0,n.yg)("h2",g({},{id:"examples"}),"Examples"),(0,n.yg)("h3",g({},{id:"find-the-least-common-values"}),"Find the least common values"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "B"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "A"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "A"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "B"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "A"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "D"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "C"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "C"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"rare"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," x"))))),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "D"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "C"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "B"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "A"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h3",g({},{id:"show-the-five-least-common-values-for-idorig_h"}),"Show the five least common values for ",(0,n.yg)("inlineCode",{parentName:"h3"},"id.orig_h")),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"rare"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," id"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"orig_h")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"head"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 5"))))))}D.isMDXComponent=!0}}]);