"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[15775],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,l=function(t,e){if(null==t)return{};var n,o,l={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=o.createContext({}),c=function(t){var e=o.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=c(n),m=l,k=s["".concat(d,".").concat(m)]||s[m]||u[m]||r;return n?o.createElement(k,a(a({ref:e},p),{},{components:n})):o.createElement(k,a({ref:e},p))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,a=new Array(r);a[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:l,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63517:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var o=n(87462),l=n(63366),r=(n(67294),n(3905)),a=["components"],i={title:"ionic deploy add",sidebar_label:"deploy add"},d=void 0,c={unversionedId:"cli/commands/deploy-add",id:"cli/commands/deploy-add",isDocsHomePage:!1,title:"ionic deploy add",description:"Adds Appflow Deploy to the project",source:"@site/docs/cli/commands/deploy-add.md",sourceDirName:"cli/commands",slug:"/cli/commands/deploy-add",permalink:"/developer/docs/cli/commands/deploy-add",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/deploy/add.ts",tags:[],version:"current",frontMatter:{title:"ionic deploy add",sidebar_label:"deploy add"},sidebar:"cli",previous:{title:"cordova run",permalink:"/developer/docs/cli/commands/cordova-run"},next:{title:"deploy build",permalink:"/developer/docs/cli/commands/deploy-build"}},p=[{value:"Examples",id:"examples",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Advanced Options",id:"advanced-options",children:[],level:2}],u={toc:p};function s(t){var e=t.components,n=(0,l.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Adds Appflow Deploy to the project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic deploy add [options]\n")),(0,r.kt)("p",null,"This command adds the Appflow Deploy plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"cordova-plugin-ionic"),") for both Capacitor and Cordova projects."),(0,r.kt)("p",null,"For Capacitor projects it runs all the steps necessary to install the plugin, sync with the native projects and add the configuration to the proper iOS and Android configuration files."),(0,r.kt)("p",null,"For Cordova projects it just takes care of running the proper Cordova CLI command with the submitted parameters."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic deploy add \n$ ionic deploy add --app-id=abcd1234 --channel-name="Master" --update-method=background\n$ ionic deploy add --max-store=2 --min-background-duration=30\n$ ionic deploy add --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30\n')),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-app-id",id:"option-app-id"},"--app-id",(0,r.kt)("span",{class:"option-spec"}," =<id>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Your Appflow app ID")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-channel-name",id:"option-channel-name"},"--channel-name",(0,r.kt)("span",{class:"option-spec"}," =<name>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The channel to check for updates from")))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-update-method",id:"option-update-method"},"--update-method",(0,r.kt)("span",{class:"option-spec"}," =<name>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The update method that dictates the behavior of the plugin"))))),(0,r.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("table",{className:"reference-table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-max-store",id:"option-max-store"},"--max-store",(0,r.kt)("span",{class:"option-spec"}," =<quantity>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"The maximum number of downloaded versions to store on the device")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"2"))),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},(0,r.kt)("h3",null,(0,r.kt)("a",{href:"#option-min-background-duration",id:"option-min-background-duration"},"--min-background-duration",(0,r.kt)("span",{class:"option-spec"}," =<seconds>")))))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Description"),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("p",null,"The minimum duration after which the app checks for an update in the background")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Default"),(0,r.kt)("td",null,"30")))))}s.isMDXComponent=!0}}]);