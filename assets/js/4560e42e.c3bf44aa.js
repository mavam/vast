"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46176],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>y,default:()=>C,frontMatter:()=>g,metadata:()=>f,toc:()=>v});var r=t(15680),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(p)for(var t of p(n))l.call(n,t)&&d(e,t,n[t]);return e},u=(e,n)=>i(e,o(n)),m=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&p)for(var r of p(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const g={sidebar_custom_props:{format:{parser:!0}}},y="grok",f={unversionedId:"formats/grok",id:"version-v4.28/formats/grok",title:"grok",description:"Parses a string using a grok-pattern, backed by regular expressions.",source:"@site/versioned_docs/version-v4.28/formats/grok.md",sourceDirName:"formats",slug:"/formats/grok",permalink:"/v4.28/formats/grok",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/formats/grok.md",tags:[],version:"v4.28",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"gelf",permalink:"/v4.28/formats/gelf"},next:{title:"json",permalink:"/v4.28/formats/json"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;input_pattern&gt;</code>",id:"input_pattern",level:3},{value:"Common Options (Parser)",id:"common-options-parser",level:3},{value:"<code>--include-unnamed</code>",id:"--include-unnamed",level:3},{value:"<code>--indexed-captures</code>",id:"--indexed-captures",level:3},{value:"<code>--pattern-definitions &lt;additional_patterns&gt;</code>",id:"--pattern-definitions-additional_patterns",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},N="wrapper";function C(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.yg)(N,u(c(c({},b),a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",c({},{id:"grok"}),"grok"),(0,r.yg)("p",null,"Parses a string using a ",(0,r.yg)("inlineCode",{parentName:"p"},"grok"),"-pattern, backed by regular expressions."),(0,r.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),"grok <input_pattern> [--pattern-definitions <additional_patterns>]\n     [--include-unnamed] [--indexed-captures]\n     [--merge] [--schema <schema>] [--selector <fieldname[:prefix]>]\n     [--schema-only] [--raw] [--unnest-separator <separator>]\n")),(0,r.yg)("h2",c({},{id:"description"}),"Description"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"grok")," uses a regular expression based parser similar to the\n",(0,r.yg)("a",c({parentName:"p"},{href:"https://www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html"}),"Logstash ",(0,r.yg)("inlineCode",{parentName:"a"},"grok")," plugin"),"\nin Elasticsearch. Tenzir ships with the same built-in patterns as Elasticsearch,\nfound ",(0,r.yg)("a",c({parentName:"p"},{href:"https://github.com/logstash-plugins/logstash-patterns-core/tree/main/patterns/ecs-v1"}),"here"),"."),(0,r.yg)("p",null,"In short, ",(0,r.yg)("inlineCode",{parentName:"p"},"<input_pattern>")," consists of replacement fields, that look like\n",(0,r.yg)("inlineCode",{parentName:"p"},"%{SYNTAX[:SEMANTIC[:CONVERSION]]}"),". ",(0,r.yg)("inlineCode",{parentName:"p"},"SYNTAX")," is a reference to a pattern,\neither built-in or user-defined through ",(0,r.yg)("inlineCode",{parentName:"p"},"--pattern-defintions"),".\n",(0,r.yg)("inlineCode",{parentName:"p"},"SEMANTIC")," is an identifier that names the field in the parsed record.\n",(0,r.yg)("inlineCode",{parentName:"p"},"CONVERSION")," is either ",(0,r.yg)("inlineCode",{parentName:"p"},"infer")," (default), ",(0,r.yg)("inlineCode",{parentName:"p"},"string")," (default with ",(0,r.yg)("inlineCode",{parentName:"p"},"--raw"),"),\n",(0,r.yg)("inlineCode",{parentName:"p"},"int"),", or ",(0,r.yg)("inlineCode",{parentName:"p"},"float"),"."),(0,r.yg)("p",null,"The supported regular expression syntax is the only supported by\n",(0,r.yg)("a",c({parentName:"p"},{href:"https://www.boost.org/doc/libs/1_81_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html"}),"Boost.Regex"),",\nwhich is effectively Perl-compatible."),(0,r.yg)("h3",c({},{id:"input_pattern"}),(0,r.yg)("inlineCode",{parentName:"h3"},"<input_pattern>")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"grok")," pattern used for matching. Must match the input in its entirety."),(0,r.yg)("h3",c({},{id:"common-options-parser"}),"Common Options (Parser)"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"grok")," parser supports the common ",(0,r.yg)("a",c({parentName:"p"},{href:"/v4.28/formats#parser-schema-inference"}),"schema inference options"),"."),(0,r.yg)("h3",c({},{id:"--include-unnamed"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--include-unnamed")),(0,r.yg)("p",null,"By default, only fields that were given a name with ",(0,r.yg)("inlineCode",{parentName:"p"},"SEMANTIC"),", or with\nthe regular expression named capture syntax ",(0,r.yg)("inlineCode",{parentName:"p"},"(?<name>...)")," are included\nin the resulting record."),(0,r.yg)("p",null,"With ",(0,r.yg)("inlineCode",{parentName:"p"},"--include-unnamed"),", replacement fields without a ",(0,r.yg)("inlineCode",{parentName:"p"},"SEMANTIC")," are included\nin the output, using their ",(0,r.yg)("inlineCode",{parentName:"p"},"SYNTAX")," value as the record field name."),(0,r.yg)("h3",c({},{id:"--indexed-captures"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--indexed-captures")),(0,r.yg)("p",null,"All subexpression captures are included in the output, with the ",(0,r.yg)("inlineCode",{parentName:"p"},"SEMANTIC")," used\nas the field name if possible, and the capture index otherwise."),(0,r.yg)("h3",c({},{id:"--pattern-definitions-additional_patterns"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--pattern-definitions <additional_patterns>")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<additional_patterns>")," can contain a user-defined newline-delimited list\nof patterns, where a line starts with the pattern name, followed by a space,\nand the ",(0,r.yg)("inlineCode",{parentName:"p"},"grok"),"-pattern for that pattern. For example, the built-in pattern\n",(0,r.yg)("inlineCode",{parentName:"p"},"INT")," is defined as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),"INT (?:[+-]?(?:[0-9]+))\n")),(0,r.yg)("h2",c({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Parse a fictional HTTP request log:"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),'# Example input:\n# 55.3.244.1 GET /index.html 15824 0.043\ngrok "%{IP:client} %{WORD:method} %{URIPATHPARAM:request} %{NUMBER:bytes} %{NUMBER:duration}"\n')))}C.isMDXComponent=!0}}]);