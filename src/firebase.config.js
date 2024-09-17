// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKL8lXG33yrLX-UO4uqiUtoFYT8I31IKE",
  authDomain: "mren-book-inventory.firebaseapp.com",
  projectId: "mren-book-inventory",
  storageBucket: "mren-book-inventory.appspot.com",
  messagingSenderId: "622097791357",
  appId: "1:622097791357:web:f5f2cdcc372397bb983414",
  measurementId: "G-5EFTH0NYMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;