import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
 

    apiKey: "AIzaSyAdxBZWVchFsvMdL_S08I1Z7k4eQRzfQnU",
    authDomain: "auth-final-56d49.firebaseapp.com",
    databaseURL: "https://auth-final-56d49-default-rtdb.firebaseio.com",
    projectId: "auth-final-56d49",
    storageBucket: "auth-final-56d49.appspot.com",
    messagingSenderId: "630084629309",
    appId: "1:630084629309:web:51dc88de2c0c2565704b54"
  
  
  
});

var db = firebaseApp.firestore();

export { db };