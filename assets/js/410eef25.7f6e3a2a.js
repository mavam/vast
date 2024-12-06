"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41853],{15680:(e,a,n)=>{n.d(a,{xA:()=>i,yg:()=>g});var t=n(96540);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},i=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=y(n),m=p,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?t.createElement(g,s(s({ref:a},i),{},{components:n})):t.createElement(g,s({ref:a},i))}));function g(e,a){var n=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:p,s[1]=o;for(var y=2;y<r;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84141:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>D,contentTitle:()=>N,default:()=>b,frontMatter:()=>g,metadata:()=>u,toc:()=>E});var t=n(15680),p=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,i=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&i(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&i(e,n,a[n]);return e},d=(e,a)=>r(e,s(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const g={sidebar_custom_props:{operator:{transformation:!0}}},N="unroll",u={unversionedId:"operators/unroll",id:"version-v4.23/operators/unroll",title:"unroll",description:"Unrolls a list by producing multiple events, one for each item.",source:"@site/versioned_docs/version-v4.23/operators/unroll.md",sourceDirName:"operators",slug:"/operators/unroll",permalink:"/v4.23/operators/unroll",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/operators/unroll.md",tags:[],version:"v4.23",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"unique",permalink:"/v4.23/operators/unique"},next:{title:"velociraptor",permalink:"/v4.23/operators/velociraptor"}},D={},E=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],I={toc:E},M="wrapper";function b(e){var a=e,{components:n}=a,p=m(a,["components"]);return(0,t.yg)(M,d(c(c({},I),p),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"unroll"}),"unroll"),(0,t.yg)("p",null,"Unrolls a list by producing multiple events, one for each item."),(0,t.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"unroll <field>\n")),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"unroll")," operator transforms each input event into a multiple output events.\nFor each item in the input list, one output event is created, where the list is\nreplaced with its item. The surrounding data is kept as-is."),(0,t.yg)("p",null,(0,t.yg)("figure",c({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,t.yg)("svg",c({parentName:"figure"},{viewBox:"0 0 975.625 212",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1XbU/bMFx1MDAxMP7eX1x1MDAxMWVfUbDz4qR8K4XxomlcdTAwMWFiXHUwMDFi2ihCJnFTr66dxS4toP732SnEaVx1MDAxYTb2aUyilarcPXfn6/nuufah5ziuuiuIu+e4ZJliRrNcdTAwMTIv3Fx1MDAxZKO/JaWkgmvIr2Qp5mVaWU6UKuTe7i4uXG7PenmpmK09XHQjM8KV1LaXWnach+pTIzQz/seDo+ucgW83p9+/zI75XHUwMDA1+jmIv1auldFTQoosldUutSpcdTAwMDCglu9MYlxyeUEzNTG6XHUwMDEweaBcdTAwMWbEUY1MXGLNJ0pDsO/XSsxzZk6xXHUwMDAxpCrFlFxmXHUwMDA1XHUwMDEzpTn9XHUwMDFkJOZtXHUwMDEzuMHpNC/FnGfWJkFcdOkjazOmjJ2rO7YuXHUwMDEzTifzslx1MDAxMWF9wsVjorClr/2k0Fx1MDAwNbVe+sh8womUXHUwMDFiPqLAKVWmXGKwUVx1MDAwNJNfcZJVlb+yWZV4Rk5M6fmcsWZgnj1cdTAwMDbeXHUwMDAwJCHGOEBhXHUwMDA0XHUwMDAxgqhcdTAwMDZsS4SgrfwoeNVcdTAwMWTQXHUwMDA3IVxu/Fx1MDAwNCS1XHUwMDA1lVx1MDAwN7olVFx1MDAxNXSMmSS2piaFQ9suXHUwMDFiacyLXGavnWBcZoMk0bfahyCocUb5tO3DRDrtOKdqJV3ah1x1MDAxMXeckSvLdKTFkas7wlx1MDAwM57vwZG7s4YyqVxmdGkkI/sg0Fx1MDAxNlx1MDAxMFx1MDAwNp7/aGO0MNY+yIuRXHUwMDA3I9DUP8VcdTAwMGKDkWuUVyO+arSH4Oqc3pOqdTe07/GMMnObwUbOXHUwMDAzRnNTbpeRcWNcdTAwMTZ0yVx1MDAxNdVzV8NKXHUwMDE0XHUwMDE2TXU8TDkpt69cXJQ0p1x1MDAxY7PPr6NcdTAwMWX6XHUwMDA2yXE9nZ5f6Vc7XZyxP/+ApFx1MDAxY15cdTAwMWPBXHUwMDFm8nTRP1x1MDAxY2eKlducgctSLDZJI0o2SSPoIFxy2LiOmi6s6o0s/khcdTAwMTahXHUwMDFl+DhcdTAwMDaB3+ZcdTAwMDWNoS1lTVx1MDAxNiGMoiBcdTAwMDGxtfj3ZFFcYtpcXF7mZZ9cdTAwMWPbXHUwMDA0lVA/X+10Wjc6q2Xfa/m5XGZLNVx1MDAxNLNcdTAwMTlV+ot8Mkls1VrhUu1TnlGetzHCs2eQymtgXHUwMDA2Y0Lw1sVqvybmqpKu2/03w0iHanmAXHUwMDAwuL+eXHUwMDFm5cOzZJCdXHUwMDFkJy9Z4HHYWuBoe1x1MDAxNiNcdTAwMTh5yO9Y3/Hb9v6LgexD2EcoibtcdTAwMDbSXHUwMDBmn1x1MDAxYshcdTAwMDRcdTAwMDRcdTAwMTGCYfg6l3f3orJbqrWeViP+XHUwMDEyn9byeqlXc7W97lx1MDAxZP8/lK37p0DvkVx1MDAxZl39V+NcXOmG0uCai9xbSlx1MDAxNvtcdTAwMWRDPa5ehr0q7jJDTUx3Pqx6q1+kMz1cdTAwMTkifQ==",(0,t.yg)("defs",{parentName:"svg"},(0,t.yg)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}')),(0,t.yg)("text",c({parentName:"svg"},{y:"19.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),"{"),(0,t.yg)("text",c({parentName:"svg"},{y:"43.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'  "src": "192.0.2.1",'),(0,t.yg)("text",c({parentName:"svg"},{y:"67.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'  "dst": ['),(0,t.yg)("text",c({parentName:"svg"},{y:"91.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'    "203.0.113.2",'),(0,t.yg)("text",c({parentName:"svg"},{y:"115.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'    "172.16.76.150",'),(0,t.yg)("text",c({parentName:"svg"},{y:"139.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),'    "192.0.2.143"'),(0,t.yg)("text",c({parentName:"svg"},{y:"163.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),"  ]"),(0,t.yg)("text",c({parentName:"svg"},{y:"187.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(10 10)"}),"}"),(0,t.yg)("g",c({parentName:"svg"},{strokeLineCap:"round"}),(0,t.yg)("path",c({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M290 110c27.34-2.1 54.15.39 120 0m-120 0c43.77 1.42 85.72-.2 120 0"})),(0,t.yg)("path",c({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m409.86 111.63-12.65 5.67-.26-11.84 11.87 5.84"})),(0,t.yg)("path",c({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M410 110c-2.76.45-5.91 3.76-13.56 6.41M410 110c-4.13 2.82-9.6 3.89-13.56 6.41m0 0c-.29-2.92-.31-7.3-.07-12.68m.07 12.68c.41-2.96-.51-7.36-.07-12.68m0 0c2.38 2.12 7.3 1.45 13.63 6.27m-13.63-6.27c5.19 2.8 9.95 5.06 13.63 6.27m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("text",c({parentName:"svg"},{y:"19.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(450 70)"}),'{"src": "192.0.2.1", "dst": "203.0.113.2"}'),(0,t.yg)("text",c({parentName:"svg"},{y:"43.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(450 70)"}),'{"src": "192.0.2.1", "dst": "172.16.76.150"}'),(0,t.yg)("text",c({parentName:"svg"},{y:"67.313",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(450 70)"}),'{"src": "192.0.2.1", "dst": "192.0.2.143"}')))),(0,t.yg)("p",null,"No output events are produced if the list is empty or if the field is ",(0,t.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Consider the following events:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": []}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'{"a": 1, "b": [1, 2, 3]}\n{"a": 2, "b": [1]}\n{"a": 3, "b": []}\n{"a": 4, "b": null}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"unroll b")," would produce the following output:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'"b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'{"a": 1, "b": 1}\n{"a": 1, "b": 2}\n{"a": 1, "b": 3}\n{"a": 2, "b": 1}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"unroll")," operator can also be used with records."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "src"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.5"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "conn"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": [")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "dest"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.34"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "active"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"381ms"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    },")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "dest"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.120"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "active"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"42ms"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    },")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "dest"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.2.3.4"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "active"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"67ms"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    }")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'{\n  "src": "192.168.0.5",\n  "conn": [\n    {\n      "dest": "192.168.0.34",\n      "active": "381ms"\n    },\n    {\n      "dest": "192.168.0.120",\n      "active": "42ms"\n    },\n    {\n      "dest": "1.2.3.4",\n      "active": "67ms"\n    }\n  ]\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"We can use ",(0,t.yg)("inlineCode",{parentName:"p"},"unroll conn")," to bring this into a form more suited for analysis.\nFor example, we would then be able to use\n",(0,t.yg)("inlineCode",{parentName:"p"},"where active > 100ms || conn.dest !in 192.168.0.0/16")," to filter for relevant\nconnections."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "src"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.5"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "conn"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "dest"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.34"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "active"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"381.0ms"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "src"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"192.168.0.5"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "conn"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "dest"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.2.3.4"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "active"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"67.0ms"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:'{\n  "src": "192.168.0.5",\n  "conn": {\n    "dest": "192.168.0.34",\n    "active": "381.0ms"\n  }\n}\n{\n  "src": "192.168.0.5",\n  "conn": {\n    "dest": "1.2.3.4",\n    "active": "67.0ms"\n  }\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}b.isMDXComponent=!0}}]);