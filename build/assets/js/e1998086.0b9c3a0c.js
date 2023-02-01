"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[62302],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,g=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16794:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={},c="Using a Proxy",p={unversionedId:"cli/using-a-proxy",id:"version-v5/cli/using-a-proxy",isDocsHomePage:!1,title:"Using a Proxy",description:"Proxy support is built-in to the Ionic CLI. Proxy settings can be configured via the config file or an environment variable.",source:"@site/versioned_docs/version-v5/cli/using-a-proxy.md",sourceDirName:"cli",slug:"/cli/using-a-proxy",permalink:"/developer/docs/v5/cli/using-a-proxy",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/cli/using-a-proxy.md",tags:[],version:"v5",frontMatter:{},sidebar:"version-v5/cli",previous:{title:"Live Reload",permalink:"/developer/docs/v5/cli/livereload"},next:{title:"build",permalink:"/developer/docs/v5/cli/commands/build"}},s=[{value:"Other CLIs",id:"other-clis",children:[{value:"npm",id:"npm",children:[],level:4},{value:"git",id:"git",children:[],level:4}],level:3},{value:"SSL Configuration",id:"ssl-configuration",children:[],level:3}],u={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-a-proxy"},"Using a Proxy"),(0,i.kt)("p",null,"Proxy support is built-in to the Ionic CLI. Proxy settings can be configured via the config file or an environment variable."),(0,i.kt)("p",null,"To configure proxy settings via the config file, run the following with the URL of the proxy server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic config set -g proxy http://proxy.example.com:8888\n")),(0,i.kt)("p",null,"To configure proxy settings via an environment variable, use one of the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ export HTTP_PROXY="http://proxy.example.com:8888" # also used by npm\n$ export HTTPS_PROXY="https://proxy.example.com:8888" # also used by npm\n$ export IONIC_HTTP_PROXY="http://proxy.example.com:8888"\n')),(0,i.kt)("h3",{id:"other-clis"},"Other CLIs"),(0,i.kt)("p",null,"Each CLI that you use must be configured separately to proxy network requests."),(0,i.kt)("h4",{id:"npm"},"npm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm config set proxy http://proxy.company.com:8888\n")),(0,i.kt)("h4",{id:"git"},"git"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global http.proxy http://proxy.example.com:8888\n")),(0,i.kt)("h3",{id:"ssl-configuration"},"SSL Configuration"),(0,i.kt)("p",null,"The Ionic CLI can be configured to use various SSL settings for HTTP requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic config set -g ssl.cafile /path/to/cafile # file path to your CA root certificate\n$ ionic config set -g ssl.certfile /path/to/certfile # file path to a client certificate\n$ ionic config set -g ssl.keyfile /path/to/keyfile # file path to a client key file\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cafile"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"certfile"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"keyfile")," entries can be manually edited as arrays of strings in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.ionic/config.json")," to include multiple files."))}f.isMDXComponent=!0}}]);