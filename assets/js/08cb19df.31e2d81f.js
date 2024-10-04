"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13896],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),g=n,y=m["".concat(s,".").concat(g)]||m[g]||c[g]||l;return r?a.createElement(y,i(i({ref:t},d),{},{components:r})):a.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},50664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>w,frontMatter:()=>y,metadata:()=>v,toc:()=>h});var a=r(15680),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&d(e,r,t[r]);return e},c=(e,t)=>l(e,i(t)),g=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const y={sidebar_custom_props:{format:{parser:!0,printer:!0}}},u="xsv",v={unversionedId:"formats/xsv",id:"version-v4.20/formats/xsv",title:"xsv",description:"Reads and writes lines with separated values.",source:"@site/versioned_docs/version-v4.20/formats/xsv.md",sourceDirName:"formats",slug:"/formats/xsv",permalink:"/v4.20/formats/xsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.20/formats/xsv.md",tags:[],version:"v4.20",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"tsv",permalink:"/v4.20/formats/tsv"},next:{title:"yaml",permalink:"/v4.20/formats/yaml"}},f={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field-sep&gt;</code>",id:"field-sep",level:3},{value:"<code>&lt;list-sep&gt;</code>",id:"list-sep",level:3},{value:"<code>&lt;null-value&gt;</code>",id:"null-value",level:3},{value:"<code>--allow-comments</code> (Parser)",id:"--allow-comments-parser",level:3},{value:"`--auto-expand (Parser)",id:"--auto-expand-parser",level:3},{value:"<code>--header &lt;header&gt;</code> (Parser)",id:"--header-header-parser",level:3},{value:"<code>--no-header</code> (Printer)",id:"--no-header-printer",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},N="wrapper";function w(e){var t=e,{components:r}=t,n=g(t,["components"]);return(0,a.yg)(N,c(m(m({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",m({},{id:"xsv"}),"xsv"),(0,a.yg)("p",null,"Reads and writes lines with separated values."),(0,a.yg)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,a.yg)("p",null,"Parser:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"csv [--allow-comments] [--auto-expand] [--header <header>]\nssv [--allow-comments] [--auto-expand] [--header <header>]\ntsv [--allow-comments] [--auto-expand] [--header <header>]\nxsv <field-sep> <list-sep> <null-value> [--allow-comments] [--auto-expand] [--header <header>]\n")),(0,a.yg)("p",null,"Printer:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"csv [--no-header]\nssv [--no-header]\ntsv [--no-header]\nxsv <field-sep> <list-sep> <null-value> [--no-header]\n")),(0,a.yg)("h2",m({},{id:"description"}),"Description"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"xsv")," format is a generalization of ",(0,a.yg)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Comma-separated_values"}),"comma-separated values (CSV)")," data\nin tabular form with a more flexible separator specification supporting tabs,\ncommas, and spaces. The first line in an XSV file is the header that describes\nthe field names. The remaining lines contain concrete values. One line\ncorresponds to one event, minus the header."),(0,a.yg)("p",null,"The following table juxtaposes the available XSV configurations:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",m({parentName:"tr"},{align:null}),"Format"),(0,a.yg)("th",m({parentName:"tr"},{align:"center"}),"Field Separator"),(0,a.yg)("th",m({parentName:"tr"},{align:"center"}),"List Separator"),(0,a.yg)("th",m({parentName:"tr"},{align:"center"}),"Null Value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",m({parentName:"tr"},{align:null}),(0,a.yg)("a",m({parentName:"td"},{href:"/v4.20/formats/csv"}),(0,a.yg)("inlineCode",{parentName:"a"},"csv"))),(0,a.yg)("td",m({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},",")),(0,a.yg)("td",m({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},";")),(0,a.yg)("td",m({parentName:"tr"},{align:"center"}),"empty")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",m({parentName:"tr"},{align:null}),(0,a.yg)("a",m({parentName:"td"},{href:"/v4.20/formats/ssv"}),(0,a.yg)("inlineCode",{parentName:"a"},"ssv"))),(0,a.yg)("td",m({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},"<space>")),(0,a.yg)("td",m({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},",")),(0,a.yg)("td",m({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},"-"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",m({parentName:"tr"},{align:null}),(0,a.yg)("a",m({parentName:"td"},{href:"/v4.20/formats/tsv"}),(0,a.yg)("inlineCode",{parentName:"a"},"tsv"))),(0,a.yg)("td",m({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},"\\t")),(0,a.yg)("td",m({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},",")),(0,a.yg)("td",m({parentName:"tr"},{align:"center"}),(0,a.yg)("inlineCode",{parentName:"td"},"-"))))),(0,a.yg)("p",null,"Like the ",(0,a.yg)("a",m({parentName:"p"},{href:"/v4.20/formats/json"}),(0,a.yg)("inlineCode",{parentName:"a"},"json"))," parser, the XSV parser infers types automatically.\nConsider this piece of CSV data:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{className:"language-csv"}),"ip,sn,str,rec.a,rec.b\n1.2.3.4,10.0.0.0/8,foo bar,-4.2,/foo|bar/\n")),(0,a.yg)("p",null,"Here's the schema that the parser infers from the above data:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{className:"language-yaml",metastring:"title=test.schema",title:"test.schema"}),"record:\n  - ip: ip\n  - sn: subnet\n  - str: string\n  - record:\n    - a: double\n    - b: pattern\n")),(0,a.yg)("p",null,"Note that nested records have dot-separated field names."),(0,a.yg)("h3",m({},{id:"field-sep"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<field-sep>")),(0,a.yg)("p",null,"Specifies the string that separates fields."),(0,a.yg)("h3",m({},{id:"list-sep"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<list-sep>")),(0,a.yg)("p",null,"Specifies the string that separates list elements ",(0,a.yg)("em",{parentName:"p"},"within")," a field."),(0,a.yg)("h3",m({},{id:"null-value"}),(0,a.yg)("inlineCode",{parentName:"h3"},"<null-value>")),(0,a.yg)("p",null,"Specifies the string that denotes an absent value."),(0,a.yg)("h3",m({},{id:"--allow-comments-parser"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--allow-comments")," (Parser)"),(0,a.yg)("p",null,"Treat lines beginning with ",(0,a.yg)("inlineCode",{parentName:"p"},"'#'")," as comments."),(0,a.yg)("h3",m({},{id:"--auto-expand-parser"}),"`--auto-expand (Parser)"),(0,a.yg)("p",null,"Automatically add fields to the schema when encountering events with too many\nvalues instead of dropping the excess values."),(0,a.yg)("h3",m({},{id:"--header-header-parser"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--header <header>")," (Parser)"),(0,a.yg)("p",null,"Use the manually provided header line instead of treating the first line as the\nheader."),(0,a.yg)("h3",m({},{id:"--no-header-printer"}),(0,a.yg)("inlineCode",{parentName:"h3"},"--no-header")," (Printer)"),(0,a.yg)("p",null,"Do not print a header line containing the field names."),(0,a.yg)("h2",m({},{id:"examples"}),"Examples"),(0,a.yg)("p",null,"Read CSV from stdin:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"from stdin read csv\n")),(0,a.yg)("p",null,"Write a multi-schema stream of events to a directory in TSV format, with one\nfile per unique schema:"),(0,a.yg)("pre",null,(0,a.yg)("code",m({parentName:"pre"},{}),"to directory /tmp/result write tsv\n")))}w.isMDXComponent=!0}}]);