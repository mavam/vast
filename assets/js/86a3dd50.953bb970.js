"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72318],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),y=n,g=c["".concat(p,".").concat(y)]||c[y]||u[y]||l;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>N,frontMatter:()=>g,metadata:()=>f,toc:()=>v});var r=a(15680),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&d(e,a,t[a]);return e},u=(e,t)=>l(e,o(t)),y=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a};const g={},m="tail",f={unversionedId:"tql2/operators/tail",id:"version-v4.24/tql2/operators/tail",title:"tail",description:"Limits the input to the last n events.",source:"@site/versioned_docs/version-v4.24/tql2/operators/tail.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/tail",permalink:"/tql2/operators/tail",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/tail.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"summarize",permalink:"/tql2/operators/summarize"},next:{title:"taste",permalink:"/tql2/operators/taste"}},h={},v=[{value:"Description",id:"description",level:2},{value:"<code>n: int (optional)</code>",id:"n-int-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Get the last 10 results",id:"get-the-last-10-results",level:3},{value:"Get the last 5 results",id:"get-the-last-5-results",level:3}],b={toc:v},O="wrapper";function N(e){var t=e,{components:a}=t,n=y(t,["components"]);return(0,r.yg)(O,u(c(c({},b),n),{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",c({},{id:"tail"}),"tail"),(0,r.yg)("p",null,"Limits the input to the last ",(0,r.yg)("inlineCode",{parentName:"p"},"n")," events."),(0,r.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",c({parentName:"code"},{"data-line":""}),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"tail"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," [n"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"int]"))))),(0,r.yg)("h2",c({},{id:"description"}),"Description"),(0,r.yg)("p",null,"Forwards the last ",(0,r.yg)("inlineCode",{parentName:"p"},"n")," events and discards the rest."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"tail n")," is a shorthand notation for ",(0,r.yg)("a",c({parentName:"p"},{href:"/tql2/operators/slice"}),(0,r.yg)("inlineCode",{parentName:"a"},"slice begin=-n")),"."),(0,r.yg)("h3",c({},{id:"n-int-optional"}),(0,r.yg)("inlineCode",{parentName:"h3"},"n: int (optional)")),(0,r.yg)("p",null,"The number of events to keep."),(0,r.yg)("p",null,"Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"10"),"."),(0,r.yg)("h2",c({},{id:"examples"}),"Examples"),(0,r.yg)("h3",c({},{id:"get-the-last-10-results"}),"Get the last 10 results"),(0,r.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",c({parentName:"code"},{"data-line":""}),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"export")),"\n",(0,r.yg)("span",c({parentName:"code"},{"data-line":""}),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"tail"))))),(0,r.yg)("h3",c({},{id:"get-the-last-5-results"}),"Get the last 5 results"),(0,r.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",c({parentName:"code"},{"data-line":""}),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"export")),"\n",(0,r.yg)("span",c({parentName:"code"},{"data-line":""}),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"tail"),(0,r.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 5"))))))}N.isMDXComponent=!0}}]);