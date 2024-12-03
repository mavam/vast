"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29273],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),c=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},y=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),i=c(n),g=r,d=i["".concat(p,".").concat(g)]||i[g]||u[g]||l;return n?t.createElement(d,s(s({ref:a},y),{},{components:n})):t.createElement(d,s({ref:a},y))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[i]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86485:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>v,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>f,toc:()=>F});var t=n(15680),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,i=(e,a)=>{for(var n in a||(a={}))p.call(a,n)&&y(e,n,a[n]);if(o)for(var n of o(a))c.call(a,n)&&y(e,n,a[n]);return e},u=(e,a)=>l(e,s(a)),g=(e,a)=>{var n={};for(var t in e)p.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n};const d={},m="value_counts",f={unversionedId:"tql2/functions/value_counts",id:"version-v4.23/tql2/functions/value_counts",title:"value_counts",description:"Returns a list of all grouped values alongside their frequency.",source:"@site/versioned_docs/version-v4.23/tql2/functions/value_counts.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/value_counts",permalink:"/v4.23/tql2/functions/value_counts",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/value_counts.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"unflatten",permalink:"/v4.23/tql2/functions/unflatten"},next:{title:"variance",permalink:"/v4.23/tql2/functions/variance"}},v={},F=[{value:"Description",id:"description",level:2},{value:"<code>xs: list</code>",id:"xs-list",level:3},{value:"Examples",id:"examples",level:2},{value:"Get value counts",id:"get-value-counts",level:3},{value:"See Also",id:"see-also",level:2}],N={toc:F},E="wrapper";function b(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(E,u(i(i({},N),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",i({},{id:"value_counts"}),"value_counts"),(0,t.yg)("p",null,"Returns a list of all grouped values alongside their frequency."),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"value_counts"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"(xs"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"list) "),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}})," list"))))),(0,t.yg)("h2",i({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"value_counts")," function returns a list of all unique non-null values in ",(0,t.yg)("inlineCode",{parentName:"p"},"xs"),"\nalongside their occurrence count."),(0,t.yg)("h3",i({},{id:"xs-list"}),(0,t.yg)("inlineCode",{parentName:"h3"},"xs: list")),(0,t.yg)("p",null,"The values to evaluate."),(0,t.yg)("h2",i({},{id:"examples"}),"Examples"),(0,t.yg)("h3",i({},{id:"get-value-counts"}),"Get value counts"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," [")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," counts"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"value_counts"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x)"))))),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{counts"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," [{value"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, {value"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, {value"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", count"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}]}"))))),(0,t.yg)("h2",i({},{id:"see-also"}),"See Also"),(0,t.yg)("p",null,(0,t.yg)("a",i({parentName:"p"},{href:"/v4.23/tql2/functions/mode"}),(0,t.yg)("inlineCode",{parentName:"a"},"mode")),", ",(0,t.yg)("a",i({parentName:"p"},{href:"/v4.23/tql2/functions/distinct"}),(0,t.yg)("inlineCode",{parentName:"a"},"distinct"))))}b.isMDXComponent=!0}}]);