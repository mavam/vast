"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54376],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},y=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),d=i(t),c=r,m=d["".concat(l,".").concat(c)]||d[c]||g[c]||p;return t?n.createElement(m,s(s({ref:a},y),{},{components:t})):n.createElement(m,s({ref:a},y))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,s=new Array(p);s[0]=c;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<p;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},22331:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>F,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>N});var n=t(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&y(e,t,a[t]);if(o)for(var t of o(a))i.call(a,t)&&y(e,t,a[t]);return e},g=(e,a)=>p(e,s(a)),c=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const m={},u="set",f={unversionedId:"tql2/operators/set",id:"version-v4.23/tql2/operators/set",title:"set",description:"The set operator is implied whenever a direct assignment is written. We recommend to use the implicit version. For example, use test = 42 instead of set test=42.",source:"@site/versioned_docs/version-v4.23/tql2/operators/set.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/set",permalink:"/tql2/operators/set",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/set.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"serve",permalink:"/tql2/operators/serve"},next:{title:"shell",permalink:"/tql2/operators/shell"}},F={},N=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Append a new field",id:"append-a-new-field",level:3},{value:"Update an existing field",id:"update-an-existing-field",level:3}],b={toc:N},h="wrapper";function v(e){var a=e,{components:t}=a,r=c(a,["components"]);return(0,n.yg)(h,g(d(d({},b),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"set"}),"set"),(0,n.yg)("admonition",d({},{type:"tip"}),(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"set")," operator is implied whenever a direct assignment is written. We recommend to use the implicit version. For example, use ",(0,n.yg)("inlineCode",{parentName:"p"},"test = 42")," instead of ",(0,n.yg)("inlineCode",{parentName:"p"},"set test=42"),"."),(0,n.yg)("p",{parentName:"admonition"},"A more detailed description of assignments can be found ",(0,n.yg)("a",d({parentName:"p"},{href:"/tql2/language/statements#assignment"}),"here"),".")),(0,n.yg)("p",null,"Assigns a value to a field, creating it if necessary."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"field "),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," expr")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"set"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," field"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"expr"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"..."))))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Assigns a value to a field, creating it if necessary. If the field does not\nexist, it is appended to the end. If the field name is a path such as\n",(0,n.yg)("inlineCode",{parentName:"p"},"foo.bar.baz"),", records for ",(0,n.yg)("inlineCode",{parentName:"p"},"foo")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"bar")," will be created if they do not exist\nyet."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("h3",d({},{id:"append-a-new-field"}),"Append a new field"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," {a"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"c "),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," a "),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"+"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," b"))))),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{a"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", c"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h3",d({},{id:"update-an-existing-field"}),"Update an existing field"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," {a"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"a "),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Hello"'))))),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{a"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Hello"'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", b"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}v.isMDXComponent=!0}}]);