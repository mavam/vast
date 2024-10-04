"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54346],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?n.createElement(y,a(a({ref:r},c),{},{components:t})):n.createElement(y,a({ref:r},c))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41431:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>w,frontMatter:()=>y,metadata:()=>g,toc:()=>b});var n=t(15680),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))l.call(r,t)&&c(e,t,r[t]);return e},d=(e,r)=>o(e,a(r)),f=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_custom_props:{operator:{transformation:!0}}},m="print",g={unversionedId:"operators/print",id:"version-v4.20/operators/print",title:"print",description:"Prints the specified record field as a string.",source:"@site/versioned_docs/version-v4.20/operators/print.md",sourceDirName:"operators",slug:"/operators/print",permalink:"/v4.20/operators/print",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/print.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"plugins",permalink:"/v4.20/operators/plugins"},next:{title:"processes",permalink:"/v4.20/operators/processes"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;input&gt;</code>",id:"input",level:3},{value:"<code>&lt;printer&gt; [&lt;args...&gt;]</code>",id:"printer-args",level:3},{value:"Examples",id:"examples",level:2}],O={toc:b},h="wrapper";function w(e){var r=e,{components:t}=r,i=f(r,["components"]);return(0,n.yg)(h,d(u(u({},O),i),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",u({},{id:"print"}),"print"),(0,n.yg)("p",null,"Prints the specified record field as a string."),(0,n.yg)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"print <input> <printer> [<args...>]\n")),(0,n.yg)("h2",u({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"print")," operator prints a given ",(0,n.yg)("inlineCode",{parentName:"p"},"<input>")," field of type ",(0,n.yg)("inlineCode",{parentName:"p"},"record")," using\n",(0,n.yg)("inlineCode",{parentName:"p"},"<printer>")," and replaces this field with the result."),(0,n.yg)("h3",u({},{id:"input"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<input>")),(0,n.yg)("p",null,"Specifies the field of interest. The field must be a record type."),(0,n.yg)("h3",u({},{id:"printer-args"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<printer> [<args...>]")),(0,n.yg)("p",null,"Specifies the printer format and the corresponding arguments specific to each\nprinter."),(0,n.yg)("admonition",u({},{title:"Text-based and Binary Formats",type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"print")," operator is currently restricted to text-based formats like JSON or\nCSV. Binary formats like PCAP or Parquet are not supported.")),(0,n.yg)("h2",u({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Print ",(0,n.yg)("a",u({parentName:"p"},{href:"/v4.20/formats/json"}),"JSON")," from the ",(0,n.yg)("inlineCode",{parentName:"p"},"flow")," field in the input as\n",(0,n.yg)("a",u({parentName:"p"},{href:"/v4.20/formats/csv"}),"CSV"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{}),"print flow csv --no-header\n")),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-json",metastring:'{0} title="Input"',"{0}":!0,title:'"Input"'}),'{\n  "timestamp": "2021-11-17T13:32:43.237882",\n  "flow_id": 852833247340038,\n  "flow": {\n    "pkts_toserver": 1,\n    "pkts_toclient": 0,\n    "bytes_toserver": 54,\n    "bytes_toclient": 0,\n }\n}\n')),(0,n.yg)("pre",null,(0,n.yg)("code",u({parentName:"pre"},{className:"language-json",metastring:'{0} title="Output"',"{0}":!0,title:'"Output"'}),'{\n  "timestamp": "2021-11-17T13:32:43.237882",\n  "flow_id": 852833247340038,\n  "flow": "1,0,54,0",\n}\n')))}w.isMDXComponent=!0}}]);