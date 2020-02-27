// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
import {environment} from "./environments/environment";
import * as firebase from "firebase";

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp(environment.firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
