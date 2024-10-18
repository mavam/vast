"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79491],{15680:(e,a,t)=>{t.d(a,{xA:()=>i,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},i=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},y="mdxType",x={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),y=c(t),d=r,g=y["".concat(p,".").concat(d)]||y[d]||x[d]||o;return t?n.createElement(g,l(l({ref:a},i),{},{components:t})):n.createElement(g,l({ref:a},i))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[y]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73511:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>m,default:()=>h,frontMatter:()=>g,metadata:()=>u,toc:()=>N});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,i=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a||(a={}))p.call(a,t)&&i(e,t,a[t]);if(s)for(var t of s(a))c.call(a,t)&&i(e,t,a[t]);return e},x=(e,a)=>o(e,l(a)),d=(e,a)=>{var t={};for(var n in e)p.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))a.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const g={},m="azure_log_analytics",u={unversionedId:"tql2/operators/azure_log_analytics",id:"tql2/operators/azure_log_analytics",title:"azure_log_analytics",description:"Sends events via the Microsoft Azure Logs Ingestion API.",source:"@site/docs/tql2/operators/azure_log_analytics.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/azure_log_analytics",permalink:"/next/tql2/operators/azure_log_analytics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/azure_log_analytics.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"assert",permalink:"/next/tql2/operators/assert"},next:{title:"batch",permalink:"/next/tql2/operators/batch"}},f={},N=[{value:"Description",id:"description",level:2},{value:"<code>tenant_id = str</code>",id:"tenant_id--str",level:3},{value:"<code>client_id = str</code>",id:"client_id--str",level:3},{value:"<code>client_secret = str</code>",id:"client_secret--str",level:3},{value:"<code>dce = str</code>",id:"dce--str",level:3},{value:"<code>dcr = str</code>",id:"dcr--str",level:3},{value:"<code>table = str</code>",id:"table--str",level:3},{value:"Examples",id:"examples",level:2}],F={toc:N},b="wrapper";function h(e){var a=e,{components:t}=a,r=d(a,["components"]);return(0,n.yg)(b,x(y(y({},F),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"azure_log_analytics"}),"azure_log_analytics"),(0,n.yg)("p",null,"Sends events via the ",(0,n.yg)("a",y({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-ingestion-api-overview"}),"Microsoft Azure Logs Ingestion API"),"."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"azure_log_analytics"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," tenant_id"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, client_id"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, client_secret"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, dce"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, dcr"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, table"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"str"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"azure_log_analytics")," operator makes it possible to upload events to\n",(0,n.yg)("a",y({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-ingestion-api-overview#supported-tables"}),"supported tables")," or to ",(0,n.yg)("a",y({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/logs/create-custom-table?tabs=azure-portal-1%2Cazure-portal-2%2Cazure-portal-3#create-a-custom-table"}),"custom tables")," in Microsoft Azure."),(0,n.yg)("p",null,"The operator handles access token retrievals by itself and updates that token\nautomatically, if needed."),(0,n.yg)("h3",y({},{id:"tenant_id--str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tenant_id = str")),(0,n.yg)("p",null,"The Microsoft Directory (tenant) ID, written as\n",(0,n.yg)("inlineCode",{parentName:"p"},"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),"."),(0,n.yg)("h3",y({},{id:"client_id--str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"client_id = str")),(0,n.yg)("p",null,"The Microsoft Application (client) ID, written as\n",(0,n.yg)("inlineCode",{parentName:"p"},"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),"."),(0,n.yg)("h3",y({},{id:"client_secret--str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"client_secret = str")),(0,n.yg)("p",null,"The client secret."),(0,n.yg)("h3",y({},{id:"dce--str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"dce = str")),(0,n.yg)("p",null,"The data collection endpoint URL."),(0,n.yg)("h3",y({},{id:"dcr--str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"dcr = str")),(0,n.yg)("p",null,"The data collection rule ID, written as ",(0,n.yg)("inlineCode",{parentName:"p"},"dcr-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),"."),(0,n.yg)("h3",y({},{id:"table--str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"table = str")),(0,n.yg)("p",null,"The table to upload events to."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Upload ",(0,n.yg)("inlineCode",{parentName:"p"},"custom.mydata")," events to a table ",(0,n.yg)("inlineCode",{parentName:"p"},"Custom-MyData"),":"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"export")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," meta."),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"name "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "custom.mydata"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"azure_log_analytics"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," tenant_id"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"00a00a00-0a00-0a00-00aa-000aa0a0a000"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  client_id"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"000a00a0-0aa0-00a0-0000-00a000a000a0"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  client_secret"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  dce"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"https://my-stuff-a0a0.westeurope-1.ingest.monitor.azure.com"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  dcr"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"dcr-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  table"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"Custom-MyData"'))))))}h.isMDXComponent=!0}}]);