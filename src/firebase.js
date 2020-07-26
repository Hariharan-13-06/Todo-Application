import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-bH4kO46B_rBGfmgyI2ehxBLoRdaiVaA",
  authDomain: "todo-ddaeb.firebaseapp.com",
  databaseURL: "https://todo-ddaeb.firebaseio.com",
  projectId: "todo-ddaeb",
  storageBucket: "todo-ddaeb.appspot.com",
  messagingSenderId: "714624415799",
  appId: "1:714624415799:web:cb884444ec177170ce27b2",
  measurementId: "G-6DYB114NZE"
  });

  const db=firebaseApp.firestore();
  
  export default db