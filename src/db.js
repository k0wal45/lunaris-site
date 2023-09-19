// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQsPTVsOyDB0oNTCe7Tnz3cW6httMOW-M",
  authDomain: "lunarisweb-875a8.firebaseapp.com",
  projectId: "lunarisweb-875a8",
  storageBucket: "lunarisweb-875a8.appspot.com",
  messagingSenderId: "897975667194",
  appId: "1:897975667194:web:98a879b4c5dfcbce4c3c43",
  measurementId: "G-PEXBZXKXER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()