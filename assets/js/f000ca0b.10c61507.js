"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76707],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||y[d]||o;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>N,frontMatter:()=>g,metadata:()=>m,toc:()=>v});var a=n(15680),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))i.call(t,n)&&c(e,n,t[n]);return e},y=(e,t)=>o(e,s(t)),d=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n};const g={},f="as_secs",m={unversionedId:"tql2/functions/as_secs",id:"tql2/functions/as_secs",title:"as_secs",description:"Converts a duration into seconds.",source:"@site/docs/tql2/functions/as_secs.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/as_secs",permalink:"/next/tql2/functions/as_secs",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/as_secs.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Functions",permalink:"/next/tql2/functions"},next:{title:"capitalize",permalink:"/next/tql2/functions/capitalize"}},b={},v=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Convert a duration into seconds",id:"convert-a-duration-into-seconds",level:3},{value:"See Also",id:"see-also",level:2}],h={toc:v},O="wrapper";function N(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.yg)(O,y(u(u({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",u({},{id:"as_secs"}),"as_secs"),(0,a.yg)("p",null,"Converts a duration into seconds."),(0,a.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",u({parentName:"code"},{"data-line":""}),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"as_secs"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration) "),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}})," float"))))),(0,a.yg)("h2",u({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"as_secs")," function converts duration value into seconds."),(0,a.yg)("h2",u({},{id:"examples"}),"Examples"),(0,a.yg)("h3",u({},{id:"convert-a-duration-into-seconds"}),"Convert a duration into seconds"),(0,a.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",u({parentName:"code"},{"data-line":""}),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}})," { x"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}})," as_secs"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}}),"42ms"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),") }"))))),(0,a.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",u({parentName:"code"},{"data-line":""}),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," 0.042"),(0,a.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,a.yg)("h2",u({},{id:"see-also"}),"See Also"),(0,a.yg)("p",null,(0,a.yg)("a",u({parentName:"p"},{href:"/next/tql2/functions/from_epoch_ms"}),(0,a.yg)("inlineCode",{parentName:"a"},"from_epoch_ms")),", ",(0,a.yg)("a",u({parentName:"p"},{href:"/next/tql2/functions/now"}),(0,a.yg)("inlineCode",{parentName:"a"},"now")),",\n",(0,a.yg)("a",u({parentName:"p"},{href:"/next/tql2/functions/since_epoch"}),(0,a.yg)("inlineCode",{parentName:"a"},"since_epoch"))))}N.isMDXComponent=!0}}]);