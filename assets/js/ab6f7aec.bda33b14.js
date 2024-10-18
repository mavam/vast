"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85674],{15680:(e,a,r)=>{r.d(a,{xA:()=>g,yg:()=>c});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=t.createContext({}),s=function(e){var a=t.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},g=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,c=u["".concat(p,".").concat(m)]||u[m]||y[m]||o;return r?t.createElement(c,i(i({ref:a},g),{},{components:r})):t.createElement(c,i({ref:a},g))}));function c(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98642:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>f,default:()=>w,frontMatter:()=>c,metadata:()=>h,toc:()=>N});var t=r(15680),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(e,a,r)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,u=(e,a)=>{for(var r in a||(a={}))p.call(a,r)&&g(e,r,a[r]);if(l)for(var r of l(a))s.call(a,r)&&g(e,r,a[r]);return e},y=(e,a)=>o(e,i(a)),m=(e,a)=>{var r={};for(var t in e)p.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&s.call(e,t)&&(r[t]=e[t]);return r};const c={},f="Glossary",h={unversionedId:"glossary",id:"version-v4.22/glossary",title:"Glossary",description:"\x3c!--",source:"@site/versioned_docs/version-v4.22/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/glossary",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/glossary.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Platform CLI",permalink:"/platform-cli"},next:{title:"Language",permalink:"/language"}},d={},N=[{value:"App",id:"app",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Connector",id:"connector",level:2},{value:"Context",id:"context",level:2},{value:"Format",id:"format",level:2},{value:"Index",id:"index",level:2},{value:"Integration",id:"integration",level:2},{value:"Loader",id:"loader",level:2},{value:"Node",id:"node",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Operator",id:"operator",level:2},{value:"PaC",id:"pac",level:2},{value:"Parser",id:"parser",level:2},{value:"Partition",id:"partition",level:2},{value:"Pipeline",id:"pipeline",level:2},{value:"Platform",id:"platform",level:2},{value:"Printer",id:"printer",level:2},{value:"Saver",id:"saver",level:2},{value:"Schema",id:"schema",level:2},{value:"Sink",id:"sink",level:2},{value:"Source",id:"source",level:2},{value:"TQL",id:"tql",level:2},{value:"Transformation",id:"transformation",level:2}],v={toc:N},b="wrapper";function w(e){var a=e,{components:r}=a,n=m(a,["components"]);return(0,t.yg)(b,y(u(u({},v),n),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",u({},{id:"glossary"}),"Glossary"),(0,t.yg)("p",null,"This page defines central terms in the Tenzir ecosystem."),(0,t.yg)("admonition",u({},{title:"missing term?",type:"note"}),(0,t.yg)("p",{parentName:"admonition"},"If you are missing a term, please open a ",(0,t.yg)("a",u({parentName:"p"},{href:"https://github.com/orgs/tenzir/discussions/new?category=questions-answers"}),"GitHub Discussion")," or\nping us in our ",(0,t.yg)("a",u({parentName:"p"},{href:"/discord"}),"Discord chat"),".")),(0,t.yg)("h2",u({},{id:"app"}),"App"),(0,t.yg)("p",null,"Web user interface to access ",(0,t.yg)("a",u({parentName:"p"},{href:"#platform"}),"platform")," at\n",(0,t.yg)("a",u({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),"."),(0,t.yg)("p",null,"The app is a web application that partially runs in the user's browser. It is\nwritten in ",(0,t.yg)("a",u({parentName:"p"},{href:"https://svelte.dev/"}),"Svelte"),"."),(0,t.yg)("h2",u({},{id:"catalog"}),"Catalog"),(0,t.yg)("p",null,"Maintains ",(0,t.yg)("a",u({parentName:"p"},{href:"#partition"}),"partition")," ownership and metadata."),(0,t.yg)("p",null,"The catalog is a component in the ",(0,t.yg)("a",u({parentName:"p"},{href:"#node"}),"node")," that owns the\n",(0,t.yg)("a",u({parentName:"p"},{href:"#partition"}),"partitions"),", keeps metadata about them, and maintains a set of\nsparse secondary indexes to identify relevant partitions for a given query. It\noffers a transactional interface for adding and removing partitions."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/installation/tune-performance/#tune-catalog-fragmentation"}),"Tune catalog\nfragmentation")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/installation/tune-performance/#configure-the-catalog"}),"Configure the catalog"))),(0,t.yg)("h2",u({},{id:"connector"}),"Connector"),(0,t.yg)("p",null,"Manages chunks of raw bytes by interacting with a resource."),(0,t.yg)("p",null,"A connector is either a ",(0,t.yg)("em",{parentName:"p"},"loader")," that acquires bytes from a resource, or a\n",(0,t.yg)("em",{parentName:"p"},"saver")," that sends bytes to a resource. Example connectors are\n",(0,t.yg)("a",u({parentName:"p"},{href:"/connectors/file"}),(0,t.yg)("inlineCode",{parentName:"a"},"file")),", ",(0,t.yg)("a",u({parentName:"p"},{href:"/connectors/kafka"}),(0,t.yg)("inlineCode",{parentName:"a"},"kafka")),", and\n",(0,t.yg)("a",u({parentName:"p"},{href:"/connectors/nic"}),(0,t.yg)("inlineCode",{parentName:"a"},"nic")),"."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"See all available ",(0,t.yg)("a",u({parentName:"li"},{href:"/connectors"}),"connectors"))),(0,t.yg)("h2",u({},{id:"context"}),"Context"),(0,t.yg)("p",null,"A stateful object used for in-band enrichment."),(0,t.yg)("p",null,"Contexts live inside a node and you can manage them with the\n",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/context"}),(0,t.yg)("inlineCode",{parentName:"a"},"context"))," operator. A context has pluggable type, such\nas a lookup table, GeoIP database, or a custom plugin. The\n",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/enrich"}),(0,t.yg)("inlineCode",{parentName:"a"},"enrich"))," places a context into a pipeline for\nenrichment."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Read more about ",(0,t.yg)("a",u({parentName:"li"},{href:"/contexts"}),"contexts")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/operators/context"}),"Manage")," a context"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/operators/enrich"}),"Enrich")," with a context")),(0,t.yg)("h2",u({},{id:"format"}),"Format"),(0,t.yg)("p",null,"Translates between bytes and events."),(0,t.yg)("p",null,"A format is either a ",(0,t.yg)("em",{parentName:"p"},"parser")," that converts bytes to events, or a ",(0,t.yg)("em",{parentName:"p"},"printer"),"\nthat converts events to bytes. Example formats are ",(0,t.yg)("a",u({parentName:"p"},{href:"/formats/json"}),(0,t.yg)("inlineCode",{parentName:"a"},"json")),",\n",(0,t.yg)("a",u({parentName:"p"},{href:"./formats/cef"}),(0,t.yg)("inlineCode",{parentName:"a"},"cef")),", and ",(0,t.yg)("a",u({parentName:"p"},{href:"/formats/pcap"}),(0,t.yg)("inlineCode",{parentName:"a"},"pcap")),"."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"See all available ",(0,t.yg)("a",u({parentName:"li"},{href:"/formats"}),"formats"))),(0,t.yg)("h2",u({},{id:"index"}),"Index"),(0,t.yg)("p",null,"Optional data structures for accelerating historical queries."),(0,t.yg)("p",null,"Tenzir has ",(0,t.yg)("em",{parentName:"p"},"sparse")," indexes. Sparse indexes live in memory and point to\n",(0,t.yg)("a",u({parentName:"p"},{href:"#partition"}),"partitions"),"."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/installation/tune-performance/#configure-the-catalog"}),"Configure the catalog"))),(0,t.yg)("h2",u({},{id:"integration"}),"Integration"),(0,t.yg)("p",null,"A set of pipelines to integrate with a third-party product."),(0,t.yg)("p",null,"An integration describes use cases in combination with a specific product or\ntool. Based on the depth of the configuration, this may require configuration on\neither end."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/integrations"}),"List of all integrations"))),(0,t.yg)("h2",u({},{id:"loader"}),"Loader"),(0,t.yg)("p",null,"A ",(0,t.yg)("a",u({parentName:"p"},{href:"#connector"}),"connector")," that acquires bytes."),(0,t.yg)("p",null,"A loader is the dual to a ",(0,t.yg)("a",u({parentName:"p"},{href:"#saver"}),"saver"),". It has a no input and only performs a\nside effect that acquires bytes. Use a loader in the\n",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/from"}),(0,t.yg)("inlineCode",{parentName:"a"},"from"))," or ",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/load"}),(0,t.yg)("inlineCode",{parentName:"a"},"load"))," operators."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn more about ",(0,t.yg)("a",u({parentName:"li"},{href:"/pipelines"}),"pipelines")),(0,t.yg)("li",{parentName:"ul"},"See ",(0,t.yg)("a",u({parentName:"li"},{href:"/connectors"}),"all connectors"))),(0,t.yg)("h2",u({},{id:"node"}),"Node"),(0,t.yg)("p",null,"A host for ",(0,t.yg)("a",u({parentName:"p"},{href:"#pipeline"}),"pipelines")," and storage reachable over the network."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-node")," binary starts a node in a dedicated server process that\nlistens on TCP port 5158."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/installation/deploy-a-node"}),"Deploy a node")),(0,t.yg)("li",{parentName:"ul"},"Use the ",(0,t.yg)("a",u({parentName:"li"},{href:"/rest-api"}),"REST API")," to manage a node"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/usage/import-into-a-node/"}),"Import into a node")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/usage/export-from-a-node/"}),"Export from a node"))),(0,t.yg)("h2",u({},{id:"metrics"}),"Metrics"),(0,t.yg)("p",null,"Runtime statistics about pipeline execution."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/usage/collect-metrics"}),"Collect metrics"))),(0,t.yg)("h2",u({},{id:"operator"}),"Operator"),(0,t.yg)("p",null,"The building block of a ",(0,t.yg)("a",u({parentName:"p"},{href:"#pipeline"}),"pipeline"),"."),(0,t.yg)("p",null,"An operator is a ",(0,t.yg)("a",u({parentName:"p"},{href:"#source"}),"source"),", ",(0,t.yg)("a",u({parentName:"p"},{href:"#transformation"}),"transformation"),", or\n",(0,t.yg)("a",u({parentName:"p"},{href:"#sink"}),"sink"),"."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"See all available ",(0,t.yg)("a",u({parentName:"li"},{href:"/operators"}),"operators"))),(0,t.yg)("h2",u({},{id:"pac"}),"PaC"),(0,t.yg)("p",null,"The acronym PaC stands for ",(0,t.yg)("em",{parentName:"p"},"Pipelines as Code"),". It is meant as an adaptation of\n",(0,t.yg)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Infrastructure_as_code"}),"Infrastructure as Code\n(IaC)")," with pipelines\nrepresent the (data) infrastructure that is provisioning as code."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn how to provision ",(0,t.yg)("a",u({parentName:"li"},{href:"/usage/run-pipelines/#as-code"}),"piplines as\ncode"),".")),(0,t.yg)("h2",u({},{id:"parser"}),"Parser"),(0,t.yg)("p",null,"A ",(0,t.yg)("a",u({parentName:"p"},{href:"#format"}),"format")," that translates bytes into events."),(0,t.yg)("p",null,"A parser is the dual to a ",(0,t.yg)("a",u({parentName:"p"},{href:"#printer"}),"printer"),". Use a parser in the\n",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/from"}),(0,t.yg)("inlineCode",{parentName:"a"},"from"))," or ",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/read"}),(0,t.yg)("inlineCode",{parentName:"a"},"read"))," operators. You\ncan use the ",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/parse"}),(0,t.yg)("inlineCode",{parentName:"a"},"parse"))," operator to parse a single field\nwith a parser."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn more about ",(0,t.yg)("a",u({parentName:"li"},{href:"/pipelines"}),"pipelines")),(0,t.yg)("li",{parentName:"ul"},"See ",(0,t.yg)("a",u({parentName:"li"},{href:"/formats"}),"all formats"))),(0,t.yg)("h2",u({},{id:"partition"}),"Partition"),(0,t.yg)("p",null,"The horizontal scaling unit of the storage attached to a ",(0,t.yg)("a",u({parentName:"p"},{href:"#node"}),"node"),"."),(0,t.yg)("p",null,"A partition contains the raw data and optionally a set of indexes. Supported\nformats are ",(0,t.yg)("a",u({parentName:"p"},{href:"https://parquet.apache.org"}),"Parquet")," or\n",(0,t.yg)("a",u({parentName:"p"},{href:"https://arrow.apache.org/docs/python/feather.html"}),"Feather"),"."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/installation/tune-performance/#control-the-partition-size"}),"Control the partition size")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/installation/tune-performance/#configure-catalog-and-partition-indexes"}),"Configure catalog and partition indexes")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/installation/tune-performance/#select-the-store-format"}),"Select the store format")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/installation/tune-performance/#adjust-the-store-compression"}),"Adjust the store\ncompression")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/installation/tune-performance/#rebuild-partitions"}),"Rebuild partitions"))),(0,t.yg)("h2",u({},{id:"pipeline"}),"Pipeline"),(0,t.yg)("p",null,"Combines a set of ",(0,t.yg)("a",u({parentName:"p"},{href:"#operator"}),"operators")," into a dataflow graph."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Understand ",(0,t.yg)("a",u({parentName:"li"},{href:"/pipelines"}),"how pipelines work")),(0,t.yg)("li",{parentName:"ul"},"Understand the ",(0,t.yg)("a",u({parentName:"li"},{href:"/language"}),"pipeline language")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/usage/run-pipelines/"}),"Run a pipeline"))),(0,t.yg)("h2",u({},{id:"platform"}),"Platform"),(0,t.yg)("p",null,"Control plane for nodes and pipelines, accessible through ",(0,t.yg)("a",u({parentName:"p"},{href:"#app"}),"app")," at\n",(0,t.yg)("a",u({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),"."),(0,t.yg)("h2",u({},{id:"printer"}),"Printer"),(0,t.yg)("p",null,"A ",(0,t.yg)("a",u({parentName:"p"},{href:"#format"}),"format")," that translates events into bytes."),(0,t.yg)("p",null,"A printer is the dual to a ",(0,t.yg)("a",u({parentName:"p"},{href:"#parser"}),"parser"),". Use a parser in the\n",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/to"}),(0,t.yg)("inlineCode",{parentName:"a"},"to"))," or ",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/write"}),(0,t.yg)("inlineCode",{parentName:"a"},"write"))," operators."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn more about ",(0,t.yg)("a",u({parentName:"li"},{href:"/pipelines"}),"pipelines")),(0,t.yg)("li",{parentName:"ul"},"See ",(0,t.yg)("a",u({parentName:"li"},{href:"/formats"}),"all formats"))),(0,t.yg)("h2",u({},{id:"saver"}),"Saver"),(0,t.yg)("p",null,"A ",(0,t.yg)("a",u({parentName:"p"},{href:"#connector"}),"connector")," that emits bytes."),(0,t.yg)("p",null,"A saver is the dual to a ",(0,t.yg)("a",u({parentName:"p"},{href:"#loader"}),"loader"),". It has a no output and only performs\na side effect that emits bytes. Use a saver in the ",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/to"}),(0,t.yg)("inlineCode",{parentName:"a"},"to"))," or\n",(0,t.yg)("a",u({parentName:"p"},{href:"/operators/save"}),(0,t.yg)("inlineCode",{parentName:"a"},"save"))," operators."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn more about ",(0,t.yg)("a",u({parentName:"li"},{href:"/pipelines"}),"pipelines")),(0,t.yg)("li",{parentName:"ul"},"See ",(0,t.yg)("a",u({parentName:"li"},{href:"/connectors"}),"all connectors"))),(0,t.yg)("h2",u({},{id:"schema"}),"Schema"),(0,t.yg)("p",null,"A named record type describing the top-level structure of a data frame."),(0,t.yg)("p",null,(0,t.yg)("a",u({parentName:"p"},{href:"/data-model/schemas"}),"Schemas")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",u({parentName:"li"},{href:"/usage/show-available-schemas"}),"Show available schemas"))),(0,t.yg)("h2",u({},{id:"sink"}),"Sink"),(0,t.yg)("p",null,"An ",(0,t.yg)("a",u({parentName:"p"},{href:"#operator"}),"operator")," consuming input, without producing any output."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn more about ",(0,t.yg)("a",u({parentName:"li"},{href:"/pipelines"}),"pipelines"))),(0,t.yg)("h2",u({},{id:"source"}),"Source"),(0,t.yg)("p",null,"An ",(0,t.yg)("a",u({parentName:"p"},{href:"#operator"}),"operator")," producing output, without consuming any input."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn more about ",(0,t.yg)("a",u({parentName:"li"},{href:"/pipelines"}),"pipelines"))),(0,t.yg)("h2",u({},{id:"tql"}),"TQL"),(0,t.yg)("p",null,"An acronym for ",(0,t.yg)("em",{parentName:"p"},"Tenzir Query Language"),"."),(0,t.yg)("p",null,"TQL is the language in which users write ",(0,t.yg)("a",u({parentName:"p"},{href:"#pipeline"}),"pipelines"),"."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn more about the ",(0,t.yg)("a",u({parentName:"li"},{href:"/language"}),"language")),(0,t.yg)("li",{parentName:"ul"},"Understand the ",(0,t.yg)("a",u({parentName:"li"},{href:"/language/syntax"}),"syntax"))),(0,t.yg)("h2",u({},{id:"transformation"}),"Transformation"),(0,t.yg)("p",null,"An ",(0,t.yg)("a",u({parentName:"p"},{href:"#operator"}),"operator")," consuming both input and producing output."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn more about ",(0,t.yg)("a",u({parentName:"li"},{href:"/pipelines"}),"pipelines"))))}w.isMDXComponent=!0}}]);