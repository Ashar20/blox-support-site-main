"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[98516],{58215:function(e,a,n){var t=n(67294);a.Z=function(e){var a=e.children,n=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},26396:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(87462),r=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(89521),c=n(86010),u="tabItem_1uMI";function d(e){var a,n,t,o=e.lazy,i=e.block,d=e.defaultValue,m=e.values,v=e.groupId,p=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:g.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),h=(0,s.lx)(f,(function(e,a){return e.value===a.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(a=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(t=g[0])?void 0:t.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),w=k.tabGroupChoices,N=k.setTabGroupChoices,E=(0,r.useState)(b),C=E[0],y=E[1],Z=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=w[v];null!=x&&x!==C&&f.some((function(e){return e.value===x}))&&y(x)}var I=function(e){var a=e.currentTarget,n=Z.indexOf(a),t=f[n].value;t!==C&&(T(a),y(t),null!=v&&N(v,t))},_=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=Z.indexOf(e.currentTarget)+1;n=Z[t]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;n=Z[r]||Z[Z.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},p)},f.map((function(e){var a=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":C===a}),key:a,ref:function(e){return Z.push(e)},onKeyDown:_,onFocus:I,onClick:I},null!=n?n:a)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==C})}))))}function m(e){var a=(0,o.Z)();return r.createElement(d,(0,t.Z)({key:String(a)},e))}},47758:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(67294),r=n(86010),o=n(39960),i=n(44996),l="card_3DNo";var s=function(e){var a,n=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:t.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=t.createElement(t.Fragment,null,e.img&&t.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),t.createElement("div",{className:"Card-container"},(e.icon||u)&&t.createElement("div",{className:"Card-icon-row"},e.icon&&t.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&t.createElement("img",{src:(0,i.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&t.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&t.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,n){return t.createElement("img",{src:(0,i.Z)(a),className:"Card-icon "+(n===e.activeIndex?"Card-icon-active":""),"data-index":n,key:n})}))),e.header&&c,t.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return n?t.createElement("docs-card",{class:m},t.createElement("div",{className:(0,r.Z)(l,"docs-card")},d)):s?t.createElement("docs-card",{class:m},t.createElement("a",{className:(0,r.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):t.createElement("docs-card",{class:m},t.createElement(o.default,{to:e.href,className:(0,r.Z)(l,"docs-card")},d))}},88694:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(87462),r=n(63366),o=n(86010),i=n(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var a,n=e.href,u=e.round,d=void 0!==u&&u,m=(0,r.Z)(e,c);return m.className=(0,o.Z)(((a={})[m.className]=Boolean(m.className),a[l]=!0,a["docs-button"]=!0,a[s]=d,a["docs-button--round"]=d,a)),n?i.createElement("a",(0,t.Z)({href:n,className:"docsButton"},m),m.children):i.createElement("button",(0,t.Z)({className:"docsButton"},m),m.children)}},88191:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return m},contentTitle:function(){return v},metadata:function(){return p},toc:function(){return g},default:function(){return h}});var t=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(47758),l=n(88694),s=n(26396),c=n(58215),u=n(19055),d=["components"],m={sidebar_label:"Webengage"},v="Webengage",p={unversionedId:"native/webengage",id:"version-v5/native/webengage",isDocsHomePage:!1,title:"Webengage",description:"Ionic-Native wrapper that wraps Webengage Cordova plugin for Android and iOS",source:"@site/versioned_docs/version-v5/native/webengage.md",sourceDirName:"native",slug:"/native/webengage",permalink:"/developer/docs/v5/native/webengage",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/webengage/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"Webengage"},sidebar:"version-v5/native",previous:{title:"WebSocket Server",permalink:"/developer/docs/v5/native/web-socket-server"},next:{title:"Wechat",permalink:"/developer/docs/v5/native/wechat"}},g=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:g};function h(e){var a=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webengage"},"Webengage"),(0,o.kt)("p",null,"Ionic-Native wrapper that wraps Webengage Cordova plugin for Android and iOS"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/WebEngage/cordova-plugin",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/WebEngage/cordova-plugin")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(i.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-webengage ","\n","$ npm install @awesome-cordova-plugins/webengage ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-webengage ","\n","$ npm install @awesome-cordova-plugins/webengage ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"iOS")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Webengage, WebengageUser, WebengagePush, WebengageNotification } from '@awesome-cordova-plugins/webengage/ngx';\n\n\nconstructor(private webengage: Webengage, private webengageUser: WebengageUser, private webengagePush: WebengagePush, private webengageNotification: WebengageNotification ) { }\n\n...\n\nthis.webengage.engage();\n")))}h.isMDXComponent=!0}}]);