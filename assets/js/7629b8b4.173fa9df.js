"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79115],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,g=c["".concat(i,".").concat(u)]||c[u]||y[u]||o;return t?n.createElement(g,l(l({ref:a},d),{},{components:t})):n.createElement(g,l({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78935:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>m,default:()=>O,frontMatter:()=>g,metadata:()=>f,toc:()=>h});var n=t(15680),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&d(e,t,a[t]);if(p)for(var t of p(a))s.call(a,t)&&d(e,t,a[t]);return e},y=(e,a)=>o(e,l(a)),u=(e,a)=>{var t={};for(var n in e)i.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))a.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const g={},m="load_s3",f={unversionedId:"tql2/operators/load_s3",id:"version-v4.24/tql2/operators/load_s3",title:"load_s3",description:"Loads from an Amazon S3 object.",source:"@site/versioned_docs/version-v4.24/tql2/operators/load_s3.md",sourceDirName:"tql2/operators",slug:"/tql2/operators/load_s3",permalink:"/tql2/operators/load_s3",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.24/tql2/operators/load_s3.md",tags:[],version:"v4.24",frontMatter:{},sidebar:"docsSidebar",previous:{title:"load_nic",permalink:"/tql2/operators/load_nic"},next:{title:"load_sqs",permalink:"/tql2/operators/load_sqs"}},b={},h=[{value:"Description",id:"description",level:2},{value:"<code>uri: str</code>",id:"uri-str",level:3},{value:"<code>anonymous = bool (optional)</code>",id:"anonymous--bool-optional",level:3},{value:"Examples",id:"examples",level:2}],N={toc:h},v="wrapper";function O(e){var a=e,{components:t}=a,r=u(a,["components"]);return(0,n.yg)(v,y(c(c({},N),r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",c({},{id:"load_s3"}),"load_s3"),(0,n.yg)("p",null,"Loads from an Amazon S3 object."),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_s3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}})," uri"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"str, [anonymous"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"bool]"))))),(0,n.yg)("h2",c({},{id:"description"}),"Description"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"load_s3")," operator connects to an S3 bucket to acquire raw bytes from an S3\nobject."),(0,n.yg)("p",null,"The connector tries to retrieve the appropriate credentials using AWS's\n",(0,n.yg)("a",c({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"}),"default credentials provider\nchain"),"."),(0,n.yg)("admonition",c({},{type:"info"}),(0,n.yg)("p",{parentName:"admonition"},"Make sure to configure AWS credentials for the same user account that runs\n",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir-node"),". The AWS CLI creates configuration files for the\ncurrent user under ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.aws"),", which can only be read by the same user account."),(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir-node")," systemd unit by default creates a ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir")," user and runs as\nthat user, meaning that the AWS credentials must also be configured for that\nuser. The directory ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.aws")," must be readable for the ",(0,n.yg)("inlineCode",{parentName:"p"},"tenzir")," user.")),(0,n.yg)("p",null,"If a config file ",(0,n.yg)("inlineCode",{parentName:"p"},"<prefix>/etc/tenzir/plugin/s3.yaml")," or\n",(0,n.yg)("inlineCode",{parentName:"p"},"~/.config/tenzir/plugin/s3.yaml")," exists, it is always preferred over the\ndefault AWS credentials. The configuration file must have the following format:"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"access-key"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"your-access-key")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"secret-key"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"your-secret-key")),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"session-token"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"your-session-token (optional)"))))),(0,n.yg)("h3",c({},{id:"uri-str"}),(0,n.yg)("inlineCode",{parentName:"h3"},"uri: str")),(0,n.yg)("p",null,"The path to the S3 object."),(0,n.yg)("p",null,"The syntax is\n",(0,n.yg)("inlineCode",{parentName:"p"},"s3://[<access-key>:<secret-key>@]<bucket-name>/<full-path-to-object>(?<options>)"),"."),(0,n.yg)("p",null,"Options can be appended to the path as query parameters, as per\n",(0,n.yg)("a",c({parentName:"p"},{href:"https://arrow.apache.org/docs/r/articles/fs.html#connecting-directly-with-a-uri"}),"Arrow"),":"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"For S3, the options that can be included in the URI as query parameters are\n",(0,n.yg)("inlineCode",{parentName:"p"},"region"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"scheme"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"endpoint_override"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"allow_bucket_creation"),", and\n",(0,n.yg)("inlineCode",{parentName:"p"},"allow_bucket_deletion"),".")),(0,n.yg)("h3",c({},{id:"anonymous--bool-optional"}),(0,n.yg)("inlineCode",{parentName:"h3"},"anonymous = bool (optional)")),(0,n.yg)("p",null,"If to ignore any predefined credentials and try to load with anonymous\ncredentials."),(0,n.yg)("h2",c({},{id:"examples"}),"Examples"),(0,n.yg)("p",null,"Read CSV from an object ",(0,n.yg)("inlineCode",{parentName:"p"},"obj.csv")," in the bucket ",(0,n.yg)("inlineCode",{parentName:"p"},"examplebucket"),":"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_s3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "s3://examplebucket/obj.csv"')),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_csv"))))),(0,n.yg)("p",null,"Read JSON from an object ",(0,n.yg)("inlineCode",{parentName:"p"},"test.json")," in the bucket ",(0,n.yg)("inlineCode",{parentName:"p"},"examplebucket"),", but using a\ndifferent, S3-compatible endpoint:"),(0,n.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,n.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,n.yg)("code",c({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_s3"),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),' "s3://examplebucket/test.json?endpoint_override=s3.us-west.mycloudservice.com"')),"\n",(0,n.yg)("span",c({parentName:"code"},{"data-line":""}),(0,n.yg)("span",c({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_json"))))))}O.isMDXComponent=!0}}]);