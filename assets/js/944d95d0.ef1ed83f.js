"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31106],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),i=y(n),g=r,m=i["".concat(l,".").concat(g)]||i[g]||d[g]||p;return n?t.createElement(m,s(s({ref:a},c),{},{components:n})):t.createElement(m,s({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[i]="string"==typeof e?e:r,s[1]=o;for(var y=2;y<p;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},77305:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>F,contentTitle:()=>u,default:()=>E,frontMatter:()=>m,metadata:()=>f,toc:()=>N});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,i=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&c(e,n,a[n]);return e},d=(e,a)=>p(e,s(a)),g=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const m={},u="encrypt_cryptopan",f={unversionedId:"tql2/functions/encrypt_cryptopan",id:"version-v4.23/tql2/functions/encrypt_cryptopan",title:"encrypt_cryptopan",description:"Encrypts an IP address via Crypto-PAn.",source:"@site/versioned_docs/version-v4.23/tql2/functions/encrypt_cryptopan.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/encrypt_cryptopan",permalink:"/tql2/functions/encrypt_cryptopan",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/encrypt_cryptopan.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"distinct",permalink:"/tql2/functions/distinct"},next:{title:"ends_with",permalink:"/tql2/functions/ends_with"}},F={},N=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>address: ip</code>",id:"address-ip",level:3},{value:"<code>seed = str (optional)</code>",id:"seed--str-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Encrypt IP address fields",id:"encrypt-ip-address-fields",level:3}],h={toc:N},v="wrapper";function E(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(v,d(i(i({},h),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",i({},{id:"encrypt_cryptopan"}),"encrypt_cryptopan"),(0,t.yg)("p",null,"Encrypts an IP address via Crypto-PAn."),(0,t.yg)("h2",i({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"encrypt_cryptopan"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"(address"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"ip, [seed"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"str])"))))),(0,t.yg)("h2",i({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"encrypt_cryptopan")," function encrypts the IP ",(0,t.yg)("inlineCode",{parentName:"p"},"address")," using the\n",(0,t.yg)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Crypto-PAn"}),"Crypto-PAn")," algorithm."),(0,t.yg)("h3",i({},{id:"address-ip"}),(0,t.yg)("inlineCode",{parentName:"h3"},"address: ip")),(0,t.yg)("p",null,"The IP address to encrypt."),(0,t.yg)("h3",i({},{id:"seed--str-optional"}),(0,t.yg)("inlineCode",{parentName:"h3"},"seed = str (optional)")),(0,t.yg)("p",null,"A 64-byte seed that describes a hexadecimal value. When the seed is shorter than\n64 bytes, the function appends zeros to match the size; when it is longer, it\ntruncates the seed."),(0,t.yg)("h2",i({},{id:"examples"}),"Examples"),(0,t.yg)("h3",i({},{id:"encrypt-ip-address-fields"}),"Encrypt IP address fields"),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"let"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," $seed"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#A5D6FF"}}),' "deadbeef"'),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#8B949E"}})," // use secret() function in practice")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  src"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}})," encrypt_cryptopan"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"114.13"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"11.35"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", seed"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"$seed"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"),")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  dst"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#D2A8FF"}})," encrypt_cryptopan"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"114.56"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"11.200"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),", seed"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"$seed"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"),")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("figure",i({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",i({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",i({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  src"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 117.179"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"11.60"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"  dst"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}})," 117.135"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#79C0FF"}}),"244.180"),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",i({parentName:"code"},{"data-line":""}),(0,t.yg)("span",i({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}E.isMDXComponent=!0}}]);