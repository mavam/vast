"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51209],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>m});var t=n(96540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},y=function(e){var a=l(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),c=l(n),g=o,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return n?t.createElement(m,p(p({ref:a},y),{},{components:n})):t.createElement(m,p({ref:a},y))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=g;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<r;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},77736:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>I});var t=n(15680),o=Object.defineProperty,r=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&y(e,n,a[n]);if(i)for(var n of i(a))l.call(a,n)&&y(e,n,a[n]);return e},d=(e,a)=>r(e,p(a)),g=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const m={},u="to_hive",b={unversionedId:"tql2/operators/to_hive",id:"version-v4.24/tql2/operators/to_hive",title:"to_hive",description:"Writes events to a URI using hive partitioning.",source:"@site/versioned_docs/version-v4.24/tql2/operators/to_hive.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/to_hive",permalink:"/tql2/operators/to_hive",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/to_hive.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"to_azure_log_analytics",permalink:"/tql2/operators/to_azure_log_analytics"},next:{title:"to_splunk",permalink:"/tql2/operators/to_splunk"}},N={},I=[{value:"Description",id:"description",level:2},{value:"<code>uri: string</code>",id:"uri-string",level:3},{value:"<code>partition_by = list&lt;field&gt;</code>",id:"partition_by--listfield",level:3},{value:"<code>format = string</code>",id:"format--string",level:3},{value:"<code>timeout = duration (optional)</code>",id:"timeout--duration-optional",level:3},{value:"<code>max_size = int (optional)</code>",id:"max_size--int-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Partition by a single field into local JSON files",id:"partition-by-a-single-field-into-local-json-files",level:3},{value:"Write a Parquet file into Azure Blob Store",id:"write-a-parquet-file-into-azure-blob-store",level:3},{value:"Write partitioned JSON into an S3 bucket",id:"write-partitioned-json-into-an-s3-bucket",level:3}],h={toc:I},D="wrapper";function j(e){var a=e,{components:n}=a,o=g(a,["components"]);return(0,t.yg)(D,d(c(c({},h),o),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"to_hive"}),"to_hive"),(0,t.yg)("p",null,"Writes events to a URI using hive partitioning."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_hive"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," uri"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, partition_by"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"list"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"<"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"field"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),">"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", format"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [timeout"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration, max_size"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"int]"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:"to_hive uri:string, partition_by=list<field>, format=string, [timeout=duration, max_size=int]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"Hive partitioning is a partitioning scheme where a set of fields is used to\npartition events. For each combination of these fields, a directory is derived\nunder which all events with the same field values will be stored. For example,\nif the events are partitioned by the fields ",(0,t.yg)("inlineCode",{parentName:"p"},"year")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"month"),", then the files\nin the directory ",(0,t.yg)("inlineCode",{parentName:"p"},"/year=2024/month=10")," will contain all events where\n",(0,t.yg)("inlineCode",{parentName:"p"},"year == 2024")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"month == 10"),"."),(0,t.yg)("h3",c({},{id:"uri-string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"uri: string")),(0,t.yg)("p",null,"The base URI for all partitions."),(0,t.yg)("h3",c({},{id:"partition_by--listfield"}),(0,t.yg)("inlineCode",{parentName:"h3"},"partition_by = list<field>")),(0,t.yg)("p",null,"A list of fields that will be used for partitioning. Note that these fields will\nbe elided from the output, as their value is already specified by the path."),(0,t.yg)("h3",c({},{id:"format--string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"format = string")),(0,t.yg)("p",null,"The name of the format that will be used for writing, for example ",(0,t.yg)("inlineCode",{parentName:"p"},"json")," or\n",(0,t.yg)("inlineCode",{parentName:"p"},"parquet"),". This will also be used for the file extension."),(0,t.yg)("h3",c({},{id:"timeout--duration-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"timeout = duration (optional)")),(0,t.yg)("p",null,"The time after which a new file will be opened for the same partition group.\nDefaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"5min"),"."),(0,t.yg)("h3",c({},{id:"max_size--int-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"max_size = int (optional)")),(0,t.yg)("p",null,"The total file size after which a new file will be opened for the same partition\ngroup. Note that files will typically be slightly larger than this limit,\nbecause it opens a new file when only after it is exceeded. Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"100M"),"."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("h3",c({},{id:"partition-by-a-single-field-into-local-json-files"}),"Partition by a single field into local JSON files"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," [{a"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, {a"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, {a"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_hive"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp/out/"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", partition_by"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"[a], format"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"json"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"// This pipeline produces two files:")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"// -> /tmp/out/a=0/1.json:")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),'//    {"b": 0}')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),'//    {"b": 1}')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"// -> /tmp/out/a=1/2.json:")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),'//    {"b": 2}'))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'from [{a: 0, b: 0}, {a: 0, b: 1}, {a: 1, b: 2}]\nto_hive "/tmp/out/", partition_by=[a], format="json"\n// This pipeline produces two files:\n// -> /tmp/out/a=0/1.json:\n//    {"b": 0}\n//    {"b": 1}\n// -> /tmp/out/a=1/2.json:\n//    {"b": 2}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",c({},{id:"write-a-parquet-file-into-azure-blob-store"}),"Write a Parquet file into Azure Blob Store"),(0,t.yg)("p",null,"Write as Parquet into the Azure Blob Filesystem, partitioned by year, month and\nday."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_hive"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "abfs://domain/bucket"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", partition_by"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"[year, month, day], format"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"parquet"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"// -> abfs://domain/bucket/year=<year>/month=<month>/day=<day>/<num>.parquet"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'to_hive "abfs://domain/bucket", partition_by=[year, month, day], format="parquet"\n// -> abfs://domain/bucket/year=<year>/month=<month>/day=<day>/<num>.parquet',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",c({},{id:"write-partitioned-json-into-an-s3-bucket"}),"Write partitioned JSON into an S3 bucket"),(0,t.yg)("p",null,"Write JSON into S3, partitioned by year and month, opening a new file after\n1\u2009GB."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"year "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," ts"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"year"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"()")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"month "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," ts"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"month"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"()")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_hive"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "s3://my-bucket/some/subdirectory"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  partition_by"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"[year, month],")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  format"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"json"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  max_size"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1G")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"// -> s3://my-bucket/some/subdirectory/year=<year>/month=<month>/<num>.json"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'year = ts.year()\nmonth = ts.month()\nto_hive "s3://my-bucket/some/subdirectory",\n  partition_by=[year, month],\n  format="json",\n  max_size=1G\n// -> s3://my-bucket/some/subdirectory/year=<year>/month=<month>/<num>.json',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}j.isMDXComponent=!0}}]);