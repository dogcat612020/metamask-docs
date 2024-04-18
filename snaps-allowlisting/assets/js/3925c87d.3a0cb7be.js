"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2980],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),f=r,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||i;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},14898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=t(58168),r=(t(96540),t(15680)),i=t(4865),o=t(19365);const s={description:"Learn about the Snap project files.",sidebar_position:2},l="Snaps files",p={unversionedId:"learn/about-snaps/files",id:"learn/about-snaps/files",title:"Snaps files",description:"Learn about the Snap project files.",source:"@site/snaps/learn/about-snaps/files.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/files",permalink:"/snaps-allowlisting/snaps/learn/about-snaps/files",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/files.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about the Snap project files.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Snaps APIs",permalink:"/snaps-allowlisting/snaps/learn/about-snaps/apis"},next:{title:"Snaps execution environment",permalink:"/snaps-allowlisting/snaps/learn/about-snaps/execution-environment"}},u={},c=[{value:"Manifest file",id:"manifest-file",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Bundle file",id:"bundle-file",level:2}],m={toc:c},f="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(f,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"snaps-files"},"Snaps files"),(0,r.yg)("p",null,"If you look at the directory structure of the Snaps monorepo project generated in the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/get-started/quickstart"},"Snaps quickstart"),", it looks something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"your-snap-name/\n\u251c\u2500 packages/\n\u2502  \u251c\u2500 site/\n|  |  |- src/\n|  |  |  |- App.tsx\n|  |  \u251c\u2500 package.json\n|  |  |- ...(react app content)\n|  |\n\u2502  \u251c\u2500 snap/\n|  |  \u251c\u2500 src/\n|  |  |  |- index.ts\n|  |  \u251c\u2500 snap.manifest.json\n|  |  \u251c\u2500 package.json\n|  |  |- ... (Snap content)\n\u251c\u2500 package.json\n\u251c\u2500 ... (other stuff)\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"snap")," folder contains the Snap implementation, and the ",(0,r.yg)("inlineCode",{parentName:"p"},"site")," folder contains the Snap\ncompanion dapp implementation."),(0,r.yg)("p",null,"This page examines the following Snap project files:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#manifest-file"},"The manifest file")," tells MetaMask important information about the Snap."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#configuration-file"},"The configuration file")," specifies configuration options for the Snap."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#bundle-file"},"The bundle file")," is the output file of the published Snap.")),(0,r.yg)("h2",{id:"manifest-file"},"Manifest file"),(0,r.yg)("p",null,"To get MetaMask to execute your Snap, you must have a valid manifest file named ",(0,r.yg)("inlineCode",{parentName:"p"},"snap.manifest.json"),",\nlocated in your package root directory.\nThe manifest file of ",(0,r.yg)("inlineCode",{parentName:"p"},"Hello World")," would look something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n    "version": "1.0.0",\n    "proposedName": "Hello World",\n    "description": "A Snap that says hello!",\n    "repository": {\n        "type": "git",\n        "url": "https://github.com/Hello/hello-snap.git"\n    },\n    "source": {\n        "shasum": "w3FltkDjKQZiPwM+AThnmypt0OFF7hj4ycg/kxxv+nU=",\n        "location": {\n            "npm": {\n                "filePath": "dist/bundle.js",\n                "iconPath": "images/icon.svg",\n                "packageName": "hello-snap",\n                "registry": "https://registry.npmjs.org/"\n            }\n        }\n    },\n    "initialPermissions": {},\n    "manifestVersion": "0.1"\n}\n')),(0,r.yg)("p",null,"The manifest tells MetaMask important information about your Snap, such as where it's published\n(using ",(0,r.yg)("inlineCode",{parentName:"p"},"source.location"),"), how to verify the integrity of the Snap source code (by attempting to\nreproduce the ",(0,r.yg)("inlineCode",{parentName:"p"},"source.shasum")," value), and what\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/how-to/request-permissions"},"permissions the Snap requests")," (using ",(0,r.yg)("inlineCode",{parentName:"p"},"initialPermissions"),")."),(0,r.yg)("p",null,"You might need to modify some manifest fields manually.\nFor example, if you change the location of the icon SVG file, you must update\n",(0,r.yg)("inlineCode",{parentName:"p"},"source.location.npm.iconPath")," to match.\nYou can also use the ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/cli/subcommands"},"Snaps CLI")," to update some fields for you.\nFor example, running ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/cli/subcommands#b-build"},(0,r.yg)("inlineCode",{parentName:"a"},"yarn mm-snap build"))," or\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/cli/subcommands#m-manifest"},(0,r.yg)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix"))," updates ",(0,r.yg)("inlineCode",{parentName:"p"},"source.shasum"),"."),(0,r.yg)("admonition",{title:"important",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Some manifest fields must match the corresponding fields of the ",(0,r.yg)("inlineCode",{parentName:"p"},"/snap/package.json")," file."),(0,r.yg)("p",{parentName:"admonition"},"When updating the ",(0,r.yg)("inlineCode",{parentName:"p"},"version")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"repository")," fields, the Snap inherits the values from ",(0,r.yg)("inlineCode",{parentName:"p"},"package.json"),"\nand overwrites them in ",(0,r.yg)("inlineCode",{parentName:"p"},"snap.manifest.json"),".\nWe recommend updating ",(0,r.yg)("inlineCode",{parentName:"p"},"version")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"repository")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"package.json")," first, then building the Snap project."),(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/SIPs/blob/main/SIPS/sip-9.md"},"Snaps publishing specification"),"\ndetails the requirements of both ",(0,r.yg)("inlineCode",{parentName:"p"},"snap.manifest.json")," and its relationship to ",(0,r.yg)("inlineCode",{parentName:"p"},"package.json"),".")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Currently, Snaps can only be\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry"},"published to the official npm registry"),".\nIn the future, developers will be able to distribute Snaps in different ways, and the manifest will\nexpand to support different publishing solutions.")),(0,r.yg)("h2",{id:"configuration-file"},"Configuration file"),(0,r.yg)("p",null,"The Snap configuration file, ",(0,r.yg)("inlineCode",{parentName:"p"},"snap.config.js")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"snap.config.ts"),", must be placed in the project\nroot directory.\nYou can override the default values of the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/cli/options"},"Snaps configuration options")," by specifying them in the\nconfiguration file.\nFor example:"),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="snap.config.js"',title:'"snap.config.js"'},'module.exports = {\n    input: "src/index.js",\n    output: {\n        path: "dist",\n    },\n    server: {\n        port: 9000,\n    },\n};\n'))),(0,r.yg)(o.A,{value:"TypeScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="snap.config.ts"',title:'"snap.config.ts"'},'import type { SnapConfig } from "@metamask/snaps-cli";\n\nconst config: SnapConfig = {\n    input: "src/index.js",\n    output: {\n        path: "dist",\n    },\n    server: {\n        port: 9000,\n    },\n};\n\nexport default config;\n')))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You should not publish the configuration file to npm, since it's only used for development and\nbuilding.\nHowever, you can commit the file to GitHub to share the configuration with your team, since it\nshouldn't contain any secrets.")),(0,r.yg)("h2",{id:"bundle-file"},"Bundle file"),(0,r.yg)("p",null,"Because of the way Snaps are executed, they must be published as a single ",(0,r.yg)("inlineCode",{parentName:"p"},".js")," file containing the\nentire source code and all dependencies.\nMoreover, the ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/learn/about-snaps/execution-environment"},"Snaps execution environment")," has no DOM, no Node.js\nAPIs, and no filesystem access, so anything that relies on the DOM doesn't work, and any Node\nbuilt-ins must be bundled along with the Snap."),(0,r.yg)("p",null,"Running ",(0,r.yg)("inlineCode",{parentName:"p"},"yarn start")," bundles your Snap for you."),(0,r.yg)("p",null,"You can also run ",(0,r.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/cli/subcommands#b-build"},(0,r.yg)("inlineCode",{parentName:"a"},"yarn mm-snap build"))," to bundle your\nSnap using ",(0,r.yg)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",(0,r.yg)("a",{parentName:"p",href:"https://browserify.org"},"Browserify"),".\nThis command finds all dependencies using your specified main entry point and outputs a bundle\nfile to your specified output path."))}d.isMDXComponent=!0},19365:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(96540),r=t(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>f});var a=t(58168),r=t(96540),i=t(20053),o=t(23104),s=t(47751),l=t(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),f=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(m(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:f},o,{className:(0,i.A)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":s===n})}),t??n)})))}function c(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function m(e){const n=(0,s.u)(e);return r.createElement("div",{className:(0,i.A)("tabs-container",p.tabList)},r.createElement(u,(0,a.A)({},e,n)),r.createElement(c,(0,a.A)({},e,n)))}function f(e){const n=(0,l.A)();return r.createElement(m,(0,a.A)({key:String(n)},e))}},47751:(e,n,t)=>{t.d(n,{u:()=>m});var a=t(96540),r=t(56347),i=t(57485),o=t(31682),s=t(89466);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??l(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function c(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[m,f]=c({queryString:t,groupId:r}),[d,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,s.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),y=(()=>{const e=m??d;return u({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),f(e),g(e)}),[f,g,i]),tabValues:i}}}}]);