"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98560],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,m=p["".concat(c,".").concat(d)]||p[d]||y[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>O,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var n=r(15680),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e},y=(e,t)=>o(e,a(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_position:10},b="Security Policy",f={unversionedId:"contribution/security",id:"version-v4.21/contribution/security",title:"Security Policy",description:"Security is a serious matter for us. We want to ensure and maintain a",source:"@site/versioned_docs/version-v4.21/contribution/security.md",sourceDirName:"contribution",slug:"/contribution/security",permalink:"/contribution/security",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/contribution/security.md",tags:[],version:"v4.21",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Request for Comments (RFC)",permalink:"/contribution/rfc"},next:{title:"GitHub",permalink:"/contribution/github"}},v={},g=[{value:"Reporting a Vulnerability",id:"reporting-a-vulnerability",level:2},{value:"Contact",id:"contact",level:2}],h={toc:g},w="wrapper";function O(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.yg)(w,y(p(p({},h),i),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",p({},{id:"security-policy"}),"Security Policy"),(0,n.yg)("p",null,"Security is a serious matter for us. We want to ensure and maintain a\nsecure environment for our customers and the open-source community."),(0,n.yg)("h2",p({},{id:"reporting-a-vulnerability"}),"Reporting a Vulnerability"),(0,n.yg)("p",null,"We are eager to work with the community to resolve security vulnerabilities\nwithin our tech stack in a timely manner and to properly acknowledge the\ncontributor(s). Please do not publicly disclose a vulnerability until we have\nan opportunity to review and address the issue. Follow these steps to report a\nvulneratbility:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",p({parentName:"li"},{href:"https://help.github.com/en/articles/creating-a-maintainer-security-advisory"}),"Open a security advisory"),", which is visible to\nproject maintainers only. Please do ",(0,n.yg)("em",{parentName:"li"},"not")," submit a normal issue or pull\nrequest in our public repositories."),(0,n.yg)("li",{parentName:"ol"},"We will confirm the receipt of the report within two business days. (It make\ntake additional time time to resolve the issue.)"),(0,n.yg)("li",{parentName:"ol"},"If you already have a patch, we will review it and approve it privately;\nonce merged it will be publicly disclosed. We will acknowledge you in our\nchangelog."),(0,n.yg)("li",{parentName:"ol"},"In case we need additional information during the investigation, we will be\nactively reaching out.")),(0,n.yg)("p",null,"Please do not publicly mention the security issue until after we have updated\nthe public repository so that other downstream users have an opportunity to\npatch their software."),(0,n.yg)("h2",p({},{id:"contact"}),"Contact"),(0,n.yg)("p",null,"If you have any questions, please contact us directly at\n",(0,n.yg)("a",p({parentName:"p"},{href:"mailto://security@tenzir.com"}),"security@tenzir.com"),"."))}O.isMDXComponent=!0}}]);