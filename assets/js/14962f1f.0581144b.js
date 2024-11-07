"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7872],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=i(a),u=r,g=y["".concat(p,".").concat(u)]||y[u]||d[u]||o;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>N,frontMatter:()=>g,metadata:()=>m,toc:()=>b});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&c(e,a,t[a]);return e},d=(e,t)=>o(e,s(t)),u=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a};const g={},f="as_secs",m={unversionedId:"tql2/functions/as_secs",id:"version-v4.23/tql2/functions/as_secs",title:"as_secs",description:"Converts a duration into seconds.",source:"@site/versioned_docs/version-v4.23/tql2/functions/as_secs.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/as_secs",permalink:"/tql2/functions/as_secs",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/as_secs.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"any",permalink:"/tql2/functions/any"},next:{title:"capitalize",permalink:"/tql2/functions/capitalize"}},v={},b=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Convert a duration into seconds",id:"convert-a-duration-into-seconds",level:3},{value:"See Also",id:"see-also",level:2}],h={toc:b},O="wrapper";function N(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.yg)(O,d(y(y({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"as_secs"}),"as_secs"),(0,n.yg)("p",null,"Converts a duration into seconds."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"as_secs"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration) "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," float"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"as_secs")," function converts duration value into seconds."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"convert-a-duration-into-seconds"}),"Convert a duration into seconds"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," { x"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," as_secs"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}}),"42ms"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),") }"))))),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 0.042"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",y({parentName:"p"},{href:"/tql2/functions/from_epoch_ms"}),(0,n.yg)("inlineCode",{parentName:"a"},"from_epoch_ms")),", ",(0,n.yg)("a",y({parentName:"p"},{href:"/tql2/functions/now"}),(0,n.yg)("inlineCode",{parentName:"a"},"now")),",\n",(0,n.yg)("a",y({parentName:"p"},{href:"/tql2/functions/since_epoch"}),(0,n.yg)("inlineCode",{parentName:"a"},"since_epoch"))))}N.isMDXComponent=!0}}]);