"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51604],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>u});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),y=o,u=d["".concat(s,".").concat(y)]||d[y]||m[y]||a;return n?t.createElement(u,p(p({ref:r},c),{},{components:n})):t.createElement(u,p({ref:r},c))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},29053:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>N,frontMatter:()=>u,metadata:()=>g,toc:()=>b});var t=n(15680),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,d=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&c(e,n,r[n]);if(i)for(var n of i(r))l.call(r,n)&&c(e,n,r[n]);return e},m=(e,r)=>a(e,p(r)),y=(e,r)=>{var n={};for(var t in e)s.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))r.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const u={sidebar_custom_props:{operator:{transformation:!0}}},f="decompress",g={unversionedId:"operators/decompress",id:"version-v4.20/operators/decompress",title:"decompress",description:"Decompresses a stream of bytes.",source:"@site/versioned_docs/version-v4.20/operators/decompress.md",sourceDirName:"operators",slug:"/operators/decompress",permalink:"/v4.20/operators/decompress",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/decompress.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"decapsulate",permalink:"/v4.20/operators/decapsulate"},next:{title:"deduplicate",permalink:"/v4.20/operators/deduplicate"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;codec&gt;</code>",id:"codec",level:3},{value:"Examples",id:"examples",level:2}],h={toc:b},O="wrapper";function N(e){var r=e,{components:n}=r,o=y(r,["components"]);return(0,t.yg)(O,m(d(d({},h),o),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",d({},{id:"decompress"}),"decompress"),(0,t.yg)("p",null,"Decompresses a stream of bytes."),(0,t.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"decompress <codec>\n")),(0,t.yg)("h2",d({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"decompress")," operator decompresses bytes in a pipeline incrementally with a\nknown codec. The operator supports decompressing multiple concatenated streams\nof the same codec transparently."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"decompress")," operator is invoked automatically as a part of ",(0,t.yg)("a",d({parentName:"p"},{href:"/v4.20/operators/from"}),(0,t.yg)("inlineCode",{parentName:"a"},"from")),"\nif the source file has a file extension indicating compression.\nThis behavior can be circumvented by using ",(0,t.yg)("a",d({parentName:"p"},{href:"/v4.20/operators/load"}),(0,t.yg)("inlineCode",{parentName:"a"},"load"))," directly."),(0,t.yg)("admonition",d({},{title:"Streaming Decompression",type:"note"}),(0,t.yg)("p",{parentName:"admonition"},"The operator uses ",(0,t.yg)("a",d({parentName:"p"},{href:"https://arrow.apache.org/docs/cpp/api/utilities.html#compression"}),"Apache Arrow's compression\nutilities")," under the hood, and transparently supports\nall options that Apache Arrow supports for streaming decompression."),(0,t.yg)("p",{parentName:"admonition"},"Besides the supported ",(0,t.yg)("inlineCode",{parentName:"p"},"brotli"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"bz2"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"gzip"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"lz4"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"zstd"),", Apache Arrow\nalso ships with codecs for ",(0,t.yg)("inlineCode",{parentName:"p"},"lzo"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"lz4_raw"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"lz4_hadoop")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"snappy"),", which\nonly support oneshot decompression. Support for them is not currently implemented.")),(0,t.yg)("h3",d({},{id:"codec"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<codec>")),(0,t.yg)("p",null,"An identifier of the codec to use. Currently supported are ",(0,t.yg)("inlineCode",{parentName:"p"},"brotli"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"bz2"),",\n",(0,t.yg)("inlineCode",{parentName:"p"},"gzip"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"lz4"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"zstd"),"."),(0,t.yg)("h2",d({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Import Suricata events from a Zstd-compressed file:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"from eve.json.zst\n| import\n\nload file eve.json.zst\n| decompress zstd\n| read suricata\n| import\n")),(0,t.yg)("p",null,"Convert a Zstd-compressed file into an LZ4-compressed file:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"from in.zst\n| to out.lz4\n\nload file in.zst\n| decompress zstd\n| compress lz4\n| save file out.lz4\n")))}N.isMDXComponent=!0}}]);