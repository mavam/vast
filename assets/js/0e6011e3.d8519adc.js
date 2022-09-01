"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6363],{66865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={sidebar_position:0},r="Docker",l={unversionedId:"setup-vast/deploy/docker",id:"setup-vast/deploy/docker",title:"Docker",description:"Our Docker image contains a dynamic of VAST build with plugins as shared",source:"@site/docs/setup-vast/deploy/docker.md",sourceDirName:"setup-vast/deploy",slug:"/setup-vast/deploy/docker",permalink:"/docs/setup-vast/deploy/docker",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup-vast/deploy/docker.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Deploy",permalink:"/docs/setup-vast/deploy/"},next:{title:"AWS",permalink:"/docs/setup-vast/deploy/aws"}},s={},p=[{value:"Pull the image",id:"pull-the-image",level:2},{value:"Start the container",id:"start-the-container",level:2},{value:"Configure a VAST container",id:"configure-a-vast-container",level:2},{value:"Build your own VAST image",id:"build-your-own-vast-image",level:2},{value:"Build the production image",id:"build-the-production-image",level:3},{value:"Build the development image",id:"build-the-development-image",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Our Docker image contains a dynamic of VAST build with plugins as shared\nlibraries. The system user ",(0,i.kt)("inlineCode",{parentName:"p"},"vast")," runs the VAST executable with limited\nprivileges. Database contents go into the volume exposed at ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/vast"),"."),(0,i.kt)("p",null,"Make sure you have the appropriate Docker runtime setup, e.g., ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"Docker\nDesktop")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/"},"Docker\nEngine"),"."),(0,i.kt)("admonition",{title:"CPU & RAM",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Make sure Docker has enough multiple CPU cores and several GBs of RAM.")),(0,i.kt)("h2",{id:"pull-the-image"},"Pull the image"),(0,i.kt)("p",null,"Retrieving a dockerized version of VAST only requires pulling a pre-built image\nfrom our ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/tenzir/vast"},"container registry at DockerHub"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull tenzir/vast\n")),(0,i.kt)("p",null,"Thereafter, you're ready to start a VAST node in a container."),(0,i.kt)("h2",{id:"start-the-container"},"Start the container"),(0,i.kt)("p",null,"When running VAST in a container, you need to wire two resources for a practical\ndeployment:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Network"),": VAST exposes a listening socket to accept client commands."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Disk"),": VAST stores its database content on mounted volume.")),(0,i.kt)("p",null,"We recommend starting the VAST server detached in the background:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /path/to/db\ndocker run -dt --name=vast --rm -p 42000:42000 -v /path/to/db:/var/lib/vast \\\n  tenzir/vast start\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," arguments have the following meaning:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-d")," for detaching, i.e., running in background"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-t")," for terminal output"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--name")," to name the image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--rm")," to clear older volumes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p")," to expose the port to the outer world"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v from:to")," to mount the local path ",(0,i.kt)("inlineCode",{parentName:"li"},"from")," into the container at ",(0,i.kt)("inlineCode",{parentName:"li"},"to"))),(0,i.kt)("p",null,"Now you are ready to interact with a running VAST node."),(0,i.kt)("h2",{id:"configure-a-vast-container"},"Configure a VAST container"),(0,i.kt)("p",null,"Configuration in the Docker ecosystem typically entails setting environment\nvariables. VAST supports this paradigm with a one-to-one ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup-vast/configure#environment-variables"},"mapping from\nconfiguration file entries to environment\nvariables"),"."),(0,i.kt)("p",null,"When starting the container, ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," accepts variables either one by one\nvia ",(0,i.kt)("inlineCode",{parentName:"p"},"-e KEY=VALUE")," or via ",(0,i.kt)("inlineCode",{parentName:"p"},"--env-file FILE"),". You can also pass down an existing\nenvironment variable by specifying just ",(0,i.kt)("inlineCode",{parentName:"p"},"-e KEY")," without an assignment. Here is\nan example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e VAST_ENDPOINT -e VAST_IMPORT__BATCH_SIZE=42 --env-file .env \\\n  tenzir/vast start\n")),(0,i.kt)("h2",{id:"build-your-own-vast-image"},"Build your own VAST image"),(0,i.kt)("p",null,"You can always build your own Docker image in case our prebuilt images don't fit\nyour use case."),(0,i.kt)("p",null,"Our official ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/blob/master/Dockerfile"},"Dockerfile"),"\noffers two starting points: a ",(0,i.kt)("em",{parentName:"p"},"development")," and ",(0,i.kt)("em",{parentName:"p"},"production")," layer."),(0,i.kt)("h3",{id:"build-the-production-image"},"Build the production image"),(0,i.kt)("p",null,"The production image is optimized for size and security. This is the official\n",(0,i.kt)("inlineCode",{parentName:"p"},"tenzir/vast")," image. From the repository root, build it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t tenzir/vast .\n")),(0,i.kt)("h3",{id:"build-the-development-image"},"Build the development image"),(0,i.kt)("p",null,"The development image ",(0,i.kt)("inlineCode",{parentName:"p"},"tenzir/vast-dev")," contains all build-time dependencies of\nVAST. It runs with a ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user to allow for building custom images that build\nadditional VAST plugins. By default, VAST loads all installed plugins in our\nimages."),(0,i.kt)("p",null,"Build the development image by specifying it as ",(0,i.kt)("inlineCode",{parentName:"p"},"--target"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t tenzir/vast-dev --target development .\n")))}u.isMDXComponent=!0}}]);