"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13751],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),l=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(d.Provider,{value:a},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=l(t),g=r,m=s["".concat(d,".").concat(g)]||s[g]||y[g]||p;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=g;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},72329:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>I,contentTitle:()=>u,default:()=>D,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var n=t(15680),r=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,s=(e,a)=>{for(var t in a||(a={}))d.call(a,t)&&c(e,t,a[t]);if(o)for(var t of o(a))l.call(a,t)&&c(e,t,a[t]);return e},y=(e,a)=>p(e,i(a)),g=(e,a)=>{var t={};for(var n in e)d.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))a.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const m={},u="read_pcap",h={unversionedId:"tql2/operators/read_pcap",id:"version-v4.24/tql2/operators/read_pcap",title:"read_pcap",description:"Reads raw network packets in PCAP file format.",source:"@site/versioned_docs/version-v4.24/tql2/operators/read_pcap.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_pcap",permalink:"/tql2/operators/read_pcap",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/read_pcap.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_parquet",permalink:"/tql2/operators/read_parquet"},next:{title:"read_ssv",permalink:"/tql2/operators/read_ssv"}},I={},b=[{value:"Description",id:"description",level:2},{value:"<code>emit_file_headers = bool (optional)</code>",id:"emit_file_headers--bool-optional",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>pcap.packet</code>",id:"pcappacket",level:3},{value:"Examples",id:"examples",level:2},{value:"Read packets from a PCAP file:",id:"read-packets-from-a-pcap-file",level:3},{value:"Read packets from the network interface <code>eth0</code>:",id:"read-packets-from-the-network-interface-eth0",level:3}],N={toc:b},f="wrapper";function D(e){var a=e,{components:t}=a,r=g(a,["components"]);return(0,n.yg)(f,y(s(s({},N),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",s({},{id:"read_pcap"}),"read_pcap"),(0,n.yg)("p",null,"Reads raw network packets in ",(0,n.yg)("a",s({parentName:"p"},{href:"https://datatracker.ietf.org/doc/id/draft-gharris-opsawg-pcap-00.html"}),"PCAP")," file format."),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_pcap"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," [emit_file_headers"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,n.yg)("button",s({parentName:"pre"},{type:"button",data:"read_pcap [emit_file_headers=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",s({parentName:"button"},{className:"ready"})),(0,n.yg)("span",s({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",s({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"read_pcap")," operator converts raw bytes representing a ",(0,n.yg)("a",s({parentName:"p"},{href:"https://datatracker.ietf.org/doc/id/draft-gharris-opsawg-pcap-00.html"}),"PCAP")," file into\nevents."),(0,n.yg)("admonition",s({},{title:"PCAPNG",type:"note"}),(0,n.yg)("p",{parentName:"admonition"},"The current implementation does ",(0,n.yg)("em",{parentName:"p"},"not")," support ",(0,n.yg)("a",s({parentName:"p"},{href:"https://www.ietf.org/archive/id/draft-tuexen-opsawg-pcapng-05.html"}),"PCAPNG"),". Please\n",(0,n.yg)("a",s({parentName:"p"},{href:"/discord"}),"reach out")," if you would like to see support.")),(0,n.yg)("h3",s({},{id:"emit_file_headers--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"emit_file_headers = bool (optional)")),(0,n.yg)("p",null,"Emit a ",(0,n.yg)("inlineCode",{parentName:"p"},"pcap.file_header")," event that represents the PCAP file header. If\npresent, the parser injects this additional event before the subsequent stream\nof packets."),(0,n.yg)("p",null,"Emitting this extra event makes it possible to seed the ",(0,n.yg)("a",s({parentName:"p"},{href:"/tql2/operators/write_pcap"}),(0,n.yg)("inlineCode",{parentName:"a"},"write_pcap"))," operator with a\nfile header from the input. This allows for controlling the timestamp formatting\n(microseconds vs. nanosecond granularity) and byte order in the packet headers."),(0,n.yg)("p",null,"When the PCAP parser processes a concatenated stream of PCAP files, specifying\n",(0,n.yg)("inlineCode",{parentName:"p"},"emit_file_headers")," will also re-emit every intermediate file header as\nseparate event."),(0,n.yg)("p",null,"Use this option when you would like to reproduce the identical trace file layout\nof the PCAP input."),(0,n.yg)("h2",s({},{id:"schemas"}),"Schemas"),(0,n.yg)("p",null,"The operator emits events with the following schema."),(0,n.yg)("h3",s({},{id:"pcappacket"}),(0,n.yg)("inlineCode",{parentName:"h3"},"pcap.packet")),(0,n.yg)("p",null,"Contains information about all accessed API endpoints, emitted once per second."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"timestamp")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"time")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The time of capturing the packet.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"linktype")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The linktype of the captured packet.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"original_packet_length")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The length of the original packet.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"captured_packet_length")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The length of the captured packet.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"data")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"blob")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The captured packet's data as a blob.")))),(0,n.yg)("h2",s({},{id:"examples"}),"Examples"),(0,n.yg)("h3",s({},{id:"read-packets-from-a-pcap-file"}),"Read packets from a PCAP file:"),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp/trace.pcap"')),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_pcap"))),(0,n.yg)("button",s({parentName:"pre"},{type:"button",data:'load_file "/tmp/trace.pcap"\nread_pcap',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",s({parentName:"button"},{className:"ready"})),(0,n.yg)("span",s({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h3",s({},{id:"read-packets-from-the-network-interface-eth0"}),"Read packets from the ",(0,n.yg)("a",s({parentName:"h3"},{href:"/tql2/operators/load_nic"}),"network interface")," ",(0,n.yg)("inlineCode",{parentName:"h3"},"eth0"),":"),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_nic"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),' "eth0"')),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_pcap"))),(0,n.yg)("button",s({parentName:"pre"},{type:"button",data:'load_nic "eth0"\nread_pcap',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",s({parentName:"button"},{className:"ready"})),(0,n.yg)("span",s({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}D.isMDXComponent=!0}}]);