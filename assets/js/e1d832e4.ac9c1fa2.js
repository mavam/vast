"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),b=i,f=c["".concat(s,".").concat(b)]||c[b]||u[b]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},33760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>z,frontMatter:()=>f,metadata:()=>h,toc:()=>y});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>a(e,o(t)),b=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_position:3},m="Ansible",h={unversionedId:"setup-guides/deploy-a-node/ansible",id:"version-Tenzir v4.0/setup-guides/deploy-a-node/ansible",title:"Ansible",description:"The Ansible role for Tenzir allows for easy integration of Tenzir into",source:"@site/versioned_docs/version-Tenzir v4.0/setup-guides/deploy-a-node/ansible.md",sourceDirName:"setup-guides/deploy-a-node",slug:"/setup-guides/deploy-a-node/ansible",permalink:"/Tenzir v4.0/setup-guides/deploy-a-node/ansible",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0/setup-guides/deploy-a-node/ansible.md",tags:[],version:"Tenzir v4.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Docker Compose",permalink:"/Tenzir v4.0/setup-guides/deploy-a-node/docker-compose"},next:{title:"systemd",permalink:"/Tenzir v4.0/setup-guides/deploy-a-node/systemd"}},v={},y=[{value:"Example",id:"example",level:2},{value:"Variables",id:"variables",level:2},{value:"<code>config_file</code> (required)",id:"config_file-required",level:3},{value:"<code>read_write_paths</code>",id:"read_write_paths",level:3},{value:"<code>tenzir_archive</code>",id:"tenzir_archive",level:3},{value:"<code>tenzir_debian_package</code>",id:"tenzir_debian_package",level:3}],g={toc:y},k="wrapper";function z(e){var t=e,{components:n}=t,i=b(t,["components"]);return(0,r.kt)(k,u(c(c({},g),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"ansible"}),"Ansible"),(0,r.kt)("p",null,"The Ansible role for Tenzir allows for easy integration of Tenzir into\nexisting Ansible setups. The role uses either the Tenzir Debian package or\nthe tarball installation method depending on which is appropriate for the\ntarget environment. The role definition is in the\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/ansible/roles/tenzir"}),(0,r.kt)("inlineCode",{parentName:"a"},"ansible/roles/tenzir"))," directory of the Tenzir\nrepository. You need a local copy of this directory so you can use it in your\nplaybook."),(0,r.kt)("h2",c({},{id:"example"}),"Example"),(0,r.kt)("p",null,"This example playbook shows how to run a Tenzir service on the machine\n",(0,r.kt)("inlineCode",{parentName:"p"},"example_tenzir_server"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"- name: Deploy Tenzir\n  become: true\n  hosts: example_tenzir_server\n  remote_user: example_ansible_user\n  roles:\n    - role: tenzir\n      vars:\n        config_file: ./tenzir.yaml\n        read_write_paths: [ /tmp ]\n        tenzir_archive: ./tenzir.tar.gz\n        tenzir_debian_package: ./tenzir.deb\n")),(0,r.kt)("h2",c({},{id:"variables"}),"Variables"),(0,r.kt)("h3",c({},{id:"config_file-required"}),(0,r.kt)("inlineCode",{parentName:"h3"},"config_file")," (required)"),(0,r.kt)("p",null,"A path to a ",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.0/configuration"}),(0,r.kt)("inlineCode",{parentName:"a"},"tenzir.yaml"))," relative to the playbook."),(0,r.kt)("h3",c({},{id:"read_write_paths"}),(0,r.kt)("inlineCode",{parentName:"h3"},"read_write_paths")),(0,r.kt)("p",null,"A list of paths that Tenzir shall be granted access to in addition to its own\nstate and log directories."),(0,r.kt)("h3",c({},{id:"tenzir_archive"}),(0,r.kt)("inlineCode",{parentName:"h3"},"tenzir_archive")),(0,r.kt)("p",null,"A tarball of Tenzir structured like those that can be downloaded from the\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases"}),"GitHub Releases Page"),". This is used\nfor target distributions that are not based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"apt")," package manager."),(0,r.kt)("h3",c({},{id:"tenzir_debian_package"}),(0,r.kt)("inlineCode",{parentName:"h3"},"tenzir_debian_package")),(0,r.kt)("p",null,"A Debian package (",(0,r.kt)("inlineCode",{parentName:"p"},".deb"),"). This package is used for Debian and Debian based\nLinux distributions."))}z.isMDXComponent=!0}}]);