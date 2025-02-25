"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86540],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,y=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>j,frontMatter:()=>y,metadata:()=>d,toc:()=>g});var n=t(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&l(e,t,r[t]);if(s)for(var t of s(r))c.call(r,t)&&l(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),m=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_custom_props:{format:{parser:!0,printer:!0}}},v="ssv",d={unversionedId:"formats/ssv",id:"version-v4.29/formats/ssv",title:"ssv",description:"The ssv format is a configuration of the xsv format:",source:"@site/versioned_docs/version-v4.29/formats/ssv.md",sourceDirName:"formats",slug:"/formats/ssv",permalink:"/formats/ssv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.29/formats/ssv.md",tags:[],version:"v4.29",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"pcap",permalink:"/formats/pcap"},next:{title:"suricata",permalink:"/formats/suricata"}},b={},g=[],O={toc:g},h="wrapper";function j(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.yg)(h,u(f(f({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",f({},{id:"ssv"}),"ssv"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"ssv")," format is a configuration of the ",(0,n.yg)("a",f({parentName:"p"},{href:"/formats/xsv"}),(0,n.yg)("inlineCode",{parentName:"a"},"xsv"))," format:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Field separator: ",(0,n.yg)("inlineCode",{parentName:"li"},"<space>")),(0,n.yg)("li",{parentName:"ul"},"List separator: ",(0,n.yg)("inlineCode",{parentName:"li"},",")," (configurable)"),(0,n.yg)("li",{parentName:"ul"},"Null value: ",(0,n.yg)("inlineCode",{parentName:"li"},"-")," (configurable)")))}j.isMDXComponent=!0}}]);