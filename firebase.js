// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJaGZsV442AzeUrtGcDiaigaNTmmUVI2k",
  authDomain: "redux-tutorial-846ae.firebaseapp.com",
  projectId: "redux-tutorial-846ae",
  storageBucket: "redux-tutorial-846ae.appspot.com",
  messagingSenderId: "1009987276924",
  appId: "1:1009987276924:web:e7cfef36ab9bea38e439f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
