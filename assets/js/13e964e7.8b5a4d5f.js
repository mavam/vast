"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45123],{15680:(e,a,t)=>{t.d(a,{xA:()=>l,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=c(t),u=r,m=y["".concat(s,".").concat(u)]||y[u]||d[u]||o;return t?n.createElement(m,p(p({ref:a},l),{},{components:t})):n.createElement(m,p({ref:a},l))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[y]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34376:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>I,contentTitle:()=>g,default:()=>M,frontMatter:()=>m,metadata:()=>h,toc:()=>N});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&l(e,t,a[t]);if(i)for(var t of i(a))c.call(a,t)&&l(e,t,a[t]);return e},d=(e,a)=>o(e,p(a)),u=(e,a)=>{var t={};for(var n in e)s.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))a.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const m={},g="cache",h={unversionedId:"tql2/operators/cache",id:"tql2/operators/cache",title:"cache",description:"We designed the cache operator for under-the-hood use of the Tenzir Platform",source:"@site/docs/tql2/operators/cache.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/cache",permalink:"/next/tql2/operators/cache",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/cache.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"buffer",permalink:"/next/tql2/operators/buffer"},next:{title:"compress",permalink:"/next/tql2/operators/compress"}},I={},N=[{value:"Description",id:"description",level:2},{value:"<code>id: string</code>",id:"id-string",level:3},{value:"<code>mode = string (optional)</code>",id:"mode--string-optional",level:3},{value:"<code>capacity = int (optional)</code>",id:"capacity--int-optional",level:3},{value:"<code>read_timeout = duration (optional)</code>",id:"read_timeout--duration-optional",level:3},{value:"<code>write_timeout = duration (optional)</code>",id:"write_timeout--duration-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Cache the results of an expensive query",id:"cache-the-results-of-an-expensive-query",level:3},{value:"Get high-level statistics about a query",id:"get-high-level-statistics-about-a-query",level:3}],b={toc:N},D="wrapper";function M(e){var a=e,{components:t}=a,r=u(a,["components"]);return(0,n.yg)(D,d(y(y({},b),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"cache"}),"cache"),(0,n.yg)("admonition",y({},{title:"Expert Operator",type:"warning"}),(0,n.yg)("p",{parentName:"admonition"},"We designed the ",(0,n.yg)("inlineCode",{parentName:"p"},"cache")," operator for under-the-hood use of the Tenzir Platform\non ",(0,n.yg)("a",y({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),". We generally recommend not using\nthe operator by yourself, but rather relying on the Tenzir Platform to\nautomatically manage caches for you.")),(0,n.yg)("p",null,"An in-memory cache shared between pipelines."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"cache"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," id"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [mode"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, capacity"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, read_timeout"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration, write_timeout"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration]"))),(0,n.yg)("button",y({parentName:"pre"},{type:"button",data:"cache id:string, [mode=string, capacity=int, read_timeout=duration, write_timeout=duration]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",y({parentName:"button"},{className:"ready"})),(0,n.yg)("span",y({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"cache")," operator caches events in an in-memory buffer at a node. Caches must\nhave a user-provided unique ID."),(0,n.yg)("p",null,"The first pipeline to use a cache writes into the cache. All further pipelines\nusing the same cache will read from the cache instead of executing the operators\nbefore the ",(0,n.yg)("inlineCode",{parentName:"p"},"cache")," operator in the same pipeline."),(0,n.yg)("h3",y({},{id:"id-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"id: string")),(0,n.yg)("p",null,"An arbitrary string that uniquely identifies the cache."),(0,n.yg)("h3",y({},{id:"mode--string-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"mode = string (optional)")),(0,n.yg)("p",null,"Configures whether the operator is used an input, an output, or a transformation.\nThe following modes are available currently:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"read"'),": The operators acts as an input operator reading from a cache that is\nrequires to already exist."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"write"'),": The operator acts as an output operator writing into a cache that\nmust not already exist."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"readwrite"'),": The operator acts as a transformation passing through events,\nlazily creating a cache if it does not already exist. If a cache exists,\nupstream operators will not be run and instead the cache is read.")),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},'"readwrite"'),"."),(0,n.yg)("h3",y({},{id:"capacity--int-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"capacity = int (optional)")),(0,n.yg)("p",null,"Stores how many events the cache can hold. Caches stop accepting events if the\ncapacity is reached and emit a warning."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"4Mi"),"."),(0,n.yg)("h3",y({},{id:"read_timeout--duration-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"read_timeout = duration (optional)")),(0,n.yg)("p",null,"Defines the maximum inactivity time until the cache is evicted from memory. The\ntimer starts when writing the cache completes (or runs into the capacity limit),\nand resets whenever the cache is read from."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"1min"),"."),(0,n.yg)("h3",y({},{id:"write_timeout--duration-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"write_timeout = duration (optional)")),(0,n.yg)("p",null,"If set, defines an upper bound for the lifetime of the cache. Unlike the\n",(0,n.yg)("inlineCode",{parentName:"p"},"read_timeout")," option, this does not refresh when the cache is accessed."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"cache-the-results-of-an-expensive-query"}),"Cache the results of an expensive query"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"export")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," @"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"name "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "suricata.flow"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," total"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(bytes_toserver), src_ip, dest_ip")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"cache"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "some-unique-identifier"'))),(0,n.yg)("button",y({parentName:"pre"},{type:"button",data:'export\nwhere @name == "suricata.flow"\nsummarize total=sum(bytes_toserver), src_ip, dest_ip\ncache "some-unique-identifier"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",y({parentName:"button"},{className:"ready"})),(0,n.yg)("span",y({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h3",y({},{id:"get-high-level-statistics-about-a-query"}),"Get high-level statistics about a query"),(0,n.yg)("p",null,"This calculates the cache again only if the query does not exist anymore, and\ndelete the cache if it's unused for more than a minute."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"export")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," @"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"name "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "suricata.flow"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip, total"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(bytes_toserver), dest_ip")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"cache"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "some-unique-identifier"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", read_timeout"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"1min")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip, total"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(total), destinations"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"count"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(dest_ip)"))),(0,n.yg)("button",y({parentName:"pre"},{type:"button",data:'export\nwhere @name == "suricata.flow"\nsummarize src_ip, total=sum(bytes_toserver), dest_ip\ncache "some-unique-identifier", read_timeout=1min\nsummarize src_ip, total=sum(total), destinations=count(dest_ip)',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",y({parentName:"button"},{className:"ready"})),(0,n.yg)("span",y({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("p",null,"Get the same statistics, assuming the cache still exists:"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"cache"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "some-unique-identifier"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", mode"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"read"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip, total"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(total), destinations"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"count"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(dest_ip)"))),(0,n.yg)("button",y({parentName:"pre"},{type:"button",data:'cache "some-unique-identifier", mode="read"\nsummarize src_ip, total=sum(total), destinations=count(dest_ip)',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",y({parentName:"button"},{className:"ready"})),(0,n.yg)("span",y({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}M.isMDXComponent=!0}}]);