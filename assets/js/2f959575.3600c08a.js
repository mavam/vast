"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>w,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_position:9},h="Request for Comments (RFC)",b={unversionedId:"contribute/rfc",id:"version-Tenzir v4.9/contribute/rfc",title:"Request for Comments (RFC)",description:"We cultivate an open RFC process around evolutionary topics relating to Tenzir.",source:"@site/versioned_docs/version-Tenzir v4.9/contribute/rfc.md",sourceDirName:"contribute",slug:"/contribute/rfc",permalink:"/contribute/rfc",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.9/contribute/rfc.md",tags:[],version:"Tenzir v4.9",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Documentation",permalink:"/contribute/documentation"},next:{title:"Security Policy",permalink:"/contribute/security"}},v={},y=[{value:"Provide comments to an open RFC",id:"provide-comments-to-an-open-rfc",level:2},{value:"Add a new RFC",id:"add-a-new-rfc",level:2}],k={toc:y},g="wrapper";function w(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(g,d(u(u({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"request-for-comments-rfc"}),"Request for Comments (RFC)"),(0,n.kt)("p",null,"We cultivate an open RFC process around evolutionary topics relating to Tenzir.\nThe objective is to encourage participation of the community in the process."),(0,n.kt)("p",null,"For this reason, we include RFCs in the Tenzir repository in the top-level\n",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/rfc"}),"rfc")," directory. Engaging with an open RFC centers around the\ndiscussion in pull requests, which we describe below."),(0,n.kt)("p",null,"For all RFCs, we aim for an acceptance period of ",(0,n.kt)("strong",{parentName:"p"},"30 days"),"."),(0,n.kt)("h2",u({},{id:"provide-comments-to-an-open-rfc"}),"Provide comments to an open RFC"),(0,n.kt)("p",null,"Every RFC has a corresponding pull request with an ",(0,n.kt)("inlineCode",{parentName:"p"},"rfp")," label."),(0,n.kt)("p",null,"Here are the direct links to open, closed, or all RFC pull requests:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/tenzir/tenzir/pulls?q=is%3Apr+is%3Aopen+label%3Arfc"}),"Open RFCs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/tenzir/tenzir/pulls?q=is%3Apr+label%3Arfc+is%3Aclosed"}),"Closed RFCs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/tenzir/tenzir/pulls?q=is%3Apr+label%3Arfc"}),"All RFCs"))),(0,n.kt)("h2",u({},{id:"add-a-new-rfc"}),"Add a new RFC"),(0,n.kt)("p",null,"The workflow to add a new RFC works as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new RFC directory (increase the counter) and copy the template:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Assumption: the last proposal is 041-proposal\nmkdir 042-proposal-name\ncp -r 000-template 042-proposal-name\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write the proposal in ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.github.com/gfm/"}),"GitHub Flavored Markdown"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/tenzir/tenzir/pulls"}),"Open a pull request")," and add the ",(0,n.kt)("inlineCode",{parentName:"p"},"rfc")," label.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Share the pull request in the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://docs.tenzir.com/discord"}),"Community\nDiscord")," and other stake holders that may\nprovide valuable feedback.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Actively drive the discussion forward and point out the expected date of\nclosure to keep a healthy engagement. Aim for resolving all outstanding\ndiscussion threads close to the targeted acceptance date.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Merge the pull request once the discussion plateaus and all comments have\nbeen resolved."))),(0,n.kt)("p",null,"In you need to re-open the discussion after a pull request has been merged,\ncreate a follow-up pull request with the proposed changes."))}w.isMDXComponent=!0}}]);