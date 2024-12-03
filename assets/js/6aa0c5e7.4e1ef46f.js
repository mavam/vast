"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46475],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(i,".").concat(u)]||c[u]||y[u]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>N,frontMatter:()=>g,metadata:()=>f,toc:()=>v});var a=n(15680),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&d(e,n,t[n]);return e},y=(e,t)=>o(e,l(t)),u=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const g={},m="load_udp",f={unversionedId:"tql2/operators/load_udp",id:"version-v4.24/tql2/operators/load_udp",title:"load_udp",description:"Loads bytes from a UDP socket.",source:"@site/versioned_docs/version-v4.24/tql2/operators/load_udp.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_udp",permalink:"/tql2/operators/load_udp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/load_udp.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_tcp",permalink:"/tql2/operators/load_tcp"},next:{title:"load_zmq",permalink:"/tql2/operators/load_zmq"}},b={},v=[{value:"Description",id:"description",level:2},{value:"<code>endpoint: str</code>",id:"endpoint-str",level:3},{value:"<code>connect = bool (optional)</code>",id:"connect--bool-optional",level:3},{value:"<code>insert_newlines = bool (optional)</code>",id:"insert_newlines--bool-optional",level:3},{value:"Examples",id:"examples",level:2}],h={toc:v},O="wrapper";function N(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.yg)(O,y(c(c({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"load_udp"}),"load_udp"),(0,a.yg)("p",null,"Loads bytes from a UDP socket."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_udp"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," endpoint"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [connect"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, insert_newlines"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,"Loads bytes from a UDP socket. The operator defaults to creating a socket\nin listening mode. Use ",(0,a.yg)("inlineCode",{parentName:"p"},"connect=true")," if the operator should initiate the\nconnection instead."),(0,a.yg)("p",null,"When you have a socket in listening mode, use ",(0,a.yg)("inlineCode",{parentName:"p"},"0.0.0.0")," to accept connections\non all interfaces. The ",(0,a.yg)("a",c({parentName:"p"},{href:"/tql2/operators/nics"}),(0,a.yg)("inlineCode",{parentName:"a"},"nics"))," operator lists all all\navailable interfaces."),(0,a.yg)("h3",c({},{id:"endpoint-str"}),(0,a.yg)("inlineCode",{parentName:"h3"},"endpoint: str")),(0,a.yg)("p",null,"The address of the remote endpoint to load bytes from. Must be of the format:\n",(0,a.yg)("inlineCode",{parentName:"p"},"[udp://]host:port"),"."),(0,a.yg)("h3",c({},{id:"connect--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"connect = bool (optional)")),(0,a.yg)("p",null,"Connect to ",(0,a.yg)("inlineCode",{parentName:"p"},"endpoint")," instead of listening at it."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,a.yg)("h3",c({},{id:"insert_newlines--bool-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"insert_newlines = bool (optional)")),(0,a.yg)("p",null,"Append a newline character (",(0,a.yg)("inlineCode",{parentName:"p"},"\\n"),") at the end of every datagram."),(0,a.yg)("p",null,"This option comes in handy in combination with line-based parsers downstream,\nsuch as NDJSON."),(0,a.yg)("p",null,"Defaults to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Import JSON via UDP by listenting on IP address ",(0,a.yg)("inlineCode",{parentName:"p"},"127.0.0.1")," at port ",(0,a.yg)("inlineCode",{parentName:"p"},"56789"),":"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_udp"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "127.0.0.1:56789"')),"\n",(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"import"))))))}N.isMDXComponent=!0}}]);