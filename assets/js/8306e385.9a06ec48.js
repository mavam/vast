"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49023],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>g});var t=n(96540);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=t.createContext({}),y=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=y(e.components);return t.createElement(i.Provider,{value:a},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=y(n),m=p,g=l["".concat(i,".").concat(m)]||l[m]||d[m]||r;return n?t.createElement(g,s(s({ref:a},c),{},{components:n})):t.createElement(g,s({ref:a},c))}));function g(e,a){var n=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[l]="string"==typeof e?e:p,s[1]=o;for(var y=2;y<r;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89720:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>E,frontMatter:()=>g,metadata:()=>I,toc:()=>b});var t=n(15680),p=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,l=(e,a)=>{for(var n in a||(a={}))i.call(a,n)&&c(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&c(e,n,a[n]);return e},d=(e,a)=>r(e,s(a)),m=(e,a)=>{var n={};for(var t in e)i.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const g={sidebar_custom_props:{operator:{transformation:!0}}},u="measure",I={unversionedId:"operators/measure",id:"version-v4.24/operators/measure",title:"measure",description:"Replaces the input with metrics describing the input.",source:"@site/versioned_docs/version-v4.24/operators/measure.md",sourceDirName:"operators",slug:"/operators/measure",permalink:"/operators/measure",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/operators/measure.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"lookup",permalink:"/operators/lookup"},next:{title:"metrics",permalink:"/operators/metrics"}},N={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--real-time</code>",id:"--real-time",level:3},{value:"<code>--cumulative</code>",id:"--cumulative",level:3},{value:"Examples",id:"examples",level:2}],D={toc:b},h="wrapper";function E(e){var a=e,{components:n}=a,p=m(a,["components"]);return(0,t.yg)(h,d(l(l({},D),p),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",l({},{id:"measure"}),"measure"),(0,t.yg)("p",null,"Replaces the input with metrics describing the input."),(0,t.yg)("h2",l({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",l({parentName:"pre"},{}),"measure [--real-time] [--cumulative]\n")),(0,t.yg)("h2",l({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"measure")," operator yields metrics for each received batch of events or bytes\nusing the following schema, respectively:"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":'title="Events',"data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":'title="Events',"data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"type tenzir.metrics.events = record  {")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  timestamp: time,")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  schema: string,")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  schema_id: string,")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  events: uint64,")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"}"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"type tenzir.metrics.events = record  {\n  timestamp: time,\n  schema: string,\n  schema_id: string,\n  events: uint64,\n}",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":'title="Bytes',"data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":'title="Bytes',"data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"type tenzir.metrics.bytes = record  {")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  timestamp: time,")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"  bytes: uint64,")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",{parentName:"span"},"}"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:"type tenzir.metrics.bytes = record  {\n  timestamp: time,\n  bytes: uint64,\n}",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",l({},{id:"--real-time"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--real-time")),(0,t.yg)("p",null,"Emit metrics immediately with every batch, rather than buffering until the\nupstream operator stalls, i.e., is idle or waiting for further input."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"--real-time")," option is useful when inspect should emit data without\nlatency."),(0,t.yg)("h3",l({},{id:"--cumulative"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--cumulative")),(0,t.yg)("p",null,"Emit running totals for the ",(0,t.yg)("inlineCode",{parentName:"p"},"events")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"bytes")," fields rather than per-batch\nstatistics."),(0,t.yg)("h2",l({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Get the number of bytes read incrementally for a file:"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",l({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"load file path/to/file.feather | measure | write json"),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2023-04-28T10:22:10.192322"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"16384"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2023-04-28T10:22:10.223612"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"16384"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2023-04-28T10:22:10.297169"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"16384"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2023-04-28T10:22:10.387172"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"16384"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2023-04-28T10:22:10.408171"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"bytes"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"8232"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:'{"timestamp": "2023-04-28T10:22:10.192322", "bytes": 16384}\n{"timestamp": "2023-04-28T10:22:10.223612", "bytes": 16384}\n{"timestamp": "2023-04-28T10:22:10.297169", "bytes": 16384}\n{"timestamp": "2023-04-28T10:22:10.387172", "bytes": 16384}\n{"timestamp": "2023-04-28T10:22:10.408171", "bytes": 8232}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"Get the number of events read incrementally from a file:"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",l({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"from file path/to/file.feather | measure | write json"),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2023-04-28T10:26:45.159885"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"events"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"65536"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"schema"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"suricata.dns"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"schema_id"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"d49102998baae44a"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"timestamp"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"2023-04-28T10:26:45.812321"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"events"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"412"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"schema"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"suricata.dns"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"schema_id"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"d49102998baae44a"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:'{"timestamp": "2023-04-28T10:26:45.159885", "events": 65536, "schema": "suricata.dns", "schema_id": "d49102998baae44a"}\n{"timestamp": "2023-04-28T10:26:45.812321", "events": 412, "schema": "suricata.dns", "schema_id": "d49102998baae44a"}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"Get the total number of events in a file, grouped by schema:"),(0,t.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",l({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"from file path/to/file.feather | measure | summarize events=sum(events) by schema"),(0,t.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",l({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",l({parentName:"code"},{"data-line":""}),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"events"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}}),"65948"),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#7EE787"}}),'"schema"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}}),'"suricata.dns"'),(0,t.yg)("span",l({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",l({parentName:"pre"},{type:"button",data:'{"events": 65948, "schema": "suricata.dns"}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",l({parentName:"button"},{className:"ready"})),(0,t.yg)("span",l({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}E.isMDXComponent=!0}}]);