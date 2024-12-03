"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56643],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=i(t),m=r,g=y["".concat(l,".").concat(m)]||y[m]||d[m]||o;return t?n.createElement(g,s(s({ref:a},c),{},{components:t})):n.createElement(g,s({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[y]="string"==typeof e?e:r,s[1]=p;for(var i=2;i<o;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55125:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>g,metadata:()=>h,toc:()=>N});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&c(e,t,a[t]);if(p)for(var t of p(a))i.call(a,t)&&c(e,t,a[t]);return e},d=(e,a)=>o(e,s(a)),m=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const g={},u="cache",h={unversionedId:"tql2/operators/cache",id:"version-v4.23/tql2/operators/cache",title:"cache",description:"We designed the cache operator for under-the-hood use of the Tenzir Platform",source:"@site/versioned_docs/version-v4.23/tql2/operators/cache.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/cache",permalink:"/v4.23/tql2/operators/cache",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/cache.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"buffer",permalink:"/v4.23/tql2/operators/buffer"},next:{title:"compress",permalink:"/v4.23/tql2/operators/compress"}},f={},N=[{value:"Description",id:"description",level:2},{value:"<code>id: str</code>",id:"id-str",level:3},{value:"<code>mode = str (optional)</code>",id:"mode--str-optional",level:3},{value:"<code>capacity = int (optional)</code>",id:"capacity--int-optional",level:3},{value:"<code>ttl = duration (optional)</code>",id:"ttl--duration-optional",level:3},{value:"<code>max_ttl = duration (optional)</code>",id:"max_ttl--duration-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Cache the results of an expensive query",id:"cache-the-results-of-an-expensive-query",level:3},{value:"Get high-level statistics about a query",id:"get-high-level-statistics-about-a-query",level:3}],F={toc:N},v="wrapper";function b(e){var a=e,{components:t}=a,r=m(a,["components"]);return(0,n.yg)(v,d(y(y({},F),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"cache"}),"cache"),(0,n.yg)("admonition",y({},{title:"Expert Operator",type:"warning"}),(0,n.yg)("p",{parentName:"admonition"},"We designed the ",(0,n.yg)("inlineCode",{parentName:"p"},"cache")," operator for under-the-hood use of the Tenzir Platform\non ",(0,n.yg)("a",y({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),". We generally recommend not using\nthe operator by yourself, but rather relying on the Tenzir Platform to\nautomatically manage caches for you.")),(0,n.yg)("p",null,"An in-memory cache shared between pipelines."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"cache"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," id"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [mode"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, capacity"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, ttl"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration, max_ttl"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration]"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"cache")," operator caches events in an in-memory buffer at a node. Caches must\nhave a user-provided unique ID."),(0,n.yg)("p",null,"The first pipeline to use a cache writes into the cache. All further pipelines\nusing the same cache will read from the cache instead of executing the operators\nbefore the ",(0,n.yg)("inlineCode",{parentName:"p"},"cache")," operator in the same pipeline."),(0,n.yg)("h3",y({},{id:"id-str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"id: str")),(0,n.yg)("p",null,"An arbitrary string that uniquely identifies the cache."),(0,n.yg)("h3",y({},{id:"mode--str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"mode = str (optional)")),(0,n.yg)("p",null,"Configures whether the operator is used a source, a sink, or a transformation.\nThe following modes are available currently:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"read"'),": The operators acts as a source reading from a cache that is requires\nto already exist."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"write"'),": The operator acts as a sink writing into a cache that must not\nalready exist."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'"readwrite"'),": The operator acts as a transformation passing through events,\nlazily creating a cache if it does not already exist. If a cache exists,\nupstream operators will not be run and instead the cache is read.")),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},'"readwrite"'),"."),(0,n.yg)("h3",y({},{id:"capacity--int-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"capacity = int (optional)")),(0,n.yg)("p",null,"Stores how many events the cache can hold. Caches stop accepting events if the\ncapacity is reached and emit a warning."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"4Mi"),"."),(0,n.yg)("h3",y({},{id:"ttl--duration-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"ttl = duration (optional)")),(0,n.yg)("p",null,"Defines the maximum inactivity time until the cache is evicted from memory. The\ntimer starts when writing the cache completes (or runs into the capacity limit),\nand resets whenever the cache is read from."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"1min"),"."),(0,n.yg)("h3",y({},{id:"max_ttl--duration-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"max_ttl = duration (optional)")),(0,n.yg)("p",null,"If set, defines an upper bound for the lifetime of the cache. Unlike the ",(0,n.yg)("inlineCode",{parentName:"p"},"ttl"),"\noption, this does not refresh when the cache is accessed."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"cache-the-results-of-an-expensive-query"}),"Cache the results of an expensive query"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"export")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," @"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"name "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "suricata.flow"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," total"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(bytes_toserver), src_ip, dest_ip")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"cache"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "some-unique-identifier"'))))),(0,n.yg)("h3",y({},{id:"get-high-level-statistics-about-a-query"}),"Get high-level statistics about a query"),(0,n.yg)("p",null,"This calculates the cache again only if the query does not exist anymore, and\ndelete the cache if it's unused for more than a minute."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"export")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," @"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"name "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "suricata.flow"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip, total"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(bytes_toserver), dest_ip")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"cache"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "some-unique-identifier"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", ttl"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"1min")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip, total"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(total), destinations"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"count"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(dest_ip)"))))),(0,n.yg)("p",null,"Get the same statistics, assuming the cache still exists:"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"cache"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "some-unique-identifier"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", mode"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"read"')),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip, total"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(total), destinations"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"count"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(dest_ip)"))))))}b.isMDXComponent=!0}}]);