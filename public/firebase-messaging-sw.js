const self = this.self
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js");

// const importScripts = this.importScripts


const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBPiwsksOqh491cs7P3qUKGwW-Ip6ubUFY",
    authDomain: "instagram-clone-styledcomps.firebaseapp.com",
    projectId: "instagram-clone-styledcomps",
    storageBucket: "instagram-clone-styledcomps.appspot.com",
    messagingSenderId: "53951144642",
    appId: "1:53951144642:web:884b514d65ae0afc7a915b",
    measurementId: ""
  };
    
  // Initialize the firebase in the service worker.
  firebase.initializeApp(FIREBASE_CONFIG);
  firebase.messaging().getToken()

//   const initMessaging = 
//   initMessaging.getToken()

  self.addEventListener('push', function (event) {
    var data = event.data.json();
    
    const title = data.Title;
    // data.Data.actions = data.Actions;
    const options = {
      body: data.Message,
      data: data.Data
    };
    event.waitUntil(self.registration.showNotification(title, options));
  });
    
  self.addEventListener('notificationclick', function (event) {});
    
  self.addEventListener('notificationclose', function (event) {});