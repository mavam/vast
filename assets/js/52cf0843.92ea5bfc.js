"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9310],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,h=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},92353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>k,frontMatter:()=>h,metadata:()=>g,toc:()=>v});var r=t(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(s)for(var t of s(n))p.call(n,t)&&c(e,t,n[t]);return e},d=(e,n)=>o(e,i(n)),y=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const h={sidebar_position:11},m="Enrich with Network Inventory",g={unversionedId:"usage/enrich-with-network-inventory/README",id:"version-v4.20/usage/enrich-with-network-inventory/README",title:"Enrich with Network Inventory",description:"Tenzir's contextualization framework features [lookup",source:"@site/versioned_docs/version-v4.20/usage/enrich-with-network-inventory/README.md",sourceDirName:"usage/enrich-with-network-inventory",slug:"/usage/enrich-with-network-inventory/",permalink:"/v4.20/usage/enrich-with-network-inventory/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/usage/enrich-with-network-inventory/README.md",tags:[],version:"v4.20",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Enrich with Threat Intel",permalink:"/v4.20/usage/enrich-with-threat-intel/"},next:{title:"Deduplicate events",permalink:"/v4.20/usage/deduplicate-events"}},f={},v=[{value:"Populate subnet mappings from a CSV file",id:"populate-subnet-mappings-from-a-csv-file",level:2},{value:"Enrich IP addresses with the subnet table",id:"enrich-ip-addresses-with-the-subnet-table",level:2}],b={toc:v},w="wrapper";function k(e){var n=e,{components:t}=n,a=y(n,["components"]);return(0,r.yg)(w,d(u(u({},b),a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"enrich-with-network-inventory"}),"Enrich with Network Inventory"),(0,r.yg)("p",null,"Tenzir's contextualization framework features ",(0,r.yg)("a",u({parentName:"p"},{href:"/v4.20/contexts/lookup-table"}),"lookup\ntables")," that you can use to\n",(0,r.yg)("a",u({parentName:"p"},{href:"/v4.20/operators/enrich"}),(0,r.yg)("inlineCode",{parentName:"a"},"enrich"))," your pipelines. Lookup tables have one\nunique property that makes them attractive for tracking information associated\nwith CIDR subnets: when you use ",(0,r.yg)("inlineCode",{parentName:"p"},"subnet")," values as keys, you can probe the\nlookup table with ",(0,r.yg)("inlineCode",{parentName:"p"},"ip")," values and will get a longest-prefix match."),(0,r.yg)("p",null,"To illustrate, consider this lookup table:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{}),"10.0.0.0/22 \u2192 Machines\n10.0.0.0/24 \u2192 Servers\n10.0.1.0/24 \u2192 Clients\n")),(0,r.yg)("p",null,"When you have subnets as keys as above, you can query them with an IP address\nduring enrichment. Say you want to enrich IP address ",(0,r.yg)("inlineCode",{parentName:"p"},"10.0.0.1"),". Since the\nlongest (bitwise) prefix match is ",(0,r.yg)("inlineCode",{parentName:"p"},"10.0.0.0/24"),", you will get ",(0,r.yg)("inlineCode",{parentName:"p"},"Servers")," as a\nresult. The same goes for IP address ",(0,r.yg)("inlineCode",{parentName:"p"},"10.0.0.255"),", but ",(0,r.yg)("inlineCode",{parentName:"p"},"10.0.1.1")," will yield\n",(0,r.yg)("inlineCode",{parentName:"p"},"Clients"),". The IP address ",(0,r.yg)("inlineCode",{parentName:"p"},"10.0.2.1")," yields Machines, since it is neither in\n",(0,r.yg)("inlineCode",{parentName:"p"},"10.0.0.0/24")," nor ",(0,r.yg)("inlineCode",{parentName:"p"},"10.0.1.0/24"),", but ",(0,r.yg)("inlineCode",{parentName:"p"},"10.0.0.0/21"),". The IP adress ",(0,r.yg)("inlineCode",{parentName:"p"},"10.0.4.1"),"\nwon't match at all, because it's not any of the three subnets."),(0,r.yg)("h2",u({},{id:"populate-subnet-mappings-from-a-csv-file"}),"Populate subnet mappings from a CSV file"),(0,r.yg)("p",null,"It's common to have Excel sheets or exported CSV files of inventory data. Let's\nconsider this example:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-csv",metastring:"title=inventory.csv",title:"inventory.csv"}),"subnet,owner,function\n10.0.0.0/22,John,machines\n10.0.0.0/24,Derek,servers\n10.0.1.0/24,Peter,clients\n")),(0,r.yg)("p",null,"First, create the context:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{}),"context create subnets lookup-table\n")),(0,r.yg)("p",null,"Then populate it:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{}),"from inventory.csv\n| context update subnets --key subnet\n")),(0,r.yg)("h2",u({},{id:"enrich-ip-addresses-with-the-subnet-table"}),"Enrich IP addresses with the subnet table"),(0,r.yg)("p",null,"Now that we have a lookup table with subnet keys, we can\n",(0,r.yg)("a",u({parentName:"p"},{href:"/v4.20/operators/enrich"}),(0,r.yg)("inlineCode",{parentName:"a"},"enrich"))," any data containing IP addresses with it.\nFor example, let's consider this simplified Suricata flow record:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json",metastring:"title=sample.json",title:"sample.json"}),'{\n  "timestamp": "2021-11-17T13:32:43.237882",\n  "src_ip": "10.0.0.1",\n  "src_port": 54402,\n  "dest_ip": "10.1.1.254",\n  "dest_port": 53,\n  "proto": "UDP",\n  "event_type": "flow",\n  "app_proto": "dns",\n}\n')),(0,r.yg)("p",null,"Let's use the ",(0,r.yg)("inlineCode",{parentName:"p"},"enrich")," operator to add the subnet context to all IP address\nfields:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{}),"from /tmp/sample.json\n| enrich subnets --field :ip\n")),(0,r.yg)("p",null,"This yields the following output:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2021-11-17T13:32:43.237882",\n  "src_ip": "10.0.0.1",\n  "src_port": 54402,\n  "dest_ip": "10.1.1.254",\n  "dest_port": 53,\n  "proto": "UDP",\n  "event_type": "flow",\n  "app_proto": "dns",\n  "subnets": {\n    "src_ip": {\n      "value": "10.0.0.1",\n      "timestamp": "2024-05-29T13:02:56.368882",\n      "mode": "enrich",\n      "context": {\n        "subnet": "10.0.0.0/24",\n        "owner": "Derek",\n        "function": "servers"\n      }\n    },\n    "dest_ip": {\n      "value": "10.1.1.254",\n      "timestamp": "2024-05-29T13:02:56.368882",\n      "mode": "enrich",\n      "context": null\n    }\n  }\n}\n')),(0,r.yg)("p",null,"We have enriched all IP addresses in the flow event with the ",(0,r.yg)("inlineCode",{parentName:"p"},"subnets")," context.\nNow go hunt down Derek!"))}k.isMDXComponent=!0}}]);