"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14634],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,y=m["".concat(p,".").concat(d)]||m[d]||g[d]||i;return t?a.createElement(y,o(o({ref:n},s),{},{components:t})):a.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>C,frontMatter:()=>y,metadata:()=>f,toc:()=>v});var a=t(15680),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))u.call(n,t)&&s(e,t,n[t]);return e},g=(e,n)=>i(e,o(n)),d=(e,n)=>{var t={};for(var a in e)p.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t};const y={sidebar_custom_props:{operator:{transformation:!0}}},c="summarize",f={unversionedId:"operators/summarize",id:"version-v4.23/operators/summarize",title:"summarize",description:"Groups events and applies aggregate functions on each group.",source:"@site/versioned_docs/version-v4.23/operators/summarize.md",sourceDirName:"operators",slug:"/operators/summarize",permalink:"/v4.23/operators/summarize",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/operators/summarize.md",tags:[],version:"v4.23",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"subscribe",permalink:"/v4.23/operators/subscribe"},next:{title:"tail",permalink:"/v4.23/operators/tail"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>[field=]aggregation</code>",id:"fieldaggregation",level:3},{value:"<code>by &lt;extractor&gt;</code>",id:"by-extractor",level:3},{value:"<code>resolution &lt;duration&gt;</code>",id:"resolution-duration",level:3},{value:"<code>timeout &lt;duration&gt;</code>",id:"timeout-duration",level:3},{value:"<code>update-timeout &lt;duration&gt;</code>",id:"update-timeout-duration",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},N="wrapper";function C(e){var n=e,{components:t}=n,r=d(n,["components"]);return(0,a.yg)(N,g(m(m({},b),r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",m({},{id:"summarize"}),"summarize"),(0,a.yg)("p",null,"Groups events and applies aggregate functions on each group."),(0,a.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"summarize <[field=]aggregation>... \n          [by <extractor>... [resolution <duration>]]\n          [timeout <duration>]\n          [update-timeout <duration>]\n")),(0,a.yg)("h2",m({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"summarize")," operator groups events according to a grouping expression and\napplies an aggregation function over each group. The operator consumes the\nentire input before producing an output."),(0,a.yg)("p",null,"Fields that neither occur in an aggregation function nor in the ",(0,a.yg)("inlineCode",{parentName:"p"},"by")," list\nare dropped from the output."),(0,a.yg)("h3",m({},{id:"fieldaggregation"}),(0,a.yg)("inlineCode",{parentName:"h3"},"[field=]aggregation")),(0,a.yg)("p",null,"Aggregation functions compute a single value of one or more columns in a given\ngroup. Syntactically, ",(0,a.yg)("inlineCode",{parentName:"p"},"aggregation")," has the form ",(0,a.yg)("inlineCode",{parentName:"p"},"f(x)")," where ",(0,a.yg)("inlineCode",{parentName:"p"},"f")," is the\naggregation function and ",(0,a.yg)("inlineCode",{parentName:"p"},"x")," is a field."),(0,a.yg)("p",null,"By default, the name for the new field ",(0,a.yg)("inlineCode",{parentName:"p"},"aggregation")," is its string\nrepresentation, e.g., ",(0,a.yg)("inlineCode",{parentName:"p"},"min(timestamp)"),". You can specify a different name by\nprepending a field assignment, e.g., ",(0,a.yg)("inlineCode",{parentName:"p"},"min_ts=min(timestamp)"),"."),(0,a.yg)("p",null,"The following aggregation functions are available:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"sum"),": Computes the sum of all grouped values."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"min"),": Computes the minimum of all grouped values."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"max"),": Computes the maximum of all grouped values."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"any"),": Computes the disjunction (OR) of all grouped values. Requires the\nvalues to be booleans."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"all"),": Computes the conjunction (AND) of all grouped values. Requires the\nvalues to be booleans."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"mean"),": Computes the mean of all grouped values."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"median"),": Computes the approximate median of all grouped values with a\nt-digest algorithm."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"p99"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"p95"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"p90"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"p75"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"p50"),": Computes the 99th, 95th, 90th, 75th, or\n50th percentile of all grouped values with a t-digest algorithm."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"stddev"),": Computes the standard deviation of all grouped values."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"variance"),": Computes the variance of all grouped values."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"distinct"),": Creates a sorted list of all unique grouped values that are not\nnull."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"collect"),": Creates a list of all grouped values that are not null."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"sample"),": Takes the first of all grouped values that is not null."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"count"),": Counts all grouped values that are not null."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"count_distinct"),": Counts all distinct grouped values that are not null.")),(0,a.yg)("h3",m({},{id:"by-extractor"}),(0,a.yg)("inlineCode",{parentName:"h3"},"by <extractor>")),(0,a.yg)("p",null,"The extractors specified after the optional ",(0,a.yg)("inlineCode",{parentName:"p"},"by")," clause partition the input into\ngroups. If ",(0,a.yg)("inlineCode",{parentName:"p"},"by")," is omitted, all events are assigned to the same group."),(0,a.yg)("h3",m({},{id:"resolution-duration"}),(0,a.yg)("inlineCode",{parentName:"h3"},"resolution <duration>")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"resolution")," option specifies an optional duration value that specifies the\ntolerance when comparing time values in the ",(0,a.yg)("inlineCode",{parentName:"p"},"by")," section. For example, ",(0,a.yg)("inlineCode",{parentName:"p"},"01:48"),"\nis rounded down to ",(0,a.yg)("inlineCode",{parentName:"p"},"01:00")," when a 1-hour ",(0,a.yg)("inlineCode",{parentName:"p"},"resolution")," is used."),(0,a.yg)("p",null,"NB: we introduced the ",(0,a.yg)("inlineCode",{parentName:"p"},"resolution")," option as a stop-gap measure to compensate for\nthe lack of a rounding function. The ability to apply functions in the grouping\nexpression will replace this option in the future."),(0,a.yg)("h3",m({},{id:"timeout-duration"}),(0,a.yg)("inlineCode",{parentName:"h3"},"timeout <duration>")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"timeout")," option specifies how long an aggregation may take, measured per\ngroup in the ",(0,a.yg)("inlineCode",{parentName:"p"},"by")," section from when the group is created, or if no group exists\nfrom the time when first event arrived at the operator."),(0,a.yg)("p",null,"If values occur again after the timeout, a new group with an independent\naggregation will be created."),(0,a.yg)("h3",m({},{id:"update-timeout-duration"}),(0,a.yg)("inlineCode",{parentName:"h3"},"update-timeout <duration>")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"update-timeout")," functions just like the ",(0,a.yg)("inlineCode",{parentName:"p"},"timeout")," option, but instead of\nmeasuring from the first event of a group the timeout refreshes whenever an\nelement is added to a group."),(0,a.yg)("h2",m({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Group the input by ",(0,a.yg)("inlineCode",{parentName:"p"},"src_ip")," and aggregate all unique ",(0,a.yg)("inlineCode",{parentName:"p"},"dest_port")," values into a\nlist:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"summarize distinct(dest_port) by src_ip\n")),(0,a.yg)("p",null,"Same as above, but produce a count of the unique number of values instead of a\nlist:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"summarize count_distinct(dest_port) by src_ip\n")),(0,a.yg)("p",null,"Compute minimum, maximum of the ",(0,a.yg)("inlineCode",{parentName:"p"},"timestamp")," field per ",(0,a.yg)("inlineCode",{parentName:"p"},"src_ip")," group:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"summarize min(timestamp), max(timestamp) by src_ip\n")),(0,a.yg)("p",null,"Compute minimum, maximum of the ",(0,a.yg)("inlineCode",{parentName:"p"},"timestamp")," field over all events:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"summarize min(timestamp), max(timestamp)\n")),(0,a.yg)("p",null,"Create a boolean flag ",(0,a.yg)("inlineCode",{parentName:"p"},"originator")," that is ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," if any value in the group is\n",(0,a.yg)("inlineCode",{parentName:"p"},"true"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"summarize originator=any(is_orig) by src_ip\n")),(0,a.yg)("p",null,"Create 1-hour groups and produce a summary of network traffic between host\npairs:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"summarize sum(bytes_in), sum(bytes_out) by ts, src_ip, dest_ip resolution 1 hour\n")))}C.isMDXComponent=!0}}]);