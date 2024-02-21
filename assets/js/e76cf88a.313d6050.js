"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21589],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>f,default:()=>y,frontMatter:()=>k,metadata:()=>g,toc:()=>v});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&u(e,t,n[t]);return e},d=(e,n)=>a(e,i(n)),m=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const k={},f="Splunk",g={unversionedId:"integrations/splunk",id:"version-Tenzir v4.8/integrations/splunk",title:"Splunk",description:"Splunk is a log management and SIEM solution for storing",source:"@site/versioned_docs/version-Tenzir v4.8/integrations/splunk.md",sourceDirName:"integrations",slug:"/integrations/splunk",permalink:"/Tenzir v4.8/integrations/splunk",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.8/integrations/splunk.md",tags:[],version:"Tenzir v4.8",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Graylog",permalink:"/Tenzir v4.8/integrations/graylog"},next:{title:"Suricata",permalink:"/Tenzir v4.8/integrations/suricata"}},h={},v=[{value:"Send data to an existing HEC endpoint",id:"send-data-to-an-existing-hec-endpoint",level:2},{value:"Spawn a HEC endpoint as pipeline source",id:"spawn-a-hec-endpoint-as-pipeline-source",level:2},{value:"Test Splunk and Tenzir together",id:"test-splunk-and-tenzir-together",level:2},{value:"Setup the containers",id:"setup-the-containers",level:3},{value:"Configure Splunk",id:"configure-splunk",level:3}],N={toc:v},T="wrapper";function y(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(T,d(c(c({},N),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"splunk"}),"Splunk"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"https://splunk.com"}),"Splunk")," is a log management and SIEM solution for storing\nand processing logs."),(0,r.kt)("p",null,"Deploy Tenzir between your data sources and existing Splunk for controlling\ncosts and gaining additional flexibility of data processing and routing."),(0,r.kt)("h2",c({},{id:"send-data-to-an-existing-hec-endpoint"}),"Send data to an existing HEC endpoint"),(0,r.kt)("p",null,"To send data from a pipeline to a Splunk ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector"}),"HTTP Event Collector (HEC)"),"\nendpoint, use the ",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.8/operators/fluent-bit"}),(0,r.kt)("inlineCode",{parentName:"a"},"fluent-bit"))," sink operator."),(0,r.kt)("p",null,"For example, deploy the following pipeline to forward all\n",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.8/integrations/suricata"}),"Suricata")," alerts arriving at a node to Splunk:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'export --live\n| where #schema == "suricata.alert"\n| fluent-bit\n    splunk\n    host=1.2.3.4\n    port=8088\n    tls=on\n    tls.verify=off\n    splunk_token=TOKEN\n')),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.3.4")," with the IP address of your splunk host and ",(0,r.kt)("inlineCode",{parentName:"p"},"TOKEN")," with your\nHEC token."),(0,r.kt)("p",null,"For more details, read the official ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/outputs/splunk"}),"Fluent Bit documentation of the Splunk\noutput"),"."),(0,r.kt)("h2",c({},{id:"spawn-a-hec-endpoint-as-pipeline-source"}),"Spawn a HEC endpoint as pipeline source"),(0,r.kt)("p",null,"To send data to a Tenzir pipeline instead of Splunk, you can open a Splunk ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector"}),"HTTP\nEvent Collector (HEC)")," endpoint using the\n",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.8/operators/fluent-bit"}),(0,r.kt)("inlineCode",{parentName:"a"},"fluent-bit"))," source operator."),(0,r.kt)("p",null,"For example, to ingest all data into a Tenzir node instead of Splunk, point your\ndata source to the IP address of the Tenzir node at port 9880 by deploying this\npipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"fluent-bit splunk splunk_token=TOKEN\n| import\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"TOKEN")," with the Splunk token configured at your data source."),(0,r.kt)("p",null,"To listen on a different IP address, e.g., 1.2.3.4 add ",(0,r.kt)("inlineCode",{parentName:"p"},"listen=1.2.3.4")," to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"fluent-bit")," operator."),(0,r.kt)("p",null,"For more details, read the official ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.fluentbit.io/manual/pipeline/inputs/splunk"}),"Fluent Bit documentation of the Splunk\ninput"),"."),(0,r.kt)("h2",c({},{id:"test-splunk-and-tenzir-together"}),"Test Splunk and Tenzir together"),(0,r.kt)("p",null,"To test Splunk and Tenzir together, use the following ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.docker.com/compose/"}),"Docker\nCompose")," setup."),(0,r.kt)("h3",c({},{id:"setup-the-containers"}),"Setup the containers"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml",metastring:"title=docker-compose.yaml",title:"docker-compose.yaml"}),'version: "3.9"\n\nservices:\n  splunk:\n    image: ${SPLUNK_IMAGE:-splunk/splunk:latest}\n    platform: linux/amd64\n    container_name: splunk\n    environment:\n      - SPLUNK_START_ARGS=--accept-license\n      - SPLUNK_HEC_TOKEN=abcd1234\n      - SPLUNK_PASSWORD=tenzir123\n    ports:\n      - 8000:8000\n      - 8088:8088\n\n  tenzir-node:\n    container_name: "Demo"\n    image: tenzir/tenzir:latest\n    pull_policy: always\n    environment:\n      - TENZIR_PLUGINS__PLATFORM__CONTROL_ENDPOINT=wss://ws.tenzir.app/production\n      - TENZIR_PLUGINS__PLATFORM__API_KEY=<PLATFORM_API_KEY>\n      - TENZIR_PLUGINS__PLATFORM__TENANT_ID=<PLATFORM_TENANT_ID>\n      - TENZIR_ENDPOINT=tenzir-node:5158\n      - TENZIR_ALLOW_UNSAFE_PIPELINES=true\n    entrypoint:\n      - tenzir-node\n    volumes:\n      - tenzir-node:/var/lib/tenzir/\n      - tenzir-node:/var/log/tenzir/\n\n  tenzir:\n    image: tenzir/tenzir:latest\n    pull_policy: never\n    profiles:\n      - donotstart\n    depends_on:\n      - tenzir-node\n    environment:\n      - TENZIR_ENDPOINT=tenzir-node:5158\n\nvolumes:\n  tenzir-node:\n    driver: local\n')),(0,r.kt)("h3",c({},{id:"configure-splunk"}),"Configure Splunk"),(0,r.kt)("p",null,"After you spun up the containers, configure Splunk as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",c({parentName:"li"},{href:"http://localhost:8000"}),"http://localhost:8000")," and login with ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),":",(0,r.kt)("inlineCode",{parentName:"li"},"tenzir123")),(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("em",{parentName:"li"},"Add data")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"Monitor")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"HTTP Event Collector")),(0,r.kt)("li",{parentName:"ol"},"Configure the event collector:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name: Tenzir"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("em",{parentName:"li"},"Next")),(0,r.kt)("li",{parentName:"ul"},"Copy the token"),(0,r.kt)("li",{parentName:"ul"},"Keep ",(0,r.kt)("em",{parentName:"li"},"Start searching"))))))}y.isMDXComponent=!0}}]);