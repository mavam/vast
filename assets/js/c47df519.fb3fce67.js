"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16362],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>u});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),l=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},y=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=l(a),m=r,u=c["".concat(i,".").concat(m)]||c[m]||d[m]||p;return a?t.createElement(u,o(o({ref:n},y),{},{components:a})):t.createElement(u,o({ref:n},y))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<p;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3494:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>b,contentTitle:()=>g,default:()=>M,frontMatter:()=>u,metadata:()=>I,toc:()=>N});var t=a(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,y=(e,n,a)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,c=(e,n)=>{for(var a in n||(n={}))i.call(n,a)&&y(e,a,n[a]);if(s)for(var a of s(n))l.call(n,a)&&y(e,a,n[a]);return e},d=(e,n)=>p(e,o(n)),m=(e,n)=>{var a={};for(var t in e)i.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&s)for(var t of s(e))n.indexOf(t)<0&&l.call(e,t)&&(a[t]=e[t]);return a};const u={},g="print_yaml",I={unversionedId:"tql2/functions/print_yaml",id:"version-v4.29/tql2/functions/print_yaml",title:"print_yaml",description:"Prints a value as a YAML document.",source:"@site/versioned_docs/version-v4.29/tql2/functions/print_yaml.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/print_yaml",permalink:"/tql2/functions/print_yaml",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.29/tql2/functions/print_yaml.md",tags:[],version:"v4.29",frontMatter:{},sidebar:"docsSidebar",previous:{title:"print_xsv",permalink:"/tql2/functions/print_xsv"},next:{title:"quantile",permalink:"/tql2/functions/quantile"}},b={},N=[{value:"Description",id:"description",level:2},{value:"<code>input:any</code>",id:"inputany",level:3},{value:"<code>include_document_markers = bool (optional)</code>",id:"include_document_markers--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"See Also",id:"see-also",level:2}],D={toc:N},x="wrapper";function M(e){var n=e,{components:a}=n,r=m(n,["components"]);return(0,t.yg)(x,d(c(c({},D),r),{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"print_yaml"}),"print_yaml"),(0,t.yg)("p",null,"Prints a value as a YAML document."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"print_yaml"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"( input"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, [include_document_markers"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool] )"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:"print_yaml( input:any, [include_document_markers=bool] )",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("h3",c({},{id:"inputany"}),(0,t.yg)("inlineCode",{parentName:"h3"},"input:any")),(0,t.yg)("p",null,"The value to print as YAML."),(0,t.yg)("h3",c({},{id:"include_document_markers--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"include_document_markers = bool (optional)")),(0,t.yg)("p",null,'Includes the "start of document" and "end of document" markers in the result.'),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," { x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," } }, { x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",] }")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"x "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"print_yaml"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"()"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:"from {x: { x: 0, y: 1 } }, { x: [0,1,2,] }\nx = x.print_yaml()",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "x: 0'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"\\n"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'y: 1"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "- 0'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"\\n"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"- 1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"\\n"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'- 2"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'{\n  x: "x: 0\\ny: 1",\n}\n{\n  x: "- 0\\n- 1\\n- 2",\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",c({},{id:"see-also"}),"See Also"),(0,t.yg)("p",null,(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/write_yaml"}),(0,t.yg)("inlineCode",{parentName:"a"},"write_yaml")),", ",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/functions/parse_yaml"}),(0,t.yg)("inlineCode",{parentName:"a"},"parse_yaml"))))}M.isMDXComponent=!0}}]);