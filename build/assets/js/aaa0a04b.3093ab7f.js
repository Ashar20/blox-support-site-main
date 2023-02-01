"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[89144],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76899:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],c={title:"ionic ssh add",sidebar_label:"ssh add"},a=void 0,s={unversionedId:"cli/commands/ssh-add",id:"cli/commands/ssh-add",isDocsHomePage:!1,title:"ionic ssh add",description:"Add an SSH public key to Ionic",source:"@site/docs/cli/commands/ssh-add.md",sourceDirName:"cli/commands",slug:"/cli/commands/ssh-add",permalink:"/developer/docs/cli/commands/ssh-add",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/ssh/add.ts",tags:[],version:"current",frontMatter:{title:"ionic ssh add",sidebar_label:"ssh add"},sidebar:"cli",previous:{title:"signup",permalink:"/developer/docs/cli/commands/signup"},next:{title:"ssh delete",permalink:"/developer/docs/cli/commands/ssh-delete"}},u=[{value:"Inputs",id:"inputs",children:[],level:2},{value:"Options",id:"options",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Add an SSH public key to Ionic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic ssh add [options]\n")),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"pubkey-path")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Location of public key file to add to Ionic"))))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-use",id:"option-use"},"--use"))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Use the newly added key as your default SSH key for Ionic"))))))}p.isMDXComponent=!0}}]);