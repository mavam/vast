"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74441],{15680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>c});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},g=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),y=i(n),m=r,c=y["".concat(l,".").concat(m)]||y[m]||d[m]||p;return n?t.createElement(c,o(o({ref:a},g),{},{components:n})):t.createElement(c,o({ref:a},g))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[y]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<p;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58606:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>N,toc:()=>F});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,g=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,y=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&g(e,n,a[n]);if(s)for(var n of s(a))i.call(a,n)&&g(e,n,a[n]);return e},d=(e,a)=>p(e,o(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const c={},u="Zeek",N={unversionedId:"integrations/zeek",id:"version-v4.23/integrations/zeek",title:"Zeek",description:"The Zeek network monitor translates raw packets into",source:"@site/versioned_docs/version-v4.23/integrations/zeek.md",sourceDirName:"integrations",slug:"/integrations/zeek",permalink:"/v4.23/integrations/zeek",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/integrations/zeek.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Windows Event Logs",permalink:"/v4.23/integrations/windows-event-logs"},next:{title:"Contribute",permalink:"/v4.23/contribution"}},h={},F=[{value:"Ingest logs into a node",id:"ingest-logs-into-a-node",level:2},{value:"Easy-button import with the official Zeek package",id:"easy-button-import-with-the-official-zeek-package",level:3},{value:"Run an import pipeline when rotating logs",id:"run-an-import-pipeline-when-rotating-logs",level:3},{value:"Run Zeek on a packet pipeline",id:"run-zeek-on-a-packet-pipeline",level:2},{value:"Process logs with a pipeline on the command line",id:"process-logs-with-a-pipeline-on-the-command-line",level:2},{value:"Generate Zeek TSV from arbitrary data",id:"generate-zeek-tsv-from-arbitrary-data",level:2}],f={toc:F},k="wrapper";function b(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(k,d(y(y({},f),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"zeek"}),"Zeek"),(0,t.yg)("p",null,"The ",(0,t.yg)("a",y({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," network monitor translates raw packets into\nstructured logs."),(0,t.yg)("p",null,"Tenzir supports various Zeek use cases, such as continuous ingestion, ad-hoc log\nfile processing, and even generating Zeek logs."),(0,t.yg)("admonition",y({},{title:"Zeek Blog Post Series",type:"info"}),(0,t.yg)("p",{parentName:"admonition"},"We wrote several Zeek blog posts in the past that cover various aspects of the\nZeek integration in much more detail."),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",y({parentName:"li"},{href:"/blog/mobilizing-zeek-logs"}),"Mobilizing Zeek Logs")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",y({parentName:"li"},{href:"/blog/zeek-and-ye-shall-pipe"}),"Zeek and Ye Shall Pipe")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",y({parentName:"li"},{href:"/blog/shell-yeah-supercharging-zeek-and-suricata-with-tenzir"}),"Shell Yeah! Supercharging Zeek and Suricata with Tenzir")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",y({parentName:"li"},{href:"/blog/native-zeek-log-rotation-and-shipping"}),"Native Zeek Log Rotation & Shipping")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",y({parentName:"li"},{href:"/blog/tenzir-for-splunk-users"}),"Tenzir for Splunk Users")))),(0,t.yg)("p",null,"Zeek logs come in ",(0,t.yg)("a",y({parentName:"p"},{href:"/blog/mobilizing-zeek-logs"}),"three forms")," in practice, all of\nwhich Tenzir can parse natively:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",y({parentName:"li"},{href:"/v4.23/formats/zeek-tsv"}),(0,t.yg)("inlineCode",{parentName:"a"},"zeek-tsv")),": Tab-Separated Values (TSV) with a\ncustom header."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",y({parentName:"li"},{href:"/v4.23/formats/zeek-tsv"}),(0,t.yg)("inlineCode",{parentName:"a"},"zeek-json")),": One NDJSON file for all log types\n(aka. ",(0,t.yg)("em",{parentName:"li"},"JSON Streaming"),") including an extra ",(0,t.yg)("inlineCode",{parentName:"li"},"_path")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"_write_ts")," field."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",y({parentName:"li"},{href:"/v4.23/formats/json"}),(0,t.yg)("inlineCode",{parentName:"a"},"json")),": One NDJSON file per log type.")),(0,t.yg)("h2",y({},{id:"ingest-logs-into-a-node"}),"Ingest logs into a node"),(0,t.yg)("p",null,"To ingest Zeek logs into a Tenzir node, you have multiple options."),(0,t.yg)("h3",y({},{id:"easy-button-import-with-the-official-zeek-package"}),"Easy-button import with the official Zeek package"),(0,t.yg)("p",null,"Our official ",(0,t.yg)("a",y({parentName:"p"},{href:"https://github.com/tenzir/zeek-tenzir"}),"Zeek package")," makes it easy\nto ship your Zeek logs to a Tenzir node. Install the package first:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"zkg"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," install"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," zeek-tenzir"))))),(0,t.yg)("p",null,"Then add this to your ",(0,t.yg)("inlineCode",{parentName:"p"},"$PREFIX/share/zeek/site/local.zeek")," to send all logs that\nZeek produces to a Tenzir node:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"zeek","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"zeek","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"@load tenzir/import")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"# Uncomment to keep the original Zeek logs.")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"# redef Tenzir::delete_after_postprocesing=F;"))))),(0,t.yg)("p",null,"For ad-hoc command line processing you can also pass ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir/import")," to a Zeek\ninvocation:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#8B949E"}}),"# Ship logs to it and delete the original files.")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"zeek"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -r"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," trace.pcap"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir/import")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#8B949E"}}),"# Ship logs to it and keep the original files.")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"zeek"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," -r"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," trace.pcap"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," tenzir/import"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," Tenzir::delete_after_postprocesing=F"))))),(0,t.yg)("p",null,"For further details on how to use our Zeek package read our blog post ",(0,t.yg)("a",y({parentName:"p"},{href:"/blog/native-zeek-log-rotation-and-shipping"}),"Native\nZeek Log Rotation & Shipping"),"."),(0,t.yg)("h3",y({},{id:"run-an-import-pipeline-when-rotating-logs"}),"Run an import pipeline when rotating logs"),(0,t.yg)("p",null,"If you cannot use our Zeek package, it is still possible to let Zeek trigger an\nimport pipeline upon rotation. Zeek's ",(0,t.yg)("a",y({parentName:"p"},{href:"https://docs.zeek.org/en/master/frameworks/logging.html"}),"logging\nframework")," can execute\na shell script whenever it rotates a log file."),(0,t.yg)("p",null,"This requires setting ",(0,t.yg)("inlineCode",{parentName:"p"},"Log::default_rotation_interval")," to a non-zero value. The\ndefault of ",(0,t.yg)("inlineCode",{parentName:"p"},"0 secs")," means that log rotation is disabled. Add this to\n",(0,t.yg)("inlineCode",{parentName:"p"},"$PREFIX/share/zeek/site/local.zeek"),", which is the place for local configuration\nchanges:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"redef Log::default_rotation_interval = 1 day;\n")),(0,t.yg)("p",null,"Then redefine\n",(0,t.yg)("a",y({parentName:"p"},{href:"https://docs.zeek.org/en/master/scripts/base/frameworks/logging/main.zeek.html#id-Log::default_rotation_postprocessor_cmd"}),(0,t.yg)("inlineCode",{parentName:"a"},"Log::default_rotation_postprocessor_cmd")),"\nto point to your shell script, e.g., ",(0,t.yg)("inlineCode",{parentName:"p"},"/usr/local/bin/ingest"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"redef Log::default_rotation_postprocessor_cmd=/usr/local/bin/ingest;\n")),(0,t.yg)("p",null,"Here is an example ",(0,t.yg)("inlineCode",{parentName:"p"},"ingest")," script that imports all files into a Tenzir node:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",y({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"bash","data-theme":"github-dark-default"}),"ingest"),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#8B949E"}}),"#!/bin/sh")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"file_name"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"$1"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"base_name"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"$2"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"from"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"$3"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"to"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"$4"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"terminating"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"$5"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"writer"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"$6"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"if"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," [ "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"$writer"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ascii"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," ]; "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"then")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  format"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"zeek-tsv"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"elif"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," [ "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"$writer"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "json"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," ]; "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"then")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  format"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"json --schema zeek.'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"$base_name"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"else")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"  echo"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "unsupported Zeek writer: '),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"$writer"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"  exit"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 1")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"fi")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"pipeline"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"from file '),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),'\\"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"$file_name"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),'\\"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," read "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"$format"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' | import"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"$pipeline"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'))))),(0,t.yg)("p",null,"Our blog post ",(0,t.yg)("a",y({parentName:"p"},{href:"/blog/native-zeek-log-rotation-and-shipping"}),"Native Zeek Log Rotation &\nShipping")," provides further details\non this method."),(0,t.yg)("h2",y({},{id:"run-zeek-on-a-packet-pipeline"}),"Run Zeek on a packet pipeline"),(0,t.yg)("p",null,"You can run Zeek on a pipeline of PCAP packets and continue processing the logs\nin the same pipeline. A stock Tenzir installation comes with a\n",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.23/language/user-defined-operators"}),"user-defined")," ",(0,t.yg)("inlineCode",{parentName:"p"},"zeek")," operator that looks\nas follows:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"tenzir"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"  operators"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"    zeek"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'      shell "eval \\"$(zkg env)\\" &&')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"             zeek -r - LogAscii::output_to_stdout=T")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"             JSONStreaming::disable_default_logs=T")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"             JSONStreaming::enable_log_rotation=F")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'             json-streaming-logs"')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"      |"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}})," read zeek-json"))))),(0,t.yg)("p",null,"This allows you run Zeek on a packet trace as follows:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," 'load /path/to/trace.pcap | zeek'"))))),(0,t.yg)("p",null,"You can also perform more elaborate packet filtering by going through the\n",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.23/formats/pcap"}),(0,t.yg)("inlineCode",{parentName:"a"},"pcap"))," parser:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," 'from /path/to/trace.pcap")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"       | decapsulate")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'       | where 10.0.0.0/8 || community == "1:YXWfTYEyYLKVv5Ge4WqijUnKTrM="')),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"       | write pcap")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"       | zeek'"))))),(0,t.yg)("p",null,"Read the ",(0,t.yg)("a",y({parentName:"p"},{href:"/blog/shell-yeah-supercharging-zeek-and-suricata-with-tenzir"}),"in-depth blog\npost")," for more\ndetails about the inner workings of the ",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.23/operators/shell"}),(0,t.yg)("inlineCode",{parentName:"a"},"shell")),"\noperator."),(0,t.yg)("h2",y({},{id:"process-logs-with-a-pipeline-on-the-command-line"}),"Process logs with a pipeline on the command line"),(0,t.yg)("p",null,"Zeek ships with a helper utility ",(0,t.yg)("inlineCode",{parentName:"p"},"zeek-cut")," that operators on Zeek's\ntab-separated logs. For example, to extract the host pairs from a conn log:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"zeek-cut"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," id.orig_h"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," id.resp_h"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," <"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," conn.log"))))),(0,t.yg)("p",null,"The list of arguments to ",(0,t.yg)("inlineCode",{parentName:"p"},"zeek-cut")," are the column names of the log. The\n",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.23/operators/select"}),(0,t.yg)("inlineCode",{parentName:"a"},"select"))," operator performs the equivalent in Tenzir\nafter we parse the logs as ",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.23/formats/zeek-tsv"}),(0,t.yg)("inlineCode",{parentName:"a"},"zeek-tsv")),":"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," 'read zeek-tsv | select zeek-cut id.orig_h id.resp_h'"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," <"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," conn.log"))))),(0,t.yg)("p",null,"Since pipelines are ",(0,t.yg)("em",{parentName:"p"},"multi-schema")," and the Zeek TSV parser is aware of log\nboundaries, you can also concatenate logs of various types:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"cat"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," *"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),".log"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}})," tenzir"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," 'read zeek-tsv | select zeek-cut id.orig_h id.resp_h'"))))),(0,t.yg)("h2",y({},{id:"generate-zeek-tsv-from-arbitrary-data"}),"Generate Zeek TSV from arbitrary data"),(0,t.yg)("p",null,"The ",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.23/formats/zeek-tsv"}),(0,t.yg)("inlineCode",{parentName:"a"},"zeek-tsv"))," is not only a parser, but also a\nprinter. This means you can render any data as Zeek TSV log."),(0,t.yg)("p",null,"For example, print the Tenzir version as Zeek TSV log:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," 'show version | write zeek-tsv'"))))),(0,t.yg)("p",null,"This yields the following output:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"#separator \\x09\n#set_separator  ,\n#empty_field    (empty)\n#unset_field    -\n#path   tenzir.version\n#open   2023-12-16-08-47-12.372511\n#fields version major   minor   patch   tweak\n#types  string  count   count   count   count\nv4.6.4-155-g0b75e93026  4   6   4   155\n#close  2023-12-16-08-47-12.372736\n")))}b.isMDXComponent=!0}}]);