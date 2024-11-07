"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91890],{15680:(a,e,n)=>{n.d(e,{xA:()=>c,yg:()=>N});var s=n(96540);function p(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function t(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,s)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach((function(e){p(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,s,p=function(a,e){if(null==a)return{};var n,s,p={},t=Object.keys(a);for(s=0;s<t.length;s++)n=t[s],e.indexOf(n)>=0||(p[n]=a[n]);return p}(a,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(s=0;s<t.length;s++)n=t[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(p[n]=a[n])}return p}var l=s.createContext({}),y=function(a){var e=s.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},c=function(a){var e=y(a.components);return s.createElement(l.Provider,{value:e},a.children)},m="mdxType",E={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},g=s.forwardRef((function(a,e){var n=a.components,p=a.mdxType,t=a.originalType,l=a.parentName,c=o(a,["components","mdxType","originalType","parentName"]),m=y(n),g=p,N=m["".concat(l,".").concat(g)]||m[g]||E[g]||t;return n?s.createElement(N,r(r({ref:e},c),{},{components:n})):s.createElement(N,r({ref:e},c))}));function N(a,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof a||p){var t=n.length,r=new Array(t);r[0]=g;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=a,o[m]="string"==typeof a?a:p,r[1]=o;for(var y=2;y<t;y++)r[y]=n[y];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78506:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>D,contentTitle:()=>F,default:()=>h,frontMatter:()=>N,metadata:()=>i,toc:()=>d});var s=n(15680),p=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(a,e,n)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,m=(a,e)=>{for(var n in e||(e={}))l.call(e,n)&&c(a,n,e[n]);if(o)for(var n of o(e))y.call(e,n)&&c(a,n,e[n]);return a},E=(a,e)=>t(a,r(e)),g=(a,e)=>{var n={};for(var s in a)l.call(a,s)&&e.indexOf(s)<0&&(n[s]=a[s]);if(null!=a&&o)for(var s of o(a))e.indexOf(s)<0&&y.call(a,s)&&(n[s]=a[s]);return n};const N={sidebar_custom_props:{format:{parser:!0}}},F="suricata",i={unversionedId:"formats/suricata",id:"version-v4.22/formats/suricata",title:"suricata",description:"Reads Suricata's EVE JSON output. The parser is an alias",source:"@site/versioned_docs/version-v4.22/formats/suricata.md",sourceDirName:"formats",slug:"/formats/suricata",permalink:"/v4.22/formats/suricata",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/formats/suricata.md",tags:[],version:"v4.22",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"ssv",permalink:"/v4.22/formats/ssv"},next:{title:"syslog",permalink:"/v4.22/formats/syslog"}},D={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Common Options (Parser)",id:"common-options-parser",level:3},{value:"Examples",id:"examples",level:2}],u={toc:d},f="wrapper";function h(a){var e=a,{components:n}=e,p=g(e,["components"]);return(0,s.yg)(f,E(m(m({},u),p),{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",m({},{id:"suricata"}),"suricata"),(0,s.yg)("p",null,"Reads ",(0,s.yg)("a",m({parentName:"p"},{href:"https://suricata.io"}),"Suricata"),"'s ",(0,s.yg)("a",m({parentName:"p"},{href:"https://suricata.readthedocs.io/en/latest/output/eve/eve-json-output.html"}),"EVE JSON")," output. The parser is an alias\nfor ",(0,s.yg)("a",m({parentName:"p"},{href:"/v4.22/formats/json"}),(0,s.yg)("inlineCode",{parentName:"a"},"json"))," with the arguments:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"--selector=event_type:suricata")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"--ndjson"))),(0,s.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,s.yg)("pre",null,(0,s.yg)("code",m({parentName:"pre"},{}),"suricata [--schema-only] [--raw] [--unnest-separator <separator>]\n")),(0,s.yg)("h2",m({},{id:"description"}),"Description"),(0,s.yg)("p",null,"The ",(0,s.yg)("a",m({parentName:"p"},{href:"https://suricata.io"}),"Suricata")," network security monitor converts network\ntraffic into a stream of metadata events and provides a rule matching engine to\ngenerate alerts. Suricata emits events in the ",(0,s.yg)("a",m({parentName:"p"},{href:"https://suricata.readthedocs.io/en/latest/output/eve/eve-json-output.html"}),"EVE JSON")," format. The\noutput is a single stream of events where the ",(0,s.yg)("inlineCode",{parentName:"p"},"event_type")," field disambiguates\nthe event type."),(0,s.yg)("p",null,"Tenzir's ",(0,s.yg)("a",m({parentName:"p"},{href:"/v4.22/formats/json"}),(0,s.yg)("inlineCode",{parentName:"a"},"json"))," can handle EVE JSON correctly, but for the schema\nnames to match the value from the ",(0,s.yg)("inlineCode",{parentName:"p"},"event_type")," field, you need to pass the\noption ",(0,s.yg)("inlineCode",{parentName:"p"},"--selector=event_type:suricata"),". The ",(0,s.yg)("inlineCode",{parentName:"p"},"suricata")," parser does this by\ndefault."),(0,s.yg)("h3",m({},{id:"common-options-parser"}),"Common Options (Parser)"),(0,s.yg)("p",null,"The Suricata parser supports some of the common ",(0,s.yg)("a",m({parentName:"p"},{href:"/v4.22/formats#parser-schema-inference"}),"schema inference options"),"."),(0,s.yg)("h2",m({},{id:"examples"}),"Examples"),(0,s.yg)("p",null,"Here's an ",(0,s.yg)("inlineCode",{parentName:"p"},"eve.log")," sample:"),(0,s.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,s.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,s.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T14:52:57.716360+0200"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"flow_id"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1031464864740687"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"pcap_cnt"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"83"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"alert"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"src_ip"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"src_port"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1181"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_ip"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"78.40.125.4"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_port"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"6667"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"TCP"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"alert"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"action"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"allowed"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"gid"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"signature_id"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"2017318"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"rev"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"signature"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"ET CURRENT_EVENTS SUSPICIOUS IRC - PRIVMSG *.(exe|tar|tgz|zip)  download command"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"category"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Potentially Bad Traffic"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"severity"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"},"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"flow"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"pkts_toserver"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"27"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"pkts_toclient"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"35"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes_toserver"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"2302"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes_toclient"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"4520"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"start"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T14:47:24.357711+0200"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"},"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"payload"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"UFJJVk1TRyAjemFyYXNhNDggOiBzbXNzLmV4ZSAoMzY4KQ0K"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"payload_printable"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"PRIVMSG #zarasa48 : smss.exe (368)'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\r\\n"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"stream"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"packet"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"AB5J2xnDCAAntbcZCABFAABMGV5AAIAGLlyTIFSlTih9BASdGgvw0QvAxUWHdVAY+rCL4gAAUFJJVk1TRyAjemFyYXNhNDggOiBzbXNzLmV4ZSAoMzY4KQ0K"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"packet_info"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"linktype"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T14:55:22.154618+0200"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"flow_id"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"2247896271051770"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"pcap_cnt"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"775"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"dns"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"src_ip"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"src_port"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1141"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_ip"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.80.9"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_port"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"53"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"UDP"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"dns"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"type"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"query"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"id"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"553"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"rrname"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"irc.freenode.net"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"rrtype"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"A"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"tx_id"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2011-08-12T16:59:22.181050+0200"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"flow_id"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"472067367468746"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"pcap_cnt"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"25767"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"event_type"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"fileinfo"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"src_ip"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"74.207.254.18"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"src_port"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"80"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_ip"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"dest_port"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1046"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"proto"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"TCP"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"http"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"hostname"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"www.nmap.org"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"url"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"/"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"http_user_agent"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Mozilla/4.0 (compatible)"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"http_content_type"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"text/html"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"http_method"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"GET"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"protocol"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"HTTP/1.1"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"status"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"301"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"redirect"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"http://nmap.org/"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"length"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"301"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"},"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"app_proto"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"http"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"fileinfo"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":{"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"filename"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"/"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"magic"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"HTML document, ASCII text"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"gaps"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"false"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"state"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"CLOSED"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"md5"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"70041821acf87389e40ddcb092004184"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"sha1"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"10395ab3566395ca050232d2c1a0dbad69eb5fd2"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"sha256"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2e4c462b3424afcc04f43429d5f001e4ef9a28143bfeefb9af2254b4df3a7c1a"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"stored"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"true"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"file_id"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"size"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"301"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'"tx_id"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}"))))),(0,s.yg)("p",null,"Import the log as follows:"),(0,s.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,s.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,s.yg)("code",m({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}})," 'read suricata | import'"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}})," <"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}})," eve.log"))))),(0,s.yg)("p",null,"Instead of writing to a file, Suricata can also log to a UNIX domain socket that\nTenzir can then read from. This saves a filesystem round-trip. This requires the\nfollowing settings in your ",(0,s.yg)("inlineCode",{parentName:"p"},"suricata.yaml"),":"),(0,s.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,s.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,s.yg)("code",m({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),"outputs"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"  - "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),"eve-log"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),"    enabled"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"yes")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),"    filetype"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),"unix_stream")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),"    filename"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),"eve.sock"))))),(0,s.yg)("p",null,"Suricata creates ",(0,s.yg)("inlineCode",{parentName:"p"},"eve.sock")," upon startup. Thereafter, you can read from the\nsocket via netcat:"),(0,s.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,s.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,s.yg)("code",m({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FFA657"}}),"nc"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}})," -vlkU"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}})," eve.sock"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FFA657"}})," tenzir"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}})," 'read suricata | ...'"))))),(0,s.yg)("p",null,"Or natively via this Tenzir pipeline:"),(0,s.yg)("pre",null,(0,s.yg)("code",m({parentName:"pre"},{}),"from file --uds eve.sock read suricata\n")))}h.isMDXComponent=!0}}]);