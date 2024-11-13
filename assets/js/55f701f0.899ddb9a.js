"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28315],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),y=n,g=d["".concat(l,".").concat(y)]||d[y]||u[y]||o;return r?a.createElement(g,p(p({ref:t},c),{},{components:r})):a.createElement(g,p({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,p[1]=s;for(var i=2;i<o;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},15117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>D,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var a=r(15680),n=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,p(t)),y=(e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};const g={},m="save_udp",f={unversionedId:"tql2/operators/save_udp",id:"tql2/operators/save_udp",title:"save_udp",description:"Saves bytes to a UDP socket.",source:"@site/docs/tql2/operators/save_udp.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/save_udp",permalink:"/next/tql2/operators/save_udp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/save_udp.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"save_sqs",permalink:"/next/tql2/operators/save_sqs"},next:{title:"save_zmq",permalink:"/next/tql2/operators/save_zmq"}},v={},b=[{value:"Description",id:"description",level:2},{value:"<code>endpoint: str</code>",id:"endpoint-str",level:3},{value:"Examples",id:"examples",level:2}],O={toc:b},h="wrapper";function D(e){var t=e,{components:r}=t,n=y(t,["components"]);return(0,a.yg)(h,u(d(d({},O),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"save_udp"}),"save_udp"),(0,a.yg)("p",null,"Saves bytes to a UDP socket."),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_udp"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," endpoint"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str"))))),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"Saves bytes to a UDP socket."),(0,a.yg)("h3",d({},{id:"endpoint-str"}),(0,a.yg)("inlineCode",{parentName:"h3"},"endpoint: str")),(0,a.yg)("p",null,"The address of the remote endpoint to load bytes from. Must be of the format:\n",(0,a.yg)("inlineCode",{parentName:"p"},"[udp://]host:port"),"."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Send the Tenzir version as CSV file to a remote endpoint via UDP:"),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"version")),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_csv")),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_udp"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "127.0.0.1:56789"'))))),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"nc -ul 127.0.0.1 56789")," to spin up a UDP server to test the above pipeline."))}D.isMDXComponent=!0}}]);