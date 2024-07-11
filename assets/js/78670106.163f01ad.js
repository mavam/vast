"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>_,frontMatter:()=>f,metadata:()=>v,toc:()=>k});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,s(t)),d=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r};const f={sidebar_custom_props:{format:{parser:!0}}},y="suricata",v={unversionedId:"formats/suricata",id:"version-v4.18/formats/suricata",title:"suricata",description:"Reads Suricata's EVE JSON output. The parser is an alias",source:"@site/versioned_docs/version-v4.18/formats/suricata.md",sourceDirName:"formats",slug:"/formats/suricata",permalink:"/formats/suricata",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/formats/suricata.md",tags:[],version:"v4.18",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"ssv",permalink:"/formats/ssv"},next:{title:"syslog",permalink:"/formats/syslog"}},h={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],g={toc:k},b="wrapper";function _(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,a.kt)(b,m(u(u({},g),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"suricata"}),"suricata"),(0,a.kt)("p",null,"Reads ",(0,a.kt)("a",u({parentName:"p"},{href:"https://suricata.io"}),"Suricata"),"'s ",(0,a.kt)("a",u({parentName:"p"},{href:"https://suricata.readthedocs.io/en/latest/output/eve/eve-json-output.html"}),"EVE JSON")," output. The parser is an alias\nfor ",(0,a.kt)("a",u({parentName:"p"},{href:"/formats/json"}),(0,a.kt)("inlineCode",{parentName:"a"},"json"))," with the arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--selector=event_type:suricata")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--ndjson"))),(0,a.kt)("p",null,"All other options from ",(0,a.kt)("a",u({parentName:"p"},{href:"/formats/json"}),(0,a.kt)("inlineCode",{parentName:"a"},"json"))," are also supported."),(0,a.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"suricata\n")),(0,a.kt)("h2",u({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",u({parentName:"p"},{href:"https://suricata.io"}),"Suricata")," network security monitor converts network\ntraffic into a stream of metadata events and provides a rule matching engine to\ngenerate alerts. Suricata emits events in the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://suricata.readthedocs.io/en/latest/output/eve/eve-json-output.html"}),"EVE JSON")," format. The\noutput is a single stream of events where the ",(0,a.kt)("inlineCode",{parentName:"p"},"event_type")," field disambiguates\nthe event type."),(0,a.kt)("p",null,"Tenzir's ",(0,a.kt)("a",u({parentName:"p"},{href:"/formats/json"}),(0,a.kt)("inlineCode",{parentName:"a"},"json"))," can handle EVE JSON correctly, but for the schema\nnames to match the value from the ",(0,a.kt)("inlineCode",{parentName:"p"},"event_type")," field, you need to pass the\noption ",(0,a.kt)("inlineCode",{parentName:"p"},"--selector=event_type:suricata"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"suricata")," parser does this by\ndefault."),(0,a.kt)("h2",u({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"Here's an ",(0,a.kt)("inlineCode",{parentName:"p"},"eve.log")," sample:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{"timestamp":"2011-08-12T14:52:57.716360+0200","flow_id":1031464864740687,"pcap_cnt":83,"event_type":"alert","src_ip":"147.32.84.165","src_port":1181,"dest_ip":"78.40.125.4","dest_port":6667,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2017318,"rev":4,"signature":"ET CURRENT_EVENTS SUSPICIOUS IRC - PRIVMSG *.(exe|tar|tgz|zip)  download command","category":"Potentially Bad Traffic","severity":2},"flow":{"pkts_toserver":27,"pkts_toclient":35,"bytes_toserver":2302,"bytes_toclient":4520,"start":"2011-08-12T14:47:24.357711+0200"},"payload":"UFJJVk1TRyAjemFyYXNhNDggOiBzbXNzLmV4ZSAoMzY4KQ0K","payload_printable":"PRIVMSG #zarasa48 : smss.exe (368)\\r\\n","stream":0,"packet":"AB5J2xnDCAAntbcZCABFAABMGV5AAIAGLlyTIFSlTih9BASdGgvw0QvAxUWHdVAY+rCL4gAAUFJJVk1TRyAjemFyYXNhNDggOiBzbXNzLmV4ZSAoMzY4KQ0K","packet_info":{"linktype":1}}\n{"timestamp":"2011-08-12T14:55:22.154618+0200","flow_id":2247896271051770,"pcap_cnt":775,"event_type":"dns","src_ip":"147.32.84.165","src_port":1141,"dest_ip":"147.32.80.9","dest_port":53,"proto":"UDP","dns":{"type":"query","id":553,"rrname":"irc.freenode.net","rrtype":"A","tx_id":0}}\n{"timestamp":"2011-08-12T16:59:22.181050+0200","flow_id":472067367468746,"pcap_cnt":25767,"event_type":"fileinfo","src_ip":"74.207.254.18","src_port":80,"dest_ip":"147.32.84.165","dest_port":1046,"proto":"TCP","http":{"hostname":"www.nmap.org","url":"/","http_user_agent":"Mozilla/4.0 (compatible)","http_content_type":"text/html","http_method":"GET","protocol":"HTTP/1.1","status":301,"redirect":"http://nmap.org/","length":301},"app_proto":"http","fileinfo":{"filename":"/","magic":"HTML document, ASCII text","gaps":false,"state":"CLOSED","md5":"70041821acf87389e40ddcb092004184","sha1":"10395ab3566395ca050232d2c1a0dbad69eb5fd2","sha256":"2e4c462b3424afcc04f43429d5f001e4ef9a28143bfeefb9af2254b4df3a7c1a","stored":true,"file_id":1,"size":301,"tx_id":0}}\n')),(0,a.kt)("p",null,"Import the log as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"tenzir 'read suricata | import' < eve.log\n")),(0,a.kt)("p",null,"Instead of writing to a file, Suricata can also log to a UNIX domain socket that\nTenzir can then read from. This saves a filesystem round-trip. This requires the\nfollowing settings in your ",(0,a.kt)("inlineCode",{parentName:"p"},"suricata.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"outputs:\n  - eve-log:\n    enabled: yes\n    filetype: unix_stream\n    filename: eve.sock\n")),(0,a.kt)("p",null,"Suricata creates ",(0,a.kt)("inlineCode",{parentName:"p"},"eve.sock")," upon startup. Thereafter, you can read from the\nsocket via netcat:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"nc -vlkU eve.sock | tenzir 'read suricata | ...'\n")),(0,a.kt)("p",null,"Or natively via this Tenzir pipeline:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"from file --uds eve.sock read suricata\n")))}_.isMDXComponent=!0}}]);