// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXekmO8s4_BF2gG5EhwpDG1r5p7k-eW-c",
  authDomain: "vite-contact-454e4.firebaseapp.com",
  projectId: "vite-contact-454e4",
  storageBucket: "vite-contact-454e4.firebasestorage.app",
  messagingSenderId: "922326547258",
  appId: "1:922326547258:web:28fafbc2394cbe372a6e03",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
