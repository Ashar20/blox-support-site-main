"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[57692],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13164:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(87462),o=r(63366),a=r(86010),c=r(67294),i=r(85350),l={colorDot:"colorDot_108x",colorDotDark:"colorDotDark_1lWm",colorDotLight:"colorDotLight_3Aq2"},s=["color"];function u(e){var t=e.color,r=(0,o.Z)(e,s),u=(0,i.Z)().isDarkTheme;return c.createElement("div",(0,n.Z)({style:{backgroundColor:t},className:(0,a.Z)(r.className,"color-dot",l.colorDot,l["colorDot"+(u?"Dark":"Light")])},r))}},32569:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(87462),o=r(63366),a=r(67294),c=r(86010),i=r(51056),l=r(85350),s={colorInput:"colorInput_3rvk",colorInputLight:"colorInputLight_JAY1",colorInputDark:"colorInputDark_OlH5",colorPickerWrapper:"colorPickerWrapper_qzTi",colorPicker:"colorPicker_1Aqu"},u=["color","setColor"];function p(e){var t=e.color,r=e.setColor,p=(0,o.Z)(e,u),f=(0,l.Z)().isDarkTheme;return a.createElement("div",(0,n.Z)({},p,{className:(0,c.Z)("color-input",s.colorInput,p.className,s["colorInput"+(f?"Dark":"Light")])}),a.createElement("div",{className:s.colorPickerWrapper,style:{"--background-c":t}},a.createElement("input",{type:"color",onChange:function(e){var t=e.target;return r(t.value)},value:t,className:s.colorPicker})),a.createElement(i.Z,null,a.createElement("input",{onChange:function(e){var t=e.target;return r(t.value)},value:t})))}},51056:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(87462),o=r(86010),a=r(67294),c={inputWrapper:"inputWrapper_31bA",inputWrapperLight:"inputWrapperLight_3xEP",inputWrapperDark:"inputWrapperDark_14BM"},i=r(85350);function l(e){var t=Object.assign({},e),r=(0,i.Z)().isDarkTheme;return a.createElement("div",(0,n.Z)({},t,{className:(0,o.Z)(t.className,"input-wrapper",c.inputWrapper,c["inputWrapper"+(r?"Dark":"Light")])}))}},10290:function(e,t,r){r.d(t,{I:function(){return i}});var n=function(e){var t=e.toString(16);return 1===t.length?"0"+t:t},o=function(e){return"#"+(e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,r,n){return t+t+r+r+n+n}))).replace("#","")},a=function(e){var t=e.r,r=e.g,o=e.b;return"#"+n(t)+n(r)+n(o)},c=function(e){var t=e.r,r=e.g,n=e.b;t=Math.max(Math.min(t/255,1),0),r=Math.max(Math.min(r/255,1),0),n=Math.max(Math.min(n/255,1),0);var o,a,c,i=Math.max(t,r,n),l=Math.min(t,r,n),s=Math.min(1,Math.max(0,(i+l)/2));return i!==l?(o=i-l,c=s>.5?o/(2-i-l):o/(i+l),a=i===t?(r-n)/o+(r<n?6:0):i===r?(n-t)/o+2:(t-r)/o+4,a/=6):a=c=0,{h:Math.round(360*a),s:Math.round(100*c),l:Math.round(100*s)}},i=function(){function e(e){if("string"==typeof e&&/rgb\(/.test(e)){var t,r=null!=(t=/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.exec(e))?t:[];e={r:parseInt(r[0],10),g:parseInt(r[1],10),b:parseInt(r[2],10)}}else if("string"==typeof e&&/hsl\(/.test(e)){var n,i=null!=(n=/hsl\((\d{1,3}), ?(\d{1,3}%), ?(\d{1,3}%)\)/.exec(e))?n:[];e={h:parseInt(i[0],10),s:parseInt(i[1],10),l:parseInt(i[2],10)}}if("string"==typeof e)e=e.replace(/\s/g,""),this.hex=o(e),this.rgb=function(e){e=(e=o(e)).replace("#","");var t=parseInt(e,16);return{r:t>>16&255,g:t>>8&255,b:255&t}}(this.hex),this.hsl=c(this.rgb);else if("r"in e&&"g"in e&&"b"in e)this.rgb=e,this.hex=a(this.rgb),this.hsl=c(this.rgb);else{if(!("h"in e&&"s"in e&&"l"in e))throw new Error("Incorrect value passed.");this.hsl=e,this.rgb=function(e){var t=e.h,r=e.s,n=e.l;if(t/=360,n/=100,0==(r/=100))return{r:n=Math.round(255*n),g:n,b:n};var o=function(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e},a=n<.5?n*(1+r):n+r-n*r,c=2*n-a,i=o(c,a,t+1/3),l=o(c,a,t),s=o(c,a,t-1/3);return{r:Math.round(255*i),g:Math.round(255*l),b:Math.round(255*s)}}(this.hsl),this.hex=a(this.rgb)}var l;this.yiq=(299*(l=this.rgb).r+587*l.g+114*l.b)/1e3}e.isColor=function(e){return!!/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(e)||/(^#[0-9a-fA-F]+)/.test(e.trim())};var t=e.prototype;return t.contrast=function(t){return void 0===t&&(t=128),new e(this.yiq>=t?"#000":"#fff")},t.mix=function(t,r){void 0===r&&(r=.5);var n=t instanceof e?t:new e(t);return new e(function(e,t,r){void 0===r&&(r=.5);var n=e.rgb,o=t.rgb,a=1-r;return{r:Math.round(r*o.r+a*n.r),g:Math.round(r*o.g+a*n.g),b:Math.round(r*o.b+a*n.b)}}(this,n,r))},t.shade=function(e){return void 0===e&&(e=.12),this.mix({r:0,g:0,b:0},e)},t.tint=function(e){return void 0===e&&(e=.1),this.mix({r:255,g:255,b:255},e)},t.toList=function(){var e=this.rgb;return e.r+","+e.g+","+e.b},e}()},6379:function(e,t,r){r.d(t,{ZP:function(){return o},vC:function(){return a}});var n=r(10290),o=function(e,t){void 0===e&&(e="#ffffff"),void 0===t&&(t="#000000");var r=new n.I(e);return new Array(19).fill(null).map((function(e,n){return r.mix(t,5*(n+1)/100).hex}))},a=function(e){var t=new n.I(e),r=t.contrast(),o=t.tint(),a=t.shade();return{value:e,valueRgb:c(t.rgb),contrast:r.hex,contrastRgb:c(r.rgb),tint:o.hex,shade:a.hex}},c=function(e){return e.r+","+e.g+","+e.b}},46254:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return _},default:function(){return Z},frontMatter:function(){return O},metadata:function(){return D},toc:function(){return M}});var n=r(87462),o=r(63366),a=r(67294),c=r(3905),i="colorGenerator_1kUD",l="titleRow_3IH6",s="titleRowStart_1XAG",u="titleRowEnd_1R56",p="selectColors_3VPq",f="submenu_2cV9",d="item_1M-f",m="subcategory_2EdU",h="headingGroup_3S9P",v="isOpen_383C",g="codePre_1PP_",b=r(6379),y=r(86010),E=r(13164),k=r(32569),x=function(e){return a.createElement("svg",(0,n.Z)({width:"10px",height:"6px",viewBox:"0 0 10 6",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("g",{id:"Welcome",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("g",{id:"Desktop-HD",transform:"translate(-1025.000000, -335.000000)",stroke:"#AEB4BE",strokeWidth:"2"},a.createElement("polyline",{id:"arrow",transform:"translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) ",points:"1028 334 1032 338.020022 1028 342"}))))},w=function(e){var t=(0,a.useState)({primary:(0,b.vC)("#3880ff"),secondary:(0,b.vC)("#5260ff"),tertiary:(0,b.vC)("#5260ff"),success:(0,b.vC)("#2dd36f"),warning:(0,b.vC)("#ffc409"),danger:(0,b.vC)("#eb445a"),medium:(0,b.vC)("#92949c"),light:(0,b.vC)("#f4f5f8")}),r=t[0],o=t[1],c=(0,a.useState)(null),w=c[0],C=c[1],O=(0,a.useState)(""),_=O[0],D=O[1],M=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new CustomEvent("demoMessage",{detail:{cssText:_}});window.dispatchEvent(e)}),[_]),(0,a.useEffect)((function(){D(M.current.textContent)}),[r]),a.createElement("section",(0,n.Z)({},e,{className:(0,y.Z)(e.className,i)}),a.createElement("ul",{className:p},Object.entries(r).map((function(e){var t,r=e[0],n=e[1],c=n.tint,i=n.shade,p=n.value,g=r[0].toUpperCase()+r.substring(1),O=w===r;return a.createElement("li",{className:(0,y.Z)(d,(t={},t[v]=O,t)),onClick:function(){return C(w===r?null:r)}},a.createElement("div",{className:l},a.createElement("div",{className:s},a.createElement(E.Z,{color:p}),g),a.createElement("div",{className:u},a.createElement(k.Z,{onClick:function(e){return e.stopPropagation()},color:p,setColor:function(e){return o((function(t){return t[r]=(0,b.vC)(e),Object.assign({},t)}))}}),a.createElement(x,null))),a.createElement("ul",{className:f},a.createElement("li",{className:m},a.createElement("div",{className:h},a.createElement(E.Z,{color:i}),a.createElement("span",null,g,"-shade")),a.createElement("code",null,i)),a.createElement("li",{className:m},a.createElement("div",{className:h},a.createElement(E.Z,{color:c}),a.createElement("span",null,g,"-tint")),a.createElement("code",null,c))))}))),a.createElement("pre",{className:g},a.createElement("code",{ref:M},":root ","{","\n",Object.entries(r).map((function(e,t){var r=e[0],n=e[1];return a.createElement(a.Fragment,null,"\t","--ion-color-",r,": ",n.value,";","\n","\t","--ion-color-",r,"-rgb: ",n.valueRgb,";","\n","\t","--ion-color-",r,"-contrast: ",n.contrast,";","\n","\t","--ion-color-",r,"-contrast-rgb: ",n.contrastRgb,";","\n","\t","--ion-color-",r,"-shade: ",n.shade,";","\n","\t","--ion-color-",r,"-tint: ",n.tint,";","\n","\n")})),"}","\n")))},C=["components"],O={hide_table_of_contents:!0,demoUrl:"/docs/demos/color-generator/index.html"},_="Color Generator",D={unversionedId:"theming/color-generator",id:"version-v5/theming/color-generator",isDocsHomePage:!1,title:"Color Generator",description:"Create custom color palettes for your app\u2019s UI. Update a color\u2019s hex values, check the demo app on the right to confirm, then copy and paste the generated code directly into your Ionic project.",source:"@site/versioned_docs/version-v5/theming/color-generator.md",sourceDirName:"theming",slug:"/theming/color-generator",permalink:"/developer/docs/v5/theming/color-generator",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/theming/color-generator.md",tags:[],version:"v5",frontMatter:{hide_table_of_contents:!0,demoUrl:"/docs/demos/color-generator/index.html"},sidebar:"version-v5/docs",previous:{title:"Advanced",permalink:"/developer/docs/v5/theming/advanced"},next:{title:"Overview",permalink:"/developer/docs/v5/angular/overview"}},M=[],P={toc:M};function Z(e){var t=e.components,r=(0,o.Z)(e,C);return(0,c.kt)("wrapper",(0,n.Z)({},P,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"color-generator"},"Color Generator"),(0,c.kt)("p",null,"Create custom color palettes for your app\u2019s UI. Update a color\u2019s hex values, check the demo app on the right to confirm, then copy and paste the generated code directly into your Ionic project."),(0,c.kt)(w,{mdxType:"ColorGenerator"}))}Z.isMDXComponent=!0}}]);