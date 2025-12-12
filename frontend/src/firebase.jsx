// src/firebase.js
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCWWM4azKs1LLOvAi69RXtfA65IAjYtUo",
  authDomain: "studio-respect-wedding.firebaseapp.com",
  projectId: "studio-respect-wedding",
  storageBucket: "studio-respect-wedding.firebasestorage.app",
  messagingSenderId: "310863191967",
  appId: "1:310863191967:web:c0bfc11d8852da7830a7aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
