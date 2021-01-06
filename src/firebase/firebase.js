import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBLqGPZaNUF9rT9Ty0PIUOhE6XZFRvwW7U",
    authDomain: "react-auth-project-6cfdf.firebaseapp.com",
    projectId: "react-auth-project-6cfdf",
    storageBucket: "react-auth-project-6cfdf.appspot.com",
    messagingSenderId: "362953469119",
    appId: "1:362953469119:web:0ecf49104b0416ddf56a0a",
    measurementId: "G-VQQ5S957J3"
  });
  
  export default firebaseConfig;