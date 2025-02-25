"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34473],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>h,toc:()=>v});var o=n(15680),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,a(t)),m=(e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n};const y={},f="Troubleshooting",h={unversionedId:"troubleshooting",id:"version-v4.29/troubleshooting",title:"Troubleshooting",description:"Sometimes things go wrong. Oh no :-(. This page provides guidance on what to do",source:"@site/versioned_docs/version-v4.29/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.29/troubleshooting.md",tags:[],version:"v4.29",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Write a Plugin",permalink:"/development/write-a-plugin"},next:{title:"TQL2 Migration",permalink:"/tql2-migration"}},g={},v=[{value:"Connectivity",id:"connectivity",level:2},{value:"A node does not connect to the platform",id:"a-node-does-not-connect-to-the-platform",level:3},{value:"A node fails to connect with <code>system_error: failed to resolve</code>",id:"a-node-fails-to-connect-with-system_error-failed-to-resolve",level:3}],b={toc:v},w="wrapper";function O(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,o.yg)(w,d(u(u({},b),r),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",u({},{id:"troubleshooting"}),"Troubleshooting"),(0,o.yg)("p",null,"Sometimes things go wrong. Oh no :-(. This page provides guidance on what to do\nin error scenarios we've encountered."),(0,o.yg)("admonition",u({},{title:"Get help!",type:"tip"}),(0,o.yg)("p",{parentName:"admonition"},"Need someone to talk to? Swing by our ",(0,o.yg)("a",u({parentName:"p"},{href:"/discord"}),"Discord")," channel where the\nTenzir team and the community hang out to help each other. Alternatively, send\nus an email at ",(0,o.yg)("a",u({parentName:"p"},{href:"mailto:support@tenzir.com."}),"support@tenzir.com.")," We'll help you out as soon as possible.")),(0,o.yg)("h2",u({},{id:"connectivity"}),"Connectivity"),(0,o.yg)("h3",u({},{id:"a-node-does-not-connect-to-the-platform"}),"A node does not connect to the platform"),(0,o.yg)("p",null,"After you've followed the instructions to ",(0,o.yg)("a",u({parentName:"p"},{href:"/installation/deploy-a-node/"}),"deploy a\nnode"),", the node does not show up in the\nplatform."),(0,o.yg)("p",null,"Here's what you can do:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Ensure that your firewall allows outbound 443/TCP traffic."),(0,o.yg)("li",{parentName:"ol"},"Start the node manually on the command line via ",(0,o.yg)("inlineCode",{parentName:"li"},"tenzir-node")," and observe the\noutput. In case you see a warning or an error, share it with us.")),(0,o.yg)("h3",u({},{id:"a-node-fails-to-connect-with-system_error-failed-to-resolve"}),"A node fails to connect with ",(0,o.yg)("inlineCode",{parentName:"h3"},"system_error: failed to resolve")),(0,o.yg)("p",null,"You may see this error message when a node attempts to connect to the platform:"),(0,o.yg)("pre",null,(0,o.yg)("code",u({parentName:"pre"},{}),"platform-client failed to connect: !! system_error: failed to connect: !! system_error: failed to resolve; will retry in 2m\n")),(0,o.yg)("p",null,"This can happen when additional name servers for custom domains are configured\nin your ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),". This is commonly referred to as ",(0,o.yg)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Split-horizon_DNS"}),"Split\nDNS"),". The name resolution\nalgorithm in our official Linux binaries does not support such a setup natively.\nA split DNS setup is best implemented by using a local caching nameserver such\nas ",(0,o.yg)("a",u({parentName:"p"},{href:"https://thekelleys.org.uk/dnsmasq/doc.html"}),"dnsmasq")," or\n",(0,o.yg)("a",u({parentName:"p"},{href:"https://systemd.io/RESOLVED-VPNS/"}),"systemd-resolved"),"."))}O.isMDXComponent=!0}}]);