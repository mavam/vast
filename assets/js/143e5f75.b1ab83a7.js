"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33654],{3905:(e,n,i)=>{i.d(n,{Zo:()=>m,kt:()=>f});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},m=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(i),c=a,f=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return i?t.createElement(f,l(l({ref:n},m),{},{components:i})):t.createElement(f,l({ref:n},m))}));function f(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},1155:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>k,contentTitle:()=>g,default:()=>b,frontMatter:()=>f,metadata:()=>h,toc:()=>v});var t=i(3905),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,n,i)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,d=(e,n)=>{for(var i in n||(n={}))p.call(n,i)&&m(e,i,n[i]);if(o)for(var i of o(n))s.call(n,i)&&m(e,i,n[i]);return e},u=(e,n)=>r(e,l(n)),c=(e,n)=>{var i={};for(var t in e)p.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(null!=e&&o)for(var t of o(e))n.indexOf(t)<0&&s.call(e,t)&&(i[t]=e[t]);return i};const f={sidebar_position:4},g="Command Line",h={unversionedId:"command-line",id:"version-Tenzir v4.1/command-line",title:"Command Line",description:"The command line tools are at the core of a deployment. Every installation ships",source:"@site/versioned_docs/version-Tenzir v4.1/command-line.md",sourceDirName:".",slug:"/command-line",permalink:"/command-line",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.1/command-line.md",tags:[],version:"Tenzir v4.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Metrics",permalink:"/metrics"},next:{title:"REST API",permalink:"/rest-api"}},k={},v=[{value:"Command Line Arguments",id:"command-line-arguments",level:2},{value:"Get help",id:"get-help",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Keys",id:"keys",level:3},{value:"Values",id:"values",level:3},{value:"Configuration files",id:"configuration-files",level:2},{value:"Plugin Configuration Files",id:"plugin-configuration-files",level:3},{value:"Bare Mode",id:"bare-mode",level:3},{value:"Plugins",id:"plugins",level:2},{value:"Install plugins",id:"install-plugins",level:3},{value:"Load plugins",id:"load-plugins",level:3},{value:"List plugins",id:"list-plugins",level:3}],N={toc:v},y="wrapper";function b(e){var n=e,{components:i}=n,a=c(n,["components"]);return(0,t.kt)(y,u(d(d({},N),a),{components:i,mdxType:"MDXLayout"}),(0,t.kt)("h1",d({},{id:"command-line"}),"Command Line"),(0,t.kt)("p",null,"The command line tools are at the core of a deployment. Every installation ships\nwith the following executables:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"tenzir"),": runs a pipeline"),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"tenzir-node"),": spawns a node")),(0,t.kt)("p",null,"There is also the ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir-ctl"),' "master" executable to invoke various commands.\nThis is a temporary solution that we will sunset in the future after having\nmigrated its functionality into ',(0,t.kt)("inlineCode",{parentName:"p"},"tenzir")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir-node"),"."),(0,t.kt)("p",null,"The executables support several configuration options:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Command-line arguments"),(0,t.kt)("li",{parentName:"ol"},"Environment variables"),(0,t.kt)("li",{parentName:"ol"},"Configuration files"),(0,t.kt)("li",{parentName:"ol"},"Compile-time defaults")),(0,t.kt)("p",null,"These options are sorted by precedence, i.e., command-line arguments override\nenvironment variables, which override configuration file settings. Compile-time\ndefaults can only be changed by rebuilding Tenzir from source."),(0,t.kt)("p",null,"Let's discuss the first three options in more detail."),(0,t.kt)("h2",d({},{id:"command-line-arguments"}),"Command Line Arguments"),(0,t.kt)("p",null,"The command line arguments of the executables have the following synopis:"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{}),"tenzir [opts] <pipeline>\ntenzir-node [opts]\ntenzir-ctl [opts] cmd1 [opts1] cmd2 [opts2] ...\n")),(0,t.kt)("p",null,"We have both long ",(0,t.kt)("inlineCode",{parentName:"p"},"--long=X")," and short ",(0,t.kt)("inlineCode",{parentName:"p"},"-s X")," options. Boolean options do not\nrequire explicit specification of a value, and it suffices to write ",(0,t.kt)("inlineCode",{parentName:"p"},"--long")," and\n",(0,t.kt)("inlineCode",{parentName:"p"},"-s")," to set an option to true. For ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir-ctl"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"=")," is mandatory for long\noptions. This differs from pipeline operator options where ",(0,t.kt)("inlineCode",{parentName:"p"},"=")," is optional."),(0,t.kt)("h3",d({},{id:"get-help"}),"Get help"),(0,t.kt)("p",null,"You get short usage instructions for every command by adding the ",(0,t.kt)("inlineCode",{parentName:"p"},"help"),"\nsub-command or providing the option ",(0,t.kt)("inlineCode",{parentName:"p"},"--help")," (which has the shorthand ",(0,t.kt)("inlineCode",{parentName:"p"},"-h"),"):"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir-ctl help\ntenzir-ctl --help\ntenzir-ctl -h\n")),(0,t.kt)("p",null,"The same help pattern applies to (sub-)commands:"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir-ctl export help\ntenzir-ctl export --help\ntenzir-ctl export -h\n")),(0,t.kt)("h2",d({},{id:"environment-variables"}),"Environment Variables"),(0,t.kt)("p",null,"In addition to the command line, Tenzir offers environment variables as an\nequivalent mechanism to provide options. This comes in handy when working with\nnon-interactive deployments where the command line is hard-coded, such as in\nDocker containers."),(0,t.kt)("p",null,"An environment variable has the form ",(0,t.kt)("inlineCode",{parentName:"p"},"KEY=VALUE"),", and we discuss the format of\n",(0,t.kt)("inlineCode",{parentName:"p"},"KEY")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"VALUE")," below. Tenzir processes only environment variables having the\nform ",(0,t.kt)("inlineCode",{parentName:"p"},"TENZIR_{KEY}=VALUE"),". For example, ",(0,t.kt)("inlineCode",{parentName:"p"},"TENZIR_ENDPOINT=1.2.3.4")," translates to\nthe the command line option ",(0,t.kt)("inlineCode",{parentName:"p"},"--endpoint=1.2.3.4")," and YAML configuration\n",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.endpoint: 1.2.3.4"),"."),(0,t.kt)("p",null,"Regarding precedence, environment variables override configuration file\nsettings, and command line arguments override environment variables."),(0,t.kt)("h3",d({},{id:"keys"}),"Keys"),(0,t.kt)("p",null,"There exists a one-to-one mapping from configuration file keys to environment\nvariable names. Here are two examples:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"tenzir.import.batch-size")," \ud83d\udc48 configuration file key"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"TENZIR_IMPORT__BATCH_SIZE")," \ud83d\udc48 environment variable")),(0,t.kt)("p",null,"A hierarchical key of the form ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.x.y.z")," maps to the environment variable\n",(0,t.kt)("inlineCode",{parentName:"p"},"TENZIR_X__Y__Z"),". More generally, the ",(0,t.kt)("inlineCode",{parentName:"p"},"KEY")," in ",(0,t.kt)("inlineCode",{parentName:"p"},"TENZIR_{KEY}=VALUE")," adheres to\nthe following rules:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Double underscores map to the ",(0,t.kt)("inlineCode",{parentName:"p"},".")," separator of YAML dictionaries.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Single underscores ",(0,t.kt)("inlineCode",{parentName:"p"},"_")," map to a ",(0,t.kt)("inlineCode",{parentName:"p"},"-")," in the corresponding configuration file\nkey. This is unambiguous because Tenzir does not have any options that\ninclude a literal underscore."))),(0,t.kt)("p",null,"From the perspective of the command line, the environment variable key\n",(0,t.kt)("inlineCode",{parentName:"p"},"TENZIR_X__Y__Z")," maps to ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir-ctl x y --z"),". Here are two examples with\nidentical semantics:"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"TENZIR_IMPORT__BATCH_SIZE=42 tenzir-ctl import json < data\ntenzir-ctl import --batch-size=42 json < data\n")),(0,t.kt)("admonition",d({},{title:"CAF and plugin Settings",type:"caution"}),(0,t.kt)("p",{parentName:"admonition"},"To provide CAF and plugin settings, which have the form ",(0,t.kt)("inlineCode",{parentName:"p"},"caf.x.y.z")," and\n",(0,t.kt)("inlineCode",{parentName:"p"},"plugins.name.x.y.z")," in the configuration file, the environment variable must\nhave the form ",(0,t.kt)("inlineCode",{parentName:"p"},"TENZIR_CAF__X__Y__Z")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"TENZIR_PLUGINS__NAME__X__Y__Z"),"\nrespectively."),(0,t.kt)("p",{parentName:"admonition"},"The configuration file is an exception in this regard: ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.caf.")," and\n",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.plugins.")," are invalid key prefixes. Instead, CAF and plugin\nconfiguration file keys have the prefixes ",(0,t.kt)("inlineCode",{parentName:"p"},"caf.")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"plugins."),", i.e., they are\nhoisted into the global scope.")),(0,t.kt)("h3",d({},{id:"values"}),"Values"),(0,t.kt)("p",null,"While all environment variables are strings on the shell, Tenzir parses them\ninto a typed value internally. In general, parsing values from the environment\nfollows the same syntactical rules as command line parsing."),(0,t.kt)("p",null,"In particular, this applies to lists. For example, ",(0,t.kt)("inlineCode",{parentName:"p"},'TENZIR_PLUGINS="foo,bar"'),"\nis equivalent to ",(0,t.kt)("inlineCode",{parentName:"p"},"--plugins=foo,bar"),"."),(0,t.kt)("p",null,"Tenzir ignores environment variables with an empty value because the type cannot\nbe inferred. For example, ",(0,t.kt)("inlineCode",{parentName:"p"},"TENZIR_PLUGINS=")," will not be considered."),(0,t.kt)("h2",d({},{id:"configuration-files"}),"Configuration files"),(0,t.kt)("p",null,"Tenzir's configuration file is in YAML format. On startup, Tenzir attempts to\nread configuration files from the following places, in order:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"<sysconfdir>/tenzir/tenzir.yaml")," for system-wide configuration, where\n",(0,t.kt)("inlineCode",{parentName:"p"},"sysconfdir")," is the platform-specific directory for configuration files,\ne.g., ",(0,t.kt)("inlineCode",{parentName:"p"},"<install-prefix>/etc"),".")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"~/.config/tenzir/tenzir.yaml")," for user-specific configuration. Tenzir\nrespects the XDG base directory specification and its environment variables.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"A path to a configuration file passed via ",(0,t.kt)("inlineCode",{parentName:"p"},"--config=/path/to/tenzir.yaml"),"."))),(0,t.kt)("p",null,"If there exist configuration files in multiple locations, options from all\nconfiguration files are merged in order, with the latter files receiving a\nhigher precedence than former ones. For lists, merging means concatenating the\nlist elements."),(0,t.kt)("h3",d({},{id:"plugin-configuration-files"}),"Plugin Configuration Files"),(0,t.kt)("p",null,"In addition to ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir/tenzir.yaml"),", Tenzir loads ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir/plugin/<plugin>.yaml"),"\nfor plugin-specific configuration for a given plugin named ",(0,t.kt)("inlineCode",{parentName:"p"},"<plugin>"),". The same\nrules apply as for the regular configuration file directory lookup."),(0,t.kt)("h3",d({},{id:"bare-mode"}),"Bare Mode"),(0,t.kt)("p",null,"Sometimes, users may wish to run Tenzir without side effects, e.g., when\nwrapping Tenzir in their own scripts. Run with ",(0,t.kt)("inlineCode",{parentName:"p"},"--bare-mode")," to disable looking\nat all system- and user-specified configuration paths."),(0,t.kt)("h2",d({},{id:"plugins"}),"Plugins"),(0,t.kt)("p",null,"Tenzir's ",(0,t.kt)("a",d({parentName:"p"},{href:"/architecture/plugins"}),"plugin architecture")," allows for\nflexible replacement and enhancement of functionality at various pre-defined\ncustomization points. There exist ",(0,t.kt)("strong",{parentName:"p"},"dynamic plugins")," that ship as shared\nlibraries and ",(0,t.kt)("strong",{parentName:"p"},"static plugins")," that are compiled into libtenzir."),(0,t.kt)("h3",d({},{id:"install-plugins"}),"Install plugins"),(0,t.kt)("p",null,"Dynamic plugins are just shared libraries and can be placed at a location of\nyour choice. We recommend putting them into a single directory and add the path\nto the ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.plugin-dirs")," configuration option.."),(0,t.kt)("p",null,"Static plugins do not require installation since they are compiled into Tenzir."),(0,t.kt)("h3",d({},{id:"load-plugins"}),"Load plugins"),(0,t.kt)("p",null,"The onfiguration key ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.plugins")," specifies the list of plugins that should\nload at startup. The ",(0,t.kt)("inlineCode",{parentName:"p"},"all")," plugin name is reserved. When ",(0,t.kt)("inlineCode",{parentName:"p"},"all")," is specified\nTenzir loads all available plugins in the configured plugin directories. If no\n",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.plugins")," key is specified, Tenzir will load ",(0,t.kt)("inlineCode",{parentName:"p"},"all")," plugins by default.\nTo load no plugins at all, specify a ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.plugins")," configuration key with no\nplugin values, e.g. the configuration file entry ",(0,t.kt)("inlineCode",{parentName:"p"},"plugins: []")," or launch\nparameter ",(0,t.kt)("inlineCode",{parentName:"p"},"--plugins="),"."),(0,t.kt)("p",null,"Since dynamic plugins are shared libraries, they must be loaded first into the\nrunning Tenzir process. At startup, Tenzir looks for the ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.plugins")," inside\nthe ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.plugin-dirs")," directories configured in ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.yaml"),". For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"tenzir:\n  plugin-dirs:\n    - .\n    - /opt/foo/lib\n  plugins:\n    - example\n    - /opt/bar/lib/libtenzir-plugin-example.so\n")),(0,t.kt)("p",null,"Before executing plugin code, Tenzir loads the specified plugins via ",(0,t.kt)("inlineCode",{parentName:"p"},"dlopen(3)"),"\nand attempts to initialize them as plugins. Part of the initilization is passing\nconfiguration options to the plugin. To this end, Tenzir looks for a YAML\ndictionary under ",(0,t.kt)("inlineCode",{parentName:"p"},"plugins.<name>")," in the ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir.yaml")," file. For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"# <configdir>/tenzir/tenzir.yaml\nplugins:\n  example:\n    option: 42\n")),(0,t.kt)("p",null,"Alternatively, you can specify a ",(0,t.kt)("inlineCode",{parentName:"p"},"plugin/<plugin>.yaml")," file. The example\nconfigurations above and below are equivalent. This makes plugin deployments\neasier, as plugins can be installed and uninstalled alongside their respective\nconfiguration."),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"# <configdir>/tenzir/plugin/example.yaml\noption: 42\n")),(0,t.kt)("p",null,"After initialization with the configuration options, the plugin is fully\noperational and Tenzir will call its functions at the plugin-specific\ncustomization points."),(0,t.kt)("h3",d({},{id:"list-plugins"}),"List plugins"),(0,t.kt)("p",null,"You can get the list of available plugins using the\n",(0,t.kt)("a",d({parentName:"p"},{href:"/operators/sources/show"}),(0,t.kt)("inlineCode",{parentName:"a"},"show"))," operator:"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir 'show plugins'\n")))}b.isMDXComponent=!0}}]);