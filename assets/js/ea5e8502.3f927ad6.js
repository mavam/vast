"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),h=s,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>w,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var r=n(3905),s=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>a(e,o(t)),h=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_position:2},b="Snapshotting",f={unversionedId:"use/integrate/threatbus/understand/snapshotting",id:"version-VAST v3.0/use/integrate/threatbus/understand/snapshotting",title:"Snapshotting",description:"Traditional pub/sub only broadcasts the current de-facto state of a system.",source:"@site/versioned_docs/version-VAST v3.0/use/integrate/threatbus/understand/snapshotting.md",sourceDirName:"use/integrate/threatbus/understand",slug:"/use/integrate/threatbus/understand/snapshotting",permalink:"/docs/use/integrate/threatbus/understand/snapshotting",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/use/integrate/threatbus/understand/snapshotting.md",tags:[],version:"VAST v3.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Subscriptions and Message Passing",permalink:"/docs/use/integrate/threatbus/understand/subscription-message-passing"},next:{title:"Plugins",permalink:"/docs/use/integrate/threatbus/understand/plugins/"}},g={},y=[{value:"Requesting Snapshots",id:"requesting-snapshots",level:2},{value:"Point-To-Point Forwarding",id:"point-to-point-forwarding",level:2},{value:"Implementation",id:"implementation",level:2}],v={toc:y},O="wrapper";function w(e){var t=e,{components:n}=t,s=h(t,["components"]);return(0,r.kt)(O,d(c(c({},v),s),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"snapshotting"}),"Snapshotting"),(0,r.kt)("p",null,"Traditional pub/sub only broadcasts the current de-facto state of a system.\nPublished messages are either processed by a subscriber or not. Once a message\nhas passed the bus, it will not be published again."),(0,r.kt)("p",null,"This is problematic when it comes to security content, such as indicators of\ncompromise (IOCs). The relevance of IOCs usually spikes shortly after they get\nknown and then decays over time. In a usual pub/sub system, new subscribers will\nnot see previously published messages, even though they might still be very\nrelevant to them."),(0,r.kt)("p",null,"Threat Bus addresses this with the snapshot feature: ",(0,r.kt)("strong",{parentName:"p"},"New subscribers can ask\nfor a historic snapshot of security content.")),(0,r.kt)("h2",c({},{id:"requesting-snapshots"}),"Requesting Snapshots"),(0,r.kt)("p",null,"Requesting a snapshot is part of the subscription interface for clients.\nThe subscription data structure looks as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),"@dataclass\nclass Subscription:\n  topic: str\n  snapshot: timedelta\n")),(0,r.kt)("p",null,"In case the requested ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshot")," time delta is greater than zero, Threat Bus\nforwards the request to all plugins. How this request is handled is up to the\nimplementing plugin."),(0,r.kt)("h2",c({},{id:"point-to-point-forwarding"}),"Point-To-Point Forwarding"),(0,r.kt)("p",null,"Instead of publishing requested snapshot data again, Threat Bus uses a\npoint-to-point transmission model. Only the application that requests a snapshot\ngets to see the snapshot. That prevents all other subscribers from eventually\nseeing messages more than once."),(0,r.kt)("h2",c({},{id:"implementation"}),"Implementation"),(0,r.kt)("p",null,"Snapshotting is implemented by the application plugins. When a new subscriber\nasks for a snapshot, Threat Bus forwards the request to all implementing\nplugins. Apps ",(0,r.kt)("strong",{parentName:"p"},"optionally")," implement the snapshot feature."),(0,r.kt)("p",null,"For example, the MISP plugin implements such a handler. When Threat Bus invokes\nthe handler, the plugin performs a MISP API search for IOCs in the requested\ntime range. All found items are then passed back to the bus for distribution."))}w.isMDXComponent=!0}}]);