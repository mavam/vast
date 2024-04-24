"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,u=d["".concat(s,".").concat(f)]||d[f]||m[f]||p;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>P,frontMatter:()=>u,metadata:()=>k,toc:()=>y});var n=r(3905),a=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>p(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const u={sidebar_custom_props:{format:{parser:!0,printer:!0}}},h="pcap",k={unversionedId:"formats/pcap",id:"version-Tenzir v4.12/formats/pcap",title:"pcap",description:"Reads and writes raw network packets in PCAP file format.",source:"@site/versioned_docs/version-Tenzir v4.12/formats/pcap.md",sourceDirName:"formats",slug:"/formats/pcap",permalink:"/formats/pcap",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.12/formats/pcap.md",tags:[],version:"Tenzir v4.12",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"parquet",permalink:"/formats/parquet"},next:{title:"ssv",permalink:"/formats/ssv"}},v={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-e|--emit-file-headers</code> (Parser)",id:"-e--emit-file-headers-parser",level:3},{value:"Examples",id:"examples",level:2}],b={toc:y},g="wrapper";function P(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(g,m(d(d({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"pcap"}),"pcap"),(0,n.kt)("p",null,"Reads and writes raw network packets in ",(0,n.kt)("a",d({parentName:"p"},{href:"https://datatracker.ietf.org/doc/id/draft-gharris-opsawg-pcap-00.html"}),"PCAP")," file format."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("p",null,"Parser:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"pcap [-e|--emit-file-headers]\n")),(0,n.kt)("p",null,"Printer:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"pcap\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap")," parser converts raw bytes representing a ",(0,n.kt)("a",d({parentName:"p"},{href:"https://datatracker.ietf.org/doc/id/draft-gharris-opsawg-pcap-00.html"}),"PCAP")," file into\nevents, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap")," printer generates a PCAP file from events."),(0,n.kt)("admonition",d({},{title:"PCAPNG",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The current implementation does ",(0,n.kt)("em",{parentName:"p"},"not")," support ",(0,n.kt)("a",d({parentName:"p"},{href:"https://www.ietf.org/archive/id/draft-tuexen-opsawg-pcapng-05.html"}),"PCAPNG"),". Please\n",(0,n.kt)("a",d({parentName:"p"},{href:"/discord"}),"reach out")," if you would like to see support.")),(0,n.kt)("p",null,"The structured representation of packets has the ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap.packet")," schema:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"pcap.packet:\n  record:\n    - linktype: uint64\n    - time:\n        timestamp: time\n    - captured_packet_length: uint64\n    - original_packet_length: uint64\n    - data: string\n")),(0,n.kt)("h3",d({},{id:"-e--emit-file-headers-parser"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-e|--emit-file-headers")," (Parser)"),(0,n.kt)("p",null,"Emit a ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap.file_header")," event that represents the PCAP file header. If\npresent, the parser injects this additional event before the subsequent stream\nof packets."),(0,n.kt)("p",null,"Emitting this extra event makes it possible to seed the ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap")," printer with a\nfile header from the input. This allows for controlling the timestamp formatting\n(microseconds vs. nanosecond granularity) and byte order in the packet headers."),(0,n.kt)("p",null,"When the PCAP parser processes a concatenated stream of PCAP files, specifying\n",(0,n.kt)("inlineCode",{parentName:"p"},"--emit-file-headers")," will also re-emit every intermediate file header as\nseparate event."),(0,n.kt)("p",null,"Use this option when you would like to reproduce the identical trace file layout\nof the PCAP input."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read packets from a PCAP file:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from file /tmp/trace.pcap read pcap\n")),(0,n.kt)("p",null,"Read packets from the ",(0,n.kt)("a",d({parentName:"p"},{href:"/connectors/nic"}),"network interface")," ",(0,n.kt)("inlineCode",{parentName:"p"},"eth0"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from nic eth0 read pcap\n")),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/operators/decapsulate"}),"Decapsulate")," packets in a PCAP\nfile:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"read pcap | decapsulate\n")),(0,n.kt)("p",null,"On the command line, merge PCAP files and process parse them:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"cat *.pcap | tenzir 'read pcap'\n")))}P.isMDXComponent=!0}}]);