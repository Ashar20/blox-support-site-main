"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[60216],{58215:function(e,n,a){var r=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,t=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:t},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return m}});var r=a(87462),t=a(67294),i=a(72389),o=a(79443);var s=function(){var e=(0,t.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(89521),c=a(86010),u="tabItem_1uMI";function d(e){var n,a,r,i=e.lazy,o=e.block,d=e.defaultValue,m=e.values,v=e.groupId,p=e.className,f=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),b=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),E=k.tabGroupChoices,N=k.setTabGroupChoices,C=(0,t.useState)(g),y=C[0],Z=C[1],I=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var T=E[v];null!=T&&T!==y&&h.some((function(e){return e.value===T}))&&Z(T)}var x=function(e){var n=e.currentTarget,a=I.indexOf(n),r=h[a].value;r!==y&&(w(n),Z(r),null!=v&&N(v,r))},_=function(e){var n,a=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;a=I[r]||I[0];break;case"ArrowLeft":var t=I.indexOf(e.currentTarget)-1;a=I[t]||I[I.length-1]}null==(n=a)||n.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},p)},h.map((function(e){var n=e.value,a=e.label;return t.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":y===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:x,onClick:x},null!=a?a:n)}))),i?(0,t.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}function m(e){var n=(0,i.Z)();return t.createElement(d,(0,r.Z)({key:String(n)},e))}},47758:function(e,n,a){a.d(n,{Z:function(){return l}});var r=a(67294),t=a(86010),i=a(39960),o=a(44996),s="card_3DNo";var l=function(e){var n,a=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:r.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=r.createElement(r.Fragment,null,e.img&&r.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),r.createElement("div",{className:"Card-container"},(e.icon||u)&&r.createElement("div",{className:"Card-icon-row"},e.icon&&r.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&r.createElement("img",{src:(0,o.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&r.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&r.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,a){return r.createElement("img",{src:(0,o.Z)(n),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&c,r.createElement("div",{className:"Card-content"},e.children))),m=(0,t.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return a?r.createElement("docs-card",{class:m},r.createElement("div",{className:(0,t.Z)(s,"docs-card")},d)):l?r.createElement("docs-card",{class:m},r.createElement("a",{className:(0,t.Z)(s,"docs-card"),href:e.href,target:"_blank"},d)):r.createElement("docs-card",{class:m},r.createElement(i.default,{to:e.href,className:(0,t.Z)(s,"docs-card")},d))}},88694:function(e,n,a){a.d(n,{Z:function(){return u}});var r=a(87462),t=a(63366),i=a(86010),o=a(67294),s="docsButton_2gXP",l="docsButtonRound_2y-L",c=["href","round"];function u(e){var n,a=e.href,u=e.round,d=void 0!==u&&u,m=(0,t.Z)(e,c);return m.className=(0,i.Z)(((n={})[m.className]=Boolean(m.className),n[s]=!0,n["docs-button"]=!0,n[l]=d,n["docs-button--round"]=d,n)),a?o.createElement("a",(0,r.Z)({href:a,className:"docsButton"},m),m.children):o.createElement("button",(0,r.Z)({className:"docsButton"},m),m.children)}},70113:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return m},contentTitle:function(){return v},metadata:function(){return p},toc:function(){return f},default:function(){return b}});var r=a(87462),t=a(63366),i=(a(67294),a(3905)),o=a(47758),s=a(88694),l=a(26396),c=a(58215),u=a(19055),d=["components"],m={sidebar_label:"Firebase Vision"},v="Firebase Vision",p={unversionedId:"native/firebase-vision",id:"version-v5/native/firebase-vision",isDocsHomePage:!1,title:"Firebase Vision",description:"Cordova plugin for Firebase MLKit Vision",source:"@site/versioned_docs/version-v5/native/firebase-vision.md",sourceDirName:"native",slug:"/native/firebase-vision",permalink:"/developer/docs/v5/native/firebase-vision",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/firebase-vision/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Firebase Vision"},sidebar:"version-v5/native",previous:{title:"Firebase Messaging",permalink:"/developer/docs/v5/native/firebase-messaging"},next:{title:"Firebase X",permalink:"/developer/docs/v5/native/firebase-x"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function b(e){var n=e.components,a=(0,t.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"firebase-vision"},"Firebase Vision"),(0,i.kt)("p",null,"Cordova plugin for Firebase MLKit Vision"),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/alon22/cordova-plugin-firebase-mlvision",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/alon22/cordova-plugin-firebase-mlvision")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-firebase-mlvision ","\n","$ npm install @awesome-cordova-plugins/firebase-vision ","\n","$ ionic cap sync")),(0,i.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-firebase-mlvision ","\n","$ npm install @awesome-cordova-plugins/firebase-vision ","\n")),(0,i.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"iOS")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { FirebaseVision } from '@awesome-cordova-plugins/firebase-vision/ngx';\n\n\nconstructor(private firebaseVision: FirebaseVision) { }\n\n...\n\n\nthis.firebaseVision.onDeviceTextRecognizer(FILE_URI)\n  .then((res: string) => console.log(res))\n  .catch((error: string) => console.error(error));\n\nthis.firebaseVision.barcodeDetector(FILE_URI)\n  .then((res: Barcode[]) => console.log(res))\n  .catch((error: string) => console.error(error));\n\nthis.firebaseVision.imageLabeler(FILE_URI)\n  .then((res: ImageLabel[]) => console.log(res))\n  .catch((error: string) => console.error(error));\n\n")))}b.isMDXComponent=!0}}]);