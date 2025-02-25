"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48270],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),l=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},c=function(e){var a=l(e.components);return t.createElement(i.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(n),g=r,m=y["".concat(i,".").concat(g)]||y[g]||d[g]||o;return n?t.createElement(m,p(p({ref:a},c),{},{components:n})):t.createElement(m,p({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=g;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[y]="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8621:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>I,toc:()=>N});var t=n(15680),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,y=(e,a)=>{for(var n in a||(a={}))i.call(a,n)&&c(e,n,a[n]);if(s)for(var n of s(a))l.call(a,n)&&c(e,n,a[n]);return e},d=(e,a)=>o(e,p(a)),g=(e,a)=>{var n={};for(var t in e)i.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))a.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const m={},u="MSK",I={unversionedId:"integrations/amazon/msk/README",id:"version-v4.28/integrations/amazon/msk/README",title:"MSK",description:"[Amazon Managed Streaming for Apache Kafka (Amazon",source:"@site/versioned_docs/version-v4.28/integrations/amazon/msk/README.md",sourceDirName:"integrations/amazon/msk",slug:"/integrations/amazon/msk/",permalink:"/v4.28/integrations/amazon/msk/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.28/integrations/amazon/msk/README.md",tags:[],version:"v4.28",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Amazon",permalink:"/v4.28/integrations/amazon/"},next:{title:"S3",permalink:"/v4.28/integrations/amazon/s3/"}},b={},N=[{value:"Sending and Receiving",id:"sending-and-receiving",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Assuming roles",id:"assuming-roles",level:3},{value:"Example",id:"example",level:3},{value:"Collecting High Severity OCSF events from MSK",id:"collecting-high-severity-ocsf-events-from-msk",level:4}],h={toc:N},D="wrapper";function v(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(D,d(y(y({},h),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",y({},{id:"msk"}),"MSK"),(0,t.yg)("p",null,(0,t.yg)("a",y({parentName:"p"},{href:"https://aws.amazon.com/msk/"}),"Amazon Managed Streaming for Apache Kafka (Amazon\nMSK)")," is a streaming data service that manages\nApache Kafka infrastructure and operations, making it easier for developers and\nDevOps managers to run Apache Kafka applications and Apache Kafka Connect\nconnectors on AWS without becoming experts in operating Apache Kafka."),(0,t.yg)("h2",y({},{id:"sending-and-receiving"}),"Sending and Receiving"),(0,t.yg)("p",null,"Tenzir's Kafka connectors ",(0,t.yg)("inlineCode",{parentName:"p"},"load_kafka")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"save_kafka")," can be used to send and\nreceive events from Amazon MSK Clusters."),(0,t.yg)("h2",y({},{id:"authentication"}),"Authentication"),(0,t.yg)("p",null,"Provisioned MSK Clusters support different authentication mechanisms such as\nmTLS, SASL/SCRAM, IAM etc. However Serverless MSK instances currently only\nsupport IAM Authentication."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"load_kafka")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"save_kafka")," operators can authenticate with MSK using AWS\nIAM by simply specifying the ",(0,t.yg)("inlineCode",{parentName:"p"},"aws_iam")," option with a record of configuration\nvalues such as:"),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_kafka"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "kafkaesque-data"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", aws_iam"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{region"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "eu-west-1"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:'load_kafka "kafkaesque-data", aws_iam={region: "eu-west-1"}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"The above pipeline will try to fetch credentials from ",(0,t.yg)("a",y({parentName:"p"},{href:"/next/tql2/operators/load_kafka#aws_iam--record-optional"}),"various different\nlocations")," including\nthe Instance Metadata Services. This means you can attach a role with the\nnecessary permissions directly to an EC2 instance and Tenzir will automatically\npick it up."),(0,t.yg)("admonition",y({},{title:"Other Authentication methods",type:"tip"}),(0,t.yg)("p",{parentName:"admonition"},"Tenzir relies on ",(0,t.yg)("a",y({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka")," for\nthe Kafka client protocol and all other mechanisms supported by librdkafka can\nbe used by specifying respective configuration values, e.g.\n",(0,t.yg)("a",y({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka/wiki/Using-SSL-with-librdkafka"}),"mTLS"),".")),(0,t.yg)("h3",y({},{id:"assuming-roles"}),"Assuming roles"),(0,t.yg)("p",null,"Roles can also be assumed by giving the ",(0,t.yg)("inlineCode",{parentName:"p"},"assume_role")," parameter to the ",(0,t.yg)("inlineCode",{parentName:"p"},"aws_iam")," option."),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"save_kafka"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "topic"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", aws_iam"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{region"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "eu-west-1"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", assume_role"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "arn:aws:iam::1234567890:role/my-msk-role"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:'save_kafka "topic", aws_iam={region: "eu-west-1", assume_role: "arn:aws:iam::1234567890:role/my-msk-role"}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))),(0,t.yg)("p",null,"The above pipeline attempts to fetch temporary credentials from Amazon STS for\nthe given ARN."),(0,t.yg)("h3",y({},{id:"example"}),"Example"),(0,t.yg)("h4",y({},{id:"collecting-high-severity-ocsf-events-from-msk"}),"Collecting High Severity OCSF events from MSK"),(0,t.yg)("p",null,"The following pipeline reads OCSF events from MSK, assuming the role referenced by\nthe provided ARN. The incoming data is then filtered for severity and sent to\nSplunk clusters in a load balanced fashion."),(0,t.yg)("figure",y({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",y({parentName:"figure"},{tabIndex:0,"data-language":"tql","data-theme":"github-dark-default"}),(0,t.yg)("code",y({parentName:"pre"},{"data-language":"tql","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"let"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," $endpoints"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}})," ="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," ["),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"indexer-1-url"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"indexer-2-url"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""})," "),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_kafka"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "ocsf-events"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", aws_iam"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"{region"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "us-east-2"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", assume_role"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),":"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),' "arn"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"read_json")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"where"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," severity_id "),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),">="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," 4"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#8B949E"}})," // High and above")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"load_balance"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," $endpoints"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}})," {")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"    to_splunk"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#79C0FF"}})," $endpoints"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),", hec_token"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#FF7B72"}}),"="),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#D2A8FF"}}),"secret"),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"("),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#A5D6FF"}}),'"SPLUNK_TOKEN"'),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),")")),"\n",(0,t.yg)("span",y({parentName:"code"},{"data-line":""}),(0,t.yg)("span",y({parentName:"span"},{style:{color:"#E6EDF3"}}),"}"))),(0,t.yg)("button",y({parentName:"pre"},{type:"button",data:'let $endpoints = ["indexer-1-url", "indexer-2-url"]\n\nload_kafka "ocsf-events", aws_iam={region: "us-east-2", assume_role: "arn"}\nread_json\nwhere severity_id >= 4 // High and above\nload_balance $endpoints {\n    to_splunk $endpoints, hec_token=secret("SPLUNK_TOKEN")\n}',title:"Copy code","aria-label":"Copy code",className:"rehype-pretty-copy","data-feedback-duration":"3000","data-name":"rehype-pretty-copy-button"}),(0,t.yg)("span",y({parentName:"button"},{className:"ready"})),(0,t.yg)("span",y({parentName:"button"},{className:"success"}))),(0,t.yg)("style",{parentName:"pre"},'\n    :root {\n      --copy-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDM2IDM2Ij48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjYmZjN2Q1IiBkPSJNMjkuNSA3aC0xOUExLjUgMS41IDAgMCAwIDkgOC41djI0YTEuNSAxLjUgMCAwIDAgMS41IDEuNWgxOWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTI0QTEuNSAxLjUgMCAwIDAgMjkuNSA3TTI5IDMySDExVjloMThaIiBjbGFzcz0iY2xyLWktb3V0bGluZSBjbHItaS1vdXRsaW5lLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNiZmM3ZDUiIGQ9Ik0yNiAzLjVBMS41IDEuNSAwIDAgMCAyNC41IDJoLTE5QTEuNSAxLjUgMCAwIDAgNCAzLjV2MjRBMS41IDEuNSAwIDAgMCA1LjUgMjlINlY0aDIwWiIgY2xhc3M9ImNsci1pLW91dGxpbmUgY2xyLWktb3V0bGluZS1wYXRoLTIiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDM2djM2SDB6Ii8+PC9zdmc+");\n      --success-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMDBkNjAwIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+");\n    }\n\n    pre:has(code) {\n      position: relative;\n    }\n\n    button[data=\'<span>\'] {\n      width: 0;\n      height: 0;\n      display: none;\n      visibility: hidden;\n    }\n\n    pre button.rehype-pretty-copy {\n      top: 1px;\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      cursor: pointer;\n      margin-top: 8px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n        background-repeat: no-repeat;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none;\n        background-image: var(--success-icon);\n      }\n    }\n\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      cursor: default;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n\n      pre button.rehype-pretty-copy { opacity: 0; }\n      button[data-name="rehype-pretty-copy-button"]:hover {\n        opacity: 1;\n      }\n    '))))}v.isMDXComponent=!0}}]);