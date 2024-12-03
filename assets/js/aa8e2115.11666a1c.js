"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56249],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},y="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=d(t),g=r,m=y["".concat(l,".").concat(g)]||y[g]||i[g]||o;return t?n.createElement(m,p(p({ref:a},c),{},{components:t})):n.createElement(m,p({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[y]="string"==typeof e?e:r,p[1]=s;for(var d=2;d<o;d++)p[d]=t[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},61002:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>u,default:()=>E,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&c(e,t,a[t]);if(s)for(var t of s(a))d.call(a,t)&&c(e,t,a[t]);return e},i=(e,a)=>o(e,p(a)),g=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))a.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t};const m={},u="decode_hex",f={unversionedId:"tql2/functions/decode_hex",id:"version-v4.24/tql2/functions/decode_hex",title:"decode_hex",description:"Decodes bytes from their hexadecimal representation.",source:"@site/versioned_docs/version-v4.24/tql2/functions/decode_hex.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/decode_hex",permalink:"/tql2/functions/decode_hex",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/functions/decode_hex.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"decode_base64",permalink:"/tql2/functions/decode_base64"},next:{title:"distinct",permalink:"/tql2/functions/distinct"}},b={},h=[{value:"Description",id:"description",level:2},{value:"<code>bytes: blob|string</code>",id:"bytes-blobstring",level:3},{value:"Examples",id:"examples",level:2},{value:"Decode a blob from hex",id:"decode-a-blob-from-hex",level:3},{value:"Decode a mixed-case hex string",id:"decode-a-mixed-case-hex-string",level:3},{value:"See Also",id:"see-also",level:2}],F={toc:h},N="wrapper";function E(e){var a=e,{components:t}=a,r=g(a,["components"]);return(0,n.yg)(N,i(y(y({},F),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"decode_hex"}),"decode_hex"),(0,n.yg)("p",null,"Decodes bytes from their hexadecimal representation."),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"decode_hex"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"(bytes"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," blob"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"|"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"string) "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}})," blob"))))),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"Decodes bytes from their hexadecimal representation."),(0,n.yg)("h3",y({},{id:"bytes-blobstring"}),(0,n.yg)("inlineCode",{parentName:"h3"},"bytes: blob|string")),(0,n.yg)("p",null,"The value to decode."),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("h3",y({},{id:"decode-a-blob-from-hex"}),"Decode a blob from hex"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {bytes"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "54656E7A6972"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"decoded "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," bytes"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"decode_hex"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"()"))))),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{bytes"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "54656E7A6972"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", decoded"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Tenzir"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h3",y({},{id:"decode-a-mixed-case-hex-string"}),"Decode a mixed-case hex string"),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {bytes"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "4e6f6E6365"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"decoded "),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," bytes"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"decode_hex"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"()"))))),(0,n.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",y({parentName:"code"},{"data-line":""}),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{bytes"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "4e6f6E6365"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", decoded"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Nonce"'),(0,n.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",y({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",y({parentName:"p"},{href:"/tql2/functions/encode_hex"}),(0,n.yg)("inlineCode",{parentName:"a"},"encode_hex"))))}E.isMDXComponent=!0}}]);