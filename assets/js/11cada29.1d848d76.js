"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19615],{15680:(e,n,r)=>{r.d(n,{xA:()=>f,yg:()=>y});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},f=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?t.createElement(y,l(l({ref:n},f),{},{components:r})):t.createElement(y,l({ref:n},f))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2261:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>v,contentTitle:()=>d,default:()=>_,frontMatter:()=>y,metadata:()=>b,toc:()=>O});var t=r(15680),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,n,r)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,p=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&f(e,r,n[r]);if(i)for(var r of i(n))s.call(n,r)&&f(e,r,n[r]);return e},u=(e,n)=>a(e,l(n)),m=(e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&i)for(var t of i(e))n.indexOf(t)<0&&s.call(e,t)&&(r[t]=e[t]);return r};const y={sidebar_class_name:"hidden"},d="from_json",b={unversionedId:"tql2/functions/from_json",id:"version-v4.22/tql2/functions/from_json",title:"from_json",description:"Examples",source:"@site/versioned_docs/version-v4.22/tql2/functions/from_json.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/from_json",permalink:"/tql2/functions/from_json",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/functions/from_json.md",tags:[],version:"v4.22",frontMatter:{sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"from_epoch_ms",permalink:"/tql2/functions/from_epoch_ms"},next:{title:"quantile",permalink:"/tql2/functions/quantile"}},v={},O=[{value:"Examples",id:"examples",level:3}],j={toc:O},g="wrapper";function _(e){var n=e,{components:r}=n,o=m(n,["components"]);return(0,t.yg)(g,u(p(p({},j),o),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",p({},{id:"from_json"}),"from_json"),(0,t.yg)("pre",null,(0,t.yg)("code",p({parentName:"pre"},{}),"<string>.from_json(\n  schema=null,\n  selector=null,\n  unnest=null,\n  many=false,\n)\n")),(0,t.yg)("h3",p({},{id:"examples"}),"Examples"),(0,t.yg)("pre",null,(0,t.yg)("code",p({parentName:"pre"},{}),'"null".from_json() == null\n"[1, 2, 3]".from_json() == [1, 2, 3]\n"{x: 42}".from_json() == {x: 42}\n\n// TODO\n"{x: 42}{y: 43}".from_json(many=true) == [{x: 42}{y: 43}]\n')))}_.isMDXComponent=!0}}]);