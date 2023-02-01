"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[88049],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return u}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),u=a,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||r;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},30333:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],l={sidebar_label:"Live Reload"},p="Rapid App Development with Live Reload",s={unversionedId:"react/your-first-app/live-reload",id:"version-v5/react/your-first-app/live-reload",isDocsHomePage:!1,title:"Rapid App Development with Live Reload",description:"So far, we\u2019ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?",source:"@site/versioned_docs/version-v5/react/your-first-app/7-live-reload.md",sourceDirName:"react/your-first-app",slug:"/react/your-first-app/live-reload",permalink:"/developer/docs/v5/react/your-first-app/live-reload",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v5/react/your-first-app/7-live-reload.md",tags:[],version:"v5",sidebarPosition:7,frontMatter:{sidebar_label:"Live Reload"},sidebar:"version-v5/docs",previous:{title:"Deploying Mobile",permalink:"/developer/docs/v5/react/your-first-app/deploying-mobile"},next:{title:"Lifecycle",permalink:"/developer/docs/v5/react/lifecycle"}},c=[{value:"Live Reload",id:"live-reload",children:[],level:2},{value:"Deleting Photos",id:"deleting-photos",children:[],level:2},{value:"What\u2019s Next?",id:"whats-next",children:[],level:2}],h={toc:c};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rapid-app-development-with-live-reload"},"Rapid App Development with Live Reload"),(0,r.kt)("p",null,"So far, we\u2019ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?"),(0,r.kt)("p",null,"We can use the Ionic CLI\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/livereload"},"Live Reload functionality")," to boost our productivity when building Ionic apps. When active, Live Reload will reload the browser and/or WebView when changes in the app are detected."),(0,r.kt)("h2",{id:"live-reload"},"Live Reload"),(0,r.kt)("p",null,"Remember ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic serve"),"? That was Live Reload working in the browser, allowing us to iterate quickly."),(0,r.kt)("p",null,"We can also use it when developing on iOS and Android devices. This is particularly useful when writing code that interacts with native plugins. Since we need to run native plugin code on a device in order to verify that it works, having a way to quickly write code, build and deploy it, then test it is crucial to keeping up our development speed."),(0,r.kt)("p",null,"Let\u2019s use Live Reload to implement photo deletion, the missing piece of our Photo Gallery feature. Select your platform of choice (iOS or Android) and connect a device to your computer. Next, run either command in a terminal, based on your chosen platform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cap run ios -l --external\n\n$ ionic cap run android -l --external\n")),(0,r.kt)("p",null,"The Live Reload server will start up, and the native IDE of choice will open if not opened already. Within the IDE, click the Play button to launch the app onto your device."),(0,r.kt)("h2",{id:"deleting-photos"},"Deleting Photos"),(0,r.kt)("p",null,"With Live Reload running and the app is open on your device, let\u2019s implement photo deletion functionality. Open ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab2.tsx")," then import ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," from React and ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPhoto")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePhotoGallery")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useState } from 'react';\nimport { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';\n// other imports\n")),(0,r.kt)("p",null,"Next, reference the ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePhoto")," function, which we'll create soon:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { photos, takePhoto, deletePhoto } = usePhotoGallery();\n")),(0,r.kt)("p",null,"Next, add a state value to store information about the photo to delete:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();\n")),(0,r.kt)("p",null,"When a user clicks on an image, we will show the action sheet by changing the state value to the photo. Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"<IonImg>")," element to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />\n")),(0,r.kt)("p",null,"Next, add an ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/action-sheet"},"IonActionSheet")," dialog with the option to either delete the selected photo or cancel (close) the dialog. We will set the isOpen property based on if photoToDelete has a value or not."),(0,r.kt)("p",null,"In the JSX, put the following component before the closing ",(0,r.kt)("inlineCode",{parentName:"p"},"</IonContent>")," tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<IonActionSheet\n  isOpen={!!photoToDelete}\n  buttons={[\n    {\n      text: 'Delete',\n      role: 'destructive',\n      icon: trash,\n      handler: () => {\n        if (photoToDelete) {\n          deletePhoto(photoToDelete);\n          setPhotoToDelete(undefined);\n        }\n      },\n    },\n    {\n      text: 'Cancel',\n      icon: close,\n      role: 'cancel',\n    },\n  ]}\n  onDidDismiss={() => setPhotoToDelete(undefined)}\n/>\n")),(0,r.kt)("p",null,"Above, we added two options: ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete")," that calls ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePhoto")," function (to be added next) and ",(0,r.kt)("inlineCode",{parentName:"p"},"Cancel"),", which when given the role of \u201ccancel\u201d will automatically close the action sheet. It's also important to set the onDidDismiss function and set our photoToDelete back to undefined when the modal goes away. That way, when another image is clicked, the action sheet notices the change in the value of photoToDelete."),(0,r.kt)("p",null,"Next, we need to implement the deletePhoto method that will come from the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePhotoGallery")," hook. Open the file and paste in the following function in the hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const deletePhoto = async (photo: UserPhoto) => {\n  // Remove this photo from the Photos reference data array\n  const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);\n\n  // Update photos array cache by overwriting the existing photo array\n  Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });\n\n  // delete photo file from filesystem\n  const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);\n  await Filesystem.deleteFile({\n    path: filename,\n    directory: Directory.Data,\n  });\n  setPhotos(newPhotos);\n};\n")),(0,r.kt)("p",null,"The selected photo is removed from the Photos array first. Then, we use the Capacitor Preferences API to update the cached version of the Photos array. Finally, we delete the actual photo file itself using the Filesystem API."),(0,r.kt)("p",null,"Make sure to return the ",(0,r.kt)("inlineCode",{parentName:"p"},"deletePhoto")," function so it is as a part of the hook API that we expose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"return {\n  deletePhoto,\n  photos,\n  takePhoto,\n};\n")),(0,r.kt)("p",null,"Save this file, then tap on a photo again and choose the \u201cDelete\u201d option. This time, the photo is deleted! Implemented much faster using Live Reload. \ud83d\udcaa"),(0,r.kt)("h2",{id:"whats-next"},"What\u2019s Next?"),(0,r.kt)("p",null,"Congratulations! You created a complete cross-platform Photo Gallery app that runs on the web, iOS, and Android."),(0,r.kt)("p",null,"There are many paths to follow from here. Try adding another ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/components"},"Ionic UI component")," to the app, or more ",(0,r.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis"},"native functionality"),". The sky\u2019s the limit."),(0,r.kt)("p",null,"Happy app building! \ud83d\udc99"))}d.isMDXComponent=!0}}]);