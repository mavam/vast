"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63732],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,g=c["".concat(l,".").concat(u)]||c[u]||y[u]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42312:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>m,default:()=>N,frontMatter:()=>g,metadata:()=>b,toc:()=>v});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))s.call(t,a)&&d(e,a,t[a]);return e},y=(e,t)=>o(e,i(t)),u=(e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a};const g={},m="save_file",b={unversionedId:"tql2/operators/save_file",id:"version-v4.24/tql2/operators/save_file",title:"save_file",description:"Writes a byte stream to a file.",source:"@site/versioned_docs/version-v4.24/tql2/operators/save_file.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/save_file",permalink:"/tql2/operators/save_file",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/save_file.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"save_email",permalink:"/tql2/operators/save_email"},next:{title:"save_ftp",permalink:"/tql2/operators/save_ftp"}},I={},v=[{value:"Description",id:"description",level:2},{value:"<code>path: string</code>",id:"path-string",level:3},{value:"<code>append = bool (optional)</code>",id:"append--bool-optional",level:3},{value:"<code>real_time = bool (optional)</code>",id:"real_time--bool-optional",level:3},{value:"<code>uds = bool (optional)</code>",id:"uds--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Save bytes to a file",id:"save-bytes-to-a-file",level:3}],f={toc:v},h="wrapper";function N(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.yg)(h,y(c(c({},f),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",c({},{id:"save_file"}),"save_file"),(0,n.yg)("p",null,"Writes a byte stream to a file."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," path"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [append"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, real_time"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, uds"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,n.yg)("button",c({parentName:"pre"},{type:"button",data:"save_file path:string, [append=bool, real_time=bool, uds=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",c({parentName:"button"},{className:"ready"})),(0,n.yg)("span",c({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",c({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Writes a byte stream to a file."),(0,n.yg)("h3",c({},{id:"path-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"path: string")),(0,n.yg)("p",null,"The file path to write to. If intermediate directories do not exist, they will\nbe created. When ",(0,n.yg)("inlineCode",{parentName:"p"},"~")," is the first character, it will be substituted with the\nvalue of the ",(0,n.yg)("inlineCode",{parentName:"p"},"$HOME")," environment variable."),(0,n.yg)("h3",c({},{id:"append--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"append = bool (optional)")),(0,n.yg)("p",null,"If ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", appends to the file instead of overwriting it."),(0,n.yg)("h3",c({},{id:"real_time--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"real_time = bool (optional)")),(0,n.yg)("p",null,"If ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", immediately synchronizes the file with every chunk of bytes instead\nof buffering bytes to batch filesystem write operations."),(0,n.yg)("h3",c({},{id:"uds--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"uds = bool (optional)")),(0,n.yg)("p",null,"If ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", creates a Unix Domain Socket instead of a normal file. Cannot be\ncombined with ",(0,n.yg)("inlineCode",{parentName:"p"},"append=true"),"."),(0,n.yg)("h2",c({},{id:"examples"}),"Examples"),(0,n.yg)("h3",c({},{id:"save-bytes-to-a-file"}),"Save bytes to a file"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp/out.txt"'))),(0,n.yg)("button",c({parentName:"pre"},{type:"button",data:'save_file "/tmp/out.txt"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",c({parentName:"button"},{className:"ready"})),(0,n.yg)("span",c({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}N.isMDXComponent=!0}}]);