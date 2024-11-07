"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39906],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(t),y=r,g=s["".concat(l,".").concat(y)]||s[y]||d[y]||o;return t?n.createElement(g,c(c({ref:a},m),{},{components:t})):n.createElement(g,c({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=y;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[s]="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},93613:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>M,default:()=>N,frontMatter:()=>g,metadata:()=>w,toc:()=>f});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,s=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&m(e,t,a[t]);if(i)for(var t of i(a))p.call(a,t)&&m(e,t,a[t]);return e},d=(e,a)=>o(e,c(a)),y=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))a.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const g={sidebar_position:3},M="Taxonomies",w={unversionedId:"data-model/taxonomies",id:"version-v4.23/data-model/taxonomies",title:"Taxonomies",description:"Event taxonomies address the uphill battle of data normalization.",source:"@site/versioned_docs/version-v4.23/data-model/taxonomies.md",sourceDirName:"data-model",slug:"/data-model/taxonomies",permalink:"/data-model/taxonomies",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/data-model/taxonomies.md",tags:[],version:"v4.23",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Modules",permalink:"/data-model/modules"}},u={},f=[{value:"Concepts",id:"concepts",level:2}],h={toc:f},x="wrapper";function N(e){var a=e,{components:t}=a,r=y(a,["components"]);return(0,n.yg)(x,d(s(s({},h),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",s({},{id:"taxonomies"}),"Taxonomies"),(0,n.yg)("p",null,"Event taxonomies address the ",(0,n.yg)("a",s({parentName:"p"},{href:"https://medium.com/anton-on-security/security-correlation-then-and-now-a-sad-truth-about-siem-fc5a1afb1001"}),"uphill battle"),' of data normalization.\nThey enable you to interact with different data formats with a unified access\nlayer, instead of having to juggle the various naming schemes and\nrepresentations of each individual data source. Today, every SIEM has its own\n"unified" approach to represent data, e.g.,\nelastic\'s ',(0,n.yg)("a",s({parentName:"p"},{href:"https://www.elastic.co/guide/en/ecs/current/ecs-reference.html"}),"ECS"),",\nsplunk's ",(0,n.yg)("a",s({parentName:"p"},{href:"https://docs.splunk.com/Splexicon:CommonInformationModel"}),"CIM"),",\nQRadar's ",(0,n.yg)("a",s({parentName:"p"},{href:"https://www.ibm.com/docs/en/dsm?topic=leef-overview:"}),"LEEF"),",\nSentinel's ",(0,n.yg)("a",s({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/sentinel/normalization"}),"ASIM"),",\nChronicle's ",(0,n.yg)("a",s({parentName:"p"},{href:"https://cloud.google.com/chronicle/docs/unified-data-model/udm-usage"}),"UDM"),",\nPanther's ",(0,n.yg)("a",s({parentName:"p"},{href:"https://docs.panther.com/writing-detections/data-models"}),"UDM"),",\nand the XDR Alliance's ",(0,n.yg)("a",s({parentName:"p"},{href:"https://github.com/XDR-Alliance/Common-Information-Model"}),"CIM"),"\nThere exist also vendor-agnostic with a varying focus, such as MITRE's\n",(0,n.yg)("a",s({parentName:"p"},{href:"https://cee.mitre.org/"}),"CEE"),", OSSEM's ",(0,n.yg)("a",s({parentName:"p"},{href:"https://github.com/OTRF/OSSEM-CDM"}),"CDM"),", or STIX ",(0,n.yg)("a",s({parentName:"p"},{href:"https://docs.oasis-open.org/cti/stix/v2.1/os/stix-v2.1-os.html#_mlbmudhl16lr"}),"SCOs"),".\nSeveral vendors joined forces and launched the ",(0,n.yg)("a",s({parentName:"p"},{href:"https://ocsf.io"}),"Open Cybersecurity Schema\nFramework (OCSF)"),", an open and extensible project to create a ",(0,n.yg)("a",s({parentName:"p"},{href:"https://schema.ocsf.io"}),"universal\nschema"),"."),(0,n.yg)("p",null,"We could add ",(0,n.yg)("a",s({parentName:"p"},{href:"https://xkcd.com/927/"}),"yet another data model"),", but our goal is\nthat you pick one that you know already or like best. We envision a thriving\ncommunity around taxonomization, as exemplified with the ",(0,n.yg)("a",s({parentName:"p"},{href:"https://ocsf.io"}),"OCSF"),". With\nTenzir, we aim for leveraging the taxonomy of your choice."),(0,n.yg)("admonition",s({},{title:"Concepts",type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"A ",(0,n.yg)("a",s({parentName:"p"},{href:"#concepts"}),"concept")," is a field mapping/alias that lazily resolves at query\ntime.")),(0,n.yg)("p",null,"Concepts are not embedded in the schema and can therefore evolve independently\nfrom the data typing. This behavior is different from other systems that\nnormalize by ",(0,n.yg)("em",{parentName:"p"},"rewriting")," the data on ingest, e.g., elastic with ",(0,n.yg)("a",s({parentName:"p"},{href:"https://www.elastic.co/guide/en/ecs/current/ecs-reference.html"}),"ECS"),". We\ndo not advocate for this approach, because it has the following drawbacks:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data Lock-in"),": if you want to use a different data model tomorrow, you\nwould have to rewrite all your past data, which can be infeasible in some\ncases."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Compliance Problems"),": if you need an exact representation of your original\ndata shape, you cannot perform an irreversible transformation."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Limited Analytics"),": if you want to run a tool that relies on the original\nschema of the data, it will not work.")),(0,n.yg)("p",null,(0,n.yg)("a",s({parentName:"p"},{href:"type-system"}),"Type aliases")," and concepts are two different mechanisms to add\nsemantics to the data. The following table highlights the differences between\nthe two mechanisms:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:null})),(0,n.yg)("th",s({parentName:"tr"},{align:null}),"Aliases"),(0,n.yg)("th",s({parentName:"tr"},{align:null}),"Concepts"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Objective"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Tune data representation"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Model a domain")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:null}),"User"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Schema writer"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Query writer")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Typing"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Strong"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Lazy")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Location"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Embedded in data"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Defined outside of data")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Modification"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Only for new data"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"For past and new data")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Structure"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Type hierarchy"),(0,n.yg)("td",s({parentName:"tr"},{align:null}),"Tag-like collection")))),(0,n.yg)("admonition",s({},{title:"The Imperfection of Data Models",type:"caution"}),(0,n.yg)("p",{parentName:"admonition"},"Creating a unified data model is conceptually The Right Thing, but prior to\nembarking on a long journey, we have to appreciate that it will always remain an\nimperfect approximation in practice, for the following reasons:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Incompleteness"),": we have to appreciate that all data models are incomplete\nbecause data sources continuously evolve."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Incorrectness"),": in addition to lacking information, data models contain\na growing number of errors, for the same evolutionary reasons as above."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Variance"),": data models vary substantially between products, making it\ndifficult to mix-and-match semantics."))),(0,n.yg)("h2",s({},{id:"concepts"}),"Concepts"),(0,n.yg)("p",null,"A ",(0,n.yg)("em",{parentName:"p"},"concept")," is a set of ",(0,n.yg)("a",s({parentName:"p"},{href:"/language/expressions#extractors"}),"extractors")," to enable more semantic\nquerying. Tenzir translates a query expression containing a concept to a\ndisjunction of all extractors."),(0,n.yg)("p",null,"For example, Consider Sysmon and Suricata events, each of which have a notion of\na network connection with a source IP address. The Sysmon event\n",(0,n.yg)("inlineCode",{parentName:"p"},"NetworkConnection")," contains a field ",(0,n.yg)("inlineCode",{parentName:"p"},"SourceIp")," and the Suricata event ",(0,n.yg)("inlineCode",{parentName:"p"},"flow"),"\ncontains a field ",(0,n.yg)("inlineCode",{parentName:"p"},"src_ip")," for this purpose. Without concepts, querying for a\nspecific value would involve writing a disjunction of two predicates:"),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"c","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"c","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"suricata.flow.src_ip "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}})," 6.6.6.6"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}})," ||"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," sysmon.NetworkConnection.SourceIp "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}})," 6.6.6.6"))))),(0,n.yg)("p",null,"With concepts, you can write this as:"),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"c","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"c","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"source_ip "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FFA198",fontStyle:"italic"}})," 6.6.6.6"))))),(0,n.yg)("p",null,'Concepts decouple semantics from syntax and allow you to write queries that\n"scale" independent of the number of data sources. No one wants to remember\nall format-specific names, aside from being an error-prone practice.'),(0,n.yg)("p",null,"You can define a concept in a ",(0,n.yg)("a",s({parentName:"p"},{href:"modules"}),"module")," as follows:"),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),"concepts"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),"  source_ip"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),"    description"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),"the originator of a network-layer connection")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),"    fields"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),"sysmon.NetworkConnection.SourceIp")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),"suricata.flow.src_ip"))))),(0,n.yg)("p",null,"Concepts compose. A concept can include other concepts to represent semantic\nhierarchies. For example, consider our above ",(0,n.yg)("inlineCode",{parentName:"p"},"source_ip")," concept. If we want to\ngeneralize this concept to also include MAC addresses, we could define a concept\n",(0,n.yg)("inlineCode",{parentName:"p"},"source")," that includes both ",(0,n.yg)("inlineCode",{parentName:"p"},"source_ip")," and a new field that represents a MAC\naddress:"),(0,n.yg)("p",null,(0,n.yg)("figure",s({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,n.yg)("svg",s({parentName:"figure"},{viewBox:"0 0 700 320",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1cXFt3mtpcdTAwMTZ+z69w5LxW9rpf+lx1MDAxNpPmttMmjWna5pw9XHUwMDFjVIhcdTAwMTJcdTAwMTFcZmBue/S/71x0JoIoSGKM7vb40OhisdaENb/vm2tO6N9cdTAwMWK12mZ0P7A339c27bu26TpWYN5uvovbb+wgdHxcdTAwMGZcdTAwMGWR5HfoXHUwMDBmg3bSs1x1MDAxYkWD8P1cdTAwMWZ/mIOBkZ5ltP3+6Ezbtfu2XHUwMDE3hdD3v/C7Vvs7+TczV2C3I9PruHZyQnIonVx1MDAwZVx1MDAwYpVv/eR7ydRYKS1cYqGIjXs44Vx1MDAwZcxcdTAwMTfZXHUwMDE2XHUwMDFjvjTd0E6PxE2bXGJfXHJcdTAwMDY4wKK/b0Wy271rXHUwMDFk7e6m0146rtuM7t3ErNCHS0mPhVHg9+yvjlx1MDAxNXXjuXPtRWdcdTAwMDX+sNP17DCcOMdcdTAwMWaYbSe6j9tcdTAwMTBcdTAwMWG3ju7B+1raclx1MDAxN/cg6e/4XGaqUW7ubd/1g3ju/6Dkk87+w2z3OmCCZ6V9lFC2XHUwMDE2aZ/bpytcdTAwMTLpuF3b6XQjaMy0hXZyVylSnEtGx+3x+INcdTAwMDMrWd+/stftWY/X/bTg6ZLjx5afqaVx/1x1MDAwZnlXybpLZlx1MDAxNa+P7thDX15cdTAwMDd3XHUwMDA3R81cdTAwMWanrcHpwJPjK5rwrci+izbHXHUwMDA3fr4rXHUwMDFi1r8+/1x1MDAxMPz4MNiJPrv129bNx6HV+zZ7WDNcYvzbquP+qFx1MDAxZj80P8lcdTAwMGLzYvtKR97xR95XYbVxXHUwMDFmv6X3dTiwzJF7YyFcdTAwMDVcdTAwMTGKcCqQXHUwMDE4XHUwMDFmd1x1MDAxZK9cdTAwMDdcdTAwMDe9oeumbX67l1wiYiNj8Fx1MDAxNFx1MDAxNJPbNVx1MDAxM4W4XGKFioEhXFxcdTAwMGJdXHUwMDE5hOXLt6Yg5Fx1MDAxMyBkeDFcdTAwMTC2bYtZ5lxmXHUwMDEw8lx1MDAxOSAkUyDEhGKGXGJReiFcdTAwMTiS+TCc7XlcdTAwMWM8j2kuqKLP8Lx0hX0vajpcdTAwMGZcdFx1MDAxM4iJ1l2z77hcdMuNm1x1MDAxM5d8/6Q4LduzXHUwMDA2vuNF2ftcdTAwMWLaMHlutPi0LdfpxN672YbLsYNcdMeOXHUwMDFjkKpxh75jWVn9aYMtJoxcdTAwMTlcdTAwMWNUkVxyP3A6jme6Z1x1MDAwNaaWQq5U/Xgh7LCWXHUwMDE0cSGpqIy7retL56L74+y7XHUwMDFmdve+Nlx1MDAwMu9+eH6y3rijXCInfmxJuFOVxFx1MDAwZriWKEpcdTAwMTReXGJ2XHUwMDBiqt9hr/8xOr/16cdO+KHHdzrXZ/v1lapfXHUwMDE1lVx1MDAxMlx1MDAwMqdktSSVymhQXqRcdTAwMDArmDBKK4Ol/C6vKVgmRSpcdTAwMGKeV1x1MDAwNYusJlJYXHUwMDEwKlx1MDAxOOa/n0g5gzeVpznEXiBPYGQpykYon1x1MDAxNVxmYkyLgFx1MDAwNlx1MDAwMVxmXHUwMDAxYVwimXhpXHUwMDFl0sqJZy2RRlx1MDAxNDOYJlx1MDAxOGuKXHUwMDEwXHUwMDA0Y2xcdTAwMTJ3XHUwMDFhXHUwMDE5UlxuqbmijFx1MDAwMfUtXHUwMDA1hYJcdTAwMWJcdTAwMDLQRZHQWkFcdTAwMDSupjGJlUFcdTAwMTnXgFx1MDAwMYUxhKyIT2FcdTAwMTQhRlx1MDAwMM+cr1x1MDAwZaNAzIo/S1x1MDAxYzL301xmoobjWY7XmTTsMetQJXxLUN1cdTAwMWXGVlwiXHUwMDAzVlx1MDAwYkGQoZWQYJPK9OmYgzjwn1xc9+lcdTAwMGKHoG++QeWAXHUwMDFkT6ZccsWo5DNccsVIXCJcdTAwMDI2wPJBUEL5tCWuXHUwMDE5Rtt+v+9EcLdPkkA0d1eT27dcdTAwMTXDvGubVv4oXFxJ9thmXHUwMDE0OLk4NYluJ+OV9FstxUzyY/z9r3cze1x1MDAxM2lIROHO4pw/x5865oaWXHUwMDA0I0VHkFwict54hfhcdTAwMTiNN1x1MDAwNY10vI3s3+ezI9GF7Fxiu2TGidYp68wjx/LcwZqSIzdgdypcdTAwMDBFWHMkUvpLds6MXHUwMDFhiDCtXHUwMDE0hFx1MDAwN1xc4yWRIzOwXHUwMDAyU4VcdTAwMTJIcIhcdTAwMDNmkCNcdTAwMDWSZuBxQH6AXCKhUlx1MDAwMn1cIkfNmFx1MDAwMlx1MDAwN1wiiyW7XHUwMDE2JUchMsmXXHUwMDE1kmNcdTAwMWTYkVwiWFhNpUJSYc5ZptuIsnJLj/TLXGKy1ayrT1x1MDAwMe5cdTAwMDQ9ga7b1zzyg4BOXHUwMDEzJEaGkFxuyI9cdTAwMDBXMySZnG03XHUwMDA13uBcdTAwMWNTXHUwMDFlm1x1MDAwZrb9XHUwMDAyXFypXHUwMDE1XHUwMDAyKoF9XHLTlOrs2ZhcdTAwMTicS8TgosG/XHUwMDE1lWwuVVx1MDAxNqElXHUwMDE5blxuJ89kytJcdTAwMDRHZouS40pcdTAwMGVripng1fNcdTAwMWLlTrOWXFyZz28wstL8XHUwMDA2plxmSE8wsdL0fv1cXO5plz308FV43Lq3XHUwMDFhZ1eD+982vf9cdTAwMTaJXHUwMDEzxYpQSFx1MDAxMJdawFa+enq/fPnWXHUwMDE0hrn0/rLSjNUyJ1xmIc0lRPeriztGiVx1MDAxM/ZcZsdLXHUwMDE3eIHEycBcdTAwMGbeNrM/RzNcblIniZkvXHUwMDE3vSxcdTAwMWLn8yeSSilha0kq4y3yr++6p63by+9KXHUwMDA0jW9uXV/w/nrjLV/T5nwxvC1Y08aMXHUwMDEy2LZcdTAwMTGxWFx1MDAxNmTRqva3P1x1MDAwZrePvn87aD9cZneivoPu96zPi8te/1x1MDAxZZ322MnhVSjbjmhvXzs3d+4ryJ5o+ufbQXjm+q3m4X7vXHUwMDAwdT5s919P9t6kqq1kXHUwMDExXHUwMDBllWBESU2q79TLl29NYTgpe3xZXHUwMDA1g1lVbTZcdTAwMDVDIWLNQekm7teXPctcdTAwMGUj0JdcYjyv9T+vtLZNl6SAc+Qjr4BcdTAwMDVcdTAwMTa/XFxcZjOkm9dCXHUwMDAycafiKJOZmauFqvGp7n5pnVxmjr7cn/25tWO2nOZ6gzC/XHUwMDA15GilW0Bcbv5cdTAwMWaz70pL3FtuV1x1MDAxZlknPdXbXHS/49DttNDdl5VKYVx1MDAxNcl6i52aLtypcaphiYWqvlErv8trXG6WnGItK19SbaOmiSSSqd9UsN64yj2H28uE6uWlboZIXHUwMDEx4LDSSGmAXFz1Unc5XHUwMDAxrSXi4mpcdTAwMGWnSms2Knnm8MeJwVx1MDAwNILjXFzFdTm5XHUwMDE0NFxuZlxiLFx058WlbkJcZlxiXHUwMDFkXHUwMDExZpxTwIXKYPIpuoT9XHUwMDFkXCKcrbTSTePnI15cdTAwMDLWisWc8mCuli0gU1xirLhQSGLE0lx1MDAwN9pqaSEnu+pMyqlcdTAwMGKvVMgpXHUwMDA3bW2y0s304yd9vHzCZKK1YFxixU9cdTAwMGJIxLGYMunfVsZcdTAwMTFGvOXBanbJW8JRXHUwMDFlV/lV1ZJ3XHUwMDExTpLxpiGSjreR/ft8luSoOIinlFx1MDAxMk0oTVx1MDAwMTmPJcszXHUwMDBia8uSxTVv4Fx1MDAxZFx1MDAwM5R6XHJq3tCF6bSWl+r701x1MDAwM66aICzBJVdKkkSr5+R+lkaSccWbacqZjlx1MDAxZvpliEtGMt1eteK9/WdHfN4/XHUwMDFiXmyZJz1/31xuj7Y+z3gk6P9cdTAwMTXv2Vx1MDAxNW9NyetVvPMoeSZPlqY7ZGE8SZUgLFx1MDAwNmBloiz3mbUkyqlsh1pptkPimJLRalx1MDAxM//BzWnrXHUwMDE43UTdnUigztbXy2OyO/xtXHUwMDEz/2+RRcGZ17emko5cblDPkaz+qkD5+q0pXGYn93FiWUnHiq9cbkiIgEFo9cpfXHUwMDE1WE0m5c3L3nOUoyyXsmDtm5RAXHUwMDBmaVx1MDAwMY5JWfX3uVx1MDAwZvdcXN44wpf7n1x1MDAxZo5vmnfoa+Pj/eF6Q6+O2aRcdTAwMDQyuVx1MDAxOPZcdTAwMTYtfsPuniqVfUtmXHUwMDA1XHUwMDFhqNq61z44xo2Bzb7oYbMuPWQtroFr+MxX6bhn4elBw28752GgjzxcdTAwMTDWo91vXHUwMDA1ocCzxjX3XHUwMDFlwtb2rt+52jtcdC5QxFx1MDAxYnW7+Xqa/Vx1MDAxNsX6XHUwMDEy4mCwx4GNWvU8bLm3rSlt5FKvbMH/XHUwMDA3YtFX0JFCXHUwMDE0SEOtNJ+KqMiYtmzJXHUwMDA2XHUwMDEx9UDbYn98S7GeI3J5sc5YWVxutJI3WGgx1LBcIkQqWf25mHLqWUusXHUwMDExZSDJXGJWMlx1MDAwNzkhXHIhuVTZXHUwMDA3Z15cdTAwMTN7XHUwMDEyXHUwMDFimuTGT1x1MDAxZpiZNflcYoxcdTAwMDRJpTGXeqVvqmBNxDJf4yvHQS1bKeCKU4KU4FpRKYnIdFx1MDAxYeXR0lx1MDAxNZ665ol03aT5/66cXHUwMDE5nfam+FOnylx1MDAxMEhTyedccjDDXHUwMDFkk1x1MDAwMTKemFx1MDAwZbGR/fuCQistfHmfyuSlI119R15cdTAwMWVGrSfnXGKDqKlcdTAwMDfyKDEo50xkmehVXHSHXHUwMDFhcoLmJtiGMU5nsFxy5iouXHUwMDFkXHUwMDAy4FfKNlKgXHUwMDE37dZfm23qQDdcdTAwMTJRXHUwMDA0q4RcdGNaT7PN49r+wlST86P4w7CB4r1lXHUwMDA1npl1dup/RVx1MDAxY7PxOOCmOVx1MDAxODQjcI/xam7eOPZtY1x1MDAwNlx1MDAwZS6TT1x1MDAxY1x1MDAxNyWLXHUwMDEwM4GdeOfPjZ//XHUwMDAwTqpcdMEifQ==",(0,n.yg)("defs",{parentName:"svg"},(0,n.yg)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"#868e96",strokeWidth:"0",d:"m285.29 59.53 137.84 2.03 2.91.38 5.18 9.22-4.03 39.63-3.62 6.85-8.62 3.29-136.33-.52-3.42-5.63-6.07-7.3 1.45-37.77 2.48-6.94 7.26-2.61 4.37 1.79"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M285 60c44.6.29 87.57-1.17 130 0m-130 0c38.1.94 76.45 1.92 130 0m0 0c8.8-.46 15.14 3.64 15 15m-15-15c11.83-.07 16.76 5.46 15 15m0 0c.69 6.95-1.14 15.9 0 30m0-30c-.48 7.54-.69 13.79 0 30m0 0c-1.61 10.35-3.08 14.82-15 15m15-15c-.68 10.55-3.4 13.52-15 15m0 0c-49.78 2.77-98.04.18-130 0m130 0c-44.44.26-86.66-.8-130 0m0 0c-10.52.26-14.27-4.68-15-15m15 15c-8.95-.06-17.1-6.71-15-15m0 0c.78-5.28.46-11.95 0-30m0 30c.69-9.81-.38-21.96 0-30m0 0c.79-10.12 5.9-15.04 15-15m-15 15c-.16-11.65 6.03-15.45 15-15"}))),(0,n.yg)("text",s({parentName:"svg"},{x:"75",y:"16",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(275 80)"}),"source_endpoint"),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m525.17 10.19 156.99-.83 2.54 2.65 4.58 8.51 1.36 42.86-8 2.84-9.39 5.66-155.83-2.51-4.54-4.17-1.26-5.16-2.54-37.44 3.71-7.79 3.65-1.92 8.88-4.38"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M525 10c53.9.04 109.41 2.99 150 0m-150 0c46.98-.83 93.3-.3 150 0m0 0c10.1-1.66 15.34 6.25 15 15m-15-15c10.42-2.14 13.91 6.56 15 15m0 0c-1.73 11.79 1.36 20.94 0 30m0-30c.68 11.72.61 21.9 0 30m0 0c-.92 8.94-4.92 15.64-15 15m15-15c1.04 8.07-6.97 14.28-15 15m0 0c-36.45 1.23-74.16 1.05-150 0m150 0c-55.79-1.36-110.28-.03-150 0m0 0c-8.64-1.2-16.06-6.31-15-15m15 15c-9.32-.77-16.77-6.61-15-15m0 0c-.06-11.59-.52-21.81 0-30m0 30c.37-9.14.84-19.37 0-30m0 0c1.82-11.27 6.95-13.26 15-15m-15 15c2.06-9.06 5.51-12.93 15-15"}))),(0,n.yg)("text",s({parentName:"svg"},{x:"85",y:"16",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(515 30)"}),"source_ip"),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M433.742 60.077c4.34-2.45 16.2-11.84 27.35-14.83 11.16-2.99 33.24-2.58 39.58-3.13m-65.12 20.2c4.65-2.74 16.9-15.79 27.68-18.96 10.77-3.18 31 .01 36.95-.09"})),(0,n.yg)("path",s({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m501.952 42.947-16.44 6.01.46-14.51 14.02 9.11"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M499.302 41.887c-3.43 3.83-9.2 3.83-13.71 5.97m14.92-4.71c-4.89 2.41-9.84 3.52-14.9 5.07m-.41 1.22c1.42-3.6 1.01-9.06.92-13.94m.72 12.69c-1.05-3.06-.08-5.54.33-12.37m.74-.29c4.95 2.54 9.13 5.35 13.16 6.62m-14.8-6.19c3.34 1.42 6.22 3 14.47 8.05m-.56-.74s0 0 0 0m0 0s0 0 0 0"}))),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M435.45 113.785c4.85 2.03 17.73 9.18 28.56 11.39 10.82 2.2 30.4 1.45 36.4 1.83m-66.26-13.87c4.8 2.2 18.36 10.81 29.37 13.36 11.02 2.55 30.51 2.15 36.7 1.93"})),(0,n.yg)("path",s({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m500.44 129.115-14.89 4.76 1.46-11.41 13.25 5.72"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M501.16 129.535c-5.18 2.11-8.14 3.47-13.64 4.37m12.03-5.07c-3.45 2.4-9.02 3.7-13.27 6.51m-.54-1.19c.68-2.93 1.22-5.72 1.75-11.75m-.41 12.94c-.5-3.12-.6-5.67-1.03-12.61m.1.34c7.24 1 11.72 2.73 15.08 4.78m-15-5.23c3.9 1.7 8.04 2.62 13.82 5.53m.17.27s0 0 0 0m0 0s0 0 0 0"}))),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m523.75 90.76 158.21-.3 4.81 2.41 4.79 9.18-1.51 41.15-6.11 5.6-7.1 1.03-158.82-1.98-5.01-2.43-2.91-7.49-1.86-35.35 4.41-7.86 7.11-2.75 5.72-1.36"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M525 90c53-.52 103.56-1.92 150 0m-150 0c56.24.07 112.43.1 150 0m0 0c11.31-1.18 13.02 5.18 15 15m-15-15c12.14 2.29 13.98 2.84 15 15m0 0c1.17 10.25.28 17.09 0 30m0-30c-.69 8.8.12 18.81 0 30m0 0c-1.61 11.73-6.83 13.71-15 15m15-15c1.71 7.91-3.75 15.12-15 15m0 0c-57.44.95-116.99-1.87-150 0m150 0c-37.78 0-74.6.29-150 0m0 0c-9.33-1.78-14.68-6.69-15-15m15 15c-11.76 2.15-15.24-4.39-15-15m0 0c-1.02-7.36-.66-17.37 0-30m0 30c-.22-5.66.92-12.79 0-30m0 0c-.14-11.27 6.61-13.19 15-15m-15 15c1.38-10.6 3.51-16.61 15-15"}))),(0,n.yg)("text",s({parentName:"svg"},{x:"85",y:"16",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(515 110)"}),"source_port"),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"#868e96",strokeWidth:"0",d:"m284.24 218.68 135.5 1.55 5.61 2.86 5.62 10.02-2.45 38.31-5.65 8.08-6.06 1.7-138.9-3.43-5.56-.68-1.97-8.65-.87-38.16 3.63-4.74 5.52-4.99 6.19-.19"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M285 220c32.54.61 61.29.02 130 0m-130 0c49.16.82 97.27 1.38 130 0m0 0c11.44-1.43 13.91 3.94 15 15m-15-15c8.14 1.39 15.18 2.87 15 15m0 0c-1.22 8.3.85 18.45 0 30m0-30c-.53 5.51.03 11.96 0 30m0 0c-.58 11.23-4.67 14.56-15 15m15-15c.94 9.45-3.83 17.26-15 15m0 0c-30.24-1.45-64.88 1.83-130 0m130 0c-49.06 2.19-96.64 1.45-130 0m0 0c-10.31-.18-13.39-6.14-15-15m15 15c-9.73-.37-16.11-4.19-15-15m0 0c-1.85-9.97 1.2-17.89 0-30m0 30c.2-12.19-.42-22.24 0-30m0 0c.79-11.46 6.89-15.94 15-15m-15 15c1.76-10.23 5.09-14.8 15-15"}))),(0,n.yg)("text",s({parentName:"svg"},{x:"75",y:"16",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(275 230)"}),"destination_"),(0,n.yg)("text",s({parentName:"svg"},{x:"75",y:"36",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(275 230)"}),"endpoint"),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m523.17 169.29 157.5.99 6.78 5.09 1.78 5.98-1.44 41.82-1.84 5.92-11.47-.38-157.44 1.19-3.15-3.73-4.38-8.86.12-34.04 4.34-9.91 4.32-2.07 5.53-2.92"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M525 170c29.69-.74 63.56-.29 150 0m-150 0c34.35.57 70.74-.65 150 0m0 0c8.91-1.06 13.38 6.21 15 15m-15-15c10.18-2.13 14.64 3.95 15 15m0 0c.83 9.78-2.11 17.8 0 30m0-30c-.33 7.63-.49 16.26 0 30m0 0c.33 9.56-4.18 14.52-15 15m15-15c1.17 12.26-6.33 15.77-15 15m0 0c-47.57.64-90-1.41-150 0m150 0c-59.4 1.66-118.42 1.36-150 0m0 0c-8.39-1.14-14.77-5.32-15-15m15 15c-11.11.81-15.03-5.49-15-15m0 0c1.42-8.33 1.94-17.42 0-30m0 30c-.55-7.58.36-17.31 0-30m0 0c1.89-10.94 6.53-15.2 15-15m-15 15c.09-9.8 3.96-16.02 15-15"}))),(0,n.yg)("text",s({parentName:"svg"},{x:"85",y:"16",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(515 190)"}),"destination_ip"),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M436.259 223.43c4.48-2.89 15.09-14.98 25.61-18.71 10.52-3.73 30.96-3.02 37.53-3.68m-64.22 21.86c4.34-2.66 14.46-12.74 25.57-16.69 11.12-3.94 34.87-5.74 41.14-7"})),(0,n.yg)("path",s({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m500.919 199.91-11.65 7.02-2.14-14.05 13.75 7.46"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M503.109 198.8c-4.57 1.61-6.47 5.99-12.91 8.16m11.74-7.78c-3.34 1.55-6.26 4.58-12.56 8.03m-1.12-1.04c1.28-2.88-.85-6.93.26-11.84m.36 13.35c.44-3.71-.77-6.53-1.84-12.5m-.17-.68c4.25 1.5 10.21 4.07 13.56 5.46m-12.97-5.31c3.58 1.84 7.66 2.37 14.74 4.38m-.31.18s0 0 0 0m0 0s0 0 0 0"}))),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M436.11 272.33c4.72 1.9 16.23 9.9 26.93 12.49 10.69 2.59 31.08 2.78 37.25 3.06m-65.12-16.77c4.58 1.98 16.07 12.35 26.88 14.85 10.81 2.5 31.54-.1 37.98.15"})),(0,n.yg)("path",s({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m500.73 286.08-14.48 6.44-1.96-13.26 16.87 6.89"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M499.62 286c-4.07 3.25-5.33 4.77-13.34 5.97m13.72-6.14c-3.47 1.63-5.42 3.51-13.47 7.06m-1.04.83c.73-5.65.2-7.86.25-14.29M487 293.4c-.92-4.86-.96-9.08-.41-13.08m-.68-.86c2.98 2.83 7.06 1.84 14.87 6.06m-14.72-5.46c3.77 1.7 6.35 3.24 13.79 6.43m.18-.38s0 0 0 0m0 0s0 0 0 0"}))),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m526.2 251.62 154.82-.82 3.96 4.56 6.59 7.33-3.03 37.58-5.8 8.46-7.6 1.19-157.43-2.06-4.57.18-2.68-9.91-.37-36.29 2.48-9.72 4 .05 7.82-3.49"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M525 250c34.7.96 71.98-.76 150 0m-150 0c52.12.54 104.51 1.68 150 0m0 0c10.16-1.85 14.69 4.09 15 15m-15-15c9.54-1.24 14.73 6.14 15 15m0 0c-1.08 9.7-1.42 21.9 0 30m0-30c.08 8.21.32 16.61 0 30m0 0c1.02 11.97-6.15 15.67-15 15m15-15c.11 11.45-6.73 12.85-15 15m0 0c-56.4-1.96-114.65-.75-150 0m150 0c-47.52-.7-96.53-.29-150 0m0 0c-10.96.7-15.02-5.43-15-15m15 15c-10.49-2.2-16.16-3.69-15-15m0 0c-.72-8.86-1.68-19.16 0-30m0 30c.83-11.61.65-22.38 0-30m0 0c.07-9.83 4.1-15.88 15-15m-15 15c-.68-12.25 6.32-12.95 15-15"}))),(0,n.yg)("text",s({parentName:"svg"},{x:"85",y:"16",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(515 270)"}),"destination_port"),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"#868e96",strokeWidth:"0",d:"m25.01 141.11 135.49.86 6.38.26 1.28 9.42.88 39.1-6.46 6.21-6.44 2.88-137.04-2.69-5.62.11-5.06-10.23 3.69-34.31 3.3-8.35 1.29-4.42 9.59 1.71"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M25 140c28.43-1.42 54.3-1.13 130 0m-130 0c29.17-.56 55.57-.81 130 0m0 0c10.56 1.87 15.4 5.94 15 15m-15-15c11.51-2.18 15.05 3.87 15 15m0 0c-.5 11.2-1.07 24.12 0 30m0-30c-.09 10.09-.49 19.17 0 30m0 0c.59 10.18-5.53 14.19-15 15m15-15c-.23 12.01-3.89 16.75-15 15m0 0c-29.61 1.19-61.1-.28-130 0m130 0c-27.4-.56-55.91-1.64-130 0m0 0c-8.2-1.9-15.66-3.5-15-15m15 15c-11.52 1.73-15.89-3.49-15-15m0 0c-1.38-8.74-.07-16.22 0-30m0 30c.8-7.14.77-14.11 0-30m0 0c-1.31-10.78 4.07-16.25 15-15m-15 15c-.75-11.49 3.21-15.72 15-15"}))),(0,n.yg)("text",s({parentName:"svg"},{x:"75",y:"16",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(15 160)"}),"connection"),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M177.054 137.806c5.13-6.21 20-29.6 32.33-37.64 12.32-8.04 34.76-8.84 41.65-10.6m-72.31 47.27c5.47-6.5 21.03-30.53 33.04-38.22 12.02-7.7 32.44-6.6 39.05-7.95"})),(0,n.yg)("path",s({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m251.264 88.946-13.33 7.97-1.56-11.44 14.12 6.01"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M250.974 89.886c-3.3 4.6-9.7 6.88-13.59 8.49m13.64-7c-5.29 2.02-10.39 5.79-13.2 7.14m-1.08.85c.52-7.04-.36-10.52-.56-14.27m1.67 12.9c-.1-2.48.17-5.43-1.55-12.67m.23 1.35c3.09 1.19 8.36.94 12.95 3.42m-12.86-4.73c4.24 2.54 9.66 4.2 14.09 4.86m.1.44s0 0 0 0m0 0s0 0 0 0"}))),(0,n.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M176.411 201.735c5.85 7.18 22.49 34.51 34.68 42.68 12.2 8.17 32.06 5.39 38.48 6.34m-74.55-46.73c5.81 6.95 23.44 31.35 35.7 38.81 12.26 7.46 31.37 4.57 37.86 5.97"})),(0,n.yg)("path",s({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m246.861 248.865-13.55 5.19 1.9-12.67 14.19 6.41"})),(0,n.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M247.801 250.175c-1.85-.35-6.08 1.24-13.04 5.32m14.53-6.87c-4.38 1.19-6.97 2.96-14.38 6.48m.85-.9c-1.89-4.01-.12-7.56-.93-13.73m-.44 13.98c.16-3.05-.03-7.6.67-12.73m1.34-1.39c4 3.21 6.36 4.5 11.61 8.75m-12.91-7.73c5.38 3.43 10.08 5.25 13.04 7.4m.44.05s0 0 0 0m0 0s0 0 0 0"})))))),(0,n.yg)("p",null,"You define the composite concept in a module as follows:"),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),"concepts"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),"  source_ip"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),"    description"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),"the originator of a connection")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),"    fields"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),"zeek.conn.id.orig_l2_addr")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#7EE787"}}),"    concepts"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"    - "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),"source_ip"))))),(0,n.yg)("p",null,"You can add new mappings to an existing concept in every module. For example,\nwhen adding a new data source that contains an event with a source IP address\nfield, you can define the concept in the corresponding module."))}N.isMDXComponent=!0}}]);