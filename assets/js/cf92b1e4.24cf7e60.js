"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79889],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>c});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},y=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,c=d["".concat(s,".").concat(m)]||d[m]||g[m]||p;return t?n.createElement(c,o(o({ref:a},y),{},{components:t})):n.createElement(c,o({ref:a},y))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<p;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68333:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>F});var n=t(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&y(e,t,a[t]);if(l)for(var t of l(a))i.call(a,t)&&y(e,t,a[t]);return e},g=(e,a)=>p(e,o(a)),m=(e,a)=>{var t={};for(var n in e)s.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const c={},u="read_tsv",h={unversionedId:"tql2/operators/read_tsv",id:"version-v4.23/tql2/operators/read_tsv",title:"read_tsv",description:"Read TSV (Tab-Separated Values) from a byte stream.",source:"@site/versioned_docs/version-v4.23/tql2/operators/read_tsv.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_tsv",permalink:"/tql2/operators/read_tsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/read_tsv.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_syslog",permalink:"/tql2/operators/read_syslog"},next:{title:"read_xsv",permalink:"/tql2/operators/read_xsv"}},N={},F=[{value:"Description",id:"description",level:2},{value:"<code>auto_expand = bool (optional)</code>",id:"auto_expand--bool-optional",level:3},{value:"<code>comments = bool (optional)</code>",id:"comments--bool-optional",level:3},{value:"<code>header = str (optional)</code>",id:"header--str-optional",level:3},{value:"<code>list_sep = str (optional)</code>",id:"list_sep--str-optional",level:3},{value:"<code>null_value = str (optional)</code>",id:"null_value--str-optional",level:3},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema = str (optional)</code>",id:"schema--str-optional",level:3},{value:"<code>selector = str (optional)</code>",id:"selector--str-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"<code>unflatten = str (optional)</code>",id:"unflatten--str-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Parse a TSV file",id:"parse-a-tsv-file",level:3}],f={toc:F},v="wrapper";function b(e){var a=e,{components:t}=a,r=m(a,["components"]);return(0,n.yg)(v,g(d(d({},f),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"read_tsv"}),"read_tsv"),(0,n.yg)("p",null,"Read TSV (Tab-Separated Values) from a byte stream."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_tsv"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [list_sep"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, null_value"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, comments"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, header"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, auto_expand"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool,")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"                    schema"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, selector"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, schema_only"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, unflatten"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str]"))))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"read_tsv")," operator transforms a byte stream into a event stream by parsing\nthe bytes as ",(0,n.yg)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Tab-separated_values"}),"TSV"),"."),(0,n.yg)("h3",d({},{id:"auto_expand--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"auto_expand = bool (optional)")),(0,n.yg)("p",null,"Automatically add fields to the schema when encountering events with too many\nvalues instead of dropping the excess values."),(0,n.yg)("h3",d({},{id:"comments--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"comments = bool (optional)")),(0,n.yg)("p",null,'Treat lines beginning with "#" as comments.'),(0,n.yg)("h3",d({},{id:"header--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"header = str (optional)")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"string")," to be used as a ",(0,n.yg)("inlineCode",{parentName:"p"},"header")," for the parsed values.\nIf unspecified, the first line of the input is used as the header."),(0,n.yg)("h3",d({},{id:"list_sep--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"list_sep = str (optional)")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"string")," separating the elements ",(0,n.yg)("em",{parentName:"p"},"inside")," a list."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},","),"."),(0,n.yg)("h3",d({},{id:"null_value--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"null_value = str (optional)")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"string")," denoting an absent value."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"-"),"."),(0,n.yg)("h3",d({},{id:"raw--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,n.yg)("p",null,"Use only the raw types that are native to the parsed format. Fields that have a type\nspecified in the chosen ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," will still be parsed according to the schema."),(0,n.yg)("p",null,"In the case of TSV this means that no parsing of data takes place at all\nand every value remains a string."),(0,n.yg)("h3",d({},{id:"schema--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"schema = str (optional)")),(0,n.yg)("p",null,"Provide the name of a ",(0,n.yg)("a",d({parentName:"p"},{href:"/data-model/schemas"}),"schema")," to be used by the\nparser."),(0,n.yg)("p",null,"If a schema with a matching name is installed, the result will always have\nall fields from that schema."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fields that are specified in the schema, but did not appear in the input will be null."),(0,n.yg)("li",{parentName:"ul"},"Fields that appear in the input, but not in the schema will also be kept. ",(0,n.yg)("inlineCode",{parentName:"li"},"schema_only=true"),"\ncan be used to reject fields that are not in the schema.")),(0,n.yg)("p",null,"If the given schema does not exist, this option instead assigns the output schema name only."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," option is incompatible with the ",(0,n.yg)("inlineCode",{parentName:"p"},"selector")," option."),(0,n.yg)("h3",d({},{id:"selector--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"selector = str (optional)")),(0,n.yg)("p",null,"Designates a field value as ",(0,n.yg)("a",d({parentName:"p"},{href:"/data-model/schemas"}),"schema")," name with an\noptional dot-separated prefix."),(0,n.yg)("p",null,"The string is parsed as ",(0,n.yg)("inlineCode",{parentName:"p"},"<fieldname>[:<prefix>]"),". The ",(0,n.yg)("inlineCode",{parentName:"p"},"prefix")," is optional and\nwill be prepended to the field value to generate the schema name."),(0,n.yg)("p",null,"For example, the Suricata EVE JSON format includes a field\n",(0,n.yg)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,n.yg)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,n.yg)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,n.yg)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,n.yg)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"selector")," option is incompatible with the ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," option."),(0,n.yg)("h3",d({},{id:"schema_only--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,n.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,n.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained via a ",(0,n.yg)("inlineCode",{parentName:"p"},"selector"),"\nand it does not exist, this has no effect."),(0,n.yg)("p",null,"This option requires either ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,n.yg)("h3",d({},{id:"unflatten--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"unflatten = str (optional)")),(0,n.yg)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,n.yg)("p",null,"A popular example of this is the ",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/read_zeek_json"}),"Zeek JSON")," format. It includes\nthe fields ",(0,n.yg)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"id.resp_p")," at the\ntop-level. The data is best modeled as an ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," record with four nested fields\n",(0,n.yg)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,n.yg)("p",null,"Without an unflatten separator, the data looks like this:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"tql","data-theme":"github-dark-default"}),"Without unflattening"),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    id"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"orig_h"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    id"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"orig_p"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 10"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    id"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"resp_h"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    id"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"resp_p"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 5"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("p",null,"With the unflatten separator set to ",(0,n.yg)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"tql","data-theme":"github-dark-default"}),"With 'unflatten'"),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    id"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"        orig_h"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"        orig_p"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 10"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"        resp_h"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"        resp_p"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 5"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    }")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("h3",d({},{id:"parse-a-tsv-file"}),"Parse a TSV file"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"txt","data-theme":"github-dark-default"}),"input.tsv"),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"txt","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"txt","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},"message count   ip")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'text    42  "1.1.1.1"')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",{parentName:"span"},'"longer string" 100 "1.1.1.2"'))))),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "input.tsv"')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_tsv"))))),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{message"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "text"'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 42"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", ip"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{message"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "longer string"'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 100"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", ip"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}b.isMDXComponent=!0}}]);