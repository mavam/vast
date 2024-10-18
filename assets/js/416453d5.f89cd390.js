"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27625],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(r),y=n,m=c["".concat(p,".").concat(y)]||c[y]||g[y]||o;return r?a.createElement(m,l(l({ref:t},s),{},{components:r})):a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},73300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>O,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var a=r(15680),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&s(e,r,t[r]);return e},g=(e,t)=>o(e,l(t)),y=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const m={},f="sockets",u={unversionedId:"tql2/operators/sockets",id:"version-v4.22/tql2/operators/sockets",title:"sockets",description:"Shows a snapshot of open sockets.",source:"@site/versioned_docs/version-v4.22/tql2/operators/sockets.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/sockets",permalink:"/tql2/operators/sockets",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/sockets.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"slice",permalink:"/tql2/operators/slice"},next:{title:"sort",permalink:"/tql2/operators/sort"}},N={},h=[{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.socket</code>",id:"tenzirsocket",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},v="wrapper";function O(e){var t=e,{components:r}=t,n=y(t,["components"]);return(0,a.yg)(v,g(c(c({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"sockets"}),"sockets"),(0,a.yg)("p",null,"Shows a snapshot of open sockets."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"sockets"))))),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"sockets")," operator shows a snapshot of all currently open sockets."),(0,a.yg)("h2",c({},{id:"schemas"}),"Schemas"),(0,a.yg)("p",null,"Tenzir emits socket information with the following schema."),(0,a.yg)("h3",c({},{id:"tenzirsocket"}),(0,a.yg)("inlineCode",{parentName:"h3"},"tenzir.socket")),(0,a.yg)("p",null,"Contains detailed information about the socket."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,a.yg)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,a.yg)("th",c({parentName:"tr"},{align:"left"}),"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"pid")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"uint64")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The process identifier.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"process")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The name of the process involved.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"protocol")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"uint64")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The protocol used for the communication.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"local_addr")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"ip")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The local IP address involved in the connection.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"local_port")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"port")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The local port number involved in the connection.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"remote_addr")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"ip")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The remote IP address involved in the connection.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"remote_port")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"port")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The remote port number involved in the connection.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"state")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",c({parentName:"tr"},{align:"left"}),"The current state of the connection.")))),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Show process ID, local, and remote IP address of all sockets:"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"sockets")),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"select"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," pid, local_addr, remote_addr "))))))}O.isMDXComponent=!0}}]);