"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66775],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=i(a),g=r,d=y["".concat(p,".").concat(g)]||y[g]||u[g]||l;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},41597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>F,frontMatter:()=>d,metadata:()=>m,toc:()=>N});var n=a(15680),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&c(e,a,t[a]);return e},u=(e,t)=>l(e,s(t)),g=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a};const d={},f="first",m={unversionedId:"tql2/functions/first",id:"version-v4.23/tql2/functions/first",title:"first",description:"Takes the first non-null grouped value.",source:"@site/versioned_docs/version-v4.23/tql2/functions/first.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/first",permalink:"/tql2/functions/first",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/first.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"file_name",permalink:"/tql2/functions/file_name"},next:{title:"flatten",permalink:"/tql2/functions/flatten"}},v={},N=[{value:"Description",id:"description",level:2},{value:"<code>xs: list</code>",id:"xs-list",level:3},{value:"Examples",id:"examples",level:2},{value:"Get the first non-null value",id:"get-the-first-non-null-value",level:3},{value:"See Also",id:"see-also",level:2}],b={toc:N},h="wrapper";function F(e){var t=e,{components:a}=t,r=g(t,["components"]);return(0,n.yg)(h,u(y(y({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"first"}),"first"),(0,n.yg)("p",null,"Takes the first non-null grouped value."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"first"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(xs"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"list) "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," any"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"first")," function returns the first non-null value in ",(0,n.yg)("inlineCode",{parentName:"p"},"xs"),"."),(0,n.yg)("h3",y({},{id:"xs-list"}),(0,n.yg)("inlineCode",{parentName:"h3"},"xs: list")),(0,n.yg)("p",null,"The values to search."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"get-the-first-non-null-value"}),"Get the first non-null value"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," [")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," null"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," first_value"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"first"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x)"))))),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{first_value"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",y({parentName:"p"},{href:"/tql2/functions/last"}),(0,n.yg)("inlineCode",{parentName:"a"},"last"))))}F.isMDXComponent=!0}}]);