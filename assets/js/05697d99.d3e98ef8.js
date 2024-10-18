"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25594],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||y[m]||o;return a?n.createElement(g,p(p({ref:t},c),{},{components:a})):n.createElement(g,p({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90576:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>F,frontMatter:()=>g,metadata:()=>f,toc:()=>N});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))i.call(t,a)&&c(e,a,t[a]);return e},y=(e,t)=>o(e,p(t)),m=(e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a};const g={},u="compress",f={unversionedId:"tql2/operators/compress",id:"tql2/operators/compress",title:"compress",description:"Compresses a stream of bytes.",source:"@site/docs/tql2/operators/compress.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/compress",permalink:"/next/tql2/operators/compress",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/compress.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"cache",permalink:"/next/tql2/operators/cache"},next:{title:"config",permalink:"/next/tql2/operators/config"}},h={},N=[{value:"Description",id:"description",level:2},{value:"<code>codec: str</code>",id:"codec-str",level:3},{value:"<code>level = int (optional)</code>",id:"level--int-optional",level:3},{value:"Examples",id:"examples",level:2}],b={toc:N},v="wrapper";function F(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.yg)(v,y(d(d({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"compress"}),"compress"),(0,n.yg)("p",null,"Compresses a stream of bytes."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"compress"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," codec"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [level"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"int]"))))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"compress")," operator compresses bytes in a pipeline incrementally with a\nknown codec."),(0,n.yg)("admonition",d({},{title:"Streaming Compression",type:"note"}),(0,n.yg)("p",{parentName:"admonition"},"The operator uses ",(0,n.yg)("a",d({parentName:"p"},{href:"https://arrow.apache.org/docs/cpp/api/utilities.html#compression"}),"Apache Arrow's compression\nutilities")," under the hood, and transparently supports\nall options that Apache Arrow supports for streaming compression."),(0,n.yg)("p",{parentName:"admonition"},"Besides the supported ",(0,n.yg)("inlineCode",{parentName:"p"},"brotli"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"bz2"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"gzip"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"lz4"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"zstd"),", Apache Arrow\nalso ships with codecs for ",(0,n.yg)("inlineCode",{parentName:"p"},"lzo"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"lz4_raw"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"lz4_hadoop")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"snappy"),", which\nonly support oneshot compression. Support for them is not currently implemented.")),(0,n.yg)("h3",d({},{id:"codec-str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"codec: str")),(0,n.yg)("p",null,"An identifier of the codec to use. Currently supported are ",(0,n.yg)("inlineCode",{parentName:"p"},"brotli"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"bz2"),",\n",(0,n.yg)("inlineCode",{parentName:"p"},"gzip"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"lz4"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"zstd"),"."),(0,n.yg)("h3",d({},{id:"level--int-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"level = int (optional)")),(0,n.yg)("p",null,"The compression level to use. The supported values depend on the codec used. If\nomitted, the default level for the codec is used."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Export all events in a Gzip-compressed NDJSON file:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"export")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_json"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," ndjson"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"compress"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "gzip"')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp/backup.json.gz"'))))),(0,n.yg)("p",null,"Recompress a Zstd-compressed file at a higher compression level:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "in.zst"')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"decompress"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "zstd"')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"compress"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "zstd"'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", level"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"18")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "out.zst"'))))))}F.isMDXComponent=!0}}]);