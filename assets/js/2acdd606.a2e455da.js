"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19005],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),u=o,m=c["".concat(l,".").concat(u)]||c[u]||y[u]||i;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var r=t(15680),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(p)for(var t of p(n))s.call(n,t)&&d(e,t,n[t]);return e},y=(e,n)=>i(e,a(n)),u=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&p)for(var r of p(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const m={sidebar_custom_props:{operator:{transformation:!0}}},h="python",f={unversionedId:"operators/python",id:"version-v4.20/operators/python",title:"python",description:"Executes Python code against each event of the input.",source:"@site/versioned_docs/version-v4.20/operators/python.md",sourceDirName:"operators",slug:"/operators/python",permalink:"/v4.20/operators/python",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/operators/python.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"put",permalink:"/v4.20/operators/put"},next:{title:"rare",permalink:"/v4.20/operators/rare"}},g={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--requirements &lt;string&gt;</code>",id:"--requirements-string",level:3},{value:"<code>&lt;code&gt;</code>",id:"code",level:3},{value:"<code>--file &lt;path&gt;</code>",id:"--file-path",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},N="wrapper";function O(e){var n=e,{components:t}=n,o=u(n,["components"]);return(0,r.yg)(N,y(c(c({},b),o),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",c({},{id:"python"}),"python"),(0,r.yg)("p",null,"Executes Python code against each event of the input."),(0,r.yg)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),"python [--requirements <string>] <code>\npython [--requirements <string>] --file <path>\n")),(0,r.yg)("admonition",c({},{title:"Requirements",type:"info"}),(0,r.yg)("p",{parentName:"admonition"},"A Python 3 (>=3.10) interpreter must be present in the ",(0,r.yg)("inlineCode",{parentName:"p"},"PATH")," environment\nvariable of the ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir-node")," process.")),(0,r.yg)("h2",c({},{id:"description"}),"Description"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"python")," operator executes user-provided Python code against each event of\nthe input."),(0,r.yg)("p",null,"By default, the Tenzir node executing the pipeline creates a virtual environment\ninto which the ",(0,r.yg)("inlineCode",{parentName:"p"},"tenzir")," Python package is installed. This behavior can be turned\noff in the node configuration using the ",(0,r.yg)("inlineCode",{parentName:"p"},"plugin.python.create-venvs")," boolean\noption."),(0,r.yg)("admonition",c({},{title:"Performance",type:"note"}),(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"python")," operator implementation applies the provided Python code to each\ninput row one bw one. We use\n",(0,r.yg)("a",c({parentName:"p"},{href:"https://arrow.apache.org/docs/python/index.html"}),"PyArrow")," to convert the input\nvalues to native Python data types and back to the Tenzir data model after the\ntransformation.")),(0,r.yg)("h3",c({},{id:"--requirements-string"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--requirements <string>")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"--requirements")," flag can be used to pass additional package dependencies in\nthe pip format. When it is used, the argument is passed on to ",(0,r.yg)("inlineCode",{parentName:"p"},"pip install")," in a\ndedicated virtual environment."),(0,r.yg)("p",null,"The string is passed verbatim to ",(0,r.yg)("inlineCode",{parentName:"p"},"pip install"),". To add multiple dependencies,\nseparate them with a space: ",(0,r.yg)("inlineCode",{parentName:"p"},'--requirements "foo bar"'),"."),(0,r.yg)("h3",c({},{id:"code"}),(0,r.yg)("inlineCode",{parentName:"h3"},"<code>")),(0,r.yg)("p",null,"The provided Python code describes an event-for-event transformation, i.e., it\nis executed once for each input event and produces exactly output event."),(0,r.yg)("p",null,"An implicitly defined ",(0,r.yg)("inlineCode",{parentName:"p"},"self")," variable represents the event. Modify it to alter\nthe output of the operator. Fields of the event can be accessed with the dot\nnotation. For example, if the input event contains fields ",(0,r.yg)("inlineCode",{parentName:"p"},"a")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"b")," then the\nPython code can access and modify them using ",(0,r.yg)("inlineCode",{parentName:"p"},"self.a")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"self.b"),". Similarly,\nnew fields are added by assigning to ",(0,r.yg)("inlineCode",{parentName:"p"},"self.fieldname")," and existing fields can be\nremoved by deleting them from ",(0,r.yg)("inlineCode",{parentName:"p"},"self"),". When new fields are added, it is required\nthat the new field has the same type for every row of the event."),(0,r.yg)("h3",c({},{id:"--file-path"}),(0,r.yg)("inlineCode",{parentName:"h3"},"--file <path>")),(0,r.yg)("p",null,"Instead of providing the code inline, the ",(0,r.yg)("inlineCode",{parentName:"p"},"--file")," option allows for passing\na path to a file containing the code the operator executes per event."),(0,r.yg)("h2",c({},{id:"examples"}),"Examples"),(0,r.yg)("p",null,"Insert or modify the field ",(0,r.yg)("inlineCode",{parentName:"p"},"x")," and set it to ",(0,r.yg)("inlineCode",{parentName:"p"},'"hello, world"'),":"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),"python 'self.x = \"hello, world\"'\n")),(0,r.yg)("p",null,"Clear the contents of ",(0,r.yg)("inlineCode",{parentName:"p"},"self")," to remove the implicit input values from the\noutput:"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),"python '\n  self.clear()\n  self.x = 23\n'\n")),(0,r.yg)("p",null,"Define a new field ",(0,r.yg)("inlineCode",{parentName:"p"},"x")," as the square root of the field ",(0,r.yg)("inlineCode",{parentName:"p"},"y"),", and remove ",(0,r.yg)("inlineCode",{parentName:"p"},"y")," from\nthe output:"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),"python '\n  import math\n  self.x = math.sqrt(self.y)\n  del self.y\n'\n")),(0,r.yg)("p",null,"Make use of third party packages:"),(0,r.yg)("pre",null,(0,r.yg)("code",c({parentName:"pre"},{}),'python --requirements "requests=^2.30" \'\n  import requests\n  requests.post("http://imaginary.api/receive", data=self)\n\'\n')))}O.isMDXComponent=!0}}]);