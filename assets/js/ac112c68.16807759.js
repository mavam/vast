"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30966],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(y,p(p({ref:r},c),{},{components:t})):n.createElement(y,p({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61464:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>x,frontMatter:()=>y,metadata:()=>g,toc:()=>h});var n=t(15680),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>o(e,p(r)),f=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_custom_props:{operator:{transformation:!0}}},m="replace",g={unversionedId:"operators/replace",id:"version-v4.20/operators/replace",title:"replace",description:"Replaces the fields matching the given extractors with fixed values.",source:"@site/versioned_docs/version-v4.20/operators/replace.md",sourceDirName:"operators",slug:"/operators/replace",permalink:"/v4.20/operators/replace",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/replace.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"repeat",permalink:"/v4.20/operators/repeat"},next:{title:"reverse",permalink:"/v4.20/operators/reverse"}},v={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;extractor=operand&gt;</code>",id:"extractoroperand",level:3},{value:"Examples",id:"examples",level:3}],b={toc:h},O="wrapper";function x(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.yg)(O,u(d(d({},b),a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"replace"}),"replace"),(0,n.yg)("p",null,"Replaces the fields matching the given extractors with fixed values."),(0,n.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"replace <extractor=operand>...\n")),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"replace")," operator mutates existing fields by providing a new value."),(0,n.yg)("p",null,"The difference between ",(0,n.yg)("inlineCode",{parentName:"p"},"replace")," and ",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.20/operators/extend"}),(0,n.yg)("inlineCode",{parentName:"a"},"extend"))," is that ",(0,n.yg)("inlineCode",{parentName:"p"},"replace"),"\noverwrites existing fields, whereas ",(0,n.yg)("inlineCode",{parentName:"p"},"extend")," doesn't touch the input."),(0,n.yg)("h3",d({},{id:"extractoroperand"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<extractor=operand>")),(0,n.yg)("p",null,"The assignment consists of an ",(0,n.yg)("inlineCode",{parentName:"p"},"extractor")," that matches against existing fields\nand an ",(0,n.yg)("inlineCode",{parentName:"p"},"operand")," that defines the new field value."),(0,n.yg)("p",null,"If ",(0,n.yg)("inlineCode",{parentName:"p"},"field")," does not exist in the input, the operator degenerates to\n",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.20/operators/pass"}),(0,n.yg)("inlineCode",{parentName:"a"},"pass")),". Use the ",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.20/operators/set"}),(0,n.yg)("inlineCode",{parentName:"a"},"set"))," operator to extend fields that cannot\nbe replaced."),(0,n.yg)("h3",d({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Replace the field the field ",(0,n.yg)("inlineCode",{parentName:"p"},"src_ip")," with a fixed value:"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"replace src_ip=0.0.0.0\n")),(0,n.yg)("p",null,"Replace all IP address with a fixed value:"),(0,n.yg)("pre",null,(0,n.yg)("code",d({parentName:"pre"},{}),"replace :ip=0.0.0.0\n")))}x.isMDXComponent=!0}}]);