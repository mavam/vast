"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26329],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(t),u=r,g=c["".concat(s,".").concat(u)]||c[u]||y[u]||l;return t?n.createElement(g,p(p({ref:a},m),{},{components:t})):n.createElement(g,p({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},46932:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>x,contentTitle:()=>d,default:()=>h,frontMatter:()=>g,metadata:()=>f,toc:()=>N});var n=t(15680),r=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,m=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&m(e,t,a[t]);if(o)for(var t of o(a))i.call(a,t)&&m(e,t,a[t]);return e},y=(e,a)=>l(e,p(a)),u=(e,a)=>{var t={};for(var n in e)s.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const g={},d="max",f={unversionedId:"tql2/functions/max",id:"tql2/functions/max",title:"max",description:"Computes the maximum of all grouped values.",source:"@site/docs/tql2/functions/max.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/max",permalink:"/next/tql2/functions/max",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/max.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"all",permalink:"/next/tql2/functions/map"},next:{title:"mean",permalink:"/next/tql2/functions/mean"}},x={},N=[{value:"Description",id:"description",level:2},{value:"<code>xs: list</code>",id:"xs-list",level:3},{value:"Examples",id:"examples",level:2},{value:"Find the maximum value",id:"find-the-maximum-value",level:3},{value:"See Also",id:"see-also",level:2}],v={toc:N},b="wrapper";function h(e){var a=e,{components:t}=a,r=u(a,["components"]);return(0,n.yg)(b,y(c(c({},v),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",c({},{id:"max"}),"max"),(0,n.yg)("p",null,"Computes the maximum of all grouped values."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"max"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(xs"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"list) "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," number"))))),(0,n.yg)("h2",c({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"max")," function returns the largest numeric value in ",(0,n.yg)("inlineCode",{parentName:"p"},"xs"),"."),(0,n.yg)("h3",c({},{id:"xs-list"}),(0,n.yg)("inlineCode",{parentName:"h3"},"xs: list")),(0,n.yg)("p",null,"The values to evaluate."),(0,n.yg)("h2",c({},{id:"examples"}),"Examples"),(0,n.yg)("h3",c({},{id:"find-the-maximum-value"}),"Find the maximum value"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," [")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," max_value"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"max"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x)"))))),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{max_value"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",c({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",c({parentName:"p"},{href:"/next/tql2/functions/min"}),(0,n.yg)("inlineCode",{parentName:"a"},"min")),", ",(0,n.yg)("a",c({parentName:"p"},{href:"/next/tql2/functions/mean"}),(0,n.yg)("inlineCode",{parentName:"a"},"mean")),", ",(0,n.yg)("a",c({parentName:"p"},{href:"/next/tql2/functions/sum"}),(0,n.yg)("inlineCode",{parentName:"a"},"sum"))))}h.isMDXComponent=!0}}]);