"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97157],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(t),g=r,d=y["".concat(o,".").concat(g)]||y[g]||u[g]||l;return t?n.createElement(d,i(i({ref:a},c),{},{components:t})):n.createElement(d,i({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[y]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},16347:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var n=t(15680),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&c(e,t,a[t]);if(p)for(var t of p(a))s.call(a,t)&&c(e,t,a[t]);return e},u=(e,a)=>l(e,i(a)),g=(e,a)=>{var t={};for(var n in e)o.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const d={},f="is_alpha",m={unversionedId:"tql2/functions/is_alpha",id:"tql2/functions/is_alpha",title:"is_alpha",description:"Checks if a string contains only alphabetic characters.",source:"@site/docs/tql2/functions/is_alpha.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/is_alpha",permalink:"/next/tql2/functions/is_alpha",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/is_alpha.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"is_alnum",permalink:"/next/tql2/functions/is_alnum"},next:{title:"is_lower",permalink:"/next/tql2/functions/is_lower"}},h={},b=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Check if a string is alphabetic",id:"check-if-a-string-is-alphabetic",level:3},{value:"See Also",id:"see-also",level:2}],v={toc:b},N="wrapper";function O(e){var a=e,{components:t}=a,r=g(a,["components"]);return(0,n.yg)(N,u(y(y({},v),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"is_alpha"}),"is_alpha"),(0,n.yg)("p",null,"Checks if a string contains only alphabetic characters."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"is_alpha"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string) "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," bool"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"is_alpha")," function returns ",(0,n.yg)("inlineCode",{parentName:"p"},"true")," if ",(0,n.yg)("inlineCode",{parentName:"p"},"x")," contains only alphabetic\ncharacters and ",(0,n.yg)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"check-if-a-string-is-alphabetic"}),"Check if a string is alphabetic"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "hello"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"is_alpha"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"()}"))))),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," true"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/is_alnum"}),(0,n.yg)("inlineCode",{parentName:"a"},"is_alnum")),", ",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/is_lower"}),(0,n.yg)("inlineCode",{parentName:"a"},"is_lower")),", ",(0,n.yg)("a",y({parentName:"p"},{href:"/next/tql2/functions/is_upper"}),(0,n.yg)("inlineCode",{parentName:"a"},"is_upper"))))}O.isMDXComponent=!0}}]);