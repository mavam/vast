"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31408],{15680:(e,t,c)=>{c.d(t,{xA:()=>s,yg:()=>w});var n=c(96540);function r(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function m(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function a(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?m(Object(c),!0).forEach((function(t){r(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):m(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function o(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)c=m[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)c=m[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),c=t;return e&&(c="function"==typeof e?e(t):a(a({},t),e)),c},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",M={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var c=e.components,r=e.mdxType,m=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(c),p=r,w=d["".concat(i,".").concat(p)]||d[p]||M[p]||m;return c?n.createElement(w,a(a({ref:t},s),{},{components:c})):n.createElement(w,a({ref:t},s))}));function w(e,t){var c=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=c.length,a=new Array(m);a[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var l=2;l<m;l++)a[l]=c[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,c)}p.displayName="MDXCreateElement"},77534:(e,t,c)=>{c.d(t,{A:()=>h});var n=c(96540),r=c(20053),m=c(36764),a=c(27449),o=c(75068),i=c(72183);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s({href:e,children:t}){return n.createElement(a.A,{href:e,className:(0,r.A)("card padding--lg",l.cardContainer)},t)}function d({href:e,icon:t,title:c,description:m}){return n.createElement(s,{href:e},n.createElement("h2",{className:(0,r.A)("text--truncate",l.cardTitle),title:c},t," ",c),m&&n.createElement("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:m},m))}function M({item:e}){var t;const c=(0,m._o)(e);return c?n.createElement(d,{href:c,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,i.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p({item:e}){var t,c;const r=(0,o.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,m.cC)(null!=(t=e.docId)?t:void 0);return n.createElement(d,{href:e.href,icon:r,title:e.label,description:null!=(c=e.description)?c:null==a?void 0:a.description})}function w({item:e}){switch(e.type){case"link":return n.createElement(p,{item:e});case"category":return n.createElement(M,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var x=Object.defineProperty,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,y=(e,t,c)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,A=(e,t)=>{for(var c in t||(t={}))g.call(t,c)&&y(e,c,t[c]);if(f)for(var c of f(t))D.call(t,c)&&y(e,c,t[c]);return e};function u({className:e}){const t=(0,m.$S)();return n.createElement(h,{items:t.items,className:e})}function h(e){const{items:t,className:c}=e;if(!t)return n.createElement(u,A({},e));const a=(0,m.d1)(t);return n.createElement("section",{className:(0,r.A)("row",c)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(w,{item:e})))))}},98572:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>D,contentTitle:()=>f,default:()=>h,frontMatter:()=>x,metadata:()=>g,toc:()=>y});var n=c(15680),r=c(77534),m=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,c)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,M=(e,t)=>{for(var c in t||(t={}))l.call(t,c)&&d(e,c,t[c]);if(i)for(var c of i(t))s.call(t,c)&&d(e,c,t[c]);return e},p=(e,t)=>a(e,o(t)),w=(e,t)=>{var c={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(c[n]=e[n]);return c};const x={},f="Connectors",g={unversionedId:"connectors",id:"version-v4.24/connectors",title:"Connectors",description:"A connector specifies how to exchange raw bytes with an underlying resource,",source:"@site/versioned_docs/version-v4.24/connectors.md",sourceDirName:".",slug:"/connectors",permalink:"/connectors",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/connectors.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"yield",permalink:"/operators/yield"},next:{title:"amqp",permalink:"/connectors/amqp"}},D={},y=[],A={toc:y},u="wrapper";function h(e){var t=e,{components:c}=t,m=w(t,["components"]);return(0,n.yg)(u,p(M(M({},A),m),{components:c,mdxType:"MDXLayout"}),(0,n.yg)("h1",M({},{id:"connectors"}),"Connectors"),(0,n.yg)("p",null,"A connector specifies how to exchange raw bytes with an underlying resource,\nsuch as a file, a network socket, or a third-party library. A connector provides\na ",(0,n.yg)("em",{parentName:"p"},"loader")," and/or ",(0,n.yg)("em",{parentName:"p"},"saver"),":"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Loader"),": translates raw bytes into structured event data"),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Saver"),": translates structured events into raw bytes")),(0,n.yg)("p",null,"Loaders and savers interact with their corresponding dual from a\n",(0,n.yg)("a",M({parentName:"p"},{href:"formats"}),"format"),":"),(0,n.yg)("p",null,(0,n.yg)("figure",M({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,n.yg)("svg",M({parentName:"figure"},{viewBox:"0 0 940 272",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nN1cXGtTo0pcdTAwMTP+7q+wPF/X7Nwv+y1cdTAwMWFcdTAwMTNdddXVvZi3Tm1hIFx1MDAwNkMgXHUwMDAy0cSt/e9nSHZcdTAwMDMhQIhcdTAwMDE2vrEql2Ggh5l++unuafy5s7u750+Gxt6H3T1j3NEsU3e15713QfuT4XqmY6tDaPrbc0ZuZ9qz5/tD78P799pwWFx1MDAwYs+qdZzB7EzDMlx1MDAwNobte6rv/9Tv3d2f0/eILNfo+Jp9b1x1MDAxOdNcdTAwMTOmh0JxXGbQeOsnx56Khlx1MDAxMlx0qF5UzHuYXkPJ81xyXVx1MDAxZO5qlmeER4KmvfpcdTAwMDVcdTAwMTPPXHUwMDE2vZFgQFx1MDAxYs3n3qR9MFx1MDAxMaHYrmlZ1/7Emt2Y1umN3MigPN91+sY3U/d7gfRY+/w8XfN6alx1MDAwMPPDrjO679mG5y2c5FxmtY7pT4I2XHUwMDAw5q2zafiwXHUwMDFitoyDKZcsbJieQlx1MDAwNYiJP3Qsx1xyxP9cdTAwMDOmr1D+ndbp36tB2Pq8j+9qtjfUXFy1LmG/5983hkh47Z5h3vf8oDEySM+Yzi9cdTAwMDJcZjNcdTAwMDQpXHUwMDBmbypcdTAwMTAzPNGna/1vdFx1MDAwMmz991x1MDAwNNgjy1xuR1x1MDAxNlx1MDAxYziK60dUR1x1MDAxNvTEN8bhcCOLXG7lXHJcdTAwMWGdNsZkjJ7Yfv3E+1pviL15v1/vki87O7mD0eOXXHUwMDA3aU+GQ61cdOvWXHUwMDBiNayjRSl/5Guu6zznvW7z8OVB+zRo0Vx1MDAxZncuXHUwMDFjwIZ2MVx1MDAxZfF81/39LZzA0VDXZjpcclx1MDAxOedcdTAwMTRcdTAwMTHBIJOh1lum3Y/PreV0+iFcZnZcIlx1MDAwM17C38K8RqCHXHRLg1x1MDAxZVx1MDAwMlRcbsFhpMcq6CWvUrHQ81x1MDAxY2V9ikRcdTAwMWVcdTAwMDZA1uhcIvZcdTAwMThDpWFcdTAwMGZcdTAwMTK4jD3MlqFHuCBcdTAwMTCx4qBXpLaFi+rY/rX5MtVcdTAwMTix0NrUXHUwMDA2pjVZWJepXHUwMDFhqlx0ulx1MDAxOFx1MDAxYa7mO663t3Cobpn39lx1MDAxNLFqyIa7oLC+qXhn3mFg6nqUTDpKnmbahnuSh1x1MDAwM1x1MDAxY9e8N23NuklcdTAwMWaOmlx1MDAwMeP4z+rAXHUwMDFhXHUwMDEyylx1MDAwNpL5u4isvmdcdTAwMDR9g9unmVx1MDAxMMykQMpxXHUwMDFhXHUwMDBluVx1MDAwMFRcYirzM6Djf2q377l/cmWMR51cdTAwMDOgM9r9vO0wRFxmbSFcdTAwMDHCXHUwMDAwhJQwJksmwNnKXHUwMDFkt1x1MDAwZVxcfHF8c97S+23x2cWXXHUwMDFmjdtcIpiqf1x1MDAwNVx1MDAxZlx1MDAxYl1x1Fx1MDAwNaDtkf3xyyV42ui6q1xiXHUwMDFiN/b3X07Yvbg4emg1XHUwMDA3Z7e3375661x1MDAxMiBcdTAwMDekdFx1MDAwMkz3PUlgfVx1MDAxMVx1MDAwNblxl3zPW487XHTjuKOl4S5ixTK4XHUwMDBmYiA4ZpLhwlBXpKJtxn1Nx1x1MDAxZGj+a4nPd4aprLfC7sdZLz6QiimPXHUwMDExnlx1MDAxYfWpJZFQyVxmvbBV2NN4g4JPj9YhXHUwMDFjn3tcdTAwMGbg9qx5e9XceuwhsVx1MDAwNufRLtY7pFx1MDAwMs6jUDGegka4Pn8n6Ds4/2zRXHUwMDE3pUHUu/R/ON+w/7U72UZcdTAwMGXhWZqMMGUof1xmlXzT267IXHUwMDE447hcIqeTyKaKXGYxWVbkXHUwMDA0XHUwMDE2UbFcdTAwMTNUb5xcdTAwMTamx9vDXCKHjm0r6+q4ZVx1MDAxMMlcbmNcdTAwMWEnkoSxXHUwMDE0zyXpXHUwMDE5XGZcdTAwMTFvnYOPKlx1MDAwZlx1MDAwMnC5RvKQfX/5co71Njxl93Wr2/72NLq72Xr0UVx1MDAxMnPhlM7XXHUwMDAw4EhcYlx1MDAwZVg0sC/an6NhXFxcdTAwMTRSSlx1MDAwNPl/oijCJCHkXHJcdTAwMDFcdTAwMTEstGZcdTAwMDDxYOJcdTAwMWJpaVxmy+j6r4PgwnDjeIuJjGONRlZzji4oMtE1i/pcdTAwMTLgXHUwMDA1hUhPzlOktItxnD9Eylx1MDAwZXDXwlc8Q1dcIr6IiOOLypqcvzgoMVvIXHUwMDEzXCImVFx1MDAwM4ThwLZcdCkkUEtk7MOIvZmhTlwiXHUwMDE1REEki0tdlII6z9dcXP/AtHXTvldcdTAwMDdDXHUwMDBm8c+20oyTrJPmjZxcdTAwMTDPa5tcdTAwMTdcdTAwMTfd+idcdTAwMTNccs2o16hw2lx1MDAxOXnRtVx1MDAwYm5YXHUwMDFiXHUwMDA2Q/zdMM9l7Fx1MDAxOba+WmLj++X+wal/dvjoW+b38fnJXHUwMDBinrRfK9HSPP/QXHUwMDE5XGZMX03bpWPafnx6pvNQXHUwMDBmcNgztCVcdTAwMWKgRlx1MDAxYz2mlMaMRVbD4KKL3nb4bTc6SPVj/v3fd4m9I2pcdTAwMTe8klx1MDAxNS68yE70c31cdTAwMWIjI5pcdTAwMTO3Mcp7Jlx1MDAxNOI1QsHsZNebsTFcdTAwMWOVl/5MtCpJu39cXE08QFVYXHUwMDEwqowqiKRZi7cg11+ewLVvjdrP7Vx1MDAxN6v12DlcdTAwMTlejq5KtSDg8uhL3+1B7vQ+61x1MDAxYfdcdTAwMWYvnC6t0IIkWImYXHUwMDFkWTi/TFx1MDAwYlx1MDAxMumfy1hkpo5cdTAwMTCW8dbQJ8GcYslkfp8k285vq8/P4vVcdTAwMDKMbGQv/ulcdTAwMTg60bVcdTAwMDRbwVx1MDAxMtJGZMlYiMBcdTAwMTFcbqa+MFsx15i1kkbO59uzu0lP71iN7nBsXHUwMDE5bqf90c27T1LW/stcdTAwMDZcdTAwMTVcYn/QUqDrlVx0vLQ4XHUwMDFioVSOJsrPVH5cdTAwMDHLn+RKXqRth5yKpeOQ47Xy9kpYkue/XHUwMDFjW2Nl65hkvLhsbSZJXHUwMDEzhjauXHUwMDEzyFx1MDAxZFxcX2quZ7w6xbWiSGCF3Y9H3fGxXHUwMDE0XHUwMDExdmezXFx6bVx1MDAwZaSEYFx1MDAxNXeuUVx1MDAxNJDti2wr5JZYjoO/ynJQXHUwMDEwoYIgWuDO5Oto7sienPbdg+uv7fPHMb+zL0TL6P+9coBqXG7iqqC5XGbXXHUwMDEyqjhcdTAwMTRcdTAwMDAsSW7QJa/StoNuiec4+Ps8hyCSlDNGq6hcdFA8p1x1MDAwNOE1lG1DnnPNRS4rlOhWmP4lootcdTAwMGamfKaLXHUwMDE02SxcdTAwMTWAM1x1MDAwMFxipWtUoWZnXG63XHUwMDE1dDhe/pZcdTAwMTXP5dhB3ZjpXHUwMDAw4Vi5XHUwMDE5XHUwMDA1po9fx3TPemMwPlx1MDAxZniW0uaH1sdOe2BdyVxuXHUwMDAyuu1hJJRcblx1MDAwZcYh4Vx1MDAxMKyxXHUwMDAxkzybW1x1MDAwZlx1MDAwZUaXSrQzY69NS1xmWK59TS5U2Fx1MDAwYlx1MDAwMHxDZWq5KenM0fTSXHUwMDE4aYWJjjNSfCxcdTAwMTVcdTAwMTBSajk2YVJSXHUwMDAwUf79iOy889ZCLs5HWZFXXHUwMDE1fIS5hFx1MDAxMotItepfqkrrPvR7P85H37l9xVx1MDAxZp5sjZ95XHUwMDBmXHUwMDE1RF5bw0fpXHUwMDA1N1hFT1LINUqmkydz67HBkTI6XHUwMDAwICSEgFx1MDAwMq9cdTAwMTUubUpNlNaUUyYpQYpcdTAwMTYximxcdTAwMWJmMJVEnFx1MDAxMyBKZyqBMVx1MDAwMZyqOaRr6OFmTHWtPZVGVCtsd5yoYkMptzKHs/RUXHUwMDA1Vn+cSpg/VZG9RbGtu+ZcdTAwMDLFK3PYRvnBXHUwMDE1dadcdF7hMlFBwVxiI1x1MDAxMvx/1N1cdTAwMTRaXHUwMDA1k2vXPPvhvajEXHUwMDFhyiHzrVXehEpcdTAwMTbrv1x1MDAxM/18hbmg6YWyXHUwMDAwSCZcdTAwMTheY9M8O9X7ZsxFqUU2OFeRTZBW5lx1MDAwMpGK8polXHUwMDE32Vx1MDAxNFryUqy52Fx1MDAwNzWSQ+hbq7PBXHUwMDFi1dmkefnRYu24l89cdTAwMDAjfJ1/yUFPXHUwMDFmb1x1MDAwZntGu3PpwObQ7+P66dPjXHUwMDFi8PJDXp0904JKLKRcdTAwMGatYNYjLVx1MDAxNFx1MDAxMFxuXHUwMDE2vOsyfVx1MDAwYoFcdKnukZaT91x1MDAxN9XW0S9cYqzuiVx1MDAxNVx1MDAwMtP39TGUXHUwMDA0USFCXHUwMDEzvVxuW4/X49b3S91cdTAwMDFnWutcdTAwMDdt+ah1aJKtx5bg8VKaqp5YybfbSDiWmHBU9jZ/2eVhjFx1MDAwYqKmNbKFUHY0fvQ0veNKgVx1MDAxY5dZRNydil6R/rAnpFxcUEzWKFx1MDAxMLi5PqxfnXSOtZejfuNaOz8yjuvbn1x1MDAxYmZ4mVx1MDAxOaPo5TI2llx1MDAwMv9xXHUwMDA3zEWUXGZcdTAwMGJcdTAwMDFcdTAwMTmu7oEzXHUwMDE2Vb5SaTKoQ1NcdTAwMWXx++k2feBcdTAwMWFXXG61dOnVXHUwMDExKI1Yo7hvilx1MDAxOVx1MDAxNVxmrPG8Ndb6XHUwMDBmkFx1MDAxYft3/W/PP86PWeO2+bD9dXFSVuibwiTOXFzGXHUwMDFj5lx1MDAxNFx1MDAwNEnm6nZDq1x1MDAwM51cblxihyNf81x1MDAwM1x1MDAwNaxcdTAwMTRviYI3gNrOb19hT1x1MDAxYlx1MDAwZa/VdYNjM+DtPZnG80HCxl13+lxufI4pUFx1MDAwM0hcdTAwMTjB8vz8tfPrP6hudSUifQ==",(0,n.yg)("defs",{parentName:"svg"},(0,n.yg)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,n.yg)("path",M({parentName:"svg"},{fill:"none",stroke:"#000",strokeDashArray:["8","9"],strokeLineCap:"round",strokeWidth:"1.5",d:"M688.95 61.82c94.65-2.65 187.92-.78 241.21 1.75m-1.22-3.22c-.2 41.35 1.59 82.85-.55 200.32m.24 2.17c-57.35.42-115.16-1.9-237.66-2.07m.81 2.03c-.87-68.96-2.08-138.98-.71-201.11"})),(0,n.yg)("text",M({parentName:"svg"},{x:"70.5",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(739.5 144)"}),"Operators"),(0,n.yg)("path",M({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M349.03 62.88c76.78-1.45 157.02-1.29 239.96-1.39m-239.44 1.19c95.5.69 190.34.3 240.73.04m.22.58c-.46 54.7-2.71 111.3-.74 199.42m.05-200.92c-2.39 42.16-.73 82.76 1.09 200.23m.07-.95c-61.37-1.22-122.25-1.71-240.32.66m239.12.39c-54.17 1.13-107.4.64-239.15.31m-1.93.19c-1.05-47.39 1.23-91.87.25-200.87m1.04 200.63c2.04-67.34.76-132.64.73-200.04"})),(0,n.yg)("text",M({parentName:"svg"},{x:"49",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(421 67)"}),"Format"),(0,n.yg)("path",M({parentName:"svg"},{fill:"none",stroke:"#5f3dc4",strokeLineCap:"round",d:"M8.56 61.77c79.17-.89 152.8-1.34 243.05.11m-241.7.46c59.32-2.01 119.61-1.24 239.93-1.14m1.93.76c-1.75 57.32-1.52 114.28-3.46 198.3m.84-197.55c1.29 58.77 1.38 118.12.41 199.23m.31-.13c-49.3-1.6-96.59-1.18-241.14 1.63m240.64-.93c-80.51-.18-160.86.25-239.97.1m-.44-1.66c3.59-67.34 1.28-136.33 1.63-200.58m-.19 201.24c-1.25-43 .34-87.78-.16-199.09"})),(0,n.yg)("text",M({parentName:"svg"},{x:"67",fill:"#5f3dc4",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(63 67)"}),"Connector"),(0,n.yg)("text",M({parentName:"svg"},{dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(271 157.007)"}),"Bytes"),(0,n.yg)("g",M({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M210.38 143.93c70.35-1.88 139.29.77 178.4-1.11m-176.91-1.02c43.24-.57 89.55.31 178.11.18"})),(0,n.yg)("path",M({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m388.41 143.72-13.66 5.68 1.82-13.67 13.44 4.96"})),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M389.52 143.42c-4.98.18-11.02 4.65-13.31 5.49m14.43-7.08c-4.83 1.67-7.34 3.93-13.52 6.45m-.24-1.17c-1.76-2.32-.79-6.03-1.68-10.48m1.2 11.36c-.07-5.26.35-9.94-.05-12.44m-.19-1.07c4.97 3.27 6.73 4.57 12.68 8.41m-12.05-7.81c4.1 2.6 6.94 4.38 12.76 6.46m.43.44s0 0 0 0m0 0s0 0 0 0"}))),(0,n.yg)("g",M({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M212.93 201.86c49.76-.39 105.13.47 176.89-.8m-179.02-.02c52.4-.31 105.64.4 178.18.69"})),(0,n.yg)("path",M({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m214.68 200.23 12.94-4.55-.98 12.53-15-7.97"})),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M214.37 201.76c1.85-2.55 7.86-3.79 12.76-6.96m-14.35 6.34c4-1.06 8.66-2.4 13.72-5.83m-1.17-1.03c1.14 5.13.89 8.36 2.21 15.05m-1.33-13.87c-.18 4.33.09 7.82.25 12.44m-1.07 1.58c-1.84-3.37-5.69-5.73-11.55-7.77m12.15 7.02c-3.29-2.93-7.46-4.72-13.5-6.35m.44-.52s0 0 0 0m0 0s0 0 0 0"}))),(0,n.yg)("g",M({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M390 122s0 0 0 0m0 0s0 0 0 0m-.1 6.87c1.2-2.12 2.88-4.18 5.47-6.53m-5.33 6.02c1.22-1.93 3.83-4.08 5.01-6.38m-6.5 11.37c5.44-2.37 8.41-4.48 10.53-11.98m-9.64 12.53c3.76-3.85 8.34-8.92 10.99-12.27m-11.92 17.38c3.68-4.67 10.09-9.55 17.94-18.09m-16.53 20.22c3.54-6.55 7.82-9.69 14.75-19.13m-15.35 26.05c8.12-8.85 12.84-14.87 20.35-27.88m-19.42 26.14c4.3-4.79 9.69-10.21 21.65-24.23m-21.32 32.17c9.14-8.72 13.01-21 26.52-33.02m-26.3 31.06c5.94-7.07 11.25-15.51 26.22-30.27m-27.4 37.15c10.86-12.36 21.99-27.53 32.33-37.37m-31.39 37.03c6.04-8.93 14.1-15.87 30.74-37.48m-31.83 41.52c11.26-9.66 15.5-19.39 38.15-41.72m-35.36 42.66c10.79-15.51 23.73-28.37 33.9-41.31m-30.38 39.72c9.18-6.27 14.83-16.64 38.05-42.04m-38.35 42.77c13.57-13.73 27.06-28.36 36.92-41.79m-29.93 43.6c14.25-15.57 25.87-29.88 35.87-41.3m-36.93 38.57c13.7-13.68 24.09-25.92 36.6-40.24m-30.06 40.87c11.58-17.53 27.26-31.48 35.21-39.35m-36.06 39.04c11.72-12.1 23.13-27.12 36.36-40.25m-30.09 39.25c8.65-7.03 12.53-16.47 34.82-39.5m-35.39 41.83c11.74-14.63 23.25-28.18 34.64-41.17m-31.18 39.07c15.46-11.39 29.17-26.76 37.16-38.49m-35.65 40.66c9.13-11.34 18.53-21.75 36.44-41.16m-29.44 40.85c6.88-6.58 11.83-15.52 35.89-40.5m-37.09 39.78c11.06-13.72 24.2-27.5 35.72-40.14m-31.96 41.89c11.13-13.21 21.81-27.55 36.34-43.14m-35.89 41.31c8.19-8.64 16.91-17.41 37.04-40.82m-29.97 41.87c8.33-13.03 21.73-28.16 35.02-43.45m-36.53 41.67c13.8-13.94 26.66-28.54 35.98-39.67m-30.92 41.47c9.62-8.74 18.54-21.85 36.15-43.96m-36.22 43.05c10.53-9.67 20.14-20.35 36.61-42m-31.55 41.91c10.46-9.98 20.46-20.89 35.13-42.56m-33.33 43.67c8.54-10.5 18.07-22.77 34.09-40.82m-28 41.59c13.14-16.54 26.16-29.54 35.03-42.62m-37.72 41.35c9.74-10.27 19.41-21.43 38.06-42.01m-32.89 41.67c12.27-12.64 21.93-25.07 38.13-38.96m-37.26 37.79c11.25-11.11 20.17-21.12 35.22-39.13m-31.44 40.65c10.84-11.71 23.42-25.01 38.39-39.82m-36.11 40.06c7-9.64 13.65-17.72 34.78-42.61m-29.21 42.71c7.96-8.56 14.44-17.03 33.61-41.6m-33.88 41.71c10.64-14.49 21.86-28.25 35.67-41.38m-28.88 42.61c12.48-18 25.26-34.93 34-42.44m-36.07 39.68c12.51-13.36 24.41-27.48 36.04-39.38m-31.98 40.71c7.35-9.42 16.56-17.81 36.18-40.14M476 164.18c10.82-14.1 23.51-27.47 36.31-42.6M482 161.67c10.09-9.84 19.56-23.3 34.59-38.68m-34.92 39.33c8.32-8.29 15.12-16.77 35.57-40.57m-32.45 41.93c13.99-15.96 30.34-30.89 37.4-41.5m-35.3 41.32c9.64-10.06 18.23-22.19 36.46-40.6m-33.08 39.3c15.48-11.32 24.8-26.56 37.94-41.45m-35.66 43.3c6.43-10.24 15.71-17.49 35.63-40.75m-30.13 38.77c11.44-14.57 24.11-29.34 35.22-38.85m-35.28 41.08c9.56-13.88 21.49-25.98 35.28-42.91m-28.88 41.04c9.64-14.56 22.24-27.77 33.45-39.43m-34.54 41.01c9.2-10.94 17.44-21.94 35.63-41.69M505.9 164.8c13.33-14.11 23.08-26.28 38.54-44.38m-36.35 42.48c9.82-11.02 21.49-24.53 36.43-41.56m-32.78 41.77c11.02-9.52 20.72-22.78 37.56-40.29m-35.5 39.24c10.22-10.99 21.32-24.02 35.47-39.69m-30 41.43c11.96-15.85 27.23-31.16 33.33-38.98m-34.16 37.64c9.08-10.15 17.33-19.15 34.11-38.83m-30.26 40.23c9.6-10.99 16.37-17.06 30.48-34.4m-27.88 32.91c4.7-6.53 11.51-14.04 26.38-31.23m-20.58 31.77c4.26-7.42 11.51-15.32 19.93-25.28m-20.91 26.27c5.98-8.56 12.81-16.66 22.43-28.22m-17.51 25.55c7.46-4.21 11.37-11.37 18.54-19.96m-17.8 21.13c3.67-4.71 9.51-11.28 17.18-20.13m-12.27 21.6c.73-4.06 3.23-8.39 12.81-14.26m-14.02 13.36c4.51-3.4 7.64-7.82 13.07-15.08m-6.51 14.88c1.31-1.53 3.18-2.87 6.8-8.91m-7.32 8.48c3.08-2.21 5.59-5.61 6.87-8.1"})),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#000",d:"M389.95 121.47c53.02-1.32 105.65-2.92 158.12.47m-157.28.96c44.01 1.6 88.66.12 159.14-1.87m-.16.07c-.81 16.02-.31 28.06 1.96 41.65m-1.12-40.85c-.53 11.73-.02 21.16.12 40.53m-1.9.95c-35.01-3.48-71.86-1.65-160.64-2.95m161.37.59c-46.3 2.47-94.58 1.96-158.98.31m1.07-.9c.06-11.38-.58-20.89-1.54-38.41m-.53 40.61c.21-9.44-.2-20.21-.51-41.51"}))),(0,n.yg)("text",M({parentName:"svg"},{x:"34",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(436 129.5)"}),"Parser"),(0,n.yg)("g",M({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M390 182s0 0 0 0m0 0s0 0 0 0m-.74 6.8c.97-1.29 3.09-3.02 6.26-6.21m-6.17 6.1c2.7-2.3 4.51-5.39 5.48-6.68m-3.68 12.13c3.76-2.84 4.35-8.46 10.49-12.64m-12.29 12.98c4.48-4.82 7.92-9.07 11.09-12.01m-12.47 16.98c8.06-6.53 14.62-13.83 17.11-15.51m-15.78 15.64c5.1-4.21 9.88-11.38 16.02-16.27m-13.31 22.32c4.39-5.72 7.24-13.54 17.31-25.19m-19.21 26.02c7.72-8.15 13.99-15.44 21.07-24.73m-19.19 32.43c1.93-10.39 10.43-16.36 23.16-31.8m-24.84 30.31c6.85-10.44 16.65-19.3 26.64-30.38m-28.38 38.07c7.28-10.76 17.32-20.09 31.84-39.55m-31.27 37.14c6.95-6.01 12.64-14.47 31.88-36.8m-28.14 41.04c10.59-16.55 26.72-31.31 35.02-39.5m-37.19 39.84c10-10.15 19.35-22.16 35.3-39.77m-28.53 41.89c7.4-12.01 19.01-24.15 36.1-43.98m-37.52 43.24c12.29-12.63 22.91-26.69 36.97-42.68m-28.99 42.32c10.41-13.32 21.36-25.6 34.24-42.22m-35.34 40.73c8.41-9.31 19.38-21.57 35.52-39.18m-32.93 38.69c12.09-9.92 23.1-21.63 38.31-38.42m-36.82 40.7c7.23-9.87 16.12-18.03 35.25-42.2m-27.84 41.14c4.99-10.59 15.71-20.04 34.42-42.19m-36.52 42.45c13.41-16.02 27.28-31.83 36.41-41.45m-30.27 43.22c8.33-8.54 13.84-16.78 34.32-42.58m-34.84 40.56c10.93-12.37 21.35-23.26 34.84-40.42m-28.02 42.42c5.54-10.05 16.17-19.59 35-42.08m-37.43 40.33c9.06-9.13 18.26-19 36.39-41.38m-31.15 41.83c10.39-13.99 20.61-24.33 35.07-42.63m-34.5 42.2c14.89-15.38 27.98-30.75 36.41-40.38m-32.16 40.68c11.17-12.94 20.13-23.52 38.38-39.58m-36.37 39.1c9.31-9.9 18.29-20.89 34.35-40.25m-29.04 41.96c9.66-13.91 17.13-24.43 34.46-43.73m-34.78 42.9c10.97-11.79 20.48-25.18 35.13-41.62m-29.31 41.04c15.34-16.74 25.92-34.23 34-39.33m-34.33 39.83c8.47-11.69 15.51-19.59 35.72-41.86m-29.23 41.2c11.42-11.82 21.87-26.69 33.42-42.07m-35.87 42.85c12.7-14.23 25.79-28.33 36.64-42.17m-29.82 40.25c7.61-9.78 16.88-15.39 34.28-41.04m-33.91 41.05c12.63-13.65 24.5-27.97 34.42-40.49m-31.95 42.17c13.38-13.81 24.12-23.45 35.87-40.8m-34.05 40.1c12.71-15.43 26.31-32.22 35.12-40.58m-29.1 42.41c12.36-15.5 25.44-33.7 35.3-44.1m-37.01 42.37c13.1-16.41 28.21-31 37.5-41.69m-31.2 41.7c8.36-12.63 19.77-22.8 36.08-41.36m-36.12 40.85c7.15-8.29 14.98-15.31 34.58-39.13m-31.27 40.23c11.36-10.64 21.14-22.04 38.15-40.7m-37.21 40.56c9.95-10.52 19.1-21.5 36.59-41.23m-29.91 41.66c11.83-16.06 24.67-29.22 33.28-42.41m-32.97 41.45c11.27-13.43 23.78-28.05 35.48-40.86m-32.75 41.52c14.67-12.63 24.85-26.78 36.93-40.26m-34.69 41.06c8.31-12.02 18.91-21.85 35.74-41.67m-28.84 42.05c9.45-14.8 22.49-30.04 31.74-43.39m-34.66 40.9c8.97-7.46 16.39-15.79 36.84-39.08m-30.71 38.73c10.47-12.23 20.81-21.24 36.05-38.44m-36.62 39.91c12.74-13.77 24.71-29.13 36.86-41.29m-31.58 39.97c13.53-14.57 26.79-28.94 35.38-39.46m-34.08 40.81c6.28-9.36 15.02-18.02 34.84-40.29m-29.33 39.63c6.95-8.78 15.09-18.53 34.94-41.93m-36.81 43.55c12.94-14.98 25.67-29.34 36.38-42.87m-29.64 42.64c14.59-18.54 27.5-31.63 35.12-40.78m-35.21 39.7c8.25-9.64 16.04-17.97 36.11-41.57m-32.12 41.62c10.01-9.55 17.26-18.16 34.04-38.12m-32.74 37.57c10.77-11.64 22.24-25.53 33.23-37.45m-27.38 36.13c5.72-4.67 12.39-13.6 25.67-32.23m-26.99 33.67c9.31-10.56 16.78-18.97 28.62-32.13m-23.77 32.41c5.07-5.62 8-9.04 24.23-28.15m-23.96 28.64c7.72-9.49 15.87-19.24 24.29-27.27m-16.44 27.34c2.82-5.75 8.29-12.33 15.88-22.53m-18.64 22.56c4.02-4.55 8.21-9.04 17.97-20.54m-13.48 20.13c2.67-4.62 8.16-5.8 14.45-13.49m-12.7 14.19c2.01-3.01 4.5-6.87 11.96-16.42m-6.47 15.54c2.32-1.87 3.79-5.36 8.17-7.36m-8.12 7.77c1.29-1.9 2.6-4.47 7.42-8.76"})),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#000",d:"M390.57 181.73c63.96-1.18 124.96.63 159.02-.18M390.09 183c32.9-2.94 65.75-3.42 160.49-1.55m-1.4 1.33c.46 9.38 2.5 23.33.26 39.54m.58-39.58c.75 7.51.96 17.61-.75 39.61m.93-1.53c-39.25 2.94-79.57.71-160.24 2.05m161.01-.08c-55.63-2.09-110.49-3.03-161.14-.7m1.92-1.72c-.97-8.71-1.97-19.38-3.03-39.99m.75 42.24c-.24-9.84-.23-18.51.86-39.79"}))),(0,n.yg)("text",M({parentName:"svg"},{x:"34",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(436 189.5)"}),"Printer"),(0,n.yg)("g",M({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M50 122s0 0 0 0m0 0s0 0 0 0m-.88 6.83c2.92-2.64 4.95-4.55 6.6-5.86m-5.68 5.78c1.34-2.52 2.64-4.25 5.04-6.79m-3.68 13.2c-.19-4.82 5.07-7.8 9.94-14.58M50.11 133.8c2.91-3.56 5.88-6.14 11.11-12.38m-11.19 18.15c4.45-4.6 6.68-5.71 16.11-17.14m-16.87 18.96c5.59-7.84 12.07-13.25 15.84-19.54m-14.05 24.28c5.78-11.39 13.82-20.77 20.48-24.24m-20.31 24.06c6.52-7.61 12.6-15.79 19.25-23.73m-22.3 28.48c12.59-11.24 20.86-21.87 28.33-26.81m-27.32 27.74c8.89-7.97 16.21-16.21 26.56-29.4m-27.96 36.66c12.36-11.99 20.95-24.65 32.12-35.36m-29.98 35.84c8.97-11.67 18.2-22.84 32.77-38.46m-33.13 40.24c12.73-11.05 23.4-21.48 36.86-37.28m-35.22 40.1c13.33-16.07 26.69-31.36 35.25-42.04m-31.02 41.2c10.86-11.76 19.39-21.37 37.25-43.18m-35.86 43.98c8.99-12.2 18.96-22.89 35.87-41.87m-29.46 41.46c13.08-15.27 26.81-33.28 33.76-42.63m-35.66 42.72c8.21-9.15 15.98-16.49 36.18-40.94m-30.59 41.36c10.09-9.96 20.39-21.2 34.59-42.14m-35.14 40.82c8.32-7.68 14.44-16.55 36.24-40.55M70.8 161.99c9.44-8.36 17.94-18.63 39.14-39.63m-37.98 40.82c13.48-15.21 28.05-31.39 35.21-41.71m-28 42.94c5.75-8.98 12.86-18.74 34.49-42.47M78.3 162.8c12.2-12.86 23.26-27.44 34.74-40.29M82.6 164.04c13.93-14 24.62-27.56 34.92-41.43m-34.44 40.93c11.17-11.73 20.6-24.14 35.51-41.88m-31.03 39.8c13.19-13.62 25.18-29.05 38.38-40.8m-36.71 42.43c8.17-9.55 16.49-18.56 34.76-40.89m-29.37 38.88c12.24-14.08 25.25-24.45 34.01-40.22m-34.44 42.47c6.78-8.68 13.48-16.64 34.74-41.49m-28.8 39.45c9.88-13.73 21.21-26.08 34.66-40.83m-35.06 43.3c8.23-12.32 17.1-21.65 36.23-42.64m-29.55 41.3c6.97-13.55 18.09-21.83 32.36-39.15m-33.56 38.74c12.68-14.83 28.17-32.29 35.06-39.08m-28.8 41.98c11.75-16.76 23.59-33.15 34.78-45.22m-36.9 43.6c12.77-13.66 22.97-26.32 35.56-42.34m-29.78 40.32c12.19-8.93 21.29-24.72 36.85-40.41m-36.46 41.97c5.68-7.28 13.51-16.78 35.13-41.69m-29.87 41.1c11.4-10.09 20.2-23.64 37.15-39.64m-38.38 40.83c12.09-15.04 24.49-27.9 37.67-41.25m-32.36 43.33c9.78-14.91 22.75-29.17 38.1-41.92m-38.65 39c13.25-12.03 25.6-26.7 36.78-39.61m-31.23 39.12c15.43-14.81 29.73-31.84 34.53-40.01m-33.61 40.18c8.03-7.07 14.37-15.28 35.31-40.43m-30.83 42.82c10.93-12.37 23.42-25.6 35.69-42.35m-34.79 41.31c13.65-15.85 26.48-30.55 36.36-41.38m-31.43 40c8.09-7.95 14.78-18.8 36.66-39.52m-36.32 40.44c7.97-9.67 16.33-18.46 35.71-41.66m-29.54 42.91c10.05-13.66 20.96-25.43 34.22-41.61m-35.65 40.51c11.79-11.88 22.37-24.74 36.68-42.28m-31.4 42.25c10.03-12.54 16.75-22.4 34.31-40.09m-32.93 40.58c14.44-15.69 28.41-32.07 34.63-40.99m-30.05 38.81c8.13-6.25 16.6-15.65 36.59-37.89m-36.47 40.39c13.79-17.26 28.1-32.65 36.42-41.35m-31.43 40.02c9.62-9.85 18.75-21.27 33.9-39.37m-34.13 39.67c15.08-16.36 28.42-31.79 34.98-41.7m-29.46 41.6c13.7-16.31 26.4-31.31 36.74-40.35m-36.67 40.6c9.96-11.15 17.84-21.44 36.74-42.15m-30.16 40.08c10.19-10.24 20.53-22.17 32.84-38.04m-33.25 39.18c7.04-7.61 14.81-16.93 34.17-39.58m-28.71 40.46c10.13-11.71 20.17-24.2 33.62-38.89m-34.81 39.42c7.09-8.82 13.85-15.61 33.33-40.44m-27.62 40.52c10.14-12.82 17.53-24.48 28.36-31.48m-28.09 29.69c5.76-6.14 13.35-14.57 26.92-30.62m-22.39 31.4c4.88-5.52 13.36-15.94 24.58-25.16m-24.99 25.75c8.69-10.27 17.84-19.51 23.79-27.2m-17.61 26.77c4.5-5.72 7.41-10.38 15.78-18.89m-16.16 18.99c5.21-5.53 8.64-9.83 17.55-20.14m-14.11 19.34c6.74-2.48 10.55-7.42 13.09-15.12m-11.58 16.72c3.33-4.96 6.55-9.47 13.32-15.3m-6.77 14.84c1.57-3.61 4.76-4.26 5.91-9.07m-6.57 8.96c1.13-2.44 3.43-3.73 7.8-8.8"})),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#5f3dc4",d:"M50.79 120.12c41.04 2.04 86.31 1.64 157.33 3.47m-158.09-2.08c62.36-2.08 125.49-1.66 159.89.37m-.24-1.4c1.88 12.48-.4 22.25-1.2 42.74m2.05-41.93c.21 12.73-1.25 24.24-1.11 40.13m.31 1.24c-60.6-3.18-117.89-.74-158.85-1.53m159.51 1.14c-32.08.32-65.09 1.08-160.76.55m1.48-.65c-1.35-9-2.74-19.51-2.86-41.01m.81 40.13c.22-14.67 1.48-27.47 1.29-39.04"}))),(0,n.yg)("text",M({parentName:"svg"},{x:"34.5",fill:"#5f3dc4",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(95.5 129.5)"}),"Loader"),(0,n.yg)("g",M({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#ced4da",strokeWidth:".5",d:"M50 182s0 0 0 0m0 0s0 0 0 0m.13 6.38c2.02-1.89 4.06-3.62 4.78-6.79m-5.11 6.43c1.69-2.28 3.91-4.58 5.02-5.41m-6.23 10.84c5.67-3.64 8.59-8.26 11.76-13.06m-10.42 13.32c3.74-3.42 8.25-8.76 10.13-12.51m-9.35 17.84c2.56-1.45 7.56-7.51 16.31-17.85m-18.1 18.93c4.14-2.73 7.31-8.07 17.69-16.92m-17.94 21.14c5.39-6.45 13.43-11.71 23.07-22.72m-20.83 24.63c6.14-8.5 12.53-16.17 21.24-23.33m-21.3 28.51c8.42-10.25 19.85-20.32 25.03-28.54m-25.1 29.33c8.55-9.15 15.72-18.84 25.62-30.51m-26.59 37.08c10.83-14.83 22.36-25.94 32-38.11m-32.65 37.66c6.3-8.02 14.63-15.91 32.66-35.73m-29.63 39.31c9.84-8.7 17.54-18.07 36.31-41.15m-37.77 42.5c8.88-10.38 18.26-21.48 35.58-40.49M57.74 221.7c13.1-14.58 25.34-30.41 33.96-40.58m-35.39 41.56c13.25-14.85 25.71-28.73 37.11-39.84m-30.5 41.38c11.34-15.63 21.71-29.47 32.72-40.28m-33.06 38.61c8.13-7.62 14.56-16.32 34.59-41.1m-30.09 43.37c8.34-9.07 13.66-19.12 34.12-43.08m-33.83 41.88c11.78-14.82 24.81-28.9 34.99-40.93m-29.6 39.93c11.41-13.01 22.86-23.18 36.87-41.2m-37.61 41.85c12.62-13.67 22.06-26.47 35.26-40.7M77.34 224.6c12.63-16.66 27.06-32.56 37.36-42.31m-36.58 41.82c7.35-10.41 16.61-20.65 35.93-41.6m-28.81 41.2c13.23-16.52 24.96-32.71 33.16-43.55m-34.54 43.19c10.68-13.95 21.67-26.77 35.51-41.57m-31.78 41.07c10.38-13.08 24.91-26.23 35.58-41.45m-34.43 41.94c9.48-10.72 19.02-22.84 36.09-42.37M94.45 221c12.27-9.37 21.63-25.53 33.04-38.01M93.9 223c10.02-12.05 20.86-25.13 35.74-40.5m-31.17 38.77c12.68-13.83 26.58-29.53 35.72-38.66m-35.33 39.71c12.03-13.54 26.24-29.27 36.12-40.29m-31.89 38.89c11.59-9.18 22.39-22.73 38.93-38.26m-38.17 41.1c14.74-16.59 28.05-31.2 36.88-40.78m-30.5 40.51c8.61-13.42 20.57-26.78 35.69-43.12m-35.36 42.46c12.05-14.7 24.41-30.36 35.21-40.88m-29.31 42.84c7.17-13.27 18.13-23.62 32.23-40.96m-34.27 39.62c7.99-9.83 15.52-18.62 36.32-42.21m-30.03 43.79c9.14-13.9 24.19-27.4 36.43-42.99m-37.75 40.44c10.12-10.03 21.6-21.4 36.99-40.21m-32.59 41.32c14.9-16.75 29.1-28.69 38.03-42.55m-36.24 42.88c9.78-10.97 17.5-19.46 36.65-41.82m-30.88 41.24c10.91-12.72 18.59-24.21 33.18-40.7m-33.21 41c7.16-8.8 16.02-19.88 35-42.04m-31.45 43.36c12.6-13.43 22.1-26.64 38.43-44.18m-37.07 42.31c10.03-11.68 21.4-23.92 34.97-40.9m-30.04 41.56c10.68-15.2 25.25-27.74 34.2-39.92m-33.55 38.67c10.45-11.19 19.85-23.19 35.21-40.92m-30.91 42.11c10.49-11.73 21.46-24.95 36.54-40.29m-35.38 41.01c13.83-16.41 27.9-34.35 34.85-41.47m-29.34 38.56c11.38-15.09 24.93-28.92 36.74-41.07m-36.77 43.62c7.32-9.31 14.54-18.65 34.11-41.64m-29.67 42.32c8.12-8.75 16.88-17.84 37.74-43.54m-37.74 41.71c10.81-11.82 21.84-23.45 35.69-41.35m-30.46 42.21c8.5-10.61 16.44-20.07 37.71-40.34m-36.63 39.65c11.39-13 22.5-28.55 35.37-40.25m-30.51 39.11c8.97-10.65 19.43-19.98 34.48-41.6m-34.4 42.52c13.11-16.32 28.78-33.29 35.43-40.81m-30 41.53c11.95-13.69 23.11-28.53 33.07-40.88m-33.09 40.44c11.01-13.12 20.39-24.41 35.17-41.28m-30.54 42.22c8.63-11.11 19.96-23.13 32.2-38.9m-32.25 37.7c7.11-7.29 14.17-17.8 34.49-38.39m-28.37 37.43c3.69-7.52 11.71-11.19 26.49-32.56m-27.98 34.25c8.35-9.15 15.2-17.18 28.95-33.45M187 224.8c8.56-10.42 16.14-15.29 26.77-29.54m-25.25 27.59c8.24-8.01 15.01-16.55 23.24-25.82m-16.3 24.62c4.94-7 8.9-10.68 15.83-21.1m-16.45 22.1c5.56-6.68 12.16-14.21 17.8-20.85m-12.67 22.9c3.47-4.31 5.5-11.29 12.13-16m-13.08 14.28c4.43-5.9 9.76-10.18 13.61-14.7m-7.42 13.88c3.29-.83 3.6-4.69 6.17-7.27m-6.62 7.65c3.68-2.88 6.49-6.26 8.02-7.75"})),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#5f3dc4",d:"M48.07 181.94c47.34 1.11 91.7 3.15 163.74.23m-161.88-1.14c64.61 1.2 127.89 1.64 159.62.56m2.18 1.16c-2.35 13.14-3.31 27.61-1.93 39.29m.93-39.61c-1.24 14.88-1.09 28.91-.04 39.67m-2.5-1.67c-36.77 2.96-74.39 1.22-160.16 3.5m162.55-2.6c-61.34 1.2-122.14 1.93-161.37 1.54m.9-.85c-1.62-10.38-2.08-18.34 1.14-41.08m-2.18 40.18c1.63-12.78 1.66-27.84 1.89-38.85"}))),(0,n.yg)("text",M({parentName:"svg"},{x:"27.75",fill:"#5f3dc4",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(102.25 189.5)"}),"Saver"),(0,n.yg)("g",M({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M549.48 141.39c37.71.47 73.61 1.96 140.6-1.2m-139.5 2.3c30.33.68 62.18.15 140.39.19"})),(0,n.yg)("path",M({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m691.26 140.74-13.94 8.3-.31-14.56 15.54 9.26"})),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M689.83 142.22c-1.95 1.07-5.24 3.81-12.39 5.46m13.22-4.63c-3.18.77-5.2 1.77-12.55 6.5m-.01-.02c.16-4.86-.53-6.63-1.56-13.35m1.33 12.62c-.72-4.03-.4-9.18-.3-12.4m-.6 1.17c3.68-.92 6.73 1.11 13.46 4.23m-12.99-5.91c4.55 3.38 8.63 5.45 13.45 6.79m.08 0s0 0 0 0m0 0s0 0 0 0"}))),(0,n.yg)("g",M({parentName:"svg"},{strokeLineCap:"round"}),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M552.13 203.13c50.46.4 98.84-.68 137.65-2.43m-139.05 2.08c39.4-.68 80.17-.16 138.65-.46"})),(0,n.yg)("path",M({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m552.42 201.51 12.21-2.92-.7 9.85-9.82-4.6"})),(0,n.yg)("path",M({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M552.98 203.97c4.74-2.19 7.89-5.38 13.27-8.3m-14.32 8.04c3.74-2.72 8.55-4.18 14.01-6.82m-.9-.58c1.56 4.65-.31 8.82.51 12.55m-.51-12.16c.31 2.95 1.25 5.53 1.19 12.55m.74-1.02c-6.25-1.43-10.67-2.54-13.48-4.09m11.76 5.79c-4.91-3.12-9.58-4.87-13.81-7.04m.69.24s0 0 0 0m0 0s0 0 0 0"}))),(0,n.yg)("text",M({parentName:"svg"},{dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},transform:"translate(104 10)"}),"I/O"),(0,n.yg)("text",M({parentName:"svg"},{dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(606 157.007)"}),"Events"),(0,n.yg)("text",M({parentName:"svg"},{dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},transform:"translate(364 10.007)"}),"Parsing/Printing"),(0,n.yg)("text",M({parentName:"svg"},{dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},transform:"translate(724 10)"}),"Computation")))),(0,n.yg)("p",null,"Connectors appear as an argument to the ",(0,n.yg)("a",M({parentName:"p"},{href:"/operators/from"}),(0,n.yg)("inlineCode",{parentName:"a"},"from")),"\nand ",(0,n.yg)("a",M({parentName:"p"},{href:"/operators/to"}),(0,n.yg)("inlineCode",{parentName:"a"},"to"))," operators:"),(0,n.yg)("pre",null,(0,n.yg)("code",M({parentName:"pre"},{}),"from <connector> [read <format>]\nto <connector> [write <format>]\n")),(0,n.yg)("p",null,"If the format is omitted, the default depends on the connector."),(0,n.yg)("p",null,"Alternatively, instead of a connector, the ",(0,n.yg)("inlineCode",{parentName:"p"},"from")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"to")," operators\ncan take a URL or a filesystem path directly:"),(0,n.yg)("pre",null,(0,n.yg)("code",M({parentName:"pre"},{}),"from <url> [read <format>]\nfrom <path> [read <format>]\n\nto <url> [write <format>]\nto <path> [write <format>]\n")),(0,n.yg)("p",null,"When given a URL, the scheme is used to determine the connector to use.\nFor example, if the URL scheme is ",(0,n.yg)("inlineCode",{parentName:"p"},"http"),", the ",(0,n.yg)("a",M({parentName:"p"},{href:"/connectors/http"}),(0,n.yg)("inlineCode",{parentName:"a"},"http"))," connector is used.\nThe ",(0,n.yg)("a",M({parentName:"p"},{href:"/connectors/gcs"}),(0,n.yg)("inlineCode",{parentName:"a"},"gcs"))," connector is an exception, as it will get used if the URL scheme is ",(0,n.yg)("inlineCode",{parentName:"p"},"gs"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",M({parentName:"pre"},{}),"from https://example.com/foo.json\nfrom https https://example.com/foo.json\nfrom https example.com/foo.json\n\nfrom gs://bucket/logs/log.json\nfrom gcs gs://bucket/logs/log.json\n")),(0,n.yg)("p",null,"When given a filesystem a path, the ",(0,n.yg)("a",M({parentName:"p"},{href:"/connectors/file"}),(0,n.yg)("inlineCode",{parentName:"a"},"file"))," connector is used implicitly.\nTo disambiguate between a relative filesystem path without any slashes or a file extension, and\na connector name, the path must contain at least one character that doesn't conform to the pattern ",(0,n.yg)("inlineCode",{parentName:"p"},"[A-Za-z0-9-_]"),".\nIf the input conforms to that pattern, it's assumed to be a connector name."),(0,n.yg)("pre",null,(0,n.yg)("code",M({parentName:"pre"},{}),"# Parsed as a filesystem path\nfrom /tmp/plugin.json\n# `plugin` is parsed as a connector name\nfrom plugin\n# `./plugin` is parsed as a filesystem path, again (contains a `.` and a `/`)\nfrom ./plugin\n")),(0,n.yg)("p",null,"Tenzir ships with the following connectors:"),(0,n.yg)(r.A,{mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);