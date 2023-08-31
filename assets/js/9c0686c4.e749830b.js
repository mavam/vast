"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>h,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))l.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_position:2},y="Update a node",v={unversionedId:"setup-guides/update-a-node",id:"version-Tenzir v4.0/setup-guides/update-a-node",title:"Update a node",description:"To update a deployed node, proceed with the",source:"@site/versioned_docs/version-Tenzir v4.0/setup-guides/update-a-node.md",sourceDirName:"setup-guides",slug:"/setup-guides/update-a-node",permalink:"/Tenzir v4.0/setup-guides/update-a-node",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0/setup-guides/update-a-node.md",tags:[],version:"Tenzir v4.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"systemd",permalink:"/Tenzir v4.0/setup-guides/deploy-a-node/systemd"},next:{title:"Tune performance",permalink:"/Tenzir v4.0/setup-guides/tune-performance/"}},b={},g=[{value:"Docker",id:"docker",level:2},{value:"Linux",id:"linux",level:2},{value:"macOS",id:"macos",level:2}],k={toc:g},O="wrapper";function h(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(O,d(u(u({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"update-a-node"}),"Update a node"),(0,r.kt)("p",null,"To update a ",(0,r.kt)("a",u({parentName:"p"},{href:"/Tenzir%20v4.0/setup-guides/deploy-a-node/"}),"deployed node"),", proceed with the\nplatform-specific instructiosn below."),(0,r.kt)("h2",u({},{id:"docker"}),"Docker"),(0,r.kt)("p",null,"Run the following commands to update a Docker Compose deployment with a\nconfiguration file ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.NODE.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"docker compose -f docker-compose.NODE.yaml pull\ndocker compose -f docker-compose.NODE.yaml down\ndocker compose -f docker-compose.NODE.yaml up --detach\n")),(0,r.kt)("p",null,"Note that we ",(0,r.kt)("inlineCode",{parentName:"p"},"pull")," first so that the subsequent downtime between ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"up")," is minimal."),(0,r.kt)("h2",u({},{id:"linux"}),"Linux"),(0,r.kt)("p",null,"Run the installer again via:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"curl https://get.tenzir.app | sh\n")),(0,r.kt)("h2",u({},{id:"macos"}),"macOS"),(0,r.kt)("p",null,"Please use Docker ",(0,r.kt)("a",u({parentName:"p"},{href:"https://levelup.gitconnected.com/docker-on-apple-silicon-mac-how-to-run-x86-containers-with-rosetta-2-4a679913a0d5"}),"with\nRosetta"),"\nuntil we offer a native package."))}h.isMDXComponent=!0}}]);