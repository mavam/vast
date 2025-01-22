"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58435],{15680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>y});var t=n(96540);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=t.createContext({}),M=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},g=function(e){var a=M(e.components);return t.createElement(o.Provider,{value:a},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},N=t.forwardRef((function(e,a){var n=e.components,c=e.mdxType,i=e.originalType,o=e.parentName,g=m(e,["components","mdxType","originalType","parentName"]),s=M(n),N=c,y=s["".concat(o,".").concat(N)]||s[N]||p[N]||i;return n?t.createElement(y,r(r({ref:a},g),{},{components:n})):t.createElement(y,r({ref:a},g))}));function y(e,a){var n=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var i=n.length,r=new Array(i);r[0]=N;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=e,m[s]="string"==typeof e?e:c,r[1]=m;for(var M=2;M<i;M++)r[M]=n[M];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}N.displayName="MDXCreateElement"},79966:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>D,contentTitle:()=>l,default:()=>j,frontMatter:()=>y,metadata:()=>A,toc:()=>I});var t=n(15680),c=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,g=(e,a,n)=>a in e?c(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,s=(e,a)=>{for(var n in a||(a={}))o.call(a,n)&&g(e,n,a[n]);if(m)for(var n of m(a))M.call(a,n)&&g(e,n,a[n]);return e},p=(e,a)=>i(e,r(a)),N=(e,a)=>{var n={};for(var t in e)o.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&m)for(var t of m(e))a.indexOf(t)<0&&M.call(e,t)&&(n[t]=e[t]);return n};const y={},l="Email",A={unversionedId:"integrations/email/README",id:"version-v4.25/integrations/email/README",title:"Email",description:"Tenzir supports sending events as email using the",source:"@site/versioned_docs/version-v4.25/integrations/email/README.md",sourceDirName:"integrations/email",slug:"/integrations/email/",permalink:"/v4.25/integrations/email/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.25/integrations/email/README.md",tags:[],version:"v4.25",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Elasticsearch",permalink:"/v4.25/integrations/elasticsearch/"},next:{title:"File",permalink:"/v4.25/integrations/file/"}},D={},I=[{value:"Examples",id:"examples",level:2},{value:"Email the Tenzir version as CSV message",id:"email-the-tenzir-version-as-csv-message",level:3},{value:"Send the email body as MIME part",id:"send-the-email-body-as-mime-part",level:3}],d={toc:I},u="wrapper";function j(e){var a=e,{components:n}=a,c=N(a,["components"]);return(0,t.yg)(u,p(s(s({},d),c),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",s({},{id:"email"}),"Email"),(0,t.yg)("p",null,"Tenzir supports sending events as email using the\n",(0,t.yg)("a",s({parentName:"p"},{href:"/v4.25/tql2/operators/save_email"}),(0,t.yg)("inlineCode",{parentName:"a"},"save_email"))," operator. To this end, the\noperator establishes a connection with an SMTP server that sends the message on\nbehalf of Tenzir."),(0,t.yg)("p",null,(0,t.yg)("figure",s({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,t.yg)("svg",s({parentName:"figure"},{viewBox:"0 0 887.942 140",role:"img","aria-hidden":"true"}),(0,t.yg)("symbol",s({parentName:"svg"},{id:"image-d1ee05fd41e4fad60a7372901fb1a4d206070a057f9b3a48768235e2c5775230a90d16ba6804ee1fbd79befd1ec8cbbf"}),(0,t.yg)("image",s({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NSIgaGVpZ2h0PSI3MCIgdmlld0JveD0iMCAwIDg1IDcwIiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTI5LjQ1IDQ0LjQyTDQyLjc3IDEyLjkzQzQyLjgyNjkgMTIuODA1OCA0Mi44NTc4IDEyLjY3MTMgNDIuODYwNyAxMi41MzQ4QzQyLjg2MzYgMTIuMzk4MiA0Mi44Mzg2IDEyLjI2MjUgNDIuNzg3IDEyLjEzNkM0Mi43MzU1IDEyLjAwOTUgNDIuNjU4NiAxMS44OTQ5IDQyLjU2MTEgMTEuNzk5M0M0Mi40NjM1IDExLjcwMzcgNDIuMzQ3NSAxMS42MjkgNDIuMjIgMTEuNThDNDIuMDkyOCAxMS41Mjg2IDQxLjk1NzEgMTEuNTAxNSA0MS44MiAxMS41SDkuMjc5OTlDOS4wNzYzMiAxMS40OTU4IDguODc2MjEgMTEuNTUzOCA4LjcwNjQzIDExLjY2NjRDOC41MzY2NiAxMS43NzkgOC40MDUzMiAxMS45NDA3IDguMzI5OTkgMTIuMTNMMy4xMDk5OSAyNC42M0MzLjA1IDI0Ljc1NTggMy4wMTY5NSAyNC44OTI3IDMuMDEyOTggMjUuMDMyQzMuMDA5MDEgMjUuMTcxMyAzLjAzNDE5IDI1LjMwOTkgMy4wODY5MiAyNS40Mzg5QzMuMTM5NjUgMjUuNTY3OSAzLjIxODc1IDI1LjY4NDQgMy4zMTkxNiAyNS43ODExQzMuNDE5NTcgMjUuODc3NyAzLjUzOTA3IDI1Ljk1MjMgMy42Njk5OSAyNkMzLjc5MzMxIDI2LjA1MjUgMy45MjU5NCAyNi4wNzk3IDQuMDU5OTkgMjYuMDhIMTkuODJDMjAuMDg1MiAyNi4wOCAyMC4zMzk2IDI2LjE4NTQgMjAuNTI3MSAyNi4zNzI5QzIwLjcxNDYgMjYuNTYwNCAyMC44MiAyNi44MTQ4IDIwLjgyIDI3LjA4QzIwLjgxODUgMjcuMjE3MiAyMC43OTE0IDI3LjM1MjggMjAuNzQgMjcuNDhMNy41OTk5OSA1OS4wN0M3LjU0MzMyIDU5LjE5NDggNy41MTI5MiA1OS4zMjk5IDcuNTEwNjUgNTkuNDY2OUM3LjUwODM5IDU5LjYwNCA3LjUzNDMyIDU5Ljc0IDcuNTg2ODMgNTkuODY2NkM3LjYzOTM1IDU5Ljk5MzIgNy43MTczMiA2MC4xMDc3IDcuODE1OTIgNjAuMjAyOUM3LjkxNDUyIDYwLjI5OCA4LjAzMTYzIDYwLjM3MiA4LjE1OTk5IDYwLjQyQzguMjgzMzEgNjAuNDcyNSA4LjQxNTk0IDYwLjQ5OTcgOC41NDk5OSA2MC41SDQzQzQzLjIxMzIgNjAuNTE0MSA0My40MjUzIDYwLjQ1OTYgNDMuNjA1MiA2MC4zNDQ1QzQzLjc4NTIgNjAuMjI5MyA0My45MjM1IDYwLjA1OTUgNDQgNTkuODZMNDkuMjIgNDcuMjhDNDkuMjc2NyA0Ny4xNTUyIDQ5LjMwNzEgNDcuMDIwMSA0OS4zMDkzIDQ2Ljg4MzFDNDkuMzExNiA0Ni43NDYgNDkuMjg1NyA0Ni42MSA0OS4yMzMxIDQ2LjQ4MzRDNDkuMTgwNiA0Ni4zNTY4IDQ5LjEwMjcgNDYuMjQyNCA0OS4wMDQxIDQ2LjE0NzJDNDguOTA1NSA0Ni4wNTIgNDguNzg4MyA0NS45NzggNDguNjYgNDUuOTNDNDguNTM2NyA0NS44Nzc1IDQ4LjQwNCA0NS44NTAzIDQ4LjI3IDQ1Ljg1SDMwLjRDMzAuMTM0OCA0NS44NSAyOS44ODA0IDQ1Ljc0NDYgMjkuNjkyOSA0NS41NTcxQzI5LjUwNTMgNDUuMzY5NiAyOS40IDQ1LjExNTIgMjkuNCA0NC44NUMyOS4zODggNDQuNzA0OCAyOS40MDUgNDQuNTU4NiAyOS40NSA0NC40MloiIGZpbGw9IiMxMjEyMTIiLz4KPHBhdGggZD0iTTM3LjE3IDQxLjU4SDUwLjg4QzUxLjA4MzcgNDEuNTg0MyA1MS4yODM4IDQxLjUyNjIgNTEuNDUzNSA0MS40MTM2QzUxLjYyMzMgNDEuMzAxIDUxLjc1NDcgNDEuMTM5MyA1MS44MyA0MC45NUw1Ny44MyAyNi42OUM1Ny45MDUzIDI2LjUwMDcgNTguMDM2NyAyNi4zMzkgNTguMjA2NCAyNi4yMjY0QzU4LjM3NjIgMjYuMTEzOCA1OC41NzYzIDI2LjA1NTcgNTguNzggMjYuMDZINzYuNDFDNzYuNjIyIDI2LjA3NDkgNzYuODMzMiAyNi4wMjE4IDc3LjAxMyAyNS45MDg1Qzc3LjE5MjggMjUuNzk1MyA3Ny4zMzE5IDI1LjYyNzYgNzcuNDEgMjUuNDNMODIuNjMgMTIuOTNDODIuNjg1MiAxMi44MDA3IDgyLjcxMjYgMTIuNjYxMyA4Mi43MTAzIDEyLjUyMDdDODIuNzA3OSAxMi4zODAxIDgyLjY3NiAxMi4yNDE2IDgyLjYxNjYgMTIuMTE0M0M4Mi41NTcxIDExLjk4NjkgODIuNDcxNSAxMS44NzM0IDgyLjM2NTIgMTEuNzgxNEM4Mi4yNTkgMTEuNjg5MyA4Mi4xMzQ1IDExLjYyMDcgODIgMTEuNThDODEuODc2NyAxMS41Mjc1IDgxLjc0NCAxMS41MDAzIDgxLjYxIDExLjVINDguODJDNDguNjA4IDExLjQ4NTEgNDguMzk2OCAxMS41MzgyIDQ4LjIxNyAxMS42NTE1QzQ4LjAzNzEgMTEuNzY0NyA0Ny44OTgxIDExLjkzMjQgNDcuODIgMTIuMTNMMzYuMTcgNDAuMTNDMzYuMTEzMSA0MC4yNTQyIDM2LjA4MjIgNDAuMzg4NyAzNi4wNzkzIDQwLjUyNTJDMzYuMDc2MyA0MC42NjE4IDM2LjEwMTQgNDAuNzk3NSAzNi4xNTI5IDQwLjkyNEMzNi4yMDQ1IDQxLjA1MDUgMzYuMjgxNCA0MS4xNjUxIDM2LjM3ODkgNDEuMjYwN0MzNi40NzY0IDQxLjM1NjMgMzYuNTkyNSA0MS40MzEgMzYuNzIgNDEuNDhDMzYuODYxMiA0MS41NDQ3IDM3LjAxNDYgNDEuNTc4OCAzNy4xNyA0MS41OFoiIGZpbGw9IiMxMjEyMTIiLz4KPC9zdmc+",preserveAspectRatio:"none"}))),(0,t.yg)("defs",{parentName:"svg"},(0,t.yg)("style",{parentName:"defs"},"@font-face{font-family:Excalifont;src:url(data:font/woff2;base64,d09GMgABAAAAAA0MAA4AAAAAFjgAAAy5AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhwbhRwcNAZgAIEUEQgKnTyVfAsoAAE2AiQDTAQgBYMYByAbYRFRlJFWCdnPhGxOaR0fiERSxRNdEzVnuvp7P8/f/HMfelFzNaL2BwUNwJ/Y2ocFHv7/UO9/P8G1wXICHBu0BiZdiyrQ4xUpUMUqskU7n1tv0MKdzwwrP74a0f05MUMiVd7VV/RsC+0IsJr/kbU4XzRuA3Mogzt5gphxzX9aa3Xm7tDGhYhYJES8ayiUsGJv/1n9iHkVrVRKIzT1ttMQq4HaafEoqfEKtyWvDRaL+k3lsHMhIABsCIwEmoeAE8YfBcAUQosYm1NywPGyp70ZHG/tNU3g+NS5Sys4IgDA02PeY429FegqEkax9A9ofUkH3dw0DAiAPtAiYBEAbM3/N27U//+GR9QicwJN1u+yeBr/P+eve5pn8gYlv/hNgOZ+796wp+b66v0/onl7Bjm7nHT1bG/zWzyFsGFP/F4MzP4kB5fgbENoBWVGAfjY/mwchofOIBZkDiYQ6/oAzyPMRqAEMESdeQJN95znUlWALD4QxlpnO47IWnMcWUxdS8uUEuhLEJh9XSKMLLcqVwHutWmmN0YOmgAkeozCCgAgmQ+CjhDmF6yPXGjcWtLgAATpkbv9GwVkbx7qpgCYPxe96CQV1/woDkDsE+I8wgB2xi+psAXRSpUhR2dVarSw6dBNj61zGzKyyzdrY9f1R7IO2SZ1VSwS6uvp6ghCZzv7n+mGRdJLyBcSnwDkO2CS2OM4Nl4d22B66bReKaqOUmamq1cYzDdB9dfizv1vz3/5yw9njbAW7xpo00/uF4lPoP/h6Jxj5uatfJ+wkseJ0O5mWcZ3d2c3VmtpvtebjcIUpPnOttA2ns+LQ8RTqn7RhjuI5I1VV7sujuemwxtc59lf/trDKIN3LSZUt+oST8KtkLfSM8n18mKZaVShIQ4B3+1d+A/HKL64gIK8RAOv7V2oeJc5GLXWTXrxKjrO9Q4wXupgCuLjQXn6DROXRLnjf6PqwmhcJARCw4ZMaNcs2plqbgQhGUOSQd8uZga5CcnIWJeFNRDlRTNGk3JwXTSDVIkaqU26+QafeGD24SqvpCfvVDDAnl8YHiIYe2DzbCLqLGFJorE2opM4Rst5zYnbXrf99/Gi6v7LzRity8FUW2mS5tp3bibq10tBjnJzebI/2Nf5xF1R2TTZSB5r7PFj7YePiO9Js5oTKzQMQcgBr0j+WgYz48pcl7cenAsPU4HaudZebJcoyls6BqutR2VaFj8Ii60kmhtFdVdYRNxtEh9DjEHsVJxUURxQwYoHcSaRbIeEGxhnGmG+n9KAFNraQFz/hGnXVdcgEQEwgsQgGbwAxRyepAukB4QCk3PTrT/+4vau9gCFvBI+mR0cHRq/6aTOMsq/vmgNbn9xXcwna+Om7xc84IQU9RFdBumLg3bXh/5PUVa3yFiyP0ytBfGNsLQE3s32nOffhorzc82Tzmc/LP1ST35IitJmq8JPcjO3IpWQyHXV5Hq5A8/vrI4aBcNB9GI/WJAXxa4Fsbejuk2bQINIQ84lP+v1igRgIy3RQJZrgo9h0dtze9e0tFGNDklTUb5UX2peMbxeD/oFHKJ4rhV9uiAHCh5hDwCfAg6OQRgjKssKBVzHxr3l9Ys7LdrWNqwN1c2+yo5aHpOG9yxXiF00COgE5YoDQtGTwWoBez2JXIDRaYwppSg323lbXF5f/fqXRHWrmfFS7/Lv0/xzxeYSN/zC6Kx7RJiTe9+u6v5Ha/PR2WufXP/h/kdjyQYjxYmRkjYaM4BHs4ZF4mPP1Sw92yWzT2rlTp1FkBDJNizW0e5+RpaWovuqW2cdFF9lx9NJgPqf/CEsN3JJRxn2Gs4dnIYhwB5cy5qZZOt38o+XzzlxjGhAD0OK6+mTJnQbBQuBkJks031sqrEldWsuBjNpeIhERHUPCGvXQGODlMryAeB4zgZdO9vRa2DDoWhy63C+M/i6X2aoqk3rbKuYGUXfH0OisevsEpt2tM6uawdYlajXgz93kP0RRQHGFzmOgWsXyzL7hP3CRHmgwQW3SjI7wFSXENgk2WilqjFRZ1OWQLTOyNMl28dgVOE6hgapkohAH9gVGsZH4r8v1FHC0SbAL0DoVu2+n2tRSZNRz6pnXpPTWeXlh+H5WUOqeKCiZZBGOOWty5xLI1mqb8ns9nWVBm2Rdyu0/U2Qkz8eIo35yDLb48IU+5e4lDR//5aXbhtsFtr+oBs8y8cmGhlJozGC2azvCbxlARFFreKgapdJbTnKRGmOaBLrsHPOiRRu+4DJnI9GjtD7B7PcHxtbOqiPY+i5zZoJH8eMPDT3h4SWfXTSmcwk/wW9L8Ep68XHp5MyvkeuEnWeGUjldQFqgA8wykzlrR0FKl2n4GjE4OU5ZcQuVJlhl/Ikfi2sQjJwWs+Facnu2XSJscQgmrzvMYu6ahlxDOvj4Rn/BLevcssvnk4rkNqkQDxPXMhfYtrO0CLYOIhqipgvJUhLDNQ2SgORnlmU5DQu5RmW7bOzZ2RkuCNna+6cXNocWouo0mO8v7lMsjkZ8qc/Hp+UV7fpPcaq5SkxMlCUaAnJEzHYOELYIXis/Xq4m2wosJjXsesFHpOCFxO6h+HuD4Ddr8SYTuAQHViaavmqYnd+0EOv6aFo1RcvLUpivJowPdsUmtvi3TuWd33uhvaMENQb3/Fg9AAL2F9/6Q9OrRymZZEThmElKENUH7Kuj2ZrqjOTdnB2slvHhPCEtKFlX3WxLTWw0cGgrkFppIg4GcQtCckw8tNRv3bX/4NGwot1+VXpOz1bVkJpyZqh+AIbn7QxrehhEuFPMyvd6Ggm37bQxl7KFpHax1ryFZUPF+hMxqxFuLy/ajf/KByiPdbJvcY23kjPlfghP9POgGrVRCsvnRI0zIo8U1I8TpYmUxXLx3LTid9ADitXmA97aFZKdd6G9hx9qeA66lNjxXtQmiRCPblgs41ocISS0gHHzE9V/Nu/aObW8YOk5d4vtMeVtRcTPI8fwC99jbo09eXEjz6a3Zg+ZsnnsN+paFMTaddQ8h6l4H044lHbGJ+ZIv9UdaA9M8GLyCzEpRJ1872T3OWVKYNFA4/fNtg9VeJHwzKkmemE3tfoXvSqO9nxVcd0wbKfqMe1S8Snw+oWwkCR7Pg91FfOoZisE44Y61xAT6mzG9afxC1MTiBnJzU1EeEmxfrFnF7HoZclFR7zsM/RUvbE4vLwOb8fF/ju+CqO6BDFZT+8sX5K0gF6Icrf7zLbi939UM7/1tmowD5YFSM029hDMDd9rjrl7WTsTkI+qwMLhU4zdflouEP4NexL/E00NPo1rNP5zEhIGpFwXG1em9DS1/lrjS1EkeyTJ02MNLN0C+qQKicowO3oLkHORCPd25+FmC0fNjXBHLvNditvr8DbwlxOh9o+yiphGPt/OCkycajJXV1DrH/Z/d61xqtuZWnmEgxsmJJqjK6eNLPTtH2xTpJEqzlnnec3VjJvfl9uLxjvPplrFJMbVWyZWsVBixfIlo4pHlQuJhmOY61i9gpL35FMkecosLc5Y6Jilj68GMfFE3EpZgTdRHTVMzLstcuSjVqW86nJ4d0C56Xqcx114ebKS060luclHtkkpsQ/hm42drNKsoaSmR+2dP19/crQ7+83534siNCXPaIE7cp+/eAWm0ZF60a+6F8jz8Lie/d0UyzZNCxcvWKiHJlYuRxa0DeRKnSgBVcEYR6e0cFZ5yt9DjNc9iTVOif5RJ5dS+FExWKuMtjfK5KI41g+/REWwj1KcHjnychSh4z13WUuA0GVlOCx+gph2eDQNHz4jnmfH/9RyfMXzHW8VnzlWTZtxkYFcSCFRz2I1PUw5phKx0Tc1S0TVCsNIToaBdbRwvRZTURD8qD0Wn3klMKPNXkPJgdKu+fRifbJ/BGrY7M7a/EFXbL0UYap0/pKrvIFWQqTsBPCMT/j0triOK1JIrVGCnoqKq+ofwU4/jyQOWjK+EL9Kz4Tkx4dZciV3w7+jhfoA/PeLrwp58V+pbPwFwAAD3v6GQEAHi163fv/kO9NvCKiAIAOE1hf+qmisCH7/qz9lf09olwJpiQEfY6DkPgH4tgFumgFRi4EFFrwSj9AEQ7g5CFoYjrERgGE5A+LSHMgNNzAJzx4Pgc4kQ485XyR60Az1x9CXaCFI5QieD+nwOhsdiktQsT2FWG4NhTh/AwrInioLCLF8wANggOY9FCls2YNarVp1UWgLDXqdNVsZbu8HNt1NBowXyFUkBDiGJbm0Z5s6j3NKtUIY/gYGbZ/BF/1ShSr1WYbZbNI89YVrYb1G2HgUZue7GWuUw/GtoxW8aUwCBlD46OycbdCytXsMXcXZGOdZtqpkFNHDjUsa9ANJqsFwf+6G/yHBA==)}@font-face{font-family:Comic Shanns;src:url(data:font/woff2;base64,d09GMgABAAAAAASwAAsAAAAADNQAAARlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAANBEICjhXCwYAATYCJAMIBCAFlRgHIBssDBEVpDuQ/SG5bdqsWU+CbFuVIHc4gSrNPu6DLLn+EKbMvcH/f/v99rlv3hfEq3oykYQ3UjHJJFIgaqPSzBJE1mxOzb0+CkG6oj3Q7wWIYyuJOqycZXfhR+AZLFHt9m/iinNIMIEUY6kQMpthMVVVLwAGPtrc7IerUTk0h/DpTlfohq744n2WBoLylq4UG6XUAOblBbQMVvzbuLdgZblF38g6XFlG+X9clAcW4A8HprCABoXgAsyqrtKSK6VPmjFGGMUYMezndb8gSImOCGHXFlGMPHyrjVKHu5IA9O+LT+BSVzc/nit3aLUoTgF6tgPkqQADAchSpfXPF/IoHEeg5vsL7++BP6DtaICTf8IBgTSKDAqAJACguXomdiruUtktz6AzzM56aHZpyiscLw9cUnDl1wp/BICxdUfrn8TgDfAQH9ym4LF+/Pv/nV24IyDGAAhHeW+LxplvA/LUa/VrmBLOx3zMM6FzjgER6KQwAlHLqtTiED+cf4tS5r9oUpwUA2v6y84uhhKUnDaihKIH2yLGj4LmOKLjG8pFG5o30DXS1XePOeGz08shMNzbAJYAag24vAiM83VgpvOu+mq4YWjsmQ+q882TX+DVJ2gHlEgIny8deSTfF4A6owHy1gfm2L/LHPCG7OmoHhpVPkMiUslD/OqcaBvoFL8xa9/caXB9KCAi0ICFp5p5ypoZqsaV94hDjEp/nMBj+yheHGscA1xDyChsHCUSTELeFhGCuqMBoNjfiVJHIGfe7wTIagOZQcg8y4DVM0VWCBj4KSolyAocLO3ElIKTuzwwZWyCU8GQiGxJUOo9hCoLTS6iQTQbgN0K0RYS096kGjLUhkhXhL8cAjU/aU2jhJEXtI2E1kFk7EUAe2SARR3eQ2UpMQy6DXodYyOyHUwIYoPkMP9oMmunabqjRCT9c5flX7WlBJeNyygqlKI0B6LYIl9CHFNRuMsIL9NHbRWhh3mHRhub5FvqmpVO7o0RpnGeGVN9zAQ5sbN7BZ5aB530JrZEniu4jBli35UM1dMr6MJJAlYZ1UrZXhgMZnakB2K5vOxsoFdLsR10jl20cDi2aiabp/8N5TIdH6BCorkA0q2R6fLIrncBWozzxb0Ii13ICVBaXG02kRZ0VYdnjOMya9hQYwDSgVvDFqIZGjigfimHCmyEqGXTAPF9DSqGF2AFRrqojEihYzAefDC67jrYCCS7JcS4KLsrlWTSv9EBMgsFf0qKeDIo48Cg3FgigrpO1ZsZjeKNgCRCEbs+Cfp1hVHsZRYgAGq4oExpoD1q1t5YZ4pbTSqF31uthph0SrVXTeOJwFh7ATpbmqRCUUCzd9e6ywKF5UXD8UGyJQk0Li+ZvrJISlyIJYkqApLvKzWUISvnAOMgZQzi3sxskJU4uJrFd1GtpayIEDX4oRn21KjahERs1K6cl9KGZDroVJjcick0eMcUSRZpZQ5noncDloc5YUsmwwQ6gcY9Sky2p7LA8dD3X/6eAAAA)}")),(0,t.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,t.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M190 70.363c27.28-.19 55.63 1.15 100-.1m-100 .1c33.43-.47 67.15-.46 100-.1"})),(0,t.yg)("path",s({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m291.56 70.953-14.96 4.58-1.06-11.4 13.51 7.25"})),(0,t.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M290 70.263c-4.04 1.06-7.27 3.81-13.64 6.24m13.64-6.24c-4.6 2.45-8.95 4.57-13.64 6.24m0 0c-.01-3.82.41-5.16.09-12.68m-.09 12.68c-.32-4.29-.29-7.55.09-12.68m0 0c6.5 1.09 11.1 5.55 13.55 6.44m-13.55-6.44c4.54 2.17 8.96 3.45 13.55 6.44m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("path",s({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M611.82 46.401c24.21-2.31 49.53-.48 99.36-.1m-101.21-1.13c33.1.68 68.97 0 100.66.63m-1.32 2.67c-1.49 14.47 3.06 22.76 2.56 56.47m-1.03-59.42c-.2 15.97.06 36.75-2.85 56.59m5.65-2.97c-25.38 6.98-50.77 2.69-103.53 6.96m98.77-2.82c-33.02-.14-64.19.01-96.15-2.28m2.08 5.34c-3.33-21.38-5.73-44.97-4.35-58.58m.11 54.79c.13-22.23-.43-46.29 1.38-59.06"})),(0,t.yg)("path",s({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M612.424 44.927c14.68 9.66 25.72 18.92 49.2 30m-52.08-27.52c16.61 8.57 31.12 18.49 49.6 28.74m-.06 4.78c16.93-15.56 27.72-18.59 49.64-38.69m-47.03 34.06c11.97-5.42 20.3-15.8 45.07-32.98"})),(0,t.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,t.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#f8f9fa",strokeWidth:".5",d:"M317.33 17.7s0 0 0 0m0 0s0 0 0 0m-4.85 11.68c5.4-4.44 10.42-9.53 15.08-17.36m-15.08 17.36c4.47-5.09 7.22-9.95 15.08-17.36M310.9 37.28c9.25-9.7 12.83-18.15 22.31-25.66M310.9 37.28c8.87-10.44 17.56-19.46 22.31-25.66m-22.57 32.06c9.01-13.64 21.14-24.78 28.87-33.21m-28.87 33.21c9.99-10.92 18.52-22.41 28.87-33.21m-29.13 39.61c11.11-13.05 22.45-23.4 34.11-39.25m-34.11 39.25c8.5-9.37 17.7-18.89 34.11-39.25m-33.72 44.89c10.84-14.29 24.57-27.57 39.37-45.28m-39.37 45.28c9.52-12.98 21.09-25.62 39.37-45.28m-39.63 51.68c17.47-17.52 31.35-35.61 44.61-51.32m-44.61 51.32c8.59-10.55 19.11-22.25 44.61-51.32m-44.21 56.96c15.17-17.85 26.98-33.51 49.86-57.35m-49.86 57.35c12.7-13.89 24.38-28.07 49.86-57.35m-50.12 63.75c18.96-22.98 42.57-48.13 55.1-63.39m-55.1 63.39c18.63-22.23 35.9-42.69 55.1-63.39m-55.37 69.79c21.03-23.75 40.99-45.17 61.02-70.19m-61.02 70.19c16.33-18.41 32.15-37.27 61.02-70.19M310.78 86.2c19.98-24.39 40.83-44.81 65.6-75.47m-65.6 75.47c23.37-26.23 47.25-54.18 65.6-75.47M310.52 92.6c27.14-31.52 57.47-63.19 71.51-82.26M310.52 92.6c24.9-29.96 52.2-57.76 71.51-82.26m-71.12 87.9c29.67-35.1 58.34-69.6 76.1-87.54m-76.1 87.54c22.86-27.86 45.93-53.7 76.1-87.54m-76.36 93.94c18.66-20.33 42.23-46.09 82.01-94.34m-82.01 94.34c17.62-22.26 36.71-44.3 82.01-94.34m-80.96 99.23c21.86-25.13 43.94-52.65 85.94-98.87m-85.94 98.87c24.47-26.87 47.76-56.07 85.94-98.87m-84.23 103c19.89-22.33 39.8-47.17 89.88-103.39m-89.88 103.39c31.64-36.55 65.09-73.29 89.88-103.39m-88.83 108.28c22.3-24.48 44.84-50.17 93.81-107.92m-93.81 107.92c25.69-26.75 50.28-55.77 93.81-107.92m-91.45 111.3c33.69-35.71 65.75-70.72 96.44-110.94m-96.44 110.94c30.62-35.53 61.28-71.72 96.44-110.94M320.5 123.8c22.4-24.13 42.4-47.34 98.4-113.21M320.5 123.8c33.92-38.21 67.34-76.75 98.4-113.21m-95.39 115.83c24.37-28.27 51.43-56.78 100.38-115.47M323.51 126.42c26-28.1 52.81-59.71 100.38-115.47m-96.7 117.34C369.5 80.97 409.26 35.1 429.53 10.56M327.19 128.29C354.1 98.4 379.76 69.27 429.53 10.56m-97.35 118.09c34.93-41.97 72.58-82.62 102.34-117.73M332.18 128.65c21.42-23.95 41.98-47.51 102.34-117.73m-98.01 118.85c39.4-43.45 78.47-89.35 103.65-119.25M336.51 129.77c26.79-27.68 51.57-57.08 103.65-119.25m-98.67 119.61c35.14-43.2 73.75-86.2 103.66-119.25M341.49 130.13c38.8-45.56 77.02-88.76 103.66-119.25m-98.67 119.61c27.11-30.78 51.13-58.68 103-118.49m-103 118.49c23.31-25.1 44.52-50.74 103-118.49m-97.36 118.09c42.07-44.12 81.15-92.19 102.35-117.73M352.12 130.09c26.45-31.25 53.92-62.94 102.35-117.73m-97.36 118.09c30.25-33.82 58.57-65 100.38-115.47M357.11 130.45c40.07-44.35 79.21-91.19 100.38-115.47m-94.74 115.08c34.71-39.05 68.54-81.15 98.41-113.21m-98.41 113.21c34.07-40.84 70.12-80.4 98.41-113.21m-93.42 113.57c25.21-28.56 49.6-58.46 96.44-110.94m-96.44 110.94c23.75-27.39 47.74-55.03 96.44-110.94m-90.8 110.55c31.32-36.9 64.84-75.92 92.51-106.42m-92.51 106.42c18.39-24.34 40.24-45.94 92.51-106.42m-87.52 106.78c31.69-36.09 61.96-69.71 89.88-103.4m-89.88 103.4c31.88-35.86 63.93-74.32 89.88-103.4m-84.24 103c24.98-26.79 47.75-53.77 85.29-98.11m-85.29 98.11c33.79-37.19 65.6-77.07 85.29-98.11M389 130.35c27.92-32.8 57.4-69.77 80.7-92.83M389 130.35c30.13-33.32 57.95-67 80.7-92.83m-75.05 92.44c18.12-23.16 37.37-41.6 75.44-86.8m-75.44 86.8c23.64-26.34 45.89-52.63 75.44-86.8m-70.46 87.16c25.62-29.97 53.21-65.49 70.2-80.76m-70.2 80.76c27.72-32.62 54.82-63.32 70.2-80.76m-64.55 80.36c20.88-22.26 37.51-43.08 64.94-74.71m-64.94 74.71c23-27.55 47.62-54.48 64.94-74.71m-59.96 75.07c22.87-24.59 44.07-51.2 59.7-68.68m-59.7 68.68c16.17-19.96 32.4-37.19 59.7-68.68m-54.05 68.29C435.58 109 451.32 86.07 469.7 68m-53.79 61.89c15.91-17.19 32.4-36.73 53.79-61.89m-48.81 62.25c11.75-11.55 19.37-24.11 49.21-56.61m-49.21 56.61c15.8-17.46 30.38-34.62 49.21-56.61m-43.56 56.21c7.76-12.31 18.53-19.6 43.3-49.81m-43.3 49.81c13.58-17.27 28.23-34.14 43.3-49.81m-38.32 50.17c14.19-17.05 27.03-28.72 38.05-43.77m-38.05 43.77c10.11-11.49 20.37-23.29 38.05-43.77m-32.4 43.38c13.48-13.51 23.52-28.14 32.8-37.74m-32.8 37.74c9.45-9.87 18.44-20.25 32.8-37.74m-27.82 38.1c12.02-10.61 21.97-25.94 27.56-31.7m-27.56 31.7c5.48-6.54 11.56-12.73 27.56-31.7m-21.26 30.55c6.31-5.47 11.15-15.51 21-24.15m-21 24.15c5.71-5.68 10.13-11.02 21-24.15m-13.39 21.49c4.66-5.05 7.49-9.72 13.12-15.09m-13.12 15.09c3.23-4.44 7.57-8.5 13.12-15.09"})),(0,t.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M340 10c27.51.83 54.58-.28 100 0m-100 0c32.2-.45 66.43.61 100 0m0 0c21.34-1.98 29.82 10.38 30 30m-30-30c17.83 1.84 28.43 9.79 30 30m0 0c1.1 20.78.82 42.04 0 60m0-60c-.65 21.47 1.03 43.72 0 60m0 0c-1.15 20.84-9.15 28.66-30 30m30-30c-.18 17.95-11.97 31.82-30 30m0 0c-28.71 1.84-54.69 1.92-100 0m100 0c-26.75 1.44-53.06 1.62-100 0m0 0c-21.2-1.69-31.94-8.18-30-30m30 30c-18.15-1.72-28.75-9.77-30-30m0 0c.35-11.72-1.3-29.09 0-60m0 60c-.28-21.58-.92-41.9 0-60m0 0c-.78-18.75 9.77-29.37 30-30m-30 30c1.2-21.03 8.95-32.16 30-30"}))),(0,t.yg)("text",s({parentName:"svg"},{x:"24.36",y:"14.096",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Excalifont, Xiaolai, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(365.64 50)"}),"SMTP"),(0,t.yg)("text",s({parentName:"svg"},{x:"24.36",y:"34.096",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Excalifont, Xiaolai, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(365.64 50)"}),"Server"),(0,t.yg)("text",s({parentName:"svg"},{x:"68.496",y:"14.096",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Excalifont, Xiaolai, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(594.912 10)"}),"user@example.com"),(0,t.yg)("g",s({parentName:"svg"},{strokeLineCap:"round"}),(0,t.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M490 72.033c24.28-2.78 45.48-2.61 100-.1m-100 .1c27.48.7 56.06.86 100-.1"})),(0,t.yg)("path",s({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m591.37 70.423-16.8 8.65-.16-13.73 15.31 7.75"})),(0,t.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M590 71.933c-1.71.16-5.75 1.78-13.49 6.56m13.49-6.56c-4.11 2.22-7.43 4.2-13.49 6.56m0 0c-.46-5.71-.86-8.35-.21-12.68m.21 12.68c-.2-3.8 0-7.91-.21-12.68m0 0c4.75 2.75 9.01 4.17 13.7 6.12m-13.7-6.12c4.12 1.85 7.72 2.93 13.7 6.12m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("path",s({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M728.504 44.548c34.02-.67 68.82 1.03 100.22 3.01m-96.89.11c25.8 1.45 50.23 2.11 99.05.21m-1.26-4.33c-1.21 25.02 1.78 45.32 1.11 62.58m1.11-57.97c-.38 15.92-.94 32.97-1.36 57.44m-2.8 2.22c-31.33-.97-62.18-3.03-93.34-5.32m95.68.92c-32.41 2.96-70.26-.31-98.29.63m2.59-.2c-3.65-19.45-5.9-35.37-2.95-60.67m-.57 62.94c1.38-17.04-.88-35.21.99-58.19"})),(0,t.yg)("path",s({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M730.898 47.195c21.64 14.22 36.42 26.51 47.72 30.29m-45.13-28.2c11.46 7.21 20.86 13.8 48.95 31.71m-4.73-1.62c15.44-9.2 28.01-14.3 51.72-34.15m-47.35 33.81c11.95-10.21 24.09-16.83 47.5-33.26"})),(0,t.yg)("text",s({parentName:"svg"},{x:"16.52",y:"17.5",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Comic Shanns, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(844.902 59.64)"}),"..."),(0,t.yg)("g",s({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,t.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#e9ecef",strokeWidth:".5",d:"M10 30.091s0 0 0 0m0 0s0 0 0 0m3.02 2.62c.67-.62 1.39-1.2 1.97-2.26m-1.97 2.26c.71-.86 1.36-1.42 1.97-2.26m.39 5.64c1.39-1.81 4.5-4.92 5.25-6.03m-5.25 6.03c1.98-1.78 3.65-3.5 5.25-6.03m-2.23 8.66c1.79-2.91 4.14-4.14 7.22-8.3m-7.22 8.3c3.08-2.8 5.43-6.03 7.22-8.3m-4.2 10.92c3.6-3.19 7.05-7.46 9.84-11.32m-9.84 11.32c3.19-4.37 5.92-7.91 9.84-11.32m-6.82 13.95c4.03-5.64 9.82-10.85 11.81-13.59m-11.81 13.59c3.88-4.69 6.9-8.47 11.81-13.59m-9.45 16.96c6.55-5.22 12.33-13.05 15.09-17.35M26.8 47.341c5.59-5.4 11.91-11.53 15.09-17.35m-12.07 19.98c5.87-9.25 12.85-13.99 17.06-19.62m-17.06 19.62c3.86-5.09 8.54-10.05 17.06-19.62m-14.04 22.24c5.21-9.04 12.16-17.52 19.68-22.64m-19.68 22.64c6.47-7.77 14.32-16.46 19.68-22.64m-16.66 25.27c6.44-6.75 14.26-18.39 21.65-24.91m-21.65 24.91c4.06-4.58 9.43-10.12 21.65-24.91m-19.29 28.29c7.12-9.53 13.9-18.24 24.93-28.68m-24.93 28.68c8.21-11.38 17.62-21.45 24.93-28.68m-21.91 31.3c7.88-10.43 18.79-22.02 26.9-30.94m-26.9 30.94c9.11-10.47 19.61-22.84 26.9-30.94m-23.88 33.56c12.91-13.03 21.25-28.16 29.52-33.96m-29.52 33.96c9.13-10.89 18.91-22.5 29.52-33.96m-26.5 36.59c10.45-13.03 19.03-24.06 31.49-36.23m-31.49 36.23c12-12.67 23.27-26.85 31.49-36.23m-64.56 80.36c7.87-7.49 13.86-14.44 28.21-32.45m-28.21 32.45c10.23-12.98 21.24-25.13 28.21-32.45m7.22-8.3c10.26-10.32 22.3-22.53 34.77-40m-34.77 40c8.42-8.31 14.38-15.72 34.77-40m-64.55 80.36c22.15-25.56 43.5-50.54 69.54-80m-69.54 80c14.68-17.34 28.63-32.88 69.54-80m-64.56 80.36c21.45-23.9 39.47-44.03 70.2-80.76m-70.2 80.76c26.22-30.1 54.14-62.65 70.2-80.76m-64.55 80.36c23.43-24.76 46.05-51.44 69.54-80m-69.54 80c27.97-30.64 54.75-64.15 69.54-80m-64.56 80.36c23.04-27.75 49.58-55.04 70.2-80.75m-70.2 80.75c16.89-18.18 34.72-38.98 70.2-80.75m-64.55 80.36c26.76-32.28 54.72-60.25 69.54-80m-69.54 80c22.67-25.66 43.87-49.9 69.54-80m-64.56 80.36c15.5-20.93 32.66-40.11 70.2-80.75m-70.2 80.75c19.41-20.38 36.41-42.65 70.2-80.75m-64.55 80.35c17.77-20.41 35.59-41.69 69.54-79.99m-69.54 79.99c17.68-19.53 32.39-38.16 69.54-79.99m-64.56 80.35c15.74-18.56 29.82-35.6 69.54-79.99m-69.54 79.99c24.99-28.2 50.62-57.18 69.54-79.99m-63.89 79.6c22.3-25.91 43.44-52.57 69.54-80m-69.54 80c13.95-15.98 29.8-34.47 69.54-80m-64.56 80.36c29.05-33.06 55.23-63.09 69.55-80m-69.55 80c14.12-17.59 30.26-34.15 69.55-80m-64.56 80.36c12.18-15.55 27.33-31.46 70.2-80.75m-70.2 80.75c12.91-15.51 28.17-32.1 70.2-80.75m-64.56 80.36c25.44-28.37 48.86-58.8 69.55-80m-69.55 80c23.68-27.09 48.16-55.99 69.55-80m-64.56 80.36c27.49-32.4 54.68-60.55 70.2-80.76m-70.2 80.76c24.33-26.82 48.52-55.11 70.2-80.76m-64.56 80.36c17.01-16.36 31-34.72 69.55-80m-69.55 80c26.83-30.95 53.48-61.91 69.55-80m-64.56 80.36c21.02-25.19 43.91-51.34 70.2-80.75m-70.2 80.75c18.58-21.96 38.71-45.82 70.2-80.75m-64.56 80.36c21.36-24.81 44.62-50.34 69.55-80m-69.55 80c17.96-18.81 32.9-39.4 69.55-80m-64.56 80.36c21.94-28.93 47.15-56 66.26-76.23m-66.26 76.23c15.86-17.36 30.44-35.08 66.26-76.23m-60.62 75.83c19.35-23.09 43.43-46.77 60.36-69.43m-60.36 69.43c21-24.08 40.77-46.98 60.36-69.43m-55.37 69.79c14.92-16.79 27.75-30.4 55.11-63.39m-55.11 63.39c17.42-19.31 35.21-41 55.11-63.39m-49.47 63c17.44-20.88 38.71-42.67 49.86-57.36m-49.86 57.36c18.08-20.32 37.65-42.25 49.86-57.36m-44.87 57.72c16.2-20.34 34.04-36.85 44.61-51.32m-44.61 51.32c11.73-12.61 23.75-27 44.61-51.32m-38.97 50.92c10.06-13.98 22.66-29.36 39.37-45.28m-39.37 45.28c14.77-14.68 26.68-31.05 39.37-45.28m-34.38 45.64c11.29-13.47 24.54-25.72 34.12-39.24m-34.12 39.24c8.87-11.07 18.56-19.65 34.12-39.24m-28.48 38.85c9.12-13.17 20.42-23.39 28.21-32.45m-28.21 32.45c9.82-10.36 19.49-22.58 28.21-32.45m-23.22 32.81c4.21-6.66 13.89-13.87 23.62-27.17m-23.62 27.17c7.76-9.28 15.11-16.45 23.62-27.17m-17.98 26.77c7.8-7.15 16.01-17.86 17.72-20.37m-17.72 20.37c6.04-7.07 12.18-14.51 17.72-20.37m-12.73 20.73c3.33-4.28 9.13-11.95 13.12-15.09m-13.12 15.09c4.84-5.17 8.59-10.23 13.12-15.09m-7.48 14.7c2.48-2.72 2.54-3.05 7.22-8.3m-7.22 8.3c1.08-1.64 2.94-3.07 7.22-8.3m-2.23 8.66c.93-.8 1.68-1.9 1.97-2.26m-1.97 2.26c.73-.76 1.29-1.44 1.97-2.26"})),(0,t.yg)("path",s({parentName:"g"},{fill:"none",stroke:"#000",d:"M10 30.091c15.03 14.4 29.78 30.29 40 39.67m-40-39.67c10.9 9.56 20.29 19.39 40 39.67m0 0c-6.88 8.34-17.58 17.73-40 40.33m40-40.33c-9.64 9.77-20.22 20.66-40 40.33m0 0c49.91-.78 94.9.44 160 0m-160 0c42 .61 83.56.26 160 0m0 0c-1.68-17.85.66-34.37 0-80m0 80c.41-26.58 1.26-53.11 0-80m0 0c-54.83-.62-110.87 2.22-160 0m160 0c-57.94 1.06-116.12-.21-160 0m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,t.yg)("use",s({parentName:"svg"},{width:"62",height:"51",href:"#image-d1ee05fd41e4fad60a7372901fb1a4d206070a057f9b3a48768235e2c5775230a90d16ba6804ee1fbd79befd1ec8cbbf",transform:"translate(76.112 43.914)"}))))),(0,t.yg)("h2",s({},{id:"examples"}),"Examples"),(0,t.yg)("h3",s({},{id:"email-the-tenzir-version-as-csv-message"}),"Email the Tenzir version as CSV message"),(0,t.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",s({parentName:"code"},{"data-line":""}),(0,t.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"version")),"\n",(0,t.yg)("span",s({parentName:"code"},{"data-line":""}),(0,t.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_csv")),"\n",(0,t.yg)("span",s({parentName:"code"},{"data-line":""}),(0,t.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_email"),(0,t.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),' "Example User <user@example.org>"'))),(0,t.yg)("button",s({parentName:"pre"},{type:"button",data:'version\nwrite_csv\nsave_email "Example User <user@example.org>"',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",s({parentName:"button"},{className:"ready"})),(0,t.yg)("span",s({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("h3",s({},{id:"send-the-email-body-as-mime-part"}),"Send the email body as MIME part"),(0,t.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",s({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",s({parentName:"code"},{"data-line":""}),(0,t.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"version")),"\n",(0,t.yg)("span",s({parentName:"code"},{"data-line":""}),(0,t.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"write_json")),"\n",(0,t.yg)("span",s({parentName:"code"},{"data-line":""}),(0,t.yg)("span",s({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_email"),(0,t.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}}),' "user@example.org, mime=true'))),(0,t.yg)("button",s({parentName:"pre"},{type:"button",data:'version\nwrite_json\nsave_email "user@example.org, mime=true',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",s({parentName:"button"},{className:"ready"})),(0,t.yg)("span",s({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"This results in an email body of this shape:"),(0,t.yg)("pre",null,(0,t.yg)("code",s({parentName:"pre"},{}),'--------------------------s89ecto6c12ILX7893YOEf\nContent-Type: application/json\nContent-Transfer-Encoding: quoted-printable\n\n{\n  "version": "4.10.4+ge0a060567b-dirty",\n  "build": "ge0a060567b-dirty",\n  "major": 4,\n  "minor": 10,\n  "patch": 4\n}\n\n--------------------------s89ecto6c12ILX7893YOEf--\n')))}j.isMDXComponent=!0}}]);