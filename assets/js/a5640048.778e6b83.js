"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60159],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},y=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=s(t),d=r,m=g["".concat(i,".").concat(d)]||g[d]||c[d]||l;return t?n.createElement(m,p(p({ref:a},y),{},{components:t})):n.createElement(m,p({ref:a},y))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[g]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47847:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>F,frontMatter:()=>m,metadata:()=>f,toc:()=>N});var n=t(15680),r=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,y=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&y(e,t,a[t]);if(o)for(var t of o(a))s.call(a,t)&&y(e,t,a[t]);return e},c=(e,a)=>l(e,p(a)),d=(e,a)=>{var t={};for(var n in e)i.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&o)for(var n of o(e))a.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={},u="Install a Package",f={unversionedId:"installation/install-a-package",id:"version-v4.24/installation/install-a-package",title:"Install a Package",description:"A package bundles pipelines and contexts, making it easy to",source:"@site/versioned_docs/version-v4.24/installation/install-a-package.md",sourceDirName:"installation",slug:"/installation/install-a-package",permalink:"/installation/install-a-package",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/installation/install-a-package.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Tune performance",permalink:"/installation/tune-performance/"},next:{title:"User Guides",permalink:"/usage"}},h={},N=[{value:"Install from the Tenzir Library",id:"install-from-the-tenzir-library",level:2},{value:"Install with the Package Operator",id:"install-with-the-package-operator",level:2},{value:"Install with Infrastructure as Code",id:"install-with-infrastructure-as-code",level:2}],k={toc:N},b="wrapper";function F(e){var a=e,{components:t}=a,r=d(a,["components"]);return(0,n.yg)(b,c(g(g({},k),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",g({},{id:"install-a-package"}),"Install a Package"),(0,n.yg)("p",null,"A ",(0,n.yg)("a",g({parentName:"p"},{href:"/packages"}),"package")," bundles pipelines and contexts, making it easy to\ndeploy them as a single unit."),(0,n.yg)("h2",g({},{id:"install-from-the-tenzir-library"}),"Install from the Tenzir Library"),(0,n.yg)("p",null,"The most convenient way to install a package is through the ",(0,n.yg)("a",g({parentName:"p"},{href:"https://app.tenzir.com/library"}),"Tenzir\nLibrary"),":"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Click on a package"),(0,n.yg)("li",{parentName:"ol"},"Select the ",(0,n.yg)("em",{parentName:"li"},"Install")," tab"),(0,n.yg)("li",{parentName:"ol"},"Define your inputs (optional)"),(0,n.yg)("li",{parentName:"ol"},"Click the ",(0,n.yg)("em",{parentName:"li"},"Install")," button in the bottom right")),(0,n.yg)("h2",g({},{id:"install-with-the-package-operator"}),"Install with the Package Operator"),(0,n.yg)("p",null,"To install a package interactively, use the\n",(0,n.yg)("a",g({parentName:"p"},{href:"/tql2/operators/package/add"}),(0,n.yg)("inlineCode",{parentName:"a"},"package::add"))," operator:"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"package"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"add"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "package.yaml"'))))),(0,n.yg)("p",null,"To set package inputs, set the values in the pipeline:"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"package"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"add"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "package.yaml"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),", inputs"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  endpoint"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "localhost:42000"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  policy"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "block"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("p",null,"Your package should now show when listing all installed packages:"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"packages"))))),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  id"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "your-package"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"  install_status"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "installed"'),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#8B949E"}}),"  // \u2026")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("p",null,"To uninstall a package interactively, use\n",(0,n.yg)("a",g({parentName:"p"},{href:"/tql2/operators/package/remove"}),(0,n.yg)("inlineCode",{parentName:"a"},"package::remove")),"."),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FFA657"}}),"package"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#FF7B72"}}),"::"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#D2A8FF"}}),"remove"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),' "your-package"'))))),(0,n.yg)("h2",g({},{id:"install-with-infrastructure-as-code"}),"Install with Infrastructure as Code"),(0,n.yg)("p",null,"For IaC-style deployments, you can install packages ",(0,n.yg)("em",{parentName:"p"},"as code")," by putting them\nnext to your ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir.yaml")," configuration file:"),(0,n.yg)("pre",null,(0,n.yg)("code",g({parentName:"pre"},{}),"/opt/tenzir/etc/tenzir\n\u251c\u2500\u2500 tenzir.yaml\n\u2514\u2500\u2500 packages\n \xa0\xa0 \u2514\u2500\u2500 your-package\n \xa0\xa0     \u251c\u2500\u2500 config.yaml\n \xa0\xa0     \u2514\u2500\u2500 package.yaml\n")),(0,n.yg)("p",null,"Inside the ",(0,n.yg)("inlineCode",{parentName:"p"},"packages")," directory, every installed package lives in its own\ndirectory containing a ",(0,n.yg)("inlineCode",{parentName:"p"},"package.yaml")," file with the package definition. By\nconvention, the directory name is the package ID."),(0,n.yg)("p",null,"The node search path for packages consists of the following locations:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"packages")," directory in all ",(0,n.yg)("a",g({parentName:"li"},{href:"/configuration#configuration-files"}),"configuration\ndirectories"),"."),(0,n.yg)("li",{parentName:"ol"},"All directories specified in the ",(0,n.yg)("inlineCode",{parentName:"li"},"tenzir.package-dirs")," configuration option.")),(0,n.yg)("p",null,"As an alternative way to specify inputs visually in the app, or setting them\nexplicitly as part of calling ",(0,n.yg)("inlineCode",{parentName:"p"},"package::add"),", you can add a ",(0,n.yg)("inlineCode",{parentName:"p"},"config.yaml")," file\nnext to the ",(0,n.yg)("inlineCode",{parentName:"p"},"package.yaml")," file. Here is an example that sets the inputs\n",(0,n.yg)("inlineCode",{parentName:"p"},"endpoint")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"policy"),":"),(0,n.yg)("figure",g({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",g({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,n.yg)("code",g({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"inputs"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"  endpoint"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),"localhost:42000")),"\n",(0,n.yg)("span",g({parentName:"code"},{"data-line":""}),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#7EE787"}}),"  policy"),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",g({parentName:"span"},{style:{color:"#A5D6FF"}}),"block"))))))}F.isMDXComponent=!0}}]);