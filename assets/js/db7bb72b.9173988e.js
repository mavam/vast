"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34743],{15680:(e,M,t)=>{t.d(M,{xA:()=>d,yg:()=>x});var r=t(96540);function n(e,M,t){return M in e?Object.defineProperty(e,M,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[M]=t,e}function i(e,M){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);M&&(r=r.filter((function(M){return Object.getOwnPropertyDescriptor(e,M).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var M=1;M<arguments.length;M++){var t=null!=arguments[M]?arguments[M]:{};M%2?i(Object(t),!0).forEach((function(M){n(e,M,t[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(M){Object.defineProperty(e,M,Object.getOwnPropertyDescriptor(t,M))}))}return e}function o(e,M){if(null==e)return{};var t,r,n=function(e,M){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],M.indexOf(t)>=0||(n[t]=e[t]);return n}(e,M);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],M.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),l=function(e){var M=r.useContext(c),t=M;return e&&(t="function"==typeof e?e(M):a(a({},M),e)),t},d=function(e){var M=l(e.components);return r.createElement(c.Provider,{value:M},e.children)},D="mdxType",w={inlineCode:"code",wrapper:function(e){var M=e.children;return r.createElement(r.Fragment,{},M)}},A=r.forwardRef((function(e,M){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),D=l(t),A=n,x=D["".concat(c,".").concat(A)]||D[A]||w[A]||i;return t?r.createElement(x,a(a({ref:M},d),{},{components:t})):r.createElement(x,a({ref:M},d))}));function x(e,M){var t=arguments,n=M&&M.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=A;var o={};for(var c in M)hasOwnProperty.call(M,c)&&(o[c]=M[c]);o.originalType=e,o[D]="string"==typeof e?e:n,a[1]=o;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}A.displayName="MDXCreateElement"},46388:(e,M,t)=>{t.r(M),t.d(M,{assets:()=>m,contentTitle:()=>T,default:()=>f,frontMatter:()=>x,metadata:()=>s,toc:()=>g});var r=t(15680),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,M,t)=>M in e?n(e,M,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[M]=t,D=(e,M)=>{for(var t in M||(M={}))c.call(M,t)&&d(e,t,M[t]);if(o)for(var t of o(M))l.call(M,t)&&d(e,t,M[t]);return e},w=(e,M)=>i(e,a(M)),A=(e,M)=>{var t={};for(var r in e)c.call(e,r)&&M.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))M.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const x={title:"Tenzir Platform v1.2",authors:["dominiklohmann"],date:new Date("2024-10-23T00:00:00.000Z"),tags:["release","platform"],comments:!0},T=void 0,s={permalink:"/blog/tenzir-platform-v1.2",source:"@site/blog/tenzir-platform-v1.2/index.md",title:"Tenzir Platform v1.2",description:"Tenzir Platform v1.2 brings improvements to diagnostics in the",date:"2024-10-23T00:00:00.000Z",formattedDate:"October 23, 2024",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"platform",permalink:"/blog/tags/platform"}],readingTime:1.54,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"Tenzir Platform v1.2",authors:["dominiklohmann"],date:"2024-10-23T00:00:00.000Z",tags:["release","platform"],comments:!0},prevItem:{title:"Tenzir Node v4.23",permalink:"/blog/tenzir-node-v4.23"},nextItem:{title:"Tenzir Node v4.22",permalink:"/blog/tenzir-node-v4.22"}},m={authorsImageUrls:[void 0]},g=[{value:"Simplified Diagnostics Flow",id:"simplified-diagnostics-flow",level:2},{value:"Downloading Charts",id:"downloading-charts",level:2},{value:"Other Fixes",id:"other-fixes",level:2},{value:"Join Us for Office Hours",id:"join-us-for-office-hours",level:2}],u={toc:g},N="wrapper";function f(e){var M=e,{components:t}=M,n=A(M,["components"]);return(0,r.yg)(N,w(D(D({},u),n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",D({parentName:"p"},{href:"https://github.com/tenzir/platform/releases/tag/v1.2.0"}),"Tenzir Platform v1.2")," brings improvements to diagnostics in the\nExplorer, the ability to download charts, and many stability improvements."),(0,r.yg)("p",null,(0,r.yg)("figure",D({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,r.yg)("svg",D({parentName:"figure"},{viewBox:"0 0 385.628 192.573",role:"img","aria-hidden":"true"}),(0,r.yg)("symbol",D({parentName:"svg"},{id:"image-77fb0aebf478baf81d60a73387f019fadd59cc9d07c4177ff55736a91d5f5f4145a62d22c9418cc6622f885465f5fe3d"}),(0,r.yg)("image",D({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNy42OTUzIDI0LjcxNjgiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiA8Zz4KICA8cmVjdCBoZWlnaHQ9IjI0LjcxNjgiIG9wYWNpdHk9IjAiIHdpZHRoPSIxNy42OTUzIiB4PSIwIiB5PSIwIi8+CiAgPHBhdGggZD0iTTE3LjMzNCAxMC4xNjZMMTcuMzM0IDE5LjgwNDdDMTcuMzM0IDIxLjgxNjQgMTYuMzA4NiAyMi44MzIgMTQuMjY3NiAyMi44MzJMMy4wNjY0MSAyMi44MzJDMS4wMjUzOSAyMi44MzIgMCAyMS44MjYyIDAgMTkuODA0N0wwIDEwLjE2NkMwIDguMTQ0NTMgMS4wMzUxNiA3LjEzODY3IDMuMDY2NDEgNy4xMzg2N0w2LjA1NDY5IDcuMTM4NjdMNi4wNTQ2OSA4LjcxMDk0TDMuMDk1NyA4LjcxMDk0QzIuMTE5MTQgOC43MTA5NCAxLjU3MjI3IDkuMjI4NTIgMS41NzIyNyAxMC4yNDQxTDEuNTcyMjcgMTkuNzI2NkMxLjU3MjI3IDIwLjc0MjIgMi4xMDkzOCAyMS4yNTk4IDMuMDg1OTQgMjEuMjU5OEwxNC4yMzgzIDIxLjI1OThDMTUuMjA1MSAyMS4yNTk4IDE1Ljc2MTcgMjAuNzQyMiAxNS43NjE3IDE5LjcyNjZMMTUuNzYxNyAxMC4yNDQxQzE1Ljc2MTcgOS4yMjg1MiAxNS4yMDUxIDguNzEwOTQgMTQuMjM4MyA4LjcxMDk0TDExLjI2OTUgOC43MTA5NEwxMS4yNjk1IDcuMTM4NjdMMTQuMjY3NiA3LjEzODY3QzE2LjMwODYgNy4xMzg2NyAxNy4zMzQgOC4xNTQzIDE3LjMzNCAxMC4xNjZaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+CiAgPHBhdGggZD0iTTguNjcxODggMS45NDMzNkM4LjI1MTk1IDEuOTQzMzYgNy44OTA2MiAyLjI4NTE2IDcuODkwNjIgMi42OTUzMUw3Ljg5MDYyIDEyLjYyN0w3Ljk0OTIyIDE0LjA5MThMNy40MDIzNCAxMy41MTU2TDUuODg4NjcgMTEuOTA0M0M1Ljc1MTk1IDExLjc0OCA1LjU0Njg4IDExLjY2OTkgNS4zNTE1NiAxMS42Njk5QzQuOTQxNDEgMTEuNjY5OSA0LjY0ODQ0IDExLjk1MzEgNC42NDg0NCAxMi4zNTM1QzQuNjQ4NDQgMTIuNTY4NCA0LjczNjMzIDEyLjcyNDYgNC44ODI4MSAxMi44NzExTDguMTA1NDcgMTUuOTc2NkM4LjMwMDc4IDE2LjE3MTkgOC40NjY4IDE2LjIzMDUgOC42NzE4OCAxNi4yMzA1QzguODY3MTkgMTYuMjMwNSA5LjAzMzIgMTYuMTcxOSA5LjIyODUyIDE1Ljk3NjZMMTIuNDUxMiAxMi44NzExQzEyLjU5NzcgMTIuNzI0NiAxMi42ODU1IDEyLjU2ODQgMTIuNjg1NSAxMi4zNTM1QzEyLjY4NTUgMTEuOTUzMSAxMi4zNzMgMTEuNjY5OSAxMS45NzI3IDExLjY2OTlDMTEuNzc3MyAxMS42Njk5IDExLjU4MiAxMS43NDggMTEuNDQ1MyAxMS45MDQzTDkuOTMxNjQgMTMuNTE1Nkw5LjM4NDc3IDE0LjA5MThMOS40NDMzNiAxMi42MjdMOS40NDMzNiAyLjY5NTMxQzkuNDQzMzYgMi4yODUxNiA5LjA5MTggMS45NDMzNiA4LjY3MTg4IDEuOTQzMzZaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+CiA8L2c+Cjwvc3ZnPg==",preserveAspectRatio:"none"}))),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1a2XLbRlx1MDAxNn33V7g0j4mR3tGdqTxQXHUwMDA0bcFcdTAwMTZALaRlaSo1XHUwMDA1gSBcdTAwMDTu5lwikkjl3+c0KFx1MDAxMaBEWU5iT5zJyFVcdTAwMTHZy+27nHv63lZ+efHy5cF8PUlcdTAwMGV+fHmQrOJokHWm0fLgezt+m0xn2XiEKVZ8n41cdTAwMTfTuFh5M59PZj/+8EM0mTjlLidcdTAwMWVcdTAwMGY3O5NBMkxG81x1MDAxOdb+XHUwMDBi31++/KX4L2ayjt2vZm/S5vLV2e1wlmS1VH9cdTAwMWNevMuKrcWie4Wi6XS8LIdXXHUwMDE4U0I5ikjOlJGSSq23s2vMSlc7hlx1MDAxMKqMYFQyprazy6wzv8Fcbq6ko5iLeVcrwYjh2yU3SZbezLGGbIeiUTpIdkZm8+m4n9THg/HUavhcdTAwMGaa2H+ljtdR3E+n48WoU66JZEd3u+WabjZcdTAwMTicz9eFZDhcdTAwMTXOO3gg/+JOW/pg/KldODC9XHUwMDE5JbPZjq7jSVx1MDAxNGdz61x1MDAxN0rKUavdxO9cdTAwMTSx+bnUaVx1MDAxYVxyXHUwMDEz31x1MDAwNme0XHUwMDE4XGa2w9mok1i3XHUwMDFmXFzTbOe4UefuuPvIlmFjdyO/lsoniZXMjVwiSlx1MDAxObd0eYkwKVx1MDAxZVx1MDAwZYbjUVx1MDAwMTajiSu5JKUvsplcdTAwMDeAzVx1MDAwYpndaDBLSu9bxVx1MDAxYSX4dmxZTDrRZlx1MDAxM3WZUVxuXCKJXHUwMDEwpdhBNuo/3DNcdTAwMTjH/T3nTMZZXHUwMDE13fan/PSyXGZB8WX7+efv965+XHUwMDFhklx1MDAwZra/eCDmYFx1MDAxMM3m9fFwmM1h14nV6aH+s3k0nVx1MDAxZlwiitkofTiXjDpPzFx1MDAxNLtqNvlukuhcdTAwMTEmsK86dzCfZps8KVdcZq7Hy9JtLypoeEBcdTAwMDRcdTAwMWRzXHUwMDFhXGLWWM6XiT+57U2H3WFgPo9cYiR3iHRcdNWEKe6yXHUwMDA3RKCVI1xmgWsl/KlVXHS5e1wioFx1MDAwZeVKK81dl1FFXHUwMDE14ckruodcZoBcdTAwMTVHWrxcYmUoM8Qtgfp/dijZofeH2YFKm41cXGu5h1x1MDAxZah5ilx1MDAxZajLuXFcdTAwMTWl5bYvx1x1MDAwZsJI90/nh08j1f68elxm0v9t1rht5Guvu1BcdTAwMWaOvPfZkbg6ctfiMWsgYMlD0nBcdTAwMWSmXHUwMDAwXHUwMDE24TLryTKXbVx1MDAxZVxijerBNYpJXHUwMDA2RFx0osrYb8tcdTAwMDehXHUwMDFkZW8jYyCLu7qUsGVcZlx1MDAwZepxteaaKKGZVCUwP4MwjEtj9rVcYoN9Q4TR/1x1MDAwMoShtevu51x1MDAwYv1kOSE5wV2rWVx1MDAxOdsvRVx1MDAxN2BcdTAwMGJXlzz1Z9GFolx1MDAwZeHUXHUwMDEwRi1cdTAwMTlcdTAwMTgjq7tfMe1cdTAwMTBUYUJAYVx1MDAwNsY1/Fn6IdyhjGlcYlx1MDAxM8I1UpldgVx1MDAwZaooKTRcdTAwMTdGXHUwMDFiUJRUz1xudF1cdTAwMDfrJdZcdTAwMTLXJcbdkUelIzjnUiBxiviy5+QxaVx1MDAxY6mIUZxcIjNVeUHbXHUwMDFm7VxiqqnBXHUwMDFkXHUwMDAxKpf0WeWeTvCNdtph3FxiuJczQS2QvnWitXOfoNLeuDf8sM5Pp6/nalx1MDAxMXCpRa1b+zwqNVx1MDAwZXdRz3PioiGr1NFcdTAwMDWVoqbVzEjDXHUwMDA1WJWUWVFcdTAwMTKpcISwXHUwMDE3PoMkSfZVXoQ4nCpNhFx1MDAwMlxu3CpcdTAwMWQ/T6Ssa1x1MDAxMiH+XHUwMDBlRDr440QqkLfE1WRv5SXch6P3VIqGxVx1MDAxMEs0X4FKXHUwMDE1UPOnUymqKrCGQnVcdK2gXHUwMDE0q+7WXHUwMDFjLEZcdTAwMDR1tYuai3D5LO8x5TDYR8AtXHUwMDFjXHKf2GFmzVx1MDAxY5CdIdRVTOD38zRqjGO4bVx1MDAxN8FIXHUwMDA2SPpj4pgwjotKmruSXHUwMDExaLnDylo4Oyz6rK1cdTAwMWO5i6xcdTAwMTZUXHUwMDEwMCqlRlXFSVx1MDAwNXJgwFx1MDAxYi5cdTAwMTRcdTAwMTBcdTAwMDBcdTAwMTfPinuKLVxuRzziib84J9dcdTAwMTPZypbCP+z2PuZnR2PZXFwuW485eZrE81x1MDAwNyW0pVx1MDAwNGOveEk5x5WInqCkqoKXKXdcZnVcdTAwMDWBJ4V2JX/8QobbXHUwMDE5zVx1MDAwNtOGoVx1MDAxZsM9t6fCZYC+XHUwMDE0nHCDUpnoylx1MDAxOV+kJZ5Po9FsXHUwMDEyTUFcdTAwMTXfYltcXFx1MDAxMmvPPT5Rr16pwft3k1x0n6XmY/L68uBcdTAwMTHmnufw4edy+H219ojDQVGgYk32va2hqX6ye1x1MDAwNlx1MDAxMUkw2JdvnqlcdTAwMTGyXHUwMDAyjOcp/Fx1MDAxM1x00T1bXn2Ymfbbde9WJ/n7y6NcdTAwMDbZ0+9lwyh9mFxmXHUwMDFjXHUwMDE0TllxUyllKq+9m2xAO0hcdTAwMTBn+34kwUaPkoFcbruAXHUwMDExsJ6rUa6KPdnwiTXPpsNeqP+1Xom+QjqM9qfDLuHeN4HMVqGGPHog2qD7SeArplxcQqX8XHUwMDA2kF+9ROaLWVx1MDAxMZvoNunsRHvjsVx1MDAwM9ftXpMoue5cbldfR11NO4pELufa7Vx1MDAxMmq6UacjTVx1MDAxY5tcdTAwMGVxY6Db7XYlulx1MDAxOFx1MDAxNVx1MDAxOdqRXdnFfSwjxTqMxWhidFx1MDAxYyvFWFx1MDAxNy006nVMJ7yKojgqcFJcdTAwMDZ4iyR8vI/qp7L2JoiD2fH434n34fb8KFx1MDAxMeYkpI+zdp6s5lx1MDAwZpJWooVlTFx0actcdTAwMTdZednbJK22VZkmXG5XnFx1MDAxMZWH3/ukRSWD4Fx1MDAxYbS/imvN+L7egqN5QcuKglx1MDAwNu2wVuQ3PdL8pV91v0K+jn9DvnLwMNN07z0lyFPpalCvSNRcdTAwMWNf4dXmd2drXHUwMDAxXFzY742Xo8E4qqbreDQ/z/KCZ4ijXGY6XHUwMDA0nIOCXHUwMDBiXY3YWfU6XHUwMDFhZoPiXHUwMDBmXHUwMDE2O2JrgyxcdTAwMWRcdTAwMTV9d9KtJFx1MDAwN5wyz5CW2+n5eFLOxpBcdTAwMTehT58+jtV4mqXZKFx1MDAxYbSeVDlazMdnyWyj9Hy6SKpcdTAwMWVJjrZ54zD5iZS/WH3snvhn68U8U/PGyXvZfucnj1N+/8OsQaPFibZ3NS15u3BcdTAwMGU6J63sa7y0Ja3e95wgXHUwMDFkcJthhmsmNS1xsk15qVx1MDAxZIYp7qJT4Ea45Vx1MDAxMc9nfJfomJC/w2vC5HMr0af/ystcdTAwMDTIm3Jahe3zlSg6N0qkoV8hw6XRUlXx/P932b1cdTAwMDJd5Vx1MDAxMNuUS4ZcdTAwMWFWuHz3b0yu41KlXFykXHUwMDFmM1x1MDAwMp3fc+I++SzLiUMt93KUYFCfuc9JezLBi6N2bNW66rxH19k39lx1MDAwMvDiTreDaDI5R/2XbLPt4DZLlod7mKZb/NiLuki+ojosk/Trl4glXHUwMDFkXHUwMDFjXGazYdKqtl8/zG7T71bDyqNk9l+uW5H9Ufvs2Fx1MDAxZWo//rij1j+vo1mixPcnRyG7Wlx1MDAxZorri9VcIs5JXHUwMDE2XHUwMDFknZHYXHUwMDFi31x1MDAxZfNcdTAwMGXvrCVcdTAwMGbW8jZcdTAwMWXGt0Gvtlxm6ibvXGbjzD+6mV+/kXlzdDOLLuT05PztuHN0tmxm+lx1MDAxNrv48SjOj4dmfbXWq2arL4/5Zp2fXHUwMDFksqtcdTAwMGZv8+jCLE7O/dVxr1x1MDAwMVlXk6tcdTAwMGad+jVPjd+rpUG9tlxu14I1W+3c93xy3ItXYS/Fus7k6uhsjH00qPtp9Ob95IrdkLvv39Wzmr7KxTu/XtPx8H2vUz9cdTAwMWNfXVxmRtHRKeRW5Lwxy8uLcNI56tvzqnLLc7NDge9L/Jab39rKT0+OXHUwMDBlbzpv0vTKI1mr1eDHvSBcdTAwMGahb1BcdTAwMTeQfVx1MDAxNVx1MDAwNK14XHUwMDEx5Fx1MDAwMfG9hjzupcvQ63jlmLU3xbrTNGhdYqwmwqy2XHUwMDBlMiGC3MfY6Vwi6F3ycuxtXHUwMDEwrMUy7F2S4Hw75lx1MDAwNediXHUwMDE59Np587yyt47P5/jcu1xc+1x1MDAxZXzY6i+aXo2EZLmELkv4mYX9XHUwMDAwn9NcdTAwMDXOIWErSFx1MDAwYjl5e4XzYEcjb3qX3PeCReBdstBrpPDFKshTXHUwMDA2XHUwMDE57LhXo6F3KX1cdTAwMGa2tFx1MDAwMlx1MDAxMfY6QZhBt9Ypg1x1MDAxZcL6NvD6pFXs79NwXY6d5j72NCTOTZt1wYNWTVqfXHUwMDFk99o86Pk4s1x1MDAwZrt9XHUwMDExtnyrXHUwMDEzXHJzf4391qfr0DtdtbzGXCJsxeugXHUwMDE3XHUwMDE3dmHe2lLZ78O+mOBzXG5/2DPz5sZcdTAwMWbrsNVcdTAwMTdcdTAwMWKbUtrE+UGvgbPastlYrkLIh335Ji4+5m9cdTAwMTCrNuZrtPD3dn+DQj5DXHUwMDFjsb+G80/hd2D0XFzwsNfgm1jH603825i/XFxV9T/Ny/1NyFxmeim9279cdTAwMGW89srGJMxcdTAwMWLLQr9cdTAwMDJcdTAwMDOBXGLWVZ82rH5cdTAwMTaXpf+gf6Ffr0+rMalgaFx1MDAxYlOcj/hcdTAwMDVLfC5jui5yLFx1MDAwZvJcIiYrxFx1MDAxMX54hOdcYvhcdTAwMWZGXHUwMDE3q1x1MDAxOfI7u37zulx1MDAxN6399Go4mF3X6W1sv384K/JcdTAwMDO4pvtzXHUwMDA0tsGOppfa2MrQg/x+IKy/XHUwMDExS+jeWMBu6FHoJpqtXHUwMDFhg2/Wx1x1MDAwNVx1MDAxZVx1MDAxYcza1vT6yIFcIrZFblx1MDAwNu0l9EwlcFxurDew9nJccoxirE+aLd+OIddrwNtNXHUwMDAwmSTw/I1Na4Ez26zltSEzhb8snuz5NVx1MDAxMpDAxuhep5XFXHUwMDEzMISxNlx1MDAwMWeIzdglzu+niFtcdTAwMGXdKHxsY8BcdTAwMTBcdTAwMDN5mp9aO1Y2b6xM5KxEXkCPS9L0Tslmf59cdTAwMDY58qqOPV5KXG6dMisroHY/eEFcdTAwMDAv2O9cdTAwMDPvl1x1MDAwMvOWs/JcdTAwMTAx2dhcdIzZXHUwMDE41uEnz1x1MDAxN8Co3S+AXHUwMDFk5IjNa5uj1ibY14rZxs/BMvBiqz8w0Fx1MDAwMHb6Nt6w6fJuzM+BQTvGIEc0LfdmNi9q0CldWPzYPVx1MDAwNV9BVnheXHUwMDAz1mv5hq8w1kJsizF/3fTa602u9PkmXHUwMDE3YFx1MDAwN/BtsX6vJ7BcYjvaMszjjZ25T8LNPMN+urGzjc93flx1MDAwMK7C86qfinhcdTAwMDNcdTAwMWLtu9hcdTAwMDFcdTAwMGb383lQ9f2qwFtu+eE+dlx1MDAwM6+Yz2PcaWXsNvNtXHUwMDExbOLJQ4tVu847pXfrgLXTvFx1MDAwNZ5qtoI7/lx1MDAwZVx1MDAxNlx1MDAwNVx1MDAwNvpL2I7c82JexVx1MDAxZPKcXHUwMDE0WL+zLUBuVsasXHJcdTAwMTL2wFx1MDAxZn17ToF/rLM+tHwsN3IqOZNZPrCxKLB4lzO/Kz/1MYu/q/eWtzG/XHUwMDFhnaQ//VTpmqfJg//rXHUwMDBiZS4lO+XiWTKfZsnt41XbXHUwMDEy7tdcdTAwMTe//lx1MDAwN3KeZOsifQ==",(0,r.yg)("defs",{parentName:"svg"},(0,r.yg)("style",{parentName:"defs"},"@font-face{font-family:Excalifont;src:url(data:font/woff2;base64,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)}")),(0,r.yg)("g",D({parentName:"svg"},{strokeLineCap:"round"}),(0,r.yg)("path",D({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M10 174.983h365.63m-365.63 0h365.63"})),(0,r.yg)("path",D({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m375.63 174.983-13.6 6.34v-12.68l13.6 6.34"})),(0,r.yg)("path",D({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M375.63 174.983c-4.81 2.24-9.62 4.48-13.6 6.34m13.6-6.34c-5.1 2.38-10.19 4.75-13.6 6.34m0 0v-12.68m0 12.68v-12.68m0 0c3.8 1.77 7.6 3.54 13.6 6.34m-13.6-6.34c5.07 2.36 10.13 4.72 13.6 6.34m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,r.yg)("g",D({parentName:"svg"},{strokeLineCap:"round"}),(0,r.yg)("path",D({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M16.452 182.573V10.003m0 172.57V10.003"})),(0,r.yg)("path",D({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m16.452 10.003 6.34 13.59h-12.68l6.34-13.59"})),(0,r.yg)("path",D({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M16.452 10.003c1.42 3.04 2.84 6.08 6.34 13.59m-6.34-13.59c1.35 2.89 2.69 5.78 6.34 13.59m0 0h-12.68m12.68 0h-12.68m0 0c2.1-4.5 4.19-8.99 6.34-13.59m-6.34 13.59c1.34-2.86 2.67-5.72 6.34-13.59m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,r.yg)("path",D({parentName:"svg"},{fill:"none",stroke:"#1971c2",strokeLineCap:"round",strokeWidth:"2",d:"M20.66 85.062c10.17-4.68 43.84-27.71 61.03-28.06 17.19-.35 22.68 23.85 42.09 25.96 19.41 2.1 48.29-15.09 74.36-13.33 26.08 1.75 53.55 24.32 82.08 23.85 28.53-.47 74.24-22.22 89.09-26.66M20.66 85.062c10.17-4.68 43.84-27.71 61.03-28.06 17.19-.35 22.68 23.85 42.09 25.96 19.41 2.1 48.29-15.09 74.36-13.33 26.08 1.75 53.55 24.32 82.08 23.85 28.53-.47 74.24-22.22 89.09-26.66"})),(0,r.yg)("path",D({parentName:"svg"},{fill:"none",stroke:"#2f9e44",strokeLineCap:"round",strokeWidth:"2",d:"M22.765 61.912c12.16 13.91 51.91 69.68 72.96 83.48 21.04 13.8 32.15-.58 53.31-.7 21.17-.12 53.08-.23 73.66 0s32.97 5.73 49.81 1.4c16.84-4.32 35.43-30.05 51.21-27.36 15.78 2.69 36.25 36.25 43.49 43.5M22.765 61.912c12.16 13.91 51.91 69.68 72.96 83.48 21.04 13.8 32.15-.58 53.31-.7 21.17-.12 53.08-.23 73.66 0s32.97 5.73 49.81 1.4c16.84-4.32 35.43-30.05 51.21-27.36 15.78 2.69 36.25 36.25 43.49 43.5"})),(0,r.yg)("path",D({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M297.306 10h66.14m-66.14 0h66.14m0 0c3.91 0 5.87 1.95 5.87 5.86m-5.87-5.86c3.91 0 5.87 1.95 5.87 5.86m0 0v11.73m0-11.73v11.73m0 0c0 3.91-1.96 5.86-5.87 5.86m5.87-5.86c0 3.91-1.96 5.86-5.87 5.86m0 0h-66.14m66.14 0h-66.14m0 0c-3.91 0-5.86-1.95-5.86-5.86m5.86 5.86c-3.91 0-5.86-1.95-5.86-5.86m0 0V15.86m0 11.73V15.86m0 0c0-3.91 1.95-5.86 5.86-5.86m-5.86 5.86c0-3.91 1.95-5.86 5.86-5.86"})),(0,r.yg)("use",D({parentName:"svg"},{width:"14",height:"14",href:"#image-77fb0aebf478baf81d60a73387f019fadd59cc9d07c4177ff55736a91d5f5f4145a62d22c9418cc6622f885465f5fe3d",transform:"translate(296.307 13.284)"})),(0,r.yg)("text",D({parentName:"svg"},{y:"9.426",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Excalifont, Xiaolai, Segoe UI Emoji",fontSize:"10.699",style:{whiteSpace:"pre"},transform:"translate(314.417 15.04)"}),"Download"),(0,r.yg)("path",D({parentName:"svg"},{fill:"none",stroke:"#f08c00",strokeLineCap:"round",strokeWidth:"2",d:"M21.362 122.944c10.17-4.68 43.84-27.71 61.03-28.06 17.19-.35 22.92 22.56 42.09 25.96 19.18 3.39 46.89-10.99 72.96-5.62 26.07 5.38 55.3 36.25 83.48 37.89 28.18 1.63 71.32-23.39 85.59-28.07m-345.15-2.1c10.17-4.68 43.84-27.71 61.03-28.06 17.19-.35 22.92 22.56 42.09 25.96 19.18 3.39 46.89-10.99 72.96-5.62 26.07 5.38 55.3 36.25 83.48 37.89 28.18 1.63 71.32-23.39 85.59-28.07"}))))),(0,r.yg)("h2",D({},{id:"simplified-diagnostics-flow"}),"Simplified Diagnostics Flow"),(0,r.yg)("p",null,"In our previous version, the diagnostics pane would automatically open when a\npipeline encountered an error or completed without results but with at least one\nwarning. While this feature aimed to provide immediate feedback, it often led to\nconfusion as the pane never closed automatically. We recognized that\nautomatically closing it could disrupt your workflow by causing layout shifts\nwhile iterating on your pipelines."),(0,r.yg)("p",null,"With the new update, we\u2019ve simplified the user experience: the diagnostics pane\nwill no longer open or close automatically. Instead, you can easily access it by\nclicking on the diagnostics count or the newly added toasts for errors. This\nchange ensures a smoother and more intuitive interaction with the diagnostics\nfeature."),(0,r.yg)("h2",D({},{id:"downloading-charts"}),"Downloading Charts"),(0,r.yg)("p",null,"We\u2019ve also made it easier for you to manage your visual data. You can now save\ncharts in the Explorer or on Dashboards in either SVG or PNG formats.\nAdditionally, we\u2019ve updated the chart colors to improve contrast, making it\neasier to distinguish between different data points."),(0,r.yg)("h2",D({},{id:"other-fixes"}),"Other Fixes"),(0,r.yg)("p",null,"We\u2019ve implemented several other noteworthy fixes and enhancements:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The pesky 408 Proxy Timeout errors in the Explorer for pipelines that run for\na longer period of time no longer exist."),(0,r.yg)("li",{parentName:"ul"},"We fixed a bug that caused the detailed pipeline activity to render\nincorrectly. Note that rendering the activity chart now requires running at\nleast Tenzir Node v4.22."),(0,r.yg)("li",{parentName:"ul"},"For Sovereign Edition users, the env variable ",(0,r.yg)("inlineCode",{parentName:"li"},"PUBLIC_OIDC_SCOPES")," allows for\noverriding the default OIDC scopes.")),(0,r.yg)("h2",D({},{id:"join-us-for-office-hours"}),"Join Us for Office Hours"),(0,r.yg)("p",null,"Every second Tuesday at 5 PM CET, we hold our office hours on our ",(0,r.yg)("a",D({parentName:"p"},{href:"/discord"}),"Discord\nserver"),". We love hearing your feedback\u2014come join us for a chat!"))}f.isMDXComponent=!0}}]);