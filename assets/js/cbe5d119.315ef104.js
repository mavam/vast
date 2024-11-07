"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96437],{15680:(a,e,n)=>{n.d(e,{xA:()=>c,yg:()=>N});var p=n(96540);function s(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function t(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);e&&(p=p.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,p)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach((function(e){s(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,p,s=function(a,e){if(null==a)return{};var n,p,s={},t=Object.keys(a);for(p=0;p<t.length;p++)n=t[p],e.indexOf(n)>=0||(s[n]=a[n]);return s}(a,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(p=0;p<t.length;p++)n=t[p],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(s[n]=a[n])}return s}var l=p.createContext({}),y=function(a){var e=p.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},c=function(a){var e=y(a.components);return p.createElement(l.Provider,{value:e},a.children)},g="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return p.createElement(p.Fragment,{},e)}},F=p.forwardRef((function(a,e){var n=a.components,s=a.mdxType,t=a.originalType,l=a.parentName,c=o(a,["components","mdxType","originalType","parentName"]),g=y(n),F=s,N=g["".concat(l,".").concat(F)]||g[F]||m[F]||t;return n?p.createElement(N,r(r({ref:e},c),{},{components:n})):p.createElement(N,r({ref:e},c))}));function N(a,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var t=n.length,r=new Array(t);r[0]=F;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=a,o[g]="string"==typeof a?a:s,r[1]=o;for(var y=2;y<t;y++)r[y]=n[y];return p.createElement.apply(null,r)}return p.createElement.apply(null,n)}F.displayName="MDXCreateElement"},65888:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>E,default:()=>f,frontMatter:()=>N,metadata:()=>i,toc:()=>D});var p=n(15680),s=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(a,e,n)=>e in a?s(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,g=(a,e)=>{for(var n in e||(e={}))l.call(e,n)&&c(a,n,e[n]);if(o)for(var n of o(e))y.call(e,n)&&c(a,n,e[n]);return a},m=(a,e)=>t(a,r(e)),F=(a,e)=>{var n={};for(var p in a)l.call(a,p)&&e.indexOf(p)<0&&(n[p]=a[p]);if(null!=a&&o)for(var p of o(a))e.indexOf(p)<0&&y.call(a,p)&&(n[p]=a[p]);return n};const N={},E="read_zeek_json",i={unversionedId:"tql2/operators/read_zeek_json",id:"version-v4.23/tql2/operators/read_zeek_json",title:"read_zeek_json",description:"Parse an incoming Zeek JSON stream into events.",source:"@site/versioned_docs/version-v4.23/tql2/operators/read_zeek_json.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_zeek_json",permalink:"/tql2/operators/read_zeek_json",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/read_zeek_json.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_yaml",permalink:"/tql2/operators/read_yaml"},next:{title:"read_zeek_tsv",permalink:"/tql2/operators/read_zeek_tsv"}},d={},D=[{value:"Description",id:"description",level:2},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Load a Zeek connection log",id:"load-a-zeek-connection-log",level:3}],u={toc:D},_="wrapper";function f(a){var e=a,{components:n}=e,s=F(e,["components"]);return(0,p.yg)(_,m(g(g({},u),s),{components:n,mdxType:"MDXLayout"}),(0,p.yg)("h1",g({},{id:"read_zeek_json"}),"read_zeek_json"),(0,p.yg)("p",null,"Parse an incoming Zeek JSON stream into events."),(0,p.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,p.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,p.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_zeek_json"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [schema_only"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,p.yg)("h2",g({},{id:"description"}),"Description"),(0,p.yg)("h3",g({},{id:"raw--bool-optional"}),(0,p.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,p.yg)("p",null,"Use only the raw types that are native to the parsed format. Fields that have a type\nspecified in the chosen ",(0,p.yg)("inlineCode",{parentName:"p"},"schema")," will still be parsed according to the schema."),(0,p.yg)("p",null,"This means that JSON numbers will be parsed as numbers,\nbut every JSON string remains a string, unless the field is in the ",(0,p.yg)("inlineCode",{parentName:"p"},"schema"),"."),(0,p.yg)("h3",g({},{id:"schema_only--bool-optional"}),(0,p.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,p.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,p.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained via a ",(0,p.yg)("inlineCode",{parentName:"p"},"selector"),"\nand it does not exist, this has no effect."),(0,p.yg)("p",null,"This option requires either ",(0,p.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,p.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,p.yg)("h2",g({},{id:"examples"}),"Examples"),(0,p.yg)("h3",g({},{id:"load-a-zeek-connection-log"}),"Load a Zeek connection log"),(0,p.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,p.yg)("figcaption",g({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"zeek.json"),(0,p.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,p.yg)("code",g({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"__name"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"sensor_10_0_0_2"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"_write_ts"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2020-02-26T04:00:03.734769Z"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"ts"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2020-02-26T03:40:03.724911Z"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"uid"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Cx3bf12iVwo5m7Gkd1"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id.orig_h"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"193.10.255.99"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id.orig_p"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"6667"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id.resp_h"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"141.9.40.50"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id.resp_p"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"21"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"tcp"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"duration"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1196.975041"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"orig_bytes"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"resp_bytes"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"conn_state"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"S1"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"local_orig"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"false"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"local_resp"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"true"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"missed_bytes"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"history"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Sh"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"orig_pkts"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"194"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"orig_ip_bytes"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"7760"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"resp_pkts"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"191"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"resp_ip_bytes"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"8404"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"_path"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"_0_0_2"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"_write_ts"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2020-02-11T03:48:57.477193Z"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"ts"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2020-02-11T03:48:57.477193Z"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"uid"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Cpk0Nl33Zb5ZWLP1tc"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id.orig_h"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"185.100.59.59"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id.orig_p"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"6667"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id.resp_h"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"141.9.255.157"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id.resp_p"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"8080"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"tcp"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"note"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"LongConnection::found"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"msg"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"185.100.59.59 -> 141.9.255.157:8080/tcp remained alive for longer than 19m55s"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"sub"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1194.62"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"src"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"185.100.59.59"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"dst"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"141.9.255.157"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"p"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"8080"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"peer_descr"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"worker-02"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"actions"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":["),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Notice::ACTION_LOG"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"],"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"suppress_for"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"3600"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,p.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,p.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,p.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"load"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "zeek.json"')),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_zeek_json"))))),(0,p.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,p.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,p.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  __name"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "sensor_10_0_0_2"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  _write_ts"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2020"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"02"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"26T04"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),":00:03.734769"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ts"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2020"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"02"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"26T03"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),":40:03.724911"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  uid"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Cx3bf12iVwo5m7Gkd1"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    orig_h"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 193.10"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"255.99"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    orig_p"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 6667"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resp_h"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 141.9"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"40.50"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resp_p"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 21"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  proto"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "tcp"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  duration"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1196.975041"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  orig_bytes"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  resp_bytes"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  conn_state"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "S1"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  local_orig"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," false"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  local_resp"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," true"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  missed_bytes"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  history"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Sh"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  orig_pkts"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 194"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  orig_ip_bytes"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 7760"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  resp_pkts"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 191"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  resp_ip_bytes"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 8404"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  _write_ts"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2020"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"02"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"11T03"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),":48:57.477193"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ts"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2020"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"02"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"11T03"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),":48:57.477193"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  uid"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Cpk0Nl33Zb5ZWLP1tc"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    orig_h"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 185.100"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"59.59"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    orig_p"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 6667"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resp_h"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 141.9"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"255.157"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resp_p"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 8080"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  proto"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "tcp"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  _path"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "_0_0_2"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  note"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "LongConnection::found"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  msg"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "185.100.59.59 -> 141.9.255.157:8080/tcp remained alive for longer than 19m55s"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  sub"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "1194.62"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  src"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 185.100"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"59.59"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  dst"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 141.9"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"255.157"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  p"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 8080"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  peer_descr"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "worker-02"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  actions"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"    Notice"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"ACTION_LOG")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ],")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  suppress_for"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 3600"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}f.isMDXComponent=!0}}]);