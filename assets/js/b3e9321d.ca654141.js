"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67608],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},54814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>f,default:()=>w,frontMatter:()=>y,metadata:()=>g,toc:()=>v});var r=t(15680),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&d(e,t,n[t]);return e},c=(e,n)=>o(e,a(n)),u=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const y={sidebar_position:2},f="Modules",g={unversionedId:"data-model/modules",id:"version-v4.20/data-model/modules",title:"Modules",description:"A module creates a namespace for [type",source:"@site/versioned_docs/version-v4.20/data-model/modules.md",sourceDirName:"data-model",slug:"/data-model/modules",permalink:"/v4.20/data-model/modules",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/data-model/modules.md",tags:[],version:"v4.20",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Schemas",permalink:"/v4.20/data-model/schemas"},next:{title:"Taxonomies",permalink:"/v4.20/data-model/taxonomies"}},h={},v=[{value:"Type Definition Rules",id:"type-definition-rules",level:2},{value:"Module Directory Lookup",id:"module-directory-lookup",level:2}],b={toc:v},N="wrapper";function w(e){var n=e,{components:t}=n,i=u(n,["components"]);return(0,r.yg)(N,c(m(m({},b),i),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",m({},{id:"modules"}),"Modules"),(0,r.yg)("p",null,"A ",(0,r.yg)("strong",{parentName:"p"},"module")," creates a namespace for ",(0,r.yg)("a",m({parentName:"p"},{href:"/v4.20/data-model/type-system"}),"type\ndefinitions#type-construction"),", ",(0,r.yg)("a",m({parentName:"p"},{href:"/v4.20/pipelines"}),"pipelines"),",\nand ",(0,r.yg)("a",m({parentName:"p"},{href:"/v4.20/data-model/taxonomies"}),"taxonomy")," elements in single YAML file."),(0,r.yg)("admonition",m({},{title:"Work in Progress",type:"warning"}),(0,r.yg)("p",{parentName:"admonition"},"While you can already ",(0,r.yg)("a",m({parentName:"p"},{href:"/v4.20/usage/show-available-schemas"}),"show schema\ndefinitions"),", it is unfortunately not\nyet possible write them in the same syntax. We are working towards closing this\ngap, as tracked by ",(0,r.yg)("a",m({parentName:"p"},{href:"https://github.com/tenzir/public-roadmap/issues/15"}),"the corresponding roadmap\nitem"),".")),(0,r.yg)("h2",m({},{id:"type-definition-rules"}),"Type Definition Rules"),(0,r.yg)("p",null,"All defined type names and aliases share one ",(0,r.yg)("em",{parentName:"p"},"global")," identifier namespace.\nIntroducing a new type definition or alias adds a symbol to this namespace. The\nfollowing rules exist to make manipulation of the namespace manageable:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Tenzir processes all directories of the ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir.module-dirs")," option ",(0,r.yg)("em",{parentName:"p"},"in\norder"),", creating a union of all type definitions.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"Within")," a specified module directory, all type definitions must be unique,\ni.e., no types can have the same name.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"Across")," directories, later definitions can override existing ones from\nprevious directories. This allows users to adapt existing types by providing\nan alternate definition in a separate module directory.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Resolving aliases to custom types follows a 2-phase lookup, which makes it\npossible to use a custom type and define it afterwards in the module file.\nThe 2-phase lookup only works within a module directory."))),(0,r.yg)("admonition",m({},{type:"note"}),(0,r.yg)("p",{parentName:"admonition"},"Tenzir processes all directories ",(0,r.yg)("em",{parentName:"p"},"recursively"),". This means you are free to split\nthe content over a directory structure of your choice.")),(0,r.yg)("h2",m({},{id:"module-directory-lookup"}),"Module Directory Lookup"),(0,r.yg)("p",null,"Tenzir ships with modules containing type definitions and aliases for common\nformats, such as Zeek or Suricata logs. Pre-installed modules reside in\n",(0,r.yg)("inlineCode",{parentName:"p"},"<datadir>/tenzir/modules"),", and additional search paths for user-provided\nmodules can be set in the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir.yaml")," by adjusting the\n",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir.module-dirs")," option."),(0,r.yg)("p",null,"Tenzir looks at module directories in the following order:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<datadir>/tenzir/module")," for system-wide module files bundled with Tenzir,\nwhere ",(0,r.yg)("inlineCode",{parentName:"p"},"<datadir>")," is the platform-specific directory for data files, e.g.,\n",(0,r.yg)("inlineCode",{parentName:"p"},"<install-prefix>/share"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<sysconfdir>/tenzir/modules")," for system-wide configuration, where\n",(0,r.yg)("inlineCode",{parentName:"p"},"<sysconfdir>")," is the platform-specific directory for configuration files,\ne.g., ",(0,r.yg)("inlineCode",{parentName:"p"},"<install-prefix>/etc"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"~/.config/tenzir/modules")," for user-specific configuration. Tenzir respects\nthe XDG base directory specification and its environment variables.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"An ordered, comma-separated list of directories passed using\n",(0,r.yg)("inlineCode",{parentName:"p"},"--module-dirs=path/to/modules")," on the command line. This corresponds to the\noption ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir.module-dirs"),"."))),(0,r.yg)("admonition",m({},{title:"Changing Tenzir modules",type:"caution"}),(0,r.yg)("p",{parentName:"admonition"},"We recommend to avoid making changes to module files in\n",(0,r.yg)("inlineCode",{parentName:"p"},"<datadir>/tenzir/modules"),", as this can break updates to Tenzir. If you need to\nmake adaptations of builtin types, you can modify them in your own module\ndirectory with the help of record type operations.")))}w.isMDXComponent=!0}}]);