"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[81228],{58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:i},a)}},26396:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(87462),i=t(67294),r=t(72389),o=t(79443);var l=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(89521),c=t(86010),u="tabItem_1uMI";function d(e){var a,t,n,r=e.lazy,o=e.block,d=e.defaultValue,m=e.values,v=e.groupId,p=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),g=(0,s.lx)(h,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(a=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(n=f[0])?void 0:n.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),N=b.tabGroupChoices,T=b.setTabGroupChoices,E=(0,i.useState)(k),C=E[0],y=E[1],I=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var w=N[v];null!=w&&w!==C&&h.some((function(e){return e.value===w}))&&y(w)}var x=function(e){var a=e.currentTarget,t=I.indexOf(a),n=h[t].value;n!==C&&(Z(a),y(n),null!=v&&T(v,n))},_=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;t=I[n]||I[0];break;case"ArrowLeft":var i=I.indexOf(e.currentTarget)-1;t=I[i]||I[I.length-1]}null==(a=t)||a.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},p)},h.map((function(e){var a=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":C===a}),key:a,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:x,onClick:x},null!=t?t:a)}))),r?(0,i.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==C})}))))}function m(e){var a=(0,r.Z)();return i.createElement(d,(0,n.Z)({key:String(a)},e))}},47758:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(67294),i=t(86010),r=t(39960),o=t(44996),l="card_3DNo";var s=function(e){var a,t=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,o.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||u)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,o.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&n.createElement("img",{src:(0,o.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(a,t){return n.createElement("img",{src:(0,o.Z)(a),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&c,n.createElement("div",{className:"Card-content"},e.children))),m=(0,i.Z)(((a={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,a));return t?n.createElement("docs-card",{class:m},n.createElement("div",{className:(0,i.Z)(l,"docs-card")},d)):s?n.createElement("docs-card",{class:m},n.createElement("a",{className:(0,i.Z)(l,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:m},n.createElement(r.default,{to:e.href,className:(0,i.Z)(l,"docs-card")},d))}},88694:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(87462),i=t(63366),r=t(86010),o=t(67294),l="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var a,t=e.href,u=e.round,d=void 0!==u&&u,m=(0,i.Z)(e,c);return m.className=(0,r.Z)(((a={})[m.className]=Boolean(m.className),a[l]=!0,a["docs-button"]=!0,a[s]=d,a["docs-button--round"]=d,a)),t?o.createElement("a",(0,n.Z)({href:t,className:"docsButton"},m),m.children):o.createElement("button",(0,n.Z)({className:"docsButton"},m),m.children)}},5407:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return v},metadata:function(){return p},toc:function(){return f},default:function(){return g}});var n=t(87462),i=t(63366),r=(t(67294),t(3905)),o=t(47758),l=t(88694),s=t(26396),c=t(58215),u=t(19055),d=["components"],m={sidebar_label:"TealiumAdIdentifier"},v="TealiumAdIdentifier",p={unversionedId:"native/tealium-adidentifier",id:"version-v5/native/tealium-adidentifier",isDocsHomePage:!1,title:"TealiumAdIdentifier",description:"This module depends on the Tealium Cordova Plugin. Without it, this module will not do anything.",source:"@site/versioned_docs/version-v5/native/tealium-adidentifier.md",sourceDirName:"native",slug:"/native/tealium-adidentifier",permalink:"/developer/docs/v5/native/tealium-adidentifier",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/tealium-adidentifier/index.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"TealiumAdIdentifier"},sidebar:"version-v5/native",previous:{title:"Taptic Engine",permalink:"/developer/docs/v5/native/taptic-engine"},next:{title:"TealiumInstallReferrer",permalink:"/developer/docs/v5/native/tealium-installreferrer"}},f=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],h={toc:f};function g(e){var a=e.components,t=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tealiumadidentifier"},"TealiumAdIdentifier"),(0,r.kt)("p",null,"This module depends on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tealium/cordova-plugin"},"Tealium Cordova Plugin"),". Without it, this module will not do anything.\nMakes the IDFA and Google Ad Identifier available in the Tealium data layer."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/Tealium/cordova-plugin",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," ","https://github.com/Tealium/cordova-plugin")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(o.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(s.Z,{groupId:"runtime",defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install tealium-cordova-adidentifier ","\n","$ npm install @awesome-cordova-plugins/tealium-adidentifier ","\n","$ ionic cap sync")),(0,r.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add tealium-cordova-adidentifier ","\n","$ npm install @awesome-cordova-plugins/tealium-adidentifier ","\n")),(0,r.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"iOS")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/developer/docs/v5/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import { TealiumAdIdentifier } from \'@awesome-cordova-plugins/tealium-adidentifier/ngx\';\n\n\nconstructor(private adIdentifier: TealiumAdIdentifier) { }\n\n...\n\n\nthis.adIdentifier.setPersistent("main");\nthis.adIdentifier.setVolatile("main");\n\n')))}g.isMDXComponent=!0}}]);