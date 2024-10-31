"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80407],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},h="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=i(t),d=r,g=h["".concat(l,".").concat(d)]||h[d]||y[d]||s;return t?n.createElement(g,o(o({ref:a},c),{},{components:t})):n.createElement(g,o({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[h]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<s;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33834:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>u,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var n=t(15680),r=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,h=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&c(e,t,a[t]);if(p)for(var t of p(a))i.call(a,t)&&c(e,t,a[t]);return e},y=(e,a)=>s(e,o(a)),d=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const g={},u="hash_sha1",f={unversionedId:"tql2/functions/hash_sha1",id:"tql2/functions/hash_sha1",title:"hash_sha1",description:"Computes a SHA-1 hash digest.",source:"@site/docs/tql2/functions/hash_sha1.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/hash_sha1",permalink:"/next/tql2/functions/hash_sha1",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/hash_sha1.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"hash_md5",permalink:"/next/tql2/functions/hash_md5"},next:{title:"hash_sha224",permalink:"/next/tql2/functions/hash_sha224"}},m={},b=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Compute a SHA-1 digest of a string",id:"compute-a-sha-1-digest-of-a-string",level:3},{value:"See Also",id:"see-also",level:2}],N={toc:b},v="wrapper";function O(e){var a=e,{components:t}=a,r=d(a,["components"]);return(0,n.yg)(v,y(h(h({},N),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",h({},{id:"hash_sha1"}),"hash_sha1"),(0,n.yg)("p",null,"Computes a SHA-1 hash digest."),(0,n.yg)("figure",h({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",h({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",h({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",h({parentName:"code"},{"data-line":""}),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#D2A8FF"}}),"hash_sha1"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#E6EDF3"}}),"any, [seed"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#E6EDF3"}}),"str]) "),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#D2A8FF"}})," string"))))),(0,n.yg)("h2",h({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"hash_sha1")," function calculates a SHA-1 hash digest for the given value ",(0,n.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,n.yg)("h2",h({},{id:"examples"}),"Examples"),(0,n.yg)("h3",h({},{id:"compute-a-sha-1-digest-of-a-string"}),"Compute a SHA-1 digest of a string"),(0,n.yg)("figure",h({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",h({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",h({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",h({parentName:"code"},{"data-line":""}),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#D2A8FF"}})," hash_sha1"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#A5D6FF"}}),'"foo"'),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#E6EDF3"}}),")}"))))),(0,n.yg)("figure",h({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",h({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",h({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",h({parentName:"code"},{"data-line":""}),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#A5D6FF"}}),' "0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33"'),(0,n.yg)("span",h({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",h({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",h({parentName:"p"},{href:"/next/tql2/functions/hash_md5"}),(0,n.yg)("inlineCode",{parentName:"a"},"hash_md5")),", ",(0,n.yg)("a",h({parentName:"p"},{href:"/next/tql2/functions/hash_sha224"}),(0,n.yg)("inlineCode",{parentName:"a"},"hash_sha224")),",\n",(0,n.yg)("a",h({parentName:"p"},{href:"/next/tql2/functions/hash_sha256"}),(0,n.yg)("inlineCode",{parentName:"a"},"hash_sha256")),", ",(0,n.yg)("a",h({parentName:"p"},{href:"/next/tql2/functions/hash_sha384"}),(0,n.yg)("inlineCode",{parentName:"a"},"hash_sha384")),",\n",(0,n.yg)("a",h({parentName:"p"},{href:"/next/tql2/functions/hash_sha512"}),(0,n.yg)("inlineCode",{parentName:"a"},"hash_sha512")),", ",(0,n.yg)("a",h({parentName:"p"},{href:"/next/tql2/functions/hash_xxh3"}),(0,n.yg)("inlineCode",{parentName:"a"},"hash_xxh3"))))}O.isMDXComponent=!0}}]);