"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13315],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,m=c["".concat(p,".").concat(g)]||c[g]||y[g]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},23111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>w,frontMatter:()=>m,metadata:()=>v,toc:()=>f});var a=n(15680),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e},y=(e,t)=>i(e,o(t)),g=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const m={},u="write_xsv",v={unversionedId:"tql2/operators/write_xsv",id:"version-v4.26/tql2/operators/write_xsv",title:"write_xsv",description:"Transforms event stream to XSV byte stream.",source:"@site/versioned_docs/version-v4.26/tql2/operators/write_xsv.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/write_xsv",permalink:"/tql2/operators/write_xsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/tql2/operators/write_xsv.md",tags:[],version:"v4.26",frontMatter:{},sidebar:"docsSidebar",previous:{title:"write_tsv",permalink:"/tql2/operators/write_tsv"},next:{title:"write_yaml",permalink:"/tql2/operators/write_yaml"}},b={},f=[{value:"Description",id:"description",level:2},{value:"<code>field_sep: str</code>",id:"field_sep-str",level:3},{value:"<code>list_sep: str</code>",id:"list_sep-str",level:3},{value:"<code>null_value: str</code>",id:"null_value-str",level:3},{value:"<code>no_header=bool (optional)</code>",id:"no_headerbool-optional",level:3},{value:"Examples",id:"examples",level:2}],h={toc:f},N="wrapper";function w(e){var t=e,{components:n}=t,r=g(t,["components"]);return(0,a.yg)(N,y(c(c({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"write_xsv"}),"write_xsv"),(0,a.yg)("p",null,"Transforms event stream to XSV byte stream."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_xsv"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," field_sep"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, list_sep"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, null_value"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [no_header"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))),(0,a.yg)("button",c({parentName:"pre"},{type:"button",data:"write_xsv field_sep:str, list_sep:str, null_value:str, [no_header=bool]",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,a.yg)("span",c({parentName:"button"},{className:"ready"})),(0,a.yg)("span",c({parentName:"button"},{className:"success"}))),(0,a.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Delimiter-separated_values"}),(0,a.yg)("inlineCode",{parentName:"a"},"xsv"))," format is a generalization of ",(0,a.yg)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Comma-separated_values"}),"comma-separated values (CSV)")," data\nin tabular form with a more flexible separator specification supporting tabs,\ncommas, and spaces. The first line in an XSV file is the header that describes\nthe field names. The remaining lines contain concrete values. One line\ncorresponds to one event, minus the header."),(0,a.yg)("p",null,"The following table lists existing XSV configurations:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",c({parentName:"tr"},{align:null}),"Format"),(0,a.yg)("th",c({parentName:"tr"},{align:"center"}),"Field Separator"),(0,a.yg)("th",c({parentName:"tr"},{align:"center"}),"List Separator"),(0,a.yg)("th",c({parentName:"tr"},{align:"center"}),"Null Value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:null}),(0,a.yg)("a",c({parentName:"td"},{href:"/tql2/operators/write_csv"}),(0,a.yg)("inlineCode",{parentName:"a"},"csv"))),(0,a.yg)("td",c({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},",")),(0,a.yg)("td",c({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},";")),(0,a.yg)("td",c({parentName:"tr"},{align:"center"}),"empty")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:null}),(0,a.yg)("a",c({parentName:"td"},{href:"/tql2/operators/write_ssv"}),(0,a.yg)("inlineCode",{parentName:"a"},"ssv"))),(0,a.yg)("td",c({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},"<space>")),(0,a.yg)("td",c({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},",")),(0,a.yg)("td",c({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},"-"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:null}),(0,a.yg)("a",c({parentName:"td"},{href:"/tql2/operators/write_tsv"}),(0,a.yg)("inlineCode",{parentName:"a"},"tsv"))),(0,a.yg)("td",c({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},"\\t")),(0,a.yg)("td",c({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},",")),(0,a.yg)("td",c({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},"-"))))),(0,a.yg)("p",null,"Note that nested records have dot-separated field names."),(0,a.yg)("h3",c({},{id:"field_sep-str"}),(0,a.yg)("inlineCode",{parentName:"h3"},"field_sep: str")),(0,a.yg)("p",null,"The string separating different fields."),(0,a.yg)("h3",c({},{id:"list_sep-str"}),(0,a.yg)("inlineCode",{parentName:"h3"},"list_sep: str")),(0,a.yg)("p",null,"The string separating different elements in a list within a single field."),(0,a.yg)("h3",c({},{id:"null_value-str"}),(0,a.yg)("inlineCode",{parentName:"h3"},"null_value: str")),(0,a.yg)("p",null,"The string denoting an absent value."),(0,a.yg)("h3",c({},{id:"no_headerbool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"no_header=bool (optional)")),(0,a.yg)("p",null,"Whether to not print a header line containing the field names."),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"))}w.isMDXComponent=!0}}]);