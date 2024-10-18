"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[450],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,m=d["".concat(i,".").concat(u)]||d[u]||y[u]||o;return t?n.createElement(m,p(p({ref:a},c),{},{components:t})):n.createElement(m,p({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7452:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&c(e,t,a[t]);if(l)for(var t of l(a))s.call(a,t)&&c(e,t,a[t]);return e},y=(e,a)=>o(e,p(a)),u=(e,a)=>{var t={};for(var n in e)i.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))a.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_position:2},g="Update a node",f={unversionedId:"installation/update-a-node",id:"version-v4.21/installation/update-a-node",title:"Update a node",description:"To update a deployed node, proceed with the",source:"@site/versioned_docs/version-v4.21/installation/update-a-node.md",sourceDirName:"installation",slug:"/installation/update-a-node",permalink:"/v4.21/installation/update-a-node",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.21/installation/update-a-node.md",tags:[],version:"v4.21",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Deploy a node",permalink:"/v4.21/installation/deploy-a-node"},next:{title:"Deploy the platform",permalink:"/v4.21/installation/deploy-the-platform"}},b={},h=[{value:"Docker",id:"docker",level:2},{value:"Linux",id:"linux",level:2},{value:"macOS",id:"macos",level:2}],v={toc:h},O="wrapper";function N(e){var a=e,{components:t}=a,r=u(a,["components"]);return(0,n.yg)(O,y(d(d({},v),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"update-a-node"}),"Update a node"),(0,n.yg)("p",null,"To update a ",(0,n.yg)("a",d({parentName:"p"},{href:"/v4.21/installation/deploy-a-node"}),"deployed node"),", proceed with the\nplatform-specific instructions below."),(0,n.yg)("h2",d({},{id:"docker"}),"Docker"),(0,n.yg)("p",null,"Run the following commands to update a Docker Compose deployment with a\nconfiguration file ",(0,n.yg)("inlineCode",{parentName:"p"},"docker-compose.NODE.yaml"),":"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"docker"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," compose"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -f"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," docker-compose.NODE.yaml"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," pull")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"docker"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," compose"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -f"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," docker-compose.NODE.yaml"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," down")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"docker"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," compose"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," -f"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," docker-compose.NODE.yaml"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," up"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}})," --detach"))))),(0,n.yg)("p",null,"Note that we ",(0,n.yg)("inlineCode",{parentName:"p"},"pull")," first so that the subsequent downtime between ",(0,n.yg)("inlineCode",{parentName:"p"},"down")," and\n",(0,n.yg)("inlineCode",{parentName:"p"},"up")," is minimal."),(0,n.yg)("h2",d({},{id:"linux"}),"Linux"),(0,n.yg)("p",null,"Run the installer again via:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}}),"curl"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}})," https://get.tenzir.app"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}})," |"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FFA657"}})," sh"))))),(0,n.yg)("h2",d({},{id:"macos"}),"macOS"),(0,n.yg)("p",null,"Please use Docker ",(0,n.yg)("a",d({parentName:"p"},{href:"https://levelup.gitconnected.com/docker-on-apple-silicon-mac-how-to-run-x86-containers-with-rosetta-2-4a679913a0d5"}),"with\nRosetta"),"\nuntil we offer a native package."))}N.isMDXComponent=!0}}]);