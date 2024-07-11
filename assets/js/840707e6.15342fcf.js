"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>O,frontMatter:()=>d,metadata:()=>y,toc:()=>k});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,p(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={sidebar_custom_props:{format:{parser:!0,printer:!0}}},h="parquet",y={unversionedId:"formats/parquet",id:"version-v4.18/formats/parquet",title:"parquet",description:"Reads events from a Parquet file. Writes events to a Parquet file.",source:"@site/versioned_docs/version-v4.18/formats/parquet.md",sourceDirName:"formats",slug:"/formats/parquet",permalink:"/formats/parquet",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/formats/parquet.md",tags:[],version:"v4.18",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"lines",permalink:"/formats/lines"},next:{title:"pcap",permalink:"/formats/pcap"}},v={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--compression-type</code> (Printer)",id:"--compression-type-printer",level:3},{value:"<code>--compression-level</code> (Printer)",id:"--compression-level-printer",level:3},{value:"Examples",id:"examples",level:2}],b={toc:k},g="wrapper";function O(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(g,u(m(m({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"parquet"}),"parquet"),(0,n.kt)("p",null,"Reads events from a ",(0,n.kt)("a",m({parentName:"p"},{href:"https://parquet.apache.org/"}),"Parquet")," file. Writes events to a ",(0,n.kt)("a",m({parentName:"p"},{href:"https://parquet.apache.org/"}),"Parquet")," file."),(0,n.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("p",null,"Parser:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"parquet\n")),(0,n.kt)("p",null,"Printer:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"parquet [\u2014compression-type=<type>] [\u2014compression-level=<level>]\n")),(0,n.kt)("h2",m({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"parquet")," format provides both a parser and a printer for Parquet files."),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://parquet.apache.org/"}),"Apache Parquet")," is a columnar storage format that a variety of data\ntools support."),(0,n.kt)("admonition",m({},{title:"MMAP Parsing",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"When using the parser with the ",(0,n.kt)("a",m({parentName:"p"},{href:"/connectors/file"}),(0,n.kt)("inlineCode",{parentName:"a"},"file"))," connector, we\nrecommend passing the ",(0,n.kt)("inlineCode",{parentName:"p"},"--mmap")," option to ",(0,n.kt)("inlineCode",{parentName:"p"},"file")," to give the parser full control\nover the reads, which leads to better performance and memory usage.")),(0,n.kt)("admonition",m({},{title:"Limitation",type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"Tenzir currently assumes that all Parquet files use metadata recognized by\nTenzir. We plan to lift this restriction in the future.")),(0,n.kt)("h3",m({},{id:"--compression-type-printer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--compression-type")," (Printer)"),(0,n.kt)("p",null,"Specifies an optional compression type. Supported options are ",(0,n.kt)("inlineCode",{parentName:"p"},"zstd")," for\n",(0,n.kt)("a",m({parentName:"p"},{href:"http://facebook.github.io/zstd/"}),"Zstandard")," compression, ",(0,n.kt)("inlineCode",{parentName:"p"},"brotli")," for ",(0,n.kt)("a",m({parentName:"p"},{href:"https://www.brotli.org"}),"brotli"),"\ncompression, ",(0,n.kt)("inlineCode",{parentName:"p"},"gzip")," for ",(0,n.kt)("a",m({parentName:"p"},{href:"https://www.gzip.org"}),"gzip")," compression, and ",(0,n.kt)("inlineCode",{parentName:"p"},"snappy")," for\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://google.github.io/snappy/"}),"snappy")," compression."),(0,n.kt)("admonition",m({},{type:"info"}),(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Why would I use this over the ",(0,n.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"compress")," operator?"),(0,n.kt)("p",{parentName:"admonition"},"The Parquet format offers more efficient compression compared to the\n",(0,n.kt)("a",m({parentName:"p"},{href:"/operators/compress"}),(0,n.kt)("inlineCode",{parentName:"a"},"compress"))," operator. This is because it compresses\nthe data column-by-column, leaving metadata that needs to be accessed frequently\nuncompressed.")),(0,n.kt)("h3",m({},{id:"--compression-level-printer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--compression-level")," (Printer)"),(0,n.kt)("p",null,"An optional compression level for the corresponding compression type. This\noption is ignored if no compression type is specified."),(0,n.kt)("p",null,"Defaults to the compression type's default compression level."),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read a Parquet file via the ",(0,n.kt)("a",m({parentName:"p"},{href:"/operators/from"}),(0,n.kt)("inlineCode",{parentName:"a"},"from"))," operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"from file --mmap /tmp/data.prq read parquet\n")),(0,n.kt)("p",null,"Write a Zstd-compressed Parquet file via ",(0,n.kt)("a",m({parentName:"p"},{href:"/operators/to"}),(0,n.kt)("inlineCode",{parentName:"a"},"to"))," operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"to /tmp/suricata.parquet write parquet --compression-type zstd\n")))}O.isMDXComponent=!0}}]);