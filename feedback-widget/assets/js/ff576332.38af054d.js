"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4151],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),l=c(t),d=s,f=l["".concat(p,".").concat(d)]||l[d]||u[d]||i;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[l]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const i={description:"Request permissions in a manifest file.",sidebar_position:2},a="Request permissions",o={unversionedId:"how-to/request-permissions",id:"how-to/request-permissions",title:"Request permissions",description:"Request permissions in a manifest file.",source:"@site/snaps/how-to/request-permissions.md",sourceDirName:"how-to",slug:"/how-to/request-permissions",permalink:"/feedback-widget/snaps/how-to/request-permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/request-permissions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Request permissions in a manifest file.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Develop a Snap",permalink:"/feedback-widget/snaps/how-to/develop-a-snap"},next:{title:"Manage keys",permalink:"/feedback-widget/snaps/how-to/manage-keys"}},p={},c=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2},{value:"Dynamic permissions",id:"dynamic-permissions",level:2}],m={toc:c},l="wrapper";function u(e){let{components:n,...t}=e;return(0,s.kt)(l,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"request-permissions"},"Request permissions"),(0,s.kt)("p",null,"To access certain powerful JavaScript globals or API methods, a Snap must ask the user for permission.\nSnaps follow the ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255 wallet permissions specification"),",\nand you must specify a Snap's required permissions (except for ",(0,s.kt)("a",{parentName:"p",href:"#dynamic-permissions"},"dynamic permissions"),")\nin the ",(0,s.kt)("inlineCode",{parentName:"p"},"initialPermissions")," field of the ",(0,s.kt)("a",{parentName:"p",href:"/feedback-widget/snaps/concepts/anatomy#manifest-file"},"manifest file"),"."),(0,s.kt)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,s.kt)("p",null,"You must request permission to use any\n",(0,s.kt)("a",{parentName:"p",href:"/feedback-widget/snaps/reference/rpc-api#restricted-methods"},"restricted JSON-RPC API methods"),"."),(0,s.kt)("p",null,"For example, to request to use ",(0,s.kt)("a",{parentName:"p",href:"/feedback-widget/snaps/reference/rpc-api#snap_dialog"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_dialog")),", add the\nfollowing to the manifest file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "snap_dialog": {}\n},\n')),(0,s.kt)("h2",{id:"endowments"},"Endowments"),(0,s.kt)("p",null,"Endowments are a type of permission.\nSee the ",(0,s.kt)("a",{parentName:"p",href:"/feedback-widget/snaps/reference/permissions"},"Snaps permissions reference")," for the full list of endowments\nyou can specify in the manifest file."),(0,s.kt)("p",null,"For example, to request the ",(0,s.kt)("a",{parentName:"p",href:"/feedback-widget/snaps/reference/permissions#endowmentnetwork-access"},(0,s.kt)("inlineCode",{parentName:"a"},"endowment:network-access")),"\npermission, add the following to the manifest file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:network-access": {}\n},\n')),(0,s.kt)("h2",{id:"dynamic-permissions"},"Dynamic permissions"),(0,s.kt)("p",null,"Dynamic permissions are not requested in the manifest file.\nInstead, your Snap can acquire dynamic permissions during its lifecycle."),(0,s.kt)("p",null,"For example, your Snap can request permission to call the Ethereum provider's\n",(0,s.kt)("a",{parentName:"p",href:"/feedback-widget/snaps/reference/permissions#eth_accounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," RPC method by calling the provider's\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," RPC method."),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"/feedback-widget/snaps/reference/permissions#eth_accounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_accounts")," Dynamic Permission"),"\nfor more information."))}u.isMDXComponent=!0}}]);