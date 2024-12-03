"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70405],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},y=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=i(t),g=r,d=c["".concat(l,".").concat(g)]||c[g]||m[g]||p;return t?n.createElement(d,o(o({ref:a},y),{},{components:t})):n.createElement(d,o({ref:a},y))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<p;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},55252:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>F,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>f,toc:()=>N});var n=t(15680),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&y(e,t,a[t]);if(s)for(var t of s(a))i.call(a,t)&&y(e,t,a[t]);return e},m=(e,a)=>p(e,o(a)),g=(e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const d={},u="community_id",f={unversionedId:"tql2/functions/community_id",id:"version-v4.23/tql2/functions/community_id",title:"community_id",description:"Computes the Community ID for",source:"@site/versioned_docs/version-v4.23/tql2/functions/community_id.md",sourceDirName:"tql2/functions",slug:"/tql2/functions/community_id",permalink:"/v4.23/tql2/functions/community_id",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.23/tql2/functions/community_id.md",tags:[],version:"v4.23",frontMatter:{},sidebar:"docsSidebar",previous:{title:"collect",permalink:"/v4.23/tql2/functions/collect"},next:{title:"count",permalink:"/v4.23/tql2/functions/count"}},F={},N=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Compute a Community ID from a flow 5-tuple",id:"compute-a-community-id-from-a-flow-5-tuple",level:3},{value:"Compute a Community ID from a host pair",id:"compute-a-community-id-from-a-host-pair",level:3}],h={toc:N},E="wrapper";function b(e){var a=e,{components:t}=a,r=g(a,["components"]);return(0,n.yg)(E,m(c(c({},h),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",c({},{id:"community_id"}),"community_id"),(0,n.yg)("p",null,"Computes the ",(0,n.yg)("a",c({parentName:"p"},{href:"https://github.com/corelight/community-id-spec"}),"Community ID")," for\na network connection/flow."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"community_id"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(src_ip"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"ip, dst_ip"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"ip, proto"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"str,")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"             [src_port"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, dst_port"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"int, seed"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"int]) "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"->"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," str"))))),(0,n.yg)("h2",c({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"community_id")," function computes a unique hash digest of a network\nconnection according to the ",(0,n.yg)("a",c({parentName:"p"},{href:"https://github.com/corelight/community-id-spec"}),"Community\nID"),"\nspec. The digest is useful for pivoting between multiple events that belong to\nthe same connection."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"src_ip")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"dst_ip")," parameters are required. The ",(0,n.yg)("inlineCode",{parentName:"p"},"proto")," string is also required and must be ",(0,n.yg)("inlineCode",{parentName:"p"},"tcp"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"udp"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"icmp")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"icmp6"),". ",(0,n.yg)("inlineCode",{parentName:"p"},"src_port")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"dst_port")," may only be specified if the other one is. ",(0,n.yg)("inlineCode",{parentName:"p"},"seed")," can be used to set the initial hashing seed."),(0,n.yg)("h2",c({},{id:"examples"}),"Examples"),(0,n.yg)("h3",c({},{id:"compute-a-community-id-from-a-flow-5-tuple"}),"Compute a Community ID from a flow 5-tuple"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"  x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," community_id"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(src_ip"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3.4"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", src_port"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"4584"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", dst_ip"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"43.3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"132.3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),",")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"                  dst_port"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3483"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", proto"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"tcp"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),")")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "1:koNcqhFRD5kb254ZrLsdv630jCM="'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))),(0,n.yg)("h3",c({},{id:"compute-a-community-id-from-a-host-pair"}),"Compute a Community ID from a host pair"),(0,n.yg)("p",null,"Because source and destination port are optional, it suffices to provide two IP\naddreses to compute a valid Community ID."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"from"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," {x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}})," community_id"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"(src_ip"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"1.2"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"3.4"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", dst_ip"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"43.3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"."),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"132.3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),", proto"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'"udp"'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),")}"))))),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"{x"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "1:7TrrMeH98PrUKC0ySu3RNmpUr48="'),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))))))}b.isMDXComponent=!0}}]);