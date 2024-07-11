"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>a(e,c(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_position:0},y="Set up an account",b={unversionedId:"setup-guides/set-up-an-account",id:"version-v4.18/setup-guides/set-up-an-account",title:"Set up an account",description:"In order to use the platform and the manage your nodes through our app, you must",source:"@site/versioned_docs/version-v4.18/setup-guides/set-up-an-account.md",sourceDirName:"setup-guides",slug:"/setup-guides/set-up-an-account",permalink:"/setup-guides/set-up-an-account",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/setup-guides/set-up-an-account.md",tags:[],version:"v4.18",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Setup Guides",permalink:"/setup-guides"},next:{title:"Size a node",permalink:"/setup-guides/size-a-node"}},v={},g=[{value:"Create an Account",id:"create-an-account",level:2},{value:"Delete an Account",id:"delete-an-account",level:2}],O={toc:g},h="wrapper";function k(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(h,d(s(s({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"set-up-an-account"}),"Set up an account"),(0,r.kt)("p",null,"In order to use the platform and the manage your nodes through our app, you must\ncreate an account. Everyone can freely use the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://tenzir.com/pricing"}),"Community\nEdition"),"."),(0,r.kt)("h2",s({},{id:"create-an-account"}),"Create an Account"),(0,r.kt)("p",null,"Creating a free account takes just two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",s({parentName:"li"},{href:"https://app.tenzir.com"}),"app.tenzir.com")),(0,r.kt)("li",{parentName:"ol"},"Sign in with your identity provider or create an account")),(0,r.kt)("h2",s({},{id:"delete-an-account"}),"Delete an Account"),(0,r.kt)("p",null,"Delete your account as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("a",s({parentName:"li"},{href:"https://app.tenzir.com/account"}),"Account")," page."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("em",{parentName:"li"},"Delete Account"),"."),(0,r.kt)("li",{parentName:"ol"},"(Optionally) Leave a note explaining why you delete your account.")),(0,r.kt)("admonition",s({},{type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"Deleting your account will remove all data about you from our cloud platform.\nYou will also lose the ability to manage pipelines on your node.")),(0,r.kt)("p",null,"If you decide to come back just re-create an account as described\nabove."))}k.isMDXComponent=!0}}]);