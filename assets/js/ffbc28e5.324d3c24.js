"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24778],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),l=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},y=function(e){var a=l(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=l(n),g=r,m=c["".concat(i,".").concat(g)]||c[g]||d[g]||o;return n?t.createElement(m,p(p({ref:a},y),{},{components:n})):t.createElement(m,p({ref:a},y))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=g;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},23478:(e,a,n)=>{n.d(a,{Ay:()=>I,RM:()=>N});var t=n(15680),r=n(86139),o=n(76407),p=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))y.call(a,n)&&d(e,n,a[n]);if(l)for(var n of l(a))c.call(a,n)&&d(e,n,a[n]);return e},m=(e,a)=>s(e,i(a)),u=(e,a)=>{var n={};for(var t in e)y.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n};const N=[...r.RM,{value:"<code>schema = string (optional)</code>",id:"schema--string-optional",level:3},{value:"<code>selector = string (optional)</code>",id:"selector--string-optional",level:3},...o.RM,{value:"<code>unflatten = string (optional)</code>",id:"unflatten--string-optional",level:3}],h={toc:N},b="wrapper";function I(e){var a=e,{components:n}=a,p=u(a,["components"]);return(0,t.yg)(b,m(g(g({},h),p),{components:n,mdxType:"MDXLayout"}),(0,t.yg)(r.Ay,{mdxType:"RawOption"}),(0,t.yg)("h3",g({},{id:"schema--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema = string (optional)")),(0,t.yg)("p",null,"Provide the name of a schema to be used by the parser."),(0,t.yg)("p",null,"If a schema with a matching name is installed, the result will always have\nall fields from that schema."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Fields that are specified in the schema, but did not appear in the input will be null."),(0,t.yg)("li",{parentName:"ul"},"Fields that appear in the input, but not in the schema will also be kept. ",(0,t.yg)("inlineCode",{parentName:"li"},"schema_only=true"),"\ncan be used to reject fields that are not in the schema.")),(0,t.yg)("p",null,"If the given schema does not exist, this option instead assigns the output schema name only."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option."),(0,t.yg)("h3",g({},{id:"selector--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"selector = string (optional)")),(0,t.yg)("p",null,"Designates a field value as schema name with an optional dot-separated prefix."),(0,t.yg)("p",null,"The string is parsed as ",(0,t.yg)("inlineCode",{parentName:"p"},"<fieldname>[:<prefix>]"),". The ",(0,t.yg)("inlineCode",{parentName:"p"},"prefix")," is optional and\nwill be prepended to the field value to generate the schema name."),(0,t.yg)("p",null,"For example, the Suricata EVE JSON format includes a field\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,t.yg)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,t.yg)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,t.yg)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," option is incompatible with the ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," option."),(0,t.yg)(o.Ay,{mdxType:"SchemaOnlyOption"}),(0,t.yg)("p",null,"If the schema name is obtained via a ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," and it does not exist, this\nhas no effect."),(0,t.yg)("p",null,"This option requires either ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"selector")," to be set."),(0,t.yg)("h3",g({},{id:"unflatten--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"unflatten = string (optional)")),(0,t.yg)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,t.yg)("p",null,"A popular example of this is the ",(0,t.yg)("a",g({parentName:"p"},{href:"/v4.28/tql2/operators/read_zeek_json"}),"Zeek JSON")," format. It includes\nthe fields ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_p")," at the\ntop-level. The data is best modeled as an ",(0,t.yg)("inlineCode",{parentName:"p"},"id")," record with four nested fields\n",(0,t.yg)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,t.yg)("p",null,"Without an unflatten separator, the data looks like this:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",g({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"Without unflattening"),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.orig_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.1"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.orig_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.resp_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.2"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id.resp_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"5")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",g({parentName:"pre"},{type:"button",data:'{\n  "id.orig_h": "1.1.1.1",\n  "id.orig_p": 10,\n  "id.resp_h": "1.1.1.2",\n  "id.resp_p": 5\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",g({parentName:"button"},{className:"ready"})),(0,t.yg)("span",g({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"With the unflatten separator set to ",(0,t.yg)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",g({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"With 'unflatten'"),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'  "id"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "orig_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.1"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "orig_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"10"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "resp_h"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"1.1.1.2"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),'    "resp_p"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"5")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",g({parentName:"pre"},{type:"button",data:'{\n  "id": {\n    "orig_h": "1.1.1.1",\n    "orig_p": 10,\n    "resp_h": "1.1.1.2",\n    "resp_p": 5\n  }\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",g({parentName:"button"},{className:"ready"})),(0,t.yg)("span",g({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}I.isMDXComponent=!0},86139:(e,a,n)=>{n.d(a,{Ay:()=>h,RM:()=>m});var t=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))i.call(a,n)&&y(e,n,a[n]);if(s)for(var n of s(a))l.call(a,n)&&y(e,n,a[n]);return e},d=(e,a)=>o(e,p(a)),g=(e,a)=>{var n={};for(var t in e)i.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))a.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const m=[{value:"<code>raw = bool (optional)</code>",id:"raw--bool-optional",level:3}],u={toc:m},N="wrapper";function h(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(N,d(c(c({},u),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h3",c({},{id:"raw--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"raw = bool (optional)")),(0,t.yg)("p",null,"Use only the raw types that are native to the parsed format. Fields that have a type\nspecified in the chosen ",(0,t.yg)("inlineCode",{parentName:"p"},"schema")," will still be parsed according to the schema."))}h.isMDXComponent=!0},76407:(e,a,n)=>{n.d(a,{Ay:()=>h,RM:()=>m});var t=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))i.call(a,n)&&y(e,n,a[n]);if(s)for(var n of s(a))l.call(a,n)&&y(e,n,a[n]);return e},d=(e,a)=>o(e,p(a)),g=(e,a)=>{var n={};for(var t in e)i.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))a.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const m=[{value:"<code>schema_only = bool (optional)</code>",id:"schema_only--bool-optional",level:3}],u={toc:m},N="wrapper";function h(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(N,d(c(c({},u),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h3",c({},{id:"schema_only--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"schema_only = bool (optional)")),(0,t.yg)("p",null,"When working with an existing schema, this option will ensure that the output\nschema has ",(0,t.yg)("em",{parentName:"p"},"only")," the fields from that schema."))}h.isMDXComponent=!0},6938:(e,a,n)=>{n.d(a,{Ay:()=>b,RM:()=>u});var t=n(15680),r=n(23478),o=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,d=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(i)for(var n of i(a))y.call(a,n)&&c(e,n,a[n]);return e},g=(e,a)=>p(e,s(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const u=[{value:"<code>merge = bool (optional)</code>",id:"merge--bool-optional",level:3},...r.RM],N={toc:u},h="wrapper";function b(e){var a=e,{components:n}=a,o=m(a,["components"]);return(0,t.yg)(h,g(d(d({},N),o),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h3",d({},{id:"merge--bool-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"merge = bool (optional)")),(0,t.yg)("p",null,"Merges all incoming events into a single schema","*"," that converges over time. This\noption is usually the fastest ",(0,t.yg)("em",{parentName:"p"},"for reading")," highly heterogeneous data, but can lead\nto huge schemas filled with nulls and imprecise results. Use with caution."),(0,t.yg)("p",null,"*",": In selector mode, only events with the same selector are merged."),(0,t.yg)(r.Ay,{mdxType:"Base"}))}b.isMDXComponent=!0},30285:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>N,default:()=>D,frontMatter:()=>u,metadata:()=>h,toc:()=>I});var t=n(15680),r=n(6938),o=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,d=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(i)for(var n of i(a))y.call(a,n)&&c(e,n,a[n]);return e},g=(e,a)=>p(e,s(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const u={},N="read_cef",h={unversionedId:"tql2/operators/read_cef",id:"version-v4.28/tql2/operators/read_cef",title:"read_cef",description:"Parses an incoming Common Event Format (CEF) stream into events.",source:"@site/versioned_docs/version-v4.28/tql2/operators/read_cef.mdx",sourceDirName:"tql2/operators",slug:"/tql2/operators/read_cef",permalink:"/v4.28/tql2/operators/read_cef",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/tql2/operators/read_cef.mdx",tags:[],version:"v4.28",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read_bitz",permalink:"/v4.28/tql2/operators/read_bitz"},next:{title:"read_csv",permalink:"/v4.28/tql2/operators/read_csv"}},b={},I=[{value:"Description",id:"description",level:2},...r.RM,{value:"See Also",id:"see-also",level:2}],E={toc:I},f="wrapper";function D(e){var a=e,{components:n}=a,o=m(a,["components"]);return(0,t.yg)(f,g(d(d({},E),o),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",d({},{id:"read_cef"}),"read_cef"),(0,t.yg)("p",null,"Parses an incoming ",(0,t.yg)("a",d({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"Common Event Format (CEF)")," stream into events."),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_cef"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [merge"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, raw"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, schema"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, selector"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, schema_only"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, unflatten"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"string]"))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:"read_cef [merge=bool, raw=bool, schema=string, selector=string, schema_only=bool, unflatten=string]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h2",d({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("a",d({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"Common Event Format (CEF)")," is a text-based event format that\noriginally stems from ArcSight. It is line-based and human readable. The first 7\nfields of a CEF event are always the same, and the 8th ",(0,t.yg)("em",{parentName:"p"},"extension")," field is an\noptional list of key-value pairs:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"CEF:Version|Device Vendor|Device Product|Device Version|Device Event Class ID|Name|Severity|[Extension]\n")),(0,t.yg)("p",null,"Here is a real-world example:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),'CEF:0|Cynet|Cynet 360|4.5.4.22139|0|Memory Pattern - Cobalt Strike Beacon ReflectiveLoader|8| externalId=6 clientId=2251997 scanGroupId=3 scanGroupName=Manually Installed Agents sev=High duser=tikasrv01\\\\administrator cat=END-POINT Alert dhost=TikaSrv01 src=172.31.5.93 filePath=c:\\\\windows\\\\temp\\\\javac.exe fname=javac.exe rt=3/30/2022 10:55:34 AM fileHash=2BD1650A7AC9A92FD227B2AB8782696F744DD177D94E8983A19491BF6C1389FD rtUtc=Mar 30 2022 10:55:34.688 dtUtc=Mar 30 2022 10:55:32.458 hostLS=2022-03-30 10:55:34 GMT+00:00 osVer=Windows Server 2016 Datacenter x64 1607 epsVer=4.5.5.6845 confVer=637842168250000000 prUser=tikasrv01\\\\administrator pParams="C:\\\\Windows\\\\Temp\\\\javac.exe" sign=Not signed pct=2022-03-30 10:55:27.140, 2022-03-30 10:52:40.222, 2022-03-30 10:52:39.609 pFileHash=1F955612E7DB9BB037751A89DAE78DFAF03D7C1BCC62DF2EF019F6CFE6D1BBA7 pprUser=tikasrv01\\\\administrator ppParams=C:\\\\Windows\\\\Explorer.EXE pssdeep=49152:2nxldYuopV6ZhcUYehydN7A0Fnvf2+ecNyO8w0w8A7/eFwIAD8j3:Gxj/7hUgsww8a0OD8j3 pSign=Signed and has certificate info gpFileHash=CFC6A18FC8FE7447ECD491345A32F0F10208F114B70A0E9D1CD72F6070D5B36F gpprUser=tikasrv01\\\\administrator gpParams=C:\\\\Windows\\\\system32\\\\userinit.exe gpssdeep=384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu gpSign=Signed actRem=Kill, Rename\n')),(0,t.yg)("p",null,"The ",(0,t.yg)("a",d({parentName:"p"},{href:"https://community.microfocus.com/cfs-file/__key/communityserver-wikis-components-files/00-00-00-00-23/3731.CommonEventFormatV25.pdf"}),"CEF specification")," pre-defines several extension field key names and\ndata types for the corresponding values. Tenzir's parser does not enforce the\nstrict definitions and instead tries to infer the type from the provided values."),(0,t.yg)("p",null,"Tenzir translates the ",(0,t.yg)("inlineCode",{parentName:"p"},"extension")," field to a nested record, where the key-value\npairs of the extensions map to record fields. Here is an example of the above\nevent:"),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("figcaption",d({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"json","data-theme":"github-dark-default"}),"Output (shortened)"),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "cef_version"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "device_vendor"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Cynet"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "device_product"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Cynet 360"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "device_version"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"4.5.4.22139"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "signature_id"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"0"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "name"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Memory Pattern - Cobalt Strike Beacon ReflectiveLoader"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "severity"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"8"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "extension"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "externalId"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"6"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "clientId"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"2251997"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "scanGroupId"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"3"),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}}),"    ...")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "gpssdeep"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "gpSign"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Signed"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'    "actRem"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Kill, Rename"')),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",d({parentName:"pre"},{type:"button",data:'{\n  "cef_version": 0,\n  "device_vendor": "Cynet",\n  "device_product": "Cynet 360",\n  "device_version": "4.5.4.22139",\n  "signature_id": "0",\n  "name": "Memory Pattern - Cobalt Strike Beacon ReflectiveLoader",\n  "severity": "8",\n  "extension": {\n    "externalId": 6,\n    "clientId": 2251997,\n    "scanGroupId": 3,\n    ...\n    "gpssdeep": "384:YtOYTIcNkWE9GHAoGLcVB5QGaRW5SmgydKz3fvnJYunOTBbsMoMH3nxENoWlymW:YLTVNkzGgoG+5BSmUfvJMdsq3xYu",\n    "gpSign": "Signed",\n    "actRem": "Kill, Rename"\n  }\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",d({parentName:"button"},{className:"ready"})),(0,t.yg)("span",d({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)(r.Ay,{mdxType:"CommonOptions"}),(0,t.yg)("h2",d({},{id:"see-also"}),"See Also"),(0,t.yg)("p",null,(0,t.yg)("a",d({parentName:"p"},{href:"/v4.28/tql2/functions/parse_cef"}),(0,t.yg)("inlineCode",{parentName:"a"},"parse_cef")),", ",(0,t.yg)("a",d({parentName:"p"},{href:"/v4.28/tql2/operators/read_leef"}),(0,t.yg)("inlineCode",{parentName:"a"},"read_leef"))))}D.isMDXComponent=!0}}]);