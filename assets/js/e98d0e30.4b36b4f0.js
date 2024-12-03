"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38401],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),i=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=i(e.components);return r.createElement(l.Provider,{value:a},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=i(t),d=n,g=y["".concat(l,".").concat(d)]||y[d]||m[d]||p;return t?r.createElement(g,o(o({ref:a},c),{},{components:t})):r.createElement(g,o({ref:a},c))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,o=new Array(p);o[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[y]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<p;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34498:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>f,default:()=>E,frontMatter:()=>g,metadata:()=>u,toc:()=>N});var r=t(15680),n=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&c(e,t,a[t]);if(s)for(var t of s(a))i.call(a,t)&&c(e,t,a[t]);return e},m=(e,a)=>p(e,o(a)),d=(e,a)=>{var t={};for(var r in e)l.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))a.indexOf(r)<0&&i.call(e,r)&&(t[r]=e[r]);return t};const g={sidebar_custom_props:{format:{parser:!0,printer:!0}}},f="pcap",u={unversionedId:"formats/pcap",id:"version-v4.23/formats/pcap",title:"pcap",description:"Reads and writes raw network packets in PCAP file format.",source:"@site/versioned_docs/version-v4.23/formats/pcap.md",sourceDirName:"formats",slug:"/formats/pcap",permalink:"/v4.23/formats/pcap",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/formats/pcap.md",tags:[],version:"v4.23",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"parquet",permalink:"/v4.23/formats/parquet"},next:{title:"ssv",permalink:"/v4.23/formats/ssv"}},h={},N=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-e|--emit-file-headers</code> (Parser)",id:"-e--emit-file-headers-parser",level:3},{value:"Examples",id:"examples",level:2}],v={toc:N},b="wrapper";function E(e){var a=e,{components:t}=a,n=d(a,["components"]);return(0,r.yg)(b,m(y(y({},v),n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",y({},{id:"pcap"}),"pcap"),(0,r.yg)("p",null,"Reads and writes raw network packets in ",(0,r.yg)("a",y({parentName:"p"},{href:"https://datatracker.ietf.org/doc/id/draft-gharris-opsawg-pcap-00.html"}),"PCAP")," file format."),(0,r.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("p",null,"Parser:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"pcap [-e|--emit-file-headers]\n")),(0,r.yg)("p",null,"Printer:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"pcap\n")),(0,r.yg)("h2",y({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"pcap")," parser converts raw bytes representing a ",(0,r.yg)("a",y({parentName:"p"},{href:"https://datatracker.ietf.org/doc/id/draft-gharris-opsawg-pcap-00.html"}),"PCAP")," file into\nevents, and the ",(0,r.yg)("inlineCode",{parentName:"p"},"pcap")," printer generates a PCAP file from events."),(0,r.yg)("admonition",y({},{title:"PCAPNG",type:"note"}),(0,r.yg)("p",{parentName:"admonition"},"The current implementation does ",(0,r.yg)("em",{parentName:"p"},"not")," support ",(0,r.yg)("a",y({parentName:"p"},{href:"https://www.ietf.org/archive/id/draft-tuexen-opsawg-pcapng-05.html"}),"PCAPNG"),". Please\n",(0,r.yg)("a",y({parentName:"p"},{href:"/discord"}),"reach out")," if you would like to see support.")),(0,r.yg)("p",null,"The structured representation of packets has the ",(0,r.yg)("inlineCode",{parentName:"p"},"pcap.packet")," schema:"),(0,r.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,r.yg)("code",y({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",y({parentName:"code"},{"data-line":""}),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"pcap.packet"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,r.yg)("span",y({parentName:"code"},{"data-line":""}),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"  record"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,r.yg)("span",y({parentName:"code"},{"data-line":""}),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"linktype"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"uint64")),"\n",(0,r.yg)("span",y({parentName:"code"},{"data-line":""}),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"time"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,r.yg)("span",y({parentName:"code"},{"data-line":""}),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"        timestamp"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"time")),"\n",(0,r.yg)("span",y({parentName:"code"},{"data-line":""}),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"captured_packet_length"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"uint64")),"\n",(0,r.yg)("span",y({parentName:"code"},{"data-line":""}),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"original_packet_length"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"uint64")),"\n",(0,r.yg)("span",y({parentName:"code"},{"data-line":""}),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"data"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"string"))))),(0,r.yg)("h3",y({},{id:"-e--emit-file-headers-parser"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-e|--emit-file-headers")," (Parser)"),(0,r.yg)("p",null,"Emit a ",(0,r.yg)("inlineCode",{parentName:"p"},"pcap.file_header")," event that represents the PCAP file header. If\npresent, the parser injects this additional event before the subsequent stream\nof packets."),(0,r.yg)("p",null,"Emitting this extra event makes it possible to seed the ",(0,r.yg)("inlineCode",{parentName:"p"},"pcap")," printer with a\nfile header from the input. This allows for controlling the timestamp formatting\n(microseconds vs. nanosecond granularity) and byte order in the packet headers."),(0,r.yg)("p",null,"When the PCAP parser processes a concatenated stream of PCAP files, specifying\n",(0,r.yg)("inlineCode",{parentName:"p"},"--emit-file-headers")," will also re-emit every intermediate file header as\nseparate event."),(0,r.yg)("p",null,"Use this option when you would like to reproduce the identical trace file layout\nof the PCAP input."),(0,r.yg)("h2",y({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Read packets from a PCAP file:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"from file /tmp/trace.pcap read pcap\n")),(0,r.yg)("p",null,"Read packets from the ",(0,r.yg)("a",y({parentName:"p"},{href:"/v4.23/connectors/nic"}),"network interface")," ",(0,r.yg)("inlineCode",{parentName:"p"},"eth0"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"from nic eth0 read pcap\n")),(0,r.yg)("p",null,(0,r.yg)("a",y({parentName:"p"},{href:"/v4.23/operators/decapsulate"}),"Decapsulate")," packets in a PCAP\nfile:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"read pcap | decapsulate\n")),(0,r.yg)("p",null,"On the command line, merge PCAP files and process parse them:"),(0,r.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,r.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",y({parentName:"code"},{"data-line":""}),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"cat"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," *"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),".pcap"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}})," tenzir"),(0,r.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," 'read pcap'"))))))}E.isMDXComponent=!0}}]);