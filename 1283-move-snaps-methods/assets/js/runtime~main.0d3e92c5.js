(()=>{"use strict";var e,a,f,d,c,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,e=[],r.O=(a,f,d,c)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],c=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&c||b>=c)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,c<b&&(b=c));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[f,d,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(c,b),c},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"74e5817e",157:"2e741f0e",216:"c1670fd8",242:"ba4cac81",257:"ab4cafa2",289:"9fb62b98",296:"c66adc2f",473:"f236dd81",520:"cb2c0fed",528:"9cea254b",531:"52198f09",736:"f186a5d0",785:"e8973b68",792:"cfc76383",910:"a015cb1d",1180:"92d77c2e",1266:"7d4adaa7",1273:"b91521d0",1343:"dfbcf5f2",1588:"8145e54e",1660:"6e004e16",1697:"4a530d18",1717:"40d431ee",1733:"ff576332",1784:"c66e041d",1874:"9947d6d2",1891:"aee6d0cb",1926:"54f1853a",1930:"030193d7",1969:"17a18c8c",2138:"1a4e3797",2146:"55d0cf22",2166:"df3ffe2a",2169:"76d3ef76",2173:"0e9697e5",2358:"a767f895",2416:"63b87658",2445:"c23d85eb",2520:"82c9c8ff",2535:"66e15f76",2675:"486ba757",2700:"d3bb2b22",2782:"3ee3d2fe",2844:"f8f7b6b2",2894:"3e112a3e",2971:"47fa8f02",2980:"3925c87d",3006:"3c29e3c1",3056:"284a1a9e",3102:"ce634f1e",3179:"68b2aedd",3235:"b6db0fd4",3349:"c90162c2",3374:"f8a3ce18",3442:"453c9f5d",3499:"97c42b41",3523:"54713468",3557:"c3be8443",3582:"03c51261",3623:"bdecca60",3692:"57e75615",3794:"d5f74ffe",3860:"ba7d2542",3967:"4ecdda4a",4022:"6721d267",4050:"66ba7e9e",4057:"56aa118c",4081:"2150471b",4151:"6380b8b5",4209:"70334ba8",4279:"df203c0f",4300:"fe7415f5",4520:"2a5de1af",4583:"1df93b7f",4687:"c5e4f5c1",4698:"2e39c2b3",4730:"976401e5",4787:"3720c009",4933:"eb2b80f1",4939:"011b5d76",4961:"66d369c7",5044:"839511b6",5151:"55960ee5",5188:"37285b91",5246:"cf946124",5312:"19fab523",5341:"e564d190",5484:"4c2d8e7b",5569:"d4b4a7ff",5586:"c455d87c",5593:"2c1888ff",5685:"682638a2",5690:"6ebf937c",5693:"ae6e9ecd",5892:"11b7fc92",6023:"a2353af7",6032:"eb97d9b5",6040:"b099eb42",6041:"94590018",6095:"ab8b636d",6213:"14bc7481",6286:"f9fecb86",6325:"f4fa537f",6373:"7c5954e6",6433:"3d86cae6",6594:"e4b21b58",6692:"bcf2fffd",6694:"f60fed4d",6744:"ee067fe3",6764:"286d8836",6832:"31bfc0a5",6875:"e1aa5429",6880:"509e035f",6937:"5625bc05",6940:"090107f6",6969:"14eb3368",7255:"f5fc1e3e",7441:"ab85252c",7540:"d70a1ef5",7682:"015fe5e8",7775:"5e56b9d4",7785:"68c12626",7809:"8a086a48",7830:"90e1aad6",8050:"0b387740",8151:"a17a571e",8228:"f6d13bb3",8280:"ce260bbc",8298:"3e786943",8317:"501c7dd0",8401:"17896441",8428:"f5000f06",8472:"37eccac4",8483:"78eb1577",8581:"935f2afb",8600:"c08b8174",8638:"037997aa",8691:"8329f30e",8705:"577b8b2a",8714:"1be78505",8760:"ab3b18fd",8873:"fd49626c",8957:"652081cc",9071:"4ad67257",9155:"26d21a2b",9175:"d2011f4f",9329:"ef8d09aa",9355:"95c87532",9375:"4efa9f2e",9400:"debbc54f",9477:"49f67c63",9493:"5b7aac14",9545:"77a46a80",9566:"177a052f",9588:"44fb6b83",9594:"0db58064",9631:"41f5386a",9664:"95fa971a",9703:"b223888a",9944:"7dd3f6c4",9987:"5a6432d3"}[e]||e)+"."+{53:"54899bb3",157:"2db501e5",216:"402314d6",242:"bd10a60e",257:"ef671453",289:"04d1c13d",296:"b7fc491e",416:"cd044015",473:"7a25c52a",520:"8aeb2e10",528:"2e3e3a47",531:"3bc59b73",736:"fdb5f6bf",785:"69500089",792:"e68b6a39",910:"6e51269a",1180:"07d0164b",1245:"4b021537",1266:"3eed8872",1273:"ace02760",1343:"04883e08",1588:"27e8f16d",1660:"893ab396",1697:"b4d3b9e1",1717:"fe988089",1733:"b0a51f76",1774:"93445f1c",1784:"66bba816",1874:"39bd5243",1891:"bacd0c16",1926:"b1422959",1930:"a72ed832",1969:"c9427713",2138:"55088491",2146:"bdd76349",2166:"9ffc9814",2169:"0fa43b37",2173:"a6884a9b",2358:"09ea698e",2416:"ed789b41",2445:"0471e47e",2520:"60bd27c4",2535:"2d7660e2",2675:"2fa46622",2700:"6627b31b",2782:"a3409e55",2844:"fd01d5ad",2894:"e681e77b",2971:"a664fd97",2980:"365e8f3d",3006:"dbd41ab5",3056:"212d0c24",3102:"a81d2c0a",3179:"2b3d7ff3",3235:"b0fe93c6",3241:"b8ba4949",3349:"a0779869",3374:"d670e24b",3442:"2639b3f4",3499:"c698e1b8",3523:"e7952a1e",3557:"7f89e5c2",3582:"7e07ce80",3623:"560fab79",3692:"5d930388",3794:"5be5639e",3860:"80266745",3967:"8d0cf9f6",4022:"6e4a1ad6",4050:"3ca6bbc9",4057:"a597662c",4081:"4e204d31",4151:"25ce79f5",4209:"f00faa97",4279:"986e0bde",4300:"472efc2f",4520:"aee6f7c6",4583:"ed2eab5e",4687:"76672b3b",4698:"8b3ac1df",4730:"88282cd5",4787:"6d6c9908",4933:"03b51cdb",4939:"3d73d5e6",4961:"23c7b1aa",5044:"65362ca7",5151:"fc9c734c",5188:"04396f0c",5246:"6254868e",5312:"9621fc3f",5341:"bda55f54",5484:"850260ac",5569:"5bebc5b4",5586:"8c0025e9",5593:"65eddd92",5685:"3750bf48",5690:"c1211d9e",5693:"6d4dcad6",5892:"803a6ccc",6023:"c4e3a449",6032:"1eee582d",6040:"8a184a8e",6041:"b4b726cb",6095:"84a92ab8",6213:"667179e7",6286:"fdc3f452",6325:"05878076",6333:"d581c255",6373:"0d27562b",6433:"7eec095a",6594:"90ff1992",6692:"38db869c",6694:"a723d60d",6744:"ec759162",6764:"72610a54",6832:"69de0216",6875:"97168470",6880:"b69807bc",6937:"d6f793d0",6940:"ffdca025",6969:"016c2881",7113:"79b61b81",7195:"b658c23d",7255:"48616f30",7441:"8d245479",7540:"7c18856e",7682:"e2f2d75c",7775:"8dfa690a",7785:"420a558d",7809:"64fd7dab",7830:"8004caab",7996:"a6d5cceb",8050:"cca19ab9",8055:"b5cceacb",8151:"b788b23f",8228:"65994e8e",8280:"48e3083a",8298:"d29a7a7a",8317:"a31b62e0",8401:"f9349c4c",8428:"4161ae00",8472:"3f8c6b8d",8483:"67801b87",8581:"438fe29d",8600:"1a16d3db",8638:"9ef9e51d",8691:"0db0d807",8705:"53dfd835",8714:"b5daaf67",8760:"3672e24a",8873:"3885cce5",8913:"a65b2f19",8957:"fdd5c147",9071:"34e6be42",9155:"ed5e9baa",9175:"c2d0c623",9329:"34691cd9",9355:"faf2bd03",9375:"5ec70f25",9400:"623d7352",9462:"1e733e84",9477:"ccb2d629",9493:"84f1e0f9",9545:"ba1398a4",9566:"db7ea5ff",9588:"acf8b850",9594:"b8c8b27a",9631:"8ef824c2",9664:"038ee6cb",9703:"bbf3f45a",9944:"19ee4e1e",9987:"356456ae"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},c="metamask-docs:",r.l=(e,a,f,b)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==c+f){t=s;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+f),t.src=e),d[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(u);var c=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(f))),a)return a(f)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/1283-move-snaps-methods/",r.gca=function(e){return e={17896441:"8401",54713468:"3523",94590018:"6041","74e5817e":"53","2e741f0e":"157",c1670fd8:"216",ba4cac81:"242",ab4cafa2:"257","9fb62b98":"289",c66adc2f:"296",f236dd81:"473",cb2c0fed:"520","9cea254b":"528","52198f09":"531",f186a5d0:"736",e8973b68:"785",cfc76383:"792",a015cb1d:"910","92d77c2e":"1180","7d4adaa7":"1266",b91521d0:"1273",dfbcf5f2:"1343","8145e54e":"1588","6e004e16":"1660","4a530d18":"1697","40d431ee":"1717",ff576332:"1733",c66e041d:"1784","9947d6d2":"1874",aee6d0cb:"1891","54f1853a":"1926","030193d7":"1930","17a18c8c":"1969","1a4e3797":"2138","55d0cf22":"2146",df3ffe2a:"2166","76d3ef76":"2169","0e9697e5":"2173",a767f895:"2358","63b87658":"2416",c23d85eb:"2445","82c9c8ff":"2520","66e15f76":"2535","486ba757":"2675",d3bb2b22:"2700","3ee3d2fe":"2782",f8f7b6b2:"2844","3e112a3e":"2894","47fa8f02":"2971","3925c87d":"2980","3c29e3c1":"3006","284a1a9e":"3056",ce634f1e:"3102","68b2aedd":"3179",b6db0fd4:"3235",c90162c2:"3349",f8a3ce18:"3374","453c9f5d":"3442","97c42b41":"3499",c3be8443:"3557","03c51261":"3582",bdecca60:"3623","57e75615":"3692",d5f74ffe:"3794",ba7d2542:"3860","4ecdda4a":"3967","6721d267":"4022","66ba7e9e":"4050","56aa118c":"4057","2150471b":"4081","6380b8b5":"4151","70334ba8":"4209",df203c0f:"4279",fe7415f5:"4300","2a5de1af":"4520","1df93b7f":"4583",c5e4f5c1:"4687","2e39c2b3":"4698","976401e5":"4730","3720c009":"4787",eb2b80f1:"4933","011b5d76":"4939","66d369c7":"4961","839511b6":"5044","55960ee5":"5151","37285b91":"5188",cf946124:"5246","19fab523":"5312",e564d190:"5341","4c2d8e7b":"5484",d4b4a7ff:"5569",c455d87c:"5586","2c1888ff":"5593","682638a2":"5685","6ebf937c":"5690",ae6e9ecd:"5693","11b7fc92":"5892",a2353af7:"6023",eb97d9b5:"6032",b099eb42:"6040",ab8b636d:"6095","14bc7481":"6213",f9fecb86:"6286",f4fa537f:"6325","7c5954e6":"6373","3d86cae6":"6433",e4b21b58:"6594",bcf2fffd:"6692",f60fed4d:"6694",ee067fe3:"6744","286d8836":"6764","31bfc0a5":"6832",e1aa5429:"6875","509e035f":"6880","5625bc05":"6937","090107f6":"6940","14eb3368":"6969",f5fc1e3e:"7255",ab85252c:"7441",d70a1ef5:"7540","015fe5e8":"7682","5e56b9d4":"7775","68c12626":"7785","8a086a48":"7809","90e1aad6":"7830","0b387740":"8050",a17a571e:"8151",f6d13bb3:"8228",ce260bbc:"8280","3e786943":"8298","501c7dd0":"8317",f5000f06:"8428","37eccac4":"8472","78eb1577":"8483","935f2afb":"8581",c08b8174:"8600","037997aa":"8638","8329f30e":"8691","577b8b2a":"8705","1be78505":"8714",ab3b18fd:"8760",fd49626c:"8873","652081cc":"8957","4ad67257":"9071","26d21a2b":"9155",d2011f4f:"9175",ef8d09aa:"9329","95c87532":"9355","4efa9f2e":"9375",debbc54f:"9400","49f67c63":"9477","5b7aac14":"9493","77a46a80":"9545","177a052f":"9566","44fb6b83":"9588","0db58064":"9594","41f5386a":"9631","95fa971a":"9664",b223888a:"9703","7dd3f6c4":"9944","5a6432d3":"9987"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,f)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var c=new Promise(((f,c)=>d=e[a]=[f,c]));f.push(d[2]=c);var b=r.p+r.u(a),t=new Error;r.l(b,(f=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var c=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+b+")",t.name="ChunkLoadError",t.type=c,t.request=b,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var d,c,b=f[0],t=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(f);n<b.length;n++)c=b[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},f=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();