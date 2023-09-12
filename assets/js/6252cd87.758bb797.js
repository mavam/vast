"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>g,frontMatter:()=>h,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const h={},f="http",k={unversionedId:"connectors/http",id:"connectors/http",title:"http",description:"Loads bytes via HTTP.",source:"@site/docs/connectors/http.md",sourceDirName:"connectors",slug:"/connectors/http",permalink:"/next/connectors/http",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/connectors/http.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"ftps",permalink:"/next/connectors/ftps"},next:{title:"https",permalink:"/next/connectors/https"}},v={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;method&gt;</code>",id:"method",level:3},{value:"<code>&lt;url&gt;</code>",id:"url",level:3},{value:"<code>&lt;item&gt;</code>",id:"item",level:3},{value:"Examples",id:"examples",level:2}],b={toc:y},T="wrapper";function g(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(T,m(c(c({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"http"}),"http"),(0,r.kt)("p",null,"Loads bytes via HTTP."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"http [<method>] <url> [<item>..]\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," loader performs a HTTP request and returns the bytes of the HTTP\nresponse body."),(0,r.kt)("p",null,"We modeled the ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," loader after ",(0,r.kt)("a",c({parentName:"p"},{href:"https://httpie.io/"}),"HTTPie"),", which comes\nwith an expressive and intuitive command-line syntax. We recommend to study the\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://httpie.io/docs/cli/examples"}),"HTTPie documentation")," to understand the\nfull extent of the command-line interface. In many cases, you can perform an\n",(0,r.kt)("em",{parentName:"p"},"exact")," copy of the HTTPie command line and use it drop-in with the HTTP loader,\ne.g.,  the invocation"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"http PUT pie.dev/put X-API-Token:123 foo=bar\n")),(0,r.kt)("p",null,"becomes"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"from http PUT pie.dev/put X-API-Token:123 foo=bar\n")),(0,r.kt)("p",null,"More generally, if your HTTPie command line is ",(0,r.kt)("inlineCode",{parentName:"p"},"http X")," then you can write ",(0,r.kt)("inlineCode",{parentName:"p"},"from\nhttp X")," to obtain an event stream or ",(0,r.kt)("inlineCode",{parentName:"p"},"load http X")," for a byte stream."),(0,r.kt)("h3",c({},{id:"method"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<method>")),(0,r.kt)("p",null,"The HTTP method, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),"."),(0,r.kt)("p",null,"The argument is optional and its default value depends on the command line:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")," for requests without body"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"POST")," for requests with body")),(0,r.kt)("p",null,"For example, the following operator configurations are identical:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"from http GET pie.dev/get\nfrom http pie.dev/get\n")),(0,r.kt)("p",null,"Similarly, when we provide data for the request body, the following two\ninvocations are identical:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"from http POST pie.dev/post foo=bar\nfrom http pie.dev/post foo=bar\n")),(0,r.kt)("h3",c({},{id:"url"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<url>")),(0,r.kt)("p",null,"The HTTP request URL."),(0,r.kt)("p",null,"The scheme is ",(0,r.kt)("inlineCode",{parentName:"p"},"http://")," and can be omitted from the argument. For example, the\nfollowing two invocations are identical:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"from http pie.dev/get\nfrom http http://pie.dev/get\n")),(0,r.kt)("h3",c({},{id:"item"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<item>")),(0,r.kt)("p",null,"A HTTP request item in the form of a key-value pair."),(0,r.kt)("p",null,"The character separating the key-value pair determines the semantics of the\nitem:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key:value")," a HTTP header with name ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," and value ",(0,r.kt)("inlineCode",{parentName:"li"},"value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key=value")," a data field in the HTTP request body with ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," as string key and\n",(0,r.kt)("inlineCode",{parentName:"li"},"value")," as string value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key:=value")," a data field in the HTTP request body with ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," as string key and\n",(0,r.kt)("inlineCode",{parentName:"li"},"value")," as JSON value")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," to escape characters that shouldn't be treated as separators."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Download and process a ",(0,r.kt)("a",c({parentName:"p"},{href:"/next/formats/csv"}),"CSV")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"from http example.org/file.csv read csv\n")),(0,r.kt)("p",null,"Process a Zstd-compressed ",(0,r.kt)("a",c({parentName:"p"},{href:"/next/formats/zeek-tsv"}),"Zeek TSV")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"load http example.org/gigantic.log.zst\n| decompress zstd\n| read zeek-tsv\n")),(0,r.kt)("p",null,"Send a HTTP PUT request with a ",(0,r.kt)("inlineCode",{parentName:"p"},"X-API-Token")," header and body of ",(0,r.kt)("inlineCode",{parentName:"p"},'{"foo": 42}'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"from http PUT pie.dev/put X-API-Token:123 foo=42\n")))}g.isMDXComponent=!0}}]);