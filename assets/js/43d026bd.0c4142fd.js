"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48798],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},81249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>w,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var n=r(15680),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),y=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={},g="shell",f={unversionedId:"tql2/operators/shell",id:"version-v4.23/tql2/operators/shell",title:"shell",description:"Executes a system command and hooks its stdin and stdout into the pipeline.",source:"@site/versioned_docs/version-v4.23/tql2/operators/shell.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/shell",permalink:"/v4.23/tql2/operators/shell",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/shell.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"set",permalink:"/v4.23/tql2/operators/set"},next:{title:"sigma",permalink:"/v4.23/tql2/operators/sigma"}},h={},v=[{value:"Description",id:"description",level:2},{value:"<code>cmd: str</code>",id:"cmd-str",level:3},{value:"Examples",id:"examples",level:2},{value:"Show a live log from the <code>tenzir-node</code> service",id:"show-a-live-log-from-the-tenzir-node-service",level:3}],b={toc:v},O="wrapper";function w(e){var t=e,{components:r}=t,a=y(t,["components"]);return(0,n.yg)(O,u(d(d({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"shell"}),"shell"),(0,n.yg)("p",null,"Executes a system command and hooks its stdin and stdout into the pipeline."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"shell"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," cmd"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str"))))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"shell")," operator executes the provided command by spawning a new process.\nThe input of the operator is forwarded to the child's standard input. Similarly,\nthe child's standard output is forwarded to the output of the operator."),(0,n.yg)("h3",d({},{id:"cmd-str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"cmd: str")),(0,n.yg)("p",null,"The command to execute and hook into the pipeline processing. It is interpreted\nby ",(0,n.yg)("inlineCode",{parentName:"p"},"/bin/sh -c"),"."),(0,n.yg)("admonition",d({},{title:"Lots of escaping?",type:"tip"}),(0,n.yg)("p",{parentName:"admonition"},"Try using raw string literals: ",(0,n.yg)("inlineCode",{parentName:"p"},'r#"echo "i can use quotes""#'),".")),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("h3",d({},{id:"show-a-live-log-from-the-tenzir-node-service"}),"Show a live log from the ",(0,n.yg)("inlineCode",{parentName:"h3"},"tenzir-node")," service"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"shell"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "journalctl -u tenzir-node -f"')),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_json"))))))}w.isMDXComponent=!0}}]);