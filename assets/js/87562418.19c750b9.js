"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,f=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},97617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>v,frontMatter:()=>f,metadata:()=>N,toc:()=>h});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>i(e,o(t)),k=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const f={sidebar_custom_props:{operator:{source:!0}}},g="diagnostics",N={unversionedId:"operators/diagnostics",id:"operators/diagnostics",title:"diagnostics",description:"Retrieves diagnostic events from a Tenzir node.",source:"@site/docs/operators/diagnostics.md",sourceDirName:"operators",slug:"/operators/diagnostics",permalink:"/next/operators/diagnostics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/diagnostics.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"delay",permalink:"/next/operators/delay"},next:{title:"discard",permalink:"/next/operators/discard"}},u={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--live</code>",id:"--live",level:3},{value:"<code>--retro</code>",id:"--retro",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.diagnostic</code>",id:"tenzirdiagnostic",level:3},{value:"Examples",id:"examples",level:2}],y={toc:h},b="wrapper";function v(e){var t=e,{components:n}=t,r=k(t,["components"]);return(0,a.kt)(b,c(m(m({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"diagnostics"}),"diagnostics"),(0,a.kt)("p",null,"Retrieves diagnostic events from a Tenzir node."),(0,a.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"diagnostics [--live]\n")),(0,a.kt)("h2",m({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnostics")," operator retrieves diagnostic events from a Tenzir\nnode."),(0,a.kt)("h3",m({},{id:"--live"}),(0,a.kt)("inlineCode",{parentName:"h3"},"--live")),(0,a.kt)("p",null,"Work on all diagnostic events as they are generated in real-time instead of on\ndiagnostic events persisted at a Tenzir node."),(0,a.kt)("h3",m({},{id:"--retro"}),(0,a.kt)("inlineCode",{parentName:"h3"},"--retro")),(0,a.kt)("p",null,"Work on persisted diagnostic events (first), even when ",(0,a.kt)("inlineCode",{parentName:"p"},"--live")," is given."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",m({parentName:"p"},{href:"/next/operators/export#--retro"}),(0,a.kt)("inlineCode",{parentName:"a"},"export")," operator")," for more details."),(0,a.kt)("h2",m({},{id:"schemas"}),"Schemas"),(0,a.kt)("p",null,"Tenzir emits diagnostic information with the following schema:"),(0,a.kt)("h3",m({},{id:"tenzirdiagnostic"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tenzir.diagnostic")),(0,a.kt)("p",null,"Contains detailed information about the diagnostic."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"pipeline_id")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The ID of the pipeline that created the diagnostic.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"run")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The number of the run, starting at 1 for the first run.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"time")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The exact timestamp of the diagnostic creation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"message")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The diagnostic message.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"severity")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The diagnostic severity.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"notes")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"list<record>")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The diagnostic notes. Can be empty.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"annotations")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"list<record>")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The diagnostic annotations. Can be empty.")))),(0,a.kt)("p",null,"The record ",(0,a.kt)("inlineCode",{parentName:"p"},"notes")," has the following schema:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"kind")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The kind of note, which is ",(0,a.kt)("inlineCode",{parentName:"td"},"note"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"usage"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"hint")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"docs"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"message")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The message of this note.")))),(0,a.kt)("p",null,"The record ",(0,a.kt)("inlineCode",{parentName:"p"},"annotations")," has the following schema:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"primary")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"True if the ",(0,a.kt)("inlineCode",{parentName:"td"},"source")," represents the underlying reason for the diagnostic, false if it is only related to it.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"text")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"A message for explanations. Can be empty.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"source")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The character range in the pipeline string that this annotation is associated to.")))),(0,a.kt)("h2",m({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"View all diagnostics generated in the past five minutes."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"diagnostics\n| where timestamp > 5 minutes ago\n")),(0,a.kt)("p",null,"Only show diagnostics that contain the ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," severity."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),'diagnostics\n| where severity == "error"\n')))}v.isMDXComponent=!0}}]);