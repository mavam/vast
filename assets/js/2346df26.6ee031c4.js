"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32206],{15680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>i});var t=n(96540);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=t.createContext({}),y=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},g=function(e){var a=y(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=y(n),d=p,i=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?t.createElement(i,s(s({ref:a},g),{},{components:n})):t.createElement(i,s({ref:a},g))}));function i(e,a){var n=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:p,s[1]=o;for(var y=2;y<r;y++)s[y]=n[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12883:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>F,contentTitle:()=>E,default:()=>b,frontMatter:()=>i,metadata:()=>N,toc:()=>u});var t=n(15680),p=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&g(e,n,a[n]);if(o)for(var n of o(a))y.call(a,n)&&g(e,n,a[n]);return e},m=(e,a)=>r(e,s(a)),d=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&y.call(e,t)&&(n[t]=e[t]);return n};const i={sidebar_custom_props:{operator:{transformation:!0}}},E="flatten",N={unversionedId:"operators/flatten",id:"version-v4.23/operators/flatten",title:"flatten",description:"Flattens nested data.",source:"@site/versioned_docs/version-v4.23/operators/flatten.md",sourceDirName:"operators",slug:"/operators/flatten",permalink:"/v4.23/operators/flatten",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/operators/flatten.md",tags:[],version:"v4.23",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"files",permalink:"/v4.23/operators/files"},next:{title:"fluent-bit",permalink:"/v4.23/operators/fluent-bit"}},F={},u=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;separator&gt;</code>",id:"separator",level:3},{value:"Examples",id:"examples",level:2}],f={toc:u},D="wrapper";function b(e){var a=e,{components:n}=a,p=d(a,["components"]);return(0,t.yg)(D,m(c(c({},f),p),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"flatten"}),"flatten"),(0,t.yg)("p",null,"Flattens nested data."),(0,t.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,t.yg)("pre",null,(0,t.yg)("code",c({parentName:"pre"},{}),"flatten [<separator>]\n")),(0,t.yg)("h2",c({},{id:"description"}),"Description"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"flatten")," operator acts on ",(0,t.yg)("a",c({parentName:"p"},{href:"/v4.23/data-model/type-system"}),"container types"),":"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"Records"),": Join nested records with a separator (",(0,t.yg)("inlineCode",{parentName:"li"},".")," by default). For\nexample, if a field named ",(0,t.yg)("inlineCode",{parentName:"li"},"x")," is a record with fields ",(0,t.yg)("inlineCode",{parentName:"li"},"a")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"b"),", flattening\nwill lift the nested record into the parent scope by creating two new fields\n",(0,t.yg)("inlineCode",{parentName:"li"},"x.a")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"x.b"),"."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"Lists"),": Merge nested lists into a single (flat) list. For example,\n",(0,t.yg)("inlineCode",{parentName:"li"},"[[[2]], [[3, 1]], [[4]]]")," becomes ",(0,t.yg)("inlineCode",{parentName:"li"},"[2, 3, 1, 4]"),".")),(0,t.yg)("p",null,"For records inside lists, ",(0,t.yg)("inlineCode",{parentName:"p"},"flatten"),' "pushes lists down" into one list per record\nfield. For example, the record'),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "foo"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": [")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    },")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"4")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    }")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"becomes"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "foo.a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"],")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "foo.b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"Lists nested in records that are nested in lists will also be flattened. For\nexample, the record"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "foo"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": [")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": [")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"        ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"23"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"],")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"        ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),","),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"16"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"      ],")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    },")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": [["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"4"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    }")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"becomes"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "foo.a"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": [")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"    2"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"    23"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"    1"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"    16"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"    4")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ],")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "foo.b"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": [")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"    1")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  ]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"As you can see from the above examples, flattening also removes ",(0,t.yg)("inlineCode",{parentName:"p"},"null")," values."),(0,t.yg)("h3",c({},{id:"separator"}),(0,t.yg)("inlineCode",{parentName:"h3"},"<separator>")),(0,t.yg)("p",null,"The separator string to join the field names of nested records."),(0,t.yg)("p",null,"Defaults to ",(0,t.yg)("inlineCode",{parentName:"p"},"."),"."),(0,t.yg)("h2",c({},{id:"examples"}),"Examples"),(0,t.yg)("p",null,"Consider the following record:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "src_ip"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "src_port"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1141"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dest_ip"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.80.9"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dest_port"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"53"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "event_type"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"dns"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "type"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"query"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "id"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"553"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "rrname"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"irc.freenode.net"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "rrtype"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"A"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "tx_id"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'    "grouped"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": {")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'      "A"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"tenzir.com"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"null"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"    }")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"After ",(0,t.yg)("inlineCode",{parentName:"p"},"flatten")," the record looks as follows:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "src_ip"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.84.165"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "src_port"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1141"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dest_ip"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"147.32.80.9"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dest_port"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"53"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "event_type"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"dns"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.type"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"query"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.id"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"553"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.rrname"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"irc.freenode.net"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.rrtype"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"A"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.tx_id"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"0"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),'  "dns.grouped.A"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"tenzir.com"'),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null," Note that ",(0,t.yg)("inlineCode",{parentName:"p"},"dns.grouped.A")," no longer contains a ",(0,t.yg)("inlineCode",{parentName:"p"},"null")," value."))}b.isMDXComponent=!0}}]);