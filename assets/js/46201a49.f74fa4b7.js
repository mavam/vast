"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40080],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=l(n),u=r,g=y["".concat(s,".").concat(u)]||y[u]||d[u]||o;return n?a.createElement(g,p(p({ref:t},c),{},{components:n})):a.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>N,frontMatter:()=>g,metadata:()=>b,toc:()=>I});var a=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,p(t)),u=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n};const g={},m="buffer",b={unversionedId:"tql2/operators/buffer",id:"version-v4.28/tql2/operators/buffer",title:"buffer",description:"An in-memory buffer to improve handling of data spikes in upstream operators.",source:"@site/versioned_docs/version-v4.28/tql2/operators/buffer.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/buffer",permalink:"/v4.28/tql2/operators/buffer",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/tql2/operators/buffer.md",tags:[],version:"v4.28",frontMatter:{},sidebar:"docsSidebar",previous:{title:"batch",permalink:"/v4.28/tql2/operators/batch"},next:{title:"cache",permalink:"/v4.28/tql2/operators/cache"}},f={},I=[{value:"Description",id:"description",level:2},{value:"<code>capacity: int (optional)</code>",id:"capacity-int-optional",level:3},{value:"<code>policy = string (optional)</code>",id:"policy--string-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Buffer up to 10 million events or bytes",id:"buffer-up-to-10-million-events-or-bytes",level:3}],h={toc:I},v="wrapper";function N(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.yg)(v,d(y(y({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",y({},{id:"buffer"}),"buffer"),(0,a.yg)("p",null,"An in-memory buffer to improve handling of data spikes in upstream operators."),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"buffer"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," [capacity"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, policy"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string]"))),(0,a.yg)("button",y({parentName:"pre"},{type:"button",data:"buffer [capacity:int, policy=string]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",y({parentName:"button"},{className:"ready"})),(0,a.yg)("span",y({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",y({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"buffer")," operator buffers up to the specified number of events or bytes in\nan in-memory buffer."),(0,a.yg)("p",null,"By default, operators in a pipeline run only when their downstream operators\nwant to receive input. This mechanism is called back pressure. The ",(0,a.yg)("inlineCode",{parentName:"p"},"buffer"),"\noperator effectively breaks back pressure by storing up to the specified number\nof events in memory, always requesting more input, which allows upstream\noperators to run uninterruptedly even in case the downstream operators of the\nbuffer are unable to keep up. This allows pipelines to handle data spikes more\neasily."),(0,a.yg)("h3",y({},{id:"capacity-int-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"capacity: int (optional)")),(0,a.yg)("p",null,"The number of events or bytes that may be kept at most in the buffer."),(0,a.yg)("p",null,"Note that every operator already buffers up to ",(0,a.yg)("inlineCode",{parentName:"p"},"254Ki")," events before it starts\napplying back pressure. Smaller buffers may decrease performance."),(0,a.yg)("h3",y({},{id:"policy--string-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"policy = string (optional)")),(0,a.yg)("p",null,"Specifies what the operator does when the buffer runs full."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"drop"'),": Drop events that do not fit into the buffer. This policy is not\nsupported for bytes inputs."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"block"'),": Use back pressure to slow down upstream operators.")),(0,a.yg)("p",null,"When buffering events, this option defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},'"block"')," for pipelines visible on\nthe overview page on ",(0,a.yg)("a",y({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),", and to ",(0,a.yg)("inlineCode",{parentName:"p"},'"drop"'),"\notherwise. When buffering bytes, this option always defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},'"block"'),"."),(0,a.yg)("h2",y({},{id:"examples"}),"Examples"),(0,a.yg)("h3",y({},{id:"buffer-up-to-10-million-events-or-bytes"}),"Buffer up to 10 million events or bytes"),(0,a.yg)("p",null,"Buffer and drop events if downstream cannot keep up:"),(0,a.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",y({parentName:"code"},{"data-line":""}),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"buffer"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 10M"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", policy"),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"drop"'))),(0,a.yg)("button",y({parentName:"pre"},{type:"button",data:'buffer 10M, policy="drop"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",y({parentName:"button"},{className:"ready"})),(0,a.yg)("span",y({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}N.isMDXComponent=!0}}]);