"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12907],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var o=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),f=n,y=c["".concat(p,".").concat(f)]||c[f]||u[f]||r;return a?o.createElement(y,l(l({ref:t},d),{},{components:a})):o.createElement(y,l({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1024:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>O,frontMatter:()=>y,metadata:()=>g,toc:()=>b});var o=a(15680),n=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&d(e,a,t[a]);return e},u=(e,t)=>r(e,l(t)),f=(e,t)=>{var a={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&s.call(e,o)&&(a[o]=e[o]);return a};const y={},m="load_file",g={unversionedId:"tql2/operators/load_file",id:"version-v4.23/tql2/operators/load_file",title:"load_file",description:"Loads the contents of the file at path as a byte stream.",source:"@site/versioned_docs/version-v4.23/tql2/operators/load_file.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_file",permalink:"/tql2/operators/load_file",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/operators/load_file.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_balance",permalink:"/tql2/operators/load_balance"},next:{title:"load_google_cloud_pubsub",permalink:"/tql2/operators/load_google_cloud_pubsub"}},h={},b=[{value:"Description",id:"description",level:2},{value:"<code>path: str</code>",id:"path-str",level:3},{value:"<code>follow = bool (optional)</code>",id:"follow--bool-optional",level:3},{value:"<code>mmap = bool (optional)</code>",id:"mmap--bool-optional",level:3},{value:"<code>timeout = duration (optional)</code>",id:"timeout--duration-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Load the raw contents of a file",id:"load-the-raw-contents-of-a-file",level:3}],v={toc:b},w="wrapper";function O(e){var t=e,{components:a}=t,n=f(t,["components"]);return(0,o.yg)(w,u(c(c({},v),n),{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",c({},{id:"load_file"}),"load_file"),(0,o.yg)("p",null,"Loads the contents of the file at ",(0,o.yg)("inlineCode",{parentName:"p"},"path")," as a byte stream."),(0,o.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,o.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,o.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,o.yg)("span",c({parentName:"code"},{"data-line":""}),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," path"),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [follow"),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, mmap"),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, timeout"),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"duration]"))))),(0,o.yg)("h2",c({},{id:"description"}),"Description"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"file")," loader acquires raw bytes from a file."),(0,o.yg)("h3",c({},{id:"path-str"}),(0,o.yg)("inlineCode",{parentName:"h3"},"path: str")),(0,o.yg)("p",null,"The file path to load from. When ",(0,o.yg)("inlineCode",{parentName:"p"},"~")," is the first character, it will be\nsubstituted with the value of the ",(0,o.yg)("inlineCode",{parentName:"p"},"$HOME")," environment variable."),(0,o.yg)("h3",c({},{id:"follow--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"follow = bool (optional)")),(0,o.yg)("p",null,"Do not stop when the end of file is reached, but rather to wait for additional\ndata to be appended to the input."),(0,o.yg)("h3",c({},{id:"mmap--bool-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"mmap = bool (optional)")),(0,o.yg)("p",null,"Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"mmap(2)")," system call to map the file and produce only one single chunk\nof bytes, instead of producing data piecemeal via ",(0,o.yg)("inlineCode",{parentName:"p"},"read(2)"),". This option\neffectively gives the downstream parser full control over reads."),(0,o.yg)("h3",c({},{id:"timeout--duration-optional"}),(0,o.yg)("inlineCode",{parentName:"h3"},"timeout = duration (optional)")),(0,o.yg)("p",null,"Wait at most for the provided duration when performing a blocking system call.\nThis flags comes in handy in combination with ",(0,o.yg)("inlineCode",{parentName:"p"},"follow=true")," to produce a steady\npulse of input in the pipeline execution, as input (even if empty) drives the\nprocessing forward."),(0,o.yg)("h2",c({},{id:"examples"}),"Examples"),(0,o.yg)("h3",c({},{id:"load-the-raw-contents-of-a-file"}),"Load the raw contents of a file"),(0,o.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,o.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,o.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,o.yg)("span",c({parentName:"code"},{"data-line":""}),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_file"),(0,o.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "example.txt"'))))))}O.isMDXComponent=!0}}]);