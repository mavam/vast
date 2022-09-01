"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3216],{32249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={},r="Transform",l={unversionedId:"use-vast/transform/README",id:"use-vast/transform/README",title:"Transform",description:"VAST has powerful features for transforming [data in",source:"@site/docs/use-vast/transform/README.md",sourceDirName:"use-vast/transform",slug:"/use-vast/transform/",permalink:"/docs/use-vast/transform/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use-vast/transform/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Query",permalink:"/docs/use-vast/query/"},next:{title:"Introspect",permalink:"/docs/use-vast/introspect/"}},s={},p=[{value:"Modify data in motion",id:"modify-data-in-motion",level:2},{value:"Modify data at rest",id:"modify-data-at-rest",level:2},{value:"Delete old data when reaching storage quota",id:"delete-old-data-when-reaching-storage-quota",level:3},{value:"Transform old data when reaching storage quota",id:"transform-old-data-when-reaching-storage-quota",level:3},{value:"Transform data after exceeding a retention span",id:"transform-data-after-exceeding-a-retention-span",level:3},{value:"Trigger a compaction manually",id:"trigger-a-compaction-manually",level:3}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transform"},"Transform"),(0,i.kt)("p",null,"VAST has powerful features for transforming ",(0,i.kt)("a",{parentName:"p",href:"#modify-data-in-motion"},"data in\nmotion")," and ",(0,i.kt)("a",{parentName:"p",href:"#modify-data-at-rest"},"data at rest"),". Both\naspects rely on ",(0,i.kt)("a",{parentName:"p",href:"/docs/understand-vast/query-language/pipelines"},"pipelines")," as\nbuilding block."),(0,i.kt)("h2",{id:"modify-data-in-motion"},"Modify data in motion"),(0,i.kt)("p",null,"VAST supports ",(0,i.kt)("em",{parentName:"p"},"import")," and ",(0,i.kt)("em",{parentName:"p"},"export")," pipelines. The former apply to new data\ningested into the system, the latter apply to the results of a VAST query. Both\nimport and export pipelines can run in the server or client process. For\nimports, the client is the source generating the data, for exports the client is\nthe sink receiving the exported data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pipelines",src:n(18676).Z+"#gh-light-mode-only",width:"2480",height:"1014"}),"\n",(0,i.kt)("img",{alt:"Pipelines",src:n(23405).Z+"#gh-dark-mode-only",width:"2480",height:"1014"})),(0,i.kt)("p",null,"The flexible combination of location and type of pipeline type enables multiple\nuse cases:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Use case"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client"),(0,i.kt)("td",{parentName:"tr",align:null},"Import"),(0,i.kt)("td",{parentName:"tr",align:null},"Enrichment"),(0,i.kt)("td",{parentName:"tr",align:null},"Add community ID to flow telemetry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Server"),(0,i.kt)("td",{parentName:"tr",align:null},"Import"),(0,i.kt)("td",{parentName:"tr",align:null},"Compliance"),(0,i.kt)("td",{parentName:"tr",align:null},"Anonymize PII data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client"),(0,i.kt)("td",{parentName:"tr",align:null},"Export"),(0,i.kt)("td",{parentName:"tr",align:null},"Post-processing"),(0,i.kt)("td",{parentName:"tr",align:null},"Compute expensive function (e.g., string entropy)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Server"),(0,i.kt)("td",{parentName:"tr",align:null},"Export"),(0,i.kt)("td",{parentName:"tr",align:null},"Access control"),(0,i.kt)("td",{parentName:"tr",align:null},"Remove sensitive fields")))),(0,i.kt)("p",null,"Deploying a pipeline involves involves two separate configuration steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define the pipeline"),(0,i.kt)("li",{parentName:"ol"},"Trigger the pipeline")),(0,i.kt)("p",null,"The trigger determines when and where a pipeline executes. Here is an example\nconfiguration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  pipelines:\n     example_pipeline:\n       - operator1:\n       - operator2:\n  pipeline-triggers:\n    import:\n      - pipeline: example_pipeline\n        location: server\n        events: [intel.ioc, zeek.conn]\n")),(0,i.kt)("p",null,"Triggers are defined under configuration key ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.pipeline-triggers"),". The two\nsubkeys ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," specify the pipeline type the trigger itself is a\ndictionary with three keys:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pipeline"),": the name one of a previously defined pipeline"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"location"),": either ",(0,i.kt)("inlineCode",{parentName:"li"},"server")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"client")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"events"),": a list of event types for which the pipeline fires")),(0,i.kt)("p",null,"The above example configures ",(0,i.kt)("inlineCode",{parentName:"p"},"example_pipeline")," to run at on the server side\nduring import for the two events ",(0,i.kt)("inlineCode",{parentName:"p"},"intel.ioc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"zeek.conn"),"."),(0,i.kt)("h2",{id:"modify-data-at-rest"},"Modify data at rest"),(0,i.kt)("h3",{id:"delete-old-data-when-reaching-storage-quota"},"Delete old data when reaching storage quota"),(0,i.kt)("p",null,"VAST's disk-monitoring feature enables periodic deletion of events based on\nutilized disk storage. To limit the disk space used by the VAST database,\nconfigure a disk quota:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vast start --disk-quota-high=1TiB\n")),(0,i.kt)("p",null,"Whenever VAST detects that its database directory has grown to exceed the\nconfigured quota, it will erase the oldest data in the database. It is possible\nto specify an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"--disk-quota-low")," option to define a corridor for\nthe disk space usage. This can be used to avoid having VAST running permanently\nat the upper limit and to instad batch the deletion operations together."),(0,i.kt)("p",null,"The full set of available options looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  start:\n    # Triggers removal of old data when the DB dir exceeds the disk budget.\n    disk-budget-high: 0K\n    # When the DB dir exceeds the budget, VAST erases data until the directory size\n    # falls below this value.\n    disk-budget-low: 0K\n    # Seconds between successive disk space checks.\n    disk-budget-check-interval: 90\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When using this method, we recommend placing the log file outside of the\ndatabase directory. It counts towards the size calculations, but cannot be\nautomatically deleted during a deletion cycle.")),(0,i.kt)("h3",{id:"transform-old-data-when-reaching-storage-quota"},"Transform old data when reaching storage quota"),(0,i.kt)("p",null,"Instead of just deleting data periodically, VAST can also trigger ",(0,i.kt)("strong",{parentName:"p"},"spatial\ncompaction")," when exceeding a given disk budget. A spatial compaction cycle\ntransforms data until disk usage falls below the budget, e.g., by removing\ncolumns or rows from certain events, or by deleting them entirely."),(0,i.kt)("p",null,"When the disk budget exceeds the configured threshold, VAST decides what data\nto compact. The compaction ",(0,i.kt)("em",{parentName:"p"},"mode")," defines how this happens. Currently, there\nexists only one mode: ",(0,i.kt)("a",{parentName:"p",href:"#weighted-age"},"weighted age"),"."),(0,i.kt)("p",null,"This compaction mode selects all events according to a ",(0,i.kt)("em",{parentName:"p"},"weighted age"),". To\ncompute the weighted age, VAST divides the actual age of an event with the\nweight assigned to this event type. For example, applying a weight of 100 to an\nevent that is 100 days old would yield a weighted age of 1 day. This causes it\nto be transformed after events that are 50 days old. Conversely, a weights less\nthan one results in an older weighted age, resulting in earlier consideration in\na compaction cycle."),(0,i.kt)("p",null,"The default weight is 1 for all event types. Here is an example configuration\nthat adjusts the weights:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  plugins: [compaction]\nplugins:\n  compaction:\n    space:\n      mode: weighted-age\n      interval: 6 hours\n      disk-budget-high: 10TiB\n      disk-budget-low:   8TiB\n      weights:\n        - weight: 0.1\n          types: [suricata.flow]\n          #pipeline: fancy_flow_compaction\n        - weight: 100\n          types: [suricata.alert]\n          #pipeline: fancy_alert_compaction\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeline")," key for each type is optional. If present, the corresponding\npipeline processes all matching events. If absent, VAST deletes matching events."),(0,i.kt)("p",null,"Two additional keys are useful to fine-tune the behavior of the compaction\nplugin:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"compaction.space.scan-binary"),": an absolute path to a binary that should be\nexecuted to determine the current disk usage"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"compaction.space.step-size"),": adjust how many compaction candidates should be\nprocessed before re-checking the size of the database directory")),(0,i.kt)("h3",{id:"transform-data-after-exceeding-a-retention-span"},"Transform data after exceeding a retention span"),(0,i.kt)("p",null,"VAST triggers temporal compaction according to a set of rules that define how\nto transform events after they reach a specfic age. This declarative\nspecification makes it easy to express fine-grained data retention policies,\nwhich is often needed for regulatory requirements and compliance."),(0,i.kt)("p",null,"For each compaction cycle, VAST processes all rules and identifies what subset\nof the data has become subject to transformation. To this end, each rule\ndefines a ",(0,i.kt)("em",{parentName:"p"},"minimum")," age, i.e., a lower bound that must be exceeded before the\ncorresponding events undergo their configured pipeline."),(0,i.kt)("p",null,"To configure temporal compaction, provide a list of compaction rules under the\nkey ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.compaction.time")," in the VAST configuration. A compaction rule\ndefines the minimum age using key ",(0,i.kt)("inlineCode",{parentName:"p"},"after"),", the pipeline to apply with the\nkey ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeline"),", the scope in terms of schema using the key ",(0,i.kt)("inlineCode",{parentName:"p"},"types"),", and a name\nto uniquely refer to the rule. Omitting the ",(0,i.kt)("inlineCode",{parentName:"p"},"types")," key causes temporal\ncompaction rules to be applied to all schemas."),(0,i.kt)("p",null,"By default, a compaction rule consumes its input, i.e. it erases the original\nevents from the database and replaces them with the transformed events. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"preserve-input")," option can be specified on a temporal compaction rule to override\nthis behavior and to keep the input partitions available."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"VAST applies each rule only once per partition and stores the applied rule name\nwithin the partition meta data. If you rename a rule in the configuration and\nreload a new compaction configuration, already compacted partitions will undergo\nanother round of compaction.")),(0,i.kt)("p",null,"The pipelines referenced in the compaction configuration must be defined in the\nVAST configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'vast:\n  plugins: [compaction]\n  pipelines:\n    anonymize_urls:\n      - replace:\n          field: net.url\n          value: "xxx"\n    aggregate_flows:\n      - aggregate-suricata-flow:\n          bucket: 10min\nplugins:\n  compaction:\n    time:\n      # How often to check the `after` condition below.\n      interval: 1 day\n      rules:\n        - after: 2 days\n          name: uri_scrubbing\n          pipeline: anonymize_urls\n          types:\n            - zeek.http\n            - suricata.http\n        - after: 7 days\n          name: flow_reduction\n          pipeline: aggregate_flows\n          keep: true\n          types:\n            - suricata.flow\n')),(0,i.kt)("h3",{id:"trigger-a-compaction-manually"},"Trigger a compaction manually"),(0,i.kt)("p",null,"You can also interact with the compaction plugin on the command line, through\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"compaction")," subcommand. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," subcommand to show all configured\ncompaction rules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vast compaction list\n")),(0,i.kt)("p",null,"You can then trigger a compaction manually with the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," sub-command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vast compaction run <rule>\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"compaction")," plugin needs to be loaded both by the client and the server process to\nuse the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast compaction")," subcommand.")),(0,i.kt)("p",null,"For an overview of the current status of the compaction plugin, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast status")," subcommand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vast status | jq .compaction\n")))}c.isMDXComponent=!0},23405:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pipelines.dark-07f9a4f5be9a29e87dcad97252aa9098.png"},18676:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pipelines.light-0fa21a8a1b4e64657a030463d944ecee.png"}}]);