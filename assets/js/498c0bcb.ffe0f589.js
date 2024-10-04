"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9044],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),g=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=g(n),m=r,c=s["".concat(d,".").concat(m)]||s[m]||y[m]||i;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<i;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>f,default:()=>C,frontMatter:()=>c,metadata:()=>N,toc:()=>h});var a=n(15680),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))g.call(t,n)&&p(e,n,t[n]);return e},y=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&g.call(e,a)&&(n[a]=e[a]);return n};const c={sidebar_custom_props:{operator:{source:!0}}},f="diagnostics",N={unversionedId:"operators/diagnostics",id:"version-v4.20/operators/diagnostics",title:"diagnostics",description:"Retrieves diagnostic events from a Tenzir node.",source:"@site/versioned_docs/version-v4.20/operators/diagnostics.md",sourceDirName:"operators",slug:"/operators/diagnostics",permalink:"/v4.20/operators/diagnostics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/diagnostics.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"delay",permalink:"/v4.20/operators/delay"},next:{title:"discard",permalink:"/v4.20/operators/discard"}},u={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--live</code>",id:"--live",level:3},{value:"<code>--retro</code>",id:"--retro",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.diagnostic</code>",id:"tenzirdiagnostic",level:3},{value:"Examples",id:"examples",level:2}],v={toc:h},b="wrapper";function C(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.yg)(b,y(s(s({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",s({},{id:"diagnostics"}),"diagnostics"),(0,a.yg)("p",null,"Retrieves diagnostic events from a Tenzir node."),(0,a.yg)("h2",s({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("pre",null,(0,a.yg)("code",s({parentName:"pre"},{}),"diagnostics [--live] [--retro]\n")),(0,a.yg)("h2",s({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"diagnostics")," operator retrieves diagnostic events from a Tenzir\nnode."),(0,a.yg)("h3",s({},{id:"--live"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--live")),(0,a.yg)("p",null,"Work on all diagnostic events as they are generated in real-time instead of on\ndiagnostic events persisted at a Tenzir node."),(0,a.yg)("h3",s({},{id:"--retro"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--retro")),(0,a.yg)("p",null,"Work on persisted diagnostic events (first), even when ",(0,a.yg)("inlineCode",{parentName:"p"},"--live")," is given."),(0,a.yg)("p",null,"See ",(0,a.yg)("a",s({parentName:"p"},{href:"/v4.20/operators/export#--retro"}),(0,a.yg)("inlineCode",{parentName:"a"},"export")," operator")," for more details."),(0,a.yg)("h2",s({},{id:"schemas"}),"Schemas"),(0,a.yg)("p",null,"Tenzir emits diagnostic information with the following schema:"),(0,a.yg)("h3",s({},{id:"tenzirdiagnostic"}),(0,a.yg)("inlineCode",{parentName:"h3"},"tenzir.diagnostic")),(0,a.yg)("p",null,"Contains detailed information about the diagnostic."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"pipeline_id")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The ID of the pipeline that created the diagnostic.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"run")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"uint64")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The number of the run, starting at 1 for the first run.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"timestamp")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"time")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The exact timestamp of the diagnostic creation.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"message")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The diagnostic message.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"severity")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The diagnostic severity.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"notes")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"list<record>")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The diagnostic notes. Can be empty.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"annotations")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"list<record>")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The diagnostic annotations. Can be empty.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"rendered")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The rendered diagnostic, as printed on the command-line.")))),(0,a.yg)("p",null,"The record ",(0,a.yg)("inlineCode",{parentName:"p"},"notes")," has the following schema:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"kind")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The kind of note, which is ",(0,a.yg)("inlineCode",{parentName:"td"},"note"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"usage"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"hint")," or ",(0,a.yg)("inlineCode",{parentName:"td"},"docs"),".")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"message")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The message of this note.")))),(0,a.yg)("p",null,"The record ",(0,a.yg)("inlineCode",{parentName:"p"},"annotations")," has the following schema:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"primary")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"bool")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"True if the ",(0,a.yg)("inlineCode",{parentName:"td"},"source")," represents the underlying reason for the diagnostic, false if it is only related to it.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"text")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"A message for explanations. Can be empty.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"source")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The character range in the pipeline string that this annotation is associated to.")))),(0,a.yg)("h2",s({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"View all diagnostics generated in the past five minutes."),(0,a.yg)("pre",null,(0,a.yg)("code",s({parentName:"pre"},{}),"diagnostics\n| where timestamp > 5 minutes ago\n")),(0,a.yg)("p",null,"Only show diagnostics that contain the ",(0,a.yg)("inlineCode",{parentName:"p"},"error")," severity."),(0,a.yg)("pre",null,(0,a.yg)("code",s({parentName:"pre"},{}),'diagnostics\n| where severity == "error"\n')))}C.isMDXComponent=!0}}]);