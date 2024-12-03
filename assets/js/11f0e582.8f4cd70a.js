"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47323],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),y=n,u=m["".concat(s,".").concat(y)]||m[y]||d[y]||o;return r?a.createElement(u,p(p({ref:t},c),{},{components:r})):a.createElement(u,p({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},53540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>N,frontMatter:()=>u,metadata:()=>f,toc:()=>h});var a=r(15680),n=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>o(e,p(t)),y=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r};const u={},g="write_parquet",f={unversionedId:"tql2/operators/write_parquet",id:"version-v4.24/tql2/operators/write_parquet",title:"write_parquet",description:"Transforms event stream to a Parquet byte stream.",source:"@site/versioned_docs/version-v4.24/tql2/operators/write_parquet.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/write_parquet",permalink:"/tql2/operators/write_parquet",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/write_parquet.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"write_ndjson",permalink:"/tql2/operators/write_ndjson"},next:{title:"write_pcap",permalink:"/tql2/operators/write_pcap"}},v={},h=[{value:"Description",id:"description",level:2},{value:"<code>compression_level = int (optional)</code>",id:"compression_level--int-optional",level:3},{value:"<code>compression_type = str (optional)</code>",id:"compression_type--str-optional",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},w="wrapper";function N(e){var t=e,{components:r}=t,n=y(t,["components"]);return(0,a.yg)(w,d(m(m({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",m({},{id:"write_parquet"}),"write_parquet"),(0,a.yg)("p",null,"Transforms event stream to a Parquet byte stream."),(0,a.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",m({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",m({parentName:"code"},{"data-line":""}),(0,a.yg)("span",m({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_parquet"),(0,a.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}})," [compression_level"),(0,a.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, compression_type"),(0,a.yg)("span",m({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",m({parentName:"span"},{style:{color:"#E6EDF3"}}),"str]"))))),(0,a.yg)("h2",m({},{id:"description"}),"Description"),(0,a.yg)("p",null,(0,a.yg)("a",m({parentName:"p"},{href:"https://parquet.apache.org/"}),"Apache Parquet")," is a columnar storage format that a variety of data\ntools support."),(0,a.yg)("h3",m({},{id:"compression_level--int-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"compression_level = int (optional)")),(0,a.yg)("p",null,"An optional compression level for the corresponding compression type. This\noption is ignored if no compression type is specified."),(0,a.yg)("p",null,"Defaults to the compression type's default compression level."),(0,a.yg)("h3",m({},{id:"compression_type--str-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"compression_type = str (optional)")),(0,a.yg)("p",null,"Specifies an optional compression type. Supported options are ",(0,a.yg)("inlineCode",{parentName:"p"},"zstd")," for\n",(0,a.yg)("a",m({parentName:"p"},{href:"http://facebook.github.io/zstd/"}),"Zstandard")," compression, ",(0,a.yg)("inlineCode",{parentName:"p"},"brotli")," for ",(0,a.yg)("a",m({parentName:"p"},{href:"https://www.brotli.org"}),"brotli"),"\ncompression, ",(0,a.yg)("inlineCode",{parentName:"p"},"gzip")," for ",(0,a.yg)("a",m({parentName:"p"},{href:"https://www.gzip.org"}),"gzip")," compression, and ",(0,a.yg)("inlineCode",{parentName:"p"},"snappy")," for\n",(0,a.yg)("a",m({parentName:"p"},{href:"https://google.github.io/snappy/"}),"snappy")," compression."),(0,a.yg)("admonition",m({},{type:"tip"}),(0,a.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"Why would I use this over the ",(0,a.yg)("inlineCode",{parentName:"mdxAdmonitionTitle"},"compress")," operator?"),(0,a.yg)("p",{parentName:"admonition"},"The Parquet format offers more efficient compression compared to the\n",(0,a.yg)("a",m({parentName:"p"},{href:"/tql2/operators/compress"}),(0,a.yg)("inlineCode",{parentName:"a"},"compress"))," operator. This is because it compresses\nthe data column-by-column, leaving metadata that needs to be accessed frequently\nuncompressed.")),(0,a.yg)("h2",m({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Write a Parquet file:"),(0,a.yg)("figure",m({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",m({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",m({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",m({parentName:"code"},{"data-line":""}),(0,a.yg)("span",m({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,a.yg)("span",m({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp/data.json"')),"\n",(0,a.yg)("span",m({parentName:"code"},{"data-line":""}),(0,a.yg)("span",m({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_json")),"\n",(0,a.yg)("span",m({parentName:"code"},{"data-line":""}),(0,a.yg)("span",m({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_parquet"))))))}N.isMDXComponent=!0}}]);