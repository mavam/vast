"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26826],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),d=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(a),h=n,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||s;return a?i.createElement(u,r(r({ref:t},l),{},{components:a})):i.createElement(u,r({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:n,r[1]=o;for(var d=2;d<s;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},79415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>_,frontMatter:()=>u,metadata:()=>y,toc:()=>k});var i=a(3905),n=Object.defineProperty,s=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&l(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&l(e,a,t[a]);return e},p=(e,t)=>s(e,r(t)),h=(e,t)=>{var a={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&d.call(e,i)&&(a[i]=e[i]);return a};const u={sidebar_position:5},b="Show available schemas",y={unversionedId:"user-guides/show-available-schemas",id:"version-v4.17/user-guides/show-available-schemas",title:"Show available schemas",description:"When you write a pipeline, you often reference field names. If you do not know",source:"@site/versioned_docs/version-v4.17/user-guides/show-available-schemas.md",sourceDirName:"user-guides",slug:"/user-guides/show-available-schemas",permalink:"/v4.17/user-guides/show-available-schemas",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.17/user-guides/show-available-schemas.md",tags:[],version:"v4.17",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Export from a node",permalink:"/v4.17/user-guides/export-from-a-node/"},next:{title:"Transform data at rest",permalink:"/v4.17/user-guides/transform-data-at-rest"}},f={},k=[],g={toc:k},v="wrapper";function _(e){var t=e,{components:a}=t,n=h(t,["components"]);return(0,i.kt)(v,p(m(m({},g),n),{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",m({},{id:"show-available-schemas"}),"Show available schemas"),(0,i.kt)("p",null,"When you write a pipeline, you often reference field names. If you do not know\nthe shape of your data, you can look up available\n",(0,i.kt)("a",m({parentName:"p"},{href:"/v4.17/data-model/schemas"}),"schemas"),", i.e., the record types describing a table."),(0,i.kt)("p",null,"Many SQL databases have a ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW TABLES")," command to show all available table\nnames, and ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW COLUMNS")," to display the individual fiels of a given table."),(0,i.kt)("p",null,"Similarly, our ",(0,i.kt)("a",m({parentName:"p"},{href:"/v4.17/operators/show"}),(0,i.kt)("inlineCode",{parentName:"a"},"show"))," operator offers the\nability for introspection. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"show fields")," to display all schema fields, with\nwith one field per event:"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{}),'show fields | where schema == "zeek.dns" | write json -c\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "ts", "path": ["ts"], "index": [0], "type": {"kind": "timestamp", "category": "atomic", "lists": 0, "name": "timestamp", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "uid", "path": ["uid"], "index": [1], "type": {"kind": "string", "category": "atomic", "lists": 0, "name": "", "attributes": [{"key": "index", "value": "hash"}]}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "orig_h", "path": ["id", "orig_h"], "index": [2, 0], "type": {"kind": "ip", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "orig_p", "path": ["id", "orig_p"], "index": [2, 1], "type": {"kind": "port", "category": "atomic", "lists": 0, "name": "port", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "resp_h", "path": ["id", "resp_h"], "index": [2, 2], "type": {"kind": "ip", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "resp_p", "path": ["id", "resp_p"], "index": [2, 3], "type": {"kind": "port", "category": "atomic", "lists": 0, "name": "port", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "proto", "path": ["proto"], "index": [3], "type": {"kind": "string", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "trans_id", "path": ["trans_id"], "index": [4], "type": {"kind": "uint", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "rtt", "path": ["rtt"], "index": [5], "type": {"kind": "duration", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "query", "path": ["query"], "index": [6], "type": {"kind": "string", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "qclass", "path": ["qclass"], "index": [7], "type": {"kind": "uint", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "qclass_name", "path": ["qclass_name"], "index": [8], "type": {"kind": "string", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "qtype", "path": ["qtype"], "index": [9], "type": {"kind": "uint", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "qtype_name", "path": ["qtype_name"], "index": [10], "type": {"kind": "string", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "rcode", "path": ["rcode"], "index": [11], "type": {"kind": "uint", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "rcode_name", "path": ["rcode_name"], "index": [12], "type": {"kind": "string", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "AA", "path": ["AA"], "index": [13], "type": {"kind": "bool", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "TC", "path": ["TC"], "index": [14], "type": {"kind": "bool", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "RD", "path": ["RD"], "index": [15], "type": {"kind": "bool", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "RA", "path": ["RA"], "index": [16], "type": {"kind": "bool", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "Z", "path": ["Z"], "index": [17], "type": {"kind": "uint", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "answers", "path": ["answers"], "index": [18], "type": {"kind": "string", "category": "atomic", "lists": 1, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "TTLs", "path": ["TTLs"], "index": [19], "type": {"kind": "duration", "category": "atomic", "lists": 1, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "rejected", "path": ["rejected"], "index": [20], "type": {"kind": "bool", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n{"schema": "zeek.dns", "schema_id": "1581ec5887691e0b", "field": "_write_ts", "path": ["_write_ts"], "index": [21], "type": {"kind": "time", "category": "atomic", "lists": 0, "name": "", "attributes": []}}\n'))))}_.isMDXComponent=!0}}]);