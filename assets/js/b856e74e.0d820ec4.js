"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86868],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>w,contentTitle:()=>k,default:()=>y,frontMatter:()=>h,metadata:()=>f,toc:()=>N});var a=t(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&d(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&d(e,t,n[t]);return e},c=(e,n)=>r(e,o(n)),u=(e,n)=>{var t={};for(var a in e)p.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const h={},k="Platform CLI",f={unversionedId:"platform-cli",id:"version-v4.18/platform-cli",title:"Platform CLI",description:"The Tenzir Platform CLI allows users to interact with the Tenzir Platform from the command-line",source:"@site/versioned_docs/version-v4.18/platform-cli.md",sourceDirName:".",slug:"/platform-cli",permalink:"/platform-cli",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/platform-cli.md",tags:[],version:"v4.18",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Python Library",permalink:"/python-library"},next:{title:"Glossary",permalink:"/glossary"}},w={},N=[{value:"Installation",id:"installation",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"<code>&lt;workspace_id&gt;</code>",id:"workspace_id",level:4},{value:"Manage Nodes",id:"manage-nodes",level:2},{value:"Synopsis",id:"synopsis-1",level:3},{value:"Description",id:"description-1",level:3},{value:"<code>&lt;node_id&gt;</code>",id:"node_id",level:4},{value:"<code>&lt;node_name&gt;</code>",id:"node_name",level:4},{value:"<code>&lt;container_image&gt;</code>",id:"container_image",level:4},{value:"Manage Workspaces",id:"manage-workspaces",level:2},{value:"Synopsis",id:"synopsis-2",level:3},{value:"Description",id:"description-2",level:3},{value:"<code>&lt;owner_namespace&gt;</code>",id:"owner_namespace",level:4},{value:"<code>&lt;owner_id&gt;</code>",id:"owner_id",level:4},{value:"<code>--name &lt;workspace_name&gt;</code>",id:"--name-workspace_name",level:4},{value:"<code>&lt;workspace_id&gt;</code>",id:"workspace_id-1",level:4},{value:"Configure Access Rules",id:"configure-access-rules",level:2},{value:"Synopsis",id:"synopsis-3",level:3},{value:"Description",id:"description-3",level:3}],g={toc:N},v="wrapper";function y(e){var n=e,{components:t}=n,i=u(n,["components"]);return(0,a.kt)(v,c(m(m({},g),i),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"platform-cli"}),"Platform CLI"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Tenzir Platform CLI")," allows users to interact with the ",(0,a.kt)("em",{parentName:"p"},"Tenzir Platform")," from the command-line\nto manage their workspaces and nodes."),(0,a.kt)("h2",m({},{id:"installation"}),"Installation"),(0,a.kt)("p",null,"Install the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://pypi.org/project/tenzir-platform/"}),(0,a.kt)("inlineCode",{parentName:"a"},"tenzir-platform")),"\npackage from PyPI."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"pip install tenzir-platform\n")),(0,a.kt)("h2",m({},{id:"authentication"}),"Authentication"),(0,a.kt)("h3",m({},{id:"synopsis"}),"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"tenzir-platform auth login\ntenzir-platform workspace list\ntenzir-platform workspace select <workspace_id>\n")),(0,a.kt)("h3",m({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform auth login")," command authenticates the current user."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform workspace list")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform workspace select"),"\ncommands show workspaces available to the authenticated user and select one,\nrespectively."),(0,a.kt)("h4",m({},{id:"workspace_id"}),(0,a.kt)("inlineCode",{parentName:"h4"},"<workspace_id>")),(0,a.kt)("p",null,"The unique ID of the workspace, as shown in ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform workspace list"),"."),(0,a.kt)("h2",m({},{id:"manage-nodes"}),"Manage Nodes"),(0,a.kt)("h3",m({},{id:"synopsis-1"}),"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"tenzir-platform node list\ntenzir-platform node ping <node_id>\ntenzir-platform node create [--name <node_name>]\ntenzir-platform node delete <node_id>\ntenzir-platform node run [--name <node_name>] [--image <container_image>]\n")),(0,a.kt)("h3",m({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"The following commands interact with the selected workspace. See ",(0,a.kt)("a",m({parentName:"p"},{href:"#authentication"}),"Authentication"),"\nabove for how to select a workspace:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenzir-platform node list")," lists all nodes in the selected workspace,\nincluding their ID, name, and connection status."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenzir-platform node ping")," pings the specified node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenzir-platform node create")," registers a new node at the platform so that it\ncan be connected to the platform. Note that this neither starts a new node nor\nconfigures one, it just creates a new API key that a node can use to connect\nto the platform with."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenzir-platform node delete")," removes a node from the platform. Note that this\ndoes not stop the node, it just removes it from the platform."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenzir-platform node run")," creates and registers an ad-hoc node, and starts it\non the local host. Requires Docker Compose to be available.\nThe node is temporary and will be deleted when the ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," command is stopped.")),(0,a.kt)("h4",m({},{id:"node_id"}),(0,a.kt)("inlineCode",{parentName:"h4"},"<node_id>")),(0,a.kt)("p",null,"The unique ID of the node, as shown in ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform node list"),"."),(0,a.kt)("h4",m({},{id:"node_name"}),(0,a.kt)("inlineCode",{parentName:"h4"},"<node_name>")),(0,a.kt)("p",null,"The name of the node as shown in the app."),(0,a.kt)("h4",m({},{id:"container_image"}),(0,a.kt)("inlineCode",{parentName:"h4"},"<container_image>")),(0,a.kt)("p",null,"The Docker image to use for ad-hoc created node. We recommend using one of the\nfollowing images:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenzir/tenzir:v4.11.2")," to use the specified release."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenzir/tenzir:latest")," to use the last release."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tenzir/tenzir:main")," to use the currnet development version.")),(0,a.kt)("h2",m({},{id:"manage-workspaces"}),"Manage Workspaces"),(0,a.kt)("admonition",m({},{title:"On-Premise Setup Required",type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This functionality of the CLI can only be used in combination\nwith an on-premise platform deployment, which is available to users\nof the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://tenzir.com/pricing"}),"Sovereign Edition"),".")),(0,a.kt)("p",null,"These CLI commands are only available to local platform administrators.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"TENZIR_PLATFORM_OIDC_ADMIN_RULES")," variable described\n",(0,a.kt)("a",m({parentName:"p"},{href:"setup-guides/deploy-the-platform#identity-provider-idp"}),"here")," is used\nto define who is an administrator in your platform deployment."),(0,a.kt)("h3",m({},{id:"synopsis-2"}),"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"tenzir-platform admin list-global-workspaces\ntenzir-platform admin create-workspace <owner_namespace> <owner_id> [--name <workspace_name>]\ntenzir-platform admin delete-workspace <workspace_id>\n")),(0,a.kt)("h3",m({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform workspace admin list-global-workspaces"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform\nadmin create-workspace"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform admin delete-workspace")," commands\nlist, create, or delete workspaces, respectively."),(0,a.kt)("h4",m({},{id:"owner_namespace"}),(0,a.kt)("inlineCode",{parentName:"h4"},"<owner_namespace>")),(0,a.kt)("p",null,"Either ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"organization"),", depending on whether the workspace is\nassociated with a user or an organization."),(0,a.kt)("p",null,"The selected namespace will determine the ",(0,a.kt)("em",{parentName:"p"},"default")," access rules for the\nworkspace:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For a user workspace, a single access rule will be created that allows\naccess to the user whose user id matches the given ",(0,a.kt)("inlineCode",{parentName:"li"},"owner_id")),(0,a.kt)("li",{parentName:"ul"},"For an organization workspace, no rules will be created by default and\nthey have to be manually added using the ",(0,a.kt)("inlineCode",{parentName:"li"},"add-auth-rule")," subcommand\ndescribed below.")),(0,a.kt)("h4",m({},{id:"owner_id"}),(0,a.kt)("inlineCode",{parentName:"h4"},"<owner_id>")),(0,a.kt)("p",null,"The unique ID of the workspace owner:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"<owner_namespace>")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"user"),", then this matches the user's ",(0,a.kt)("inlineCode",{parentName:"li"},"sub")," claim in\nthe OIDC token."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"<owner_namespace>")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"organization"),", then this is an arbitrary string\nuniquely identifiying the organization the workspace belongs to.")),(0,a.kt)("h4",m({},{id:"--name-workspace_name"}),(0,a.kt)("inlineCode",{parentName:"h4"},"--name <workspace_name>")),(0,a.kt)("p",null,"The name of the workspace as shown in the app."),(0,a.kt)("h4",m({},{id:"workspace_id-1"}),(0,a.kt)("inlineCode",{parentName:"h4"},"<workspace_id>")),(0,a.kt)("p",null,"The unique ID of the workspace, as shown in ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform workspace list")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform admin list-global-workspaces"),"."),(0,a.kt)("h2",m({},{id:"configure-access-rules"}),"Configure Access Rules"),(0,a.kt)("admonition",m({},{title:"On-Premise Setup Required",type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This functionality of the CLI can only be used in combination\nwith an on-premise platform deployment, which is available to users\nof the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://tenzir.com/pricing"}),"Sovereign Edition"),".")),(0,a.kt)("p",null,"These CLI commands are only available to local platform administrators.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"TENZIR_PLATFORM_OIDC_ADMIN_RULES")," variable described\n",(0,a.kt)("a",m({parentName:"p"},{href:"setup-guides/deploy-the-platform#identity-provider-idp"}),"here")," is used\nto define who is an administrator in your platform deployment."),(0,a.kt)("h3",m({},{id:"synopsis-3"}),"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"tenzir-platform admin list-auth-rules <workspace_id>\ntenzir-platform admin add-auth-rule [--dry-run]\n    email-domain <workspace_id> <connection> <domain>\ntenzir-platform admin add-auth-rule [--dry-run]\n    organization-membership <workspace_id> <connection> <organization_claim> <organization>\ntenzir-platform admin add-auth-rule [--dry-run]\n    organization-role <workspace_id> <connection> <roles_claim> <role> <organization_claim> <organization>\ntenzir-platform admin add-auth-rule [--dry-run]\n    user <workspace_id> <user_id>\ntenzir-platform admin delete-auth-rule <workspace_id> <auth_rule_index>\n")),(0,a.kt)("h3",m({},{id:"description-3"}),"Description"),(0,a.kt)("p",null,"Users with admin permissions can additionally use the ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform admin\nlist-auth-rules"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform admin add-auth-rule"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform\nadmin delete-auth-rule")," commands to list, create, or delete authentication rules\nfor all users, respectively."),(0,a.kt)("p",null,"Authentication rules allow users to access the workspace with the provided\n",(0,a.kt)("inlineCode",{parentName:"p"},"<workspace_id>")," if the user's ",(0,a.kt)("inlineCode",{parentName:"p"},"id_token")," matches the configured rule. Users\nhave access to a workspace if any configured rule allows access. The following\nrules exist:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Email Suffix Rule"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform admin add-auth-rule email-domain"),"\nallows access if the ",(0,a.kt)("inlineCode",{parentName:"p"},"id_token")," contains a field ",(0,a.kt)("inlineCode",{parentName:"p"},"connection")," that exactly\nmatches the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"<connection>")," and a field ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," that ends with the\nconfigured ",(0,a.kt)("inlineCode",{parentName:"p"},"<domain>"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Organization Membership"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform admin add-auth-rule\norganization-membership")," allows\naccess if the ",(0,a.kt)("inlineCode",{parentName:"p"},"id_token")," contains a field ",(0,a.kt)("inlineCode",{parentName:"p"},"connection")," that exactly matches the\nprovided ",(0,a.kt)("inlineCode",{parentName:"p"},"<connection>")," and a field ",(0,a.kt)("inlineCode",{parentName:"p"},"<organization_claim>")," that exactly matches\nthe provided ",(0,a.kt)("inlineCode",{parentName:"p"},"<organization>"),"."),(0,a.kt)("p",{parentName:"li"},"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"<organization_claim>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<organization>")," can be freely\nchosen, so this rule can also be repurposed for generic claims that are not\nnecessarily related to organizations.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Organization Role Rule"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform admin add-auth-rule\norganization-role")," allows access if the ",(0,a.kt)("inlineCode",{parentName:"p"},"id_token")," contains a field\n",(0,a.kt)("inlineCode",{parentName:"p"},"connection")," that exactly matches the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"<connection>"),", a field\n",(0,a.kt)("inlineCode",{parentName:"p"},"<organization_claim>")," that exactly matches the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"<organization>"),", and\na field ",(0,a.kt)("inlineCode",{parentName:"p"},"<roles_claim>")," that must be a list containing a value exactly\nmatching ",(0,a.kt)("inlineCode",{parentName:"p"},"<role>"),"."),(0,a.kt)("p",{parentName:"li"},"We recommend using organization role rules to check if a user has a specific\nrole with an organization.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"User Rule"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-platform admin add-auth-rule user")," allows access if the\n",(0,a.kt)("inlineCode",{parentName:"p"},"id_token")," contains a field ",(0,a.kt)("inlineCode",{parentName:"p"},"sub")," that exactly matches the provided\n",(0,a.kt)("inlineCode",{parentName:"p"},"<user_id>"),"."))))}y.isMDXComponent=!0}}]);