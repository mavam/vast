"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54633],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},y=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),g=i(n),c=r,m=g["".concat(l,".").concat(c)]||g[c]||d[c]||p;return n?t.createElement(m,o(o({ref:a},y),{},{components:n})):t.createElement(m,o({ref:a},y))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<p;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49415:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&y(e,n,a[n]);if(s)for(var n of s(a))i.call(a,n)&&y(e,n,a[n]);return e},d=(e,a)=>p(e,o(a)),c=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const m={sidebar_custom_props:{operator:{source:!0,transformation:!0}}},u="shell",h={unversionedId:"operators/shell",id:"version-v4.23/operators/shell",title:"shell",description:"Executes a system command and hooks its stdin and stdout into the pipeline.",source:"@site/versioned_docs/version-v4.23/operators/shell.md",sourceDirName:"operators",slug:"/operators/shell",permalink:"/v4.23/operators/shell",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/operators/shell.md",tags:[],version:"v4.23",frontMatter:{sidebar_custom_props:{operator:{source:!0,transformation:!0}}},sidebar:"docsSidebar",previous:{title:"set",permalink:"/v4.23/operators/set"},next:{title:"show",permalink:"/v4.23/operators/show"}},N={},f=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;command&gt;</code>",id:"command",level:3},{value:"Examples",id:"examples",level:2}],E={toc:f},F="wrapper";function b(e){var a=e,{components:n}=a,r=c(a,["components"]);return(0,t.yg)(F,d(g(g({},E),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",g({},{id:"shell"}),"shell"),(0,t.yg)("p",null,"Executes a system command and hooks its stdin and stdout into the pipeline."),(0,t.yg)("h2",g({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{}),"shell <command>\n")),(0,t.yg)("h2",g({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"shell")," operator executes the provided command by spawning a new process.\nThe input of the operator is forwarded to the child's standard input. Similarly,\nthe child's standard output is forwarded to the output of the operator."),(0,t.yg)("h3",g({},{id:"command"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<command>")),(0,t.yg)("p",null,"The command to execute and hook into the pipeline processing."),(0,t.yg)("p",null,"The value of ",(0,t.yg)("inlineCode",{parentName:"p"},"command")," is a single string. If you would like to pass a command\nline as you would on the shell, use single or double quotes for escaping, e.g.,\n",(0,t.yg)("inlineCode",{parentName:"p"},"shell 'jq -C'")," or ",(0,t.yg)("inlineCode",{parentName:"p"},'shell "jq -C"'),". The command is interpreted by ",(0,t.yg)("inlineCode",{parentName:"p"},"/bin/sh -c"),"."),(0,t.yg)("h2",g({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Show a live log from the ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-node")," service:"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{}),'shell "journalctl -u tenzir-node -f" | read json\n')),(0,t.yg)("p",null,"Consider the use case of converting CSV to JSON:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," 'read csv | write json'"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}})," jq"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," -C"))))),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"write json")," operator produces NDJSON. Piping this output to ",(0,t.yg)("inlineCode",{parentName:"p"},"jq")," generates a\ncolored, tree-structured variation that is (arguably) easier to read. Using the\n",(0,t.yg)("inlineCode",{parentName:"p"},"shell"),' operator, you can integrate Unix tools that rely on\nstdin/stdout for input/output as "native" operators that process raw bytes. For\nexample, in this pipeline:'),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{}),"write json | save stdout\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("a",g({parentName:"p"},{href:"/v4.23/operators/write"}),(0,t.yg)("inlineCode",{parentName:"a"},"write"))," operator produces raw bytes and ",(0,t.yg)("a",g({parentName:"p"},{href:"/v4.23/operators/save"}),(0,t.yg)("inlineCode",{parentName:"a"},"save")),"\naccepts raw bytes. The ",(0,t.yg)("inlineCode",{parentName:"p"},"shell")," operator therefore fits right in the middle:"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{}),'write json | shell "jq -C" | save stdout\n')),(0,t.yg)("p",null,"Using ",(0,t.yg)("a",g({parentName:"p"},{href:"/v4.23/language/user-defined-operators"}),"user-defined operators"),", we can\nexpose this (potentially verbose) post-processing more succinctly in the\npipeline language:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",g({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"yaml","data-theme":"github-dark-default"}),"tenzir.yaml"),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"tenzir"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"  operators"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"    jsonize"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'      write json | shell "jq -C" | save stdout'))))),(0,t.yg)("p",null,"Now you can use ",(0,t.yg)("inlineCode",{parentName:"p"},"jsonize")," as a custom operator in a pipeline:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," 'read csv | where field > 42 | jsonize'"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," <"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," file.csv"))))),(0,t.yg)("p",null,"This mechanism allows for wrapping also more complex invocation of tools.\n",(0,t.yg)("a",g({parentName:"p"},{href:"https://zeek.org"}),"Zeek"),", for example, converts packets into structured network\nlogs. Tenzir already has support for consuming Zeek output with the formats\n",(0,t.yg)("a",g({parentName:"p"},{href:"/v4.23/formats/zeek-json"}),(0,t.yg)("inlineCode",{parentName:"a"},"zeek-json"))," and\n",(0,t.yg)("a",g({parentName:"p"},{href:"/v4.23/formats/zeek-tsv"}),(0,t.yg)("inlineCode",{parentName:"a"},"zeek-tsv")),". But that requires attaching yourself\ndownstream of a Zeek instance. Sometimes you want instant Zeek analytics given a\nPCAP trace."),(0,t.yg)("p",null,"With the ",(0,t.yg)("inlineCode",{parentName:"p"},"shell")," operator, you can script a Zeek invocation and readily\npost-process the output with a rich set of operators, to filter, reshape,\nenrich, or route the logs as structured data. Let's define a ",(0,t.yg)("inlineCode",{parentName:"p"},"zeek")," operator for\nthat:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",g({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"yaml","data-theme":"github-dark-default"}),"tenzir.yaml"),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"tenzir"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"  operators"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"    zeek"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'      shell "zeek -r - LogAscii::output_to_stdout=T')),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),"             JSONStreaming::disable_default_logs=T")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),"             JSONStreaming::enable_log_rotation=F")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'             json-streaming-logs"')),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"      |"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}})," read zeek-json"))))),(0,t.yg)("p",null,"Processing a PCAP trace now is a matter of calling the ",(0,t.yg)("inlineCode",{parentName:"p"},"zeek")," operator:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"gunzip"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," -c"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," example.pcap.gz"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," |")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"  tenzir"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," 'zeek | select id.orig_h, id.orig_p, id.resp_h | head 3'"))))),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": {"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"orig_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"resp_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"resp_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": {"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"orig_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.168.100"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"resp_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"83.135.95.78"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"resp_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"id"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": {"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"orig_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.168.100"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"resp_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"83.135.95.78"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'"resp_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"22"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}}"))))),(0,t.yg)("p",null,"NB: because ",(0,t.yg)("inlineCode",{parentName:"p"},"zeek")," (= ",(0,t.yg)("inlineCode",{parentName:"p"},"shell"),") reads bytes, we can drop the implicit ",(0,t.yg)("inlineCode",{parentName:"p"},"load\nstdin")," source operator in this pipeline."))}b.isMDXComponent=!0}}]);