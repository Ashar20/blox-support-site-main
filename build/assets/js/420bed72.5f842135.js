"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[92671],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),u=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=r,d=m["".concat(a,".").concat(f)]||m[f]||s[f]||i;return t?o.createElement(d,c(c({ref:n},p),{},{components:t})):o.createElement(d,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49104:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),c=["components"],l={sidebar_label:"logout"},a="ionic logout",u={unversionedId:"cli/commands/logout",id:"version-v5/cli/commands/logout",isDocsHomePage:!1,title:"ionic logout",description:"Log out of Ionic",source:"@site/versioned_docs/version-v5/cli/commands/logout.md",sourceDirName:"cli/commands",slug:"/cli/commands/logout",permalink:"/developer/docs/v5/cli/commands/logout",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/logout.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"logout"},sidebar:"version-v5/cli",previous:{title:"login",permalink:"/developer/docs/v5/cli/commands/login"},next:{title:"package build",permalink:"/developer/docs/v5/cli/commands/package-build"}},p=[],s={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ionic-logout"},"ionic logout"),(0,i.kt)("p",null,"Log out of Ionic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic logout [options]\n")),(0,i.kt)("p",null,"Remove the Ionic user token from the CLI config."),(0,i.kt)("p",null,"Log in again with ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic login"),"."),(0,i.kt)("p",null,"If you need to create an Ionic account, use ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic signup"),"."))}m.isMDXComponent=!0}}]);