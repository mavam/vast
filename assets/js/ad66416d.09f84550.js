"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74099],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},21446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>h,toc:()=>v});var r=t(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(s)for(var t of s(n))p.call(n,t)&&c(e,t,n[t]);return e},u=(e,n)=>a(e,i(n)),g=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={sidebar_custom_props:{operator:{source:!0,transformation:!0}}},y="shell",h={unversionedId:"operators/shell",id:"version-v4.20/operators/shell",title:"shell",description:"Executes a system command and hooks its stdin and stdout into the pipeline.",source:"@site/versioned_docs/version-v4.20/operators/shell.md",sourceDirName:"operators",slug:"/operators/shell",permalink:"/v4.20/operators/shell",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/shell.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{source:!0,transformation:!0}}},sidebar:"docsSidebar",previous:{title:"set",permalink:"/v4.20/operators/set"},next:{title:"show",permalink:"/v4.20/operators/show"}},f={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;command&gt;</code>",id:"command",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},N="wrapper";function w(e){var n=e,{components:t}=n,o=g(n,["components"]);return(0,r.yg)(N,u(d(d({},b),o),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",d({},{id:"shell"}),"shell"),(0,r.yg)("p",null,"Executes a system command and hooks its stdin and stdout into the pipeline."),(0,r.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),"shell <command>\n")),(0,r.yg)("h2",d({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"shell")," operator executes the provided command by spawning a new process.\nThe input of the operator is forwarded to the child's standard input. Similarly,\nthe child's standard output is forwarded to the output of the operator."),(0,r.yg)("h3",d({},{id:"command"}),(0,r.yg)("inlineCode",{parentName:"h3"},"<command>")),(0,r.yg)("p",null,"The command to execute and hook into the pipeline processing."),(0,r.yg)("p",null,"The value of ",(0,r.yg)("inlineCode",{parentName:"p"},"command")," is a single string. If you would like to pass a command\nline as you would on the shell, use single or double quotes for escaping, e.g.,\n",(0,r.yg)("inlineCode",{parentName:"p"},"shell 'jq -C'")," or ",(0,r.yg)("inlineCode",{parentName:"p"},'shell "jq -C"'),". The command is interpreted by ",(0,r.yg)("inlineCode",{parentName:"p"},"/bin/sh -c"),"."),(0,r.yg)("h2",d({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Show a live log from the ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir-node")," service:"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),'shell "journalctl -u tenzir-node -f" | read json\n')),(0,r.yg)("p",null,"Consider the use case of converting CSV to JSON:"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir 'read csv | write json' | jq -C\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"write json")," operator produces NDJSON. Piping this output to ",(0,r.yg)("inlineCode",{parentName:"p"},"jq")," generates a\ncolored, tree-structured variation that is (arguably) easier to read. Using the\n",(0,r.yg)("inlineCode",{parentName:"p"},"shell"),' operator, you can integrate Unix tools that rely on\nstdin/stdout for input/output as "native" operators that process raw bytes. For\nexample, in this pipeline:'),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),"write json | save stdout\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("a",d({parentName:"p"},{href:"/v4.20/operators/write"}),(0,r.yg)("inlineCode",{parentName:"a"},"write"))," operator produces raw bytes and ",(0,r.yg)("a",d({parentName:"p"},{href:"/v4.20/operators/save"}),(0,r.yg)("inlineCode",{parentName:"a"},"save")),"\naccepts raw bytes. The ",(0,r.yg)("inlineCode",{parentName:"p"},"shell")," operator therefore fits right in the middle:"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),'write json | shell "jq -C" | save stdout\n')),(0,r.yg)("p",null,"Using ",(0,r.yg)("a",d({parentName:"p"},{href:"/v4.20/language/user-defined-operators"}),"user-defined operators"),", we can\nexpose this (potentially verbose) post-processing more succinctly in the\npipeline language:"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),'tenzir:\n  operators:\n    jsonize:\n      write json | shell "jq -C" | save stdout\n')),(0,r.yg)("p",null,"Now you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"jsonize")," as a custom operator in a pipeline:"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir 'read csv | where field > 42 | jsonize' < file.csv\n")),(0,r.yg)("p",null,"This mechanism allows for wrapping also more complex invocation of tools.\n",(0,r.yg)("a",d({parentName:"p"},{href:"https://zeek.org"}),"Zeek"),", for example, converts packets into structured network\nlogs. Tenzir already has support for consuming Zeek output with the formats\n",(0,r.yg)("a",d({parentName:"p"},{href:"/v4.20/formats/zeek-json"}),(0,r.yg)("inlineCode",{parentName:"a"},"zeek-json"))," and\n",(0,r.yg)("a",d({parentName:"p"},{href:"/v4.20/formats/zeek-tsv"}),(0,r.yg)("inlineCode",{parentName:"a"},"zeek-tsv")),". But that requires attaching yourself\ndownstream of a Zeek instance. Sometimes you want instant Zeek analytics given a\nPCAP trace."),(0,r.yg)("p",null,"With the ",(0,r.yg)("inlineCode",{parentName:"p"},"shell")," operator, you can script a Zeek invocation and readily\npost-process the output with a rich set of operators, to filter, reshape,\nenrich, or route the logs as structured data. Let's define a ",(0,r.yg)("inlineCode",{parentName:"p"},"zeek")," operator for\nthat:"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),'tenzir:\n  operators:\n    zeek:\n      shell "zeek -r - LogAscii::output_to_stdout=T\n             JSONStreaming::disable_default_logs=T\n             JSONStreaming::enable_log_rotation=F\n             json-streaming-logs"\n      | read zeek-json\n')),(0,r.yg)("p",null,"Processing a PCAP trace now is a matter of calling the ",(0,r.yg)("inlineCode",{parentName:"p"},"zeek")," operator:"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{className:"language-bash"}),"gunzip -c example.pcap.gz |\n  tenzir 'zeek | select id.orig_h, id.orig_p, id.resp_h | head 3'\n")),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{className:"language-json"}),'{"id": {"orig_h": null, "resp_h": null, "resp_p": null}}\n{"id": {"orig_h": "192.168.168.100", "resp_h": "83.135.95.78", "resp_p": 0}}\n{"id": {"orig_h": "192.168.168.100", "resp_h": "83.135.95.78", "resp_p": 22}}\n')),(0,r.yg)("p",null,"NB: because ",(0,r.yg)("inlineCode",{parentName:"p"},"zeek")," (= ",(0,r.yg)("inlineCode",{parentName:"p"},"shell"),") reads bytes, we can drop the implicit ",(0,r.yg)("inlineCode",{parentName:"p"},"load\nstdin")," source operator in this pipeline."))}w.isMDXComponent=!0}}]);