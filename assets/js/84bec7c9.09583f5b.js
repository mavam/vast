"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>O,frontMatter:()=>m,metadata:()=>b,toc:()=>y});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>i(e,a(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="slice",b={unversionedId:"operators/slice",id:"version-Tenzir v4.9/operators/slice",title:"slice",description:"Keep a range events within the half-closed interval [begin, end).",source:"@site/versioned_docs/version-Tenzir v4.9/operators/slice.md",sourceDirName:"operators",slug:"/operators/slice",permalink:"/operators/slice",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.9/operators/slice.md",tags:[],version:"Tenzir v4.9",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"sigma",permalink:"/operators/sigma"},next:{title:"sockets",permalink:"/operators/sockets"}},g={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;begin&gt;</code>",id:"begin",level:3},{value:"<code>&lt;end&gt;</code>",id:"end",level:3},{value:"Examples",id:"examples",level:2}],h={toc:y},k="wrapper";function O(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(k,u(d(d({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"slice"}),"slice"),(0,r.kt)("p",null,"Keep a range events within the half-closed interval ",(0,r.kt)("inlineCode",{parentName:"p"},"[begin, end)"),"."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice [--begin <begin>] [--end <end>]\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"slice")," operator selects a range of events from the input. The semantics of\nthe operator match Python's array slicing."),(0,r.kt)("h3",d({},{id:"begin"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<begin>")),(0,r.kt)("p",null,"An signed integer denoting the beginning (inclusive) of the range to keep. Use a\nnegative number to count from the end."),(0,r.kt)("h3",d({},{id:"end"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<end>")),(0,r.kt)("p",null,"An signed integer denoting the end (exclusive) of the range to keep. Use a\nnegative number to count from the end."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Get the second 100 events:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice --begin 100 --end 200\n")),(0,r.kt)("p",null,"Get the last five events:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice --begin -5\n")),(0,r.kt)("p",null,"Skip the last ten events:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice --end -10\n")),(0,r.kt)("p",null,"Return the last 50 events, except for the last 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice --begin -50 --end -2\n")),(0,r.kt)("p",null,"Skip the first and the last event:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice --begin 1 --end -1\n")))}O.isMDXComponent=!0}}]);