"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87964],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>h});var r=n(15680),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,a(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_position:0},y="Code of Conduct",g={unversionedId:"contribution/code-of-conduct",id:"version-v4.28/contribution/code-of-conduct",title:"Code of Conduct",description:"Our Pledge",source:"@site/versioned_docs/version-v4.28/contribution/code-of-conduct.md",sourceDirName:"contribution",slug:"/contribution/code-of-conduct",permalink:"/v4.28/contribution/code-of-conduct",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/contribution/code-of-conduct.md",tags:[],version:"v4.28",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Contribute",permalink:"/v4.28/contribution"},next:{title:"Git and GitHub Workflow",permalink:"/v4.28/contribution/workflow"}},b={},h=[{value:"Our Pledge",id:"our-pledge",level:2},{value:"Our Standards",id:"our-standards",level:2},{value:"Our Responsibilities",id:"our-responsibilities",level:2},{value:"Scope",id:"scope",level:2},{value:"Enforcement",id:"enforcement",level:2},{value:"Attribution",id:"attribution",level:2}],v={toc:h},w="wrapper";function O(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.yg)(w,d(u(u({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"code-of-conduct"}),"Code of Conduct"),(0,r.yg)("h2",u({},{id:"our-pledge"}),"Our Pledge"),(0,r.yg)("p",null,"In the interest of fostering an open and welcoming environment, we as\ncontributors and maintainers pledge to make participation in our project and\nour community a harassment-free experience for everyone, regardless of age,\nbody size, disability, ethnicity, sex characteristics, gender identity and\nexpression, level of experience, education, socio-economic status, nationality,\npersonal appearance, race, religion, or sexual identity and orientation."),(0,r.yg)("h2",u({},{id:"our-standards"}),"Our Standards"),(0,r.yg)("p",null,"Examples of behavior that contributes to creating a positive environment\ninclude:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Using welcoming and inclusive language"),(0,r.yg)("li",{parentName:"ul"},"Being respectful of differing viewpoints and experiences"),(0,r.yg)("li",{parentName:"ul"},"Gracefully accepting constructive criticism"),(0,r.yg)("li",{parentName:"ul"},"Focusing on what is best for the community"),(0,r.yg)("li",{parentName:"ul"},"Showing empathy towards other community members")),(0,r.yg)("p",null,"Examples of unacceptable behavior by participants include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The use of sexualized language or imagery and unwelcome sexual attention or\nadvances"),(0,r.yg)("li",{parentName:"ul"},"Trolling, insulting/derogatory comments, and personal or political attacks"),(0,r.yg)("li",{parentName:"ul"},"Public or private harassment"),(0,r.yg)("li",{parentName:"ul"},"Publishing others' private information, such as a physical or electronic\naddress, without explicit permission"),(0,r.yg)("li",{parentName:"ul"},"Other conduct which could reasonably be considered inappropriate in a\nprofessional setting")),(0,r.yg)("h2",u({},{id:"our-responsibilities"}),"Our Responsibilities"),(0,r.yg)("p",null,"Project maintainers are responsible for clarifying the standards of acceptable\nbehavior and are expected to take appropriate and fair corrective action in\nresponse to any instances of unacceptable behavior."),(0,r.yg)("p",null,"Project maintainers have the right and responsibility to remove, edit, or\nreject comments, commits, code, wiki edits, issues, and other contributions\nthat are not aligned to this Code of Conduct, or to ban temporarily or\npermanently any contributor for other behaviors that they deem inappropriate,\nthreatening, offensive, or harmful."),(0,r.yg)("h2",u({},{id:"scope"}),"Scope"),(0,r.yg)("p",null,"This Code of Conduct applies within all project spaces, and it also applies\nwhen an individual is representing the project or its community in public\nspaces.  Examples of representing a project or community include using an\nofficial project e-mail address, posting via an official social media account,\nor acting as an appointed representative at an online or offline event.\nRepresentation of a project may be further defined and clarified by project\nmaintainers."),(0,r.yg)("h2",u({},{id:"enforcement"}),"Enforcement"),(0,r.yg)("p",null,"Instances of abusive, harassing, or otherwise unacceptable behavior may be\nreported by ",(0,r.yg)("a",u({parentName:"p"},{href:"https://docs.tenzir.com/discord"}),"contacting the project team"),". All\ncomplaints will be reviewed and investigated and will result in a response that\nis deemed necessary and appropriate to the circumstances. The project team is\nobligated to maintain confidentiality with regard to the reporter of an\nincident.  Further details of specific enforcement policies may be posted\nseparately."),(0,r.yg)("p",null,"Project maintainers who do not follow or enforce the Code of Conduct in good\nfaith may face temporary or permanent repercussions as determined by other\nmembers of the project's leadership."),(0,r.yg)("h2",u({},{id:"attribution"}),"Attribution"),(0,r.yg)("p",null,"This Code of Conduct is adapted from the ",(0,r.yg)("a",u({parentName:"p"},{href:"https://www.contributor-covenant.org"}),"Contributor Covenant"),",\nversion 1.4, available at\n",(0,r.yg)("a",u({parentName:"p"},{href:"https://www.contributor-covenant.org/version/1/4/code-of-conduct.html"}),"https://www.contributor-covenant.org/version/1/4/code-of-conduct.html"),"."),(0,r.yg)("p",null,"For answers to common questions about this code of conduct, see\n",(0,r.yg)("a",u({parentName:"p"},{href:"https://www.contributor-covenant.org/faq"}),"https://www.contributor-covenant.org/faq"),"."))}O.isMDXComponent=!0}}]);