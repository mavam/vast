"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61660],{15680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>d});var t=n(96540);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},g=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,p=e.mdxType,s=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),i=y(n),c=p,d=i["".concat(l,".").concat(c)]||i[c]||m[c]||s;return n?t.createElement(d,r(r({ref:a},g),{},{components:n})):t.createElement(d,r({ref:a},g))}));function d(e,a){var n=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var s=n.length,r=new Array(s);r[0]=c;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[i]="string"==typeof e?e:p,r[1]=o;for(var y=2;y<s;y++)r[y]=n[y];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64815:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>E,contentTitle:()=>N,default:()=>D,frontMatter:()=>d,metadata:()=>F,toc:()=>h});var t=n(15680),p=Object.defineProperty,s=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,i=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&g(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&g(e,n,a[n]);return e},m=(e,a)=>s(e,r(a)),c=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const d={},N="read_syslog",F={unversionedId:"tql2/operators/read_syslog",id:"version-v4.23/tql2/operators/read_syslog",title:"read_syslog",description:"Parses an incoming Syslog stream into events.",source:"@site/versioned_docs/version-v4.23/tql2/operators/read_syslog.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_syslog",permalink:"/v4.23/tql2/operators/read_syslog",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/read_syslog.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_suricata",permalink:"/v4.23/tql2/operators/read_suricata"},next:{title:"read_tsv",permalink:"/v4.23/tql2/operators/read_tsv"}},E={},h=[{value:"Description",id:"description",level:2},{value:"<code>merge = bool (optional)</code>",id:"merge--bool-optional",level:3},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema = str (optional)</code>",id:"schema--str-optional",level:3},{value:"<code>selector = str (optional)</code>",id:"selector--str-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"<code>unflatten = str (optional)</code>",id:"unflatten--str-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Read in the <code>auth.log</code>",id:"read-in-the-authlog",level:3}],u={toc:h},f="wrapper";function D(e){var a=e,{components:n}=a,p=c(a,["components"]);return(0,t.yg)(f,m(i(i({},u),p),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",i({},{id:"read_syslog"}),"read_syslog"),(0,t.yg)("p",null,"Parses an incoming ",(0,t.yg)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Syslog"}),"Syslog")," stream into events."),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_syslog"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," [merge"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, schema"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, selector"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, schema_only"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, unflatten"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"str]"))))),(0,t.yg)("h2",i({},{id:"description"}),"Description"),(0,t.yg)("p",null,(0,t.yg)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Syslog"}),"Syslog")," is a standard format for message logging."),(0,t.yg)("p",null,'Tenzir supports reading syslog messages in both the standardized "Syslog Protocol" format\n(',(0,t.yg)("a",i({parentName:"p"},{href:"https://tools.ietf.org/html/rfc5424"}),"RFC 5424"),'), and the older "BSD syslog Protocol" format\n(',(0,t.yg)("a",i({parentName:"p"},{href:"https://tools.ietf.org/html/rfc3164"}),"RFC 3164"),")."),(0,t.yg)("p",null,"Depending on the syslog format, the result can be different.\nHere's an example of a syslog message in RFC 5424 format:"),(0,t.yg)("pre",null,(0,t.yg)("code",i({parentName:"pre"},{}),'<165>8 2023-10-11T22:14:15.003Z mymachineexamplecom evntslog 1370 ID47 [exampleSDID@32473 eventSource="Application" eventID="1011"] Event log entry\n')),(0,t.yg)("p",null,"With this input, the parser will produce the following output, with the schema name ",(0,t.yg)("inlineCode",{parentName:"p"},"syslog.rfc5424"),":"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "facility"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"20"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "severity"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"5"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "version"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"8"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "timestamp"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2023-10-11T22:14:15.003000"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "hostname"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"mymachineexamplecom"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "app_name"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"evntslog"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "process_id"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1370"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "message_id"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"ID47"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "structured_data"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "exampleSDID@32473"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'      "eventSource"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Application"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'      "eventID"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1011")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    }")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "message"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Event log entry"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"Here's an example of a syslog message in RFC 3164 format:"),(0,t.yg)("pre",null,(0,t.yg)("code",i({parentName:"pre"},{}),"<34>Nov 16 14:55:56 mymachine PROGRAM: Freeform message\n")),(0,t.yg)("p",null,"With this input, the parser will produce the following output, with the schema name ",(0,t.yg)("inlineCode",{parentName:"p"},"syslog.rfc3164"),":"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "facility"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "severity"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "timestamp"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Nov 16 14:55:56"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "hostname"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"mymachine"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "app_name"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"PROGRAM"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "process_id"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "content"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Freeform message"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",i({},{id:"merge--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"merge = bool (optional)")),(0,t.yg)("p",null,"Merges all incoming events into a single schema","*"," that converges over time. This\noption is usually the fastest ",(0,t.yg)("em",{parentName:"p"},"for reading")," highly heterogeneous data, but can lead\nto huge schemas filled with nulls and imprecise results. Use with caution."),(0,t.yg)("p",null,"*",": In selector mode, only events with the same selector are merged."),(0,t.yg)("h3",i({},{id:"raw--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,t.yg)("p",null,"Use only the raw types that are native to the parsed format. Fields that have a type\nspecified in the chosen ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," will still be parsed according to the schema."),(0,t.yg)("p",null,"In the case of CEF, this means that no parsing of data takes place at all\nand every value remains a string, unless the field is in the ",(0,t.yg)("inlineCode",{parentName:"p"},"schema"),"."),(0,t.yg)("h3",i({},{id:"schema--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema = str (optional)")),(0,t.yg)("p",null,"Provide the name of a ",(0,t.yg)("a",i({parentName:"p"},{href:"/v4.23/data-model/schemas"}),"schema")," to be used by the\nparser."),(0,t.yg)("p",null,"If a schema with a matching name is installed, the result will always have\nall fields from that schema."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Fields that are specified in the schema, but did not appear in the input will be null."),(0,t.yg)("li",{parentName:"ul"},"Fields that appear in the input, but not in the schema will also be kept. ",(0,t.yg)("inlineCode",{parentName:"li"},"schema_only=true"),"\ncan be used to reject fields that are not in the schema.")),(0,t.yg)("p",null,"If the given schema does not exist, this option instead assigns the output schema name only."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option."),(0,t.yg)("h3",i({},{id:"selector--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"selector = str (optional)")),(0,t.yg)("p",null,"Designates a field value as ",(0,t.yg)("a",i({parentName:"p"},{href:"/v4.23/data-model/schemas"}),"schema")," name with an\noptional dot-separated prefix."),(0,t.yg)("p",null,"The string is parsed as ",(0,t.yg)("inlineCode",{parentName:"p"},"<fieldname>[:<prefix>]"),". The ",(0,t.yg)("inlineCode",{parentName:"p"},"prefix")," is optional and\nwill be prepended to the field value to generate the schema name."),(0,t.yg)("p",null,"For example, the Suricata EVE JSON format includes a field\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,t.yg)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,t.yg)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option."),(0,t.yg)("h3",i({},{id:"schema_only--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,t.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,t.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained via a ",(0,t.yg)("inlineCode",{parentName:"p"},"selector"),"\nand it does not exist, this has no effect."),(0,t.yg)("p",null,"This option requires either ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,t.yg)("h3",i({},{id:"unflatten--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"unflatten = str (optional)")),(0,t.yg)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,t.yg)("p",null,"A popular example of this is the ",(0,t.yg)("a",i({parentName:"p"},{href:"/v4.23/tql2/operators/read_zeek_json"}),"Zeek JSON")," format. It\nincludes the fields ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_p")," at\nthe top-level. The data is best modeled as an ",(0,t.yg)("inlineCode",{parentName:"p"},"id")," record with four nested\nfields ",(0,t.yg)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,t.yg)("p",null,"Without an unflatten separator, the data looks like this:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",i({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"tql","data-theme":"github-dark-default"}),"Without unflattening"),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"orig_h"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1.1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"orig_p"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 10"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"resp_h"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"resp_p"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 5"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"With the unflatten separator set to ",(0,t.yg)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",i({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"tql","data-theme":"github-dark-default"}),"With 'unflatten'"),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    orig_h"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1.1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    orig_p"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 10"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resp_h"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resp_p"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 5"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h2",i({},{id:"examples"}),"Examples"),(0,t.yg)("h3",i({},{id:"read-in-the-authlog"}),"Read in the ",(0,t.yg)("inlineCode",{parentName:"h3"},"auth.log")),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",i({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"tql","data-theme":"github-dark-default"}),"Pipeline"),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/var/log/auth.log"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_syslog"))))),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  facility"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  severity"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  timestamp"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 2024"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"14T07"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),":15:01.348027"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  hostname"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "tenzirs-magic-machine"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  app_name"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "CRON"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  process_id"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "895756"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  content"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "pam_unix(cron:session): session opened for user root(uid=0) by root(uid=0)"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  facility"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  severity"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  timestamp"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 2024"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"14T07"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),":15:01.349838"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  hostname"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "tenzirs-magic-machine"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  app_name"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "CRON"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  process_id"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "895756"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  content"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "pam_unix(cron:session): session closed for user root"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}D.isMDXComponent=!0}}]);