"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43019],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,m=d["".concat(p,".").concat(u)]||d[u]||y[u]||r;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>g,default:()=>I,frontMatter:()=>m,metadata:()=>b,toc:()=>h});var o=t(15680),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&c(e,t,n[t]);return e},y=(e,n)=>r(e,i(n)),u=(e,n)=>{var t={};for(var o in e)p.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))n.indexOf(o)<0&&s.call(e,o)&&(t[o]=e[o]);return t};const m={},g="load_zmq",b={unversionedId:"tql2/operators/load_zmq",id:"version-v4.24/tql2/operators/load_zmq",title:"load_zmq",description:"Loads bytes from ZeroMQ messages.",source:"@site/versioned_docs/version-v4.24/tql2/operators/load_zmq.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_zmq",permalink:"/tql2/operators/load_zmq",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/load_zmq.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_udp",permalink:"/tql2/operators/load_udp"},next:{title:"local",permalink:"/tql2/operators/local"}},f={},h=[{value:"Description",id:"description",level:2},{value:"<code>endpoint: str (optional)</code>",id:"endpoint-str-optional",level:3},{value:"<code>filter = str (optional)</code>",id:"filter--str-optional",level:3},{value:"<code>listen = bool (optional)</code>",id:"listen--bool-optional",level:3},{value:"<code>connect = bool (optional)</code>",id:"connect--bool-optional",level:3},{value:"<code>monitor = bool (optional)</code>",id:"monitor--bool-optional",level:3},{value:"Examples",id:"examples",level:2}],v={toc:h},N="wrapper";function I(e){var n=e,{components:t}=n,a=u(n,["components"]);return(0,o.yg)(N,y(d(d({},v),a),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",d({},{id:"load_zmq"}),"load_zmq"),(0,o.yg)("p",null,"Loads bytes from ZeroMQ messages."),(0,o.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,o.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,o.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,o.yg)("span",d({parentName:"code"},{"data-line":""}),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_zmq"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [endpoint"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, filter"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, listen"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, connect"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, monitor"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,o.yg)("button",d({parentName:"pre"},{type:"button",data:"load_zmq [endpoint:str, filter=str, listen=bool, connect=bool, monitor=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,o.yg)("span",d({parentName:"button"},{className:"ready"})),(0,o.yg)("span",d({parentName:"button"},{className:"success"}))),(0,o.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,o.yg)("h2",d({},{id:"description"}),"Description"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"load_zmq")," operator processes the bytes in a ZeroMQ message received by a ",(0,o.yg)("inlineCode",{parentName:"p"},"SUB"),"\nsocket."),(0,o.yg)("p",null,"Indpendent of the socket type, the ",(0,o.yg)("inlineCode",{parentName:"p"},"load_zmq")," operator supports specfiying the\ndirection of connection establishment with ",(0,o.yg)("inlineCode",{parentName:"p"},"listen")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"connect"),". This can be\nhelpful to work around firewall restrictions and fit into broader set of\nexisting ZeroMQ applications."),(0,o.yg)("p",null,"With the ",(0,o.yg)("inlineCode",{parentName:"p"},"monitor")," option, you can activate message buffering for TCP\nsockets that hold off sending messages until ",(0,o.yg)("em",{parentName:"p"},"at least one")," remote peer has\nconnected. This can be helpful when you want to delay publishing until you have\none connected subscriber, e.g., when the publisher spawns before any subscriber\nexists."),(0,o.yg)("h3",d({},{id:"endpoint-str-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"endpoint: str (optional)")),(0,o.yg)("p",null,"The endpoint for connecting to or listening on a ZeroMQ socket."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"tcp://127.0.0.1:5555"),"."),(0,o.yg)("h3",d({},{id:"filter--str-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"filter = str (optional)")),(0,o.yg)("p",null,"Installs a filter for the ZeroMQ ",(0,o.yg)("inlineCode",{parentName:"p"},"SUB")," socket at the source. Filting in ZeroMQ\nmeans performing a prefix-match on the raw bytes of the entire message."),(0,o.yg)("p",null,"Defaults to the empty string, which is equivalent to no filtering."),(0,o.yg)("h3",d({},{id:"listen--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"listen = bool (optional)")),(0,o.yg)("p",null,"Bind to the ZeroMQ socket."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("h3",d({},{id:"connect--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"connect = bool (optional)")),(0,o.yg)("p",null,"Connect to the ZeroMQ socket."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,o.yg)("h3",d({},{id:"monitor--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"monitor = bool (optional)")),(0,o.yg)("p",null,"Monitors a 0mq socket over TCP until the remote side establishes a connection."),(0,o.yg)("h2",d({},{id:"examples"}),"Examples"),(0,o.yg)("p",null,"Interpret ZeroMQ messages as ",(0,o.yg)("a",d({parentName:"p"},{href:"/tql2/operators/read_json"}),"JSON"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{}),'load_zmq "1.2.3.4:56789"\nread_json\n')))}I.isMDXComponent=!0}}]);