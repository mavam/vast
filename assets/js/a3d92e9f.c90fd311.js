"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>D});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},M=Object.keys(e);for(n=0;n<M.length;n++)a=M[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);for(n=0;n<M.length;n++)a=M[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},x="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,M=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),x=l(a),d=r,D=x["".concat(c,".").concat(d)]||x[d]||w[d]||M;return a?n.createElement(D,i(i({ref:t},m),{},{components:a})):n.createElement(D,i({ref:t},m))}));function D(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var M=a.length,i=new Array(M);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[x]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<M;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98928:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>T,frontMatter:()=>D,metadata:()=>f,toc:()=>A});var n=a(3905),r=Object.defineProperty,M=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&m(e,a,t[a]);return e},w=(e,t)=>M(e,i(t)),d=(e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a};const D={title:"Tenzir v4.9",authors:["dominiklohmann"],date:new Date("2024-02-21T00:00:00.000Z"),tags:["release","context","bloom-filter","chart","dashboard"],comments:!0},s=void 0,f={permalink:"/blog/tenzir-v4.9",source:"@site/blog/tenzir-v4.9/index.md",title:"Tenzir v4.9",description:"We're thrilled to announce the release of [Tenzir",date:"2024-02-21T00:00:00.000Z",formattedDate:"February 21, 2024",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"context",permalink:"/blog/tags/context"},{label:"bloom-filter",permalink:"/blog/tags/bloom-filter"},{label:"chart",permalink:"/blog/tags/chart"},{label:"dashboard",permalink:"/blog/tags/dashboard"}],readingTime:3.22,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"Tenzir v4.9",authors:["dominiklohmann"],date:"2024-02-21T00:00:00.000Z",tags:["release","context","bloom-filter","chart","dashboard"],comments:!0},prevItem:{title:"Tenzir v4.10",permalink:"/blog/tenzir-v4.10"},nextItem:{title:"Introducing Office Hours",permalink:"/blog/introducing-office-hours"}},p={authorsImageUrls:[void 0]},A=[],U={toc:A},X="wrapper";function T(e){var t=e,{components:a}=t,r=d(t,["components"]);return(0,n.kt)(X,w(x(x({},U),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We're thrilled to announce the release of ",(0,n.kt)("a",x({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases/tag/v4.9.0"}),"Tenzir\nv4.9"),", enhancing the\nExplorer further to empower you with the capability of rendering your data as a\nchart."),(0,n.kt)("p",null,(0,n.kt)("figure",x({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,n.kt)("svg",x({parentName:"figure"},{viewBox:"0 0 1046.425 350.537",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1d61PiStr/fv5cbsv9Omb7ftmq/YBcbsp4Q2VcdTAwMTDcs2VFiFx1MDAxMlx0XHUwMDE3IYp63vO/v0+iY0LoQMgoi45M1TmSdOgm3b/L83Sn+euPtbV1/3HgrP9rbd15aNqe21x1MDAxYdrj9W/B8XtnOHL7PThFwvej/t2wXHUwMDE5lmz7/mD0r3/+01x1MDAxZVxmrOgqq9nvPl/peE7X6fkjKPtcdTAwMWZ4v7b2V/jfWF2e23PCsuHRqCbMRPLoYb9cdTAwMTfWqjDWXHUwMDE0aYxeXHUwMDBiuKNtqMl3WnD2yvZGTnQmOLT+2ODNp/addo59fqOK+nzUbrOo1ivX8079Ry9s0KhcdTAwMGZfXCI6N/KH/Y5z5rb8dtCqxPG0q4b9u+t2z1x1MDAxOY0mrulcdTAwMGbspus/XHUwMDA2x1DUeLt3XHUwMDFkfkZ05Fx1MDAwMd4xJCzKNVx1MDAxMlxiXHUwMDExwaiKPiW4nlBuXHUwMDExplx1MDAwNaJcYmGhUbJdW32vP1xm2vVcdTAwMGbsXHUwMDA0/6KWXdrNzjU0r9eKylxcha+ozPjl25JYK9uOe932g7tcdTAwMWZcdTAwMWRcdTAwMWI54Vx1MDAxZJdBOzmi+vVEUMGg3Iq6PTx63t7rXHUwMDFkXHUwMDE39Ojx2lf24Nau9fdHjddaocCZKJ9cdTAwMTTvXHUwMDA344fhwal3uXt+19aV0/WX8/+Numtod51yUHPvzvPi97zXernnXHUwMDEzJy6DXHUwMDEzxdhIjD7qbtCyn4dccpZIMYaJRpREX1x1MDAwNEZnJ/lxXr/ZMYy0kW9cdTAwMGb9TbfXcnvXyUucXivljGeP/K1+t+v60IxK3+35yVx1MDAxMuHnXHUwMDE2hsP+uO3YU19cdTAwMWE+OfXcIPi4yT6I/lqLxlv45vXv/34zlmZcdTAwMTPF2dzyXHUwMDEzxdXc4lgseEFsbGZrUKKGxb5ArPTUcFx1MDAxY9hDJ+y29bIutXtD2d8sdEp8bJe/10qt2vP4/fubmf5858E30lx1MDAxZuFp9IcxQ1QhsVx1MDAwMP+JjovOuts333nh7K56tS19UuysOP9JbGEmXHUwMDExV4TwOMGF9Me1halcdTAwMTBAgc+vd6E/ySxGXHUwMDE4QlQgjCQjZJpcZmnUSy9kSJCU0DRKf2syvOr3/FP3KehWoiaOluyu6z1OXGaLXHUwMDEwXHUwMDAz0Fx1MDAxMc02MN36xOGC5173wnPQXFxnOIFcdTAwMTTfXHUwMDA1v/FawO9cdTAwMGais02oyFx1MDAwNmMxnL4x/aF77fZsr2quNLAjuz97XHUwMDE3WzFcdTAwMTRe2iMnNCvB8DOA3+wxZoJ/6DT959FvYlx1MDAwMEmSR19ccpBgSFxuTFwihzSPXHUwMDAwXHUwMDFhO49PpZvOo33Q3XS2a4XCXHUwMDA1ObRXm1x1MDAwMDZcdTAwMDTcfWB5yZBcIlx1MDAxY3FcdTAwMTEhKvyAgFx1MDAxZjDSVFx0XHUwMDBlJlxiXHSRaNnbcFx1MDAwMJXEolx1MDAxNCxcdTAwMTZjQWuogVx1MDAwM5S0UPiiTFx1MDAwMFx1MDAxNcWQ/0JcdOBWuZZcdTAwMTTFXGLEzFx0y4L8a41/vf6VJkmxMaRcdTAwMWZcdTAwMWY6/Oqp+KNRofLwYKtxWz89Wn8t9/dUO9+QT1wimJmlLJfGkpiCJjWWaoCXXHUwMDAwZ51cdTAwMTli5tuz2lx1MDAxMMNzICaWXHUwMDAyMawsyadxxaXFdfzFpoDFOIereezM/1x1MDAxNljvraVYTFx1MDAxY33V0qjffmqp8zDoXHUwMDBm/T97/7dcdTAwMDahwdBZ+8eo2Xa69tq//7325/roblxi2unb1pXXXHUwMDFm/7lcdTAwMWWUXHUwMDAy+VxcXHUwMDFiXGb7fj9Ffz3nys+nvvO0JynIb9DypIibNJxH9yxcIlx1MDAxN3NT82s4YTKVYSThklx1MDAxM0mjsTuPYU79/lx1MDAxMavvefSoXzyuuZV+i1J/tVx1MDAxOUYwYVx0qlx1MDAxOFxmfcpcdTAwMTDANUEwXGKkU1x1MDAxMPi/XHUwMDE2WGqlXHUwMDEyXHJbooZPcVx1MDAwYobCTPLo+3xEza5UqNDnXHUwMDE3hcZFvT5cdTAwMWVcdTAwMWbdl9xccn29dM2e4Vx1MDAxY1x1MDAxNtVsXHUwMDFhi1x1MDAwNFx1MDAxM4iSXHUwMDEy+pZSlt1cdTAwMTWb785qXHUwMDAziuOZgOJLXHUwMDAxVIpig19QSVx1MDAxYzGwXHUwMDBlRGMlVlx1MDAwNEefQKKDN2HYunZpXHUwMDBm1zY2fNf3nLVKcKrZ90Zvr+BzhOfNXHUwMDE0PPNcdTAwMTfLXCLwsfA5Ylwi8zfJL/BMplx1MDAwYjynUiNcdTAwMWOP+ubxUa1b3a/i4vjHoNto7pS368eVrlxcbT5cdTAwMDKSsTSmik6b9DBRp4CuMFxiL9dcdTAwMDQziDNYomVcdTAwMGJcdTAwMTKSutJX9jQhXHUwMDAxvVhYcMXkcyRcdTAwMWWr5pWcxFx1MDAxNDVJJWTAo/Mkfqt7/P1pcD5oXHUwMDE0ZFW4N6W9/d3290+TqovAMcMs5Fx1MDAwMlx1MDAwN1x1MDAxNalcdTAwMTksrFx1MDAxMGdKKa0yg2P/bPNiZ7+la8j7Ievbwy1VPj1fbXC8prBcYlGUcpbMYv9cdTAwMDSHYJhcdIx+Mbyei42XVmSBXHUwMDA25lpwLqlUX9jw06k5l4UlKHVmO4g5oM1cXGZcdTAwMGZcbred65be8Glx8OjtNbzykTht4tWGXHUwMDA11shcboZcdTAwMTeGXlHg2mNK/VxmXHUwMDBibZFQM6TEPJ6UektcdTAwMGariIVofJYtmtOhlkjigVx1MDAxM0w5hvE0XHUwMDA3XHUwMDBlxavDXHUwMDA3XHUwMDE4x7JUuNlvn+JasXY2lnE4fG68ZJj2mfbBTWha2rRPftM6e9JnssosdjI22Vx1MDAxMrGCWZPysUJs3iDBXG5cdTAwMDRcdTAwMDZcdTAwMWXXWC5cdTAwMTDZXHUwMDE2bqtcdTAwMDPqnvhcdTAwMGXtPHTOb1x1MDAxYaruO5dcdTAwMWaaXHUwMDE1KCGWXG7FXHUwMDEyYSGkTo9slVCOXHUwMDE2+ViBXHUwMDBiy0RcdFjHXHUwMDA2xU+JXHUwMDA0qqaCMzZvVueLXHUwMDEzXHUwMDE2j43v3J4v2HJJIVlnXHUwMDE2VsCmmWCzJOdjXHUwMDA1mcpcblhLiC5cdTAwMTHOblx1MDAxNVx1MDAwNt2tUnPj8Fx1MDAwMe+W73V7X1Qu1UVhtUmBWVgrXHUwMDE2TFx1MDAwM1x1MDAwNbNUTEfR9qRTUMBcdFxiv0+2azGnoDVcdTAwMTFcdTAwMTTNn5J6ON5cdTAwMWI/ept77uN+xb65rzmn1fvxb8lcbtmdwvtMUM0khVx1MDAxYzNLRqdgXHUwMDE25FxcnDAjXHUwMDA1rjCRmjC+wKy1s33Uflx1MDAxOJ4hgcp+iVx1MDAxY21x1zn8yJxcdTAwMTDzXHRcIphjo+nhw5KMXHUwMDAyIVRgMc8lfPHB4i5cdTAwMDE6NFhSu1RCSNaZ2yWY1XgmI8xORYv0VLQmnCslaPZs2+DAP7FdOvJvXHUwMDFhXHUwMDA3rUdHeYWuKq42L2xcYktxXG6BOlx1MDAwMSegZTygXG6HXHUwMDBmx8GCeko1ZVKqd0orZMi2MVxmXHUwMDA0XHUwMDE2vFx1MDAwNCfQWomm1pBiXGZ2Q1x1MDAxMT03tPjcnFx1MDAxMJtANqpUPkdNUlx1MDAxN31xXGLmkOJcdTAwMGI46mb75KR3eHP9Q901sZSlw0bp/mC1UfKsnlx1MDAwMvqEXHUwMDEzjJRkXHSQaEtcdTAwMDcgUcHzXHUwMDFjivL3QVx0XHUwMDAzqJomkMn0XHUwMDEyLyUxUVxu8987XHUwMDExXHUwMDFkt8to4uhcZnksb1x1MDAxZFSWK46TNWaSxuh2xKTRKD75pZGnO2ZcdTAwMDKhmmCYi+y5terF46a9WSvvVy+6dI9cdTAwMWSNqleNzdVcdTAwMDb9hrRcdTAwMTiQXHUwMDFi1lhycM6YJnJrmlj8Y0gj1VhRJeYupf7cdFx1MDAxMEHFrED5lJGnXHUwMDFiSMQ5XHUwMDEyjMvsXHUwMDA2Um12cOfcP+30OdnZq2/5rYPv9dVGXHS1ONhGzsApXG5cdTAwMDZcdTAwMGWST6KEIVx1MDAxOJ1xbXxcdTAwMTeUUFx1MDAwZZVcYlNsaVx1MDAxMEckafAgiP69VzDkXHUwMDEyx+rWkrVxosLc0mhcdTAwMTafX5BGmmqHMWNcdTAwMTLiKYqzg/7mvH45IFx1MDAxN5XC4+Gg3yxI3D2gZLVBPyWNkVx1MDAxMVxiQU+pJT+GNFx1MDAxMqpcdTAwMTBSc1x1MDAxM02fm1x1MDAwYlwipJhcdTAwMDUonzIqnVxuXHUwMDEyzCVcdTAwMTKSoOyr/Dq8UH9cdTAwMTDbRyen7smOX/tRXHUwMDFjubK02iBJKiOezLkyRp5TK6ujjIRcboQkQvOWXHUwMDFkf2405FLGXHUwMDFm20tWxolcbnMro1l78isj0+nLtFx1MDAxMFxyTFx1MDAxN+fZlfG8TCqs1EbexqVcdTAwMWU8nW216bhUWW3QXHUwMDA3S3spJoJSqVx1MDAxNUaxabqPlk6Fq1x1MDAwNYSNdN6c7Ocmg1xiKmZcdTAwMDXKJY3xtiRQojGRXHUwMDEyeiX7ZGT9pHdSKtZcdTAwMGX4caW9Ve00vM7Zw9Zqg4RIYsHQk4CSMKGqXHUwMDEzINFcdTAwMTZSmmrynsKYvkBhWlx1MDAxOGH0UKHij/L+jlDIpYtAQN+ASVK0cVx1MDAxON7yt1x1MDAxN8epWnNcdTAwMGKkWYLyXHUwMDBi5IzQUVx0iFx1MDAxZCGWyj6TQlx1MDAwYpVBbdzZXHUwMDE41VxitcV4+1x0XHJcbt3Vhj6WypLBY6JSXHUwMDExXGIhkf6wSVVcdTAwMDZOhlx1MDAxM/VcdTAwMTU5Plx1MDAwM8UsQ/nkccZaf44lx1x1MDAxNC2wi8u40Vx1MDAxYtaVd1PcsG/bpUp9fN0vNFdcdTAwMWIkMX1cZmJHjVx1MDAxMpHjUnKqi1xiJOCZKo3V3KX+n1x1MDAxYlxy+Vx1MDAxNFx1MDAxMnpXIbVshUzWmlshzVwi9Fx1MDAwYlxuydPzRlx1MDAwNDFcdTAwMDRcIrnAvOPp9/Ztm/dcdTAwMDaqdcjObm6K91x1MDAxN+xpxVx1MDAxN1x1MDAxYsyRyFx1MDAwZpRcXIU4XHUwMDE4/Fx1MDAwZef0916HXHUwMDEwYcWsRflEMnZTkzEkk4wjvMCSXHUwMDFj13tcdTAwMTh25fdh9fSeXHUwMDFktPdKd/v8XHUwMDE2rTZKiGJW8KRcdTAwMWJ+0chJjCwltyqRlVkgtVRSs/iDXHUwMDA3vyNcdTAwMTJyXHSkpN+4kEvWx2SlueXRLEBGyD9j0bOrWpbloSpcdTAwMTb3afnmrr/R3dqJfXvjXHUwMDE20OEuJ4JaYMNwuKHexP6eISQke16kpqfGMYKQi1xuXHUwMDAy56hS4DqRmlx1MDAxZdKYM4vo4KNcdJWM4tjWytP4fFx1MDAwYpBl51x1MDAxY5I4/lx1MDAxNpyz1O1Wfk5FgtxrzvRUgiCg9PRNXHUwMDAxOCdcdTAwMDJoTmXxREmUTzTjLVx1MDAxNe8tN1FOXHUwMDFmnsFrY3pkRlx1MDAxZjjVNVx1MDAxOXeOXnhH6l/Yb/qVKcxcIjyDKS7v6kXsXHUwMDE3XHUwMDA2rii2N9nojLrV6/40U0w6iIAppFBcdTAwMTY4aaJcdTAwMTCYO7ihyVx1MDAwN8SkXHUwMDA1jk5rikFglYgk69VcdTAwMWNcdTAwMTJcciUkUIySUpPYwySmPX6/+CExXGLz8oPmUnM1nVx1MDAxY1x0gqbUrFwipVxmeollmnVbXHUwMDE2PfxUdsMmRVx1MDAwYu+BnM9cdJj3JV7AXHUwMDFmZNhfyfT8ilncZ2D8vNlq9zvi6OCkiMZn/vVFeff+YVx1MDAxYeOGiDq0XHUwMDA0XHUwMDFhgFx1MDAwZVx1MDAwMSSnXHUwMDEwXHUwMDEzXGJGJpfpUHDJXHUwMDEwSVwi6E5ccv9iXHUwMDAxxU+gXHUwMDBiaVx1MDAwMeeCa9VCICFNUSCm4IK5xFxmXHUwMDAyQKY4jq12nFx1MDAwYnx/aPdGLzdnJvibTou1cm29/FnAj1x1MDAwNeFYKc2nor6wXHUwMDBmUpdqYyk5ROk0U8J0afbgXHUwMDE1XHUwMDBmZlx0m4GH3bPLw8v6+VNxs3Tg3Vx1MDAwZrbGu/v9cmY8SC0tLYNp7Wc8JJ6CVNSCXHUwMDEwTSpcdTAwMDHRM+Uktk/gXHUwMDAygFDaYuDkgr2JXGJT8edOv/DwhmKIINKZ3op6PXz4JVx1MDAxZFxmnGFGVKbZ9eWDwcz1M8BQuDyQ7IChXHUwMDFmh2LIT6pcdTAwMGajtip3MoNBXHUwMDA1YFx1MDAwMMOMjWBgjFx1MDAwN+k9XHUwMDA0tENEXHUwMDEwl+TBXHUwMDAyUZYkXHUwMDA0XHUwMDFjJpOSXHUwMDAytOhcdTAwMTdcdTAwMTbeQ1x1MDAxYpTG4Fxy5fTOcaG9SV+rjDR0XHUwMDFipyvlXHIjOJipflx1MDAwNlx1MDAxY3aaXHUwMDE35ztyt7FVunKFXb50byq7PFvmhFuMonhuZE7KhFJcdTAwMDHYXHRcdTAwMWWlV8F1psfyZiUwv1x1MDAwMqB841xcMokkXHUwMDExplxiKD1cdTAwMWRcdTAwMGVRLNKa80x7in7IXGZJ6mhMXFw91Vx1MDAxMaucXHUwMDBlMYvbXGb4XHUwMDFmUu/gXHUwMDE0t29J7/asd3jTKm4329uZ0iFIWURw8IVcZphAksQj8OG+zUGUpKVigkVnXHUwMDE3eDD3bSjgS+owoVxcXHUwMDAw6IxJXHUwMDEwlj5xXHUwMDFj/DJcdGGIrpLxiy2Ri/+s2KJTJL+cXHUwMDAwiU1bLLbELtbq1OmRXGLPZnWegWfeQcfejY3P+5WD2uPu4c7hXHUwMDFlN6Q+pvGsXHUwMDAyPEPEq5FcdTAwMDBWVGxyXHUwMDAz2WB5aVx1MDAxOOVJXG7WZzrE+0Lz8tBMmZCBw2LxUfuCZpUu6Fxu8Lxqglx1MDAxZS3nUVx1MDAxZlx1MDAxMc1cdTAwMTOtzoBms9jOQLNcdTAwMTR1z1x1MDAxOdiYdFx1MDAxYfen1fui27l5sLOgWWNmIa60XHUwMDE2MFhcdTAwMTDRkz/ewFxiflx1MDAwZVNBmXWwXHUwMDFjYFx1MDAxYdCZXHUwMDFlgfqCdPh6XHUwMDAzSFx1MDAwM7GC1Fx1MDAxYWNRzKaAXHUwMDFlYVx1MDAxYYhAqmy/T7xsTEv2XHUwMDAxIT3R6FxmiDbL7VxmRLfLdml/VFx1MDAxY1R6hUbrfjCSjfPbrSyIXHUwMDA2n21phFx1MDAwNVx1MDAxN0JcdTAwMTFCdeJcdTAwMTkpJK1cdTAwMDDPYNi0gKKG4Fta83aR+4Jz+PplOFx1MDAwN7vZXHUwMDEzcNzGWVx1MDAwN5y+zSpcdTAwMTaaIPJOiaWYi89cdTAwMDFmipBcdTAwMTnN2bbQ+3U055pvnGx1XHUwMDA2OJv1dlx1MDAwNpy3n+6Ojkv8otX29tVcdTAwMTnaVN6oZphZMYTPmFiag9+G4ExcdTAwMTOVXFyuqrBFXHUwMDE5XHUwMDE1WkgsmZSxiagvPC9fnlx1MDAxOdHBVK155iT94V1cIpFkQmf6iYVlXHUwMDAzenL/rI9cdTAwMDLojLt+RYA2y+1cZkDjXHUwMDAyOt7bOVx1MDAxZdX2XHUwMDA2hUNyflXfXHUwMDFiMEM63Fx1MDAxMD9jaVx0JIXOXHUwMDA06Ol8XHUwMDE4UZZxWexcdTAwMTei31x1MDAwM9FcdTAwMWFcdFx1MDAxMewyYZJoQmYsXGZQ4a5gK1x06Yltfz5cbqKz7VVcdTAwMTTb8d4ouDNcdTAwMDDtXGbZj54uON8vaNW+bVxyXHUwMDFmamJnL1tcYlxyXG5cdTAwMGL8TV5cdTAwMDA9mVx1MDAxMPtcdTAwMDL0alx1MDAwMVphXHUwMDEx2GdlnM2NZSaTXHUwMDBi/Vx1MDAxOIPomWTarnjZeJ7YrOSj4DnbXHUwMDBlK1x1MDAxMZ7NevuM5z9eXHUwMDA2xro9XHUwMDE4nPpwe+GCZ3Sv37vOeDN9vvePXHUwMDE3NlxikOBcdTAwMDR99dfff/z9/314n7QifQ==",(0,n.kt)("defs",{parentName:"svg"},(0,n.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}')),(0,n.kt)("g",x({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m423.203 76.293 38.94 37.4-38.01 39.86 160.96.21 36.98-38.42-36.89-41.78-161.63 1.38"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M423.813 75.243c11.88 13.79 27.79 25.43 40 40m-40-40c15.08 13.39 29.87 28.38 40 40m0 0c-11.46 11.8-20.06 19.7-40 40m40-40c-15.19 14.81-29.78 29.42-40 40m0 0c54.59-1.57 112.44 1.36 160 0m-160 0c43.84-.7 87.83-1.29 160 0m0 0c9.64-8.38 17.48-18.07 40-40m-40 40c12.52-12.5 25.82-26.54 40-40m0 0c-14.14-10.85-27.02-27.83-40-40m40 40c-12.18-12.49-23.24-23.22-40-40m0 0c-47.7 2.03-96.82-1.26-160 0m160 0c-37.28-1.82-73.73-1.11-160 0m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("text",x({parentName:"svg"},{x:"37.212",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(488.601 99.13)"}),"chart"),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m11.422 9.425 372.92 2.67-1.35 84.96-370.34.9"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M11.202 11.105c125.87.43 250.74 0 372.33 0m-372.33 0c115.42-.13 231.43-.15 372.33 0m0 0c-.57 28.62-2.02 57.39 0 87m0-87c-.85 29.93.4 57.75 0 87m0 0c-143.3 1.49-286.76 1.04-372.33 0m372.33 0c-120.75 1.75-240.62 2.4-372.33 0m0 0c-1.48-31.31-2.44-63.66 0-87m0 87c.81-26.62 1.37-54.87 0-87"}))),(0,n.kt)("text",x({parentName:"svg"},{fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(16.202 16.105)"}),"export"),(0,n.kt)("text",x({parentName:"svg"},{y:"19.2",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(16.202 16.105)"}),'| where #schema == "suricata.flow"'),(0,n.kt)("text",x({parentName:"svg"},{y:"38.4",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(16.202 16.105)"}),"| top proto"),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m663.473 10.14 374.24.03-2.62 88.41-370.32-1.2"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M664.093 10c89.5-2.29 180.84-2.55 372.33 0m-372.33 0c92.46 1.02 184.98 1.82 372.33 0m0 0c2.41 21.01 2.15 39 0 87m0-87c-.38 30.26-1.18 58.93 0 87m0 0c-142.66-1.58-285.8-.87-372.33 0m372.33 0c-81.59-.51-163.23-1-372.33 0m0 0c-.12-22.27-.66-42 0-87m0 87c-.4-25.15.25-48.98 0-87"}))),(0,n.kt)("text",x({parentName:"svg"},{fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(669.093 15)"}),"export"),(0,n.kt)("text",x({parentName:"svg"},{y:"19.2",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(669.093 15)"}),'| where #schema == "suricata.flow"'),(0,n.kt)("text",x({parentName:"svg"},{y:"38.4",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(669.093 15)"}),"| top proto"),(0,n.kt)("text",x({parentName:"svg"},{y:"57.6",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(669.093 15)"}),"| chart bar --title Protocols"),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#f8f9fa",strokeWidth:"0",d:"m198.908 122.073 182.76-1.79.11 69.64-183.68 1.57"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M197.368 121.613c40.17-.15 83.65.02 186.17 0m-186.17 0c74.65-1.25 148.34-.71 186.17 0m0 0c-1.33 18.96.63 39.2 0 68m0-68c.23 25.09 1.08 52 0 68m0 0c-68.98-.17-134.69 1.46-186.17 0m186.17 0c-55.47 1.44-112 2.36-186.17 0m0 0c.28-23.85-2.5-43.95 0-68m0 68c-.8-15.58-1.04-30.66 0-68"}))),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#f8f9fa",strokeWidth:"0",d:"m12.452 122.573 184.16-2.24-.47 67.72-183.4 2.02"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M11.202 121.613c49.29.44 97.36-2.95 186.17 0m-186.17 0c53.97 1.52 108.5 2.83 186.17 0m0 0c-1.07 22.67 0 43.44 0 68m0-68c-.5 20.02-.14 40.13 0 68m0 0c-61.81 1.98-119.99 1.44-186.17 0m186.17 0c-71.84-.29-142.1-.91-186.17 0m0 0c-.98-17.63.86-36.85 0-68m0 68c-.83-26.89.59-52.63 0-68"}))),(0,n.kt)("text",x({parentName:"svg"},{fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},transform:"translate(208.42 129.213)"}),"count"),(0,n.kt)("text",x({parentName:"svg"},{fill:"#868e96",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(208.42 162.813)"}),"uint64"),(0,n.kt)("text",x({parentName:"svg"},{fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},transform:"translate(21.653 129.213)"}),"proto"),(0,n.kt)("text",x({parentName:"svg"},{fill:"#868e96",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(21.653 162.813)"}),"string"),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m9.001 192.353 186.67-.95.04 41.22-185.69.16"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M10.601 191.353c57.12.17 116.77-.58 186.17 0m-186.17 0c38.42-.77 76.12.4 186.17 0m0 0c1.01 14.82-1.46 27.04 0 41.2m0-41.2c.1 12.5.63 26.28 0 41.2m0 0c-67.45-.19-138.06-.21-186.17 0m186.17 0c-72.95.73-145.53.34-186.17 0m0 0c-1.02-11.2-.4-19.51 0-41.2m0 41.2c-.77-15.11.24-29.75 0-41.2"}))),(0,n.kt)("text",x({parentName:"svg"},{fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(21.653 199.953)"}),"ICMP"),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m8.95 232.623 186.63.16 2.18 42.8-188.73-3.32"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M10 232.553c62.21 1.84 128.64 1.4 186.17 0m-186.17 0c47.01-1.48 93.47-.72 186.17 0m0 0c.05 13.62-.33 30.12 0 41.2m0-41.2c1.05 9.76 1.12 20.79 0 41.2m0 0c-38.85-3.43-81.25-1.33-186.17 0m186.17 0c-67.46.38-135.01-.12-186.17 0m0 0c1.29-9.97-1.46-23.61 0-41.2m0 41.2c-1.01-10.73-.76-22.44 0-41.2"}))),(0,n.kt)("text",x({parentName:"svg"},{fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(21.052 241.153)"}),"TCP"),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m11.6 275.583 183.59-3.32 2.34 41.04-189.24 3.62"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M10 273.753c73.27.22 149.87-.8 186.17 0m-186.17 0c52.57-1.71 103.84-.85 186.17 0m0 0c-1.14 11.79.3 21.55 0 41.2m0-41.2c-.5 11-.51 23.28 0 41.2m0 0c-36.95 1.34-75.88-.62-186.17 0m186.17 0c-55.87-1.15-110.29-.35-186.17 0m0 0c-.23-14.09.17-31.82 0-41.2m0 41.2c-.3-14.39-.07-28.74 0-41.2"}))),(0,n.kt)("text",x({parentName:"svg"},{fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(21.052 282.353)"}),"UDP"),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m195.977 190.473 187.37-.48 1.09 44.32-186.76-3.09"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M196.767 191.353c53.07.17 104.49-.05 186.17 0m-186.17 0c67.83-1.96 135.16-.28 186.17 0m0 0c1.47 12.27.97 24.86 0 41.2m0-41.2c.53 14.24-.27 26.6 0 41.2m0 0c-50.49.45-100-.47-186.17 0m186.17 0c-52.74-.17-106.78-.58-186.17 0m0 0c1.37-13.14 0-27.05 0-41.2m0 41.2c.16-14.55-.34-28.36 0-41.2"}))),(0,n.kt)("text",x({parentName:"svg"},{x:"82.031",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(290.451 199.083)"}),"283,472"),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m196.526 233.823 187.76.28-2.05 39.85-188.06-.42"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M196.166 232.553c59.93.39 125.61.62 186.17 0m-186.17 0c37.28-2.55 75.18-2.11 186.17 0m0 0c-.09 13.11-1.64 26.8 0 41.2m0-41.2c.83 15.15 1.16 32 0 41.2m0 0c-35.93 1.74-73.5 3.34-186.17 0m186.17 0c-54.33-.7-108.56-.55-186.17 0m0 0c-.85-14.73.15-30.61 0-41.2m0 41.2c.68-13.45-.49-28.82 0-41.2"}))),(0,n.kt)("text",x({parentName:"svg"},{x:"82.031",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(290.451 241.153)"}),"207,808"),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"m197.856 273.123 183.02 1.17 1.36 40.07-188-.8"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M196.166 273.753c56.17-.96 110.44-2.95 186.17 0m-186.17 0c52.46-1.14 103.02-.26 186.17 0m0 0c-.54 8.71-.07 21.5 0 41.2m0-41.2c-.66 15.24-.62 29.93 0 41.2m0 0c-69.92 1.07-140.25.95-186.17 0m186.17 0c-43.79-.4-85.66-.79-186.17 0m0 0c-1.3-9.88-1.19-23.3 0-41.2m0 41.2c.67-9.1-.01-17.52 0-41.2"}))),(0,n.kt)("text",x({parentName:"svg"},{x:"70.313",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(302.17 282.353)"}),"73,567"),(0,n.kt)("path",x({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",strokeWidth:"2",d:"M680.693 314.953c.72-57.4 2.08-117.26.55-154.29m-.55 154.29c.88-49.74.23-101 .55-154.29"})),(0,n.kt)("text",x({parentName:"svg"},{x:"129.528",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(785.495 127.517)"}),"Protocols"),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m715.724 183.073 68.02 1.3-1.84 127.7-66.85 1.93"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"transparent",strokeWidth:"2",d:"M715.464 182.753c24.84.51 49.32 1.07 67.39 0m-67.39 0c26.78-.72 52.87-1.15 67.39 0m0 0c1.53 40.81.54 82.77 0 130.36m0-130.36c.69 36.04 1.16 73.03 0 130.36m0 0c-14.05.81-32.53-1.5-67.39 0m67.39 0c-18.34.37-36.44-.59-67.39 0m0 0c1.5-48.97.05-97.47 0-130.36m0 130.36c-.11-48.27.09-97.5 0-130.36"}))),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m816.35 221.986 66.23.11-1.01 92.14-67.46-.53"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"transparent",strokeWidth:"2",d:"M815.43 223.396c23.63 1.73 49.39 1.58 67.39 0m-67.39 0c21.77-.22 42.72-1.07 67.39 0m0 0c.05 20.08 1.15 40.62 0 89.48m0-89.48c-.31 31-.55 63.07 0 89.48m0 0c-18.94.34-37.01-2.09-67.39 0m67.39 0c-22.47 1.19-44.63-.53-67.39 0m0 0c-.51-33.96-.91-67.96 0-89.48m0 89.48c.48-29.03.17-55.68 0-89.48"}))),(0,n.kt)("g",x({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",x({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m916.838 286.943 65.88-1.15-.67 27.42-68.41-.77"})),(0,n.kt)("path",x({parentName:"g"},{fill:"none",stroke:"transparent",strokeWidth:"2",d:"M915.398 285.193c17.58-.42 36.32-1.14 67.39 0m-67.39 0c26.32.27 51.4-.37 67.39 0m0 0c1.36 6.01.38 17.37 0 28.72m0-28.72c-.93 8.77.51 17.55 0 28.72m0 0c-14.45 0-25.87-1.71-67.39 0m67.39 0c-15.71 1.24-30.14 1.02-67.39 0m0 0c.53-7.79 1.67-17.48 0-28.72m0 28.72c.41-9.99.21-17.7 0-28.72"}))),(0,n.kt)("path",x({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",strokeWidth:"2",d:"M682.885 314.953c104.66-2.75 209.69-2.78 336.94 0m-336.94 0c116.73-.71 233.79-.93 336.94 0"})),(0,n.kt)("text",x({parentName:"svg"},{x:"46.875",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(725.72 158.753)"}),"283k"),(0,n.kt)("text",x({parentName:"svg"},{x:"46.875",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(825.687 199.396)"}),"208k"),(0,n.kt)("text",x({parentName:"svg"},{x:"35.156",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(931.513 261.193)"}),"74k"),(0,n.kt)("text",x({parentName:"svg"},{x:"37.5",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(632.356 147.896)"}),"300k"),(0,n.kt)("text",x({parentName:"svg"},{x:"37.5",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(730.408 321.337)"}),"ICMP"),(0,n.kt)("text",x({parentName:"svg"},{x:"28.125",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(835.062 321.337)"}),"TCP"),(0,n.kt)("text",x({parentName:"svg"},{x:"28.125",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"end",transform:"translate(935.029 321.337)"}),"UDP")))))}T.isMDXComponent=!0}}]);