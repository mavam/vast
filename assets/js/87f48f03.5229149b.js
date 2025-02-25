"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42323],{75029:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>v,contentTitle:()=>b,default:()=>x,frontMatter:()=>h,metadata:()=>I,toc:()=>N});var t=n(15680),o=n(91461),r=n(64909),i=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))d.call(a,n)&&c(e,n,a[n]);if(l)for(var n of l(a))y.call(a,n)&&c(e,n,a[n]);return e},m=(e,a)=>p(e,s(a)),u=(e,a)=>{var n={};for(var t in e)d.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const h={},b="save_amqp",I={unversionedId:"tql2/operators/save_amqp",id:"version-v4.28/tql2/operators/save_amqp",title:"save_amqp",description:"Saves a byte stream via AMQP messages.",source:"@site/versioned_docs/version-v4.28/tql2/operators/save_amqp.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/save_amqp",permalink:"/v4.28/tql2/operators/save_amqp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/tql2/operators/save_amqp.md",tags:[],version:"v4.28",frontMatter:{},sidebar:"docsSidebar",previous:{title:"sample",permalink:"/v4.28/tql2/operators/sample"},next:{title:"save_azure_blob_storage",permalink:"/v4.28/tql2/operators/save_azure_blob_storage"}},v={},N=[{value:"Description",id:"description",level:2},{value:"<code>url: str (optional)</code>",id:"url-str-optional",level:3},{value:"<code>channel = int (optional)</code>",id:"channel--int-optional",level:3},{value:"<code>exchange = str (optional)</code>",id:"exchange--str-optional",level:3},{value:"<code>routing_key = str (optional)</code>",id:"routing_key--str-optional",level:3},{value:"<code>options = record (optional)</code>",id:"options--record-optional",level:3},{value:"<code>mandatory = bool (optional)</code>",id:"mandatory--bool-optional",level:3},{value:"<code>immediate = bool (optional)</code>",id:"immediate--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Send the list of plugins as JSON",id:"send-the-list-of-plugins-as-json",level:3}],D={toc:N},M="wrapper";function x(e){var a=e,{components:n}=a,i=u(a,["components"]);return(0,t.yg)(M,m(g(g({},D),i),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",g({},{id:"save_amqp"}),"save_amqp"),(0,t.yg)("p",null,"Saves a byte stream via AMQP messages."),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_amqp"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [url"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, channel"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, exchange"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, routing_key"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"str,")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"          options"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"record, mandatory"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, immediate"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,t.yg)("button",g({parentName:"pre"},{type:"button",data:"save_amqp [url:str, channel=int, exchange=str, routing_key=str,\n          options=record, mandatory=bool, immediate=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",g({parentName:"button"},{className:"ready"})),(0,t.yg)("span",g({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",g({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"save_amqp")," operator is an ",(0,t.yg)("a",g({parentName:"p"},{href:"https://www.amqp.org/"}),"AMQP")," 0-9-1 client to\nsend messages to an exchange."),(0,t.yg)("h3",g({},{id:"url-str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"url: str (optional)")),(0,t.yg)("p",null,"A URL that specifies the AMQP server. The URL must have the following format:"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{}),"amqp://[USERNAME[:PASSWORD]@]HOSTNAME[:PORT]/[VHOST]\n")),(0,t.yg)("p",null,"When the URL is present, it will overwrite the corresponding values of the\nconfiguration options."),(0,t.yg)("h3",g({},{id:"channel--int-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"channel = int (optional)")),(0,t.yg)("p",null,"The channel number to use."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"1"),"."),(0,t.yg)("h3",g({},{id:"exchange--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"exchange = str (optional)")),(0,t.yg)("p",null,"The exchange to interact with."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},'"amq.direct"'),"."),(0,t.yg)("h3",g({},{id:"routing_key--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"routing_key = str (optional)")),(0,t.yg)("p",null,"For the loader, the name of the routing key to bind a queue to an exchange. For the saver, the routing key to publish messages with."),(0,t.yg)("p",null,"Defaults to the empty string."),(0,t.yg)("h3",g({},{id:"options--record-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"options = record (optional)")),(0,t.yg)("p",null,"A comma-separated list of key-value configuration options for RabbitMQ, e.g.,\n",(0,t.yg)("inlineCode",{parentName:"p"},'{ max_channels: 42, frame_size: 1024, sasl_method: "external" }'),". The example\n",(0,t.yg)("inlineCode",{parentName:"p"},"amqp.yaml")," file below shows the available options:"),(0,t.yg)(o.A,{language:"yaml",mdxType:"CodeBlock"},r.A),(0,t.yg)("p",null,"We recommend factoring the environment-specific options into the configuration\nfile so that they are not cluttering the pipeline definition."),(0,t.yg)("h3",g({},{id:"mandatory--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"mandatory = bool (optional)")),(0,t.yg)("p",null,"This flag tells the server how to react if the message cannot be routed to a\nqueue. If ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", the server will return an unroutable message with a Return\nmethod. Otherwise the server silently drops the message."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",g({},{id:"immediate--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"immediate = bool (optional)")),(0,t.yg)("p",null,"This flag tells the server how to react if the message cannot be routed to a\nqueue consumer immediately. If ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", the server will return an undeliverable\nmessage with a Return method. If ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),", the server will queue the message, but\nwith no guarantee that it will ever be consumed."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h2",g({},{id:"examples"}),"Examples"),(0,t.yg)("h3",g({},{id:"send-the-list-of-plugins-as-json"}),"Send the list of plugins as ",(0,t.yg)("a",g({parentName:"h3"},{href:"/v4.28/tql2/operators/write_json"}),"JSON")),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"plugins")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_json")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_amqp"))),(0,t.yg)("button",g({parentName:"pre"},{type:"button",data:"plugins\nwrite_json\nsave_amqp",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",g({parentName:"button"},{className:"ready"})),(0,t.yg)("span",g({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}x.isMDXComponent=!0},64909:(e,a,n)=>{n.d(a,{A:()=>t});const t="hostname: 127.0.0.1\nport: 5672\nssl: false\nvhost: /\nmax_channels: 2047\nframe_size: 131072\nheartbeat: 0\nsasl_method: plain\nusername: guest\npassword: guest\n"}}]);