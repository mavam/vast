"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39080],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},y=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),s=d(t),c=r,m=s["".concat(l,".").concat(c)]||s[c]||g[c]||p;return t?n.createElement(m,i(i({ref:a},y),{},{components:t})):n.createElement(m,i({ref:a},y))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=c;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<p;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},49930:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>N,default:()=>v,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var n=t(15680),r=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,s=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&y(e,t,a[t]);if(o)for(var t of o(a))d.call(a,t)&&y(e,t,a[t]);return e},g=(e,a)=>p(e,i(a)),c=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))a.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t};const m={},N="version",u={unversionedId:"tql2/operators/version",id:"version-v4.22/tql2/operators/version",title:"version",description:"Shows the current version.",source:"@site/versioned_docs/version-v4.22/tql2/operators/version.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/version",permalink:"/v4.22/tql2/operators/version",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/version.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"velociraptor",permalink:"/v4.22/tql2/operators/velociraptor"},next:{title:"where",permalink:"/v4.22/tql2/operators/where"}},b={},h=[{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.version</code>",id:"tenzirversion",level:3},{value:"Examples",id:"examples",level:2}],I={toc:h},f="wrapper";function v(e){var a=e,{components:t}=a,r=c(a,["components"]);return(0,n.yg)(f,g(s(s({},I),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",s({},{id:"version"}),"version"),(0,n.yg)("p",null,"Shows the current version."),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"version"))),(0,n.yg)("button",s({parentName:"pre"},{type:"button",data:"version",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",s({parentName:"button"},{className:"ready"})),(0,n.yg)("span",s({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",s({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"version")," operator shows the current Tenzir version."),(0,n.yg)("h2",s({},{id:"schemas"}),"Schemas"),(0,n.yg)("p",null,"Tenzir emits version information with the following schema."),(0,n.yg)("h3",s({},{id:"tenzirversion"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tenzir.version")),(0,n.yg)("p",null,"Contains detailed information about the process version."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"version")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The formatted version string.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"tag")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"An optional identifier of the build.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"major")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The major release version.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"minor")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The minor release version.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"patch")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The patch release version.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"features")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"list<string>")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"A list of feature flags that conditionally enable features in the Tenzir Platform.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"build")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"Build-time configuration options.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"dependencies")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"list<record>")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"A list of build-time dependencies and their versions.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"build")," record contains the following fields:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"type")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The configured build type. One of ",(0,n.yg)("inlineCode",{parentName:"td"},"Release"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"Debug"),", or ",(0,n.yg)("inlineCode",{parentName:"td"},"RelWithDebInfo"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"tree_hash")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"A hash of all files in the source directory.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"assertions")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"Whether potentially expensive run-time checks are enabled.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"sanitizers")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"Contains information about additional run-time checks from sanitizers.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"build.sanitzers")," record contains the following fields:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"address")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"Whether the address sanitizer is enabled.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"undefined_behavior")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"Whether the undefined behavior sanitizer is enabled.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"dependencies")," record contains the following fields:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"name")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The name of the dependency.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"version")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"THe version of the dependency.")))),(0,n.yg)("h2",s({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Use ",(0,n.yg)("inlineCode",{parentName:"p"},"version")," to show the current version of a development build:"),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),'  "version"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),'"v4.6.3-36-gbd4c8a058b-dirty"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),'  "major"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),'  "minor"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#79C0FF"}}),"6"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),'  "patch"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),'  "tweak"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#79C0FF"}}),"36")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,n.yg)("button",s({parentName:"pre"},{type:"button",data:'{\n  "version": "v4.6.3-36-gbd4c8a058b-dirty",\n  "major": 4,\n  "minor": 6,\n  "patch": 3,\n  "tweak": 36\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",s({parentName:"button"},{className:"ready"})),(0,n.yg)("span",s({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("p",null,"Use ",(0,n.yg)("inlineCode",{parentName:"p"},"version")," to show the current version of a release build:"),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),'  "version"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),'"v4.7.0"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),'  "major"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),'  "minor"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#79C0FF"}}),"7"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),'  "patch"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),'  "tweak"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#79C0FF"}}),"0")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,n.yg)("button",s({parentName:"pre"},{type:"button",data:'{\n  "version": "v4.7.0",\n  "major": 4,\n  "minor": 7,\n  "patch": 0,\n  "tweak": 0\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",s({parentName:"button"},{className:"ready"})),(0,n.yg)("span",s({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}v.isMDXComponent=!0}}]);