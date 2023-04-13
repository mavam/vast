"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>N,frontMatter:()=>f,metadata:()=>k,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_position:2},y="Modules",k={unversionedId:"understand/data-model/modules",id:"version-VAST v3.0/understand/data-model/modules",title:"Modules",description:"A module creates a namespace for [type",source:"@site/versioned_docs/version-VAST v3.0/understand/data-model/modules.md",sourceDirName:"understand/data-model",slug:"/understand/data-model/modules",permalink:"/docs/understand/data-model/modules",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/understand/data-model/modules.md",tags:[],version:"VAST v3.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Schemas",permalink:"/docs/understand/data-model/schemas"},next:{title:"Taxonomies",permalink:"/docs/understand/data-model/taxonomies"}},h={},v=[{value:"Type Definition Rules",id:"type-definition-rules",level:2},{value:"Module Directory Lookup",id:"module-directory-lookup",level:2}],b={toc:v},g="wrapper";function N(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(g,c(m(m({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"modules"}),"Modules"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"module")," creates a namespace for ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/understand/data-model/type-system"}),"type\ndefinitions#type-construction"),",\n",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/understand/language/pipelines"}),"pipelines"),", and ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/understand/data-model/taxonomies"}),"taxonomy"),"\nelements in single YAML file."),(0,r.kt)("admonition",m({},{title:"Work in Progress",type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"While you can already ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/use/introspect/"}),"read type definitions"),",\nit is unfortunately not yet possible write them in the same syntax. We are\nworking towards closing this gap, as tracked by ",(0,r.kt)("a",m({parentName:"p"},{href:"https://github.com/tenzir/public-roadmap/issues/15"}),"the corresponding roadmap\nitem"),".")),(0,r.kt)("h2",m({},{id:"type-definition-rules"}),"Type Definition Rules"),(0,r.kt)("p",null,"All defined type names and aliases share one ",(0,r.kt)("em",{parentName:"p"},"global")," identifier namespace.\nIntroducing a new type definition or alias adds a symbol to this namespace. The\nfollowing rules exist to make manipulation of the namespace manageable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VAST processes all directories of the ",(0,r.kt)("inlineCode",{parentName:"p"},"vast.module-dirs")," option ",(0,r.kt)("em",{parentName:"p"},"in order"),",\ncreating a union of all type definitions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Within")," a specified module directory, all type definitions must be unique,\ni.e., no types can have the same name.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Across")," directories, later definitions can override existing ones from\nprevious directories. This allows users to adapt existing types by providing\nan alternate definition in a separate module directory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resolving aliases to custom types follows a 2-phase lookup, which makes it\npossible to use a custom type and define it afterwards in the module file.\nThe 2-phase lookup only works within a module directory."))),(0,r.kt)("admonition",m({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"VAST processes all directories ",(0,r.kt)("em",{parentName:"p"},"recursively"),". This means you are free to split\nthe content over a directory structure of your choice.")),(0,r.kt)("h2",m({},{id:"module-directory-lookup"}),"Module Directory Lookup"),(0,r.kt)("p",null,"VAST ships with modules containing type definitions and aliases for common\nformats, such as Zeek or Suricata logs. Pre-installed modules reside in\n",(0,r.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/modules"),", and additional search paths for user-provided modules\ncan be set in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"vast.yaml")," by adjusting the\n",(0,r.kt)("inlineCode",{parentName:"p"},"vast.module-dirs")," option."),(0,r.kt)("p",null,"VAST looks at module directories in the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/module")," for system-wide module files bundled with VAST,\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},"<datadir>")," is the platform-specific directory for data files, e.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},"<install-prefix>/share"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<sysconfdir>/vast/modules")," for system-wide configuration, where\n",(0,r.kt)("inlineCode",{parentName:"p"},"<sysconfdir>")," is the platform-specific directory for configuration files,\ne.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"<install-prefix>/etc"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/vast/modules")," for user-specific configuration. VAST respects the\nXDG base directory specification and its environment variables.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An ordered, comma-separated list of directories passed using\n",(0,r.kt)("inlineCode",{parentName:"p"},"--module-dirs=path/to/modules")," on the command line. This corresponds to the\noption ",(0,r.kt)("inlineCode",{parentName:"p"},"vast.module-dirs"),"."))),(0,r.kt)("admonition",m({},{title:"Changing VAST modules",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"We recommend to avoid making changes to module files in\n",(0,r.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/modules"),", as this can break updates to VAST. If you need to make\nadaptations of builtin types, you can modify them in your own module directory\nwith the help of record type operations.")))}N.isMDXComponent=!0}}]);