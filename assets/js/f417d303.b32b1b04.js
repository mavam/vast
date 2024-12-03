"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20441],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>f});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),s=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(i.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=n,f=d["".concat(i,".").concat(u)]||d[u]||y[u]||o;return t?r.createElement(f,p(p({ref:a},c),{},{components:t})):r.createElement(f,p({ref:a},c))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[d]="string"==typeof e?e:n,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85159:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>g,default:()=>k,frontMatter:()=>f,metadata:()=>m,toc:()=>v});var r=t(15680),n=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&c(e,t,a[t]);if(l)for(var t of l(a))s.call(a,t)&&c(e,t,a[t]);return e},y=(e,a)=>o(e,p(a)),u=(e,a)=>{var t={};for(var r in e)i.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))a.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const f={},g="load_nic",m={unversionedId:"tql2/operators/load_nic",id:"version-v4.24/tql2/operators/load_nic",title:"load_nic",description:"Loads bytes from a network interface card (NIC).",source:"@site/versioned_docs/version-v4.24/tql2/operators/load_nic.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_nic",permalink:"/tql2/operators/load_nic",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/load_nic.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_kafka",permalink:"/tql2/operators/load_kafka"},next:{title:"load_s3",permalink:"/tql2/operators/load_s3"}},h={},v=[{value:"Description",id:"description",level:2},{value:"<code>iface: str</code>",id:"iface-str",level:3},{value:"<code>snaplen = int (optional)</code>",id:"snaplen--int-optional",level:3},{value:"<code>emit_file_headers = bool (optional)</code>",id:"emit_file_headers--bool-optional",level:3},{value:"Examples",id:"examples",level:2},{value:"Read PCAP packets from <code>eth0</code>",id:"read-pcap-packets-from-eth0",level:3},{value:"Perform the equivalent of <code>tcpdump -i en0 -w trace.pcap</code>",id:"perform-the-equivalent-of-tcpdump--i-en0--w-tracepcap",level:3}],b={toc:v},N="wrapper";function k(e){var a=e,{components:t}=a,n=u(a,["components"]);return(0,r.yg)(N,y(d(d({},b),n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",d({},{id:"load_nic"}),"load_nic"),(0,r.yg)("p",null,"Loads bytes from a network interface card (NIC)."),(0,r.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",d({parentName:"code"},{"data-line":""}),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_nic"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," iface"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [snaplen"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, emit_file_headers"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,r.yg)("h2",d({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"load_nic")," operator uses libpcap to acquire packets from a network interface and\npacks them into blocks of bytes that represent PCAP packet records."),(0,r.yg)("p",null,"The received first packet triggers also emission of PCAP file header such that\ndownstream operators can treat the packet stream as valid PCAP capture file."),(0,r.yg)("h3",d({},{id:"iface-str"}),(0,r.yg)("inlineCode",{parentName:"h3"},"iface: str")),(0,r.yg)("p",null,"The interface to load bytes from."),(0,r.yg)("h3",d({},{id:"snaplen--int-optional"}),(0,r.yg)("inlineCode",{parentName:"h3"},"snaplen = int (optional)")),(0,r.yg)("p",null,"Sets the snapshot length of the captured packets."),(0,r.yg)("p",null,"This value is an upper bound on the packet size. Packets larger than this size\nget truncated to ",(0,r.yg)("inlineCode",{parentName:"p"},"snaplen")," bytes."),(0,r.yg)("p",null,"Defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"262144"),"."),(0,r.yg)("h3",d({},{id:"emit_file_headers--bool-optional"}),(0,r.yg)("inlineCode",{parentName:"h3"},"emit_file_headers = bool (optional)")),(0,r.yg)("p",null,"Creates PCAP file headers for every flushed batch."),(0,r.yg)("p",null,"The operator emits chunk of bytes that represent a stream of packets.\nWhen setting ",(0,r.yg)("inlineCode",{parentName:"p"},"emit_file_headers")," every chunk gets its own PCAP file header, as\nopposed to just the very first. This yields a continuous stream of concatenated\nPCAP files."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",d({parentName:"p"},{href:"/tql2/operators/read_pcap"}),(0,r.yg)("inlineCode",{parentName:"a"},"pcap"))," parser can handle such concatenated traces, and\noptionally re-emit thes file headers as separate events."),(0,r.yg)("h2",d({},{id:"examples"}),"Examples"),(0,r.yg)("h3",d({},{id:"read-pcap-packets-from-eth0"}),"Read PCAP packets from ",(0,r.yg)("inlineCode",{parentName:"h3"},"eth0")),(0,r.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",d({parentName:"code"},{"data-line":""}),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_nic"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "eth0"')),"\n",(0,r.yg)("span",d({parentName:"code"},{"data-line":""}),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_pcap"))))),(0,r.yg)("h3",d({},{id:"perform-the-equivalent-of-tcpdump--i-en0--w-tracepcap"}),"Perform the equivalent of ",(0,r.yg)("inlineCode",{parentName:"h3"},"tcpdump -i en0 -w trace.pcap")),(0,r.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,r.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",d({parentName:"code"},{"data-line":""}),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_nic"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "en0"')),"\n",(0,r.yg)("span",d({parentName:"code"},{"data-line":""}),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_pcap")),"\n",(0,r.yg)("span",d({parentName:"code"},{"data-line":""}),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_pcap")),"\n",(0,r.yg)("span",d({parentName:"code"},{"data-line":""}),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_file"),(0,r.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "trace.pcap"'))))))}k.isMDXComponent=!0}}]);