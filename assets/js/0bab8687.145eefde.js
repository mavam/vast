"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14473],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>c});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},y=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,c=d["".concat(s,".").concat(m)]||d[m]||g[m]||p;return n?t.createElement(c,o(o({ref:a},y),{},{components:n})):t.createElement(c,o({ref:a},y))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<p;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43302:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,d=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&y(e,n,a[n]);if(l)for(var n of l(a))i.call(a,n)&&y(e,n,a[n]);return e},g=(e,a)=>p(e,o(a)),m=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const c={},u="read_kv",h={unversionedId:"tql2/operators/read_kv",id:"version-v4.22/tql2/operators/read_kv",title:"read_kv",description:"Read Key-Value pairs from a byte stream.",source:"@site/versioned_docs/version-v4.22/tql2/operators/read_kv.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_kv",permalink:"/tql2/operators/read_kv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/read_kv.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_json",permalink:"/tql2/operators/read_json"},next:{title:"read_leef",permalink:"/tql2/operators/read_leef"}},N={},f=[{value:"Description",id:"description",level:2},{value:"Quoted Values",id:"quoted-values",level:3},{value:"<code>field_split: str (optional)</code>",id:"field_split-str-optional",level:3},{value:"<code>value_split: str (optional)</code>",id:"value_split-str-optional",level:3},{value:"<code>merge = bool (optional)</code>",id:"merge--bool-optional",level:3},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema = str (optional)</code>",id:"schema--str-optional",level:3},{value:"<code>selector = str (optional)</code>",id:"selector--str-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"<code>unflatten = str (optional)</code>",id:"unflatten--str-optional",level:3},{value:"Examples",id:"examples",level:2}],F={toc:f},E="wrapper";function b(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(E,g(d(d({},F),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",d({},{id:"read_kv"}),"read_kv"),(0,t.yg)("p",null,"Read Key-Value pairs from a byte stream."),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_kv"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [field_split"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, value_split"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, merge"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, schema"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str,")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"         selector"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, schema_only"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, unflatten"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str]"))))),(0,t.yg)("h2",d({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"read_kv")," operator transforms a byte stream into a event stream by parsing\nthe bytes as Key-Value pairs."),(0,t.yg)("p",null,"Incoming strings are first split into fields according to ",(0,t.yg)("inlineCode",{parentName:"p"},"field_split"),". This\ncan be a regular expression. For example, the input ",(0,t.yg)("inlineCode",{parentName:"p"},"foo: bar, baz: 42")," can be\nsplit into ",(0,t.yg)("inlineCode",{parentName:"p"},"foo: bar")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"baz: 42")," with the ",(0,t.yg)("inlineCode",{parentName:"p"},'r",\\s*"')," (a comma, followed by any\namount of whitespace) as the field splitter. Note that the matched separators\nare removed when splitting a string."),(0,t.yg)("p",null,"Afterwards, the extracted fields are split into their key and value by\n",(0,t.yg)("inlineCode",{parentName:"p"},"<value_split>"),", which can again be a regular expression. In our example,\n",(0,t.yg)("inlineCode",{parentName:"p"},'r":\\s*"')," could be used to split ",(0,t.yg)("inlineCode",{parentName:"p"},"foo: bar")," into the key ",(0,t.yg)("inlineCode",{parentName:"p"},"foo")," and its value\n",(0,t.yg)("inlineCode",{parentName:"p"},"bar"),", and similarly ",(0,t.yg)("inlineCode",{parentName:"p"},"baz: 42")," into ",(0,t.yg)("inlineCode",{parentName:"p"},"baz")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"42"),". The result would thus be\n",(0,t.yg)("inlineCode",{parentName:"p"},'{"foo": "bar", "baz": 42}'),". If the regex matches multiple substrings, only the\nfirst match is used."),(0,t.yg)("p",null,"The supported regular expression syntax is\n",(0,t.yg)("a",d({parentName:"p"},{href:"https://github.com/google/re2/wiki/Syntax"}),"RE2"),". In particular, this means that\nlookahead ",(0,t.yg)("inlineCode",{parentName:"p"},"(?=...)")," and lookbehind ",(0,t.yg)("inlineCode",{parentName:"p"},"(?<=...)")," are not supported by ",(0,t.yg)("inlineCode",{parentName:"p"},"kv")," at the\nmoment. However, if the regular expression has a capture group, it is assumed\nthat only the content of the capture group shall be used as the separator. This\nmeans that unsupported regular expressions such as ",(0,t.yg)("inlineCode",{parentName:"p"},"(?=foo)bar(?<=baz)")," can be\neffectively expressed as ",(0,t.yg)("inlineCode",{parentName:"p"},"foo(bar)baz")," instead."),(0,t.yg)("h3",d({},{id:"quoted-values"}),"Quoted Values"),(0,t.yg)("p",null,"The parser is aware of double-quotes (",(0,t.yg)("inlineCode",{parentName:"p"},'"'),"). If the ",(0,t.yg)("inlineCode",{parentName:"p"},"field_split")," or\n",(0,t.yg)("inlineCode",{parentName:"p"},"value_split")," are found within enclosing quotes, they are not considered\nmatches. This means that both the key and the value may be enclosed in\ndouble-quotes."),(0,t.yg)("p",null,"For example, given ",(0,t.yg)("inlineCode",{parentName:"p"},"\\s*,\\s*")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"="),", the input"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),'"key"="nested = value",key2="value, and more"\n')),(0,t.yg)("p",null,"will parse as"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "key"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"nested = value"')),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "key2"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"value, and more"')),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",d({},{id:"field_split-str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"field_split: str (optional)")),(0,t.yg)("p",null,"The regular expression used to separate individual fields."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},'r"\\s"'),"."),(0,t.yg)("h3",d({},{id:"value_split-str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"value_split: str (optional)")),(0,t.yg)("p",null,"The regular expression used to separate a key from its value."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},'"="'),"."),(0,t.yg)("h3",d({},{id:"merge--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"merge = bool (optional)")),(0,t.yg)("p",null,"Merges all incoming events into a single schema","*"," that converges over time. This\noption is usually the fastest ",(0,t.yg)("em",{parentName:"p"},"for reading")," highly heterogeneous data, but can\nlead to huge schemas filled with nulls and imprecise results. Use with caution."),(0,t.yg)("p",null,"*",": In selector mode, only events with the same selector are merged."),(0,t.yg)("p",null,"This option can not be combined with ",(0,t.yg)("inlineCode",{parentName:"p"},"raw=true, schema=<schema>"),"."),(0,t.yg)("h3",d({},{id:"raw--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,t.yg)("p",null,"Use only the raw types that are native to the parsed format. In the case of KV\nthis means that no parsing of data takes place at all and every value remains a\nstring."),(0,t.yg)("p",null,"If a known ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," is given, fields will still be parsed according to the\nschema."),(0,t.yg)("p",null,"Use with caution."),(0,t.yg)("h3",d({},{id:"schema--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema = str (optional)")),(0,t.yg)("p",null,"Provide the name of a ",(0,t.yg)("a",d({parentName:"p"},{href:"/data-model/schemas"}),"schema")," to be used by the\nparser."),(0,t.yg)("p",null,"If a schema with a matching name is installed, the result will always have all\nfields from that schema."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Fields that are specified in the schema, but did not appear in the input will\nbe null."),(0,t.yg)("li",{parentName:"ul"},"Fields that appear in the input, but not in the schema will also be kept.\n",(0,t.yg)("inlineCode",{parentName:"li"},"schema_only=true")," can be used to reject fields that are not in the schema.")),(0,t.yg)("p",null,"If the given schema does not exist, this option instead assigns the output\nschema name only."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option."),(0,t.yg)("h3",d({},{id:"selector--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"selector = str (optional)")),(0,t.yg)("p",null,"Designates a field value as ",(0,t.yg)("a",d({parentName:"p"},{href:"/data-model/schemas"}),"schema")," name with an\noptional dot-separated prefix."),(0,t.yg)("p",null,"The string is parsed as ",(0,t.yg)("inlineCode",{parentName:"p"},"<filename>[:<prefix>]"),". The ",(0,t.yg)("inlineCode",{parentName:"p"},"prefix")," is optional and\nwill be prepended to the field value to generate the schema name."),(0,t.yg)("p",null,"For example, the Suricata EVE JSON format includes a field ",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," that\ncontains the event type. Setting the selector to ",(0,t.yg)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an\nevent with the value ",(0,t.yg)("inlineCode",{parentName:"p"},"flow")," for the field ",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema\n",(0,t.yg)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option."),(0,t.yg)("h3",d({},{id:"schema_only--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,t.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,t.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained\nvia a ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," and it does not exist, this has no effect."),(0,t.yg)("p",null,"This option requires either ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,t.yg)("h3",d({},{id:"unflatten--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"unflatten = str (optional)")),(0,t.yg)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,t.yg)("p",null,"A popular example of this is the ",(0,t.yg)("a",d({parentName:"p"},{href:"/tql2/operators/read_zeek_json"}),"Zeek JSON")," format. It\nincludes the fields ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_p")," at\nthe top-level. The data is best modeled as an ",(0,t.yg)("inlineCode",{parentName:"p"},"id")," record with four nested\nfields ",(0,t.yg)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,t.yg)("p",null,"Without an unflatten separator, the data looks like this:"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"Without unflattening"),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.orig_h"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.1"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.orig_p"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.resp_h"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.2"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.resp_p"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"5")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"With the unflatten separator set to ",(0,t.yg)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"With 'unflatten'"),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "id"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "orig_h"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.1"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "orig_p"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "resp_h"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.2"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "resp_p"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"5")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h2",d({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Read comma-separated key-value pairs:"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#8B949E"}}),'// Input: surname:"John Norman", family_name:Smith, date_of_birth: 1995-05-26')),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_kv"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," r"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"\\s"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"*,"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"\\s"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'*"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", r"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"\\s"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),"*:"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"\\s"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'*"')),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  surname"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "John Norman"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  family_name"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Smith"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  date_of_birth"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1995"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"05"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"26"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"Extract key-value pairs with more complex rules:"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#8B949E"}}),"// Input: PATH: C:\\foo INPUT_MESSAGE: hello world")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_kv"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," r"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"('),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"\\s"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'+)[A-Z][A-Z_]+:"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", r"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'":'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"\\s"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'*"')),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  PATH"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "C:'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'foo"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  INPUT_MESSAGE"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "hello world"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"This requires lookahead because not every whitespace acts as a field separator.\nInstead, we only want to split if the whitespace is followed by ",(0,t.yg)("inlineCode",{parentName:"p"},"[A-Z][A-Z_]+:"),",\ni.e., at least two uppercase characters followed by a colon. We can express this\nas ",(0,t.yg)("inlineCode",{parentName:"p"},'"(\\s+)[A-Z][A-Z_]+:"'),", which yields ",(0,t.yg)("inlineCode",{parentName:"p"},"PATH: C:\\foo")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"INPUT_MESSAGE: hello\nworld"),". We then split the key from its value with ",(0,t.yg)("inlineCode",{parentName:"p"},'":\\s*"'),". Since only the first\nmatch is used to split key and value, this leaves the path intact."))}b.isMDXComponent=!0}}]);