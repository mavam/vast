"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32816],{15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>d});var t=n(96540);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},m=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},i=t.forwardRef((function(e,a){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=y(n),i=p,d=c["".concat(l,".").concat(i)]||c[i]||g[i]||r;return n?t.createElement(d,s(s({ref:a},m),{},{components:n})):t.createElement(d,s({ref:a},m))}));function d(e,a){var n=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=n.length,s=new Array(r);s[0]=i;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:p,s[1]=o;for(var y=2;y<r;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}i.displayName="MDXCreateElement"},76914:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>F,default:()=>b,frontMatter:()=>d,metadata:()=>N,toc:()=>f});var t=n(15680),p=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,m=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&m(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&m(e,n,a[n]);return e},g=(e,a)=>r(e,s(a)),i=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const d={},F="measure",N={unversionedId:"tql2/operators/measure",id:"version-v4.22/tql2/operators/measure",title:"measure",description:"Replaces the input with metrics describing the input.",source:"@site/versioned_docs/version-v4.22/tql2/operators/measure.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/measure",permalink:"/v4.22/tql2/operators/measure",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/measure.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_tcp",permalink:"/v4.22/tql2/operators/load_tcp"},next:{title:"metrics",permalink:"/v4.22/tql2/operators/metrics"}},u={},f=[{value:"Description",id:"description",level:2},{value:"<code>real_time = bool (optional)</code>",id:"real_time--bool-optional",level:3},{value:"<code>cumulative = bool (optional)</code>",id:"cumulative--bool-optional",level:3},{value:"Examples",id:"examples",level:2}],E={toc:f},h="wrapper";function b(e){var a=e,{components:n}=a,p=i(a,["components"]);return(0,t.yg)(h,g(c(c({},E),p),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"measure"}),"measure"),(0,t.yg)("p",null,"Replaces the input with metrics describing the input."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"measure"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," [real_time"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, cumulative"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"measure")," operator yields metrics for each received batch of events or bytes\nusing the following schema, respectively:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",c({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"text","data-theme":"github-dark-default"}),"Events Metrics"),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"text","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"text","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"type tenzir.metrics.events = record{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  timestamp: time,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  schema: string,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  schema_id: string,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  events: uint64,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"}"))))),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",c({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"text","data-theme":"github-dark-default"}),"Bytes Metrics"),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"text","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"text","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"type tenzir.metrics.bytes = record{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  timestamp: time,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  bytes: uint64,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"}"))))),(0,t.yg)("h3",c({},{id:"real_time--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"real_time = bool (optional)")),(0,t.yg)("p",null,"Whether to emit metrics immediately with every batch, rather than buffering\nuntil the upstream operator stalls, i.e., is idle or waiting for further input."),(0,t.yg)("p",null,"The is especially useful when ",(0,t.yg)("inlineCode",{parentName:"p"},"measure")," should emit data without latency."),(0,t.yg)("h3",c({},{id:"cumulative--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"cumulative = bool (optional)")),(0,t.yg)("p",null,"Whether to emit running totals for the ",(0,t.yg)("inlineCode",{parentName:"p"},"events")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"bytes")," fields rather than\nper-batch statistics."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Get the number of bytes read incrementally for a file:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "input.json"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"measure")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{timestamp"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2023"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"04"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"28T10"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),":22:10.192322"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", bytes"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 16384"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{timestamp"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2023"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"04"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"28T10"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),":22:10.223612"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", bytes"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 16384"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{timestamp"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2023"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"04"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"28T10"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),":22:10.297169"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", bytes"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 16384"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{timestamp"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2023"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"04"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"28T10"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),":22:10.387172"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", bytes"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 16384"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{timestamp"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2023"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"04"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"28T10"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),":22:10.408171"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", bytes"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 8232"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"Get the number of events read incrementally from a file:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "eve.json"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_suricata")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"measure")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  timestamp"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2023"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"04"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"28T10"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),":26:45.159885"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  events"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 65536"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  schema"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "suricata.dns"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  schema_id"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "d49102998baae44a"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  timestamp"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2023"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"04"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"28T10"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),":26:45.812321"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  events"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 412"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  schema"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "suricata.dns"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  schema_id"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "d49102998baae44a"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"Get the total number of events in a file, grouped by schema:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "eve.json"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_suricata")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"measure")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," schema, events"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(events)")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{schema"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "suricata.dns"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", events"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 65948"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}b.isMDXComponent=!0}}]);