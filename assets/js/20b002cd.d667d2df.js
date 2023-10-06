"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16314],{3905:(e,t,a)=>{a.d(t,{Zo:()=>M,kt:()=>w});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},M=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,M=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,w=p["".concat(c,".").concat(d)]||p[d]||x[d]||l;return a?r.createElement(w,i(i({ref:t},M),{},{components:a})):r.createElement(w,i({ref:t},M))}));function w(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},70573:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>y,frontMatter:()=>w,metadata:()=>D,toc:()=>u});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,M=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&M(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&M(e,a,t[a]);return e},x=(e,t)=>l(e,i(t)),d=(e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a};const w={title:"A First Look at ES|QL",authors:"mavam",date:new Date("2023-08-29T00:00:00.000Z"),tags:["esql","elastic","tql","kusto","splunk","spl","pipelines","language"],comments:!0},m=void 0,D={permalink:"/blog/a-first-look-at-esql",source:"@site/blog/a-first-look-at-esql/index.md",title:"A First Look at ES|QL",description:"Elastic just released their new pipeline query language called",date:"2023-08-29T00:00:00.000Z",formattedDate:"August 29, 2023",tags:[{label:"esql",permalink:"/blog/tags/esql"},{label:"elastic",permalink:"/blog/tags/elastic"},{label:"tql",permalink:"/blog/tags/tql"},{label:"kusto",permalink:"/blog/tags/kusto"},{label:"splunk",permalink:"/blog/tags/splunk"},{label:"spl",permalink:"/blog/tags/spl"},{label:"pipelines",permalink:"/blog/tags/pipelines"},{label:"language",permalink:"/blog/tags/language"}],readingTime:7.35,hasTruncateMarker:!0,authors:[{name:"Matthias Vallentin",title:"Founder & CEO",url:"https://github.com/mavam",email:"matthias@tenzir.com",imageURL:"https://github.com/mavam.png",key:"mavam"}],frontMatter:{title:"A First Look at ES|QL",authors:"mavam",date:"2023-08-29T00:00:00.000Z",tags:["esql","elastic","tql","kusto","splunk","spl","pipelines","language"],comments:!0},prevItem:{title:"Tenzir v4.1",permalink:"/blog/tenzir-v4.1"},nextItem:{title:"Slash Your SIEM, Cloud, and Data Costs with Tenzir Security Data Pipelines",permalink:"/blog/slash-your-siem-cloud-and-data-costs-with-tenzir-security-data-pipelines"}},f={authorsImageUrls:[void 0]},u=[],A={toc:u},g="wrapper";function y(e){var t=e,{components:a}=t,n=d(t,["components"]);return(0,r.kt)(g,x(p(p({},A),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Elastic ",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.elastic.co/blog/elasticsearch-query-language-esql"}),"just released")," their new pipeline query language called\n",(0,r.kt)("strong",{parentName:"p"},"ES|QL"),". This is a conscious attempt to consolidate the language zoo in the\nElastic ecosystem\n(",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html"}),"queryDSL"),",\n",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/eql.html"}),"EQL"),",\n",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.elastic.co/guide/en/kibana/current/kuery-query.html"}),"KQL"),",\n",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/xpack-sql.html"}),"SQL"),",\n",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting-painless.html"}),"Painless"),",\n",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.elastic.co/guide/en/kibana/current/timelion.html"}),"Canvas/Timelion"),").\nElastic said that they worked on this effort for over a year. The\n",(0,r.kt)("a",p({parentName:"p"},{href:"https://esql-latest.docs-preview.app.elstc.co/guide/en/elasticsearch/reference/master/esql.html"}),"documentation")," is still sparse, but we still tried to read between\nthe lines to understand what this new pipeline language has to offer."),(0,r.kt)("p",null,(0,r.kt)("figure",p({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,r.kt)("svg",p({parentName:"figure"},{viewBox:"0 0 782.47 334.465",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1aW3PayFx1MDAxMn73r3Cxr4ky98u+2WBcdTAwMWLbiSGBdVx1MDAxY5/acslCgIyQiCQwTjb//bRkXHUwMDFiXHRxMWAgbDZylVx1MDAwYvXMqEc9/c3X3aPve/v7heihZ1x1MDAxN/7cL9hDy3SdRmDeXHUwMDE33sTygVx1MDAxZISO70FcdTAwMTNJ7kO/XHUwMDFmWEnPdlx1MDAxNPXCP9+9M3s9I1x1MDAxZGVYfvdxpO3aXduLQuj7P7jf3/+e/M/oiuxhlPRNpKkmTfPCXHUwMDBi30uUaqU5XCKEsVFcdTAwMDcnLIGiyG5Aa9N0QzttiUVcdTAwMDXr+KRuuWU0aJ66XHUwMDE3XHUwMDAzt2Kx/nE9Vdp0XFy3XHUwMDE2PbiPb2Ra7X5gp61hXHUwMDE0+Fx1MDAxZPuz04jaz1x1MDAwNsjIR+NcdTAwMWFm2IZcdIyaXHUwMDAzv99qe3ZcdTAwMTi/Olx1MDAxYUn9nmk50Vx1MDAwM8gwSqWm10pcdTAwMWWSSoaxKpXexyOIQDnlRd/1g1j5XHUwMDFm2I7/Uu23ptVpwVx1MDAxNLzGqE9cdTAwMTSYXtgzXHUwMDAzWI603/3Ta2GiXGastVZYKM04xel7tm2n1Y6SPjzVbyfGxlx1MDAxNFx1MDAwYiQ5yqxFrLV32khW/O/UxIHZtU/jIV7fdbNG8lx1MDAxYU9GXHUwMDFha7iNXHUwMDFijjLOkz6q32uYj0uNhSZcdTAwMTJRmLFcImLU7jpeJ/8417c6U7yj6XtRzflm55YjXHUwMDE2XHUwMDFmm13HTdZpJE48XHUwMDE1XGZ5VCuMyVx1MDAwZVxcp+Ulblx1MDAwNpO1gzFnjlx1MDAxY8DEqEPk99JWXHUwMDBitJiOZ1x1MDAwN5Nm8Vx1MDAwM6fleKZbn6JcdTAwMTFezy6PlsTIrMmtXHUwMDE52nEryJVKhD/eLIc5jFhe+lxmOszBylJQpVx1MDAxNkbdgV+6e7Bub0rlsONdXHUwMDBlr6tHXHUwMDFl/2vnUccyXHUwMDE2fVx0dU3aoFS+XHUwMDAydcKQMeik1ERcdTAwMGIlU83zQKc0YohKlq7Er4+5f7Zccrl/toQ4jPPSZ8RcdTAwMTHwXGYtuEx9/yXAXHJvmpVuUK25Z6dnJ5Wreuns5sHbfcCJLdJcdTAwMWNFXHUwMDA2je1KlVx1MDAxNkwxmmJoLuJgY1Tw91x1MDAxZlx1MDAwMtzH99tGXFxW4yYhx1x1MDAxNclLnyHHJIJ4hpHUSi9BLrgptVx1MDAwNt7VtVuvfzk8872K/Ov8fOchRzUxXHUwMDE0QVx1MDAxNOe4XHUwMDBlXHUwMDBiXHUwMDAyUSBmSGQxsPZQU1x1MDAxYVx1MDAxNHNNKSGSU41Sr1x1MDAxZWGQTkBQaEklxPybxuBY41x1MDAwNFxupaaYyVeikKgx6Vx1MDAxY1x1MDAxMH7t28FDqbZ1KE7qXVxikIRPXHUwMDA15CNSbFLu4MrFfcnpXGbDoFY+Lt5XrzMv9oTa5FHj/MCEQVx1MDAwNSUq761cdTAwMDQjQyDOxlx1MDAwMqeRl3GDTounODVYzsEnMZJ3ectusIY51+X/UELZWqxcdTAwMTn6oVx1MDAwZlx09XTkp94yXHUwMDFk+euBx3Oeh1x0ZN1Eion8IDYp53lpmjVgyCUpWyhXX1x1MDAwZYqKUIVI1kFcdTAwMTeFYs93slx1MDAxNYn4Sn/tp26Q3Ix+//1mau+3445cdTAwMTZfqYulg/dyXHUwMDBmKbhmXHUwMDE4XHUwMDE1/W7XieCtqvGMJkxcdTAwMWaZQXToeFxyx2vl22yvMaMlXHUwMDE5dVx1MDAxMFx1MDAwNP592zYn1lx1MDAxOcbl21biUKZnh62YMy6RWIJDrft+0VKVO8SPdPfzYfeudfx+5zlcdTAwMTQjWHhcdTAwMDGeiFx1MDAxOcRcZpiLVHfyXHUwMDAwzVxygSXO7k3rZlJcdTAwMGUzUFRLgoWckT5OXHUwMDEyKYXwhinyU5NHLVx1MDAwNU2tuWlcdTAwMTY92n4se7R0MDuXO6lt0Wt57jlhr1x1MDAxMn267pBvXHUwMDE1dbFcYndiKVxyjuJcdTAwMTgrz51EXHUwMDE4XGJSXG5Gp3CnUFx1MDAwNlZcdTAwMTRcIrRpXHUwMDFlXHUwMDA1bEykpGNcdTAwMDN/M+jLXGbKXHUwMDE1JVpcYqGy3va0nVIp89JRsVx1MDAxYkJlMMz6+Vx1MDAxMzYurFdKKNfKn1N8Lb4yXvbLkiiXM484sFx1MDAwNMBSwtHi1Valq93B1zNyUVx1MDAxYVx1MDAwNiX7pIPOW+Xdr7ZCUmdQKjiVwKdaZCpcdTAwMWPJLoWYoaTAYFx1MDAwN1xuQWRmy187lVJDSJhcdTAwMDCjPJdQzKFSSJWFQlx1MDAxY22cTF9AMoH4I53Cpun0fPt0er4uOp3OlCkkRcZh85DUVDPYM8nix45XzauK2S5eXt1/lYHfZe/PO3rdx46v4LdcdTAwMTmIJNRQXHUwMDFjgkQhVVx1MDAxY6nlwlx1MDAwNmhEYFxuXHUwMDAyiJxcdTAwMGLIVVxif5S7Y8j4lVx1MDAxOFx1MDAwZp7TXGaeXHUwMDE5SKpph5Fac1wiXHT6ySWi2E1WyktX46pcdTAwMDU5cFx1MDAxOTbbXGbTv522rPE1WtBJpl+JVyGymVxyYqJcdMdULFx1MDAwZeJq66J0eV1cdTAwMWOSPmuV7mr9ty3ywdp5Xlx1MDAwNZBcdTAwMWFcdTAwMDBcdTAwMDZIszhcdTAwMDfjXG49XHUwMDA2Y4aRXHUwMDAxXHUwMDExXHUwMDA2iPlcdTAwMGIwXlx1MDAwM69yXHUwMDFh86pcdTAwMTY8qTgvwqtcdTAwMDQ4lWKcPVx1MDAxONp+klxuwSfW22PV2vZZtbYtVlV85olcdTAwMGLmYGai9OKHnGUzOij2qWX1blx1MDAxYlx1MDAxZtmJqLTfftQ7T6pSXHUwMDE5iFx1MDAxMCw5p1x1MDAxM6TKKDa0ppRCkLtBUoVMi6tcdTAwMTlJPbRcdTAwMTGMxtpGpCpcdTAwMTiXXHUwMDA0QoGfiEVcdTAwMTVXrFYqXHUwMDE4/fKcOrmqiTxd0LWR6sxcdTAwMTJcdTAwMDWmSCCl1Fx1MDAxMiXfIa87d2bXPGhcckW9XHUwMDExfji58b+1d55UNTFiS1x1MDAwM1x1MDAxYZTCWUQkKCbCIFx1MDAxNI0nj2s/O0XaYFJrXHUwMDA2oS6Oq8tTvl+YUvJVSFx1MDAxMMLXXtpaMjCWXHUwMDE4Z06KNk2oVWBBN570lll1Uu/r67+HzeZcdTAwMTeOjztccvNrp1o+6J+5qExcdTAwMTep/0I6ZPCJY34qRD6FenYwxWHfYONl4TTzgvidMDKWlv0u/b5Y+qVcdTAwMWEx2Fx1MDAxOaTIOttzwYHNKTgwSjSimVwi7dpqvytDcb3sNcXb4ivjZ5PstSxJ72jxXHUwMDE3vG3myiuuXHUwMDE44XSJL/9Is1x1MDAxZDjBhzD6cncxXGKOXHUwMDFhxc9XtrvzfEpcdTAwMTVk/lxuaSZhpbVcdTAwMTQ8x6hcZlx1MDAxYiDb4KdIXHUwMDA0x1x1MDAxYiHXmDCIzCGMSstcdTAwMDLz0lOFXHUwMDE5kCn5qdmpVlx1MDAxOKXHXHUwMDA3mybToulccszwXd3pXHUwMDAyX/netjl1pvrXU2s1uKn4g083Z43Lh9My+lx1MDAxNFxcRpgs+lnS+KF7Qq1cdTAwMTJcdTAwMTmYsXHOfXY3yPPYrO+84y/vJFx1MDAxZifl39z68rEq4kKKuOQ6ZY9VfOZcdTAwMDFcdTAwMWLFlGKNN8CtilxivdppzFq5ddLX4ivjZf9cdTAwMWVm3XuaW8Hs9WpcdTAwMTFYXHUwMDFiWlx1MDAxZlFcXFx1MDAxODj2/eFcdTAwMTSfbyZXYe9cdPWxz9uxZb//2Pvxf9J+rVx1MDAxNCJ9",(0,r.kt)("defs",{parentName:"svg"},(0,r.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,r.kt)("text",p({parentName:"svg"},{x:"64.1",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"100",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(197.406 107.809)"}),"ES"),(0,r.kt)("text",p({parentName:"svg"},{x:"8.4",fill:"#f3d337",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"100",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(342.406 107.809)"}),"|"),(0,r.kt)("text",p({parentName:"svg"},{x:"65.2",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"100",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(377.406 107.809)"}),"QL"),(0,r.kt)("text",p({parentName:"svg"},{x:"63.658",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(310.227 10)"}),"queryDSL"),(0,r.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#ced4da",strokeLineCap:"round",strokeWidth:"2",d:"M364.19 56.574c-7.37 19.03-9.85 35.32-17.74 54.51m18.2-52.05c-6.17 14.52-9.75 31.65-15.99 53.73"})),(0,r.kt)("text",p({parentName:"svg"},{x:"27.692",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(22.769 43.426)"}),"EQL"),(0,r.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#ced4da",strokeLineCap:"round",strokeWidth:"2",d:"M93.28 75.818c16.84 10.92 37.11 19.79 68.42 44.09m-66.66-45.1c14.44 10.48 30.33 20.54 69.03 46.28"})),(0,r.kt)("text",p({parentName:"svg"},{x:"26.838",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(654.743 52.685)"}),"KQL"),(0,r.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#ced4da",strokeLineCap:"round",strokeWidth:"2",d:"M642.07 72.6c-46.61 19.73-93.6 43.43-118.12 52.92M642.1 71.24c-33.36 14.58-65.72 29.83-116.89 53.79"})),(0,r.kt)("text",p({parentName:"svg"},{x:"26.768",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(718.934 258.571)"}),"SQL"),(0,r.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#ced4da",strokeLineCap:"round",strokeWidth:"2",d:"M696.108 281.482c-51.51-23.56-105.91-44.2-168.24-69.22m167.44 68.12c-54.34-23.03-108.24-46.68-169.46-68.47"})),(0,r.kt)("text",p({parentName:"svg"},{x:"54.74",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(10 274.04)"}),"Painless"),(0,r.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#ced4da",strokeLineCap:"round",strokeWidth:"2",d:"M188.137 212.677c-32.5 22.28-63.67 46.39-84.31 57.22m86.63-56.2c-24.65 15.1-51.15 33.26-84.91 56.45"})),(0,r.kt)("text",p({parentName:"svg"},{x:"108.038",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(301.487 289.465)"}),"Canvas/Timelion"),(0,r.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#ced4da",strokeLineCap:"round",strokeWidth:"2",d:"M365.005 218.663c10.41 23.66 21.71 45.94 28.82 62.82m-28.76-64.02c10.45 21.75 21.06 45.51 30.05 62.09"}))))))}y.isMDXComponent=!0}}]);