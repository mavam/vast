"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34301],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(a),g=r,d=y["".concat(i,".").concat(g)]||y[g]||m[g]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[y]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},49753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>N});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(p)for(var a of p(t))s.call(t,a)&&c(e,a,t[a]);return e},m=(e,t)=>o(e,l(t)),g=(e,t)=>{var a={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a};const d={},f="create_bloom_filter",u={unversionedId:"tql2/operators/context/create_bloom_filter",id:"tql2/operators/context/create_bloom_filter",title:"create_bloom_filter",description:"Creates a Bloom filter context.",source:"@site/docs/tql2/operators/context/create_bloom_filter.md",sourceDirName:"tql2/operators/context",slug:"/tql2/operators/context/create_bloom_filter",permalink:"/next/tql2/operators/context/create_bloom_filter",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/context/create_bloom_filter.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"config",permalink:"/next/tql2/operators/config"},next:{title:"create_geoip",permalink:"/next/tql2/operators/context/create_geoip"}},b={},N=[{value:"Description",id:"description",level:2},{value:"<code>name: string</code>",id:"name-string",level:3},{value:"<code>capacity = uint</code>",id:"capacity--uint",level:3},{value:"<code>fp_probability = float</code>",id:"fp_probability--float",level:3},{value:"Examples",id:"examples",level:2},{value:"Create a new Bloom filter context",id:"create-a-new-bloom-filter-context",level:3},{value:"See Also",id:"see-also",level:2}],x={toc:N},h="wrapper";function v(e){var t=e,{components:a}=t,r=g(t,["components"]);return(0,n.yg)(h,m(y(y({},x),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"create_bloom_filter"}),"create_bloom_filter"),(0,n.yg)("p",null,"Creates a Bloom filter context."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"create_bloom_filter"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," name"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, capacity"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, fp_probability"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"float"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"context::create_bloom_filter")," operator constructs a new context of type\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/enrichment/#bloom-filter"}),"Bloom filter"),"."),(0,n.yg)("p",null,"To find suitable values for the capacity and false-positive probability, Consult\nThomas Hurst's ",(0,n.yg)("a",y({parentName:"p"},{href:"https://hur.st/bloomfilter/"}),"Bloom Filter Calculator"),". The\nparameter ",(0,n.yg)("inlineCode",{parentName:"p"},"p")," corresponds to ",(0,n.yg)("inlineCode",{parentName:"p"},"capacity")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"p")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"fp_probability"),"."),(0,n.yg)("p",null,"You can also create a Bloom filter context as code by adding it to\n",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir.contexts")," in your ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir.yaml"),":"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("figcaption",y({parentName:"figure"},{"data-rehype-pretty-code-title":"","data-language":"yaml","data-theme":"github-dark-default"}),"<prefix>/etc/tenzir/tenzir.yaml"),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"tenzir"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"  contexts"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"    my-iocs"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"      type"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"bloom-filter")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"      arguments"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"        capacity"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),"1B")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#7EE787"}}),"        fp-probability"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"0.001"))))),(0,n.yg)("p",null,"Making changes to ",(0,n.yg)("inlineCode",{parentName:"p"},"arguments")," of an already created context has no effect."),(0,n.yg)("h3",y({},{id:"name-string"}),(0,n.yg)("inlineCode",{parentName:"h3"},"name: string")),(0,n.yg)("p",null,"The name of the new Bloom filter."),(0,n.yg)("h3",y({},{id:"capacity--uint"}),(0,n.yg)("inlineCode",{parentName:"h3"},"capacity = uint")),(0,n.yg)("p",null,"The maximum number of items in the filter that maintain the false positive\nprobability. Adding more elements does not yield an error, but lookups will\nmore likely return false positives."),(0,n.yg)("h3",y({},{id:"fp_probability--float"}),(0,n.yg)("inlineCode",{parentName:"h3"},"fp_probability = float")),(0,n.yg)("p",null,"The false-positive probability of the Bloom filter."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"create-a-new-bloom-filter-context"}),"Create a new Bloom filter context"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FFA657"}}),"context"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"create_bloom_filter"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ctx"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", capacity"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"1B"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", fp_probability"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"0.001"))))),(0,n.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/context/create_lookup_table"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::create_lookup_table")),",\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/context/create_geoip"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::create_geoip")),",\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/context/enrich"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::enrich")),",\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/context/inspect"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::inspect")),",\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/context/list"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::list")),",\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/context/load"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::load")),",\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/context/remove"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::remove")),",\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/context/update"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::reset")),",\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/context/save"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::save")),",\n",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/context/update"}),(0,n.yg)("inlineCode",{parentName:"a"},"context::update")),","))}v.isMDXComponent=!0}}]);