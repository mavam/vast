"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43481],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=i(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||y[m]||p;return n?t.createElement(g,s(s({ref:a},d),{},{components:n})):t.createElement(g,s({ref:a},d))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<p;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73554:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>I,frontMatter:()=>g,metadata:()=>h,toc:()=>v});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&d(e,n,a[n]);if(o)for(var n of o(a))i.call(a,n)&&d(e,n,a[n]);return e},y=(e,a)=>p(e,s(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const g={sidebar_custom_props:{format:{parser:!0,printer:!0}}},u="xsv",h={unversionedId:"formats/xsv",id:"version-v4.22/formats/xsv",title:"xsv",description:"Reads and writes lines with separated values.",source:"@site/versioned_docs/version-v4.22/formats/xsv.md",sourceDirName:"formats",slug:"/formats/xsv",permalink:"/v4.22/formats/xsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/formats/xsv.md",tags:[],version:"v4.22",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"tsv",permalink:"/v4.22/formats/tsv"},next:{title:"yaml",permalink:"/v4.22/formats/yaml"}},N={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Common Options (Parser)",id:"common-options-parser",level:3},{value:"<code>&lt;field-sep&gt;</code>",id:"field-sep",level:3},{value:"<code>&lt;list-sep&gt;</code>",id:"list-sep",level:3},{value:"<code>&lt;null-value&gt;</code>",id:"null-value",level:3},{value:"<code>--allow-comments</code> (Parser)",id:"--allow-comments-parser",level:3},{value:"`--auto-expand (Parser)",id:"--auto-expand-parser",level:3},{value:"<code>--header &lt;header&gt;</code> (Parser)",id:"--header-header-parser",level:3},{value:"<code>--no-header</code> (Printer)",id:"--no-header-printer",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},f="wrapper";function I(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(f,y(c(c({},b),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"xsv"}),"xsv"),(0,t.yg)("p",null,"Reads and writes lines with separated values."),(0,t.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("p",null,"Parser:"),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"csv [--list-sep <list-sep>] [--null-value <null-value>]\n    [--allow-comments] [--auto-expand] [--header <header>]\n    [--schema <schema>] [--selector <fieldname[:prefix]>]\n    [--schema-only] [--raw] [--unnest-separator <separator>]\n")),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"ssv [--list-sep <list-sep>] [--null-value <null-value>]\n    [--allow-comments] [--auto-expand] [--header <header>]\n    [--schema <schema>] [--selector <fieldname[:prefix]>]\n    [--schema-only] [--raw] [--unnest-separator <separator>]\n")),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"tsv [--list-sep <list-sep>] [--null-value <null-value>]\n    [--allow-comments] [--auto-expand] [--header <header>]\n     [--schema <schema>] [--selector <fieldname[:prefix]>]\n    [--schema-only] [--raw] [--unnest-separator <separator>]\n")),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"xsv <field-sep> <list-sep> <null-value>\n    [--allow-comments] [--auto-expand] [--header <header>]\n    [--schema <schema>] [--selector <fieldname[:prefix]>]\n    [--schema-only] [--raw] [--unnest-separator <separator>]\n")),(0,t.yg)("p",null,"Printer:"),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"csv [--no-header]\nssv [--no-header]\ntsv [--no-header]\nxsv <field-sep> <list-sep> <null-value> [--no-header]\n")),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"xsv")," format is a generalization of ",(0,t.yg)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Comma-separated_values"}),"comma-separated values (CSV)")," data\nin tabular form with a more flexible separator specification supporting tabs,\ncommas, and spaces. The first line in an XSV file is the header that describes\nthe field names. The remaining lines contain concrete values. One line\ncorresponds to one event, minus the header."),(0,t.yg)("p",null,"The following table juxtaposes the available XSV configurations:"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",c({parentName:"tr"},{align:null}),"Format"),(0,t.yg)("th",c({parentName:"tr"},{align:"center"}),"Field Separator"),(0,t.yg)("th",c({parentName:"tr"},{align:"center"}),"List Separator"),(0,t.yg)("th",c({parentName:"tr"},{align:"center"}),"Null Value"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",c({parentName:"tr"},{align:null}),(0,t.yg)("a",c({parentName:"td"},{href:"/v4.22/formats/csv"}),(0,t.yg)("inlineCode",{parentName:"a"},"csv"))),(0,t.yg)("td",c({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},",")),(0,t.yg)("td",c({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},";")),(0,t.yg)("td",c({parentName:"tr"},{align:"center"}),"empty")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",c({parentName:"tr"},{align:null}),(0,t.yg)("a",c({parentName:"td"},{href:"/v4.22/formats/ssv"}),(0,t.yg)("inlineCode",{parentName:"a"},"ssv"))),(0,t.yg)("td",c({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},"<space>")),(0,t.yg)("td",c({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},",")),(0,t.yg)("td",c({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},"-"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",c({parentName:"tr"},{align:null}),(0,t.yg)("a",c({parentName:"td"},{href:"/v4.22/formats/tsv"}),(0,t.yg)("inlineCode",{parentName:"a"},"tsv"))),(0,t.yg)("td",c({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},"\\t")),(0,t.yg)("td",c({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},",")),(0,t.yg)("td",c({parentName:"tr"},{align:"center"}),(0,t.yg)("inlineCode",{parentName:"td"},"-"))))),(0,t.yg)("p",null,"Like the ",(0,t.yg)("a",c({parentName:"p"},{href:"/v4.22/formats/json"}),(0,t.yg)("inlineCode",{parentName:"a"},"json"))," parser, the XSV parser infers types automatically.\nConsider this piece of CSV data:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"csv","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"csv","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"ip,"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"sn,"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"str,"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"rec.a,"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"rec.b")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"1.2.3.4,"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"10.0.0.0/8,"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"foo bar,"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"-4.2,"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"/foo|bar/"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:"ip,sn,str,rec.a,rec.b\n1.2.3.4,10.0.0.0/8,foo bar,-4.2,/foo|bar/",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"Here's the schema that the parser infers from the above data:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"record"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"ip"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"ip")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"sn"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"subnet")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"str"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"string")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"record"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"a"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"double")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"b"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"pattern"))),(0,t.yg)("button",c({parentName:"pre"},{type:"button",data:"record:\n  - ip: ip\n  - sn: subnet\n  - str: string\n  - record:\n    - a: double\n    - b: pattern",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",c({parentName:"button"},{className:"ready"})),(0,t.yg)("span",c({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"Note that nested records have dot-separated field names."),(0,t.yg)("h3",c({},{id:"common-options-parser"}),"Common Options (Parser)"),(0,t.yg)("p",null,"The XSV parser supports the common ",(0,t.yg)("a",c({parentName:"p"},{href:"/v4.22/formats#parser-schema-inference"}),"schema inference options"),"."),(0,t.yg)("h3",c({},{id:"field-sep"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<field-sep>")),(0,t.yg)("p",null,"Specifies the string that separates fields.\nThis is required for ",(0,t.yg)("inlineCode",{parentName:"p"},"XSV")," and cannot be set for any of the other variations."),(0,t.yg)("h3",c({},{id:"list-sep"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<list-sep>")),(0,t.yg)("p",null,"Specifies the string that separates list elements ",(0,t.yg)("em",{parentName:"p"},"within")," a field.\nThis is required for ",(0,t.yg)("inlineCode",{parentName:"p"},"XSV"),", but can be explicitly changed from the respective\ndefault for the other parsers."),(0,t.yg)("h3",c({},{id:"null-value"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<null-value>")),(0,t.yg)("p",null,"Specifies the string that denotes an absent value. This is required for ",(0,t.yg)("inlineCode",{parentName:"p"},"XSV"),",\nbut can be explicitly changed from the respective default for the other parsers."),(0,t.yg)("h3",c({},{id:"--allow-comments-parser"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--allow-comments")," (Parser)"),(0,t.yg)("p",null,"Treat lines beginning with ",(0,t.yg)("inlineCode",{parentName:"p"},"'#'")," as comments."),(0,t.yg)("h3",c({},{id:"--auto-expand-parser"}),"`--auto-expand (Parser)"),(0,t.yg)("p",null,"Automatically add fields to the schema when encountering events with too many\nvalues instead of dropping the excess values."),(0,t.yg)("h3",c({},{id:"--header-header-parser"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--header <header>")," (Parser)"),(0,t.yg)("p",null,"Use the manually provided header line instead of treating the first line as the\nheader."),(0,t.yg)("h3",c({},{id:"--no-header-printer"}),(0,t.yg)("inlineCode",{parentName:"h3"},"--no-header")," (Printer)"),(0,t.yg)("p",null,"Do not print a header line containing the field names."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Read CSV from stdin:"),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"from stdin read csv\n")),(0,t.yg)("p",null,"Write a multi-schema stream of events to a directory in TSV format, with one\nfile per unique schema:"),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"to directory /tmp/result write tsv\n")))}I.isMDXComponent=!0}}]);