"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28723],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=g(a),m=r,c=s["".concat(p,".").concat(m)]||s[m]||y[m]||i;return a?n.createElement(c,o(o({ref:t},d),{},{components:a})):n.createElement(c,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<i;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},24066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>f,default:()=>C,frontMatter:()=>c,metadata:()=>N,toc:()=>h});var n=a(15680),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))g.call(t,a)&&d(e,a,t[a]);return e},y=(e,t)=>i(e,o(t)),m=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&g.call(e,n)&&(a[n]=e[n]);return a};const c={},f="diagnostics",N={unversionedId:"tql2/operators/diagnostics",id:"version-v4.22/tql2/operators/diagnostics",title:"diagnostics",description:"Retrieves diagnostic events from a Tenzir node.",source:"@site/versioned_docs/version-v4.22/tql2/operators/diagnostics.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/diagnostics",permalink:"/tql2/operators/diagnostics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/diagnostics.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"delay",permalink:"/tql2/operators/delay"},next:{title:"discard",permalink:"/tql2/operators/discard"}},u={},h=[{value:"Description",id:"description",level:2},{value:"<code>live = bool (optional)</code>",id:"live--bool-optional",level:3},{value:"<code>retro = bool (optional)</code>",id:"retro--bool-optional",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.diagnostic</code>",id:"tenzirdiagnostic",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},v="wrapper";function C(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.yg)(v,y(s(s({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",s({},{id:"diagnostics"}),"diagnostics"),(0,n.yg)("p",null,"Retrieves diagnostic events from a Tenzir node."),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"diagnostics"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," [live"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, retro"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,n.yg)("h2",s({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"diagnostics")," operator retrieves diagnostic events from a Tenzir\nnode."),(0,n.yg)("h3",s({},{id:"live--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"live = bool (optional)")),(0,n.yg)("p",null,"If ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", emits diagnostic events as they are generated in real-time. Unless\n",(0,n.yg)("inlineCode",{parentName:"p"},"retro=true")," is also given, this makes it so that previous diagnostics events\nare not returned."),(0,n.yg)("h3",s({},{id:"retro--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"retro = bool (optional)")),(0,n.yg)("p",null,"Return diagnostic events that were generated in the past. Unless ",(0,n.yg)("inlineCode",{parentName:"p"},"live=true")," is\ngiven, this is the default. If both are set to ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", all previous events are\nreturned before beginning with the live events."),(0,n.yg)("h2",s({},{id:"schemas"}),"Schemas"),(0,n.yg)("p",null,"Tenzir emits diagnostic information with the following schema:"),(0,n.yg)("h3",s({},{id:"tenzirdiagnostic"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tenzir.diagnostic")),(0,n.yg)("p",null,"Contains detailed information about the diagnostic."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"pipeline_id")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The ID of the pipeline that created the diagnostic.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"run")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The number of the run, starting at 1 for the first run.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"timestamp")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"time")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The exact timestamp of the diagnostic creation.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"message")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The diagnostic message.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"severity")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The diagnostic severity.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"notes")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"list<record>")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The diagnostic notes. Can be empty.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"annotations")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"list<record>")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The diagnostic annotations. Can be empty.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"rendered")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The rendered diagnostic, as printed on the command-line.")))),(0,n.yg)("p",null,"The records in ",(0,n.yg)("inlineCode",{parentName:"p"},"notes")," have the following schema:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"kind")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The kind of note, which is ",(0,n.yg)("inlineCode",{parentName:"td"},"note"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"usage"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"hint")," or ",(0,n.yg)("inlineCode",{parentName:"td"},"docs"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"message")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The message of this note.")))),(0,n.yg)("p",null,"The records in ",(0,n.yg)("inlineCode",{parentName:"p"},"annotations")," have the following schema:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"primary")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"True if the ",(0,n.yg)("inlineCode",{parentName:"td"},"source")," represents the underlying reason for the diagnostic, false if it is only related to it.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"text")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"A message for explanations. Can be empty.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"source")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The character range in the pipeline string that this annotation is associated to.")))),(0,n.yg)("h2",s({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"View all diagnostics generated in the past five minutes."),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"diagnostics")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," timestamp "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),">"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}})," now"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"() "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"-"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#79C0FF"}})," 5min"))))),(0,n.yg)("p",null,"Get a live feed of error diagnostics as they are emitted."),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"diagnostics"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," live"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," severity "),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),' "error"'))))))}C.isMDXComponent=!0}}]);