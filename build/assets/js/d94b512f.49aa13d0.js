"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[81907],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},73247:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Platform"},d=void 0,p={unversionedId:"Content Hub/platform",id:"Content Hub/platform",isDocsHomePage:!1,title:"Platform",description:"Platform | Ionic Platform to Customize Apps to Fit Any Device",source:"@site/docs/Content Hub/platform.md",sourceDirName:"Content Hub",slug:"/Content Hub/platform",permalink:"/developer/docs/Content Hub/platform",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/Content Hub/platform.md",tags:[],version:"current",frontMatter:{title:"Platform"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>is</code>",id:"is",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Platforms",id:"platforms",children:[],level:4},{value:"Customizing Platform Detection Functions",id:"customizing-platform-detection-functions",children:[],level:4}],level:3},{value:"<code>platforms</code>",id:"platforms-1",children:[],level:3},{value:"<code>ready</code>",id:"ready",children:[],level:3},{value:"<code>isRTL</code>",id:"isrtl",children:[],level:3},{value:"<code>isLandscape</code>",id:"islandscape",children:[],level:3},{value:"<code>isPortrait</code>",id:"isportrait",children:[],level:3},{value:"<code>width</code>",id:"width",children:[],level:3},{value:"<code>height</code>",id:"height",children:[],level:3},{value:"<code>url</code>",id:"url",children:[],level:3},{value:"<code>testUserAgent</code>",id:"testuseragent",children:[{value:"Parameters",id:"parameters-1",children:[],level:4}],level:3}],level:2},{value:"Events",id:"events",children:[{value:"<code>pause</code>",id:"pause",children:[{value:"Examples",id:"examples",children:[],level:4}],level:3},{value:"<code>resize</code>",id:"resize",children:[{value:"Examples",id:"examples-1",children:[],level:4}],level:3},{value:"<code>resume</code>",id:"resume",children:[{value:"Examples",id:"examples-2",children:[],level:4}],level:3}],level:2}],u={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"Platform | Ionic Platform to Customize Apps to Fit Any Device"),(0,l.kt)("meta",{name:"description",content:"Ionic Platform service can be used to get information about your current device.\xa0With this information you can completely customize your app to fit any device."})),(0,l.kt)("p",null,"The Platform service can be used to get information about your current device. You can get all of the platforms associated with the device using the ",(0,l.kt)("inlineCode",{parentName:"p"},"platforms")," method, including whether the app is being viewed from a tablet, if it's on a mobile device or browser, and the exact platform (iOS, Android, etc). You can also get the orientation of the device, if it uses right-to-left language direction, and much much more. With this information you can completely customize your app to fit any device."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Platform } from '@ionic/angular';\n\n@Component({...})\nexport class MyPage {\n  constructor(public platform: Platform) {\n\n  }\n}\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"is"},(0,l.kt)("inlineCode",{parentName:"h3"},"is")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Depending on the platform the user is on, ",(0,l.kt)("inlineCode",{parentName:"td"},"is(platformName)")," will return true or false. Note that the same app can return true for more than one platform name. For example, an app running from an iPad would return true for the platform names: ",(0,l.kt)("inlineCode",{parentName:"td"},"mobile"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"ios"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"ipad"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"tablet"),". Additionally, if the app was running from Cordova then ",(0,l.kt)("inlineCode",{parentName:"td"},"cordova")," would be true.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"is(platformName: Platforms) => boolean"))))),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"platformName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Platforms")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the platform. Available options are android, capacitor, cordova, desktop, electron, hybrid, ios, ipad, iphone, mobile, phablet, pwa, tablet")))),(0,l.kt)("h4",{id:"platforms"},"Platforms"),(0,l.kt)("p",null,"Below is a table listing all the possible platform values along with corresponding descriptions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Platform Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"android"),(0,l.kt)("td",{parentName:"tr",align:null},"a device running Android")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"capacitor"),(0,l.kt)("td",{parentName:"tr",align:null},"a device running Capacitor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cordova"),(0,l.kt)("td",{parentName:"tr",align:null},"a device running Cordova")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"desktop"),(0,l.kt)("td",{parentName:"tr",align:null},"a desktop device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"electron"),(0,l.kt)("td",{parentName:"tr",align:null},"a desktop device running Electron")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hybrid"),(0,l.kt)("td",{parentName:"tr",align:null},"a device running Capacitor or Cordova")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ios"),(0,l.kt)("td",{parentName:"tr",align:null},"a device running iOS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ipad"),(0,l.kt)("td",{parentName:"tr",align:null},"an iPad device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iphone"),(0,l.kt)("td",{parentName:"tr",align:null},"an iPhone device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobile"),(0,l.kt)("td",{parentName:"tr",align:null},"a mobile device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobileweb"),(0,l.kt)("td",{parentName:"tr",align:null},"a web browser running in a mobile device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phablet"),(0,l.kt)("td",{parentName:"tr",align:null},"a phablet device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pwa"),(0,l.kt)("td",{parentName:"tr",align:null},"a PWA app")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tablet"),(0,l.kt)("td",{parentName:"tr",align:null},"a tablet device")))),(0,l.kt)("h4",{id:"customizing-platform-detection-functions"},"Customizing Platform Detection Functions"),(0,l.kt)("p",null,"The function used to detect a specific platform can be overridden by providing an alternative function in the global ",(0,l.kt)("a",{parentName:"p",href:"./config"},"Ionic config"),". Each function takes ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," as a parameter and returns a boolean."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IonicModule } from '@ionic/angular';\n\n@NgModule({\n  ...\n  imports: [\n    BrowserModule,\n    IonicModule.forRoot({\n      platform: {\n        /** The default `desktop` function returns false for devices with a touchscreen.\n        * This is not always wanted, so this function tests the User Agent instead.\n        **/\n        'desktop': (win) => {\n          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);\n          return !isMobile;\n        }\n      },\n    }),\n    AppRoutingModule\n  ],\n  ...\n})\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type PlatformConfig = {\n  android?: ((win: Window) => boolean) | undefined;\n  capacitor?: ((win: Window) => boolean) | undefined;\n  cordova?: ((win: Window) => boolean) | undefined;\n  desktop?: ((win: Window) => boolean) | undefined;\n  electron?: ((win: Window) => boolean) | undefined;\n  hybrid?: ((win: Window) => boolean) | undefined;\n  ios?: ((win: Window) => boolean) | undefined;\n  ipad?: ((win: Window) => boolean) | undefined;\n  iphone?: ((win: Window) => boolean) | undefined;\n  mobile?: ((win: Window) => boolean) | undefined;\n  mobileweb?: ((win: Window) => boolean) | undefined;\n  phablet?: ((win: Window) => boolean) | undefined;\n  pwa?: ((win: Window) => boolean) | undefined;\n  tablet?: ((win: Window) => boolean) | undefined;\n};\n")),(0,l.kt)("h3",{id:"platforms-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"platforms")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Depending on what device you are on, ",(0,l.kt)("inlineCode",{parentName:"td"},"platforms")," can return multiple values. Each possible value is a hierarchy of platforms. For example, on an iPhone, it would return ",(0,l.kt)("inlineCode",{parentName:"td"},"mobile"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"ios"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"iphone"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"platforms() => string[]"))))),(0,l.kt)("h3",{id:"ready"},(0,l.kt)("inlineCode",{parentName:"h3"},"ready")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a promise when the platform is ready and native functionality can be called. If the app is running from within a web browser, then the promise will resolve when the DOM is ready. When the app is running from an application engine such as Cordova, then the promise will resolve when Cordova triggers the ",(0,l.kt)("inlineCode",{parentName:"td"},"deviceready")," event. The resolved value is the ",(0,l.kt)("inlineCode",{parentName:"td"},"readySource"),", which states the platform that was used. ",(0,l.kt)("br",null),(0,l.kt)("br",null),"For example, when Cordova is ready, the resolved ready source is ",(0,l.kt)("inlineCode",{parentName:"td"},"cordova"),". The default ready source value will be ",(0,l.kt)("inlineCode",{parentName:"td"},"dom"),". The ",(0,l.kt)("inlineCode",{parentName:"td"},"readySource")," is useful if different logic should run depending on the platform the app is running from. For example, only Capacitor and Cordova can execute the status bar plugin, so the web should not run status bar plugin logic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ready() => Promise<string>"))))),(0,l.kt)("h3",{id:"isrtl"},(0,l.kt)("inlineCode",{parentName:"h3"},"isRTL")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns if this app is using right-to-left language direction or not. We recommend the app's ",(0,l.kt)("inlineCode",{parentName:"td"},"index.html")," file already has the correct ",(0,l.kt)("inlineCode",{parentName:"td"},"dir")," attribute value set, such as ",(0,l.kt)("inlineCode",{parentName:"td"},'<html dir="ltr">')," or ",(0,l.kt)("inlineCode",{parentName:"td"},'<html dir="rtl">'),". ",(0,l.kt)("a",{parentName:"td",href:"http://www.w3.org/International/questions/qa-html-dir"},"W3C: Structural markup and right-to-left text in HTML"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isRTL() => boolean"))))),(0,l.kt)("h3",{id:"islandscape"},(0,l.kt)("inlineCode",{parentName:"h3"},"isLandscape")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if the app is in landscape mode.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isLandscape() => boolean"))))),(0,l.kt)("h3",{id:"isportrait"},(0,l.kt)("inlineCode",{parentName:"h3"},"isPortrait")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if the app is in portrait mode.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isPortrait() => boolean"))))),(0,l.kt)("h3",{id:"width"},(0,l.kt)("inlineCode",{parentName:"h3"},"width")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the width of the platform's viewport using ",(0,l.kt)("inlineCode",{parentName:"td"},"window.innerWidth"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"width() => number"))))),(0,l.kt)("h3",{id:"height"},(0,l.kt)("inlineCode",{parentName:"h3"},"height")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the height of the platform's viewport using ",(0,l.kt)("inlineCode",{parentName:"td"},"window.innerHeight"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"height() => number"))))),(0,l.kt)("h3",{id:"url"},(0,l.kt)("inlineCode",{parentName:"h3"},"url")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the current url.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url() => string"))))),(0,l.kt)("h3",{id:"testuseragent"},(0,l.kt)("inlineCode",{parentName:"h3"},"testUserAgent")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if the expression is included in the user agent string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"testUserAgent(expression: string) => boolean"))))),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expression"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The string to check in the user agent")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"pause"},(0,l.kt)("inlineCode",{parentName:"h3"},"pause")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"pause")," event emits when the native platform puts the application into the background, typically when the user switches to a different application. This event emits when a Cordova/Capacitor app is put into the background but doesn't fire in a standard web browser."),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"this.platform.pause.subscribe(async () => {\n  alert('Pause event detected');\n});\n")),(0,l.kt)("h3",{id:"resize"},(0,l.kt)("inlineCode",{parentName:"h3"},"resize")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"resize")," event emits when the browser window has changed dimensions. This could be from a browser window being physically resized, or from a device changing orientation."),(0,l.kt)("h4",{id:"examples-1"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"this.platform.resize.subscribe(async () => {\n  alert('Resize event detected');\n});\n")),(0,l.kt)("h3",{id:"resume"},(0,l.kt)("inlineCode",{parentName:"h3"},"resume")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"resume")," event fires when the native platform pulls the application out from the background. This event emits when a Cordova/Capacitor app comes out from the background but doesn't fire in a standard web browser."),(0,l.kt)("h4",{id:"examples-2"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"this.platform.resume.subscribe(async () => {\n  alert('Resume event detected');\n});\n")))}s.isMDXComponent=!0}}]);