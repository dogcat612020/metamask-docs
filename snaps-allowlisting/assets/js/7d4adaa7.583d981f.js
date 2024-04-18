"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1266],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>g});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),p=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=l,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return n?t.createElement(g,i(i({ref:a},u),{},{components:n})):t.createElement(g,i({ref:a},u))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[c]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46191:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var t=n(58168),l=(n(96540),n(15680)),r=n(4865),i=n(19365);const s={sidebar_label:"Options",sidebar_position:1,toc_max_heading_level:4,description:"See the Snaps CLI options reference."},o="Snaps configuration options",p={unversionedId:"reference/cli/options",id:"reference/cli/options",title:"Snaps configuration options",description:"See the Snaps CLI options reference.",source:"@site/snaps/reference/cli/options.md",sourceDirName:"reference/cli",slug:"/reference/cli/options",permalink:"/snaps-allowlisting/snaps/reference/cli/options",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/cli/options.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Options",sidebar_position:1,toc_max_heading_level:4,description:"See the Snaps CLI options reference."},sidebar:"snapsSidebar",previous:{title:"Snaps command line",permalink:"/snaps-allowlisting/snaps/reference/cli"},next:{title:"Subcommands",permalink:"/snaps-allowlisting/snaps/reference/cli/subcommands"}},u={},c=[{value:"<code>bundler</code>",id:"bundler",level:3},{value:"<code>customizeWebpackConfig</code>",id:"customizewebpackconfig",level:3},{value:"<code>environment</code>",id:"environment",level:3},{value:"<code>evaluate</code>",id:"evaluate",level:3},{value:"<code>experimental</code>",id:"experimental",level:3},{value:"<code>experimental.wasm</code>",id:"experimentalwasm",level:4},{value:"<code>features</code>",id:"features",level:3},{value:"<code>features.images</code>",id:"featuresimages",level:4},{value:"<code>input</code>",id:"input",level:3},{value:"<code>manifest</code>",id:"manifest",level:3},{value:"<code>manifest.path</code>",id:"manifestpath",level:4},{value:"<code>manifest.update</code>",id:"manifestupdate",level:4},{value:"<code>output</code>",id:"output",level:3},{value:"<code>output.clean</code>",id:"outputclean",level:4},{value:"<code>output.filename</code>",id:"outputfilename",level:4},{value:"<code>output.minimize</code>",id:"outputminimize",level:4},{value:"<code>output.path</code>",id:"outputpath",level:4},{value:"<code>polyfills</code>",id:"polyfills",level:3},{value:"<code>server</code>",id:"server",level:3},{value:"<code>server.enabled</code>",id:"serverenabled",level:4},{value:"<code>server.port</code>",id:"serverport",level:4},{value:"<code>server.root</code>",id:"serverroot",level:4},{value:"<code>sourceMap</code>",id:"sourcemap",level:3},{value:"<code>stats</code>",id:"stats",level:3},{value:"<code>stats.buffer</code>",id:"statsbuffer",level:4},{value:"<code>stats.builtIns</code>",id:"statsbuiltins",level:4},{value:"<code>stats.verbose</code>",id:"statsverbose",level:4}],m={toc:c},d="wrapper";function g(e){let{components:a,...n}=e;return(0,l.yg)(d,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"snaps-configuration-options"},"Snaps configuration options"),(0,l.yg)("p",null,"This reference describes the syntax of the Snaps command line interface (CLI) configuration options.\nYou can specify these options in the\n",(0,l.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/learn/about-snaps/files#configuration-file"},"configuration file"),"."),(0,l.yg)("h3",{id:"bundler"},(0,l.yg)("inlineCode",{parentName:"h3"},"bundler")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"bundler: <BUNDLER>,\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'bundler: "webpack",\n')))),(0,l.yg)("p",null,"The bundler to use.\nThe options are ",(0,l.yg)("inlineCode",{parentName:"p"},'"webpack"')," and ",(0,l.yg)("inlineCode",{parentName:"p"},'"browserify"'),".\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},'"webpack"'),"."),(0,l.yg)("admonition",{title:"important",type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"We recommend using the Webpack bundler.\nThe Browserify-based configuration is deprecated and will be removed in the future.\nThis reference describes the configuration options for Webpack.\nFor Browserify, see the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/455366f19281801ed4220431100e45237dd5cf1e/packages/snaps-cli#legacy-options"},"legacy options"),".")),(0,l.yg)("h3",{id:"customizewebpackconfig"},(0,l.yg)("inlineCode",{parentName:"h3"},"customizeWebpackConfig")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-typescript"},"customizeWebpackConfig: <FUNCTION>,\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-typescript"},"customizeWebpackConfig: (config) =>\n    merge(config, {\n        plugins: [\n            // Add a plugin.\n        ],\n        module: {\n            rules: [\n                // Add a loader.\n            ],\n        },\n    }),\n")))),(0,l.yg)("p",null,"A function that customizes the Webpack configuration.\nFor example, you can use this option to add a Webpack plugin, provide a polyfill, or add a loader."),(0,l.yg)("p",null,"The function should receive the Webpack configuration object and return the modified configuration object.\nFor convenience, the Snaps CLI exports a ",(0,l.yg)("inlineCode",{parentName:"p"},"merge")," function that you can use to merge the\nconfiguration object with the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/blob/main/packages/snaps-cli/src/webpack/config.ts"},"default Webpack configuration"),"."),(0,l.yg)("h3",{id:"environment"},(0,l.yg)("inlineCode",{parentName:"h3"},"environment")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"environment: <ENVIRONMENT>,\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"environment: {\n    SNAP_ENV: process.env.SNAP_ENV,\n    PUBLIC_KEY: process.env.PUBLIC_KEY,\n},\n")))),(0,l.yg)("p",null,"The environment configuration.\nYou can use this to ",(0,l.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/how-to/use-environment-variables"},"set environment variables for the Snap"),",\nwhich can be accessed using ",(0,l.yg)("inlineCode",{parentName:"p"},"process.env"),"."),(0,l.yg)("h3",{id:"evaluate"},(0,l.yg)("inlineCode",{parentName:"h3"},"evaluate")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"evaluate: <BOOLEAN>,\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"evaluate: true,\n")))),(0,l.yg)("p",null,"Enables or disables evaluating the bundle.\nWhen set to ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", the bundle is checked for compatibility issues with the Snaps runtime.\nIf there are any issues, the CLI exits with an error."),(0,l.yg)("h3",{id:"experimental"},(0,l.yg)("inlineCode",{parentName:"h3"},"experimental")),(0,l.yg)("p",null,"Experimental features."),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"These features are not stable, and might change in the future.")),(0,l.yg)("h4",{id:"experimentalwasm"},(0,l.yg)("inlineCode",{parentName:"h4"},"experimental.wasm")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"experimental: {\n    wasm: <BOOLEAN>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"experimental: {\n    wasm: true,\n},\n")))),(0,l.yg)("p",null,"Enables or disables WebAssembly support.\nWhen set to ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", WebAssembly files can be imported in the Snap.\nFor example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-typescript"},'import program from "./program.wasm";\n\n// Program is initialized synchronously.\n// ...\n')),(0,l.yg)("h3",{id:"features"},(0,l.yg)("inlineCode",{parentName:"h3"},"features")),(0,l.yg)("h4",{id:"featuresimages"},(0,l.yg)("inlineCode",{parentName:"h4"},"features.images")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"features: {\n    images: <BOOLEAN>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"features: {\n    images: false,\n},\n")))),(0,l.yg)("p",null,"Enables or disables ",(0,l.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/features/custom-ui/#image"},"image support"),".\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("h3",{id:"input"},(0,l.yg)("inlineCode",{parentName:"h3"},"input")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"input: <FILE>,\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'input: "src/index.js",\n')))),(0,l.yg)("p",null,"The entry point of the Snap.\nThis is the file that will be bundled.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},'"src/index.js"'),"."),(0,l.yg)("h3",{id:"manifest"},(0,l.yg)("inlineCode",{parentName:"h3"},"manifest")),(0,l.yg)("p",null,"The Snap ",(0,l.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/learn/about-snaps/files#manifest-file"},"manifest file")," configuration."),(0,l.yg)("h4",{id:"manifestpath"},(0,l.yg)("inlineCode",{parentName:"h4"},"manifest.path")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"manifest: {\n    path: <FILE>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'manifest: {\n    path: "snap.manifest.json",\n},\n')))),(0,l.yg)("p",null,"Path to the Snap manifest file.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},'"snap.manifest.json"'),"."),(0,l.yg)("h4",{id:"manifestupdate"},(0,l.yg)("inlineCode",{parentName:"h4"},"manifest.update")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"manifest: {\n    update: <BOOLEAN>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"manifest: {\n    update: false,\n},\n")))),(0,l.yg)("p",null,"Enables or disables updating the manifest file with the bundle shasum, and making any other possible updates.\nIf set to ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),", the manifest is not updated, and an error is thrown if the manifest is not up-to-date.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("h3",{id:"output"},(0,l.yg)("inlineCode",{parentName:"h3"},"output")),(0,l.yg)("p",null,"The output configuration."),(0,l.yg)("h4",{id:"outputclean"},(0,l.yg)("inlineCode",{parentName:"h4"},"output.clean")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    clean: <BOOLEAN>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    clean: true,\n},\n")))),(0,l.yg)("p",null,"Enables or disables cleaning the output directory before building.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("h4",{id:"outputfilename"},(0,l.yg)("inlineCode",{parentName:"h4"},"output.filename")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    filename: <FILE>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'output: {\n    filename: "bundle.js",\n},\n')))),(0,l.yg)("p",null,"The output filename.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},'"bundle.js"'),"."),(0,l.yg)("h4",{id:"outputminimize"},(0,l.yg)("inlineCode",{parentName:"h4"},"output.minimize")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    minimize: <BOOLEAN>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    minimize: false,\n},\n")))),(0,l.yg)("p",null,"Enables or disables minimizing the bundle.\nMinimizing the bundle removes comments and whitespace, mangles variable names, and performs other optimizations.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("h4",{id:"outputpath"},(0,l.yg)("inlineCode",{parentName:"h4"},"output.path")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"output: {\n    path: <DIRECTORY>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'output: {\n    path: "dist",\n},\n')))),(0,l.yg)("p",null,"Path to the output directory.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},'"dist"'),"."),(0,l.yg)("h3",{id:"polyfills"},(0,l.yg)("inlineCode",{parentName:"h3"},"polyfills")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"polyfills: <BOOLEAN|OBJECT>\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"polyfills: {\n    buffer: true,\n    crypto: true,\n    path: true,\n}\n")))),(0,l.yg)("p",null,"Enables or disables providing polyfills for Node.js built-in modules.\nIf set to ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", all available polyfills are provided.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("p",null,"You can also set this option to an object with specific polyfills set to ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),".\nSee ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/blob/51a1d04ea50c5c286262df1959ef0b1ced84b6e2/packages/snaps-cli/src/config.ts#L383-L416"},"the list of available polyfills"),"."),(0,l.yg)("h3",{id:"server"},(0,l.yg)("inlineCode",{parentName:"h3"},"server")),(0,l.yg)("p",null,"The development server configuration.\nThe development server is used to test the Snap during development, using the\n",(0,l.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/cli/subcommands#w-watch"},(0,l.yg)("inlineCode",{parentName:"a"},"watch"))," and ",(0,l.yg)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/reference/cli/subcommands#s-serve"},(0,l.yg)("inlineCode",{parentName:"a"},"serve"))," subcommands."),(0,l.yg)("h4",{id:"serverenabled"},(0,l.yg)("inlineCode",{parentName:"h4"},"server.enabled")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"server: {\n    enabled: <BOOLEAN>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"server: {\n    enabled: false,\n},\n")))),(0,l.yg)("p",null,"Enables or disables the development server."),(0,l.yg)("h4",{id:"serverport"},(0,l.yg)("inlineCode",{parentName:"h4"},"server.port")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"server: {\n    port: <PORT>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"server: {\n    port: 9000,\n},\n")))),(0,l.yg)("p",null,"The port to run the development server on.\nIf set to ",(0,l.yg)("inlineCode",{parentName:"p"},"0"),", a random port is used.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"8081"),"."),(0,l.yg)("h4",{id:"serverroot"},(0,l.yg)("inlineCode",{parentName:"h4"},"server.root")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"server: {\n    root: <DIRECTORY>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'server: {\n    root: "snap",\n},\n')))),(0,l.yg)("p",null,"The root directory of the development server.\nThis is the directory that is served by the development server.\nThe default is the current working directory."),(0,l.yg)("h3",{id:"sourcemap"},(0,l.yg)("inlineCode",{parentName:"h3"},"sourceMap")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'sourceMap: <BOOLEAN|"inline">,\n'))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},'sourceMap: "inline",\n')))),(0,l.yg)("p",null,"Enables or disables generating a source map.\nIf set to ",(0,l.yg)("inlineCode",{parentName:"p"},'"inline"'),", the source map is inlined in the bundle.\nIf set to ",(0,l.yg)("inlineCode",{parentName:"p"},"true")," or not specified, it is written to a separate file.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("h3",{id:"stats"},(0,l.yg)("inlineCode",{parentName:"h3"},"stats")),(0,l.yg)("p",null,"The stats configuration, which controls the log output of the CLI."),(0,l.yg)("h4",{id:"statsbuffer"},(0,l.yg)("inlineCode",{parentName:"h4"},"stats.buffer")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    buffer: <BOOLEAN>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    buffer: false,\n},\n")))),(0,l.yg)("p",null,"Enables or disables showing a warning if the ",(0,l.yg)("inlineCode",{parentName:"p"},"Buffer")," global is used but not provided.\nThe ",(0,l.yg)("inlineCode",{parentName:"p"},"Buffer")," global is not available in the Snaps runtime by default.\nTo use ",(0,l.yg)("inlineCode",{parentName:"p"},"Buffer"),", set ",(0,l.yg)("a",{parentName:"p",href:"#polyfills"},(0,l.yg)("inlineCode",{parentName:"a"},"polyfills"))," to ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("p",null,"The default is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("h4",{id:"statsbuiltins"},(0,l.yg)("inlineCode",{parentName:"h4"},"stats.builtIns")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    builtIns: <false|IGNORE_LIST>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    builtIns: {\n        ignore: [\n            // Built-in modules to ignore.\n        ],\n    },\n},\n")))),(0,l.yg)("p",null,"Enables or disables checking for missing built-in modules."),(0,l.yg)("p",null,"Not specifying this option, or specifying an ignore list, enables checking for missing built-in modules.\nWhen enabled, the CLI shows a warning if a built-in is used but not provided.\nThe Snaps CLI does not support Node.js built-ins out of the box.\nTo use built-ins, set ",(0,l.yg)("a",{parentName:"p",href:"#polyfills"},(0,l.yg)("inlineCode",{parentName:"a"},"polyfills"))," to ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("p",null,"You can specify a list of built-ins to ignore when checking for missing built-ins.\nThis is useful if the built-in is not actually used in the Snap, but is added by a dependency."),(0,l.yg)("p",null,"The default is an empty ignore list."),(0,l.yg)("h4",{id:"statsverbose"},(0,l.yg)("inlineCode",{parentName:"h4"},"stats.verbose")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(i.A,{value:"Syntax",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    verbose: <BOOLEAN>,\n},\n"))),(0,l.yg)(i.A,{value:"Example",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"stats: {\n    verbose: true,\n},\n")))),(0,l.yg)("p",null,"Enables or disables verbose logging.\nIf set to ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", the CLI logs more information.\nThe default is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."))}g.isMDXComponent=!0},19365:(e,a,n)=>{n.d(a,{A:()=>i});var t=n(96540),l=n(20053);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:n,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n},a)}},4865:(e,a,n)=>{n.d(a,{A:()=>d});var t=n(58168),l=n(96540),r=n(20053),i=n(23104),s=n(47751),o=n(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:a,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.a_)(),d=e=>{const a=e.currentTarget,n=c.indexOf(a),t=u[n].value;t!==s&&(m(a),o(t))},g=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a)},u.map((e=>{let{value:a,label:n,attributes:i}=e;return l.createElement("li",(0,t.A)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>c.push(e),onKeyDown:g,onClick:d},i,{className:(0,r.A)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":s===a})}),n??a)})))}function c(e){let{lazy:a,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function m(e){const a=(0,s.u)(e);return l.createElement("div",{className:(0,r.A)("tabs-container",p.tabList)},l.createElement(u,(0,t.A)({},e,a)),l.createElement(c,(0,t.A)({},e,a)))}function d(e){const a=(0,o.A)();return l.createElement(m,(0,t.A)({key:String(a)},e))}},47751:(e,a,n)=>{n.d(a,{u:()=>m});var t=n(96540),l=n(56347),r=n(57485),i=n(31682),s=n(89466);function o(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??o(n);return function(e){const a=(0,i.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function u(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function c(e){let{queryString:a=!1,groupId:n}=e;const i=(0,l.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,r.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(i.location.search);a.set(s,e),i.replace({...i.location,search:a.toString()})}),[s,i])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:l}=e,r=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[m,d]=c({queryString:n,groupId:l}),[g,y]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,r]=(0,s.Dv)(n);return[l,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),f=(()=>{const e=m??g;return u({value:e,tabValues:r})?e:null})();(0,t.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),y(e)}),[d,y,r]),tabValues:r}}}}]);