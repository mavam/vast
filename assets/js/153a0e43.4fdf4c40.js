"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43043],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=d(n),m=a,f=y["".concat(p,".").concat(m)]||y[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},g),{},{components:n})):r.createElement(f,l({ref:t},g))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>C,frontMatter:()=>f,metadata:()=>N,toc:()=>h});var r=n(15680),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&g(e,n,t[n]);return e},s=(e,t)=>i(e,l(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_custom_props:{operator:{source:!0}}},c="version",N={unversionedId:"operators/version",id:"version-v4.20/operators/version",title:"version",description:"Shows the current version.",source:"@site/versioned_docs/version-v4.20/operators/version.md",sourceDirName:"operators",slug:"/operators/version",permalink:"/v4.20/operators/version",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/version.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"velociraptor",permalink:"/v4.20/operators/velociraptor"},next:{title:"where",permalink:"/v4.20/operators/where"}},u={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.version</code>",id:"tenzirversion",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},v="wrapper";function C(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.yg)(v,s(y(y({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",y({},{id:"version"}),"version"),(0,r.yg)("p",null,"Shows the current version."),(0,r.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),"version\n")),(0,r.yg)("h2",y({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"version")," operator shows the current Tenzir version."),(0,r.yg)("h2",y({},{id:"schemas"}),"Schemas"),(0,r.yg)("p",null,"Tenzir emits version information with the following schema."),(0,r.yg)("h3",y({},{id:"tenzirversion"}),(0,r.yg)("inlineCode",{parentName:"h3"},"tenzir.version")),(0,r.yg)("p",null,"Contains detailed information about the process version."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Field"),(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Type"),(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"version")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"The formatted version string.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"tag")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"An optional identifier of the build.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"major")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"uint64")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"The major release version.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"minor")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"uint64")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"The minor release version.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"patch")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"uint64")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"The patch release version.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"features")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"list<string>")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"A list of feature flags that conditionally enable features in the Tenzir Platform.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"build")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"record")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"Build-time configuration options.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"dependencies")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"list<record>")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"A list of build-time dependencies and their versions.")))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"build")," record contains the following fields:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Field"),(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Type"),(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"type")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"The configured build type. One of ",(0,r.yg)("inlineCode",{parentName:"td"},"Release"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"Debug"),", or ",(0,r.yg)("inlineCode",{parentName:"td"},"RelWithDebInfo"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"tree_hash")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"A hash of all files in the source directory.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"assertions")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"bool")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"Whether potentially expensive run-time checks are enabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"sanitizers")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"record")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"Contains information about additional run-time checks from sanitizers.")))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"build.sanitzers")," record contains the following fields:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Field"),(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Type"),(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"address")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"bool")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"Whether the address sanitizer is enabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"undefined_behavior")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"bool")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"Whether the undefined behavior sanitizer is enabled.")))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"dependencies")," record contains the following fields:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Field"),(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Type"),(0,r.yg)("th",y({parentName:"tr"},{align:"left"}),"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"name")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"The name of the dependency.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"version")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",y({parentName:"tr"},{align:"left"}),"THe version of the dependency.")))),(0,r.yg)("h2",y({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"version")," to show the current version of a development build:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),'{\n  "version": "v4.6.3-36-gbd4c8a058b-dirty",\n  "major": 4,\n  "minor": 6,\n  "patch": 3,\n  "tweak": 36\n}\n')),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"version")," to show the current version of a release build:"),(0,r.yg)("pre",null,(0,r.yg)("code",y({parentName:"pre"},{}),'{\n  "version": "v4.7.0",\n  "major": 4,\n  "minor": 7,\n  "patch": 0,\n  "tweak": 0\n}\n')))}C.isMDXComponent=!0}}]);