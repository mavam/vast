"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41450],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,y=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},33491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>O,frontMatter:()=>y,metadata:()=>f,toc:()=>v});var r=t(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&u(e,t,n[t]);if(s)for(var t of s(n))p.call(n,t)&&u(e,t,n[t]);return e},c=(e,n)=>o(e,i(n)),g=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const y={sidebar_position:0},m="Size a node",f={unversionedId:"installation/size-a-node",id:"version-v4.26/installation/size-a-node",title:"Size a node",description:"To better understand what resources you need to [run a",source:"@site/versioned_docs/version-v4.26/installation/size-a-node.md",sourceDirName:"installation",slug:"/installation/size-a-node",permalink:"/installation/size-a-node",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.26/installation/size-a-node.md",tags:[],version:"v4.26",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Create an account",permalink:"/installation/create-an-account"},next:{title:"Deploy a node",permalink:"/installation/deploy-a-node/"}},h={},v=[{value:"Considerations",id:"considerations",level:2},{value:"Workloads",id:"workloads",level:3},{value:"Data Shaping",id:"data-shaping",level:4},{value:"Aggregation",id:"aggregation",level:4},{value:"Enrichment",id:"enrichment",level:4},{value:"Data Diversity",id:"data-diversity",level:3},{value:"Data Volume",id:"data-volume",level:3},{value:"Retention",id:"retention",level:3},{value:"Calculator",id:"calculator",level:2}],b={toc:v},w="wrapper";function O(e){var n=e,{components:t}=n,a=g(n,["components"]);return(0,r.yg)(w,c(d(d({},b),a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",d({},{id:"size-a-node"}),"Size a node"),(0,r.yg)("p",null,"To better understand what resources you need to ",(0,r.yg)("a",d({parentName:"p"},{href:"/installation/deploy-a-node/"}),"run a\nnode"),", we provide guidance on sizing\nand a ",(0,r.yg)("a",d({parentName:"p"},{href:"#calculator"}),"calculator")," to derive concrete ",(0,r.yg)("strong",{parentName:"p"},"CPU"),", ",(0,r.yg)("strong",{parentName:"p"},"RAM"),", and\n",(0,r.yg)("strong",{parentName:"p"},"storage")," requirements."),(0,r.yg)("h2",d({},{id:"considerations"}),"Considerations"),(0,r.yg)("p",null,"Several factors have an impact on sizing. Since you can run many types of\nworkloads in pipelines, it is difficult to make a one-size-fits-all\nrecommendation. The following considerations affect your resource requirements:"),(0,r.yg)("h3",d({},{id:"workloads"}),"Workloads"),(0,r.yg)("p",null,"Depending on what you do with pipelines, you may generate a different resource\nprofile."),(0,r.yg)("h4",d({},{id:"data-shaping"}),"Data Shaping"),(0,r.yg)("p",null,(0,r.yg)("a",d({parentName:"p"},{href:"/usage/shape-data/"}),"Shaping")," operation changes the form of the\ndata, e.g., filtering events, removing columns, or changing values. This\nworkload predominantly incurs ",(0,r.yg)("strong",{parentName:"p"},"CPU")," load."),(0,r.yg)("h4",d({},{id:"aggregation"}),"Aggregation"),(0,r.yg)("p",null,"Performing in-stream or historical aggregations often requires extensive\nbuffering of the aggregation groups, which adds to your ",(0,r.yg)("strong",{parentName:"p"},"RAM")," requirements. If\nyou run intricate custom aggregation functions, you also may see an additional\nincrease CPU usage."),(0,r.yg)("h4",d({},{id:"enrichment"}),"Enrichment"),(0,r.yg)("p",null,(0,r.yg)("a",d({parentName:"p"},{href:"/enrichment/"}),"Enriching")," dataflows with contexts requires holding\nin-memory state proportional to the context size. Therefore, enrichment affects\nyour ",(0,r.yg)("strong",{parentName:"p"},"RAM")," requirements. Bloom filters are a fixed-size space-efficient\nstructure for representing large sets, and lookup tables grow linearly with the\nnumber of entries."),(0,r.yg)("h3",d({},{id:"data-diversity"}),"Data Diversity"),(0,r.yg)("p",null,"The more data sources you have, the more pipelines you run. In the simplest\nscenario where you just ",(0,r.yg)("a",d({parentName:"p"},{href:"/usage/import-into-a-node/"}),"import all data into a\nnode"),", you deploy one pipeline per\ndata source. The number of data sources is a thus a lower bound for the number\nof pipelines."),(0,r.yg)("h3",d({},{id:"data-volume"}),"Data Volume"),(0,r.yg)("p",null,"The throughput of pipeline has an impact on performance. Pipelines with low data\nvolume do not strain the system much, but high-volume pipelines substantially\naffect ",(0,r.yg)("strong",{parentName:"p"},"CPU")," and ",(0,r.yg)("strong",{parentName:"p"},"RAM")," requirements. Therefore, understanding your ingress\nvolume, either as events per second or bytes per day, is helpful for sizing your\nnode proportionally."),(0,r.yg)("h3",d({},{id:"retention"}),"Retention"),(0,r.yg)("p",null,"When you leverage the node's built-in storage engine by\n",(0,r.yg)("a",d({parentName:"p"},{href:"/usage/import-into-a-node/"}),"importing")," and\n",(0,r.yg)("a",d({parentName:"p"},{href:"/usage/export-from-a-node/"}),"exporting")," data, you need\npersistent ",(0,r.yg)("strong",{parentName:"p"},"storage"),". To assess your retention span, you need to understand\nyour data volume and your capacity."),(0,r.yg)("p",null,"Tenzir storage engine builds sparse indexes to accelerate historical queries.\nBased on how aggressively configure indexing, your ",(0,r.yg)("strong",{parentName:"p"},"RAM")," requirements may\nvary."),(0,r.yg)("h2",d({},{id:"calculator"}),"Calculator"),(0,r.yg)("iframe",{src:"https://tenzir-node-sizing.streamlit.app/?embed=true",height:"1300",style:{width:"100%",border:"none"}}))}O.isMDXComponent=!0}}]);