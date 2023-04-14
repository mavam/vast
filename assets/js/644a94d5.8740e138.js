"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>k,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={},y="rename",k={unversionedId:"understand/operators/transformations/rename",id:"understand/operators/transformations/rename",title:"rename",description:"Renames fields and types.",source:"@site/docs/understand/operators/transformations/rename.md",sourceDirName:"understand/operators/transformations",slug:"/understand/operators/transformations/rename",permalink:"/docs/next/understand/operators/transformations/rename",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/operators/transformations/rename.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"put",permalink:"/docs/next/understand/operators/transformations/put"},next:{title:"replace",permalink:"/docs/next/understand/operators/transformations/replace"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;name=extractor&gt;...</code>",id:"nameextractor",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},g="wrapper";function O(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(g,m(d(d({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"rename"}),"rename"),(0,r.kt)("p",null,"Renames fields and types."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"rename <name=extractor>...\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rename")," operator assigns new names to fields or types. Renaming only\nmodifies metadata and is therefore computationally inexpensive. The operator\nhandles nested field extractors as well, but cannot perform field reordering,\ne.g., by hoisting nested fields into the top level."),(0,r.kt)("p",null,"Renaming only takes place if the provided extractor on the right-hand side of\nthe assignment resolves to a field or type. Otherwise the assignment does\nnothing. If no extractors match, ",(0,r.kt)("inlineCode",{parentName:"p"},"rename")," degenerates to ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/next/understand/operators/transformations/pass"}),(0,r.kt)("inlineCode",{parentName:"a"},"pass")),"."),(0,r.kt)("h3",d({},{id:"nameextractor"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<name=extractor>...")),(0,r.kt)("p",null,"An assignment of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"name=extractor")," renames the field or type identified\nby ",(0,r.kt)("inlineCode",{parentName:"p"},"extractor")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Rename events of type ",(0,r.kt)("inlineCode",{parentName:"p"},"suricata.flow")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"connection"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"rename connection=:suricata.flow\n")),(0,r.kt)("p",null,"Assign new names to the fields ",(0,r.kt)("inlineCode",{parentName:"p"},"src_ip")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dest_ip"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"rename src=src_ip, dst=dest_ip\n")),(0,r.kt)("p",null,"Give the nested field ",(0,r.kt)("inlineCode",{parentName:"p"},"orig_h")," nested under the record ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," the name ",(0,r.kt)("inlineCode",{parentName:"p"},"src_ip"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"rename src=id.orig_h\n")),(0,r.kt)("p",null,"Same as above, but consider fields at any nesting hierarchy:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"rename src=orig_h\n")))}O.isMDXComponent=!0}}]);