import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdxBZWVchFsvMdL_S08I1Z7k4eQRzfQnU",
  authDomain: "auth-final-56d49.firebaseapp.com",
  projectId: "auth-final-56d49",
  storageBucket: "auth-final-56d49.appspot.com",
  messagingSenderId: "630084629309",
  appId: "1:630084629309:web:51dc88de2c0c2565704b54"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
