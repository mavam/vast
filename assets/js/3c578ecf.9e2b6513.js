"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58087],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},y=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=i(n),u=r,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||p;return n?t.createElement(d,l(l({ref:a},y),{},{components:n})):t.createElement(d,l({ref:a},y))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10483:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>f,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>N,toc:()=>F});var t=n(15680),r=Object.defineProperty,p=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&y(e,n,a[n]);if(o)for(var n of o(a))i.call(a,n)&&y(e,n,a[n]);return e},m=(e,a)=>p(e,l(a)),u=(e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const d={},c="summarize",N={unversionedId:"tql2/operators/summarize",id:"version-v4.22/tql2/operators/summarize",title:"summarize",description:"Groups events and applies aggregate functions to each group.",source:"@site/versioned_docs/version-v4.22/tql2/operators/summarize.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/summarize",permalink:"/tql2/operators/summarize",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/summarize.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"subscribe",permalink:"/tql2/operators/subscribe"},next:{title:"tail",permalink:"/tql2/operators/tail"}},f={},F=[{value:"Description",id:"description",level:2},{value:"<code>group</code>",id:"group",level:3},{value:"<code>aggregation</code>",id:"aggregation",level:3},{value:"Examples",id:"examples",level:2}],h={toc:F},E="wrapper";function b(e){var a=e,{components:n}=a,r=u(a,["components"]);return(0,t.yg)(E,m(g(g({},h),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",g({},{id:"summarize"}),"summarize"),(0,t.yg)("p",null,"Groups events and applies aggregate functions to each group."),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," (group"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"|"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"aggregation)"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"..."))))),(0,t.yg)("h2",g({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"summarize")," operator groups events according to certain fields and applies\naggregation functions to each group. The operator consumes the entire input\nbefore producing any output."),(0,t.yg)("p",null,"The order of the output fields follows the sequence of the provided arguments.\nUnspecified fields are dropped."),(0,t.yg)("admonition",g({},{title:"Potentially High Memory Usage",type:"note"}),(0,t.yg)("p",{parentName:"admonition"},"Take care when using this operator with large inputs.")),(0,t.yg)("h3",g({},{id:"group"}),(0,t.yg)("inlineCode",{parentName:"h3"},"group")),(0,t.yg)("p",null,"To group by a certain field, use the syntax ",(0,t.yg)("inlineCode",{parentName:"p"},"<field>")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"<field>=<field>"),". For\neach unique combination of the ",(0,t.yg)("inlineCode",{parentName:"p"},"group")," fields, a single output event will be\nreturned."),(0,t.yg)("h3",g({},{id:"aggregation"}),(0,t.yg)("inlineCode",{parentName:"h3"},"aggregation")),(0,t.yg)("p",null,"The aggregation functions applied to each group are specified with ",(0,t.yg)("inlineCode",{parentName:"p"},"f(\u2026)")," or\n",(0,t.yg)("inlineCode",{parentName:"p"},"<field>=f(\u2026)"),", where ",(0,t.yg)("inlineCode",{parentName:"p"},"f")," is the name of an aggregation function (see below) and\n",(0,t.yg)("inlineCode",{parentName:"p"},"<field>")," is an optional name for the result. The aggregation function will\nproduce a single result for each group."),(0,t.yg)("p",null,"If no name is specified, it will be automatically generated from the aggregation\nfunction call. If processing continues after ",(0,t.yg)("inlineCode",{parentName:"p"},"summarize"),", it is strongly\nrecommended to specify a custom name."),(0,t.yg)("p",null,"The following aggregation functions are available and, unless specified\ndifferently, take exactly one argument:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"sum"),": Computes the sum of all grouped values."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"min"),": Computes the minimum of all grouped values."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"max"),": Computes the maximum of all grouped values."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"any"),": Computes the disjunction (OR) of all grouped values. Requires the\nvalues to be booleans."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"all"),": Computes the conjunction (AND) of all grouped values. Requires the\nvalues to be booleans."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"first"),": Takes the first of all grouped values that is not null."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"last"),": Takes the last of all grouped values that is not null."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"mean"),": Computes the mean of all grouped values."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"median"),": Computes the approximate median of all grouped values with a\nt-digest algorithm."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"mode"),": Takes the most common of all grouped values that is not null."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"quantile"),": Computes the quantile specified by the named argument ",(0,t.yg)("inlineCode",{parentName:"li"},"q"),", for\nexample: ",(0,t.yg)("inlineCode",{parentName:"li"},"quantile(x, q=0.2)"),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"stddev"),": Computes the standard deviation of all grouped values."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"variance"),": Computes the variance of all grouped values."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"distinct"),": Creates a sorted list without duplicates of all grouped values\nthat are not null."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"collect"),": Creates a list of all grouped values that are not null, preserving\nduplicates."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"count"),": When used as ",(0,t.yg)("inlineCode",{parentName:"li"},"count()"),", simply counts the events in the group. When\nused as ",(0,t.yg)("inlineCode",{parentName:"li"},"count(x)"),", counts all grouped values that are not null."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"count_distinct"),": Counts all distinct grouped values that are not null.")),(0,t.yg)("h2",g({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Compute the sum of ",(0,t.yg)("inlineCode",{parentName:"p"},"x")," over all events:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [{x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}, {x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}]")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x)")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"Group over ",(0,t.yg)("inlineCode",{parentName:"p"},"y")," and compute the sum of ",(0,t.yg)("inlineCode",{parentName:"p"},"x")," for each group:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," [")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", y"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", z"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", y"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", z"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  {x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", y"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", z"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 3"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"},")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," y, x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x)")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{y"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 0"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{y"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 1"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", x"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}})," 2"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"Group the input by ",(0,t.yg)("inlineCode",{parentName:"p"},"src_ip")," and aggregate all unique ",(0,t.yg)("inlineCode",{parentName:"p"},"dest_port")," values into a\nlist:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip, "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"distinct"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(dest_port)"))))),(0,t.yg)("p",null,"Same as above, but produce a count of the unique number of values instead of a\nlist:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip, "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"count_distinct"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(dest_port)"))))),(0,t.yg)("p",null,"Compute minimum and maximum of the ",(0,t.yg)("inlineCode",{parentName:"p"},"timestamp")," field per ",(0,t.yg)("inlineCode",{parentName:"p"},"src_ip")," group:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}})," min"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(timestamp), "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"max"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(timestamp), src_ip"))))),(0,t.yg)("p",null,"Compute minimum and maximum of the ",(0,t.yg)("inlineCode",{parentName:"p"},"timestamp")," field over all events:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}})," min"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(timestamp), "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"max"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(timestamp)"))))),(0,t.yg)("p",null,"Create a boolean flag ",(0,t.yg)("inlineCode",{parentName:"p"},"originator")," that is ",(0,t.yg)("inlineCode",{parentName:"p"},"true")," if any value in the ",(0,t.yg)("inlineCode",{parentName:"p"},"src_ip"),"\ngroup is ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),":"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," src_ip, originator"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"any"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(is_orig)"))))),(0,t.yg)("p",null,"Create 1-hour groups and produce a summary of network traffic between host\npairs:"),(0,t.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"ts "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}})," round"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(ts, "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1h"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),")")),"\n",(0,t.yg)("span",g({parentName:"code"},{"data-line":""}),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," ts, src_ip, dest_ip, "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(bytes_in), "),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,t.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(bytes_out)"))))))}b.isMDXComponent=!0}}]);