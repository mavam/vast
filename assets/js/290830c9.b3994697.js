"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5394],{95748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));n(61839);const s={},r="Plugins",o={unversionedId:"use-vast/integrate/threatbus/understand/plugins/README",id:"use-vast/integrate/threatbus/understand/plugins/README",title:"Plugins",description:"Threat Bus has a plugin-based architecture, implemented via",source:"@site/docs/use-vast/integrate/threatbus/understand/plugins/README.md",sourceDirName:"use-vast/integrate/threatbus/understand/plugins",slug:"/use-vast/integrate/threatbus/understand/plugins/",permalink:"/docs/use-vast/integrate/threatbus/understand/plugins/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use-vast/integrate/threatbus/understand/plugins/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Snapshotting",permalink:"/docs/use-vast/integrate/threatbus/understand/snapshotting"},next:{title:"MISP Plugin",permalink:"/docs/use-vast/integrate/threatbus/understand/plugins/apps/misp"}},p={},l=[{value:"Plugin Types",id:"plugin-types",level:2},{value:"Application Plugins",id:"application-plugins",level:3},{value:"Backbone Plugins",id:"backbone-plugins",level:3},{value:"Apps and Wrappers",id:"apps-and-wrappers",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"Threat Bus has a plugin-based architecture, implemented via\n",(0,i.kt)("a",{parentName:"p",href:"https://pluggy.readthedocs.io/"},"pluggy"),". The following document describes the\nexisting plugin types in detail and explains their responsibilities."),(0,i.kt)("h2",{id:"plugin-types"},"Plugin Types"),(0,i.kt)("p",null,"Threat Bus differentiates two plugin types. ",(0,i.kt)("strong",{parentName:"p"},"Application plugins"),' extend\nThreat Bus to provide a new endpoint for "apps" to connect with. How the\nendpoint looks like, and what message-formats are used for communication is up\nto the application plugin. "Apps" are security tools, like Zeek or VAST.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Backbone plugins")," are required for actual message\npassing. At least one backbone plugin is required for the bus to\nbe functional. The most basic plugin for that job is the\n",(0,i.kt)("a",{parentName:"p",href:"plugins/backbones/in-mem"},"in-memory backbone"),"."),(0,i.kt)("h3",{id:"application-plugins"},"Application Plugins"),(0,i.kt)("p",null,"Application plugins are the entrypoint for applications to connect with Threat\nBus. App plugins do two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"They provide an endpoint."),"\nApp plugins provide an endpoint (i.e., they bind certain ports) and offer a\ncommunication protocol. For example, the\n",(0,i.kt)("a",{parentName:"li",href:"plugins/apps/zeek"},"Zeek plugin")," exposes a\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeek/broker"},"Broker"),' endpoint. Broker is the native\ncommunication protocol for Zeek ("the app"), so it is the Zeek plugin\'s\nresponsibility to expose an endpoint that Zeek instances can work with.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"They handle message-format mapping."),"\nThreat Bus internally uses the\n",(0,i.kt)("a",{parentName:"li",href:"https://oasis-open.github.io/cti-documentation/stix/intro.html"},"STIX-2"),"\nserialization format. Not all open-source security tools can work\nwith this format. App plugins can implement mappings from STIX-2 to other\nformats, so that connecting apps can work with it. For example, the MISP\nplugin receives a proprietary format from MISP and transforms these attribute\nto STIX-2 Indicators.")),(0,i.kt)("p",null,"Threat Bus itself is at no point concerned with alternative formats, nor with\ndetails about the connected applications, nor exposed endpoints.\nInstead, Threat Bus is only aware of ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscribers")," and STIX-2 messages that are\nexchanged between them."),(0,i.kt)("h3",{id:"backbone-plugins"},"Backbone Plugins"),(0,i.kt)("p",null,"Backbone plugins either implement the message provisioning logic themselves\n(like the ",(0,i.kt)("a",{parentName:"p",href:"plugins/backbones/in-mem"},"in-memory backbone plugin"),") or\noffer a transparent interface to existing message brokers, like the\n",(0,i.kt)("a",{parentName:"p",href:"plugins/backbones/rabbitmq"},"RabbitMQ backbone plugin")," does."),(0,i.kt)("p",null,"Threat Bus notifies all backbone-plugins whenever new subscriptions come in.\nA subscription consists of a ",(0,i.kt)("inlineCode",{parentName:"p"},"topic")," and a queue (",(0,i.kt)("inlineCode",{parentName:"p"},"outq"),") that is used by the\nsubscriber to receive messages. The job of a backbone plugin is to read messages\nfrom the global queue of incoming messages (",(0,i.kt)("inlineCode",{parentName:"p"},"inq"),"), optionally hand these over\nto an existing messaging broker (like RabbitMQ) and consume them back, and\nlastly, based on the topic, sort those messages to all subscribed ",(0,i.kt)("inlineCode",{parentName:"p"},"outq"),"s."),(0,i.kt)("h2",{id:"apps-and-wrappers"},"Apps and Wrappers"),(0,i.kt)("p",null,"Threat Bus is a pub/sub broker, and hence applications have to subscribe\nthemselves to the bus. However, that requires active behavior from applications,\nand hence could require changes to the source code. Generally speaking, that is\nundesirable."),(0,i.kt)("p",null,"Some applications, like Zeek, can be scripted. In that particular case, the\nlogic for connecting to Threat Bus is implemented in a separate\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tenzir/threatbus/tree/master/apps/zeek"},"script"),"."),(0,i.kt)("p",null,"Other applications, like VAST, cannot be scripted. Those applications require\neither a change to the source code or a wrapper script to initiate communication\nwith Threat Bus. See\n",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/vast-threatbus/"},"VAST Threat Bus")," for an example\napplication."))}c.isMDXComponent=!0}}]);