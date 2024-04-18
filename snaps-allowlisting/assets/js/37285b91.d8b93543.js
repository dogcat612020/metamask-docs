"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5188],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(o,".").concat(d)]||p[d]||g[d]||l;return a?t.createElement(m,i(i({ref:n},c),{},{components:a})):t.createElement(m,i({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91977:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var t=a(58168),r=(a(96540),a(15680)),l=a(4865),i=a(19365);const s={sidebar_position:1,tags:["Keyring API"]},o="Account Management API",u={unversionedId:"reference/keyring-api/account-management/index",id:"reference/keyring-api/account-management/index",title:"Account Management API",description:"Dapps can communicate with account management Snaps",source:"@site/snaps/reference/keyring-api/account-management/index.md",sourceDirName:"reference/keyring-api/account-management",slug:"/reference/keyring-api/account-management/",permalink:"/snaps-allowlisting/snaps/reference/keyring-api/account-management/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/account-management/index.md",tags:[{label:"Keyring API",permalink:"/snaps-allowlisting/snaps/tags/keyring-api"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Keyring API",permalink:"/snaps-allowlisting/snaps/reference/keyring-api/"},next:{title:"Objects",permalink:"/snaps-allowlisting/snaps/reference/keyring-api/account-management/objects"}},c={},p=[{value:"Account methods",id:"account-methods",level:2},{value:"<code>keyring_createAccount</code>",id:"keyring_createaccount",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"<code>keyring_deleteAccount</code>",id:"keyring_deleteaccount",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>keyring_exportAccount</code>",id:"keyring_exportaccount",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>keyring_filterAccountChains</code>",id:"keyring_filteraccountchains",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>keyring_getAccount</code>",id:"keyring_getaccount",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>keyring_listAccounts</code>",id:"keyring_listaccounts",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>keyring_updateAccount</code>",id:"keyring_updateaccount",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Example",id:"example-6",level:4},{value:"Request methods",id:"request-methods",level:2},{value:"<code>keyring_approveRequest</code>",id:"keyring_approverequest",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Example",id:"example-7",level:4},{value:"<code>keyring_getRequest</code>",id:"keyring_getrequest",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Example",id:"example-8",level:4},{value:"<code>keyring_listRequests</code>",id:"keyring_listrequests",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Example",id:"example-9",level:4},{value:"<code>keyring_rejectRequest</code>",id:"keyring_rejectrequest",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Example",id:"example-10",level:4},{value:"<code>keyring_submitRequest</code>",id:"keyring_submitrequest",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Example",id:"example-11",level:4}],g={toc:p},d="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"account-management-api"},"Account Management API"),(0,r.yg)("p",null,"Dapps can communicate with ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/features/custom-evm-accounts/"},"account management Snaps"),"\nusing the Account Management API.\nThe dapp must be ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/features/custom-evm-accounts/security#limit-the-methods-exposed-to-dapps"},"allowed to call each\nmethod"),"."),(0,r.yg)("h2",{id:"account-methods"},"Account methods"),(0,r.yg)("p",null,"The following methods are exposed by the Snap for account management."),(0,r.yg)("h3",{id:"keyring_createaccount"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_createAccount")),(0,r.yg)("p",null,"Creates a new account."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"options"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"Record<string, Json>")," - Snap-defined account options.")),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/keyring-api/account-management/objects#keyringaccount"},"An account object.")),(0,r.yg)("h4",{id:"example"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_createAccount",\n    "params": {\n        "options": {\n            "signerCount": 5,\n            "threshold": 3\n        }\n    }\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n    "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n    "methods": [\n        "eth_sign",\n        "eth_signTransaction",\n        "eth_signTypedData_v4",\n        "personal_sign"\n    ],\n    "options": {\n        "signerCount": 5,\n        "threshold": 3\n    },\n    "type": "eip155:eoa"\n}\n')))),(0,r.yg)("h3",{id:"keyring_deleteaccount"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_deleteAccount")),(0,r.yg)("p",null,"Deletes an existing account."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - ID of the account to be deleted (UUIDv4).")),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"null")),(0,r.yg)("h4",{id:"example-1"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_deleteAccount",\n    "params": {\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a"\n    }\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},"null\n")))),(0,r.yg)("h3",{id:"keyring_exportaccount"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_exportAccount")),(0,r.yg)("p",null,"Exports the private key of an account managed by the Snap.\nA Snap might choose to not support this method."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - ID of the account to be exported (UUIDv4).")),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"privateKey"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The account's private key.")),(0,r.yg)("h4",{id:"example-2"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_exportAccount",\n    "params": {\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a"\n    }\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "privateKey": "66a41d66be6483f1fdfd01fdb66173d449594bbd286149b019504dd72b58bc51"\n}\n')))),(0,r.yg)("h3",{id:"keyring_filteraccountchains"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_filterAccountChains")),(0,r.yg)("p",null,"Filters for blockchain networks that an account can be used on."),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Account ID (UUIDv4)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"chains"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string[]")," - List of ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md"},"CAIP-2"),"\nchain IDs of blockchain networks to filter.")),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"chains"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string[]")," - List of ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md"},"CAIP-2"),"\nchain IDs of blockchain networks that the account can be used on.")),(0,r.yg)("h4",{id:"example-3"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_filterAccountChains",\n    "params": {\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n        "chains": [\n            "eip155:W", \n            "eip155:X",\n            "eip155:Y",\n            "eip155:Z"\n        ]\n    }\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "chains": [\n        "eip155:X",\n        "eip155:Y"\n    ]\n}\n')))),(0,r.yg)("h3",{id:"keyring_getaccount"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_getAccount")),(0,r.yg)("p",null,"Gets an account from an ID."),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Account ID (UUIDv4).")),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/keyring-api/account-management/objects#keyringaccount"},"An account object.")),(0,r.yg)("h4",{id:"example-4"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_getAccount",\n    "params": {\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a"\n    }\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n    "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n    "methods": [\n        "eth_sign",\n        "eth_signTransaction",\n        "eth_signTypedData_v4",\n        "personal_sign"\n    ],\n    "options": {\n        "signerCount": 5,\n        "threshold": 3\n    },\n    "type": "eip155:eoa"\n}\n')))),(0,r.yg)("h3",{id:"keyring_listaccounts"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_listAccounts")),(0,r.yg)("p",null,"Lists all accounts handled by the Snap."),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("p",null,"None"),(0,r.yg)("h4",{id:"returns-5"},"Returns"),(0,r.yg)("p",null,"An array of ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/keyring-api/account-management/objects#keyringaccount"},"account objects")," handled by the Snap."),(0,r.yg)("h4",{id:"example-5"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_listAccounts"\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n        "methods": [\n            "eth_sign",\n            "eth_signTransaction",\n            "eth_signTypedData_v4",\n            "personal_sign"\n        ],\n        "options": {\n            "signerCount": 5,\n            "threshold": 3\n        },\n        "type": "eip155:eoa"\n    },\n    {\n        "address": "0x84674cffb6146d19b986fc88ec70a441b570a45b",\n        "id": "17a87b4a-286c-444d-aebb-1fed89021419",\n        "methods": [\n            "eth_prepareUserOperation",\n            "eth_patchUserOperation",\n            "eth_signUserOperation"\n        ],\n        "type": "eip155:erc4337"\n    }\n]\n')))),(0,r.yg)("h3",{id:"keyring_updateaccount"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_updateAccount")),(0,r.yg)("p",null,"Updates an account."),(0,r.yg)("h4",{id:"parameters-6"},"Parameters"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/keyring-api/account-management/objects#keyringaccount"},"An account object.")),(0,r.yg)("h4",{id:"returns-6"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"null")),(0,r.yg)("h4",{id:"example-6"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_updateAccount",\n    "params": {\n        "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n        "id": "091bbc2e-6625-44d0-ac5c-658670ca649a",\n        "methods": [\n            "eth_sign",\n            "eth_signTransaction",\n            "eth_signTypedData_v4",\n            "personal_sign"\n        ],\n        "options": {\n            "signerCount": 7,\n            "threshold": 4\n        },\n        "type": "eip155:eoa"\n    }\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},"null\n")))),(0,r.yg)("h2",{id:"request-methods"},"Request methods"),(0,r.yg)("p",null,"The following methods are exposed by the Snap for managing signature requests."),(0,r.yg)("h3",{id:"keyring_approverequest"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_approveRequest")),(0,r.yg)("p",null,"Approves a pending request."),(0,r.yg)("h4",{id:"parameters-7"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Request ID."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"data"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"Record<string, Json>")," - Optional Snap-defined arguments.")),(0,r.yg)("h4",{id:"returns-7"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"null")),(0,r.yg)("h4",{id:"example-7"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_approveRequest",\n    "params": {\n        "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4"\n    }\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},"null\n")))),(0,r.yg)("h3",{id:"keyring_getrequest"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_getRequest")),(0,r.yg)("p",null,"Gets a request from an ID."),(0,r.yg)("h4",{id:"parameters-8"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Request ID.")),(0,r.yg)("h4",{id:"returns-8"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/keyring-api/account-management/objects#keyringrequest"},"A request object.")),(0,r.yg)("h4",{id:"example-8"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_getRequest",\n    "params": {\n        "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4"\n    }\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n    "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n    "request": {\n        "method": "personal_sign",\n        "params": [\n            "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n            "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n        ]\n    },\n    "scope": "eip155:1"\n}\n')))),(0,r.yg)("h3",{id:"keyring_listrequests"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_listRequests")),(0,r.yg)("p",null,"Lists all pending requests."),(0,r.yg)("h4",{id:"parameters-9"},"Parameters"),(0,r.yg)("p",null,"None"),(0,r.yg)("h4",{id:"returns-9"},"Returns"),(0,r.yg)("p",null,"An array of pending ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/keyring-api/account-management/objects#keyringrequest"},"request objects"),"."),(0,r.yg)("h4",{id:"example-9"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_listRequests"\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "account": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n        "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n        "request": {\n            "method": "personal_sign",\n            "params": [\n                "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n                "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n            ]\n        },\n        "scope": "eip155:1"\n    },\n    {\n        "account": "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1",\n        "id": "f6f302ae-38d7-4b95-ae88-bf2fb7fbee87",\n        "request": {\n            "method": "eth_sendTransaction",\n            "params": [\n                {\n                    "from": "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1",\n                    "nonce": "0x1",\n                    "gasPrice": "0x10",\n                    "gasLimit": "0x5208",\n                    "to": "0x84674cffb6146d19b986fc88ec70a441b570a45b",\n                    "value": "0x10000",\n                    "data": "0x"\n                }\n            ]\n        },\n        "scope": "eip155:1"\n    }\n]\n')))),(0,r.yg)("h3",{id:"keyring_rejectrequest"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_rejectRequest")),(0,r.yg)("p",null,"Rejects a pending request and removes it from the list of pending requests."),(0,r.yg)("h4",{id:"parameters-10"},"Parameters"),(0,r.yg)("p",null,"An object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"id"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Request ID.")),(0,r.yg)("h4",{id:"returns-10"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"null")),(0,r.yg)("h4",{id:"example-10"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_rejectRequest",\n    "params": {\n        "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4"\n    }\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},"null\n")))),(0,r.yg)("h3",{id:"keyring_submitrequest"},(0,r.yg)("inlineCode",{parentName:"h3"},"keyring_submitRequest")),(0,r.yg)("p",null,"Submits a new request."),(0,r.yg)("h4",{id:"parameters-11"},"Parameters"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/keyring-api/account-management/objects#keyringrequest"},"A request object.")),(0,r.yg)("h4",{id:"returns-11"},"Returns"),(0,r.yg)("p",null,"If the request is ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/features/custom-evm-accounts/#synchronous-transaction-flow"},"synchronous"),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"keyring_submitRequest")," returns an object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"pending")," - ",(0,r.yg)("inlineCode",{parentName:"li"},"false")," to indicate a synchronous request."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"result"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"Json")," - Request result.")),(0,r.yg)("p",null,"If the request is ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/features/custom-evm-accounts/#asynchronous-transaction-flow"},"asynchronous"),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"keyring_submitRequest")," returns an object containing:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"pending")," - ",(0,r.yg)("inlineCode",{parentName:"li"},"true")," to indicate that the request will be handled asynchronously."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"redirect")," - An optional redirect object containing:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Redirect message."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"url"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - Redirect URL.")))),(0,r.yg)("h4",{id:"example-11"},"Example"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Request",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "method": "keyring_submitRequest",\n    "params": {\n        "address": "0xd1f5279be4b4dd94133a23dee1b23f5bfc0db1d0",\n        "id": "f84d3a97-b6e1-47ea-8b0c-fd8609efaad4",\n        "request": {\n            "method": "personal_sign",\n            "params": [\n                "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n                "0xe887f3b50232722e6eb4c1d3a03b34c9b345acd1"\n            ]\n        },\n        "scope": "eip155:1"\n    }\n}\n'))),(0,r.yg)(i.A,{value:"Response",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "pending": false,\n    "result": "0x9aef363b17bc18dfbdcb9ed3ce5f9f96788ce84b353d262099e90c4fa0b513a4e21ee47bafa04c0630750e901b62bd4839b45219c191ec6076d6549637cb1beb4c"\n}\n')))))}m.isMDXComponent=!0},19365:(e,n,a)=>{a.d(n,{A:()=>i});var t=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:a,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},n)}},4865:(e,n,a)=>{a.d(n,{A:()=>d});var t=a(58168),r=a(96540),l=a(20053),i=a(23104),s=a(47751),o=a(92303);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:n,block:a,selectedValue:s,selectValue:o,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:g}=(0,i.a_)(),d=e=>{const n=e.currentTarget,a=p.indexOf(n),t=c[a].value;t!==s&&(g(n),o(t))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;n=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;n=p[a]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n)},c.map((e=>{let{value:n,label:a,attributes:i}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.A)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":s===n})}),a??n)})))}function p(e){let{lazy:n,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function g(e){const n=(0,s.u)(e);return r.createElement("div",{className:(0,l.A)("tabs-container",u.tabList)},r.createElement(c,(0,t.A)({},e,n)),r.createElement(p,(0,t.A)({},e,n)))}function d(e){const n=(0,o.A)();return r.createElement(g,(0,t.A)({key:String(n)},e))}},47751:(e,n,a)=>{a.d(n,{u:()=>g});var t=a(96540),r=a(56347),l=a(57485),i=a(31682),s=a(89466);function o(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??o(a);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function c(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const i=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=u(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[g,d]=p({queryString:a,groupId:r}),[m,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,s.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=g??m;return c({value:e,tabValues:l})?e:null})();(0,t.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),y(e)}),[d,y,l]),tabValues:l}}}}]);