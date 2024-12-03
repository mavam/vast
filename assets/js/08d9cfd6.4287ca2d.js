"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83547],{15680:(e,a,n)=>{n.d(a,{xA:()=>i,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),y=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},i=function(e){var a=y(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=y(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||p;return n?t.createElement(d,o(o({ref:a},i),{},{components:n})):t.createElement(d,o({ref:a},i))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var y=2;y<p;y++)o[y]=n[y];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87987:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>N,default:()=>D,frontMatter:()=>d,metadata:()=>F,toc:()=>h});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,i=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&i(e,n,a[n]);if(l)for(var n of l(a))y.call(a,n)&&i(e,n,a[n]);return e},g=(e,a)=>p(e,o(a)),m=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const d={},N="enrich",F={unversionedId:"tql2/operators/context/enrich",id:"version-v4.24/tql2/operators/context/enrich",title:"enrich",description:"Resets data with a context.",source:"@site/versioned_docs/version-v4.24/tql2/operators/context/enrich.md",sourceDirName:"tql2/operators/context",slug:"/tql2/operators/context/enrich",permalink:"/tql2/operators/context/enrich",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/context/enrich.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"create_lookup_table",permalink:"/tql2/operators/context/create_lookup_table"},next:{title:"inspect",permalink:"/tql2/operators/context/inspect"}},u={},h=[{value:"Description",id:"description",level:2},{value:"<code>name: string</code>",id:"name-string",level:3},{value:"<code>key = any</code>",id:"key--any",level:3},{value:"<code>into = field (optional)</code>",id:"into--field-optional",level:3},{value:"<code>mode = string (optional)</code>",id:"mode--string-optional",level:3},{value:"<code>format = string (optional)</code>",id:"format--string-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Enrich with a lookup table",id:"enrich-with-a-lookup-table",level:3},{value:"Enrich as OCSF Enrichment",id:"enrich-as-ocsf-enrichment",level:3},{value:"Enrich by appending to an array",id:"enrich-by-appending-to-an-array",level:3},{value:"See Also",id:"see-also",level:2}],f={toc:h},E="wrapper";function D(e){var a=e,{components:n}=a,r=m(a,["components"]);return(0,t.yg)(E,g(c(c({},f),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"enrich"}),"enrich"),(0,t.yg)("p",null,"Resets data with a context."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"enrich"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," name"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, key"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"               [into"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"field, mode"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, format"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"string]"))))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"context::inspect")," operator shows details about a specified context."),(0,t.yg)("h3",c({},{id:"name-string"}),(0,t.yg)("inlineCode",{parentName:"h3"},"name: string")),(0,t.yg)("p",null,"The name of the context to inspect."),(0,t.yg)("h3",c({},{id:"key--any"}),(0,t.yg)("inlineCode",{parentName:"h3"},"key = any")),(0,t.yg)("p",null,"The field to use for the context lookup."),(0,t.yg)("h3",c({},{id:"into--field-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"into = field (optional)")),(0,t.yg)("p",null,"The field into which to write the enrichment."),(0,t.yg)("p",null,"Defaults to the context name (",(0,t.yg)("inlineCode",{parentName:"p"},"name"),")."),(0,t.yg)("h3",c({},{id:"mode--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"mode = string (optional)")),(0,t.yg)("p",null,"The mode of the enrichment operation:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"set"),": overwrites the field specified by ",(0,t.yg)("inlineCode",{parentName:"li"},"into"),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"append"),": appends into the list specified by ",(0,t.yg)("inlineCode",{parentName:"li"},"into"),". If ",(0,t.yg)("inlineCode",{parentName:"li"},"into")," is ",(0,t.yg)("inlineCode",{parentName:"li"},"null")," or an\n",(0,t.yg)("inlineCode",{parentName:"li"},"empty")," list, a new list is created. If ",(0,t.yg)("inlineCode",{parentName:"li"},"into")," is not a list, the enrichment\nwill fail with a warning.")),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"set"),"."),(0,t.yg)("h3",c({},{id:"format--string-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"format = string (optional)")),(0,t.yg)("p",null,"The style of the enriched value:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"plain"),": formats the enrichment as retrieved from the context."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ocsf"),": formats the enrichment as an ",(0,t.yg)("a",c({parentName:"li"},{href:"https://schema.ocsf.io/1.4.0-dev/objects/enrichment?extensions="}),"OCSF\nEnrichment"),"\nobject with fields ",(0,t.yg)("inlineCode",{parentName:"li"},"data"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"provider"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"type"),", and ",(0,t.yg)("inlineCode",{parentName:"li"},"value"),".")),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"plain"),"."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("h3",c({},{id:"enrich-with-a-lookup-table"}),"Enrich with a lookup table"),(0,t.yg)("p",null,"Create a lookup table:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"create_lookup_table"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"'))))),(0,t.yg)("p",null,"Add data to the lookup table:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," [")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", y"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"update"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", key"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"x, value"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"y"))))),(0,t.yg)("p",null,"Enrich with the table:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"enrich"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", key"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"x"))))),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ctx"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",c({},{id:"enrich-as-ocsf-enrichment"}),"Enrich as OCSF Enrichment"),(0,t.yg)("p",null,"Assume the same table preparation as above, but followed by a different call to\n",(0,t.yg)("inlineCode",{parentName:"p"},"context::enrich")," using the ",(0,t.yg)("inlineCode",{parentName:"p"},"format")," option:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"enrich"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", key"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"x, format"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"ocsf"'))))),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ctx"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    created_time"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2024"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"11"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"18T16"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),":35:48.069981"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    name"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "x"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    value"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    data"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h3",c({},{id:"enrich-by-appending-to-an-array"}),"Enrich by appending to an array"),(0,t.yg)("p",null,"Enrich twice with the same context and accumulate enrichments into an array:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"enrich"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", key"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"x, into"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"enrichments, mode"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"append"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"enrich"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", key"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"x, into"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"enrichments, mode"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"append"'))))),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  enrichments"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," [")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'    "a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'    "a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h2",c({},{id:"see-also"}),"See Also"),(0,t.yg)("p",null,(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/context/create_bloom_filter"}),(0,t.yg)("inlineCode",{parentName:"a"},"context::create_bloom_filter")),",\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/context/create_geoip"}),(0,t.yg)("inlineCode",{parentName:"a"},"context::create_geoip")),",\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/context/create_lookup_table"}),(0,t.yg)("inlineCode",{parentName:"a"},"context::create_lookup_table")),",\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/context/inspect"}),(0,t.yg)("inlineCode",{parentName:"a"},"context::inspect")),",\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/context/list"}),(0,t.yg)("inlineCode",{parentName:"a"},"context::list")),",\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/context/load"}),(0,t.yg)("inlineCode",{parentName:"a"},"context::load")),",\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/context/remove"}),(0,t.yg)("inlineCode",{parentName:"a"},"context::remove")),",\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/context/reset"}),(0,t.yg)("inlineCode",{parentName:"a"},"context::reset")),",\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/context/save"}),(0,t.yg)("inlineCode",{parentName:"a"},"context::save")),",\n",(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/operators/context/update"}),(0,t.yg)("inlineCode",{parentName:"a"},"context::update"))))}D.isMDXComponent=!0}}]);