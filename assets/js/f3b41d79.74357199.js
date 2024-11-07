"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81367],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},y=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),d=i(t),g=r,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return t?n.createElement(m,p(p({ref:a},y),{},{components:t})):n.createElement(m,p({ref:a},y))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},50265:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>h,default:()=>b,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&y(e,t,a[t]);if(l)for(var t of l(a))i.call(a,t)&&y(e,t,a[t]);return e},c=(e,a)=>o(e,p(a)),g=(e,a)=>{var t={};for(var n in e)s.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const m={},h="read_xsv",u={unversionedId:"tql2/operators/read_xsv",id:"version-v4.23/tql2/operators/read_xsv",title:"read_xsv",description:"Read XSV from a byte stream.",source:"@site/versioned_docs/version-v4.23/tql2/operators/read_xsv.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_xsv",permalink:"/tql2/operators/read_xsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/read_xsv.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_tsv",permalink:"/tql2/operators/read_tsv"},next:{title:"read_yaml",permalink:"/tql2/operators/read_yaml"}},N={},f=[{value:"Description",id:"description",level:2},{value:"<code>field_sep: str</code>",id:"field_sep-str",level:3},{value:"<code>list_sep: str</code>",id:"list_sep-str",level:3},{value:"<code>null_value: str</code>",id:"null_value-str",level:3},{value:"<code>auto_expand = bool (optional)</code>",id:"auto_expand--bool-optional",level:3},{value:"<code>comments = bool (optional)</code>",id:"comments--bool-optional",level:3},{value:"<code>header = str (optional)</code>",id:"header--str-optional",level:3},{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3},{value:"<code>schema = str (optional)</code>",id:"schema--str-optional",level:3},{value:"<code>selector = str (optional)</code>",id:"selector--str-optional",level:3},{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3},{value:"<code>unflatten = str (optional)</code>",id:"unflatten--str-optional",level:3}],F={toc:f},v="wrapper";function b(e){var a=e,{components:t}=a,r=g(a,["components"]);return(0,n.yg)(v,c(d(d({},F),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"read_xsv"}),"read_xsv"),(0,n.yg)("p",null,"Read XSV from a byte stream."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_xsv"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," field_sep"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, list_sep"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, null_value"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str,")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"        [comments"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, header"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, auto_expand"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, schema"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str,")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"         selector"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, schema_only"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, unflatten"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str]"))))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"read_xsv")," operator transforms a byte stream into a event stream by parsing\nthe bytes as ",(0,n.yg)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Delimiter-separated_values"}),"XSV"),", a\ngeneralization of CSV with a more flexible separator specification."),(0,n.yg)("h3",d({},{id:"field_sep-str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"field_sep: str")),(0,n.yg)("p",null,"The string separating different fields."),(0,n.yg)("h3",d({},{id:"list_sep-str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"list_sep: str")),(0,n.yg)("p",null,"The string separating different elements in a list within a single field."),(0,n.yg)("h3",d({},{id:"null_value-str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"null_value: str")),(0,n.yg)("p",null,"The string denoting an absent value."),(0,n.yg)("h3",d({},{id:"auto_expand--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"auto_expand = bool (optional)")),(0,n.yg)("p",null,"Automatically add fields to the schema when encountering events with too many\nvalues instead of dropping the excess values."),(0,n.yg)("h3",d({},{id:"comments--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"comments = bool (optional)")),(0,n.yg)("p",null,"Treat lines beginning with ",(0,n.yg)("inlineCode",{parentName:"p"},"#")," as comments."),(0,n.yg)("h3",d({},{id:"header--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"header = str (optional)")),(0,n.yg)("p",null,"The string to be used as the header for the parsed values. If unspecified, the\nfirst line of the input is used as the header."),(0,n.yg)("h3",d({},{id:"raw--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,n.yg)("p",null,"Use only the raw types that are native to the parsed format. Fields that have a type\nspecified in the chosen ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," will still be parsed according to the schema."),(0,n.yg)("p",null,"In the case of XSV this means that no parsing of data takes place at all\nand every value remains a string."),(0,n.yg)("h3",d({},{id:"schema--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"schema = str (optional)")),(0,n.yg)("p",null,"Provide the name of a ",(0,n.yg)("a",d({parentName:"p"},{href:"/data-model/schemas"}),"schema")," to be used by the\nparser."),(0,n.yg)("p",null,"If a schema with a matching name is installed, the result will always have\nall fields from that schema."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fields that are specified in the schema, but did not appear in the input will be null."),(0,n.yg)("li",{parentName:"ul"},"Fields that appear in the input, but not in the schema will also be kept. ",(0,n.yg)("inlineCode",{parentName:"li"},"schema_only=true"),"\ncan be used to reject fields that are not in the schema.")),(0,n.yg)("p",null,"If the given schema does not exist, this option instead assigns the output schema name only."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," option is incompatible with the ",(0,n.yg)("inlineCode",{parentName:"p"},"selector")," option."),(0,n.yg)("h3",d({},{id:"selector--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"selector = str (optional)")),(0,n.yg)("p",null,"Designates a field value as ",(0,n.yg)("a",d({parentName:"p"},{href:"/data-model/schemas"}),"schema")," name with an\noptional dot-separated prefix."),(0,n.yg)("p",null,"The string is parsed as ",(0,n.yg)("inlineCode",{parentName:"p"},"<fieldname>[:<prefix>]"),". The ",(0,n.yg)("inlineCode",{parentName:"p"},"prefix")," is optional and\nwill be prepended to the field value to generate the schema name."),(0,n.yg)("p",null,"For example, the Suricata EVE JSON format includes a field\n",(0,n.yg)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,n.yg)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,n.yg)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,n.yg)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,n.yg)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"selector")," option is incompatible with the ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," option."),(0,n.yg)("h3",d({},{id:"schema_only--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,n.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,n.yg)("em",{parentName:"p"},"only")," the fields from that schema. If the schema name is obtained via a ",(0,n.yg)("inlineCode",{parentName:"p"},"selector"),"\nand it does not exist, this has no effect."),(0,n.yg)("p",null,"This option requires either ",(0,n.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,n.yg)("h3",d({},{id:"unflatten--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"unflatten = str (optional)")),(0,n.yg)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,n.yg)("p",null,"A popular example of this is the ",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/operators/read_zeek_json"}),"Zeek JSON")," format. It\nincludes the fields ",(0,n.yg)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"id.resp_p")," at\nthe top-level. The data is best modeled as an ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," record with four nested\nfields ",(0,n.yg)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,n.yg)("p",null,"Without an unflatten separator, the data looks like this:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"tql","data-theme":"github-dark-default"}),"Without unflattening"),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"orig_h"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"orig_p"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 10"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"resp_h"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"resp_p"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 5")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("p",null,"With the unflatten separator set to ",(0,n.yg)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"tql","data-theme":"github-dark-default"}),"With 'unflatten'"),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    orig_h"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    orig_p"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 10"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resp_h"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1.1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"    resp_p"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 5")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}b.isMDXComponent=!0}}]);