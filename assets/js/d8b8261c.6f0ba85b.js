"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9231],{82747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));a(61839);const o={sidebar_position:1},i="AWS",l={unversionedId:"setup-vast/deploy/aws",id:"setup-vast/deploy/aws",title:"AWS",description:"VAST's native cloud architecture is still highly experimental and",source:"@site/docs/setup-vast/deploy/aws.md",sourceDirName:"setup-vast/deploy",slug:"/setup-vast/deploy/aws",permalink:"/docs/setup-vast/deploy/aws",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup-vast/deploy/aws.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Docker",permalink:"/docs/setup-vast/deploy/docker"},next:{title:"AWS with Pro version",permalink:"/docs/setup-vast/deploy/aws-pro"}},s={},u=[{value:"Create an environment file",id:"create-an-environment-file",level:2},{value:"Spin up infrastructure with Terraform",id:"spin-up-infrastructure-with-terraform",level:2},{value:"Start a VAST server (Fargate)",id:"start-a-vast-server-fargate",level:3},{value:"Run a VAST client on Fargate",id:"run-a-vast-client-on-fargate",level:3},{value:"Run a VAST client on Lambda",id:"run-a-vast-client-on-lambda",level:3},{value:"Configure and deploy cloud plugins",id:"configure-and-deploy-cloud-plugins",level:2},{value:"Continuously load data from Cloudtrail",id:"continuously-load-data-from-cloudtrail",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws"},"AWS"),(0,r.kt)("admonition",{title:"Experimental",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"VAST's native cloud architecture is still highly experimental and\nsubject to change without notice.")),(0,r.kt)("p",null,"Running VAST on AWS relies on two serverless building blocks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/fargate/"},"Fargate")," for VAST server nodes"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lambda/"},"Lambda")," as compute service to perform tasks,\nsuch as executing queries and ingesting data ad hoc")),(0,r.kt)("p",null,"For storage, VAST uses ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/efs/"},"EFS"),". The sketch below\nillustrates the high-level architecture:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53797/157068659-41d7c9fe-8403-40d0-9cdd-dae66f0bf62e.png",alt:"AWS\nArchitecture"})),(0,r.kt)("h2",{id:"create-an-environment-file"},"Create an environment file"),(0,r.kt)("admonition",{title:"Source Code Required",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you have ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup-vast/download"},"downloaded the VAST source code"),"\nand change into the directory\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/cloud/aws"},"cloud/aws")," that contains\nall deployment scripts.")),(0,r.kt)("p",null,"Prior to running the deployment scripts, you need to setup required envionment\nvariables in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud/aws")," directory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VAST_AWS_REGION"),": the region of the VPC where to deploy Fargate and Lambda\nresources.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VAST_PEERED_VPC_ID"),": an existing VPC to which you plan to attach your VAST stack.\nYou can use ",(0,r.kt)("inlineCode",{parentName:"p"},"aws ec2 describe-vpcs --region $region")," to list available VPCs.\nThe deployment script will create a new VPC and peer it to the existing one.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VAST_CIDR"),": the IP range where the VAST stack will be placed. Terraform will\ncreate a new VPC with this CIDR, so it should not overlapp with any of your\nexisting VPCs."))),(0,r.kt)("p",null,"Optionally, you can also define the following variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VAST_VERSION"),": the version of VAST that should be used. By default it is set\nto the latest release. Can be any tag available on the tenzir/vast Dockerhub\nas long as it is more recent than ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.1.0"),". You can also build from source\nusing ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VAST_SERVER_STORAGE_TYPE"),": the type of volume to use for the VAST server. Can\nbe set to either"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EFS")," (default): persistent accross task execution, infinitely scalable, but\nhigher latency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ATTACHED"),": the local storage that comes by default with Fargate tasks, lost\nlost when the task is stopped.")))),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"VAST_PEERED_VPC_ID=vpc-059a7ec8aac174fc9\nVAST_CIDR=172.31.48.0/24\nVAST_AWS_REGION=eu-north-1\n")),(0,r.kt)("h2",{id:"spin-up-infrastructure-with-terraform"},"Spin up infrastructure with Terraform"),(0,r.kt)("p",null,"Once you have a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file set up, you can deploy to AWS. To spin up the AWS\ninfrastructure, we use ",(0,r.kt)("a",{parentName:"p",href:"https://terragrunt.gruntwork.io/"},"Terragrunt"),", a thin\n",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," wrapper to keep a DRY configuration."),(0,r.kt)("p",null,"In case you are not familiar using these tools, we package the toolchain in a\nsmall ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/blob/master/cloud/aws/docker/cli.Dockerfile"},"Docker image"),", wrapped behind a tiny shell\nscript ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/blob/master/cloud/aws/vast-cloud"},(0,r.kt)("inlineCode",{parentName:"a"},"vast-cloud")),". The script builds the Docker container\non first use. You can trigger a manual build as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"VASTCLOUD_REBUILD=1 ./vast-cloud\n")),(0,r.kt)("p",null,"With the toolchain Docker image in place, ",(0,r.kt)("inlineCode",{parentName:"p"},"vast-cloud")," is now ready to execute\ncommands via ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," that transports the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," configuration to the main\nscript ","[",(0,r.kt)("inlineCode",{parentName:"p"},"main.py"),"][main.py]"," driving the Terragrunt invocation. To see what\ncommands are available, run ",(0,r.kt)("inlineCode",{parentName:"p"},"./vast-cloud --list"),"."),(0,r.kt)("p",null,"To create the AWS services, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud deploy\n")),(0,r.kt)("p",null,"To tear everything down, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud destroy\n")),(0,r.kt)("admonition",{title:"Caveats",type:"warning"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Access to the VAST server is enforced by limiting inbound traffic to its local\nprivate subnet."),(0,r.kt)("li",{parentName:"ul"},"A NAT Gateway and a network load balancer are created automatically, you\ncannot specify existing ones. They will be billed at ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/vpc/pricing/"},"an hourly\nrate")," even when you aren't running any\nworkload, until you tear down the entire stack."))),(0,r.kt)("h3",{id:"start-a-vast-server-fargate"},"Start a VAST server (Fargate)"),(0,r.kt)("p",null,"Now that the AWS infrastructure is in place, you start the containers. To start\na VAST server as Fargate task, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud start-vast-server\n")),(0,r.kt)("p",null,"By default, this launches the official ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir/vast")," Docker image and executes\nthe command ",(0,r.kt)("inlineCode",{parentName:"p"},"vast start"),". To use the VAST Pro image, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup-vast/deploy/aws-pro"},"AWS\nPro")," documentation."),(0,r.kt)("p",null,"Check the status of the running server with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud vast-server-status\n")),(0,r.kt)("p",null,"You can replace the running server with a new Fargate task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud restart-vast-server\n")),(0,r.kt)("p",null,"Finally, to avoid paying for the Fargate resource when you are not using VAST, you can shut down the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud stop-vast-server\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you use ",(0,r.kt)("inlineCode",{parentName:"li"},"ATTACHED")," as storage type, restarting the server task will wipe\nthe database."))),(0,r.kt)("h3",{id:"run-a-vast-client-on-fargate"},"Run a VAST client on Fargate"),(0,r.kt)("p",null,"After your VAST server is up and running, you can start spawning clients.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"execute-command")," target lifts VAST command into an ECS Exec operation. For\nexample, to execute ",(0,r.kt)("inlineCode",{parentName:"p"},"vast status"),", run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./vast-cloud execute-command --cmd "vast status"\n')),(0,r.kt)("p",null,"If you do not specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd")," option, it will start an interactive bash shell.\nThis comes handy to inspect the server environment and check whether things are\nup and running."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Fargate task should be in ",(0,r.kt)("inlineCode",{parentName:"p"},"RUNNING")," state and you sometime need a few extra\nseconds for the ECS Exec agent to start.")),(0,r.kt)("h3",{id:"run-a-vast-client-on-lambda"},"Run a VAST client on Lambda"),(0,r.kt)("p",null,"To run a VAST client from Lambda, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"run-lambda")," target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./vast-cloud run-lambda --cmd "vast status"\n')),(0,r.kt)("p",null,"The Lambda image also contains extra tooling, such as the AWS CLI, which is\nuseful to run batch imports or exports to other AWS services."),(0,r.kt)("h2",{id:"configure-and-deploy-cloud-plugins"},"Configure and deploy cloud plugins"),(0,r.kt)("p",null,'You can set activate a number of "cloud plugins" using the ',(0,r.kt)("inlineCode",{parentName:"p"},".env")," config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"VAST_CLOUD_PLUGINS = workbucket,tests\n")),(0,r.kt)("h3",{id:"continuously-load-data-from-cloudtrail"},"Continuously load data from Cloudtrail"),(0,r.kt)("p",null,"If you have Cloudtrail enabled and pushing data into a bucket that is located in\nthe same AWS account as your VAST deployment, you can deploy an optional module\nthat will stream all the new events arriving in that bucket to the VAST\ninstance. To achieve this, assuming that VAST is already deployed, configure the\nfollowing in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VAST_CLOUD_PLUGINS"),": add ",(0,r.kt)("inlineCode",{parentName:"li"},"cloudtrail")," to the list of plugins"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VAST_CLOUDTRAIL_BUCKET_NAME"),": the name of the bucket where Cloudtrail is\npushing its events"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VAST_CLOUDTRAIL_BUCKET_REGION"),": the region where that bucket is located")),(0,r.kt)("p",null,"Then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud deploy\n")),(0,r.kt)("p",null,"You should see new events flowing into VAST within a few minutes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./vast-cloud run-lambda -c "vast count \'#type==\\"aws.cloudtrail\\"\'"\n')),(0,r.kt)("p",null,"Running the global ",(0,r.kt)("inlineCode",{parentName:"p"},"./vast-cloud destroy")," command will also destroy optional\nmodules such as the Cloudtrail datasource. If you want to destroy the Cloudtrail\ndatasource resources only, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud destroy-step --step cloudtrail\n")),(0,r.kt)("admonition",{title:"Caveats",type:"warning"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"To get notified of new objects in the bucket, we use EventBridge\nnotifications. These notifications are not disabled automatically on your\nbucket when the stack is destroyed to avoid interfering with your existing\nnotification systems."))))}d.isMDXComponent=!0}}]);