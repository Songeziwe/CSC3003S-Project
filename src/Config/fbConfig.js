import firebase from 'firebase/app';
import 'firebase/firestore'; // for database
import 'firebase/auth';      // for authentication

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAHdGiTD4XXgazQAlW46-gOhmYeBNzG1NE",
    authDomain: "capstone-e0828.firebaseapp.com",
    databaseURL: "https://capstone-e0828.firebaseio.com",
    projectId: "capstone-e0828",
    storageBucket: "",
    messagingSenderId: "672616012247",
    appId: "1:672616012247:web:fb5e92b3157c64a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

   export default firebase;