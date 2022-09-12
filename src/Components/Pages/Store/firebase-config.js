// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdsMFf1cXhsJ0R2RpH61E29HaG0-eeSw0",
  authDomain: "netflix-app-clone-96d49.firebaseapp.com",
  projectId: "netflix-app-clone-96d49",
  storageBucket: "netflix-app-clone-96d49.appspot.com",
  messagingSenderId: "368603656922",
  appId: "1:368603656922:web:ae1e343bb6694b0b22abe3",
  measurementId: "G-FD1MM0PY1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
