"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38401],{15680:(e,a,n)=>{n.d(a,{xA:()=>l,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},l=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=c(n),m=r,g=y["".concat(s,".").concat(m)]||y[m]||d[m]||p;return n?t.createElement(g,o(o({ref:a},l),{},{components:n})):t.createElement(g,o({ref:a},l))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34498:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>D,frontMatter:()=>g,metadata:()=>h,toc:()=>N});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,y=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&l(e,n,a[n]);if(i)for(var n of i(a))c.call(a,n)&&l(e,n,a[n]);return e},d=(e,a)=>p(e,o(a)),m=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n};const g={sidebar_custom_props:{format:{parser:!0,printer:!0}}},u="pcap",h={unversionedId:"formats/pcap",id:"version-v4.23/formats/pcap",title:"pcap",description:"Reads and writes raw network packets in PCAP file format.",source:"@site/versioned_docs/version-v4.23/formats/pcap.md",sourceDirName:"formats",slug:"/formats/pcap",permalink:"/v4.23/formats/pcap",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/formats/pcap.md",tags:[],version:"v4.23",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"parquet",permalink:"/v4.23/formats/parquet"},next:{title:"ssv",permalink:"/v4.23/formats/ssv"}},f={},N=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-e|--emit-file-headers</code> (Parser)",id:"-e--emit-file-headers-parser",level:3},{value:"Examples",id:"examples",level:2}],b={toc:N},I="wrapper";function D(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(I,d(y(y({},b),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"pcap"}),"pcap"),(0,t.yg)("p",null,"Reads and writes raw network packets in ",(0,t.yg)("a",y({parentName:"p"},{href:"https://datatracker.ietf.org/doc/id/draft-gharris-opsawg-pcap-00.html"}),"PCAP")," file format."),(0,t.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("p",null,"Parser:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"pcap [-e|--emit-file-headers]\n")),(0,t.yg)("p",null,"Printer:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"pcap\n")),(0,t.yg)("h2",y({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"pcap")," parser converts raw bytes representing a ",(0,t.yg)("a",y({parentName:"p"},{href:"https://datatracker.ietf.org/doc/id/draft-gharris-opsawg-pcap-00.html"}),"PCAP")," file into\nevents, and the ",(0,t.yg)("inlineCode",{parentName:"p"},"pcap")," printer generates a PCAP file from events."),(0,t.yg)("admonition",y({},{title:"PCAPNG",type:"note"}),(0,t.yg)("p",{parentName:"admonition"},"The current implementation does ",(0,t.yg)("em",{parentName:"p"},"not")," support ",(0,t.yg)("a",y({parentName:"p"},{href:"https://www.ietf.org/archive/id/draft-tuexen-opsawg-pcapng-05.html"}),"PCAPNG"),". Please\n",(0,t.yg)("a",y({parentName:"p"},{href:"/discord"}),"reach out")," if you would like to see support.")),(0,t.yg)("p",null,"The structured representation of packets has the ",(0,t.yg)("inlineCode",{parentName:"p"},"pcap.packet")," schema:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"pcap.packet"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"  record"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"linktype"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"uint64")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"time"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"        timestamp"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"time")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"captured_packet_length"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"uint64")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"original_packet_length"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"uint64")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"data"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"string"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:"pcap.packet:\n  record:\n    - linktype: uint64\n    - time:\n        timestamp: time\n    - captured_packet_length: uint64\n    - original_packet_length: uint64\n    - data: string",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",y({},{id:"-e--emit-file-headers-parser"}),(0,t.yg)("inlineCode",{parentName:"h3"},"-e|--emit-file-headers")," (Parser)"),(0,t.yg)("p",null,"Emit a ",(0,t.yg)("inlineCode",{parentName:"p"},"pcap.file_header")," event that represents the PCAP file header. If\npresent, the parser injects this additional event before the subsequent stream\nof packets."),(0,t.yg)("p",null,"Emitting this extra event makes it possible to seed the ",(0,t.yg)("inlineCode",{parentName:"p"},"pcap")," printer with a\nfile header from the input. This allows for controlling the timestamp formatting\n(microseconds vs. nanosecond granularity) and byte order in the packet headers."),(0,t.yg)("p",null,"When the PCAP parser processes a concatenated stream of PCAP files, specifying\n",(0,t.yg)("inlineCode",{parentName:"p"},"--emit-file-headers")," will also re-emit every intermediate file header as\nseparate event."),(0,t.yg)("p",null,"Use this option when you would like to reproduce the identical trace file layout\nof the PCAP input."),(0,t.yg)("h2",y({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Read packets from a PCAP file:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"from file /tmp/trace.pcap read pcap\n")),(0,t.yg)("p",null,"Read packets from the ",(0,t.yg)("a",y({parentName:"p"},{href:"/v4.23/connectors/nic"}),"network interface")," ",(0,t.yg)("inlineCode",{parentName:"p"},"eth0"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"from nic eth0 read pcap\n")),(0,t.yg)("p",null,(0,t.yg)("a",y({parentName:"p"},{href:"/v4.23/operators/decapsulate"}),"Decapsulate")," packets in a PCAP\nfile:"),(0,t.yg)("pre",null,(0,t.yg)("code",y({parentName:"pre"},{}),"read pcap | decapsulate\n")),(0,t.yg)("p",null,"On the command line, merge PCAP files and process parse them:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"cat"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," *"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),".pcap"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}})," tenzir"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}})," 'read pcap'"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:"cat *.pcap | tenzir 'read pcap'",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}D.isMDXComponent=!0}}]);