"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51577],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>f});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},y=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),c=i(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return a?n.createElement(f,l(l({ref:t},y),{},{components:a})):n.createElement(f,l({ref:t},y))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17429:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>F,frontMatter:()=>f,metadata:()=>m,toc:()=>b});var n=a(15680),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&y(e,a,t[a]);if(p)for(var a of p(t))i.call(t,a)&&y(e,a,t[a]);return e},g=(e,t)=>o(e,l(t)),d=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a};const f={},u="float",m={unversionedId:"tql2/functions/float",id:"version-v4.23/tql2/functions/float",title:"float",description:"Casts an expression to a float.",source:"@site/versioned_docs/version-v4.23/tql2/functions/float.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/float",permalink:"/v4.23/tql2/functions/float",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/float.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"flatten",permalink:"/v4.23/tql2/functions/flatten"},next:{title:"floor",permalink:"/v4.23/tql2/functions/floor"}},v={},b=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Cast an integer to a float",id:"cast-an-integer-to-a-float",level:3},{value:"Cast a string to a float",id:"cast-a-string-to-a-float",level:3},{value:"See Also",id:"see-also",level:2}],h={toc:b},N="wrapper";function F(e){var t=e,{components:a}=t,r=d(t,["components"]);return(0,n.yg)(N,g(c(c({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",c({},{id:"float"}),"float"),(0,n.yg)("p",null,"Casts an expression to a float."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"float"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"any) "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," float"))))),(0,n.yg)("h2",c({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"float")," function converts the given value ",(0,n.yg)("inlineCode",{parentName:"p"},"x")," to a floating-point value."),(0,n.yg)("h2",c({},{id:"examples"}),"Examples"),(0,n.yg)("h3",c({},{id:"cast-an-integer-to-a-float"}),"Cast an integer to a float"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," float"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"42"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),")}"))))),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 42.0"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h3",c({},{id:"cast-a-string-to-a-float"}),"Cast a string to a float"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," float"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"4.2"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),")}"))))),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 4.2"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",c({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",c({parentName:"p"},{href:"/v4.23/tql2/functions/int"}),"int"),", ",(0,n.yg)("a",c({parentName:"p"},{href:"/v4.23/tql2/functions/uint"}),"uint"),", ",(0,n.yg)("a",c({parentName:"p"},{href:"/v4.23/tql2/functions/time"}),"time"),", ",(0,n.yg)("a",c({parentName:"p"},{href:"/v4.23/tql2/functions/str"}),"str"),", ",(0,n.yg)("a",c({parentName:"p"},{href:"/v4.23/tql2/functions/ip"}),"ip")))}F.isMDXComponent=!0}}]);