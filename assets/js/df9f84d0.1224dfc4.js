"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75540],{15680:(e,t,n)=>{n.d(t,{xA:()=>x,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},x=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,x=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,y=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(y,i(i({ref:t},x),{},{components:n})):r.createElement(y,i({ref:t},x))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>O,frontMatter:()=>y,metadata:()=>m,toc:()=>v});var r=n(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&x(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&x(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const y={sidebar_custom_props:{operator:{source:!1,sink:!0}}},g="azure-log-analytics",m={unversionedId:"operators/azure-log-analytics",id:"version-v4.22/operators/azure-log-analytics",title:"azure-log-analytics",description:"Sends events via the Microsoft Azure Logs Ingestion API.",source:"@site/versioned_docs/version-v4.22/operators/azure-log-analytics.md",sourceDirName:"operators",slug:"/operators/azure-log-analytics",permalink:"/v4.22/operators/azure-log-analytics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/operators/azure-log-analytics.md",tags:[],version:"v4.22",frontMatter:{sidebar_custom_props:{operator:{source:!1,sink:!0}}},sidebar:"docsSidebar",previous:{title:"apply",permalink:"/v4.22/operators/apply"},next:{title:"batch",permalink:"/v4.22/operators/batch"}},f={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--tenant-id &lt;tenant-id&gt;</code>",id:"--tenant-id-tenant-id",level:3},{value:"<code>--client-id &lt;client-id&gt;</code>",id:"--client-id-client-id",level:3},{value:"<code>--client-secret &lt;client-secret&gt;</code>",id:"--client-secret-client-secret",level:3},{value:"<code>--dce &lt;data-collection-endpoint&gt;</code>",id:"--dce-data-collection-endpoint",level:3},{value:"<code>--dcr &lt;data-collection-rule-id&gt;</code>",id:"--dcr-data-collection-rule-id",level:3},{value:"<code>--table &lt;table-name&gt;</code>",id:"--table-table-name",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},h="wrapper";function O(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.yg)(h,d(p(p({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",p({},{id:"azure-log-analytics"}),"azure-log-analytics"),(0,r.yg)("p",null,"Sends events via the ",(0,r.yg)("a",p({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-ingestion-api-overview"}),"Microsoft Azure Logs Ingestion API"),"."),(0,r.yg)("h2",p({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("pre",null,(0,r.yg)("code",p({parentName:"pre"},{}),"azure-log-analytics --tenant-id <tenant-id> --client-id <client-id>\n                    --client-secret <client-secret>\n                    --dce <data-collection-endpoint>\n                    --dcr <data-collection-rule-id>\n                    --table <table-name>\n")),(0,r.yg)("h2",p({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"azure-log-analytics")," operator makes it possible to upload events to\n",(0,r.yg)("a",p({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-ingestion-api-overview#supported-tables"}),"supported tables")," or to ",(0,r.yg)("a",p({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/logs/create-custom-table?tabs=azure-portal-1%2Cazure-portal-2%2Cazure-portal-3#create-a-custom-table"}),"custom tables")," in Microsoft Azure."),(0,r.yg)("p",null,"The operator handles access token retrievals by itself and updates that token\nautomatically, if needed."),(0,r.yg)("h3",p({},{id:"--tenant-id-tenant-id"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--tenant-id <tenant-id>")),(0,r.yg)("p",null,"The Microsoft Directory (tenant) ID, written as\n",(0,r.yg)("inlineCode",{parentName:"p"},"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),"."),(0,r.yg)("h3",p({},{id:"--client-id-client-id"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--client-id <client-id>")),(0,r.yg)("p",null,"The Microsoft Application (client) ID, written as\n",(0,r.yg)("inlineCode",{parentName:"p"},"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),"."),(0,r.yg)("h3",p({},{id:"--client-secret-client-secret"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--client-secret <client-secret>")),(0,r.yg)("p",null,"The client secret."),(0,r.yg)("h3",p({},{id:"--dce-data-collection-endpoint"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--dce <data-collection-endpoint>")),(0,r.yg)("p",null,"The data collection endpoint URL."),(0,r.yg)("h3",p({},{id:"--dcr-data-collection-rule-id"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--dcr <data-collection-rule-id>")),(0,r.yg)("p",null,"The data collection rule ID, written as ",(0,r.yg)("inlineCode",{parentName:"p"},"dcr-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),"."),(0,r.yg)("h3",p({},{id:"--table-table-name"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--table <table-name>")),(0,r.yg)("p",null,"The table to upload events to."),(0,r.yg)("h2",p({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Upload ",(0,r.yg)("inlineCode",{parentName:"p"},"custom.mydata")," events to a table ",(0,r.yg)("inlineCode",{parentName:"p"},"Custom-MyData"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",p({parentName:"pre"},{}),'export\n| where #schema == "custom.mydata"\n| azure-log-analytics --tenant-id 00a00a00-0a00-0a00-00aa-000aa0a0a000\n  --client-id 000a00a0-0aa0-00a0-0000-00a000a000a0\n  --client-secret xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n  --dce https://my-stuff-a0a0.westeurope-1.ingest.monitor.azure.com\n  --dcr dcr-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n  --table "Custom-MyData"\n')))}O.isMDXComponent=!0}}]);