// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-446d4.firebaseapp.com",
  projectId: "next-blog-446d4",
  storageBucket: "next-blog-446d4.firebasestorage.app",
  messagingSenderId: "374207300270",
  appId: "1:374207300270:web:5a34ea191031b432fbe33f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);