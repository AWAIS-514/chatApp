

import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/database';
import 'firebase/storage';

 
  var firebaseConfig = {
    apiKey: "AIzaSyDTmcV6HVx5LSYXpFj263Hry6ZbkUGtcC8",
    authDomain: "chat-app-redux-de726.firebaseapp.com",
    databaseURL: "https://chat-app-redux-de726.firebaseio.com",
    projectId: "chat-app-redux-de726",
    storageBucket: "chat-app-redux-de726.appspot.com",
    messagingSenderId: "534550736365",
    appId: "1:534550736365:web:fe6b43d9f57d5e0c9a0be4",
    measurementId: "G-3J7Z8C6YZR"
  };
 
  firebase.initializeApp(firebaseConfig);
  export default firebase;
  
