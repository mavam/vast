"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7002],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=d(r),s=a,f=y["".concat(p,".").concat(s)]||y[s]||m[s]||i;return r?n.createElement(f,l(l({ref:t},g),{},{components:r})):n.createElement(f,l({ref:t},g))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},49535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>C,frontMatter:()=>f,metadata:()=>N,toc:()=>h});var n=r(15680),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&g(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&g(e,r,t[r]);return e},m=(e,t)=>i(e,l(t)),s=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{source:!0}}},c="files",N={unversionedId:"operators/files",id:"version-v4.20/operators/files",title:"files",description:"Shows file information for a given directory.",source:"@site/versioned_docs/version-v4.20/operators/files.md",sourceDirName:"operators",slug:"/operators/files",permalink:"/v4.20/operators/files",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/files.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"fields",permalink:"/v4.20/operators/fields"},next:{title:"flatten",permalink:"/v4.20/operators/flatten"}},u={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;directory&gt;</code>",id:"directory",level:3},{value:"<code>-r|--recurse-directories</code>",id:"-r--recurse-directories",level:3},{value:"<code>--follow-directory-symlink</code>",id:"--follow-directory-symlink",level:3},{value:"<code>--skip-permission-denied</code>",id:"--skip-permission-denied",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.file</code>",id:"tenzirfile",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},v="wrapper";function C(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.yg)(v,m(y(y({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",y({},{id:"files"}),"files"),(0,n.yg)("p",null,"Shows file information for a given directory."),(0,n.yg)("h2",y({},{id:"synopsis"}),"Synopsis"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),"files [<directory>] [-r|--recurse-directories]\n                    [--follow-directory-symlink]\n                    [--skip-permission-denied]\n")),(0,n.yg)("h2",y({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"files")," operator shows file information for all files in the given\ndirectory."),(0,n.yg)("h3",y({},{id:"directory"}),(0,n.yg)("inlineCode",{parentName:"h3"},"<directory>")),(0,n.yg)("p",null,"The directory to list files in."),(0,n.yg)("p",null,"Defaults to the current working directory."),(0,n.yg)("h3",y({},{id:"-r--recurse-directories"}),(0,n.yg)("inlineCode",{parentName:"h3"},"-r|--recurse-directories")),(0,n.yg)("p",null,"Recursively list files in subdirectories."),(0,n.yg)("h3",y({},{id:"--follow-directory-symlink"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--follow-directory-symlink")),(0,n.yg)("p",null,"Follow rather than skip directory symlinks."),(0,n.yg)("h3",y({},{id:"--skip-permission-denied"}),(0,n.yg)("inlineCode",{parentName:"h3"},"--skip-permission-denied")),(0,n.yg)("p",null,"Skip directories that would otherwise result in permission denied errors."),(0,n.yg)("h2",y({},{id:"schemas"}),"Schemas"),(0,n.yg)("p",null,"Tenzir emits file information with the following schema."),(0,n.yg)("h3",y({},{id:"tenzirfile"}),(0,n.yg)("inlineCode",{parentName:"h3"},"tenzir.file")),(0,n.yg)("p",null,"Contains detailed information about the file."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"path")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file path.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"type")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The type of the file (see below).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"permissions")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The permissions of the file (see below).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"owner")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file's owner.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"group")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file's group.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"file_size")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file size in bytes.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"hard_link_count")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"uint64")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The number of hard links to the file.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"last_write_time")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"time")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The time of the last write to the file.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"type")," field can have one of the following values:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Value"),(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"regular")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file is a regular file.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"directory")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file is a directory.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"symlink")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file is a symbolic link.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"block")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file is a block device.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"character")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file is a character device.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"fifo")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file is a named IPC pipe.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"socket")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file is a named IPC socket.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"not_found")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file does not exist.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"unknown")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file has an unknown type.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"permissions")," record contains the following fields:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"owner")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file permissions for the owner.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"group")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file permissions for the group.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"others")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"record")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"The file permissions for others.")))),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"owner"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"group"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"others")," records contain the following fields:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Field"),(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Type"),(0,n.yg)("th",y({parentName:"tr"},{align:"left"}),"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"read")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"Whether the file is readable.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"write")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"Whether the file is writeable.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"execute")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),(0,n.yg)("inlineCode",{parentName:"td"},"bool")),(0,n.yg)("td",y({parentName:"tr"},{align:"left"}),"Whether the file is executable.")))),(0,n.yg)("h2",y({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Compute the total file size of the current directory:"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),"files -r\n| summarize total_size=sum(file_size)\n")),(0,n.yg)("p",null,"Find all named pipes in ",(0,n.yg)("inlineCode",{parentName:"p"},"/tmp"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",y({parentName:"pre"},{}),'files -r --skip-permission-denied /tmp\n| where type == "symlink"\n')))}C.isMDXComponent=!0}}]);