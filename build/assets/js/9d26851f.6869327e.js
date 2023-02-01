"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[15301],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64611:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={sidebar_label:"git remote"},p="ionic git remote",l={unversionedId:"cli/commands/git-remote",id:"version-v5/cli/commands/git-remote",isDocsHomePage:!1,title:"ionic git remote",description:"Adds/updates the Appflow git remote to your local Ionic app",source:"@site/versioned_docs/version-v5/cli/commands/git-remote.md",sourceDirName:"cli/commands",slug:"/cli/commands/git-remote",permalink:"/developer/docs/v5/cli/commands/git-remote",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/git/remote.ts",tags:[],version:"v5",frontMatter:{sidebar_label:"git remote"},sidebar:"version-v5/cli",previous:{title:"generate",permalink:"/developer/docs/v5/cli/commands/generate"},next:{title:"info",permalink:"/developer/docs/v5/cli/commands/info"}},s=[],m={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ionic-git-remote"},"ionic git remote"),(0,i.kt)("p",null,"Adds/updates the Appflow git remote to your local Ionic app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic git remote [options]\n")),(0,i.kt)("p",null,"This command is used by ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic link")," when Appflow is used as the git host."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ionic git remote")," will check the local repository for whether or not the git remote is properly set up. This command operates on the ",(0,i.kt)("strong",{parentName:"p"},"ionic")," remote. For advanced configuration, see ",(0,i.kt)("strong",{parentName:"p"},"Settings")," => ",(0,i.kt)("strong",{parentName:"p"},"Git")," in the app settings of the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ionicframework.com"},"Dashboard"),"."))}u.isMDXComponent=!0}}]);