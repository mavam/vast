"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[231],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82747:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={},l="AWS",p={unversionedId:"setup-vast/deploy/aws",id:"setup-vast/deploy/aws",title:"AWS",description:"VAST's native cloud architecture is still highly experimental and",source:"@site/docs/setup-vast/deploy/aws.md",sourceDirName:"setup-vast/deploy",slug:"/setup-vast/deploy/aws",permalink:"/vast/docs/setup-vast/deploy/aws",editUrl:"https://github.com/tenzir/vast/tree/master/docs/docs/setup-vast/deploy/aws.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Deploy",permalink:"/vast/docs/setup-vast/deploy/"},next:{title:"Docker",permalink:"/vast/docs/setup-vast/deploy/docker"}},c={},u=[{value:"Create an environment file",id:"create-an-environment-file",level:2},{value:"Spin up infrastructure with Terraform",id:"spin-up-infrastructure-with-terraform",level:2},{value:"Start a VAST server (Fargate)",id:"start-a-vast-server-fargate",level:3},{value:"Run a VAST client on Fargate",id:"run-a-vast-client-on-fargate",level:3},{value:"Run a VAST client on Lambda",id:"run-a-vast-client-on-lambda",level:3},{value:"Shutdown Fargate",id:"shutdown-fargate",level:3}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws"},"AWS"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Expiremental")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"VAST's native cloud architecture is still highly experimental and\nsubject to change without notice."))),(0,i.kt)("p",null,"Running VAST on AWS relies on two serverless building blocks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/fargate/"},"Fargate")," for VAST server nodes"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lambda/"},"Lambda")," as compute service to perform tasks,\nsuch as executing queries and ingesting data ad hoc")),(0,i.kt)("p",null,"For storage, VAST uses ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/efs/"},"EFS"),". The sketch below\nillustrates the high-level architecture:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53797/157068659-41d7c9fe-8403-40d0-9cdd-dae66f0bf62e.png",alt:"AWS\nArchitecture"})),(0,i.kt)("h2",{id:"create-an-environment-file"},"Create an environment file"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Source Code Required")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure you have ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup-vast/download"},"downloaded the VAST source code"),"\nand change into the directory\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/cloud/aws"},"cloud/aws")," that contains\nall deployment scripts."))),(0,i.kt)("p",null,"Prior to running the deployment scripts, you need to setup required envionment\nvariables in a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud/aws")," directory:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"VAST_AWS_REGION"),": the region of the VPC where to deploy Fargate and Lambda\nresources.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"VAST_PEERED_VPC_ID"),": an existing VPC to which you plan to attach your VAST stack.\nYou can use ",(0,i.kt)("inlineCode",{parentName:"p"},"aws ec2 describe-vpcs --region $region")," to list available VPCs.\nThe deployment script will create a new VPC and peer it to the existing one.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"VAST_CIDR"),": the IP range where the VAST stack will be placed. Terraform will\ncreate a new VPC with this CIDR, so it should not overlapp with any of your\nexisting VPCs."))),(0,i.kt)("p",null,"Optionally, you can also define the following variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"VAST_VERSION"),": the version of VAST that should be used. By default it is set\nto the latest release. Version should be ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.1.0")," or higher. You can also use\nthe latest commit on the main branch by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"latest"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"VAST_SERVER_STORAGE_TYPE"),": the type of volume to use for the VAST server. Can\nbe set to either"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EFS")," (default): persistent accross task execution, infinitely scalable, but\nhigher latency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATTACHED"),": the local storage that comes by default with Fargate tasks, lost\nlost when the task is stopped.")))),(0,i.kt)("p",null,"Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"VAST_PEERED_VPC_ID=vpc-059a7ec8aac174fc9\nVAST_CIDR=172.31.48.0/24\nVAST_AWS_REGION=eu-north-1\n")),(0,i.kt)("h2",{id:"spin-up-infrastructure-with-terraform"},"Spin up infrastructure with Terraform"),(0,i.kt)("p",null,"Once you have a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file set up, you can deploy to AWS. To spin up the AWS\ninfrastructure, we use ",(0,i.kt)("a",{parentName:"p",href:"https://terragrunt.gruntwork.io/"},"Terragrunt"),", a thin\n",(0,i.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," wrapper to keep a DRY configuration."),(0,i.kt)("p",null,"In case you are not familiar using these tools, we package the toolchain in a\nsmall ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/blob/master/cloud/aws/docker/cli.Dockerfile"},"Docker image"),", wrapped behind a tiny shell\nscript ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/blob/master/cloud/aws/vast-cloud"},(0,i.kt)("inlineCode",{parentName:"a"},"vast-cloud")),". The script builds the Docker container\non first use. You can trigger a manual build as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"VASTCLOUD_REBUILD=1 ./vast-cloud\n")),(0,i.kt)("p",null,"With the toolchain Docker image in place, ",(0,i.kt)("inlineCode",{parentName:"p"},"vast-cloud")," is now ready to execute\ncommands via ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," that transports the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," configuration to the main\nscript ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/blob/master/cloud/aws/cli.py"},(0,i.kt)("inlineCode",{parentName:"a"},"cli.py"))," driving the Terragrunt invocation. To see what\ncommands are available, run ",(0,i.kt)("inlineCode",{parentName:"p"},"./vast-cloud --list"),"."),(0,i.kt)("p",null,"To create the AWS services, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud deploy\n")),(0,i.kt)("p",null,"To tear everything down, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud destroy\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Caveats")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Access to the VAST server is enforced by limiting inbound traffic to its local\nprivate subnet."),(0,i.kt)("li",{parentName:"ul"},"A NAT Gateway is created automatically, you cannot specify an existing one. It\nwill be billed at ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/vpc/pricing/"},"an hourly rate")," even\nwhen you aren't running any workload, until you tear down the entire stack."),(0,i.kt)("li",{parentName:"ul"},"You might sometime bumb into the message ",(0,i.kt)("em",{parentName:"li"},'"error waiting for Lambda Function\ncreation: InsufficientRolePermissions"')," while deploying the stack. You can\nusually solve this by running ",(0,i.kt)("inlineCode",{parentName:"li"},"./vast-cloud deploy")," again a few minutes later.")))),(0,i.kt)("h3",{id:"start-a-vast-server-fargate"},"Start a VAST server (Fargate)"),(0,i.kt)("p",null,"Now that the AWS infrastructure is in place, you start the containers. To start\na VAST server as Fargate task, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud start-vast-server\n")),(0,i.kt)("p",null,"This launches the official ",(0,i.kt)("inlineCode",{parentName:"p"},"tenzir/vast")," Docker image and executes the command\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast start"),"."),(0,i.kt)("p",null,"You can replace the running server with a new Fargate task:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud restart-vast-server\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"If you use ",(0,i.kt)("inlineCode",{parentName:"li"},"ATTACHED")," as storage type, restarting the server task will wipe\nthe database."),(0,i.kt)("li",{parentName:"ul"},"Multiple invocations of ",(0,i.kt)("inlineCode",{parentName:"li"},"./vast-cloud run-vast-task")," create multiple Fargate\ntasks, preventing other commands from working correctly. We recommand\nonly using ",(0,i.kt)("inlineCode",{parentName:"li"},"start-vast-server")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"restart-vast-server"),".")))),(0,i.kt)("h3",{id:"run-a-vast-client-on-fargate"},"Run a VAST client on Fargate"),(0,i.kt)("p",null,"After your VAST server is up and running, you can start spawning clients.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"execute-command")," target lifts VAST command into an ECS Exec operation. For\nexample, to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"vast status"),", run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./vast-cloud execute-command --cmd "vast status"\n')),(0,i.kt)("p",null,"If you do not specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," option, it will start an interactive bash shell.\nThis comes handy to inspect the server environment and check whether things are\nup and running."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Fargate task should be in ",(0,i.kt)("inlineCode",{parentName:"p"},"RUNNING")," state and you sometime need a few extra\nseconds for the ECS Exec agent to start."))),(0,i.kt)("h3",{id:"run-a-vast-client-on-lambda"},"Run a VAST client on Lambda"),(0,i.kt)("p",null,"To run a VAST client from Lambda, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"run-lambda")," target:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./vast-cloud run-lambda --cmd "vast status"\n')),(0,i.kt)("p",null,"The Lambda image also contains extra tooling, such as the AWS CLI, which is\nuseful to run batch imports or exports to other AWS services."),(0,i.kt)("h3",{id:"shutdown-fargate"},"Shutdown Fargate"),(0,i.kt)("p",null,"To shutdown all Fargate resources, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud stop-all-tasks\n")))}d.isMDXComponent=!0}}]);