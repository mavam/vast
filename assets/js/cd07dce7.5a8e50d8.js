"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55634],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>P,frontMatter:()=>y,metadata:()=>g,toc:()=>v});var r=t(15680),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&l(e,t,n[t]);if(c)for(var t of c(n))p.call(n,t)&&l(e,t,n[t]);return e},u=(e,n)=>o(e,i(n)),f=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const y={sidebar_custom_props:{connector:{loader:!0}}},m="nic",g={unversionedId:"connectors/nic",id:"version-v4.24/connectors/nic",title:"nic",description:"Reads bytes from a network interface card (NIC).",source:"@site/versioned_docs/version-v4.24/connectors/nic.md",sourceDirName:"connectors",slug:"/connectors/nic",permalink:"/connectors/nic",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/connectors/nic.md",tags:[],version:"v4.24",frontMatter:{sidebar_custom_props:{connector:{loader:!0}}},sidebar:"docsSidebar",previous:{title:"kafka",permalink:"/connectors/kafka"},next:{title:"s3",permalink:"/connectors/s3"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-s|--snaplen &lt;count&gt;</code>",id:"-s--snaplen-count",level:3},{value:"<code>-e|--emit-file-headers</code>",id:"-e--emit-file-headers",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},O="wrapper";function P(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.yg)(O,u(d(d({},b),a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",d({},{id:"nic"}),"nic"),(0,r.yg)("p",null,"Reads bytes from a network interface card (NIC)."),(0,r.yg)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),"nic <iface> [-s|--snaplen <count>] [-e|--emit-file-headers]\n")),(0,r.yg)("h2",d({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"nic")," loader uses libpcap to acquire packets from a network interface and\npacks them into blocks of bytes that represent PCAP packet records."),(0,r.yg)("p",null,"The received first packet triggers also emission of PCAP file header such that\ndownstream operators can treat the packet stream as valid PCAP capture file."),(0,r.yg)("p",null,"The default parser for the ",(0,r.yg)("inlineCode",{parentName:"p"},"nic")," loader is ",(0,r.yg)("a",d({parentName:"p"},{href:"/formats/pcap"}),(0,r.yg)("inlineCode",{parentName:"a"},"pcap")),"."),(0,r.yg)("h3",d({},{id:"-s--snaplen-count"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-s|--snaplen <count>")),(0,r.yg)("p",null,"Sets the snapshot length of the captured packets."),(0,r.yg)("p",null,"This value is an upper bound on the packet size. Packets larger than this size\nget truncated to ",(0,r.yg)("inlineCode",{parentName:"p"},"<count>")," bytes."),(0,r.yg)("p",null,"Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"262144"),"."),(0,r.yg)("h3",d({},{id:"-e--emit-file-headers"}),(0,r.yg)("inlineCode",{parentName:"h3"},"-e|--emit-file-headers")),(0,r.yg)("p",null,"Creates PCAP file headers for every flushed batch."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"nic")," connector emits chunk of bytes that represent a stream of packets.\nWhen setting ",(0,r.yg)("inlineCode",{parentName:"p"},"--emit-file-headers")," every chunk gets its own PCAP file header, as\nopposed to just the very first. This yields a continuous stream of concatenated\nPCAP files."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",d({parentName:"p"},{href:"/formats/pcap"}),(0,r.yg)("inlineCode",{parentName:"a"},"pcap"))," parser can handle such concatenated traces, and\noptionally re-emit thes file headers as separate events."),(0,r.yg)("h2",d({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Read PCAP packets from ",(0,r.yg)("inlineCode",{parentName:"p"},"eth0"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),"from nic eth0\n")),(0,r.yg)("p",null,"Perform the equivalent of ",(0,r.yg)("inlineCode",{parentName:"p"},"tcpdump -i en0 -w trace.pcap"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",d({parentName:"pre"},{}),"load nic en0 | save file trace.pcap\n")))}P.isMDXComponent=!0}}]);