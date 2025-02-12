// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import exp from "constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "recipe-app-af323.firebaseapp.com",
  projectId: "recipe-app-af323",
  storageBucket: "recipe-app-af323.firebasestorage.app",
  messagingSenderId: "52072591501",
  appId: "1:52072591501:web:161a01be27ba0a8ab9f2c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
