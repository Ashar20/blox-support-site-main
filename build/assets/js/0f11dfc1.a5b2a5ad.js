"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[65359],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(o),h=n,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return o?a.createElement(u,i(i({ref:t},p),{},{components:o})):a.createElement(u,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2742:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],s={sidebar_label:"Overlays"},l="Using Overlay Components in React",c={unversionedId:"react/overlays",id:"version-v5/react/overlays",isDocsHomePage:!1,title:"Using Overlay Components in React",description:"For Ionic React, there are two techniques you can use to display overlay components like modals, alerts, action sheets, etc. In this guide, we will go over both of them.",source:"@site/versioned_docs/version-v5/react/overlays.md",sourceDirName:"react",slug:"/react/overlays",permalink:"/developer/docs/v5/react/overlays",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/react/overlays.md",tags:[],version:"v5",frontMatter:{sidebar_label:"Overlays"},sidebar:"version-v5/docs",previous:{title:"Progressive Web Apps",permalink:"/developer/docs/v5/react/pwa"},next:{title:"Storage",permalink:"/developer/docs/v5/react/storage"}},p=[{value:"Overlay Hooks",id:"overlay-hooks",children:[],level:2},{value:"Overlay Components",id:"overlay-components",children:[],level:2},{value:"Docs for Overlays in Ionic",id:"docs-for-overlays-in-ionic",children:[],level:2}],d={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-overlay-components-in-react"},"Using Overlay Components in React"),(0,r.kt)("p",null,"For Ionic React, there are two techniques you can use to display overlay components like modals, alerts, action sheets, etc. In this guide, we will go over both of them."),(0,r.kt)("h2",{id:"overlay-hooks"},"Overlay Hooks"),(0,r.kt)("p",null,"Starting in Ionic React 5.6, we introduced new React hooks you can use to control displaying and dismissing overlays. These hooks provide a programmatic way of controlling the overlays, as well as a way to use overlays outside of your Ionic Page without the need of a state management system."),(0,r.kt)("p",null,"To use one of the overlay hooks, you import the hook for the overlay you want to use from ",(0,r.kt)("inlineCode",{parentName:"p"},"@ionic/react"),". For example, if we want to use the Alert overlay, we import ",(0,r.kt)("inlineCode",{parentName:"p"},"useIonAlert"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useIonAlert } from '@ionic/react';\n")),(0,r.kt)("p",null,"The hooks return an array, where the first item in the array is the method to present the hook, and the second is the method to dismiss the hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const [showAlert, hideAlert] = useIonAlert();\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Overlays often dismiss themselves when the user is done interacting with them, so you might not need to use dismiss/hide method."))),(0,r.kt)("p",null,"To display the overlay, you use the present method, which we destructured to the name ",(0,r.kt)("inlineCode",{parentName:"p"},"showAlert"),". The method takes in a set of parameters that vary depending on each overlay, but generally, they can either take in a simple set of common parameters or an object to specify additional options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"showAlert('Hello!', [{ text: 'Ok' }]);\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"useIonAlert"),", the first parameter is the message to display, and the second is an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"AlertButtons")," to customize the buttons the alert will show."),(0,r.kt)("p",null,"Alternatively, you can pass in an AlertOptions config object to provide additional parameters, such as a CSS class to add to the markup, a header for the alert, and a callback that gets called when the alert is dismissed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"showAlert({\n  cssClass: 'my-css',\n  header: 'Alert',\n  message: 'Hello!',\n  buttons: ['Cancel', { text: 'Ok', handler: (d) => console.log('ok pressed') }],\n  onDidDismiss: (e) => console.log('alert dismiss'),\n});\n")),(0,r.kt)("p",null,"Overlay hooks that display additional custom components as part of their markup, such as ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/modal"},"modals")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/popover"},"popovers"),", take in a couple of additional parameters when initializing their hooks. The first parameter is the component you want your overlay to display, and the second is an object of additional props you want to pass into the component when it gets constructed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const [present, dismiss] = useIonModal(({ name }) => <div>Hello {name}.</div>, {\n  name: 'Dave',\n});\n")),(0,r.kt)("h2",{id:"overlay-components"},"Overlay Components"),(0,r.kt)("p",null,"Overlays can also be displayed by using components from ",(0,r.kt)("inlineCode",{parentName:"p"},"@ionic/react"),". The components take a ",(0,r.kt)("inlineCode",{parentName:"p"},"isOpen")," prop that you provide to control if the overlay is currently being displayed or not. When ",(0,r.kt)("inlineCode",{parentName:"p"},"isOpen")," switches from true to false (and vise versa), Ionic will open/close the overlay with the appropriate animation. You can also supply any other additional config options as props to the overlay:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<IonAlert isOpen={showAlert} message=\"Hello!\" buttons={[{ text: 'Ok' }]} onDidDismiss={() => setShowAlert(false)} />\n")),(0,r.kt)("p",null,"Above, the ",(0,r.kt)("inlineCode",{parentName:"p"},"showAlert")," boolean is a piece of state provided from your application."),(0,r.kt)("p",null,"When the overlay is dismissed, it is important to tie into the ",(0,r.kt)("inlineCode",{parentName:"p"},"onDidDismiss")," callback and set your state variable to indicate that the overlay is no longer presenting. Ionic React looks for changes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"isOpen")," prop to determine if the overlay should be displayed or not."),(0,r.kt)("p",null,"For overlays that display custom components, such as ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/modal"},"modals")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/popover"},"popovers"),", you provide the component as a child to the overlay component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<IonModal isOpen={showModal}>\n  <div>Hello!</div>\n</IonModal>\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Overlay Components are still a valid way of displaying overlays and are in no way a deprecated method. Use whichever method best fits your application."))),(0,r.kt)("h2",{id:"docs-for-overlays-in-ionic"},"Docs for Overlays in Ionic"),(0,r.kt)("p",null,"For full docs and to see usage examples for both the hook and component approach, visit the docs page for each of the overlays in Ionic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/action-sheet"},"Action Sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/modal#usage"},"Alert")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/loading"},"Loading")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/modal"},"Modal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/picker"},"Picker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/popover"},"Popover")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/api/toast"},"Toast"))))}m.isMDXComponent=!0}}]);