"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[83037],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27429:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],p={title:"iOS Development",sidebar_label:"Developing for iOS",skipIntros:!0},l=void 0,s={unversionedId:"Audience Hub/ios",id:"Audience Hub/ios",isDocsHomePage:!1,title:"iOS Development",description:"iOS App Development Guide: Xcode Setup to Build and Run iOS Apps",source:"@site/docs/Audience Hub/ios.md",sourceDirName:"Audience Hub",slug:"/Audience Hub/ios",permalink:"/developer/docs/Audience Hub/ios",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/Audience Hub/ios.md",tags:[],version:"current",frontMatter:{title:"iOS Development",sidebar_label:"Developing for iOS",skipIntros:!0}},c=[{value:"Xcode Setup",id:"xcode-setup",children:[{value:"Setting up a Development Team",id:"setting-up-a-development-team",children:[],level:3},{value:"Creating an iOS Simulator",id:"creating-an-ios-simulator",children:[],level:3}],level:2},{value:"Cordova Setup",id:"cordova-setup",children:[{value:"ios-sim &amp; ios-deploy",id:"ios-sim--ios-deploy",children:[],level:3}],level:2},{value:"Project Setup",id:"project-setup",children:[],level:2},{value:"Running with Xcode",id:"running-with-xcode",children:[],level:2},{value:"Running with the Ionic CLI",id:"running-with-the-ionic-cli",children:[{value:"Live-reload with Capacitor",id:"live-reload-with-capacitor",children:[],level:3},{value:"Live-reload with Cordova",id:"live-reload-with-cordova",children:[],level:3}],level:2},{value:"Debugging iOS Apps",id:"debugging-ios-apps",children:[{value:"Using Safari Web Inspector",id:"using-safari-web-inspector",children:[],level:3},{value:"Viewing Native Logs",id:"viewing-native-logs",children:[],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,p=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"iOS App Development Guide: Xcode Setup to Build and Run iOS Apps"),(0,o.kt)("meta",{name:"description",content:"Ionic's iOS development guide covers how to build and run Ionic apps on iOS simulators and devices. iOS apps can only be developed on macOS with Xcode setup."})),(0,o.kt)("p",null,"This guide covers how to run and debug Ionic apps on iOS simulators and devices using ",(0,o.kt)("a",{parentName:"p",href:"../reference/glossary.md#capacitor"},"Capacitor")," or ",(0,o.kt)("a",{parentName:"p",href:"../reference/glossary.md#cordova"},"Cordova"),". iOS apps can only be developed on macOS with Xcode installed."),(0,o.kt)("p",null,"There are two workflows for running Ionic apps on iOS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#running-with-xcode"},"Running with Xcode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#running-with-the-ionic-cli"},"Running with the Ionic CLI"))),(0,o.kt)("p",null,"The Xcode approach is generally more stable, but the Ionic CLI approach offers ",(0,o.kt)("a",{parentName:"p",href:"../reference/glossary.md#livereload"},"live-reload")," functionality."),(0,o.kt)("h2",{id:"xcode-setup"},"Xcode Setup"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/xcode/"},"Xcode")," is the IDE for creating native iOS apps. It includes the iOS SDK and Xcode command-line tools. Xcode can be ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/download/"},"downloaded for free")," with an Apple account or it can be installed through the App Store."),(0,o.kt)("p",null,"Once Xcode is installed, make sure the command-line tools are selected for use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"xcode-select --install\n")),(0,o.kt)("h3",{id:"setting-up-a-development-team"},"Setting up a Development Team"),(0,o.kt)("p",null,"All iOS apps must be code signed, even for development. Luckily, Xcode makes this easy with automatic code signing. The only prerequisite is an Apple ID."),(0,o.kt)("p",null,"Open Xcode and navigate to ",(0,o.kt)("strong",{parentName:"p"},"Xcode")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Preferences")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Accounts"),". Add an Apple ID if none are listed. Once logged in, a Personal Team will appear in the team list of the Apple ID."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Xcode Accounts",src:n(78559).Z})),(0,o.kt)("h3",{id:"creating-an-ios-simulator"},"Creating an iOS Simulator"),(0,o.kt)("p",null,"The iOS simulator emulates iOS devices on Macs. The following documentation is a quick way to get the iOS simulator set up. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html"},"Apple's documentation"),"."),(0,o.kt)("p",null,"Open Xcode and navigate to ",(0,o.kt)("strong",{parentName:"p"},"Window")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Devices and Simulators"),". Create an ",(0,o.kt)("strong",{parentName:"p"},"iPhone 11")," simulator if one does not already exist."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iOS Simulators",src:n(40009).Z})),(0,o.kt)("h2",{id:"cordova-setup"},"Cordova Setup"),(0,o.kt)("p",null,"Additional setup is required for Cordova to support programmatic builds. This section is not necessary for Capacitor."),(0,o.kt)("h3",{id:"ios-sim--ios-deploy"},"ios-sim & ios-deploy"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ios-control/ios-sim"},(0,o.kt)("inlineCode",{parentName:"a"},"ios-sim"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ios-control/ios-deploy"},(0,o.kt)("inlineCode",{parentName:"a"},"ios-deploy"))," are utilities that deploy apps to the iOS simulator and iOS devices during development. They can be installed globally with ",(0,o.kt)("a",{parentName:"p",href:"../reference/glossary.md#npm"},"npm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install -g ios-sim\n$ brew install ios-deploy\n")),(0,o.kt)("h2",{id:"project-setup"},"Project Setup"),(0,o.kt)("p",null,"Before apps can be deployed to iOS simulators and devices, the native project must be configured."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Generate the native project, if it does not already exist.")),(0,o.kt)("p",{parentName:"li"},"For Capacitor, run the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor add ios\n")),(0,o.kt)("p",{parentName:"li"},"For Cordova, run the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova prepare ios\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Set the ",(0,o.kt)("a",{parentName:"strong",href:"/reference/glossary.md#package-id"},"Package ID"),".")),(0,o.kt)("p",{parentName:"li"},"For Capacitor, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"capacitor.config.json")," file and modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"appId")," property."),(0,o.kt)("p",{parentName:"li"},"For Cordova, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml")," file and modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute of the root element, ",(0,o.kt)("inlineCode",{parentName:"p"},"<widget>"),". See ",(0,o.kt)("a",{parentName:"p",href:"https://cordova.apache.org/docs/en/latest/config_ref/#widget"},"the Cordova documentation")," for more information.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Open the project in ",(0,o.kt)("b",null,"Xcode"),".")),(0,o.kt)("p",{parentName:"li"},"For Capacitor, run the following to open the app in Xcode:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor open ios\n")),(0,o.kt)("p",{parentName:"li"},"For Cordova, open Xcode. Use ",(0,o.kt)("strong",{parentName:"p"},"File")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Open")," and locate the app. Open the app's ",(0,o.kt)("inlineCode",{parentName:"p"},"platforms/ios")," directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"In ",(0,o.kt)("b",null,"Project navigator"),", select the project root to open the project editor. Under the "),"Identity",(0,o.kt)("strong",{parentName:"p"}," section, verify that the Package ID that was set matches the Bundle Identifier.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Xcode Identity Setup",src:n(36641).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"In the same project editor, under the ",(0,o.kt)("b",null,"Signing")," section, ensure ",(0,o.kt)("b",null,"Automatically manage signing")," is enabled.")," Then, select a Development Team. Given a Development Team, Xcode will attempt to automatically prepare provisioning and signing."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Xcode Signing Setup",src:n(45465).Z})))),(0,o.kt)("h2",{id:"running-with-xcode"},"Running with Xcode"),(0,o.kt)("p",null,"In this workflow, Xcode can automatically fix common compilation and signing issues that can occur."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Develop the Ionic app and sync it to the native project.")),(0,o.kt)("p",{parentName:"li"},"With each meaningful change, Ionic apps must be built into web assets before the change can appear on iOS simulators and devices. The web assets then must be copied into the native project. Luckily, this process is made easy with a single Ionic CLI command."),(0,o.kt)("p",{parentName:"li"},"For Capacitor, run the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor copy ios\n$ ionic capacitor update\n")),(0,o.kt)("p",{parentName:"li"},"For Cordova, run the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova prepare ios\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"In Xcode, select a target simulator or device and click the play button.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Xcode Play Button Area",src:n(48140).Z})))),(0,o.kt)("h2",{id:"running-with-the-ionic-cli"},"Running with the Ionic CLI"),(0,o.kt)("p",null,"The Ionic CLI can build, copy, and deploy Ionic apps to iOS simulators and devices with a single command. It can also spin up a development server, like the one used in ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic serve"),", to provide ",(0,o.kt)("a",{parentName:"p",href:"../reference/glossary.md#livereload"},"live-reload")," functionality."),(0,o.kt)("p",null,"With live-reload, changes made to the app's source files trigger a rebuild of web assets and the changes are reflected on the simulator or device without having to deploy again."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For iOS devices, the device and the computer need to be on the same Wi-Fi network. An external URL for the dev server is also required so the device can connect to it. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--external")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"--host=0.0.0.0"),") to bind to external addresses."))),(0,o.kt)("h3",{id:"live-reload-with-capacitor"},"Live-reload with Capacitor"),(0,o.kt)("p",null,"Capacitor does not yet have a way to build native projects. It relies on Xcode to build and deploy app binaries. However, the Ionic CLI can boot up a live-reload server and configure Capacitor to use it with a single command."),(0,o.kt)("p",null,"Run the following, then select a target simulator or device and click the play button in Xcode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic capacitor run ios -l --external\n")),(0,o.kt)("h3",{id:"live-reload-with-cordova"},"Live-reload with Cordova"),(0,o.kt)("p",null,"Cordova can build and deploy native projects programmatically."),(0,o.kt)("p",null,"To boot up a live-reload server, build, and deploy the app, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova run ios -l --external\n")),(0,o.kt)("h2",{id:"debugging-ios-apps"},"Debugging iOS Apps"),(0,o.kt)("p",null,"Once an app is running on an iOS device or simulator, it can be debugged in Safari."),(0,o.kt)("h3",{id:"using-safari-web-inspector"},"Using Safari Web Inspector"),(0,o.kt)("p",null,"Safari has Web Inspector support for iOS simulators and devices. Open the ",(0,o.kt)("strong",{parentName:"p"},"Develop")," menu and select the simulator or device, then select the Ionic App to open Web Inspector."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the ",(0,o.kt)("strong",{parentName:"p"},"Develop")," menu is hidden, enable it in ",(0,o.kt)("strong",{parentName:"p"},"Safari")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Preferences")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Show Develop menu in menu bar"),"."),(0,o.kt)("p",{parentName:"div"},"If the app isn't listed, the Web Inspector may need to be enabled on the device in ",(0,o.kt)("strong",{parentName:"p"},"Settings")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Safari")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Web Inspector"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Safari Web Inspector",src:n(23548).Z})),(0,o.kt)("h3",{id:"viewing-native-logs"},"Viewing Native Logs"),(0,o.kt)("p",null,"If running with Xcode, native logs can be found in the Xcode ",(0,o.kt)("strong",{parentName:"p"},"Console"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the ",(0,o.kt)("strong",{parentName:"p"},"Console")," is hidden, enable it in ",(0,o.kt)("strong",{parentName:"p"},"View")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Debug Area")," ","\xbb"," ",(0,o.kt)("strong",{parentName:"p"},"Activate Console"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Xcode Console",src:n(87481).Z})))}m.isMDXComponent=!0},78559:function(e,t,n){t.Z=n.p+"assets/images/ios-xcode-accounts-8cda8338a3c190562410650b95e882ea.png"},40009:function(e,t,n){t.Z=n.p+"assets/images/ios-xcode-simulators-setup-73d2ba7c19127a4f269caefd91d3eb03.png"},23548:function(e,t,n){t.Z=n.p+"assets/images/ios-safari-web-inspector-timelines-2a116fe59723b279f7da8d139e06daa6.png"},87481:function(e,t,n){t.Z=n.p+"assets/images/ios-xcode-console-e27f69482057afbc3fde6117f7fcadd6.png"},36641:function(e,t,n){t.Z=n.p+"assets/images/ios-xcode-identity-setup-810a91fa449112c7a3bc48e62d2ceb9b.png"},48140:function(e,t,n){t.Z=n.p+"assets/images/ios-xcode-play-button-area-34caba7a45f5738649c65d1c448a2369.png"},45465:function(e,t,n){t.Z=n.p+"assets/images/ios-xcode-signing-setup-9a189ccd440dedd98b3d54a19eb5e68c.png"}}]);