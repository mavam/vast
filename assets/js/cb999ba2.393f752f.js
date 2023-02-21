"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5665],{41837:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.0","info":{"title":"VAST Rest API","version":"\\"0.1\\"","description":"\\nThis API can be used to interact with a VAST Node in a RESTful manner.\\n\\nAll API requests must be authenticated with a valid token, which must be\\nsupplied in the `X-VAST-Token` request header. The token can be generated\\non the command-line using the `vast rest generate-token` command."},"servers":[{"url":"https://vast.example.com/api/v0"}],"security":[{"VastToken":[]}],"components":{"securitySchemes":{"VastToken":{"type":"apiKey","in":"header","name":"X-VAST-Token"}}},"paths":{"/export":{"get":{"summary":"Export data","description":"Export data from VAST according to a query. The query must be a valid expression in the VAST language. (see https://vast.io/docs/understand/language)","parameters":[{"in":"query","name":"query","schema":{"type":"string","default":"A query matching every event."},"required":true,"description":"The query expression to execute.","example":":ip in 10.42.0.0/16"},{"in":"query","name":"limit","schema":{"type":"int64","default":50},"required":false,"description":"Maximum number of returned events.","example":3},{"in":"query","name":"flatten","schema":{"type":"boolean","default":false},"required":false,"description":"Flatten nested elements in the response data.","example":false},{"in":"query","name":"omit-nulls","schema":{"type":"boolean","default":false},"required":false,"description":"Omit null elements in the response data.","example":false},{"in":"query","name":"numeric-durations","schema":{"type":"boolean","default":false},"required":false,"description":"Render durations as numeric values.","example":false}],"responses":{"200":{"description":"The result data.","content":{"application/json":{"schema":{"type":"object","properties":{"num-events":{"type":"int64"},"version":{"type":"string"},"events":{"type":"array","items":{"type":"object"}}},"example":{"version":"v2.3.0-169-ge42a9652e5-dirty","num-events":3,"events":["{\\"timestamp\\": \\"2011-08-14T05:38:55.549713\\", \\"flow_id\\": 929669869939483, \\"pcap_cnt\\": null, \\"vlan\\": null, \\"in_iface\\": null, \\"src_ip\\": \\"147.32.84.165\\", \\"src_port\\": 138, \\"dest_ip\\": \\"147.32.84.255\\", \\"dest_port\\": 138, \\"proto\\": \\"UDP\\", \\"event_type\\": \\"netflow\\", \\"community_id\\": null, \\"netflow\\": {\\"pkts\\": 2, \\"bytes\\": 486, \\"start\\": \\"2011-08-12T12:53:47.928539\\", \\"end\\": \\"2011-08-12T12:53:47.928552\\", \\"age\\": 0}, \\"app_proto\\": \\"failed\\"}","{\\"timestamp\\": \\"2011-08-12T13:00:36.378914\\", \\"flow_id\\": 269421754201300, \\"pcap_cnt\\": 22569, \\"vlan\\": null, \\"in_iface\\": null, \\"src_ip\\": \\"147.32.84.165\\", \\"src_port\\": 1027, \\"dest_ip\\": \\"74.125.232.202\\", \\"dest_port\\": 80, \\"proto\\": \\"TCP\\", \\"event_type\\": \\"http\\", \\"community_id\\": null, \\"http\\": {\\"hostname\\": \\"cr-tools.clients.google.com\\", \\"url\\": \\"/service/check2?appid=%7B430FD4D0-B729-4F61-AA34-91526481799D%7D&appversion=1.3.21.65&applang=&machine=0&version=1.3.21.65&osversion=5.1&servicepack=Service%20Pack%202\\", \\"http_port\\": null, \\"http_user_agent\\": \\"Google Update/1.3.21.65;winhttp\\", \\"http_content_type\\": null, \\"http_method\\": \\"GET\\", \\"http_refer\\": null, \\"protocol\\": \\"HTTP/1.1\\", \\"status\\": null, \\"redirect\\": null, \\"length\\": 0}, \\"tx_id\\": 0}","{\\"timestamp\\": \\"2011-08-14T05:38:55.549713\\", \\"flow_id\\": 929669869939483, \\"pcap_cnt\\": null, \\"vlan\\": null, \\"in_iface\\": null, \\"src_ip\\": \\"147.32.84.165\\", \\"src_port\\": 138, \\"dest_ip\\": \\"147.32.84.255\\", \\"dest_port\\": 138, \\"proto\\": \\"UDP\\", \\"event_type\\": \\"netflow\\", \\"community_id\\": null, \\"netflow\\": {\\"pkts\\": 2, \\"bytes\\": 486, \\"start\\": \\"2011-08-12T12:53:47.928539\\", \\"end\\": \\"2011-08-12T12:53:47.928552\\", \\"age\\": 0}, \\"app_proto\\": \\"failed\\"}"]}}}}},"401":{"description":"Not authenticated."},"422":{"description":"Invalid query string or invalid limit."}}},"post":{"summary":"Export data","description":"Export data from VAST according to a query. The query must be a valid expression in the VAST language (see https://vast.io/docs/understand/query), followed by an optional pipeline.","requestBody":{"description":"Request parameters","required":false,"content":{"application/json":{"schema":{"type":"object","required":["query"],"properties":{"query":{"type":"string","description":"The query expression to execute.","example":":ip in 10.42.0.0/16 | head 50","default":"A query matching every event."},"limit":{"type":"int64","default":50,"description":"Maximum number of returned events","example":3},"omit-nulls":{"type":"boolean","description":"Omit null elements in the response data.","default":false,"example":false},"numeric-durations":{"type":"boolean","default":false,"description":"Render durations as numeric values.","example":false},"flatten":{"type":"boolean","default":true,"description":"Flatten nested elements in the response data.","example":false}}}}}},"responses":{"200":{"description":"The result data.","content":{"application/json":{"schema":{"type":"object","properties":{"num-events":{"type":"int64"},"events":{"type":"array","items":{"type":"object"}}},"example":{"events":["{\\"timestamp\\": \\"2011-08-14T05:38:55.549713\\", \\"flow_id\\": 929669869939483, \\"pcap_cnt\\": null, \\"vlan\\": null, \\"in_iface\\": null, \\"src_ip\\": \\"147.32.84.165\\", \\"src_port\\": 138, \\"dest_ip\\": \\"147.32.84.255\\", \\"dest_port\\": 138, \\"proto\\": \\"UDP\\", \\"event_type\\": \\"netflow\\", \\"community_id\\": null, \\"netflow\\": {\\"pkts\\": 2, \\"bytes\\": 486, \\"start\\": \\"2011-08-12T12:53:47.928539\\", \\"end\\": \\"2011-08-12T12:53:47.928552\\", \\"age\\": 0}, \\"app_proto\\": \\"failed\\"}","{\\"timestamp\\": \\"2011-08-12T13:00:36.378914\\", \\"flow_id\\": 269421754201300, \\"pcap_cnt\\": 22569, \\"vlan\\": null, \\"in_iface\\": null, \\"src_ip\\": \\"147.32.84.165\\", \\"src_port\\": 1027, \\"dest_ip\\": \\"74.125.232.202\\", \\"dest_port\\": 80, \\"proto\\": \\"TCP\\", \\"event_type\\": \\"http\\", \\"community_id\\": null, \\"http\\": {\\"hostname\\": \\"cr-tools.clients.google.com\\", \\"url\\": \\"/service/check2?appid=%7B430FD4D0-B729-4F61-AA34-91526481799D%7D&appversion=1.3.21.65&applang=&machine=0&version=1.3.21.65&osversion=5.1&servicepack=Service%20Pack%202\\", \\"http_port\\": null, \\"http_user_agent\\": \\"Google Update/1.3.21.65;winhttp\\", \\"http_content_type\\": null, \\"http_method\\": \\"GET\\", \\"http_refer\\": null, \\"protocol\\": \\"HTTP/1.1\\", \\"status\\": null, \\"redirect\\": null, \\"length\\": 0}, \\"tx_id\\": 0}","{\\"timestamp\\": \\"2011-08-14T05:38:55.549713\\", \\"flow_id\\": 929669869939483, \\"pcap_cnt\\": null, \\"vlan\\": null, \\"in_iface\\": null, \\"src_ip\\": \\"147.32.84.165\\", \\"src_port\\": 138, \\"dest_ip\\": \\"147.32.84.255\\", \\"dest_port\\": 138, \\"proto\\": \\"UDP\\", \\"event_type\\": \\"netflow\\", \\"community_id\\": null, \\"netflow\\": {\\"pkts\\": 2, \\"bytes\\": 486, \\"start\\": \\"2011-08-12T12:53:47.928539\\", \\"end\\": \\"2011-08-12T12:53:47.928552\\", \\"age\\": 0}, \\"app_proto\\": \\"failed\\"}"],"num-events":3}}}}},"401":{"description":"Not authenticated."},"422":{"description":"Invalid query string or invalid limit."}}}},"/export/with-schemas":{"post":{"summary":"Export data with schema information","description":"Export data from VAST according to a query. The query must be a valid expression in the VAST language. (see https://vast.io/docs/understand/language). The data is returned grouped by schema.\\n","requestBody":{"description":"Request parameters","required":false,"content":{"application/json":{"schema":{"type":"object","required":["query"],"properties":{"query":{"type":"string","description":"The query expression to execute.","example":":ip in 10.42.0.0/16 | head 50","default":"A query matching every event."},"limit":{"type":"int64","default":50,"description":"Maximum number of returned events","example":3},"omit-nulls":{"type":"boolean","description":"Omit null elements in the response data.","default":false,"example":false},"numeric-durations":{"type":"boolean","default":false,"description":"Render durations as numeric values.","example":false},"flatten":{"type":"boolean","default":true,"description":"Flatten nested elements in the response data.","example":false}}}}}},"responses":{"200":{"description":"The result data.","content":{"application/json":{"schema":{"type":"object","properties":{"num_events":{"type":"int64"},"version":{"type":"string"},"events":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"schema":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"type":{"type":"string"}}}},"data":{"type":"array","items":{"type":"object"}}}}}},"example":{"version":"v2.3.0-169-ge42a9652e5-dirty","num_events":3,"events":[{"name":"suricata.netflow","schema":[{"name":"timestamp","type":"timestamp"},{"name":"pcap_cnt","type":"count"},{"name":"src_ip","type":"addr"},{"name":"src_port","type":"count"},{"name":"pkts","type":"count"},{"name":"bytes","type":"count"},{"name":"action","type":"enum {allowed: 0, blocked: 1}"}],"data":["{\\"timestamp\\": \\"2011-08-14T05:38:55.549713\\", \\"pcap_cnt\\": null,  \\"src_ip\\": \\"147.32.84.165\\", \\"src_port\\": 138, \\"netflow.pkts\\": 2, \\"netflow.bytes\\": 486, \\"alert.action\\": \\"allowed\\"}"]}]}}}}},"401":{"description":"Not authenticated."},"422":{"description":"Invalid query string or invalid limit."}}}},"/query/new":{"post":{"summary":"Create new query","description":"Create a new export query in VAST","parameters":[{"in":"query","name":"query","schema":{"type":"string","example":":ip in 10.42.0.0/16 | head 100"},"required":true,"description":"The query used, optionally including an open pipeline.\\n"},{"in":"ttl","name":"ttl","schema":{"type":"string","example":"5.0m"},"required":false,"description":"The time after which a query is cancelled. Use the /query/:id/next\\nendpoint to refresh the TTL. To refresh the TTL without requesting\\nfurther events, request zero events.\\n"},{"in":"expand","name":"expand","schema":{"type":"bool","example":false},"required":false,"description":"Whether to use the expanded output schema.\\n"}],"responses":{"200":{"description":"Success.","content":{"application/json":{"schema":{"type":"object","example":{"id":"c91019bf-21fe-4999-8323-4d28aeb111ab"},"properties":{"id":{"type":"string"}}}}}},"401":{"description":"Not authenticated."},"422":{"description":"Invalid expression or invalid lifetime."}}}},"/query/{id}/next":{"get":{"summary":"Get additional query results","description":"Return `n` additional results from the specified query.","parameters":[{"in":"path","name":"id","schema":{"type":"string"},"required":true,"example":"e84308a2-1ba4-4559-9e0f-597dfea4fd3e","description":"The query ID."},{"in":"query","name":"n","schema":{"type":"int64"},"required":false,"example":10,"description":"Maximum number of returned events"}],"responses":{"200":{"description":"Success.","content":{"application/json":{"schema":{"type":"object","properties":{"events":{"type":"array","items":{"type":"object"},"description":"The returned events, including a schema-ref that uniquely\\nidentifies the schema for each row.\\n"},"schemas":{"type":"array","items":{"type":"object"},"description":"The schemas referenced in the events section of the same\\nreply, using the same format as the `vast show schemas`\\ncommand.\\n"}},"example":{"events":[{"schema-ref":"foobarbaz","data":{"ts":"2009-11-18T22:11:04.011822","uid":"iKxhjl8i1n3","id":{"orig_h":"192.168.1.103"}}},{"schema-ref":"foobarbaz","data":{"ts":"2009-11-18T22:11:04.011822","uid":"iKxhjl8i1n3","id":{"orig_h":"192.168.1.103"}}}],"schemas":[{"schema-ref":"foobarbaz","definition":"<type-definition>"}]}}}}},"401":{"description":"Not authenticated."},"422":{"description":"Invalid arguments."}}}},"/status":{"get":{"summary":"Return current status","description":"Returns the current status of the whole node.","parameters":[{"in":"query","name":"component","schema":{"type":"string"},"required":false,"description":"If specified, return the status for that component only.","example":"index"},{"in":"query","name":"verbosity","schema":{"type":"string","enum":["info","detailed","debug"],"default":"info"},"required":false,"description":"The verbosity level of the status response.","example":"detailed"}],"responses":{"200":{"description":"OK.","content":{"application/json":{"schema":{"type":"object"},"example":{"catalog":{"num-partitions":7092,"memory-usage":52781901584},"version":{"VAST":"v2.3.0-rc3-32-g8529a6c43f"}}}}},"401":{"description":"Not authenticated."}}}}}}}')}}]);