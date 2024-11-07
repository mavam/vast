"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99440],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>E});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},i=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=y(n),i=r,E=m["".concat(l,".").concat(i)]||m[i]||g[i]||p;return n?t.createElement(E,s(s({ref:a},c),{},{components:n})):t.createElement(E,s({ref:a},c))}));function E(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=i;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var y=2;y<p;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}i.displayName="MDXCreateElement"},57726:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>N,default:()=>b,frontMatter:()=>E,metadata:()=>d,toc:()=>F});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,m=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&c(e,n,a[n]);return e},g=(e,a)=>p(e,s(a)),i=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const E={sidebar_custom_props:{operator:{transformation:!0}}},N="repeat",d={unversionedId:"operators/repeat",id:"version-v4.23/operators/repeat",title:"repeat",description:"Repeats the input a number of times.",source:"@site/versioned_docs/version-v4.23/operators/repeat.md",sourceDirName:"operators",slug:"/operators/repeat",permalink:"/operators/repeat",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/operators/repeat.md",tags:[],version:"v4.23",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"rename",permalink:"/operators/rename"},next:{title:"replace",permalink:"/operators/replace"}},u={},F=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;repetitions&gt;</code>",id:"repetitions",level:3},{value:"Examples",id:"examples",level:2}],f={toc:F},D="wrapper";function b(e){var a=e,{components:n}=a,r=i(a,["components"]);return(0,t.yg)(D,g(m(m({},f),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",m({},{id:"repeat"}),"repeat"),(0,t.yg)("p",null,"Repeats the input a number of times."),(0,t.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"repeat [<repetitions>]\n")),(0,t.yg)("h2",m({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"repeat")," operator relays the input without any modification, and repeats its\ninputs a specified number of times. It is primarily used for testing and when\nworking with generated data."),(0,t.yg)("p",null,"The repeat operator keeps its input in memory. Avoid using it to repeat large\ndata sets."),(0,t.yg)("h3",m({},{id:"repetitions"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<repetitions>")),(0,t.yg)("p",null,"The number of times to repeat the input data."),(0,t.yg)("p",null,"If not specified, the operator repeats its input indefinitely."),(0,t.yg)("h2",m({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Given the following events as JSON:"),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"one"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"two"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"repeat")," operator will repeat them indefinitely, in order:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"repeat\n")),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"one"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"two"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"one"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"two"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"one"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"two"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#8B949E"}}),"// \u2026"))))),(0,t.yg)("p",null,"To just repeat the first event 5 times, use:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"head 1 | repeat 5\n")),(0,t.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"one"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"one"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"one"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"one"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",m({parentName:"code"},{"data-line":""}),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"number"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"text"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"one"'),(0,t.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}b.isMDXComponent=!0}}]);