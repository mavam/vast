"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15951],{15680:(e,a,n)=>{n.d(a,{xA:()=>i,yg:()=>m});var t=n(96540);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=t.createContext({}),y=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},i=function(e){var a=y(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,p=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=y(n),d=p,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||r;return n?t.createElement(m,o(o({ref:a},i),{},{components:n})):t.createElement(m,o({ref:a},i))}));function m(e,a){var n=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:p,o[1]=l;for(var y=2;y<r;y++)o[y]=n[y];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80796:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>E,frontMatter:()=>m,metadata:()=>F,toc:()=>f});var t=n(15680),p=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,i=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&i(e,n,a[n]);if(l)for(var n of l(a))y.call(a,n)&&i(e,n,a[n]);return e},g=(e,a)=>r(e,o(a)),d=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const m={},u="load_balance",F={unversionedId:"tql2/operators/load_balance",id:"version-v4.23/tql2/operators/load_balance",title:"load_balance",description:"Routes the data to one of multiple subpipelines.",source:"@site/versioned_docs/version-v4.23/tql2/operators/load_balance.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_balance",permalink:"/v4.23/tql2/operators/load_balance",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/load_balance.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load",permalink:"/v4.23/tql2/operators/load"},next:{title:"load_file",permalink:"/v4.23/tql2/operators/load_file"}},N={},f=[{value:"Description",id:"description",level:2},{value:"<code>over: list</code>",id:"over-list",level:3},{value:"<code>{ \u2026 }</code>",id:"--",level:3},{value:"Examples",id:"examples",level:2},{value:"Route data to multiple TCP ports",id:"route-data-to-multiple-tcp-ports",level:3},{value:"Route data to multiple Splunk endpoints",id:"route-data-to-multiple-splunk-endpoints",level:3}],b={toc:f},v="wrapper";function E(e){var a=e,{components:n}=a,p=d(a,["components"]);return(0,t.yg)(v,g(c(c({},b),p),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"load_balance"}),"load_balance"),(0,t.yg)("p",null,"Routes the data to one of multiple subpipelines."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_balance"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," over"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"list { \u2026 }"))))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"load_balance")," operator spawns a nested pipeline for each element in the\ngiven list. Incoming events are distributed to exactly one of the nested\npipelines. This operator may reorder the event stream."),(0,t.yg)("h3",c({},{id:"over-list"}),(0,t.yg)("inlineCode",{parentName:"h3"},"over: list")),(0,t.yg)("p",null,"This must be a ",(0,t.yg)("inlineCode",{parentName:"p"},"$"),"-variable, previously declared with ",(0,t.yg)("inlineCode",{parentName:"p"},"let"),". For example, to\nload balance over a list of ports, use ",(0,t.yg)("inlineCode",{parentName:"p"},"let $cfg = [8080, 8081, 8082]")," followed\nby ",(0,t.yg)("inlineCode",{parentName:"p"},"load_balance $cfg { \u2026 }"),"."),(0,t.yg)("h3",c({},{id:"--"}),(0,t.yg)("inlineCode",{parentName:"h3"},"{ \u2026 }")),(0,t.yg)("p",null,"The nested pipeline to spawn. This pipeline can use the same variable as passed\nto ",(0,t.yg)("inlineCode",{parentName:"p"},"over"),", which will be resolved to one of the list items. The following\nexample spawns three nested pipelines, where ",(0,t.yg)("inlineCode",{parentName:"p"},"$port")," is bound to ",(0,t.yg)("inlineCode",{parentName:"p"},"8080"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"8081"),"\nand ",(0,t.yg)("inlineCode",{parentName:"p"},"8082"),", respectively."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"let"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $cfg"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"8080"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"8081"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"8082"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_balance"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $cfg"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"  let"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $port"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $cfg")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"  // \u2026 continue here")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"The given subpipeline must end with a sink. This limitation might be removed in\nfuture versions."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("h3",c({},{id:"route-data-to-multiple-tcp-ports"}),"Route data to multiple TCP ports"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"let"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $cfg"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.30:8080"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.30:8081"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"subscribe"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "input"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_balance"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $cfg"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"  write_json")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"  save_tcp"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $cfg")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",c({},{id:"route-data-to-multiple-splunk-endpoints"}),"Route data to multiple Splunk endpoints"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"let"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $cfg"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," [{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ip"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 192.168"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"0.30"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  token"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "example-token-1234"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ip"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 192.168"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"0.31"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  token"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "example-token-5678"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"subscribe"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "input"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_balance"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $cfg"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"  let"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $endpoint"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," str"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"$cfg"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"ip) "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"+"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' ":8080"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"  to_splunk"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $endpoint"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", hec_token"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"$cfg"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"token")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}E.isMDXComponent=!0}}]);