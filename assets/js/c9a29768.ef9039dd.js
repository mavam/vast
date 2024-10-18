"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40992],{15680:(a,e,n)=>{n.d(e,{xA:()=>c,yg:()=>N});var p=n(96540);function t(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function s(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);e&&(p=p.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,p)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){t(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,p,t=function(a,e){if(null==a)return{};var n,p,t={},s=Object.keys(a);for(p=0;p<s.length;p++)n=s[p],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(p=0;p<s.length;p++)n=s[p],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var l=p.createContext({}),y=function(a){var e=p.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},c=function(a){var e=y(a.components);return p.createElement(l.Provider,{value:e},a.children)},g="mdxType",E={inlineCode:"code",wrapper:function(a){var e=a.children;return p.createElement(p.Fragment,{},e)}},m=p.forwardRef((function(a,e){var n=a.components,t=a.mdxType,s=a.originalType,l=a.parentName,c=o(a,["components","mdxType","originalType","parentName"]),g=y(n),m=t,N=g["".concat(l,".").concat(m)]||g[m]||E[m]||s;return n?p.createElement(N,r(r({ref:e},c),{},{components:n})):p.createElement(N,r({ref:e},c))}));function N(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=a,o[g]="string"==typeof a?a:t,r[1]=o;for(var y=2;y<s;y++)r[y]=n[y];return p.createElement.apply(null,r)}return p.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61429:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>N,metadata:()=>F,toc:()=>D});var p=n(15680),t=Object.defineProperty,s=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(a,e,n)=>e in a?t(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,g=(a,e)=>{for(var n in e||(e={}))l.call(e,n)&&c(a,n,e[n]);if(o)for(var n of o(e))y.call(e,n)&&c(a,n,e[n]);return a},E=(a,e)=>s(a,r(e)),m=(a,e)=>{var n={};for(var p in a)l.call(a,p)&&e.indexOf(p)<0&&(n[p]=a[p]);if(null!=a&&o)for(var p of o(a))e.indexOf(p)<0&&y.call(a,p)&&(n[p]=a[p]);return n};const N={},i="read_suricata",F={unversionedId:"tql2/operators/read_suricata",id:"version-v4.22/tql2/operators/read_suricata",title:"read_suricata",description:"Parse an incoming Suricata EVE JSON stream into events.",source:"@site/versioned_docs/version-v4.22/tql2/operators/read_suricata.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_suricata",permalink:"/tql2/operators/read_suricata",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/read_suricata.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_ssv",permalink:"/tql2/operators/read_ssv"},next:{title:"read_syslog",permalink:"/tql2/operators/read_syslog"}},d={},D=[{value:"Description",id:"description",level:2},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"Examples",id:"examples",level:2}],u={toc:D},f="wrapper";function h(a){var e=a,{components:n}=e,t=m(e,["components"]);return(0,p.yg)(f,E(g(g({},u),t),{components:n,mdxType:"MDXLayout"}),(0,p.yg)("h1",g({},{id:"read_suricata"}),"read_suricata"),(0,p.yg)("p",null,"Parse an incoming ",(0,p.yg)("a",g({parentName:"p"},{href:"https://suricata.readthedocs.io/en/latest/output/eve/eve-json-output.html"}),"Suricata EVE JSON")," stream into events."),(0,p.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,p.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,p.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_suricata"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [schema_only"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,p.yg)("h2",g({},{id:"description"}),"Description"),(0,p.yg)("p",null,"The ",(0,p.yg)("a",g({parentName:"p"},{href:"https://suricata.io"}),"Suricata")," network security monitor converts network\ntraffic into a stream of metadata events and provides a rule matching engine to\ngenerate alerts. Suricata emits events in the ",(0,p.yg)("a",g({parentName:"p"},{href:"https://suricata.readthedocs.io/en/latest/output/eve/eve-json-output.html"}),"EVE JSON")," format. The\noutput is a single stream of events where the ",(0,p.yg)("inlineCode",{parentName:"p"},"event_type")," field disambiguates\nthe event type."),(0,p.yg)("p",null,"Tenzir's ",(0,p.yg)("a",g({parentName:"p"},{href:"/tql2/operators/read_json"}),(0,p.yg)("inlineCode",{parentName:"a"},"JSON"))," can handle EVE JSON correctly, but for the schema\nnames to match the value from the ",(0,p.yg)("inlineCode",{parentName:"p"},"event_type")," field, you need to pass the\noption ",(0,p.yg)("inlineCode",{parentName:"p"},"selector=event_type:suricata"),". The ",(0,p.yg)("inlineCode",{parentName:"p"},"suricata")," parser does this by\ndefault."),(0,p.yg)("h3",g({},{id:"raw--bool-optional"}),(0,p.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,p.yg)("p",null,"Use only the raw types that are native to the parsed format. Fields that have a type\nspecified in the chosen ",(0,p.yg)("inlineCode",{parentName:"p"},"schema")," will still be parsed according to the schema."),(0,p.yg)("p",null,"Since Suricata is JSON, this means that JSON numbers will be parsed as numbers,\nbut every JSON string remains a string, unless the field is in the ",(0,p.yg)("inlineCode",{parentName:"p"},"schema"),"."),(0,p.yg)("h3",g({},{id:"schema_only--bool-optional"}),(0,p.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,p.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,p.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained via a ",(0,p.yg)("inlineCode",{parentName:"p"},"selector"),"\nand it does not exist, this has no effect."),(0,p.yg)("p",null,"This option requires either ",(0,p.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,p.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,p.yg)("h2",g({},{id:"examples"}),"Examples"),(0,p.yg)("p",null,"Here's an ",(0,p.yg)("inlineCode",{parentName:"p"},"eve.log")," sample:"),(0,p.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,p.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,p.yg)("code",g({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T14:52:57.716360+0200"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"flow_id"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1031464864740687"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"pcap_cnt"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"83"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"alert"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"src_ip"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"src_port"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1181"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_ip"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"78.40.125.4"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_port"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"6667"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"TCP"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"alert"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"action"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"allowed"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"gid"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"signature_id"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"2017318"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"rev"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"signature"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"ET CURRENT_EVENTS SUSPICIOUS IRC - PRIVMSG *.(exe|tar|tgz|zip)  download command"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"category"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Potentially Bad Traffic"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"severity"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"flow"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"pkts_toserver"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"27"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"pkts_toclient"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"35"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes_toserver"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"2302"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes_toclient"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"4520"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"start"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T14:47:24.357711+0200"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"payload"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"UFJJVk1TRyAjemFyYXNhNDggOiBzbXNzLmV4ZSAoMzY4KQ0K"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"payload_printable"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"PRIVMSG #zarasa48 : smss.exe (368)'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"\\r\\n"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"stream"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"packet"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"AB5J2xnDCAAntbcZCABFAABMGV5AAIAGLlyTIFSlTih9BASdGgvw0QvAxUWHdVAY+rCL4gAAUFJJVk1TRyAjemFyYXNhNDggOiBzbXNzLmV4ZSAoMzY4KQ0K"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"packet_info"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"linktype"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T14:55:22.154618+0200"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"flow_id"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"2247896271051770"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"pcap_cnt"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"775"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"dns"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"src_ip"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"src_port"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1141"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_ip"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.80.9"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_port"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"53"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"UDP"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"dns"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"type"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"query"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"553"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"rrname"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"irc.freenode.net"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"rrtype"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"A"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"tx_id"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T16:59:22.181050+0200"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"flow_id"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"472067367468746"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"pcap_cnt"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"25767"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"fileinfo"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"src_ip"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"74.207.254.18"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"src_port"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"80"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_ip"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_port"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1046"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"TCP"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"http"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"hostname"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"www.nmap.org"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"url"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"/"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"http_user_agent"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Mozilla/4.0 (compatible)"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"http_content_type"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"text/html"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"http_method"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"GET"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"protocol"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"HTTP/1.1"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"status"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"301"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"redirect"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"http://nmap.org/"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"length"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"301"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"app_proto"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"http"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"fileinfo"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"filename"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"/"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"magic"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"HTML document, ASCII text"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"gaps"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"false"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"state"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"CLOSED"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"md5"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"70041821acf87389e40ddcb092004184"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"sha1"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"10395ab3566395ca050232d2c1a0dbad69eb5fd2"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"sha256"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2e4c462b3424afcc04f43429d5f001e4ef9a28143bfeefb9af2254b4df3a7c1a"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"stored"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"true"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"file_id"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"size"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"301"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"tx_id"'),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}"))))),(0,p.yg)("p",null,"Import the log as follows:"),(0,p.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,p.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,p.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_file"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "eve.log"')),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_suricata")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"import"))))),(0,p.yg)("p",null,"Instead of writing to a file, Suricata can also log to a UNIX domain socket that\nTenzir can then read from. This saves a filesystem round-trip. This requires the\nfollowing settings in your ",(0,p.yg)("inlineCode",{parentName:"p"},"suricata.yaml"),":"),(0,p.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,p.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,p.yg)("code",g({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"outputs"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  - "),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"eve-log"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"    enabled"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"yes")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"    filetype"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),"unix_stream")),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"    filename"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),"eve.sock"))))),(0,p.yg)("p",null,"Suricata creates ",(0,p.yg)("inlineCode",{parentName:"p"},"eve.sock")," upon startup. Thereafter, you can read from the\nsocket:"),(0,p.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,p.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,p.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "eve.sock"')),"\n",(0,p.yg)("span",g({parentName:"code"},{"data-line":""}),(0,p.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_suricata"))))))}h.isMDXComponent=!0}}]);