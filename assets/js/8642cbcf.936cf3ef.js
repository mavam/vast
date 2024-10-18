"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46135],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,u=d["".concat(l,".").concat(m)]||d[m]||y[m]||o;return n?a.createElement(u,p(p({ref:t},s),{},{components:n})):a.createElement(u,p({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>N,frontMatter:()=>u,metadata:()=>f,toc:()=>h});var a=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e},y=(e,t)=>o(e,p(t)),m=(e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const u={sidebar_custom_props:{operator:{source:!0,transformation:!1,sink:!0}}},g="context",f={unversionedId:"operators/context",id:"version-v4.21/operators/context",title:"context",description:"Manages a context.",source:"@site/versioned_docs/version-v4.21/operators/context.md",sourceDirName:"operators",slug:"/operators/context",permalink:"/v4.21/operators/context",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/operators/context.md",tags:[],version:"v4.21",frontMatter:{sidebar_custom_props:{operator:{source:!0,transformation:!1,sink:!0}}},sidebar:"docsSidebar",previous:{title:"config",permalink:"/v4.21/operators/config"},next:{title:"decapsulate",permalink:"/v4.21/operators/decapsulate"}},v={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;name&gt;</code>",id:"name",level:3},{value:"<code>&lt;type&gt;</code>",id:"type",level:3},{value:"<code>&lt;args&gt;</code>",id:"args",level:3},{value:"Examples",id:"examples",level:2}],x={toc:h},b="wrapper";function N(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.yg)(b,y(d(d({},x),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"context"}),"context"),(0,a.yg)("p",null,"Manages a ",(0,a.yg)("a",d({parentName:"p"},{href:"/v4.21/contexts"}),"context"),"."),(0,a.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"context create  <name> <type> [<args>]\ncontext delete  <name>\ncontext update  <name> [<args>]\ncontext reset   <name>\ncontext save    <name>\ncontext load    <name>\ncontext inspect <name>\n")),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"context")," operator manages ",(0,a.yg)("a",d({parentName:"p"},{href:"/v4.21/contexts"}),"context")," instances."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," command creates a new context with a unique name.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"delete")," command destroys a given context.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"update")," command adds new data to a given context.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"reset")," command clears the state of a given context, as if it had just\nbeen created.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"save")," command outputs the state of the context, serialized into bytes.\nThe result can be processed further in a pipeline,\ne.g. as an input for the ",(0,a.yg)("a",d({parentName:"p"},{href:"/v4.21/operators/save"}),(0,a.yg)("inlineCode",{parentName:"a"},"save"))," operator,\nor to initialize another context with ",(0,a.yg)("inlineCode",{parentName:"p"},"context load"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"load")," command takes in bytes, likely previously created with\n",(0,a.yg)("inlineCode",{parentName:"p"},"context save"),", and initializes the context with that data.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"inspect")," command dumps a specific context's user-provided data, usually\nthe context's content."))),(0,a.yg)("h3",d({},{id:"name"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<name>")),(0,a.yg)("p",null,"The name of the context to create, update, or delete."),(0,a.yg)("h3",d({},{id:"type"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<type>")),(0,a.yg)("p",null,"The context type for the new context."),(0,a.yg)("p",null,"See the ",(0,a.yg)("a",d({parentName:"p"},{href:"/v4.21/contexts"}),"list of available context types"),"."),(0,a.yg)("h3",d({},{id:"args"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<args>")),(0,a.yg)("p",null,"Context-specific options in the format ",(0,a.yg)("inlineCode",{parentName:"p"},"--key value")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"--flag"),"."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Create a ",(0,a.yg)("a",d({parentName:"p"},{href:"/v4.21/contexts/lookup-table"}),"lookup table")," context called ",(0,a.yg)("inlineCode",{parentName:"p"},"feodo"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"context create feodo lookup-table\n")),(0,a.yg)("p",null,"Update the context ",(0,a.yg)("inlineCode",{parentName:"p"},"feodo")," with data from the ",(0,a.yg)("a",d({parentName:"p"},{href:"https://feodotracker.abuse.ch"}),"Feodo Tracker IP Block\nList"),", using the ",(0,a.yg)("inlineCode",{parentName:"p"},"ip_address"),"\nfield as the lookup table key:"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"from https://feodotracker.abuse.ch/downloads/ipblocklist.json read json\n--arrays-of-objects\n| context update feodo --key=ip_address\n")),(0,a.yg)("p",null,"Clear all previous data in the context ",(0,a.yg)("inlineCode",{parentName:"p"},"feodo"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"context reset feodo\n")),(0,a.yg)("p",null,"Delete the context named ",(0,a.yg)("inlineCode",{parentName:"p"},"feodo"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"context delete feodo\n")),(0,a.yg)("p",null,"Inspect all data provided to ",(0,a.yg)("inlineCode",{parentName:"p"},"feodo"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",d({parentName:"pre"},{}),"context inspect feodo\n")))}N.isMDXComponent=!0}}]);