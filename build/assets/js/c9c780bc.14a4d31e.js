"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[57431],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=m(n),k=r,g=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},26396:function(t,e,n){n.d(e,{Z:function(){return s}});var a=n(87462),r=n(67294),l=n(72389),i=n(79443);var o=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},d=n(89521),m=n(86010),p="tabItem_1uMI";function u(t){var e,n,a,l=t.lazy,i=t.block,u=t.defaultValue,s=t.values,k=t.groupId,g=t.className,N=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),c=null!=s?s:N.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),b=(0,d.lx)(c,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===u?u:null!=(e=null!=u?u:null==(n=N.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=N[0])?void 0:a.props.value;if(null!==h&&!c.some((function(t){return t.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+c.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=o(),y=v.tabGroupChoices,f=v.setTabGroupChoices,I=(0,r.useState)(h),C=I[0],x=I[1],T=[],D=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var w=y[k];null!=w&&w!==C&&c.some((function(t){return t.value===w}))&&x(w)}var S=function(t){var e=t.currentTarget,n=T.indexOf(e),a=c[n].value;a!==C&&(D(e),x(a),null!=k&&f(k,a))},E=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=T.indexOf(t.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(t.currentTarget)-1;n=T[r]||T[T.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":i},g)},c.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,className:(0,m.Z)("tabs__item",p,{"tabs__item--active":C===e}),key:e,ref:function(t){return T.push(t)},onKeyDown:E,onFocus:S,onClick:S},null!=n?n:e)}))),l?(0,r.cloneElement)(N.filter((function(t){return t.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function s(t){var e=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(e)},t))}},99238:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(26396),o=n(58215),d=["components"],m={title:"Range Slider | ion-range: Slider Knob Controls with Labels",description:"ion-range lets you select from a range of values by moving the slider. It accepts dual knobs but one controls the value and labels can be placed on either side.",sidebar_label:"ion-range",demoUrl:"/docs/demos/api/range/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/range/index.html"},p="ion-range",u={unversionedId:"api/range",id:"version-v5/api/range",isDocsHomePage:!1,title:"Range Slider | ion-range: Slider Knob Controls with Labels",description:"ion-range lets you select from a range of values by moving the slider. It accepts dual knobs but one controls the value and labels can be placed on either side.",source:"@site/versioned_docs/version-v5/api/range.md",sourceDirName:"api",slug:"/api/range",permalink:"/developer/docs/v5/api/range",editUrl:"https://github.com/ionic-team/ionic-docs/tree/main/docs/api/range.md",tags:[],version:"v5",frontMatter:{title:"Range Slider | ion-range: Slider Knob Controls with Labels",description:"ion-range lets you select from a range of values by moving the slider. It accepts dual knobs but one controls the value and labels can be placed on either side.",sidebar_label:"ion-range",demoUrl:"/docs/demos/api/range/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/range/index.html"},sidebar:"version-v5/api",previous:{title:"ion-radio-group",permalink:"/developer/docs/v5/api/radio-group"},next:{title:"ion-refresher",permalink:"/developer/docs/v5/api/refresher"}},s=[{value:"Range Labels",id:"range-labels",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"debounce",id:"debounce",children:[],level:3},{value:"disabled",id:"disabled",children:[],level:3},{value:"dualKnobs",id:"dualknobs",children:[],level:3},{value:"max",id:"max",children:[],level:3},{value:"min",id:"min",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"pin",id:"pin",children:[],level:3},{value:"snaps",id:"snaps",children:[],level:3},{value:"step",id:"step",children:[],level:3},{value:"ticks",id:"ticks",children:[],level:3},{value:"value",id:"value",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:2},{value:"Slots",id:"slots",children:[],level:2}],k={toc:s};function g(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ion-range"},"ion-range"),(0,l.kt)("p",null,"The Range slider lets users select from a range of values by moving\nthe slider knob. It can accept dual knobs, but by default one knob\ncontrols the value of the range."),(0,l.kt)("h2",{id:"range-labels"},"Range Labels"),(0,l.kt)("p",null,"Labels can be placed on either side of the range by adding the\n",(0,l.kt)("inlineCode",{parentName:"p"},'slot="start"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'slot="end"')," to the element. The element doesn't have to\nbe an ",(0,l.kt)("inlineCode",{parentName:"p"},"ion-label"),", it can be added to any element to place it to the\nleft or right of the range."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.Z,{groupId:"framework",defaultValue:"angular",values:[{value:"angular",label:"Angular"},{value:"javascript",label:"Javascript"},{value:"react",label:"React"},{value:"stencil",label:"Stencil"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ion-list>\n  <ion-item>\n    <ion-range color="danger" pin="true"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min="-200" max="200" color="secondary">\n      <ion-label slot="start">-200</ion-label>\n      <ion-label slot="end">200</ion-label>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min="20" max="80" step="2">\n      <ion-icon size="small" slot="start" name="sunny"></ion-icon>\n      <ion-icon slot="end" name="sunny"></ion-icon>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range dualKnobs="true" min="21" max="72" step="3" snaps="true"></ion-range>\n  </ion-item>\n</ion-list>\n'))),(0,l.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ion-list>\n  <ion-item>\n    <ion-range color="danger" pin="true"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min="-200" max="200" color="secondary">\n      <ion-label slot="start">-200</ion-label>\n      <ion-label slot="end">200</ion-label>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min="20" max="80" step="2">\n      <ion-icon size="small" slot="start" name="sunny"></ion-icon>\n      <ion-icon slot="end" name="sunny"></ion-icon>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range dual-knobs="true" min="21" max="72" step="3" snaps="true"></ion-range>\n  </ion-item>\n</ion-list>\n'))),(0,l.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from \'react\';\nimport {\n  IonContent,\n  IonHeader,\n  IonPage,\n  IonTitle,\n  IonToolbar,\n  IonList,\n  IonItem,\n  IonRange,\n  IonLabel,\n  IonIcon,\n  IonItemDivider,\n} from \'@ionic/react\';\nimport { sunny } from \'ionicons/icons\';\nimport { RangeValue } from \'@ionic/core\';\n\nexport const RangeExamples: React.FC = () => {\n  const [value, setValue] = useState(0);\n  const [rangeValue, setRangeValue] = useState<{\n    lower: number;\n    upper: number;\n  }>({ lower: 0, upper: 0 });\n\n  return (\n    <IonPage>\n      <IonHeader>\n        <IonToolbar>\n          <IonTitle>IonRange Examples</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent>\n        <IonList>\n          <IonItemDivider>Default</IonItemDivider>\n          <IonItem>\n            <IonRange pin={true} value={value} onIonChange={(e) => setValue(e.detail.value as number)} />\n          </IonItem>\n          <IonItem>\n            <IonLabel>Value: {value}</IonLabel>\n          </IonItem>\n\n          <IonItemDivider>Min & Max</IonItemDivider>\n          <IonItem>\n            <IonRange min={-200} max={200} color="secondary">\n              <IonLabel slot="start">-200</IonLabel>\n              <IonLabel slot="end">200</IonLabel>\n            </IonRange>\n          </IonItem>\n\n          <IonItemDivider>Icons</IonItemDivider>\n          <IonItem>\n            <IonRange min={20} max={80} step={2}>\n              <IonIcon size="small" slot="start" icon={sunny} />\n              <IonIcon slot="end" icon={sunny} />\n            </IonRange>\n          </IonItem>\n\n          <IonItemDivider>With Snaps & Ticks</IonItemDivider>\n          <IonItem>\n            <IonRange min={1000} max={2000} step={100} snaps={true} color="secondary" />\n          </IonItem>\n\n          <IonItemDivider>With Snaps & No Ticks</IonItemDivider>\n          <IonItem>\n            <IonRange min={1000} max={2000} step={100} snaps={true} ticks={false} color="secondary" />\n          </IonItem>\n\n          <IonItemDivider>Dual Knobs</IonItemDivider>\n          <IonItem>\n            <IonRange\n              dualKnobs={true}\n              min={0}\n              max={60}\n              step={3}\n              snaps={true}\n              onIonChange={(e) => setRangeValue(e.detail.value as any)}\n            />\n          </IonItem>\n          <IonItem>\n            <IonLabel>\n              Value: lower: {rangeValue.lower} upper: {rangeValue.upper}\n            </IonLabel>\n          </IonItem>\n        </IonList>\n      </IonContent>\n    </IonPage>\n  );\n};\n'))),(0,l.kt)(o.Z,{value:"stencil",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'range-example\',\n  styleUrl: \'range-example.css\',\n})\nexport class RangeExample {\n  render() {\n    return [\n      <ion-list>\n        <ion-item>\n          <ion-range color="danger" pin={true}></ion-range>\n        </ion-item>\n\n        <ion-item>\n          <ion-range min={-200} max={200} color="secondary">\n            <ion-label slot="start">-200</ion-label>\n            <ion-label slot="end">200</ion-label>\n          </ion-range>\n        </ion-item>\n\n        <ion-item>\n          <ion-range min={20} max={80} step={2}>\n            <ion-icon size="small" slot="start" name="sunny"></ion-icon>\n            <ion-icon slot="end" name="sunny"></ion-icon>\n          </ion-range>\n        </ion-item>\n\n        <ion-item>\n          <ion-range min={1000} max={2000} step={100} snaps={true} color="secondary"></ion-range>\n        </ion-item>\n\n        <ion-item>\n          <ion-range min={1000} max={2000} step={100} snaps={true} ticks={false} color="secondary"></ion-range>\n        </ion-item>\n\n        <ion-item>\n          <ion-range dualKnobs={true} min={21} max={72} step={3} snaps={true}></ion-range>\n        </ion-item>\n      </ion-list>,\n    ];\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-list>\n    <ion-item>\n      <ion-range color="danger" pin="true"></ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-range min="-200" max="200" color="secondary">\n        <ion-label slot="start">-200</ion-label>\n        <ion-label slot="end">200</ion-label>\n      </ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-range min="20" max="80" step="2">\n        <ion-icon size="small" slot="start" name="sunny"></ion-icon>\n        <ion-icon slot="end" name="sunny"></ion-icon>\n      </ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-range ref="rangeDualKnobs" dual-knobs="true" min="21" max="72" step="3" snaps="true"></ion-range>\n    </ion-item>\n  </ion-list>\n</template>\n\n<script>\n  import { IonItem, IonLabel, IonList, IonRange } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: { IonItem, IonLabel, IonList, IonRange },\n    mounted() {\n      // Sets initial value for dual-knob ion-range\n      this.$refs.rangeDualKnobs.value = { lower: 24, upper: 42 };\n    },\n  });\n<\/script>\n')))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/developer/docs/v5/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"debounce"},"debounce"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"How long, in milliseconds, to wait to trigger the",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"ionChange")," event after each change in the range value.",(0,l.kt)("br",null),"This also impacts form bindings such as ",(0,l.kt)("inlineCode",{parentName:"td"},"ngModel")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"v-model"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"debounce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))))),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"dualknobs"},"dualKnobs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Show two knobs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dual-knobs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"max"},"max"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum integer value of the range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100"))))),(0,l.kt)("h3",{id:"min"},"min"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum integer value of the range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"min"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))))),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the control, which is submitted with the form data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))))),(0,l.kt)("h3",{id:"pin"},"pin"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", a pin with integer value is shown when the knob",(0,l.kt)("br",null),"is pressed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"snaps"},"snaps"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the knob snaps to tick marks evenly spaced based",(0,l.kt)("br",null),"on the step property value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"snaps"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"step"},"step"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the value granularity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"step"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))))),(0,l.kt)("h3",{id:"ticks"},"ticks"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", tick marks are displayed based on the step value.",(0,l.kt)("br",null),"Only applies when ",(0,l.kt)("inlineCode",{parentName:"td"},"snaps")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ticks"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"the value of the range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number \\| { lower: number; upper: number; }"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionBlur")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the range loses focus.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the value property has changed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionFocus")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the range has focus.")))),(0,l.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bar")),(0,l.kt)("td",{parentName:"tr",align:null},"The inactive part of the bar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bar-active")),(0,l.kt)("td",{parentName:"tr",align:null},"The active part of the bar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"knob")),(0,l.kt)("td",{parentName:"tr",align:null},"The handle that is used to drag the range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pin")),(0,l.kt)("td",{parentName:"tr",align:null},"The counter that appears above a knob.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tick")),(0,l.kt)("td",{parentName:"tr",align:null},"An inactive tick mark.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tick-active")),(0,l.kt)("td",{parentName:"tr",align:null},"An active tick mark.")))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bar-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the range bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bar-background-active")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the active range bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bar-border-radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Border radius of the range bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bar-height")),(0,l.kt)("td",{parentName:"tr",align:null},"Height of the range bar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--height")),(0,l.kt)("td",{parentName:"tr",align:null},"Height of the range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--knob-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the range knob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--knob-border-radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Border radius of the range knob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--knob-box-shadow")),(0,l.kt)("td",{parentName:"tr",align:null},"Box shadow of the range knob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--knob-size")),(0,l.kt)("td",{parentName:"tr",align:null},"Size of the range knob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--pin-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the range pin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--pin-color")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the range pin")))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"end")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed to the right of the range slider in LTR, and to the left in RTL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:null},"Content is placed to the left of the range slider in LTR, and to the right in RTL.")))))}g.isMDXComponent=!0}}]);