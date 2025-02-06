"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98895],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=n.createContext({}),l=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(y.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,y=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=l(a),s=r,c=g["".concat(y,".").concat(s)]||g[s]||m[s]||i;return a?n.createElement(c,p(p({ref:t},d),{},{components:a})):n.createElement(c,p({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=s;var o={};for(var y in t)hasOwnProperty.call(t,y)&&(o[y]=t[y]);o.originalType=e,o[g]="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},21265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>N,default:()=>C,frontMatter:()=>c,metadata:()=>u,toc:()=>I});var n=a(15680),r=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&d(e,a,t[a]);return e},m=(e,t)=>i(e,p(t)),s=(e,t)=>{var a={};for(var n in e)y.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a};const c={},N="parse_time",u={unversionedId:"tql2/functions/parse_time",id:"tql2/functions/parse_time",title:"parse_time",description:"Parses a time from a string that follows a specific format.",source:"@site/docs/tql2/functions/parse_time.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/parse_time",permalink:"/next/tql2/functions/parse_time",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/parse_time.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"parse_syslog",permalink:"/next/tql2/functions/parse_syslog"},next:{title:"parse_ssv",permalink:"/next/tql2/functions/parse_tsv"}},b={},I=[{value:"Description",id:"description",level:2},{value:"<code>input: string</code>",id:"input-string",level:3},{value:"<code>format: string</code>",id:"format-string",level:3},{value:"Examples",id:"examples",level:2},{value:"Parse a timestamp",id:"parse-a-timestamp",level:3},{value:"See Also",id:"see-also",level:2}],f={toc:I},h="wrapper";function C(e){var t=e,{components:a}=t,r=s(t,["components"]);return(0,n.yg)(h,m(g(g({},f),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",g({},{id:"parse_time"}),"parse_time"),(0,n.yg)("p",null,"Parses a time from a string that follows a specific format."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"parse_time"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(input"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," string, format"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," string) "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}})," time"))),(0,n.yg)("button",g({parentName:"pre"},{type:"button",data:"parse_time(input: string, format: string) -> time",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",g({parentName:"button"},{className:"ready"})),(0,n.yg)("span",g({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",g({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"parse_time")," function matches the given ",(0,n.yg)("inlineCode",{parentName:"p"},"input")," string against the ",(0,n.yg)("inlineCode",{parentName:"p"},"format")," to construct a timestamp."),(0,n.yg)("h3",g({},{id:"input-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"input: string")),(0,n.yg)("p",null,"The input string from which the timestamp should be extracted."),(0,n.yg)("h3",g({},{id:"format-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"format: string")),(0,n.yg)("p",null,"The string that specifies the format of ",(0,n.yg)("inlineCode",{parentName:"p"},"input"),", for example ",(0,n.yg)("inlineCode",{parentName:"p"},'"%m-%d-%Y"'),". The\nallowed format specifiers are the same as for ",(0,n.yg)("inlineCode",{parentName:"p"},"strptime(3)"),":"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",g({parentName:"tr"},{align:"center"}),"Specifier"),(0,n.yg)("th",g({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%%")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"The ",(0,n.yg)("inlineCode",{parentName:"td"},"%")," character.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%a/%A")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Day name in abbreviated or full form.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%b/%B/%h")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Month name in abbreviated or full form.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%c")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Date and time representation for the locale.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%C")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Century number (0\u201399).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%d/%e")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Day of the month (1\u201331).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%D")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Equivalent to ",(0,n.yg)("inlineCode",{parentName:"td"},"%m/%d/%y")," (American style).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%H")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Hour (0\u201323).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%I")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Hour on a 12-hour clock (1\u201312).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%j")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Day number in the year (1\u2013366).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%m")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Month number (1\u201312).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%M")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Minute (0\u201359).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%n")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Arbitrary whitespace.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%p")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Locale's equivalent of AM or PM.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%r")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"12-hour clock time, e.g., ",(0,n.yg)("inlineCode",{parentName:"td"},"%I:%M:%S %p"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%R")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Equivalent to ",(0,n.yg)("inlineCode",{parentName:"td"},"%H:%M"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%S")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Second (0\u201360, leap seconds included).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%t")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Arbitrary whitespace.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%T")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Equivalent to ",(0,n.yg)("inlineCode",{parentName:"td"},"%H:%M:%S"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%U")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Week number (Sunday as the first day, 0\u201353).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%w")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Ordinal day of the week (0\u20136, Sunday=0).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%W")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Week number (Monday as the first day, 0\u201353).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%x")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Date in the locale's format.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%X")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Time in the locale's format.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%y")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Year within the century (0\u201399).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%Y")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Full year (e.g., 1991).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%Ec")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Locale's alternative date and time.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%EC")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Base year name in alternative representation.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%Ex")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Locale's alternative date.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%EX")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Locale's alternative time.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%Ey")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Year offset from ",(0,n.yg)("inlineCode",{parentName:"td"},"%EC"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%EY")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Full alternative year.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%Od/%Oe")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Day of month with alternative numeric symbols.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%OH")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Hour (24-hour clock) in alternative numeric symbols.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%OI")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Hour (12-hour clock) in alternative numeric symbols.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%Om")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Month with alternative numeric symbols.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%OM")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Minutes with alternative numeric symbols.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%OS")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Seconds with alternative numeric symbols.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%OU")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Week number (Sunday as first day) in alternative numeric symbols.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%Ow")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Ordinal day of the week in alternative numeric symbols.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%OW")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Week number (Monday as first day) in alternative numeric symbols.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",g({parentName:"tr"},{align:"center"}),(0,n.yg)("inlineCode",{parentName:"td"},"%Oy")),(0,n.yg)("td",g({parentName:"tr"},{align:"left"}),"Year offset in alternative numeric symbols.")))),(0,n.yg)("h2",g({},{id:"examples"}),"Examples"),(0,n.yg)("h3",g({},{id:"parse-a-timestamp"}),"Parse a timestamp"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "2024-12-31+12:59:42"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"x "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"parse_time"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"%Y-%m-%d+%H:%M:%S"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),")"))),(0,n.yg)("button",g({parentName:"pre"},{type:"button",data:'from {\n  x: "2024-12-31+12:59:42",\n}\nx = x.parse_time("%Y-%m-%d+%H:%M:%S")',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",g({parentName:"button"},{className:"ready"})),(0,n.yg)("span",g({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2024"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"12"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"31T12"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),":59:42.000000"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,n.yg)("button",g({parentName:"pre"},{type:"button",data:"{x: 2024-12-31T12:59:42.000000}",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,n.yg)("span",g({parentName:"button"},{className:"ready"})),(0,n.yg)("span",g({parentName:"button"},{className:"success"}))),(0,n.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,n.yg)("h2",g({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",g({parentName:"p"},{href:"/next/tql2/functions/format_time"}),(0,n.yg)("inlineCode",{parentName:"a"},"format_time"))))}C.isMDXComponent=!0}}]);