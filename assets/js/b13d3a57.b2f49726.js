"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88885],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},y=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),c=i(t),g=r,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||s;return t?n.createElement(m,o(o({ref:a},y),{},{components:t})):n.createElement(m,o({ref:a},y))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=g;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<s;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},62273:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>f,toc:()=>N});var n=t(15680),r=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&y(e,t,a[t]);if(p)for(var t of p(a))i.call(a,t)&&y(e,t,a[t]);return e},d=(e,a)=>s(e,o(a)),g=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_position:1},u="Statements",f={unversionedId:"tql2/language/statements",id:"version-v4.22/tql2/language/statements",title:"Statements",description:"TQL programs are structured as a sequence of operators that perform various functions on data streams. Each operator can be thought of as a modular unit that processes data and can be combined with other operators to create complex workflows.",source:"@site/versioned_docs/version-v4.22/tql2/language/statements.md",sourceDirName:"tql2/language",slug:"/tql2/language/statements",permalink:"/v4.22/tql2/language/statements",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/language/statements.md",tags:[],version:"v4.22",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"TQL2 Migration",permalink:"/v4.22/tql2-migration"},next:{title:"Expressions",permalink:"/v4.22/tql2/language/expressions"}},h={},N=[{value:"Operator",id:"operator",level:2},{value:"Assignment",id:"assignment",level:2},{value:"<code>if</code>",id:"if",level:2},{value:"<code>let</code>",id:"let",level:2}],F={toc:N},b="wrapper";function v(e){var a=e,{components:t}=a,r=g(a,["components"]);return(0,n.yg)(b,d(c(c({},F),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",c({},{id:"statements"}),"Statements"),(0,n.yg)("p",null,"TQL programs are structured as a sequence of operators that perform various functions on data streams. Each operator can be thought of as a modular unit that processes data and can be combined with other operators to create complex workflows."),(0,n.yg)("h2",c({},{id:"operator"}),"Operator"),(0,n.yg)("p",null,"Operator statements consist of the operator name, followed by an arbitrary number of arguments. Arguments are delimited by commas and may optionally be enclosed in parentheses. If the last argument is a pipeline expression, the preceding comma can be omitted for brevity."),(0,n.yg)("p",null,"Arguments can be specified in two ways: they can be positional, where the order matters, or named, where each argument is explicitly associated with a parameter name. Furthermore, arguments can be classified as required or optional. Some operators expect constant values, while others are designed to accept runtime values."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"select"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," foo, bar"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"baz")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"drop"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," qux")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"head"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 42")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"sort"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," abs"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x)"))))),(0,n.yg)("h2",c({},{id:"assignment"}),"Assignment"),(0,n.yg)("p",null,"An assignment statement in TQL is structured as ",(0,n.yg)("inlineCode",{parentName:"p"},"<place> = <expression>"),", where ",(0,n.yg)("inlineCode",{parentName:"p"},"<place>")," typically refers to a field or item of a list. If the specified place already exists, the assignment will overwrite its current value. If it does not exist, a new field will be created."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"<place>")," can also reference a field path. For example, the statement ",(0,n.yg)("inlineCode",{parentName:"p"},"foo.bar = 42")," assigns the value 42 to the field ",(0,n.yg)("inlineCode",{parentName:"p"},"bar")," within the record ",(0,n.yg)("inlineCode",{parentName:"p"},"foo"),". If ",(0,n.yg)("inlineCode",{parentName:"p"},"foo")," is not a record or does not exist before, it will be set to a record containing just the field ",(0,n.yg)("inlineCode",{parentName:"p"},"bar"),"."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"category_name "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Network Activity"')),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"type_uid "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," class_uid "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"*"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 100"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," +"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," activity_id")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"traffic"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bytes_out "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," event"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"sent_bytes"))))),(0,n.yg)("h2",c({},{id:"if"}),(0,n.yg)("inlineCode",{parentName:"h2"},"if")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"if")," statement is a primitive designed to route data based on a predicate. Its typical usage follows the syntax ",(0,n.yg)("inlineCode",{parentName:"p"},"if <expression> { \u2026 } else { \u2026 }"),", where two subpipelines are specified within the braces. When its expression evaluates to ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", the first pipeline processes the event. Conversely, when it evaluates to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),", it is routed through the second one."),(0,n.yg)("p",null,"After the ",(0,n.yg)("inlineCode",{parentName:"p"},"if")," statement the event flow from both pipelines is joined together. The ",(0,n.yg)("inlineCode",{parentName:"p"},"else")," clause can be omitted, resulting in the syntax ",(0,n.yg)("inlineCode",{parentName:"p"},"if <expression> { \u2026 }"),", which has the same behavior as ",(0,n.yg)("inlineCode",{parentName:"p"},"if <expression> { \u2026 } else {}"),". Additionally, the ",(0,n.yg)("inlineCode",{parentName:"p"},"else")," keyword can be followed by another ",(0,n.yg)("inlineCode",{parentName:"p"},"if")," statement, allowing for chained ",(0,n.yg)("inlineCode",{parentName:"p"},"if")," statements. This chaining can be repeated, enabling complex conditional logic to be implemented."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"if"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," score "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"<"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 100"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  severity "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "medium"')),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"  drop"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," details")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"} "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"else"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  severity "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "high"')),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",c({},{id:"let"}),(0,n.yg)("inlineCode",{parentName:"h2"},"let")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"let")," statement binds a constant to a specific name within the pipeline's scope. The syntax for a ",(0,n.yg)("inlineCode",{parentName:"p"},"let")," statement is ",(0,n.yg)("inlineCode",{parentName:"p"},"let $<identifier> = <expression>"),". For instance, ",(0,n.yg)("inlineCode",{parentName:"p"},"let $meaning = 42")," creates a constant ",(0,n.yg)("inlineCode",{parentName:"p"},"$meaning")," that holds the value 42."),(0,n.yg)("p",null,"More complex expressions can also be assigned, such as ",(0,n.yg)("inlineCode",{parentName:"p"},"let $start = now() - 1h"),", which binds ",(0,n.yg)("inlineCode",{parentName:"p"},"$start")," to a value representing one hour before the pipeline was started. Constants defined with ",(0,n.yg)("inlineCode",{parentName:"p"},"let")," can be referenced in subsequent statements, including other ",(0,n.yg)("inlineCode",{parentName:"p"},"let")," statements. For example, ",(0,n.yg)("inlineCode",{parentName:"p"},"let $end = $start + 30min")," can be used to define ",(0,n.yg)("inlineCode",{parentName:"p"},"$end")," depending on the value of ",(0,n.yg)("inlineCode",{parentName:"p"},"$start"),"."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"let"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $meaning"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 42")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"let"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $start"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," now"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"() "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 1h")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"let"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $end"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," $start"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," +"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," 30min"))))))}v.isMDXComponent=!0}}]);