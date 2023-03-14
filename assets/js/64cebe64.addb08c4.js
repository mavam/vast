"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6287],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(t),c=a,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return t?i.createElement(f,l(l({ref:n},u),{},{components:t})):i.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[d]="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},11732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>g,default:()=>b,frontMatter:()=>f,metadata:()=>h,toc:()=>v});var i=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(r)for(var t of r(n))s.call(n,t)&&u(e,t,n[t]);return e},m=(e,n)=>o(e,l(n)),c=(e,n)=>{var t={};for(var i in e)p.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&r)for(var i of r(e))n.indexOf(i)<0&&s.call(e,i)&&(t[i]=e[i]);return t};const f={sidebar_position:4},g="Configure",h={unversionedId:"setup/configure",id:"setup/configure",title:"Configure",description:"VAST offers several mechanisms to adjust configuration options on startup.",source:"@site/docs/setup/configure.md",sourceDirName:"setup",slug:"/setup/configure",permalink:"/docs/next/setup/configure",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup/configure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"macOS",permalink:"/docs/next/setup/install/macos"},next:{title:"Deploy",permalink:"/docs/next/setup/deploy/"}},k={},v=[{value:"Command Line",id:"command-line",level:2},{value:"Get help",id:"get-help",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Keys",id:"keys",level:3},{value:"Values",id:"values",level:3},{value:"Configuration files",id:"configuration-files",level:2},{value:"Plugin Configuration Files",id:"plugin-configuration-files",level:3},{value:"Bare Mode",id:"bare-mode",level:3},{value:"Plugins",id:"plugins",level:2},{value:"Install plugins",id:"install-plugins",level:3},{value:"Load plugins",id:"load-plugins",level:3},{value:"Show plugins",id:"show-plugins",level:3}],y={toc:v},N="wrapper";function b(e){var n=e,{components:t}=n,a=c(n,["components"]);return(0,i.kt)(N,m(d(d({},y),a),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",d({},{id:"configure"}),"Configure"),(0,i.kt)("p",null,"VAST offers several mechanisms to adjust configuration options on startup."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Command-line arguments"),(0,i.kt)("li",{parentName:"ol"},"Environment variables"),(0,i.kt)("li",{parentName:"ol"},"Configuration files"),(0,i.kt)("li",{parentName:"ol"},"Compile-time defaults")),(0,i.kt)("p",null,"These mechanisms are sorted by precedence, i.e., command-line arguments override\nenvironment variables, which override configuration file settings."),(0,i.kt)("p",null,"Compile-time defaults can only be changed by ",(0,i.kt)("a",d({parentName:"p"},{href:"/docs/next/setup/build"}),"rebuilding VAST from\nsource"),"."),(0,i.kt)("h2",d({},{id:"command-line"}),"Command Line"),(0,i.kt)("p",null,"VAST has a hierarchical command structure of this form:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast [opts] cmd1 [opts1] cmd2 [opts2] ...\n")),(0,i.kt)("p",null,"Both long ",(0,i.kt)("inlineCode",{parentName:"p"},"--long=X")," and short ",(0,i.kt)("inlineCode",{parentName:"p"},"-s X")," exist. Boolean options do not require\nexplicit specification of a value, and it suffices to write ",(0,i.kt)("inlineCode",{parentName:"p"},"--long")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-s"),"\nto set an option to true."),(0,i.kt)("admonition",d({},{title:"Hierarchical Options",type:"info"}),(0,i.kt)("p",{parentName:"admonition"},"Each command has its own dedicated set of options. Options are not global and\nonly valid for their respective command. Consider this example:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast --option foo # option applies to command 'vast'\nvast foo --option # option applies to command 'foo'\n"))),(0,i.kt)("h3",d({},{id:"get-help"}),"Get help"),(0,i.kt)("p",null,"You get short usage instructions for every command by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"help"),"\nsub-command or providing the option ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," (which has the shorthand ",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast help\nvast --help\nvast -h\n")),(0,i.kt)("p",null,"The same help pattern applies to (sub-)commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast export help\nvast export --help\nvast export -h\n")),(0,i.kt)("h2",d({},{id:"environment-variables"}),"Environment Variables"),(0,i.kt)("p",null,"In addition to the command line, VAST offers environment variables as an\nequivalent mechanism to provide options. This comes in handy when working with\nnon-interactive deployments where the command line is hard-coded, such as in\nDocker containers."),(0,i.kt)("p",null,"An environment variable has the form ",(0,i.kt)("inlineCode",{parentName:"p"},"KEY=VALUE"),", and we discuss the format of\n",(0,i.kt)("inlineCode",{parentName:"p"},"KEY")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VALUE")," below. VAST processes only environment variables having the\nform ",(0,i.kt)("inlineCode",{parentName:"p"},"VAST_{KEY}=VALUE"),". For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"VAST_ENDPOINT=1.2.3.4")," translates to the\nthe command line option ",(0,i.kt)("inlineCode",{parentName:"p"},"--endpoint=1.2.3.4")," and YAML configuration\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast.endpoint: 1.2.3.4"),"."),(0,i.kt)("p",null,"Regarding precedence, environment variables override configuration file\nsettings, and command line arguments override environment variables."),(0,i.kt)("h3",d({},{id:"keys"}),"Keys"),(0,i.kt)("p",null,"There exists a one-to-one mapping from configuration file keys to environment\nvariable names. Here are two examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vast.import.batch-size")," \ud83d\udc48 configuration file key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VAST_IMPORT__BATCH_SIZE")," \ud83d\udc48 environment variable")),(0,i.kt)("p",null,"A hierarchical key of the form ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.x.y.z")," maps to the environment variable\n",(0,i.kt)("inlineCode",{parentName:"p"},"VAST_X__Y__Z"),". More generally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"KEY")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"VAST_{KEY}=VALUE")," adheres to the\nfollowing rules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Double underscores map to the ",(0,i.kt)("inlineCode",{parentName:"p"},".")," separator of YAML dictionaries.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Single underscores ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," map to a ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," in the corresponding configuration file\nkey. This is unambiguous because VAST does not have any options that include\na literal underscore."))),(0,i.kt)("p",null,"From the perspective of the command line, the environment variable key\n",(0,i.kt)("inlineCode",{parentName:"p"},"VAST_X__Y__Z")," maps to ",(0,i.kt)("inlineCode",{parentName:"p"},"vast x y --z"),". Here are two examples with identical\nsemantics:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"VAST_IMPORT__BATCH_SIZE=42 vast import json < data\nvast import --batch-size=42 json < data\n")),(0,i.kt)("admonition",d({},{title:"CAF and plugin Settings",type:"caution"}),(0,i.kt)("p",{parentName:"admonition"},"To provide CAF and plugin settings, which have the form ",(0,i.kt)("inlineCode",{parentName:"p"},"caf.x.y.z")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.name.x.y.z")," in the configuration file, the environment variable must\nhave the form ",(0,i.kt)("inlineCode",{parentName:"p"},"VAST_CAF__X__Y__Z")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VAST_PLUGINS__NAME__X__Y__Z"),"\nrespectively."),(0,i.kt)("p",{parentName:"admonition"},"The configuration file is an exception in this regard: ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.caf.")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast.plugins.")," are invalid key prefixes. Instead, CAF and plugin configuration\nfile keys have the prefixes ",(0,i.kt)("inlineCode",{parentName:"p"},"caf.")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins."),", i.e., they are hoisted into\nthe global scope.")),(0,i.kt)("h3",d({},{id:"values"}),"Values"),(0,i.kt)("p",null,"While all environment variables are strings on the shell, VAST parses them into\na typed value internally. In general, parsing values from the environment\nfollows the same syntactical rules as command line parsing."),(0,i.kt)("p",null,"In particular, this applies to lists. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},'VAST_PLUGINS="sigma,pcap"'),"\nis equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"--plugins=foo,bar"),"."),(0,i.kt)("p",null,"VAST ignores environment variables with an empty value because the type cannot\nbe inferred. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"VAST_PLUGINS=")," will not be considered."),(0,i.kt)("h2",d({},{id:"configuration-files"}),"Configuration files"),(0,i.kt)("p",null,"VAST's configuration file is in YAML format. On startup, VAST attempts to read\nconfiguration files from the following places, in order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"<sysconfdir>/vast/vast.yaml")," for system-wide configuration, where\n",(0,i.kt)("inlineCode",{parentName:"p"},"sysconfdir")," is the platform-specific directory for configuration files,\ne.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"<install-prefix>/etc"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/vast/vast.yaml")," for user-specific configuration. VAST respects\nthe XDG base directory specification and its environment variables.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A path to a configuration file passed via ",(0,i.kt)("inlineCode",{parentName:"p"},"--config=/path/to/vast.yaml"),"."))),(0,i.kt)("p",null,"If there exist configuration files in multiple locations, options from all\nconfiguration files are merged in order, with the latter files receiving a\nhigher precedence than former ones. For lists, merging means concatenating the\nlist elements."),(0,i.kt)("h3",d({},{id:"plugin-configuration-files"}),"Plugin Configuration Files"),(0,i.kt)("p",null,"In addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"vast/vast.yaml"),", VAST loads ",(0,i.kt)("inlineCode",{parentName:"p"},"vast/plugin/<plugin>.yaml")," for\nplugin-specific configuration for a given plugin named ",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>"),". The same\nrules apply as for the regular configuration file directory lookup."),(0,i.kt)("h3",d({},{id:"bare-mode"}),"Bare Mode"),(0,i.kt)("p",null,"Sometimes, users may wish to run VAST without side effects, e.g., when wrapping\nVAST in their own scripts. Run with ",(0,i.kt)("inlineCode",{parentName:"p"},"--bare-mode")," to disable looking at all\nsystem- and user-specified configuration paths."),(0,i.kt)("h2",d({},{id:"plugins"}),"Plugins"),(0,i.kt)("p",null,"VAST's ",(0,i.kt)("a",d({parentName:"p"},{href:"/docs/next/understand/architecture/plugins"}),"plugin architecture")," allows for\nflexible replacement and enhancement of functionality at various pre-defined\ncustomization points. There exist ",(0,i.kt)("strong",{parentName:"p"},"dynamic plugins")," that ship as shared\nlibraries and ",(0,i.kt)("strong",{parentName:"p"},"static plugins")," that are compiled into libvast."),(0,i.kt)("h3",d({},{id:"install-plugins"}),"Install plugins"),(0,i.kt)("p",null,"Dynamic plugins are just shared libraries and can be placed at a location of\nyour choice. We recommend putting them into a single directory and add the path\nto the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.plugin-dirs")," configuration option.."),(0,i.kt)("p",null,"Static plugins do not require installation since they are compiled into VAST."),(0,i.kt)("h3",d({},{id:"load-plugins"}),"Load plugins"),(0,i.kt)("p",null,"The onfiguration key ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.plugins")," specifies the list of plugins that should\nload at startup. The ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," plugin name is reserved. When ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," is specified\nVAST loads all available plugins in the configured plugin directories. If no\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast.plugins")," key is specified, VAST will load ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," plugins by default.\nTo load no plugins at all, specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.plugins")," configuration key with no\nplugin values, e.g. the configuration file entry ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins: []")," or launch\nparameter ",(0,i.kt)("inlineCode",{parentName:"p"},"--plugins="),"."),(0,i.kt)("p",null,"Since dynamic plugins are shared libraries, they must be loaded first into the\nrunning VAST process. At startup, VAST looks for the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.plugins")," inside the\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast.plugin-dirs")," directories configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.yaml"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"vast:\n  plugin-dirs:\n    - .\n    - /opt/foo/lib\n  plugins:\n    - example\n    - /opt/bar/lib/libvast-plugin-example.so\n")),(0,i.kt)("p",null,"Before executing plugin code, VAST loads the specified plugins via ",(0,i.kt)("inlineCode",{parentName:"p"},"dlopen(3)"),"\nand attempts to initialize them as plugins. Part of the initilization is passing\nconfiguration options to the plugin. To this end, VAST looks for a YAML\ndictionary under ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.<name>")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.yaml")," file. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"# <configdir>/vast/vast.yaml\nplugins:\n  example:\n    option: 42\n")),(0,i.kt)("p",null,"Alternatively, you can specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin/<plugin>.yaml")," file. The example\nconfigurations above and below are equivalent. This makes plugin deployments\neasier, as plugins can be installed and uninstalled alongside their respective\nconfiguration."),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"# <configdir>/vast/plugin/example.yaml\noption: 42\n")),(0,i.kt)("p",null,"After initialization with the configuration options, the plugin is fully\noperational and VAST will call its functions at the plugin-specific\ncustomization points."),(0,i.kt)("h3",d({},{id:"show-plugins"}),"Show plugins"),(0,i.kt)("p",null,"You can get a list of all plugins and their respective version by running\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast version"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "VAST": "v1.4.1-97-gced115d91-dirty",\n  "CAF": "0.17.6",\n  "Apache Arrow": "2.0.0",\n  "PCAP": "libpcap version 1.9.1",\n  "jemalloc": null,\n  "plugins": {\n    "example": "v0.4.1-g14cee3e48-dirty"\n  }\n}\n')),(0,i.kt)("p",null,"The version of a plugin consists of three optional parts, separated by dashes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The CMake project version of the plugin"),(0,i.kt)("li",{parentName:"ol"},"The Git revision of the last commit that touched the plugin"),(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"dirty")," suffix for uncommited changes to the plugin")),(0,i.kt)("p",null,"Plugins created with the recommended scaffolding use the above version number\nformat."))}b.isMDXComponent=!0}}]);