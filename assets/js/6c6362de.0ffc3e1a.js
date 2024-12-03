"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77286],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,c=d["".concat(p,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(c,l(l({ref:t},g),{},{components:n})):r.createElement(c,l({ref:t},g))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},91040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>O,frontMatter:()=>c,metadata:()=>f,toc:()=>v});var r=n(15680),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&g(e,n,t[n]);return e},u=(e,t)=>i(e,l(t)),y=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const c={sidebar_custom_props:{operator:{source:!0}}},m="plugins",f={unversionedId:"operators/plugins",id:"version-v4.24/operators/plugins",title:"plugins",description:"Shows all available plugins and built-ins.",source:"@site/versioned_docs/version-v4.24/operators/plugins.md",sourceDirName:"operators",slug:"/operators/plugins",permalink:"/operators/plugins",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/operators/plugins.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"pass",permalink:"/operators/pass"},next:{title:"print",permalink:"/operators/print"}},b={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.plugin</code>",id:"tenzirplugin",level:3},{value:"Examples",id:"examples",level:2}],h={toc:v},N="wrapper";function O(e){var t=e,{components:n}=t,a=y(t,["components"]);return(0,r.yg)(N,u(d(d({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",d({},{id:"plugins"}),"plugins"),(0,r.yg)("p",null,"Shows all available plugins and built-ins."),(0,r.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),"plugins\n")),(0,r.yg)("h2",d({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins")," operator shows all available plugins and built-ins."),(0,r.yg)("p",null,"Tenzir is built on a modular monolith architecture. Most features are available\nas plugins and extensible by developers. Tenzir comes with a set of built-ins\nand bundled plugins. The former use the plugin API but are available as part of\nthe core library, and the latter are plugins shipped with Tenzir."),(0,r.yg)("h2",d({},{id:"schemas"}),"Schemas"),(0,r.yg)("p",null,"Tenzir emits plugin information with the following schema."),(0,r.yg)("h3",d({},{id:"tenzirplugin"}),(0,r.yg)("inlineCode",{parentName:"h3"},"tenzir.plugin")),(0,r.yg)("p",null,"Contains detailed information about the available plugins."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,r.yg)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,r.yg)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"name")),(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),"The unique, case-insensitive name of the plugin.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"version")),(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),"The version identifier of the plugin, or ",(0,r.yg)("inlineCode",{parentName:"td"},"bundled")," if the plugin has no version of its own.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"kind")),(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),"The kind of plugin. One of ",(0,r.yg)("inlineCode",{parentName:"td"},"builtin"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"static"),", or ",(0,r.yg)("inlineCode",{parentName:"td"},"dynamic"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"types")),(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"list<string>")),(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),"The interfaces implemented by the plugin, e.g., ",(0,r.yg)("inlineCode",{parentName:"td"},"operator")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"function"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"dependencies")),(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),(0,r.yg)("inlineCode",{parentName:"td"},"list<string>")),(0,r.yg)("td",d({parentName:"tr"},{align:"left"}),"Plugins that must be loaded for this plugin to function.")))),(0,r.yg)("h2",d({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Show all functions currently available in TQL2:"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),'plugins\n| where "tql2.function" in types\n| summarize functions=collect(name)\n')))}O.isMDXComponent=!0}}]);