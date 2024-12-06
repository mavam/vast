"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83355],{15680:(e,a,n)=>{n.d(a,{xA:()=>l,yg:()=>m});var t=n(96540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},l=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,m=d["".concat(c,".").concat(u)]||d[u]||y[u]||r;return n?t.createElement(m,p(p({ref:a},l),{},{components:n})):t.createElement(m,p({ref:a},l))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48943:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>I,contentTitle:()=>g,default:()=>f,frontMatter:()=>m,metadata:()=>b,toc:()=>h});var t=n(15680),o=Object.defineProperty,r=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,a,n)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,d=(e,a)=>{for(var n in a||(a={}))c.call(a,n)&&l(e,n,a[n]);if(i)for(var n of i(a))s.call(a,n)&&l(e,n,a[n]);return e},y=(e,a)=>r(e,p(a)),u=(e,a)=>{var n={};for(var t in e)c.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n};const m={sidebar_position:2},g="Update a node",b={unversionedId:"installation/update-a-node",id:"version-v4.22/installation/update-a-node",title:"Update a node",description:"To update a deployed node, proceed with the",source:"@site/versioned_docs/version-v4.22/installation/update-a-node.md",sourceDirName:"installation",slug:"/installation/update-a-node",permalink:"/v4.22/installation/update-a-node",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/installation/update-a-node.md",tags:[],version:"v4.22",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Deploy a node",permalink:"/v4.22/installation/deploy-a-node"},next:{title:"Deploy the platform",permalink:"/v4.22/installation/deploy-the-platform"}},I={},h=[{value:"Docker",id:"docker",level:2},{value:"Linux",id:"linux",level:2},{value:"macOS",id:"macos",level:2}],N={toc:h},D="wrapper";function f(e){var a=e,{components:n}=a,o=u(a,["components"]);return(0,t.yg)(D,y(d(d({},N),o),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",d({},{id:"update-a-node"}),"Update a node"),(0,t.yg)("p",null,"To update a ",(0,t.yg)("a",d({parentName:"p"},{href:"/v4.22/installation/deploy-a-node"}),"deployed node"),", proceed with the\nplatform-specific instructions below."),(0,t.yg)("h2",d({},{id:"docker"}),"Docker"),(0,t.yg)("p",null,"Run the following commands to update a Docker Compose deployment with a\nconfiguration file ",(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose.NODE.yaml"),":"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"docker"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," compose"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -f"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," docker-compose.NODE.yaml"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," pull")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"docker"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," compose"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -f"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," docker-compose.NODE.yaml"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," down")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"docker"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," compose"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -f"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," docker-compose.NODE.yaml"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," up"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," --detach"))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:"docker compose -f docker-compose.NODE.yaml pull\ndocker compose -f docker-compose.NODE.yaml down\ndocker compose -f docker-compose.NODE.yaml up --detach",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"Note that we ",(0,t.yg)("inlineCode",{parentName:"p"},"pull")," first so that the subsequent downtime between ",(0,t.yg)("inlineCode",{parentName:"p"},"down")," and\n",(0,t.yg)("inlineCode",{parentName:"p"},"up")," is minimal."),(0,t.yg)("h2",d({},{id:"linux"}),"Linux"),(0,t.yg)("p",null,"Run the installer again via:"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"curl"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," https://get.tenzir.app"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}})," sh"))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:"curl https://get.tenzir.app | sh",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",d({},{id:"macos"}),"macOS"),(0,t.yg)("p",null,"Please use Docker ",(0,t.yg)("a",d({parentName:"p"},{href:"https://levelup.gitconnected.com/docker-on-apple-silicon-mac-how-to-run-x86-containers-with-rosetta-2-4a679913a0d5"}),"with\nRosetta"),"\nuntil we offer a native package."))}f.isMDXComponent=!0}}]);