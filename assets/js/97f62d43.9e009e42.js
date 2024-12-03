"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39050],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),y=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=y(e.components);return t.createElement(o.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},i=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=y(n),i=r,m=g["".concat(o,".").concat(i)]||g[i]||d[i]||p;return n?t.createElement(m,s(s({ref:a},c),{},{components:n})):t.createElement(m,s({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=i;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var y=2;y<p;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}i.displayName="MDXCreateElement"},16635:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>F,toc:()=>f});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))o.call(a,n)&&c(e,n,a[n]);if(l)for(var n of l(a))y.call(a,n)&&c(e,n,a[n]);return e},d=(e,a)=>p(e,s(a)),i=(e,a)=>{var n={};for(var t in e)o.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const m={},u="select",F={unversionedId:"tql2/operators/select",id:"version-v4.23/tql2/operators/select",title:"select",description:"Selects some values and discards the rest.",source:"@site/versioned_docs/version-v4.23/tql2/operators/select.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/select",permalink:"/v4.23/tql2/operators/select",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/select.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"schemas",permalink:"/v4.23/tql2/operators/schemas"},next:{title:"serve",permalink:"/v4.23/tql2/operators/serve"}},N={},f=[{value:"Description",id:"description",level:2},{value:"<code>field</code>",id:"field",level:3},{value:"<code>assignment</code>",id:"assignment",level:3},{value:"Examples",id:"examples",level:2},{value:"Select and create columns",id:"select-and-create-columns",level:3}],E={toc:f},h="wrapper";function v(e){var a=e,{components:n}=a,r=i(a,["components"]);return(0,t.yg)(h,d(g(g({},E),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",g({},{id:"select"}),"select"),(0,t.yg)("p",null,"Selects some values and discards the rest."),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"select"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," (field"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"|"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"assignment)"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"..."))))),(0,t.yg)("h2",g({},{id:"description"}),"Description"),(0,t.yg)("p",null,"This operator keeps only the provided fields and drops the rest."),(0,t.yg)("h3",g({},{id:"field"}),(0,t.yg)("inlineCode",{parentName:"h3"},"field")),(0,t.yg)("p",null,"The field to keep. If it does not exist, it's given the value ",(0,t.yg)("inlineCode",{parentName:"p"},"null")," and a\nwarning is emitted."),(0,t.yg)("h3",g({},{id:"assignment"}),(0,t.yg)("inlineCode",{parentName:"h3"},"assignment")),(0,t.yg)("p",null,"An assignment of the form ",(0,t.yg)("inlineCode",{parentName:"p"},"<field>=<expr>"),"."),(0,t.yg)("h2",g({},{id:"examples"}),"Examples"),(0,t.yg)("h3",g({},{id:"select-and-create-columns"}),"Select and create columns"),(0,t.yg)("p",null,"Keep ",(0,t.yg)("inlineCode",{parentName:"p"},"a")," and introduce ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," with the value of ",(0,t.yg)("inlineCode",{parentName:"p"},"b"),":"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," {a"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", c"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"select"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," a, y"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"b"))))),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{a"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", y"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"A more complex example with expressions and selection through records:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  name"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "foo"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  pos"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    y"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  state"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "active"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"select"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," id"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"name"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"to_upper"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(), pos"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"x, added"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"true"))))),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "FOO"'),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  pos"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"    x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  },")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  added"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," true"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}v.isMDXComponent=!0}}]);