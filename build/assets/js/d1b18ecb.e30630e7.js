"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[54767],{58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),o=a(72389),s=a(79443);var i=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(89521),c=a(86010),u="tabItem_1uMI";function d(e){var t,a,n,o=e.lazy,s=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),y=k.tabGroupChoices,N=k.setTabGroupChoices,C=(0,r.useState)(b),E=C[0],w=C[1],Z=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=y[p];null!=x&&x!==E&&h.some((function(e){return e.value===x}))&&w(x)}var B=function(e){var t=e.currentTarget,a=Z.indexOf(t),n=h[a].value;n!==E&&(T(t),w(n),null!=p&&N(p,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=Z.indexOf(e.currentTarget)+1;a=Z[n]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;a=Z[r]||Z[Z.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},v)},h.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===t}),key:t,ref:function(e){return Z.push(e)},onKeyDown:I,onFocus:B,onClick:B},null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},47758:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(86010),o=a(39960),s=a(44996),i="card_3DNo";var l=function(e){var t,a=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,s.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||u)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,s.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&n.createElement("img",{src:(0,s.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,a){return n.createElement("img",{src:(0,s.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&c,n.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return a?n.createElement("docs-card",{class:m},n.createElement("div",{className:(0,r.Z)(i,"docs-card")},d)):l?n.createElement("docs-card",{class:m},n.createElement("a",{className:(0,r.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:m},n.createElement(o.default,{to:e.href,className:(0,r.Z)(i,"docs-card")},d))}},88694:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(87462),r=a(63366),o=a(86010),s=a(67294),i="docsButton_2gXP",l="docsButtonRound_2y-L",c=["href","round"];function u(e){var t,a=e.href,u=e.round,d=void 0!==u&&u,m=(0,r.Z)(e,c);return m.className=(0,o.Z)(((t={})[m.className]=Boolean(m.className),t[i]=!0,t["docs-button"]=!0,t[l]=d,t["docs-button--round"]=d,t)),a?s.createElement("a",(0,n.Z)({href:a,className:"docsButton"},m),m.children):s.createElement("button",(0,n.Z)({className:"docsButton"},m),m.children)}},20343:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=a(47758),i=a(88694),l=a(26396),c=a(58215),u=a(19055),d=["components"],m={title:"Battery Status"},p=void 0,v={unversionedId:"native/battery-status",id:"native/battery-status",isDocsHomePage:!1,title:"Battery Status",description:"Battery Status Plugin for Android, iOS, Windows, and Browser",source:"@site/docs/native/battery-status.md",sourceDirName:"native",slug:"/native/battery-status",permalink:"/developer/docs/native/battery-status",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/battery-status/index.ts",tags:[],version:"current",frontMatter:{title:"Battery Status"},sidebar:"native",previous:{title:"Barcode Scanner",permalink:"/developer/docs/native/barcode-scanner"},next:{title:"BioCatch",permalink:"/developer/docs/native/biocatch"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var t=e.components,a=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Battery Status Plugin for Android, iOS, Windows, and Browser"),(0,o.kt)("meta",{name:"description",content:"The Cordova battery status plugin is available for installation on Android, iOS, Windows, and Browser Ionic applications. Read for more information on usage."})),(0,o.kt)("p",null,"Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-battery-status"},"BatteryStatus plugin docs"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/apache/cordova-plugin-battery-status",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/apache/cordova-plugin-battery-status")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(l.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-battery-status ","\n","$ npm install @awesome-cordova-plugins/battery-status ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-battery-status ","\n","$ npm install @awesome-cordova-plugins/battery-status ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"Windows"),(0,o.kt)("li",{parentName:"ul"},"Browser")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/developer/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';\n\nconstructor(private batteryStatus: BatteryStatus) { }\n\n...\n\n\n// watch change in battery status\nconst subscription = this.batteryStatus.onChange().subscribe(status => {\n   console.log(status.level, status.isPlugged);\n});\n\n// stop watch\nsubscription.unsubscribe();\n\n")))}g.isMDXComponent=!0}}]);