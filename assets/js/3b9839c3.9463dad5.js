"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36825],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),c=a,y=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return t?r.createElement(y,o(o({ref:n},m),{},{components:t})):r.createElement(y,o({ref:n},m))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},17015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>g,default:()=>x,frontMatter:()=>y,metadata:()=>v,toc:()=>h});var r=t(15680),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&m(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&m(e,t,n[t]);return e},u=(e,n)=>i(e,o(n)),c=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const y={sidebar_custom_props:{operator:{transformation:!0}}},g="sample",v={unversionedId:"operators/sample",id:"version-v4.23/operators/sample",title:"sample",description:"Dynamically samples events from a event stream.",source:"@site/versioned_docs/version-v4.23/operators/sample.md",sourceDirName:"operators",slug:"/operators/sample",permalink:"/operators/sample",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/operators/sample.md",tags:[],version:"v4.23",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"reverse",permalink:"/operators/reverse"},next:{title:"save",permalink:"/operators/save"}},f={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--period &lt;period&gt;</code>",id:"--period-period",level:3},{value:"<code>--mode &lt;mode&gt;</code>",id:"--mode-mode",level:3},{value:"<code>--min-events &lt;uint&gt;</code>",id:"--min-events-uint",level:3},{value:"<code>--max-rate &lt;uint&gt;</code>",id:"--max-rate-uint",level:3},{value:"<code>--max-samples &lt;uint&gt;</code>",id:"--max-samples-uint",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},O="wrapper";function x(e){var n=e,{components:t}=n,a=c(n,["components"]);return(0,r.yg)(O,u(d(d({},b),a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",d({},{id:"sample"}),"sample"),(0,r.yg)("p",null,"Dynamically samples events from a event stream."),(0,r.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),"sample [--period <period>] [--mode <mode>] [--min-events <uint>] [--max-rate <uint>] [--max-samples <uint>]\n")),(0,r.yg)("h2",d({},{id:"description"}),"Description"),(0,r.yg)("p",null,"Dynamically samples input data from a stream based on the frequency of\nreceiving events for streams with varying load."),(0,r.yg)("p",null,"The operator counts the number of events received in the ",(0,r.yg)("inlineCode",{parentName:"p"},"period")," and applies\nthe specified function on the count to calculate the sampling rate for the next\nperiod."),(0,r.yg)("h3",d({},{id:"--period-period"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--period <period>")),(0,r.yg)("p",null,"The duration to count events in, i.e., how often the sample rate is computed."),(0,r.yg)("p",null,"The sampling rate for the first window is ",(0,r.yg)("inlineCode",{parentName:"p"},"1:1"),"."),(0,r.yg)("p",null,"Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"30 seconds"),"."),(0,r.yg)("h3",d({},{id:"--mode-mode"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--mode <mode>")),(0,r.yg)("p",null,"The function used to compute the sampling rate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"ln"')," (default)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"log2"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"log10"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},'"sqrt"'))),(0,r.yg)("h3",d({},{id:"--min-events-uint"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--min-events <uint>")),(0,r.yg)("p",null,"The minimum number of events that must be received during the previous sampling\nperiod for the sampling mode to be applied in the current period. If the number\nof events in a sample group falls below this threshold, a ",(0,r.yg)("inlineCode",{parentName:"p"},"1:1")," sample rate is\nused instead."),(0,r.yg)("p",null,"Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"30"),"."),(0,r.yg)("h3",d({},{id:"--max-rate-uint"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--max-rate <uint>")),(0,r.yg)("p",null,"The sampling rate is capped to this value if the computed rate is higher than this."),(0,r.yg)("h3",d({},{id:"--max-samples-uint"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--max-samples <uint>")),(0,r.yg)("p",null,"The maximum number of events to emit per ",(0,r.yg)("inlineCode",{parentName:"p"},"period"),"."),(0,r.yg)("h2",d({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Sample a feed ",(0,r.yg)("inlineCode",{parentName:"p"},"log-stream")," every 30s dynamically, only changing rate when more\nthan 50 events (",(0,r.yg)("inlineCode",{parentName:"p"},"min-events"),") are received. Additionally, cap the max sampling\nrate to ",(0,r.yg)("inlineCode",{parentName:"p"},"1:500"),", i.e. 1 sample for every 500 events or more (",(0,r.yg)("inlineCode",{parentName:"p"},"max-rate"),")."),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),'subscribe "log-stream" \n| sample --period 30s --min-events=50 --max-rate=500\n')),(0,r.yg)("p",null,"Sample some ",(0,r.yg)("inlineCode",{parentName:"p"},"metrics")," every hour, limiting the max samples per period to 5000\nsamples (",(0,r.yg)("inlineCode",{parentName:"p"},"max-samples"),") and limiting the overall sample count to 100k samples\n(",(0,r.yg)("inlineCode",{parentName:"p"},"head"),")."),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),'subscribe "metrics" \n| sample --period 1h --max-samples 5k | head 100k\n')))}x.isMDXComponent=!0}}]);