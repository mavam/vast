"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85964],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(t),y=o,m=l["".concat(p,".").concat(y)]||l[y]||d[y]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},49356:(e,n,t)=>{t.d(n,{Ay:()=>f});var r=t(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,l=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(c)for(var t of c(n))s.call(n,t)&&u(e,t,n[t]);return e},d=(e,n)=>a(e,i(n)),y=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const m={toc:[{value:"Description",id:"description",level:2},{value:"<code>x: duration</code>",id:"x-duration",level:3},{value:"See Also",id:"see-also",level:2}]},g="wrapper";function f(e){var n=e,{components:t}=n,o=y(n,["components"]);return(0,r.yg)(g,d(l(l({},m),o),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",l({},{id:"description"}),"Description"),(0,r.yg)("span",null,"This function returns the number of ",o.name," in a duration, i.e., ",(0,r.yg)("code",null,"duration / 1",o.unit),"."),(0,r.yg)("h3",l({},{id:"x-duration"}),(0,r.yg)("inlineCode",{parentName:"h3"},"x: duration")),(0,r.yg)("p",null,"The duration to count in."),(0,r.yg)("h2",l({},{id:"see-also"}),"See Also"),(0,r.yg)("p",null,(0,r.yg)("a",l({parentName:"p"},{href:"/tql2/functions/count_years"}),(0,r.yg)("inlineCode",{parentName:"a"},"count_years")),",\n",(0,r.yg)("a",l({parentName:"p"},{href:"/tql2/functions/count_months"}),(0,r.yg)("inlineCode",{parentName:"a"},"count_months")),",\n",(0,r.yg)("a",l({parentName:"p"},{href:"/tql2/functions/count_weeks"}),(0,r.yg)("inlineCode",{parentName:"a"},"count_weeks")),",\n",(0,r.yg)("a",l({parentName:"p"},{href:"/tql2/functions/count_days"}),(0,r.yg)("inlineCode",{parentName:"a"},"count_days")),",\n",(0,r.yg)("a",l({parentName:"p"},{href:"/tql2/functions/count_hours"}),(0,r.yg)("inlineCode",{parentName:"a"},"count_hours")),",\n",(0,r.yg)("a",l({parentName:"p"},{href:"/tql2/functions/count_minutes"}),(0,r.yg)("inlineCode",{parentName:"a"},"count_minutes")),",\n",(0,r.yg)("a",l({parentName:"p"},{href:"/tql2/functions/count_seconds"}),(0,r.yg)("inlineCode",{parentName:"a"},"count_seconds")),",\n",(0,r.yg)("a",l({parentName:"p"},{href:"/tql2/functions/count_milliseconds"}),(0,r.yg)("inlineCode",{parentName:"a"},"count_milliseconds")),",\n",(0,r.yg)("a",l({parentName:"p"},{href:"/tql2/functions/count_microseconds"}),(0,r.yg)("inlineCode",{parentName:"a"},"count_microseconds")),",\n",(0,r.yg)("a",l({parentName:"p"},{href:"/tql2/functions/count_nanoseconds"}),(0,r.yg)("inlineCode",{parentName:"a"},"count_nanoseconds"))))}f.isMDXComponent=!0},72594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>f,default:()=>j,frontMatter:()=>g,metadata:()=>b,toc:()=>v});var r=t(15680),o=t(49356),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&l(e,t,n[t]);if(p)for(var t of p(n))u.call(n,t)&&l(e,t,n[t]);return e},y=(e,n)=>i(e,c(n)),m=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&p)for(var r of p(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const g={},f=void 0,b={unversionedId:"tql2/functions/count_hours",id:"version-v4.29/tql2/functions/count_hours",title:"count_hours",description:"Counts the number of hours in a duration.",source:"@site/versioned_docs/version-v4.29/tql2/functions/count_hours.mdx",sourceDirName:"tql2/functions",slug:"/tql2/functions/count_hours",permalink:"/tql2/functions/count_hours",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.29/tql2/functions/count_hours.mdx",tags:[],version:"v4.29",frontMatter:{},sidebar:"docsSidebar",previous:{title:"count_distinct",permalink:"/tql2/functions/count_distinct"},next:{title:"count_microseconds",permalink:"/tql2/functions/count_microseconds"}},h={},v=[],I={toc:v},N="wrapper";function j(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.yg)(N,y(d(d({},I),a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Counts the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"hours")," in a duration."),(0,r.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",d({parentName:"code"},{"data-line":""}),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"count_hours"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration) "),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}})," float"))),(0,r.yg)("button",d({parentName:"pre"},{type:"button",data:"count_hours(x:duration) -> float",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,r.yg)("span",d({parentName:"button"},{className:"ready"})),(0,r.yg)("span",d({parentName:"button"},{className:"success"}))),(0,r.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,r.yg)(o.Ay,{name:"hours",unit:"h",mdxType:"Body"}))}j.isMDXComponent=!0}}]);