"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26822],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,m=d["".concat(c,".").concat(g)]||d[g]||y[g]||o;return n?a.createElement(m,p(p({ref:t},s),{},{components:n})):a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>D,frontMatter:()=>m,metadata:()=>x,toc:()=>I});var a=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&s(e,n,t[n]);return e},y=(e,t)=>o(e,p(t)),g=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n};const m={},u="remove",x={unversionedId:"tql2/operators/context/remove",id:"tql2/operators/context/remove",title:"remove",description:"Deletes a context.",source:"@site/docs/tql2/operators/context/remove.md",sourceDirName:"tql2/operators/context",slug:"/tql2/operators/context/remove",permalink:"/next/tql2/operators/context/remove",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/context/remove.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load",permalink:"/next/tql2/operators/context/load"},next:{title:"reset",permalink:"/next/tql2/operators/context/reset"}},b={},I=[{value:"Description",id:"description",level:2},{value:"<code>name: string</code>",id:"name-string",level:3},{value:"Examples",id:"examples",level:2},{value:"Delete a context",id:"delete-a-context",level:3},{value:"See Also",id:"see-also",level:2}],N={toc:I},h="wrapper";function D(e){var t=e,{components:n}=t,r=g(t,["components"]);return(0,a.yg)(h,y(d(d({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"remove"}),"remove"),(0,a.yg)("p",null,"Deletes a context."),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"remove"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," name"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string"))),(0,a.yg)("button",d({parentName:"pre"},{type:"button",data:"context::remove name:string",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",d({parentName:"button"},{className:"ready"})),(0,a.yg)("span",d({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"context::remove")," operator deletes the specified context."),(0,a.yg)("h3",d({},{id:"name-string"}),(0,a.yg)("inlineCode",{parentName:"h3"},"name: string")),(0,a.yg)("p",null,"The name of the context to delete."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("h3",d({},{id:"delete-a-context"}),"Delete a context"),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"delete"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"'))),(0,a.yg)("button",d({parentName:"pre"},{type:"button",data:'context::delete "ctx"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",d({parentName:"button"},{className:"ready"})),(0,a.yg)("span",d({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",d({},{id:"see-also"}),"See Also"),(0,a.yg)("p",null,(0,a.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/context/create_bloom_filter"}),(0,a.yg)("inlineCode",{parentName:"a"},"context::create_bloom_filter")),",\n",(0,a.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/context/create_geoip"}),(0,a.yg)("inlineCode",{parentName:"a"},"context::create_geoip")),",\n",(0,a.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/context/create_lookup_table"}),(0,a.yg)("inlineCode",{parentName:"a"},"context::create_lookup_table")),",\n",(0,a.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/context/enrich"}),(0,a.yg)("inlineCode",{parentName:"a"},"context::enrich")),",\n",(0,a.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/context/inspect"}),(0,a.yg)("inlineCode",{parentName:"a"},"context::inspect")),",\n",(0,a.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/context/list"}),(0,a.yg)("inlineCode",{parentName:"a"},"context::list")),",\n",(0,a.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/context/load"}),(0,a.yg)("inlineCode",{parentName:"a"},"context::load")),",\n",(0,a.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/context/update"}),(0,a.yg)("inlineCode",{parentName:"a"},"context::reset")),",\n",(0,a.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/context/save"}),(0,a.yg)("inlineCode",{parentName:"a"},"context::save")),",\n",(0,a.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/context/update"}),(0,a.yg)("inlineCode",{parentName:"a"},"context::update"))))}D.isMDXComponent=!0}}]);