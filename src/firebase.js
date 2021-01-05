import firebase from "firebase/app";
import "firebase/auth";

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

  // https://michaelburrows.hashnode.dev/react-user-registration-and-authentication-using-firebase-ckhmqsml2041e9ms18a3hht2k
  // https://console.firebase.google.com/project/react-auth-project-6cfdf/settings/general/web:YWUxYzJmOTMtNjZmZC00NGJmLWJhYWUtMDg2YTE4ZmY4YjVm