"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>i(e,a(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="put",y={unversionedId:"operators/put",id:"version-Tenzir v4.12/operators/put",title:"put",description:"Returns new events that only contain a set of specified fields.",source:"@site/versioned_docs/version-Tenzir v4.12/operators/put.md",sourceDirName:"operators",slug:"/operators/put",permalink:"/operators/put",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.12/operators/put.md",tags:[],version:"Tenzir v4.12",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"publish",permalink:"/operators/publish"},next:{title:"python",permalink:"/operators/python"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field[=operand]&gt;</code>",id:"fieldoperand",level:3},{value:"Examples",id:"examples",level:3}],k={toc:b},g="wrapper";function O(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(g,u(d(d({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"put"}),"put"),(0,r.kt)("p",null,"Returns new events that only contain a set of specified fields."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"put <field[=operand]>...\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"put")," operator produces new events according to a specified list of fields.\nAll other fields are removed from the input."),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"put")," and ",(0,r.kt)("a",d({parentName:"p"},{href:"/operators/extend"}),(0,r.kt)("inlineCode",{parentName:"a"},"extend"))," is that ",(0,r.kt)("inlineCode",{parentName:"p"},"put")," drops all\nfields not explicitly specified, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," only appends fields."),(0,r.kt)("h3",d({},{id:"fieldoperand"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<field[=operand]>")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"field")," describes the name of the field to select. The extended form with an\n",(0,r.kt)("inlineCode",{parentName:"p"},"operand")," assignment allows for computing functions over existing fields."),(0,r.kt)("p",null,"If the right-hand side of the assignment\nis omitted, the field name is implicitly used as an extractor. If multiple\nfields match the extractor, the first matching field is used in the output. If\nno fields match, ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," is assigned instead."),(0,r.kt)("h3",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Overwrite values of the field ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," with a fixed value:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-c"}),'put payload="REDACTED"\n')),(0,r.kt)("p",null,"Create connection 4-tuples:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-c"}),"put src_ip, src_port, dst_ip, dst_port\n")),(0,r.kt)("p",null,"Unlike ",(0,r.kt)("a",d({parentName:"p"},{href:"/operators/select"}),(0,r.kt)("inlineCode",{parentName:"a"},"select")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"put")," reorders fields. If the specified fields\ndo not exist in the input, ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," values will be assigned."),(0,r.kt)("p",null,"You can also reference existing fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-c"}),"put src_ip, src_port, dst_ip=dest_ip, dst_port=dest_port\n")))}O.isMDXComponent=!0}}]);