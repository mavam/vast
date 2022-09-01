"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8542],{39733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),s=(a(67294),a(3905));a(61839);const i={},r="Linux",o={unversionedId:"setup-vast/install/linux",id:"setup-vast/install/linux",title:"Linux",description:"Use our pre-built build packages or [build",source:"@site/docs/setup-vast/install/linux.md",sourceDirName:"setup-vast/install",slug:"/setup-vast/install/linux",permalink:"/docs/setup-vast/install/linux",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup-vast/install/linux.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Install",permalink:"/docs/setup-vast/install/"},next:{title:"macOS",permalink:"/docs/setup-vast/install/macos"}},l={},u=[{value:"systemd",id:"systemd",level:2},{value:"Prepare the host system",id:"prepare-the-host-system",level:3},{value:"Configure the unit",id:"configure-the-unit",level:3},{value:"Distribution Support",id:"distribution-support",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"linux"},"Linux"),(0,s.kt)("p",null,"Use our ",(0,s.kt)("a",{parentName:"p",href:"/docs/setup-vast/download#packages"},"pre-built build packages")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs/setup-vast/build"},"build\nfrom source")," to install VAST on any Linux distribution."),(0,s.kt)("p",null,"To deploy VAST as system service, you can use our ",(0,s.kt)("a",{parentName:"p",href:"#systemd"},"systemd\nconfiguration"),"."),(0,s.kt)("h2",{id:"systemd"},"systemd"),(0,s.kt)("p",null,"VAST has native ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/systemd/"},"systemd\nsupport")," for running as\nsystem service. The service is sandboxed and runs with limited privileges."),(0,s.kt)("h3",{id:"prepare-the-host-system"},"Prepare the host system"),(0,s.kt)("p",null,"Please note that all subsequent commands require ",(0,s.kt)("inlineCode",{parentName:"p"},"root")," privileges. The service\nrequires a user and group called ",(0,s.kt)("inlineCode",{parentName:"p"},"vast"),". You can create them as follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"useradd --system --user-group vast\n")),(0,s.kt)("p",null,"Make sure that you don't grant any special rights to this user, e.g., do not\nenable ",(0,s.kt)("inlineCode",{parentName:"p"},"sudo")," or other privileged commands. Once the user exists, you should\ncreate the directory for VAST's persistent data and change the permissions such\nthat it is owned by the new ",(0,s.kt)("inlineCode",{parentName:"p"},"vast")," user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/lib/vast\nchown -R vast:vast /var/lib/vast\n")),(0,s.kt)("p",null,"The systemd unit passes a\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/systemd/"},"vast.yaml")," configuration\nfile to the VAST process. Make sure that the new user can read the ",(0,s.kt)("inlineCode",{parentName:"p"},"vast.yaml"),"."),(0,s.kt)("h3",{id:"configure-the-unit"},"Configure the unit"),(0,s.kt)("p",null,"Before you begin, find the line beginning with ",(0,s.kt)("inlineCode",{parentName:"p"},"ExecStart=")," at the very bottom\nof the ",(0,s.kt)("inlineCode",{parentName:"p"},"[Service]")," section in the unit file. Depending on your installation path\nyou might need to change the location of the ",(0,s.kt)("inlineCode",{parentName:"p"},"vast")," binary and configuration\nfile."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-config"},"ExecStart=/path/to/vast start\n")),(0,s.kt)("p",null,"In case your VAST deployment needs elevated privileges, e.g., to capture\npackets, you can provide them as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"CapabilityBoundingSet=CAP_NET_RAW\nAmbientCapabilities=CAP_NET_RAW\n")),(0,s.kt)("p",null,"Then link the unit file to your systemd search path:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl link vast.service\n")),(0,s.kt)("p",null,"To have the service start up automatically on system boot, ",(0,s.kt)("inlineCode",{parentName:"p"},"enable")," it via\n",(0,s.kt)("inlineCode",{parentName:"p"},"systemd"),". Otherwise, just ",(0,s.kt)("inlineCode",{parentName:"p"},"start")," it to run it immediately."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable vast\nsystemctl start vast\n")),(0,s.kt)("h2",{id:"distribution-support"},"Distribution Support"),(0,s.kt)("admonition",{title:"Community contributions wanted!",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"We are striving to bring VAST into the package managers of all major Linux\ndistributions. Unfortunately we can do so only at a best-effort basis, but\nwe much appreciate community contributions.")))}d.isMDXComponent=!0}}]);