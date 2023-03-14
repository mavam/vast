"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9547],{3905:(t,e,M)=>{M.d(e,{Zo:()=>d,kt:()=>u});var c=M(67294);function r(t,e,M){return e in t?Object.defineProperty(t,e,{value:M,enumerable:!0,configurable:!0,writable:!0}):t[e]=M,t}function a(t,e){var M=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),M.push.apply(M,c)}return M}function n(t){for(var e=1;e<arguments.length;e++){var M=null!=arguments[e]?arguments[e]:{};e%2?a(Object(M),!0).forEach((function(e){r(t,e,M[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(M)):a(Object(M)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(M,e))}))}return t}function i(t,e){if(null==t)return{};var M,c,r=function(t,e){if(null==t)return{};var M,c,r={},a=Object.keys(t);for(c=0;c<a.length;c++)M=a[c],e.indexOf(M)>=0||(r[M]=t[M]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)M=a[c],e.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(t,M)&&(r[M]=t[M])}return r}var o=c.createContext({}),D=function(t){var e=c.useContext(o),M=e;return t&&(M="function"==typeof t?t(e):n(n({},e),t)),M},d=function(t){var e=D(t.components);return c.createElement(o.Provider,{value:e},t.children)},w="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return c.createElement(c.Fragment,{},e)}},s=c.forwardRef((function(t,e){var M=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),w=D(M),s=r,u=w["".concat(o,".").concat(s)]||w[s]||l[s]||a;return M?c.createElement(u,n(n({ref:e},d),{},{components:M})):c.createElement(u,n({ref:e},d))}));function u(t,e){var M=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=M.length,n=new Array(a);n[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[w]="string"==typeof t?t:r,n[1]=i;for(var D=2;D<a;D++)n[D]=M[D];return c.createElement.apply(null,n)}return c.createElement.apply(null,M)}s.displayName="MDXCreateElement"},34636:(t,e,M)=>{M.r(e),M.d(e,{assets:()=>x,contentTitle:()=>m,default:()=>L,frontMatter:()=>u,metadata:()=>A,toc:()=>j});var c=M(3905),r=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,d=(t,e,M)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:M}):t[e]=M,w=(t,e)=>{for(var M in e||(e={}))o.call(e,M)&&d(t,M,e[M]);if(i)for(var M of i(e))D.call(e,M)&&d(t,M,e[M]);return t},l=(t,e)=>a(t,n(e)),s=(t,e)=>{var M={};for(var c in t)o.call(t,c)&&e.indexOf(c)<0&&(M[c]=t[c]);if(null!=t&&i)for(var c of i(t))e.indexOf(c)<0&&D.call(t,c)&&(M[c]=t[c]);return M};const u={title:"From Slack to Discord",description:"Moving our community chat from Slack to Discord",authors:"mavam",image:"/img/blog/slack-to-discord.excalidraw.svg",date:new Date("2023-02-09T00:00:00.000Z"),tags:["community","chat","discord"]},m=void 0,A={permalink:"/blog/from-slack-to-discord",source:"@site/blog/from-slack-to-discord/index.md",title:"From Slack to Discord",description:"Moving our community chat from Slack to Discord",date:"2023-02-09T00:00:00.000Z",formattedDate:"February 9, 2023",tags:[{label:"community",permalink:"/blog/tags/community"},{label:"chat",permalink:"/blog/tags/chat"},{label:"discord",permalink:"/blog/tags/discord"}],readingTime:.785,hasTruncateMarker:!0,authors:[{name:"Matthias Vallentin",title:"Co-Founder & CEO",url:"https://github.com/mavam",email:"matthias@tenzir.com",imageURL:"https://github.com/mavam.png",key:"mavam"}],frontMatter:{title:"From Slack to Discord",description:"Moving our community chat from Slack to Discord",authors:"mavam",image:"/img/blog/slack-to-discord.excalidraw.svg",date:"2023-02-09T00:00:00.000Z",tags:["community","chat","discord"]},prevItem:{title:"VAST v3.0",permalink:"/blog/vast-v3.0"},nextItem:{title:"The New REST API",permalink:"/blog/the-new-rest-api"}},x={authorsImageUrls:[void 0]},j=[],T={toc:j},N="wrapper";function L(t){var e=t,{components:M}=e,r=s(e,["components"]);return(0,c.kt)(N,l(w(w({},T),r),{components:M,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"We are moving our community chat from Slack to Discord. Why? TL;DR: because\nDiscord has better support for community building. VAST is not the first project\nthat abandons Slack. ",(0,c.kt)("a",w({parentName:"p"},{href:"https://blog.meilisearch.com/from-slack-to-discord-our-migration/"}),"Numerous")," ",(0,c.kt)("a",w({parentName:"p"},{href:"https://appwrite.io/"}),"open-source"),"\n",(0,c.kt)("a",w({parentName:"p"},{href:"https://www.deepset.ai/blog/migration-to-discord"}),"projects")," ",(0,c.kt)("a",w({parentName:"p"},{href:"https://sst.dev/blog/moving-to-discord.html"}),"have")," ",(0,c.kt)("a",w({parentName:"p"},{href:"https://www.qovery.com/blog/feedback-from-slack-to-discord-13-months-later"}),"done")," ",(0,c.kt)("a",w({parentName:"p"},{href:"https://neo4j.com/blog/neo4j-community-is-migrating-from-slack-to-discord/"}),"the")," ",(0,c.kt)("a",w({parentName:"p"},{href:"https://discord.com/open-source"}),"same"),"."),(0,c.kt)("p",null,(0,c.kt)("figure",w({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,c.kt)("svg",w({parentName:"figure"},{viewBox:"0 0 520.586 150.156",role:"img","aria-hidden":"true"}),(0,c.kt)("symbol",w({parentName:"svg"},{id:"image-5df0c6e0050685a2cd44b721c8b2bf83f07f5d34697c3c85f49fe67b73f7c45fbbfa865e614f146c1066aa9320dcd7b5"}),(0,c.kt)("image",w({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjcuMTQgOTYuMzYiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM1ODY1ZjI7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IkRpc2NvcmRfTG9nb3MiIGRhdGEtbmFtZT0iRGlzY29yZCBMb2dvcyI+PGcgaWQ9IkRpc2NvcmRfTG9nb18tX0xhcmdlXy1fV2hpdGUiIGRhdGEtbmFtZT0iRGlzY29yZCBMb2dvIC0gTGFyZ2UgLSBXaGl0ZSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTA3LjcsOC4wN0ExMDUuMTUsMTA1LjE1LDAsMCwwLDgxLjQ3LDBhNzIuMDYsNzIuMDYsMCwwLDAtMy4zNiw2LjgzQTk3LjY4LDk3LjY4LDAsMCwwLDQ5LDYuODMsNzIuMzcsNzIuMzcsMCwwLDAsNDUuNjQsMCwxMDUuODksMTA1Ljg5LDAsMCwwLDE5LjM5LDguMDlDMi43OSwzMi42NS0xLjcxLDU2LjYuNTQsODAuMjFoMEExMDUuNzMsMTA1LjczLDAsMCwwLDMyLjcxLDk2LjM2LDc3LjcsNzcuNywwLDAsMCwzOS42LDg1LjI1YTY4LjQyLDY4LjQyLDAsMCwxLTEwLjg1LTUuMThjLjkxLS42NiwxLjgtMS4zNCwyLjY2LTJhNzUuNTcsNzUuNTcsMCwwLDAsNjQuMzIsMGMuODcuNzEsMS43NiwxLjM5LDIuNjYsMmE2OC42OCw2OC42OCwwLDAsMS0xMC44Nyw1LjE5LDc3LDc3LDAsMCwwLDYuODksMTEuMUExMDUuMjUsMTA1LjI1LDAsMCwwLDEyNi42LDgwLjIyaDBDMTI5LjI0LDUyLjg0LDEyMi4wOSwyOS4xMSwxMDcuNyw4LjA3Wk00Mi40NSw2NS42OUMzNi4xOCw2NS42OSwzMSw2MCwzMSw1M3M1LTEyLjc0LDExLjQzLTEyLjc0UzU0LDQ2LDUzLjg5LDUzLDQ4Ljg0LDY1LjY5LDQyLjQ1LDY1LjY5Wm00Mi4yNCwwQzc4LjQxLDY1LjY5LDczLjI1LDYwLDczLjI1LDUzczUtMTIuNzQsMTEuNDQtMTIuNzRTOTYuMjMsNDYsOTYuMTIsNTMsOTEuMDgsNjUuNjksODQuNjksNjUuNjlaIi8+PC9nPjwvZz48L2c+PC9zdmc+"}))),(0,c.kt)("symbol",w({parentName:"svg"},{id:"image-7d11b70956dc218d90f42f640d9de167fe806cdf7bbdaf7244147d72f4860b5c5b30a396d634d1e6a90e2b32583e16f6"}),(0,c.kt)("image",w({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0NDcuNiAyNDUyLjUiIHZpZXdCb3g9IjAgMCAyNDQ3LjYgMjQ1Mi41IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxnIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtODk3LjQgMGMtMTM1LjMuMS0yNDQuOCAxMDkuOS0yNDQuNyAyNDUuMi0uMSAxMzUuMyAxMDkuNSAyNDUuMSAyNDQuOCAyNDUuMmgyNDQuOHYtMjQ1LjFjLjEtMTM1LjMtMTA5LjUtMjQ1LjEtMjQ0LjktMjQ1LjMuMSAwIC4xIDAgMCAwbTAgNjU0aC02NTIuNmMtMTM1LjMuMS0yNDQuOSAxMDkuOS0yNDQuOCAyNDUuMi0uMiAxMzUuMyAxMDkuNCAyNDUuMSAyNDQuNyAyNDUuM2g2NTIuN2MxMzUuMy0uMSAyNDQuOS0xMDkuOSAyNDQuOC0yNDUuMi4xLTEzNS40LTEwOS41LTI0NS4yLTI0NC44LTI0NS4zeiIgZmlsbD0iIzM2YzVmMCIvPjxwYXRoIGQ9Im0yNDQ3LjYgODk5LjJjLjEtMTM1LjMtMTA5LjUtMjQ1LjEtMjQ0LjgtMjQ1LjItMTM1LjMuMS0yNDQuOSAxMDkuOS0yNDQuOCAyNDUuMnYyNDUuM2gyNDQuOGMxMzUuMy0uMSAyNDQuOS0xMDkuOSAyNDQuOC0yNDUuM3ptLTY1Mi43IDB2LTY1NGMuMS0xMzUuMi0xMDkuNC0yNDUtMjQ0LjctMjQ1LjItMTM1LjMuMS0yNDQuOSAxMDkuOS0yNDQuOCAyNDUuMnY2NTRjLS4yIDEzNS4zIDEwOS40IDI0NS4xIDI0NC43IDI0NS4zIDEzNS4zLS4xIDI0NC45LTEwOS45IDI0NC44LTI0NS4zeiIgZmlsbD0iIzJlYjY3ZCIvPjxwYXRoIGQ9Im0xNTUwLjEgMjQ1Mi41YzEzNS4zLS4xIDI0NC45LTEwOS45IDI0NC44LTI0NS4yLjEtMTM1LjMtMTA5LjUtMjQ1LjEtMjQ0LjgtMjQ1LjJoLTI0NC44djI0NS4yYy0uMSAxMzUuMiAxMDkuNSAyNDUgMjQ0LjggMjQ1LjJ6bTAtNjU0LjFoNjUyLjdjMTM1LjMtLjEgMjQ0LjktMTA5LjkgMjQ0LjgtMjQ1LjIuMi0xMzUuMy0xMDkuNC0yNDUuMS0yNDQuNy0yNDUuM2gtNjUyLjdjLTEzNS4zLjEtMjQ0LjkgMTA5LjktMjQ0LjggMjQ1LjItLjEgMTM1LjQgMTA5LjQgMjQ1LjIgMjQ0LjcgMjQ1LjN6IiBmaWxsPSIjZWNiMjJlIi8+PHBhdGggZD0ibTAgMTU1My4yYy0uMSAxMzUuMyAxMDkuNSAyNDUuMSAyNDQuOCAyNDUuMiAxMzUuMy0uMSAyNDQuOS0xMDkuOSAyNDQuOC0yNDUuMnYtMjQ1LjJoLTI0NC44Yy0xMzUuMy4xLTI0NC45IDEwOS45LTI0NC44IDI0NS4yem02NTIuNyAwdjY1NGMtLjIgMTM1LjMgMTA5LjQgMjQ1LjEgMjQ0LjcgMjQ1LjMgMTM1LjMtLjEgMjQ0LjktMTA5LjkgMjQ0LjgtMjQ1LjJ2LTY1My45Yy4yLTEzNS4zLTEwOS40LTI0NS4xLTI0NC43LTI0NS4zLTEzNS40IDAtMjQ0LjkgMTA5LjgtMjQ0LjggMjQ1LjEgMCAwIDAgLjEgMCAwIiBmaWxsPSIjZTAxZTVhIi8+PC9nPjwvc3ZnPg=="}))),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nNVXbXPiRlx1MDAxMv6+v2LL+bhcdTAwMWJnNHrPVT5cdTAwMDBisVx1MDAxYyRcZlxiY+kqdaV3JCTgkHiRUvvfr2ckIcB24viyW3fUeuetZ6ann366W79/+PjxJi82/s3PXHUwMDFmb/yjayeRt7VcdTAwMGY3n8n83t9m0XpcdTAwMDVLmI6z9W7rUslFnm+yn3/6yd5sbttdt+46rXb6iZ/6qzxcdTAwMDPZf8L448ff6f9nd0WpXHUwMDFk+lSYTp9dJYnXs/p6Ra/FSIJ/iOf5k0SUKXBX7nuwXHUwMDFj2Enmtytk6mbnMf1cdTAwMWYnriop3d5cXGbYsNfx/9VeXHUwMDFiREkyzYuEqpSt4Vx1MDAxOe1alm/XS39cdTAwMWV5+Vx1MDAwMlaZq/nTLm+dk+tPy9v1LlxcrPwsu9i03thulFx1MDAxN2RcdTAwMGWh06y9XG7pIe3MkTxTlG55XHUwMDExsVxmbt9JdmKBv5Vkjr9YqLTprZP1lmiTb+1VtrG3YPxWJcd2lyHotfJOcj9cdTAwMDRB0FxuXHUwMDFjmkdcIvmWl3iZXHUwMDE1OZn+WihcdTAwMTZ+XHUwMDE0LnIqw99yWFx1MDAxNqRGRm518SlcdTAwMGVcdTAwMTjJXHUwMDFjx3P82W5y+0b1qD/8dm6qlVebarVLklZhstA/86F2z27j2Vx1MDAxNdyMIPKSxGJcdGNGOK0n0Wp5fVxcsnaXL3hIltv5LqPI2/tzXGLBK3yVuo/oMYwjXCKZXHUwMDE3PFx1MDAxNzOSJ6OAw4HAIU/2fFAg8CUkuF4gOo5nXHUwMDA3XCLmOIZcdTAwMTM9XHUwMDExXHUwMDA3nCQgh3d5h0U2K1x1MDAwYp7Aclx1MDAxZeNcdTAwMGK2jHzssJiXWNhcdTAwMWVcYmfeXHUwMDA2JPJPdCG/k/NAt+79Rtuvn1+mlL3drlx1MDAwZi9RisfoVUoxSFx1MDAxMjGPsPxmSilBJ1x1MDAxY3xcdFx1MDAwNFfZp2z2a7JjR8LD30qpq13/PaNcdTAwMDCWWyxLXHUwMDAyj0WBv/RMclx1MDAwMIuZW1aUXHUwMDE4XHUwMDA2fElAgiy9xq5cdTAwMWZcdTAwMTD9vYdZvHQrslx1MDAxYyvyz1x1MDAxOYWuXHTEMDKSscQzf4VAv5+8pXFcYlxcz3x9J69YzMrv5NU270YrL1qF11v8lffKSmJneW+dplx1MDAxMVx0p1x1MDAwZutolV9L0HM7xMlcdTAwMTe+7b1w8vlcdTAwMWFEwqhyhpPEhlx1MDAxY5pdcKztfWxhoINT/7fPL0o/XHUwMDA39Grbmyj7alx1MDAxNuRY4Xq2oSzPSlwiK4hcXOtcdTAwMWN/xthD7iTBj6p0Z2hcdTAwMDch6vw7Mkbu/fdiLH5cdTAwMTdjXHUwMDA1rnU9mvv4b5XyWHTL8Fx1MDAwMm6S2Ysp73WZU8pDSEA8I7da/r+mPN5cdTAwMGKQK/hcYvFIkHhcdTAwMWK7XHUwMDFlxzlcImZcXMnBTiCxXHUwMDAxXHUwMDEyXHUwMDAz3mM5QVx1MDAxNl3WlfiAk1x1MDAwM19cdTAwMTBcdTAwMWSRXHJEl+NcdTAwMDPHXHRsiLS+wHBcdTAwMDHDXHQug1x1MDAwNMG2ZVx1MDAxNiPP9USH/1tTXu5cdTAwMWbzXHUwMDE3i0gkv0ZcdTAwMWbMcpwkim/Pd6bS8yCNXHUwMDFmufvtuKtLbFfa87v/bfZwgnArXlx1MDAxNY9cdTAwMTJ/K1xujMhI4qtMen96e4k150Wq37iviEWOkb5TYcjLXGb/XHUwMDFlllx1MDAwNOtVPo3K6pPjYvaLnUZJcYEldUEwXGbJXbtcdTAwMTVB6Mx8mVx1MDAwZteSc1x1MDAxOOliQyeJQuKnN4lcdTAwMWZcXDpwXHUwMDFlXHUwMDAxK07L+XrTrrqggFxyx23VZ8lvvY3CaGUnxjNlKvp8qPPYXHJ8sE0hXHUwMDA2+KeC4WZcdTAwMWb5h+7LOFx1MDAxM6g/1OSjXHUwMDExoq0zvn1l3FY0N2mU+sZ5xvwp24efjmlyc0XV71eug6/Zs8mQflx1MDAwMEL351x1MDAwYrX+QYBcdTAwMTe4z1x1MDAwZnc6toou58yPO7dEkX03Qa6y3lx1MDAwZlmP9VxuntVcbn7vpu5eiztcdTAwMDetJ5de6kbq4HFnzu8za8pE5lxc31rs/d6b88uH6f3OenJDrdc5qIqKdMXd6VGn0JVZMYxnkXpnbawnr+ewoazGXHUwMDFkXCJcdTAwMDdrY3ZcdTAwMTiboVx1MDAxNo9cdTAwMTkt4lx1MDAxODXqsvZ8gmxcdTAwMDVFutGBu1x1MDAxNok999ZePX6Ijyt1oGf2Uyd3V4+ZZaDIerJcdTAwMTInlZdWT1xyrTTJnFx1MDAxZVN482NcdTAwMDL6JF76uHPwZKnGnORcdTAwMGW+ILvXJXrmI2VcdPeOQ22g5ZqhMcNY22lTRPTZjXqdo6Ysd6N6rFx1MDAxN/RccjstQiBcdTAwMDNrJfSLSkaf1mu0pXurcVx1MDAxYVbjOzMnb1x1MDAxYsZf4mHcb+6CtsODTeq1PmnRMF7WY6JcdTAwMGLYsMdcdTAwMWRVhdrp4Fx1MDAxOJ1Qj2egP8K6oe709Fx1MDAwNb2nl3qfdCF6R1d69y71Pr1cdTAwMTGH1flYq+VR+7Ypqs9v3orq87nj0OiX+pRD0Fx1MDAxZUZTjlx1MDAxOVx1MDAxYYD/lCto2+O4elxc+lGNXHUwMDEx4KmWXHUwMDFhNsvHVOupe8D1YD5N1upgLKspOvlcdTAwMDXgXHUwMDA0drp/g+3Ceqy+3S4rs3lzNT/4XHUwMDBib2Y3+dAwic+yqtLFpK9cdTAwMGbondVcdTAwMTlcdTAwMTGq7Uzla1x1MDAxZN336FxieEziIdhSVaiNS2iJjVx1MDAxMeXYlPhcYrUxW4/LRm7YrvE1Lnw9flx1MDAwNY/7xIxN1nqOx1E3Zlx1MDAwN7D1iadm+eY7irdjd79u/MWLq71mcca56IJzYb03rPdcbsCRnHBcdTAwMDS4toZcdTAwMTbu9eLm3lr3imNUh2V45TdcdTAwMTVmXHUwMDE1/ufYnTDSXHUwMDBi1PhL3pxf+315xuGwPj+/1E+tdKD6jGuZcbNW6+LWY12AOJja82P2MFVja65HWnyfqJH06eGuu/BcdTAwMDZhaFx1MDAwMV4kJmjGjNGKKzv9WWw6xYI3+PnKfIaNWTR2XCK8r7CvfZJvZGpfLPy0jldF5+DFlCM5fW+Fy5VcdTAwMWT6V3bQwrfjd085XGI68WZB4k6NS+WTqPbFRl+28f8mbkGcvcIvvMKvX+e1Tnjqn2NkdI6W8bigXHUwMDE49eTVQ3zYu6y1elxif/nlrDza+pdcdTAwMDUggzks4PPvh2//cfOequX7fXF9u6rlefVx1GJ3p1x1MDAxOeNwZJg7rTRBxttYd5M1IMpAVlxu7cHjxsJcdTAwMGJUjz89XGYmibXSgIU68kmFXHUwMDEx8bFzXHUwMDA3Ue0pp54wijRmpJiMXHUwMDE1q2JgXHUwMDEwXHUwMDBmmPDOYEY8YmnNrbKqXlx1MDAxMqhAhkkqiklm3lx1MDAwN1x1MDAxYYnAUJmYU1x1MDAwNqoqJmnXgCVcdTAwMTG501xy7TlE4eVk42JcdTAwMWTeNVx0jIG8clhYXHUwMDFkTCBcdTAwMWH0cyf9kpNKaDJISlx1MDAxM8uF1etqXHUwMDBl9vZu8Vx1MDAwN/tcdTAwMTkpf0LHhZt6yVPBXHUwMDA0j3ix8Vx1MDAwNrM/PVPtodBcdTAwMTh8KSw8XHUwMDBih9Pukz1IkDVVT5HJxHAmq0HW0DNcdTAwMTdcIlx1MDAwNbCEVFxcOrBcbjK6m4163EFHfYg2XHUwMDEwQYxZXHUwMDA284RdzFDpZFrvcFx1MDAxOCrhXHUwMDExXCJcdTAwMDI7VLpcdTAwMGK9hKismFnTVuvA1IIr9eiAgZ3l2CCVnMlccpWmbc5cdTAwMTnzQ8XcjVx1MDAxNK3aX7qntj4nI1x1MDAxMU6Px2RM9YFqo9Yn5Ntz+lx1MDAxMFxyNFx1MDAxOIegQ6KQjD+aXHUwMDFlSmixXHUwMDBlUVx1MDAxM950XHUwMDFjKjPQxdzpxjhcdTAwMWIpnZ1cdTAwMDZcdTAwMTlI61dv1EutPtMt2zO1otq3hH1cdTAwMWFcdTAwMWUqLrWNXkLFXFxUuoFcXFx0kVx1MDAwYtZCkiFcdTAwMTjTgLfF41x1MDAwMt5Ut1SGVF6QmUHGIPZcXECltDxCVsZgnyONYlx1MDAxMOX03lx1MDAwMe4zIULeg01BJ4PcVbUnW8RjsI2aQUVcZnZcdTAwMDA9yn5cdTAwMDZ72epcdTAwMWPyfojiMWCQ9jFgXGJ/h6at9CVcdTAwMTlcdTAwMDRcIj/oT/Dk6ZvoX/Nms7Zvf6fNavzjXHUwMDA2f/VcZv9+oUf03fAutbCVrqJcdTAwMTkqYKCiIf2SXGJcdTAwMTGRXHUwMDAx+0NkP1x1MDAxNGCjozYl+FHbgW067HyJXHUwMDEwrEOEP1x1MDAwMEag40xcdTAwMDN/4Y5EZzom+MFcdTAwMWGxMbSMxkKWMfpcdTAwMDRcdTAwMTNyNvG/slx1MDAxOc9KqCiUMegzKyu/gFZcdTAwMTlzlVx1MDAxZSbobsJcdTAwMWPgQbJEPZ6n9P5cdTAwMDLsflx1MDAxOJcuwevYyoJcdTAwMWbQ95qHtj8r3Vx1MDAxMqpcIpIpyzG1XHUwMDExZOF6PDFofIrBj4FcdTAwMDO0b6iZbmjQXHUwMDA3WyohYEf8eFx0vjembTVO7PNsZJWcNMQuXHUwMDE5k3j46Vx1MDAwZrJcdTAwMTJmWInhTp/lXz98/Vx1MDAwZpa3bf4ifQ==",(0,c.kt)("defs",{parentName:"svg"},(0,c.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,c.kt)("use",w({parentName:"svg"},{width:"110",height:"105",href:"#image-7d11b70956dc218d90f42f640d9de167fe806cdf7bbdaf7244147d72f4860b5c5b30a396d634d1e6a90e2b32583e16f6",transform:"translate(10 20.895)"})),(0,c.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,c.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#000",d:"M172.838 75.458c26.31-.1 131.67 1.23 158.04 1.41m-159.45.72c26.69.05 135.41-2.64 161.85-2.59"})),(0,c.kt)("path",w({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m331.718 73.918-12.48 5.87-1.61-11.84 14.13 7.94"})),(0,c.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#000",d:"M332.128 74.268c-2.54 2.34-7.33 3.47-11.89 5.81m13.63-4.36c-5.1.75-8.41 2.85-14.35 5.53m-.71.1c1.64-3.34 1.62-8.52.02-12.46m.55 12.34c.89-2.94.71-5.8-.37-12.41m1.47.36c5.23.98 10.05 3.31 14.03 5.98m-15.11-6.3c4.8 2.5 10.57 4.18 13.4 6.68m.48-.54s0 0 0 0m0 0s0 0 0 0"}))),(0,c.kt)("use",w({parentName:"svg"},{width:"130",height:"130",href:"#image-5df0c6e0050685a2cd44b721c8b2bf83f07f5d34697c3c85f49fe67b73f7c45fbbfa865e614f146c1066aa9320dcd7b5",transform:"translate(380.43 10)"})),(0,c.kt)("text",w({parentName:"svg"},{y:"18",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},transform:"translate(198.18 40.762)"}),"Community")))),(0,c.kt)("admonition",w({},{title:"Discord Invite Link",type:"info"}),(0,c.kt)("p",{parentName:"admonition"},"You can join our Discord community chat via ",(0,c.kt)("a",w({parentName:"p"},{href:"https://vast.io/discord"}),"https://vast.io/discord"),".")),(0,c.kt)("p",null,"Here are the top four reasons why we are switching:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"Retention"),": Slack's free plan has only 90 days message retention. We prefer\npermanence of our community discussion.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"Moderation"),": Discord has solid moderation tools that rely on role-based\naccess, and makes it possible adhere to our ",(0,c.kt)("a",w({parentName:"p"},{href:"/docs/next/contribute/code-of-conduct"}),"Code of\nConduct")," upon joining.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"Invitation"),": Unlimited invite links that do not expire.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("strong",{parentName:"p"},"Inclusion"),": Users can self-assign their preferred pronouns."))),(0,c.kt)("p",null,"We hope that the majority of our Slack users understand these concerns and\nwill join us over at Discord. See you there!"))}L.isMDXComponent=!0}}]);