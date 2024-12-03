"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71257],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>w});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),y=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const f={},m="write_bitz",b={unversionedId:"tql2/operators/write_bitz",id:"version-v4.23/tql2/operators/write_bitz",title:"write_bitz",description:"Writes BITZ (Tenzir's internal wire format)",source:"@site/versioned_docs/version-v4.23/tql2/operators/write_bitz.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/write_bitz",permalink:"/v4.23/tql2/operators/write_bitz",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/write_bitz.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"where",permalink:"/v4.23/tql2/operators/where"},next:{title:"write_json",permalink:"/v4.23/tql2/operators/write_json"}},g={},w=[{value:"Description",id:"description",level:2}],v={toc:w},h="wrapper";function O(e){var t=e,{components:r}=t,a=y(t,["components"]);return(0,n.yg)(h,u(d(d({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"write_bitz"}),"write_bitz"),(0,n.yg)("p",null,"Writes ",(0,n.yg)("inlineCode",{parentName:"p"},"BITZ")," (Tenzir's internal wire format)"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_bitz"))))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Use BITZ when you need high-throughput structured data exchange with minimal\noverhead. BITZ is a thin wrapper around Arrow's record batches. That is, BITZ\nlays out data in a (compressed) columnar fashion that makes it conducive for\nanalytical workloads. Since it's padded and byte-aligned, it is portable and\ndoesn't induce any deserialization cost, making it suitable for\nwrite-once-read-many use cases."),(0,n.yg)("p",null,"Internally, BITZ uses Arrow's IPC format for serialization and deserialization,\nbut prefixes each message with a 64 bit size prefix to support changing schemas\nbetween batches\u2014something that Arrow's IPC format does not support on its own."),(0,n.yg)("admonition",d({},{title:"Did you know?",type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"BITZ is short for ",(0,n.yg)("strong",{parentName:"p"},"Bi"),"nary ",(0,n.yg)("strong",{parentName:"p"},"T"),"en",(0,n.yg)("strong",{parentName:"p"},"z"),"ir, and a play on the word bits.")))}O.isMDXComponent=!0}}]);