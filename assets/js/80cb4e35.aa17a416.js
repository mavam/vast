"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63813],{15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>m});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),y=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},i=function(e){var a=y(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=y(t),d=n,m=c["".concat(l,".").concat(d)]||c[d]||g[d]||p;return t?r.createElement(m,o(o({ref:a},i),{},{components:t})):r.createElement(m,o({ref:a},i))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,o=new Array(p);o[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var y=2;y<p;y++)o[y]=t[y];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99897:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>F,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var r=t(15680),n=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,i=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&i(e,t,a[t]);if(s)for(var t of s(a))y.call(a,t)&&i(e,t,a[t]);return e},g=(e,a)=>p(e,o(a)),d=(e,a)=>{var t={};for(var r in e)l.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))a.indexOf(r)<0&&y.call(e,r)&&(t[r]=e[r]);return t};const m={},u="where",f={unversionedId:"tql2/operators/where",id:"tql2/operators/where",title:"where",description:"Keeps only events for which the given predicate is true.",source:"@site/docs/tql2/operators/where.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/where",permalink:"/next/tql2/operators/where",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/where.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"version",permalink:"/next/tql2/operators/version"},next:{title:"write_bitz",permalink:"/next/tql2/operators/write_bitz"}},F={},h=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],N={toc:h},b="wrapper";function v(e){var a=e,{components:t}=a,n=d(a,["components"]);return(0,r.yg)(b,g(c(c({},N),n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",c({},{id:"where"}),"where"),(0,r.yg)("p",null,"Keeps only events for which the given predicate is true."),(0,r.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",c({parentName:"code"},{"data-line":""}),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," predicate"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool"))))),(0,r.yg)("h2",c({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"where")," operator only keeps events that match the provided predicate and\ndiscards all other events. Only events for which it evaluates to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," pass."),(0,r.yg)("h2",c({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Keep only events where ",(0,r.yg)("inlineCode",{parentName:"p"},"src_ip")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"1.2.3.4"),":"),(0,r.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",c({parentName:"code"},{"data-line":""}),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip "),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1.2"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3.4"))))),(0,r.yg)("p",null,"Use a nested field name and a temporal constraint on the ",(0,r.yg)("inlineCode",{parentName:"p"},"ts")," field:"),(0,r.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",c({parentName:"code"},{"data-line":""}),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," id"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"orig_h "),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1.2"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3.4"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," and"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," ts "),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),">"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," now"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"() "),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1h"))))),(0,r.yg)("p",null,"Combine subnet, size and duration constraints:"),(0,r.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",c({parentName:"code"},{"data-line":""}),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip "),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"in"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 10.10"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"5.0"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"/"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"25"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," and"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," (orig_bytes "),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),">"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1Mi"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," or"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," duration "),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),">"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 30min"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),")"))))))}v.isMDXComponent=!0}}]);