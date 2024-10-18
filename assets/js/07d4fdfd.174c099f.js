"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50568],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=i(t),c=r,m=g["".concat(s,".").concat(c)]||g[c]||y[c]||o;return t?n.createElement(m,l(l({ref:a},d),{},{components:t})):n.createElement(m,l({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p[g]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},48809:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>h,default:()=>v,frontMatter:()=>m,metadata:()=>u,toc:()=>N});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&d(e,t,a[t]);if(p)for(var t of p(a))i.call(a,t)&&d(e,t,a[t]);return e},y=(e,a)=>o(e,l(a)),c=(e,a)=>{var t={};for(var n in e)s.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const m={},h="read_gelf",u={unversionedId:"tql2/operators/read_gelf",id:"version-v4.22/tql2/operators/read_gelf",title:"read_gelf",description:"Parses an incoming GELF stream into events.",source:"@site/versioned_docs/version-v4.22/tql2/operators/read_gelf.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_gelf",permalink:"/tql2/operators/read_gelf",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/read_gelf.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_csv",permalink:"/tql2/operators/read_csv"},next:{title:"read_grok",permalink:"/tql2/operators/read_grok"}},f={},N=[{value:"Description",id:"description",level:2},{value:"<code>merge = bool (optional)</code>",id:"merge--bool-optional",level:3},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema = str (optional)</code>",id:"schema--str-optional",level:3},{value:"<code>selector = str (optional)</code>",id:"selector--str-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"<code>unflatten = str (optional)</code>",id:"unflatten--str-optional",level:3},{value:"Examples",id:"examples",level:2}],b={toc:N},E="wrapper";function v(e){var a=e,{components:t}=a,r=c(a,["components"]);return(0,n.yg)(E,y(g(g({},b),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",g({},{id:"read_gelf"}),"read_gelf"),(0,n.yg)("p",null,"Parses an incoming ",(0,n.yg)("a",g({parentName:"p"},{href:"https://go2docs.graylog.org/current/getting_in_log_data/gelf.html"}),"GELF")," stream into events."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_gelf"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [merge"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, schema"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, selector"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, schema_only"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, unflatten"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"str]"))))),(0,n.yg)("h2",g({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Parses an incoming ",(0,n.yg)("a",g({parentName:"p"},{href:"https://go2docs.graylog.org/current/getting_in_log_data/gelf.html"}),"GELF")," stream into events."),(0,n.yg)("h3",g({},{id:"merge--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"merge = bool (optional)")),(0,n.yg)("p",null,"Merges all incoming events into a single schema","*"," that converges over time. This\noption is usually the fastest ",(0,n.yg)("em",{parentName:"p"},"for reading")," highly heterogeneous data, but can\nlead\nto huge schemas filled with nulls and imprecise results. Use with caution."),(0,n.yg)("p",null,"*",": In selector mode, only events with the same selector are merged."),(0,n.yg)("h3",g({},{id:"raw--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,n.yg)("p",null,"Use only the raw types that are native to the parsed format. Fields that have a type\nspecified in the chosen ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," will still be parsed according to the schema."),(0,n.yg)("p",null,"Since GELF is JSON under the hood, this means that JSON numbers will be parsed as numbers,\nbut every JSON string remains a string, unless the field is in the ",(0,n.yg)("inlineCode",{parentName:"p"},"schema"),"."),(0,n.yg)("h3",g({},{id:"schema--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"schema = str (optional)")),(0,n.yg)("p",null,"Provide the name of a ",(0,n.yg)("a",g({parentName:"p"},{href:"/data-model/schemas"}),"schema")," to be used by the\nparser."),(0,n.yg)("p",null,"If a schema with a matching name is installed, the result will always have\nall fields from that schema."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fields that are specified in the schema, but did not appear in the input will be null."),(0,n.yg)("li",{parentName:"ul"},"Fields that appear in the input, but not in the schema will also be kept. ",(0,n.yg)("inlineCode",{parentName:"li"},"schema_only=true"),"\ncan be used to reject fields that are not in the schema.")),(0,n.yg)("p",null,"If the given schema does not exist, this option instead assigns the output schema name only."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," option is incompatible with the ",(0,n.yg)("inlineCode",{parentName:"p"},"selector")," option."),(0,n.yg)("h3",g({},{id:"selector--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"selector = str (optional)")),(0,n.yg)("p",null,"Designates a field value as ",(0,n.yg)("a",g({parentName:"p"},{href:"/data-model/schemas"}),"schema")," name with an\noptional dot-separated prefix."),(0,n.yg)("p",null,"The string is parsed as ",(0,n.yg)("inlineCode",{parentName:"p"},"<filename>[:<prefix>]"),". The ",(0,n.yg)("inlineCode",{parentName:"p"},"prefix")," is optional and\nwill be prepended to the field value to generate the schema name."),(0,n.yg)("p",null,"For example, the Suricata EVE JSON format includes a field\n",(0,n.yg)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,n.yg)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,n.yg)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,n.yg)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,n.yg)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"selector")," option is incompatible with the ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," option."),(0,n.yg)("h3",g({},{id:"schema_only--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,n.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,n.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained via a ",(0,n.yg)("inlineCode",{parentName:"p"},"selector"),"\nand it does not exist, this has no effect."),(0,n.yg)("p",null,"This option requires either ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,n.yg)("h3",g({},{id:"unflatten--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"unflatten = str (optional)")),(0,n.yg)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,n.yg)("p",null,"A popular example of this is the ",(0,n.yg)("a",g({parentName:"p"},{href:"/tql2/operators/read_zeek_json"}),"Zeek JSON")," format. It includes\nthe fields ",(0,n.yg)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"id.resp_p")," at the\ntop-level. The data is best modeled as an ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," record with four nested fields\n",(0,n.yg)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,n.yg)("p",null,"Without an unflatten separator, the data looks like this:"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",g({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"Without unflattening"),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.orig_h"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.1"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.orig_p"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.resp_h"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.2"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.resp_p"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"5")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("p",null,"With the unflatten separator set to ",(0,n.yg)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",g({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"With 'unflatten'"),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "orig_h"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.1"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "orig_p"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "resp_h"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.2"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "resp_p"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"5")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",g({},{id:"examples"}),"Examples"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "events.log"')),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_gelf"))))))}v.isMDXComponent=!0}}]);