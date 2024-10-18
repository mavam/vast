"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88369],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=i(r),u=n,m=c["".concat(s,".").concat(u)]||c[u]||y[u]||o;return r?a.createElement(m,p(p({ref:t},d),{},{components:r})):a.createElement(m,p({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,p[1]=l;for(var i=2;i<o;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>h,toc:()=>v});var a=r(15680),n=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&d(e,r,t[r]);return e},y=(e,t)=>o(e,p(t)),u=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};const m={},g="load_http",h={unversionedId:"tql2/operators/load_http",id:"version-v4.22/tql2/operators/load_http",title:"load_http",description:"Loads a byte stream via HTTP.",source:"@site/versioned_docs/version-v4.22/tql2/operators/load_http.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_http",permalink:"/tql2/operators/load_http",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/tql2/operators/load_http.md",tags:[],version:"v4.22",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_google_cloud_pubsub",permalink:"/tql2/operators/load_google_cloud_pubsub"},next:{title:"load_tcp",permalink:"/tql2/operators/load_tcp"}},f={},v=[{value:"Description",id:"description",level:2},{value:"<code>url: str</code>",id:"url-str",level:3},{value:"<code>method = str (optional)</code>",id:"method--str-optional",level:3},{value:"<code>params = record (optional)</code>",id:"params--record-optional",level:3},{value:"<code>headers = record (optional)</code>",id:"headers--record-optional",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},N="wrapper";function O(e){var t=e,{components:r}=t,n=u(t,["components"]);return(0,a.yg)(N,y(c(c({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",c({},{id:"load_http"}),"load_http"),(0,a.yg)("p",null,"Loads a byte stream via HTTP."),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_http"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," url"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [method"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, params"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"record, headers"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"record]"))))),(0,a.yg)("h2",c({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"save_http")," operator performs a HTTP request and returns the response."),(0,a.yg)("h3",c({},{id:"url-str"}),(0,a.yg)("inlineCode",{parentName:"h3"},"url: str")),(0,a.yg)("p",null,"The URL to request from. The ",(0,a.yg)("inlineCode",{parentName:"p"},"http://")," scheme can be omitted."),(0,a.yg)("h3",c({},{id:"method--str-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"method = str (optional)")),(0,a.yg)("p",null,"The HTTP method, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"POST")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"GET"),"."),(0,a.yg)("p",null,"The default is ",(0,a.yg)("inlineCode",{parentName:"p"},'"GET"'),"."),(0,a.yg)("h3",c({},{id:"params--record-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"params = record (optional)")),(0,a.yg)("p",null,"The query parameters for the request."),(0,a.yg)("h3",c({},{id:"headers--record-optional"}),(0,a.yg)("inlineCode",{parentName:"h3"},"headers = record (optional)")),(0,a.yg)("p",null,"The headers for the request."),(0,a.yg)("h2",c({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Fetch the API response of ",(0,a.yg)("inlineCode",{parentName:"p"},"example.org/api"),":"),(0,a.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,a.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,a.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,a.yg)("span",c({parentName:"code"},{"data-line":""}),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_http"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "example.org/api"'),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", headers"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"X-API-Token"'),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "0000-0000-0000"'),(0,a.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}O.isMDXComponent=!0}}]);