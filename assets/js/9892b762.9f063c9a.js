"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49248],{15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),c=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},s=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=c(n),u=r,m=g["".concat(p,".").concat(u)]||g[u]||y[u]||l;return n?t.createElement(m,i(i({ref:a},s),{},{components:n})):t.createElement(m,i({ref:a},s))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9657:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>d,default:()=>N,frontMatter:()=>m,metadata:()=>f,toc:()=>k});var t=n(15680),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,g=(e,a)=>{for(var n in a||(a={}))p.call(a,n)&&s(e,n,a[n]);if(o)for(var n of o(a))c.call(a,n)&&s(e,n,a[n]);return e},y=(e,a)=>l(e,i(a)),u=(e,a)=>{var n={};for(var t in e)p.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))a.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n};const m={},d="Install a Package",f={unversionedId:"installation/install-a-package",id:"installation/install-a-package",title:"Install a Package",description:"A package bundles pipelines and contexts, making it easy to",source:"@site/docs/installation/install-a-package.md",sourceDirName:"installation",slug:"/installation/install-a-package",permalink:"/next/installation/install-a-package",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/installation/install-a-package.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Tune performance",permalink:"/next/installation/tune-performance/"},next:{title:"User Guides",permalink:"/next/usage"}},h={},k=[{value:"Install from the Tenzir Library",id:"install-from-the-tenzir-library",level:2},{value:"Install with the Package Operator",id:"install-with-the-package-operator",level:2},{value:"Install with Infrastructure as Code",id:"install-with-infrastructure-as-code",level:2}],b={toc:k},v="wrapper";function N(e){var a=e,{components:n}=a,r=u(a,["components"]);return(0,t.yg)(v,y(g(g({},b),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",g({},{id:"install-a-package"}),"Install a Package"),(0,t.yg)("p",null,"A ",(0,t.yg)("a",g({parentName:"p"},{href:"/next/packages"}),"package")," bundles pipelines and contexts, making it easy to\ndeploy them as a single unit."),(0,t.yg)("h2",g({},{id:"install-from-the-tenzir-library"}),"Install from the Tenzir Library"),(0,t.yg)("p",null,"The most convenient way to install a package is through the ",(0,t.yg)("a",g({parentName:"p"},{href:"https://app.tenzir.com/library"}),"Tenzir\nLibrary"),":"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Click on a package"),(0,t.yg)("li",{parentName:"ol"},"Select the ",(0,t.yg)("em",{parentName:"li"},"Install")," tab"),(0,t.yg)("li",{parentName:"ol"},"Define your inputs (optional)"),(0,t.yg)("li",{parentName:"ol"},"Click the ",(0,t.yg)("em",{parentName:"li"},"Install")," button in the bottom right")),(0,t.yg)("h2",g({},{id:"install-with-the-package-operator"}),"Install with the Package Operator"),(0,t.yg)("p",null,"To install a package interactively, use the ",(0,t.yg)("a",g({parentName:"p"},{href:"/next/operators/package"}),(0,t.yg)("inlineCode",{parentName:"a"},"package_add"),"\noperator"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{className:"language-tql"}),'// tql2\nload_file "package.yaml"\nread_yaml\npackage_add\n')),(0,t.yg)("p",null,"To set package inputs, set the values in the pipeline:"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{className:"language-tql"}),'// tql2\nload_file "package.yaml"\nread_yaml\n// Adjust inputs\nconfig.inputs.endpoint = "localhost:42000"\nconfig.inputs.policy = "block"\npackage_add\n')),(0,t.yg)("p",null,"Your package should now show when listing all installed packages:"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{className:"language-tql"}),"packages\n")),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{className:"language-json5"}),'{\n  "id": "your-package",\n  "install_status": "installed",\n  // \u2026\n}\n')),(0,t.yg)("p",null,"To uninstall a package interactively, use\n",(0,t.yg)("a",g({parentName:"p"},{href:"/next/operators/package"}),(0,t.yg)("inlineCode",{parentName:"a"},"package_remove")),"."),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{className:"language-tql"}),'package_remove "your-package"\n')),(0,t.yg)("h2",g({},{id:"install-with-infrastructure-as-code"}),"Install with Infrastructure as Code"),(0,t.yg)("p",null,"For IaC-style deployments, you can install packages ",(0,t.yg)("em",{parentName:"p"},"as code")," by putting them\nnext to your ",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir.yaml")," configuration file:"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{}),"/opt/tenzir/etc/tenzir\n\u251c\u2500\u2500 tenzir.yaml\n\u2514\u2500\u2500 packages\n \xa0\xa0 \u2514\u2500\u2500 your-package\n \xa0\xa0     \u251c\u2500\u2500 config.yaml\n \xa0\xa0     \u2514\u2500\u2500 package.yaml\n")),(0,t.yg)("p",null,"Inside the ",(0,t.yg)("inlineCode",{parentName:"p"},"packages")," directory, every installed package lives in its own\ndirectory containing a ",(0,t.yg)("inlineCode",{parentName:"p"},"package.yaml")," file with the package definition. By\nconvention, the directory name is the package ID."),(0,t.yg)("p",null,"The node search path for packages consists of the following locations:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"packages")," directory in all ",(0,t.yg)("a",g({parentName:"li"},{href:"/next/configuration#configuration-files"}),"configuration\ndirectories"),"."),(0,t.yg)("li",{parentName:"ol"},"All directories specified in the ",(0,t.yg)("inlineCode",{parentName:"li"},"tenzir.package-dirs")," configuration option.")),(0,t.yg)("p",null,"As an alternative way to specify inputs visually in the app, or setting them\nexplicitly prior to calling ",(0,t.yg)("inlineCode",{parentName:"p"},"package_add"),", you can add a ",(0,t.yg)("inlineCode",{parentName:"p"},"config.yaml")," file next\nto the ",(0,t.yg)("inlineCode",{parentName:"p"},"package.yaml")," file. Here is an example that sets the keys\n",(0,t.yg)("inlineCode",{parentName:"p"},"config.inputs.endpoint")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"config.inputs.policy"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",g({parentName:"pre"},{className:"language-yaml"}),"inputs:\n  endpoint: localhost:42000\n  policy: block\n")))}N.isMDXComponent=!0}}]);