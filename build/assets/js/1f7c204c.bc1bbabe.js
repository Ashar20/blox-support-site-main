"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[57745],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return t?o.createElement(h,i(i({ref:n},l),{},{components:t})):o.createElement(h,i({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47758:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(67294),a=t(86010),r=t(39960),i=t(44996),c="card_3DNo";var s=function(e){var n,t=void 0===e.href,s=void 0!==e.href&&/^http/.test(e.href),p="undefined"===e.header?null:o.createElement("header",{className:"Card-header"},e.header),l=e.hoverIcon||e.icon,d=o.createElement(o.Fragment,null,e.img&&o.createElement("img",{src:(0,i.Z)(e.img),className:"Card-image"}),o.createElement("div",{className:"Card-container"},(e.icon||l)&&o.createElement("div",{className:"Card-icon-row"},e.icon&&o.createElement("img",{src:(0,i.Z)(e.icon),className:"Card-icon Card-icon-default"}),l&&o.createElement("img",{src:(0,i.Z)(l),className:"Card-icon Card-icon-hover"})),e.ionicon&&o.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&o.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map((function(n,t){return o.createElement("img",{src:(0,i.Z)(n),className:"Card-icon "+(t===e.activeIndex?"Card-icon-active":""),"data-index":t,key:t})}))),e.header&&p,o.createElement("div",{className:"Card-content"},e.children))),m=(0,a.Z)(((n={"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size})[e.className]=e.className,n));return t?o.createElement("docs-card",{class:m},o.createElement("div",{className:(0,a.Z)(c,"docs-card")},d)):s?o.createElement("docs-card",{class:m},o.createElement("a",{className:(0,a.Z)(c,"docs-card"),href:e.href,target:"_blank"},d)):o.createElement("docs-card",{class:m},o.createElement(r.default,{to:e.href,className:(0,a.Z)(c,"docs-card")},d))}},53445:function(e,n,t){var o=t(67294);n.Z=function(e){return o.createElement("docs-cards",{class:e.className},e.children)}},25475:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),i=t(47758),c=t(53445),s=["components"],p={title:"UI Components",hide_table_of_contents:!0},l=void 0,d={unversionedId:"components",id:"components",isDocsHomePage:!1,title:"UI Components",description:"UI Components | User Interface Application Building Components",source:"@site/docs/components.md",sourceDirName:".",slug:"/components",permalink:"/developer/docs/components",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/components.md",tags:[],version:"current",frontMatter:{title:"UI Components",hide_table_of_contents:!0},sidebar:"api",next:{title:"ion-action-sheet",permalink:"/developer/docs/api/action-sheet"}},m=[],u={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"UI Components | User Interface Application Building Components"),(0,r.kt)("meta",{name:"description",content:"Ionic Framework comes stock with a number of high-level UI components, including cards, lists, and tabs to quickly and easily build your app's user interface."}),(0,r.kt)("style",null,"\n    :root {\n      --doc-item-container-width: 60rem;\n    }\n  ")),(0,r.kt)("p",null,"Ionic apps are made of high-level building blocks called Components, which allow you to quickly construct the UI for your app. Ionic comes stock with a number of components, including cards, lists, and tabs. Once you\u2019re familiar with the basics, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/developer/docs/api"},"API Index")," for a complete list of each component and sub-component."),(0,r.kt)("intro-end",null),(0,r.kt)(c.Z,{mdxType:"DocsCards"},(0,r.kt)(i.Z,{header:"Action Sheet",href:"api/action-sheet",img:"/icons/feature-component-actionsheet-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Action Sheets display a set of options with the ability to confirm or cancel an action.")),(0,r.kt)(i.Z,{header:"Action Sheet",href:"api/action-sheet",img:"/icons/feature-component-actionsheet-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Action Sheets display a set of options with the ability to confirm or cancel an action.")),(0,r.kt)(i.Z,{header:"Alert",href:"api/alert",icon:"/icons/component-alert-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Alerts are a great way to offer the user the ability to choose a specific action or list of actions.")),(0,r.kt)(i.Z,{header:"Badge",href:"api/badge",icon:"/icons/component-badge-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Badges are a small component that typically communicate a numerical value to the user.")),(0,r.kt)(i.Z,{header:"Button",href:"api/button",icon:"/icons/component-button-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Buttons let your users take action. They're an essential way to interact with and navigate through an app.")),(0,r.kt)(i.Z,{header:"Card",href:"api/card",icon:"/icons/component-card-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Cards are a great way to display an important piece of content, and can contain images, buttons, text, and more.")),(0,r.kt)(i.Z,{header:"Checkbox",href:"api/checkbox",icon:"/icons/component-checkbox-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Checkboxes can be used to let the user know they need to make a binary decision.")),(0,r.kt)(i.Z,{header:"Chip",href:"api/chip",icon:"/icons/component-chip-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Chips are a compact way to display data or actions.")),(0,r.kt)(i.Z,{header:"Content",href:"api/content",icon:"/icons/component-content-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Content is the quintessential way to interact with and navigate through an app.")),(0,r.kt)(i.Z,{header:"Date & Time Pickers",href:"api/datetime",icon:"/icons/component-datetimepicker-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Date & time pickers are used to present an interface that makes it easy for users to select dates and times.")),(0,r.kt)(i.Z,{header:"Floating Action Button",href:"api/fab",icon:"/icons/component-fab-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Floating action buttons are circular buttons that perform a primary action on a screen.")),(0,r.kt)(i.Z,{header:"Icons",href:"https://ionic.io/ionicons",img:"/icons/feature-component-icons-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Beautifully designed icons for use in web, iOS, Android, and desktop apps.")),(0,r.kt)(i.Z,{header:"Grid",href:"api/grid",icon:"/icons/component-grid-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"The grid is a powerful mobile-first system for building custom layouts.")),(0,r.kt)(i.Z,{header:"Infinite Scroll",href:"api/infinite-scroll",icon:"/icons/component-infinitescroll-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Infinite scroll allows you to load new data as the user scrolls through your app.")),(0,r.kt)(i.Z,{header:"Input",href:"api/input",icon:"/icons/component-input-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Inputs provides a way for users to enter data in your app.")),(0,r.kt)(i.Z,{header:"Item",href:"api/item",icon:"/icons/component-item-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Items are an all-purpose UI container that can be used as part of a list.")),(0,r.kt)(i.Z,{header:"List",href:"api/list",icon:"/icons/component-lists-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Lists can display rows of information, such as a contact list, playlist, or menu.")),(0,r.kt)(i.Z,{header:"Navigation",href:"api/nav",img:"/icons/feature-component-navigation-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Navigation is how users move between different pages in your app.")),(0,r.kt)(i.Z,{header:"Menu",href:"api/menu",icon:"/icons/component-menu-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Menus are a common navigation pattern. They can be permanently on-screen, or revealed when needed.")),(0,r.kt)(i.Z,{header:"Modal",href:"api/modal",icon:"/icons/component-modal-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Modals slide in and off screen to display a temporary UI and are often used for login or sign-up pages.")),(0,r.kt)(i.Z,{header:"Popover",href:"api/popover",icon:"/icons/component-popover-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Popover provides an easy way to present information or options without changing contexts.")),(0,r.kt)(i.Z,{header:"Progress Indicators",href:"api/progress-bar",icon:"/icons/component-progress-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Progress indicators visualize the progression of an operation or activity.")),(0,r.kt)(i.Z,{header:"Radio",href:"api/radio",icon:"/icons/component-radio-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Radio inputs allow you to present a set of exclusive options.")),(0,r.kt)(i.Z,{header:"Refresher",href:"api/refresher",icon:"/icons/component-refresher-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Refresher provides pull-to-refresh functionality on a content component.")),(0,r.kt)(i.Z,{header:"Searchbar",href:"api/searchbar",img:"/icons/feature-component-search-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Searchbar is used to search or filter items, usually from a toolbar.")),(0,r.kt)(i.Z,{header:"Reorder",href:"api/reorder",icon:"/icons/component-reorder-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Reorder lets users drag and drop to reorder a list of items.")),(0,r.kt)(i.Z,{header:"Routing",href:"api/router",icon:"/icons/component-routing-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Routing allows navigation based on the current path.")),(0,r.kt)(i.Z,{header:"Segment",href:"api/segment",icon:"/icons/component-segment-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Segments provide a set of exclusive buttons that can be used as a filter or view switcher.")),(0,r.kt)(i.Z,{header:"Select",href:"api/select",icon:"/icons/component-select-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Select is similar to the native HTML select, with a few improvements to sorting and selecting.")),(0,r.kt)(i.Z,{header:"Slides",href:"api/slides",icon:"/icons/component-slides-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Slides make it easy to create complex UI such as galleries, tutorials, and page-based layouts.")),(0,r.kt)(i.Z,{header:"Tabs",href:"api/tabs",img:"/icons/feature-component-tabs-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Tabs enable tabbed navigation, a standard navigation pattern in modern apps.")),(0,r.kt)(i.Z,{header:"Toast",href:"api/toast",icon:"/icons/component-toast-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Toast is used to show a notification over the top of an app's content. It can be temporary or dismissable.")),(0,r.kt)(i.Z,{header:"Toggle",href:"api/toggle",icon:"/icons/component-toggle-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Toggles are an input for binary options, often used for options and switches.")),(0,r.kt)(i.Z,{header:"Toolbar",href:"api/toolbar",icon:"/icons/component-toolbar-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Toolbars are used to house information and actions relating to your app."))))}h.isMDXComponent=!0}}]);