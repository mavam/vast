"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60675],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>u});var t=n(96540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),s=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},d=function(e){var a=s(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,u=c["".concat(i,".").concat(g)]||c[g]||y[g]||r;return n?t.createElement(u,p(p({ref:a},d),{},{components:n})):t.createElement(u,p({ref:a},d))}));function u(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=g;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[c]="string"==typeof e?e:o,p[1]=l;for(var s=2;s<r;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},47044:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>h,toc:()=>N});var t=n(15680),o=Object.defineProperty,r=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))i.call(a,n)&&d(e,n,a[n]);if(l)for(var n of l(a))s.call(a,n)&&d(e,n,a[n]);return e},y=(e,a)=>r(e,p(a)),g=(e,a)=>{var n={};for(var t in e)i.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n};const u={},m="load_http",h={unversionedId:"tql2/operators/load_http",id:"version-v4.25/tql2/operators/load_http",title:"load_http",description:"Loads a byte stream via HTTP.",source:"@site/versioned_docs/version-v4.25/tql2/operators/load_http.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_http",permalink:"/v4.25/tql2/operators/load_http",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.25/tql2/operators/load_http.md",tags:[],version:"v4.25",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_google_cloud_pubsub",permalink:"/v4.25/tql2/operators/load_google_cloud_pubsub"},next:{title:"load_kafka",permalink:"/v4.25/tql2/operators/load_kafka"}},b={},N=[{value:"Description",id:"description",level:2},{value:"<code>url: string</code>",id:"url-string",level:3},{value:"<code>method = string (optional)</code>",id:"method--string-optional",level:3},{value:"<code>params = record (optional)</code>",id:"params--record-optional",level:3},{value:"<code>headers = record (optional)</code>",id:"headers--record-optional",level:3},{value:"<code>data = record (optional)</code>",id:"data--record-optional",level:3},{value:"<code>form = bool (optional)</code>",id:"form--bool-optional",level:3},{value:"<code>chunked = bool (optional)</code>",id:"chunked--bool-optional",level:3},{value:"<code>multipart = bool (optional)</code>",id:"multipart--bool-optional",level:3},{value:"<code>skip_peer_verification = bool (optional)</code>",id:"skip_peer_verification--bool-optional",level:3},{value:"<code>skip_hostname_verification = bool (optional)</code>",id:"skip_hostname_verification--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Perform an API call and get the response",id:"perform-an-api-call-and-get-the-response",level:3},{value:"See Also",id:"see-also",level:2}],I={toc:N},v="wrapper";function f(e){var a=e,{components:n}=a,o=g(a,["components"]);return(0,t.yg)(v,y(c(c({},I),o),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"load_http"}),"load_http"),(0,t.yg)("p",null,"Loads a byte stream via HTTP."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_http"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," url"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [data"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"record, params"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"record, headers"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"record,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"          method"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, form"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, chunked"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, multipart"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"          skip_peer_verification"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, skip_hostname_verification"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, verbose"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:"load_http url:string, [data=record, params=record, headers=record,\n          method=string, form=bool, chunked=bool, multipart=bool,\n          skip_peer_verification=bool, skip_hostname_verification=bool, verbose=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"load_http")," operator performs a HTTP request and returns the response."),(0,t.yg)("h3",c({},{id:"url-string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"url: string")),(0,t.yg)("p",null,"The URL to request from. The ",(0,t.yg)("inlineCode",{parentName:"p"},"http://")," scheme can be omitted."),(0,t.yg)("h3",c({},{id:"method--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"method = string (optional)")),(0,t.yg)("p",null,"The HTTP method, such as ",(0,t.yg)("inlineCode",{parentName:"p"},"POST")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"GET"),"."),(0,t.yg)("p",null,"The default is ",(0,t.yg)("inlineCode",{parentName:"p"},'"GET"'),"."),(0,t.yg)("h3",c({},{id:"params--record-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"params = record (optional)")),(0,t.yg)("p",null,"The query parameters for the request."),(0,t.yg)("h3",c({},{id:"headers--record-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"headers = record (optional)")),(0,t.yg)("p",null,"The headers for the request."),(0,t.yg)("h3",c({},{id:"data--record-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"data = record (optional)")),(0,t.yg)("p",null,"The request body as a record of key-value pairs. The body is encoded as JSON\nunless ",(0,t.yg)("inlineCode",{parentName:"p"},"form=true")," has been set."),(0,t.yg)("h3",c({},{id:"form--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"form = bool (optional)")),(0,t.yg)("p",null,"Submits the HTTP request body as form-encoded data."),(0,t.yg)("p",null,"This automatically sets the ",(0,t.yg)("inlineCode",{parentName:"p"},"Content-Type")," header to\n",(0,t.yg)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),"."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",c({},{id:"chunked--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"chunked = bool (optional)")),(0,t.yg)("p",null,"Whether to enable ",(0,t.yg)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Chunked_transfer_encoding"}),"chunked transfer\nencoding"),". This is\nequivalent to manually setting the header ",(0,t.yg)("inlineCode",{parentName:"p"},"Transfer-Encoding: chunked"),"."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",c({},{id:"multipart--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"multipart = bool (optional)")),(0,t.yg)("p",null,"Whether to encode the HTTP request body as ",(0,t.yg)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/MIME#Multipart_messages"}),"multipart\nmessage"),"."),(0,t.yg)("p",null,"This automatically sets the ",(0,t.yg)("inlineCode",{parentName:"p"},"Content-Type")," header to\n",(0,t.yg)("inlineCode",{parentName:"p"},"application/form-multipart; X")," where ",(0,t.yg)("inlineCode",{parentName:"p"},"X")," contains the MIME part boundary."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",c({},{id:"skip_peer_verification--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"skip_peer_verification = bool (optional)")),(0,t.yg)("p",null,"Whether to skip TLS peer verification."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h3",c({},{id:"skip_hostname_verification--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"skip_hostname_verification = bool (optional)")),(0,t.yg)("p",null,"Whether to skip TLS peer verification."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("h3",c({},{id:"perform-an-api-call-and-get-the-response"}),"Perform an API call and get the response"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_http"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "example.org/api"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", headers"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"X-API-Token"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "0000-0000-0000"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'load_http "example.org/api", headers={"X-API-Token": "0000-0000-0000"}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",c({},{id:"see-also"}),"See Also"),(0,t.yg)("p",null,(0,t.yg)("a",c({parentName:"p"},{href:"/v4.25/tql2/operators/save_http"}),(0,t.yg)("inlineCode",{parentName:"a"},"save_http"))))}f.isMDXComponent=!0}}]);