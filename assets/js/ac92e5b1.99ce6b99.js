"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44791],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},g=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),d=i(a),c=r,u=d["".concat(o,".").concat(c)]||d[c]||y[c]||l;return a?n.createElement(u,s(s({ref:t},g),{},{components:a})):n.createElement(u,s({ref:t},g))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:r,s[1]=p;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},53260:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>N,frontMatter:()=>u,metadata:()=>h,toc:()=>v});var n=a(15680),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&g(e,a,t[a]);if(p)for(var a of p(t))i.call(t,a)&&g(e,a,t[a]);return e},y=(e,t)=>l(e,s(t)),c=(e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&i.call(e,n)&&(a[n]=e[n]);return a};const u={},m="slice",h={unversionedId:"tql2/operators/slice",id:"tql2/operators/slice",title:"slice",description:"Keeps a range of events within the interval [begin, end) stepping by stride.",source:"@site/docs/tql2/operators/slice.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/slice",permalink:"/next/tql2/operators/slice",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/slice.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"sigma",permalink:"/next/tql2/operators/sigma"},next:{title:"sockets",permalink:"/next/tql2/operators/sockets"}},f={},v=[{value:"Description",id:"description",level:2},{value:"<code>begin = int (optional)</code>",id:"begin--int-optional",level:3},{value:"<code>end = int (optional)</code>",id:"end--int-optional",level:3},{value:"<code>stride = int (optional)</code>",id:"stride--int-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Get the second 100 events",id:"get-the-second-100-events",level:3},{value:"Get the last 5 events",id:"get-the-last-5-events",level:3},{value:"Skip the last 10 events",id:"skip-the-last-10-events",level:3},{value:"Return the last 50 events, except for the last 2",id:"return-the-last-50-events-except-for-the-last-2",level:3},{value:"Skip the first and the last event",id:"skip-the-first-and-the-last-event",level:3},{value:"Return every second event starting from the tenth",id:"return-every-second-event-starting-from-the-tenth",level:3},{value:"Return all but the last five events in reverse order",id:"return-all-but-the-last-five-events-in-reverse-order",level:3}],b={toc:v},F="wrapper";function N(e){var t=e,{components:a}=t,r=c(t,["components"]);return(0,n.yg)(F,y(d(d({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"slice"}),"slice"),(0,n.yg)("p",null,"Keeps a range of events within the interval ",(0,n.yg)("inlineCode",{parentName:"p"},"[begin, end)")," stepping by ",(0,n.yg)("inlineCode",{parentName:"p"},"stride"),"."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"slice"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [begin"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, end"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, stride"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"int]"))))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"slice")," operator selects a range of events from the input. The semantics of\nthe operator match Python's array slicing."),(0,n.yg)("admonition",d({},{title:"Potentially High Memory Usage",type:"note"}),(0,n.yg)("p",{parentName:"admonition"},"Take care when using this operator with large inputs.")),(0,n.yg)("h3",d({},{id:"begin--int-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"begin = int (optional)")),(0,n.yg)("p",null,"The beginning (inclusive) of the range to keep. Use a negative number to count\nfrom the end."),(0,n.yg)("h3",d({},{id:"end--int-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"end = int (optional)")),(0,n.yg)("p",null,"The end (exclusive) of the range to keep. Use a negative number to count from\nthe end."),(0,n.yg)("h3",d({},{id:"stride--int-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"stride = int (optional)")),(0,n.yg)("p",null,"The number of elements to advance before the next element. Use a negative number\nto count from the end, effectively reversing the stream."),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("h3",d({},{id:"get-the-second-100-events"}),"Get the second 100 events"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"slice"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," begin"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"100"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", end"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"200"))))),(0,n.yg)("h3",d({},{id:"get-the-last-5-events"}),"Get the last 5 events"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"slice"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," begin"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"=-"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"5"))))),(0,n.yg)("h3",d({},{id:"skip-the-last-10-events"}),"Skip the last 10 events"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"slice"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," end"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"=-"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"10"))))),(0,n.yg)("h3",d({},{id:"return-the-last-50-events-except-for-the-last-2"}),"Return the last 50 events, except for the last 2"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"slice"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," begin"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"=-"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"50"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", end"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"=-"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"2"))))),(0,n.yg)("h3",d({},{id:"skip-the-first-and-the-last-event"}),"Skip the first and the last event"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"slice"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," begin"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", end"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"=-"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1"))))),(0,n.yg)("h3",d({},{id:"return-every-second-event-starting-from-the-tenth"}),"Return every second event starting from the tenth"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"slice"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," begin"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"9"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", stride"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"2"))))),(0,n.yg)("h3",d({},{id:"return-all-but-the-last-five-events-in-reverse-order"}),"Return all but the last five events in reverse order"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"slice"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," end"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"=-"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"5"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", stride"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"=-"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"1"))))))}N.isMDXComponent=!0}}]);