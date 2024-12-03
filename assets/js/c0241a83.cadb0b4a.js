"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83801],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},c=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||y[u]||o;return n?t.createElement(g,p(p({ref:a},c),{},{components:n})):t.createElement(g,p({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75177:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>g,metadata:()=>f,toc:()=>v});var t=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,d=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&c(e,n,a[n]);if(s)for(var n of s(a))i.call(a,n)&&c(e,n,a[n]);return e},y=(e,a)=>o(e,p(a)),u=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const g={},m="Deduplicate events",f={unversionedId:"usage/deduplicate-events",id:"version-v4.23/usage/deduplicate-events",title:"Deduplicate events",description:"The deduplicate provides is a powerful",source:"@site/versioned_docs/version-v4.23/usage/deduplicate-events.md",sourceDirName:"usage",slug:"/usage/deduplicate-events",permalink:"/v4.23/usage/deduplicate-events",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/usage/deduplicate-events.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Enrich with Network Inventory",permalink:"/v4.23/usage/enrich-with-network-inventory/"},next:{title:"Integrations",permalink:"/v4.23/integrations"}},h={},v=[{value:"Analyze unique host pairs",id:"analyze-unique-host-pairs",level:2},{value:"Remove duplicate alerts",id:"remove-duplicate-alerts",level:2},{value:"Produce a finite amount of retro lookups",id:"produce-a-finite-amount-of-retro-lookups",level:2}],E={toc:v},N="wrapper";function b(e){var a=e,{components:n}=a,r=u(a,["components"]);return(0,t.yg)(N,y(d(d({},E),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",d({},{id:"deduplicate-events"}),"Deduplicate events"),(0,t.yg)("p",null,"The ",(0,t.yg)("a",d({parentName:"p"},{href:"/v4.23/operators/deduplicate"}),(0,t.yg)("inlineCode",{parentName:"a"},"deduplicate"))," provides is a powerful\nmechanism to remove duplicate events in a pipeline."),(0,t.yg)("p",null,"There are numerous use cases for deduplication, such as reducing noise,\noptimizing costs and make threat detection and response more efficent. Read our\n",(0,t.yg)("a",d({parentName:"p"},{href:"/blog/reduce-cost-and-noise-with-deduplication"}),"blog post")," for high-level\ndiscussion."),(0,t.yg)("h2",d({},{id:"analyze-unique-host-pairs"}),"Analyze unique host pairs"),(0,t.yg)("p",null,"Let's say you're investigating an incident and would like get a better of\npicture of what entities are involved in the communication. To this end, you\nwould like to extract all unique host pairs to identify who communicated with\nwhom."),(0,t.yg)("p",null,"Here's how this looks like with Zeek data:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),'export\n| where #schema == "zeek.conn"\n| deduplicate id.orig_h, id.resp_h\n')),(0,t.yg)("p",null,"Providing ",(0,t.yg)("inlineCode",{parentName:"p"},"id.orig_h")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"id.resp_h")," to the operator restricts the output to\nall unique host pairs. Note that flipped connections occur twice here, i.e., A \u2192\nB as well as B \u2192 A are present."),(0,t.yg)("h2",d({},{id:"remove-duplicate-alerts"}),"Remove duplicate alerts"),(0,t.yg)("p",null,"Are you're overloaded with alerts, like every analyst? Let's remove some noise\nfrom our alerts."),(0,t.yg)("p",null,"First, let's check what our alert dataset looks like:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),'export\n| where #schema == "suricata.alert"\n| top alert.signature\n| head 5\n')),(0,t.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"json","data-theme":"github-dark-default"}),(0,t.yg)("code",d({parentName:"pre"},{"data-language":"json","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "alert.signature"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"ET MALWARE Cobalt Strike Beacon Observed"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "count"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"117369")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "alert.signature"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"SURICATA STREAM ESTABLISHED packet out of window"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "count"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"103198")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "alert.signature"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"SURICATA STREAM Packet with invalid ack"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "count"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"21960")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "alert.signature"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"SURICATA STREAM ESTABLISHED invalid ack"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "count"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"21920")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"{")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "alert.signature"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),'"ET JA3 Hash - [Abuse.ch] Possible Dridex"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#7EE787"}}),'  "count"'),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"16870")),"\n",(0,t.yg)("span",d({parentName:"code"},{"data-line":""}),(0,t.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,t.yg)("p",null,"Hundreds of thousands of alerts! Maybe I'm just interested in one per hour per\nhost affected host pair? Here's the pipeline for this:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),'from /tmp/eve.json --follow\n| where #schema == "suricata.alert"\n| deduplicate src_ip, dest_ip, alert.signature --timeout 1 hour\n| import\n')),(0,t.yg)("h2",d({},{id:"produce-a-finite-amount-of-retro-lookups"}),"Produce a finite amount of retro lookups"),(0,t.yg)("p",null,"The ",(0,t.yg)("a",d({parentName:"p"},{href:"/v4.23/operators/lookup"}),(0,t.yg)("inlineCode",{parentName:"a"},"lookup"))," operator offers automated live and retro\nmatching. For every context update, it generates a point query to locate events\nwith the given value. For frequent data points, e.g., the IP address ",(0,t.yg)("inlineCode",{parentName:"p"},"127.0.0.1"),",\nthis can create a massive amount of retro hits."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"deduplicate")," operator can avoid potential overload and reduce retro matches\nto a constant number of hits. For example, to receive at most 100 hits from a\nretrospective lookup, use this pipeline:"),(0,t.yg)("pre",null,(0,t.yg)("code",d({parentName:"pre"},{}),"lookup --retro feodo --field dest_ip\n| deduplicate --limit 100 feodo.value\n")))}b.isMDXComponent=!0}}]);