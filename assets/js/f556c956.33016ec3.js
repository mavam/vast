"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70736],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||y[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>h});var r=n(15680),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},y=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const g={},d="is_numeric",f={unversionedId:"tql2/functions/is_numeric",id:"tql2/functions/is_numeric",title:"is_numeric",description:"Checks if a string contains only numeric characters.",source:"@site/docs/tql2/functions/is_numeric.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/is_numeric",permalink:"/next/tql2/functions/is_numeric",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/functions/is_numeric.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"is_lower",permalink:"/next/tql2/functions/is_lower"},next:{title:"is_printable",permalink:"/next/tql2/functions/is_printable"}},b={},h=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Check if a string is numeric",id:"check-if-a-string-is-numeric",level:3},{value:"See Also",id:"see-also",level:2}],v={toc:h},N="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.yg)(N,y(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"is_numeric"}),"is_numeric"),(0,r.yg)("p",null,"Checks if a string contains only numeric characters."),(0,r.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",u({parentName:"code"},{"data-line":""}),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"is_numeric"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"string) "),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}})," bool"))))),(0,r.yg)("h2",u({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"is_numeric")," function returns ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," if ",(0,r.yg)("inlineCode",{parentName:"p"},"x")," contains only numeric characters\nand ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.yg)("h2",u({},{id:"examples"}),"Examples"),(0,r.yg)("h3",u({},{id:"check-if-a-string-is-numeric"}),"Check if a string is numeric"),(0,r.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",u({parentName:"code"},{"data-line":""}),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#A5D6FF"}}),' "1234"'),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#D2A8FF"}}),"is_numeric"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"()}"))))),(0,r.yg)("figure",u({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",u({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",u({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",u({parentName:"code"},{"data-line":""}),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#79C0FF"}})," true"),(0,r.yg)("span",u({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,r.yg)("h2",u({},{id:"see-also"}),"See Also"),(0,r.yg)("p",null,(0,r.yg)("a",u({parentName:"p"},{href:"/next/tql2/functions/is_alpha"}),(0,r.yg)("inlineCode",{parentName:"a"},"is_alpha")),", ",(0,r.yg)("a",u({parentName:"p"},{href:"/next/tql2/functions/is_alnum"}),(0,r.yg)("inlineCode",{parentName:"a"},"is_alnum"))))}O.isMDXComponent=!0}}]);