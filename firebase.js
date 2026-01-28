// js/firebase.js

// Firebase config (WEB APP - CDN)
const firebaseConfig = {
  apiKey: "AIzaSyD9kwIwoIM1vKBx5KUZKj4V55TuV3EVm-A",
  authDomain: "xpenditia.firebaseapp.com",
  projectId: "xpenditia",
  storageBucket: "xpenditia.appspot.com",
  messagingSenderId: "765558500051",
  appId: "1:765558500051:web:5dee5a10add207d3260226"
};

// Initialize Firebase (CDN COMPAT)
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();
