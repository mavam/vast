"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16037],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,m=u["".concat(c,".").concat(y)]||u[y]||s[y]||a;return t?r.createElement(m,i(i({ref:n},g),{},{components:t})):r.createElement(m,i({ref:n},g))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},12687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>N,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var r=t(15680),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&g(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&g(e,t,n[t]);return e},s=(e,n)=>a(e,i(n)),y=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={sidebar_position:4},d="Changelog",f={unversionedId:"contribution/changelog",id:"version-v4.24/contribution/changelog",title:"Changelog",description:"We maintain automatically generated changelog that contains",source:"@site/versioned_docs/version-v4.24/contribution/changelog.md",sourceDirName:"contribution",slug:"/contribution/changelog",permalink:"/contribution/changelog",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/contribution/changelog.md",tags:[],version:"v4.24",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Build Environment",permalink:"/contribution/build-environment"},next:{title:"Documentation",permalink:"/contribution/documentation"}},h={},b=[],v={toc:b},O="wrapper";function N(e){var n=e,{components:t}=n,o=y(n,["components"]);return(0,r.yg)(O,s(u(u({},v),o),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"changelog"}),"Changelog"),(0,r.yg)("p",null,"We maintain automatically generated ",(0,r.yg)("a",u({parentName:"p"},{href:"/changelog"}),"changelog")," that contains\nnoteworthy ",(0,r.yg)("em",{parentName:"p"},"user-facing")," changes."),(0,r.yg)("p",null,"The procedure for adding a changelog entry looks as follows."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Open your pull request with your proposed changes"),(0,r.yg)("li",{parentName:"ol"},"Go to the ",(0,r.yg)("a",u({parentName:"li"},{href:"https://github.com/tenzir/tenzir/tree/main/changelog"}),(0,r.yg)("inlineCode",{parentName:"a"},"changelog")),"\ndirectory in the top-level repository directory and navigate to the\n",(0,r.yg)("inlineCode",{parentName:"li"},"next")," sub-directory."),(0,r.yg)("li",{parentName:"ol"},"Choose a category for your changes and go to the corresponding sub-directory:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Feature")," \u2192 ",(0,r.yg)("inlineCode",{parentName:"li"},"features")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Bug Fix")," \u2192 ",(0,r.yg)("inlineCode",{parentName:"li"},"bug-fixes")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Change")," \u2192 ",(0,r.yg)("inlineCode",{parentName:"li"},"changes")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Breaking Change")," \u2192 ",(0,r.yg)("inlineCode",{parentName:"li"},"breaking-changes")))),(0,r.yg)("li",{parentName:"ol"},"Add a file with the following filename structure: ",(0,r.yg)("inlineCode",{parentName:"li"},"X1[-X2-...-Xn][--Y].md"),".\nwhere ",(0,r.yg)("inlineCode",{parentName:"li"},"X")," is either a PR number in the tenzir/tenzir repository or a GitHub\naccount name. We only include account names for external contributions\noutside from the Tenzir core team. Everything after the two dashes ",(0,r.yg)("inlineCode",{parentName:"li"},"--")," is an\noptional description to clarify what the change was about.")),(0,r.yg)("p",null,"Every installation and build of Tenzir contains the amalgamated CHANGELOG.md\nfile. To view that directly, open ",(0,r.yg)("inlineCode",{parentName:"p"},"path/to/build/CHANGELOG.md")," for your Tenzir\nbuild."))}N.isMDXComponent=!0}}]);