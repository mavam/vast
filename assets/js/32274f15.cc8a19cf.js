"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58421],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},y=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),c=i(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?t.createElement(g,o(o({ref:a},y),{},{components:n})):t.createElement(g,o({ref:a},y))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21945:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>v,contentTitle:()=>m,default:()=>F,frontMatter:()=>g,metadata:()=>f,toc:()=>N});var t=n(15680),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&y(e,n,a[n]);if(p)for(var n of p(a))i.call(a,n)&&y(e,n,a[n]);return e},u=(e,a)=>l(e,o(a)),d=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&p)for(var t of p(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const g={},m="any",f={unversionedId:"tql2/functions/any",id:"version-v4.23/tql2/functions/any",title:"any",description:"Computes the disjunction (OR) of all grouped boolean values.",source:"@site/versioned_docs/version-v4.23/tql2/functions/any.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/any",permalink:"/tql2/functions/any",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/any.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"all",permalink:"/tql2/functions/all"},next:{title:"as_secs",permalink:"/tql2/functions/as_secs"}},v={},N=[{value:"Description",id:"description",level:2},{value:"<code>xs: list</code>",id:"xs-list",level:3},{value:"Examples",id:"examples",level:2},{value:"Check if any value is true",id:"check-if-any-value-is-true",level:3},{value:"See Also",id:"see-also",level:2}],b={toc:N},h="wrapper";function F(e){var a=e,{components:n}=a,r=d(a,["components"]);return(0,t.yg)(h,u(c(c({},b),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"any"}),"any"),(0,t.yg)("p",null,"Computes the disjunction (OR) of all grouped boolean values."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"any"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(xs"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"list) "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," bool"))))),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"any")," function returns ",(0,t.yg)("inlineCode",{parentName:"p"},"true")," if any value in ",(0,t.yg)("inlineCode",{parentName:"p"},"xs")," is ",(0,t.yg)("inlineCode",{parentName:"p"},"true")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"\notherwise."),(0,t.yg)("h3",c({},{id:"xs-list"}),(0,t.yg)("inlineCode",{parentName:"h3"},"xs: list")),(0,t.yg)("p",null,"A list of boolean values."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("h3",c({},{id:"check-if-any-value-is-true"}),"Check if any value is true"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," [")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," false"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," false"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," true"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," result"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"any"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x)"))))),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{result"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," true"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("h2",c({},{id:"see-also"}),"See Also"),(0,t.yg)("p",null,(0,t.yg)("a",c({parentName:"p"},{href:"/tql2/functions/all"}),(0,t.yg)("inlineCode",{parentName:"a"},"all"))))}F.isMDXComponent=!0}}]);