"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79873],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,u=d["".concat(p,".").concat(m)]||d[m]||y[m]||a;return n?o.createElement(u,l(l({ref:t},c),{},{components:n})):o.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>u,metadata:()=>f,toc:()=>h});var o=n(15680),r=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e},y=(e,t)=>a(e,l(t)),m=(e,t)=>{var n={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n};const u={},g="load_zmq",f={unversionedId:"tql2/operators/load_zmq",id:"tql2/operators/load_zmq",title:"load_zmq",description:"Loads bytes from ZeroMQ messages.",source:"@site/docs/tql2/operators/load_zmq.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_zmq",permalink:"/next/tql2/operators/load_zmq",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/load_zmq.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_tcp",permalink:"/next/tql2/operators/load_tcp"},next:{title:"measure",permalink:"/next/tql2/operators/measure"}},b={},h=[{value:"Description",id:"description",level:2},{value:"<code>endpoint: str (optional)</code>",id:"endpoint-str-optional",level:3},{value:"<code>filter = str (optional)</code>",id:"filter--str-optional",level:3},{value:"<code>listen = bool (optional)</code>",id:"listen--bool-optional",level:3},{value:"<code>connect = bool (optional)</code>",id:"connect--bool-optional",level:3},{value:"<code>monitor = bool (optional)</code>",id:"monitor--bool-optional",level:3},{value:"Examples",id:"examples",level:2}],v={toc:h},O="wrapper";function N(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,o.yg)(O,y(d(d({},v),r),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",d({},{id:"load_zmq"}),"load_zmq"),(0,o.yg)("p",null,"Loads bytes from ZeroMQ messages."),(0,o.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,o.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,o.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,o.yg)("span",d({parentName:"code"},{"data-line":""}),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_zmq"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [endpoint"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, filter"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, listen"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, connect"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, monitor"),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,o.yg)("h2",d({},{id:"description"}),"Description"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"load_zmq")," operator processes the bytes in a ZeroMQ message received by a ",(0,o.yg)("inlineCode",{parentName:"p"},"SUB"),"\nsocket."),(0,o.yg)("p",null,"Indpendent of the socket type, the ",(0,o.yg)("inlineCode",{parentName:"p"},"load_zmq")," operator supports specfiying the\ndirection of connection establishment with ",(0,o.yg)("inlineCode",{parentName:"p"},"listen")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"connect"),". This can be\nhelpful to work around firewall restrictions and fit into broader set of\nexisting ZeroMQ applications."),(0,o.yg)("p",null,"With the ",(0,o.yg)("inlineCode",{parentName:"p"},"monitor")," option, you can activate message buffering for TCP\nsockets that hold off sending messages until ",(0,o.yg)("em",{parentName:"p"},"at least one")," remote peer has\nconnected. This can be helpful when you want to delay publishing until you have\none connected subscriber, e.g., when the publisher spawns before any subscriber\nexists."),(0,o.yg)("h3",d({},{id:"endpoint-str-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"endpoint: str (optional)")),(0,o.yg)("p",null,"The endpoint for connecting to or listening on a ZeroMQ socket."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"tcp://127.0.0.1:5555"),"."),(0,o.yg)("h3",d({},{id:"filter--str-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"filter = str (optional)")),(0,o.yg)("p",null,"Installs a filter for the ZeroMQ ",(0,o.yg)("inlineCode",{parentName:"p"},"SUB")," socket at the source. Filting in ZeroMQ\nmeans performing a prefix-match on the raw bytes of the entire message."),(0,o.yg)("p",null,"Defaults to the empty string, which is equivalent to no filtering."),(0,o.yg)("h3",d({},{id:"listen--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"listen = bool (optional)")),(0,o.yg)("p",null,"Bind to the ZeroMQ socket."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("h3",d({},{id:"connect--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"connect = bool (optional)")),(0,o.yg)("p",null,"Connect to the ZeroMQ socket."),(0,o.yg)("p",null,"Defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,o.yg)("h3",d({},{id:"monitor--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"monitor = bool (optional)")),(0,o.yg)("p",null,"Monitors a 0mq socket over TCP until the remote side establishes a connection."),(0,o.yg)("h2",d({},{id:"examples"}),"Examples"),(0,o.yg)("p",null,"Interpret ZeroMQ messages as ",(0,o.yg)("a",d({parentName:"p"},{href:"/next/tql2/operators/read_json"}),"JSON"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",d({parentName:"pre"},{}),'load_zmq "1.2.3.4:56789"\nread_json\n')))}N.isMDXComponent=!0}}]);