"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13500],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(t),y=i,m=s["".concat(p,".").concat(y)]||s[y]||u[y]||a;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},24333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>g,default:()=>I,frontMatter:()=>m,metadata:()=>b,toc:()=>f});var r=t(15680),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&d(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&d(e,t,n[t]);return e},u=(e,n)=>a(e,o(n)),y=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const m={sidebar_position:3},g="Build Environment",b={unversionedId:"contribution/build-environment",id:"version-v4.28/contribution/build-environment",title:"Build Environment",description:"Use Nix as Reproducible Development Environment",source:"@site/versioned_docs/version-v4.28/contribution/build-environment.md",sourceDirName:"contribution",slug:"/contribution/build-environment",permalink:"/v4.28/contribution/build-environment",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/contribution/build-environment.md",tags:[],version:"v4.28",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Coding Style",permalink:"/v4.28/contribution/coding-style"},next:{title:"Changelog",permalink:"/v4.28/contribution/changelog"}},v={},f=[{value:"Use Nix as Reproducible Development Environment",id:"use-nix-as-reproducible-development-environment",level:2},{value:"Static Builds",id:"static-builds",level:3}],h={toc:f},N="wrapper";function I(e){var n=e,{components:t}=n,i=y(n,["components"]);return(0,r.yg)(N,u(s(s({},h),i),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",s({},{id:"build-environment"}),"Build Environment"),(0,r.yg)("h2",s({},{id:"use-nix-as-reproducible-development-environment"}),"Use Nix as Reproducible Development Environment"),(0,r.yg)("p",null,"The dependencies for a dynamic build can be fetched by running ",(0,r.yg)("inlineCode",{parentName:"p"},"nix develop"),"\nfrom the topmost directory in the source tree."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",s({parentName:"p"},{href:"https://direnv.net/"}),"direnv")," tool is able to automate this process, create an ",(0,r.yg)("inlineCode",{parentName:"p"},".envrc"),"\nwith the content:"),(0,r.yg)("pre",null,(0,r.yg)("code",s({parentName:"pre"},{}),"use flake\n")),(0,r.yg)("p",null,"and it will automatically add the dependencies to your shell environment when\nyou move into the source directory."),(0,r.yg)("p",null,"If you want to silence the messages about binary caches you can use a variation\nof ",(0,r.yg)("inlineCode",{parentName:"p"},".envrc")," that invokes ",(0,r.yg)("inlineCode",{parentName:"p"},"nix")," with a lower verbosity setting:"),(0,r.yg)("pre",null,(0,r.yg)("code",s({parentName:"pre"},{}),'use_flake2() {\n  watch_file flake.nix\n  watch_file flake.lock\n  mkdir -p "$(direnv_layout_dir)"\n  eval "$(nix --quiet --quiet print-dev-env --profile "$(direnv_layout_dir)/flake-profile" "$@")"\n}\n\nuse_flake2\n')),(0,r.yg)("p",null,"The Tenzir repository comes with a set of CMake configure and build presets that\ncan be used in this environment:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nix-clang-debug")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nix-clang-redeb")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nix-clang-release")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nix-gcc-debug")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nix-gcc-redeb")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nix-gcc-release"))),(0,r.yg)("admonition",s({},{type:"note"}),(0,r.yg)("p",{parentName:"admonition"},"This build environment is currently only tested on Linux.")),(0,r.yg)("h3",s({},{id:"static-builds"}),"Static Builds"),(0,r.yg)("p",null,"Static binaries require a that the dependencies were built in static mode as\nwell. That means we need to use a different environment, you can enter it with"),(0,r.yg)("figure",s({},{"data-rehype-pretty-code-figure":""}),(0,r.yg)("pre",s({parentName:"figure"},{tabIndex:0,"data-language":"sh","data-theme":"github-dark-default"}),(0,r.yg)("code",s({parentName:"pre"},{"data-language":"sh","data-theme":"github-dark-default",style:{display:"grid"}}),(0,r.yg)("span",s({parentName:"code"},{"data-line":""}),(0,r.yg)("span",s({parentName:"span"},{style:{color:"#FFA657"}}),"nix"),(0,r.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}})," develop"),(0,r.yg)("span",s({parentName:"span"},{style:{color:"#A5D6FF"}})," .#tenzir-static"))),(0,r.yg)("button",s({parentName:"pre"},{type:"button",data:"nix develop .#tenzir-static",title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,r.yg)("span",s({parentName:"button"},{className:"ready"})),(0,r.yg)("span",s({parentName:"button"},{className:"success"}))),(0,r.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,r.yg)("p",null,"The CMake presets for that mode are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nix-gcc-static-debug")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nix-gcc-static-redeb")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"nix-gcc-static-release"))))}I.isMDXComponent=!0}}]);