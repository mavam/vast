"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[865],{71599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));a(61839);const s={sidebar_position:1},o="Actor Model",r={unversionedId:"understand-vast/architecture/actor-model",id:"understand-vast/architecture/actor-model",title:"Actor Model",description:"VAST uses the actor model to structure control flow",source:"@site/docs/understand-vast/architecture/actor-model.md",sourceDirName:"understand-vast/architecture",slug:"/understand-vast/architecture/actor-model",permalink:"/docs/understand-vast/architecture/actor-model",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand-vast/architecture/actor-model.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Design Goals",permalink:"/docs/understand-vast/architecture/design-goals"},next:{title:"Components",permalink:"/docs/understand-vast/architecture/components"}},c={},l=[{value:"Execution Model",id:"execution-model",level:2},{value:"C++ Actor Framework (CAF)",id:"c-actor-framework-caf",level:2},{value:"Efficient Message Passing",id:"efficient-message-passing",level:3},{value:"Flexible Distribution",id:"flexible-distribution",level:3},{value:"Actor Scheduling",id:"actor-scheduling",level:3}],d={toc:l};function h(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"actor-model"},"Actor Model"),(0,i.kt)("p",null,"VAST uses the ",(0,i.kt)("a",{parentName:"p",href:"http://dist-prog-book.com/chapter/3/message-passing.html#why-the-actor-model"},"actor model")," to structure control flow\ninto individual components. The actor runtime maps the application logic onto\nOS processes or remote actors in the network. The actor model simplifies the\ndesign a distributed system because it allows for easier reasoning about\nbehavior, while providing a light-weight concurrency primitive that scales\nremarkably well, both within a single machine as well as in a distributed\ncluster."),(0,i.kt)("h2",{id:"execution-model"},"Execution Model"),(0,i.kt)("p",null,"An actor defines a sequential unit of processing, while all actors conceptually\nrun in parallel. Because actors solely communicate via message passing, data\nraces do not occur by design. As long as the application exhibits enough\n",(0,i.kt)("em",{parentName:"p"},"overdecomposition"),' (i.e., distinct running actors), there exists enough "work"\nthat the actor runtime can schedule on OS-level threads. The figure below\nillustrates the separation of application logic, actor runtime, and underlying\nhardware. The programmer only thinks in actors (circles), and sending messages\nbetween (arrows), whereas the runtime takes care of scheduling the actor\nexecution.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Actor Execution Model",src:a(30773).Z+"#gh-light-mode-only",width:"1393",height:"1600"}),"\n",(0,i.kt)("img",{alt:"Actor Execution Model",src:a(41650).Z+"#gh-dark-mode-only",width:"1393",height:"1600"})),(0,i.kt)("h2",{id:"c-actor-framework-caf"},"C++ Actor Framework (CAF)"),(0,i.kt)("p",null,"VAST is written in C++. We ",(0,i.kt)("a",{parentName:"p",href:"http://matthias.vallentin.net/papers/thesis-phd.pdf"},"evaluated multiple actor model library\nimplementations")," and\nfound that the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/actor-framework/actor-framework"},"C++ Actor Framework (CAF)")," best suits our needs because of\nthe following unique features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Efficient copy-on-write message passing"),(0,i.kt)("li",{parentName:"ol"},"A configurable and exchangeable scheduler"),(0,i.kt)("li",{parentName:"ol"},"Typed actor interfaces for compile-time message contract checking")),(0,i.kt)("h3",{id:"efficient-message-passing"},"Efficient Message Passing"),(0,i.kt)("p",null,"CAF's actor runtime transparently serializes messages when they cross process\nboundaries; within a single process all actors send messages via efficient\npointer passing. The figure below illustrates this concept:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Actor Message Passing",src:a(73782).Z+"#gh-light-mode-only",width:"1400",height:"600"}),"\n",(0,i.kt)("img",{alt:"Actor Message Passing",src:a(68460).Z+"#gh-dark-mode-only",width:"1400",height:"600"})),(0,i.kt)("p",null,"The main benefit of this capability is deployment flexibility: CAF decides when\nto choose pointer passing and when serialization, based on whether an actor\nruns remotely or within the same process. Without changing a single line of\ncode, we can create different wirings of components while retaining maximum\nefficiency."),(0,i.kt)("h3",{id:"flexible-distribution"},"Flexible Distribution"),(0,i.kt)("p",null,"Letting the runtime transparently manage the messaging yields a highly flexible\ndistribution model. We can either bundle up all actors in a single process\n(centralized) or scale out individual components into own processes\n(distributed). Examples for these two modes include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Centralized"),": network appliance, embedded device at the edge, vertically\nscaled many-core machine"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Distributed"),": cloud functions, auto-scaling container environments (e.g.,\nKubernetes), multi-node data-center clusters")),(0,i.kt)("p",null,"You can think of two ends of the spectrum as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Actor Distribution",src:a(37091).Z+"#gh-light-mode-only",width:"1320",height:"720"}),"\n",(0,i.kt)("img",{alt:"Actor Distribution",src:a(10202).Z+"#gh-dark-mode-only",width:"1320",height:"720"})),(0,i.kt)("h3",{id:"actor-scheduling"},"Actor Scheduling"),(0,i.kt)("p",null,"By default, CAF uses a\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Work_stealing"},"work-stealing")," scheduler to map\nactors to threads. The idea is that there exist as many threads as available\nCPU cores, but orders of magnitude more actors than threads. This results in a\nsteady flow of work, proportional to the amount of communication between the\nactors. The figure below shows the scheduler in action."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Actor Framework Workstealing",src:a(14882).Z+"#gh-light-mode-only",width:"1120",height:"840"}),"\n",(0,i.kt)("img",{alt:"Actor Framework Workstealing",src:a(24396).Z+"#gh-dark-mode-only",width:"1120",height:"840"})),(0,i.kt)("p",null,'CAF maintains a thread pool, in which every thread maintains its own queue of\n"work," i.e., dispatching control flow into an actor. If an actor sends a\nmessage to another actor, CAF schedules the recipient. Based on how the worker\nthreads plow through their work, there may be scenario where a thread runs out\nof work and ends up with an empty queue. In this case, ',(0,i.kt)("em",{parentName:"p"},"stealing")," kicks in. The\nidle worker (",(0,i.kt)("em",{parentName:"p"},"thief"),") picks an actor from the queue of another thread\n(",(0,i.kt)("em",{parentName:"p"},"victim"),") so that all threads keep churning away. This works very efficiently,\nassuming that stealing is a rare event."))}h.isMDXComponent=!0},10202:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/actor-distribution.dark-2b9bee3f99e0fb83f325708e9e44d25c.png"},37091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/actor-distribution.light-2afa98f8504a2a6ee74180ee8fa6cacf.png"},41650:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/actor-execution-model.dark-3d1f8510a106d2bc0d2d14cf63ea6a14.png"},30773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/actor-execution-model.light-357a7aebc4146bb2b1074dd9910bd166.png"},24396:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/actor-framework-workstealing.dark-25078b299136dda37162e3a6a2c6e457.png"},14882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/actor-framework-workstealing.light-1d3a91d060a5c5d8589d1f5ac54a225a.png"},68460:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/actor-message-passing.dark-ab97e6d51de568a81ca173cf64157af7.png"},73782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/actor-message-passing.light-a5fca2fbbdd08dff4b609ad876180ac0.png"}}]);