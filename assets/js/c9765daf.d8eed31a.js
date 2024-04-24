"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>v,frontMatter:()=>g,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&m(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const g={sidebar_custom_props:{format:{parser:!0}}},f="gelf",k={unversionedId:"formats/gelf",id:"version-Tenzir v4.12/formats/gelf",title:"gelf",description:"Reads Graylog Extended Log Format (GELF) events.",source:"@site/versioned_docs/version-Tenzir v4.12/formats/gelf.md",sourceDirName:"formats",slug:"/formats/gelf",permalink:"/formats/gelf",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.12/formats/gelf.md",tags:[],version:"Tenzir v4.12",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"feather",permalink:"/formats/feather"},next:{title:"grok",permalink:"/formats/grok"}},N={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],b={toc:y},h="wrapper";function v(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(h,c(d(d({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"gelf"}),"gelf"),(0,r.kt)("p",null,"Reads Graylog Extended Log Format (GELF) events."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"gelf\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gelf")," parser reads events formatted in ",(0,r.kt)("a",d({parentName:"p"},{href:"https://go2docs.graylog.org/5-0/getting_in_log_data/gelf.html"}),"Graylog Extended Log Format\n(GELF)"),", a format that predominantly\n",(0,r.kt)("a",d({parentName:"p"},{href:"/integrations/graylog"}),"Graylog")," uses for importing and exporting\nof structured data."),(0,r.kt)("p",null,"Tenzir parses GELF as a stream of JSON records separated by a ",(0,r.kt)("inlineCode",{parentName:"p"},"\\0")," byte. GELF\nmessages can also occur one at a time (e.g., framed in a HTTP body, UDP packet,\nor Kafka message) in which case there is no separator."),(0,r.kt)("p",null,"GELF also supports a ",(0,r.kt)("em",{parentName:"p"},"chunked mode")," where a single message can be split into at\nmost 128 chunks. Tenzir currently does not support this mode. Please ",(0,r.kt)("a",d({parentName:"p"},{href:"/discord"}),"reach\nout")," if you would like to see support in future versions."),(0,r.kt)("p",null,"According to version 1.1 of the specification, a GELF message has the following\nstructure:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Requirement"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"GELF spec version: ",(0,r.kt)("inlineCode",{parentName:"td"},'"1.1"')),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Host, source, or application name"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"short_message")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"A short descriptive message"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"full_message")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Long message, possibly with a backtrace"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2796")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"UNIX epoch seconds; optional milliseconds"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2796")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"level")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Standard syslog level, defaults to 1"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2796")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"facility")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Message tag"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"linenumber")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Line causing the error"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"file")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"File causing the error"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"_","[additional field]"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string / number"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"User-defined data"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2796")))),(0,r.kt)("p",null,"The requirement column defines whether a field is mandatory (\u2705), optional (\u2796),\nor deprecated (\u274c)."),(0,r.kt)("p",null,"Here is an example GELF message:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "version": "1.1",\n  "host": "example",\n  "short_message": "TL;DR",\n  "full_message": "The whole enchilada",\n  "timestamp": 1385053862.3072,\n  "level": 1,\n  "_user_id": 1337,\n  "_gl2_remote_ip": "6.6.6.6",\n}\n')),(0,r.kt)("p",null,"By convention, Graylog uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"_gl2_")," prefix for its own fields. There is no\nformalized convention for naming, and exact field names may depend on your\nconfiguration."),(0,r.kt)("admonition",d({},{title:"Boolean values",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"Graylog's implementation of GELF does not support boolean values and ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/Graylog2/graylog2-server/issues/5504"}),"drops them\non ingest"),".")),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Accept GELF from a ",(0,r.kt)("a",d({parentName:"p"},{href:"/connectors/tcp"}),"TCP")," socket:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"from tcp://1.2.3.4 read gelf\n")),(0,r.kt)("p",null,"Read GELF messages from ",(0,r.kt)("a",d({parentName:"p"},{href:"/connectors/kafka"}),"Kafka")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"graylog"),"\ntopic:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"from kafka --topic graylog read gelf\n")))}v.isMDXComponent=!0}}]);