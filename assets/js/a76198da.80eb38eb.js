"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84482],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),y=s(t),d=a,m=y["".concat(c,".").concat(d)]||y[d]||u[d]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[y]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45845:(e,n,t)=>{t.d(n,{Ay:()=>f});var r=t(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,y=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&l(e,t,n[t]);if(p)for(var t of p(n))s.call(n,t)&&l(e,t,n[t]);return e},u=(e,n)=>o(e,i(n)),d=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&p)for(var r of p(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const m={toc:[{value:"Description",id:"description",level:2},{value:"<code>x: number</code>",id:"x-number",level:3},{value:"See Also",id:"see-also",level:2}]},g="wrapper";function f(e){var n=e,{components:t}=n,a=d(n,["components"]);return(0,r.yg)(g,u(y(y({},m),a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",y({},{id:"description"}),"Description"),(0,r.yg)("span",null,"This function returns ",a.name," equivalent to a number, i.e., ",(0,r.yg)("code",null," number * 1",a.unit),"."),(0,r.yg)("h3",y({},{id:"x-number"}),(0,r.yg)("inlineCode",{parentName:"h3"},"x: number")),(0,r.yg)("p",null,"The number to convert."),(0,r.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,r.yg)("p",null,(0,r.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/years"}),(0,r.yg)("inlineCode",{parentName:"a"},"years")),",\n",(0,r.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/months"}),(0,r.yg)("inlineCode",{parentName:"a"},"months")),",\n",(0,r.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/weeks"}),(0,r.yg)("inlineCode",{parentName:"a"},"weeks")),",\n",(0,r.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/days"}),(0,r.yg)("inlineCode",{parentName:"a"},"days")),",\n",(0,r.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/hours"}),(0,r.yg)("inlineCode",{parentName:"a"},"hours")),",\n",(0,r.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/minutes"}),(0,r.yg)("inlineCode",{parentName:"a"},"minutes")),",\n",(0,r.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/seconds"}),(0,r.yg)("inlineCode",{parentName:"a"},"seconds")),",\n",(0,r.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/milliseconds"}),(0,r.yg)("inlineCode",{parentName:"a"},"milliseconds")),",\n",(0,r.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/microseconds"}),(0,r.yg)("inlineCode",{parentName:"a"},"microseconds")),",\n",(0,r.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/nanoseconds"}),(0,r.yg)("inlineCode",{parentName:"a"},"nanoseconds"))))}f.isMDXComponent=!0},61464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>N,frontMatter:()=>g,metadata:()=>b,toc:()=>h});var r=t(15680),a=t(45845),o=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,y=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&y(e,t,n[t]);if(c)for(var t of c(n))l.call(n,t)&&y(e,t,n[t]);return e},d=(e,n)=>i(e,p(n)),m=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const g={},f=void 0,b={unversionedId:"tql2/functions/years",id:"tql2/functions/years",title:"years",description:"Converts a number to equivalent years.",source:"@site/docs/tql2/functions/years.mdx",sourceDirName:"tql2/functions",slug:"/tql2/functions/years",permalink:"/next/tql2/functions/years",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/years.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"where",permalink:"/next/tql2/functions/where"},next:{title:"zip",permalink:"/next/tql2/functions/zip"}},v={},h=[],x={toc:h},I="wrapper";function N(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.yg)(I,d(u(u({},x),o),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Converts a number to equivalent years."),(0,r.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",u({parentName:"code"},{"data-line":""}),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"years"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"number) "),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}})," duration"))),(0,r.yg)("button",u({parentName:"pre"},{type:"button",data:"years(x:number) -> duration",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,r.yg)("span",u({parentName:"button"},{className:"ready"})),(0,r.yg)("span",u({parentName:"button"},{className:"success"}))),(0,r.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,r.yg)(a.Ay,{name:"years",unit:"y",mdxType:"Body"}))}N.isMDXComponent=!0}}]);