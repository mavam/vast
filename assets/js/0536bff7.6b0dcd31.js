"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96524],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=r,u=c["".concat(o,".").concat(g)]||c[g]||y[g]||i;return t?a.createElement(u,p(p({ref:n},d),{},{components:t})):a.createElement(u,p({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},23898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>m,default:()=>D,frontMatter:()=>u,metadata:()=>b,toc:()=>I});var a=t(15680),r=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&d(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&d(e,t,n[t]);return e},y=(e,n)=>i(e,p(n)),g=(e,n)=>{var t={};for(var a in e)o.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const u={},m="plugins",b={unversionedId:"tql2/operators/plugins",id:"tql2/operators/plugins",title:"plugins",description:"Shows all available plugins and built-ins.",source:"@site/docs/tql2/operators/plugins.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/plugins",permalink:"/next/tql2/operators/plugins",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"list",permalink:"/next/tql2/operators/pipeline/list"},next:{title:"processes",permalink:"/next/tql2/operators/processes"}},N={},I=[{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.plugin</code>",id:"tenzirplugin",level:3},{value:"Examples",id:"examples",level:2},{value:"Show all currently available functions",id:"show-all-currently-available-functions",level:3}],h={toc:I},f="wrapper";function D(e){var n=e,{components:t}=n,r=g(n,["components"]);return(0,a.yg)(f,y(c(c({},h),r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"plugins"}),"plugins"),(0,a.yg)("p",null,"Shows all available plugins and built-ins."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"plugins"))),(0,a.yg)("button",c({parentName:"pre"},{type:"button",data:"plugins",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",c({parentName:"button"},{className:"ready"})),(0,a.yg)("span",c({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"plugins")," operator shows all available plugins and built-ins."),(0,a.yg)("p",null,"Tenzir is built on a modular monolith architecture. Most features are available\nas plugins and extensible by developers. Tenzir comes with a set of built-ins\nand bundled plugins. The former use the plugin API but are available as part of\nthe core library, and the latter are plugins shipped with Tenzir."),(0,a.yg)("h2",c({},{id:"schemas"}),"Schemas"),(0,a.yg)("p",null,"Tenzir emits plugin information with the following schema."),(0,a.yg)("h3",c({},{id:"tenzirplugin"}),(0,a.yg)("inlineCode",{parentName:"h3"},"tenzir.plugin")),(0,a.yg)("p",null,"Contains detailed information about the available plugins."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,a.yg)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,a.yg)("th",c({parentName:"tr"},{align:"left"}),"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"name")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The unique, case-insensitive name of the plugin.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"version")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The version identifier of the plugin, or ",(0,a.yg)("inlineCode",{parentName:"td"},"bundled")," if the plugin has no version of its own.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"kind")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The kind of plugin. One of ",(0,a.yg)("inlineCode",{parentName:"td"},"builtin"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"static"),", or ",(0,a.yg)("inlineCode",{parentName:"td"},"dynamic"),".")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"types")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"list<string>")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The interfaces implemented by the plugin, e.g., ",(0,a.yg)("inlineCode",{parentName:"td"},"operator")," or ",(0,a.yg)("inlineCode",{parentName:"td"},"function"),".")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"dependencies")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"list<string>")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"Plugins that must be loaded for this plugin to function.")))),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"),(0,a.yg)("h3",c({},{id:"show-all-currently-available-functions"}),"Show all currently available functions"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"plugins")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "function"'),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," in"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," types")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," functions"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"collect"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(name)"))),(0,a.yg)("button",c({parentName:"pre"},{type:"button",data:'plugins\nwhere "function" in types\nsummarize functions=collect(name)',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",c({parentName:"button"},{className:"ready"})),(0,a.yg)("span",c({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}D.isMDXComponent=!0}}]);