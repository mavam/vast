"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73458],{15680:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>v});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,v=m["".concat(c,".").concat(f)]||m[f]||d[f]||o;return r?t.createElement(v,s(s({ref:n},l),{},{components:r})):t.createElement(v,s({ref:n},l))}));function v(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46411:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>u,default:()=>D,frontMatter:()=>v,metadata:()=>y,toc:()=>h});var t=r(15680),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,m=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&l(e,r,n[r]);if(i)for(var r of i(n))p.call(n,r)&&l(e,r,n[r]);return e},d=(e,n)=>o(e,s(n)),f=(e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&i)for(var t of i(e))n.indexOf(t)<0&&p.call(e,t)&&(r[t]=e[t]);return r};const v={sidebar_custom_props:{format:{parser:!0}}},u="cef",y={unversionedId:"formats/cef",id:"version-v4.20/formats/cef",title:"cef",description:"Parses events in the Common Event Format (CEF).",source:"@site/versioned_docs/version-v4.20/formats/cef.md",sourceDirName:"formats",slug:"/formats/cef",permalink:"/v4.20/formats/cef",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/formats/cef.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"bitz",permalink:"/v4.20/formats/bitz"},next:{title:"csv",permalink:"/v4.20/formats/csv"}},g={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],F={toc:h},C="wrapper";function D(e){var n=e,{components:r}=n,a=f(n,["components"]);return(0,t.yg)(C,d(m(m({},F),a),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",m({},{id:"cef"}),"cef"),(0,t.yg)("p",null,"Parses events in the Common Event Format (CEF)."),(0,t.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"cef\n")),(0,t.yg)("h2",m({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("a",m({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"Common Event Format (CEF)")," is a text-based event format that\noriginally stems from ArcSight. It is line-based and human readable. The first 7\nfields of a CEF event are always the same, and the 8th ",(0,t.yg)("em",{parentName:"p"},"extension")," field is an\noptional list of key-value pairs:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"CEF:Version|Device Vendor|Device Product|Device Version|Device Event Class ID|Name|Severity|[Extension]\n")),(0,t.yg)("p",null,"Here is a real-world example:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),'CEF:0|Cynet|Cynet 360|4.5.4.22139|0|Memory Pattern - Cobalt Strike Beacon ReflectiveLoader|8| externalId=6 clientId=2251997 scanGroupId=3 scanGroupName=Manually Installed Agents sev=High duser=tikasrv01\\\\administrator cat=END-POINT Alert dhost=TikaSrv01 src=172.31.5.93 filePath=c:\\\\windows\\\\temp\\\\javac.exe fname=javac.exe rt=3/30/2022 10:55:34 AM fileHash=2BD1650A7AC9A92FD227B2AB8782696F744DD177D94E8983A19491BF6C1389FD rtUtc=Mar 30 2022 10:55:34.688 dtUtc=Mar 30 2022 10:55:32.458 hostLS=2022-03-30 10:55:34 GMT+00:00 osVer=Windows Server 2016 Datacenter x64 1607 epsVer=4.5.5.6845 confVer=637842168250000000 prUser=tikasrv01\\\\administrator pParams="C:\\\\Windows\\\\Temp\\\\javac.exe" sign=Not signed pct=2022-03-30 10:55:27.140, 2022-03-30 10:52:40.222, 2022-03-30 10:52:39.609 pFileHash=1F955612E7DB9BB037751A89DAE78DFAF03D7C1BCC62DF2EF019F6CFE6D1BBA7 pprUser=tikasrv01\\\\administrator ppParams=C:\\\\Windows\\\\Explorer.EXE pssdeep=49152:2nxldYuopV6ZhcUYehydN7A0Fnvf2+ecNyO8w0w8A7/eFwIAD8j3:Gxj/7hUgsww8a0OD8j3 pSign=Signed and has certificate info gpFileHash=CFC6A18FC8FE7447ECD491345A32F0F10208F114B70A0E9D1CD72F6070D5B36F gpprUser=tikasrv01\\\\administrator gpParams=C:\\\\Windows\\\\system32\\\\userinit.exe gpssdeep=384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu gpSign=Signed actRem=Kill, Rename\n')),(0,t.yg)("p",null,"The ",(0,t.yg)("a",m({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"CEF specification")," pre-defines several extension field key names and\ndata types for the corresponding values. Tenzir's parser does not enforce the\nstrict definitions and instead tries to infer the type from the provided values."),(0,t.yg)("p",null,"Tenzir translates the ",(0,t.yg)("inlineCode",{parentName:"p"},"extension")," field to a nested record, where the key-value\npairs of the extensions map to record fields. Here is an example of the above\nevent:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "cef_version": 0,\n  "device_vendor": "Cynet",\n  "device_product": "Cynet 360",\n  "device_version": "4.5.4.22139",\n  "signature_id": "0",\n  "name": "Memory Pattern - Cobalt Strike Beacon ReflectiveLoader",\n  "severity": "8",\n  "extension": {\n    "externalId": 6,\n    "clientId": 2251997,\n    "scanGroupId": 3,\n    "scanGroupName": "Manually Installed Agents",\n    "sev": "High",\n    "duser": "tikasrv01\\\\administrator",\n    "cat": "END-POINT Alert",\n    "dhost": "TikaSrv01",\n    "src": "172.31.5.93",\n    "filePath": "c:\\\\windows\\\\temp\\\\javac.exe",\n    "fname": "javac.exe",\n    "rt": "3/30/2022 10:55:34 AM",\n    "fileHash": "2BD1650A7AC9A92FD227B2AB8782696F744DD177D94E8983A19491BF6C1389FD",\n    "rtUtc": "Mar 30 2022 10:55:34.688",\n    "dtUtc": "Mar 30 2022 10:55:32.458",\n    "hostLS": "2022-03-30 10:55:34 GMT+00:00",\n    "osVer": "Windows Server 2016 Datacenter x64 1607",\n    "epsVer": "4.5.5.6845",\n    "confVer": 637842168250000000,\n    "prUser": "tikasrv01\\\\administrator",\n    "pParams": "C:\\\\Windows\\\\Temp\\\\javac.exe",\n    "sign": "Not signed",\n    "pct": "2022-03-30 10:55:27.140, 2022-03-30 10:52:40.222, 2022-03-30 10:52:39.609",\n    "pFileHash": "1F955612E7DB9BB037751A89DAE78DFAF03D7C1BCC62DF2EF019F6CFE6D1BBA7",\n    "pprUser": "tikasrv01\\\\administrator",\n    "ppParams": "C:\\\\Windows\\\\Explorer.EXE",\n    "pssdeep": "49152:2nxldYuopV6ZhcUYehydN7A0Fnvf2+ecNyO8w0w8A7/eFwIAD8j3:Gxj/7hUgsww8a0OD8j3",\n    "pSign": "Signed and has certificate info",\n    "gpFileHash": "CFC6A18FC8FE7447ECD491345A32F0F10208F114B70A0E9D1CD72F6070D5B36F",\n    "gpprUser": "tikasrv01\\\\administrator",\n    "gpParams": "C:\\\\Windows\\\\system32\\\\userinit.exe",\n    "gpssdeep": "384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu",\n    "gpSign": "Signed",\n    "actRem": "Kill, Rename"\n  }\n}\n')),(0,t.yg)("h2",m({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Read a CEF file:"),(0,t.yg)("pre",null,(0,t.yg)("code",m({parentName:"pre"},{}),"from file /tmp/events.cef read cef\n")))}D.isMDXComponent=!0}}]);