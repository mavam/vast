"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8828],{7650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(61839);const s={sidebar_position:2},r="Deploy",o={unversionedId:"use-vast/integrate/threatbus/deploy",id:"use-vast/integrate/threatbus/deploy",title:"Deploy",description:"This section explains how to run Threat Bus.",source:"@site/docs/use-vast/integrate/threatbus/deploy.md",sourceDirName:"use-vast/integrate/threatbus",slug:"/use-vast/integrate/threatbus/deploy",permalink:"/docs/use-vast/integrate/threatbus/deploy",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use-vast/integrate/threatbus/deploy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure",permalink:"/docs/use-vast/integrate/threatbus/configure"},next:{title:"Use",permalink:"/docs/use-vast/integrate/threatbus/use"}},l={},p=[{value:"systemd",id:"systemd",level:2},{value:"Docker",id:"docker",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy"},"Deploy"),(0,i.kt)("p",null,"This section explains how to run Threat Bus."),(0,i.kt)("h2",{id:"systemd"},"systemd"),(0,i.kt)("p",null,"We provide ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," service units to run\n",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/threatbus/"},"Threat Bus")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/vast-threatbus/"},"VAST Threat Bus")," as\nsystem services. The services are sandboxed and run with limited privileges."),(0,i.kt)("p",null,"The systemd units declare a private user. Hence, all logs go to\n",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/private")," by default. The following section explains how to configure\nfile-logging for Threat Bus and VAST Threat Bus. Skip the following\ninstructions if you configure your applications to use console-logging."),(0,i.kt)("p",null,"Find the ",(0,i.kt)("inlineCode",{parentName:"p"},"logging")," config section at the top of your Threat Bus or VAST Threat\nBus configuration file and change it to use the private log directory:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/private/threatbus/threatbus.log")," (Threat Bus)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/private/vast-threatbus/vast-threatbus.log")," (VAST Threat Bus)")),(0,i.kt)("p",null,"See the following YAML snippet for a configuration example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"logging:\n  console: false\n  console_verbosity: INFO\n  file: true\n  file_verbosity: DEBUG\n  filename: /var/log/private/threatbus/threatbus.log\n")),(0,i.kt)("p",null,"Before you begin, find the line beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecStart=")," at the very bottom\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Service]")," section in the unit file. Depending on your installation path\nyou might need to change the location of the ",(0,i.kt)("inlineCode",{parentName:"p"},"threatbus")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vast-threatbus"),"\nexecutable packages and configuration files. Similarly, you need to change the\nenvironmentvariables ",(0,i.kt)("inlineCode",{parentName:"p"},"THREATBUSDIR")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VAST_THREATBUSDIR")," according to your\ninstallation paths."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Threat Bus"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Environment="THREATBUSDIR=/installation/path"\nExecStart=/installation/path/threatbus --config=/installation/path/threatbus/config.yaml\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"VAST Threat Bus"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Environment="VAST_THREATBUSDIR=/installation/path"\nExecStart=/installation/path/vast-threatbus --config=/installation/path/vast-threatbus/config.yaml\n')))),(0,i.kt)("p",null,"Then copy (or symlink) the unit file to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'systemctl link "$PWD/threatbus.service"\nsystemctl link "$PWD/vast-threatbus.service"\n')),(0,i.kt)("p",null,"To have the services start up automatically with system boot, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"enable"),"\nthem via ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd"),". Otherwise, just ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," it to run it immediately."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable threatbus\nsystemctl start threatbus\nsystemctl enable vast-threatbus\nsystemctl start vast-threatbus\n")),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Threat Bus ships as pre-built ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tenzir/threatbus"},"Docker\nimage"),". It can be used without any\nmodifications to the host system. The Threat Bus executable is used as the\nentry-point of the container. You can transparently pass all command line\noptions of Threat Bus to the container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull tenzir/threatbus:latest\ndocker run tenzir/threatbus:latest --help\n")),(0,i.kt)("p",null,"The pre-built image comes with all required dependencies and all existing\nplugins pre-installed. Threat Bus requires a config file to operate. That file\nhas to be made available inside the container, for example via mounting it."),(0,i.kt)("p",null,"The working directory inside the container is ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/tenzir/threatbus"),". To mount\na local file named ",(0,i.kt)("inlineCode",{parentName:"p"},"my-custom-config.yaml")," from the current directory into the\ncontainer, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--volume")," (",(0,i.kt)("inlineCode",{parentName:"p"},"-v"),") flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v $PWD/my-custom-config.yaml:/opt/tenzir/threatbus/my-custom-config.yaml tenzir/threatbus:latest -c my-custom-config.yaml\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"configure"},"configuration section")," to get started with a custom config\nfile or refer to the detailed ",(0,i.kt)("a",{parentName:"p",href:"understand/plugins"},"plugin\ndocumentation")," for fine tuning."),(0,i.kt)("p",null,"Depending on the installed plugins, Threat Bus binds ports to the host system.\nThe used ports are defined in your configuration file. When running Threat\nBus inside a container, the container needs to bind those ports to the host\nsystem. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--port")," (",(0,i.kt)("inlineCode",{parentName:"p"},"-p"),") flag repeatedly for all ports you need to bind."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 47661:47661 -p 12345:12345 -v $PWD/config.yaml:/opt/tenzir/threatbus/config.yaml tenzir/threatbus:latest -c config.yaml\n")))}h.isMDXComponent=!0}}]);