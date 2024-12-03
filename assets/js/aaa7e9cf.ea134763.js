"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46756],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>c});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),g=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},d=function(e){var a=g(e.components);return n.createElement(i.Provider,{value:a},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=g(t),m=r,c=s["".concat(i,".").concat(m)]||s[m]||y[m]||l;return t?n.createElement(c,p(p({ref:a},d),{},{components:t})):n.createElement(c,p({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[s]="string"==typeof e?e:r,p[1]=o;for(var g=2;g<l;g++)p[g]=t[g];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69171:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>N,default:()=>v,frontMatter:()=>c,metadata:()=>f,toc:()=>h});var n=t(15680),r=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,s=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&d(e,t,a[t]);if(o)for(var t of o(a))g.call(a,t)&&d(e,t,a[t]);return e},y=(e,a)=>l(e,p(a)),m=(e,a)=>{var t={};for(var n in e)i.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))a.indexOf(n)<0&&g.call(e,n)&&(t[n]=e[n]);return t};const c={},N="list",f={unversionedId:"tql2/operators/package/list",id:"version-v4.24/tql2/operators/package/list",title:"list",description:"Shows installed packages.",source:"@site/versioned_docs/version-v4.24/tql2/operators/package/list.md",sourceDirName:"tql2/operators/package",slug:"/tql2/operators/package/list",permalink:"/tql2/operators/package/list",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/package/list.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"add",permalink:"/tql2/operators/package/add"},next:{title:"remove",permalink:"/tql2/operators/package/remove"}},u={},h=[{value:"Description",id:"description",level:2},{value:"<code>format = string (optional)</code>",id:"format--string-optional",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.package.compact</code>",id:"tenzirpackagecompact",level:3},{value:"<code>tenzir.package.extended</code>",id:"tenzirpackageextended",level:3},{value:"Examples",id:"examples",level:2},{value:"Show all installed packages",id:"show-all-installed-packages",level:3},{value:"See Also",id:"see-also",level:2}],b={toc:h},F="wrapper";function v(e){var a=e,{components:t}=a,r=m(a,["components"]);return(0,n.yg)(F,y(s(s({},b),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",s({},{id:"list"}),"list"),(0,n.yg)("p",null,"Shows installed packages."),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FFA657"}}),"package"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"list"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," [format"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"string]"))))),(0,n.yg)("h2",s({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"package::list")," operator returns the list of all installed packages."),(0,n.yg)("h3",s({},{id:"format--string-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"format = string (optional)")),(0,n.yg)("p",null,"Controls the output format. Valid options are ",(0,n.yg)("inlineCode",{parentName:"p"},"compact")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"extended"),"."),(0,n.yg)("p",null,"Defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"compact"),"."),(0,n.yg)("h2",s({},{id:"schemas"}),"Schemas"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"package::list")," operator produces two output formats, controlled by the\n",(0,n.yg)("inlineCode",{parentName:"p"},"format")," option:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"compact"),": succinct output in a human-readable format"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"extended"),": verbose output in a machine-readable format")),(0,n.yg)("p",null,"The formats generate the following schemas below."),(0,n.yg)("h3",s({},{id:"tenzirpackagecompact"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tenzir.package.compact")),(0,n.yg)("p",null,"The compact format prints the package information according to the following\nschema:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"id")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The unique package id.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"name")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The name of this package.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"author")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The package author.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"description")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The description of this package.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"config")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The user-provided package configuration")))),(0,n.yg)("h3",s({},{id:"tenzirpackageextended"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tenzir.package.extended")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"extended")," format is mainly intended for use by non-human consumers,\nlike shell scripts or frontend code. It contains all available information\nabout a package."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"package_definition")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The original package definition object asa found in the library.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"resolved_package")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The effective package definition that was produced by applying all inputs and overrides from the ",(0,n.yg)("inlineCode",{parentName:"td"},"config")," section and removing all disabled pipelines and contexts.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"config")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The user-provided package configuration.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"package_status")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"Run-time information about the package provided the package manager.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"config")," object has the following schema, where all fields are optional:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"version")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The package version.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"source")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The upstream location of the package definition.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"inputs")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"User-provided values for the package inputs.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"overrides")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"User-provided overrides for fields in the package definition.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"metadata")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"An opaque record that can be set during installation.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"package_status")," object has the following schema:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"install_state")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"The install state of this package. One of ",(0,n.yg)("inlineCode",{parentName:"td"},"installing"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"installed"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"removing")," or ",(0,n.yg)("inlineCode",{parentName:"td"},"zombie"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"from_configuration")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",s({parentName:"tr"},{align:"left"}),"Whether the package was installed from the ",(0,n.yg)("inlineCode",{parentName:"td"},"package add")," operator or from a configuration file.")))),(0,n.yg)("h2",s({},{id:"examples"}),"Examples"),(0,n.yg)("h3",s({},{id:"show-all-installed-packages"}),"Show all installed packages"),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FFA657"}}),"package"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"list"))))),(0,n.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),'  "id"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),' "suricata-ocsf"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),'  "name"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Suricata OCSF Mappings"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),'  "author"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Tenzir"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),'  "description"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),' "[Suricata](https://suricata.io) is an open-source network monitor and'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"\\n"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),"threat detection tool."),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"\\n\\n"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),"This package converts all Suricata events published on the topic `suricata` to"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"\\n"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),"OCSF and publishes the converted events on the topic `ocsf`."),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),"\\n"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),'"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),'  "config"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),'    "inputs"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," {},")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),'    "overrides"'),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}})," {}")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"  }")),"\n",(0,n.yg)("span",s({parentName:"code"},{"data-line":""}),(0,n.yg)("span",s({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h2",s({},{id:"see-also"}),"See Also"),(0,n.yg)("p",null,(0,n.yg)("a",s({parentName:"p"},{href:"/tql2/operators/package/add"}),(0,n.yg)("inlineCode",{parentName:"a"},"package::add")),", ",(0,n.yg)("a",s({parentName:"p"},{href:"/tql2/operators/package/remove"}),(0,n.yg)("inlineCode",{parentName:"a"},"package::remove"))))}v.isMDXComponent=!0}}]);