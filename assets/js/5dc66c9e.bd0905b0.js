"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20212],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=c(t),u=r,g=l["".concat(s,".").concat(u)]||l[u]||y[u]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[l]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>f,frontMatter:()=>g,metadata:()=>b,toc:()=>I});var a=t(15680),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,l=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(p)for(var t of p(n))c.call(n,t)&&d(e,t,n[t]);return e},y=(e,n)=>o(e,i(n)),u=(e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const g={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},m="udp",b={unversionedId:"connectors/udp",id:"version-v4.23/connectors/udp",title:"udp",description:"Loads bytes from and saves bytes to a UDP socket.",source:"@site/versioned_docs/version-v4.23/connectors/udp.md",sourceDirName:"connectors",slug:"/connectors/udp",permalink:"/v4.23/connectors/udp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/connectors/udp.md",tags:[],version:"v4.23",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"tcp",permalink:"/v4.23/connectors/tcp"},next:{title:"zmq",permalink:"/v4.23/connectors/zmq"}},h={},I=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;endpoint&gt;</code>",id:"endpoint",level:3},{value:"<code>-c,--connect</code> (Loader)",id:"-c--connect-loader",level:3},{value:"<code>-n,--insert-newlines</code> (Saver, Loader)",id:"-n--insert-newlines-saver-loader",level:3},{value:"Examples",id:"examples",level:2}],v={toc:I},N="wrapper";function f(e){var n=e,{components:t}=n,r=u(n,["components"]);return(0,a.yg)(N,y(l(l({},v),r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",l({},{id:"udp"}),"udp"),(0,a.yg)("p",null,"Loads bytes from and saves bytes to a UDP socket."),(0,a.yg)("h2",l({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("p",null,"Loader:"),(0,a.yg)("pre",null,(0,a.yg)("code",l({parentName:"pre"},{}),"udp [-c|--connect] [-n|--insert-newlines] <endpoint>\n")),(0,a.yg)("p",null,"Saver:"),(0,a.yg)("pre",null,(0,a.yg)("code",l({parentName:"pre"},{}),"udp <endpoint>\n")),(0,a.yg)("h2",l({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"udp")," connector supports UDP sockets. The loader reads blocks of\nbytes from the socket, and the saver writes them to the socket."),(0,a.yg)("p",null,"The loader defaults to creating a socket in listening mode. Use ",(0,a.yg)("inlineCode",{parentName:"p"},"--connect")," if\nthe loader should initiate the connection instead."),(0,a.yg)("p",null,"When you have a socket in listening mode, use ",(0,a.yg)("inlineCode",{parentName:"p"},"0.0.0.0")," to accept connections on\nall interfaces. The ",(0,a.yg)("a",l({parentName:"p"},{href:"/v4.23/operators/nics"}),(0,a.yg)("inlineCode",{parentName:"a"},"nics"))," operator lists all all\navailable interfaces."),(0,a.yg)("h3",l({},{id:"endpoint"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<endpoint>")),(0,a.yg)("p",null,"The address of the remote endpoint to connect to when using ",(0,a.yg)("inlineCode",{parentName:"p"},"--connect"),", and the\nbind address when using ",(0,a.yg)("inlineCode",{parentName:"p"},"--listen"),"."),(0,a.yg)("h3",l({},{id:"-c--connect-loader"}),(0,a.yg)("inlineCode",{parentName:"h3"},"-c,--connect")," (Loader)"),(0,a.yg)("p",null,"Connect to ",(0,a.yg)("inlineCode",{parentName:"p"},"<endpoint>")," instead of listening at it."),(0,a.yg)("h3",l({},{id:"-n--insert-newlines-saver-loader"}),(0,a.yg)("inlineCode",{parentName:"h3"},"-n,--insert-newlines")," (Saver, Loader)"),(0,a.yg)("p",null,"Append a newline character (",(0,a.yg)("inlineCode",{parentName:"p"},"\\n"),") at the end of every datagram."),(0,a.yg)("p",null,"This option comes in handy in combination with line-based parsers downstream,\nsuch as NDJSON."),(0,a.yg)("h2",l({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Import JSON via UDP by listenting on IP address ",(0,a.yg)("inlineCode",{parentName:"p"},"127.0.0.1")," at port ",(0,a.yg)("inlineCode",{parentName:"p"},"56789"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",l({parentName:"pre"},{}),"from udp://127.0.0.1:56789\n| import\n")),(0,a.yg)("p",null,"Use a shell to test the UDP loader with netcat:"),(0,a.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("figcaption",l({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"bash","data-theme":"github-dark-default"}),"Shell 1"),(0,a.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",l({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",l({parentName:"code"},{"data-line":""}),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir"),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}})," 'from udp://127.0.0.1:56789'"))),(0,a.yg)("button",l({parentName:"pre"},{type:"button",data:"tenzir 'from udp://127.0.0.1:56789'",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",l({parentName:"button"},{className:"ready"})),(0,a.yg)("span",l({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("figcaption",l({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"bash","data-theme":"github-dark-default"}),"Shell 2"),(0,a.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,a.yg)("code",l({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",l({parentName:"code"},{"data-line":""}),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#FFA657"}}),"jq"),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," -n"),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#A5D6FF"}})," '{foo: 42}'"),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#FFA657"}})," nc"),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," -u"),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," 127.0.0.1"),(0,a.yg)("span",l({parentName:"span"},{style:{color:"#79C0FF"}})," 56789"))),(0,a.yg)("button",l({parentName:"pre"},{type:"button",data:"jq -n '{foo: 42}' | nc -u 127.0.0.1 56789",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",l({parentName:"button"},{className:"ready"})),(0,a.yg)("span",l({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("p",null,"Send the Tenzir version as CSV file to a remote endpoint via UDP:"),(0,a.yg)("pre",null,(0,a.yg)("code",l({parentName:"pre"},{}),"version\n| write csv\n| save udp 127.0.0.1:56789\n")),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"nc -ul 127.0.0.1 56789")," to spin up a UDP server to test the above pipeline."))}f.isMDXComponent=!0}}]);