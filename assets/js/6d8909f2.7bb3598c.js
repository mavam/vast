"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2182],{15759:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var o=a(87462),s=(a(67294),a(3905));a(61839);const n={sidebar_position:0},i="Download",r={unversionedId:"setup-vast/download",id:"setup-vast/download",title:"Download",description:"You can obtain various artifacts of VAST along the CD pipeline.",source:"@site/docs/setup-vast/download.md",sourceDirName:"setup-vast",slug:"/setup-vast/download",permalink:"/docs/setup-vast/download",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup-vast/download.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Setup VAST",permalink:"/docs/setup-vast/"},next:{title:"Build",permalink:"/docs/setup-vast/build"}},l={},d=[{value:"Source Code",id:"source-code",level:2},{value:"Git",id:"git",level:3},{value:"Archive",id:"archive",level:3},{value:"Packages",id:"packages",level:2},{value:"Nix",id:"nix",level:3},{value:"Images",id:"images",level:2},{value:"Docker",id:"docker",level:3}],c={toc:d};function u(t){let{components:e,...a}=t;return(0,s.kt)("wrapper",(0,o.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"download"},"Download"),(0,s.kt)("p",null,"You can obtain various artifacts of VAST along the CD pipeline."),(0,s.kt)("h2",{id:"source-code"},"Source Code"),(0,s.kt)("p",null,"Get the source code by cloning our Git repository or downloading an archive."),(0,s.kt)("h3",{id:"git"},"Git"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"git")," to clone our repository hosted on GitHub:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/tenzir/vast\n")),(0,s.kt)("p",null,"You can check out the ",(0,s.kt)("inlineCode",{parentName:"p"},"stable")," branch to get the latest released version:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd vast\ngit checkout stable\n")),(0,s.kt)("h3",{id:"archive"},"Archive"),(0,s.kt)("p",null,"Download a zip Archive of the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/latest"},"latest release")," or the current\ndevelopment version:"),(0,s.kt)("div",{align:"center"},(0,s.kt)("a",{class:"button button--md button--primary margin-right--md",href:"https://github.com/tenzir/vast/archive/refs/heads/stable.zip"},"Source Code (Release)"),(0,s.kt)("a",{class:"button button--md button--info margin-left--md",href:"https://github.com/tenzir/vast/archive/refs/heads/master.zip"},"Source Code (Development)")),(0,s.kt)("h2",{id:"packages"},"Packages"),(0,s.kt)("p",null,"We offer pre-built versions of VAST containing a statically linked binary, for\nthe ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/latest/download/vast-linux-static.tar.gz"},"latest release")," and the ",(0,s.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/tenzir-public-data/vast-static-builds/vast-static-latest.tar.gz"},"current development\nversion"),"."),(0,s.kt)("div",{align:"center",class:"padding-bottom--md"},(0,s.kt)("a",{class:"button button--md button--primary margin-right--md",href:"https://github.com/tenzir/vast/releases/latest/download/vast-linux-static.tar.gz"},"Static Build (Release)"),(0,s.kt)("a",{class:"button button--md button--info margin-left--md",href:"https://storage.googleapis.com/tenzir-public-data/vast-static-builds/vast-static-latest.tar.gz"},"Static Build (Development)")),(0,s.kt)("p",null,"We also offer prebuilt statically linked binaries for every git commit to the\n",(0,s.kt)("inlineCode",{parentName:"p"},"master")," branch."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"https://storage.googleapis.com/tenzir-public-data/vast-static-builds/vast-${version}-linux-static.tar.gz\n")),(0,s.kt)("p",null,"To determine the version, check out the desired commit locally and run this\ncommand:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"version=\"$(git describe --abbrev=10 --long --dirty --match='v[0-9]*')\"\n")),(0,s.kt)("h3",{id:"nix"},"Nix"),(0,s.kt)("p",null,"Our repository contains a ",(0,s.kt)("inlineCode",{parentName:"p"},"flake.nix")," that provides a VAST as an app, you can\nuse ",(0,s.kt)("inlineCode",{parentName:"p"},'vast = "github:tenzir/vast/stable"')," as an input in your own flake or just\ntry it out with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"nix run github:tenzir/vast/stable\n")),(0,s.kt)("h2",{id:"images"},"Images"),(0,s.kt)("p",null,"Our CI builds Docker images for the latest release and the current development\nversion."),(0,s.kt)("h3",{id:"docker"},"Docker"),(0,s.kt)("p",null,"You can download pre-built Docker images from\n",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/tenzir/vast"},"Docker Hub"),"."),(0,s.kt)("p",null,"Read our ",(0,s.kt)("a",{parentName:"p",href:"/docs/setup-vast/deploy/docker"},"Docker instructions")," for more details\non using Docker."))}u.isMDXComponent=!0}}]);