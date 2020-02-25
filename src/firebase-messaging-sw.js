// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyACWNht9ZmZIa0LhWf0hmgMtENnvt8FuCk",
  authDomain: "twita-dev.firebaseapp.com",
  databaseURL: "https://twita-dev.firebaseio.com",
  projectId: "twita-dev",
  storageBucket: "twita-dev.appspot.com",
  messagingSenderId: "36636702",
  appId: "1:36636702:web:1f7fb36f9111d719acc60f",
  measurementId: "G-1LWSDK596J"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
