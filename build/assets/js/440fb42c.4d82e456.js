"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[77046],{58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},26396:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(87462),r=t(67294),o=t(72389),i=t(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(89521),c=t(86010),u="tabItem_1uMI";function p(e){var a,t,n,o=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),g=(0,s.lx)(h,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(a=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(n=f[0])?void 0:n.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(k),E=w[0],C=w[1],Z=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var _=N[m];null!=_&&_!==E&&h.some((function(e){return e.value===_}))&&C(_)}var R=function(e){var a=e.currentTarget,t=Z.indexOf(a),n=h[t].value;n!==E&&(T(a),C(n),null!=m&&y(m,n))},x=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=Z.indexOf(e.currentTarget)+1;t=Z[n]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;t=Z[r]||Z[Z.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},v)},h.map((function(e){var a=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":E===a}),key:a,ref:function(e){return Z.push(e)},onKeyDown:x,onFocus:R,onClick:R},null!=t?t:a)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==E})}))))}function d(e){var a=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(a)},e))}},47758:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(67294),r=t(86010),o=t(39960),i=t(44996),l="card_3DNo";var s=function(e){var a,t=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,p=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||u)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&n.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,t){return n.createElement("img",{src:(0,i.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&c,n.createElement("div",{className:"Card-content"},e.children))),d=(0,r.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return t?n.createElement("docs-card",{class:d},n.createElement("div",{className:(0,r.Z)(l,"docs-card")},p)):s?n.createElement("docs-card",{class:d},n.createElement("a",{className:(0,r.Z)(l,"docs-card"),href:e.href,target:"_blank"},p)):n.createElement("docs-card",{class:d},n.createElement(o.default,{to:e.href,className:(0,r.Z)(l,"docs-card")},p))}},88694:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(87462),r=t(63366),o=t(86010),i=t(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var a,t=e.href,u=e.round,p=void 0!==u&&u,d=(0,r.Z)(e,c);return d.className=(0,o.Z)(((a={})[d.className]=Boolean(d.className),a[l]=!0,a["docs-button"]=!0,a[s]=p,a["docs-button--round"]=p,a)),t?i.createElement("a",(0,n.Z)({href:t,className:"docsButton"},d),d.children):i.createElement("button",(0,n.Z)({className:"docsButton"},d),d.children)}},42638:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),i=t(47758),l=t(88694),s=t(26396),c=t(58215),u=t(19055),p=["components"],d={sidebar_label:"App Rate"},m="App Rate",v={unversionedId:"native/app-rate",id:"version-v5/native/app-rate",isDocsHomePage:!1,title:"App Rate",description:"The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.",source:"@site/versioned_docs/version-v5/native/app-rate.md",sourceDirName:"native",slug:"/native/app-rate",permalink:"/developer/docs/v5/native/app-rate",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/app-rate/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"App Rate"},sidebar:"version-v5/native",previous:{title:"App Preferences",permalink:"/developer/docs/v5/native/app-preferences"},next:{title:"App Version",permalink:"/developer/docs/v5/native/app-version"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var a=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app-rate"},"App Rate"),(0,o.kt)("p",null,"The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never."),(0,o.kt)("p",null,"Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pushandplay/cordova-plugin-apprate"},"AppRate plugin docs"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/pushandplay/cordova-plugin-apprate",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/pushandplay/cordova-plugin-apprate")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-apprate ","\n","$ npm install @awesome-cordova-plugins/app-rate ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-apprate ","\n","$ npm install @awesome-cordova-plugins/app-rate ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"BlackBerry 10"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';\n\nconstructor(private appRate: AppRate) { }\n\n...\n// set certain preferences\nthis.appRate.preferences.storeAppURL = {\n  ios: '&lt;app_id>',\n  android: 'market://details?id=&lt;package_name>',\n  windows: 'ms-windows-store://review/?ProductId=&lt;store_id>'\n}\n\nthis.appRate.promptForRating(true);\n\n// or, override the whole preferences object\nthis.appRate.preferences = {\n  usesUntilPrompt: 3,\n  storeAppURL: {\n   ios: '&lt;app_id>',\n   android: 'market://details?id=&lt;package_name>',\n   windows: 'ms-windows-store://review/?ProductId=&lt;store_id>'\n  }\n}\n\nthis.appRate.promptForRating(false);\n")))}g.isMDXComponent=!0}}]);