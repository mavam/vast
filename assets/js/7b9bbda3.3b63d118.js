"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42299],{15680:(a,e,n)=>{n.d(e,{xA:()=>c,yg:()=>N});var t=n(96540);function s(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function p(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){s(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,s=function(a,e){if(null==a)return{};var n,t,s={},p=Object.keys(a);for(t=0;t<p.length;t++)n=p[t],e.indexOf(n)>=0||(s[n]=a[n]);return s}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(t=0;t<p.length;t++)n=p[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(s[n]=a[n])}return s}var l=t.createContext({}),y=function(a){var e=t.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},c=function(a){var e=y(a.components);return t.createElement(l.Provider,{value:e},a.children)},E="mdxType",g={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var n=a.components,s=a.mdxType,p=a.originalType,l=a.parentName,c=o(a,["components","mdxType","originalType","parentName"]),E=y(n),m=s,N=E["".concat(l,".").concat(m)]||E[m]||g[m]||p;return n?t.createElement(N,r(r({ref:e},c),{},{components:n})):t.createElement(N,r({ref:e},c))}));function N(a,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var p=n.length,r=new Array(p);r[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=a,o[E]="string"==typeof a?a:s,r[1]=o;for(var y=2;y<p;y++)r[y]=n[y];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67576:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>N,metadata:()=>F,toc:()=>D});var t=n(15680),s=Object.defineProperty,p=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(a,e,n)=>e in a?s(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,E=(a,e)=>{for(var n in e||(e={}))l.call(e,n)&&c(a,n,e[n]);if(o)for(var n of o(e))y.call(e,n)&&c(a,n,e[n]);return a},g=(a,e)=>p(a,r(e)),m=(a,e)=>{var n={};for(var t in a)l.call(a,t)&&e.indexOf(t)<0&&(n[t]=a[t]);if(null!=a&&o)for(var t of o(a))e.indexOf(t)<0&&y.call(a,t)&&(n[t]=a[t]);return n};const N={},i="read_suricata",F={unversionedId:"tql2/operators/read_suricata",id:"version-v4.23/tql2/operators/read_suricata",title:"read_suricata",description:"Parse an incoming Suricata EVE JSON stream into events.",source:"@site/versioned_docs/version-v4.23/tql2/operators/read_suricata.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_suricata",permalink:"/v4.23/tql2/operators/read_suricata",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/read_suricata.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_ssv",permalink:"/v4.23/tql2/operators/read_ssv"},next:{title:"read_syslog",permalink:"/v4.23/tql2/operators/read_syslog"}},d={},D=[{value:"Description",id:"description",level:2},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Parse a Suricata EVE JSON log file",id:"parse-a-suricata-eve-json-log-file",level:3},{value:"Read Suricata EVE JSON from a Unix domain socket",id:"read-suricata-eve-json-from-a-unix-domain-socket",level:3}],u={toc:D},f="wrapper";function h(a){var e=a,{components:n}=e,s=m(e,["components"]);return(0,t.yg)(f,g(E(E({},u),s),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",E({},{id:"read_suricata"}),"read_suricata"),(0,t.yg)("p",null,"Parse an incoming ",(0,t.yg)("a",E({parentName:"p"},{href:"https://suricata.readthedocs.io/en/latest/output/eve/eve-json-output.html"}),"Suricata EVE JSON")," stream into events."),(0,t.yg)("figure",E({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",E({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",E({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_suricata"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}})," [schema_only"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,t.yg)("h2",E({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("a",E({parentName:"p"},{href:"https://suricata.io"}),"Suricata")," network security monitor converts network\ntraffic into a stream of metadata events and provides a rule matching engine to\ngenerate alerts. Suricata emits events in the ",(0,t.yg)("a",E({parentName:"p"},{href:"https://suricata.readthedocs.io/en/latest/output/eve/eve-json-output.html"}),"EVE JSON")," format. The\noutput is a single stream of events where the ",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," field disambiguates\nthe event type."),(0,t.yg)("p",null,"Tenzir's ",(0,t.yg)("a",E({parentName:"p"},{href:"/v4.23/tql2/operators/read_json"}),(0,t.yg)("inlineCode",{parentName:"a"},"JSON"))," can handle EVE JSON correctly, but for the schema\nnames to match the value from the ",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," field, you need to pass the\noption ",(0,t.yg)("inlineCode",{parentName:"p"},"selector=event_type:suricata"),". The ",(0,t.yg)("inlineCode",{parentName:"p"},"suricata")," parser does this by\ndefault."),(0,t.yg)("h3",E({},{id:"raw--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,t.yg)("p",null,"Use only the raw types that are native to the parsed format. Fields that have a type\nspecified in the chosen ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," will still be parsed according to the schema."),(0,t.yg)("p",null,"Since Suricata is JSON, this means that JSON numbers will be parsed as numbers,\nbut every JSON string remains a string, unless the field is in the ",(0,t.yg)("inlineCode",{parentName:"p"},"schema"),"."),(0,t.yg)("h3",E({},{id:"schema_only--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,t.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,t.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained via a ",(0,t.yg)("inlineCode",{parentName:"p"},"selector"),"\nand it does not exist, this has no effect."),(0,t.yg)("p",null,"This option requires either ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,t.yg)("h2",E({},{id:"examples"}),"Examples"),(0,t.yg)("h3",E({},{id:"parse-a-suricata-eve-json-log-file"}),"Parse a Suricata EVE JSON log file"),(0,t.yg)("p",null,"Here's an ",(0,t.yg)("inlineCode",{parentName:"p"},"eve.log")," sample:"),(0,t.yg)("figure",E({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",E({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",E({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T14:52:57.716360+0200"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"flow_id"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"1031464864740687"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"pcap_cnt"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"83"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"alert"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"src_ip"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"src_port"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"1181"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_ip"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"78.40.125.4"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_port"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"6667"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"TCP"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"alert"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"action"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"allowed"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"gid"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"signature_id"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"2017318"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"rev"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"signature"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"ET CURRENT_EVENTS SUSPICIOUS IRC - PRIVMSG *.(exe|tar|tgz|zip)  download command"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"category"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Potentially Bad Traffic"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"severity"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"},"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"flow"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"pkts_toserver"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"27"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"pkts_toclient"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"35"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes_toserver"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"2302"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes_toclient"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"4520"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"start"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T14:47:24.357711+0200"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"},"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"payload"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"UFJJVk1TRyAjemFyYXNhNDggOiBzbXNzLmV4ZSAoMzY4KQ0K"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"payload_printable"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"PRIVMSG #zarasa48 : smss.exe (368)'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#FF7B72"}}),"\\r\\n"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"stream"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"packet"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"AB5J2xnDCAAntbcZCABFAABMGV5AAIAGLlyTIFSlTih9BASdGgvw0QvAxUWHdVAY+rCL4gAAUFJJVk1TRyAjemFyYXNhNDggOiBzbXNzLmV4ZSAoMzY4KQ0K"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"packet_info"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"linktype"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}")),"\n",(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T14:55:22.154618+0200"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"flow_id"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"2247896271051770"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"pcap_cnt"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"775"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"dns"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"src_ip"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"src_port"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"1141"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_ip"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.80.9"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_port"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"53"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"UDP"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"dns"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"type"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"query"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"id"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"553"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"rrname"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"irc.freenode.net"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"rrtype"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"A"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"tx_id"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}")),"\n",(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T16:59:22.181050+0200"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"flow_id"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"472067367468746"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"pcap_cnt"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"25767"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"fileinfo"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"src_ip"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"74.207.254.18"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"src_port"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"80"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_ip"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_port"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"1046"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"TCP"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"http"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"hostname"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"www.nmap.org"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"url"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"/"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"http_user_agent"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Mozilla/4.0 (compatible)"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"http_content_type"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"text/html"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"http_method"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"GET"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"protocol"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"HTTP/1.1"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"status"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"301"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"redirect"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"http://nmap.org/"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"length"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"301"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"},"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"app_proto"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"http"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"fileinfo"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"filename"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"/"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"magic"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"HTML document, ASCII text"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"gaps"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"false"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"state"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"CLOSED"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"md5"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"70041821acf87389e40ddcb092004184"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"sha1"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"10395ab3566395ca050232d2c1a0dbad69eb5fd2"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"sha256"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2e4c462b3424afcc04f43429d5f001e4ef9a28143bfeefb9af2254b4df3a7c1a"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"stored"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"true"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"file_id"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"size"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"301"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),'"tx_id"'),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}"))))),(0,t.yg)("p",null,"Import it as follows:"),(0,t.yg)("figure",E({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",E({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",E({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_file"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),' "eve.log"')),"\n",(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_suricata")),"\n",(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#D2A8FF"}}),"import"))))),(0,t.yg)("h3",E({},{id:"read-suricata-eve-json-from-a-unix-domain-socket"}),"Read Suricata EVE JSON from a Unix domain socket"),(0,t.yg)("p",null,"Instead of writing to a file, Suricata can also log to a Unix domain socket that\nTenzir can then read from. This saves a filesystem round-trip. This requires the\nfollowing settings in your ",(0,t.yg)("inlineCode",{parentName:"p"},"suricata.yaml"),":"),(0,t.yg)("figure",E({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",E({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",E({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),"outputs"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),"  - "),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),"eve-log"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),"    enabled"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#79C0FF"}}),"yes")),"\n",(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),"    filetype"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),"unix_stream")),"\n",(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#7EE787"}}),"    filename"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),"eve.sock"))))),(0,t.yg)("p",null,"Suricata creates ",(0,t.yg)("inlineCode",{parentName:"p"},"eve.sock")," upon startup. Thereafter, you can read from the\nsocket:"),(0,t.yg)("figure",E({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",E({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",E({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#A5D6FF"}}),' "eve.sock"')),"\n",(0,t.yg)("span",E({parentName:"code"},{"data-line":""}),(0,t.yg)("span",E({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_suricata"))))))}h.isMDXComponent=!0}}]);