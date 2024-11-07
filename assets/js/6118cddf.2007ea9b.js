"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4984],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),y=p(a),s=r,c=y["".concat(o,".").concat(s)]||y[s]||m[s]||i;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[y]="string"==typeof e?e:r,l[1]=g;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},24714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>w,frontMatter:()=>c,metadata:()=>N,toc:()=>h});var n=a(15680),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(g)for(var a of g(t))p.call(t,a)&&d(e,a,t[a]);return e},m=(e,t)=>i(e,l(t)),s=(e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&g)for(var n of g(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const c={sidebar_custom_props:{experimental:!0}},u="TQL2 Migration",N={unversionedId:"tql2-migration",id:"version-v4.22/tql2-migration",title:"TQL2 Migration",description:"This page answers the most frequently asked questions about TQL2.",source:"@site/versioned_docs/version-v4.22/tql2-migration.md",sourceDirName:".",slug:"/tql2-migration",permalink:"/v4.22/tql2-migration",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2-migration.md",tags:[],version:"v4.22",frontMatter:{sidebar_custom_props:{experimental:!0}},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/v4.22/troubleshooting"},next:{title:"Statements",permalink:"/v4.22/tql2/language/statements"}},f={},h=[{value:"What is TQL2?",id:"what-is-tql2",level:3},{value:"How do I use TQL2?",id:"how-do-i-use-tql2",level:3},{value:"Why create an all-new language?",id:"why-create-an-all-new-language",level:3},{value:"Can I mix-and-match TQL1 and TQL2?",id:"can-i-mix-and-match-tql1-and-tql2",level:3},{value:"Where can I find the TQL2 reference?",id:"where-can-i-find-the-tql2-reference",level:3},{value:"When should I upgrade?",id:"when-should-i-upgrade",level:3},{value:"Where can I give feedback about TQL2?",id:"where-can-i-give-feedback-about-tql2",level:3},{value:"What features does TQL2 currently support?",id:"what-features-does-tql2-currently-support",level:3}],b={toc:h},v="wrapper";function w(e){var t=e,{components:a}=t,r=s(t,["components"]);return(0,n.yg)(v,m(y(y({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"tql2-migration"}),"TQL2 Migration"),(0,n.yg)("p",null,"This page answers the most frequently asked questions about TQL2."),(0,n.yg)("h3",y({},{id:"what-is-tql2"}),"What is TQL2?"),(0,n.yg)("p",null,"TQL2 is the next generation of the Tenzir Query Language for writing pipelines."),(0,n.yg)("h3",y({},{id:"how-do-i-use-tql2"}),"How do I use TQL2?"),(0,n.yg)("p",null,"Start your pipeline with a ",(0,n.yg)("inlineCode",{parentName:"p"},"// tql2")," comment to opt into using the new language.\nThis is supported for Tenzir v4.19 or newer."),(0,n.yg)("h3",y({},{id:"why-create-an-all-new-language"}),"Why create an all-new language?"),(0,n.yg)("p",null,"TQL1 has grown historically. Over time, we identified the following shortcomings\nthat TQL2 fixes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Lack of composable expressions, in particular functions and arithmetic\noperations."),(0,n.yg)("li",{parentName:"ul"},"Absence of nested pipelines, which was partially worked around with\noperator modifiers."),(0,n.yg)("li",{parentName:"ul"},"Context-dependent grammar for operators that was unintuitive for users, and\nclose to impossible to parse and syntax-highlight."),(0,n.yg)("li",{parentName:"ul"},"Inability to define constants with ",(0,n.yg)("inlineCode",{parentName:"li"},"let"),", and also soon types, functions, and\ncustom operators within the pipeline definition directly."),(0,n.yg)("li",{parentName:"ul"},"Lack of control flow within a pipeline like ",(0,n.yg)("inlineCode",{parentName:"li"},"if { \u2026 } else { \u2026 }")," made it\nunnecessarily hard to work with your data.")),(0,n.yg)("h3",y({},{id:"can-i-mix-and-match-tql1-and-tql2"}),"Can I mix-and-match TQL1 and TQL2?"),(0,n.yg)("p",null,"Yes! The ",(0,n.yg)("inlineCode",{parentName:"p"},"legacy")," operator takes a string as an argument that is parsed as a\nTQL1 pipeline and then replaces itself with it. For example:"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),'// tql2\nexport\nwhere @name == "zeek.notice"\n// The `top` operator is not yet available in TQL2, so we fall back to TQL1.\nlegacy "top msg"\n')),(0,n.yg)("h3",y({},{id:"where-can-i-find-the-tql2-reference"}),"Where can I find the TQL2 reference?"),(0,n.yg)("p",null,"Hang tight! We're in the process of writing a TQL2 reference, and aim to make it\navailable soon. Until then, you can find all available operators and functions\nin TQL2 via ",(0,n.yg)("inlineCode",{parentName:"p"},"show plugins"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),'show plugins\n| unroll types\n| put name, type=types\n| where "tql2" in type\n')),(0,n.yg)("h3",y({},{id:"when-should-i-upgrade"}),"When should I upgrade?"),(0,n.yg)("p",null,"We do not recommend upgrading production deployments yet, but encourage playing\nwith TQL2 to get a feel for it and to report any missing things that you may\nneed."),(0,n.yg)("h3",y({},{id:"where-can-i-give-feedback-about-tql2"}),"Where can I give feedback about TQL2?"),(0,n.yg)("p",null,"Head over to the ",(0,n.yg)("inlineCode",{parentName:"p"},"#developers")," channel in our ",(0,n.yg)("a",y({parentName:"p"},{href:"/discord"}),"community Discord"),"."),(0,n.yg)("h3",y({},{id:"what-features-does-tql2-currently-support"}),"What features does TQL2 currently support?"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",y({parentName:"tr"},{align:"center"}),"Status"),(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Explanation"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"(mostly) complete")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\ud83d\udd27"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"in progress")))),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",y({parentName:"tr"},{align:"right"}),"Feature"),(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Example"),(0,n.yg)("th",y({parentName:"tr"},{align:"center"}),"Status"),(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Comments"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Simple assignment"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},'conn.test = "done"')),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"Insert-or-replace semantics")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Statement separation"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"newline or ",(0,n.yg)("code",null,"|")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Dynamic field names"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"object[expr]")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\ud83d\udd27"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Arbitrary field names"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},'this["@!?$#"]')),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Conditionals"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"if foo == 42 {...} else {...}")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Pattern matching"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},'match proto { "UDP" => ..., "TCP" => ... }')),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\ud83d\udd27"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"High performance"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"})),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"Columnar computation engine")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Object expression"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"{ foo: 1, bar.baz.qux: 2 }")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"Field names can also be strings")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"List expression"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"[1, 2, null, 4]")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Functions/methods"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},'foo(bar) && baz.starts_with("bar")')),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Named arguments"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"foo.bar(baz=1, qux=2)")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Arithmetic operators"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"a + b / c < d - e")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"Also works with durations, etc.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Event metadata"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},'where @name == "something"')),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Constant bindings"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("code",null,"let $bad_ip = 1.2.3.4 ","|"," search $bad_ip")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Domain types"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"src in 255.0.0.0/24 && duration > 2min")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"ip"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"subnet"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"duration"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"time"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"blob"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Nested pipelines"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"group protocol {...}"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"every 1h {...}")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\ud83d\udd27"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Spread operator"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"{...foo, bar: [42, ...baz, qux]}")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"Can expand objects and lists")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Packages"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"my_package::my_function(foo)")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\ud83d\udd27"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"OCSF functionality"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"ocsf::validate"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"ocsf::class_uid")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\ud83d\udd27"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Type definitions"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"type flow = {src: ip, dst: ip}")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\ud83d\udd27"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Escape hatches"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("code",null,'python "..." ',"|",' js "..."')),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\ud83d\udd27"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Secrets"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},'secret("MY_SECRET")')),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\ud83d\udd27"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Function definitions"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"fn my_function(...) { ... }")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\ud83d\udd27"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"right"}),"Multi-stage parsing"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"msg.parse_json().content.parse_cef()")),(0,n.yg)("td",y({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}))))))}w.isMDXComponent=!0}}]);