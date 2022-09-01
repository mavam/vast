"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[238],{71149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=t(87462),s=(t(67294),t(3905));t(61839);const i={sidebar_position:1},r="Pipelines",p={unversionedId:"understand-vast/query-language/pipelines",id:"understand-vast/query-language/pipelines",title:"Pipelines",description:"A pipeline is chain of operators that represents a dataflow. An",source:"@site/docs/understand-vast/query-language/pipelines.md",sourceDirName:"understand-vast/query-language",slug:"/understand-vast/query-language/pipelines",permalink:"/docs/understand-vast/query-language/pipelines",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand-vast/query-language/pipelines.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Expressions",permalink:"/docs/understand-vast/query-language/expressions"},next:{title:"Operators",permalink:"/docs/understand-vast/query-language/operators/"}},o={},l=[{value:"Define a pipeline",id:"define-a-pipeline",level:2}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pipelines"},"Pipelines"),(0,s.kt)("p",null,"A pipeline is chain of ",(0,s.kt)("a",{parentName:"p",href:"operators"},"operators")," that represents a dataflow. An\noperator consumes data, performs a transformation, and produces new data,\npossibly with a different schema. Think of it as UNIX pipes where output from\none command is input to the next."),(0,s.kt)("h2",{id:"define-a-pipeline"},"Define a pipeline"),(0,s.kt)("p",null,"Add a uniquely named pipeline under the key ",(0,s.kt)("inlineCode",{parentName:"p"},"vast.pipelines")," in the\nconfiguration file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'vast:\n  pipelines:\n     example:\n       - hash:\n           field: src_ip\n           out: pseudonym\n           salt: "B3IwnumKPEJDAA4u"\n       - summarize:\n           group-by:\n             - src_ip\n             - dest_ip\n           aggregate:\n             flow.pkts_toserver: sum\n             flow.pkts_toclient: sum\n             flow.bytes_toserver: sum\n             flow.bytes_toclient: sum\n             flow.start: min\n             flow.end: max\n')),(0,s.kt)("p",null,"The above ",(0,s.kt)("inlineCode",{parentName:"p"},"example")," pipeline consists of two operators, ",(0,s.kt)("inlineCode",{parentName:"p"},"hash")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"summarize"),"\nthat execute in sequential order."))}u.isMDXComponent=!0}}]);