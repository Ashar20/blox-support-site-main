"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[30786],{58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),o=a(67294),r=a(72389),l=a(79443);var i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(89521),c=a(86010),u="tabItem_1uMI";function d(e){var t,a,n,r=e.lazy,l=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),N=b.tabGroupChoices,C=b.setTabGroupChoices,E=(0,o.useState)(g),y=E[0],Z=E[1],w=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=N[p];null!=x&&x!==y&&h.some((function(e){return e.value===x}))&&Z(x)}var I=function(e){var t=e.currentTarget,a=w.indexOf(t),n=h[a].value;n!==y&&(T(t),Z(n),null!=p&&C(p,n))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;a=w[n]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.currentTarget)-1;a=w[o]||w[w.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},v)},h.map((function(e){var t=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:I,onClick:I},null!=a?a:t)}))),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function m(e){var t=(0,r.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},47758:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),o=a(86010),r=a(39960),l=a(44996),i="card_3DNo";var s=function(e){var t,a=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||u)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&n.createElement("img",{src:(0,l.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,a){return n.createElement("img",{src:(0,l.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&c,n.createElement("div",{className:"Card-content"},e.children))),m=(0,o.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return a?n.createElement("docs-card",{class:m},n.createElement("div",{className:(0,o.Z)(i,"docs-card")},d)):s?n.createElement("docs-card",{class:m},n.createElement("a",{className:(0,o.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:m},n.createElement(r.default,{to:e.href,className:(0,o.Z)(i,"docs-card")},d))}},88694:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(87462),o=a(63366),r=a(86010),l=a(67294),i="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var t,a=e.href,u=e.round,d=void 0!==u&&u,m=(0,o.Z)(e,c);return m.className=(0,r.Z)(((t={})[m.className]=Boolean(m.className),t[i]=!0,t["docs-button"]=!0,t[s]=d,t["docs-button--round"]=d,t)),a?l.createElement("a",(0,n.Z)({href:a,className:"docsButton"},m),m.children):l.createElement("button",(0,n.Z)({className:"docsButton"},m),m.children)}},90316:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return f},default:function(){return k}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=a(47758),i=a(88694),s=a(26396),c=a(58215),u=a(19055),d=["components"],m={title:"Smartlook"},p=void 0,v={unversionedId:"native/smartlook",id:"native/smartlook",isDocsHomePage:!1,title:"Smartlook",description:"Official Smartlook SDK plugin.",source:"@site/docs/native/smartlook.md",sourceDirName:"native",slug:"/native/smartlook",permalink:"/developer/docs/native/smartlook",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/smartlook/index.ts",tags:[],version:"current",frontMatter:{title:"Smartlook"},sidebar:"native",previous:{title:"Sign In With Apple",permalink:"/developer/docs/native/sign-in-with-apple"},next:{title:"Sms Retriever",permalink:"/developer/docs/native/sms-retriever"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function k(e){var t=e.components,a=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Official Smartlook SDK plugin.\nFull documentation can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://smartlook.github.io/docs/sdk/ionic/"},"https://smartlook.github.io/docs/sdk/ionic/")),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/smartlook/cordova-smartlook.git",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/smartlook/cordova-smartlook.git")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(l.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install https://github.com/smartlook/cordova-smartlook.git ","\n","$ npm install @awesome-cordova-plugins/smartlook ","\n","$ ionic cap sync")),(0,r.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add https://github.com/smartlook/cordova-smartlook.git ","\n","$ npm install @awesome-cordova-plugins/smartlook ","\n")),(0,r.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/developer/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Smartlook, SmartlookSetupConfig } from '@awesome-cordova-plugins/smartlook/ngx';\n\n...\n\n@Component( ... )\nexport class AppComponent {\n    constructor(private smartlook: Smartlook) {\n       this.platform.ready().then(() => {\n           this.smartlook.setupAndStartRecording(new SmartlookSetupConfig(\"YOUR API KEY\"));\n       }\n    }\n}\n")))}k.isMDXComponent=!0}}]);