"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92234],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},y=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},i="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),i=c(n),m=r,d=i["".concat(l,".").concat(m)]||i[m]||g[m]||p;return n?t.createElement(d,s(s({ref:a},y),{},{components:n})):t.createElement(d,s({ref:a},y))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[i]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<p;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51153:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>f,toc:()=>F});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,i=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&y(e,n,a[n]);if(o)for(var n of o(a))c.call(a,n)&&y(e,n,a[n]);return e},g=(e,a)=>p(e,s(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n};const d={},u="concatenate",f={unversionedId:"tql2/functions/concatenate",id:"version-v4.24/tql2/functions/concatenate",title:"concatenate",description:"Merges two lists.",source:"@site/versioned_docs/version-v4.24/tql2/functions/concatenate.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/concatenate",permalink:"/tql2/functions/concatenate",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/functions/concatenate.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"community_id",permalink:"/tql2/functions/community_id"},next:{title:"count",permalink:"/tql2/functions/count"}},N={},F=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Concatenate two lists",id:"concatenate-two-lists",level:3},{value:"See Also",id:"see-also",level:2}],E={toc:F},b="wrapper";function v(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(b,g(i(i({},E),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",i({},{id:"concatenate"}),"concatenate"),(0,t.yg)("p",null,"Merges two lists."),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"concatenate"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"(xs"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"list, ys"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"list) "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}})," list"))))),(0,t.yg)("h2",i({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"concatenate")," function returns a list containing all elements from the lists\n",(0,t.yg)("inlineCode",{parentName:"p"},"xs")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"ys")," in order. The expression ",(0,t.yg)("inlineCode",{parentName:"p"},"concatenate(xs, ys)")," is equivalent to\n",(0,t.yg)("inlineCode",{parentName:"p"},"[...xs, ...ys]"),"."),(0,t.yg)("h2",i({},{id:"examples"}),"Examples"),(0,t.yg)("h3",i({},{id:"concatenate-two-lists"}),"Concatenate two lists"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," {xs"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"], ys"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"zs "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}})," concatenate"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"(xs, ys)"))))),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  xs"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"],")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ys"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"],")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  zs"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h2",i({},{id:"see-also"}),"See Also"),(0,t.yg)("p",null,(0,t.yg)("a",i({parentName:"p"},{href:"/tql2/functions/append"}),(0,t.yg)("inlineCode",{parentName:"a"},"append")),", ",(0,t.yg)("a",i({parentName:"p"},{href:"/tql2/functions/prepend"}),(0,t.yg)("inlineCode",{parentName:"a"},"prepend"))))}v.isMDXComponent=!0}}]);