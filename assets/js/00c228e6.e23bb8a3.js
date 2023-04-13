"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const g={sidebar_position:0},h="Design Goals",f={unversionedId:"use/integrate/threatbus/understand/design-goals",id:"version-VAST v3.0/use/integrate/threatbus/understand/design-goals",title:"Design Goals",description:"We designed Threat Bus with the following principles in mind:",source:"@site/versioned_docs/version-VAST v3.0/use/integrate/threatbus/understand/design-goals.md",sourceDirName:"use/integrate/threatbus/understand",slug:"/use/integrate/threatbus/understand/design-goals",permalink:"/docs/use/integrate/threatbus/understand/design-goals",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/use/integrate/threatbus/understand/design-goals.md",tags:[],version:"VAST v3.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Use",permalink:"/docs/use/integrate/threatbus/use"},next:{title:"Subscriptions and Message Passing",permalink:"/docs/use/integrate/threatbus/understand/subscription-message-passing"}},b={},y=[],v={toc:y},k="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,d(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"design-goals"}),"Design Goals"),(0,r.kt)("p",null,"We designed Threat Bus with the following principles in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Plugin-Based Architecture"),": there are simply too many security tools out\nthere to justify any other type of architecture. The plugin architecture\nreduces the quadratic complexity of interconnecting ",(0,r.kt)("em",{parentName:"p"},"N")," tools with each\nanother to simply supporting ",(0,r.kt)("em",{parentName:"p"},"N")," independent tools. Security tools only need\nto how to connect with Threat Bus and are automatically integrated with every\nother tool that is connected to the bus.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open Standard Formats"),": Threat Bus uses the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://docs.oasis-open.org/cti/stix/v2.1/stix-v2.1.html"}),"STIX\n2.1")," format for\n",(0,r.kt)("a",u({parentName:"p"},{href:"https://docs.oasis-open.org/cti/stix/v2.1/cs02/stix-v2.1-cs02.html#_muftrcpnf89v"}),"indicators"),"\nand\n",(0,r.kt)("a",u({parentName:"p"},{href:"https://docs.oasis-open.org/cti/stix/v2.1/cs02/stix-v2.1-cs02.html#_a795guqsap3r"}),"sightings"),".\nThe goal is to comply with industry standards so that modern tools can\nintegrate natively with Threat Bus with minimal message mapping overhead.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Modular Dependency Management"),": plugins are packaged individually and can\nbe installed independently of each other. This way, a Threat Bus host system\ncan keep the list of required dependencies small and manageable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Community Project"),": Threat Bus is a free and open source project. We hope\nto come to a point where authors of awesome security tools can write the\nThreat Bus integration themselves. All contributions are welcome!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Inherited Scalability"),": Conceptually, Threat Bus is a simple message\npassing engine. It inherits the scalability of its backbone. For example,\nusing a distributed backbone, like\n",(0,r.kt)("a",u({parentName:"p"},{href:"plugins/backbones/rabbitmq"}),"RabbitMQ"),", allows for deploying\nmultiple Threat Bus hosts in a scalable fashion."))))}O.isMDXComponent=!0}}]);