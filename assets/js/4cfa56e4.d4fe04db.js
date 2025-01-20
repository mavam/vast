"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17317],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>f});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,a(a({ref:n},s),{},{components:t})):o.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77534:(e,n,t)=>{t.d(n,{A:()=>E});var o=t(96540),r=t(20053),i=t(36764),a=t(27449),l=t(75068),c=t(72183);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s({href:e,children:n}){return o.createElement(a.A,{href:e,className:(0,r.A)("card padding--lg",p.cardContainer)},n)}function d({href:e,icon:n,title:t,description:i}){return o.createElement(s,{href:e},o.createElement("h2",{className:(0,r.A)("text--truncate",p.cardTitle),title:t},n," ",t),i&&o.createElement("p",{className:(0,r.A)("text--truncate",p.cardDescription),title:i},i))}function u({item:e}){var n;const t=(0,i._o)(e);return t?o.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(n=e.description)?n:(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var n,t;const r=(0,l.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.cC)(null!=(n=e.docId)?n:void 0);return o.createElement(d,{href:e.href,icon:r,title:e.label,description:null!=(t=e.description)?t:null==a?void 0:a.description})}function f({item:e}){switch(e.type){case"link":return o.createElement(m,{item:e});case"category":return o.createElement(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,O=(e,n)=>{for(var t in n||(n={}))h.call(n,t)&&v(e,t,n[t]);if(g)for(var t of g(n))b.call(n,t)&&v(e,t,n[t]);return e};function w({className:e}){const n=(0,i.$S)();return o.createElement(E,{items:n.items,className:e})}function E(e){const{items:n,className:t}=e;if(!n)return o.createElement(w,O({},e));const a=(0,i.d1)(n);return o.createElement("section",{className:(0,r.A)("row",t)},a.map(((e,n)=>o.createElement("article",{key:n,className:"col col--6 margin-bottom--lg"},o.createElement(f,{item:e})))))}},13274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>g,default:()=>E,frontMatter:()=>y,metadata:()=>h,toc:()=>v});var o=t(15680),r=t(77534),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&d(e,t,n[t]);if(c)for(var t of c(n))s.call(n,t)&&d(e,t,n[t]);return e},m=(e,n)=>a(e,l(n)),f=(e,n)=>{var t={};for(var o in e)p.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))n.indexOf(o)<0&&s.call(e,o)&&(t[o]=e[o]);return t};const y={sidebar_position:2},g="Deploy a node",h={unversionedId:"installation/deploy-a-node/README",id:"installation/deploy-a-node/README",title:"Deploy a node",description:"Deploying a node entails provisioning a node via the platform and then",source:"@site/docs/installation/deploy-a-node/README.md",sourceDirName:"installation/deploy-a-node",slug:"/installation/deploy-a-node/",permalink:"/next/installation/deploy-a-node/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/installation/deploy-a-node/README.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Size a node",permalink:"/next/installation/size-a-node"},next:{title:"Ansible",permalink:"/next/installation/deploy-a-node/ansible"}},b={},v=[{value:"Provision a node",id:"provision-a-node",level:2},{value:"Install a node",id:"install-a-node",level:2},{value:"Configure a node",id:"configure-a-node",level:2}],O={toc:v},w="wrapper";function E(e){var n=e,{components:t}=n,i=f(n,["components"]);return(0,o.yg)(w,m(u(u({},O),i),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",u({},{id:"deploy-a-node"}),"Deploy a node"),(0,o.yg)("p",null,"Deploying a node entails provisioning a node via the platform and then\ninstalling it in your environment of choice."),(0,o.yg)("h2",u({},{id:"provision-a-node"}),"Provision a node"),(0,o.yg)("p",null,"To deploy a self-hosted node, begin with provisioning one in the platform:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Visit ",(0,o.yg)("a",u({parentName:"li"},{href:"https://app.tenzir.com/pipelines"}),"https://app.tenzir.com/pipelines"),"."),(0,o.yg)("li",{parentName:"ol"},"Click the ",(0,o.yg)("em",{parentName:"li"},"Add node")," button in the left pane and select ",(0,o.yg)("em",{parentName:"li"},"self-hosted node"),"."),(0,o.yg)("li",{parentName:"ol"},"Enter a name for your node and click ",(0,o.yg)("em",{parentName:"li"},"Add node"),".")),(0,o.yg)("h2",u({},{id:"install-a-node"}),"Install a node"),(0,o.yg)("p",null,"Next, choose how you would like to deploy your node from the available options\nbelow."),(0,o.yg)(r.A,{mdxType:"DocCardList"}),(0,o.yg)("h2",u({},{id:"configure-a-node"}),"Configure a node"),(0,o.yg)("p",null,"See the documentation on ",(0,o.yg)("a",u({parentName:"p"},{href:"/next/configuration#configuration-files"}),"configuration\nfiles")," along with the example\nconfiguration to understand how you can configure yoru node."),(0,o.yg)("admonition",u({},{title:"Accepting incoming connections",type:"note"}),(0,o.yg)("p",{parentName:"admonition"},"When your node starts it will listen for node-to-node connections on the TCP\nendpoint ",(0,o.yg)("inlineCode",{parentName:"p"},"127.0.0.1:5158"),". Select a different endpoint via the ",(0,o.yg)("inlineCode",{parentName:"p"},"tenzir.endpoint"),"\noption. For example, to bind to an IPv6 address use ",(0,o.yg)("inlineCode",{parentName:"p"},"[::1]:42000"),"."),(0,o.yg)("p",{parentName:"admonition"},"Set ",(0,o.yg)("inlineCode",{parentName:"p"},"tenzir.endpoint")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"false")," to disable the endpoint, making the node\nexclusively accessible through the Tenzir Platform. This effectively prevents\nconnections from other ",(0,o.yg)("inlineCode",{parentName:"p"},"tenzir")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"tenzir-node")," processes.")))}E.isMDXComponent=!0}}]);