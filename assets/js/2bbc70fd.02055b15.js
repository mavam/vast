"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28429],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=p(n),c=r,m=y["".concat(l,".").concat(c)]||y[c]||u[c]||o;return n?t.createElement(m,s(s({ref:a},d),{},{components:n})):t.createElement(m,s({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[y]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21267:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>g,default:()=>C,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var t=n(15680),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,y=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&d(e,n,a[n]);if(i)for(var n of i(a))p.call(a,n)&&d(e,n,a[n]);return e},u=(e,a)=>o(e,s(a)),c=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&p.call(e,t)&&(n[t]=e[t]);return n};const m={sidebar_custom_props:{format:{parser:!0}}},g="kv",f={unversionedId:"formats/kv",id:"version-v4.23/formats/kv",title:"kv",description:"Reads key-value pairs by splitting strings based on regular expressions.",source:"@site/versioned_docs/version-v4.23/formats/kv.md",sourceDirName:"formats",slug:"/formats/kv",permalink:"/formats/kv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/formats/kv.md",tags:[],version:"v4.23",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"json",permalink:"/formats/json"},next:{title:"leef",permalink:"/formats/leef"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Quoted Values",id:"quoted-values",level:3},{value:"<code>&lt;field_split&gt;</code>",id:"field_split",level:3},{value:"<code>&lt;value_split&gt;</code>",id:"value_split",level:3},{value:"Common Options (Parser)",id:"common-options-parser",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},N="wrapper";function C(e){var a=e,{components:n}=a,r=c(a,["components"]);return(0,t.yg)(N,u(y(y({},b),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"kv"}),"kv"),(0,t.yg)("p",null,"Reads key-value pairs by splitting strings based on regular expressions."),(0,t.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"kv [<field_split>] [<value_split>]\n   [--schema <schema>] [--selector <selector>] [--schema-only]\n   [--merge] [--raw] [--unnest-separator <nested-key-separator>]\n")),(0,t.yg)("h2",y({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"kv")," parser is usually used with the ",(0,t.yg)("a",y({parentName:"p"},{href:"/operators/parse"}),(0,t.yg)("inlineCode",{parentName:"a"},"parse")),"\noperator to extract key-value pairs from a given string, in particular if the\nkeys are not known before."),(0,t.yg)("p",null,"Incoming strings are first split into fields according to ",(0,t.yg)("inlineCode",{parentName:"p"},"<field_split>"),". This\ncan be a regular expression. For example, the input ",(0,t.yg)("inlineCode",{parentName:"p"},"foo: bar, baz: 42")," can be\nsplit into ",(0,t.yg)("inlineCode",{parentName:"p"},"foo: bar")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"baz: 42")," with the ",(0,t.yg)("inlineCode",{parentName:"p"},'",\\s*"')," (a comma, followed by any\namount of whitespace) as the field splitter. Note that the matched separators\nare removed when splitting a string."),(0,t.yg)("p",null,"Afterwards, the extracted fields are split into their key and value by\n",(0,t.yg)("inlineCode",{parentName:"p"},"<value_split>"),", which can again be a regular expression. In our example,\n",(0,t.yg)("inlineCode",{parentName:"p"},'":\\s*"')," could be used to split ",(0,t.yg)("inlineCode",{parentName:"p"},"foo: bar")," into the key ",(0,t.yg)("inlineCode",{parentName:"p"},"foo")," and its value\n",(0,t.yg)("inlineCode",{parentName:"p"},"bar"),", and similarly ",(0,t.yg)("inlineCode",{parentName:"p"},"baz: 42")," into ",(0,t.yg)("inlineCode",{parentName:"p"},"baz")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"42"),". The result would thus be\n",(0,t.yg)("inlineCode",{parentName:"p"},'{"foo": "bar", "baz": 42}'),". If the regex matches multiple substrings, only the\nfirst match is used."),(0,t.yg)("p",null,"The supported regular expression syntax is\n",(0,t.yg)("a",y({parentName:"p"},{href:"https://github.com/google/re2/wiki/Syntax"}),"RE2"),". In particular, this means that\nlookahead ",(0,t.yg)("inlineCode",{parentName:"p"},"(?=...)")," and lookbehind ",(0,t.yg)("inlineCode",{parentName:"p"},"(?<=...)")," are not supported by ",(0,t.yg)("inlineCode",{parentName:"p"},"kv")," at\nthe moment. However, if the regular expression has a capture group, it is assumed\nthat only the content of the capture group shall be used as the separator. This\nmeans that unsupported regular expressions such as ",(0,t.yg)("inlineCode",{parentName:"p"},"(?=foo)bar(?<=baz)")," can be\neffectively expressed as ",(0,t.yg)("inlineCode",{parentName:"p"},"foo(bar)baz")," instead."),(0,t.yg)("h3",y({},{id:"quoted-values"}),"Quoted Values"),(0,t.yg)("p",null,"The parser is aware of double-quotes (",(0,t.yg)("inlineCode",{parentName:"p"},'"'),"). If the ",(0,t.yg)("inlineCode",{parentName:"p"},"<field_split>")," or\n",(0,t.yg)("inlineCode",{parentName:"p"},"<value_split>")," are found within enclosing quotes, they are not considered matches."),(0,t.yg)("p",null,"This means that both the key and the value may be enclosed in double-quotes."),(0,t.yg)("p",null,"For example, given ",(0,t.yg)("inlineCode",{parentName:"p"},"\\s*,\\s*")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"="),", the input"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),'"key"="nested = value",key2="value, and more"\n')),(0,t.yg)("p",null,"will parse as"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),'  "key"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," : "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"nested = value"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),'  "key2"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," : "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"value, and more"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",y({},{id:"field_split"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<field_split>")),(0,t.yg)("p",null,"The regular expression used to separate individual fields. The default is ",(0,t.yg)("inlineCode",{parentName:"p"},"\\s"),"."),(0,t.yg)("h3",y({},{id:"value_split"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<value_split>")),(0,t.yg)("p",null,"The regular expression used to separate a key from its value. The default is ",(0,t.yg)("inlineCode",{parentName:"p"},"="),"."),(0,t.yg)("h3",y({},{id:"common-options-parser"}),"Common Options (Parser)"),(0,t.yg)("p",null,"The XSV parser supports the common ",(0,t.yg)("a",y({parentName:"p"},{href:"/formats#parser-schema-inference"}),"schema inference options"),"."),(0,t.yg)("h2",y({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Extract comma-separated key-value pairs from ",(0,t.yg)("inlineCode",{parentName:"p"},"foo:1, bar:2,baz:3 , qux:4"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),'kv "\\s*,\\s*" ":"\n')),(0,t.yg)("p",null,"Extract key-value pairs from strings such as ",(0,t.yg)("inlineCode",{parentName:"p"},"FOO: C:\\foo BAR_BAZ: hello world"),".\nThis requires lookahead because the fields are separated by whitespace, but not\nevery whitespace acts as a field separator. Instead, we only want to split if\nthe whitespace is followed by ",(0,t.yg)("inlineCode",{parentName:"p"},"[A-Z][A-Z_]+:"),", i.e., at least two uppercase\ncharacters followed by a colon. We can express this as ",(0,t.yg)("inlineCode",{parentName:"p"},'"(\\s+)[A-Z][A-Z_]+:"'),",\nwhich yields ",(0,t.yg)("inlineCode",{parentName:"p"},"FOO: C:\\foo")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"BAR_BAZ: hello world"),". We then split the key\nfrom its value with ",(0,t.yg)("inlineCode",{parentName:"p"},'":\\s*"')," (only the first match is used to split them). The\nfinal result is thus ",(0,t.yg)("inlineCode",{parentName:"p"},'{"FOO": "C:\\foo", "BAR_BAZ": "hello world"}'),"."),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),'kv "(\\s+)[A-Z][A-Z_]+:" ":\\s*"\n')))}C.isMDXComponent=!0}}]);