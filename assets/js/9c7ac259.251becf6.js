"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74838],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),i=y(n),g=r,m=i["".concat(l,".").concat(g)]||i[g]||d[g]||p;return n?t.createElement(m,s(s({ref:a},c),{},{components:n})):t.createElement(m,s({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[i]="string"==typeof e?e:r,s[1]=o;for(var y=2;y<p;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},65773:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>E,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>N,toc:()=>D});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,i=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&c(e,n,a[n]);return e},d=(e,a)=>p(e,s(a)),g=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const m={sidebar_custom_props:{operator:{transformation:!0}}},u="unflatten",N={unversionedId:"operators/unflatten",id:"operators/unflatten",title:"unflatten",description:"Unflattens data structures whose field names imply a nested structure.",source:"@site/docs/operators/unflatten.md",sourceDirName:"operators",slug:"/operators/unflatten",permalink:"/next/operators/unflatten",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/unflatten.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"top",permalink:"/next/operators/top"},next:{title:"unique",permalink:"/next/operators/unique"}},E={},D=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;separator&gt;</code>",id:"separator",level:3},{value:"Examples",id:"examples",level:2}],b={toc:D},I="wrapper";function f(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(I,d(i(i({},b),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",i({},{id:"unflatten"}),"unflatten"),(0,t.yg)("p",null,"Unflattens data structures whose field names imply a nested structure."),(0,t.yg)("h2",i({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",i({parentName:"pre"},{}),"unflatten [<separator>]\n")),(0,t.yg)("h2",i({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"unflatten")," operator creates nested records out of record entries whose\nnames include a separator, thus unflattening"),(0,t.yg)("admonition",i({},{type:"info"}),(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("inlineCode",{parentName:"p"},"unflatten")," uses a heuristic to determine the unflattened schema. Thus, the\nschema of a record that has been flattened using the ",(0,t.yg)("a",i({parentName:"p"},{href:"/next/operators/flatten"}),(0,t.yg)("inlineCode",{parentName:"a"},"flatten"))," operator and\nunflattened afterwards may not be identical to the schema of the unmodified\nrecord.")),(0,t.yg)("h3",i({},{id:"separator"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<separator>")),(0,t.yg)("p",null,"The separator string to unflatten records with."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"."),"."),(0,t.yg)("h2",i({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Consider the following data:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "src_ip"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "src_port"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1141"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dest_ip"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.80.9"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dest_port"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"53"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "event_type"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"dns"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.type"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"query"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.id"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"553"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.rrname"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"irc.freenode.net"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.rrtype"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"A"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.tx_id"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.grouped.A"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"tenzir.com"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",i({parentName:"pre"},{type:"button",data:'{\n  "src_ip": "147.32.84.165",\n  "src_port": 1141,\n  "dest_ip": "147.32.80.9",\n  "dest_port": 53,\n  "event_type": "dns",\n  "dns.type": "query",\n  "dns.id": 553,\n  "dns.rrname": "irc.freenode.net",\n  "dns.rrtype": "A",\n  "dns.tx_id": 0,\n  "dns.grouped.A": ["tenzir.com"]\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",i({parentName:"button"},{className:"ready"})),(0,t.yg)("span",i({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"unflatten")," operator recreates nested records from fields that contain the ",(0,t.yg)("inlineCode",{parentName:"p"},"."),"\nseparator:"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "src_ip"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "src_port"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"1141"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dest_ip"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.80.9"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dest_port"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"53"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "event_type"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"dns"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "type"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"query"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "id"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"553"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "rrname"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"irc.freenode.net"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "rrtype"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'"A"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "tx_id"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'    "grouped"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#7EE787"}}),'      "A"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),": [")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),'        "tenzir.com"')),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"      ]")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"    }")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",i({parentName:"pre"},{type:"button",data:'{\n  "src_ip": "147.32.84.165",\n  "src_port": 1141,\n  "dest_ip": "147.32.80.9",\n  "dest_port": 53,\n  "event_type": "dns",\n  "dns": {\n    "type": "query",\n    "id": 553,\n    "rrname": "irc.freenode.net",\n    "rrtype": "A",\n    "tx_id": 0,\n    "grouped": {\n      "A": [\n        "tenzir.com"\n      ]\n    }\n  }\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",i({parentName:"button"},{className:"ready"})),(0,t.yg)("span",i({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}f.isMDXComponent=!0}}]);