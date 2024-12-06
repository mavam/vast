"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62116],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,g=d["".concat(c,".").concat(y)]||d[y]||u[y]||p;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>N,frontMatter:()=>g,metadata:()=>f,toc:()=>v});var a=n(15680),r=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>p(e,i(t)),y=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n};const g={},m="decapsulate",f={unversionedId:"tql2/functions/decapsulate",id:"version-v4.22/tql2/functions/decapsulate",title:"decapsulate",description:"Decapsulates packet data at link, network, and transport layer.",source:"@site/versioned_docs/version-v4.22/tql2/functions/decapsulate.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/decapsulate",permalink:"/v4.22/tql2/functions/decapsulate",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/functions/decapsulate.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"community_id",permalink:"/v4.22/tql2/functions/community_id"},next:{title:"encrypt_cryptopan",permalink:"/v4.22/tql2/functions/encrypt_cryptopan"}},b={},v=[{value:"Description",id:"description",level:2},{value:"VLAN Tags",id:"vlan-tags",level:3},{value:"Examples",id:"examples",level:2}],h={toc:v},I="wrapper";function N(e){var t=e,{components:n}=t,r=y(t,["components"]);return(0,a.yg)(I,u(d(d({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"decapsulate"}),"decapsulate"),(0,a.yg)("p",null,"Decapsulates packet data at link, network, and transport layer."),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"decapsulate"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"(packet"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"field)"))),(0,a.yg)("button",d({parentName:"pre"},{type:"button",data:"decapsulate(packet:field)",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",d({parentName:"button"},{className:"ready"})),(0,a.yg)("span",d({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"decapsulate")," function proceses events consisting of packet data and\ndecapsulates the payload by extracting fields at the link, network, and\ntransport layer. The aim is not completeness, but rather exposing commonly used\nfield for analytics."),(0,a.yg)("p",null,"Emits events of schema ",(0,a.yg)("inlineCode",{parentName:"p"},"tenzir.packet"),"."),(0,a.yg)("h3",d({},{id:"vlan-tags"}),"VLAN Tags"),(0,a.yg)("p",null,"While decapsulating packets, ",(0,a.yg)("inlineCode",{parentName:"p"},"decapsulate")," extracts\n",(0,a.yg)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/IEEE_802.1Q"}),"802.1Q")," VLAN tags into the nested\n",(0,a.yg)("inlineCode",{parentName:"p"},"vlan")," record, consisting of an ",(0,a.yg)("inlineCode",{parentName:"p"},"outer")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"inner")," field for the respective\ntags. The value of the VLAN tag corresponds to the 12-bit VLAN identifier (VID).\nSpecial values include ",(0,a.yg)("inlineCode",{parentName:"p"},"0")," (frame does not carry a VLAN ID) and ",(0,a.yg)("inlineCode",{parentName:"p"},"0xFFF"),"\n(reserved value; sometimes wildcard match)."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Decapsulate packets from a PCAP file:"),(0,a.yg)("p",null,"XXX: Fix examples"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"from file /tmp/trace.pcap read pcap\n| packet = decapsulate(this)\n")),(0,a.yg)("p",null,"Extract packets as JSON that have the address 6.6.6.6 as source or destination,\nand destination port 5158:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"read pcap\n| decapsulate\n| where 6.6.6.6 && dport == 5158\n| write json\n")),(0,a.yg)("p",null,"Query VLAN IDs using ",(0,a.yg)("inlineCode",{parentName:"p"},"vlan.outer")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"vlan.inner"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"read pcap\n| decapsulate\n| where vlan.outer > 0 || vlan.inner in [1, 2, 3]\n")),(0,a.yg)("p",null,"Filter packets by ",(0,a.yg)("a",d({parentName:"p"},{href:"https://github.com/corelight/community-id-spec"}),"Community\nID"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),'read pcap\n| decapsulate\n| where community_id == "1:wCb3OG7yAFWelaUydu0D+125CLM="\n')))}N.isMDXComponent=!0}}]);