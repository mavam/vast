"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28723],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=d(a),c=r,m=g["".concat(l,".").concat(c)]||g[c]||y[c]||i;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[g]="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>N,toc:()=>h});var n=a(15680),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&s(e,a,t[a]);return e},y=(e,t)=>i(e,o(t)),c=(e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const m={},u="diagnostics",N={unversionedId:"tql2/operators/diagnostics",id:"version-v4.22/tql2/operators/diagnostics",title:"diagnostics",description:"Retrieves diagnostic events from a Tenzir node.",source:"@site/versioned_docs/version-v4.22/tql2/operators/diagnostics.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/diagnostics",permalink:"/v4.22/tql2/operators/diagnostics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/diagnostics.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"delay",permalink:"/v4.22/tql2/operators/delay"},next:{title:"discard",permalink:"/v4.22/tql2/operators/discard"}},b={},h=[{value:"Description",id:"description",level:2},{value:"<code>live = bool (optional)</code>",id:"live--bool-optional",level:3},{value:"<code>retro = bool (optional)</code>",id:"retro--bool-optional",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.diagnostic</code>",id:"tenzirdiagnostic",level:3},{value:"Examples",id:"examples",level:2}],I={toc:h},f="wrapper";function v(e){var t=e,{components:a}=t,r=c(t,["components"]);return(0,n.yg)(f,y(g(g({},I),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",g({},{id:"diagnostics"}),"diagnostics"),(0,n.yg)("p",null,"Retrieves diagnostic events from a Tenzir node."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"diagnostics"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [live"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, retro"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,n.yg)("button",g({parentName:"pre"},{type:"button",data:"diagnostics [live=bool, retro=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",g({parentName:"button"},{className:"ready"})),(0,n.yg)("span",g({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",g({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"diagnostics")," operator retrieves diagnostic events from a Tenzir\nnode."),(0,n.yg)("h3",g({},{id:"live--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"live = bool (optional)")),(0,n.yg)("p",null,"If ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", emits diagnostic events as they are generated in real-time. Unless\n",(0,n.yg)("inlineCode",{parentName:"p"},"retro=true")," is also given, this makes it so that previous diagnostics events\nare not returned."),(0,n.yg)("h3",g({},{id:"retro--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"retro = bool (optional)")),(0,n.yg)("p",null,"Return diagnostic events that were generated in the past. Unless ",(0,n.yg)("inlineCode",{parentName:"p"},"live=true")," is\ngiven, this is the default. If both are set to ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", all previous events are\nreturned before beginning with the live events."),(0,n.yg)("h2",g({},{id:"schemas"}),"Schemas"),(0,n.yg)("p",null,"Tenzir emits diagnostic information with the following schema:"),(0,n.yg)("h3",g({},{id:"tenzirdiagnostic"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tenzir.diagnostic")),(0,n.yg)("p",null,"Contains detailed information about the diagnostic."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"pipeline_id")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The ID of the pipeline that created the diagnostic.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"run")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The number of the run, starting at 1 for the first run.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"timestamp")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"time")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The exact timestamp of the diagnostic creation.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"message")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The diagnostic message.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"severity")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The diagnostic severity.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"notes")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"list<record>")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The diagnostic notes. Can be empty.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"annotations")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"list<record>")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The diagnostic annotations. Can be empty.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"rendered")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The rendered diagnostic, as printed on the command-line.")))),(0,n.yg)("p",null,"The records in ",(0,n.yg)("inlineCode",{parentName:"p"},"notes")," have the following schema:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"kind")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The kind of note, which is ",(0,n.yg)("inlineCode",{parentName:"td"},"note"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"usage"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"hint")," or ",(0,n.yg)("inlineCode",{parentName:"td"},"docs"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"message")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The message of this note.")))),(0,n.yg)("p",null,"The records in ",(0,n.yg)("inlineCode",{parentName:"p"},"annotations")," have the following schema:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"primary")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"True if the ",(0,n.yg)("inlineCode",{parentName:"td"},"source")," represents the underlying reason for the diagnostic, false if it is only related to it.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"text")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"A message for explanations. Can be empty.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"source")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The character range in the pipeline string that this annotation is associated to.")))),(0,n.yg)("h2",g({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"View all diagnostics generated in the past five minutes."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"diagnostics")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," timestamp "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),">"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}})," now"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"() "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 5min"))),(0,n.yg)("button",g({parentName:"pre"},{type:"button",data:"diagnostics\nwhere timestamp > now() - 5min",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",g({parentName:"button"},{className:"ready"})),(0,n.yg)("span",g({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("p",null,"Get a live feed of error diagnostics as they are emitted."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"diagnostics"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," live"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," severity "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "error"'))),(0,n.yg)("button",g({parentName:"pre"},{type:"button",data:'diagnostics live=true\nwhere severity == "error"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",g({parentName:"button"},{className:"ready"})),(0,n.yg)("span",g({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}v.isMDXComponent=!0}}]);