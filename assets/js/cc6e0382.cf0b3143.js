"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2739],{15680:(e,a,n)=>{n.d(a,{xA:()=>i,yg:()=>d});var t=n(96540);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},i=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=y(n),m=p,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||r;return n?t.createElement(d,o(o({ref:a},i),{},{components:n})):t.createElement(d,o({ref:a},i))}));function d(e,a){var n=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:p,o[1]=s;for(var y=2;y<r;y++)o[y]=n[y];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67436:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>E,contentTitle:()=>N,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>F});var t=n(15680),p=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,i=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&i(e,n,a[n]);if(s)for(var n of s(a))y.call(a,n)&&i(e,n,a[n]);return e},g=(e,a)=>r(e,o(a)),m=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const d={},N="Splunk",u={unversionedId:"integrations/splunk",id:"version-v4.23/integrations/splunk",title:"Splunk",description:"Splunk is a log management and SIEM solution for storing",source:"@site/versioned_docs/version-v4.23/integrations/splunk.md",sourceDirName:"integrations",slug:"/integrations/splunk",permalink:"/integrations/splunk",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/integrations/splunk.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Graylog",permalink:"/integrations/graylog"},next:{title:"Suricata",permalink:"/integrations/suricata"}},E={},F=[{value:"Send data to an existing HEC endpoint",id:"send-data-to-an-existing-hec-endpoint",level:2},{value:"Spawn a HEC endpoint as pipeline source",id:"spawn-a-hec-endpoint-as-pipeline-source",level:2},{value:"Test Splunk and Tenzir together",id:"test-splunk-and-tenzir-together",level:2},{value:"Setup the containers",id:"setup-the-containers",level:3},{value:"Configure Splunk",id:"configure-splunk",level:3}],f={toc:F},D="wrapper";function h(e){var a=e,{components:n}=a,p=m(a,["components"]);return(0,t.yg)(D,g(c(c({},f),p),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"splunk"}),"Splunk"),(0,t.yg)("p",null,(0,t.yg)("a",c({parentName:"p"},{href:"https://splunk.com"}),"Splunk")," is a log management and SIEM solution for storing\nand processing logs."),(0,t.yg)("p",null,"Deploy Tenzir between your data sources and existing Splunk for controlling\ncosts and gaining additional flexibility of data processing and routing."),(0,t.yg)("h2",c({},{id:"send-data-to-an-existing-hec-endpoint"}),"Send data to an existing HEC endpoint"),(0,t.yg)("p",null,"To send data from a pipeline to a Splunk ",(0,t.yg)("a",c({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector"}),"HTTP Event Collector (HEC)"),"\nendpoint, use the ",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/to_splunk"}),(0,t.yg)("inlineCode",{parentName:"a"},"to_splunk"))," sink operator."),(0,t.yg)("p",null,"For example, deploy the following pipeline to forward all\n",(0,t.yg)("a",c({parentName:"p"},{href:"/integrations/suricata"}),"Suricata")," alerts arriving at a node to Splunk:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"// tql2")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"export"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," live"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," @"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"name "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "suricata.alert"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_splunk"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "https://1.2.3.4:8088"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", hec_token"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"TOKEN"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", tls_no_verify"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"true"))))),(0,t.yg)("p",null,"Replace ",(0,t.yg)("inlineCode",{parentName:"p"},"1.2.3.4")," with the IP address of your Splunk host and ",(0,t.yg)("inlineCode",{parentName:"p"},"TOKEN")," with your\nHEC token."),(0,t.yg)("p",null,"For more details, see the documentation for the ",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/to_splunk"}),(0,t.yg)("inlineCode",{parentName:"a"},"to_splunk")," operator"),"."),(0,t.yg)("h2",c({},{id:"spawn-a-hec-endpoint-as-pipeline-source"}),"Spawn a HEC endpoint as pipeline source"),(0,t.yg)("p",null,"To send data to a Tenzir pipeline instead of Splunk, you can open a Splunk ",(0,t.yg)("a",c({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector"}),"HTTP\nEvent Collector (HEC)")," endpoint using the\n",(0,t.yg)("a",c({parentName:"p"},{href:"/operators/fluent-bit"}),(0,t.yg)("inlineCode",{parentName:"a"},"fluent-bit"))," source operator."),(0,t.yg)("p",null,"For example, to ingest all data into a Tenzir node instead of Splunk, point your\ndata source to the IP address of the Tenzir node at port 9880 by deploying this\npipeline:"),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"fluent-bit splunk splunk_token=TOKEN\n| import\n")),(0,t.yg)("p",null,"Replace ",(0,t.yg)("inlineCode",{parentName:"p"},"TOKEN")," with the Splunk token configured at your data source."),(0,t.yg)("p",null,"To listen on a different IP address, e.g., 1.2.3.4 add ",(0,t.yg)("inlineCode",{parentName:"p"},"listen=1.2.3.4")," to the\n",(0,t.yg)("inlineCode",{parentName:"p"},"fluent-bit")," operator."),(0,t.yg)("p",null,"For more details, read the official ",(0,t.yg)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs/splunk"}),"Fluent Bit documentation of the Splunk\ninput"),"."),(0,t.yg)("h2",c({},{id:"test-splunk-and-tenzir-together"}),"Test Splunk and Tenzir together"),(0,t.yg)("p",null,"To test Splunk and Tenzir together, use the following ",(0,t.yg)("a",c({parentName:"p"},{href:"https://docs.docker.com/compose/"}),"Docker\nCompose")," setup."),(0,t.yg)("h3",c({},{id:"setup-the-containers"}),"Setup the containers"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"version"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"3.9"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"services"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  splunk"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    image"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"${SPLUNK_IMAGE:-splunk/splunk:latest}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    platform"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"linux/amd64")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    container_name"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"splunk")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    environment"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"SPLUNK_START_ARGS=--accept-license")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"SPLUNK_HEC_TOKEN=abcd1234")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"SPLUNK_PASSWORD=tenzir123")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    ports"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"8000:8000")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"8088:8088")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  tenzir-node"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    container_name"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Demo"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    image"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir/tenzir:latest")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    pull_policy"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"always")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    environment"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"TENZIR_PLUGINS__PLATFORM__CONTROL_ENDPOINT=wss://ws.tenzir.app/production")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"TENZIR_PLUGINS__PLATFORM__API_KEY=<PLATFORM_API_KEY>")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"TENZIR_PLUGINS__PLATFORM__TENANT_ID=<PLATFORM_TENANT_ID>")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"TENZIR_ENDPOINT=tenzir-node:5158")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    entrypoint"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir-node")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    volumes"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir-node:/var/lib/tenzir/")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir-node:/var/log/tenzir/")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  tenzir"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    image"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir/tenzir:latest")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    pull_policy"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"never")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    profiles"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"donotstart")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    depends_on"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"tenzir-node")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    environment"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"TENZIR_ENDPOINT=tenzir-node:5158")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"volumes"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  tenzir-node"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    driver"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"local"))))),(0,t.yg)("h3",c({},{id:"configure-splunk"}),"Configure Splunk"),(0,t.yg)("p",null,"After you spun up the containers, configure Splunk as follows:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Go to ",(0,t.yg)("a",c({parentName:"li"},{href:"http://localhost:8000"}),"http://localhost:8000")," and login with ",(0,t.yg)("inlineCode",{parentName:"li"},"admin"),":",(0,t.yg)("inlineCode",{parentName:"li"},"tenzir123")),(0,t.yg)("li",{parentName:"ol"},"Navigate to ",(0,t.yg)("em",{parentName:"li"},"Add data")," \u2192 ",(0,t.yg)("em",{parentName:"li"},"Monitor")," \u2192 ",(0,t.yg)("em",{parentName:"li"},"HTTP Event Collector")),(0,t.yg)("li",{parentName:"ol"},"Configure the event collector:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Name: Tenzir"),(0,t.yg)("li",{parentName:"ul"},"Click ",(0,t.yg)("em",{parentName:"li"},"Next")),(0,t.yg)("li",{parentName:"ul"},"Copy the token"),(0,t.yg)("li",{parentName:"ul"},"Keep ",(0,t.yg)("em",{parentName:"li"},"Start searching"))))))}h.isMDXComponent=!0}}]);