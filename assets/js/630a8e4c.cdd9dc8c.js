"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16705],{15680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},y=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),c=i(n),g=r,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return n?t.createElement(m,s(s({ref:a},y),{},{components:n})):t.createElement(m,s({ref:a},y))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:r,s[1]=p;for(var i=2;i<o;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54558:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>N,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var t=n(15680),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,y=(e,a,n)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,c=(e,a)=>{for(var n in a||(a={}))l.call(a,n)&&y(e,n,a[n]);if(p)for(var n of p(a))i.call(a,n)&&y(e,n,a[n]);return e},d=(e,a)=>o(e,s(a)),g=(e,a)=>{var n={};for(var t in e)l.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&p)for(var t of p(e))a.indexOf(t)<0&&i.call(e,t)&&(n[t]=e[t]);return n};const m={sidebar_position:6},u="Transform data at rest",h={unversionedId:"usage/transform-data-at-rest",id:"version-v4.22/usage/transform-data-at-rest",title:"Transform data at rest",description:"This feature is currently only available on the command line using the",source:"@site/versioned_docs/version-v4.22/usage/transform-data-at-rest.md",sourceDirName:"usage",slug:"/usage/transform-data-at-rest",permalink:"/v4.22/usage/transform-data-at-rest",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.22/usage/transform-data-at-rest.md",tags:[],version:"v4.22",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Collect metrics",permalink:"/v4.22/usage/collect-metrics"},next:{title:"Execute Sigma rules",permalink:"/v4.22/usage/execute-sigma-rules/"}},N={},f=[{value:"Delete old data when reaching storage quota",id:"delete-old-data-when-reaching-storage-quota",level:2},{value:"Transform old data when reaching storage quota",id:"transform-old-data-when-reaching-storage-quota",level:2},{value:"Transform data after exceeding a retention span",id:"transform-data-after-exceeding-a-retention-span",level:2},{value:"Trigger a compaction cycle manually",id:"trigger-a-compaction-cycle-manually",level:2}],E={toc:f},F="wrapper";function b(e){var a=e,{components:n}=a,r=g(a,["components"]);return(0,t.yg)(F,d(c(c({},E),r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",c({},{id:"transform-data-at-rest"}),"Transform data at rest"),(0,t.yg)("admonition",c({},{title:"Currently CLI only",type:"caution"}),(0,t.yg)("p",{parentName:"admonition"},"This feature is currently only available on the command line using the\n",(0,t.yg)("inlineCode",{parentName:"p"},"tenzir-ctl")," binary. We're working on bringing it back as an operator so that\nyou can also use it from the app.")),(0,t.yg)("p",null,"Tenzir provdides several features to transform historical data at a node."),(0,t.yg)("h2",c({},{id:"delete-old-data-when-reaching-storage-quota"}),"Delete old data when reaching storage quota"),(0,t.yg)("p",null,"The disk-monitoring feature enables periodic deletion of events based on\nutilized disk storage. To limit the disk space used by a node, configure a disk\nquota:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir-node"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}})," --disk-quota-high=1TiB"))))),(0,t.yg)("p",null,"Whenever a node detects that its database has exceeded the configured quota, it\nwill erase the oldest data. You can specify a corridor for the disk space usage\nby additionally providing the option ",(0,t.yg)("inlineCode",{parentName:"p"},"--disk-quota-low"),". This can be used to\navoid running permanently at the upper limit and to instad batch the deletion\noperations together."),(0,t.yg)("p",null,"The full set of available options looks like this:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"tenzir"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  start"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"    # Triggers removal of old data when the DB dir exceeds the disk budget.")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    disk-budget-high"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"0K")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"    # When the DB dir exceeds the budget, Tenzir erases data until the directory")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"    # size falls below this value.")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    disk-budget-low"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"0K")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"    # Seconds between successive disk space checks.")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    disk-budget-check-interval"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"90"))))),(0,t.yg)("admonition",c({},{type:"note"}),(0,t.yg)("p",{parentName:"admonition"},"When using this method, we recommend placing the log file outside of the\ndatabase directory. It counts towards the size calculations, but cannot be\nautomatically deleted during a deletion cycle.")),(0,t.yg)("h2",c({},{id:"transform-old-data-when-reaching-storage-quota"}),"Transform old data when reaching storage quota"),(0,t.yg)("p",null,"Instead of deleting data periodically, a node can also trigger ",(0,t.yg)("strong",{parentName:"p"},"spatial\ncompaction")," when exceeding a given disk budget. A spatial compaction cycle\ntransforms data until disk usage falls below the budget, e.g., by removing\ncolumns or rows from certain events, or by deleting them entirely."),(0,t.yg)("p",null,"When the disk budget exceeds the configured threshold, the node decides what\ndata to compact. The compaction ",(0,t.yg)("em",{parentName:"p"},"mode")," defines how this happens. Currently,\nthere exists only one mode: ",(0,t.yg)("a",c({parentName:"p"},{href:"#weighted-age"}),"weighted age"),"."),(0,t.yg)("p",null,"This compaction mode selects all events according to a ",(0,t.yg)("em",{parentName:"p"},"weighted age"),". To\ncompute the weighted age, the node divides the actual age of an event with the\nweight assigned to this event type. For example, applying a weight of 100 to an\nevent that is 100 days old would yield a weighted age of 1 day. This causes it\nto be transformed after events that are 50 days old. Conversely, a weights less\nthan one results in an older weighted age, resulting in earlier consideration in\na compaction cycle."),(0,t.yg)("p",null,"The default weight is 1 for all event types. Here is an example configuration\nthat adjusts the weights:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"tenzir"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  plugins"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"compaction"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"plugins"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  compaction"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    space"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"      mode"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"weighted-age")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"      interval"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"6 hours")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"      disk-budget-high"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"10TiB")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"      disk-budget-low"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":   "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"8TiB")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"      weights"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"        - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"weight"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"0.1")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"          types"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"suricata.flow"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"          #pipeline: \u2026")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"        - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"weight"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"100")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"          types"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": ["),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"suricata.alert"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"]")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"          #pipeline: \u2026"))))),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"pipeline")," key for each type is optional. If present, the corresponding\npipeline processes all matching events. If absent, the nodes deletes matching\nevents."),(0,t.yg)("p",null,"Two additional keys are useful to fine-tune the behavior of the compaction\nplugin:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"compaction.space.scan-binary"),": an absolute path to a binary that should be\nexecuted to determine the current disk usage"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"compaction.space.step-size"),": adjust how many compaction candidates should be\nprocessed before re-checking the size of the database directory")),(0,t.yg)("h2",c({},{id:"transform-data-after-exceeding-a-retention-span"}),"Transform data after exceeding a retention span"),(0,t.yg)("p",null,"A node triggers ",(0,t.yg)("strong",{parentName:"p"},"temporal compaction")," according to a set of rules that define\nhow to transform events after they reach a specfic age. This declarative\nspecification makes it easy to express fine-grained data retention policies,\nwhich is often needed for regulatory requirements and compliance."),(0,t.yg)("p",null,"For each compaction cycle, the node processes all rules and identifies what\nsubset of the data has become subject to transformation. To this end, each rule\ndefines a ",(0,t.yg)("em",{parentName:"p"},"minimum")," age, i.e., a lower bound that must be exceeded before the\ncorresponding events undergo their configured pipeline."),(0,t.yg)("p",null,"To configure temporal compaction, provide a list of compaction rules under the\nkey ",(0,t.yg)("inlineCode",{parentName:"p"},"plugins.compaction.time")," in the configuration. A compaction rule defines\nthe minimum age using key ",(0,t.yg)("inlineCode",{parentName:"p"},"after"),", the pipeline to apply with the key\n",(0,t.yg)("inlineCode",{parentName:"p"},"pipeline"),", the scope in terms of schema using the key ",(0,t.yg)("inlineCode",{parentName:"p"},"types"),", and a name to\nuniquely refer to the rule. Omitting the ",(0,t.yg)("inlineCode",{parentName:"p"},"types")," key causes temporal compaction\nrules to be applied to all schemas."),(0,t.yg)("p",null,"By default, a compaction rule consumes its input, i.e., it erases the original\nevents from the database and replaces them with the transformed events. The\n",(0,t.yg)("inlineCode",{parentName:"p"},"preserve-input")," option can be specified on a temporal compaction rule to\noverride this behavior and to keep the input partitions available."),(0,t.yg)("admonition",c({},{type:"note"}),(0,t.yg)("p",{parentName:"admonition"},"A node applies each rule only once per partition and stores the applied rule\nname within the partition meta data. If you rename a rule in the configuration\nand reload a new compaction configuration, already compacted partitions will\nundergo another round of compaction.")),(0,t.yg)("p",null,"The pipelines referenced in the compaction configuration must be defined in your\nconfiguration."),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"yaml","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"yaml","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"plugins"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"  compaction"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"    time"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#8B949E"}}),"      # How often to check the `after` condition below.")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"      interval"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"1 day")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"      rules"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"        - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"after"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"2 days")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"          name"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"uri_scrubbing")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"          pipeline"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"|")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),'            replace net.url="xxx"')),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"          types"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"            - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"zeek.http")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"            - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"suricata.http")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"        - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"after"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"7 days")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"          name"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"flow_reduction")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"          pipeline"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),"|")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"            summarize ")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"              pkts_toserver=sum(flow.pkts_toserver),")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"              pkts_toclient=sum(flow.pkts_toclient),")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"              bytes_toserver=sum(flow.bytes_toserver),")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"              bytes_toclient=sum(flow.bytes_toclient),")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"              start=min(flow.start),")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"              end=max(flow.end)")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"            by")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"              timestamp,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"              src_ip,")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"              dest_ip")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"            resolution")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"              10 mins")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"          preserve-input"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),": "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#79C0FF"}}),"true")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#7EE787"}}),"          types"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),":")),"\n",(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"            - "),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"suricata.flow"))))),(0,t.yg)("h2",c({},{id:"trigger-a-compaction-cycle-manually"}),"Trigger a compaction cycle manually"),(0,t.yg)("p",null,"You can also interact with the compaction plugin on the command line, through\nthe ",(0,t.yg)("inlineCode",{parentName:"p"},"compaction")," subcommand. Use the ",(0,t.yg)("inlineCode",{parentName:"p"},"list")," subcommand to show all configured\ncompaction rules:"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir-ctl"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}})," compaction"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}})," list"))))),(0,t.yg)("p",null,"You can then trigger a compaction manually via ",(0,t.yg)("inlineCode",{parentName:"p"},"run"),":"),(0,t.yg)("figure",c({},{"data-rehype-pretty-code-figure":""}),(0,t.yg)("pre",c({parentName:"figure"},{tabIndex:0,"data-language":"bash","data-theme":"github-dark-default"}),(0,t.yg)("code",c({parentName:"pre"},{"data-language":"bash","data-theme":"github-dark-default",style:{display:"grid"}}),(0,t.yg)("span",c({parentName:"code"},{"data-line":""}),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FFA657"}}),"tenzir-ctl"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}})," compaction"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}})," run"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}})," <"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#A5D6FF"}}),"rul"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#E6EDF3"}}),"e"),(0,t.yg)("span",c({parentName:"span"},{style:{color:"#FF7B72"}}),">"))))))}b.isMDXComponent=!0}}]);