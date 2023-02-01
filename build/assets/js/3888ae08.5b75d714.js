"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[27461],{58215:function(e,t,o){var a=o(67294);t.Z=function(e){var t=e.children,o=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:o,className:r},t)}},26396:function(e,t,o){o.d(t,{Z:function(){return m}});var a=o(87462),r=o(67294),n=o(72389),l=o(79443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=o(89521),c=o(86010),u="tabItem_1uMI";function d(e){var t,o,a,n=e.lazy,l=e.block,d=e.defaultValue,m=e.values,p=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(o=v.find((function(e){return e.props.default})))?void 0:o.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),k=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,r.useState)(g),C=w[0],E=w[1],I=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var T=k[p];null!=T&&T!==C&&f.some((function(e){return e.value===T}))&&E(T)}var x=function(e){var t=e.currentTarget,o=I.indexOf(t),a=f[o].value;a!==C&&(Z(t),E(a),null!=p&&N(p,a))},P=function(e){var t,o=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;o=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;o=I[r]||I[I.length-1]}null==(t=o)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},h)},f.map((function(e){var t=e.value,o=e.label;return r.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":C===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:x,onClick:x},null!=o?o:t)}))),n?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,n.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},47758:function(e,t,o){o.d(t,{Z:function(){return s}});var a=o(67294),r=o(86010),n=o(39960),l=o(44996),i="card_3DNo";var s=function(e){var t,o=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),c="undefined"===e.header?null:a.createElement("header",{className:"Card-header"},e.header),u=e.hoverIcon||e.icon,d=a.createElement(a.Fragment,null,e.img&&a.createElement("img",{src:(0,l.Z)(e.img),className:"Card-image"}),a.createElement("div",{className:"Card-container"},(e.icon||u)&&a.createElement("div",{className:"Card-icon-row"},e.icon&&a.createElement("img",{src:(0,l.Z)(e.icon),className:"Card-icon Card-icon-default"}),u&&a.createElement("img",{src:(0,l.Z)(u),className:"Card-icon Card-icon-hover"})),e.ionicon&&a.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&a.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(t,o){return a.createElement("img",{src:(0,l.Z)(t),className:"Card-icon "+(o===e.activeIndex?"Card-icon-active":""),"data-index":o,key:o})}))),e.header&&c,a.createElement("div",{className:"Card-content"},e.children))),m=(0,r.Z)(((t={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,t));return o?a.createElement("docs-card",{class:m},a.createElement("div",{className:(0,r.Z)(i,"docs-card")},d)):s?a.createElement("docs-card",{class:m},a.createElement("a",{className:(0,r.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):a.createElement("docs-card",{class:m},a.createElement(n.default,{to:e.href,className:(0,r.Z)(i,"docs-card")},d))}},88694:function(e,t,o){o.d(t,{Z:function(){return u}});var a=o(87462),r=o(63366),n=o(86010),l=o(67294),i="docsButton_2gXP",s="docsButtonRound_2y-L",c=["href","round"];function u(e){var t,o=e.href,u=e.round,d=void 0!==u&&u,m=(0,r.Z)(e,c);return m.className=(0,n.Z)(((t={})[m.className]=Boolean(m.className),t[i]=!0,t["docs-button"]=!0,t[s]=d,t["docs-button--round"]=d,t)),o?l.createElement("a",(0,a.Z)({href:o,className:"docsButton"},m),m.children):l.createElement("button",(0,a.Z)({className:"docsButton"},m),m.children)}},38599:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return v},default:function(){return b}});var a=o(87462),r=o(63366),n=(o(67294),o(3905)),l=o(47758),i=o(88694),s=o(26396),c=o(58215),u=o(19055),d=["components"],m={title:"Photo Library"},p=void 0,h={unversionedId:"native/photo-library",id:"native/photo-library",isDocsHomePage:!1,title:"Photo Library",description:"Photo Library API Plugin: Access Photos from Device by URLw",source:"@site/docs/native/photo-library.md",sourceDirName:"native",slug:"/native/photo-library",permalink:"/developer/docs/native/photo-library",editUrl:"https://github.com/ionic-team/ionic-native/edit/master/src/@awesome-cordova-plugins/plugins/photo-library/index.ts",tags:[],version:"current",frontMatter:{title:"Photo Library"},sidebar:"native",previous:{title:"PDFGenerator",permalink:"/developer/docs/native/pdf-generator"},next:{title:"Photo Viewer",permalink:"/developer/docs/native/photo-viewer"}},v=[{value:"Supported Platforms",id:"supported-platforms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[],level:3},{value:"Angular",id:"angular",children:[],level:3}],level:2}],f={toc:v};function b(e){var t=e.components,o=(0,r.Z)(e,d);return(0,n.kt)("wrapper",(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("title",null,"Photo Library API Plugin: Access Photos from Device by URLw"),(0,n.kt)("meta",{name:"description",content:"The Cordova Photo Library API plugin allows access to photos from a device by URL. Read to learn more about photo library plugin use with Ionic API."})),(0,n.kt)("p",null,"The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.\nSaving photos and videos to the library is also supported.\ncdvphotolibrary urls should be trusted by Angular. See plugin homepage to learn how."),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/terikon/cordova-plugin-photo-library",target:"_blank",rel:"noopener",className:"git-link"},(0,n.kt)("svg",{viewBox:"0 0 512 512"},(0,n.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/terikon/cordova-plugin-photo-library")),(0,n.kt)("h2",null,"Stuck on a Cordova issue?"),(0,n.kt)(l.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,n.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,n.kt)(i.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,n.kt)("h2",{id:"installation"},(0,n.kt)("a",{href:"#installation"},"Installation")),(0,n.kt)(s.Z,{defaultValue:"Capacitor",groupId:"runtime",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,n.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-photo-library ","\n","$ npm install @awesome-cordova-plugins/photo-library ","\n","$ ionic cap sync")),(0,n.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,n.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-photo-library ","\n","$ npm install @awesome-cordova-plugins/photo-library ","\n")),(0,n.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,n.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,n.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,n.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,n.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android"),(0,n.kt)("li",{parentName:"ul"},"Browser"),(0,n.kt)("li",{parentName:"ul"},"iOS")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/developer/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { PhotoLibrary } from '@awesome-cordova-plugins/photo-library/ngx';\n\nconstructor(private photoLibrary: PhotoLibrary) { }\n\nthis.photoLibrary.requestAuthorization().then(() => {\n  this.photoLibrary.getLibrary().subscribe({\n    next: library => {\n      library.forEach(function(libraryItem) {\n        console.log(libraryItem.id);          // ID of the photo\n        console.log(libraryItem.photoURL);    // Cross-platform access to photo\n        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail\n        console.log(libraryItem.fileName);\n        console.log(libraryItem.width);\n        console.log(libraryItem.height);\n        console.log(libraryItem.creationDate);\n        console.log(libraryItem.latitude);\n        console.log(libraryItem.longitude);\n        console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used\n      });\n    },\n    error: err => { console.log('could not get photos'); },\n    complete: () => { console.log('done getting photos'); }\n  });\n})\n.catch(err => console.log('permissions weren\\'t granted'));\n\n")))}b.isMDXComponent=!0}}]);