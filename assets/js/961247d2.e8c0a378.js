"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47450],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,d=c["".concat(p,".").concat(g)]||c[g]||y[g]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var a=n(15680),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e},y=(e,t)=>o(e,i(t)),g=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const d={},f="uint",m={unversionedId:"tql2/functions/uint",id:"version-v4.23/tql2/functions/uint",title:"uint",description:"Casts an expression to an unsigned integer.",source:"@site/versioned_docs/version-v4.23/tql2/functions/uint.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/uint",permalink:"/v4.23/tql2/functions/uint",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/uint.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"type_id",permalink:"/v4.23/tql2/functions/type_id"},next:{title:"unflatten",permalink:"/v4.23/tql2/functions/unflatten"}},v={},b=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Cast a floating-point number to an unsigned integer",id:"cast-a-floating-point-number-to-an-unsigned-integer",level:3},{value:"See Also",id:"see-also",level:2}],h={toc:b},N="wrapper";function O(e){var t=e,{components:n}=t,r=g(t,["components"]);return(0,a.yg)(N,y(c(c({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"uint"}),"uint"),(0,a.yg)("p",null,"Casts an expression to an unsigned integer."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"uint"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any) "),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," uint"))))),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"uint")," function casts the provided value ",(0,a.yg)("inlineCode",{parentName:"p"},"x")," to an unsigned integer.\nNon-integer values are truncated."),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"),(0,a.yg)("h3",c({},{id:"cast-a-floating-point-number-to-an-unsigned-integer"}),"Cast a floating-point number to an unsigned integer"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," uint"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"4.2"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),")}"))))),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 4"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,a.yg)("h2",c({},{id:"see-also"}),"See Also"),(0,a.yg)("p",null,(0,a.yg)("a",c({parentName:"p"},{href:"/v4.23/tql2/functions/int"}),"int"),", ",(0,a.yg)("a",c({parentName:"p"},{href:"/v4.23/tql2/functions/float"}),"float"),", ",(0,a.yg)("a",c({parentName:"p"},{href:"/v4.23/tql2/functions/time"}),"time"),", ",(0,a.yg)("a",c({parentName:"p"},{href:"/v4.23/tql2/functions/str"}),"str"),", ",(0,a.yg)("a",c({parentName:"p"},{href:"/v4.23/tql2/functions/ip"}),"ip")))}O.isMDXComponent=!0}}]);