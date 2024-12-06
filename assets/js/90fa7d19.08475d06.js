"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61876],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=c(r),u=a,m=l["".concat(s,".").concat(u)]||l[u]||y[u]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>I});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&d(e,r,t[r]);return e},y=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={},g="read_bitz",b={unversionedId:"tql2/operators/read_bitz",id:"version-v4.24/tql2/operators/read_bitz",title:"read_bitz",description:"Parses incoming BITZ (Tenzir's internal wire format) byte stream into event",source:"@site/versioned_docs/version-v4.24/tql2/operators/read_bitz.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_bitz",permalink:"/tql2/operators/read_bitz",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/read_bitz.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"rare",permalink:"/tql2/operators/rare"},next:{title:"read_cef",permalink:"/tql2/operators/read_cef"}},f={},I=[{value:"Description",id:"description",level:2}],h={toc:I},v="wrapper";function w(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.yg)(v,y(l(l({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",l({},{id:"read_bitz"}),"read_bitz"),(0,n.yg)("p",null,"Parses incoming ",(0,n.yg)("inlineCode",{parentName:"p"},"BITZ")," (Tenzir's internal wire format) byte stream into event\nstream."),(0,n.yg)("figure",l({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",l({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",l({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",l({parentName:"code"},{"data-line":""}),(0,n.yg)("span",l({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_bitz"))),(0,n.yg)("button",l({parentName:"pre"},{type:"button",data:"read_bitz",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",l({parentName:"button"},{className:"ready"})),(0,n.yg)("span",l({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",l({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Use BITZ when you need high-throughput structured data exchange with minimal\noverhead. BITZ is a thin wrapper around Arrow's record batches. That is, BITZ\nlays out data in a (compressed) columnar fashion that makes it conducive for\nanalytical workloads. Since it's padded and byte-aligned, it is portable and\ndoesn't induce any deserialization cost, making it suitable for\nwrite-once-read-many use cases."),(0,n.yg)("p",null,"Internally, BITZ uses Arrow's IPC format for serialization and deserialization,\nbut prefixes each message with a 64 bit size prefix to support changing schemas\nbetween batches\u2014something that Arrow's IPC format does not support on its own."),(0,n.yg)("admonition",l({},{title:"Did you know?",type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"BITZ is short for ",(0,n.yg)("strong",{parentName:"p"},"Bi"),"nary ",(0,n.yg)("strong",{parentName:"p"},"T"),"en",(0,n.yg)("strong",{parentName:"p"},"z"),"ir, and a play on the word bits.")))}w.isMDXComponent=!0}}]);