"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78358],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),f=n,u=d["".concat(p,".").concat(f)]||d[f]||y[f]||o;return r?a.createElement(u,s(s({ref:t},c),{},{components:r})):a.createElement(u,s({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>N,frontMatter:()=>u,metadata:()=>g,toc:()=>b});var a=r(15680),n=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&c(e,r,t[r]);return e},y=(e,t)=>o(e,s(t)),f=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};const u={},m="fields",g={unversionedId:"tql2/operators/fields",id:"version-v4.23/tql2/operators/fields",title:"fields",description:"Retrieves all fields stored at a node.",source:"@site/versioned_docs/version-v4.23/tql2/operators/fields.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/fields",permalink:"/tql2/operators/fields",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/fields.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"export",permalink:"/tql2/operators/export"},next:{title:"files",permalink:"/tql2/operators/files"}},v={},b=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Get the top-5 most frequently used fields across schemas",id:"get-the-top-5-most-frequently-used-fields-across-schemas",level:3}],h={toc:b},O="wrapper";function N(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.yg)(O,y(d(d({},h),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",d({},{id:"fields"}),"fields"),(0,a.yg)("p",null,"Retrieves all fields stored at a node."),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"fields"))))),(0,a.yg)("h2",d({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"fields")," operator shows a list of all fields stored at a node across all\navailable schemas."),(0,a.yg)("h2",d({},{id:"examples"}),"Examples"),(0,a.yg)("h3",d({},{id:"get-the-top-5-most-frequently-used-fields-across-schemas"}),"Get the top-5 most frequently used fields across schemas"),(0,a.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"fields")),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," field, count"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"count_distinct"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"(schema), schemas"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"distinct"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"(schema)")),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"sort"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}})," -"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"count")),"\n",(0,a.yg)("span",d({parentName:"code"},{"data-line":""}),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"head"),(0,a.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 5"))))))}N.isMDXComponent=!0}}]);