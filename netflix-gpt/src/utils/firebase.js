// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhRWM8hyKsAhm0Izw9WytXdvKg9MFCDjk",
  authDomain: "netflixgpt-11d30.firebaseapp.com",
  projectId: "netflixgpt-11d30",
  storageBucket: "netflixgpt-11d30.appspot.com",
  messagingSenderId: "833841658943",
  appId: "1:833841658943:web:467d9ec6bc753946e60c8a",
  measurementId: "G-871Y9MNGMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);