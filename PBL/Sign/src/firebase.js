// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAdxBZWVchFsvMdL_S08I1Z7k4eQRzfQnU",
  authDomain: "auth-final-56d49.firebaseapp.com",
  projectId: "auth-final-56d49",
  storageBucket: "auth-final-56d49.appspot.com",
  messagingSenderId: "630084629309",
  appId: "1:630084629309:web:51dc88de2c0c2565704b54"
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const auth = getAuth(app);
export default app