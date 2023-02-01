"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[4434],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),h=r,g=d["".concat(p,".").concat(h)]||d[h]||u[h]||n;return o?a.createElement(g,i(i({ref:t},c),{},{components:o})):a.createElement(g,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},97013:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=o(87462),r=o(63366),n=(o(67294),o(3905)),i=["components"],l={},p="Creating a Photo Gallery with Device Storage",s={unversionedId:"developer-resources/guides/first-app-v3/creating-photo-gallery-device-storage",id:"developer-resources/guides/first-app-v3/creating-photo-gallery-device-storage",isDocsHomePage:!1,title:"Creating a Photo Gallery with Device Storage",description:"Last time, we successfully added the Camera plugin to the About page of our Tabs app. Currently, the photo is replaced each time a new one is taken. What if we wanted to display multiple photos together? Let\u2019s create a photo gallery. You can follow along with the complete code for this in the part 2 folder on GitHub.",source:"@site/docs/developer-resources/guides/first-app-v3/creating-photo-gallery-device-storage.md",sourceDirName:"developer-resources/guides/first-app-v3",slug:"/developer-resources/guides/first-app-v3/creating-photo-gallery-device-storage",permalink:"/developer/docs/developer-resources/guides/first-app-v3/creating-photo-gallery-device-storage",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/developer-resources/guides/first-app-v3/creating-photo-gallery-device-storage.md",tags:[],version:"current",frontMatter:{}},c=[{value:"Creating a Dedicated Photo Service",id:"creating-a-dedicated-photo-service",children:[],level:2},{value:"Saving photos to the device",id:"saving-photos-to-the-device",children:[],level:2}],u={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-a-photo-gallery-with-device-storage"},"Creating a Photo Gallery with Device Storage"),(0,n.kt)("p",null,"Last time, we successfully added the Camera plugin to the About page of our Tabs app. Currently, the photo is replaced each time a new one is taken. What if we wanted to display multiple photos together? Let\u2019s create a photo gallery. You can follow along with the complete code for this in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part2"},"the part 2 folder")," on GitHub."),(0,n.kt)("h2",{id:"creating-a-dedicated-photo-service"},"Creating a Dedicated Photo Service"),(0,n.kt)("p",null,"From a terminal window, navigate to your Ionic project and run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"ionic g provider PhotoProvider\n")),(0,n.kt)("p",null,"This creates a PhotoProvider class in a dedicated providers/photo folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { HttpClient } from '@angular/common/http';\nimport { Injectable } from '@angular/core';\n\n/*\n  Generated class for the PhotoProvider provider.\n\n  See https://angular.io/guide/dependency-injection for more info on providers\n  and Angular DI.\n*/\n@Injectable()\nexport class PhotoProvider {\n\n  constructor(public http: HttpClient) {\n    console.log('Hello PhotoProvider Provider');\n  }\n}\n")),(0,n.kt)("p",null,"Within this class, add a Photo class. The \u201cdata\u201d property represents the base64 image data of a captured photo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"class Photo {\n  data: any;\n}\n")),(0,n.kt)("p",null,"Then, create a Photos array to represent our photo gallery:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"export class PhotoProvider {\n\n  public photos: Photo[] = [];\n\n  constructor() { }\n}\n")),(0,n.kt)("p",null,"Back in ",(0,n.kt)("inlineCode",{parentName:"p"},"about.ts"),", import PhotoProvider:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { PhotoProvider } from '../../providers/photo/photo';\n")),(0,n.kt)("p",null,"Add it to the Constructor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"constructor(private camera: Camera, public photoService: PhotoProvider) {  }\n")),(0,n.kt)("p",null,"Next, move all code pertaining to the Camera plugin to the PhotoService class. This includes the takePicture method, the Camera import, and the About page constructor. Also, remove references to HttpClient - we won\u2019t be making any HTTP calls."),(0,n.kt)("p",null,"Continuing on, we need to convert currentImage variable references to the new photos array. Start by adding the captured photo data into the photos array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"this.camera.getPicture(options).then((imageData) => {\n    // Add new photo to gallery\n    this.photos.unshift({\n        data: 'data:image/jpeg;base64,' + imageData\n    }); }, (err) => {\n    // Handle error\n    console.log(\"Camera issue: \" + err);\n});\n")),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"about.page.ts"),", remove the currentImage variable and the reference to Camera in the constructor, leaving only PhotoService:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"export class AboutPage {\n  constructor(public navCtrl: NavController, public photoService: PhotoProvider) {  }\n}\n")),(0,n.kt)("p",null,"Next, in ",(0,n.kt)("inlineCode",{parentName:"p"},"about.page.html"),", remove the currentImage img tag. In its place, use an ion-grid component, which provides a great way to arrange elements on a page. In this case, we\u2019ll use it to display 2 photos per row."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<ion-grid>\n  <ion-row>\n    <ion-col col-6 *ngFor="let photo of photoService.photos">\n      <img [src]="photo.data" />\n    </ion-col>\n  </ion-row>\n</ion-grid>\n')),(0,n.kt)("p",null,"Here, we loop through each photo in the PhotoServices photos array, adding a new column for each. Since an ion-row consists of 12 \u201cblocks\u201d of space, and we\u2019re setting the size to 6 (\u201ccol-6\u201d), only 2 photos are displayed per row."),(0,n.kt)("p",null,"Last, update the Fab button to call the PhotoProvider\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"takePicture")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Html"},'<button ion-fab (click)="photoService.takePicture()">\n')),(0,n.kt)("p",null,"Excellent! We now have a basic photo gallery working."),(0,n.kt)("h2",{id:"saving-photos-to-the-device"},"Saving photos to the device"),(0,n.kt)("p",null,"Having a working photo gallery is pretty cool, but you\u2019ll likely notice that when the app is closed, the photos are lost forever. That\u2019s no good, so let\u2019s add the Ionic Storage plugin, as easy way to store key/value pairs and JSON objects. When running in a native app context, Storage will prioritize using SQLite, one of the most stable and widely used file-based databases. When running on the web or as a Progressive Web App, Storage will attempt to use IndexedDB, WebSQL, and localstorage, in that order."),(0,n.kt)("p",null,"The Storage plugin works perfectly for our base64 image data. To begin, add the SQLite plugin for native:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova plugin add cordova-sqlite-storage\n")),(0,n.kt)("p",null,"Next, add the JavaScript library for the web:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save @ionic/storage\n")),(0,n.kt)("p",null,"Last, import the Storage module and add it to the imports list in ",(0,n.kt)("inlineCode",{parentName:"p"},"app.module.ts"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { IonicStorageModule } from '@ionic/storage';\n\nimports: [\n    BrowserModule,\n    IonicModule.forRoot(MyApp),\n    IonicStorageModule.forRoot()\n  ],\n")),(0,n.kt)("p",null,"It\u2019s now ready to be used in our PhotoProvider class. Import it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { Storage } from '@ionic/storage-angular';\n")),(0,n.kt)("p",null,"Then inject it via the constructor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"constructor(private camera: Camera, private storage: Storage) { }\n")),(0,n.kt)("p",null,"To add the capability to save photos, there\u2019s only a couple steps left. Update the ",(0,n.kt)("inlineCode",{parentName:"p"},"takePicture()")," method to save the entire photos array after each photo is taken using the storage.set method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"this.camera.getPicture(options).then((imageData) => {\n      // Add new photo to gallery\n      this.photos.unshift({\n        data: 'data:image/jpeg;base64,' + imageData\n      });\n\n      // Save all photos for later viewing\n      this.storage.set('photos', this.photos);\n    }, (err) => {\n     // Handle error\n     console.log(\"Camera issue: \" + err);\n    });\n")),(0,n.kt)("p",null,"We still need to load the saved photos when the app is first opened. This is simple enough - retrieve the \u201cphotos\u201d key then assign its value to the photos array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"loadSaved() {\n    this.storage.get('photos').then((photos) => {\n      this.photos = photos || [];\n    });\n  }\n")),(0,n.kt)("p",null,"Over in the About page, call the loadSaved method once it begins loading:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"},"ngOnInit() {\n    this.photoService.loadSaved();\n}\n")),(0,n.kt)("p",null,"Sweet! Photos are now saved to your device. To demonstrate that they are indeed being saved, force close DevApp, reopen it, and open the About page. Or, shake your device to have the Control Menu pop up, then tap \u201cExit preview.\u201d Afterwards, reload this app to view the photos."),(0,n.kt)("p",null,"Finally, back up your changes to Appflow:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\ngit commit -m \u201cimplemented photo gallery\u201d\ngit push ionic master\n")),(0,n.kt)("p",null,"Next up, we\u2019ll look at how to apply a custom theme to an Ionic app."))}d.isMDXComponent=!0}}]);