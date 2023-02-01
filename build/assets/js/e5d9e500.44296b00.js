"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[68614],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return n?o.createElement(g,a(a({ref:t},s),{},{components:n})):o.createElement(g,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],u={},l="Using Native Functionality",c={unversionedId:"studio/guides/using-native-functionality",id:"version-v5/studio/guides/using-native-functionality",isDocsHomePage:!1,title:"Using Native Functionality",description:"Depending on which Cordova Plugin you're using, you may need to run your app on a physical or virtual device in order to test out that feature.",source:"@site/versioned_docs/version-v5/studio/guides/using-native-functionality.md",sourceDirName:"studio/guides",slug:"/studio/guides/using-native-functionality",permalink:"/developer/docs/v5/studio/guides/using-native-functionality",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/studio/guides/using-native-functionality.md",tags:[],version:"v5",frontMatter:{}},s=[],d={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-native-functionality"},"Using Native Functionality"),(0,r.kt)("p",null,"Depending on which Cordova Plugin you're using, you may need to run your app on a physical or virtual device in order to test out that feature."),(0,r.kt)("p",null,"For instance, a plugin for utilizing the Gyroscope will only work on a physical device, while a plugin for Storage will work in Serve as well."),(0,r.kt)("p",null,"In order to debug Native Functionality, it is best to utilize the native tooling. For instance, you might want to use the following in order to test:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Studio's main toolbar, click on ",(0,r.kt)("strong",{parentName:"li"},"Project")," ","\xbb"," ",(0,r.kt)("strong",{parentName:"li"},"Build")," ","\xbb"," ",(0,r.kt)("strong",{parentName:"li"},"Build iOS")," (or Android)"),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Project")," ","\xbb"," ",(0,r.kt)("strong",{parentName:"li"},"Open in XCode")," (or Android Studio)"),(0,r.kt)("li",{parentName:"ol"},"Use XCode or Android Studio to run your project on your physical device."),(0,r.kt)("li",{parentName:"ol"},"You now have access to native debugging logs inside of XCode or Android Studio."),(0,r.kt)("li",{parentName:"ol"},"You can also use Safari (iOS) or Chrome (Android) in order to inspect the web content of your application.")),(0,r.kt)("p",null,"For more detailed instructions, please see the ",(0,r.kt)("a",{parentName:"p",href:"/developer/docs/v5/developing/ios"},"Building for iOS")," or ",(0,r.kt)("a",{parentName:"p",href:"/developer/docs/v5/developing/android"},"Building for Android")," documentation."),(0,r.kt)("p",null,"If you'd like to follow along with a beginners tutorial that includes utilizing the Camera Cordova plugin, please see our ",(0,r.kt)("a",{parentName:"p",href:"/developer/docs/v5/angular/your-first-app"},"Build your First App guide"),". While this guide isn't specific to Studio, you can still follow along using Studio."))}p.isMDXComponent=!0}}]);