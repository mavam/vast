"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55419],{15680:(e,a,n)=>{n.d(a,{xA:()=>i,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),y=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},i=function(e){var a=y(e.components);return t.createElement(o.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=y(n),m=r,d=c["".concat(o,".").concat(m)]||c[m]||g[m]||p;return n?t.createElement(d,s(s({ref:a},i),{},{components:n})):t.createElement(d,s({ref:a},i))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=m;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var y=2;y<p;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57961:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>D,frontMatter:()=>d,metadata:()=>F,toc:()=>f});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,i=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))o.call(a,n)&&i(e,n,a[n]);if(l)for(var n of l(a))y.call(a,n)&&i(e,n,a[n]);return e},g=(e,a)=>p(e,s(a)),m=(e,a)=>{var n={};for(var t in e)o.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const d={},u="ceil",F={unversionedId:"tql2/functions/ceil",id:"tql2/functions/ceil",title:"ceil",description:"Computes the ceiling of a number or a time/duration with a specified unit.",source:"@site/docs/tql2/functions/ceil.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/ceil",permalink:"/next/tql2/functions/ceil",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/ceil.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"capitalize",permalink:"/next/tql2/functions/capitalize"},next:{title:"community_id",permalink:"/next/tql2/functions/community_id"}},N={},f=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Take the ceiling of integers",id:"take-the-ceiling-of-integers",level:3},{value:"Round time and duration values up to a unit",id:"round-time-and-duration-values-up-to-a-unit",level:3},{value:"See Also",id:"see-also",level:2}],E={toc:f},h="wrapper";function D(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(h,g(c(c({},E),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"ceil"}),"ceil"),(0,t.yg)("p",null,"Computes the ceiling of a number or a time/duration with a specified unit."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"ceil"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"number)")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"ceil"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"time, unit"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration)")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"ceil"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration, unit"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration)"))))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"ceil")," function takes the\n",(0,t.yg)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"}),"ceiling")," of a number\n",(0,t.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,t.yg)("p",null,"For time and duration values, use the second ",(0,t.yg)("inlineCode",{parentName:"p"},"unit")," argument to define the\nrounding unit."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("h3",c({},{id:"take-the-ceiling-of-integers"}),"Take the ceiling of integers"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," ceil"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3.4"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"),")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," ceil"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3.5"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"),")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  z"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," ceil"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3.4"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"),")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 4"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 4"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  z"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," -"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",c({},{id:"round-time-and-duration-values-up-to-a-unit"}),"Round time and duration values up to a unit"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," ceil"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2024"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"02"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"24"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),")")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," ceil"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"10m"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1h"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),")")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2025"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"01"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"01"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1h"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h2",c({},{id:"see-also"}),"See Also"),(0,t.yg)("p",null,(0,t.yg)("a",c({parentName:"p"},{href:"/next/tql2/functions/floor"}),(0,t.yg)("inlineCode",{parentName:"a"},"floor")),", ",(0,t.yg)("a",c({parentName:"p"},{href:"/next/tql2/functions/round"}),(0,t.yg)("inlineCode",{parentName:"a"},"round"))))}D.isMDXComponent=!0}}]);