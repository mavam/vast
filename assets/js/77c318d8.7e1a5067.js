"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},g=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={},f="Graylog",y={unversionedId:"integrations/graylog",id:"integrations/graylog",title:"Graylog",description:"Graylog is a log management solution based on top of",source:"@site/docs/integrations/graylog.md",sourceDirName:"integrations",slug:"/integrations/graylog",permalink:"/next/integrations/graylog",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/integrations/graylog.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Azure Log Analytics",permalink:"/next/integrations/azure-log-analytics"},next:{title:"Splunk",permalink:"/next/integrations/splunk"}},h={},k=[{value:"Receive data from Graylog",id:"receive-data-from-graylog",level:2},{value:"Configure a GELF TCP output",id:"configure-a-gelf-tcp-output",level:3},{value:"Create a Graylog stream",id:"create-a-graylog-stream",level:3},{value:"Test the connection with a Tenzir pipeline",id:"test-the-connection-with-a-tenzir-pipeline",level:3}],b={toc:k},v="wrapper";function w(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(v,g(c(c({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"graylog"}),"Graylog"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"https://graylog.org/"}),"Graylog")," is a log management solution based on top of\nElasticsearch."),(0,r.kt)("p",null,"Use Tenzir to process data from Graylog."),(0,r.kt)("p",null,"In Graylog, data goes through three key stages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),": This stage involves data ingestion, where Graylog receives data\nfrom various sources. Inputs support multiple protocols like TCP, UDP, and\nHTTP. They normalize incoming data into the unified ",(0,r.kt)("a",c({parentName:"li"},{href:"/next/formats/gelf"}),"Graylog Extended Log\nFormat (GELF)"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Streams"),": Once onboarded, streams route the data internally. Here,\nit can be filtered, parsed, and enriched. The stream processing stage\nleverages extractors and pipeline rules for data manipulation, before\nindexing the data in Elasticsearch for storage."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),": For exporting data, Graylog utilizes alerts, dashboards, and its\nREST API. Additionally, Graylog can forward data to external systems or tools\nvia streams.")),(0,r.kt)("h2",c({},{id:"receive-data-from-graylog"}),"Receive data from Graylog"),(0,r.kt)("p",null,"To receive data from Graylog with a Tenzir pipeline, you need to configure a new\noutput and setup a stream that sends data to that output. The example below\nassumes that Graylog sends data in GELF to a TCP endpoint that listens on\n1.2.3.4 at port 5678."),(0,r.kt)("h3",c({},{id:"configure-a-gelf-tcp-output"}),"Configure a GELF TCP output"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("em",{parentName:"li"},"System/Outputs")," in Graylog's web interface."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Manage Outputs"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"GELF TCP")," as the output type."),(0,r.kt)("li",{parentName:"ol"},"Configure the output settings:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specify the target server's address in the ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," field (e.g., 1.2.3.4)."),(0,r.kt)("li",{parentName:"ul"},"Enter the port number for the TCP connection (e.g., 5678)."),(0,r.kt)("li",{parentName:"ul"},"Optionally adjust other settings like reconnect delay, queue size, and send\nbuffer size."))),(0,r.kt)("li",{parentName:"ol"},"Save the configuration.")),(0,r.kt)("p",null,"Now Graylog will forward messages in GELF format to the specified TCP endpoint."),(0,r.kt)("h3",c({},{id:"create-a-graylog-stream"}),"Create a Graylog stream"),(0,r.kt)("p",null,"The newly created output still needs to be connected to a stream to produce\ndata. For example, to route all incoming traffic in Graylog to an output:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("em",{parentName:"li"},"Streams")," in the Graylog web interface."),(0,r.kt)("li",{parentName:"ol"},"Create a new stream or edit an existing one."),(0,r.kt)("li",{parentName:"ol"},"In the stream's settings, configure it to match all incoming messages. You\ncan do this by setting up a rule that matches all messages or by leaving the\nrules empty."),(0,r.kt)("li",{parentName:"ol"},"Once the stream is configured, go to the ",(0,r.kt)("em",{parentName:"li"},"Outputs")," tab in the stream's\nsettings."),(0,r.kt)("li",{parentName:"ol"},"Add the previously configured GELF TCP output to this stream.")),(0,r.kt)("p",null,"This setup will direct all messages that arrive in Graylog to the specified\noutput. Adapt your filters for more fine-grained forwarding."),(0,r.kt)("h3",c({},{id:"test-the-connection-with-a-tenzir-pipeline"}),"Test the connection with a Tenzir pipeline"),(0,r.kt)("p",null,"Now that Graylog is configured, you can test that data is flowing using the\nfollowing Tenzir pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"from tcp://1.2.3.4:5678 read gelf\n")),(0,r.kt)("p",null,"This pipelines opens a listening socket at IP address 1.2.3.4 at port 5678 via\nthe ",(0,r.kt)("a",c({parentName:"p"},{href:"/next/connectors/tcp"}),"tcp")," loader, and then reads a stream of GELF messages\nusing the ",(0,r.kt)("a",c({parentName:"p"},{href:"/next/formats/gelf"}),"gelf")," parser. Graylog will connect to this\nsocket, based on the reconnect interval that you configured in the output (by\ndefault 500ms)."),(0,r.kt)("p",null,"Now that data is flowing, you can decide what to do with the Graylog data, e.g.,\ningest data into a running Tenzir node by appending\n",(0,r.kt)("a",c({parentName:"p"},{href:"/next/operators/import"}),"import"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"from tcp://1.2.3.4:5678 read gelf\n| import\n")))}w.isMDXComponent=!0}}]);