"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72348],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>f});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),d=g(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return a?n.createElement(f,i(i({ref:t},y),{},{components:a})):n.createElement(f,i({ref:t},y))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>N,default:()=>F,frontMatter:()=>f,metadata:()=>c,toc:()=>h});var n=a(15680),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&y(e,a,t[a]);if(o)for(var a of o(t))g.call(t,a)&&y(e,a,t[a]);return e},s=(e,t)=>l(e,i(t)),m=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&g.call(e,n)&&(a[n]=e[n]);return a};const f={},N="files",c={unversionedId:"tql2/operators/files",id:"tql2/operators/files",title:"files",description:"Shows file information for a given directory.",source:"@site/docs/tql2/operators/files.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/files",permalink:"/next/tql2/operators/files",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/tql2/operators/files.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"fields",permalink:"/next/tql2/operators/fields"},next:{title:"fluentbit",permalink:"/next/tql2/operators/fluentbit"}},u={},h=[{value:"Description",id:"description",level:2},{value:"<code>dir: str (optional)</code>",id:"dir-str-optional",level:3},{value:"<code>recurse = bool (optional)</code>",id:"recurse--bool-optional",level:3},{value:"<code>follow_symlinks = bool (optional)</code>",id:"follow_symlinks--bool-optional",level:3},{value:"<code>skip_permission_denied = bool (optional)</code>",id:"skip_permission_denied--bool-optional",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.file</code>",id:"tenzirfile",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},C="wrapper";function F(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.yg)(C,s(d(d({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",d({},{id:"files"}),"files"),(0,n.yg)("p",null,"Shows file information for a given directory."),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"files"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," [dir"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, recurse"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, follow_symlinks"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool, skip_permission_denied"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,n.yg)("h2",d({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"files")," operator shows file information for all files in the given\ndirectory."),(0,n.yg)("h3",d({},{id:"dir-str-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"dir: str (optional)")),(0,n.yg)("p",null,"The directory to list files in."),(0,n.yg)("p",null,"Defaults to the current working directory."),(0,n.yg)("h3",d({},{id:"recurse--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"recurse = bool (optional)")),(0,n.yg)("p",null,"Recursively list files in subdirectories."),(0,n.yg)("h3",d({},{id:"follow_symlinks--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"follow_symlinks = bool (optional)")),(0,n.yg)("p",null,"Follow directory symlinks."),(0,n.yg)("h3",d({},{id:"skip_permission_denied--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"skip_permission_denied = bool (optional)")),(0,n.yg)("p",null,"Skip directories that would otherwise result in permission denied errors."),(0,n.yg)("h2",d({},{id:"schemas"}),"Schemas"),(0,n.yg)("p",null,"Tenzir emits file information with the following schema."),(0,n.yg)("h3",d({},{id:"tenzirfile"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tenzir.file")),(0,n.yg)("p",null,"Contains detailed information about the file."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"path")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file path.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"type")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The type of the file (see below).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"permissions")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The permissions of the file (see below).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"owner")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file's owner.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"group")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file's group.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"file_size")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file size in bytes.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"hard_link_count")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The number of hard links to the file.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"last_write_time")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"time")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The time of the last write to the file.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"type")," field can have one of the following values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Value"),(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"regular")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file is a regular file.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"directory")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file is a directory.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"symlink")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file is a symbolic link.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"block")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file is a block device.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"character")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file is a character device.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"fifo")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file is a named IPC pipe.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"socket")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file is a named IPC socket.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"not_found")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file does not exist.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"unknown")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file has an unknown type.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"permissions")," record contains the following fields:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"owner")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file permissions for the owner.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"group")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file permissions for the group.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"others")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"The file permissions for others.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"owner"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"group"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"others")," records contain the following fields:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"read")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"Whether the file is readable.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"write")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"Whether the file is writeable.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"execute")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",d({parentName:"tr"},{align:"left"}),"Whether the file is executable.")))),(0,n.yg)("h2",d({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Compute the total file size of the current directory:"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"files"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," recurse"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"summarize"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," total_size"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"sum"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),"(file_size)"))))),(0,n.yg)("p",null,"Find all named pipes in ",(0,n.yg)("inlineCode",{parentName:"p"},"/tmp"),":"),(0,n.yg)("figure",d({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",d({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",d({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"files"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "/tmp"'),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", recurse"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"true"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}}),", skip_permission_denied"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,n.yg)("span",d({parentName:"code"},{"data-line":""}),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#E6EDF3"}})," type "),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#FF7B72"}}),"=="),(0,n.yg)("span",d({parentName:"span"},{style:{color:"#A5D6FF"}}),' "fifo"'))))))}F.isMDXComponent=!0}}]);