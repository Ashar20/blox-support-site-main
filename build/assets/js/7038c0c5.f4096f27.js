"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[93572],{58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:o},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return p}});var t=a(87462),o=a(67294),i=a(72389),r=a(79443);var s=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(89521),c=a(86010),d="tabItem_1uMI";function u(e){var n,a,t,i=e.lazy,r=e.block,u=e.defaultValue,p=e.values,m=e.groupId,v=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,l.lx)(f,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(n=null!=u?u:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=g[0])?void 0:t.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),N=k.tabGroupChoices,y=k.setTabGroupChoices,_=(0,o.useState)(b),C=_[0],E=_[1],w=[],Z=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=N[m];null!=T&&T!==C&&f.some((function(e){return e.value===T}))&&E(T)}var x=function(e){var n=e.currentTarget,a=w.indexOf(n),t=f[a].value;t!==C&&(Z(n),E(t),null!=m&&y(m,t))},I=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=w.indexOf(e.currentTarget)+1;a=w[t]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.currentTarget)-1;a=w[o]||w[w.length-1]}null==(n=a)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},v)},f.map((function(e){var n=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":C===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:I,onFocus:x,onClick:x},null!=a?a:n)}))),i?(0,o.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function p(e){var n=(0,i.Z)();return o.createElement(u,(0,t.Z)({key:String(n)},e))}},47758:function(e,n,a){a.d(n,{Z:function(){return l}});var t=a(67294),o=a(86010),i=a(39960),r=a(44996),s="card_3DNo";var l=function(e){var n,a=void 0===e.href,l=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),d=e.hoverIcon||e.icon,u=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,r.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||d)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,r.Z)(e.icon),className:"Card-icon Card-icon-default"}),d&&t.createElement("img",{src:(0,r.Z)(d),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,a){return t.createElement("img",{src:(0,r.Z)(n),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})}))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),p=(0,o.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return a?t.createElement("docs-card",{class:p},t.createElement("div",{className:(0,o.Z)(s,"docs-card")},u)):l?t.createElement("docs-card",{class:p},t.createElement("a",{className:(0,o.Z)(s,"docs-card"),href:e.href,target:"_blank"},u)):t.createElement("docs-card",{class:p},t.createElement(i.default,{to:e.href,className:(0,o.Z)(s,"docs-card")},u))}},88694:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(87462),o=a(63366),i=a(86010),r=a(67294),s="docsButton_2gXP",l="docsButtonRound_2y-L",c=["href","round"];function d(e){var n,a=e.href,d=e.round,u=void 0!==d&&d,p=(0,o.Z)(e,c);return p.className=(0,i.Z)(((n={})[p.className]=Boolean(p.className),n[s]=!0,n["docs-button"]=!0,n[l]=u,n["docs-button--round"]=u,n)),a?r.createElement("a",(0,t.Z)({href:a,className:"docsButton"},p),p.children):r.createElement("button",(0,t.Z)({className:"docsButton"},p),p.children)}},82321:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return g},default:function(){return h}});var t=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(47758),s=a(88694),l=a(26396),c=a(58215),d=a(19055),u=["components"],p={sidebar_label:"Open Native Settings"},m="Open Native Settings",v={unversionedId:"native/open-native-settings",id:"version-v5/native/open-native-settings",isDocsHomePage:!1,title:"Open Native Settings",description:"Plugin to open native screens of iOS/android settings",source:"@site/versioned_docs/version-v5/native/open-native-settings.md",sourceDirName:"native",slug:"/native/open-native-settings",permalink:"/developer/docs/v5/native/open-native-settings",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/open-native-settings/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Open Native Settings"},sidebar:"version-v5/native",previous:{title:"OneSignal",permalink:"/developer/docs/v5/native/onesignal"},next:{title:"OpenALPR",permalink:"/developer/docs/v5/native/openalpr"}},g=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:g};function h(e){var n=e.components,a=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"open-native-settings"},"Open Native Settings"),(0,i.kt)("p",null,"Plugin to open native screens of iOS/android settings"),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/guyromb/Cordova-open-native-settings",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/guyromb/Cordova-open-native-settings")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(l.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-open-native-settings ","\n","$ npm install @awesome-cordova-plugins/open-native-settings ","\n","$ ionic cap sync")),(0,i.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-open-native-settings ","\n","$ npm install @awesome-cordova-plugins/open-native-settings ","\n")),(0,i.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"iOS")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("p",null,"You can open any of these settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' "about", // ios\n "accessibility", // ios, android\n "account", // ios, android\n "airplane_mode", // ios, android\n "apn", // android\n "application_details", // ios, android\n "application_development", // android\n "application", // android\n "autolock", // ios\n "battery_optimization", // android\n "bluetooth", // ios, android\n "castle", // ios\n "captioning", // android\n "cast", // android\n "cellular_usage", // ios\n "configuration_list", // ios\n "data_roaming", // android\n "date", // ios, android\n "display", // ios, android\n "dream", // android\n "facetime", // ios\n "home", // android\n "keyboard", // ios, android\n "keyboard_subtype", // android\n "locale", // ios, android\n"location", // ios, android\n"locations", // ios\n"manage_all_applications", // android\n"manage_applications", // android\n"memory_card", // android\n"music", // ios\n"music_equalizer", // ios\n"music_volume", // ios\n"network", // ios, android\n"nike_ipod", // ios\n"nfcsharing", // android\n"nfc_payment", // android\n"nfc_settings", // android\n"notes", // ios\n"notification_id", // ios\n"passbook", // ios\n"phone", // ios\n"photos", // ios\n"print", // android\n"privacy", // android\n"quick_launch", // android\n"reset", // ios\n"ringtone", // ios\n"browser", // ios\n"search", // ios, android\n"security", // android\n"settings", // ios, android\n"show_regulatory_info",\n"sound", // ios, android\n"software_update", // ios\n"storage", // ios, android\n"store", // ios, android\n"sync", // android\n"tethering", // ios\n"twitter", // ios\n"touch", // ios\n"usage", // ios, android\n"user_dictionary", // android\n"video", // ios\n"voice_input", // android\n"vpn", // ios\n"wallpaper", // ios\n"wifi_ip", // android\n"wifi", // ios, android\n"wireless" // android\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';\n\n\nconstructor(private openNativeSettings: OpenNativeSettings) { }\n\n...\n\n\n")))}h.isMDXComponent=!0}}]);