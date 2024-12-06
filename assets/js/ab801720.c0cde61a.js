"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25032],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>c});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},d=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=s(n),m=r,c=g["".concat(l,".").concat(m)]||g[m]||y[m]||i;return n?t.createElement(c,p(p({ref:a},d),{},{components:n})):t.createElement(c,p({ref:a},d))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[g]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46180:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>N,toc:()=>b});var t=n(15680),r=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&d(e,n,a[n]);if(o)for(var n of o(a))s.call(a,n)&&d(e,n,a[n]);return e},y=(e,a)=>i(e,p(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n};const c={sidebar_custom_props:{operator:{transformation:!0}}},u="sigma",N={unversionedId:"operators/sigma",id:"version-v4.21/operators/sigma",title:"sigma",description:"Filter the input with Sigma rules and output matching events.",source:"@site/versioned_docs/version-v4.21/operators/sigma.md",sourceDirName:"operators",slug:"/operators/sigma",permalink:"/v4.21/operators/sigma",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/operators/sigma.md",tags:[],version:"v4.21",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"show",permalink:"/v4.21/operators/show"},next:{title:"slice",permalink:"/v4.21/operators/slice"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;rule.yaml&gt;</code>",id:"ruleyaml",level:3},{value:"<code>&lt;directory&gt;</code>",id:"directory",level:3},{value:"<code>--refresh-interval &lt;refresh-interval&gt;</code>",id:"--refresh-interval-refresh-interval",level:3},{value:"Examples",id:"examples",level:2}],I={toc:b},f="wrapper";function v(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(f,y(g(g({},I),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",g({},{id:"sigma"}),"sigma"),(0,t.yg)("p",null,"Filter the input with ",(0,t.yg)("a",g({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma"}),"Sigma rules")," and output matching events."),(0,t.yg)("h2",g({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{}),"sigma <rule> [--refresh-interval <refresh-interval>]\nsigma <directory> [--refresh-interval <refresh-interval>]\n")),(0,t.yg)("h2",g({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"sigma")," operator executes ",(0,t.yg)("a",g({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma"}),"Sigma rules")," on\nits input. If a rule matches, the operator emits a ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir.sigma")," event that\nwraps the input record into a new record along with the matching rule. The\noperator discards all events that do not match the provided rules."),(0,t.yg)("p",null,"For each rule, the operator transpiles the YAML into an\n",(0,t.yg)("a",g({parentName:"p"},{href:"/v4.21/language/expressions"}),"expression")," and instantiates a\n",(0,t.yg)("a",g({parentName:"p"},{href:"/v4.21/operators/where"}),(0,t.yg)("inlineCode",{parentName:"a"},"where"))," operator, followed by ",(0,t.yg)("a",g({parentName:"p"},{href:"/v4.21/operators/put"}),(0,t.yg)("inlineCode",{parentName:"a"},"put"))," to generate an output.\nHere's how the transpilation works. The Sigma rule YAML format requires a\n",(0,t.yg)("inlineCode",{parentName:"p"},"detection")," attribute that includes a map of named sub-expression called ",(0,t.yg)("em",{parentName:"p"},"search\nidentifiers"),". In addition, ",(0,t.yg)("inlineCode",{parentName:"p"},"detection")," must include a final ",(0,t.yg)("inlineCode",{parentName:"p"},"condition")," that\ncombines search identifiers using boolean algebra (AND, OR, and NOT) or\nsyntactic sugar to reference groups of search expressions, e.g., using the\n",(0,t.yg)("inlineCode",{parentName:"p"},"1/all of *")," or plain wildcard syntax. Consider the following ",(0,t.yg)("inlineCode",{parentName:"p"},"detection"),"\nembedded in a rule:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"detection"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"  foo"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"    a"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"42")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"    b"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"evil"')),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"  bar"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"    c"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2.3.4")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"  condition"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),"foo or not bar"))),(0,t.yg)("button",g({parentName:"pre"},{type:"button",data:'detection:\n  foo:\n    a: 42\n    b: "evil"\n  bar:\n    c: 1.2.3.4\n  condition: foo or not bar',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",g({parentName:"button"},{className:"ready"})),(0,t.yg)("span",g({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"We translate this rule piece by building a symbol table of all keys (",(0,t.yg)("inlineCode",{parentName:"p"},"foo")," and\n",(0,t.yg)("inlineCode",{parentName:"p"},"bar"),"). Each sub-expression is a valid expression in itself:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"foo"),": ",(0,t.yg)("inlineCode",{parentName:"li"},'a == 42 && b == "evil"')),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"bar"),": ",(0,t.yg)("inlineCode",{parentName:"li"},"c == 1.2.3.4"))),(0,t.yg)("p",null,"Finally, we combine the expression according to ",(0,t.yg)("inlineCode",{parentName:"p"},"condition"),":"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"c","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"c","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(a "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 42"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," &&"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," b "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "evil"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),") "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"||"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," !"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," (c "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}})," 1.2.3.4"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),")"))),(0,t.yg)("button",g({parentName:"pre"},{type:"button",data:'(a == 42 && b == "evil") || ! (c == 1.2.3.4)',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",g({parentName:"button"},{className:"ready"})),(0,t.yg)("span",g({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"We parse the YAML string values according to Tenzir's richer data model, e.g.,\nthe expression ",(0,t.yg)("inlineCode",{parentName:"p"},"c: 1.2.3.4")," becomes a field named ",(0,t.yg)("inlineCode",{parentName:"p"},"c")," and value ",(0,t.yg)("inlineCode",{parentName:"p"},"1.2.3.4")," of\ntype ",(0,t.yg)("inlineCode",{parentName:"p"},"ip"),", rather than a ",(0,t.yg)("inlineCode",{parentName:"p"},"string"),". Sigma also comes with its own ",(0,t.yg)("a",g({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma-specification/blob/main/Taxonomy_specification.md"}),"event\ntaxonomy"),"\nto standardize field names. The ",(0,t.yg)("inlineCode",{parentName:"p"},"sigma")," operator currently does not normalize\nfields according to this taxonomy but rather takes the field names verbatim from\nthe search identifier."),(0,t.yg)("p",null,"Sigma uses ",(0,t.yg)("a",g({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma-specification/blob/main/Sigma_specification.md#value-modifiers"}),"value\nmodifiers"),"\nto select a concrete relational operator for given search predicate. Without a\nmodifier, Sigma uses equality comparison (",(0,t.yg)("inlineCode",{parentName:"p"},"=="),") of field and value. For example,\nthe ",(0,t.yg)("inlineCode",{parentName:"p"},"contains")," modifier changes the relational operator to substring search, and\nthe ",(0,t.yg)("inlineCode",{parentName:"p"},"re")," modifier switches to a regular expression match. The table below shows\nwhat modifiers the ",(0,t.yg)("inlineCode",{parentName:"p"},"sigma")," operator supports, where \u2705 means implemented, \ud83d\udea7 not\nyet implemented but possible, and \u274c not yet supported:"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",g({parentName:"tr"},{align:null}),"Modifier"),(0,t.yg)("th",g({parentName:"tr"},{align:null}),"Use"),(0,t.yg)("th",g({parentName:"tr"},{align:"center"}),"sigmac"),(0,t.yg)("th",g({parentName:"tr"},{align:"center"}),"Tenzir"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"contains")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"perform a substring search with the value"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"startswith")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"match the value as a prefix"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"endswith")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"match the value as a suffix"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"base64")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"encode the value with Base64"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"base64offset")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"encode value as all three possible Base64 variants"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"utf16le"),"/",(0,t.yg)("inlineCode",{parentName:"td"},"wide")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"transform the value to UTF16 little endian"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"utf16be")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"transform the value to UTF16 big endian"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"utf16")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"transform the value to UTF16"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"re")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"interpret the value as regular expression"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"cidr")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"interpret the value as a IP CIDR"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u274c"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"all")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"changes the expression logic from OR to AND"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"lt")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"compare less than (",(0,t.yg)("inlineCode",{parentName:"td"},"<"),") the value"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u274c"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"lte")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"compare less than or equal to (",(0,t.yg)("inlineCode",{parentName:"td"},"<="),") the value"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u274c"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"gt")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"compare greater than (",(0,t.yg)("inlineCode",{parentName:"td"},">"),") the value"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u274c"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"gte")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"compare greater than or equal to (",(0,t.yg)("inlineCode",{parentName:"td"},">="),") the value"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u274c"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u2705")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",g({parentName:"tr"},{align:null}),(0,t.yg)("inlineCode",{parentName:"td"},"expand")),(0,t.yg)("td",g({parentName:"tr"},{align:null}),"expand value to placeholder strings, e.g., ",(0,t.yg)("inlineCode",{parentName:"td"},"%something%")),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u274c"),(0,t.yg)("td",g({parentName:"tr"},{align:"center"}),"\u274c")))),(0,t.yg)("h3",g({},{id:"ruleyaml"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<rule.yaml>")),(0,t.yg)("p",null,"The rule to match."),(0,t.yg)("p",null,"This invocation transpiles ",(0,t.yg)("inlineCode",{parentName:"p"},"rule.yaml")," at the time of pipeline creation."),(0,t.yg)("h3",g({},{id:"directory"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<directory>")),(0,t.yg)("p",null,"The directory to watch."),(0,t.yg)("p",null,"This invocation watches a directory and attempts to parse each contained file as\na Sigma rule. The ",(0,t.yg)("inlineCode",{parentName:"p"},"sigma")," operator matches if ",(0,t.yg)("em",{parentName:"p"},"any")," of the contained rules\nmatch, effectively creating a disjunction of all rules inside the directory."),(0,t.yg)("h3",g({},{id:"--refresh-interval-refresh-interval"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--refresh-interval <refresh-interval>")),(0,t.yg)("p",null,"How often the Sigma operator looks at the specified rule or directory of rules\nto update its internal state."),(0,t.yg)("p",null,"Defaults to 5 seconds."),(0,t.yg)("h2",g({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Apply a Sigma rule to an EVTX file using\n",(0,t.yg)("a",g({parentName:"p"},{href:"https://github.com/omerbenamram/evtx"}),(0,t.yg)("inlineCode",{parentName:"a"},"evtx_dump")),":"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"evtx_dump"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," -o"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," jsonl"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," file.evtx"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}})," tenzir"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}})," 'read json | sigma rule.yaml'"))),(0,t.yg)("button",g({parentName:"pre"},{type:"button",data:"evtx_dump -o jsonl file.evtx | tenzir 'read json | sigma rule.yaml'",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",g({parentName:"button"},{className:"ready"})),(0,t.yg)("span",g({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"Apply a Sigma rule over historical data in a node from the last day:"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{}),"export | where :timestamp > 1 day ago | sigma rule.yaml\n")),(0,t.yg)("p",null,"Watch a directory of Sigma rules and apply all of them on a continuous stream of\nSuricata events:"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{}),"from file --follow eve.json read suricata | sigma /tmp/rules/\n")),(0,t.yg)("p",null,"When you add a new file to ",(0,t.yg)("inlineCode",{parentName:"p"},"/tmp/rules"),", the ",(0,t.yg)("inlineCode",{parentName:"p"},"sigma")," operator transpiles it and\nwill match it on all subsequent inputs."))}v.isMDXComponent=!0}}]);