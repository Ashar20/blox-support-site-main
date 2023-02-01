"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[90476],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),u=r,v=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(v,i(i({ref:e},c),{},{components:n})):a.createElement(v,i({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37783:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(67294),r="tableOfContentsInline_3fWc",o=n(25002);var i=function(t){var e=t.toc,n=t.minHeadingLevel,i=t.maxHeadingLevel;return a.createElement("div",{className:r},a.createElement(o.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},25002:function(t,e,n){n.d(e,{Z:function(){return s}});var a=n(87462),r=n(63366),o=n(67294),i=n(89521),l=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(t){var e=t.toc,n=t.className,a=t.linkClassName,r=t.isChild;return e.length?o.createElement("ul",{className:r?void 0:n},e.map((function(t){return o.createElement("li",{key:t.id},o.createElement("a",{href:"#"+t.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:t.value}}),o.createElement(p,{isChild:!0,toc:t.children,className:n,linkClassName:a}))}))):null}function s(t){var e=t.toc,n=t.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,c=t.linkClassName,m=void 0===c?"table-of-contents__link":c,d=t.linkActiveClassName,u=void 0===d?void 0:d,v=t.minHeadingLevel,k=t.maxHeadingLevel,b=(0,r.Z)(t,l),f=(0,i.LU)(),N=null!=v?v:f.tableOfContents.minHeadingLevel,h=null!=k?k:f.tableOfContents.maxHeadingLevel,g=(0,i.DA)({toc:e,minHeadingLevel:N,maxHeadingLevel:h}),y=(0,o.useMemo)((function(){if(m&&u)return{linkClassName:m,linkActiveClassName:u,minHeadingLevel:N,maxHeadingLevel:h}}),[m,u,N,h]);return(0,i.Si)(y),o.createElement(p,(0,a.Z)({toc:g,className:s,linkClassName:m},b))}},49679:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(87462),r=n(63366),o=n(67294),i=n(86010),l=n(44996),p=n(39960),s="encapsulationPill_1PgI",c=["type"];function m(t){var e=t.type,n=(0,r.Z)(t,c),m=(0,l.Z)("reference/glossary#"+e);return o.createElement(p.default,(0,a.Z)({to:m},n,{className:(0,i.Z)(n.className,"encapsulation-pill",s)}),e)}},71706:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return D},default:function(){return E},frontMatter:function(){return S},metadata:function(){return M},toc:function(){return P}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(37783),l=["components"],p={toc:[{value:"component",id:"component",children:[],level:3},{value:"tab",id:"tab",children:[],level:3}]};function s(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"component"},"component"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"The component to display inside of the tab.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"component"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Function \uff5c HTMLElement \uff5c null \uff5c string \uff5c undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,o.kt)("h3",{id:"tab"},"tab"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"A tab id must be provided for each ",(0,o.kt)("inlineCode",{parentName:"td"},"ion-tab"),". It's used internally to reference the selected tab or by the router to switch between them.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Attribute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tab"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Default")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))))}s.isMDXComponent=!0;var c=["components"],m={toc:[]};function d(t){var e=t.components,n=(0,r.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No events available for this component."))}d.isMDXComponent=!0;var u=["components"],v={toc:[{value:"setActive",id:"setactive",children:[],level:3}]};function k(t){var e=t.components,n=(0,r.Z)(t,u);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"setactive"},"setActive"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Description")),(0,o.kt)("td",{parentName:"tr",align:null},"Set the active component for the tab")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Signature")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"setActive() => Promise<void>"))))))}k.isMDXComponent=!0;var b=["components"],f={toc:[]};function N(t){var e=t.components,n=(0,r.Z)(t,b);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No CSS shadow parts available for this component."))}N.isMDXComponent=!0;var h=["components"],g={toc:[]};function y(t){var e=t.components,n=(0,r.Z)(t,h);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No CSS custom properties available for this component."))}y.isMDXComponent=!0;var C=["components"],w={toc:[]};function x(t){var e=t.components,n=(0,r.Z)(t,C);return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No slots available for this component."))}x.isMDXComponent=!0;var O=n(49679),T=["components"],S={title:"ion-tab",hide_table_of_contents:!0},D=void 0,M={unversionedId:"api/tab",id:"api/tab",isDocsHomePage:!1,title:"ion-tab",description:"ion-tab - Ionic Framework Application Component",source:"@site/docs/api/tab.md",sourceDirName:"api",slug:"/api/tab",permalink:"/developer/docs/api/tab",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/tab.md",tags:[],version:"current",frontMatter:{title:"ion-tab",hide_table_of_contents:!0},sidebar:"api",previous:{title:"ion-tabs",permalink:"/developer/docs/api/tabs"},next:{title:"ion-tab-bar",permalink:"/developer/docs/api/tab-bar"}},P=[{value:"Properties",id:"properties",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2},{value:"Slots",id:"slots",children:[],level:2}],Z={toc:P};function E(t){var e=t.components,n=(0,r.Z)(t,T);return(0,o.kt)("wrapper",(0,a.Z)({},Z,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"ion-tab - Ionic Framework Application Component"),(0,o.kt)("meta",{name:"description",content:"ion-tab is a child component of\xa0tabs. Each ion-tab can contain a top level navigation stack for an application or a single view. Read to learn more."})),(0,o.kt)(O.Z,{type:"shadow",mdxType:"EncapsulationPill"}),(0,o.kt)("h2",{className:"table-of-contents__title"},"Contents"),(0,o.kt)(i.Z,{toc:P,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,o.kt)("p",null,"The tab component is a child component of ",(0,o.kt)("a",{parentName:"p",href:"/developer/docs/api/tabs"},"tabs"),". Each tab can contain a top level navigation stack for an app or a single view. An app can have many tabs, all with their own independent navigation."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," Note: This component should only be used with vanilla or Stencil JavaScript projects. For Angular, React, and Vue apps you do not need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-tab")," to declare your tab components."))),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/developer/docs/api/tabs"},"tabs documentation")," for more details on configuring tabs."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)(s,{mdxType:"Props"}),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)(d,{mdxType:"Events"}),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)(k,{mdxType:"Methods"}),(0,o.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,o.kt)(N,{mdxType:"Parts"}),(0,o.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,o.kt)(y,{mdxType:"CustomProps"}),(0,o.kt)("h2",{id:"slots"},"Slots"),(0,o.kt)(x,{mdxType:"Slots"}))}E.isMDXComponent=!0}}]);