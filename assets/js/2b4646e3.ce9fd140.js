"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),h=(e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const m={sidebar_position:0},f="Design Goals",g={unversionedId:"understand/architecture/design-goals",id:"version-VAST v3.0/understand/architecture/design-goals",title:"Design Goals",description:"In the following we articulate the design goals that we believe are vital to",source:"@site/versioned_docs/version-VAST v3.0/understand/architecture/design-goals.md",sourceDirName:"understand/architecture",slug:"/understand/architecture/design-goals",permalink:"/docs/understand/architecture/design-goals",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/understand/architecture/design-goals.md",tags:[],version:"VAST v3.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/docs/understand/architecture/"},next:{title:"Actor Model",permalink:"/docs/understand/architecture/actor-model"}},y={},v=[{value:"Data",id:"data",level:2},{value:"Open Data Access",id:"open-data-access",level:3},{value:"Rich and Strong Typing",id:"rich-and-strong-typing",level:3},{value:"Interoperability",id:"interoperability",level:3},{value:"System Architecture",id:"system-architecture",level:2},{value:"Adaptive Storage",id:"adaptive-storage",level:3},{value:"Natively Scalable Runtime",id:"natively-scalable-runtime",level:3},{value:"Separate Read and Write Path",id:"separate-read-and-write-path",level:3}],b={toc:v},w="wrapper";function k(e){var t=e,{components:n}=t,r=h(t,["components"]);return(0,a.kt)(w,u(p(p({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",p({},{id:"design-goals"}),"Design Goals"),(0,a.kt)("p",null,"In the following we articulate the design goals that we believe are vital to\nconsider when building a security analytics platform. We separate the discussion\ninto data and architecture aspects."),(0,a.kt)("admonition",p({},{title:"HotSec '08 Workshop",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Many design goals are derivatives from the workshop paper in 2008 about\n",(0,a.kt)("a",p({parentName:"p"},{href:"https://www.icir.org/mallman/papers/awareness-hotsec08.pdf"}),"Principles for Developing Comprehensive Network Visibility")," by Mark\nAllman, Christian Kreibich, Vern Paxson, Robin Sommer, and Nicholas Weaver.")),(0,a.kt)("h2",p({},{id:"data"}),"Data"),(0,a.kt)("p",null,"Data is in the center of every analytical system. We formulate the following\ndata-related design goals."),(0,a.kt)("h3",p({},{id:"open-data-access"}),"Open Data Access"),(0,a.kt)("p",null,"In a world of black boxes exposed through a narrow API, many organizations have\nlimited access to their very own data. We want to build a system that gives\nthe user full control over their data, and freedom of choice for processing\ntools."),(0,a.kt)("p",null,"Importantly, data should not be encoded in a proprietary format. We do not want\nvendor lock-in. For a security analytics platform, using open protocols and\nstandards for data is fundamental to build trust so that users can build\napplications on top."),(0,a.kt)("h3",p({},{id:"rich-and-strong-typing"}),"Rich and Strong Typing"),(0,a.kt)("p",null,"To accommodate the idioms of the security domain, an analytics engine must be\nable to work with objects in the domain, without losing semantic information and\ndegenerating the representation to a generic data model. Security analysts are\nnot data engineers, and the goal should be avoiding context switches to\nlower-level implementation details when possible."),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("a",p({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," security monitor provides first-class\nsupport for domain-specific entities (e.g., native representation of IPv4 and\nIPv6 addresses) and type-specific operations (e.g., the ability to perform top-k\nprefix search to answer subnet membership queries). In addition, it must be\npossible to extend the pre-defined types with user-defined types to allow for\ncustomization or enhancement of domain semantics."),(0,a.kt)("p",null,"Keeping strong typing at the core of the system (as opposed to just at the data\nexchange boundary) is important to allow type-specific optimizations and push\nprocessing logic deeper into the system."),(0,a.kt)("h3",p({},{id:"interoperability"}),"Interoperability"),(0,a.kt)("p",null,"Having an open and flexible data model is not enough for building a platform.\nThe system must also come with extensible mechanisms to integrate with ",(0,a.kt)("em",{parentName:"p"},"other"),"\nsystems. In fact, a platform should come with first-class support for\nsimplifying integration with existing solutions."),(0,a.kt)("p",null,"For example, this can mean offering multiple access mechanisms to the same data\nthat other tools already use, such as Kafka or REST APIs."),(0,a.kt)("h2",p({},{id:"system-architecture"}),"System Architecture"),(0,a.kt)("p",null,"For building a system that can effectively support security domain experts, we\nformulate the following architecture-related design goals."),(0,a.kt)("h3",p({},{id:"adaptive-storage"}),"Adaptive Storage"),(0,a.kt)("p",null,"Security analytics operates on activity data, typically representing action of\nentities. There is no need to modify a witnessed action, as it would change the\nsemantics of what happened. Therefore we must treat the corresponding telemetry\nas immutable and store it an append-only manner."),(0,a.kt)("p",null,"But when storage is finite, old data must be deleted eventually. To maximize\nretention spans and enable longitudinal analytics, the engine should support\nmore than just deletion of old data, e.g., implement incremental aging by\nrolling up old data into more space-efficient representations. Operators should\nbe able to express retention policies declaratively, both for compliance use\ncases and to filter out less useful data."),(0,a.kt)("h3",p({},{id:"natively-scalable-runtime"}),"Natively Scalable Runtime"),(0,a.kt)("p",null,(0,a.kt)("a",p({parentName:"p"},{href:"/docs/about/vision"}),"We envision")," a distributed system that can perform the\nsame processing centralized in the cloud and deep at the edge. CPU, memory, and\nstorage have drastically different forms along this spectrum. Our goal is to\ndeploy the same engine across the entire spectrum, but with different pluggable\ncomponents and varying configurations that can adapt to the local environment.\nThat is, the system should scale vertically as well as horizontally."),(0,a.kt)("h3",p({},{id:"separate-read-and-write-path"}),"Separate Read and Write Path"),(0,a.kt)("p",null,"Security analytics involves processing of structured event data that represents\nactivity of endpoints, the network, and cloud resources. This generates a\nnever-ending torrent of telemetry at high event rates. Consequently, an\nanalytics engine must be able to operate under a saturated write path (ingest)."),(0,a.kt)("p",null,"The read path (queries) should not be affected by the write path and scale\nindependently, at least conceptually. In certain deployment environments this is\nnot avoidable, e.g., when the I/O path to persistent storage is shared, or\ncannot handle well simultaneous read/write operations."))}k.isMDXComponent=!0}}]);