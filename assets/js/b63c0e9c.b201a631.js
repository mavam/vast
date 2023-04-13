"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1550],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,u=d["".concat(c,".").concat(f)]||d[f]||m[f]||o;return t?r.createElement(u,s(s({ref:n},l),{},{components:t})):r.createElement(u,s({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},23861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>v,default:()=>E,frontMatter:()=>u,metadata:()=>y,toc:()=>h});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&l(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&l(e,t,n[t]);return e},m=(e,n)=>o(e,s(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const u={description:"Common Event Format \u2014 SIEM"},v="CEF",y={unversionedId:"understand/formats/cef",id:"version-VAST v3.0/understand/formats/cef",title:"CEF",description:"Common Event Format \u2014 SIEM",source:"@site/versioned_docs/version-VAST v3.0/understand/formats/cef.md",sourceDirName:"understand/formats",slug:"/understand/formats/cef",permalink:"/docs/understand/formats/cef",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/understand/formats/cef.md",tags:[],version:"VAST v3.0",frontMatter:{description:"Common Event Format \u2014 SIEM"},sidebar:"docsSidebar",previous:{title:"ASCII",permalink:"/docs/understand/formats/ascii"},next:{title:"CSV",permalink:"/docs/understand/formats/csv"}},g={},h=[{value:"Parser",id:"parser",level:2}],F={toc:h},C="wrapper";function E(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(C,m(d(d({},F),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"cef"}),"CEF"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",d({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"Common Event Format (CEF)")," is a text-based event format that\noriginally stems from ArcSight. It is line-based and human readable. The first 7\nfields of a CEF event are always the same, and the 8th ",(0,r.kt)("em",{parentName:"p"},"extension")," field is an\noptional list of key-value pairs:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"CEF:Version|Device Vendor|Device Product|Device Version|Device Event Class ID|Name|Severity|[Extension]\n")),(0,r.kt)("p",null,"Here is a real-world example:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'CEF:0|Cynet|Cynet 360|4.5.4.22139|0|Memory Pattern - Cobalt Strike Beacon ReflectiveLoader|8| externalId=6 clientId=2251997 scanGroupId=3 scanGroupName=Manually Installed Agents sev=High duser=tikasrv01\\\\administrator cat=END-POINT Alert dhost=TikaSrv01 src=172.31.5.93 filePath=c:\\\\windows\\\\temp\\\\javac.exe fname=javac.exe rt=3/30/2022 10:55:34 AM fileHash=2BD1650A7AC9A92FD227B2AB8782696F744DD177D94E8983A19491BF6C1389FD rtUtc=Mar 30 2022 10:55:34.688 dtUtc=Mar 30 2022 10:55:32.458 hostLS=2022-03-30 10:55:34 GMT+00:00 osVer=Windows Server 2016 Datacenter x64 1607 epsVer=4.5.5.6845 confVer=637842168250000000 prUser=tikasrv01\\\\administrator pParams="C:\\\\Windows\\\\Temp\\\\javac.exe" sign=Not signed pct=2022-03-30 10:55:27.140, 2022-03-30 10:52:40.222, 2022-03-30 10:52:39.609 pFileHash=1F955612E7DB9BB037751A89DAE78DFAF03D7C1BCC62DF2EF019F6CFE6D1BBA7 pprUser=tikasrv01\\\\administrator ppParams=C:\\\\Windows\\\\Explorer.EXE pssdeep=49152:2nxldYuopV6ZhcUYehydN7A0Fnvf2+ecNyO8w0w8A7/eFwIAD8j3:Gxj/7hUgsww8a0OD8j3 pSign=Signed and has certificate info gpFileHash=CFC6A18FC8FE7447ECD491345A32F0F10208F114B70A0E9D1CD72F6070D5B36F gpprUser=tikasrv01\\\\administrator gpParams=C:\\\\Windows\\\\system32\\\\userinit.exe gpssdeep=384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu gpSign=Signed actRem=Kill, Rename\n')),(0,r.kt)("h2",d({},{id:"parser"}),"Parser"),(0,r.kt)("p",null,"VAST's CEF reader supports parsing such lines using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cef")," format:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast import cef < cef.log\n")),(0,r.kt)("p",null,"VAST translates the ",(0,r.kt)("inlineCode",{parentName:"p"},"extension")," field to a nested record, where the key-value\npairs of the extensions map to record fields. Here is an example of the above\nevent:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast export json 172.31.5.93 | jq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "cef_version": 0,\n  "device_vendor": "Cynet",\n  "device_product": "Cynet 360",\n  "device_version": "4.5.4.22139",\n  "signature_id": "0",\n  "name": "Memory Pattern - Cobalt Strike Beacon ReflectiveLoader",\n  "severity": "8",\n  "extension": {\n    "externalId": 6,\n    "clientId": 2251997,\n    "scanGroupId": 3,\n    "scanGroupName": "Manually Installed Agents",\n    "sev": "High",\n    "duser": "tikasrv01\\\\administrator",\n    "cat": "END-POINT Alert",\n    "dhost": "TikaSrv01",\n    "src": "172.31.5.93",\n    "filePath": "c:\\\\windows\\\\temp\\\\javac.exe",\n    "fname": "javac.exe",\n    "rt": "3/30/2022 10:55:34 AM",\n    "fileHash": "2BD1650A7AC9A92FD227B2AB8782696F744DD177D94E8983A19491BF6C1389FD",\n    "rtUtc": "Mar 30 2022 10:55:34.688",\n    "dtUtc": "Mar 30 2022 10:55:32.458",\n    "hostLS": "2022-03-30 10:55:34 GMT+00:00",\n    "osVer": "Windows Server 2016 Datacenter x64 1607",\n    "epsVer": "4.5.5.6845",\n    "confVer": 637842168250000000,\n    "prUser": "tikasrv01\\\\administrator",\n    "pParams": "C:\\\\Windows\\\\Temp\\\\javac.exe",\n    "sign": "Not signed",\n    "pct": "2022-03-30 10:55:27.140, 2022-03-30 10:52:40.222, 2022-03-30 10:52:39.609",\n    "pFileHash": "1F955612E7DB9BB037751A89DAE78DFAF03D7C1BCC62DF2EF019F6CFE6D1BBA7",\n    "pprUser": "tikasrv01\\\\administrator",\n    "ppParams": "C:\\\\Windows\\\\Explorer.EXE",\n    "pssdeep": "49152:2nxldYuopV6ZhcUYehydN7A0Fnvf2+ecNyO8w0w8A7/eFwIAD8j3:Gxj/7hUgsww8a0OD8j3",\n    "pSign": "Signed and has certificate info",\n    "gpFileHash": "CFC6A18FC8FE7447ECD491345A32F0F10208F114B70A0E9D1CD72F6070D5B36F",\n    "gpprUser": "tikasrv01\\\\administrator",\n    "gpParams": "C:\\\\Windows\\\\system32\\\\userinit.exe",\n    "gpssdeep": "384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu",\n    "gpSign": "Signed",\n    "actRem": "Kill, Rename"\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",d({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"CEF specification")," pre-defines several extension field key names and\ndata types for the corresponding values. VAST's parser does not enforce the\nstrict definitions and instead tries to infer the type from the provided values."))}E.isMDXComponent=!0}}]);