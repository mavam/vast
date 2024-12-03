"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21630],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=d(n),y=r,m=s["".concat(p,".").concat(y)]||s[y]||c[y]||i;return n?a.createElement(m,l(l({ref:t},g),{},{components:n})):a.createElement(m,l({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},94524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>u,toc:()=>b});var a=n(15680),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&g(e,n,t[n]);return e},c=(e,t)=>i(e,l(t)),y=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const m={},f="nics",u={unversionedId:"tql2/operators/nics",id:"version-v4.23/tql2/operators/nics",title:"nics",description:"Shows a snapshot of available network interfaces.",source:"@site/versioned_docs/version-v4.23/tql2/operators/nics.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/nics",permalink:"/v4.23/tql2/operators/nics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/nics.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"metrics",permalink:"/v4.23/tql2/operators/metrics"},next:{title:"openapi",permalink:"/v4.23/tql2/operators/openapi"}},N={},b=[{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.nic</code>",id:"tenzirnic",level:3},{value:"Examples",id:"examples",level:2},{value:"List all connected network interfaces",id:"list-all-connected-network-interfaces",level:3}],h={toc:b},v="wrapper";function w(e){var t=e,{components:n}=t,r=y(t,["components"]);return(0,a.yg)(v,c(s(s({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",s({},{id:"nics"}),"nics"),(0,a.yg)("p",null,"Shows a snapshot of available network interfaces."),(0,a.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",s({parentName:"code"},{"data-line":""}),(0,a.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"nics"))))),(0,a.yg)("h2",s({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"nics")," operator shows a snapshot of all available network interfaces."),(0,a.yg)("h2",s({},{id:"schemas"}),"Schemas"),(0,a.yg)("p",null,"Tenzir emits network interface card information with the following schema."),(0,a.yg)("h3",s({},{id:"tenzirnic"}),(0,a.yg)("inlineCode",{parentName:"h3"},"tenzir.nic")),(0,a.yg)("p",null,"Contains detailed information about the network interface."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"name")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"The name of the network interface.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"description")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"A brief note or explanation about the network interface.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"addresses")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"list")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"A list of IP addresses assigned to the network interface.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"loopback")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"bool")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"Indicates if the network interface is a loopback interface.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"up")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"bool")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"Indicates if the network interface is up and can transmit data.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"running")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"bool")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"Indicates if the network interface is running and operational.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"wireless")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"bool")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"Indicates if the network interface is a wireless interface.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"status")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"record")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"A record containing detailed status information about the network interface.")))),(0,a.yg)("p",null,"The record ",(0,a.yg)("inlineCode",{parentName:"p"},"status")," has the following schema:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"unknown")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"bool")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"Indicates if the network interface status is unknown.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"connected")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"bool")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"Indicates if the network interface is connected.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"disconnected")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"bool")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"Indicates if the network interface is disconnected.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"not_applicable")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"bool")),(0,a.yg)("td",s({parentName:"tr"},{align:"left"}),"Indicates if the network interface is not applicable.")))),(0,a.yg)("h2",s({},{id:"examples"}),"Examples"),(0,a.yg)("h3",s({},{id:"list-all-connected-network-interfaces"}),"List all connected network interfaces"),(0,a.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",s({parentName:"code"},{"data-line":""}),(0,a.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"nics")),"\n",(0,a.yg)("span",s({parentName:"code"},{"data-line":""}),(0,a.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,a.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," status"),(0,a.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,a.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"connected"))))))}w.isMDXComponent=!0}}]);