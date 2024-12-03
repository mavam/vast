"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11480],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(r),f=n,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(y,p(p({ref:t},c),{},{components:r})):a.createElement(y,p({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,p[1]=l;for(var i=2;i<o;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>j,frontMatter:()=>y,metadata:()=>m,toc:()=>b});var a=r(15680),n=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>o(e,p(t)),f=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};const y={},g="save_ftp",m={unversionedId:"tql2/operators/save_ftp",id:"version-v4.24/tql2/operators/save_ftp",title:"save_ftp",description:"Saves a byte stream via FTP.",source:"@site/versioned_docs/version-v4.24/tql2/operators/save_ftp.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/save_ftp",permalink:"/tql2/operators/save_ftp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/save_ftp.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"save_file",permalink:"/tql2/operators/save_file"},next:{title:"save_google_cloud_pubsub",permalink:"/tql2/operators/save_google_cloud_pubsub"}},v={},b=[{value:"Description",id:"description",level:2},{value:"<code>url: str</code>",id:"url-str",level:3},{value:"Examples",id:"examples",level:2}],O={toc:b},h="wrapper";function j(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.yg)(h,d(u(u({},O),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",u({},{id:"save_ftp"}),"save_ftp"),(0,a.yg)("p",null,"Saves a byte stream via FTP."),(0,a.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",u({parentName:"code"},{"data-line":""}),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_ftp"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}})," url"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"str"))))),(0,a.yg)("h2",u({},{id:"description"}),"Description"),(0,a.yg)("p",null,"Saves a byte stream via FTP."),(0,a.yg)("h3",u({},{id:"url-str"}),(0,a.yg)("inlineCode",{parentName:"h3"},"url: str")),(0,a.yg)("p",null,"The URL to request from. The ",(0,a.yg)("inlineCode",{parentName:"p"},"ftp://")," scheme can be omitted."),(0,a.yg)("h2",u({},{id:"examples"}),"Examples"),(0,a.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",u({parentName:"code"},{"data-line":""}),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_ftp"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ftp.example.org"'))))))}j.isMDXComponent=!0}}]);