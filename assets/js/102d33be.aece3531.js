"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93323],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>d});var s=n(96540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,s,t=function(e,a){if(null==e)return{};var n,s,t={},p=Object.keys(e);for(s=0;s<p.length;s++)n=p[s],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(s=0;s<p.length;s++)n=p[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=s.createContext({}),y=function(e){var a=s.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=y(e.components);return s.createElement(l.Provider,{value:a},e.children)},m="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},g=s.forwardRef((function(e,a){var n=e.components,t=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=y(n),g=t,d=m["".concat(l,".").concat(g)]||m[g]||i[g]||p;return n?s.createElement(d,r(r({ref:a},c),{},{components:n})):s.createElement(d,r({ref:a},c))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var p=n.length,r=new Array(p);r[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:t,r[1]=o;for(var y=2;y<p;y++)r[y]=n[y];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8775:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>F,contentTitle:()=>E,default:()=>v,frontMatter:()=>d,metadata:()=>N,toc:()=>D});var s=n(15680),t=Object.defineProperty,p=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,m=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&c(e,n,a[n]);return e},i=(e,a)=>p(e,r(a)),g=(e,a)=>{var n={};for(var s in e)l.call(e,s)&&a.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&o)for(var s of o(e))a.indexOf(s)<0&&y.call(e,s)&&(n[s]=e[s]);return n};const d={sidebar_custom_props:{format:{parser:!0}}},E="cef",N={unversionedId:"formats/cef",id:"version-v4.24/formats/cef",title:"cef",description:"Parses events in the Common Event Format (CEF).",source:"@site/versioned_docs/version-v4.24/formats/cef.md",sourceDirName:"formats",slug:"/formats/cef",permalink:"/formats/cef",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/formats/cef.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"bitz",permalink:"/formats/bitz"},next:{title:"csv",permalink:"/formats/csv"}},F={},D=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Common Options (Parser)",id:"common-options-parser",level:3},{value:"Examples",id:"examples",level:2}],u={toc:D},f="wrapper";function v(e){var a=e,{components:n}=a,t=g(a,["components"]);return(0,s.yg)(f,i(m(m({},u),t),{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",m({},{id:"cef"}),"cef"),(0,s.yg)("p",null,"Parses events in the Common Event Format (CEF)."),(0,s.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,s.yg)("p",null,"Parser:"),(0,s.yg)("pre",null,(0,s.yg)("code",m({parentName:"pre"},{}),"cef [--merge] [--schema <schema>] [--selector <fieldname[:prefix]>]\n    [--schema-only] [--raw] [--unnest-separator <separator>]\n")),(0,s.yg)("h2",m({},{id:"description"}),"Description"),(0,s.yg)("p",null,"The ",(0,s.yg)("a",m({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"Common Event Format (CEF)")," is a text-based event format that\noriginally stems from ArcSight. It is line-based and human readable. The first 7\nfields of a CEF event are always the same, and the 8th ",(0,s.yg)("em",{parentName:"p"},"extension")," field is an\noptional list of key-value pairs:"),(0,s.yg)("pre",null,(0,s.yg)("code",m({parentName:"pre"},{}),"CEF:Version|Device Vendor|Device Product|Device Version|Device Event Class ID|Name|Severity|[Extension]\n")),(0,s.yg)("p",null,"Here is a real-world example:"),(0,s.yg)("pre",null,(0,s.yg)("code",m({parentName:"pre"},{}),'CEF:0|Cynet|Cynet 360|4.5.4.22139|0|Memory Pattern - Cobalt Strike Beacon ReflectiveLoader|8| externalId=6 clientId=2251997 scanGroupId=3 scanGroupName=Manually Installed Agents sev=High duser=tikasrv01\\\\administrator cat=END-POINT Alert dhost=TikaSrv01 src=172.31.5.93 filePath=c:\\\\windows\\\\temp\\\\javac.exe fname=javac.exe rt=3/30/2022 10:55:34 AM fileHash=2BD1650A7AC9A92FD227B2AB8782696F744DD177D94E8983A19491BF6C1389FD rtUtc=Mar 30 2022 10:55:34.688 dtUtc=Mar 30 2022 10:55:32.458 hostLS=2022-03-30 10:55:34 GMT+00:00 osVer=Windows Server 2016 Datacenter x64 1607 epsVer=4.5.5.6845 confVer=637842168250000000 prUser=tikasrv01\\\\administrator pParams="C:\\\\Windows\\\\Temp\\\\javac.exe" sign=Not signed pct=2022-03-30 10:55:27.140, 2022-03-30 10:52:40.222, 2022-03-30 10:52:39.609 pFileHash=1F955612E7DB9BB037751A89DAE78DFAF03D7C1BCC62DF2EF019F6CFE6D1BBA7 pprUser=tikasrv01\\\\administrator ppParams=C:\\\\Windows\\\\Explorer.EXE pssdeep=49152:2nxldYuopV6ZhcUYehydN7A0Fnvf2+ecNyO8w0w8A7/eFwIAD8j3:Gxj/7hUgsww8a0OD8j3 pSign=Signed and has certificate info gpFileHash=CFC6A18FC8FE7447ECD491345A32F0F10208F114B70A0E9D1CD72F6070D5B36F gpprUser=tikasrv01\\\\administrator gpParams=C:\\\\Windows\\\\system32\\\\userinit.exe gpssdeep=384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu gpSign=Signed actRem=Kill, Rename\n')),(0,s.yg)("p",null,"The ",(0,s.yg)("a",m({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"CEF specification")," pre-defines several extension field key names and\ndata types for the corresponding values. Tenzir's parser does not enforce the\nstrict definitions and instead tries to infer the type from the provided values."),(0,s.yg)("p",null,"Tenzir translates the ",(0,s.yg)("inlineCode",{parentName:"p"},"extension")," field to a nested record, where the key-value\npairs of the extensions map to record fields. Here is an example of the above\nevent:"),(0,s.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,s.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,s.yg)("code",m({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "cef_version"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "device_vendor"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Cynet"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "device_product"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Cynet 360"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "device_version"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"4.5.4.22139"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "signature_id"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"0"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "name"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Memory Pattern - Cobalt Strike Beacon ReflectiveLoader"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "severity"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"8"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'  "extension"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "externalId"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"6"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "clientId"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"2251997"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "scanGroupId"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "scanGroupName"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Manually Installed Agents"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "sev"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"High"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "duser"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"tikasrv01'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'administrator"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "cat"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"END-POINT Alert"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "dhost"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"TikaSrv01"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "src"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"172.31.5.93"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "filePath"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"c:'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),"windows"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),"temp"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'javac.exe"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "fname"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"javac.exe"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "rt"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"3/30/2022 10:55:34 AM"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "fileHash"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2BD1650A7AC9A92FD227B2AB8782696F744DD177D94E8983A19491BF6C1389FD"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "rtUtc"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Mar 30 2022 10:55:34.688"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "dtUtc"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Mar 30 2022 10:55:32.458"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "hostLS"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2022-03-30 10:55:34 GMT+00:00"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "osVer"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Windows Server 2016 Datacenter x64 1607"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "epsVer"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"4.5.5.6845"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "confVer"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#79C0FF"}}),"637842168250000000"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "prUser"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"tikasrv01'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'administrator"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "pParams"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"C:'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),"Windows"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),"Temp"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'javac.exe"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "sign"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Not signed"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "pct"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2022-03-30 10:55:27.140, 2022-03-30 10:52:40.222, 2022-03-30 10:52:39.609"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "pFileHash"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1F955612E7DB9BB037751A89DAE78DFAF03D7C1BCC62DF2EF019F6CFE6D1BBA7"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "pprUser"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"tikasrv01'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'administrator"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "ppParams"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"C:'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),"Windows"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'Explorer.EXE"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "pssdeep"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"49152:2nxldYuopV6ZhcUYehydN7A0Fnvf2+ecNyO8w0w8A7/eFwIAD8j3:Gxj/7hUgsww8a0OD8j3"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "pSign"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Signed and has certificate info"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "gpFileHash"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"CFC6A18FC8FE7447ECD491345A32F0F10208F114B70A0E9D1CD72F6070D5B36F"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "gpprUser"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"tikasrv01'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'administrator"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "gpParams"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"C:'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),"Windows"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),"system32"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"\\\\"),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'userinit.exe"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "gpssdeep"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "gpSign"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Signed"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#7EE787"}}),'    "actRem"'),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Kill, Rename"')),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,s.yg)("span",m({parentName:"code"},{"data-line":""}),(0,s.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,s.yg)("button",m({parentName:"pre"},{type:"button",data:'{\n  "cef_version": 0,\n  "device_vendor": "Cynet",\n  "device_product": "Cynet 360",\n  "device_version": "4.5.4.22139",\n  "signature_id": "0",\n  "name": "Memory Pattern - Cobalt Strike Beacon ReflectiveLoader",\n  "severity": "8",\n  "extension": {\n    "externalId": 6,\n    "clientId": 2251997,\n    "scanGroupId": 3,\n    "scanGroupName": "Manually Installed Agents",\n    "sev": "High",\n    "duser": "tikasrv01\\\\administrator",\n    "cat": "END-POINT Alert",\n    "dhost": "TikaSrv01",\n    "src": "172.31.5.93",\n    "filePath": "c:\\\\windows\\\\temp\\\\javac.exe",\n    "fname": "javac.exe",\n    "rt": "3/30/2022 10:55:34 AM",\n    "fileHash": "2BD1650A7AC9A92FD227B2AB8782696F744DD177D94E8983A19491BF6C1389FD",\n    "rtUtc": "Mar 30 2022 10:55:34.688",\n    "dtUtc": "Mar 30 2022 10:55:32.458",\n    "hostLS": "2022-03-30 10:55:34 GMT+00:00",\n    "osVer": "Windows Server 2016 Datacenter x64 1607",\n    "epsVer": "4.5.5.6845",\n    "confVer": 637842168250000000,\n    "prUser": "tikasrv01\\\\administrator",\n    "pParams": "C:\\\\Windows\\\\Temp\\\\javac.exe",\n    "sign": "Not signed",\n    "pct": "2022-03-30 10:55:27.140, 2022-03-30 10:52:40.222, 2022-03-30 10:52:39.609",\n    "pFileHash": "1F955612E7DB9BB037751A89DAE78DFAF03D7C1BCC62DF2EF019F6CFE6D1BBA7",\n    "pprUser": "tikasrv01\\\\administrator",\n    "ppParams": "C:\\\\Windows\\\\Explorer.EXE",\n    "pssdeep": "49152:2nxldYuopV6ZhcUYehydN7A0Fnvf2+ecNyO8w0w8A7/eFwIAD8j3:Gxj/7hUgsww8a0OD8j3",\n    "pSign": "Signed and has certificate info",\n    "gpFileHash": "CFC6A18FC8FE7447ECD491345A32F0F10208F114B70A0E9D1CD72F6070D5B36F",\n    "gpprUser": "tikasrv01\\\\administrator",\n    "gpParams": "C:\\\\Windows\\\\system32\\\\userinit.exe",\n    "gpssdeep": "384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu",\n    "gpSign": "Signed",\n    "actRem": "Kill, Rename"\n  }\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,s.yg)("span",m({parentName:"button"},{className:"ready"})),(0,s.yg)("span",m({parentName:"button"},{className:"success"}))),(0,s.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,s.yg)("h3",m({},{id:"common-options-parser"}),"Common Options (Parser)"),(0,s.yg)("p",null,"The CEF parser supports the common ",(0,s.yg)("a",m({parentName:"p"},{href:"/formats#parser-schema-inference"}),"schema inference options"),"."),(0,s.yg)("h2",m({},{id:"examples"}),"Examples"),(0,s.yg)("p",null,"Read a CEF file:"),(0,s.yg)("pre",null,(0,s.yg)("code",m({parentName:"pre"},{}),"from file /tmp/events.cef read cef\n")))}v.isMDXComponent=!0}}]);