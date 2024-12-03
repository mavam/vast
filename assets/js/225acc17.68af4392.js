"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30903],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>d});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),i=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=i(e.components);return r.createElement(s.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=i(t),m=n,d=g["".concat(s,".").concat(m)]||g[m]||y[m]||l;return t?r.createElement(d,p(p({ref:a},c),{},{components:t})):r.createElement(d,p({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,p=new Array(l);p[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[g]="string"==typeof e?e:n,p[1]=o;for(var i=2;i<l;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76763:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>f,toc:()=>N});var r=t(15680),n=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&c(e,t,a[t]);if(o)for(var t of o(a))i.call(a,t)&&c(e,t,a[t]);return e},y=(e,a)=>l(e,p(a)),m=(e,a)=>{var t={};for(var r in e)s.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))a.indexOf(r)<0&&i.call(e,r)&&(t[r]=e[r]);return t};const d={},u="replace_regex",f={unversionedId:"tql2/functions/replace_regex",id:"version-v4.23/tql2/functions/replace_regex",title:"replace_regex",description:"Replaces characters within a string based on a regular expression.",source:"@site/versioned_docs/version-v4.23/tql2/functions/replace_regex.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/replace_regex",permalink:"/v4.23/tql2/functions/replace_regex",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/replace_regex.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"replace",permalink:"/v4.23/tql2/functions/replace"},next:{title:"reverse",permalink:"/v4.23/tql2/functions/reverse"}},h={},N=[{value:"Description",id:"description",level:2},{value:"<code>x: string</code>",id:"x-string",level:3},{value:"<code>pattern: string</code>",id:"pattern-string",level:3},{value:"<code>replacement: string</code>",id:"replacement-string",level:3},{value:"<code>max = string (optional)</code>",id:"max--string-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Replace all matches of a regular expression",id:"replace-all-matches-of-a-regular-expression",level:3},{value:"Replace a limited number of matches",id:"replace-a-limited-number-of-matches",level:3},{value:"See Also",id:"see-also",level:2}],F={toc:N},b="wrapper";function v(e){var a=e,{components:t}=a,n=m(a,["components"]);return(0,r.yg)(b,y(g(g({},F),n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",g({},{id:"replace_regex"}),"replace_regex"),(0,r.yg)("p",null,"Replaces characters within a string based on a regular expression."),(0,r.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",g({parentName:"code"},{"data-line":""}),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"replace_regex"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"(x"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, pattern"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, replacement"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"string, [max"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"int]) "),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}})," string"))))),(0,r.yg)("h2",g({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"replace_regex")," function returns a new string where substrings in ",(0,r.yg)("inlineCode",{parentName:"p"},"x")," that\nmatch ",(0,r.yg)("inlineCode",{parentName:"p"},"pattern")," are replaced with ",(0,r.yg)("inlineCode",{parentName:"p"},"replacement"),", up to ",(0,r.yg)("inlineCode",{parentName:"p"},"max")," times. If ",(0,r.yg)("inlineCode",{parentName:"p"},"max")," is\nomitted, all matches are replaced."),(0,r.yg)("h3",g({},{id:"x-string"}),(0,r.yg)("inlineCode",{parentName:"h3"},"x: string")),(0,r.yg)("p",null,"The subject to replace the action on."),(0,r.yg)("h3",g({},{id:"pattern-string"}),(0,r.yg)("inlineCode",{parentName:"h3"},"pattern: string")),(0,r.yg)("p",null,"The pattern (as regular expression) to replace in ",(0,r.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,r.yg)("h3",g({},{id:"replacement-string"}),(0,r.yg)("inlineCode",{parentName:"h3"},"replacement: string")),(0,r.yg)("p",null,"The replacement value for ",(0,r.yg)("inlineCode",{parentName:"p"},"pattern"),"."),(0,r.yg)("h3",g({},{id:"max--string-optional"}),(0,r.yg)("inlineCode",{parentName:"h3"},"max = string (optional)")),(0,r.yg)("p",null,"The maximum number of replacements to perform."),(0,r.yg)("h2",g({},{id:"examples"}),"Examples"),(0,r.yg)("h3",g({},{id:"replace-all-matches-of-a-regular-expression"}),"Replace all matches of a regular expression"),(0,r.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",g({parentName:"code"},{"data-line":""}),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}})," replace_regex"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"hello"'),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"l+"'),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"y"'),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),")}"))))),(0,r.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",g({parentName:"code"},{"data-line":""}),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "heyo"'),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,r.yg)("h3",g({},{id:"replace-a-limited-number-of-matches"}),"Replace a limited number of matches"),(0,r.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",g({parentName:"code"},{"data-line":""}),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}})," replace_regex"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"hellolo"'),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"l+"'),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),'"y"'),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", max"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#79C0FF"}}),"1"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),")}"))))),(0,r.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",g({parentName:"code"},{"data-line":""}),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "heyolo"'),(0,r.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,r.yg)("h2",g({},{id:"see-also"}),"See Also"),(0,r.yg)("p",null,(0,r.yg)("a",g({parentName:"p"},{href:"/v4.23/tql2/functions/replace"}),(0,r.yg)("inlineCode",{parentName:"a"},"replace"))))}v.isMDXComponent=!0}}]);