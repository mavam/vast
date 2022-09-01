"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3215],{43290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));a(61839);const o={sidebar_position:1},s="SIEM Offloading",r={unversionedId:"about-vast/use-cases/siem-offloading",id:"about-vast/use-cases/siem-offloading",title:"SIEM Offloading",description:"There is a trend towards a second SIEM, and [it's not",source:"@site/docs/about-vast/use-cases/siem-offloading.md",sourceDirName:"about-vast/use-cases",slug:"/about-vast/use-cases/siem-offloading",permalink:"/docs/about-vast/use-cases/siem-offloading",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/about-vast/use-cases/siem-offloading.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"SOC Federation",permalink:"/docs/about-vast/use-cases/soc-federation"},next:{title:"Unified Detection",permalink:"/docs/about-vast/use-cases/unified-detection"}},d={},l=[],c={toc:l};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"siem-offloading"},"SIEM Offloading"),(0,i.kt)("p",null,"There is ",(0,i.kt)("a",{parentName:"p",href:"https://corelight.com/blog/one-siem-is-not-enough"},"a trend towards a second SIEM"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/anton-on-security/living-with-multiple-siems-c7fea37c5020"},"it's not\nnew"),". Benefits include cost savings, new analytical\ncapabilities, higher visibility, improved detection in a modern engine. And most\nimportantly, ",(0,i.kt)("em",{parentName:"p"},"incremental deployability"),": you can add a new system without\ndisrupting existing services."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SIEM Offloading",src:a(62846).Z+"#gh-light-mode-only",width:"1866",height:"947"}),"\n",(0,i.kt)("img",{alt:"SIEM Offloading",src:a(39322).Z+"#gh-dark-mode-only",width:"1866",height:"947"})),(0,i.kt)("p",null,"When you realize that you need to deploy two SIEMs, you are basically taking the\nfirst step towards a distributed architecture. While it's possible to run the\noffloading engine centrally, this is the time to re-evaluate your strategy. How\nto comply best with data residency regulations? How do I break down silos? How\ncan I support threat hunting and detection engineering?"),(0,i.kt)("p",null,"SIEM offloading with a new engine does not mean you have to immediately adopt a\nfully decentralized architecture. You can also build your own lakehouse\narchitecture with VAST, thanks to a standardized data plane via ",(0,i.kt)("a",{parentName:"p",href:"https://arrow.apache.org"},"Apache\nArrow"),". In fact, it makes sense to centralize\nheavy-duty analytics that require a lot of horse power. But you can also push a\nlot of front-line detection deep into the edge."),(0,i.kt)("admonition",{title:"Key Benefits",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Using VAST in front of your SIEM has the following benefits:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Reduced cost"),": VAST cuts your bill by absorbing the load of the heavy\nhitters while you can keep using the long tail of integrated data sources\nwithout disruption."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Higher performance"),": VAST's system architecture has a strict separation\nof read and write path that scale independently, making it possible to\noperate the system under continuous inbound load. Compared to legacy SIEMs,\nVAST is a resource-efficient, embeddable telemetry engine that offers 10-100x\ningestion bandwidth, and executes queries with\ninteractive latencies."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Reduce Lock-in"),": VAST stores all event data in an open, analytics-friendly\nformat (",(0,i.kt)("a",{parentName:"li",href:"https://parquet.apache.org"},"Parquet"),") that makes it easy to BYO\ndetection workloads."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Easy compliance"),': VAST\'s powerful transforms allow you to perform\nfine-grained field-level modifications to anonymize, pseudonymize, or encrypt\nsensitive data. With compaction, you can specify retention periods (e.g.,\n"anonymize URLs after 7 days") and define a multi-level roll-up strategy to\nage data gracefully.'))))}u.isMDXComponent=!0},39322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/siem-offloading.dark-26c5bbde14fa24256c36bf21c2afab74.png"},62846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/siem-offloading.light-6613c3034c2fa6aa7e6bc7e662aa42aa.png"}}]);