// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFE6MOsxUzsgWyb500i_YERLUGG1VBdtw",
  authDomain: "recipe-finder-alx.firebaseapp.com",
  projectId: "recipe-finder-alx",
  storageBucket: "recipe-finder-alx.firebasestorage.app",
  messagingSenderId: "747804673023",
  appId: "1:747804673023:web:b3c46032385f9aafb25dca",
  measurementId: "G-1TKNZSVF66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  // Correct the variable name here
const auth = getAuth(app);  // Correct variable name to 'auth'

export { auth };  // Correct the export as 'auth'
