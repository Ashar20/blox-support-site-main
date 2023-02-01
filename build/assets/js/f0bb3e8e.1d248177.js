"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[3439],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return s}});var l=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){if(null==t)return{};var e,l,o=function(t,n){if(null==t)return{};var e,l,o={},r=Object.keys(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var u=l.createContext({}),c=function(t){var n=l.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},p=function(t){var n=c(t.components);return l.createElement(u.Provider,{value:n},t.children)},k={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(t,n){var e=t.components,o=t.mdxType,r=t.originalType,u=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),d=c(e),s=o,h=d["".concat(u,".").concat(s)]||d[s]||k[s]||r;return e?l.createElement(h,i(i({ref:n},p),{},{components:e})):l.createElement(h,i({ref:n},p))}));function s(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var r=e.length,i=new Array(r);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var c=2;c<r;c++)i[c]=e[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}d.displayName="MDXCreateElement"},86473:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var l=e(87462),o=e(63366),r=(e(67294),e(3905)),i=["components"],a={title:"ionic capacitor run",sidebar_label:"capacitor run"},u=void 0,c={unversionedId:"cli/commands/capacitor-run",id:"cli/commands/capacitor-run",isDocsHomePage:!1,title:"ionic capacitor run",description:"Run an Ionic project on a connected device",source:"@site/docs/cli/commands/capacitor-run.md",sourceDirName:"cli/commands",slug:"/cli/commands/capacitor-run",permalink:"/developer/docs/cli/commands/capacitor-run",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/capacitor/run.ts",tags:[],version:"current",frontMatter:{title:"ionic capacitor run",sidebar_label:"capacitor run"},sidebar:"cli",previous:{title:"capacitor open",permalink:"/developer/docs/cli/commands/capacitor-open"},next:{title:"capacitor sync",permalink:"/developer/docs/cli/commands/capacitor-sync"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],k={toc:p};function d(t){var n=t.components,e=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Run an Ionic project on a connected device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor run [options]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ionic capacitor run")," will do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Perform ",(0,r.kt)("inlineCode",{parentName:"li"},"ionic build")," (or run the dev server from ",(0,r.kt)("inlineCode",{parentName:"li"},"ionic serve")," with the ",(0,r.kt)("inlineCode",{parentName:"li"},"--livereload")," option)"),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"capacitor run")," (or open IDE for your native project with the ",(0,r.kt)("inlineCode",{parentName:"li"},"--open")," option)")),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"--livereload")," with hardware devices, remember that livereload needs an active connection between device and computer. In some scenarios, you may need to host the dev server on an external address using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--external")," option. See these ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/livereload"},"docs")," for more information."),(0,r.kt)("p",null,"If you have multiple devices and emulators, you can target a specific one by ID with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--target")," option. You can list targets with ",(0,r.kt)("inlineCode",{parentName:"p"},"--list"),"."),(0,r.kt)("p",null,"For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/developer-resources/developer-tips"},"docs"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor run \n$ ionic capacitor run android\n$ ionic capacitor run android -l --external\n$ ionic capacitor run ios --livereload --external\n$ ionic capacitor run ios --livereload-url=http://localhost:8100\n")),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,"platform")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The platform to run (e.g. ",(0,r.kt)("code",null,"android"),", ",(0,r.kt)("code",null,"ios"),")"))))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-list",id:"option-list"},"--list"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"List all available targets")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-target",id:"option-target"},"--target",(0,r.kt)("span",{class:"option-spec"}," =<target>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Deploy to a specific device by its ID (use ",(0,r.kt)("code",null,"--list")," to see all)")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-open",id:"option-open"},"--open"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Open native IDE instead of using ",(0,r.kt)("code",null,"capacitor run"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-build",id:"option-build"},"--no-build"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Do not invoke Ionic build")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-external",id:"option-external"},"--external"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Host dev server on all network interfaces (i.e. ",(0,r.kt)("code",null,"--host=0.0.0.0"),")")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-livereload",id:"option-livereload"},"--livereload"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Spin up dev server to live-reload www files"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-l")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-livereload-url",id:"option-livereload-url"},"--livereload-url",(0,r.kt)("span",{class:"option-spec"}," =<url>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Provide a custom URL to the dev server")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Flag to use the ",(0,r.kt)("code",null,"production")," configuration"))))),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-host",id:"option-host"},"--host",(0,r.kt)("span",{class:"option-spec"}," =<host>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use specific host for the dev server")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"localhost"))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-port",id:"option-port"},"--port",(0,r.kt)("span",{class:"option-spec"}," =<port>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Use specific port for the dev server")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-p"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"8100"))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-public-host",id:"option-public-host"},"--public-host",(0,r.kt)("span",{class:"option-spec"}," =<host>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"The host used for the browser or web view"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,r.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Specify the configuration to use.")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Aliases"),(0,r.kt)("td",null,(0,r.kt)("code",null,"-c")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Output source maps"))))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-watch",id:"option-watch"},"--watch"))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"Rebuild when files change")))))))}d.isMDXComponent=!0}}]);