"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95658],{15680:(a,e,n)=>{n.d(e,{xA:()=>c,yg:()=>m});var t=n(96540);function p(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){p(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,p=function(a,e){if(null==a)return{};var n,t,p={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(p[n]=a[n]);return p}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(p[n]=a[n])}return p}var l=t.createContext({}),y=function(a){var e=t.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},c=function(a){var e=y(a.components);return t.createElement(l.Provider,{value:e},a.children)},i="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(a,e){var n=a.components,p=a.mdxType,r=a.originalType,l=a.parentName,c=o(a,["components","mdxType","originalType","parentName"]),i=y(n),g=p,m=i["".concat(l,".").concat(g)]||i[g]||d[g]||r;return n?t.createElement(m,s(s({ref:e},c),{},{components:n})):t.createElement(m,s({ref:e},c))}));function m(a,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof a||p){var r=n.length,s=new Array(r);s[0]=g;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=a,o[i]="string"==typeof a?a:p,s[1]=o;for(var y=2;y<r;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5224:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>I,contentTitle:()=>N,default:()=>b,frontMatter:()=>m,metadata:()=>u,toc:()=>D});var t=n(15680),p=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(a,e,n)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,i=(a,e)=>{for(var n in e||(e={}))l.call(e,n)&&c(a,n,e[n]);if(o)for(var n of o(e))y.call(e,n)&&c(a,n,e[n]);return a},d=(a,e)=>r(a,s(e)),g=(a,e)=>{var n={};for(var t in a)l.call(a,t)&&e.indexOf(t)<0&&(n[t]=a[t]);if(null!=a&&o)for(var t of o(a))e.indexOf(t)<0&&y.call(a,t)&&(n[t]=a[t]);return n};const m={},N="decapsulate",u={unversionedId:"tql2/functions/decapsulate",id:"version-v4.29/tql2/functions/decapsulate",title:"decapsulate",description:"Decapsulates packet data at link, network, and transport layer.",source:"@site/versioned_docs/version-v4.29/tql2/functions/decapsulate.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/decapsulate",permalink:"/tql2/functions/decapsulate",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.29/tql2/functions/decapsulate.md",tags:[],version:"v4.29",frontMatter:{},sidebar:"docsSidebar",previous:{title:"days",permalink:"/tql2/functions/days"},next:{title:"decode_base64",permalink:"/tql2/functions/decode_base64"}},I={},D=[{value:"Description",id:"description",level:2},{value:"VLAN Tags",id:"vlan-tags",level:3},{value:"Examples",id:"examples",level:2},{value:"Decapsulate packets from a PCAP file",id:"decapsulate-packets-from-a-pcap-file",level:3}],E={toc:D},F="wrapper";function b(a){var e=a,{components:n}=e,p=g(e,["components"]);return(0,t.yg)(F,d(i(i({},E),p),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",i({},{id:"decapsulate"}),"decapsulate"),(0,t.yg)("p",null,"Decapsulates packet data at link, network, and transport layer."),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"decapsulate"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"(packet"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"record) "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}})," record"))),(0,t.yg)("button",i({parentName:"pre"},{type:"button",data:"decapsulate(packet:record) -> record",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",i({parentName:"button"},{className:"ready"})),(0,t.yg)("span",i({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",i({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"decapsulate")," function decodes binary PCAP packet data by extracting link,\nnetwork, and transport layer information. The function takes a ",(0,t.yg)("inlineCode",{parentName:"p"},"packet")," record\nas argument as produced by the ",(0,t.yg)("a",i({parentName:"p"},{href:"/formats/pcap"}),"PCAP parser"),", which may\nlook like this:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  linktype"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  timestamp"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 2021-11-17T13:32:43"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"249525"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  captured_packet_length"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 66"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  original_packet_length"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 66"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  data"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ZJ7zvttmABY88f1tCABFAAA0LzBAAEAGRzjGR/dbgA6GqgBQ4HzXXzhE3N8/r4AQAfyWoQAAAQEICqMYaE9Mw7SY"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",i({parentName:"pre"},{type:"button",data:'{\n  linktype: 1,\n  timestamp: 2021-11-17T13:32:43.249525,\n  captured_packet_length: 66,\n  original_packet_length: 66,\n  data: "ZJ7zvttmABY88f1tCABFAAA0LzBAAEAGRzjGR/dbgA6GqgBQ4HzXXzhE3N8/r4AQAfyWoQAAAQEICqMYaE9Mw7SY",\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",i({parentName:"button"},{className:"ready"})),(0,t.yg)("span",i({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"This entire record serves as input to ",(0,t.yg)("inlineCode",{parentName:"p"},"decapsulate")," since the ",(0,t.yg)("inlineCode",{parentName:"p"},"linktype"),"\ndetermines how to intepret the binary ",(0,t.yg)("inlineCode",{parentName:"p"},"data")," field containing the raw packet\ndata."),(0,t.yg)("admonition",i({},{title:"Wireshark?",type:"note"}),(0,t.yg)("p",{parentName:"admonition"},"With ",(0,t.yg)("inlineCode",{parentName:"p"},"decapsulate"),", we aim to provide a ",(0,t.yg)("em",{parentName:"p"},"minimal")," packet parsing up to the\ntransport layer so that you can work with packets in pipelines and implement use\ncases such as alert-based PCAP. The goal is ",(0,t.yg)("em",{parentName:"p"},"not")," to comprehensively parse all\nprotocol fields at great depth. If this is your objective, consider\n",(0,t.yg)("a",i({parentName:"p"},{href:"https://zeek.org"}),"Zeek"),", ",(0,t.yg)("a",i({parentName:"p"},{href:"https://suricata.io"}),"Suricata"),", or\n",(0,t.yg)("a",i({parentName:"p"},{href:"https://wireshark.org"}),"Wireshark"),".")),(0,t.yg)("h3",i({},{id:"vlan-tags"}),"VLAN Tags"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"decapsulate")," function also extracts\n",(0,t.yg)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/IEEE_802.1Q"}),"802.1Q")," VLAN tags into a nested\n",(0,t.yg)("inlineCode",{parentName:"p"},"vlan")," record, consisting of an ",(0,t.yg)("inlineCode",{parentName:"p"},"outer")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"inner")," field for the respective\ntags. The value of the VLAN tag corresponds to the 12-bit VLAN identifier (VID).\nSpecial values include ",(0,t.yg)("inlineCode",{parentName:"p"},"0")," (frame does not carry a VLAN ID) and ",(0,t.yg)("inlineCode",{parentName:"p"},"0xFFF"),"\n(reserved value; sometimes wildcard match)."),(0,t.yg)("h2",i({},{id:"examples"}),"Examples"),(0,t.yg)("h3",i({},{id:"decapsulate-packets-from-a-pcap-file"}),"Decapsulate packets from a PCAP file"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/path/to/trace.pcap"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"this"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}})," decapsulate"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"this"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),")"))),(0,t.yg)("button",i({parentName:"pre"},{type:"button",data:'from "/path/to/trace.pcap"\nthis = decapsulate(this)',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",i({parentName:"button"},{className:"ready"})),(0,t.yg)("span",i({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ether"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    src"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "00-08-02-1C-47-AE"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    dst"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "20-E5-2A-B6-93-F1"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    type"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 2048"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ip"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    src"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 10.12.14.101"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    dst"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 92.119.157.10"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    type"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 6"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  tcp"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    src_port"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 62589"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    dst_port"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 4443"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  community_id"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "1:tSl1HyzM7qS0o3OpbOgxQJYCKCc="'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  udp"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  icmp"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," null"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",i({parentName:"pre"},{type:"button",data:'{\n  ether: {\n    src: "00-08-02-1C-47-AE",\n    dst: "20-E5-2A-B6-93-F1",\n    type: 2048,\n  },\n  ip: {\n    src: 10.12.14.101,\n    dst: 92.119.157.10,\n    type: 6,\n  },\n  tcp: {\n    src_port: 62589,\n    dst_port: 4443,\n  },\n  community_id: "1:tSl1HyzM7qS0o3OpbOgxQJYCKCc=",\n  udp: null,\n  icmp: null,\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",i({parentName:"button"},{className:"ready"})),(0,t.yg)("span",i({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"If the trace contains 802.1Q traffic, then the output includes a ",(0,t.yg)("inlineCode",{parentName:"p"},"vlan")," record:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ether"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    src"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "00-17-5A-ED-7A-F0"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    dst"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "FF-FF-FF-FF-FF-FF"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    type"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 2048"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  vlan"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    outer"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    inner"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 20"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ip"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    src"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 192.168.1.1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    dst"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 255.255.255.255"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    type"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  icmp"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    type"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 8"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    code"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  community_id"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "1:1eiKaTUjqP9UT1/1yu/o0frHlCk="'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",i({parentName:"pre"},{type:"button",data:'{\n  ether: {\n    src: "00-17-5A-ED-7A-F0",\n    dst: "FF-FF-FF-FF-FF-FF",\n    type: 2048,\n  },\n  vlan: {\n    outer: 1,\n    inner: 20,\n  },\n  ip: {\n    src: 192.168.1.1,\n    dst: 255.255.255.255,\n    type: 1,\n  },\n  icmp: {\n    type: 8,\n    code: 0,\n  },\n  community_id: "1:1eiKaTUjqP9UT1/1yu/o0frHlCk=",\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",i({parentName:"button"},{className:"ready"})),(0,t.yg)("span",i({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}b.isMDXComponent=!0}}]);